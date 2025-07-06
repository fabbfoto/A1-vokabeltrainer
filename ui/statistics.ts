// ui/statistics.ts
// Statistik und Fortschritts-Anzeige Funktionen

// Type imports (temporär any, später aus shared/types)
type DOMElements = any;
type TrainerState = any;
type LearningModes = any;

/**
 * Entfernt alle Farbklassen von einem Element
 */
function removeColorClasses(element: HTMLElement): void {
    const colorClasses = [
        'bg-black', 'bg-red-600', 'bg-yellow-400',
        'bg-red-500', 'bg-yellow-500', 'bg-green-500',
        'bg-gray-300', 'bg-gray-200'
    ];
    element.classList.remove(...colorClasses);
}

/**
 * Setzt die Breite eines Fortschrittsbalkens
 */
function setProgressBarWidth(element: HTMLElement, percentage: number): void {
    // Inline-Style für dynamische Breite
    element.style.width = `${percentage}%`;
}

/**
 * Setzt die Farbe eines Fortschrittsbalkens mit Tailwind-Klassen
 */
function setProgressBarColor(element: HTMLElement, percentage: number, type: 'german' | 'standard' = 'standard'): void {
    removeColorClasses(element);
    
    if (type === 'german') {
        // Deutschland-Farben
        if (percentage < 34) {
            element.classList.add('bg-black');
        } else if (percentage < 67) {
            element.classList.add('bg-red-600');
        } else {
            element.classList.add('bg-yellow-400');
        }
    } else {
        // Standard-Farben (rot/gelb/grün)
        if (percentage < 60) {
            element.classList.add('bg-red-500');
        } else if (percentage < 80) {
            element.classList.add('bg-yellow-500');
        } else {
            element.classList.add('bg-green-500');
        }
    }
}

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
        if (!repeatButton) return;
        
        const countSpan = repeatButton.querySelector('.count-display');
        if (!countSpan) {
            console.warn(`[updateErrorCounts] Kein count-display in ${mode} gefunden`);
            return;
        }
        
        const errorCount = state.wordsToRepeatByMode[mode]?.size || 0;
        
        // Immer die Zahl anzeigen
        countSpan.textContent = errorCount.toString();
        
        if (errorCount === 0) {
            // Button deaktivieren
            repeatButton.classList.add('opacity-50', 'cursor-not-allowed');
            repeatButton.setAttribute('disabled', 'true');
            
            // WICHTIG: Stelle sicher, dass Button NICHT mehr rot ist
            repeatButton.classList.remove('bg-red-600', 'text-white', 'hover:bg-red-700');
            repeatButton.classList.add('bg-red-100', 'text-red-500');
            
            // Falls das der aktive Wiederholungsmodus war
            if (state.isRepeatSessionActive && state.currentMode === mode) {
                state.isRepeatSessionActive = false;
                console.log('[updateErrorCounts] Wiederholungs-Modus beendet');
            }
        } else {
            // Button aktivieren
            repeatButton.classList.remove('opacity-50', 'cursor-not-allowed');
            repeatButton.removeAttribute('disabled');
            
            // Standard-Styling wenn nicht aktiv
            if (!state.isRepeatSessionActive || state.currentMode !== mode) {
                repeatButton.classList.remove('bg-red-600', 'text-white', 'hover:bg-red-700');
                repeatButton.classList.add('bg-red-100', 'text-red-500', 'hover:enabled:bg-red-200');
            }
        }
    });
}

/**
 * Aktualisiert die detaillierte Statistik-Ansicht für die aktuelle Kategorie.
 */
export function updateCategoryStats(dom: DOMElements, state: TrainerState, learningModes: LearningModes): void {
    if (!dom.categoryStatsContainerEl) {
        console.error('[updateCategoryStats] Container nicht gefunden!');
        return;
    }
    
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
        const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
        const progressData = state.globalProgress[progressKey]?.[modeId];
        const masteredCount = progressData?.size || 0;
        const percentage = calculateProgressPercentage(masteredCount, totalItemsInSet);

        // Container für eine Zeile
        const item = document.createElement('div');
        item.className = 'flex justify-between items-center gap-2';
        
        // Text-Label
        const label = document.createElement('span');
        label.className = 'text-xs text-gray-600';
        label.textContent = `${modeInfo.name}: ${masteredCount} / ${totalItemsInSet}`;
        
        // Balken-Container (grauer Hintergrund)
        const barContainer = document.createElement('div');
        barContainer.className = 'bg-gray-200 rounded-lg overflow-hidden h-3 w-24';
        
        // Innerer Balken
        const bar = document.createElement('div');
        bar.className = 'h-full transition-all duration-300 ease-in-out';
        
        // Setze Breite und Farbe
        setProgressBarWidth(bar, percentage);
        setProgressBarColor(bar, percentage, 'german');
        
        // Zusammenbauen
        barContainer.appendChild(bar);
        item.appendChild(label);
        item.appendChild(barContainer);
        itemsContainer.appendChild(item);
    });
    
    dom.categoryStatsContainerEl.appendChild(itemsContainer);
    console.log('[updateCategoryStats] Aktualisierung abgeschlossen');
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
        // Stelle sicher, dass alle Tailwind-Klassen gesetzt sind
        if (!dom.accuracyInRoundPracticeEl.classList.contains('transition-all')) {
            dom.accuracyInRoundPracticeEl.className = 'h-full transition-all duration-500 ease-in-out';
        }
        setProgressBarWidth(dom.accuracyInRoundPracticeEl, accuracy);
        setProgressBarColor(dom.accuracyInRoundPracticeEl, accuracy, 'standard');
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
    if (dom.testProgressEl) {
        // Stelle sicher, dass alle Tailwind-Klassen gesetzt sind
        if (!dom.testProgressEl.classList.contains('transition-all')) {
            dom.testProgressEl.className = 'h-full transition-all duration-500 ease-in-out';
        }
        
        setProgressBarWidth(dom.testProgressEl, progress);
        setProgressBarColor(dom.testProgressEl, progress, 'german');
    }

    // Genauigkeitsbalken
    if (dom.testAccuracyEl) {
        // Stelle sicher, dass alle Tailwind-Klassen gesetzt sind
        if (!dom.testAccuracyEl.classList.contains('transition-all')) {
            dom.testAccuracyEl.className = 'h-full transition-all duration-500 ease-in-out';
        }
        
        setProgressBarWidth(dom.testAccuracyEl, accuracy);
        setProgressBarColor(dom.testAccuracyEl, accuracy, 'standard');
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