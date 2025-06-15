// trainer.js - Vollständige Version mit Fix für die Audio-Buttons

import * as dom from './dom.js';
import state from './state.js';
import { speak, parseNounString, vergleicheAntwort, konvertiereUmlaute, shuffleArray } from './helfer.js';

document.addEventListener('DOMContentLoaded', () => {

    if (typeof goetheA1Wortschatz === 'undefined' || typeof vergleicheAntwort === 'undefined' || typeof speak === 'undefined') {
        console.error("KRITISCHER FEHLER: Wichtige Skript-Dateien (vokabular.js, helfer.js) fehlen oder sind fehlerhaft.");
        document.body.innerHTML = '<div style="padding: 2rem; text-align: center; font-family: sans-serif; background-color: #ffcccc; border: 2px solid red;"><h1>Fehler beim Laden</h1><p>Wichtige App-Daten konnten nicht geladen werden. Bitte überprüfe die Browser-Konsole (F12) für Details.</p></div>';
        return;
    }

    // =================================================================================
    // HILFSFUNKTIONEN (spezifisch für diesen Trainer)
    // =================================================================================
    function showMessage(message, type = 'error', duration = 3000) { dom.messageBoxEl.textContent = message; dom.messageBoxEl.className = `fixed bottom-5 right-5 text-white p-3 rounded-lg shadow-xl ${type === 'success' ? 'bg-green-500' : type === 'info' ? 'bg-blue-500' : 'bg-red-500'}`; dom.messageBoxEl.classList.remove('hidden'); setTimeout(() => dom.messageBoxEl.classList.add('hidden'), duration); }
    String.prototype.split_sentence_for_translation = function () { return this.match(/\S+/g) || []; };

    function aktiviereUmlautKonverter(inputElement) {
        if (!inputElement) return;
        inputElement.addEventListener('input', () => {
            const cursorPos = inputElement.selectionStart;
            const originalValue = inputElement.value;
            const convertedValue = konvertiereUmlaute(originalValue);
            if (originalValue !== convertedValue) {
                inputElement.value = convertedValue;
                inputElement.setSelectionRange(cursorPos, cursorPos);
            }
        });
    }

    // =================================================================================
    // GLOBALER ZUSTAND (State Management)
    // =================================================================================
    const alleVokabeln = Object.values(goetheA1Wortschatz).flat();

    const learningModes = {
        'mc-de-en': { name: "Bedeutung", setupFunc: setupMcDeEnMode },
        'type-de-adj': { name: "Schreibweise", setupFunc: setupSpellingMode },
        'cloze-adj-de': { name: "Lückentext", setupFunc: setupClozeAdjDeMode },
        'sentence-translation-en-de': { name: "Satzübersetzung", setupFunc: setupSentenceTranslationEnDeMode },
    };

    // =================================================================================
    // SETUP-FUNKTIONEN FÜR JEDEN MODUS
    // =================================================================================
    function setupMcDeEnMode() {
        dom.mcUiEl.style.display = 'block';
        const germanWordForDisplay = state.currentWordData.german || "";
        let displayGermanWord = germanWordForDisplay;

        if (state.currentWordData.nomen_notation && typeof parseNounString === 'function') {
            const parsed = parseNounString(state.currentWordData.nomen_notation); 
            if (parsed) {
                displayGermanWord = parsed.isPluralOnly ? `die ${parsed.singular} (Pl.)` : `${{ 'r': 'der', 'e': 'die', 's': 'das' }[parsed.genus] || ''} ${parsed.singular}, ${parsed.pluralInfo}`;
            }
        }
        dom.questionDisplayEl.textContent = displayGermanWord;
        dom.exampleSentenceDisplayEl.textContent = state.currentWordData.example_de;
        dom.audioWordButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
        dom.audioWordButtonEl.onclick = () => speak(germanWordForDisplay);
        dom.audioSentenceButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
        dom.audioSentenceButtonEl.onclick = () => speak(state.currentWordData.example_de, 'de-DE');

        // *** KORREKTUR: Buttons wieder sichtbar machen ***
        dom.audioWordButtonEl.style.display = 'inline-flex';
        dom.audioSentenceButtonEl.style.display = 'inline-flex';

        dom.wordLineContainerEl.style.display = 'flex';
        dom.sentenceLineContainerEl.style.display = 'flex';

        const correctAnswerEN = (state.currentWordData.english || "").split(',')[0].trim();
        const allPossibleAnswers = alleVokabeln.map(v => (v.english || "").split(',')[0].trim());
        const distractors = shuffleArray(allPossibleAnswers.filter(e => e && e !== correctAnswerEN)).slice(0, 3);
        const options = shuffleArray([correctAnswerEN, ...distractors]);
        
        dom.mcAnswersContainerEl.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'answer-button w-full border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg';
            button.textContent = option;
            button.onclick = () => processAnswer(option === correctAnswerEN, correctAnswerEN);
            dom.mcAnswersContainerEl.appendChild(button);
        });
    }

    function setupSpellingMode() {
        dom.checkSpellingButton.disabled = false;
        dom.spellingModeUiEl.style.display = 'block';
        dom.questionDisplayEl.textContent = (state.currentWordData.english || "").split(',')[0].trim();
        dom.exampleSentenceDisplayEl.textContent = state.currentWordData.example_en || "";
        dom.wordLineContainerEl.style.display = 'flex';
        dom.sentenceLineContainerEl.style.display = 'flex';

        const resetInputStyles = (...inputs) => {
            inputs.forEach(input => {
                if(input) input.classList.remove('feedback-correct-border', 'feedback-incorrect-border');
            });
        };
        resetInputStyles(dom.spellingInputSingleEl, dom.spellingInputNoun1El, dom.spellingInputNoun2El);

        const isNounWithPlural = state.currentWordData && typeof state.currentWordData.plural !== 'undefined';

        if (isNounWithPlural) {
            dom.nounInputContainerEl.classList.remove('hidden');
            dom.singleInputContainerEl.classList.add('hidden');

            const inputs = [dom.spellingInputNoun1El, dom.spellingInputNoun2El];
            inputs.forEach(input => {
                input.value = '';
                input.disabled = false;
                aktiviereUmlautKonverter(input);
            });

            const handleEnter = (event) => {
                if (event.key === 'Enter' && !dom.checkSpellingButton.disabled) { 
                    event.preventDefault(); 
                    dom.checkSpellingButton.click();
                }
            };
            inputs.forEach(input => input.addEventListener('keydown', handleEnter));

            dom.checkSpellingButton.onclick = () => {
                const correctAnswerSingular = `${state.currentWordData.artikel} ${state.currentWordData.german}`;
                const correctAnswerPluralWord = state.currentWordData.plural;

                const userInputSingular = dom.spellingInputNoun1El.value;
                const userInputPlural = dom.spellingInputNoun2El.value;

                const isSingularCorrect = vergleicheAntwort(userInputSingular, correctAnswerSingular);
                const isPluralCorrect = vergleicheAntwort(userInputPlural, correctAnswerPluralWord);

                dom.spellingInputNoun1El.classList.add(isSingularCorrect ? 'feedback-correct-border' : 'feedback-incorrect-border');
                dom.spellingInputNoun2El.classList.add(isPluralCorrect ? 'feedback-correct-border' : 'feedback-incorrect-border');
                
                const isOverallCorrect = isSingularCorrect && isPluralCorrect;
                const combinedCorrectAnswer = `${correctAnswerSingular} / ${correctAnswerPluralWord}`;
                
                processAnswer(isOverallCorrect, combinedCorrectAnswer);
                inputs.forEach(input => input.disabled = true);
            };

            setTimeout(() => dom.spellingInputNoun1El.focus(), 100);

        } else {
            dom.singleInputContainerEl.classList.remove('hidden');
            dom.nounInputContainerEl.classList.add('hidden');

            const input = dom.spellingInputSingleEl;
            input.value = '';
            input.disabled = false;
            aktiviereUmlautKonverter(input);

            dom.checkSpellingButton.onclick = () => {
                const correctAnswer = state.currentWordData.german;
                const isCorrect = vergleicheAntwort(input.value, correctAnswer);
                input.classList.add(isCorrect ? 'feedback-correct-border' : 'feedback-incorrect-border');
                processAnswer(isCorrect, correctAnswer);
                input.disabled = true;
            };

            input.onkeydown = (event) => {
                if (event.key === 'Enter' && !dom.checkSpellingButton.disabled) { 
                    event.preventDefault(); 
                    dom.checkSpellingButton.click(); 
                }
            };
            setTimeout(() => input.focus(), 100);
        }
    }

    function setupClozeAdjDeMode() {
        dom.clozeUiEl.style.display = 'block';
        dom.wordLineContainerEl.style.display = 'none';
        dom.sentenceLineContainerEl.style.display = 'none';
        const { cloze_parts, cloze_answers } = state.currentWordData;
        const correctAnswer = cloze_answers?.[0];
        dom.clozeSentenceContainerEl.innerHTML = '';
        if (cloze_parts && cloze_parts.length === 2 && correctAnswer) {
            dom.clozeSentenceContainerEl.append(document.createTextNode(cloze_parts[0]));
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'cloze-input inline-block w-48 text-center border-b-2 border-gray-400 focus:border-blue-500 outline-none';
            input.autocapitalize = 'off'; input.autocorrect = 'off'; input.autocomplete = 'off'; input.spellcheck = 'false';
            dom.clozeSentenceContainerEl.append(input);
            dom.clozeSentenceContainerEl.append(document.createTextNode(cloze_parts[1]));
            aktiviereUmlautKonverter(input);
            dom.checkClozeButton.onclick = () => {
                processAnswer(vergleicheAntwort(input.value, correctAnswer), correctAnswer);
                input.disabled = true;
            };
            input.onkeydown = (event) => {
                if (event.key === 'Enter' && !dom.checkClozeButton.disabled) { event.preventDefault(); dom.checkClozeButton.click(); }
            };
            setTimeout(() => input.focus(), 100);
        } else {
            dom.clozeSentenceContainerEl.textContent = 'Für dieses Wort ist kein Lückentext verfügbar.';
            dom.checkClozeButton.onclick = null;
        }
    }

    function setupSentenceTranslationEnDeMode() {
        dom.sentenceUiEl.style.display = 'block';
        dom.questionDisplayEl.textContent = state.currentWordData.example_en;
        dom.wordLineContainerEl.style.display = 'flex';
        dom.sentenceLineContainerEl.style.display = 'none';
        const germanSentence = state.currentWordData.example_de;
        const words = germanSentence.split_sentence_for_translation();
        dom.sentenceWordInputContainerEl.innerHTML = '';
        const handleEnter = (event) => {
            if (event.key === 'Enter' && !dom.checkSentenceButton.disabled) { event.preventDefault(); dom.checkSentenceButton.click(); }
        };
        words.forEach((word) => {
            const input = document.createElement('input');
            input.type = 'text'; input.className = 'word-input-box';
            input.style.width = `${Math.max(word.length, 3) + 2}ch`;
            input.addEventListener('keydown', handleEnter);
            aktiviereUmlautKonverter(input);
            dom.sentenceWordInputContainerEl.appendChild(input);
        });
        dom.checkSentenceButton.onclick = () => {
            const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input');
            const userInputSentence = Array.from(inputs).map(input => input.value).join(' ');
            processAnswer(vergleicheAntwort(userInputSentence, germanSentence, {ignorePunctuation: true}), germanSentence);
            inputs.forEach(input => input.disabled = true);
        };
        if (dom.sentenceWordInputContainerEl.firstChild) {
            setTimeout(() => dom.sentenceWordInputContainerEl.firstChild.focus(), 100);
        }
    }

    // =================================================================================
    // KERNLOGIK (Trainer-Steuerung)
    // =================================================================================
    function hideAllUIs() {
        [dom.mcUiEl, dom.spellingModeUiEl, dom.clozeUiEl, dom.sentenceUiEl].forEach(ui => {
            if (ui) ui.style.display = 'none';
        });
        dom.continueButton.classList.add('hidden');
        dom.feedbackContainerEl.innerHTML = '';
        dom.questionDisplayEl.textContent = '';
        dom.exampleSentenceDisplayEl.textContent = '';
        [dom.audioWordButtonEl, dom.audioSentenceButtonEl].forEach(btn => { 
            if(btn) {
                btn.onclick = null;
                btn.style.display = 'none';
            }
        });
    }

    function loadNextTask() {
        hideAllUIs();
        if ((!state.currentVocabularySet || state.currentVocabularySet.length === 0) && state.shuffledVocabForMode.length === 0) return;

        state.currentWordIndexInShuffled++;

        if (state.currentWordIndexInShuffled >= state.shuffledVocabForMode.length) {
            // HIER IST DIE KORREKTUR FÜR DIE ENDLOSSCHLEIFE
            if (state.isRepeatSessionActive) {
                showMessage('Alle Fehler wurden wiederholt!', 'success');
                state.isRepeatSessionActive = false;
                document.querySelector('.mode-button.repeat-active')?.classList.remove('repeat-active');
                // Nach der Wiederholung zur vollen Liste der Wortgruppe zurückkehren
                state.shuffledVocabForMode = shuffleArray([...state.currentVocabularySet]);
            } else {
                // Normaler Durchlauf am Ende -> neu mischen
                state.shuffledVocabForMode = shuffleArray([...state.shuffledVocabForMode]);
            }
            state.currentWordIndexInShuffled = 0;
        }

        state.currentWordData = state.shuffledVocabForMode[state.currentWordIndexInShuffled];
        if (!state.currentWordData) {
            console.error("Kein Wort gefunden, lade nächstes.");
            // Sicherheits-Check, um eine Endlosschleife bei leerem Set zu verhindern
            if(state.shuffledVocabForMode.length > 0) loadNextTask();
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
        dom.checkSpellingButton.disabled = true;
        state.attemptedInRound++;
        const wordId = `${state.currentWordData.german}-${state.currentWordData.english}`;

        if (isCorrect) {
            state.correctInRound++;
            dom.feedbackContainerEl.innerHTML = `<span class="feedback-correct">Richtig!</span>`;
            if (wordId) {
                if (!state.globalProgress[state.currentWortgruppeName]) state.globalProgress[state.currentWortgruppeName] = {};
                if (!state.globalProgress[state.currentWortgruppeName][state.currentMode]) state.globalProgress[state.currentWortgruppeName][state.currentMode] = new Set();
                state.globalProgress[state.currentWortgruppeName][state.currentMode].add(wordId);
                state.masteredWordsByMode[state.currentMode]?.add(wordId);
                state.wordsToRepeatByMode[state.currentMode]?.delete(wordId);
                saveGlobalProgress();
            }
            setTimeout(() => {
                loadNextTask();
            }, 1200);
        } else {
            dom.feedbackContainerEl.innerHTML = `<span class="feedback-incorrect">${correctAnswer}</span>`;
            if (wordId) {
                if (!state.wordsToRepeatByMode[state.currentMode]) state.wordsToRepeatByMode[state.currentMode] = new Set();
                state.wordsToRepeatByMode[state.currentMode].add(wordId);
            }
            dom.continueButton.classList.remove('hidden');
        }
        const accuracy = state.attemptedInRound > 0 ? (state.correctInRound / state.attemptedInRound) * 100 : 0;
        dom.correctInRoundEl.textContent = state.correctInRound;
        dom.attemptedInRoundEl.textContent = state.attemptedInRound;
        dom.accuracyBarEl.style.width = `${accuracy}%`;
        dom.accuracyBarEl.textContent = `${Math.round(accuracy)}%`;
        updateCategoryStats();
        updateErrorCounts();
    }

    function setMode(modeId, isRepeat = false) {
        state.currentMode = modeId;
        state.isRepeatSessionActive = isRepeat;
        
        let wordsForSession = [];
        if (isRepeat) {
            const wordIdsToRepeat = new Set(state.wordsToRepeatByMode[modeId] || []);
            if (wordIdsToRepeat.size === 0) {
                showMessage('Keine Fehler zum Wiederholen in diesem Modus.', 'info');
                state.isRepeatSessionActive = false;
                return;
            }
            wordsForSession = alleVokabeln.filter(word => 
                wordIdsToRepeat.has(`${word.german}-${word.english}`)
            );
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

    // =================================================================================
    // UI-UPDATE & PERSISTENZ
    // =================================================================================
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
        dom.categoryStatsContainerEl.innerHTML = '';
        const totalItemsInWortgruppe = state.currentVocabularySet.length;
        if (totalItemsInWortgruppe === 0) return;
        Object.keys(learningModes).forEach(modeId => {
            const modeInfo = learningModes[modeId];
            const masteredCount = state.masteredWordsByMode[modeId]?.size || 0;
            const percentage = totalItemsInWortgruppe > 0 ? (masteredCount / totalItemsInWortgruppe) * 100 : 0;
            const item = document.createElement('div');
            item.className = 'category-stat-item';
            item.innerHTML = `<span class="category-stat-text">${modeInfo.name}: ${masteredCount} / ${totalItemsInWortgruppe}</span><div class="category-progress-bar-bg"><div class="category-progress-bar-fg" style="width: ${percentage}%;"></div></div>`;
            dom.categoryStatsContainerEl.appendChild(item);
        });
    }
    
    function populateWortgruppenButtons() {
        dom.wortgruppenButtonsEl.innerHTML = '';
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
            const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
            let barColor;
            if (index < 6) barColor = '#4a5568';
            else if (index < 12) barColor = '#c53030';
            else barColor = '#d69e2e';
            button.innerHTML = `<span class="button-text-label">${name}</span><div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${percentage}%; background-color: ${barColor};"></div></div>`;
            dom.wortgruppenButtonsEl.appendChild(button);
        });
    }

    function showWortgruppenSelector() {
        populateWortgruppenButtons();
        dom.wortgruppenSelectorContainerEl.classList.remove('hidden-view');
        dom.trainerMainViewEl.classList.add('hidden-view');
    }

    function showTrainerForWortgruppe(wortgruppeName) {
        hideAllUIs();

        state.currentWortgruppeName = wortgruppeName;
        state.currentVocabularySet = goetheA1Wortschatz[wortgruppeName] || [];
        
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

        dom.currentWortgruppeTitleEl.textContent = wortgruppeName;
        if(dom.landAdjColumnEl) dom.landAdjColumnEl.style.display = 'none';
        
        dom.wortgruppenSelectorContainerEl.classList.add('hidden-view');
        dom.trainerMainViewEl.classList.remove('hidden-view');
        
        updateCategoryStats();
        updateErrorCounts();
        
        setTimeout(() => setMode('mc-de-en'), 10);
    }

    // =================================================================================
    // INITIALISIERUNG
    // =================================================================================
    function init() {
        dom.backToWortgruppenButton.addEventListener('click', showWortgruppenSelector);
        Object.keys(learningModes).forEach(modeId => {
            const button = document.getElementById(`mode-${modeId}`);
            const repeatButton = document.getElementById(`mode-repeat-${modeId}`);
            if (button) button.addEventListener('click', () => setMode(modeId, false));
            if (repeatButton) repeatButton.addEventListener('click', () => setMode(modeId, true));
        });
        dom.continueButton.addEventListener('click', () => {
            loadNextTask();
        });
        loadGlobalProgress();
        showWortgruppenSelector();
    }

    init(); // App starten
});