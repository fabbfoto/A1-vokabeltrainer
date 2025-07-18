// packages/trainer-themen/trainer.ts
// TypeScript-Version der Navigation-Funktionen

import type { VocabularyStructure } from '../../src/core/types/vocabulary';

// DOM-Elemente
const navigationContainerEl = document.getElementById('navigation-container');
const navigationTitleEl = document.getElementById('navigation-title');
const backToMainTopicsButton = document.getElementById('back-to-main-topics');
const testSelectionModalEl = document.getElementById('test-selection-modal');

// State-Interface
interface TrainerState {
    currentMainTopic: string | null;
    currentSubTopic: string | null;
    globalProgress: Record<string, Record<string, string[]>>;
}

// State-Objekt
const state: TrainerState = {
    currentMainTopic: null,
    currentSubTopic: null,
    globalProgress: {}
};

// Vokabular importieren (wird von außen geladen)
let vokabular: VocabularyStructure = {} as VocabularyStructure;

// Hilfsfunktionen
function showMessage(message: string, type: 'info' | 'error' | 'warning' = 'info'): void {

    // Hier könnte eine UI-Meldung angezeigt werden
}

// ========== FEHLERZÄHLER-RESET FUNKTION ==========
function resetAllErrorCounts(): void {

    
    try {
        // 1. State zurücksetzen
        state.globalProgress = {};
        state.currentMainTopic = null;
        state.currentSubTopic = null;
        
        // 2. localStorage zurücksetzen
        const localStorageKeys = [
            'a1ThemenProgress',
            'a1LastTestScores',
            'trainer-words-to-repeat',
            'a1Progress'
        ];
        
        localStorageKeys.forEach(key => {
            localStorage.removeItem(key);
    
        });
        
        // 3. Firebase zurücksetzen (falls verfügbar)
        const windowWithFirebase = window as unknown as { 
            firebaseSyncService?: { 
                saveProgress: (data: Record<string, unknown>) => void;
                saveTestScores: (data: Record<string, unknown>) => void;
            } 
        };
        if (windowWithFirebase.firebaseSyncService) {
            // Leere Objekte an Firebase senden
            const emptyProgress: Record<string, unknown> = {};
            const emptyTestScores: Record<string, unknown> = {};
            
            windowWithFirebase.firebaseSyncService.saveProgress(emptyProgress);
            windowWithFirebase.firebaseSyncService.saveTestScores(emptyTestScores);
    
        }
        
        // 4. Sync-Service zurücksetzen (falls verfügbar)
        const windowWithSync = window as unknown as { 
            syncService?: { 
                saveProgress: (data: Record<string, unknown>) => void;
            } 
        };
        if (windowWithSync.syncService) {
            windowWithSync.syncService.saveProgress({});
        
        }
        
    
        
    } catch (error) {
        console.error('❌ Fehler beim Zurücksetzen der Fehlerzähler:', error);
    }
}

function updateTestModeProgressBars(): void {

    // Implementierung für Test-Fortschritt
}

function startTraining(subTopic: string): void {

    
    // Fehlerzähler zurücksetzen vor dem Start
    resetAllErrorCounts();
    
    state.currentSubTopic = subTopic;
    // Hier würde das Training gestartet werden
}

// Navigation-Funktionen
function displayMainTopics(): void {

    
    if (!navigationTitleEl || !backToMainTopicsButton || !navigationContainerEl) {
        console.error('[displayMainTopics] DOM-Elemente nicht gefunden');
        return;
    }
    
    navigationTitleEl.textContent = 'Themen';
    backToMainTopicsButton.classList.add('hidden');
    navigationContainerEl.innerHTML = '';
    
    Object.keys(vokabular).forEach(mainTopicName => {
        const button = document.createElement('button');
        button.className = 'wortgruppe-button rounded-lg p-4 m-2 bg-gray-100 hover:bg-gray-200';
        button.textContent = mainTopicName;
        button.dataset.mainTopic = mainTopicName;
        navigationContainerEl.appendChild(button);
    });
    
    // Test-Button
    const testButton = document.createElement('button');
    testButton.id = 'start-test-mode-btn';
    testButton.className = 'wortgruppe-button rounded-lg p-4 m-2 bg-blue-100 hover:bg-blue-200';
    testButton.textContent = 'Gesamttest starten';
    navigationContainerEl.appendChild(testButton);
}

