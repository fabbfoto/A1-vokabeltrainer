// ui-modes.js - Vollständig korrigierte Version

import { vergleicheAntwort, shuffleArray, speak, parseNounString, splitSentence } from './helfer';

// Lokale insertTextAtCursor Funktion
function insertTextAtCursor(inputElement, text) {
    if (!inputElement) return;
    const start = inputElement.selectionStart || 0;
    const end = inputElement.selectionEnd || 0;
    const oldValue = inputElement.value;
    inputElement.value = oldValue.substring(0, start) + text + oldValue.substring(end);
    inputElement.selectionStart = inputElement.selectionEnd = start + text.length;
    inputElement.focus();
    const event = new Event('input', { bubbles: true, cancelable: true });
    inputElement.dispatchEvent(event);
}

export function setupMcDeEnMode(dom, state, alleVokabeln, processAnswer) {
    dom.mcUiEl.style.display = 'block';
    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'none';
    
    const germanWordForDisplay = state.currentWordData.german || "";
    let displayGermanWord = germanWordForDisplay;
    if (state.currentWordData.nomen_notation && typeof parseNounString === 'function') {
        const parsed = parseNounString(state.currentWordData.nomen_notation); 
        if (parsed) {
            displayGermanWord = parsed.isPluralOnly ? `die ${parsed.singular} (Pl.)` : `${{ 'r': 'der', 'e': 'die', 's': 'das' }[parsed.genus] || ''} ${parsed.singular}, ${parsed.pluralInfo}`;
        }
    }

    dom.questionDisplayEl.textContent = displayGermanWord;

    // Anzeige des Beispielsatzes (ggf. mit Kasus-Farben)
    dom.exampleSentenceDisplayEl.innerHTML = '';
    if (Array.isArray(state.currentWordData.example_de)) {
        const kasusColorMap = {
            nominativ: 'text-green-600',
            akkusativ: 'text-blue-600',
            dativ: 'text-red-600',
            genitiv: 'text-yellow-600',
            verb: 'text-pink-600',
            none: ''
        };

        state.currentWordData.example_de.forEach(part => {
            const span = document.createElement('span');
            span.textContent = part.text;
            if (part.kasus && part.kasus !== 'none') {
                span.className = kasusColorMap[part.kasus] || '';
            }
            dom.exampleSentenceDisplayEl.appendChild(span);
        });
    } else {
        dom.exampleSentenceDisplayEl.textContent = state.currentWordData.example_de;
    }

    dom.audioWordButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    dom.audioWordButtonEl.onclick = () => speak(germanWordForDisplay);
    dom.audioSentenceButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    
    const sentenceForSpeech = Array.isArray(state.currentWordData.example_de)
        ? state.currentWordData.example_de.map(part => part.text).join('')
        : state.currentWordData.example_de;
    dom.audioSentenceButtonEl.onclick = () => speak(sentenceForSpeech, 'de-DE');

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

export function setupSpellingMode(dom, state, alleVokabeln, processAnswer) {
    console.log('[setupSpellingMode] Starting - copying pattern from working modes...');
    
    // Kopiere das exakte Muster von setupClozeAdjDeMode (das funktioniert)
    dom.checkSpellingButton.disabled = false;
    
    const umlautContainer = dom.umlautButtonsContainerEl || dom.umlautButtonsContainer;
    if (umlautContainer) umlautContainer.style.display = 'flex';
    
    dom.spellingModeUiEl.style.display = 'block';
    dom.questionDisplayEl.textContent = (state.currentWordData.english || "").split(',')[0].trim();
    dom.exampleSentenceDisplayEl.textContent = state.currentWordData.example_en || "";
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'flex';
    
    // Reset styles
    [dom.spellingInputSingleEl, dom.spellingInputNoun1El, dom.spellingInputNoun2El].forEach(input => {
        if(input) input.classList.remove('correct-user-input', 'incorrect-user-input');
    });
    
    const isNounWithPlural = state.currentWordData && typeof state.currentWordData.plural !== 'undefined';
    console.log('[setupSpellingMode] Is noun:', isNounWithPlural);
    
    if (isNounWithPlural) {
        // Nomen-Modus: Zwei Felder
        dom.nounInputContainerEl.classList.remove('hidden');
        dom.singleInputContainerEl.classList.add('hidden');
        
        dom.spellingInputNoun1El.value = '';
        dom.spellingInputNoun1El.disabled = false;
        dom.spellingInputNoun2El.value = '';
        dom.spellingInputNoun2El.disabled = false;
        
        // Focus Handler
        dom.spellingInputNoun1El.addEventListener('focus', () => state.activeTextInput = dom.spellingInputNoun1El);
        dom.spellingInputNoun2El.addEventListener('focus', () => state.activeTextInput = dom.spellingInputNoun2El);
        
        // EXAKT wie Cloze-Modus: direkte onclick Zuweisung
        dom.checkSpellingButton.onclick = () => {
            console.log('[setupSpellingMode] Noun button clicked');
            const correctAnswerSingular = `${state.currentWordData.artikel} ${state.currentWordData.german}`;
            const correctAnswerPluralWord = state.currentWordData.plural;
            const userInputSingular = dom.spellingInputNoun1El.value.trim();
            const userInputPlural = dom.spellingInputNoun2El.value.trim();
            const isSingularCorrect = vergleicheAntwort(userInputSingular, correctAnswerSingular);
            const isPluralCorrect = vergleicheAntwort(userInputPlural, correctAnswerPluralWord);
            dom.spellingInputNoun1El.classList.add(isSingularCorrect ? 'correct-user-input' : 'incorrect-user-input');
            dom.spellingInputNoun2El.classList.add(isPluralCorrect ? 'correct-user-input' : 'incorrect-user-input');
            const isOverallCorrect = isSingularCorrect && isPluralCorrect;
            const combinedCorrectAnswer = `${correctAnswerSingular} / ${correctAnswerPluralWord}`;
            console.log('[setupSpellingMode] Calling processAnswer with:', isOverallCorrect);
            processAnswer(isOverallCorrect, combinedCorrectAnswer);
        };
        
        // EXAKT wie Cloze-Modus: onkeydown statt addEventListener
        dom.spellingInputNoun1El.onkeydown = (event) => {
            if (event.key === 'Enter' && !dom.checkSpellingButton.disabled) {
                event.preventDefault();
                dom.checkSpellingButton.click();
            }
        };
        dom.spellingInputNoun2El.onkeydown = (event) => {
            if (event.key === 'Enter' && !dom.checkSpellingButton.disabled) {
                event.preventDefault();
                dom.checkSpellingButton.click();
            }
        };
        
        // Focus setzen
        setTimeout(() => {
            dom.spellingInputNoun1El.focus();
            state.activeTextInput = dom.spellingInputNoun1El;
        }, 100);

    } else {
        // Einzelwort-Modus
        dom.singleInputContainerEl.classList.remove('hidden');
        dom.nounInputContainerEl.classList.add('hidden');
        
        dom.spellingInputSingleEl.value = '';
        dom.spellingInputSingleEl.disabled = false;
        dom.spellingInputSingleEl.addEventListener('focus', () => state.activeTextInput = dom.spellingInputSingleEl);
        
        // EXAKT wie Cloze-Modus
        dom.checkSpellingButton.onclick = () => {
            console.log('[setupSpellingMode] Single button clicked');
            const correctAnswer = state.currentWordData.german;
            const isCorrect = vergleicheAntwort(dom.spellingInputSingleEl.value.trim(), correctAnswer);
            dom.spellingInputSingleEl.classList.add(isCorrect ? 'correct-user-input' : 'incorrect-user-input');
            console.log('[setupSpellingMode] Calling processAnswer with:', isCorrect);
            processAnswer(isCorrect, correctAnswer);
        };
        
        dom.spellingInputSingleEl.onkeydown = (event) => {
            if (event.key === 'Enter' && !dom.checkSpellingButton.disabled) {
                event.preventDefault();
                dom.checkSpellingButton.click();
            }
        };
        
        setTimeout(() => {
            dom.spellingInputSingleEl.focus();
            state.activeTextInput = dom.spellingInputSingleEl;
        }, 100);
    }
    
    // Umlaut-Buttons Setup (vereinfacht)
    if (umlautContainer) {
        const buttons = umlautContainer.querySelectorAll('button');
        buttons.forEach(button => {
            button.onclick = (event) => {
                event.preventDefault();
                if (state.activeTextInput) {
                    const char = event.shiftKey ? button.textContent.toUpperCase() : button.textContent;
                    insertTextAtCursor(state.activeTextInput, char);
                } else {
                    console.log('[setupSpellingMode] No active input for umlaut');
                }
            };
        });
    }
    
    console.log('[setupSpellingMode] Setup complete');
}

export function setupClozeAdjDeMode(dom, state, processAnswer) {
    // Button wieder aktivieren
    dom.checkClozeButton.disabled = false;
    
    // Umlaut-Buttons korrekt referenzieren
    const umlautContainer = dom.umlautButtonsContainerEl || dom.umlautButtonsContainer;
    if (umlautContainer) umlautContainer.style.display = 'flex';
    
    dom.clozeUiEl.style.display = 'block';
    dom.questionDisplayEl.textContent = '';
    dom.exampleSentenceDisplayEl.textContent = '';
    dom.wordLineContainerEl.style.display = 'none';
    dom.sentenceLineContainerEl.style.display = 'none';
    
    const { cloze_parts, cloze_answers, english } = state.currentWordData;
    const correctAnswer = cloze_answers?.[0] || "";
    
    // Container zurücksetzen
    dom.clozeSentenceContainerEl.innerHTML = '';
    
    if (cloze_parts && cloze_parts.length === 2 && correctAnswer) {
        // Hint anzeigen
        dom.clozeHintContainerEl.textContent = english;
        dom.clozeHintContainerEl.style.display = 'block';
        
        // Satz zusammenbauen
        dom.clozeSentenceContainerEl.append(document.createTextNode(cloze_parts[0]));
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'inline-block w-48 text-center border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent transition';
        input.autocapitalize = 'off';
        input.addEventListener('focus', () => state.activeTextInput = input);

        dom.clozeSentenceContainerEl.append(input);
        dom.clozeSentenceContainerEl.append(document.createTextNode(cloze_parts[1]));
        
        const handleCheckAnswer = () => {
            const isCorrect = vergleicheAntwort(input.value, correctAnswer);
            input.classList.add(isCorrect ? 'correct-user-input' : 'incorrect-user-input');
            processAnswer(isCorrect, correctAnswer);
        };
        
        const handleEnter = (event) => {
            if (event.key === 'Enter' && !dom.checkClozeButton.disabled) {
                event.preventDefault();
                handleCheckAnswer();
            }
        };
        
        input.addEventListener('keydown', handleEnter);
        dom.checkClozeButton.onclick = handleCheckAnswer;
        
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
    // Button wieder aktivieren
    dom.checkSentenceButton.disabled = false;
    
    // Umlaut-Buttons korrekt referenzieren
    const umlautContainer = dom.umlautButtonsContainerEl || dom.umlautButtonsContainer;
    if (umlautContainer) umlautContainer.style.display = 'flex';
    
    // Korrekte UI-Referenz verwenden
    const sentenceUi = dom.sentenceTranslationUiEl || dom.sentenceUiEl;
    if (sentenceUi) sentenceUi.style.display = 'block';
    
    dom.questionDisplayEl.textContent = state.currentWordData.example_en;
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'none';

    // Deutschen Satz für Vergleich vorbereiten
    let fullGermanSentence = "";
    if (Array.isArray(state.currentWordData.example_de)) {
        fullGermanSentence = state.currentWordData.example_de.map(part => part.text).join("");
    } else {
        fullGermanSentence = state.currentWordData.example_de || "";
    }

    // Wörter für Layout extrahieren (ohne Satzzeichen am Ende)
    const wordsForLayout = splitSentence(fullGermanSentence.replace(/[.,;:!?'"„"»«]+$/, ''));

    // Wörter für korrekte Antwort (mit Satzzeichen)
    const correctWords = splitSentence(fullGermanSentence);

    // Container leeren und Eingabefelder erstellen
    dom.sentenceWordInputContainerEl.innerHTML = '';

    const handleEnter = (event) => {
        if (event.key === 'Enter' && !dom.checkSentenceButton.disabled) {
            event.preventDefault();
            handleCheckAnswer();
        }
    };

    // Eingabefelder für jedes Wort erstellen
    wordsForLayout.forEach((word) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'border border-gray-300 rounded-md text-center p-2 transition';
        input.style.width = `${Math.max(word.length, 3) + 2}ch`;
        input.addEventListener('keydown', handleEnter);
        input.addEventListener('focus', () => state.activeTextInput = input);
        dom.sentenceWordInputContainerEl.appendChild(input);
    });

    const handleCheckAnswer = () => {
        const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input');
        let allCorrect = true;

        if (inputs.length !== correctWords.length) {
            allCorrect = false;
        }

        inputs.forEach((input, index) => {
            const userAnswer = input.value;
            const correctAnswer = correctWords[index] || "";
            const isWordCorrect = vergleicheAntwort(userAnswer, correctAnswer);
            
            input.classList.remove('bg-green-100', 'border-green-500', 'bg-red-100', 'border-red-500');
            if (isWordCorrect) {
                input.classList.add('bg-green-100', 'border-green-500');
            } else {
                input.classList.add('bg-red-100', 'border-red-500');
                allCorrect = false;
            }
        });
        
        processAnswer(allCorrect, fullGermanSentence);
    };

    dom.checkSentenceButton.onclick = handleCheckAnswer;

    if (dom.sentenceWordInputContainerEl.firstChild) {
        setTimeout(() => {
            dom.sentenceWordInputContainerEl.firstChild.focus();
            state.activeTextInput = dom.sentenceWordInputContainerEl.firstChild;
        }, 100);
    }
}

// Alias für Rückwärtskompatibilität
export const setupTypeDeAdjMode = setupSpellingMode;
export const setupClozeMode = setupClozeAdjDeMode;
export const setupSentenceTranslationMode = setupSentenceTranslationEnDeMode;