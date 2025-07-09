// packages/trainer-themen/trainer.js
// JavaScript-Version der Navigation-Funktionen

// DOM-Elemente
const navigationContainerEl = document.getElementById('navigation-container');
const navigationTitleEl = document.getElementById('navigation-title');
const backToMainTopicsButton = document.getElementById('back-to-main-topics');
const testSelectionModalEl = document.getElementById('test-selection-modal');

// State-Objekt
const state = {
    currentMainTopic: null,
    currentSubTopic: null,
    globalProgress: {}
};

// Vokabular importieren (wird von außen geladen)
let vokabular = {};

// Hilfsfunktionen
function showMessage(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    // Hier könnte eine UI-Meldung angezeigt werden
}

// ========== FEHLERZÄHLER-RESET FUNKTION ==========
function resetAllErrorCounts() {
    console.log('🔄 Setze alle Fehlerzähler zurück...');
    
    try {
        // 1. State zurücksetzen
        state.globalProgress = {};
        state.currentMainTopic = null;
        state.currentSubTopic = null;
        
        // 2. localStorage zurücksetzen
        const localStorageKeys = [
            'a1ThemenProgress',
            'goetheA1LastTestScores', 
            'trainer-words-to-repeat',
            'goetheA1Progress'
        ];
        
        localStorageKeys.forEach(key => {
            localStorage.removeItem(key);
            console.log(`🗑️ localStorage Key gelöscht: ${key}`);
        });
        
        // 3. Firebase zurücksetzen (falls verfügbar)
        if (window.firebaseSyncService) {
            // Leere Objekte an Firebase senden
            const emptyProgress = {};
            const emptyTestScores = {};
            
            window.firebaseSyncService.saveProgress(emptyProgress);
            window.firebaseSyncService.saveTestScores(emptyTestScores);
            console.log('☁️ Firebase-Daten zurückgesetzt');
        }
        
        // 4. Sync-Service zurücksetzen (falls verfügbar)
        if (window.syncService) {
            window.syncService.saveProgress({});
            console.log('🔄 Sync-Service zurückgesetzt');
        }
        
        console.log('✅ Alle Fehlerzähler erfolgreich zurückgesetzt');
        
    } catch (error) {
        console.error('❌ Fehler beim Zurücksetzen der Fehlerzähler:', error);
    }
}

function updateTestModeProgressBars() {
    console.log('[updateTestModeProgressBars] Aktualisiere Test-Fortschritt');
    // Implementierung für Test-Fortschritt
}

function startTraining(subTopic) {
    console.log('[startTraining] Starte Training für:', subTopic);
    
    // Fehlerzähler zurücksetzen vor dem Start
    resetAllErrorCounts();
    
    state.currentSubTopic = subTopic;
    // Hier würde das Training gestartet werden
}

// Navigation-Funktionen
function displayMainTopics() {
    console.log('[displayMainTopics] Zeige Hauptthemen');
    
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

function displaySubTopics(mainTopicName) {
    console.log('[displaySubTopics] Zeige Unterthemen für:', mainTopicName);
    
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

function handleNavigation(event) {
    console.log('[handleNavigation] Klick auf:', event.target);
    
    const mainTopicButton = event.target.closest('[data-main-topic]');
    const subTopicButton = event.target.closest('[data-sub-topic]');
    const testButton = event.target.closest('#start-test-mode-btn');

    if (mainTopicButton) {
        const topic = mainTopicButton.dataset.mainTopic;
        console.log('[handleNavigation] Hauptthema:', topic);
        displaySubTopics(topic);
    } else if (subTopicButton) {
        const subTopic = subTopicButton.dataset.subTopic;
        console.log('[handleNavigation] Unterthema:', subTopic);
        startTraining(subTopic);
    } else if (testButton) {
        console.log('[handleNavigation] Test-Button');
        updateTestModeProgressBars();
        if (testSelectionModalEl) {
            testSelectionModalEl.classList.remove('hidden');
        }
    }
}

// Initialisierung
function init() {
    console.log('=== INIT START ===');
    console.log('vokabular vorhanden:', typeof vokabular, Object.keys(vokabular));
    console.log('displayMainTopics:', typeof displayMainTopics);
    console.log('displaySubTopics:', typeof displaySubTopics);
    console.log('handleNavigation:', typeof handleNavigation);
    
    // Event-Listener hinzufügen
    if (navigationContainerEl) {
        navigationContainerEl.addEventListener('click', handleNavigation);
        console.log('[init] Navigation Event-Listener hinzugefügt');
    } else {
        console.error('[init] navigationContainerEl nicht gefunden');
    }
    
    // Back-Button Event-Listener
    if (backToMainTopicsButton) {
        backToMainTopicsButton.addEventListener('click', () => {
            console.log('[init] Back-Button geklickt');
            displayMainTopics();
        });
    }
    
    // Initiale Anzeige der Hauptthemen
    displayMainTopics();
    
    console.log('=== INIT ENDE ===');
}

// Export für externe Verwendung
window.trainerJS = {
    displayMainTopics,
    displaySubTopics,
    handleNavigation,
    init,
    setVokabular: (vocab) => { vokabular = vocab; },
    resetAllErrorCounts // Neue Funktion exportieren
};

// Automatische Initialisierung wenn DOM bereit ist
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Globale Funktionen für externe Aufrufe
window.resetAllErrorCounts = resetAllErrorCounts; 