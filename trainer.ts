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
    TestScore
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
    // Temporär auskommentieren
    /*
    const { authService, authUI, syncService }: InitializeAuthResult = initializeAuth('themen', {
        buttonContainerId: 'auth-button-container',
        hideOnNavigation: true,
        buttonClasses: {
            loggedIn: 'w-full rounded-lg py-3 font-semibold text-white cursor-default',
            loggedOut: 'w-full rounded-lg py-3 font-semibold transition-colors duration-200'
        }
    });
    */
    const authService = { isLoggedIn: () => false };
    const authUI = { 
        show: () => {}, 
        hide: () => {},
        isVisible: false,
        container: null
    };
    const syncService = { 
        onSyncUpdate: () => {},
        saveProgress: async () => {}
    };

    // Initial auf Root-Seite
    NavigationEvents.dispatchRoot();

    // Speichere authUI Referenz
    globalAuthUI = authUI;

    // ✅ KORREKTE TYPE-USAGE - verwende TrainerState Interface
    const state: TrainerState = {
        // Navigation State
        currentMainTopic: null,
        currentSubTopic: null,
        previousMainTopic: null,
        previousSubTopic: null,
        
        // Learning Session State
        currentVocabularySet: [],
        shuffledWordsForMode: [], // ✅ KORRIGIERT: shuffledVocabForMode → shuffledWordsForMode
        currentWordIndex: -1, // ✅ KORRIGIERT: currentWordIndexInShuffled → currentWordIndex
        currentWord: null, // ✅ KORRIGIERT: currentWordData → currentWord
        currentMode: null,
        sessionId: null,
        
        // Test State
        isTestModeActive: false,
        isRepeatSessionActive: false,
        currentTest: null,
        testResults: [],
        
        // Progress State
        correctInCurrentRound: 0, // ✅ KORRIGIERT: correctInRound → correctInCurrentRound
        attemptedInCurrentRound: 0, // ✅ KORRIGIERT: attemptedInRound → attemptedInCurrentRound
        globalProgress: {},
        masteredWordsByMode: {},
        wordsToRepeatByMode: {},
        lastTestScores: {},
        sessionStats: [],
        
        // UI State
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
                // Convert arrays back to Sets
                Object.keys(parsed).forEach(mode => {
                    state.masteredWordsByMode[mode] = new Set(parsed[mode] as WordId[]);
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
            Object.keys(state.masteredWordsByMode).forEach(mode => {
                toSave[mode] = Array.from(state.masteredWordsByMode[mode]);
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
                    state.wordsToRepeatByMode[mode] = new Set(parsed[mode] as WordId[]);
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
            Object.keys(state.wordsToRepeatByMode).forEach(mode => {
                toSave[mode] = Array.from(state.wordsToRepeatByMode[mode]);
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

    // Progress initialisieren
    loadProgress();
    loadMasteredWords();
    loadWordsToRepeat();
    loadLastTestScores();

    // Learning Modes Definition mit korrekten Types
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

    // Process Answer Function
    function processAnswer(isCorrect: boolean, userAnswer?: string, correctAnswer?: string): void {
        state.attemptedInCurrentRound++;
        
        if (isCorrect) {
            state.correctInCurrentRound++;
            
            // Sync mit Server falls verfügbar
            if (syncService.saveProgress) {
                syncService.saveProgress({
                    word: state.currentWord!,
                    mode: state.currentMode!,
                    correct: true,
                    timestamp: new Date()
                });
            }
            
            // Als mastered markieren falls mehrfach korrekt
            const modeId = state.currentMode;
            if (modeId && state.currentWord) {
                if (!state.masteredWordsByMode[modeId]) {
                    state.masteredWordsByMode[modeId] = new Set();
                }
                state.masteredWordsByMode[modeId].add(state.currentWord.id as WordId);
                
                // Aus repeat-Liste entfernen
                if (state.wordsToRepeatByMode[modeId]) {
                    state.wordsToRepeatByMode[modeId].delete(state.currentWord.id as WordId);
                }
            }
        } else {
            // Falsche Antwort - zur Wiederholung hinzufügen
            const modeId = state.currentMode;
            if (modeId && state.currentWord) {
                if (!state.wordsToRepeatByMode[modeId]) {
                    state.wordsToRepeatByMode[modeId] = new Set();
                }
                state.wordsToRepeatByMode[modeId].add(state.currentWord.id as WordId);
            }
        }

        // Test-Logik
        if (state.isTestModeActive) {
            const accuracy = state.attemptedInCurrentRound > 0 
                ? Math.round((state.correctInCurrentRound / state.attemptedInCurrentRound) * 100) 
                : 0;
            
            ui.showMessage(dom, 
                isCorrect 
                    ? `Richtig! (${accuracy}% richtig)` 
                    : `Falsch! Richtige Antwort: ${correctAnswer || 'N/A'} (${accuracy}% richtig)`,
                isCorrect ? 'success' : 'error'
            );

            // Test-Completion prüfen
            const testThreshold = 0.8; // 80% Erfolgsquote
            if (state.attemptedInCurrentRound >= 10 && accuracy >= testThreshold * 100) {
                handleTestCompletion();
                return;
            }
        } else {
            // Normaler Übungsmodus
            ui.showMessage(dom, 
                isCorrect 
                    ? 'Richtig! 🎉' 
                    : `Falsch! Richtige Antwort: ${correctAnswer || 'N/A'}`,
                isCorrect ? 'success' : 'error'
            );
        }

        // Progress speichern
        saveProgress();
        saveMasteredWords();
        saveWordsToRepeat();
        
        // Stats aktualisieren
        ui.updateErrorCounts(dom, state, learningModes);
        if (state.isTestModeActive) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state);
        }
    }

    function loadNextTask(): void {
        state.currentWordIndex++;
        
        console.log(`[loadNextTask] Index: ${state.currentWordIndex}, Länge: ${state.shuffledWordsForMode.length}`);
        
        if (state.currentWordIndex >= state.shuffledWordsForMode.length) {
            // Alle Wörter durch
            const accuracy = state.attemptedInCurrentRound > 0 
                ? Math.round((state.correctInCurrentRound / state.attemptedInCurrentRound) * 100)
                : 0;
            
            ui.showMessage(dom, `Runde beendet! Genauigkeit: ${accuracy}%`, 'success');
            state.isRepeatSessionActive = false;
            return;
        }

        // Aktuelle Vokabel laden
        state.currentWord = state.shuffledWordsForMode[state.currentWordIndex];
        console.log('[loadNextTask] Aktuelle Vokabel:', state.currentWord?.german);

        // Modus-spezifisches Setup
        const modeInfo = state.currentMode ? learningModes[state.currentMode] : null;
        if (modeInfo && typeof modeInfo.setupFunction === 'function') {
            modeInfo.setupFunction();
        } else {
            console.error(`Keine Setup-Funktion für Modus "${state.currentMode}" gefunden`);
        }
    }

    function setMode(modeId: string, isRepeat: boolean = false): void {
        state.currentMode = modeId as ModeId;
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

        // Button-Styles aktualisieren
        // Alle Buttons auf Standard zurücksetzen
        document.querySelectorAll('#mode-button-grid .mode-button').forEach(btn => {
            if (!btn.id.includes('repeat')) {
                btn.classList.remove('bg-blue-500', 'text-white', 'border-blue-500');
                btn.classList.add('border-gray-300');
            } else {
                btn.classList.remove('bg-red-500', 'text-white');
                btn.classList.add('bg-red-100', 'text-red-500');
            }
        });

        // Aktiven Button hervorheben
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

    // --- TEST FUNKTIONEN ---

    function startTestUI(testTitle: string, modus: string): void {
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

        // Speichere Testergebnis
        if (!state.lastTestScores) state.lastTestScores = {};
        
        const testScore: TestScore = {
            testId: `test_${Date.now()}` as any, // Temporary workaround
            correct: state.correctInCurrentRound,
            total: state.attemptedInCurrentRound,
            accuracy: accuracy,
            timestamp: new Date(),
            testType: 'subTopic',
            topicId: state.currentMainTopic,
            subTopicId: state.currentSubTopic,
            duration: 0, // TODO: Implement timing
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
        // Navigation
        handleTopicSelection: (mainTopic: TopicId, subTopic?: SubTopicId) => {
            state.currentMainTopic = mainTopic;
            state.currentSubTopic = subTopic || null;
            
            if (!subTopic && vokabular[mainTopic as string]) {
                // Main topic selected, show subtopics
                ui.showSubTopicNavigation(dom, mainTopic, vokabular[mainTopic as string]);
            } else if (subTopic && vokabular[mainTopic as string]?.[subTopic as string]) {
                // Subtopic selected, load vocabulary
                state.currentVocabularySet = vokabular[mainTopic as string][subTopic as string];
                ui.showTrainingModes(dom, state, learningModes);
            }
        },

        handleBackNavigation: () => {
            if (state.currentSubTopic) {
                // Back to main topics
                state.currentSubTopic = null;
                state.currentMainTopic = null;
                ui.showMainTopics(dom, vokabular);
            } else {
                // Back to main topics  
                ui.showMainTopics(dom, vokabular);
            }
        },

        handleModeSelection: (mode: ModeId) => {
            setMode(mode, false);
        },

        // Learning
        processAnswer: processAnswer,
        loadNextWord: loadNextTask,
        
        // Test functions
        startTest: (testTitle: string, mode: string) => {
            state.isTestModeActive = true;
            state.correctInCurrentRound = 0;
            state.attemptedInCurrentRound = 0;
            startTestUI(testTitle, mode);
        },

        // Repeat functions  
        startRepeatSession: (mode: string) => {
            setMode(mode, true);
        },

        // Progress functions
        updateProgress: (wordId: WordId, mode: ModeId, correct: boolean) => {
            // Progress tracking implementation
            const progressKey = `${state.currentMainTopic}-${state.currentSubTopic}`;
            if (!state.globalProgress[progressKey]) {
                state.globalProgress[progressKey] = {};
            }
            if (!state.globalProgress[progressKey][mode]) {
                state.globalProgress[progressKey][mode] = new Set();
            }
            
            if (correct) {
                (state.globalProgress[progressKey][mode] as Set<WordId>).add(wordId);
            }
            
            saveProgress();
        }
    };

    // Event Listeners Setup
    
    // Navigation Events
    document.addEventListener('topic-selected', (e: Event) => {
        const event = e as CustomEvent;
        const { mainTopic, subTopic } = event.detail;
        uiCallbacks.handleTopicSelection(mainTopic as TopicId, subTopic as SubTopicId);
    });

    document.addEventListener('back-navigation', () => {
        uiCallbacks.handleBackNavigation();
    });

    document.addEventListener('mode-selected', (e: Event) => {
        const event = e as CustomEvent;
        const { mode } = event.detail;
        uiCallbacks.handleModeSelection(mode as ModeId);
    });

    // Test Events
    document.addEventListener('test-selected', (e: Event) => {
        const event = e as CustomEvent;
        const { testTitle, mode } = event.detail;
        uiCallbacks.startTest(testTitle, mode);
    });

    document.addEventListener('repeat-selected', (e: Event) => {
        const event = e as CustomEvent;
        const { mode } = event.detail;
        uiCallbacks.startRepeatSession(mode);
    });

    // Initial UI Setup
    ui.showMainTopics(dom, vokabular);
    
    console.log('🎉 Trainer erfolgreich initialisiert!');
    console.log('📊 Verfügbare Themen:', Object.keys(vokabular));
    console.log('🎮 Verfügbare Modi:', Object.keys(learningModes));

});