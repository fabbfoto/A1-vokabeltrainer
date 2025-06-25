// trainer.js - FIREBASE-ERWEITERTE VERSION (KORRIGIERT)
// Steuerungslogik für den Themen-Trainer.
import { auth, db } from './firebase-config.js';
import { vokabular } from './vokabular.js';
import { shuffleArray, speak } from '/shared/helfer.js';
import * as uiModes from '/shared/ui-modes.js';
import { dom } from './dom.js';
import * as ui from './ui.js';
import { firebaseSyncService } from './firebase-sync.js';

// === GLOBALE ZUSTANDS- UND DATENOBJEKTE ===
const state = {
    currentMainTopic: null,
    currentSubTopic: null,
    currentVocabularySet: [],
    shuffledVocabForMode: [],
    currentWordIndexInShuffled: -1,
    currentWordData: null,
    currentMode: null,
    isTestModeActive: false,
    isRepeatSessionActive: false,
    correctInRound: 0,
    attemptedInRound: 0,
    globalProgress: {},
    masteredWordsByMode: {},
    wordsToRepeatByMode: {},
    lastTestScores: {},
    activeTextInput: null,
    testType: null,
    testKey: null,
    previousMainTopic: null,
    previousSubTopic: null,
};

const alleVokabeln = getAllWords(vokabular);

const learningModes = {
    'mc-de-en': { name: "Bedeutung", setupFunc: () => uiModes.setupMcDeEnMode(dom, state, alleVokabeln, processAnswer) },
    'type-de-adj': { name: "Schreibweise", setupFunc: () => uiModes.setupSpellingMode(dom, state, processAnswer) },
    'cloze-adj-de': { name: "Lückentext", setupFunc: () => uiModes.setupClozeAdjDeMode(dom, state, processAnswer) },
    'sentence-translation-en-de': { name: "Satzübersetzung", setupFunc: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, processAnswer) },
};

// === INITIALISIERUNG ===

// Startet die App, sobald das HTML-Dokument geladen ist.
document.addEventListener('DOMContentLoaded', init);

/**
 * Haupt-Initialisierungsfunktion.
 * Wartet auf die Firebase-Synchronisierung und startet dann die UI.
 */
async function init() {
    console.log('DOM geladen. Initialisiere Firebase Sync...');
    try {
        await firebaseSyncService.initialize();
        console.log('✅ Firebase Sync erfolgreich initialisiert. Starte die App-UI.');
        showMainTopics(); // Dies ist der entscheidende, fehlende Aufruf!
    } catch (error) {
        console.error("❌ Kritischer Fehler bei der Firebase-Initialisierung:", error);
        // Optional: Eine Fehlermeldung in der UI anzeigen
        const container = document.getElementById('navigation-container');
        if (container) {
            container.innerHTML = `<p class="text-red-500 text-center col-span-full">Konnte nicht mit dem Server verbinden. Bitte versuchen Sie es später erneut.</p>`;
        }
    }
}


// === UI-AUFBAU FUNKTIONEN ===

/**
 * Baut die Ansicht der Hauptthemen auf und zeigt sie an.
 */
function showMainTopics() {
    const container = dom.navigationContainer;
    container.innerHTML = ''; // Leert den Container für einen sauberen Neuaufbau

    Object.keys(vokabular).forEach(topicName => {
        const button = document.createElement('button');
        button.className = 'p-4 border rounded-lg hover:bg-gray-100 transition-colors';
        button.textContent = topicName;
        button.onclick = () => showSubTopics(topicName);
        container.appendChild(button);
    });

    // Stellt sicher, dass die korrekte Ansicht (Hauptthemen) angezeigt wird
    dom.navigationTitle.textContent = 'Themen';
    dom.backToMainTopics.classList.add('hidden');
    dom.navigationView.classList.remove('hidden-view');
    dom.trainerMainView.classList.add('hidden-view');
}

/**
 * Zeigt die Unterthemen für ein ausgewähltes Hauptthema an.
 * @param {string} mainTopicName Der Name des Hauptthemas.
 */
