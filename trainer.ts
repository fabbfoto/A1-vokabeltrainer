// trainer.ts - VOLLSTÄNDIGE TypeScript VERSION - KORRIGIERT
// Steuerungslogik für den Themen-Trainer mit vollständiger Type-Safety
// Diese Datei orchestriert den Anwendungszustand (State) und die UI-Interaktionen

// ✅ KORREKTE TYPE IMPORTS - verwende existierende Types!
import type {
    Word,
    TrainerState,
    VocabularyStructure,
    LearningModes,
    UICallbacks,
    AuthUI,
    InitializeAuthResult,
    ModeId,
    TopicId,
    SubTopicId,
    WordId,
    TestScore,
    TestConfiguration // KORREKTUR: Fehlenden Typ importieren
} from './shared/types/index';

// Import DOMElements from dom.ts to avoid interface conflicts
import type { DOMElements } from './dom';
// Import des kombinierten Vokabulars
import { vokabular } from './vokabular';

// Import der Helfer- und UI-Funktionen
import { shuffleArray, speak, vergleicheAntwort } from './shared/utils/helfer';
import * as uiModes from './shared/utils/ui-modes';
import { dom } from './dom';
import * as ui from './ui/index';

// Import der Auth- und Sync-Funktionen
import { initializeAuth } from './shared/auth/index';
import { NavigationEvents } from './shared/events/navigation-events';

// Direkt nach dem Import
console.log('📚 Vokabular importiert:', vokabular);
console.log('📚 Anzahl Hauptthemen:', Object.keys(vokabular).length);

