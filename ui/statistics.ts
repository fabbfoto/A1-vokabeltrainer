// ui/statistics.ts
// Statistik und Fortschritts-Anzeige Funktionen

// Type imports (temporär any, später aus shared/types)
type DOMElements = any;
type TrainerState = any;
type LearningModes = any;

/**
 * Berechnet den Fortschritt in Prozent.
 */
export function calculateProgressPercentage(completed: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
}

/**
 * Gibt die Farb-CSS-Klasse basierend auf dem Fortschritt zurück (Deutschland-Farben).
 */
export function getProgressColorClass(completed: number, total: number): string {
    const percentage = calculateProgressPercentage(completed, total);
    if (percentage < 34) return 'bg-de-black';
    if (percentage < 67) return 'bg-de-red';
    return 'bg-de-gold';
}

/**
 * Aktualisiert die Fehlerzähler auf den Wiederholungs-Buttons.
 */
export function updateErrorCounts(dom: DOMElements, state: TrainerState, learningModes: LearningModes): void {
    Object.keys(learningModes).forEach(mode => {
        const repeatButton = document.getElementById(`mode-repeat-${mode}`);
        if (repeatButton) {
            const countSpan = repeatButton.querySelector('.count-display');
            const errorCount = state.wordsToRepeatByMode[mode]?.size || 0;
            if (countSpan) {
                countSpan.textContent = errorCount.toString();
            }
            (repeatButton as HTMLButtonElement).disabled = errorCount === 0;
        }
    });
}

/**
 * Aktualisiert die detaillierte Statistik-Ansicht für die aktuelle Kategorie.
 */
export function updateCategoryStats(dom: DOMElements, state: TrainerState, learningModes: LearningModes): void {
    dom.categoryStatsContainerEl.innerHTML = '';
    const totalItemsInSet = state.currentVocabularySet.length;
    if (totalItemsInSet === 0) return;

    const title = document.createElement('p');
    title.className = 'text-xs text-gray-500 text-center mb-1';
    title.textContent = 'Fortschritt pro Übungsmodus:';
    dom.categoryStatsContainerEl.appendChild(title);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'text-xs text-gray-600 space-y-1';
    
    Object.keys(learningModes).forEach(modeId => {
        const modeInfo = learningModes[modeId];
        
        // Verwende den korrekten Progress-Schlüssel für Themen-Trainer
        const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
        const progressData = state.globalProgress[progressKey]?.[modeId];
        const masteredCount = progressData?.size || 0;
        const percentage = calculateProgressPercentage(masteredCount, totalItemsInSet);

        // Verwende Farbschema-System
        const colorClass = getProgressColorClass(masteredCount, totalItemsInSet);

        const item = document.createElement('div');
        item.className = 'flex justify-between items-center';
        item.innerHTML = `
            <span class="text-xs text-gray-600">${modeInfo.name}: ${masteredCount} / ${totalItemsInSet}</span>
            <div class="bg-gray-200 rounded-lg overflow-hidden h-3 w-24">
                <div class="h-full transition-all duration-300 ${colorClass}" style="width: ${percentage}%;"></div>
            </div>
        `;
        itemsContainer.appendChild(item);
    });
    dom.categoryStatsContainerEl.appendChild(itemsContainer);
}

/**
 * Aktualisiert die Haupt-Statistiken in der Übungsrunde.
 */
export function updatePracticeStats(dom: DOMElements, state: TrainerState, learningModes: LearningModes): void {
    if (dom.correctInRoundPracticeEl) {
        dom.correctInRoundPracticeEl.textContent = state.correctInCurrentRound.toString();
    }
    if (dom.attemptedInRoundPracticeEl) {
        dom.attemptedInRoundPracticeEl.textContent = state.attemptedInCurrentRound.toString();
    }
    
    const accuracy = state.attemptedInCurrentRound > 0 
        ? (state.correctInCurrentRound / state.attemptedInCurrentRound) * 100 
        : 0;
    
    if (dom.accuracyInRoundPracticeEl) {
        dom.accuracyInRoundPracticeEl.style.width = `${accuracy}%`;
        dom.accuracyInRoundPracticeEl.classList.remove('bg-red-500', 'bg-yellow-500', 'bg-green-500');
        if (accuracy >= 80) {
            dom.accuracyInRoundPracticeEl.classList.add('bg-green-500');
        } else if (accuracy >= 60) {
            dom.accuracyInRoundPracticeEl.classList.add('bg-yellow-500');
        } else {
            dom.accuracyInRoundPracticeEl.classList.add('bg-red-500');
        }
    }
    
    updateCategoryStats(dom, state, learningModes);
}