function showSubTopics(mainTopicName) {
    state.currentMainTopic = mainTopicName;
    const subTopics = vokabular[mainTopicName];
    const container = dom.navigationContainer;
    container.innerHTML = '';

    Object.keys(subTopics).forEach(subTopicName => {
        const button = document.createElement('button');
        button.className = 'p-4 border rounded-lg hover:bg-gray-100 transition-colors';
        button.textContent = subTopicName;
        button.onclick = () => startTraining(mainTopicName, subTopicName);
        container.appendChild(button);
    });
    
    dom.navigationTitle.textContent = mainTopicName;
    dom.backToMainTopics.classList.remove('hidden');
}

/**
 * Startet eine Trainingseinheit für ein ausgewähltes Unterthema.
 * @param {string} mainTopicName Der Name des Hauptthemas.
 * @param {string} subTopicName Der Name des Unterthemas.
 */
function startTraining(mainTopicName, subTopicName) {
    state.currentMainTopic = mainTopicName;
    state.currentSubTopic = subTopicName;
    state.currentVocabularySet = vokabular[mainTopicName][subTopicName];
    
    // UI-Zustand aktualisieren und Trainer-Ansicht anzeigen
    ui.showView('trainer-main-view');
    dom.currentTrainingTitle.textContent = `${mainTopicName} - ${subTopicName}`;
    
    // Wähle einen Standard-Lernmodus, z.B. 'Bedeutung'
    selectMode('mc-de-en');
}

/**
 * Wählt einen Lernmodus aus und bereitet ihn vor.
 * @param {string} modeKey Der Schlüssel des Lernmodus (z.B. 'mc-de-en').
 */
function selectMode(modeKey) {
    state.currentMode = modeKey;
    ui.updateModeButtons(modeKey);
    
    // Vokabeln für diesen Modus mischen
    state.shuffledVocabForMode = shuffleArray([...state.currentVocabularySet]);
    state.currentWordIndexInShuffled = -1; // Zurücksetzen für neue Runde
    
    // UI für den ausgewählten Modus vorbereiten und erste Frage stellen
    prepareNextQuestion();
}

/**
 * Bereitet die nächste Frage vor und zeigt sie an.
 */
function prepareNextQuestion() {
    state.currentWordIndexInShuffled++;
    if (state.currentWordIndexInShuffled >= state.shuffledVocabForMode.length) {
        // Runde beendet
        ui.displayFeedback("Runde beendet!", "bg-blue-500", 2000);
        showMainTopics(); // Zurück zur Hauptansicht
        return;
    }
    
    state.currentWordData = state.shuffledVocabForMode[state.currentWordIndexInShuffled];
    
    // Setup-Funktion für den aktuellen Modus aufrufen
    const mode = learningModes[state.currentMode];
    if (mode && mode.setupFunc) {
        mode.setupFunc();
    }
}

/**
 * Verarbeitet die Antwort des Benutzers.
 * @param {boolean} isCorrect True, wenn die Antwort korrekt war.
 */
function processAnswer(isCorrect) {
    ui.displayFeedback(isCorrect ? "Richtig!" : "Falsch!", isCorrect ? 'bg-green-500' : 'bg-red-500');
    // Hier können Statistiken aktualisiert werden
    
    // Nach einer kurzen Verzögerung zur nächsten Frage übergehen
    setTimeout(prepareNextQuestion, 1500);
}


// === HELPER FUNKTIONEN ===

/**
 * Sammelt alle Vokabeln aus dem Haupt-Vokabularobjekt.
 * @param {object} vocabularyObject Das Haupt-Vokabularobjekt.
 * @returns {Array} Eine flache Liste aller Vokabel-Objekte.
 */
function getAllWords(vocabularyObject) {
    let allWords = [];
    for (const mainTopic of Object.values(vocabularyObject)) {
        for (const subTopic of Object.values(mainTopic)) {
            allWords.push(...subTopic);
        }
    }
    return allWords;
}


// === EVENT HANDLER ===

// Zurück-Button von Unterthemen zu Hauptthemen
dom.backToMainTopics.addEventListener('click', showMainTopics);

// Zurück-Button vom Trainer zu den Unterthemen
dom.backToSubtopics.addEventListener('click', () => {
    if (state.currentMainTopic) {
        showSubTopics(state.currentMainTopic);
    } else {
        showMainTopics();
    }
    ui.showView('navigation-view');
});

// Event-Listener für Lernmodus-Buttons
Object.keys(learningModes).forEach(modeKey => {
    const button = document.getElementById(`mode-${modeKey}`);
    if (button) {
        button.addEventListener('click', () => selectMode(modeKey));
    }
});
