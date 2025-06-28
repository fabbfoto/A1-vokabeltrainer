// trainer.js - Vollständig angepasst für die 3-Ebenen-Navigation des Themen-Trainers

// GEÄNDERT: 'vokabular' wird aus der neuen, thematischen Datei importiert.
import { vokabular } from './vokabular.js';
import { vergleicheAntwort, shuffleArray, speak } from '../../shared/utils/helfer.js';
import * as uiModes from '../../shared/utils/ui-modes.js';
// Firebase Auth/Sync Import
import { initializeAuth } from '../../shared/auth/index.js';

document.addEventListener('DOMContentLoaded', () => {

    const { authService, authUI, syncService } = initializeAuth('themen', {
        buttonContainerId: 'navigation-header',
        buttonColumns: 'ml-auto'
    });

    // NEU: Ein zentrales State-Objekt, um den Zustand der App zu verwalten.
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
        activeTextInput: null, // NEU: Für Umlaut-Buttons
    };

    // Direkte Zuweisung der DOM-Elemente zu Variablen 
    const navigationViewEl = document.getElementById('navigation-view');
    const trainerMainViewEl = document.getElementById('trainer-main-view');
    const navigationContainerEl = document.getElementById('navigation-container');
    const backToMainTopicsButton = document.getElementById('back-to-main-topics');
    const navigationTitleEl = document.getElementById('navigation-title');
    const backToSubtopicsButton = document.getElementById('back-to-subtopics');
    const currentTrainingTitleEl = document.getElementById('current-training-title');
    const modeButtonGridEl = document.getElementById('mode-button-grid');
    const questionDisplayEl = document.getElementById('question-display-area');
    const exampleSentenceDisplayEl = document.getElementById('example-sentence-display');
    const mcUiEl = document.getElementById('mc-de-en-ui');
    const mcAnswersContainerEl = document.getElementById('mc-answers-container');
    const spellingModeUiEl = document.getElementById('spelling-mode-ui');
    const singleInputContainerEl = document.getElementById('single-input-container');
    const spellingInputSingleEl = document.getElementById('spelling-input-single');
    const nounInputContainerEl = document.getElementById('noun-input-container');
    const spellingInputNoun1El = document.getElementById('spelling-input-noun-1');
    const spellingInputNoun2El = document.getElementById('spelling-input-noun-2');
    const checkSpellingButton = document.getElementById('check-spelling-button');
    const clozeUiEl = document.getElementById('cloze-adj-de-ui');
    const clozeHintContainerEl = document.getElementById('cloze-hint-container');
    const clozeSentenceContainerEl = document.getElementById('cloze-sentence-container');
    const checkClozeButton = document.getElementById('check-cloze-button');
    const sentenceUiEl = document.getElementById('sentence-translation-en-de-ui');
    const sentenceWordInputContainerEl = document.getElementById('sentence-word-input-container');
    const checkSentenceButton = document.getElementById('check-sentence-translation-button');
    const feedbackContainerEl = document.getElementById('feedback-container');
    const continueButton = document.getElementById('continue-button');
    const messageBoxEl = document.getElementById('message-box');
    const wordLineContainerEl = document.getElementById('word-line-container');
    const sentenceLineContainerEl = document.getElementById('sentence-line-container');
    const audioWordButtonEl = document.getElementById('audio-word-button');
    const audioSentenceButtonEl = document.getElementById('audio-sentence-button');
    const practiceStatsViewEl = document.getElementById('practice-stats-view');
    const correctInRoundPracticeEl = document.getElementById('correct-in-round-practice');
    const attemptedInRoundPracticeEl = document.getElementById('attempted-in-round-practice');
    const accuracyBarEl = document.getElementById('accuracy-bar');
    const categoryStatsContainerEl = document.getElementById('category-stats-container');
    const testStatsViewEl = document.getElementById('test-stats-view');
    const testProgressTextEl = document.getElementById('test-progress-text');
    const testProgressEl = document.getElementById('test-progress-bar');
    const testAccuracyTextEl = document.getElementById('test-accuracy-text');
    const testAccuracyBarEl = document.getElementById('test-accuracy-bar');
    const testSelectionModalEl = document.getElementById('test-selection-modal');
    const testOptionsGridEl = document.getElementById('test-options-grid');
    const umlautButtonsContainerEl = document.getElementById('umlaut-buttons-container');

    const SVG_SPEAKER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.858 12H4a1 1 0 00-1 1v2a1 1 0 001 1h1.858l4.47 4.47A1 1 0 0012 20V4a1 1 0 00-1.672-.748L5.858 12z" /></svg>`;

    // DOM-Elemente für die UI-Module bündeln
    const dom = { 
        mcUiEl, mcAnswersContainerEl, questionDisplayEl, exampleSentenceDisplayEl, audioWordButtonEl,
        audioSentenceButtonEl, wordLineContainerEl, sentenceLineContainerEl, SVG_SPEAKER_ICON,
        spellingModeUiEl, checkSpellingButton, singleInputContainerEl, nounInputContainerEl,
        spellingInputSingleEl, spellingInputNoun1El, spellingInputNoun2El,
        clozeUiEl, clozeHintContainerEl, clozeSentenceContainerEl, checkClozeButton,
        sentenceUiEl, sentenceWordInputContainerEl, checkSentenceButton, umlautButtonsContainerEl
    };
    
    // Original-Funktionen, die erhalten bleiben
    function showMessage(message, type = 'error', duration = 3000) { messageBoxEl.textContent = message; messageBoxEl.className = `fixed bottom-5 right-5 text-white p-3 rounded-lg shadow-xl ${type === 'success' ? 'bg-green-500' : type === 'info' ? 'bg-blue-500' : 'bg-red-500'}`; messageBoxEl.classList.remove('hidden'); setTimeout(() => messageBoxEl.classList.add('hidden'), duration); }

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
    
    const learningModes = {
        'mc-de-en': { name: "Bedeutung", setupFunc: () => uiModes.setupMcDeEnMode(dom, state, alleVokabeln, processAnswer) },
        'type-de-adj': { name: "Schreibweise", setupFunc: () => uiModes.setupSpellingMode(dom, state, processAnswer) },
        'cloze-adj-de': { name: "Lückentext", setupFunc: () => uiModes.setupClozeAdjDeMode(dom, state, processAnswer) },
        'sentence-translation-en-de': { name: "Satzübersetzung", setupFunc: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, processAnswer) },
    };

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

    function hideAllUIs() {
        [mcUiEl, spellingModeUiEl, clozeUiEl, sentenceUiEl].forEach(ui => { if (ui) ui.style.display = 'none'; });
        if (clozeHintContainerEl) clozeHintContainerEl.style.display = 'none';
        continueButton.classList.add('hidden');
        feedbackContainerEl.innerHTML = '';
        questionDisplayEl.textContent = '';
        exampleSentenceDisplayEl.textContent = '';
        [audioWordButtonEl, audioSentenceButtonEl].forEach(btn => { if(btn) { btn.onclick = null; btn.style.display = 'none'; } });
        if (umlautButtonsContainerEl) umlautButtonsContainerEl.style.display = 'none';
    }
    
    function handleTestCompletion() {
        const accuracy = state.attemptedInRound > 0 ? (state.correctInRound / state.attemptedInRound) : 0;
        if (!state.lastTestScores) state.lastTestScores = {};
        state.lastTestScores[state.currentMode] = { correct: state.correctInRound, total: state.attemptedInRound, accuracy: accuracy };
        saveLastTestScores();
        showMessage(`Test beendet! Ergebnis: ${state.correctInRound} / ${state.attemptedInRound}`, 'success', 5000);
        state.isTestModeActive = false;
        displayMainTopics();
    }

    function loadNextTask() {
        hideAllUIs();
        if ((!state.currentVocabularySet || state.currentVocabularySet.length === 0) && state.shuffledVocabForMode.length === 0) return;
        state.currentWordIndexInShuffled++;
        if (state.currentWordIndexInShuffled >= state.shuffledVocabForMode.length) {
            if (state.isTestModeActive) { handleTestCompletion(); return; }
            if (state.isRepeatSessionActive) {
                showMessage('Alle Fehler wurden wiederholt!', 'success');
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
            if(state.shuffledVocabForMode.length > 0 && state.currentWordIndexInShuffled < state.shuffledVocabForMode.length) loadNextTask();
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
        if (checkSpellingButton) checkSpellingButton.disabled = true;
        if (checkClozeButton) checkClozeButton.disabled = true;
        if (checkSentenceButton) checkSentenceButton.disabled = true;

        state.attemptedInRound++;
        const wordId = state.currentWordData.id;
        if (isCorrect) {
            state.correctInRound++;
            feedbackContainerEl.innerHTML = `<span class="feedback-correct">Richtig!</span>`;
            if (wordId && !state.isTestModeActive) {
                const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
                if (!state.globalProgress[progressKey]) state.globalProgress[progressKey] = {};
                if (!state.globalProgress[progressKey][state.currentMode]) state.globalProgress[progressKey][state.currentMode] = new Set();
                state.globalProgress[progressKey][state.currentMode].add(wordId);
                state.masteredWordsByMode[state.currentMode]?.add(wordId);
                state.wordsToRepeatByMode[state.currentMode]?.delete(wordId);
                saveGlobalProgress();
            }
            setTimeout(() => { loadNextTask(); }, 1200);
        } else {
            feedbackContainerEl.innerHTML = `<span class="feedback-incorrect">${correctAnswer}</span>`;
            if (wordId) {
                if (!state.wordsToRepeatByMode[state.currentMode]) state.wordsToRepeatByMode[state.currentMode] = new Set();
                state.wordsToRepeatByMode[state.currentMode].add(wordId);
            }
            continueButton.classList.remove('hidden');
        }
        
        if (state.isTestModeActive) { updateTestStats(); } else { updatePracticeStats(); }
        updateErrorCounts();
    }
    
    function setMode(modeId, isRepeat = false) {
        state.currentMode = modeId;
        state.isTestModeActive = false;
        state.isRepeatSessionActive = isRepeat;
        let wordsForSession = [];
        if (isRepeat) {
            const wordIdsToRepeat = new Set(state.wordsToRepeatByMode[modeId] || []);
            if (wordIdsToRepeat.size === 0) {
                showMessage('Keine Fehler zum Wiederholen in diesem Modus.', 'info');
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
        } catch (e) {
            console.error("Fehler beim Laden des Fortschritts. Setze zurück.", e);
            state.globalProgress = {};
            localStorage.removeItem('goetheA1Progress');
        }
    }
    
    function updateErrorCounts() {
        Object.keys(learningModes).forEach(mode => {
            const repeatButton = document.getElementById(`mode-repeat-${mode}`);
            if (repeatButton) {
                const countSpan = repeatButton.querySelector('.count-display');
                const errorCount = state.wordsToRepeatByMode[mode]?.size || 0;
                countSpan.textContent = errorCount;
                repeatButton.disabled = errorCount === 0;
            }
        });
    }

    function updateCategoryStats() {
        categoryStatsContainerEl.innerHTML = '';
        const totalItemsInSet = state.currentVocabularySet.length;
        if (totalItemsInSet === 0) return;

        const title = document.createElement('p');
        title.className = 'text-xs text-gray-500 text-center mb-1';
        title.textContent = 'Fortschritt pro Übungsmodus:';
        categoryStatsContainerEl.appendChild(title);

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'text-xs text-gray-600 space-y-1';
        Object.keys(learningModes).forEach(modeId => {
            const modeInfo = learningModes[modeId];
            const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
            const masteredCount = state.globalProgress[progressKey]?.[modeId]?.size || 0;
            const percentage = totalItemsInSet > 0 ? (masteredCount / totalItemsInSet) * 100 : 0;
            const item = document.createElement('div');
            item.className = 'category-stat-item';
            item.innerHTML = `<span class="category-stat-text">${modeInfo.name}: ${masteredCount} / ${totalItemsInSet}</span><div class="category-progress-bar-bg"><div class="category-progress-bar-fg" style="width: ${percentage}%;"></div></div>`;
            itemsContainer.appendChild(item);
        });
        categoryStatsContainerEl.appendChild(itemsContainer);
    }
    
    function updatePracticeStats() {
        correctInRoundPracticeEl.textContent = state.correctInRound;
        attemptedInRoundPracticeEl.textContent = state.attemptedInRound;
        const accuracy = state.attemptedInRound > 0 ? (state.correctInRound / state.attemptedInRound) * 100 : 0;
        accuracyBarEl.style.width = `${accuracy}%`;
        updateCategoryStats();
    }

    function updateTestStats() {
        const totalQuestions = state.currentVocabularySet.length;
        testProgressTextEl.textContent = `${state.attemptedInRound} / ${totalQuestions}`;
        const progressPercentage = totalQuestions > 0 ? (state.attemptedInRound / totalQuestions) * 100 : 0;
        testProgressEl.style.width = `${progressPercentage}%`;
        testAccuracyTextEl.textContent = `${state.correctInRound} / ${state.attemptedInRound}`;
        const accuracyPercentage = state.attemptedInRound > 0 ? (state.correctInRound / state.attemptedInRound) * 100 : 0;
        testAccuracyBarEl.style.width = `${accuracyPercentage}%`;
    }
    
    function erstelleTestAufgaben() {
        return shuffleArray([...alleVokabeln]).slice(0, 36);
    }

    function starteGesamtTest(modus) {
        const aufgaben = erstelleTestAufgaben();
        const anzahlAufgaben = aufgaben.length;
        if (anzahlAufgaben < 1) { showMessage('Fehler: Es konnten nicht genügend Testaufgaben erstellt werden.', 'error'); return; }
        state.isTestModeActive = true;
        state.currentMode = modus;
        state.currentMainTopic = "Gesamttest"; // Angepasst
        state.currentSubTopic = modus; // Angepasst
        state.currentVocabularySet = aufgaben;
        state.shuffledVocabForMode = aufgaben;
        state.masteredWordsByMode = {};
        state.wordsToRepeatByMode = {};
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;
        hideAllUIs();
        trainerMainViewEl.classList.remove('hidden-view');
        const modusName = learningModes[modus]?.name || "Test";
        currentTrainingTitleEl.textContent = `Test - ${modusName}`;
        practiceStatsViewEl.classList.add('hidden');
        testStatsViewEl.classList.remove('hidden');
        modeButtonGridEl.classList.add('hidden');
        updateTestStats();
        updateErrorCounts();
        loadNextTask();
    }

    function updateTestModeProgressBars() {
        const testOptionsButtons = document.querySelectorAll('#test-options-grid .wortgruppe-button');
        testOptionsButtons.forEach(button => {
            const testType = button.dataset.testType;
            const score = state.lastTestScores ? state.lastTestScores[testType] : null;
            const progressBar = button.querySelector('.progress-bar-fill');
            if (score && progressBar) {
                const percentage = score.accuracy * 100;
                let barColor = '#374151'; 
                if (percentage > 66) { barColor = '#d69e2e'; } else if (percentage > 33) { barColor = '#ef4444'; }
                progressBar.style.width = `${percentage}%`;
                progressBar.style.backgroundColor = barColor;
            } else if (progressBar) {
                progressBar.style.width = '0%';
                progressBar.style.backgroundColor = '#374151';
            }
        });
    }

    // =========================================================================
    // NEUE NAVIGATIONS-LOGIK
    // =========================================================================
    
    function displayMainTopics() {
        navigationViewEl.classList.remove('hidden-view');
        trainerMainViewEl.classList.add('hidden-view');
        navigationTitleEl.textContent = 'Themenübersicht';
        backToMainTopicsButton.classList.add('hidden');
        navigationContainerEl.innerHTML = '';

        Object.keys(vokabular).forEach(topicName => {
            const button = document.createElement('button');
            button.className = 'wortgruppe-button rounded-lg';
            button.textContent = topicName;
            button.dataset.mainTopic = topicName;
            navigationContainerEl.appendChild(button);
        });

        const testButton = document.createElement('button');
        testButton.id = 'start-test-mode-btn';
        testButton.className = 'col-span-2 sm:col-span-3 rounded-lg py-2 font-semibold bg-gray-300 hover:bg-gray-500 hover:text-white transition-colors duration-200';
        testButton.textContent = `Gesamttest starten`;
        navigationContainerEl.appendChild(testButton);
    }

    function displaySubTopics(mainTopicName) {
        state.currentMainTopic = mainTopicName;
        navigationTitleEl.textContent = mainTopicName;
        backToMainTopicsButton.classList.remove('hidden');
        navigationContainerEl.innerHTML = '';
        Object.keys(vokabular[mainTopicName]).forEach(subTopicName => {
            const button = document.createElement('button');
            button.className = 'wortgruppe-button rounded-lg';
            button.textContent = subTopicName;
            button.dataset.subTopic = subTopicName;
            navigationContainerEl.appendChild(button);
        });
    }

    function startTraining(subTopicName) {
        state.currentSubTopic = subTopicName;
        const vocabularySet = vokabular[state.currentMainTopic][subTopicName];
        if (!vocabularySet || vocabularySet.length === 0) { showMessage(`Keine Vokabeln für "${subTopicName}" gefunden.`, 'info'); return; }
        
        hideAllUIs();
        state.isTestModeActive = false;
        state.currentVocabularySet = vocabularySet;
        const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
        const progressForGroup = state.globalProgress[progressKey] || {};
        Object.keys(learningModes).forEach(mode => { state.masteredWordsByMode[mode] = new Set(progressForGroup[mode] || []); state.wordsToRepeatByMode[mode] = new Set(); });
        
        practiceStatsViewEl.classList.remove('hidden');
        testStatsViewEl.classList.add('hidden');
        modeButtonGridEl.classList.remove('hidden');
        currentTrainingTitleEl.textContent = subTopicName;
        navigationViewEl.classList.add('hidden-view');
        trainerMainViewEl.classList.remove('hidden-view');
        updatePracticeStats();
        updateErrorCounts();
        setTimeout(() => setMode('mc-de-en'), 10);
    }

    function handleNavigation(event) {
        const mainTopicButton = event.target.closest('[data-main-topic]');
        const subTopicButton = event.target.closest('[data-sub-topic]');
        const testButton = event.target.closest('#start-test-mode-btn');

        if (mainTopicButton) { displaySubTopics(mainTopicButton.dataset.mainTopic); } 
        else if (subTopicButton) { startTraining(subTopicButton.dataset.subTopic); }
        else if (testButton) { updateTestModeProgressBars(); testSelectionModalEl.classList.remove('hidden-view'); }
    }
    
    // NEU: Funktion zum Einfügen von Text an der Cursorposition
    function insertTextAtCursor(inputElement, text) {
        if (!inputElement) return;
        const start = inputElement.selectionStart;
        const end = inputElement.selectionEnd;
        const oldValue = inputElement.value;
        inputElement.value = oldValue.substring(0, start) + text + oldValue.substring(end);
        inputElement.selectionStart = inputElement.selectionEnd = start + text.length;
        inputElement.focus(); // Wichtig, um den Fokus zu behalten/wiederherzustellen
        // Manuell ein 'input'-Event auslösen, falls andere Logik darauf hört
        const event = new Event('input', { bubbles: true, cancelable: true });
        inputElement.dispatchEvent(event);
    }

    // NEU: Initialisiert die Umlaut-Buttons
    function initUmlautButtons() {
        if (dom.umlautButtonsContainerEl) {
            const buttons = dom.umlautButtonsContainerEl.querySelectorAll('.umlaut-button');
             buttons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const charToInsert = event.shiftKey ? button.textContent.toUpperCase() : button.textContent;
                    insertTextAtCursor(state.activeTextInput, charToInsert);
                });
            });
         }
    }
    function initTestModeListeners() {
        testSelectionModalEl.addEventListener('click', (event) => { if (event.target === testSelectionModalEl) { testSelectionModalEl.classList.add('hidden-view'); } });
        if (testOptionsGridEl) {
            testOptionsGridEl.addEventListener('click', (event) => { const selectedButton = event.target.closest('.wortgruppe-button'); if (!selectedButton) return; const selectedTestType = selectedButton.dataset.testType; if (selectedTestType) { testSelectionModalEl.classList.add('hidden-view'); starteGesamtTest(selectedTestType); } });
        }
    }

    function init() {
        state.lastTestScores = {};
        loadGlobalProgress();
        loadLastTestScores();
        
        // NEU: Firebase Sync-Listener für Updates von anderen Geräten.
        // Wird hier initialisiert, um sicherzustellen, dass alle UI-Funktionen (z.B. displayMainTopics) bereits definiert sind.
        syncService.onSyncUpdate((type, data) => {
            if (type === 'remoteUpdate' && data) {
                console.log('📥 Fortschritt von anderem Gerät erhalten.');
                
                // Daten von Firebase (Arrays) wieder in Sets umwandeln
                const convertedProgress = {};
                for (const gruppe in data) {
                    convertedProgress[gruppe] = {};
                    for (const mode in data[gruppe]) {
                        if (Array.isArray(data[gruppe][mode])) {
                            convertedProgress[gruppe][mode] = new Set(data[gruppe][mode]);
                        }
                    }
                }
                state.globalProgress = convertedProgress;
                displayMainTopics(); // UI mit dem neuen Fortschritt aktualisieren
                showMessage('Fortschritt synchronisiert!', 'success');
            }
        });

        navigationContainerEl.addEventListener('click', handleNavigation);
        backToMainTopicsButton.addEventListener('click', displayMainTopics);
        backToSubtopicsButton.addEventListener('click', () => { if (state.currentMainTopic) { displaySubTopics(state.currentMainTopic); } else { displayMainTopics(); } navigationViewEl.classList.remove('hidden-view'); trainerMainViewEl.classList.add('hidden-view'); });
        
        Object.keys(learningModes).forEach(modeId => { const button = document.getElementById(`mode-${modeId}`); const repeatButton = document.getElementById(`mode-repeat-${modeId}`); if (button) button.addEventListener('click', () => setMode(modeId, false)); if (repeatButton) repeatButton.addEventListener('click', () => setMode(modeId, true)); });
        continueButton.addEventListener('click', loadNextTask);
        
        initUmlautButtons(); // NEU: Umlaut-Buttons initialisieren
        initTestModeListeners();
        displayMainTopics();
    }
    
    init();
});