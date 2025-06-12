// ===================================================================================
//  MODUS-KONFIGURATION
// ===================================================================================
const modeConfigurations = {
    'mc-de-en': {
        setup: (app) => {
            const wordData = app.currentWordData;
            const mainGermanWord = wordData.german || wordData.country;

            app.dom.mcUiEl.style.display = 'block';
            app.dom.wordLineContainerEl.style.display = 'flex';
            app.dom.sentenceLineContainerEl.style.display = 'flex';
            app.dom.audioWordButtonEl.style.display = 'block';
            app.dom.audioSentenceButtonEl.style.display = 'block';

            let displayGermanWord = mainGermanWord;
            if (wordData.nomen_notation && typeof parseNounString === 'function') {
                const parsed = parseNounString(wordData.nomen_notation);
                if (parsed && !parsed.isPluralOnly) {
                    const artikelMap = { 'r': 'der', 'e': 'die', 's': 'das' };
                    displayGermanWord = `${artikelMap[parsed.genus] || ''} ${parsed.singular}, ${parsed.pluralInfo}`;
                } else if (parsed && parsed.isPluralOnly) {
                    displayGermanWord = `die ${parsed.singular} (Pl.)`;
                }
            }
            app.dom.questionDisplayEl.textContent = displayGermanWord;
            app.dom.exampleSentenceDisplayEl.textContent = wordData.example_de;

            app.dom.audioWordButtonEl.innerHTML = app.SVG_SPEAKER_ICON;
            app.dom.audioWordButtonEl.onclick = () => speak(mainGermanWord);
            app.dom.audioSentenceButtonEl.innerHTML = app.SVG_SPEAKER_ICON;
            app.dom.audioSentenceButtonEl.onclick = () => speak(wordData.example_de, 'de-DE');

            const correctAnswerEN = (wordData.english || wordData.english_country || "??").split(',')[0].trim();
            const potentialDistractors = shuffleArray(app.alleVokabeln.map(v => (v.english || v.english_country || "??").split(',')[0].trim()).filter(e => e !== correctAnswerEN && e !== "??")).slice(0, 3);
            const options = shuffleArray([correctAnswerEN, ...potentialDistractors]);
            
            app.dom.mcAnswersContainerEl.innerHTML = '';
            options.forEach(option => {
                const button = document.createElement('button');
                button.className = 'answer-button w-full border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg';
                button.textContent = option;
                button.onclick = () => app.processAnswer(option === correctAnswerEN, correctAnswerEN);
                app.dom.mcAnswersContainerEl.appendChild(button);
            });
        }
    },
    'type-de-adj': {
        setup: (app) => {
            const wordData = app.currentWordData;
            let correctAnswer;
            
            if (wordData.nomen_notation) {
                correctAnswer = getFullNounAnswer(wordData.nomen_notation);
            } else {
                correctAnswer = wordData.german || wordData.country;
            }

            app.dom.typeUiEl.style.display = 'block';
            app.dom.wordLineContainerEl.style.display = 'flex';
            app.dom.sentenceLineContainerEl.style.display = 'flex';
            app.dom.audioWordButtonEl.style.display = 'none';
            app.dom.audioSentenceButtonEl.style.display = 'none';

            app.dom.questionDisplayEl.textContent = (wordData.english || wordData.english_country || "").split(',')[0].trim();
            app.dom.exampleSentenceDisplayEl.textContent = wordData.example_en || "";
            
            app.dom.taskPromptEl.textContent = "";

            const input = app.dom.typeInputEl;
            input.value = '';
            input.disabled = false;
            
            const check = () => {
                app.processAnswer(vergleicheAntwort(input.value, correctAnswer), correctAnswer);
                input.disabled = true;
            };

            app.dom.checkTypeButton.onclick = check;
            app._addEnterKeyListener(input, () => app.dom.checkTypeButton.click());
            setTimeout(() => input.focus(), 100);
        }
    },
    'cloze-adj-de': {
        setup: (app) => {
            const wordData = app.currentWordData;
            app.dom.clozeUiEl.style.display = 'block';
            app.dom.wordLineContainerEl.style.display = 'none';
            app.dom.sentenceLineContainerEl.style.display = 'none';

            const clozeParts = wordData.cloze_parts;
            const correctAnswer = wordData.cloze_answers[0];
            app.dom.clozeSentenceContainerEl.innerHTML = '';

            if (clozeParts && clozeParts.length === 2 && correctAnswer) {
                const part1 = document.createElement('span');
                part1.textContent = clozeParts[0];
                const input = document.createElement('input');
                input.type = 'text';
                input.id = 'cloze-input-field';
                input.className = 'cloze-input inline-block w-48 text-center border-b-2 border-gray-400 focus:border-blue-500 outline-none';
                input.autocapitalize = 'off';
                input.autocorrect = 'off';
                input.autocomplete = 'off';
                input.spellcheck = 'false';
                const part2 = document.createElement('span');
                part2.textContent = clozeParts[1];
                app.dom.clozeSentenceContainerEl.append(part1, input, part2);
                
                const check = () => {
                    app.processAnswer(vergleicheAntwort(input.value, correctAnswer), correctAnswer);
                    input.disabled = true;
                };

                app.dom.checkClozeButton.onclick = check;
                app._addEnterKeyListener(input, () => app.dom.checkClozeButton.click());
                setTimeout(() => input.focus(), 100);
            } else {
                app.dom.clozeSentenceContainerEl.textContent = 'Für dieses Wort ist kein Lückentext verfügbar.';
                app.dom.checkClozeButton.onclick = null;
            }
        }
    },
    'sentence-translation-en-de': {
        setup: (app) => {
            const wordData = app.currentWordData;
            app.dom.sentenceUiEl.style.display = 'block';
            app.dom.wordLineContainerEl.style.display = 'flex';
            app.dom.sentenceLineContainerEl.style.display = 'none';
            app.dom.audioWordButtonEl.style.display = 'none';
            app.dom.audioSentenceButtonEl.style.display = 'none';

            app.dom.questionDisplayEl.textContent = wordData.example_en;
            
            const germanSentence = wordData.example_de;
            const words = splitSentence(germanSentence);
            const container = app.dom.sentenceWordInputContainerEl;
            container.innerHTML = '';

            const handleEnter = (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    if (!app.dom.checkSentenceButton.disabled) app.dom.checkSentenceButton.click();
                }
            };

            words.forEach((word) => {
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'word-input-box';
                input.style.width = `${Math.max(word.length, 3) + 2}ch`;
                input.addEventListener('keydown', handleEnter);
                container.appendChild(input);
            });

            app.dom.checkSentenceButton.onclick = () => {
                const inputs = container.querySelectorAll('input');
                const userInputSentence = Array.from(inputs).map(input => input.value).join(' ');
                app.processAnswer(vergleicheAntwort(userInputSentence, germanSentence), germanSentence);
                inputs.forEach(input => input.disabled = true);
            };

            if (container.firstChild) {
                setTimeout(() => container.firstChild.focus(), 100);
            }
        }
    }
};

