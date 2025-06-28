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
    if (percentage < 34) return 'color-black-sr';
    if (percentage < 67) return 'color-red-sr';
    return 'color-gold-sr';
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
        item.className = 'category-stat-item';
        item.innerHTML = `
            <span class="category-stat-text">${modeInfo.name}: ${masteredCount} / ${totalItemsInSet}</span>
            <div class="category-progress-bar-bg">
                <div class="category-progress-bar-fg ${colorClass}" style="width: ${percentage}%;"></div>
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
    dom.correctInRoundPracticeEl.textContent = state.correctInRound.toString();
    dom.attemptedInRoundPracticeEl.textContent = state.attemptedInRound.toString();
    
    const accuracy = state.attemptedInRound > 0 
        ? (state.correctInRound / state.attemptedInRound) * 100 
        : 0;
    
    dom.accuracyInRoundPracticeEl.textContent = `${accuracy.toFixed(0)}%`;
    
    // Farbkodierung für Genauigkeit
    if (accuracy >= 80) {
        dom.accuracyInRoundPracticeEl.className = 'text-green-600 font-semibold';
    } else if (accuracy >= 60) {
        dom.accuracyInRoundPracticeEl.className = 'text-yellow-600 font-semibold';
    } else {
        dom.accuracyInRoundPracticeEl.className = 'text-red-600 font-semibold';
    }
    
    updateCategoryStats(dom, state, learningModes);
}

/**
 * Aktualisiert die Test-Statistiken während eines Tests.
 */
export function updateTestStats(dom: DOMElements, state: TrainerState): void {
    const correct = state.correctInRound;
    const total = state.shuffledVocabForMode.length;
    const attempted = state.attemptedInRound;
    const progress = calculateProgressPercentage(attempted, total);
    const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;

    // Fortschrittsbalken
    dom.testProgressEl.style.width = `${progress}%`;
    dom.testProgressEl.classList.remove('color-black-sr', 'color-red-sr', 'color-gold-sr');
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

    // Text-Updates
    dom.correctInRoundTestEl.textContent = correct.toString();
    dom.attemptedInRoundTestEl.textContent = `${attempted} / ${total}`;
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