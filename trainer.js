// Annahme: goetheA1Wortschatz und alleWortgruppenNamen sind in vokabular.js definiert.
const alleVokabeln = Object.values(goetheA1Wortschatz).flat();

document.addEventListener('DOMContentLoaded', () => {

    if (typeof goetheA1Wortschatz === 'undefined' || typeof alleWortgruppenNamen === 'undefined' || typeof vergleicheAntwort === 'undefined' || typeof speak === 'undefined') {
        console.error("KRITISCHER FEHLER: Wichtige Skript-Dateien (vokabular.js, helfer.js) fehlen oder sind fehlerhaft.");
        document.body.innerHTML = '<div style="padding: 2rem; text-align: center; font-family: sans-serif; background-color: #ffcccc; border: 2px solid red;"><h1>Fehler beim Laden</h1><p>Wichtige App-Daten konnten nicht geladen werden. Bitte überprüfe die Browser-Konsole (F12) für Details.</p></div>';
        return;
    }

    // HILFSFUNKTIONEN
    function shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[array[i], array[j]] = [array[j], array[i]]; } return array; }
    function showMessage(message, type = 'error', duration = 3000) { messageBoxEl.textContent = message; messageBoxEl.className = `fixed bottom-5 right-5 text-white p-3 rounded-lg shadow-xl ${type === 'success' ? 'bg-green-500' : type === 'info' ? 'bg-blue-500' : 'bg-red-500'}`; messageBoxEl.classList.remove('hidden'); setTimeout(() => messageBoxEl.classList.add('hidden'), duration); }
    String.prototype.split_sentence_for_translation = function () { return this.match(/\S+/g) || []; };

    // GLOBALE VARIABLEN & ZUSTAND
    let currentVocabularySet = [], shuffledVocabForMode = [];
    let currentWortgruppeName = "", currentMode = 'mc-de-en', currentWordData;
    let currentWordIndexInShuffled = -1, correctInRound = 0, attemptedInRound = 0;
    
    let globalProgress = {}; 
    let masteredWordsByMode = {};
    let wordsToRepeatByMode = {};
    let isRepeatSessionActive = false;

    const learningModes = ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de', 'type-land-adj'];
    const modeNames = { 'mc-de-en': "Bedeutung", 'type-de-adj': "Schreibweise", 'cloze-adj-de': "Lückentext", 'sentence-translation-en-de': "Satzübersetzung", 'type-land-adj': "Land → Adjektiv" };
    
    // DOM-ELEMENTE
    const wortgruppenSelectorContainerEl = document.getElementById('wortgruppen-selector-container');
    const wortgruppenButtonsEl = document.getElementById('wortgruppen-buttons');
    const trainerMainViewEl = document.getElementById('trainer-main-view');
    const backToWortgruppenButton = document.getElementById('back-to-wortgruppen');
    const currentWortgruppeTitleEl = document.getElementById('current-wortgruppe-title');
    const wordLineContainerEl = document.getElementById('word-line-container');
    const sentenceLineContainerEl = document.getElementById('sentence-line-container');
    const questionDisplayEl = document.getElementById('question-display-area');
    const exampleSentenceDisplayEl = document.getElementById('example-sentence-display');
    const audioWordButtonEl = document.getElementById('audio-word-button');
    const audioSentenceButtonEl = document.getElementById('audio-sentence-button');
    const taskPromptEl = document.getElementById('task-prompt-area');
    const feedbackContainerEl = document.getElementById('feedback-container');
    const continueButton = document.getElementById('continue-button');
    const mcUiEl = document.getElementById('mc-de-en-ui');
    const mcAnswersContainerEl = document.getElementById('mc-answers-container');
    const typeUiEl = document.getElementById('type-de-adj-ui');
    const typeInputEl = document.getElementById('type-de-adj-input');
    const checkTypeButton = document.getElementById('check-type-de-adj-button');
    const clozeUiEl = document.getElementById('cloze-adj-de-ui');
    const clozeSentenceContainerEl = document.getElementById('cloze-sentence-container');
    const checkClozeButton = document.getElementById('check-cloze-button');
    const sentenceUiEl = document.getElementById('sentence-translation-en-de-ui');
    const sentenceWordInputContainerEl = document.getElementById('sentence-word-input-container');
    const checkSentenceButton = document.getElementById('check-sentence-translation-button');
    const correctInRoundEl = document.getElementById('correct-in-round');
    const attemptedInRoundEl = document.getElementById('attempted-in-round');
    const accuracyBarEl = document.getElementById('accuracy-bar');
    const messageBoxEl = document.getElementById('message-box');
    const categoryStatsContainerEl = document.getElementById('category-stats-container');
    const landAdjColumnEl = document.getElementById('land-adj-column');

    const SVG_SPEAKER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" /><path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" /></svg>`;

    function saveGlobalProgress() {
        const progressToStore = {};
        for (const gruppe in globalProgress) {
            progressToStore[gruppe] = {};
            for (const mode in globalProgress[gruppe]) {
                progressToStore[gruppe][mode] = Array.from(globalProgress[gruppe][mode]);
            }
        }
        localStorage.setItem('goetheA1Progress', JSON.stringify(progressToStore));
    }

    function loadGlobalProgress() {
        const storedProgress = localStorage.getItem('goetheA1Progress');
        if (storedProgress) {
            const parsedProgress = JSON.parse(storedProgress);
            globalProgress = {};
            for (const gruppe in parsedProgress) {
                globalProgress[gruppe] = {};
                for (const mode in parsedProgress[gruppe]) {
                    globalProgress[gruppe][mode] = new Set(parsedProgress[gruppe][mode]);
                }
            }
        }
    }
    
    function updateErrorCounts() {
        learningModes.forEach(mode => {
            const repeatButton = document.getElementById(`mode-repeat-${mode}`);
            if (repeatButton) {
                const countSpan = repeatButton.querySelector('.count-display');
                const errorCount = wordsToRepeatByMode[mode]?.size || 0;
                if (countSpan) {
                    countSpan.textContent = errorCount;
                }
                repeatButton.disabled = errorCount === 0;
            }
        });
    }

    function updateCategoryStats() {
        categoryStatsContainerEl.innerHTML = '';
        const totalItemsInWortgruppe = currentVocabularySet.length;
        if (totalItemsInWortgruppe === 0) return;

        const modesToDisplay = ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'];
        modesToDisplay.forEach(mode => {
            if (modeNames[mode]) {
                const masteredCount = masteredWordsByMode[mode]?.size || 0;
                const percentage = totalItemsInWortgruppe > 0 ? (masteredCount / totalItemsInWortgruppe) * 100 : 0;
                
                const item = document.createElement('div');
                item.className = 'category-stat-item';
                const text = document.createElement('span');
                text.className = 'category-stat-text';
                text.textContent = `${modeNames[mode]}: ${masteredCount} / ${totalItemsInWortgruppe}`;
                const barBg = document.createElement('div');
                barBg.className = 'category-progress-bar-bg';
                const barFg = document.createElement('div');
                barFg.className = 'category-progress-bar-fg';
                barFg.style.width = `${percentage}%`;
                barBg.appendChild(barFg);
                item.appendChild(text);
                item.appendChild(barBg);
                categoryStatsContainerEl.appendChild(item);
            }
        });
    }
    
    function populateWortgruppenButtons() {
        wortgruppenButtonsEl.innerHTML = '';
        alleWortgruppenNamen.forEach((name, index) => {
            const button = document.createElement('button');
            button.className = 'wortgruppe-button rounded-lg';
            button.onclick = () => showTrainerForWortgruppe(name);
            
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

                const progressForGroup = globalProgress[name] || {};
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
            if (index < 6) {
                barColor = '#000000';
            } else if (index < 12) {
                barColor = '#dd0000';
            } else {
                barColor = '#ffce00';
            }
            progressBar.style.backgroundColor = barColor;

            progressContainer.appendChild(progressBar);
            button.appendChild(progressContainer);
            wortgruppenButtonsEl.appendChild(button);
        });
    }

    function hideAllUIs() {
        [mcUiEl, typeUiEl, clozeUiEl, sentenceUiEl].forEach(ui => ui.style.display = 'none');
        continueButton.classList.add('hidden');
        feedbackContainerEl.innerHTML = '';
        questionDisplayEl.textContent = '';
        exampleSentenceDisplayEl.textContent = '';
        taskPromptEl.textContent = '';
        wordLineContainerEl.style.display = 'none';
        sentenceLineContainerEl.style.display = 'none';
    }

    function showWortgruppenSelector() {
        populateWortgruppenButtons();
        wortgruppenSelectorContainerEl.classList.remove('hidden-view');
        trainerMainViewEl.classList.add('hidden-view');
    }

    function showTrainerForWortgruppe(wortgruppeName) {
        currentWortgruppeName = wortgruppeName;
        currentVocabularySet = goetheA1Wortschatz[wortgruppeName] || [];
        
        masteredWordsByMode = {};
        const progressForGroup = globalProgress[currentWortgruppeName] || {};
        learningModes.forEach(mode => {
            masteredWordsByMode[mode] = new Set(progressForGroup[mode] || []);
        });

        wordsToRepeatByMode = {};
         learningModes.forEach(mode => {
            wordsToRepeatByMode[mode] = new Set();
        });

        if (currentVocabularySet.length === 0) {
            showMessage(`"${wortgruppeName}" ist leer.`, 'info');
            return;
        }
        currentWortgruppeTitleEl.textContent = wortgruppeName;
        wortgruppenSelectorContainerEl.classList.add('hidden-view');
        trainerMainViewEl.classList.remove('hidden-view');
        
        updateCategoryStats();
        updateErrorCounts();
        setMode('mc-de-en');
    }

    function setMode(modeId, isRepeat = false) {
        currentMode = modeId;
        isRepeatSessionActive = isRepeat;

        if (isRepeat) {
            const wordsToRepeat = Array.from(wordsToRepeatByMode[modeId] || []);
            if (wordsToRepeat.length === 0) {
                showMessage('Keine Fehler zum Wiederholen in diesem Modus.', 'info');
                isRepeatSessionActive = false;
                return;
            }
            const repeatVocabularySet = currentVocabularySet.filter(word => {
                const wordId = word.german || word.country;
                return wordsToRepeat.includes(wordId);
            });
            shuffledVocabForMode = shuffleArray([...repeatVocabularySet]);
        } else {
            shuffledVocabForMode = shuffleArray([...currentVocabularySet]);
        }
        
        currentWordIndexInShuffled = -1;
        correctInRound = 0;
        attemptedInRound = 0;
        
        document.querySelectorAll('#mode-selector .mode-button').forEach(btn => btn.classList.remove('active', 'repeat-active'));
        document.getElementById(`mode-${modeId}`)?.classList.add('active');
        if (isRepeat) {
            document.getElementById(`mode-repeat-${modeId}`)?.classList.add('repeat-active');
        }
        
        loadNextTask();
    }
    
    // ===== STARKE ÄNDERUNG: Logik für automatisches Fortfahren bei korrekter Antwort =====
    function processAnswer(isCorrect, correctAnswer) {
        attemptedInRound++;
        let feedbackText = '';
        let feedbackClass = '';

        const wordId = currentWordData.german || currentWordData.country;

        if (isCorrect) {
            correctInRound++;
            feedbackText = 'Richtig!';
            feedbackClass = 'feedback-correct';
            
            if (wordId) {
                if (!globalProgress[currentWortgruppeName]) globalProgress[currentWortgruppeName] = {};
                if (!globalProgress[currentWortgruppeName][currentMode]) globalProgress[currentWortgruppeName][currentMode] = new Set();
                globalProgress[currentWortgruppeName][currentMode].add(wordId);
                masteredWordsByMode[currentMode].add(wordId);
                saveGlobalProgress();
                
                if (wordsToRepeatByMode[currentMode]) {
                    wordsToRepeatByMode[currentMode].delete(wordId);
                }
            }
        } else {
            feedbackText = `<span class="font-bold">${correctAnswer}</span>`;
            feedbackClass = 'feedback-incorrect';
             if (wordId) {
                if (!wordsToRepeatByMode[currentMode]) wordsToRepeatByMode[currentMode] = new Set();
                wordsToRepeatByMode[currentMode].add(wordId);
            }
        }

        feedbackContainerEl.innerHTML = `<span class="${feedbackClass}">${feedbackText}</span>`;

        const accuracy = attemptedInRound > 0 ? (correctInRound / attemptedInRound) * 100 : 0;
        correctInRoundEl.textContent = correctInRound;
        attemptedInRoundEl.textContent = attemptedInRound;
        accuracyBarEl.style.width = `${accuracy}%`;
        accuracyBarEl.textContent = `${Math.round(accuracy)}%`;

        updateCategoryStats();
        updateErrorCounts();

        // NEUE LOGIK:
        if (isCorrect) {
            // Bei korrekter Antwort, blende den "Weiter"-Button aus und starte einen Timer.
            continueButton.classList.add('hidden');
            setTimeout(() => {
                loadNextTask();
            }, 1200); // 1,2 Sekunden Verzögerung
        } else {
            // Bei falscher Antwort, zeige den "Weiter"-Button wie gewohnt an.
            continueButton.classList.remove('hidden');
        }
    }

    function loadNextTask() {
        hideAllUIs();
    
        if (!currentVocabularySet || currentVocabularySet.length === 0) { return; }
    
        currentWordIndexInShuffled++;
        if (currentWordIndexInShuffled >= shuffledVocabForMode.length) {
            if (isRepeatSessionActive) {
                showMessage('Alle Fehler wurden wiederholt!', 'success');
                isRepeatSessionActive = false;
                document.querySelector('.mode-button.repeat-active')?.classList.remove('repeat-active');
                shuffledVocabForMode = shuffleArray([...currentVocabularySet]);
            } else {
                shuffledVocabForMode = shuffleArray([...shuffledVocabForMode]);
            }
            currentWordIndexInShuffled = 0;
        }

        currentWordData = shuffledVocabForMode[currentWordIndexInShuffled];
    
        if (!currentWordData) {
            console.error("Kein Wort gefunden, lade nächstes.");
            loadNextTask();
            return;
        }
    
        const mainGermanWord = currentWordData.german || currentWordData.country;
        
        const isLaenderCategory = !!currentWordData.country;
        if(landAdjColumnEl) landAdjColumnEl.style.display = isLaenderCategory ? 'flex' : 'none';
        
        document.querySelectorAll('#mode-selector .mode-button:not(.repeat-button):not(#mode-type-land-adj)')
            .forEach(btn => btn.style.display = 'flex');
        
        if (currentMode === 'mc-de-en') {
            mcUiEl.style.display = 'block';
            let displayGermanWord = mainGermanWord;
            if (currentWordData.nomen_notation && typeof parseNounString === 'function') {
                const parsed = parseNounString(currentWordData.nomen_notation); 
                if (parsed && !parsed.isPluralOnly) {
                    const artikelMap = { 'r': 'der', 'e': 'die', 's': 'das' };
                    displayGermanWord = `${artikelMap[parsed.genus] || ''} ${parsed.singular}, ${parsed.pluralInfo}`;
                } else if (parsed && parsed.isPluralOnly) {
                    displayGermanWord = `die ${parsed.singular} (Pl.)`;
                }
            }
            questionDisplayEl.textContent = displayGermanWord;
            exampleSentenceDisplayEl.textContent = currentWordData.example_de;
            audioWordButtonEl.innerHTML = SVG_SPEAKER_ICON;
            audioWordButtonEl.onclick = () => speak(mainGermanWord);
            audioSentenceButtonEl.innerHTML = SVG_SPEAKER_ICON;
            audioSentenceButtonEl.onclick = () => speak(currentWordData.example_de, 'de-DE');
            wordLineContainerEl.style.display = 'flex';
            sentenceLineContainerEl.style.display = 'flex';
            audioWordButtonEl.style.display = 'block';
            audioSentenceButtonEl.style.display = 'block';
            const correctAnswerEN = (currentWordData.english || currentWordData.english_country || "??").split(',')[0].trim();
            let potentialDistractors = shuffleArray(alleVokabeln.map(v => (v.english || v.english_country || "??").split(',')[0].trim()).filter(e => e !== correctAnswerEN && e !== "??")).slice(0, 3);
            let options = shuffleArray([correctAnswerEN, ...potentialDistractors]);
            mcAnswersContainerEl.innerHTML = '';
            options.forEach(option => {
                const button = document.createElement('button');
                button.className = 'answer-button w-full border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg';
                button.textContent = option;
                button.onclick = () => processAnswer(option === correctAnswerEN, correctAnswerEN);
                mcAnswersContainerEl.appendChild(button);
            });
    
        } else if (currentMode === 'type-de-adj') {
            typeUiEl.style.display = 'block';
            const englishWord = (currentWordData.english || currentWordData.english_country || "").split(',')[0].trim();
            const englishSentence = currentWordData.example_en || "";
            questionDisplayEl.textContent = englishWord;
            exampleSentenceDisplayEl.textContent = englishSentence;
            audioWordButtonEl.style.display = 'none';
            audioSentenceButtonEl.style.display = 'none';
            wordLineContainerEl.style.display = 'flex';
            sentenceLineContainerEl.style.display = 'flex';
            typeInputEl.value = '';
            typeInputEl.disabled = false;
            checkTypeButton.onclick = () => {
                processAnswer(vergleicheAntwort(typeInputEl.value, mainGermanWord), mainGermanWord);
                typeInputEl.disabled = true;
            };
            setTimeout(() => typeInputEl.focus(), 100);

            // ===== NEUE ÄNDERUNG: Enter-Taste zum Bestätigen =====
            typeInputEl.onkeydown = (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    if (!checkTypeButton.disabled) checkTypeButton.click();
                }
            };

        } else if (currentMode === 'cloze-adj-de') {
            clozeUiEl.style.display = 'block';
            wordLineContainerEl.style.display = 'none';
            sentenceLineContainerEl.style.display = 'none';
            const clozeParts = currentWordData.cloze_parts;
            const correctAnswer = currentWordData.cloze_answers[0];
            clozeSentenceContainerEl.innerHTML = '';
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
                clozeSentenceContainerEl.append(part1, input, part2);
                checkClozeButton.onclick = () => {
                    processAnswer(vergleicheAntwort(input.value, correctAnswer), correctAnswer);
                    input.disabled = true;
                };
                setTimeout(() => input.focus(), 100);

                // ===== NEUE ÄNDERUNG: Enter-Taste zum Bestätigen =====
                input.onkeydown = (event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        if (!checkClozeButton.disabled) checkClozeButton.click();
                    }
                };

            } else {
                clozeSentenceContainerEl.textContent = 'Für dieses Wort ist kein Lückentext verfügbar.';
                checkClozeButton.onclick = null;
            }

        } else if (currentMode === 'sentence-translation-en-de') {
            sentenceUiEl.style.display = 'block';
            questionDisplayEl.textContent = currentWordData.example_en;
            wordLineContainerEl.style.display = 'flex';
            sentenceLineContainerEl.style.display = 'none';
            audioWordButtonEl.style.display = 'none';
            audioSentenceButtonEl.style.display = 'none';
            const germanSentence = currentWordData.example_de;
            const words = germanSentence.split_sentence_for_translation();
            sentenceWordInputContainerEl.innerHTML = '';
            
            // ===== NEUE ÄNDERUNG: Enter-Taste zum Bestätigen =====
            const handleEnter = (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    if (!checkSentenceButton.disabled) checkSentenceButton.click();
                }
            };

            words.forEach((word, index) => {
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'word-input-box';
                input.setAttribute('data-index', index);
                input.style.width = `${Math.max(word.length, 3) + 2}ch`;
                input.addEventListener('keydown', handleEnter); // Listener hinzufügen
                sentenceWordInputContainerEl.appendChild(input);
            });
            checkSentenceButton.onclick = () => {
                const inputs = sentenceWordInputContainerEl.querySelectorAll('input');
                const userInputArray = Array.from(inputs).map(input => input.value);
                const userInputSentence = userInputArray.join(' ');
                processAnswer(vergleicheAntwort(userInputSentence, germanSentence), germanSentence);
                inputs.forEach(input => input.disabled = true);
            };
            if (sentenceWordInputContainerEl.firstChild) {
                setTimeout(() => sentenceWordInputContainerEl.firstChild.focus(), 100);
            }
        }
    }

    // App initialisieren
    backToWortgruppenButton.addEventListener('click', showWortgruppenSelector);
    
    document.querySelectorAll('#mode-selector .mode-button:not(.repeat-button)').forEach(button => {
        button.addEventListener('click', () => setMode(button.id.replace('mode-', ''), false));
    });
    
    document.querySelectorAll('#mode-selector .mode-button.repeat-button').forEach(button => {
        button.addEventListener('click', () => {
            const baseModeId = button.id.replace('mode-repeat-', '');
            setMode(baseModeId, true);
        });
    });

    continueButton.addEventListener('click', loadNextTask);

    loadGlobalProgress();
    showWortgruppenSelector();
});