// ===================================================================================
//  HAUPTKLASSE DER ANWENDUNG
// ===================================================================================
document.addEventListener('DOMContentLoaded', () => {
    if (typeof goetheA1Wortschatz === 'undefined' || typeof alleWortgruppenNamen === 'undefined' || typeof vergleicheAntwort === 'undefined' || typeof speak === 'undefined' || typeof shuffleArray === 'undefined' || typeof splitSentence === 'undefined' || typeof getFullNounAnswer === 'undefined') {
        console.error("KRITISCHER FEHLER: Wichtige Skript-Dateien (vokabular.js, helfer.js) fehlen oder sind fehlerhaft.");
        document.body.innerHTML = '<div style="padding: 2rem; text-align: center; font-family: sans-serif; background-color: #ffcccc; border: 2px solid red;"><h1>Fehler beim Laden</h1><p>Wichtige App-Daten konnten nicht geladen werden. Bitte überprüfe die Browser-Konsole (F12) für Details.</p></div>';
        return;
    }

    const app = new VocabularyTrainer();
    app.init();
});

class VocabularyTrainer {
    // --- EIGENSCHAFTEN ---
    alleVokabeln = Object.values(goetheA1Wortschatz).flat();
    currentVocabularySet = [];
    shuffledVocabForMode = [];
    currentWortgruppeName = "";
    currentMode = 'mc-de-en';
    currentWordData = null;
    currentWordIndexInShuffled = -1;
    correctInRound = 0;
    attemptedInRound = 0;
    globalProgress = {};
    masteredWordsByMode = {};
    wordsToRepeatByMode = {};
    isRepeatSessionActive = false;
    learningModes = ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'];
    modeNames = { 'mc-de-en': "Bedeutung", 'type-de-adj': "Schreibweise", 'cloze-adj-de': "Lückentext", 'sentence-translation-en-de': "Satzübersetzung" };
    SVG_SPEAKER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" /><path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" /></svg>`;
    dom = {};

    // --- INITIALISIERUNG & SETUP ---
    init() { this.cacheDomElements(); this.bindEvents(); this.loadGlobalProgress(); this.showWortgruppenSelector(); }
    cacheDomElements() {
        this.dom.wortgruppenSelectorContainerEl = document.getElementById('wortgruppen-selector-container');
        this.dom.wortgruppenButtonsEl = document.getElementById('wortgruppen-buttons');
        this.dom.trainerMainViewEl = document.getElementById('trainer-main-view');
        this.dom.backToWortgruppenButton = document.getElementById('back-to-wortgruppen');
        this.dom.currentWortgruppeTitleEl = document.getElementById('current-wortgruppe-title');
        this.dom.wordLineContainerEl = document.getElementById('word-line-container');
        this.dom.sentenceLineContainerEl = document.getElementById('sentence-line-container');
        this.dom.questionDisplayEl = document.getElementById('question-display-area');
        this.dom.exampleSentenceDisplayEl = document.getElementById('example-sentence-display');
        this.dom.audioWordButtonEl = document.getElementById('audio-word-button');
        this.dom.audioSentenceButtonEl = document.getElementById('audio-sentence-button');
        this.dom.taskPromptEl = document.getElementById('task-prompt-area');
        this.dom.feedbackContainerEl = document.getElementById('feedback-container');
        this.dom.continueButton = document.getElementById('continue-button');
        this.dom.mcUiEl = document.getElementById('mc-de-en-ui');
        this.dom.mcAnswersContainerEl = document.getElementById('mc-answers-container');
        this.dom.typeUiEl = document.getElementById('type-de-adj-ui');
        this.dom.typeInputEl = document.getElementById('type-de-adj-input');
        this.dom.checkTypeButton = document.getElementById('check-type-de-adj-button');
        this.dom.clozeUiEl = document.getElementById('cloze-adj-de-ui');
        this.dom.clozeSentenceContainerEl = document.getElementById('cloze-sentence-container');
        this.dom.checkClozeButton = document.getElementById('check-cloze-button');
        this.dom.sentenceUiEl = document.getElementById('sentence-translation-en-de-ui');
        this.dom.sentenceWordInputContainerEl = document.getElementById('sentence-word-input-container');
        this.dom.checkSentenceButton = document.getElementById('check-sentence-translation-button');
        this.dom.correctInRoundEl = document.getElementById('correct-in-round');
        this.dom.attemptedInRoundEl = document.getElementById('attempted-in-round');
        this.dom.accuracyBarEl = document.getElementById('accuracy-bar');
        this.dom.messageBoxEl = document.getElementById('message-box');
        this.dom.categoryStatsContainerEl = document.getElementById('category-stats-container');
    }
    bindEvents() {
        this.dom.backToWortgruppenButton.addEventListener('click', () => this.showWortgruppenSelector());
        this.dom.continueButton.addEventListener('click', () => this.loadNextTask());
        document.querySelectorAll('#mode-selector .mode-button:not(.repeat-button)').forEach(button => {
            button.addEventListener('click', () => this.setMode(button.id.replace('mode-', ''), false));
        });
        document.querySelectorAll('#mode-selector .mode-button.repeat-button').forEach(button => {
            button.addEventListener('click', () => {
                const baseModeId = button.id.replace('mode-repeat-', '');
                this.setMode(baseModeId, true);
            });
        });
    }

    // --- KERNMETHODEN ---
    processAnswer(isCorrect, correctAnswer) {
        const wordId = this.currentWordData.german || this.currentWordData.country;
        this._updateProgress(isCorrect, wordId);
        this._updateUiAfterAnswer(isCorrect, correctAnswer);
        this._handleContinue(isCorrect);
    }
    loadNextTask() {
        this.hideAllUIs();
        if (!this.currentVocabularySet || this.currentVocabularySet.length === 0) { return; }
        this.currentWordIndexInShuffled++;
        if (this.currentWordIndexInShuffled >= this.shuffledVocabForMode.length) {
            if (this.isRepeatSessionActive) {
                this.showMessage('Alle Fehler wurden wiederholt!', 'success');
                this.isRepeatSessionActive = false;
                document.querySelector('.mode-button.repeat-active')?.classList.remove('repeat-active');
                this.shuffledVocabForMode = shuffleArray([...this.currentVocabularySet]);
            } else {
                this.shuffledVocabForMode = shuffleArray([...this.shuffledVocabForMode]);
            }
            this.currentWordIndexInShuffled = 0;
        }
        this.currentWordData = this.shuffledVocabForMode[this.currentWordIndexInShuffled];
        if (!this.currentWordData) {
            console.error("Kein Wort gefunden, lade nächstes.");
            this.loadNextTask();
            return;
        }
        document.querySelectorAll('#mode-selector .mode-button:not(.repeat-button):not(#mode-type-land-adj)').forEach(btn => btn.style.display = 'flex');
        const modeConfig = modeConfigurations[this.currentMode];
        if (modeConfig && modeConfig.setup) {
            modeConfig.setup(this);
        } else {
            console.error(`Keine Setup-Konfiguration für Modus "${this.currentMode}" gefunden.`);
            this.showMessage(`Modus "${this.currentMode}" kann nicht geladen werden.`);
        }
    }
    setMode(modeId, isRepeat = false) {
        this.currentMode = modeId;
        this.isRepeatSessionActive = isRepeat;
        if (isRepeat) {
            const wordsToRepeat = Array.from(this.wordsToRepeatByMode[modeId] || []);
            if (wordsToRepeat.length === 0) {
                this.showMessage('Keine Fehler zum Wiederholen in diesem Modus.', 'info');
                this.isRepeatSessionActive = false;
                return;
            }
            const repeatVocabularySet = this.currentVocabularySet.filter(word => {
                const wordId = word.german || word.country;
                return wordsToRepeat.includes(wordId);
            });
            this.shuffledVocabForMode = shuffleArray([...repeatVocabularySet]);
        } else {
            this.shuffledVocabForMode = shuffleArray([...this.currentVocabularySet]);
        }
        this.currentWordIndexInShuffled = -1;
        this.correctInRound = 0;
        this.attemptedInRound = 0;
        document.querySelectorAll('#mode-selector .mode-button').forEach(btn => btn.classList.remove('active', 'repeat-active'));
        document.getElementById(`mode-${modeId}`)?.classList.add('active');
        if (isRepeat) {
            document.getElementById(`mode-repeat-${modeId}`)?.classList.add('repeat-active');
        }
        this.loadNextTask();
    }
    
    // --- UI & DATEN-HILFSMETHODEN ---
    showMessage(message, type = 'error', duration = 3000) {
        this.dom.messageBoxEl.textContent = message;
        this.dom.messageBoxEl.className = `fixed bottom-5 right-5 text-white p-3 rounded-lg shadow-xl ${type === 'success' ? 'bg-green-500' : type === 'info' ? 'bg-blue-500' : 'bg-red-500'}`;
        this.dom.messageBoxEl.classList.remove('hidden');
        setTimeout(() => this.dom.messageBoxEl.classList.add('hidden'), duration);
    }
    saveGlobalProgress() {
        const progressToStore = {};
        for (const gruppe in this.globalProgress) {
            progressToStore[gruppe] = {};
            for (const mode in this.globalProgress[gruppe]) {
                progressToStore[gruppe][mode] = Array.from(this.globalProgress[gruppe][mode]);
            }
        }
        localStorage.setItem('goetheA1Progress', JSON.stringify(progressToStore));
    }
    loadGlobalProgress() {
        const storedProgress = localStorage.getItem('goetheA1Progress');
        if (storedProgress) {
            const parsedProgress = JSON.parse(storedProgress);
            this.globalProgress = {};
            for (const gruppe in parsedProgress) {
                this.globalProgress[gruppe] = {};
                for (const mode in parsedProgress[gruppe]) {
                    this.globalProgress[gruppe][mode] = new Set(parsedProgress[gruppe][mode]);
                }
            }
        }
    }
    updateErrorCounts() {
        this.learningModes.forEach(mode => {
            const repeatButton = document.getElementById(`mode-repeat-${mode}`);
            if (repeatButton) {
                const countSpan = repeatButton.querySelector('.count-display');
                const errorCount = this.wordsToRepeatByMode[mode]?.size || 0;
                if (countSpan) countSpan.textContent = errorCount;
                repeatButton.disabled = errorCount === 0;
            }
        });
    }
    updateCategoryStats() {
        this.dom.categoryStatsContainerEl.innerHTML = '';
        const totalItemsInWortgruppe = this.currentVocabularySet.length;
        if (totalItemsInWortgruppe === 0) return;
        const modesToDisplay = ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'];
        modesToDisplay.forEach(mode => {
            if (this.modeNames[mode]) {
                const masteredCount = this.masteredWordsByMode[mode]?.size || 0;
                const percentage = totalItemsInWortgruppe > 0 ? (masteredCount / totalItemsInWortgruppe) * 100 : 0;
                const item = document.createElement('div');
                item.className = 'category-stat-item';
                const text = document.createElement('span');
                text.className = 'category-stat-text';
                text.textContent = `${this.modeNames[mode]}: ${masteredCount} / ${totalItemsInWortgruppe}`;
                const barBg = document.createElement('div');
                barBg.className = 'category-progress-bar-bg';
                const barFg = document.createElement('div');
                barFg.className = 'category-progress-bar-fg';
                barFg.style.width = `${percentage}%`;
                barBg.appendChild(barFg);
                item.appendChild(text);
                item.appendChild(barBg);
                this.dom.categoryStatsContainerEl.appendChild(item);
            }
        });
    }
    populateWortgruppenButtons() {
        this.dom.wortgruppenButtonsEl.innerHTML = '';
        alleWortgruppenNamen.forEach((name, index) => {
            const button = document.createElement('button');
            button.className = 'wortgruppe-button rounded-lg';
            button.onclick = () => this.showTrainerForWortgruppe(name);
            const textLabel = document.createElement('span');
            textLabel.className = 'button-text-label';
            textLabel.textContent = name;
            button.appendChild(textLabel);
            const progressContainer = document.createElement('div');
            progressContainer.className = 'progress-bar-container';
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar-fill';
            const totalWordsInGroup = goetheA1Wortschatz[name]?.length || 0;
            if (totalWordsInGroup > 0) {
                const isLaenderGruppe = goetheA1Wortschatz[name].some(word => word.country);
                const numberOfModes = isLaenderGruppe ? 5 : 4;
                const totalTasks = totalWordsInGroup * numberOfModes;
                const progressForGroup = this.globalProgress[name] || {};
                let completedTasks = 0;
                Object.values(progressForGroup).forEach(masteredWordSet => {
                    completedTasks += masteredWordSet.size;
                });
                const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
                progressBar.style.width = `${percentage}%`;
            } else {
                progressBar.style.width = '0%';
            }
            let barColor;
            if (index < 6) barColor = '#000000';
            else if (index < 12) barColor = '#dd0000';
            else barColor = '#ffce00';
            progressBar.style.backgroundColor = barColor;
            progressContainer.appendChild(progressBar);
            button.appendChild(progressContainer);
            this.dom.wortgruppenButtonsEl.appendChild(button);
        });
    }
    hideAllUIs() {
        [this.dom.mcUiEl, this.dom.typeUiEl, this.dom.clozeUiEl, this.dom.sentenceUiEl].forEach(ui => ui.style.display = 'none');
        this.dom.continueButton.classList.add('hidden');
        this.dom.feedbackContainerEl.innerHTML = '';
        this.dom.questionDisplayEl.textContent = '';
        this.dom.exampleSentenceDisplayEl.textContent = '';
        this.dom.taskPromptEl.textContent = '';
        this.dom.wordLineContainerEl.style.display = 'none';
        this.dom.sentenceLineContainerEl.style.display = 'none';
    }
    showWortgruppenSelector() {
        this.populateWortgruppenButtons();
        this.dom.wortgruppenSelectorContainerEl.classList.remove('hidden-view');
        this.dom.trainerMainViewEl.classList.add('hidden-view');
    }
    showTrainerForWortgruppe(wortgruppeName) {
        this.currentWortgruppeName = wortgruppeName;
        this.currentVocabularySet = goetheA1Wortschatz[wortgruppeName] || [];
        this.masteredWordsByMode = {};
        const progressForGroup = this.globalProgress[this.currentWortgruppeName] || {};
        this.learningModes.forEach(mode => {
            this.masteredWordsByMode[mode] = new Set(progressForGroup[mode] || []);
        });
        this.wordsToRepeatByMode = {};
        this.learningModes.forEach(mode => {
            this.wordsToRepeatByMode[mode] = new Set();
        });
        if (this.currentVocabularySet.length === 0) {
            this.showMessage(`"${wortgruppeName}" ist leer.`, 'info');
            return;
        }
        this.dom.currentWortgruppeTitleEl.textContent = wortgruppeName;
        this.dom.wortgruppenSelectorContainerEl.classList.add('hidden-view');
        this.dom.trainerMainViewEl.classList.remove('hidden-view');
        this.updateCategoryStats();
        this.updateErrorCounts();
        this.setMode('mc-de-en');
    }

    // --- "PRIVATE" HILFSMETHODEN ---
    _updateProgress(isCorrect, wordId) {
        this.attemptedInRound++;
        if (isCorrect) {
            this.correctInRound++;
            if (wordId) {
                if (!this.globalProgress[this.currentWortgruppeName]) this.globalProgress[this.currentWortgruppeName] = {};
                if (!this.globalProgress[this.currentWortgruppeName][this.currentMode]) this.globalProgress[this.currentWortgruppeName][this.currentMode] = new Set();
                this.globalProgress[this.currentWortgruppeName][this.currentMode].add(wordId);
                this.masteredWordsByMode[this.currentMode].add(wordId);
                this.saveGlobalProgress();
                this.wordsToRepeatByMode[this.currentMode]?.delete(wordId);
            }
        } else {
            if (wordId) {
                if (!this.wordsToRepeatByMode[this.currentMode]) this.wordsToRepeatByMode[this.currentMode] = new Set();
                this.wordsToRepeatByMode[this.currentMode].add(wordId);
            }
        }
    }
    _updateUiAfterAnswer(isCorrect, correctAnswer) {
        const feedbackText = isCorrect ? 'Richtig!' : `<span class="font-bold">${correctAnswer}</span>`;
        const feedbackClass = isCorrect ? 'feedback-correct' : 'feedback-incorrect';
        this.dom.feedbackContainerEl.innerHTML = `<span class="${feedbackClass}">${feedbackText}</span>`;
        const accuracy = this.attemptedInRound > 0 ? (this.correctInRound / this.attemptedInRound) * 100 : 0;
        this.dom.correctInRoundEl.textContent = this.correctInRound;
        this.dom.attemptedInRoundEl.textContent = this.attemptedInRound;
        this.dom.accuracyBarEl.style.width = `${accuracy}%`;
        this.dom.accuracyBarEl.textContent = `${Math.round(accuracy)}%`;
        this.updateCategoryStats();
        this.updateErrorCounts();
    }
    _handleContinue(isCorrect) {
        if (isCorrect) {
            this.dom.continueButton.classList.add('hidden');
            setTimeout(() => {
                this.loadNextTask();
            }, 1200);
        } else {
            this.dom.continueButton.classList.remove('hidden');
        }
    }
    _addEnterKeyListener(inputElement, callback) {
        inputElement.onkeydown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (!inputElement.disabled) {
                    callback();
                }
            }
        };
    }
}