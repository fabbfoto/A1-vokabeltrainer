// trainer.js - Angepasst für den Speicherort packages/trainer-basis/

// Import der Vokabeln aus dem gleichen Ordner
import { goetheA1Wortschatz } from './vokabular.js';

// Import der Helfer- und UI-Funktionen aus dem geteilten Ordner (zwei Ebenen nach oben, dann in /shared)
import { vergleicheAntwort, shuffleArray, setUIMode, calculateProgressPercentage, getProgressColorClass, insertTextAtCursor } from '../../shared/helfer.js';
import * as uiModes from '../../shared/ui-modes.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("[trainer.js] DOMContentLoaded Event ausgelöst. Starte Initialisierung..."); // NEUER LOG

    // NEU: Ein zentrales State-Objekt, um den Zustand der App zu verwalten (kopiert von trainer-themen).
    const state = {
        currentWortgruppeName: null, // Angepasst für Basis-Trainer
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

    let wortgruppenSelectorContainerEl, trainerMainViewEl, wortgruppenButtonsEl, backToWortgruppenButton,
        currentWortgruppeTitleEl, modeButtonGridEl, questionDisplayEl, exampleSentenceDisplayEl,
        mcUiEl, mcAnswersContainerEl, spellingModeUiEl, singleInputContainerEl, spellingInputSingleEl,
        nounInputContainerEl, spellingInputNoun1El, spellingInputNoun2El, checkSpellingButton,
        clozeUiEl, clozeHintContainerEl, clozeSentenceContainerEl, checkClozeButton, sentenceUiEl,
        sentenceWordInputContainerEl, checkSentenceButton, feedbackContainerEl, continueButton,
        messageBoxEl, wordLineContainerEl, sentenceLineContainerEl, audioWordButtonEl, audioSentenceButtonEl, umlautButtonsContainerEl,
        SVG_SPEAKER_ICON,
        practiceStatsViewEl, correctInRoundPracticeEl, attemptedInRoundPracticeEl, accuracyBarEl, categoryStatsContainerEl,
        testStatsViewEl, testProgressTextEl, testProgressEl, testAccuracyTextEl, testAccuracyBarEl;

    function initializeDOMReferences() {
        wortgruppenSelectorContainerEl = document.getElementById('wortgruppen-selector');
        trainerMainViewEl = document.getElementById('trainer-main-view');
        wortgruppenButtonsEl = document.getElementById('wortgruppen-buttons');
        backToWortgruppenButton = document.getElementById('back-to-wortgruppen');
        currentWortgruppeTitleEl = document.getElementById('current-wortgruppe-title');
        modeButtonGridEl = document.getElementById('mode-button-grid');
        questionDisplayEl = document.getElementById('question-display-area');
        exampleSentenceDisplayEl = document.getElementById('example-sentence-display');
        mcUiEl = document.getElementById('mc-de-en-ui');
        mcAnswersContainerEl = document.getElementById('mc-answers-container');
        spellingModeUiEl = document.getElementById('spelling-mode-ui');
        singleInputContainerEl = document.getElementById('single-input-container');
        spellingInputSingleEl = document.getElementById('spelling-input-single');
        nounInputContainerEl = document.getElementById('noun-input-container');
        spellingInputNoun1El = document.getElementById('spelling-input-noun-1');
        spellingInputNoun2El = document.getElementById('spelling-input-noun-2');
        checkSpellingButton = document.getElementById('check-spelling-button');
        clozeUiEl = document.getElementById('cloze-adj-de-ui');
        clozeHintContainerEl = document.getElementById('cloze-hint-container');
        clozeSentenceContainerEl = document.getElementById('cloze-sentence-container');
        checkClozeButton = document.getElementById('check-cloze-button');
        sentenceUiEl = document.getElementById('sentence-translation-en-de-ui');
        sentenceWordInputContainerEl = document.getElementById('sentence-word-input-container');
        checkSentenceButton = document.getElementById('check-sentence-translation-button');
        feedbackContainerEl = document.getElementById('feedback-container');
        continueButton = document.getElementById('continue-button');
        messageBoxEl = document.getElementById('message-box');
        wordLineContainerEl = document.getElementById('word-line-container');
        sentenceLineContainerEl = document.getElementById('sentence-line-container');
        audioWordButtonEl = document.getElementById('audio-word-button');
        audioSentenceButtonEl = document.getElementById('audio-sentence-button');
        practiceStatsViewEl = document.getElementById('practice-stats-view');
        correctInRoundPracticeEl = document.getElementById('correct-in-round-practice');
        attemptedInRoundPracticeEl = document.getElementById('attempted-in-round-practice');
        accuracyBarEl = document.getElementById('accuracy-bar');
        categoryStatsContainerEl = document.getElementById('category-stats-container');
        testStatsViewEl = document.getElementById('test-stats-view');
        testProgressTextEl = document.getElementById('test-progress-text');
        testProgressEl = document.getElementById('test-progress-bar');
        testAccuracyTextEl = document.getElementById('test-accuracy-text');
        testAccuracyBarEl = document.getElementById('test-accuracy-bar');
        umlautButtonsContainerEl = document.getElementById('umlaut-buttons-container');
        SVG_SPEAKER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.858 12H4a1 1 0 00-1 1v2a1 1 0 001 1h1.858l4.47 4.47A1 1 0 0012 20V4a1 1 0 00-1.672-.748L5.858 12z" /></svg>`;
    }

    function showMessage(message, type = 'error', duration = 3000) { 
        messageBoxEl.textContent = message; 
        messageBoxEl.className = `fixed bottom-5 right-5 text-white p-3 rounded-lg shadow-xl ${type === 'success' ? 'bg-green-500' : type === 'info' ? 'bg-blue-500' : 'bg-red-500'}`; 
        messageBoxEl.classList.remove('hidden'); 
        setTimeout(() => messageBoxEl.classList.add('hidden'), duration); 
    }

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
        state.lastTestScores[state.currentMode] = {
            correct: state.correctInRound,
            total: state.attemptedInRound,
            accuracy: accuracy
        };
        saveLastTestScores();

        showMessage(`Test beendet! Ergebnis: ${state.correctInRound} / ${state.attemptedInRound}`, 'success', 5000);
        state.isTestModeActive = false;
        showWortgruppenSelector();
    }

    function loadNextTask() {
        hideAllUIs();
        if ((!state.currentVocabularySet || state.currentVocabularySet.length === 0) && state.shuffledVocabForMode.length === 0) return;

        state.currentWordIndexInShuffled++;

        if (state.currentWordIndexInShuffled >= state.shuffledVocabForMode.length) {
            if (state.isTestModeActive) {
                handleTestCompletion();
                return;
            }

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
        const modeIdToRun = state.currentMode;
        const modeInfo = learningModes[modeIdToRun];
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
                if (!state.globalProgress[state.currentWortgruppeName]) state.globalProgress[state.currentWortgruppeName] = {};
                if (!state.globalProgress[state.currentWortgruppeName][state.currentMode]) state.globalProgress[state.currentWortgruppeName][state.currentMode] = new Set();
                state.globalProgress[state.currentWortgruppeName][state.currentMode].add(wordId);
                if(state.masteredWordsByMode[state.currentMode]) state.masteredWordsByMode[state.currentMode].add(wordId);
                if(state.wordsToRepeatByMode[state.currentMode]) state.wordsToRepeatByMode[state.currentMode].delete(wordId);

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

        if (state.isTestModeActive) {
            updateTestStats();
        } else {
            updatePracticeStats();
        }
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
            wordsForSession = alleVokabeln.filter(word => word.id && wordIdsToRepeat.has(word.id));
        } else {
            wordsForSession = [...state.currentVocabularySet];
        }
        state.shuffledVocabForMode = shuffleArray(wordsForSession);
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;
        document.querySelectorAll('#mode-selector .mode-button').forEach(btn => btn.classList.remove('active', 'repeat-active'));
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
            const masteredCount = state.masteredWordsByMode[modeId]?.size || 0;
            const percentage = totalItemsInSet > 0 ? (masteredCount / totalItemsInSet) * 100 : 0;
            // NEU: Deutschland-Farben verwenden
            const colorClass = getProgressColorClass(masteredCount, totalItemsInSet);
            const item = document.createElement('div');
            item.className = 'category-stat-item';
            item.innerHTML = `<span class="category-stat-text">${modeInfo.name}: ${masteredCount} / ${totalItemsInSet}</span><div class="category-progress-bar-bg"><div class="category-progress-bar-fg ${colorClass}" style="width: ${percentage}%;"></div></div>`;
            itemsContainer.appendChild(item);
        });
        categoryStatsContainerEl.appendChild(itemsContainer);
    }

    function populateWortgruppenButtons() {
        wortgruppenButtonsEl.innerHTML = '';
        const alleWortgruppenNamen = Object.keys(goetheA1Wortschatz);
        alleWortgruppenNamen.forEach((name, index) => {
            const button = document.createElement('button');
            button.className = 'wortgruppe-button rounded-lg';
            button.onclick = () => showTrainerForWortgruppe(name);
            const totalWordsInGroup = goetheA1Wortschatz[name]?.length || 0;
            const numberOfModes = 4;
            const totalTasks = totalWordsInGroup * numberOfModes;
            let completedTasks = 0;
            if (state.globalProgress[name]) {
                completedTasks = Object.values(state.globalProgress[name]).reduce((sum, set) => sum + set.size, 0);
            }
            const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0; // Behalte diese Zeile, da sie für percentage benötigt wird
            const colorClass = getProgressColorClass(completedTasks, totalTasks);
            button.innerHTML = `<span class="button-text-label">${name}</span><div class="progress-bar-container"><div class="progress-bar-fill ${colorClass}" style="width: ${percentage}%;"></div></div>`;
            wortgruppenButtonsEl.appendChild(button);
        });

        const testButton = document.createElement('button');
        testButton.id = 'start-test-mode-btn';
        testButton.className = 'col-span-3 rounded-lg py-2 font-semibold bg-gray-300 hover:bg-gray-500 hover:text-white transition-colors duration-200';
        testButton.innerHTML = `Test`;
        wortgruppenButtonsEl.appendChild(testButton);
    }

    function showWortgruppenSelector() {
        populateWortgruppenButtons();
        setUIMode('wortgruppen-selector');
    }

    function showTrainerForWortgruppe(wortgruppeName) {
        hideAllUIs();
        state.currentWortgruppeName = wortgruppeName;
        state.isTestModeActive = false;
        state.currentVocabularySet = goetheA1Wortschatz[wortgruppeName] || [];

        practiceStatsViewEl.classList.remove('hidden');
        testStatsViewEl.classList.add('hidden');
        modeButtonGridEl.classList.remove('hidden');

        state.masteredWordsByMode = {};
        state.wordsToRepeatByMode = {};
        const progressForGroup = state.globalProgress[state.currentWortgruppeName] || {};
        Object.keys(learningModes).forEach(mode => {
            state.masteredWordsByMode[mode] = new Set(progressForGroup[mode] || []);
            state.wordsToRepeatByMode[mode] = new Set();
        });
        if (state.currentVocabularySet.length === 0) {
            showMessage(`"${wortgruppeName}" ist leer oder konnte nicht geladen werden.`, 'info');
            return;
        }
        currentWortgruppeTitleEl.textContent = wortgruppeName;
        setUIMode('trainer-main-view');
        updatePracticeStats();
        updateErrorCounts();
        setTimeout(() => setMode('mc-de-en'), 10);
    }

    function updatePracticeStats() {
        correctInRoundPracticeEl.textContent = state.correctInRound;
        attemptedInRoundPracticeEl.textContent = state.attemptedInRound;
        const accuracy = state.attemptedInRound > 0 ? (state.correctInRound / state.attemptedInRound) * 100 : 0;
        // NEU: Deutschland-Farben für Accuracy-Bar verwenden
        const colorClass = getProgressColorClass(accuracy, 100);
        accuracyBarEl.style.width = `${accuracy}%`;
        accuracyBarEl.className = `stats-bar ${colorClass}`;
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

    function initUmlautButtons() {
        if (umlautButtonsContainerEl) {
            const buttons = umlautButtonsContainerEl.querySelectorAll('.umlaut-button');
            buttons.forEach(button => {
                button.addEventListener('click', (event) => {
                    const charToInsert = event.shiftKey ? button.textContent.toUpperCase() : button.textContent;
                    insertTextAtCursor(state.activeTextInput, charToInsert);
                });
            });
        }
    }

    function erstelleTestAufgaben() {
        const alleWortgruppenNamen = Object.keys(goetheA1Wortschatz);
        let testAufgaben = [];
        alleWortgruppenNamen.forEach(gruppenName => {
            const gruppenVokabeln = goetheA1Wortschatz[gruppenName];
            if (gruppenVokabeln && gruppenVokabeln.length > 0) {
                const shuffledGruppe = shuffleArray([...gruppenVokabeln]);
                const ausgewaehlteAufgaben = shuffledGruppe.slice(0, 2);
                testAufgaben.push(...ausgewaehlteAufgaben);
            }
        });
        return shuffleArray(testAufgaben);
    }

    function starteGesamtTest(modus) {
        const aufgaben = erstelleTestAufgaben();
        const anzahlAufgaben = aufgaben.length;
        if (anzahlAufgaben < 1) {
            showMessage('Fehler: Es konnten nicht genügend Testaufgaben erstellt werden.', 'error');
            return;
        }
        state.isTestModeActive = true;
        state.currentMode = modus;
        state.currentWortgruppeName = "Gesamttest";
        state.currentVocabularySet = aufgaben;
        state.shuffledVocabForMode = aufgaben;
        state.masteredWordsByMode = {};
        state.wordsToRepeatByMode = {};
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;

        hideAllUIs();
        const modusName = learningModes[modus]?.name || "Test";
        currentWortgruppeTitleEl.textContent = `Test - ${modusName}`;

        practiceStatsViewEl.classList.add('hidden');
        testStatsViewEl.classList.remove('hidden');
        modeButtonGridEl.classList.add('hidden');
        setUIMode('trainer-main-view');

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
                if (percentage > 66) {
                    barColor = '#d69e2e';
                } else if (percentage > 33) {
                    barColor = '#ef4444';
                }

                progressBar.style.width = `${percentage}%`;
                progressBar.style.backgroundColor = barColor;
            } else if (progressBar) {
                progressBar.style.width = '0%';
                progressBar.style.backgroundColor = '#374151';
            }
        });
    }

    function initTestModeListeners() {
        const testSelectionModalEl = document.getElementById('test-selection-modal');
        const testOptionsContainer = document.getElementById('test-options-grid');

        wortgruppenButtonsEl.addEventListener('click', (event) => {
            const testButton = event.target.closest('#start-test-mode-btn');
            if (testButton) {
                updateTestModeProgressBars();
                testSelectionModalEl.classList.remove('hidden-view');
            }
        });
        testSelectionModalEl.addEventListener('click', (event) => {
            if (event.target === testSelectionModalEl) {
                testSelectionModalEl.classList.add('hidden-view');
            }
        });
        testOptionsContainer.addEventListener('click', (event) => {
            const selectedButton = event.target.closest('.wortgruppe-button');
            if (!selectedButton) return;
            const selectedTestType = selectedButton.dataset.testType;
            if (selectedTestType) {
                testSelectionModalEl.classList.add('hidden-view');
                starteGesamtTest(selectedTestType);
            }
        });
    }

    function init() {
        state.lastTestScores = {};
        loadGlobalProgress();
        loadLastTestScores();

        backToWortgruppenButton.addEventListener('click', showWortgruppenSelector);
        Object.keys(learningModes).forEach(modeId => {
            const button = document.getElementById(`mode-${modeId}`);
            const repeatButton = document.getElementById(`mode-repeat-${modeId}`);
            if (button) button.addEventListener('click', () => setMode(modeId, false));
            if (repeatButton) repeatButton.addEventListener('click', () => setMode(modeId, true));
        });
        continueButton.addEventListener('click', () => {
            loadNextTask();
        });
        initUmlautButtons();
        showWortgruppenSelector();
        initTestModeListeners();
    }

    // ===== START DER INITIALISIERUNGSSEQUENZ =====

    initializeDOMReferences();

    if (typeof goetheA1Wortschatz === 'undefined' || typeof vergleicheAntwort === 'undefined') {
        console.error("KRITISCHER FEHLER: Wichtige Skript-Dateien (vokabular.js, helfer.js) fehlen oder sind fehlerhaft.");
        document.body.innerHTML = '<div style="padding: 2rem; text-align: center; font-family: sans-serif; background-color: #ffcccc; border: 2px solid red;"><h1>Fehler beim Laden</h1><p>Wichtige App-Daten konnten nicht geladen werden. Bitte überprüfe die Browser-Konsole (F12) für Details.</p></div>';
        return;
    }

    const dom = {
        mcUiEl, mcAnswersContainerEl, questionDisplayEl, exampleSentenceDisplayEl, audioWordButtonEl,
        audioSentenceButtonEl, wordLineContainerEl, sentenceLineContainerEl, SVG_SPEAKER_ICON,
        spellingModeUiEl, checkSpellingButton, singleInputContainerEl, nounInputContainerEl,
        spellingInputSingleEl, spellingInputNoun1El, spellingInputNoun2El,
        clozeUiEl, clozeHintContainerEl, clozeSentenceContainerEl, checkClozeButton,
        sentenceUiEl, sentenceWordInputContainerEl, checkSentenceButton, 
        umlautButtonsContainerEl
    };

    const alleVokabeln = Object.values(goetheA1Wortschatz).flat();

    const learningModes = {
        'mc-de-en': { name: "Bedeutung", setupFunc: () => uiModes.setupMcDeEnMode(dom, state, alleVokabeln, processAnswer) },
        'type-de-adj': { name: "Schreibweise", setupFunc: () => uiModes.setupSpellingMode(dom, state, processAnswer) },
        'cloze-adj-de': { name: "Lückentext", setupFunc: () => uiModes.setupClozeAdjDeMode(dom, state, processAnswer) },
        'sentence-translation-en-de': { name: "Satzübersetzung", setupFunc: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, processAnswer) },
    };

    init();

    function displaySentence(vokabel, sentenceContainer) {
        sentenceContainer.innerHTML = '';

        if (!vokabel.beispielsatz) {
            return;
        }

        if (Array.isArray(vokabel.beispielsatz)) {
            vokabel.beispielsatz.forEach(part => {
                const span = document.createElement('span');
                span.textContent = part.text;

                if (part.kasus && part.kasus !== 'none') {
                    span.className = `kasus-${part.kasus}`;
                }
                sentenceContainer.appendChild(span);
            });
        } else {
            sentenceContainer.textContent = vokabel.beispielsatz;
        }
    }

});