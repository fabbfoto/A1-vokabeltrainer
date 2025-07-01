// trainer.ts - VOLLSTÄNDIGE TypeScript VERSION
// Steuerungslogik für den Themen-Trainer mit vollständiger Type-Safety
// Diese Datei orchestriert den Anwendungszustand (State) und die UI-Interaktionen

// ✅ KORREKTE TYPE IMPORTS - verwende existierende Types!
import type {
    Word,
    TrainerState,
    VocabularyStructure,
    LearningModes,
    UICallbacks,
    ProcessAnswerFunction,
    AuthUI,
    InitializeAuthResult
} from './shared/types/index.js';

// Import des kombinierten Vokabulars
import { vokabular } from './vokabular.js';

// Import der Helfer- und UI-Funktionen
import { shuffleArray, speak, vergleicheAntwort } from './shared/utils/helfer.js';
import * as uiModes from './shared/utils/ui-modes';
import { dom } from './dom.js';
import * as ui from './ui/index.js';

// Import der Auth- und Sync-Funktionen
import { initializeAuth } from './shared/auth/index.js';
import { NavigationEvents } from './shared/events/navigation-events.js';

// Direkt nach dem Import
console.log('📚 Vokabular importiert:', vokabular);
console.log('📚 Anzahl Hauptthemen:', Object.keys(vokabular).length);

