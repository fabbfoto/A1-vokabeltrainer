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
    TestConfiguration,
    TestResult,
    TestId,
    TestType
} from './shared/types/trainer';

import { dom } from './dom';
import type { DOMElements } from './shared/types/ui';
import { vokabular } from './vokabular';
import { shuffleArray } from './shared/utils/helfer';
import * as uiModes from './shared/utils/ui-modes';
import * as ui from './ui/index';
import { initializeAuth } from './shared/auth/index';
import { NavigationEvents } from './shared/events/navigation-events';
import { updateErrorCounts } from './ui/statistics';
import { generateTestQuestions, TestGenerationResult } from './utils/test-generator';
import { calculateTestScore, calculateAverageTimePerQuestion } from './shared/types/trainer';
import { showTestResultModal } from './shared/ui/test-result-modal';
import { ModeManager } from './shared/services/mode-manager';
// import { validateVocabulary } from './validate-vocabulary'; // TEMPORÄR DEAKTIVIERT
import type { AuthService } from './shared/services/auth-service';
import type { SyncService } from './shared/services/sync-service';
import type { RankingService } from './shared/services/ranking-service';

let globalAuthUI: AuthUI | null = null;

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {

    // NEU: Firebase Auth initialisieren
    let authService: AuthService;
    let authUI: AuthUI;
    let syncService: SyncService;
    let rankingService: RankingService;

    try {
        // Firebase Auth initialisieren
        const { initializeAuth } = await import('./shared/auth/index.js');
        const services = initializeAuth('a1-vokabeltrainer', {
            buttonContainerId: 'auth-button-container',
            rankingContainerId: 'ranking-container'
        });
        
        authService = services.authService;
        authUI = services.authUI;
        syncService = services.syncService;
        rankingService = services.rankingService;
        
        // Ranking-Service global verfügbar machen
        (window as any).rankingService = rankingService;
        
    } catch (error) {
        console.warn('⚠️ Firebase Auth nicht verfügbar, verwende Fallback:', error);
        
        // Fallback-Services mit Mock-Implementierungen
        authService = {
            auth: null,
            currentUser: null,
            firebaseUser: null,
            convertFirebaseUser: () => null,
            isLoggedIn: () => false,
            login: async () => { throw new Error('Auth not available'); },
            logout: async () => { throw new Error('Auth not available'); },
            onAuthStateChanged: () => () => {},
            getCurrentUser: () => null,
            getUserId: () => null,
            getUserEmail: () => null,
            getDisplayName: () => null,
            isEmailVerified: () => false,
            loginWithGoogle: async () => { throw new Error('Auth not available'); },
            getFirebaseUser: () => null
        } as unknown as AuthService;
        
        authUI = {
            show: () => { },
            hide: () => { },
            container: null
        };
        
        syncService = {
            db: null,
            unsubscribe: null,
            trainerType: 'a1-vokabeltrainer',
            listeners: new Map(),
            authService: null,
            syncStatus: 'disconnected',
            onSyncUpdate: () => { },
            saveProgress: async () => { },
            saveTestScores: async () => { },
            loadProgress: async () => ({}),
            loadTestScores: async () => ({}),
            startRealtimeSync: () => { },
            stopRealtimeSync: () => { },
            syncProgress: async () => { },
            syncTestScores: async () => { },
            notifyListeners: () => { },
            clearListeners: () => { },
            getSyncStatus: () => 'disconnected',
            isConnected: () => false,
            getLastSyncTime: () => null
        } as unknown as SyncService;
        
        rankingService = {
            authService: null,
            submitTestResult: async () => { 
                return 'mock-result-id';
            },
            getRankings: async () => [],
            getUserStats: async () => null,
            getTopicRankings: async () => [],
            getWeeklyRankings: async () => [],
            getGlobalRankings: async () => [],
            getTestTypeRankings: async () => [],
            getCurrentUserRanking: async () => null,
            getTopUsers: async () => [],
            getWeeklyTopUsers: async () => []
        } as unknown as RankingService;
    }

    NavigationEvents.dispatchRoot();
    globalAuthUI = authUI;

    const state: TrainerState = {
        navigation: {
            currentMainTopic: null,
            currentSubTopic: null,
            previousMainTopic: null,
            previousSubTopic: null,
            lastUsedModeByTopic: {},
        },
        training: {
            currentVocabularySet: [],
            shuffledWordsForMode: [],
            currentWordIndex: 0,
            currentWord: null,
            currentMode: null,
            sessionId: null,
            isRepeatSessionActive: false,
            isCorrectionMode: false,
            correctInCurrentRound: 0,
            attemptedInCurrentRound: 0,
            sessionStats: [],
            activeTextInput: null,
            isLoading: false,
            currentError: null,
        },
        progress: {
            globalProgress: {},
            masteredWordsByMode: {},
            wordsToRepeatByMode: {},
            perfectRunsByMode: {},
            lastTestScores: {},
        },
        
        // Test State
        test: {
            isTestModeActive: false,
            currentTest: null,
            testResults: [],
            testModeRotation: [] as ModeId[],
            currentTestModeIndex: 0,
            testStartTime: null,
            currentQuestionStartTime: null,
            questionTimes: [],
            lastTestScores: {},
            isRepeatSessionActive: false,
        },
        
        // UI-bezogene Properties
        isCorrectionMode: false,
    };

    function loadProgress(): void {
        // Versuche zuerst trainer-progress
        let saved = localStorage.getItem('trainer-progress');
        
        // Falls nicht vorhanden, versuche Firebase-Key
        if (!saved) {
            const firebaseSaved = localStorage.getItem('a1ThemenProgress');
            if (firebaseSaved) {
                try {
                    const firebaseData = JSON.parse(firebaseSaved);
                    const converted: Record<string, Record<string, string[]>> = {};
                    
                    // Konvertiere Firebase 3-Ebenen zu lokalem 2-Ebenen Format
                    for (const hauptthema in firebaseData) {
                        for (const unterthema in firebaseData[hauptthema]) {
                            const key = `${hauptthema}|${unterthema}`;
                            converted[key] = firebaseData[hauptthema][unterthema];
                        }
                    }
                    
                    saved = JSON.stringify(converted);
                } catch (e) {
                    console.error('❌ Fehler bei Firebase-Konvertierung:', e);
                }
            }
        }
        
        // Lade Progress und stelle SICHER dass es Sets sind
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                state.progress.globalProgress = {};
                
                // WICHTIG: Konvertiere IMMER zu Sets
                Object.keys(parsed).forEach(topicKey => {
                    state.progress.globalProgress[topicKey] = {};
                    
                    if (typeof parsed[topicKey] === 'object' && parsed[topicKey] !== null) {
                        Object.keys(parsed[topicKey]).forEach(mode => {
                            const data = parsed[topicKey][mode];
                            
                            // Stelle sicher, dass es ein Set wird
                            if (Array.isArray(data)) {
                                state.progress.globalProgress[topicKey][mode as ModeId] = new Set(data);
                            } else if (data instanceof Set) {
                                state.progress.globalProgress[topicKey][mode as ModeId] = data;
                            } else {
                                // Warnung entfernt: Unerwarteter Datentyp
                                state.progress.globalProgress[topicKey][mode as ModeId] = new Set();
                            }
                        });
                    } else {
                        console.warn(`⚠️ Ungültige Daten für ${topicKey}`);
                    }
                });
                
            } catch (e) {
                console.error('❌ Fehler beim Laden des Progress:', e);
                state.progress.globalProgress = {};
            }
        } else {
            state.progress.globalProgress = {};
        }
    }

    function saveProgress(): void {
        try {
            localStorage.setItem('trainer-progress', JSON.stringify(state.progress.globalProgress));
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
                    state.progress.masteredWordsByMode[mode as ModeId] = new Set(parsed[mode] as WordId[]);
                });
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden der mastered words:', e);
            }
        }
    }

    function saveMasteredWords(): void {
        try {
            const toSave: Record<string, WordId[]> = {};
            Object.keys(state.progress.masteredWordsByMode).forEach(key => {
                const mode = key as ModeId;
                toSave[mode] = Array.from(state.progress.masteredWordsByMode[mode]!);
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
                    state.progress.wordsToRepeatByMode[mode as ModeId] = new Set(parsed[mode] as WordId[]);
                });
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden words to repeat:', e);
            }
        }
    }

    function saveWordsToRepeat(): void {
        try {
            const toSave: Record<string, WordId[]> = {};
            Object.keys(state.progress.wordsToRepeatByMode).forEach(key => {
                const mode = key as ModeId;
                toSave[mode] = Array.from(state.progress.wordsToRepeatByMode[mode]!);
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
                state.test.lastTestScores = JSON.parse(saved);
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden test scores:', e);
            }
        }
    }

    function saveLastTestScores(): void {
        try {
            localStorage.setItem('trainer-last-test-scores', JSON.stringify(state.test.lastTestScores));
        } catch (e) {
            console.warn('⚠️ Fehler beim Speichern test scores:', e);
        }
    }

    function loadPerfectRuns(): void {
        const saved = localStorage.getItem('trainer-perfect-runs');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                state.progress.perfectRunsByMode = parsed;
            } catch (e) {
                console.warn('⚠️ Fehler beim Laden der perfect runs:', e);
            }
        }
    }

    function savePerfectRuns(): void {
        try {
            localStorage.setItem('trainer-perfect-runs', JSON.stringify(state.progress.perfectRunsByMode));
        } catch (e) {
            console.warn('⚠️ Fehler beim Speichern perfect runs:', e);
        }
    }



    function updateRepeatButtons() {
        ui.updateErrorCounts(dom, state, learningModes);
    }

    loadProgress();
    loadMasteredWords();
    loadWordsToRepeat();
    loadLastTestScores();
    loadPerfectRuns();

    function processAnswer(isCorrect: boolean, correctAnswer?: string): void {
        
        state.training.attemptedInCurrentRound++;
        
        // Spezialbehandlung für Multiple Choice im normalen Modus
        if (state.training.currentMode === 'mc-de-en' && !state.test.isTestModeActive) {
            if (isCorrect) {
                state.training.correctInCurrentRound++;
                updateProgress(true);
                ui.showMessage(dom, 'Richtig!', 'success');
            } else {
                addToErrorList();
                ui.showMessage(dom, `Falsch! Richtig: ${correctAnswer}`, 'error');
            }
            
            // Immer nach kurzer Pause weiter
            setTimeout(() => loadNextTask(), isCorrect ? 1200 : 2000);
            updateStatistics();
            return; // Früh raus, keine weitere Verarbeitung
        }
        
        // Zeitmessung für Test-Modus
        if (ModeManager.isInTestMode(state) && state.test.currentQuestionStartTime) {
            const questionTime = (Date.now() - state.test.currentQuestionStartTime) / 1000;
            state.test.questionTimes.push(questionTime);
        }
        
        // Aktueller Modus bestimmt das Verhalten
        const currentMode = ModeManager.getCurrentMode(state);
        
        switch (currentMode) {
            case 'correcting':
                // Im Korrekturmodus nur Statistiken aktualisieren
                if (isCorrect) {
                    state.training.correctInCurrentRound++;
                } else {
                    addToErrorList();
                }
                updateStatistics();
                // KEIN automatisches Weitergehen!
                break;
                
            case 'testing':
                // Im Test-Modus immer direkt weiter
                if (isCorrect) {
                    state.training.correctInCurrentRound++;
                    ui.showMessage(dom, '✓', 'success', 1000);
                } else {
                    ui.showMessage(dom, '✗', 'error', 1000);
                }
                setTimeout(() => loadNextTask(), 1000);
                break;
                
            case 'repeating':
                // Im Wiederholungs-Modus
                if (isCorrect) {
                    state.training.correctInCurrentRound++;
                    updateProgress(true);
                    removeFromErrorList();
                    
                    // Prüfe ob noch Fehler da sind
                    const remainingErrors = state.training.currentMode ? state.progress.wordsToRepeatByMode[state.training.currentMode]?.size || 0 : 0;
                    if (remainingErrors === 0) {
                        handleNoMoreErrors();
                        return;
                    }
                    
                    setTimeout(() => loadNextTask(), 1500);
                } else {
                    // Wechsle zu Korrekturmodus
                    ModeManager.switchToMode(state, 'correcting');
                    showCorrectionUI(correctAnswer);
                }
                break;
                
            case 'learning':
            default:
                // Normaler Lernmodus
                if (isCorrect) {
                    state.training.correctInCurrentRound++;
                    updateProgress(true);
                    ui.showMessage(dom, 'Richtig!', 'success');
                    setTimeout(() => loadNextTask(), 1500);
                } else {
                    // Wechsle zu Korrekturmodus
                    ModeManager.switchToMode(state, 'correcting');
                    showCorrectionUI(correctAnswer);
                }
                break;
        }
    }

    // Hilfsfunktionen
    function addToErrorList(): void {
        if (state.training.currentWord && state.training.currentMode) {
            if (!state.progress.wordsToRepeatByMode[state.training.currentMode]) {
                state.progress.wordsToRepeatByMode[state.training.currentMode] = new Set();
            }
            state.progress.wordsToRepeatByMode[state.training.currentMode].add(state.training.currentWord.id);
            saveWordsToRepeat();
        }
    }

    function removeFromErrorList(): void {
        if (state.training.currentWord && state.training.currentMode) {
            state.progress.wordsToRepeatByMode[state.training.currentMode]?.delete(state.training.currentWord.id);
            saveWordsToRepeat();
        }
    }

    function updateStatistics(): void {
        if (ModeManager.isInTestMode(state)) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state, learningModes);
        }
    }

    function showCorrectionUI(correctAnswer?: string): void {
        dom.feedbackContainerEl.innerHTML = `<span class="feedback-incorrect">${correctAnswer || ''}</span>`;
        dom.correctionSolutionEl.classList.remove('hidden');
        dom.continueButton.classList.remove('hidden');
        dom.continueButton.focus();
    }

    function updateProgress(isCorrect: boolean): void {
        if (isCorrect && state.training.currentWord && state.training.currentMode) {
            const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
            
            if (!state.progress.globalProgress[progressKey]) {
                state.progress.globalProgress[progressKey] = {};
            }
            if (!state.progress.globalProgress[progressKey][state.training.currentMode]) {
                state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
            }
            
            // Stelle sicher, dass es ein Set ist
            let progressSet = state.progress.globalProgress[progressKey][state.training.currentMode];
            if (!(progressSet instanceof Set)) {
                if (Array.isArray(progressSet)) {
                    progressSet = new Set(progressSet);
                    state.progress.globalProgress[progressKey][state.training.currentMode] = progressSet;
                } else {
                    progressSet = new Set();
                    state.progress.globalProgress[progressKey][state.training.currentMode] = progressSet;
                }
            }
            
            progressSet.add(state.training.currentWord.id);
            saveProgress();
        }
    }

    function handleNoMoreErrors(): void {
        state.test.isRepeatSessionActive = false;
        
        // Filtere Vokabeln, die noch nicht richtig beantwortet wurden
        const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
        const progressForMode = state.training.currentMode !== null ? state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set() : new Set();
        const progressSet = progressForMode instanceof Set ? progressForMode : new Set(progressForMode);
        
        const remainingWords = state.training.currentVocabularySet.filter(word => 
            !progressSet.has(word.id)
        );
        
        if (remainingWords.length > 0) {
            state.training.shuffledWordsForMode = shuffleArray(remainingWords);
            state.training.currentWordIndex = -1;
            ui.showMessage(dom, `Weiter mit ${remainingWords.length} noch nicht beantworteten Vokabeln.`, 'info');
            setTimeout(() => loadNextTask(), 1000);
        } else {
            // Alle Vokabeln wurden richtig beantwortet
            if (state.training.currentMode) {
                const runCount = (state.progress.perfectRunsByMode[state.training.currentMode] || 0) + 1;
                const runText = runCount === 1 ? '1. Durchlauf' : `${runCount}. Durchlauf`;
                ui.showSuccessMessageWithButton(
                    dom, 
                    `Perfekt! (${runText})`, 
                    'Übung wiederholen',
                    () => {
                        const progressKey = getTopicKey(state.navigation.currentMainTopic, state.navigation.currentSubTopic);
                        if (progressKey && state.progress.globalProgress[progressKey] && state.training.currentMode) {
                            state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
                            saveProgress();
                        }
                        if (state.training.currentMode !== null) {
                            setMode(state.training.currentMode, false);
                        }
                    }
                );
            }
        }
    }

    const learningModes: LearningModes = {
        'mc-de-en': { id: 'mc-de-en' as ModeId, name: 'Bedeutung', type: 'multipleChoice', setupFunction: () => uiModes.setupMultipleChoiceMode(dom, state, processAnswer), isActive: false },
        'type-de-adj': { id: 'type-de-adj' as ModeId, name: 'Schreibweise', type: 'spelling', setupFunction: () => uiModes.setupSpellingMode(dom, state, processAnswer), isActive: false },
        'cloze-adj-de': { id: 'cloze-adj-de' as ModeId, name: 'Lückentext', type: 'cloze', setupFunction: () => uiModes.setupClozeMode(dom, state, processAnswer), isActive: false },
        'sentence-translation-en-de': { id: 'sentence-translation-en-de' as ModeId, name: 'Satzübersetzung', type: 'sentenceTranslation', setupFunction: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, processAnswer), isActive: false }
    };

    function loadNextTask(): void {
        ui.hideAllUIs(dom);
        
        // Erhöhe Index
        state.training.currentWordIndex++;
        
        // Prüfe ob wir am Ende der Liste sind
        if (state.training.currentWordIndex >= state.training.shuffledWordsForMode.length) {
            if (state.test.isTestModeActive) {
                handleTestCompletion();
                return;
            }
            
            // Shuffle und von vorne beginnen
            if (state.test.isRepeatSessionActive) {
                // Im Wiederholungsmodus: Prüfe ob noch Fehler da sind
                const remainingErrors = state.training.currentMode ? state.progress.wordsToRepeatByMode[state.training.currentMode]?.size || 0 : 0;
                if (remainingErrors === 0) {
                    // Keine Fehler mehr - wechsle zu "noch nicht richtig beantworteten" Vokabeln
                    state.test.isRepeatSessionActive = false;
                    
                    // Filtere Vokabeln, die noch nicht richtig beantwortet wurden
                    const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
                    const progressForMode = state.training.currentMode !== null ? state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set() : new Set();
                    const progressSet = progressForMode instanceof Set ? progressForMode : new Set(progressForMode);
                    
                    const remainingWords = state.training.currentVocabularySet.filter(word => 
                        !progressSet.has(word.id)
                    );
                    
                    if (remainingWords.length > 0) {
                        state.training.shuffledWordsForMode = shuffleArray(remainingWords);
                        ui.showMessage(dom, `Weiter mit ${remainingWords.length} noch nicht beantworteten Vokabeln.`, 'info');
                    } else {
                        // Alle Vokabeln wurden richtig beantwortet - Modus beenden
                        if (state.training.currentMode) {
                            const runCount = (state.progress.perfectRunsByMode[state.training.currentMode] || 0) + 1;
                            const runText = runCount === 1 ? '1. Durchlauf' : `${runCount}. Durchlauf`;
                            ui.showSuccessMessageWithButton(
                                dom, 
                                `Perfekt! (${runText})`, 
                                'Übung wiederholen',
                                () => {
                                    const progressKey = getTopicKey(state.navigation.currentMainTopic, state.navigation.currentSubTopic);
                                    if (progressKey && state.progress.globalProgress[progressKey] && state.training.currentMode) {
                                        state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
                                        saveProgress();
                                    }
                                    if (state.training.currentMode !== null) {
                                        setMode(state.training.currentMode, false);
                                    }
                                }
                            );
                        } else {
                            ui.showMessage(dom, 'Perfekt! Alle Vokabeln in diesem Modus wurden richtig beantwortet.', 'success');
                        }
                        
                        // Fortschritt für diesen Modus zurücksetzen
                        const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
                        if (state.progress.globalProgress[progressKey] && state.training.currentMode) {
                            state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
                            saveProgress();
                        }
                        return;
                    }
                } else {
                    // Noch Fehler da - shuffle Fehlerliste
                    const errorWords = state.training.currentVocabularySet.filter(word => 
                        state.training.currentMode && state.progress.wordsToRepeatByMode[state.training.currentMode]?.has(word.id)
                    );
                    state.training.shuffledWordsForMode = shuffleArray(errorWords);
                }
            } else {
                // Normaler Modus - nur noch nicht richtig beantwortete Wörter
                const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
                const progressForMode = state.training.currentMode !== null ? state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set() : new Set();
                const progressSet = progressForMode instanceof Set ? progressForMode : new Set(progressForMode);
                
                const remainingWords = state.training.currentVocabularySet.filter(word => 
                    !progressSet.has(word.id)
                );
                
                if (remainingWords.length > 0) {
                    state.training.shuffledWordsForMode = shuffleArray(remainingWords);
                } else {
                    // Alle Wörter wurden richtig beantwortet
                    // Erhöhe Perfect Run Counter
                    if (state.training.currentMode) {
                        if (!state.progress.perfectRunsByMode[state.training.currentMode]) {
                            state.progress.perfectRunsByMode[state.training.currentMode] = 0;
                        }
                        state.progress.perfectRunsByMode[state.training.currentMode]++;
                        savePerfectRuns();
                        
                        const runCount = state.progress.perfectRunsByMode[state.training.currentMode];
                        const runText = runCount === 1 ? '1. Durchlauf' : `${runCount}. Durchlauf`;
                        ui.showSuccessMessageWithButton(
                            dom, 
                            `Perfekt! (${runText})`, 
                            'Übung wiederholen',
                            () => {
                                const progressKey = getTopicKey(state.navigation.currentMainTopic, state.navigation.currentSubTopic);
                                if (progressKey && state.progress.globalProgress[progressKey] && state.training.currentMode) {
                                    state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
                                    saveProgress();
                                }
                                if (state.training.currentMode !== null) {
                                    setMode(state.training.currentMode, false);
                                }
                            }
                        );
                    } else {
                        ui.showMessage(dom, 'Perfekt! Alle Vokabeln in diesem Modus wurden richtig beantwortet.', 'success');
                    }
                    
                    return;
                }
            }
            
            state.training.currentWordIndex = 0;
        }
        
        // Hole nächstes Wort
        state.training.currentWord = state.training.shuffledWordsForMode[state.training.currentWordIndex];
        
        // Mode-Rotation für Chaos-Test
        if (state.test.isTestModeActive && state.test.currentTest?.variant === 'chaos' && state.test.testModeRotation.length > 0) {
            // Nächster Modus aus der Rotation
            state.training.currentMode = state.test.testModeRotation[state.test.currentTestModeIndex % state.test.testModeRotation.length];
            state.test.currentTestModeIndex++;
            // BUGFIX: UI-Reset nach Mode-Wechsel im Chaos-Test
            requestAnimationFrame(() => {
                document.querySelectorAll('[disabled]').forEach(el => {
                    el.removeAttribute('disabled');
                });
            });
        }
        
        if (!state.training.currentWord) {
            console.error('Kein Wort gefunden!');
            return;
        }
        
        // Setup für den aktuellen Modus
        const modeInfo = state.training.currentMode ? learningModes[state.training.currentMode] : null;
        if (modeInfo && typeof modeInfo.setupFunction === 'function') {
            modeInfo.setupFunction();
        } else {
            console.error(`[loadNextTask] Keine Setup-Funktion für Modus "${state.training.currentMode}" gefunden`);
        }
        
        // Zeitmessung für neue Frage starten (nur im Test-Modus)
        if (state.test.isTestModeActive) {
            state.test.currentQuestionStartTime = Date.now();
        }
        
        // Statistiken aktualisieren
        if (state.test.isTestModeActive) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state, learningModes);
            ui.updateCategoryStats(dom, state, learningModes);
        }
        // BUGFIX: Chaos-Test Eingabefelder aktivieren
        // Stelle sicher, dass alle UI-Elemente zurückgesetzt und aktivierbar sind
        setTimeout(() => {
            document.querySelectorAll('button, input').forEach(element => {
                if (element instanceof HTMLButtonElement || element instanceof HTMLInputElement) {
                    element.disabled = false;
                    element.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            });
            document.querySelectorAll('.choice-button').forEach(btn => {
                btn.removeAttribute('disabled');
                btn.classList.remove('opacity-50');
            });
        }, 50);
    }

    function getTopicKey(main: TopicId|null, sub: SubTopicId|null) {
        return main && sub ? `${main}|${sub}` : '';
    }

    // Hilfsfunktion für sichere Mode-Zugriffe
    function getCurrentMode(): ModeId | null {
        return state.training.currentMode;
    }

    function isCurrentModeValid(): boolean {
        return state.training.currentMode !== null;
    }

    // Sichere Zugriffe auf State mit Null-Checks
    function getProgressForMode(progressKey: string): Set<WordId> {
        if (!state.training.currentMode) return new Set();
        const progress = state.progress.globalProgress[progressKey]?.[state.training.currentMode];
        if (progress instanceof Set) {
            return progress;
        }
        return new Set();
    }

    function setProgressForMode(progressKey: string, progress: Set<WordId>): void {
        if (!state.training.currentMode) return;
        if (!state.progress.globalProgress[progressKey]) {
            state.progress.globalProgress[progressKey] = {};
        }
        state.progress.globalProgress[progressKey][state.training.currentMode] = progress;
    }

    function getWordsToRepeatForMode(): Set<WordId> {
        if (!state.training.currentMode) return new Set();
        return state.progress.wordsToRepeatByMode[state.training.currentMode] || new Set();
    }

    function setWordsToRepeatForMode(words: Set<WordId>): void {
        if (!state.training.currentMode) return;
        state.progress.wordsToRepeatByMode[state.training.currentMode] = words;
    }

    function safeSetMode(modeId: ModeId | null, isRepeat: boolean = false): void {
        if (modeId) {
            setMode(modeId, isRepeat);
        }
    }

    // --- NEU: Testmodus sauber verlassen ---
    function exitTestMode(): void {
        // Test-spezifische States zurücksetzen
        state.test.isTestModeActive = false;
        state.test.currentTest = null;
        state.test.testModeRotation = [];
        state.test.currentTestModeIndex = 0;
        state.test.testStartTime = null;
        state.test.currentQuestionStartTime = null;
        state.test.questionTimes = [];
        // Test-Statistiken und UI zurücksetzen
        dom.testStatsViewEl.classList.add('hidden');
        dom.practiceStatsViewEl.classList.remove('hidden');
        dom.modeButtonGridEl.classList.remove('hidden');
        // Haupt-View wiederherstellen
        dom.trainerMainViewEl.classList.remove('hidden');
        dom.navigationViewEl.classList.add('hidden');
        // Felder und Aufgaben-UI wieder anzeigen
        ui.showTrainingModes(dom, state);
        updateRepeatButtons();
    }

    function setMode(modeId: ModeId, isRepeat: boolean = false): void {
        // Wenn Testmodus aktiv war, alles zurücksetzen
        if (state.test.isTestModeActive) {
            exitTestMode();
        }
        
        // FEHLERZÄHLER ZURÜCKSETZEN nur für normale Übungen (nicht für Wiederholungen)
        if (!isRepeat) {
            state.training.correctInCurrentRound = 0;
            state.training.attemptedInCurrentRound = 0;
            
            // Fehlerzähler für diesen Modus zurücksetzen
            if (state.progress.wordsToRepeatByMode[modeId]) {
                state.progress.wordsToRepeatByMode[modeId] = new Set();
                saveWordsToRepeat();
            }
            
            // localStorage direkt löschen (da Firebase-Services keine saveWordsToRepeat haben)
            localStorage.removeItem('trainer-words-to-repeat');
            
            // Firebase Progress zurücksetzen (falls verfügbar)
            if ((window as unknown as { firebaseSyncService?: { saveProgress: (data: Record<string, unknown>) => void } }).firebaseSyncService) {
                try {
                    // Leeren Progress an Firebase senden
                    const emptyProgress: Record<string, unknown> = {};
                    (window as unknown as { firebaseSyncService: { saveProgress: (data: Record<string, unknown>) => void } }).firebaseSyncService.saveProgress(emptyProgress);
                } catch (error) {
                    console.warn('⚠️ Fehler beim Firebase-Reset:', error);
                }
            }
        }
        
        state.training.currentMode = modeId;
        state.test.isTestModeActive = false;
        state.test.isRepeatSessionActive = isRepeat;
        const key = getTopicKey(state.navigation.currentMainTopic, state.navigation.currentSubTopic);
        if (key) state.navigation.lastUsedModeByTopic[key] = modeId;
        let wordsForSession: Word[] = [];
        if (isRepeat) {
            const wordIdsToRepeat = state.progress.wordsToRepeatByMode[modeId] || new Set<WordId>();
            if (wordIdsToRepeat.size === 0) {
                ui.showMessage(dom, 'Keine Fehler zum Wiederholen in diesem Modus.', 'info');
                state.test.isRepeatSessionActive = false;
                return;
            }
            
            // Filtere Wörter die wiederholt werden müssen
            wordsForSession = state.training.currentVocabularySet.filter(word => 
                wordIdsToRepeat.has(word.id as WordId)
            );
            
            if (wordsForSession.length === 0) {
                ui.showMessage(dom, 'Fehler beim Laden der Wiederholungswörter.', 'error');
                return;
            }
            
        } else {
            // Normaler Modus - nur noch nicht richtig beantwortete Wörter
            const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
            const progressForMode = state.training.currentMode !== null ? state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set() : new Set();
            const progressSet = progressForMode instanceof Set ? progressForMode : new Set(progressForMode);
            
            wordsForSession = state.training.currentVocabularySet.filter(word => 
                !progressSet.has(word.id)
            );
            
        }
        state.training.shuffledWordsForMode = shuffleArray(wordsForSession);
        state.training.currentWordIndex = -1;
        state.training.correctInCurrentRound = 0;
        state.training.attemptedInCurrentRound = 0;

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
        // Verzögert ausführen, damit die Input-Felder im DOM sind
        setTimeout(() => {
            // Dynamischer Import für konsistente Chunk-Strategie
            import('./ui/umlaut-buttons').then(mod => {
                mod.initializeUmlautButtons('setup', dom, state, { modeId });
            });
        }, 200); // Längere Verzögerung für dynamisch erstellte Input-Felder
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

    async function handleTestCompletion(): Promise<void> {
        const accuracy = state.training.attemptedInCurrentRound > 0 ? (state.training.correctInCurrentRound / state.training.attemptedInCurrentRound) : 0;
        
        // Zeitmessung für Test-Abschluss
        const testEndTime = Date.now();
        const totalTestTime = state.test.testStartTime ? (testEndTime - state.test.testStartTime) / 1000 : 0; // in Sekunden
        const averageTimePerQuestion = calculateAverageTimePerQuestion(state.test.questionTimes);
        
        // Score-Berechnung mit Zeitfaktor
        const scoreCalculation = calculateTestScore(
            state.training.correctInCurrentRound,
            state.training.attemptedInCurrentRound,
            totalTestTime,
            2 // 2 Punkte Abzug pro Sekunde
        );
        
        if (!state.test.lastTestScores) state.test.lastTestScores = {};
        const testScore: TestScore = {
            testId: `test_${Date.now()}` as TestId,
            correct: state.training.correctInCurrentRound,
            total: state.training.attemptedInCurrentRound,
            accuracy: accuracy,
            timestamp: new Date(),
            testType: 'subTopic',
            topicId: state.navigation.currentMainTopic!,
            subTopicId: state.navigation.currentSubTopic!,
            duration: totalTestTime,
            modesUsed: state.training.currentMode ? [state.training.currentMode] : [],
            // Neue Zeitmessung-Felder
            startTime: state.test.testStartTime || 0,
            endTime: testEndTime,
            averageTimePerQuestion: averageTimePerQuestion,
            timePenalty: scoreCalculation.timePenalty,
            finalScore: scoreCalculation.finalScore
        };
        
        const testKey = `${state.navigation.currentMainTopic}-${state.navigation.currentSubTopic}-${state.training.currentMode}`;
        state.test.lastTestScores[testKey] = testScore;
        
        // Erweiterte Test-Keys für neue Varianten
        if (state.test.currentTest) {
            const variantKey = `${testKey}-${state.test.currentTest.variant}`;
            state.test.lastTestScores[variantKey] = testScore;
            if (state.test.currentTest.selectedCategory) {
                const categoryKey = `${testKey}-${state.test.currentTest.selectedCategory}`;
                state.test.lastTestScores[categoryKey] = testScore;
            }
        }
        
        saveLastTestScores();
        
        // Erweiterte Erfolgsmeldung mit Zeit und Score
        const timeMessage = `⏱️ Zeit: ${Math.floor(totalTestTime)}s (Ø ${averageTimePerQuestion.toFixed(1)}s/Frage)`;
        const scoreMessage = `🏆 Score: ${scoreCalculation.finalScore} (${scoreCalculation.baseScore} - ${scoreCalculation.timePenalty} Zeitstrafe)`;
        const accuracyMessage = `📊 Genauigkeit: ${Math.round(accuracy * 100)}%`;
        
        ui.showMessage(dom, `Test beendet! ${accuracyMessage} | ${timeMessage} | ${scoreMessage}`,
            accuracy >= 0.8 ? 'success' : 'info');
        
        state.test.isTestModeActive = false;
        ui.updateTestStats(dom, state);
        
        // Konvertiere TestScore zu TestResult für die Modal-Anzeige
        const testResult: TestResult = {
            testId: testScore.testId,
            score: testScore,
            wordResults: [], // Leere Array da wir keine einzelnen Wort-Ergebnisse haben
            recommendations: [] // Leere Array da wir keine Empfehlungen haben
        };
        
        // NEU: Test-Ergebnis an Firebase Ranking-System senden
        if (state.test.currentTest) {
            try {
                const windowWithRanking = window as unknown as { rankingService?: { submitTestResult: (testScore: TestScore, variant: string, category?: string) => Promise<string> } };
                if (windowWithRanking.rankingService) {
                    await windowWithRanking.rankingService.submitTestResult(
                        testResult,
                        state.test.currentTest.variant,
                        state.test.currentTest.selectedCategory
                    );
                }
            } catch (error) {
                console.warn('⚠️ Fehler beim Senden an Ranking-System:', error);
            }
        }
        
        // Zeitmessung zurücksetzen
        state.test.testStartTime = null;
        state.test.currentQuestionStartTime = null;
        state.test.questionTimes = [];
        showTestResultModal(testResult, state.test.currentTest as unknown as Record<string, unknown> || undefined);
    }

    const callbacks: UICallbacks = {
        handleTopicSelection: (mainTopic: TopicId, subTopic: SubTopicId) => {
            state.navigation.currentMainTopic = mainTopic;
            state.navigation.currentSubTopic = subTopic;
            
            const topicVokabular = vokabular[mainTopic]?.[subTopic] || [];
            if (!topicVokabular) {
                console.error(`Kein Vokabular für ${mainTopic} > ${subTopic} gefunden.`);
                return;
            }
            state.training.currentVocabularySet = topicVokabular;
            
            ui.showTrainingModes(dom, state);
            updateRepeatButtons();

            // KORREKTUR: Letzten Modus laden oder Standardmodus starten
            const topicKey = getTopicKey(mainTopic, subTopic);
            const lastMode = state.navigation.lastUsedModeByTopic[topicKey];
            const startMode = lastMode || ('mc-de-en' as ModeId);
            setMode(startMode, false);
        },
        handleBackNavigation: () => {
            if (state.navigation.currentSubTopic && state.navigation.currentMainTopic) {
                ui.showSubTopicNavigation(dom, state, vokabular, state.navigation.currentMainTopic, learningModes);
            } else {
                ui.showMainTopicNavigation(dom, state, vokabular, learningModes);
            }
        },
        handleModeSelection: setMode,
        handleAnswer: (isCorrect: boolean, correctAnswer?: string) => {
            processAnswer(isCorrect, correctAnswer);
        },
        handleTestCompletion: () => {
            console.log('Test abgeschlossen');
        },
        startTest: (testConfig: TestConfiguration) => {
            console.log('Starte Test:', testConfig.testTitle);
            
            // Wechsle zu Test-Modus
            ModeManager.switchToMode(state, 'testing');
            
            // NEU: Zeitmessung starten
            state.test.testStartTime = Date.now();
            state.test.questionTimes = [];
            state.test.isTestModeActive = true;
            
            // Generiere Test-Aufgaben
            const result = generateTestQuestions(vokabular, {
                variant: testConfig.variant,
                scope: testConfig.testType as 'subTopic' | 'mainTopic' | 'global',
                topicId: testConfig.topicId,
                category: testConfig.selectedCategory as import('./shared/types/trainer').TestCategory,
                totalQuestions: 20
            });
            
            // NEU: Debug-Ausgabe
            console.log('Test-Generator Ergebnis:', {
                wordsCount: result.words.length,
                modeRotation: result.modeRotation,
                scope: testConfig.type,
                variant: testConfig.variant
            });
            
            // NEU: Prüfung ob Wörter generiert wurden
            if (!result.words || result.words.length === 0) {
                console.error('Keine Wörter für Test generiert!');
                ui.showMessage(dom, 'Fehler: Keine Wörter für Test gefunden!', 'error');
                return;
            }
            
            // State für Test vorbereiten
            state.test.currentTest = testConfig;
            state.training.currentVocabularySet = result.words as import('./shared/types/trainer').Word[];
            state.training.shuffledWordsForMode = result.words as import('./shared/types/trainer').Word[];
            state.training.currentWordIndex = -1;
            state.training.correctInCurrentRound = 0;
            state.training.attemptedInCurrentRound = 0;
            
            // Mode-Rotation für Chaos-Test
            if (testConfig.variant === 'chaos' && result.modeRotation) {
                state.test.testModeRotation = result.modeRotation as import('./shared/types/trainer').ModeId[];
                state.test.currentTestModeIndex = 0;
            } else {
                state.training.currentMode = testConfig.mode as ModeId || null;
            }
            
            // UI für Test starten
            startTestUI(testConfig.testTitle || 'Test', testConfig.mode as ModeId || 'mc-de-en' as ModeId);
        },
    };

    document.addEventListener('topic-selected', (e: Event) => {
        const { mainTopic, subTopic } = (e as CustomEvent).detail;
        callbacks.handleTopicSelection(mainTopic as TopicId, subTopic as SubTopicId);
    });
    document.addEventListener('back-navigation', () => {
        callbacks.handleBackNavigation?.();
    });
    document.addEventListener('mode-selected', (e: Event) => {
        const { mode } = (e as CustomEvent).detail;
        callbacks.handleModeSelection(mode as ModeId);
    });
    document.addEventListener('test-selected', (e: Event) => {
        const { testConfig } = (e as CustomEvent).detail;
        callbacks.startTest!(testConfig);
    });
    document.addEventListener('repeat-selected', (e: Event) => {
        const { mode } = (e as CustomEvent).detail;
        callbacks.startRepeatSession!(mode as ModeId);
    });
    


    // Navigation Event Listeners initialisieren
    ui.initNavigationListeners(dom, state, callbacks, learningModes, vokabular);
    ui.initializeModeButtons(callbacks, learningModes);
    ui.initializeRepeatButtons(callbacks, learningModes);

    // KORREKTUR: Event Listener für den "Zurück"-Button im Trainer explizit hinzufügen
    dom.backToSubtopicsButton.addEventListener('click', () => {
        callbacks.handleBackNavigation?.();
    });
    
    // Initialansicht
    ui.showMainTopicNavigation(dom, state, vokabular, learningModes);

    // Initialen Fehlerzählerstand anzeigen
    updateRepeatButtons();


    
    // Globale initUmlautButtons Funktion für die Browser-Lösung
    // ENTFERNT: Doppelte Implementierung - wird jetzt durch ui/umlaut-buttons.ts gehandhabt
    (window as unknown as { initUmlautButtons: () => void }).initUmlautButtons = function() {
        // Die TypeScript-Implementierung in ui/umlaut-buttons.ts übernimmt jetzt alles
    };

    console.log('🎉 Trainer erfolgreich initialisiert!');
    console.log('📊 Verfügbare Themen:', Object.keys(vokabular));
    console.log('🎮 Verfügbare Modi:', Object.keys(learningModes));
    
    // Vokabular-Validierung - TEMPORÄR DEAKTIVIERT
    // console.log('🔍 Starte Vokabular-Validierung...');
    // const validationResult = validateVocabulary();
    // if (!validationResult.isValid) {
    //     console.error('❌ Vokabular-Validierung fehlgeschlagen!');
    //     console.error('Fehler:', validationResult.errors);
    // } else {
    //     console.log('✅ Vokabular-Validierung erfolgreich!');
    // }

    // Am Ende von document.addEventListener('DOMContentLoaded', ...)
    (window as unknown as { loadNextTask: typeof loadNextTask }).loadNextTask = loadNextTask;

    // Event-Listener für Weiter-Button (nur einmalig registrieren)
    dom.continueButton.addEventListener('click', () => {
        // Verlasse Korrekturmodus
        const previousMode = ModeManager.getCurrentMode(state);
        
        if (previousMode === 'correcting') {
            // Zurück zum vorherigen Modus (learning oder repeating)
            if (state.training.currentMode && state.progress.wordsToRepeatByMode[state.training.currentMode]?.size > 0) {
                ModeManager.switchToMode(state, 'repeating');
            } else {
                ModeManager.switchToMode(state, 'learning');
            }
        }
        
        loadNextTask();
    });


});// Test-Änderung
