// trainer.js - ERWEITERTE VERSION mit vollständiger Test-Funktionalität
// Steuerungslogik für den Themen-Trainer.
// Diese Datei orchestriert den Anwendungszustand (State) und die UI-Interaktionen,
// indem sie Funktionen aus den Modulen 'ui.js' und 'ui-modes.js' aufruft.
// Type imports
// Type imports
import type { User, Word, Progress, LearningMode } from './shared/types/index';
// Import des kombinierten Vokabulars

import { vokabular } from './vokabular.js';

// Import der Helfer- und UI-Funktionen aus dem geteilten Ordner
import { shuffleArray, speak, vergleicheAntwort } from './shared/utils/helfer.js';
import * as uiModes from './shared/utils/ui-modes.js';
import { dom } from './dom.js';
import * as ui from './ui.js';
// Import der neuen, geteilten Auth- und Sync-Funktion
import { initializeAuth } from './shared/auth/index.js';
import { NavigationEvents } from './shared/events/navigation-events.js';

let globalAuthUI = null; // NEU: Globale Referenz für die AuthUI

document.addEventListener('DOMContentLoaded', async () => { // Hinzugefügt 'async' hier

    // Firebase Auth und Sync initialisieren
    const { authService, authUI, syncService } = initializeAuth('themen', {
        buttonContainerId: 'auth-button-container',
        hideOnNavigation: true,  // ← NEU HINZUFÜGEN!
        // Themen-Trainer spezifische Button-Styles
        buttonClasses: {
            loggedIn: 'w-full rounded-lg py-3 font-semibold text-white cursor-default',
            loggedOut: 'w-full rounded-lg py-3 font-semibold transition-colors duration-200'
        }
    });

    // Initial auf Root-Seite
    NavigationEvents.dispatchRoot();

    // Speichere authUI Referenz für späteren Zugriff durch andere Module (z.B. ui.js)
    globalAuthUI = authUI;

    // Zentrales State-Objekt zur Verwaltung des Anwendungszustands - ERWEITERT.
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
        globalProgress: {}, // Initialisiert als leeres Objekt
        masteredWordsByMode: {},
        wordsToRepeatByMode: {},
        lastTestScores: {}, // Initialisiert als leeres Objekt
        activeTextInput: null,
        // NEU für erweiterte Test-Funktionalität:
        testType: null, // 'subtopic', 'mainTopic', oder 'global'
        testKey: null, // Eindeutiger Schlüssel für Test-Ergebnis-Speicherung
        // NEU: Für Zurück-Navigation im Test
        previousMainTopic: null,
        previousSubTopic: null,
    };

    // Hilfsfunktion, um alle Vokabeln aus der verschachtelten Struktur zu extrahieren.
    function getAllWords(vocabularyObject) {
        let allWords = [];
        for (const mainTopic of Object.values(vocabularyObject)) {
            for (const subTopic of Object.values(mainTopic)) {
                allWords.push(...subTopic);
            }
        }
        return allWords;
    }
    const alleVokabeln = getAllWords(vokabular); // Verwendet das kombinierte vokabular

    // --- KERNLOGIK (TRAINING & TEST) ---
    // processAnswer muss VOR learningModes definiert werden, da es dort verwendet wird.
    function processAnswer(isCorrect, correctAnswer) {
        // === DEBUGGING LOGS START ===
        console.log(`[processAnswer] Aufgerufen für Modus: ${state.currentMode}`);
        console.log(`[processAnswer] isCorrect empfangen: ${isCorrect}`);
        console.log(`[processAnswer] correctAnswer empfangen: ${correctAnswer}`);
        // === DEBUGGING LOGS END ===

        if (dom.checkSpellingButton) dom.checkSpellingButton.disabled = true;
        if (dom.checkClozeButton) dom.checkClozeButton.disabled = true;
        if (dom.checkSentenceButton) dom.checkSentenceButton.disabled = true;

        state.attemptedInRound++;
        const wordId = state.currentWordData.id;

        if (isCorrect) {
            console.log('[processAnswer] Antwort ist KORREKT. Springe zur nächsten Aufgabe.'); // Debugging
            state.correctInRound++;
            dom.feedbackContainerEl.innerHTML = `<span class="feedback-correct">Richtig!</span>`;
            if (wordId && !state.isTestModeActive) {
                const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
                if (!state.globalProgress[progressKey]) state.globalProgress[progressKey] = {};
                if (!state.globalProgress[progressKey][state.currentMode]) state.globalProgress[progressKey][state.currentMode] = new Set();
                state.globalProgress[progressKey][state.currentMode].add(wordId);
                state.masteredWordsByMode[state.currentMode]?.add(wordId);
                state.wordsToRepeatByMode[state.currentMode]?.delete(wordId);
                console.log('trainer.js: Wort als gemeistert hinzugefügt. Neuer globalProgress:', state.globalProgress);
                saveGlobalProgress();
            }
            setTimeout(() => { loadNextTask(); }, 1200);
        } else {
            console.log('[processAnswer] Antwort ist FALSCH. Zeige "Weiter"-Button.'); // Debugging
            dom.feedbackContainerEl.innerHTML = `<span class="feedback-incorrect">${correctAnswer}</span>`;
            if (wordId) {
                if (!state.wordsToRepeatByMode[state.currentMode]) state.wordsToRepeatByMode[state.currentMode] = new Set();
                state.wordsToRepeatByMode[state.currentMode].add(wordId);
                console.log('trainer.js: Wort zur Wiederholung hinzugefügt. Neuer wordsToRepeatByMode:', state.wordsToRepeatByMode);
            }
            dom.continueButton.classList.remove('hidden');
        }

        if (state.isTestModeActive) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state, learningModes);
        }
        ui.updateErrorCounts(dom, state, learningModes);
    }

    // Definition der Lernmodi und ihrer Setup-Funktionen.
    const learningModes = {
        'mc-de-en': { name: "Bedeutung", setupFunc: () => uiModes.setupMcDeEnMode(dom, state, alleVokabeln, processAnswer) },
        'type-de-adj': { name: "Schreibweise", setupFunc: () => uiModes.setupSpellingMode(dom, state, alleVokabeln, processAnswer) },
        'cloze-adj-de': { name: "Lückentext", setupFunc: () => uiModes.setupClozeAdjDeMode(dom, state, alleVokabeln, processAnswer) },
        'sentence-translation-en-de': { name: "Satzübersetzung", setupFunc: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, alleVokabeln, processAnswer) },
    };
    console.log('trainer.js: learningModes definiert:', learningModes, 'Anzahl der Modi:', Object.keys(learningModes).length);

    // --- DATENPERSISTENZ (LocalStorage) ---

    function saveLastTestScores() {
        localStorage.setItem('goetheA1LastTestScores', JSON.stringify(state.lastTestScores));
    }

    function loadLastTestScores() {
        const storedScores = localStorage.getItem('goetheA1LastTestScores');
        if (storedScores) {
            try {
                state.lastTestScores = JSON.parse(storedScores);
            } catch (e) {
                console.error("Fehler beim Laden der letzten Testergebnisse.", e);
                state.lastTestScores = {};
            }
        }
    }

    function saveGlobalProgress() {
        const progressToStore = {};
        for (const gruppe in state.globalProgress) {
            progressToStore[gruppe] = {};
            for (const mode in state.globalProgress[gruppe]) {
                progressToStore[gruppe][mode] = Array.from(state.globalProgress[gruppe][mode]);
            }
        }
        localStorage.setItem('a1ThemenProgress', JSON.stringify(progressToStore));

        // Fortschritt auch in die Cloud speichern, wenn der Nutzer angemeldet ist
        if (authService.isLoggedIn()) {
            syncService.saveProgress(progressToStore);
        }
    }

    function loadGlobalProgress() {
        const storedProgress = localStorage.getItem('a1ThemenProgress');
        if (!storedProgress) return;
        try {
            const parsedProgress = JSON.parse(storedProgress);
            state.globalProgress = {};
            for (const gruppe in parsedProgress) {
                state.globalProgress[gruppe] = {};
                for (const mode in parsedProgress[gruppe]) {
                    state.globalProgress[gruppe][mode] = new Set(parsedProgress[gruppe][mode]);
                }
            }
            console.log('trainer.js: globalProgress aus LocalStorage geladen:', state.globalProgress);
        } catch (e) {
            console.error("Fehler beim Laden des Fortschritts. Setze zurück.", e);
            state.globalProgress = {};
            localStorage.removeItem('a1ThemenProgress');
        }
    }

    // --- KERNLOGIK (TRAINING & TEST) ---

    function loadNextTask() {
        ui.hideAllUIs(dom);
        if ((!state.currentVocabularySet || state.currentVocabularySet.length === 0) && state.shuffledVocabForMode.length === 0) return;

        state.currentWordIndexInShuffled++;
        if (state.currentWordIndexInShuffled >= state.shuffledVocabForMode.length) {
            if (state.isTestModeActive) {
                handleTestCompletion();
                return;
            }
            if (state.isRepeatSessionActive) {
                ui.showMessage(dom, 'Alle Fehler wurden wiederholt!', 'success');
                state.isRepeatSessionActive = false;
                document.querySelector('.mode-button.repeat-active')?.classList.remove('repeat-active');
                state.shuffledVocabForMode = shuffleArray([...state.currentVocabularySet]);
            } else {
                state.shuffledVocabForMode = shuffleArray([...state.shuffledVocabForMode]);
            }
            state.currentWordIndexInShuffled = 0;
        }

        state.currentWordData = state.shuffledVocabForMode[state.currentWordIndexInShuffled];
        if (!state.currentWordData) {
            console.error("Kein Wort gefunden, versuche nächstes.");
            if (state.shuffledVocabForMode.length > 0 && state.currentWordIndexInShuffled < state.shuffledVocabForMode.length) loadNextTask();
            return;
        }

        const modeInfo = learningModes[state.currentMode];
        if (modeInfo && typeof modeInfo.setupFunc === 'function') {
            modeInfo.setupFunc();
        } else {
            console.error(`Keine Setup-Funktion für Modus "${state.currentMode}" gefunden.`);
        }
    }

    function setMode(modeId, isRepeat = false) {
        state.currentMode = modeId;
        state.isTestModeActive = false;
        state.isRepeatSessionActive = isRepeat;
        let wordsForSession = [];

        if (isRepeat) {
            const wordIdsToRepeat = new Set(state.wordsToRepeatByMode[modeId] || []);
            if (wordIdsToRepeat.size === 0) {
                ui.showMessage(dom, 'Keine Fehler zum Wiederholen in diesem Modus.', 'info');
                state.isRepeatSessionActive = false;
                return;
            }
            wordsForSession = alleVokabeln.filter(word => wordIdsToRepeat.has(word.id));
        } else {
            wordsForSession = [...state.currentVocabularySet];
        }

        state.shuffledVocabForMode = shuffleArray(wordsForSession);
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;

        document.querySelectorAll('#mode-button-grid .mode-button').forEach(btn => btn.classList.remove('active', 'repeat-active'));
        document.getElementById(`mode-${modeId}`)?.classList.add('active');
        if (isRepeat) document.getElementById(`mode-repeat-${modeId}`)?.classList.add('repeat-active');

        loadNextTask();
    }

    // NEU: Gemeinsame Test-UI Startfunktion
    function startTestUI(testTitle, modus) {
        authUI.hide(); // Auth-Button im Trainings-Modus verstecken
        ui.hideAllUIs(dom);
        dom.trainerMainViewEl.classList.remove('hidden-view');
        dom.navigationViewEl.classList.add('hidden-view');
        
        const modusName = learningModes[modus]?.name || "Test";
        dom.currentTrainingTitleEl.textContent = `${testTitle} - ${modusName}`;
        dom.practiceStatsViewEl.classList.add('hidden');
        dom.testStatsViewEl.classList.remove('hidden');
        dom.modeButtonGridEl.classList.add('hidden');

        ui.updateTestStats(dom, state);
        ui.updateErrorCounts(dom, state, learningModes);
        loadNextTask();
    }

    // VERBESSERT: Test-Completion mit erweiterten Scores
    function handleTestCompletion() {
        const accuracy = state.attemptedInRound > 0 ? (state.correctInRound / state.attemptedInRound) : 0;
        authUI.show(); // Auth-Button in der Navigation wieder anzeigen
        
        if (!state.lastTestScores) state.lastTestScores = {};
        
        // Speichere Test-Ergebnis mit erweitertem Schlüssel
        if (state.testKey) {
            state.lastTestScores[state.testKey] = { 
                correct: state.correctInRound, 
                total: state.attemptedInRound, 
                accuracy: accuracy,
                timestamp: Date.now(),
                testType: state.testType,
                topic: state.currentMainTopic,
                subtopic: state.currentSubTopic
            };
        }
        
        // Speichere auch den alten Schlüssel für Rückwärtskompatibilität
        state.lastTestScores[state.currentMode] = { 
            correct: state.correctInRound, 
            total: state.attemptedInRound, 
            accuracy: accuracy 
        };
        
        saveLastTestScores();
        
        // Test-spezifische Erfolgsmeldung
        let testTypeName = "Test";
        switch(state.testType) {
            case 'subtopic':
                testTypeName = `${state.currentSubTopic} Test`;
                break;
            case 'mainTopic':
                testTypeName = `${state.currentMainTopic} Gesamttest`;
                break;
            case 'global':
                testTypeName = 'Globaler Gesamttest';
                break;
        }
        
        // Deutschland-Farben Feedback basierend auf Accuracy
        const accuracyPercent = Math.round(accuracy * 100);
        let feedbackColor = 'info';
        if (accuracyPercent >= 67) feedbackColor = 'success';
        else if (accuracyPercent >= 34) feedbackColor = 'info';
        else feedbackColor = 'error';
        
        ui.showMessage(dom, 
            `${testTypeName} beendet! Ergebnis: ${state.correctInRound} / ${state.attemptedInRound} (${accuracyPercent}%)`, 
            feedbackColor, 5000);
        
        state.isTestModeActive = false;
        
        // Zurück zur entsprechenden Ansicht
        if (state.testType === 'subtopic' && state.currentMainTopic) {
            // Zurück zur Unterthemen-Ansicht
            ui.displaySubTopics(dom, state, vokabular, state.currentMainTopic, learningModes); // Verwendet vokabular
        } else {
            // Zurück zur Hauptthemen-Ansicht
            ui.displayMainTopics(dom, state, vokabular, learningModes); // Verwendet vokabular
        }
    }

    function erstelleTestAufgaben() {
        return shuffleArray([...alleVokabeln]).slice(0, 36);
    }

    // NEU: Hauptthema-Test starten (alle Unterfelder eines Hauptthemas)
    function starteHauptthemaTest(modus, mainTopicName) {
        const hauptthema = vokabular[mainTopicName]; // Verwendet vokabular
        if (!hauptthema) {
            ui.showMessage(dom, `Hauptthema "${mainTopicName}" nicht gefunden.`, 'error');
            return;
        }

        // Alle Vokabeln aus allen Unterfeldern sammeln
        let alleVokabelnImHauptthema = [];
        Object.values(hauptthema).forEach(subtopic => {
            if (Array.isArray(subtopic)) {
                alleVokabelnImHauptthema.push(...subtopic);
            }
        });

        if (alleVokabelnImHauptthema.length === 0) {
            ui.showMessage(dom, `Keine Vokabeln in "${mainTopicName}" gefunden.`, 'error');
            return;
        }

        // Zufällige Auswahl: 1-3 Aufgaben pro Unterfeld, maximal 30 insgesamt
        const maxAufgaben = Math.min(30, alleVokabelnImHauptthema.length);
        const minAufgabenProUnterfeld = 1;
        const anzahlUnterfelder = Object.keys(hauptthema).length;
        const aufgabenProUnterfeld = Math.max(minAufgabenProUnterfeld, Math.floor(maxAufgaben / anzahlUnterfelder));

        let aufgaben = [];
        Object.values(hauptthema).forEach(subtopic => {
            if (Array.isArray(subtopic)) {
                const shuffledSubtopic = shuffleArray([...subtopic]);
                aufgaben.push(...shuffledSubtopic.slice(0, aufgabenProUnterfeld));
            }
        });

        const finalAufgaben = shuffleArray(aufgaben).slice(0, maxAufgaben);

        state.isTestModeActive = true;
        state.currentMode = modus;
        state.currentMainTopic = mainTopicName;
        state.currentSubTopic = "Gesamttest";
        state.currentVocabularySet = finalAufgaben;
        state.shuffledVocabForMode = finalAufgaben;
        state.masteredWordsByMode = {};
        state.wordsToRepeatByMode = {};
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;
        state.testType = 'mainTopic';
        state.testKey = `mainTopic-${mainTopicName}-${modus}`;

        startTestUI(`${mainTopicName} Gesamttest`, modus);
    }

    // VERBESSERT: Globaler Gesamttest (bestehende Funktion erweitert)
    function starteGesamtTest(modus) {
        const aufgaben = erstelleTestAufgaben();
        if (aufgaben.length < 1) {
            ui.showMessage(dom, 'Fehler: Es konnten nicht genügend Testaufgaben erstellt werden.', 'error');
            return;
        }

        state.isTestModeActive = true;
        state.currentMode = modus;
        state.currentMainTopic = "Gesamttest";
        state.currentSubTopic = modus;
        state.currentVocabularySet = aufgaben;
        state.shuffledVocabForMode = aufgaben;
        state.masteredWordsByMode = {};
        state.wordsToRepeatByMode = {};
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;
        state.testType = 'global';
        state.testKey = `global-${modus}`;

        startTestUI("Globaler Gesamttest", modus);
    }

    // --- NAVIGATIONSLOGIK ---

    function startTraining(subTopicName) {
        state.currentSubTopic = subTopicName;
        const vocabularySet = vokabular[state.currentMainTopic][subTopicName]; // Verwendet vokabular
        if (!vocabularySet || vocabularySet.length === 0) {
            ui.showMessage(dom, `Keine Vokabeln für "${subTopicName}" gefunden.`, 'info');
            return;
        }

        authUI.hide(); // Auth-Button im Trainings-Modus verstecken
        ui.hideAllUIs(dom);
        state.isTestModeActive = false;
        state.currentVocabularySet = vocabularySet;
        const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
        const progressForGroup = state.globalProgress[progressKey] || {};
        Object.keys(learningModes).forEach(mode => {
            state.masteredWordsByMode[mode] = new Set(progressForGroup[mode] || []);
            state.wordsToRepeatByMode[mode] = new Set();
        });

        dom.practiceStatsViewEl.classList.remove('hidden');
        dom.testStatsViewEl.classList.add('hidden');
        dom.modeButtonGridEl.classList.remove('hidden');
        dom.currentTrainingTitleEl.textContent = subTopicName;
        dom.navigationViewEl.classList.add('hidden-view');
        dom.trainerMainViewEl.classList.remove('hidden-view');

        ui.updatePracticeStats(dom, state, learningModes);
        ui.updateErrorCounts(dom, state, learningModes);
        setTimeout(() => setMode('mc-de-en'), 10);
    }

    function handleNavigation(event) {
        const mainTopicButton = event.target.closest('[data-main-topic]');
        const subTopicButton = event.target.closest('[data-sub-topic]');
        const testButton = event.target.closest('#start-test-mode-btn');

        if (mainTopicButton) {
            // authUI.show(); // Veraltet: Wird jetzt durch Events in ui.js gesteuert.
            ui.displaySubTopics(dom, state, vokabular, mainTopicButton.dataset.mainTopic, learningModes); // Verwendet vokabular
        } else if (subTopicButton) {
            startTraining(subTopicButton.dataset.subTopic);
        } else if (testButton) {
            ui.updateTestModeProgressBars(dom, state);
            dom.testSelectionModalEl.classList.remove('hidden-view');
        }
    }

    // --- INITIALISIERUNG ---

    function init() {
        loadGlobalProgress();
        loadLastTestScores();

        // Erweiterte Callbacks für die UI-Schicht
        const callbacks = {
            handleNavigation,
            starteGesamtTest,           // Globaler Test
            starteHauptthemaTest,       // Hauptthema Test (EINZIGER Test pro Hauptthema)
            getVokabular: () => vokabular // Verwendet vokabular
        };
        
        ui.initEventListeners(dom, state, callbacks, learningModes);

        // Event-Listener, die direkt die Kernlogik triggern.
        Object.keys(learningModes).forEach(modeId => {
            const button = document.getElementById(`mode-${modeId}`);
            const repeatButton = document.getElementById(`mode-repeat-${modeId}`);
            if (button) button.addEventListener('click', () => setMode(modeId, false));
            if (repeatButton) repeatButton.addEventListener('click', () => setMode(modeId, true));
        });
        dom.continueButton.addEventListener('click', loadNextTask);

        // Startansicht anzeigen.
        authUI.show(); // Auth-Button in der Navigation anzeigen
        ui.displayMainTopics(dom, state, vokabular, learningModes); // Verwendet vokabular
    }
    
    // NEU: Firebase Sync-Listener für Updates von anderen Geräten.
    syncService.onSyncUpdate((type, data) => {
        if (type === 'remoteUpdate' && data) {
            console.log('📥 Fortschritt von anderem Gerät erhalten.');
            
            // Daten von Firebase (Arrays) wieder in Sets umwandeln
            const convertedProgress = {};
            for (const progressKey in data) {
                convertedProgress[progressKey] = {};
                for (const mode in data[progressKey]) {
                    if (Array.isArray(data[progressKey][mode])) {
                        convertedProgress[progressKey][mode] = new Set(data[progressKey][mode]);
                    }
                }
            }
            state.globalProgress = convertedProgress;
            ui.displayMainTopics(dom, state, vokabular, learningModes); // UI mit dem neuen Fortschritt aktualisieren
            ui.showMessage(dom, 'Fortschritt synchronisiert!', 'success');
        }
    });
    
    init(); // Aufruf der init-funktion
});
