"use strict";
// trainer.ts - VOLLSTÄNDIGE TypeScript VERSION
// Steuerungslogik für den Themen-Trainer mit vollständiger Type-Safety
// Diese Datei orchestriert den Anwendungszustand (State) und die UI-Interaktionen
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import des kombinierten Vokabulars
var vokabular_js_1 = require("./vokabular.js");
// Import der Helfer- und UI-Funktionen
var helfer_js_1 = require("./shared/utils/helfer.js");
var uiModes = require("./shared/utils/ui-modes.js");
var dom_js_1 = require("./dom.js");
var ui = require("./ui/index.js");
// Import der Auth- und Sync-Funktionen
var index_js_1 = require("./shared/auth/index.js");
var navigation_events_js_1 = require("./shared/events/navigation-events.js");
// Globale AuthUI Referenz
var globalAuthUI = null;
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    // Hilfsfunktion: Alle Vokabeln aus der verschachtelten Struktur extrahieren
    function getAllWords(vocabularyObject) {
        var allWords = [];
        for (var _i = 0, _a = Object.values(vocabularyObject); _i < _a.length; _i++) {
            var mainTopic = _a[_i];
            for (var _b = 0, _c = Object.values(mainTopic); _b < _c.length; _b++) {
                var subTopic = _c[_b];
                allWords.push.apply(allWords, subTopic);
            }
        }
        return allWords;
    }
    // --- DATENPERSISTENZ (LocalStorage) ---
    function saveLastTestScores() {
        try {
            localStorage.setItem('goetheA1LastTestScores', JSON.stringify(state.lastTestScores));
        }
        catch (error) {
            console.error("Fehler beim Speichern der Testergebnisse:", error);
        }
    }
    function loadLastTestScores() {
        var storedScores = localStorage.getItem('goetheA1LastTestScores');
        if (storedScores) {
            try {
                state.lastTestScores = JSON.parse(storedScores);
            }
            catch (error) {
                console.error("Fehler beim Laden der letzten Testergebnisse:", error);
            }
        }
    }
    function saveGlobalProgress() {
        try {
            // Konvertiere Sets zu Arrays für die Speicherung
            var progressToSave = {};
            for (var key in state.globalProgress) {
                progressToSave[key] = {};
                for (var mode in state.globalProgress[key]) {
                    var modeProgress = state.globalProgress[key][mode];
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
        }
        catch (error) {
            console.error("Fehler beim Speichern des Fortschritts:", error);
        }
    }
    function loadGlobalProgress() {
        var storedProgress = localStorage.getItem('goetheA1Progress');
        if (storedProgress) {
            try {
                var parsed = JSON.parse(storedProgress);
                // Konvertiere Arrays zurück zu Sets
                for (var key in parsed) {
                    state.globalProgress[key] = {};
                    for (var mode in parsed[key]) {
                        state.globalProgress[key][mode] = new Set(parsed[key][mode]);
                    }
                }
                console.log('trainer.ts: Fortschritt geladen');
            }
            catch (error) {
                console.error("Fehler beim Laden des Fortschritts:", error);
            }
        }
    }
    // --- TASK LOADING ---
    function loadNextTask() {
        var _a;
        console.log('[loadNextTask] Aufgerufen');
        ui.hideAllUIs(dom_js_1.dom);
        dom_js_1.dom.feedbackContainerEl.innerHTML = '';
        dom_js_1.dom.continueButton.classList.add('hidden');
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
            state.shuffledVocabForMode = (0, helfer_js_1.shuffleArray)(state.shuffledVocabForMode);
            state.currentWordIndexInShuffled = 0;
        }
        // Repeat-Session Check
        if (state.isRepeatSessionActive && state.currentWordIndexInShuffled >= state.shuffledVocabForMode.length) {
            ui.showMessage(dom_js_1.dom, 'Wiederholungsrunde abgeschlossen!', 'success');
            state.isRepeatSessionActive = false;
            document.querySelectorAll('.repeat-active').forEach(function (btn) { return btn.classList.remove('repeat-active'); });
            return;
        }
        // Aktuelle Vokabel laden
        state.currentWordData = state.shuffledVocabForMode[state.currentWordIndexInShuffled];
        console.log('[loadNextTask] Aktuelle Vokabel:', (_a = state.currentWordData) === null || _a === void 0 ? void 0 : _a.german);
        // Modus-spezifisches Setup
        var modeInfo = state.currentMode ? learningModes[state.currentMode] : null;
        if (modeInfo && typeof modeInfo.setupFunc === 'function') {
            modeInfo.setupFunc();
        }
        else {
            console.error("Keine Setup-Funktion f\u00FCr Modus \"".concat(state.currentMode, "\" gefunden"));
        }
    }
    function setMode(modeId, isRepeat) {
        var _a, _b;
        if (isRepeat === void 0) { isRepeat = false; }
        state.currentMode = modeId;
        state.isTestModeActive = false;
        state.isRepeatSessionActive = isRepeat;
        var wordsForSession = [];
        if (isRepeat) {
            var wordIdsToRepeat_1 = state.wordsToRepeatByMode[modeId] || new Set();
            if (wordIdsToRepeat_1.size === 0) {
                ui.showMessage(dom_js_1.dom, 'Keine Fehler zum Wiederholen in diesem Modus.', 'info');
                state.isRepeatSessionActive = false;
                return;
            }
            wordsForSession = alleVokabeln.filter(function (word) { return wordIdsToRepeat_1.has(word.id); });
        }
        else {
            wordsForSession = __spreadArray([], state.currentVocabularySet, true);
        }
        state.shuffledVocabForMode = (0, helfer_js_1.shuffleArray)(wordsForSession);
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;
        // Button-Styles aktualisieren
        document.querySelectorAll('#mode-button-grid .mode-button').forEach(function (btn) {
            btn.classList.remove('active', 'repeat-active');
        });
        (_a = document.getElementById("mode-".concat(modeId))) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        if (isRepeat) {
            (_b = document.getElementById("mode-repeat-".concat(modeId))) === null || _b === void 0 ? void 0 : _b.classList.add('repeat-active');
        }
        loadNextTask();
    }
    // --- TEST FUNKTIONEN ---
    function startTestUI(testTitle, modus) {
        var _a;
        authUI.hide();
        ui.hideAllUIs(dom_js_1.dom);
        dom_js_1.dom.trainerMainViewEl.classList.remove('hidden-view');
        dom_js_1.dom.navigationViewEl.classList.add('hidden-view');
        var modusName = ((_a = learningModes[modus]) === null || _a === void 0 ? void 0 : _a.name) || "Test";
        dom_js_1.dom.currentTrainingTitleEl.textContent = "".concat(testTitle, " - ").concat(modusName);
        dom_js_1.dom.practiceStatsViewEl.classList.add('hidden');
        dom_js_1.dom.testStatsViewEl.classList.remove('hidden');
        dom_js_1.dom.modeButtonGridEl.classList.add('hidden');
        ui.updateTestStats(dom_js_1.dom, state);
        ui.updateErrorCounts(dom_js_1.dom, state, learningModes);
        loadNextTask();
    }
    function handleTestCompletion() {
        var accuracy = state.attemptedInRound > 0
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
        var percentage = Math.round(accuracy * 100);
        ui.showMessage(dom_js_1.dom, "Test abgeschlossen! ".concat(state.correctInRound, " von ").concat(state.attemptedInRound, " richtig (").concat(percentage, "%)"), accuracy >= 0.8 ? 'success' : 'info');
        // Zurück-Navigation basierend auf Test-Typ
        setTimeout(function () {
            state.isTestModeActive = false;
            if (state.testType === 'global') {
                ui.displayMainTopics(dom_js_1.dom, state, vokabular_js_1.vokabular, learningModes);
            }
            else if (state.testType === 'mainTopic' && state.previousMainTopic) {
                state.currentMainTopic = state.previousMainTopic;
                ui.displaySubTopics(dom_js_1.dom, state, vokabular_js_1.vokabular, state.previousMainTopic, learningModes);
            }
            else {
                ui.displayMainTopics(dom_js_1.dom, state, vokabular_js_1.vokabular, learningModes);
            }
            dom_js_1.dom.trainerMainViewEl.classList.add('hidden-view');
            dom_js_1.dom.navigationViewEl.classList.remove('hidden-view');
        }, 3000);
    }
    // Hauptthema-Test Funktion
    function starteHauptthemaTest(modus) {
        console.log('[starteHauptthemaTest] Starte Test für Hauptthema:', state.currentMainTopic);
        if (!state.currentMainTopic) {
            ui.showMessage(dom_js_1.dom, 'Kein Hauptthema ausgewählt!', 'error');
            return;
        }
        var hauptthemaVokabeln = vokabular_js_1.vokabular[state.currentMainTopic];
        if (!hauptthemaVokabeln) {
            ui.showMessage(dom_js_1.dom, 'Keine Vokabeln für dieses Hauptthema gefunden!', 'error');
            return;
        }
        var aufgaben = [];
        var unterthemen = Object.keys(hauptthemaVokabeln);
        var aufgabenProUnterthema = Math.max(1, Math.min(3, Math.floor(30 / unterthemen.length)));
        // Sammle Aufgaben aus jedem Unterthema
        for (var _i = 0, unterthemen_1 = unterthemen; _i < unterthemen_1.length; _i++) {
            var unterthema = unterthemen_1[_i];
            var unterthemaVokabeln = hauptthemaVokabeln[unterthema];
            var verfuegbar = unterthemaVokabeln.length;
            var anzahl = Math.min(aufgabenProUnterthema, verfuegbar);
            var ausgewaehlt = (0, helfer_js_1.shuffleArray)(__spreadArray([], unterthemaVokabeln, true)).slice(0, anzahl);
            aufgaben.push.apply(aufgaben, ausgewaehlt);
        }
        // Finales Shuffle
        var finalAufgaben = (0, helfer_js_1.shuffleArray)(aufgaben).slice(0, 30);
        // State für Test vorbereiten
        state.isTestModeActive = true;
        state.currentMode = modus;
        state.currentSubTopic = "".concat(state.currentMainTopic, " - Gesamttest");
        state.currentVocabularySet = finalAufgaben;
        state.shuffledVocabForMode = finalAufgaben;
        state.masteredWordsByMode = {};
        state.wordsToRepeatByMode = {};
        state.currentWordIndexInShuffled = -1;
        state.correctInRound = 0;
        state.attemptedInRound = 0;
        state.testType = 'mainTopic';
        state.testKey = "mainTopic-".concat(state.currentMainTopic, "-").concat(modus);
        state.previousMainTopic = state.currentMainTopic;
        startTestUI("Test: ".concat(state.currentMainTopic), modus);
    }
    // Globaler Test Funktion
    function starteGesamtTest(modus) {
        console.log('[starteGesamtTest] Starte globalen Test für Modus:', modus);
        var aufgaben = (0, helfer_js_1.shuffleArray)(__spreadArray([], alleVokabeln, true)).slice(0, 36);
        if (aufgaben.length === 0) {
            ui.showMessage(dom_js_1.dom, 'Keine Vokabeln für den Test gefunden!', 'error');
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
        state.testKey = "global-".concat(modus);
        startTestUI("Globaler Gesamttest", modus);
    }
    // --- NAVIGATIONSLOGIK ---
    function startTraining(subTopicName) {
        state.currentSubTopic = subTopicName;
        if (!state.currentMainTopic) {
            console.error('Kein Hauptthema ausgewählt');
            return;
        }
        var vocabularySet = vokabular_js_1.vokabular[state.currentMainTopic][subTopicName];
        if (!vocabularySet || vocabularySet.length === 0) {
            ui.showMessage(dom_js_1.dom, "Keine Vokabeln f\u00FCr \"".concat(subTopicName, "\" gefunden."), 'info');
            return;
        }
        authUI.hide();
        ui.hideAllUIs(dom_js_1.dom);
        state.isTestModeActive = false;
        state.currentVocabularySet = vocabularySet;
        var progressKey = "".concat(state.currentMainTopic, "|").concat(state.currentSubTopic);
        var progressForGroup = state.globalProgress[progressKey] || {};
        Object.keys(learningModes).forEach(function (mode) {
            var modeProgress = progressForGroup[mode];
            if (modeProgress instanceof Set) {
                state.masteredWordsByMode[mode] = new Set(modeProgress);
            }
            else if (Array.isArray(modeProgress)) {
                state.masteredWordsByMode[mode] = new Set(modeProgress);
            }
            else {
                state.masteredWordsByMode[mode] = new Set();
            }
            state.wordsToRepeatByMode[mode] = new Set();
        });
        dom_js_1.dom.practiceStatsViewEl.classList.remove('hidden');
        dom_js_1.dom.testStatsViewEl.classList.add('hidden');
        dom_js_1.dom.modeButtonGridEl.classList.remove('hidden');
        dom_js_1.dom.currentTrainingTitleEl.textContent = subTopicName;
        dom_js_1.dom.navigationViewEl.classList.add('hidden-view');
        dom_js_1.dom.trainerMainViewEl.classList.remove('hidden-view');
        ui.updatePracticeStats(dom_js_1.dom, state, learningModes);
        ui.updateErrorCounts(dom_js_1.dom, state, learningModes);
        setTimeout(function () { return setMode('mc-de-en'); }, 10);
    }
    function handleNavigation(event) {
        var target = event.target;
        var mainTopicButton = target.closest('[data-main-topic]');
        var subTopicButton = target.closest('[data-sub-topic]');
        var testButton = target.closest('#start-test-mode-btn');
        if (mainTopicButton) {
            var mainTopic = mainTopicButton.dataset.mainTopic;
            if (mainTopic) {
                state.currentMainTopic = mainTopic;
                ui.displaySubTopics(dom_js_1.dom, state, vokabular_js_1.vokabular, mainTopic, learningModes);
            }
        }
        else if (subTopicButton) {
            var subTopic = subTopicButton.dataset.subTopic;
            if (subTopic) {
                startTraining(subTopic);
            }
        }
        else if (testButton) {
            ui.updateTestModeProgressBars(dom_js_1.dom, state);
            dom_js_1.dom.testSelectionModalEl.classList.remove('hidden-view');
        }
    }
    // --- INITIALISIERUNG ---
    function init() {
        loadGlobalProgress();
        loadLastTestScores();
        // Callbacks für die UI-Schicht
        var callbacks = {
            handleNavigation: handleNavigation,
            starteGesamtTest: starteGesamtTest,
            starteHauptthemaTest: starteHauptthemaTest,
            getVokabular: function () { return vokabular_js_1.vokabular; }
        };
        ui.initEventListeners(dom_js_1.dom, state, callbacks, learningModes);
        // Event-Listener für Lernmodi
        Object.keys(learningModes).forEach(function (modeId) {
            var button = document.getElementById("mode-".concat(modeId));
            var repeatButton = document.getElementById("mode-repeat-".concat(modeId));
            if (button) {
                button.addEventListener('click', function () { return setMode(modeId, false); });
            }
            if (repeatButton) {
                repeatButton.addEventListener('click', function () { return setMode(modeId, true); });
            }
        });
        dom_js_1.dom.continueButton.addEventListener('click', loadNextTask);
        // Startansicht anzeigen
        authUI.show();
        ui.displayMainTopics(dom_js_1.dom, state, vokabular_js_1.vokabular, learningModes);
    }
    var _a, authService, authUI, syncService, state, alleVokabeln, processAnswer, learningModes;
    return __generator(this, function (_b) {
        _a = (0, index_js_1.initializeAuth)('themen', {
            buttonContainerId: 'auth-button-container',
            hideOnNavigation: true,
            buttonClasses: {
                loggedIn: 'w-full rounded-lg py-3 font-semibold text-white cursor-default',
                loggedOut: 'w-full rounded-lg py-3 font-semibold transition-colors duration-200'
            }
        }), authService = _a.authService, authUI = _a.authUI, syncService = _a.syncService;
        // Initial auf Root-Seite
        navigation_events_js_1.NavigationEvents.dispatchRoot();
        // Speichere authUI Referenz
        globalAuthUI = authUI;
        state = {
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
        alleVokabeln = getAllWords(vokabular_js_1.vokabular);
        processAnswer = function (isCorrect, correctAnswer) {
            var _a, _b, _c;
            console.log("[processAnswer] Aufgerufen f\u00FCr Modus: ".concat(state.currentMode));
            console.log("[processAnswer] isCorrect: ".concat(isCorrect, ", correctAnswer: ").concat(correctAnswer));
            // Buttons deaktivieren
            if (dom_js_1.dom.checkSpellingButton)
                dom_js_1.dom.checkSpellingButton.disabled = true;
            if (dom_js_1.dom.checkClozeButton)
                dom_js_1.dom.checkClozeButton.disabled = true;
            if (dom_js_1.dom.checkSentenceButton)
                dom_js_1.dom.checkSentenceButton.disabled = true;
            state.attemptedInRound++;
            var wordId = (_a = state.currentWordData) === null || _a === void 0 ? void 0 : _a.id;
            if (isCorrect) {
                console.log('[processAnswer] Antwort ist KORREKT');
                state.correctInRound++;
                dom_js_1.dom.feedbackContainerEl.innerHTML = "<span class=\"feedback-correct\">Richtig!</span>";
                if (wordId && !state.isTestModeActive && state.currentMainTopic && state.currentSubTopic && state.currentMode) {
                    var progressKey = "".concat(state.currentMainTopic, "|").concat(state.currentSubTopic);
                    if (!state.globalProgress[progressKey]) {
                        state.globalProgress[progressKey] = {};
                    }
                    if (!state.globalProgress[progressKey][state.currentMode]) {
                        state.globalProgress[progressKey][state.currentMode] = new Set();
                    }
                    var modeProgress = state.globalProgress[progressKey][state.currentMode];
                    if (modeProgress instanceof Set) {
                        modeProgress.add(wordId);
                    }
                    (_b = state.masteredWordsByMode[state.currentMode]) === null || _b === void 0 ? void 0 : _b.add(wordId);
                    (_c = state.wordsToRepeatByMode[state.currentMode]) === null || _c === void 0 ? void 0 : _c.delete(wordId);
                    console.log('trainer.ts: Wort als gemeistert hinzugefügt');
                    saveGlobalProgress();
                }
                setTimeout(function () { loadNextTask(); }, 1200);
            }
            else {
                console.log('[processAnswer] Antwort ist FALSCH');
                dom_js_1.dom.feedbackContainerEl.innerHTML = "<span class=\"feedback-incorrect\">".concat(correctAnswer, "</span>");
                if (wordId && state.currentMode) {
                    if (!state.wordsToRepeatByMode[state.currentMode]) {
                        state.wordsToRepeatByMode[state.currentMode] = new Set();
                    }
                    state.wordsToRepeatByMode[state.currentMode].add(wordId);
                    console.log('trainer.ts: Wort zur Wiederholung hinzugefügt');
                }
                dom_js_1.dom.continueButton.classList.remove('hidden');
            }
            // Statistiken aktualisieren
            if (state.isTestModeActive) {
                ui.updateTestStats(dom_js_1.dom, state);
            }
            else {
                ui.updatePracticeStats(dom_js_1.dom, state, learningModes);
            }
            ui.updateErrorCounts(dom_js_1.dom, state, learningModes);
        };
        learningModes = {
            'mc-de-en': {
                name: "Bedeutung",
                setupFunc: function () { return uiModes.setupMcDeEnMode(dom_js_1.dom, state, alleVokabeln, processAnswer); }
            },
            'type-de-adj': {
                name: "Schreibweise",
                setupFunc: function () { return uiModes.setupSpellingMode(dom_js_1.dom, state, processAnswer); }
            },
            'cloze-adj-de': {
                name: "Lückentext",
                setupFunc: function () { return uiModes.setupClozeAdjDeMode(dom_js_1.dom, state, processAnswer); }
            },
            'sentence-translation-en-de': {
                name: "Satzübersetzung",
                setupFunc: function () { return uiModes.setupSentenceTranslationEnDeMode(dom_js_1.dom, state, processAnswer); }
            },
        };
        console.log('trainer.ts: learningModes definiert:', Object.keys(learningModes).length, 'Modi');
        // Firebase Sync-Listener für Updates von anderen Geräten
        syncService.onSyncUpdate(function (type, data) {
            if (type === 'remoteUpdate' && data) {
                console.log('📥 Fortschritt von anderem Gerät erhalten');
                // Daten von Firebase (Arrays) wieder in Sets umwandeln
                var convertedProgress = {};
                for (var progressKey in data) {
                    convertedProgress[progressKey] = {};
                    for (var mode in data[progressKey]) {
                        if (Array.isArray(data[progressKey][mode])) {
                            convertedProgress[progressKey][mode] = new Set(data[progressKey][mode]);
                        }
                    }
                }
                state.globalProgress = convertedProgress;
                ui.displayMainTopics(dom_js_1.dom, state, vokabular_js_1.vokabular, learningModes);
                ui.showMessage(dom_js_1.dom, 'Fortschritt synchronisiert!', 'success');
            }
        });
        // Starte die Anwendung
        init();
        return [2 /*return*/];
    });
}); });