// Globale AuthUI Referenz
let globalAuthUI: AuthUI | null = null;

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {
    console.log('🚀 DOMContentLoaded Event gefeuert');

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
    const authUI = { show: () => {}, hide: () => {} };
    const syncService = { onSyncUpdate: () => {} };

    // Initial auf Root-Seite
    NavigationEvents.dispatchRoot();

    // Speichere authUI Referenz
    globalAuthUI = authUI;

    // ✅ KORREKTE TYPE-USAGE - verwende TrainerState Interface
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
    function getAllWords(vocabularyObject: VocabularyStructure): Word[] {
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
    
    // ✅ KORREKTE TYPE-USAGE - verwende ProcessAnswerFunction
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
            dom.feedbackContainerEl.innerHTML = `<span class="text-green-500 font-bold text-2xl">Richtig!</span>`;
            
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
            dom.feedbackContainerEl.innerHTML = `<span class="text-red-500 font-bold text-2xl">${correctAnswer}</span>`;
            
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

    // ✅ KORREKTE TYPE-USAGE - verwende LearningModes Interface
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
            setupFunc: () => uiModes.setupClozeAdjDeMode(dom, state, processAnswer) 
        },
        'sentence-translation-en-de': { 
            name: "Satzübersetzung", 
            setupFunc: () => uiModes.setupSentenceTranslationEnDeMode(dom, state, processAnswer) 
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
        authUI.hide();
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
        const accuracy = state.attemptedInRound > 0 
            ? (state.correctInRound / state.attemptedInRound) 
            : 0;

        // Speichere Testergebnis
        if (!state.lastTestScores) state.lastTestScores = {};
        
        const testScore = {
            correct: state.correctInRound,
            total: state.attemptedInRound,
            accuracy: accuracy,
            timestamp: Date.now(),
            testType: state.testType || 'subtopic',
            topic: state.currentMainTopic || undefined,
            subtopic: state.currentSubTopic || undefined
        };

        if (state.testKey) {
            state.lastTestScores[state.testKey] = testScore;
        }

        saveLastTestScores();
        
        ui.showMessage(dom, `Test beendet! Ergebnis: ${Math.round(accuracy * 100)}%`, 'success');
        
        // Zurück zur Navigation
        setTimeout(() => {
            const previousMainTopic = state.previousMainTopic;
            const previousSubTopic = state.previousSubTopic;
            
            if (previousMainTopic) {
                if (previousSubTopic) {
                    startTraining(previousSubTopic);
                } else {
                    ui.displaySubTopics(dom, state, vokabular, previousMainTopic, learningModes);
                }
            } else {
                ui.displayMainTopics(dom, state, vokabular, learningModes);
            }
        }, 2000);
    }

    function starteGesamtTest(modus: string): void {
        console.log(`[starteGesamtTest] Modus: ${modus}`);
        
        state.previousMainTopic = state.currentMainTopic;
        state.previousSubTopic = state.currentSubTopic;
        
        state.currentMainTopic = "Gesamttest";
        state.currentSubTopic = null;
        state.testType = 'global';
        state.testKey = `global-${modus}`;
        state.currentMode = modus;
        state.isTestModeActive = true;
        state.isRepeatSessionActive = false;
        
        state.shuffledVocabForMode = shuffleArray([...alleVokabeln]).slice(0, 20);
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;

        startTestUI("Globaler Test", modus);
    }

    function starteHauptthemaTest(modus: string): void {
        console.log(`[starteHauptthemaTest] Hauptthema: ${state.currentMainTopic}, Modus: ${modus}`);
        
        if (!state.currentMainTopic) {
            console.error('[starteHauptthemaTest] Kein Hauptthema ausgewählt');
            return;
        }

        state.previousMainTopic = state.currentMainTopic;
        state.previousSubTopic = state.currentSubTopic;
        
        state.testType = 'mainTopic';
        state.testKey = `mainTopic-${state.currentMainTopic}-${modus}`;
        state.currentMode = modus;
        state.isTestModeActive = true;
        state.isRepeatSessionActive = false;

        const mainTopicWords: Word[] = [];
        const mainTopicData = vokabular[state.currentMainTopic];
        if (mainTopicData) {
            for (const subTopic of Object.values(mainTopicData)) {
                mainTopicWords.push(...subTopic);
            }
        }

        state.shuffledVocabForMode = shuffleArray(mainTopicWords).slice(0, Math.min(15, mainTopicWords.length));
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;

        startTestUI(`${state.currentMainTopic} Test`, modus);
    }

    function startTraining(subTopicName: string): void {
        state.currentSubTopic = subTopicName;
        const vocabularySet = vokabular[state.currentMainTopic!]?.[subTopicName];
        
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
            state.masteredWordsByMode[mode] = new Set<string>(progressForGroup[mode] || []); 
            state.wordsToRepeatByMode[mode] = new Set<string>(); 
        });
        
        dom.practiceStatsViewEl.classList.remove('hidden');
        dom.testStatsViewEl.classList.add('hidden');
        dom.modeButtonGridEl.classList.remove('hidden');
        dom.currentTrainingTitleEl.textContent = subTopicName;
        dom.navigationViewEl.classList.add('hidden');
        dom.trainerMainViewEl.classList.remove('hidden');
        
        ui.updatePracticeStats(dom, state, learningModes);
        ui.updateErrorCounts(dom, state, learningModes);
        setTimeout(() => setMode('mc-de-en'), 10);
    }

    function handleNavigation(event: Event): void {
        const target = event.target as HTMLElement;
        const mainTopicButton = target.closest('[data-main-topic]') as HTMLElement;
        const subTopicButton = target.closest('[data-sub-topic]') as HTMLElement;
        const testButton = target.closest('#start-test-mode-btn');

        if (mainTopicButton) {
            const mainTopic = mainTopicButton.dataset.mainTopic;
            if (mainTopic) {
                ui.displaySubTopics(dom, state, vokabular, mainTopic, learningModes);
            }
        } else if (subTopicButton) {
            const subTopic = subTopicButton.dataset.subTopic;
            if (subTopic) {
                startTraining(subTopic);
            }
        } else if (testButton) {
            ui.updateTestModeProgressBars(dom, state);
            dom.testSelectionModalEl.classList.remove('hidden');
        }
    }

    // --- INITIALISIERUNG ---

    async function init(): Promise<void> {
        console.log('🔧 init() startet...');

        loadGlobalProgress();
        loadLastTestScores();

        console.log('📊 Progress geladen');

        // ✅ KORREKTE TYPE-USAGE - verwende UICallbacks Interface
        const callbacks: UICallbacks = {
            handleNavigation,
            starteGesamtTest,
            starteHauptthemaTest,
            getVokabular: () => vokabular
        };
        
        await ui.initEventListeners(dom, state, callbacks, learningModes);

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

        // Zurück zur Unterthemen-Übersicht
        dom.backToSubtopicsButton.addEventListener('click', () => {
            if (state.currentMainTopic && state.currentMainTopic !== "Gesamttest") {
                ui.displaySubTopics(dom, state, vokabular, state.currentMainTopic, learningModes);
            }
        });

        console.log('🔧 Event-Listener registriert');

        // Hauptthemen anzeigen
        ui.displayMainTopics(dom, state, vokabular, learningModes);
        
        console.log('🚀 Initialisierung abgeschlossen - App bereit!');
    }

    // App starten
    init().catch(error => {
        console.error('💥 Fehler bei der Initialisierung:', error);
    });
});

// Globale Funktion für Auth-Modal
(window as any).showAuthModal = (): void => {
    if (globalAuthUI) {
        globalAuthUI.show();
    }
};