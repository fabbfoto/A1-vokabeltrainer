// packages/trainer-themen/trainer.js
// Steuerungslogik für den Themen-Trainer.
// Diese Datei orchestriert den Anwendungszustand (State) und die UI-Interaktionen,
// indem sie Funktionen aus den Modulen 'ui.js' und 'ui-modes.js' aufruft.

import { vokabular } from './vokabular.js';
import { shuffleArray, speak } from '/shared/helfer.js';
import * as uiModes from '/shared/ui-modes.js';
import { dom } from './dom.js';
import * as ui from './ui.js';

document.addEventListener('DOMContentLoaded', () => {

    // Zentrales State-Objekt zur Verwaltung des Anwendungszustands.
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
    const alleVokabeln = getAllWords(vokabular);

    // Definition der Lernmodi und ihrer Setup-Funktionen.
    const learningModes = {
        'mc-de-en': { name: "Bedeutung", setupFunc: () => uiModes.setupMcDeEnMode(dom, state, alleVokabeln, processAnswer) },
        'type-de-adj': { name: "Schreibweise", setupFunc: () => uiModes.setupSpellingMode(dom, state, processAnswer) },
        'cloze-adj-de': { name: "Lückentext", setupFunc: () => uiModes.setupClozeAdjDeMode(dom, state, processAnswer) },
        'sentence-translation-en-de': { name: "Satzübersetzung", setupFunc: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, processAnswer) },
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
        localStorage.setItem('goetheA1Progress', JSON.stringify(progressToStore));
    }

    function loadGlobalProgress() {
        const storedProgress = localStorage.getItem('goetheA1Progress');
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
            localStorage.removeItem('goetheA1Progress');
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

    function processAnswer(isCorrect, correctAnswer) {
        if (dom.checkSpellingButton) dom.checkSpellingButton.disabled = true;
        if (dom.checkClozeButton) dom.checkClozeButton.disabled = true;
        if (dom.checkSentenceButton) dom.checkSentenceButton.disabled = true;

        state.attemptedInRound++;
        const wordId = state.currentWordData.id;

        if (isCorrect) {
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

    function handleTestCompletion() {
        const accuracy = state.attemptedInRound > 0 ? (state.correctInRound / state.attemptedInRound) : 0;
        if (!state.lastTestScores) state.lastTestScores = {};
        state.lastTestScores[state.currentMode] = { correct: state.correctInRound, total: state.attemptedInRound, accuracy: accuracy };
        saveLastTestScores();
        ui.showMessage(dom, `Test beendet! Ergebnis: ${state.correctInRound} / ${state.attemptedInRound}`, 'success', 5000);
        state.isTestModeActive = false;
        ui.displayMainTopics(dom, state, vokabular, learningModes);
    }

    function erstelleTestAufgaben() {
        return shuffleArray([...alleVokabeln]).slice(0, 36);
    }

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

        ui.hideAllUIs(dom);
        dom.trainerMainViewEl.classList.remove('hidden-view');
        const modusName = learningModes[modus]?.name || "Test";
        dom.currentTrainingTitleEl.textContent = `Test - ${modusName}`;
        dom.practiceStatsViewEl.classList.add('hidden');
        dom.testStatsViewEl.classList.remove('hidden');
        dom.modeButtonGridEl.classList.add('hidden');

        ui.updateTestStats(dom, state);
        ui.updateErrorCounts(dom, state, learningModes);
        loadNextTask();
    }

    // --- NAVIGATIONSLOGIK ---

    function startTraining(subTopicName) {
        state.currentSubTopic = subTopicName;
        const vocabularySet = vokabular[state.currentMainTopic][subTopicName];
        if (!vocabularySet || vocabularySet.length === 0) {
            ui.showMessage(dom, `Keine Vokabeln für "${subTopicName}" gefunden.`, 'info');
            return;
        }

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
            ui.displaySubTopics(dom, state, vokabular, mainTopicButton.dataset.mainTopic, learningModes);
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

        // Callbacks für die UI-Schicht, um auf Logikfunktionen zuzugreifen.
        const callbacks = {
            handleNavigation,
            starteGesamtTest,
            getVokabular: () => vokabular
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
        ui.displayMainTopics(dom, state, vokabular, learningModes);
    }

    init();
});
