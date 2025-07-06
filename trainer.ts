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
import { updateErrorCounts } from './ui/statistics';

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
        isCorrectionMode: false,
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
                state.globalProgress = {};
                
                // WICHTIG: Konvertiere IMMER zu Sets
                Object.keys(parsed).forEach(topicKey => {
                    state.globalProgress[topicKey] = {};
                    
                    if (typeof parsed[topicKey] === 'object' && parsed[topicKey] !== null) {
                        Object.keys(parsed[topicKey]).forEach(mode => {
                            const data = parsed[topicKey][mode];
                            
                            // Stelle sicher, dass es ein Set wird
                            if (Array.isArray(data)) {
                                state.globalProgress[topicKey][mode] = new Set(data);
                            } else if (data instanceof Set) {
                                state.globalProgress[topicKey][mode] = data;
                            } else {
                                console.warn(`⚠️ Unerwarteter Datentyp für ${topicKey}/${mode}:`, typeof data);
                                state.globalProgress[topicKey][mode] = new Set();
                            }
                        });
                    } else {
                        console.warn(`⚠️ Ungültige Daten für ${topicKey}`);
                    }
                });
                
                console.log('✅ Progress geladen mit', Object.keys(state.globalProgress).length, 'Themen');
            } catch (e) {
                console.error('❌ Fehler beim Laden des Progress:', e);
                state.globalProgress = {};
            }
        } else {
            console.log('ℹ️ Kein gespeicherter Progress gefunden');
            state.globalProgress = {};
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

    function updateRepeatButtons() {
        ui.updateErrorCounts(dom, state, learningModes);
    }

    loadProgress();
    loadMasteredWords();
    loadWordsToRepeat();
    loadLastTestScores();

    function processAnswer(isCorrect: boolean, correctAnswer?: string): void {
        state.attemptedInCurrentRound++;

        // Im Korrekturmodus wird das Feedback vom jeweiligen Modul selbst verwaltet
        if (state.isCorrectionMode) {
            // Nur Statistiken aktualisieren, kein automatisches Weitergehen
            if (isCorrect) {
                state.correctInCurrentRound++;
            } else {
                // Fehlerwort zum Fehlerstapel hinzufügen
                if (state.currentWord && state.currentMode) {
                    if (!state.wordsToRepeatByMode[state.currentMode]) {
                        state.wordsToRepeatByMode[state.currentMode] = new Set();
                    }
                    state.wordsToRepeatByMode[state.currentMode].add(state.currentWord.id);
                    saveWordsToRepeat();
                }
            }
            
            // Statistiken aktualisieren
            if (state.isTestModeActive) {
                ui.updateTestStats(dom, state);
            } else {
                ui.updatePracticeStats(dom, state, learningModes);
            }
            return; // Kein automatisches Weitergehen!
        }

        // Normaler Modus (ohne Korrekturmodus)
        if (isCorrect) {
            state.correctInCurrentRound++;
            
            // WICHTIG: Spezielle Behandlung für Wiederholungs-Modus
            if (state.isRepeatSessionActive && state.currentWord && state.currentMode) {
                // Entferne das Wort aus der Fehlerliste
                if (state.wordsToRepeatByMode[state.currentMode]) {
                    state.wordsToRepeatByMode[state.currentMode].delete(state.currentWord.id);
                    console.log(`✅ Wort ${state.currentWord.id} aus Fehlerliste entfernt`);
                    
                    // Speichere aktualisierte Fehlerliste
                    saveWordsToRepeat();
                    
                    // Update Fehler-Buttons
                    ui.updateErrorCounts(dom, state, learningModes);
                    
                    // ZUSÄTZLICH: Wenn keine Fehler mehr, explizit Button zurücksetzen
                    if (state.wordsToRepeatByMode[state.currentMode].size === 0) {
                        const repeatButton = document.getElementById(`mode-repeat-${state.currentMode}`);
                        if (repeatButton) {
                            // Entferne alle aktiven Styles
                            repeatButton.classList.remove('bg-red-600', 'text-white', 'hover:bg-red-700');
                            repeatButton.classList.add('bg-red-100', 'text-red-500');
                            console.log('✅ Button auf Standard-Styling zurückgesetzt');
                        }
                    }
                }
                
                // WICHTIG: Füge das Wort auch zum normalen Progress hinzu
                const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
                
                if (!state.globalProgress[progressKey]) {
                    state.globalProgress[progressKey] = {};
                }
                if (!state.globalProgress[progressKey][state.currentMode]) {
                    state.globalProgress[progressKey][state.currentMode] = new Set();
                }
                
                // Stelle sicher, dass es ein Set ist
                let progressSet = state.globalProgress[progressKey][state.currentMode];
                if (!(progressSet instanceof Set)) {
                    // Konvertiere Array zu Set falls nötig
                    if (Array.isArray(progressSet)) {
                        progressSet = new Set(progressSet);
                        state.globalProgress[progressKey][state.currentMode] = progressSet;
                        console.log('⚠️ Konvertierte Array zu Set für', state.currentMode);
                    } else {
                        progressSet = new Set();
                        state.globalProgress[progressKey][state.currentMode] = progressSet;
                        console.log('⚠️ Erstelle neues Set für', state.currentMode);
                    }
                }
                
                progressSet.add(state.currentWord.id);
                saveProgress();
                
                console.log(`✅ Wort ${state.currentWord.id} zu Progress hinzugefügt`);
            }
            // Normale Übungsmodus-Logik
            else if (!state.isTestModeActive && state.currentWord && state.currentMode) {
                const progressKey = `${state.currentMainTopic}|${state.currentSubTopic}`;
                
                if (!state.globalProgress[progressKey]) {
                    state.globalProgress[progressKey] = {};
                }
                if (!state.globalProgress[progressKey][state.currentMode]) {
                    state.globalProgress[progressKey][state.currentMode] = new Set();
                }
                
                // Stelle sicher, dass es ein Set ist
                let progressSet = state.globalProgress[progressKey][state.currentMode];
                if (!(progressSet instanceof Set)) {
                    // Konvertiere Array zu Set falls nötig
                    if (Array.isArray(progressSet)) {
                        progressSet = new Set(progressSet);
                        state.globalProgress[progressKey][state.currentMode] = progressSet;
                        console.log('⚠️ Konvertierte Array zu Set für', state.currentMode);
                    } else {
                        progressSet = new Set();
                        state.globalProgress[progressKey][state.currentMode] = progressSet;
                        console.log('⚠️ Erstelle neues Set für', state.currentMode);
                    }
                }
                
                progressSet.add(state.currentWord.id);
                saveProgress();
            }
            
            dom.feedbackContainerEl.innerHTML = `
                <div class="text-green-600 text-2xl font-bold">✓ Richtig!</div>
            `;
        } else {
            // Bei falschen Antworten: Zeige Korrektur und Weiter-Button
            dom.feedbackContainerEl.innerHTML = `
                <div class="text-red-600 text-xl font-semibold mb-2">✗ Nicht ganz richtig</div>
                <div class="bg-gray-100 p-3 rounded-lg">
                    <span class="text-gray-700 font-medium">Richtige Antwort:</span>
                    <div class="text-green-600 text-lg mt-1">${correctAnswer}</div>
                </div>
            `;
            // Zeige Weiter-Button
            dom.continueButton.classList.remove('hidden');
            dom.continueButton.focus();
            // Deaktiviere alle Eingabefelder
            const allInputs = document.querySelectorAll('input');
            allInputs.forEach(input => input.disabled = true);
            
            // Bei falscher Antwort (sowohl im normalen als auch im Wiederholungs-Modus)
            if (state.currentWord && state.currentMode) {
                if (!state.wordsToRepeatByMode[state.currentMode]) {
                    state.wordsToRepeatByMode[state.currentMode] = new Set();
                }
                
                // Im Wiederholungs-Modus: Wort bleibt in der Liste
                // Im normalen Modus: Wort wird zur Liste hinzugefügt
                state.wordsToRepeatByMode[state.currentMode].add(state.currentWord.id);
                saveWordsToRepeat();
                
                // Update Fehler-Buttons
                ui.updateErrorCounts(dom, state, learningModes);
            }
        }

        // UI Updates - IMMER ausführen
        if (state.isTestModeActive) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state, learningModes);
            ui.updateCategoryStats(dom, state, learningModes); // Wichtig für Balken!
        }
        
        // WICHTIG: Nach korrekter Antwort im Wiederholungsmodus
        if (isCorrect && state.isRepeatSessionActive) {
            // Prüfe ob noch Fehler vorhanden sind
            const remainingErrors = state.wordsToRepeatByMode[state.currentMode]?.size || 0;
            
            if (remainingErrors === 0) {
                // Keine Fehler mehr - wechsle zurück zum normalen Modus
                console.log('✅ Alle Fehler behoben - wechsle zu normalem Modus');
                state.isRepeatSessionActive = false;
                
                // Lade normale Wortliste
                state.shuffledWordsForMode = shuffleArray([...state.currentVocabularySet]);
                state.currentWordIndex = -1; // Wird in loadNextTask erhöht
                
                // Update UI
                const repeatButton = document.getElementById(`mode-repeat-${state.currentMode}`);
                if (repeatButton) {
                    repeatButton.classList.remove('bg-red-600', 'text-white');
                    repeatButton.classList.add('bg-red-100', 'text-red-500');
                }
                
                // Zeige kurze Erfolgsmeldung
                ui.showMessage(dom, 'Alle Fehler behoben! Weiter mit normalen Übungen.', 'success');
            }
            
            // IMMER zur nächsten Aufgabe
            setTimeout(() => {
                loadNextTask();
            }, isCorrect ? 1500 : 2500); // Kurze Pause für Feedback
        }
        // Normaler Modus - existierender Code
        else if (!state.isCorrectionMode) {
            if (isCorrect) {
                setTimeout(() => {
                    loadNextTask();
                }, 1500);
            } else {
                // Bei Fehler zeige Korrektur-UI (existierender Code bleibt)
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
        state.currentWordIndex++;
        
        // Prüfe ob wir am Ende der Liste sind
        if (state.currentWordIndex >= state.shuffledWordsForMode.length) {
            if (state.isTestModeActive) {
                handleTestCompletion();
                return;
            }
            
            // Shuffle und von vorne beginnen
            if (state.isRepeatSessionActive) {
                // Im Wiederholungsmodus: Prüfe ob noch Fehler da sind
                const remainingErrors = state.wordsToRepeatByMode[state.currentMode]?.size || 0;
                if (remainingErrors === 0) {
                    // Automatisch zu normalem Modus wechseln
                    state.isRepeatSessionActive = false;
                    state.shuffledWordsForMode = shuffleArray([...state.currentVocabularySet]);
                    ui.showMessage(dom, 'Super! Alle Fehler behoben. Weiter geht\'s!', 'success');
                } else {
                    // Noch Fehler da - shuffle Fehlerliste
                    const errorWords = state.currentVocabularySet.filter(word => 
                        state.wordsToRepeatByMode[state.currentMode]?.has(word.id)
                    );
                    state.shuffledWordsForMode = shuffleArray(errorWords);
                }
            } else {
                // Normaler Modus - shuffle alle Wörter
                state.shuffledWordsForMode = shuffleArray([...state.currentVocabularySet]);
            }
            
            state.currentWordIndex = 0;
        }
        
        // Hole nächstes Wort
        state.currentWord = state.shuffledWordsForMode[state.currentWordIndex];
        
        if (!state.currentWord) {
            console.error('Kein Wort gefunden!');
            return;
        }
        
        // Setup für den aktuellen Modus
        const modeInfo = state.currentMode ? learningModes[state.currentMode] : null;
        if (modeInfo && typeof modeInfo.setupFunction === 'function') {
            modeInfo.setupFunction();
        } else {
            console.error(`Keine Setup-Funktion für Modus "${state.currentMode}" gefunden`);
        }
        
        // Statistiken aktualisieren
        if (state.isTestModeActive) {
            ui.updateTestStats(dom, state);
        } else {
            ui.updatePracticeStats(dom, state, learningModes);
            ui.updateCategoryStats(dom, state, learningModes);
        }
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
            
            // Filtere Wörter die wiederholt werden müssen
            wordsForSession = state.currentVocabularySet.filter(word => 
                wordIdsToRepeat.has(word.id as WordId)
            );
            
            if (wordsForSession.length === 0) {
                ui.showMessage(dom, 'Fehler beim Laden der Wiederholungswörter.', 'error');
                return;
            }
            
            console.log(`Starte Wiederholung mit ${wordsForSession.length} Wörtern`);
        } else {
            // Normaler Modus
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

    const callbacks: UICallbacks = {
        handleTopicSelection: (mainTopic: TopicId, subTopic: SubTopicId) => {
            state.currentMainTopic = mainTopic;
            state.currentSubTopic = subTopic;
            
            const topicVokabular = vokabular[mainTopic]?.[subTopic] || [];
            if (!topicVokabular) {
                console.error(`Kein Vokabular für ${mainTopic} > ${subTopic} gefunden.`);
                return;
            }
            state.currentVocabularySet = topicVokabular;
            
            ui.showTrainingModes(dom, state);
            updateRepeatButtons();

            // KORREKTUR: Letzten Modus laden oder Standardmodus starten
            const topicKey = getTopicKey(mainTopic, subTopic);
            const lastMode = state.lastUsedModeByTopic[topicKey];
            const startMode = lastMode || ('mc-de-en' as ModeId);
            setMode(startMode, false);
        },
        handleBackNavigation: () => {
            if (state.currentSubTopic && state.currentMainTopic) {
                ui.showSubTopicNavigation(dom, state, vokabular, state.currentMainTopic, learningModes);
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
            console.log('Starte Test mit Konfiguration:', testConfig);
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
        startRepeatSession: (mode: string) => setMode(mode as ModeId, true),
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
    (window as any).initUmlautButtons = function() {
        let lastFocusedInput: HTMLInputElement | null = null;
        
        // Focus-Listener für alle Noun-Inputs
        const article = document.getElementById('spelling-input-article') as HTMLInputElement;
        const noun1 = document.getElementById('spelling-input-noun-1') as HTMLInputElement;
        const noun2 = document.getElementById('spelling-input-noun-2') as HTMLInputElement;
        
        if (article) {
            article.addEventListener('focus', () => {
                lastFocusedInput = article;
                console.log('Focus auf Artikel-Feld');
            });
        }
        
        if (noun1) {
            noun1.addEventListener('focus', () => {
                lastFocusedInput = noun1;
                console.log('Focus auf Singular-Feld');
            });
        }
        
        if (noun2) {
            noun2.addEventListener('focus', () => {
                lastFocusedInput = noun2;
                console.log('Focus auf Plural-Feld');
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
                    } else if (article && article.offsetParent !== null) {
                        targetInput = lastFocusedInput || article;
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

    // Am Ende von document.addEventListener('DOMContentLoaded', ...)
    (window as any).loadNextTask = loadNextTask;

    // Event-Listener für Weiter-Button (nur einmalig registrieren)
    dom.continueButton.addEventListener('click', () => {
        // Nur im normalen Modus (nicht im Korrekturmodus)
        if (!state.isCorrectionMode) {
            // Button verstecken
            dom.continueButton.classList.add('hidden');
            // Feedback leeren (optional)
            dom.feedbackContainerEl.innerHTML = '';
            // Alle Inputs wieder aktivieren
            const allInputs = document.querySelectorAll('input');
            allInputs.forEach(input => input.disabled = false);
            // Nächste Aufgabe laden
            loadNextTask();
        }
    });


});