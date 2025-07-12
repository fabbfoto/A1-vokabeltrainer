// ui/statistics.ts
// Statistik-Berechnungen und UI-Updates

import type { DOMElements } from '../shared/types/ui';
import type { TrainerState, LearningModes } from '../shared/types/trainer';

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
        
        const errorCount = state.progress.wordsToRepeatByMode[mode as import('../shared/types/trainer').ModeId]?.size || 0;
        
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
            if (state.training.isRepeatSessionActive && state.training.currentMode === mode) {
                state.training.isRepeatSessionActive = false;
            
            }
        } else {
            // Button aktivieren
            repeatButton.classList.remove('opacity-50', 'cursor-not-allowed');
            repeatButton.removeAttribute('disabled');
            
            // Standard-Styling wenn nicht aktiv
            if (!state.training.isRepeatSessionActive || state.training.currentMode !== mode) {
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
    const totalItemsInSet = state.training.currentVocabularySet.length;
    if (totalItemsInSet === 0) return;

    const title = document.createElement('p');
    title.className = 'text-xs text-gray-500 text-center mb-1';
    title.textContent = 'Fortschritt pro Übungsmodus:';
    dom.categoryStatsContainerEl.appendChild(title);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'text-xs text-gray-600 space-y-1';
    
    Object.keys(learningModes).forEach(modeId => {
        const modeInfo = learningModes[modeId];
        const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
        const progressData = state.progress.globalProgress[progressKey]?.[modeId as import('../shared/types/trainer').ModeId];
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

}

/**
 * Aktualisiert die Haupt-Statistiken in der Übungsrunde.
 */
export function updatePracticeStats(dom: DOMElements, state: TrainerState, learningModes: LearningModes): void {
    if (dom.correctInRoundPracticeEl) {
        dom.correctInRoundPracticeEl.textContent = state.training.correctInCurrentRound.toString();
    }
    if (dom.attemptedInRoundPracticeEl) {
        dom.attemptedInRoundPracticeEl.textContent = state.training.attemptedInCurrentRound.toString();
    }
    
    const accuracy = state.training.attemptedInCurrentRound > 0 
        ? (state.training.correctInCurrentRound / state.training.attemptedInCurrentRound) * 100 
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
    const correct = state.training.correctInCurrentRound;
    const total = state.training.shuffledWordsForMode.length;
    const attempted = state.training.attemptedInCurrentRound;
    const progress = calculateProgressPercentage(attempted, total);

    // Fortschrittsbalken
    if (dom.testProgressEl) {
        if (!dom.testProgressEl.classList.contains('transition-all')) {
            dom.testProgressEl.className = 'h-full transition-all duration-500 ease-in-out';
        }
        setProgressBarWidth(dom.testProgressEl, progress);
        setProgressBarColor(dom.testProgressEl, progress, 'german');
    }

    // Text-Update für Fortschritt
    dom.correctInRoundTestEl.textContent = `${attempted} / ${total}`;

    // Verstecke alle Genauigkeits-Elemente im Test-Modus
    const separator = document.getElementById('test-accuracy-separator');
    const paragraph = document.getElementById('test-accuracy-paragraph');
    const container = document.getElementById('test-accuracy-container');
    
    if (separator) separator.style.display = 'none';
    if (paragraph) paragraph.style.display = 'none';
    if (container) container.style.display = 'none';
}