function displaySubTopics(mainTopicName: string): void {

    
    if (!vokabular[mainTopicName]) {
        console.error('Hauptthema nicht gefunden:', mainTopicName);
        showMessage(`Thema "${mainTopicName}" nicht gefunden!`, 'error');
        return;
    }
    
    if (!navigationTitleEl || !backToMainTopicsButton || !navigationContainerEl) {
        console.error('[displaySubTopics] DOM-Elemente nicht gefunden');
        return;
    }
    
    state.currentMainTopic = mainTopicName;
    navigationTitleEl.textContent = mainTopicName;
    backToMainTopicsButton.classList.remove('hidden');
    navigationContainerEl.innerHTML = '';
    
    Object.keys(vokabular[mainTopicName]).forEach(subTopicName => {
        const button = document.createElement('button');
        button.className = 'wortgruppe-button rounded-lg p-4 m-2 bg-gray-100 hover:bg-gray-200';
        button.textContent = subTopicName;
        button.dataset.subTopic = subTopicName;
        navigationContainerEl.appendChild(button);
    });
}

function handleNavigation(event: Event): void {
    const target = event.target as HTMLElement;

    
    const mainTopicButton = target.closest('[data-main-topic]') as HTMLElement;
    const subTopicButton = target.closest('[data-sub-topic]') as HTMLElement;
    const testButton = target.closest('#start-test-mode-btn') as HTMLElement;

    if (mainTopicButton) {
        const topic = mainTopicButton.dataset.mainTopic;
        if (topic) {
    
            displaySubTopics(topic);
        }
    } else if (subTopicButton) {
        const subTopic = subTopicButton.dataset.subTopic;
        if (subTopic) {
    
            startTraining(subTopic);
        }
    } else if (testButton) {

        updateTestModeProgressBars();
        if (testSelectionModalEl) {
            testSelectionModalEl.classList.remove('hidden');
        }
    }
}

// Initialisierung
function init(): void {

    
    // Event-Listener hinzufügen
    if (navigationContainerEl) {
        navigationContainerEl.addEventListener('click', handleNavigation);
    
    } else {
        console.error('[init] navigationContainerEl nicht gefunden');
    }
    
    // Back-Button Event-Listener
    if (backToMainTopicsButton) {
        backToMainTopicsButton.addEventListener('click', () => {
    
            displayMainTopics();
        });
    }
    
    // Initiale Anzeige der Hauptthemen
    displayMainTopics();
    

}

// Interface für den globalen Export
interface TrainerJS {
    displayMainTopics: () => void;
    displaySubTopics: (mainTopicName: string) => void;
    handleNavigation: (event: Event) => void;
    init: () => void;
    setVokabular: (vocab: VocabularyStructure) => void;
    resetAllErrorCounts: () => void;
}

// Export für externe Verwendung
(window as unknown as { trainerJS: TrainerJS }).trainerJS = {
    displayMainTopics,
    displaySubTopics,
    handleNavigation,
    init,
    setVokabular: (vocab: VocabularyStructure) => { vokabular = vocab; },
    resetAllErrorCounts // Neue Funktion exportieren
} as TrainerJS;

// Automatische Initialisierung wenn DOM bereit ist
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Globale Funktionen für externe Aufrufe
(window as unknown as { resetAllErrorCounts: typeof resetAllErrorCounts }).resetAllErrorCounts = resetAllErrorCounts; 