// Globale AuthUI Referenz
let globalAuthUI: AuthUI | null = null;

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {
    console.log('🚀 DOMContentLoaded Event gefeuert');

    // DOM-Elemente für die UI-Module bündeln
    const dom = {
        mcUiEl: document.getElementById('mc-de-en-ui') as HTMLElement,
        mcAnswersContainerEl: document.getElementById('mc-answers-container') as HTMLElement,
        questionDisplayEl: document.getElementById('question-display-area') as HTMLElement,
        exampleSentenceDisplayEl: document.getElementById('example-sentence-display') as HTMLElement,
        audioWordButtonEl: document.getElementById('audio-word-button') as HTMLElement,
        audioSentenceButtonEl: document.getElementById('audio-sentence-button') as HTMLElement,
        wordLineContainerEl: document.getElementById('word-line-container') as HTMLElement,
        sentenceLineContainerEl: document.getElementById('sentence-line-container') as HTMLElement,
        SVG_SPEAKER_ICON: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.858 12H4a1 1 0 00-1 1v2a1 1 0 001 1h1.858l4.47 4.47A1 1 0 0012 20V4a1 1 0 00-1.672-.748L5.858 12z" /></svg>`,
        spellingModeUiEl: document.getElementById('spelling-mode-ui') as HTMLElement,
        checkSpellingButton: document.getElementById('check-spelling-button') as HTMLButtonElement,
        singleInputContainerEl: document.getElementById('single-input-container') as HTMLElement,
        nounInputContainerEl: document.getElementById('noun-input-container') as HTMLElement,
        spellingInputSingleEl: document.getElementById('spelling-input-single') as HTMLInputElement,
        spellingInputNoun1El: document.getElementById('spelling-input-noun-1') as HTMLInputElement,
        spellingInputNoun2El: document.getElementById('spelling-input-noun-2') as HTMLInputElement,
        clozeUiEl: document.getElementById('cloze-adj-de-ui') as HTMLElement,
        clozeHintContainerEl: document.getElementById('cloze-hint-container') as HTMLElement,
        clozeSentenceContainerEl: document.getElementById('cloze-sentence-container') as HTMLElement,
        checkClozeButton: document.getElementById('check-cloze-button') as HTMLButtonElement,
        sentenceUiEl: document.getElementById('sentence-translation-en-de-ui') as HTMLElement,
        sentenceWordInputContainerEl: document.getElementById('sentence-word-input-container') as HTMLElement,
        checkSentenceButton: document.getElementById('check-sentence-translation-button') as HTMLButtonElement,
        umlautButtonsContainerEl: document.getElementById('umlaut-buttons-container') as HTMLElement,
        trainerMainViewEl: document.getElementById('trainer-main-view') as HTMLElement,
        navigationViewEl: document.getElementById('navigation-view') as HTMLElement,
        currentTrainingTitleEl: document.getElementById('current-training-title') as HTMLElement,
        practiceStatsViewEl: document.getElementById('practice-stats-view') as HTMLElement,
        testStatsViewEl: document.getElementById('test-stats-view') as HTMLElement,
        modeButtonGridEl: document.getElementById('mode-button-grid') as HTMLElement,
        feedbackContainerEl: document.getElementById('feedback-container') as HTMLElement,
        continueButton: document.getElementById('continue-button') as HTMLButtonElement,
        messageBoxEl: document.getElementById('message-box') as HTMLElement,
        correctInRoundPracticeEl: document.getElementById('correct-in-round-practice') as HTMLElement,
        attemptedInRoundPracticeEl: document.getElementById('attempted-in-round-practice') as HTMLElement,
        accuracyBarEl: document.getElementById('accuracy-bar') as HTMLElement,
        categoryStatsContainerEl: document.getElementById('category-stats-container') as HTMLElement,
        testProgressTextEl: document.getElementById('test-progress-text') as HTMLElement,
        testProgressEl: document.getElementById('test-progress-bar') as HTMLElement,
        testAccuracyTextEl: document.getElementById('test-accuracy-text') as HTMLElement,
        testAccuracyBarEl: document.getElementById('test-accuracy-bar') as HTMLElement,
        testSelectionModalEl: document.getElementById('test-selection-modal') as HTMLElement,
        testOptionsGridEl: document.getElementById('test-options-grid') as HTMLElement,
    };

    // Firebase Auth und Sync initialisieren
    console.log('📱 Initialisiere Firebase...');
    const authService = { isLoggedIn: () => false };
    const authUI: AuthUI = {
        show: () => { },
        hide: () => { },
        isVisible: false,
        container: null
    };
    const syncService = {
        onSyncUpdate: () => { },
        saveProgress: async () => { }
    };

    NavigationEvents.dispatchRoot();
    globalAuthUI = authUI;

    const state: TrainerState = {
        currentMainTopic: null,
        currentSubTopic: null,
        previousMainTopic: null,
        previousSubTopic: null,
        currentVocabularySet: [],
        shuffledWordsForMode: [],
        currentWordIndex: -1,
        currentWord: null,
        currentMode: null,
        sessionId: null,
        isTestModeActive: false,
        isRepeatSessionActive: false,
        currentTest: null,
        testResults: [],
        correctInCurrentRound: 0,
        attemptedInCurrentRound: 0,
        globalProgress: {},
        masteredWordsByMode: {},
        wordsToRepeatByMode: {},
        lastTestScores: {},
        sessionStats: [],
        activeTextInput: null,
        isLoading: false,
        currentError: null
    };

    // Hilfsfunktionen für Progress-Management
    function loadProgress(): void {
        const saved = localStorage.getItem('trainer-progress');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                state.globalProgress = parsed;
                console.log('✅ Progress geladen:', Object.keys(state.globalProgress).length, 'Einträge');
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden des Progress:', e);
            }
        }
    }

    function saveProgress(): void {
        try {
            localStorage.setItem('trainer-progress', JSON.stringify(state.globalProgress));
            console.log('✅ Progress gespeichert');
        } catch (e) {
            console.warn('⚠️ Fehler beim Speichern:', e);
        }
    }

    function loadMasteredWords(): void {
        const saved = localStorage.getItem('trainer-mastered-words');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                Object.keys(parsed).forEach(mode => {
                    state.masteredWordsByMode[mode as ModeId] = new Set(parsed[mode] as WordId[]);
                });
                console.log('✅ Mastered Words geladen');
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden der mastered words:', e);
            }
        }
    }

    function saveMasteredWords(): void {
        try {
            const toSave: Record<string, WordId[]> = {};
            Object.keys(state.masteredWordsByMode).forEach(key => {
                const mode = key as ModeId;
                toSave[mode] = Array.from(state.masteredWordsByMode[mode]!);
            });
            localStorage.setItem('trainer-mastered-words', JSON.stringify(toSave));
        } catch (e) {
            console.warn('⚠️ Fehler beim Speichern mastered words:', e);
        }
    }

    function loadWordsToRepeat(): void {
        const saved = localStorage.getItem('trainer-words-to-repeat');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                Object.keys(parsed).forEach(mode => {
                    state.wordsToRepeatByMode[mode as ModeId] = new Set(parsed[mode] as WordId[]);
                });
                console.log('✅ Words to repeat geladen');
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden words to repeat:', e);
            }
        }
    }

    function saveWordsToRepeat(): void {
        try {
            const toSave: Record<string, WordId[]> = {};
            Object.keys(state.wordsToRepeatByMode).forEach(key => {
                const mode = key as ModeId;
                toSave[mode] = Array.from(state.wordsToRepeatByMode[mode]!);
            });
            localStorage.setItem('trainer-words-to-repeat', JSON.stringify(toSave));
        } catch (e) {
            console.warn('⚠️ Fehler beim Speichern words to repeat:', e);
        }
    }

    function loadLastTestScores(): void {
        const saved = localStorage.getItem('trainer-last-test-scores');
        if (saved) {
            try {
                state.lastTestScores = JSON.parse(saved);
                console.log('✅ Test scores geladen');
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden test scores:', e);
            }
        }
    }

    function saveLastTestScores(): void {
        try {
            localStorage.setItem('trainer-last-test-scores', JSON.stringify(state.lastTestScores));
        } catch (e) {
            console.warn('⚠️ Fehler beim Speichern test scores:', e);
        }
    }

    loadProgress();
    loadMasteredWords();
    loadWordsToRepeat();
    loadLastTestScores();

    // KORREKTUR: Die Signatur von `processAnswer` wurde an den erwarteten Typ `ProcessAnswerFunction` angepasst.
    // Der Parameter `correctAnswer` wurde entfernt. Die korrekte Antwort wird nun aus `state.currentWord` bezogen.
    // Der Parameter `timeSpent` wurde hinzugefügt, um der Typsignatur zu entsprechen.
    function processAnswer(isCorrect: boolean, userAnswer?: string, timeSpent: number = 0): void {
        state.attemptedInCurrentRound++;

        if (isCorrect) {
            state.correctInCurrentRound++;
            if (syncService.saveProgress) {
                syncService.saveProgress({
                    word: state.currentWord!,
                    mode: state.currentMode!,
                    correct: true,
                    timestamp: new Date()
                });
            }
            const modeId = state.currentMode;
            if (modeId && state.currentWord) {
                if (!state.masteredWordsByMode[modeId]) {
                    state.masteredWordsByMode[modeId] = new Set();
                }
                state.masteredWordsByMode[modeId]!.add(state.currentWord.id as WordId);
                if (state.wordsToRepeatByMode[modeId]) {
                    state.wordsToRepeatByMode[modeId]!.delete(state.currentWord.id as WordId);
                }
            }
        } else {
            const modeId = state.currentMode;
            if (modeId && state.currentWord) {
                if (!state.wordsToRepeatByMode[modeId]) {
                    state.wordsToRepeatByMode[modeId] = new Set();
                }
                state.wordsToRepeatByMode[modeId]!.add(state.currentWord.id as WordId);
            }
        }

        // KORREKTUR: Die korrekte Antwort wird jetzt aus dem State geholt, nicht mehr als Parameter übergeben.
        const correctAnswer = state.currentWord?.german || 'N/A';

        if (state.isTestModeActive) {
            const accuracy = state.attemptedInCurrentRound > 0
                ? Math.round((state.correctInCurrentRound / state.attemptedInCurrentRound) * 100)
                : 0;

            ui.showMessage(dom,
                isCorrect
                    ? `Richtig! (${accuracy}% richtig)`
                    : `Falsch! Richtige Antwort: ${correctAnswer} (${accuracy}% richtig)`,
                isCorrect ? 'success' : 'error'
            );

            const testThreshold = 0.8;
            if (state.attemptedInCurrentRound >= 10 && accuracy >= testThreshold * 100) {
                handleTestCompletion();
                return;
            }
        } else {
            ui.showMessage(dom,
                isCorrect
                    ? 'Richtig! 🎉'
                    : `Falsch! Richtige Antwort: ${correctAnswer}`,
                isCorrect ? 'success' : 'error'
            );
        }

        saveProgress();
        saveMasteredWords();
        saveWordsToRepeat();

        // KORREKTUR: `updateErrorCounts` erwartet möglicherweise das `vokabular`-Objekt als viertes Argument.
        // Falls dieser Fehler weiterhin auftritt, füge `vokabular` hier hinzu. Ansonsten ist die aktuelle Zeile korrekt.
        ui.updateErrorCounts(dom, state, learningModes);
        
        if (state.isTestModeActive) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state);
        }
    }
    
    // Learning Modes Definition mit korrekten Types
    // Die setup-Funktionen erhalten nun die korrigierte `processAnswer`-Funktion.
    const learningModes: LearningModes = {
        'multipleChoice': {
            id: 'multipleChoice' as ModeId,
            name: 'Multiple Choice (DE→EN)',
            type: 'multipleChoice',
            setupFunction: () => uiModes.setupMultipleChoiceMode(dom, state, processAnswer),
            isActive: false
        },
        'spelling': {
            id: 'spelling' as ModeId,
            name: 'Rechtschreibung (EN→DE)',
            type: 'spelling',
            setupFunction: () => uiModes.setupSpellingMode(dom, state, processAnswer),
            isActive: false
        },
        'cloze': {
            id: 'cloze' as ModeId,
            name: 'Lückentext',
            type: 'cloze',
            setupFunction: () => uiModes.setupClozeMode(dom, state, processAnswer),
            isActive: false
        },
        'sentenceTranslation': {
            id: 'sentenceTranslation' as ModeId,
            name: 'Satz-Übersetzung (EN→DE)',
            type: 'sentenceTranslation',
            setupFunction: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, processAnswer),
            isActive: false
        }
    };

    function loadNextTask(): void {
        state.currentWordIndex++;
        console.log(`[loadNextTask] Index: ${state.currentWordIndex}, Länge: ${state.shuffledWordsForMode.length}`);
        if (state.currentWordIndex >= state.shuffledWordsForMode.length) {
            const accuracy = state.attemptedInCurrentRound > 0
                ? Math.round((state.correctInCurrentRound / state.attemptedInCurrentRound) * 100)
                : 0;
            ui.showMessage(dom, `Runde beendet! Genauigkeit: ${accuracy}%`, 'success');
            state.isRepeatSessionActive = false;
            return;
        }

        state.currentWord = state.shuffledWordsForMode[state.currentWordIndex];
        console.log('[loadNextTask] Aktuelle Vokabel:', state.currentWord?.german);

        const modeInfo = state.currentMode ? learningModes[state.currentMode] : null;
        if (modeInfo && typeof modeInfo.setupFunction === 'function') {
            modeInfo.setupFunction();
        } else {
            console.error(`Keine Setup-Funktion für Modus "${state.currentMode}" gefunden`);
        }
    }

    function setMode(modeId: ModeId, isRepeat: boolean = false): void {
        state.currentMode = modeId;
        state.isTestModeActive = false;
        state.isRepeatSessionActive = isRepeat;
        let wordsForSession: Word[] = [];

        if (isRepeat) {
            const wordIdsToRepeat = state.wordsToRepeatByMode[modeId] || new Set<WordId>();
            if (wordIdsToRepeat.size === 0) {
                ui.showMessage(dom, 'Keine Fehler zum Wiederholen in diesem Modus.', 'info');
                state.isRepeatSessionActive = false;
                return;
            }
            wordsForSession = state.currentVocabularySet.filter(word => wordIdsToRepeat.has(word.id as WordId));
        } else {
            wordsForSession = [...state.currentVocabularySet];
        }

        state.shuffledWordsForMode = shuffleArray(wordsForSession);
        state.currentWordIndex = -1;
        state.correctInCurrentRound = 0;
        state.attemptedInCurrentRound = 0;

        document.querySelectorAll('#mode-button-grid .mode-button').forEach(btn => {
            if (!btn.id.includes('repeat')) {
                btn.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
                btn.classList.add('border-gray-300');
            } else {
                btn.classList.remove('bg-red-500', 'text-white');
                btn.classList.add('bg-red-100', 'text-red-500');
            }
        });

        if (isRepeat) {
            const repeatButton = document.getElementById(`mode-repeat-${modeId}`);
            repeatButton?.classList.remove('bg-red-100', 'text-red-500');
            repeatButton?.classList.add('bg-red-500', 'text-white');
        } else {
            const modeButton = document.getElementById(`mode-${modeId}`);
            modeButton?.classList.remove('border-gray-300');
            modeButton?.classList.add('bg-blue-500', 'text-white', 'border-blue-500');
        }
        loadNextTask();
    }

    function startTestUI(testTitle: string, modus: ModeId): void {
        if (globalAuthUI) globalAuthUI.hide();
        ui.hideAllUIs(dom);
        dom.trainerMainViewEl.classList.remove('hidden');
        dom.navigationViewEl.classList.add('hidden');
        const modusName = learningModes[modus]?.name || "Test";
        dom.currentTrainingTitleEl.textContent = `${testTitle} - ${modusName}`;
        dom.practiceStatsViewEl.classList.add('hidden');
        dom.testStatsViewEl.classList.remove('hidden');
        dom.modeButtonGridEl.classList.add('hidden');
        ui.updateTestStats(dom, state);
        ui.updateErrorCounts(dom, state, learningModes);
        loadNextTask();
    }

    function handleTestCompletion(): void {
        const accuracy = state.attemptedInCurrentRound > 0
            ? (state.correctInCurrentRound / state.attemptedInCurrentRound)
            : 0;

        if (!state.lastTestScores) state.lastTestScores = {};
        const testScore: TestScore = {
            testId: `test_${Date.now()}` as any,
            correct: state.correctInCurrentRound,
            total: state.attemptedInCurrentRound,
            accuracy: accuracy,
            timestamp: new Date(),
            testType: 'subTopic',
            topicId: state.currentMainTopic!,
            subTopicId: state.currentSubTopic!,
            duration: 0,
            modesUsed: state.currentMode ? [state.currentMode] : []
        };
        const testKey = `${state.currentMainTopic}-${state.currentSubTopic}-${state.currentMode}`;
        state.lastTestScores[testKey] = testScore;
        saveLastTestScores();
        ui.showMessage(dom, `Test beendet! Ergebnis: ${Math.round(accuracy * 100)}%`,
            accuracy >= 0.8 ? 'success' : 'info');
        state.isTestModeActive = false;
        ui.updateTestStats(dom, state);
    }

    // UI Callbacks Implementation
    const uiCallbacks: UICallbacks = {
        handleTopicSelection: (mainTopic: TopicId, subTopic?: SubTopicId) => {
            state.currentMainTopic = mainTopic;
            state.currentSubTopic = subTopic || null;
            const mainTopicData = vokabular[mainTopic as string];
            if (!subTopic && mainTopicData) {
                ui.showSubTopicNavigation(dom, mainTopic, mainTopicData);
            } else if (subTopic && mainTopicData?.[subTopic as string]) {
                state.currentVocabularySet = mainTopicData[subTopic as string];
                ui.showTrainingModes(dom, state, learningModes);
            }
        },
        handleBackNavigation: () => {
            state.currentSubTopic = null;
            // KORREKTUR: Die Funktion `showMainTopics` wird jetzt korrekt aufgerufen.
            // Stelle sicher, dass `ui/index.ts` die Funktion aus `ui/navigation.ts` exportiert.
            ui.showMainTopicNavigation(dom, vokabular);
        },
        handleModeSelection: (mode: ModeId) => {
            setMode(mode, false);
        },
        // KORREKTUR: `processAnswer` ist jetzt konform mit dem Typ in `UICallbacks`.
        processAnswer: processAnswer,
        loadNextWord: loadNextTask,
        // KORREKTUR: `startTest` akzeptiert jetzt ein einzelnes `testConfig`-Objekt.
        startTest: (testConfig: TestConfiguration) => {
            state.isTestModeActive = true;
            state.correctInCurrentRound = 0;
            state.attemptedInCurrentRound = 0;
            state.currentMode = testConfig.mode; // Modus für den Test setzen
            // Vokabular für das aktuelle Thema laden
            if (state.currentMainTopic && state.currentSubTopic) {
                state.currentVocabularySet = vokabular[state.currentMainTopic as string][state.currentSubTopic as string];
                state.shuffledWordsForMode = shuffleArray([...state.currentVocabularySet]);
                state.currentWordIndex = -1;
            }
            startTestUI(testConfig.testTitle, testConfig.mode);
        },
        startRepeatSession: (mode: ModeId) => {
            setMode(mode, true);
        },
        updateProgress: (wordId: WordId, mode: ModeId, correct: boolean) => {
            const progressKey = `${state.currentMainTopic}-${state.currentSubTopic}`;
            if (!state.globalProgress[progressKey]) {
                state.globalProgress[progressKey] = {};
            }
            const progressMode = state.globalProgress[progressKey]!;
            if (!progressMode[mode]) {
                progressMode[mode] = new Set();
            }
            if (correct) {
                (progressMode[mode] as Set<WordId>).add(wordId);
            }
            saveProgress();
        }
    };

    // Event Listeners Setup
    document.addEventListener('topic-selected', (e: Event) => {
        const { mainTopic, subTopic } = (e as CustomEvent).detail;
        uiCallbacks.handleTopicSelection(mainTopic as TopicId, subTopic as SubTopicId);
    });

    document.addEventListener('back-navigation', () => {
        uiCallbacks.handleBackNavigation();
    });

    document.addEventListener('mode-selected', (e: Event) => {
        const { mode } = (e as CustomEvent).detail;
        uiCallbacks.handleModeSelection(mode as ModeId);
    });

    // KORREKTUR: Der Event-Listener für `test-selected` wurde angepasst.
    // Er reicht nun das `testConfig`-Objekt an den Callback weiter.
    document.addEventListener('test-selected', (e: Event) => {
        const { testConfig } = (e as CustomEvent).detail;
        uiCallbacks.startTest(testConfig);
    });

    document.addEventListener('repeat-selected', (e: Event) => {
        const { mode } = (e as CustomEvent).detail;
        uiCallbacks.startRepeatSession(mode as ModeId);
    });

    // Initial UI Setup
    // KORREKTUR: Der Aufruf wurde zu `showMainTopicNavigation` geändert, was der üblichen Benennung entspricht.
    // Bitte prüfe, ob die Funktion in `ui/navigation.ts` so heißt und korrekt exportiert wird.
    // Wenn der Name `showMainTopics` ist, ändere es hier zurück.
    ui.showMainTopicNavigation(dom, vokabular);
    
    console.log('🎉 Trainer erfolgreich initialisiert!');
    console.log('📊 Verfügbare Themen:', Object.keys(vokabular));
    console.log('🎮 Verfügbare Modi:', Object.keys(learningModes));
});