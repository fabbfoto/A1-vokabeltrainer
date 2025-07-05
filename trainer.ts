// trainer.ts - ENDGÜLTIGE, VOLLSTÄNDIGE UND KORRIGIERTE VERSION

import type {
    Word,
    TrainerState,
    VocabularyStructure,
    LearningModes,
    UICallbacks,
    AuthUI,
    ModeId,
    TopicId,
    SubTopicId,
    WordId,
    TestScore,
    TestConfiguration
} from './shared/types/index';

import { dom } from './dom';
import type { DOMElements } from './shared/types/ui';
import { vokabular } from './vokabular';
import { shuffleArray } from './shared/utils/helfer';
import * as uiModes from './shared/utils/ui-modes';
import * as ui from './ui/index';
import { initializeAuth } from './shared/auth/index';
import { NavigationEvents } from './shared/events/navigation-events';
import { setupUmlautButtons } from './ui/umlaut-buttons';

console.log('📚 Vokabular importiert:', vokabular);
console.log('📚 Anzahl Hauptthemen:', Object.keys(vokabular).length);

let globalAuthUI: AuthUI | null = null;

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {
    console.log('🚀 DOMContentLoaded Event gefeuert');

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
        currentError: null,
        lastUsedModeByTopic: {},
    };

    function loadProgress(): void {
        const saved = localStorage.getItem('trainer-progress');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Umwandlung aller Arrays in Sets
                Object.keys(parsed).forEach(progressKey => {
                    Object.keys(parsed[progressKey]).forEach(modeId => {
                        const value = parsed[progressKey][modeId];
                        if (Array.isArray(value)) {
                            parsed[progressKey][modeId] = new Set(value);
                        }
                    });
                });
                state.globalProgress = parsed as any;
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

    function processAnswer(isCorrect: boolean, userAnswer?: string, timeSpent: number = 0): void {
        console.log('[DEBUG][processAnswer] Antwort war', isCorrect ? 'richtig' : 'falsch');
        state.attemptedInCurrentRound++;
        if (isCorrect) {
            state.correctInCurrentRound++;
            if (syncService.saveProgress) {
                syncService.saveProgress();
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
                const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
                if (!state.globalProgress[progressKey]) {
                    state.globalProgress[progressKey] = {};
                }
                let progressSet = state.globalProgress[progressKey][modeId];
                if (!progressSet || typeof progressSet !== 'object' || !(progressSet instanceof Set)) {
                    progressSet = new Set(Array.isArray(progressSet) ? progressSet : []);
                }
                state.globalProgress[progressKey][modeId] = progressSet;
                (progressSet as Set<WordId>).add(state.currentWord.id as WordId);
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
        const correctAnswer = state.currentWord?.german || 'N/A';
        if (state.isTestModeActive) {
            const accuracy = state.attemptedInCurrentRound > 0
                ? Math.round((state.correctInCurrentRound / state.attemptedInCurrentRound) * 100)
                : 0;
            ui.showMessage(dom,
                isCorrect ? `Richtig! (${accuracy}% richtig)` : `Falsch! Richtige Antwort: ${correctAnswer} (${accuracy}% richtig)`,
                isCorrect ? 'success' : 'error'
            );
            const testThreshold = 0.8;
            if (state.attemptedInCurrentRound >= 10 && accuracy >= testThreshold * 100) {
                handleTestCompletion();
                return;
            }
        } else {
            ui.showMessage(dom,
                isCorrect ? 'Richtig! 🎉' : `Falsch! Richtige Antwort: ${correctAnswer}`,
                isCorrect ? 'success' : 'error'
            );
        }
        saveProgress();
        saveMasteredWords();
        saveWordsToRepeat();
        ui.updateErrorCounts(dom, state, learningModes);
        if (state.isTestModeActive) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state, learningModes);
        }
        // Nächste Aufgabe nach kurzer Verzögerung laden
        setTimeout(() => {
            console.log('[DEBUG][processAnswer] Starte loadNextTask() nach Antwort:', isCorrect ? 'richtig' : 'falsch');
            loadNextTask();
        }, 600);
        console.log('[DEBUG][processAnswer] isCorrect:', isCorrect, 'currentWordIndex:', state.currentWordIndex, 'shuffledWordsForMode.length:', state.shuffledWordsForMode.length, 'currentWord:', state.currentWord);
    }

    const learningModes: LearningModes = {
        'mc-de-en': { id: 'mc-de-en' as ModeId, name: 'Bedeutung', type: 'multipleChoice', setupFunction: () => uiModes.setupMultipleChoiceMode(dom, state, processAnswer), isActive: false },
        'type-de-adj': { id: 'type-de-adj' as ModeId, name: 'Schreibweise', type: 'spelling', setupFunction: () => uiModes.setupSpellingMode(dom, state, processAnswer), isActive: false },
        'cloze-adj-de': { id: 'cloze-adj-de' as ModeId, name: 'Lückentext', type: 'cloze', setupFunction: () => uiModes.setupClozeMode(dom, state, processAnswer), isActive: false },
        'sentence-translation-en-de': { id: 'sentence-translation-en-de' as ModeId, name: 'Satzübersetzung', type: 'sentenceTranslation', setupFunction: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, processAnswer), isActive: false }
    };

    function loadNextTask(): void {
        state.currentWordIndex++;
        console.log('[DEBUG][loadNextTask] Nach Antwort: currentWordIndex:', state.currentWordIndex, 'shuffledWordsForMode.length:', state.shuffledWordsForMode.length);
        if (state.currentWordIndex >= state.shuffledWordsForMode.length) {
            const accuracy = state.attemptedInCurrentRound > 0 ? Math.round((state.correctInCurrentRound / state.attemptedInCurrentRound) * 100) : 0;
            ui.showMessage(dom, `Runde beendet! Genauigkeit: ${accuracy}%`, 'success');
            state.isRepeatSessionActive = false;
            return;
        }
        state.currentWord = state.shuffledWordsForMode[state.currentWordIndex];
        console.log('[DEBUG][loadNextTask] Neuer currentWord:', state.currentWord);
        const modeInfo = state.currentMode ? learningModes[state.currentMode] : null;
        if (modeInfo && typeof modeInfo.setupFunction === 'function') {
            modeInfo.setupFunction();
        } else {
            console.error(`Keine Setup-Funktion für Modus "${state.currentMode}" gefunden`);
        }
        ui.updatePracticeStats(dom, state, learningModes);
        console.log('[DEBUG][loadNextTask] currentWordIndex:', state.currentWordIndex, 'shuffledWordsForMode.length:', state.shuffledWordsForMode.length, 'currentWord:', state.currentWord);
    }

    function getTopicKey(main: TopicId|null, sub: SubTopicId|null) {
        return main && sub ? `${main}|${sub}` : '';
    }

    function setMode(modeId: ModeId, isRepeat: boolean = false): void {
        state.currentMode = modeId;
        state.isTestModeActive = false;
        state.isRepeatSessionActive = isRepeat;
        const key = getTopicKey(state.currentMainTopic, state.currentSubTopic);
        if (key) state.lastUsedModeByTopic[key] = modeId;
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
        // Umlaut-Buttons nach jedem Moduswechsel initialisieren
        const umlautModes = ['type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'];
        if (umlautModes.includes(modeId)) {
            if (ui.setupUmlautButtons) ui.setupUmlautButtons(dom, state);
        } else {
            if (ui.hideUmlautButtons) ui.hideUmlautButtons(dom);
        }
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
        const accuracy = state.attemptedInCurrentRound > 0 ? (state.correctInCurrentRound / state.attemptedInCurrentRound) : 0;
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

    const uiCallbacks: UICallbacks = {
        handleTopicSelection: (mainTopic: TopicId, subTopic?: SubTopicId) => {
            state.currentMainTopic = mainTopic;
            state.currentSubTopic = subTopic || null;
            const mainTopicData = vokabular[mainTopic as string];
            if (!subTopic && mainTopicData) {
                ui.showSubTopicNavigation(dom, state, vokabular, mainTopic, learningModes);
            } else if (subTopic && mainTopicData?.[subTopic as string]) {
                state.currentVocabularySet = mainTopicData[subTopic as string];
                const key = getTopicKey(mainTopic, subTopic as SubTopicId);
                const defaultMode: ModeId = "mc-de-en" as ModeId;
                const startMode: ModeId = state.lastUsedModeByTopic?.[key] || defaultMode;
                setMode(startMode, false);
                ui.showTrainingModes(dom, state);
                Object.keys(learningModes).forEach(modeId => {
                    const button = document.getElementById(`mode-${modeId}`);
                    if (button) button.addEventListener('click', () => setMode(modeId as ModeId, false));
                });
            }
        },
        handleBackNavigation: () => {
            state.currentSubTopic = null;
            ui.showMainTopicNavigation(dom, state, vokabular, learningModes);
        },
        handleModeSelection: (mode: ModeId) => {
            setMode(mode, false);
        },
        processAnswer: processAnswer,
        loadNextWord: loadNextTask,
        startTest: (testConfig: TestConfiguration) => {
            state.isTestModeActive = true;
            state.correctInCurrentRound = 0;
            state.attemptedInCurrentRound = 0;
            state.currentMode = testConfig.mode;
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
        },
        speakWord: (word: string) => {},
        speakSentence: (sentence: string) => {},
        submitTestAnswer: (isCorrect: boolean, timeSpent: number) => {},
        completeTest: () => {},
        showLoading: (message?: string) => {},
        hideLoading: () => {},
        showError: (error: string) => {},
        clearError: () => {},
    };

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
    document.addEventListener('test-selected', (e: Event) => {
        const { testConfig } = (e as CustomEvent).detail;
        uiCallbacks.startTest!(testConfig);
    });
    document.addEventListener('repeat-selected', (e: Event) => {
        const { mode } = (e as CustomEvent).detail;
        uiCallbacks.startRepeatSession!(mode as ModeId);
    });

    // Navigation Event Listeners initialisieren
    ui.initNavigationListeners(dom, state, uiCallbacks, learningModes, vokabular);

    // Initial UI Setup
    ui.showMainTopicNavigation(dom, state, vokabular, learningModes);

    // Event-Listener für Zurück-Button im Trainingsmodus (zurück zu Subthemen)
    dom.backToSubtopicsButton.addEventListener('click', () => {
        if (state.currentMainTopic) {
            ui.showSubTopicNavigation(dom, state, vokabular, state.currentMainTopic, learningModes);
        }
    });

    setupUmlautButtons(dom, state);

    // Globale initUmlautButtons Funktion für die Browser-Lösung
    (window as any).initUmlautButtons = function() {
        let lastFocusedInput: HTMLInputElement | null = null;
        
        // Focus-Listener für beide Noun-Inputs
        const noun1 = document.getElementById('spelling-input-noun-1') as HTMLInputElement;
        const noun2 = document.getElementById('spelling-input-noun-2') as HTMLInputElement;
        
        if (noun1) {
            noun1.addEventListener('focus', () => {
                lastFocusedInput = noun1;
                console.log('Focus auf linkes Feld');
            });
        }
        
        if (noun2) {
            noun2.addEventListener('focus', () => {
                lastFocusedInput = noun2;
                console.log('Focus auf rechtes Feld');
            });
        }
        
        // Umlaut-Buttons
        const umlautBtns = document.getElementById('umlaut-buttons-container')?.getElementsByTagName('button');
        
        if (umlautBtns) {
            Array.from(umlautBtns).forEach(btn => {
                btn.onclick = function(event) {
                    // Finde das richtige Input
                    const single = document.getElementById('spelling-input-single') as HTMLInputElement;
                    let targetInput: HTMLInputElement | null = null;
                    
                    if (single && single.offsetParent !== null) {
                        targetInput = single;
                    } else if (noun1 && noun1.offsetParent !== null) {
                        targetInput = lastFocusedInput || noun1;
                    }
                    
                    if (targetInput && !targetInput.disabled) {
                        const charToInsert = (event as MouseEvent).shiftKey ? (this as HTMLButtonElement).textContent?.toUpperCase() : (this as HTMLButtonElement).textContent;
                        targetInput.value += charToInsert;
                        targetInput.focus();
                        console.log('Umlaut eingefügt in:', targetInput.id);
                    }
                };
            });
        }
    };

    console.log('🎉 Trainer erfolgreich initialisiert!');
    console.log('📊 Verfügbare Themen:', Object.keys(vokabular));
    console.log('🎮 Verfügbare Modi:', Object.keys(learningModes));
});