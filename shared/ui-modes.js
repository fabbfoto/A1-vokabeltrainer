// ui-modes.js - Bugfix für den deaktivierten "Auswerten"-Button

import { vergleicheAntwort, shuffleArray, speak, parseNounString, splitSentence } from './helfer.js';

export function setupMcDeEnMode(dom, state, alleVokabeln, processAnswer) {
    dom.mcUiEl.style.display = 'block';
    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'none'; // Umlaut-Buttons ausblenden
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

export function setupSpellingMode(dom, state, processAnswer) {
    // ===== KORREKTUR =====
    dom.checkSpellingButton.disabled = false;
    
    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'flex'; // Umlaut-Buttons einblenden
    dom.spellingModeUiEl.style.display = 'block';
    dom.questionDisplayEl.textContent = (state.currentWordData.english || "").split(',')[0].trim();
    dom.exampleSentenceDisplayEl.textContent = state.currentWordData.example_en || "";
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'flex';
    const resetInputStyles = (...inputs) => { inputs.forEach(input => { if(input) input.classList.remove('correct-user-input', 'incorrect-user-input'); }); };
    resetInputStyles(dom.spellingInputSingleEl, dom.spellingInputNoun1El, dom.spellingInputNoun2El);
    const isNounWithPlural = state.currentWordData && typeof state.currentWordData.plural !== 'undefined';
    if (isNounWithPlural) {
        dom.nounInputContainerEl.classList.remove('hidden');
        dom.singleInputContainerEl.classList.add('hidden');
        const inputs = [dom.spellingInputNoun1El, dom.spellingInputNoun2El];
        inputs.forEach(input => { 
            input.value = ''; 
            input.disabled = false; 
            input.addEventListener('focus', () => state.activeTextInput = input);
        });
        const handleEnter = (event) => { if (event.key === 'Enter' && !dom.checkSpellingButton.disabled) { event.preventDefault(); dom.checkSpellingButton.click(); } };
        inputs.forEach(input => { input.addEventListener('keydown', handleEnter); });
        dom.checkSpellingButton.onclick = () => {
            const correctAnswerSingular = `${state.currentWordData.artikel} ${state.currentWordData.german}`;
            const correctAnswerPluralWord = state.currentWordData.plural;
            const userInputSingular = dom.spellingInputNoun1El.value;
            const userInputPlural = dom.spellingInputNoun2El.value;
            const isSingularCorrect = vergleicheAntwort(userInputSingular, correctAnswerSingular);
            const isPluralCorrect = vergleicheAntwort(userInputPlural, correctAnswerPluralWord);
            dom.spellingInputNoun1El.classList.add(isSingularCorrect ? 'correct-user-input' : 'incorrect-user-input');
            dom.spellingInputNoun2El.classList.add(isPluralCorrect ? 'correct-user-input' : 'incorrect-user-input');
            const isOverallCorrect = isSingularCorrect && isPluralCorrect;
            const combinedCorrectAnswer = `${correctAnswerSingular} / ${correctAnswerPluralWord}`;
            processAnswer(isOverallCorrect, combinedCorrectAnswer);
            inputs.forEach(input => input.disabled = true);
        };
        setTimeout(() => {
            dom.spellingInputNoun1El.focus();
            state.activeTextInput = dom.spellingInputNoun1El;
        }, 100);
    } else {
        dom.singleInputContainerEl.classList.remove('hidden');
        dom.nounInputContainerEl.classList.add('hidden');
        const input = dom.spellingInputSingleEl;
        input.value = ''; input.disabled = false;
        input.addEventListener('focus', () => state.activeTextInput = input);

        dom.checkSpellingButton.onclick = () => {
            const correctAnswer = state.currentWordData.german;
            const isCorrect = vergleicheAntwort(input.value, correctAnswer);
            input.classList.add(isCorrect ? 'correct-user-input' : 'incorrect-user-input');
            processAnswer(isCorrect, correctAnswer);
            input.disabled = true;
        };
        input.onkeydown = (event) => { if (event.key === 'Enter' && !dom.checkSpellingButton.disabled) { event.preventDefault(); dom.checkSpellingButton.click(); } };
        setTimeout(() => {
            input.focus();
            state.activeTextInput = input;
        }, 100);
    }
}

export function setupClozeAdjDeMode(dom, state, processAnswer) {
    // ===== KORREKTUR =====
    dom.checkClozeButton.disabled = false;

    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'flex'; // Umlaut-Buttons einblenden
    dom.clozeUiEl.style.display = 'block';
    dom.wordLineContainerEl.style.display = 'none';
    dom.sentenceLineContainerEl.style.display = 'none';
    const { cloze_parts, cloze_answers, english } = state.currentWordData;
    const correctAnswer = cloze_answers?.[0];
    dom.clozeSentenceContainerEl.innerHTML = '';
    if (cloze_parts && cloze_parts.length === 2 && correctAnswer) {
        dom.clozeHintContainerEl.textContent = english;
        dom.clozeHintContainerEl.style.display = 'block';
        dom.clozeSentenceContainerEl.append(document.createTextNode(cloze_parts[0]));
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'cloze-input inline-block w-48 text-center border-b-2 border-gray-400 focus:border-blue-500 outline-none';
        input.autocapitalize = 'off';
        input.addEventListener('focus', () => state.activeTextInput = input);

        dom.clozeSentenceContainerEl.append(input);
        dom.clozeSentenceContainerEl.append(document.createTextNode(cloze_parts[1]));
        dom.checkClozeButton.onclick = () => {
            processAnswer(vergleicheAntwort(input.value, correctAnswer), correctAnswer);
            input.disabled = true;
        };
        input.onkeydown = (event) => { if (event.key === 'Enter' && !dom.checkClozeButton.disabled) { event.preventDefault(); dom.checkClozeButton.click(); } };
        setTimeout(() => {
            input.focus();
            state.activeTextInput = input;
        }, 100);
    } else {
        dom.clozeSentenceContainerEl.textContent = 'Für dieses Wort ist kein Lückentext verfügbar.';
        dom.checkClozeButton.onclick = null;
    }
}

export function setupSentenceTranslationEnDeMode(dom, state, processAnswer) {
    // ===== KORREKTUR =====
    dom.checkSentenceButton.disabled = false;
    
    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'flex'; // Umlaut-Buttons einblenden
    dom.sentenceUiEl.style.display = 'block';
    dom.questionDisplayEl.textContent = state.currentWordData.example_en;
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'none';
    
    const fullGermanSentence = state.currentWordData.example_de;
    const correctWords = splitSentence(fullGermanSentence);
    
    dom.sentenceWordInputContainerEl.innerHTML = '';
    
    const handleEnter = (event) => {
        if (event.key === 'Enter' && !dom.checkSentenceButton.disabled) { event.preventDefault(); dom.checkSentenceButton.click(); }
    };

    const wordsForLayout = splitSentence(fullGermanSentence.replace(/[.!?]$/, ''));
    wordsForLayout.forEach((word) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'word-input-box input-field';
        input.style.width = `${Math.max(word.length, 3) + 2}ch`;
        input.addEventListener('keydown', handleEnter);
        input.addEventListener('focus', () => state.activeTextInput = input);
        dom.sentenceWordInputContainerEl.appendChild(input);
    });

    dom.checkSentenceButton.onclick = () => {
        const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input');
        let allCorrect = true;

        if (inputs.length !== correctWords.length) {
             allCorrect = false;
        }

        inputs.forEach((input, index) => {
            const userAnswer = input.value;
            const correctAnswer = correctWords[index] || ""; 
            const isWordCorrect = vergleicheAntwort(userAnswer, correctAnswer);

            input.classList.remove('correct-user-input', 'incorrect-user-input');
            if (isWordCorrect) {
                input.classList.add('correct-user-input');
            } else {
                input.classList.add('incorrect-user-input');
                allCorrect = false;
            }
        });
        
        processAnswer(allCorrect, fullGermanSentence);
        inputs.forEach(input => input.disabled = true);
        dom.checkSentenceButton.disabled = true;
    };

    if (dom.sentenceWordInputContainerEl.firstChild) {
        setTimeout(() => {
            dom.sentenceWordInputContainerEl.firstChild.focus();
            state.activeTextInput = dom.sentenceWordInputContainerEl.firstChild;
        }, 100);
    }
}