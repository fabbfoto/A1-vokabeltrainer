// ui-modes.js - Bugfix für den deaktivierten "Auswerten"-Button

import { vergleicheAntwort, shuffleArray, speak, parseNounString, splitSentence } from './helfer';
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

    // Anzeige des deutschen Wortes (Nomen mit Artikel)
    dom.questionDisplayEl.textContent = displayGermanWord;

    // Anzeige des Beispielsatzes (ggf. mit Kasus-Farben)
    dom.exampleSentenceDisplayEl.innerHTML = ''; // Vorherigen Inhalt löschen
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

    // dom.exampleSentenceDisplayEl.textContent = state.currentWordData.example_de; // Diese Zeile ist redundant, wenn Array-Format verwendet wird
    dom.audioWordButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    dom.audioWordButtonEl.onclick = () => speak(germanWordForDisplay);
    dom.audioSentenceButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    // KORREKTUR: Stelle sicher, dass ein String an speak übergeben wird
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
        button.className = 'w-full border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors hover:bg-gray-200 disabled:opacity-50';
        button.textContent = option;
        button.onclick = () => processAnswer(option === correctAnswerEN, correctAnswerEN);
        dom.mcAnswersContainerEl.appendChild(button);
    });
}

export function setupTypeDeAdjMode(dom, state, processAnswer) {
    dom.spellingModeUiEl.style.display = 'block';
    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'flex'; // Umlaut-Buttons einblenden
    dom.checkSpellingButton.disabled = false; // ===== KORREKTUR =====
    dom.questionDisplayEl.textContent = state.currentWordData.english;
    dom.exampleSentenceDisplayEl.textContent = '';
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'none';
    
    // Reset input visibility
    dom.singleInputContainerEl.style.display = 'none';
    dom.nounInputContainerEl.style.display = 'none';
    dom.spellingInputSingleEl.value = '';
    dom.spellingInputNoun1El.value = '';
    dom.spellingInputNoun2El.value = '';
    
    let correctAnswer = "";
    let inputToFocus = null;
    
    // Prüfe auf nomen_notation
    if (state.currentWordData.nomen_notation && typeof parseNounString === 'function') {
        dom.nounInputContainerEl.style.display = 'flex';
        inputToFocus = dom.spellingInputNoun1El;
        const parsed = parseNounString(state.currentWordData.nomen_notation);
        if (parsed) {
            if (parsed.isPluralOnly) {
                correctAnswer = `die ${parsed.singular}`;
            } else {
                const genus = { 'r': 'der', 'e': 'die', 's': 'das' }[parsed.genus] || parsed.genus;
                correctAnswer = `${genus} ${parsed.singular}`;
            }
        } else {
            correctAnswer = state.currentWordData.german;
        }
    } else {
        // Für andere Wortarten oder wenn parseNounString nicht verfügbar ist
        dom.singleInputContainerEl.style.display = 'block';
        inputToFocus = dom.spellingInputSingleEl;
        correctAnswer = state.currentWordData.german;
    }
    
    const handleCheckAnswer = () => {
        let userAnswer = "";
        if (dom.nounInputContainerEl.style.display === 'flex') {
            const artikel = dom.spellingInputNoun1El.value.trim();
            const nomen = dom.spellingInputNoun2El.value.trim();
            userAnswer = artikel && nomen ? `${artikel} ${nomen}` : "";
        } else {
            userAnswer = dom.spellingInputSingleEl.value.trim();
        }
        
        const isCorrect = vergleicheAntwort(userAnswer, correctAnswer);
        processAnswer(isCorrect, correctAnswer);
        
        // Deaktiviere Eingabefelder nach Überprüfung
        dom.spellingInputSingleEl.disabled = true;
        dom.spellingInputNoun1El.disabled = true;
        dom.spellingInputNoun2El.disabled = true;
        dom.checkSpellingButton.disabled = true;
    };
    
    dom.checkSpellingButton.onclick = handleCheckAnswer;
    
    const handleEnter = (event) => {
        if (event.key === 'Enter' && !dom.checkSpellingButton.disabled) {
            event.preventDefault();
            dom.checkSpellingButton.click();
        }
    };
    
    // Event-Listener für alle Eingabefelder hinzufügen
    [dom.spellingInputSingleEl, dom.spellingInputNoun1El, dom.spellingInputNoun2El].forEach(input => {
        input.addEventListener('keydown', handleEnter);
        input.addEventListener('focus', () => state.activeTextInput = input);
    });

    // Fokus auf das korrekte Eingabefeld setzen
    if (inputToFocus) {
        setTimeout(() => {
            inputToFocus.focus();
            state.activeTextInput = inputToFocus;
        }, 100);
    }
}

export function setupClozeAdjDeMode(dom, state, processAnswer) {
    dom.checkClozeButton.disabled = false; // ===== KORREKTUR =====
    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'flex'; // Umlaut-Buttons einblenden
    dom.clozeUiEl.style.display = 'block';
    dom.questionDisplayEl.textContent = '';
    dom.exampleSentenceDisplayEl.textContent = '';
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
        input.className = 'inline-block w-48 text-center border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent transition';
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
    dom.checkSentenceButton.disabled = false ;
    
    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'flex'; // Umlaut-Buttons einblenden
    dom.sentenceUiEl.style.display = 'block';
    dom.questionDisplayEl.textContent = state.currentWordData.example_en;
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'none';
    
    let fullGermanSentence = "";
    if (Array.isArray(state.currentWordData.example_de)) {
        // Rekonstruiere den Satz aus dem Array-Format
        fullGermanSentence = state.currentWordData.example_de.map(part => part.text).join("");
    } else {
        fullGermanSentence = state.currentWordData.example_de || "";
    }
    const correctWords = splitSentence(fullGermanSentence);
    
    dom.sentenceWordInputContainerEl.innerHTML = '';

    const handleEnter = (event) => {
        if (event.key === 'Enter' && !dom.checkSentenceButton.disabled) { event.preventDefault(); dom.checkSentenceButton.click(); } 
    };

    const wordsForLayout = splitSentence(fullGermanSentence.replace(/[.!?]$/, ''));
    wordsForLayout.forEach((word) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'border border-gray-300 rounded-md text-center p-2 transition';
        input.style.width = `${Math.max(word.length, 3) + 2}ch` ;
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
            const userAnswer = input.value ;
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
// Am Ende der Datei shared/utils/ui-modes.js, füge diese Zeile hinzu:

// Alias für Rückwärtskompatibilität
export const setupSpellingMode = setupTypeDeAdjMode;
export const setupClozeMode = setupClozeAdjDeMode;
export const setupSentenceTranslationMode = setupSentenceTranslationEnDeMode;