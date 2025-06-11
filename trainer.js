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
    let currentVocabularySet = [], shuffledVocabForMode = [], repeatTasksQueue = [];
    let currentWortgruppeName = "", currentMode = 'mc-de-en', currentWordData;
    let currentWordIndexInShuffled = -1, correctInRound = 0, attemptedInRound = 0;
    let isRepeatModeActive = false;
    let masteredWordsByMode = {};
    const learningModes = ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de', 'type-land-adj'];
    const modeNames = { 'mc-de-en': "Bedeutung", 'type-de-adj': "Schreibweise", 'cloze-adj-de': "Lückentext", 'sentence-translation-en-de': "Satzübersetzung", 'type-land-adj': "Land → Adjektiv" };
    learningModes.forEach(mode => { masteredWordsByMode[mode] = new Set(); });
    let incorrectlyAnsweredTasks = {};
    learningModes.forEach(mode => { incorrectlyAnsweredTasks[mode] = new Set(); });

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

    // SVG-Icon für die Audio-Buttons
    const SVG_SPEAKER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 01-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" /><path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" /></svg>`;

    function populateWortgruppenButtons() {
        wortgruppenButtonsEl.innerHTML = '';
        alleWortgruppenNamen.forEach(name => {
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
            progressBar.style.width = '0%';
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
    }

    function showWortgruppenSelector() {
        wortgruppenSelectorContainerEl.classList.remove('hidden-view');
        trainerMainViewEl.classList.add('hidden-view');
    }

    function showTrainerForWortgruppe(wortgruppeName) {
        currentWortgruppeName = wortgruppeName;
        currentVocabularySet = goetheA1Wortschatz[wortgruppeName] || [];
        learningModes.forEach(mode => { masteredWordsByMode[mode] = new Set(); incorrectlyAnsweredTasks[mode] = new Set(); });
        if (currentVocabularySet.length === 0) {
            showMessage(`"${wortgruppeName}" ist leer.`, 'info');
            return;
        }
        currentWortgruppeTitleEl.textContent = wortgruppeName;
        wortgruppenSelectorContainerEl.classList.add('hidden-view');
        trainerMainViewEl.classList.remove('hidden-view');
        setMode('mc-de-en');
    }

    function setMode(modeId) {
        currentMode = modeId;
        shuffledVocabForMode = shuffleArray([...currentVocabularySet]);
        currentWordIndexInShuffled = -1;
        document.querySelectorAll('#mode-selector .mode-button').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`mode-${modeId}`)?.classList.add('active');
        loadNextTask();
    }
    
    function processAnswer(isCorrect, correctAnswer) {
        attemptedInRound++;
        let feedbackText = '';
        let feedbackClass = '';

        if (isCorrect) {
            correctInRound++;
            feedbackText = 'Richtig!';
            feedbackClass = 'feedback-correct';
        } else {
            feedbackText = `Falsch. Richtig ist: <span class="font-bold">${correctAnswer}</span>`;
            feedbackClass = 'feedback-incorrect';
        }

        feedbackContainerEl.innerHTML = `<span class="${feedbackClass}">${feedbackText}</span>`;

        const accuracy = attemptedInRound > 0 ? (correctInRound / attemptedInRound) * 100 : 0;
        correctInRoundEl.textContent = correctInRound;
        attemptedInRoundEl.textContent = attemptedInRound;
        accuracyBarEl.style.width = `${accuracy}%`;
        accuracyBarEl.textContent = `${Math.round(accuracy)}%`;

        continueButton.classList.remove('hidden');
    }

    function loadNextTask() {
        hideAllUIs();
        wordLineContainerEl.style.display = 'none';
        sentenceLineContainerEl.style.display = 'none';

        if (!currentVocabularySet || currentVocabularySet.length === 0) { return; }

        currentWordIndexInShuffled++;
        if (currentWordIndexInShuffled >= shuffledVocabForMode.length) {
            shuffledVocabForMode = shuffleArray([...currentVocabularySet]);
            currentWordIndexInShuffled = 0;
        }
        currentWordData = shuffledVocabForMode[currentWordIndexInShuffled];

        if (!currentWordData) {
            console.error("Kein Wort gefunden, lade nächstes.");
            loadNextTask();
            return;
        }

        const mainGermanWord = currentWordData.german || currentWordData.country;
        const sentenceToSpeak = currentWordData.example_de;

        if (mainGermanWord) {
            let displayGermanWord = mainGermanWord;
            if (currentWordData.nomen_notation) {
                const parsed = parseNounString(currentWordData.nomen_notation);
                if (parsed && !parsed.isPluralOnly) {
                    const artikelMap = { 'r': 'der', 'e': 'die', 's': 'das' };
                    displayGermanWord = `${artikelMap[parsed.genus] || ''} ${parsed.singular}, ${parsed.pluralInfo}`;
                } else if (parsed && parsed.isPluralOnly) {
                    displayGermanWord = `die ${parsed.singular} (Pl.)`;
                }
            }
            questionDisplayEl.textContent = displayGermanWord;
            audioWordButtonEl.innerHTML = SVG_SPEAKER_ICON;
            audioWordButtonEl.onclick = () => speak(mainGermanWord);
            wordLineContainerEl.style.display = 'flex';
        }

        if (sentenceToSpeak) {
            exampleSentenceDisplayEl.textContent = sentenceToSpeak;
            audioSentenceButtonEl.innerHTML = SVG_SPEAKER_ICON;
            audioSentenceButtonEl.onclick = () => speak(sentenceToSpeak, 'de-DE');
            sentenceLineContainerEl.style.display = 'flex';
        }

        // KORRIGIERTE LOGIK FÜR DIE BUTTONS
        const isLaenderCategory = !!currentWordData.country;
        
        // Zuerst alle "normalen" Buttons anzeigen
        document.querySelectorAll('#mode-selector .mode-button:not(.repeat-button):not(#mode-type-land-adj)')
            .forEach(btn => btn.style.display = 'flex');
        
        // Dann den speziellen Button je nach Kategorie ein- oder ausblenden
        document.getElementById('mode-type-land-adj').style.display = isLaenderCategory ? 'flex' : 'none';


        if (currentMode === 'mc-de-en') {
            mcUiEl.style.display = 'block';
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
            taskPromptEl.textContent = (currentWordData.english || currentWordData.english_country || "Übersetze").split(',')[0].trim();
            typeInputEl.value = '';
            typeInputEl.disabled = false;
            typeInputEl.focus();
            checkTypeButton.onclick = () => {
                processAnswer(vergleicheAntwort(typeInputEl.value, mainGermanWord), mainGermanWord);
                typeInputEl.disabled = true;
            };
        }
    }

    backToWortgruppenButton.addEventListener('click', showWortgruppenSelector);
    document.querySelectorAll('#mode-selector .mode-button:not(.repeat-button)').forEach(button => {
        button.addEventListener('click', () => setMode(button.id.replace('mode-', '')));
    });
    continueButton.addEventListener('click', loadNextTask);

    populateWortgruppenButtons();
    showWortgruppenSelector();
});