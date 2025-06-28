// trainer.ts - VOLLSTÄNDIGE TypeScript VERSION
// Steuerungslogik für den Themen-Trainer mit vollständiger Type-Safety
// Diese Datei orchestriert den Anwendungszustand (State) und die UI-Interaktionen

// Type imports
import type {
  Word,
  TrainerState,
  LearningModes,
  VokabularStructure,
  UICallbacks,
  AuthUI,
  ProcessAnswerFunction,
  InitializeAuthResult,
  DOMElements
} from './shared/types/index';

// Import des kombinierten Vokabulars
import { vokabular } from './vokabular.js';

// Import der Helfer- und UI-Funktionen
import { shuffleArray, speak, vergleicheAntwort } from './shared/utils/helfer.js';
import * as uiModes from './shared/utils/ui-modes.js';
import { dom } from './dom.js';
import * as ui from './ui.js';

// Import der Auth- und Sync-Funktionen
import { initializeAuth } from './shared/auth/index.js';
import { NavigationEvents } from './shared/events/navigation-events.js';

// Globale AuthUI Referenz
let globalAuthUI: AuthUI | null = null;

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {
    // Firebase Auth und Sync initialisieren
    const { authService, authUI, syncService }: InitializeAuthResult = initializeAuth('themen', {
        buttonContainerId: 'auth-button-container',
        hideOnNavigation: true,
        buttonClasses: {
            loggedIn: 'w-full rounded-lg py-3 font-semibold text-white cursor-default',
            loggedOut: 'w-full rounded-lg py-3 font-semibold transition-colors duration-200'
        }
    });

    // Initial auf Root-Seite
    NavigationEvents.dispatchRoot();

    // Speichere authUI Referenz
    globalAuthUI = authUI;

    // Zentrales State-Objekt mit vollständiger Type-Definition
    const state: TrainerState = {
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

    // Hilfsfunktion: Alle Vokabeln aus der verschachtelten Struktur extrahieren
    function getAllWords(vocabularyObject: VokabularStructure): Word[] {
        const allWords: Word[] = [];
        for (const mainTopic of Object.values(vocabularyObject)) {
            for (const subTopic of Object.values(mainTopic)) {
                allWords.push(...subTopic);
            }
        }
        return allWords;
    }
    
    const alleVokabeln: Word[] = getAllWords(vokabular);

    // --- KERNLOGIK (TRAINING & TEST) ---
    
    // processAnswer Funktion mit Type-Safety
    const processAnswer: ProcessAnswerFunction = (isCorrect: boolean, correctAnswer: string): void => {
        console.log(`[processAnswer] Aufgerufen für Modus: ${state.currentMode}`);
        console.log(`[processAnswer] isCorrect: ${isCorrect}, correctAnswer: ${correctAnswer}`);

        // Buttons deaktivieren
        if (dom.checkSpellingButton) dom.checkSpellingButton.disabled = true;
        if (dom.checkClozeButton) dom.checkClozeButton.disabled = true;
        if (dom.checkSentenceButton) dom.checkSentenceButton.disabled = true;

        state.attemptedInRound++;
        const wordId = state.currentWordData?.id;

        if (isCorrect) {
            console.log('[processAnswer] Antwort ist KORREKT');
            state.correctInRound++;
            dom.feedbackContainerEl.innerHTML = `<span class="feedback-correct">Richtig!</span>`;
            
            if (wordId && !state.isTestModeActive && state.currentMainTopic && state.currentSubTopic && state.currentMode) {
                const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
                
                if (!state.globalProgress[progressKey]) {
                    state.globalProgress[progressKey] = {};
                }
                if (!state.globalProgress[progressKey][state.currentMode]) {
                    state.globalProgress[progressKey][state.currentMode] = new Set<string>();
                }
                
                const modeProgress = state.globalProgress[progressKey][state.currentMode];
                if (modeProgress instanceof Set) {
                    modeProgress.add(wordId);
                }
                
                state.masteredWordsByMode[state.currentMode]?.add(wordId);
                state.wordsToRepeatByMode[state.currentMode]?.delete(wordId);
                
                console.log('trainer.ts: Wort als gemeistert hinzugefügt');
                saveGlobalProgress();
            }
            setTimeout(() => { loadNextTask(); }, 1200);
        } else {
            console.log('[processAnswer] Antwort ist FALSCH');
            dom.feedbackContainerEl.innerHTML = `<span class="feedback-incorrect">${correctAnswer}</span>`;
            
            if (wordId && state.currentMode) {
                if (!state.wordsToRepeatByMode[state.currentMode]) {
                    state.wordsToRepeatByMode[state.currentMode] = new Set<string>();
                }
                state.wordsToRepeatByMode[state.currentMode].add(wordId);
                console.log('trainer.ts: Wort zur Wiederholung hinzugefügt');
            }
            dom.continueButton.classList.remove('hidden');
        }

        // Statistiken aktualisieren
        if (state.isTestModeActive) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state, learningModes);
        }
        ui.updateErrorCounts(dom, state, learningModes);
    };

    // Definition der Lernmodi mit Type-Safety
    const learningModes: LearningModes = {
        'mc-de-en': { 
            name: "Bedeutung", 
            setupFunc: () => uiModes.setupMcDeEnMode(dom, state, alleVokabeln, processAnswer) 
        },
        'type-de-adj': { 
            name: "Schreibweise", 
            setupFunc: () => uiModes.setupSpellingMode(dom, state, alleVokabeln, processAnswer) 
        },
        'cloze-adj-de': { 
            name: "Lückentext", 
            setupFunc: () => uiModes.setupClozeAdjDeMode(dom, state, alleVokabeln, processAnswer) 
        },
        'sentence-translation-en-de': { 
            name: "Satzübersetzung", 
            setupFunc: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, alleVokabeln, processAnswer) 
        },
    };

    console.log('trainer.ts: learningModes definiert:', Object.keys(learningModes).length, 'Modi');

    // --- DATENPERSISTENZ (LocalStorage) ---

    function saveLastTestScores(): void {
        try {
            localStorage.setItem('goetheA1LastTestScores', JSON.stringify(state.lastTestScores));
        } catch (error) {
            console.error("Fehler beim Speichern der Testergebnisse:", error);
        }
    }

    function loadLastTestScores(): void {
        const storedScores = localStorage.getItem('goetheA1LastTestScores');
        if (storedScores) {
            try {
                state.lastTestScores = JSON.parse(storedScores);
            } catch (error) {
                console.error("Fehler beim Laden der letzten Testergebnisse:", error);
            }
        }
    }

    function saveGlobalProgress(): void {
        try {
            // Konvertiere Sets zu Arrays für die Speicherung
            const progressToSave: Record<string, Record<string, string[]>> = {};
            
            for (const key in state.globalProgress) {
                progressToSave[key] = {};
                for (const mode in state.globalProgress[key]) {
                    const modeProgress = state.globalProgress[key][mode];
                    if (modeProgress instanceof Set) {
                        progressToSave[key][mode] = Array.from(modeProgress);
                    }
                }
            }
            
            localStorage.setItem('goetheA1Progress', JSON.stringify(progressToSave));
            console.log('trainer.ts: Fortschritt gespeichert');
            
            // Firebase Sync
            if (authService.isLoggedIn()) {
                syncService.saveProgress(progressToSave);
            }
        } catch (error) {
            console.error("Fehler beim Speichern des Fortschritts:", error);
        }
    }

    function loadGlobalProgress(): void {
        const storedProgress = localStorage.getItem('goetheA1Progress');
        if (storedProgress) {
            try {
                const parsed = JSON.parse(storedProgress);
                
                // Konvertiere Arrays zurück zu Sets
                for (const key in parsed) {
                    state.globalProgress[key] = {};
                    for (const mode in parsed[key]) {
                        state.globalProgress[key][mode] = new Set(parsed[key][mode]);
                    }
                }
                
                console.log('trainer.ts: Fortschritt geladen');
            } catch (error) {
                console.error("Fehler beim Laden des Fortschritts:", error);
            }
        }
    }

    // --- TASK LOADING ---

    function loadNextTask(): void {
        console.log('[loadNextTask] Aufgerufen');
        ui.hideAllUIs(dom);
        dom.feedbackContainerEl.innerHTML = '';
        dom.continueButton.classList.add('hidden');

        state.currentWordIndexInShuffled++;

        // Test-Modus Completion Check
        if (state.isTestModeActive && state.currentWordIndexInShuffled >= state.shuffledVocabForMode.length) {
            console.log('[loadNextTask] Test abgeschlossen');
            handleTestCompletion();
            return;
        }

        // Normaler Modus: Endlos-Schleife
        if (!state.isTestModeActive && state.currentWordIndexInShuffled >= state.shuffledVocabForMode.length) {
            console.log('[loadNextTask] Alle Wörter durchlaufen, starte neu');
            state.shuffledVocabForMode = shuffleArray(state.shuffledVocabForMode);
            state.currentWordIndexInShuffled = 0;
        }

        // Repeat-Session Check
        if (state.isRepeatSessionActive && state.currentWordIndexInShuffled >= state.shuffledVocabForMode.length) {
            ui.showMessage(dom, 'Wiederholungsrunde abgeschlossen!', 'success');
            state.isRepeatSessionActive = false;
            document.querySelectorAll('.repeat-active').forEach(btn => btn.classList.remove('repeat-active'));
            return;
        }

        // Aktuelle Vokabel laden
        state.currentWordData = state.shuffledVocabForMode[state.currentWordIndexInShuffled];
        console.log('[loadNextTask] Aktuelle Vokabel:', state.currentWordData?.german);

        // Modus-spezifisches Setup
        const modeInfo = state.currentMode ? learningModes[state.currentMode] : null;
        if (modeInfo && typeof modeInfo.setupFunc === 'function') {
            modeInfo.setupFunc();
        } else {
            console.error(`Keine Setup-Funktion für Modus "${state.currentMode}" gefunden`);
        }
    }

    function setMode(modeId: string, isRepeat: boolean = false): void {
        state.currentMode = modeId;
        state.isTestModeActive = false;
        state.isRepeatSessionActive = isRepeat;
        let wordsForSession: Word[] = [];

        if (isRepeat) {
            const wordIdsToRepeat = state.wordsToRepeatByMode[modeId] || new Set<string>();
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

        // Button-Styles aktualisieren
        document.querySelectorAll('#mode-button-grid .mode-button').forEach(btn => {
            btn.classList.remove('active', 'repeat-active');
        });
        document.getElementById(`mode-${modeId}`)?.classList.add('active');
        if (isRepeat) {
            document.getElementById(`mode-repeat-${modeId}`)?.classList.add('repeat-active');
        }

        loadNextTask();
    }

    // --- TEST FUNKTIONEN ---

    function startTestUI(testTitle: string, modus: string): void {
        authUI.hide();
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

    function handleTestCompletion(): void {
        const accuracy = state.attemptedInRound > 0 
            ? state.correctInRound / state.attemptedInRound 
            : 0;

        console.log('[handleTestCompletion] Test beendet:', {
            correct: state.correctInRound,
            total: state.attemptedInRound,
            accuracy: accuracy,
            testKey: state.testKey
        });

        // Speichere Test-Ergebnis mit erweitertem Schlüssel
        if (state.testKey) {
            state.lastTestScores[state.testKey] = {
                correct: state.correctInRound,
                total: state.attemptedInRound,
                accuracy: accuracy,
                timestamp: Date.now(),
                testType: state.testType || 'subtopic',
                topic: state.currentMainTopic || undefined,
                subtopic: state.currentSubTopic || undefined
            };
            saveLastTestScores();
        }

        // Nachricht anzeigen
        const percentage = Math.round(accuracy * 100);
        ui.showMessage(
            dom, 
            `Test abgeschlossen! ${state.correctInRound} von ${state.attemptedInRound} richtig (${percentage}%)`, 
            accuracy >= 0.8 ? 'success' : 'info'
        );

        // Zurück-Navigation basierend auf Test-Typ
        setTimeout(() => {
            state.isTestModeActive = false;
            
            if (state.testType === 'global') {
                ui.displayMainTopics(dom, state, vokabular, learningModes);
            } else if (state.testType === 'mainTopic' && state.previousMainTopic) {
                state.currentMainTopic = state.previousMainTopic;
                ui.displaySubTopics(dom, state, vokabular, state.previousMainTopic, learningModes);
            } else {
                ui.displayMainTopics(dom, state, vokabular, learningModes);
            }
            
            dom.trainerMainViewEl.classList.add('hidden-view');
            dom.navigationViewEl.classList.remove('hidden-view');
        }, 3000);
    }

    // Hauptthema-Test Funktion
    function starteHauptthemaTest(modus: string): void {
        console.log('[starteHauptthemaTest] Starte Test für Hauptthema:', state.currentMainTopic);
        
        if (!state.currentMainTopic) {
            ui.showMessage(dom, 'Kein Hauptthema ausgewählt!', 'error');
            return;
        }

        const hauptthemaVokabeln = vokabular[state.currentMainTopic];
        if (!hauptthemaVokabeln) {
            ui.showMessage(dom, 'Keine Vokabeln für dieses Hauptthema gefunden!', 'error');
            return;
        }

        const aufgaben: Word[] = [];
        const unterthemen = Object.keys(hauptthemaVokabeln);
        const aufgabenProUnterthema = Math.max(1, Math.min(3, Math.floor(30 / unterthemen.length)));

        // Sammle Aufgaben aus jedem Unterthema
        for (const unterthema of unterthemen) {
            const unterthemaVokabeln = hauptthemaVokabeln[unterthema];
            const verfuegbar = unterthemaVokabeln.length;
            const anzahl = Math.min(aufgabenProUnterthema, verfuegbar);
            
            const ausgewaehlt = shuffleArray([...unterthemaVokabeln]).slice(0, anzahl);
            aufgaben.push(...ausgewaehlt);
        }

        // Finales Shuffle
        const finalAufgaben = shuffleArray(aufgaben).slice(0, 30);

        // State für Test vorbereiten
        state.isTestModeActive = true;
        state.currentMode = modus;
        state.currentSubTopic = `${state.currentMainTopic} - Gesamttest`;
        state.currentVocabularySet = finalAufgaben;
        state.shuffledVocabForMode = finalAufgaben;
        state.masteredWordsByMode = {};
        state.wordsToRepeatByMode = {};
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;
        state.testType = 'mainTopic';
        state.testKey = `mainTopic-${state.currentMainTopic}-${modus}`;
        state.previousMainTopic = state.currentMainTopic;

        startTestUI(`Test: ${state.currentMainTopic}`, modus);
    }

    // Globaler Test Funktion
    function starteGesamtTest(modus: string): void {
        console.log('[starteGesamtTest] Starte globalen Test für Modus:', modus);
        
        const aufgaben = shuffleArray([...alleVokabeln]).slice(0, 36);
        
        if (aufgaben.length === 0) {
            ui.showMessage(dom, 'Keine Vokabeln für den Test gefunden!', 'error');
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

    function startTraining(subTopicName: string): void {
        state.currentSubTopic = subTopicName;
        
        if (!state.currentMainTopic) {
            console.error('Kein Hauptthema ausgewählt');
            return;
        }
        
        const vocabularySet = vokabular[state.currentMainTopic][subTopicName];
        if (!vocabularySet || vocabularySet.length === 0) {
            ui.showMessage(dom, `Keine Vokabeln für "${subTopicName}" gefunden.`, 'info');
            return;
        }

        authUI.hide();
        ui.hideAllUIs(dom);
        state.isTestModeActive = false;
        state.currentVocabularySet = vocabularySet;
        
        const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
        const progressForGroup = state.globalProgress[progressKey] || {};
        
        Object.keys(learningModes).forEach(mode => {
            const modeProgress = progressForGroup[mode];
            if (modeProgress instanceof Set) {
                state.masteredWordsByMode[mode] = new Set(modeProgress);
            } else if (Array.isArray(modeProgress)) {
                state.masteredWordsByMode[mode] = new Set(modeProgress);
            } else {
                state.masteredWordsByMode[mode] = new Set();
            }
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

    function handleNavigation(event: Event): void {
        const target = event.target as HTMLElement;
        const mainTopicButton = target.closest('[data-main-topic]') as HTMLElement | null;
        const subTopicButton = target.closest('[data-sub-topic]') as HTMLElement | null;
        const testButton = target.closest('#start-test-mode-btn') as HTMLElement | null;

        if (mainTopicButton) {
            const mainTopic = mainTopicButton.dataset.mainTopic;
            if (mainTopic) {
                state.currentMainTopic = mainTopic;
                ui.displaySubTopics(dom, state, vokabular, mainTopic, learningModes);
            }
        } else if (subTopicButton) {
            const subTopic = subTopicButton.dataset.subTopic;
            if (subTopic) {
                startTraining(subTopic);
            }
        } else if (testButton) {
            ui.updateTestModeProgressBars(dom, state);
            dom.testSelectionModalEl.classList.remove('hidden-view');
        }
    }

    // --- INITIALISIERUNG ---

    function init(): void {
        loadGlobalProgress();
        loadLastTestScores();

        // Callbacks für die UI-Schicht
        const callbacks: UICallbacks = {
            handleNavigation,
            starteGesamtTest,
            starteHauptthemaTest,
            getVokabular: () => vokabular
        };
        
        ui.initEventListeners(dom, state, callbacks, learningModes);

        // Event-Listener für Lernmodi
        Object.keys(learningModes).forEach(modeId => {
            const button = document.getElementById(`mode-${modeId}`);
            const repeatButton = document.getElementById(`mode-repeat-${modeId}`);
            
            if (button) {
                button.addEventListener('click', () => setMode(modeId, false));
            }
            if (repeatButton) {
                repeatButton.addEventListener('click', () => setMode(modeId, true));
            }
        });
        
        dom.continueButton.addEventListener('click', loadNextTask);

        // Startansicht anzeigen
        authUI.show();
        ui.displayMainTopics(dom, state, vokabular, learningModes);
    }
    
    // Firebase Sync-Listener für Updates von anderen Geräten
    syncService.onSyncUpdate((type: string, data: any) => {
        if (type === 'remoteUpdate' && data) {
            console.log('📥 Fortschritt von anderem Gerät erhalten');
            
            // Daten von Firebase (Arrays) wieder in Sets umwandeln
            const convertedProgress: typeof state.globalProgress = {};
            
            for (const progressKey in data) {
                convertedProgress[progressKey] = {};
                for (const mode in data[progressKey]) {
                    if (Array.isArray(data[progressKey][mode])) {
                        convertedProgress[progressKey][mode] = new Set(data[progressKey][mode]);
                    }
                }
            }
            
            state.globalProgress = convertedProgress;
            ui.displayMainTopics(dom, state, vokabular, learningModes);
            ui.showMessage(dom, 'Fortschritt synchronisiert!', 'success');
        }
    });
    
    // Starte die Anwendung
    init();
});