/**
 * Aktualisiert die Test-Statistiken während eines Tests.
 */
export function updateTestStats(dom: DOMElements, state: TrainerState): void {
    const correct = state.correctInCurrentRound;
    const total = state.shuffledWordsForMode.length;
    const attempted = state.attemptedInCurrentRound;
    const progress = calculateProgressPercentage(attempted, total);
    const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;

    // Fortschrittsbalken
    dom.testProgressEl.style.width = `${progress}%`;
    dom.testProgressEl.classList.remove('bg-de-black', 'bg-de-red', 'bg-de-gold');
    const colorClass = getProgressColorClass(attempted, total);
    dom.testProgressEl.classList.add(colorClass);

    // Genauigkeitsbalken
    dom.testAccuracyEl.style.width = `${accuracy}%`;
    dom.testAccuracyEl.classList.remove('bg-red-500', 'bg-yellow-500', 'bg-green-500');
    if (accuracy >= 80) {
        dom.testAccuracyEl.classList.add('bg-green-500');
    } else if (accuracy >= 60) {
        dom.testAccuracyEl.classList.add('bg-yellow-500');
    } else {
        dom.testAccuracyEl.classList.add('bg-red-500');
    }

    // Text-Updates (beide Elemente zeigen auf test-progress-text)
    dom.correctInRoundTestEl.textContent = `${attempted} / ${total}`;
    dom.accuracyInRoundTestEl.textContent = `${accuracy.toFixed(0)}%`;
    
    // Farbkodierung für Genauigkeit
    if (accuracy >= 80) {
        dom.accuracyInRoundTestEl.className = 'text-green-600 font-bold';
    } else if (accuracy >= 60) {
        dom.accuracyInRoundTestEl.className = 'text-yellow-600 font-bold';
    } else {
        dom.accuracyInRoundTestEl.className = 'text-red-600 font-bold';
    }
}

/**
 * Test-Funktion für Fortschrittsbalken
 */
export function testProgressBars(dom: DOMElements): void {
    console.log('[TEST] Testing progress bars...');
    
    // Test Practice Stats
    if (dom.accuracyInRoundPracticeEl) {
        console.log('[TEST] Setting practice accuracy bar to 50%');
        dom.accuracyInRoundPracticeEl.style.width = '50%';
        dom.accuracyInRoundPracticeEl.classList.remove('bg-red-500', 'bg-yellow-500', 'bg-green-500');
        dom.accuracyInRoundPracticeEl.classList.add('bg-yellow-500');
    } else {
        console.error('[TEST] accuracyInRoundPracticeEl not found!');
    }
    
    // Test Test Stats
    if (dom.testProgressEl) {
        console.log('[TEST] Setting test progress bar to 75%');
        dom.testProgressEl.style.width = '75%';
        dom.testProgressEl.classList.remove('bg-de-black', 'bg-de-red', 'bg-de-gold');
        dom.testProgressEl.classList.add('bg-de-gold');
    } else {
        console.error('[TEST] testProgressEl not found!');
    }
    
    if (dom.testAccuracyEl) {
        console.log('[TEST] Setting test accuracy bar to 90%');
        dom.testAccuracyEl.style.width = '90%';
        dom.testAccuracyEl.classList.remove('bg-red-500', 'bg-yellow-500', 'bg-green-500');
        dom.testAccuracyEl.classList.add('bg-green-500');
    } else {
        console.error('[TEST] testAccuracyEl not found!');
    }
}