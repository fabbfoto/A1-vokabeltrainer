// ui/navigation.ts
// Navigation und Themen-Anzeige Funktionen

import { NavigationEvents } from '../shared/events/navigation-events.js';
import { createTopicButton, createActionButton } from '../shared/styles/button-factory.js';

// Type imports (temporär any, später aus shared/types)
type DOMElements = any;
type TrainerState = any;
type VocabularyStructure = any;
type LearningModes = any;
type UICallbacks = any;

// Hilfsfunktionen (später in statistics.ts verschieben)
function calculateProgressPercentage(completed: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
}

// Hilfsfunktion für Deutschland-Farben bei Fortschrittsbalken
function getProgressColorClass(completed: number, total: number): string {
    const percentage = calculateProgressPercentage(completed, total);

    // Original CSS Farben
    if (percentage < 34) {
        return 'bg-de-black';
    } else if (percentage < 67) {
        return 'bg-de-red';
    } else {
        return 'bg-de-gold';
    }
}

/**
 * Zeigt die Hauptthemen-Übersicht an.
 */
export function displayMainTopics(
    dom: DOMElements,
    state: TrainerState,
    vokabular: VocabularyStructure,
    learningModes: LearningModes
): void {
    NavigationEvents.dispatchRoot();
    
    state.currentMainTopic = null;
    state.currentSubTopic = null;
    dom.navigationViewEl.classList.remove('hidden-view');
    dom.trainerMainViewEl.classList.add('hidden-view');
    dom.navigationTitleEl.textContent = 'Themen';
    dom.backToMainTopicsButton.classList.add('hidden');
    dom.navigationContainerEl.innerHTML = '';
    
    // Grid-Layout für 3 Spalten
    // Grid Layout - 3 Spalten für Desktop, responsive für Mobile
    dom.navigationContainerEl.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';
    
    const numberOfModes = Object.keys(learningModes).length;
    
    // Hauptthemen erstellen - ORIGINAL WORTGRUPPE-BUTTON STYLE
    Object.keys(vokabular).forEach(mainTopicName => {
        
        // Berechne Fortschritt
        let totalWords = 0;
        let totalMastered = 0;
        
        Object.keys(vokabular[mainTopicName]).forEach(subTopicName => {
            const words = vokabular[mainTopicName][subTopicName];
            const progressKey = `${mainTopicName}|${subTopicName}`;
            const progressForKey = state.globalProgress[progressKey] || {};
            
            totalWords += words.length * numberOfModes;
            Object.keys(learningModes).forEach(modeId => {
                const masteredInMode = progressForKey[modeId]?.size || 0;
                totalMastered += masteredInMode;
            });
        });
        
        const percentage = calculateProgressPercentage(totalMastered, totalWords);
        const progressColorClass = getProgressColorClass(totalMastered, totalWords);
        
        // Button wird jetzt durch die zentrale Funktion erstellt
        const button = createTopicButton(mainTopicName, percentage, progressColorClass);

        button.dataset.mainTopic = mainTopicName;
        dom.navigationContainerEl.appendChild(button);
    });
    
    // Globaler Test Button - Original Style
    const globalTestButton = createActionButton('global-test', 'Globaler Test');
    dom.navigationContainerEl.appendChild(globalTestButton);
    
    // Geräte verbinden Button
    const syncButton = createActionButton('sync', 'Geräte verbinden');
    dom.navigationContainerEl.appendChild(syncButton);

    // Copyright nur auf Hauptseite anzeigen
    const existingFooter = dom.navigationViewEl.querySelector('.copyright-footer');
    if (existingFooter) {
        existingFooter.remove();
    }

    const footerDiv = document.createElement('div');
    footerDiv.className = 'copyright-footer mt-8 text-center text-xs text-gray-400';
    footerDiv.innerHTML = `
        <p>© 2025 Frank Burkert - A1 Vokabeltrainer</p>
        <p class="mt-1">Nur für Bildungszwecke · v2.0</p>
    `;
    dom.navigationContainerEl.parentElement.appendChild(footerDiv);
}

