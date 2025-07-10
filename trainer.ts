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
} from './shared/types/trainer';

import { dom } from './dom';
import type { DOMElements } from './shared/types/ui';
import { vokabular } from './vokabular';
import { shuffleArray } from './shared/utils/helfer';
import * as uiModes from './shared/utils/ui-modes';
import * as ui from './ui/index';
import { initializeAuth } from './shared/auth/index';
import { NavigationEvents } from './shared/events/navigation-events';
import { setupUmlautButtons } from './ui/umlaut-buttons';
import { updateErrorCounts } from './ui/statistics';
import { generateTestQuestions, TestGenerationResult } from './utils/test-generator';
import { calculateTestScore, calculateAverageTimePerQuestion } from './shared/types/trainer';
import { showTestResultModal } from './shared/ui/test-result-modal';
import { ModeManager } from './shared/services/mode-manager';

console.log('📚 Vokabular importiert:', vokabular);
console.log('📚 Anzahl Hauptthemen:', Object.keys(vokabular).length);

let globalAuthUI: AuthUI | null = null;

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {
    console.log('🚀 DOMContentLoaded Event gefeuert');

    // NEU: Firebase Auth initialisieren
    let authService: any;
    let authUI: AuthUI;
    let syncService: any;
    let rankingService: any;

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
        
        console.log('✅ Firebase Auth erfolgreich initialisiert');
    } catch (error) {
        console.warn('⚠️ Firebase Auth nicht verfügbar, verwende Fallback:', error);
        
        // Fallback-Services
        authService = { isLoggedIn: () => false };
        authUI = {
            show: () => { },
            hide: () => { },
            container: null
        };
        syncService = {
            onSyncUpdate: () => { },
            saveProgress: async () => { }
        };
        rankingService = {
            submitTestResult: async () => { console.log('Ranking-Service nicht verfügbar'); }
        };
    }

    NavigationEvents.dispatchRoot();
    globalAuthUI = authUI;

    const state: TrainerState = {
        // Navigation State
        navigation: {
            currentMainTopic: null,
            currentSubTopic: null,
            previousMainTopic: null,
            previousSubTopic: null,
            lastUsedModeByTopic: {} as Record<string, ModeId>,
        },
        
        // Training State
        training: {
            currentVocabularySet: [],
            shuffledWordsForMode: [],
            currentWordIndex: -1,
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
        
        // Progress State
        progress: {
            globalProgress: {},
            masteredWordsByMode: {},
            wordsToRepeatByMode: {},
            perfectRunsByMode: {}, // Zählt perfekte Durchläufe pro Modus
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
        }
    };

    function loadProgress(): void {
        // Versuche zuerst trainer-progress
        let saved = localStorage.getItem('trainer-progress');
        
        // Falls nicht vorhanden, versuche Firebase-Key
        if (!saved) {
            const firebaseSaved = localStorage.getItem('a1ThemenProgress');
            if (firebaseSaved) {
                console.log('📦 Konvertiere Firebase-Progress zu lokalem Format...');
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
                    console.log('✅ Firebase-Progress konvertiert');
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
                                state.progress.globalProgress[topicKey][mode] = new Set(data);
                            } else if (data instanceof Set) {
                                state.progress.globalProgress[topicKey][mode] = data;
                            } else {
                                console.warn(`⚠️ Unerwarteter Datentyp für ${topicKey}/${mode}:`, typeof data);
                                state.progress.globalProgress[topicKey][mode] = new Set();
                            }
                        });
                    } else {
                        console.warn(`⚠️ Ungültige Daten für ${topicKey}`);
                    }
                });
                
                console.log('✅ Progress geladen mit', Object.keys(state.progress.globalProgress).length, 'Themen');
            } catch (e) {
                console.error('❌ Fehler beim Laden des Progress:', e);
                state.progress.globalProgress = {};
            }
        } else {
            console.log('ℹ️ Kein gespeicherter Progress gefunden');
            state.progress.globalProgress = {};
        }
    }

    function saveProgress(): void {
        try {
            localStorage.setItem('trainer-progress', JSON.stringify(state.progress.globalProgress));
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
                    state.progress.masteredWordsByMode[mode as ModeId] = new Set(parsed[mode] as WordId[]);
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
                console.log('✅ Words to repeat geladen');
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
                console.log('✅ Test scores geladen');
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
                console.log('✅ Perfect runs geladen');
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
        console.log('[processAnswer] Start:', {
            isCorrect,
            correctAnswer,
            currentMode: ModeManager.getCurrentMode(state),
            isCorrectionMode: state.training.isCorrectionMode,
            isTestMode: state.test.isTestModeActive,
            currentWord: state.training.currentWord?.german
        });
        
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
        console.log(`[processAnswer] Modus: ${currentMode}, Korrekt: ${isCorrect}`);
        
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
        console.log('✅ Alle Fehler behoben - wechsle zu noch nicht beantworteten Vokabeln');
        state.test.isRepeatSessionActive = false;
        
        // Filtere Vokabeln, die noch nicht richtig beantwortet wurden
        const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
        const progressForMode = state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set();
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
                        if (progressKey && state.progress.globalProgress[progressKey]) {
                            state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
                            saveProgress();
                        }
                        setMode(state.training.currentMode, false);
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
                    const progressForMode = state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set();
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
                                    if (progressKey && state.progress.globalProgress[progressKey]) {
                                        state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
                                        saveProgress();
                                    }
                                    setMode(state.training.currentMode, false);
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
                        state.progress.wordsToRepeatByMode[state.training.currentMode]?.has(word.id)
                    );
                    state.training.shuffledWordsForMode = shuffleArray(errorWords);
                }
            } else {
                // Normaler Modus - nur noch nicht richtig beantwortete Wörter
                const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
                const progressForMode = state.progress.globalProgress[progressKey]?.[state.training.currentMode] || new Set();
                const progressSet = progressForMode instanceof Set ? progressForMode : new Set(progressForMode);
                
                const remainingWords = state.training.currentVocabularySet.filter(word => 
                    !progressSet.has(word.id)
                );
                
                if (remainingWords.length > 0) {
                    state.training.shuffledWordsForMode = shuffleArray(remainingWords);
                    console.log(`Normaler Modus: ${remainingWords.length} Wörter noch nicht beantwortet`);
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
                                if (progressKey && state.progress.globalProgress[progressKey]) {
                                    state.progress.globalProgress[progressKey][state.training.currentMode] = new Set();
                                    saveProgress();
                                }
                                setMode(state.training.currentMode, false);
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
            console.log(`Chaos-Test: Aufgabe ${state.training.currentWordIndex + 1} mit Modus ${state.training.currentMode}`);
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
            console.log('[loadNextTask] Setup-Funktion für Modus:', state.training.currentMode);
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

    function setMode(modeId: ModeId, isRepeat: boolean = false): void {
        console.log(`setMode aufgerufen: ${modeId}, isRepeat: ${isRepeat}`);
        
        // FEHLERZÄHLER ZURÜCKSETZEN nur für normale Übungen (nicht für Wiederholungen)
        if (!isRepeat) {
            console.log('🔄 Setze Fehlerzähler für neue Übung zurück...');
            state.training.correctInCurrentRound = 0;
            state.training.attemptedInCurrentRound = 0;
            
            // Fehlerzähler für diesen Modus zurücksetzen
            if (state.progress.wordsToRepeatByMode[modeId]) {
                state.progress.wordsToRepeatByMode[modeId] = new Set();
                saveWordsToRepeat();
                console.log(`🗑️ Fehlerzähler für Modus ${modeId} zurückgesetzt`);
            }
            
            // localStorage direkt löschen (da Firebase-Services keine saveWordsToRepeat haben)
            localStorage.removeItem('trainer-words-to-repeat');
            console.log(`🗑️ localStorage 'trainer-words-to-repeat' gelöscht`);
            
            // Firebase Progress zurücksetzen (falls verfügbar)
            if ((window as any).firebaseSyncService) {
                try {
                    // Leeren Progress an Firebase senden
                    const emptyProgress = {};
                    (window as any).firebaseSyncService.saveProgress(emptyProgress);
                    console.log(`☁️ Firebase Progress zurückgesetzt`);
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
            
            console.log(`Starte Wiederholung mit ${wordsForSession.length} Wörtern`);
        } else {
            // Normaler Modus - nur noch nicht richtig beantwortete Wörter
            const progressKey = `${state.navigation.currentMainTopic}|${state.navigation.currentSubTopic}`;
            const progressForMode = state.progress.globalProgress[progressKey]?.[modeId] || new Set();
            const progressSet = progressForMode instanceof Set ? progressForMode : new Set(progressForMode);
            
            wordsForSession = state.training.currentVocabularySet.filter(word => 
                !progressSet.has(word.id)
            );
            
            console.log(`Normaler Modus: ${wordsForSession.length} von ${state.training.currentVocabularySet.length} Wörtern noch nicht beantwortet`);
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
            const umlautModes = ['type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'];
            if (ui.setupUmlautButtons) {
                ui.setupUmlautButtons(dom, state);
                console.log(`✅ Umlaut-Buttons für Modus ${modeId} initialisiert`);
            }
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
            testId: `test_${Date.now()}` as any,
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
        
        // Zeitmessung zurücksetzen
        state.test.testStartTime = null;
        state.test.currentQuestionStartTime = null;
        state.test.questionTimes = [];
        
        // NEU: Test-Ergebnis an Firebase Ranking-System senden
        if (state.test.currentTest) {
            try {
                if ((window as any).rankingService) {
                    await (window as any).rankingService.submitTestResult(
                        testScore,
                        state.test.currentTest.variant,
                        state.test.currentTest.selectedCategory
                    );
                    console.log('✅ Test-Ergebnis an Ranking-System gesendet');
                } else {
                    console.log('ℹ️ Ranking-Service nicht verfügbar - Test-Ergebnis nur lokal gespeichert');
                }
            } catch (error) {
                console.warn('⚠️ Fehler beim Senden an Ranking-System:', error);
            }
        }
        showTestResultModal(testScore, state.test.currentTest || undefined);
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
        setMode: setMode,
        processAnswer: processAnswer,
        loadNextWord: loadNextTask,
        speakWord: (word: string) => console.log('Spreche Wort:', word),
        speakSentence: (sentence: string) => console.log('Spreche Satz:', sentence),
        startTest: (testConfig: TestConfiguration) => {
            console.log('Starte Test:', testConfig.testTitle);
            
            // Wechsle zu Test-Modus
            ModeManager.switchToMode(state, 'testing');
            
            // Generiere Test-Aufgaben
            const result = generateTestQuestions(vokabular, {
                variant: testConfig.variant,
                scope: testConfig.type as any,
                topicId: testConfig.topicId,
                category: testConfig.selectedCategory as import('./shared/types/trainer').TestCategory,
                totalQuestions: 20
            });
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
                state.training.currentMode = testConfig.mode;
            }
            // UI für Test starten
            startTestUI(testConfig.testTitle, testConfig.mode);
        },
        submitTestAnswer: (isCorrect: boolean, timeSpent: number) => {
            console.log(`Testantwort: ${isCorrect}, Zeit: ${timeSpent}`);
        },
        completeTest: (result: any) => {
            console.log('Test abgeschlossen:', result);
        },
        showLoading: () => dom.loadingIndicatorEl.classList.remove('hidden'),
        hideLoading: () => dom.loadingIndicatorEl.classList.add('hidden'),
        showError: (error: string) => alert(error),
        clearError: () => { /* Nichts zu tun */ },
        updateProgress: (wordId: WordId, mode: ModeId, correct: boolean) => {
            console.log(`Update Progress: ${wordId} in ${mode} war ${correct}`);
        },
        startRepeatSession: (mode: string) => {
            // Wechsle zu Wiederholungs-Modus
            ModeManager.switchToMode(state, 'repeating');
            
            // Rest der Initialisierung...
            setMode(mode as ModeId, true);
        },
    };

    document.addEventListener('topic-selected', (e: Event) => {
        const { mainTopic, subTopic } = (e as CustomEvent).detail;
        callbacks.handleTopicSelection(mainTopic as TopicId, subTopic as SubTopicId);
    });
    document.addEventListener('back-navigation', () => {
        callbacks.handleBackNavigation();
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
        callbacks.handleBackNavigation();
    });
    
    // Initialansicht
    ui.showMainTopicNavigation(dom, state, vokabular, learningModes);

    // Initialen Fehlerzählerstand anzeigen
    updateRepeatButtons();


    
    // Globale initUmlautButtons Funktion für die Browser-Lösung
    // ENTFERNT: Doppelte Implementierung - wird jetzt durch ui/umlaut-buttons.ts gehandhabt
    (window as any).initUmlautButtons = function() {
        console.log('initUmlautButtons aufgerufen - wird durch TypeScript-Implementierung gehandhabt');
        // Die TypeScript-Implementierung in ui/umlaut-buttons.ts übernimmt jetzt alles
    };

    console.log('🎉 Trainer erfolgreich initialisiert!');
    console.log('📊 Verfügbare Themen:', Object.keys(vokabular));
    console.log('🎮 Verfügbare Modi:', Object.keys(learningModes));

    // Am Ende von document.addEventListener('DOMContentLoaded', ...)
    (window as any).loadNextTask = loadNextTask;

    // Event-Listener für Weiter-Button (nur einmalig registrieren)
    dom.continueButton.addEventListener('click', () => {
        // Verlasse Korrekturmodus
        const previousMode = ModeManager.getCurrentMode(state);
        
        if (previousMode === 'correcting') {
            // Zurück zum vorherigen Modus (learning oder repeating)
            if (state.progress.wordsToRepeatByMode[state.training.currentMode]?.size > 0) {
                ModeManager.switchToMode(state, 'repeating');
            } else {
                ModeManager.switchToMode(state, 'learning');
            }
        }
        
        loadNextTask();
    });


});// Test-Änderung