/**
 * Zeigt die Unterthemen eines Hauptthemas an.
 * KORRIGIERT: Verwendet jetzt das gleiche 3-Spalten-Layout wie die Hauptthemen
 */
export function displaySubTopics(
    dom: DOMElements,
    state: TrainerState,
    vokabular: VocabularyStructure,
    mainTopicName: string,
    learningModes: LearningModes
): void {
    NavigationEvents.dispatchSub();

    state.currentMainTopic = mainTopicName;
    dom.navigationViewEl.classList.remove('hidden-view');
    dom.trainerMainViewEl.classList.add('hidden-view');
    dom.navigationTitleEl.textContent = mainTopicName;
    dom.backToMainTopicsButton.classList.remove('hidden');
    dom.navigationContainerEl.innerHTML = '';

    // WICHTIG: Gleiche Grid-Layout wie Hauptthemen - 3 Spalten!
    dom.navigationContainerEl.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';

    const subTopics = Object.keys(vokabular[mainTopicName]);
    const numberOfModes = Object.keys(learningModes).length;

    subTopics.forEach(subTopicName => {
        const words = vokabular[mainTopicName][subTopicName];
        const totalPossibleTasks = words.length * numberOfModes;
        const progressKey = `${mainTopicName}|${subTopicName}`;
        const progressForKey = state.globalProgress[progressKey] || {};

        let completedTasks = 0;
        Object.values(progressForKey).forEach((masteredSet: any) => {
            completedTasks += (masteredSet.size || masteredSet.length || 0);
        });

        const percentage = calculateProgressPercentage(completedTasks, totalPossibleTasks);
        const progressColorClass = getProgressColorClass(completedTasks, totalPossibleTasks);

        // Button wird jetzt durch die zentrale Funktion erstellt
        const buttonText = subTopicName.replace(/\//g, '/<br>');
        const button = createTopicButton(buttonText, percentage, progressColorClass);
        
        button.dataset.subTopic = subTopicName;

        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.98)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });

        dom.navigationContainerEl.appendChild(button);
    });

    // Hauptthema-Test Button - überspannt alle 3 Spalten
    const mainTopicTestButton = createActionButton('main-topic-test', `${mainTopicName} Gesamttest`, '(Alle Unterthemen)');
    mainTopicTestButton.dataset.testMainTopicOnly = mainTopicName;
    dom.navigationContainerEl.appendChild(mainTopicTestButton);
}

/**
 * Initialisiert die Navigation-Event-Listener.
 * Nur der Navigation-relevante Teil der ursprünglichen initEventListeners Funktion.
 */
export function initNavigationListeners(
    dom: DOMElements,
    state: TrainerState,
    callbacks: UICallbacks,
    learningModes: LearningModes
): void {
    // Navigation Container Click Handler
    dom.navigationContainerEl.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        const mainTopicButton = target.closest('[data-main-topic]') as HTMLElement;
        const subTopicButton = target.closest('[data-sub-topic]') as HTMLElement;
        const globalTestButton = target.closest('#start-test-mode-btn');
        const mainTopicTestButton = target.closest('[data-test-main-topic-only]') as HTMLElement;

        if (mainTopicButton || subTopicButton) {
            callbacks.handleNavigation(e);
        } else if (globalTestButton) {
            // Trigger test modal (wird in test-modal.ts behandelt)
            const event = new CustomEvent('showTestModal', { 
                detail: { type: 'global', topic: 'Alle Themen' } 
            });
            window.dispatchEvent(event);
        } else if (mainTopicTestButton) {
            const mainTopic = mainTopicTestButton.dataset.testMainTopicOnly;
            // Trigger test modal für Hauptthema
            const event = new CustomEvent('showTestModal', { 
                detail: { type: 'mainTopic', topic: mainTopic } 
            });
            window.dispatchEvent(event);
        }
    });

    // Back to Main Topics Button
    dom.backToMainTopicsButton.addEventListener('click', () => {
        displayMainTopics(dom, state, callbacks.getVokabular(), learningModes);
    });
}