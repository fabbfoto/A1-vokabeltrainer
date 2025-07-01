// ui-modes.ts - TypeScript Version mit vollständiger Type-Safety

import { vergleicheAntwort, shuffleArray, speak, parseNounString, splitSentence } from './helfer';

// Type Definitions
interface Word {
    id: string;
    german: string;
    english: string;
    artikel?: string;
    plural?: string;
    wortart?: string;
    nomen_notation?: string;
    example_de?: any[] | string;
    example_en?: string;
    cloze_parts?: string[];
    cloze_answers?: string[];
    [key: string]: any;
}

interface TrainerState {
    currentWordData: Word;
    activeTextInput: HTMLInputElement | null;
    [key: string]: any;
}

interface DOMElements {
    // Multiple Choice
    mcUiEl: HTMLElement;
    mcAnswersContainerEl: HTMLElement;
    questionDisplayEl: HTMLElement;
    exampleSentenceDisplayEl: HTMLElement;
    audioWordButtonEl: HTMLButtonElement;
    audioSentenceButtonEl: HTMLButtonElement;
    wordLineContainerEl: HTMLElement;
    sentenceLineContainerEl: HTMLElement;
    SVG_SPEAKER_ICON: string;
    
    // Spelling Mode
    spellingModeUiEl: HTMLElement;
    checkSpellingButton: HTMLButtonElement;
    singleInputContainerEl: HTMLElement;
    spellingInputSingleEl: HTMLInputElement;
    nounInputContainerEl: HTMLElement;
    spellingInputNoun1El: HTMLInputElement;
    spellingInputNoun2El: HTMLInputElement;
    umlautButtonsContainerEl?: HTMLElement;
    umlautButtonsContainer?: HTMLElement;
    
    // Cloze Mode
    clozeUiEl: HTMLElement;
    checkClozeButton: HTMLButtonElement;
    clozeHintContainerEl: HTMLElement;
    clozeSentenceContainerEl: HTMLElement;
    
    // Sentence Translation Mode
    sentenceUiEl?: HTMLElement;
    sentenceTranslationUiEl?: HTMLElement;
    checkSentenceButton: HTMLButtonElement;
    sentenceWordInputContainerEl: HTMLElement;
    
    [key: string]: any;
}

type ProcessAnswerFunction = (isCorrect: boolean, correctAnswer: string) => void;

// Lokale insertTextAtCursor Funktion
function insertTextAtCursor(inputElement: HTMLInputElement | null, text: string): void {
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

export function setupMcDeEnMode(
    dom: DOMElements, 
    state: TrainerState, 
    alleVokabeln: Word[], 
    processAnswer: ProcessAnswerFunction
): void {
    dom.mcUiEl.style.display = 'block';
    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'none';
    
    const germanWordForDisplay = state.currentWordData.german || "";
    let displayGermanWord = germanWordForDisplay;
    
    if (state.currentWordData.nomen_notation && typeof parseNounString === 'function') {
        const parsed = parseNounString(state.currentWordData.nomen_notation); 
        if (parsed) {
            displayGermanWord = parsed.isPluralOnly 
                ? `die ${parsed.singular} (Pl.)` 
                : `${{ 'r': 'der', 'e': 'die', 's': 'das' }[parsed.genus] || ''} ${parsed.singular}, ${parsed.pluralInfo}`;
        }
    }

    dom.questionDisplayEl.textContent = displayGermanWord;

    // Anzeige des Beispielsatzes (ggf. mit Kasus-Farben)
    dom.exampleSentenceDisplayEl.innerHTML = '';
    if (Array.isArray(state.currentWordData.example_de)) {
        const kasusColorMap: Record<string, string> = {
            nominativ: 'text-green-600',
            akkusativ: 'text-blue-600',
            dativ: 'text-red-600',
            genitiv: 'text-yellow-600',
            verb: 'text-pink-600',
            none: ''
        };

        state.currentWordData.example_de.forEach((part: any) => {
            const span = document.createElement('span');
            span.textContent = part.text;
            if (part.kasus && part.kasus !== 'none') {
                span.className = kasusColorMap[part.kasus] || '';
            }
            dom.exampleSentenceDisplayEl.appendChild(span);
        });
    } else {
        dom.exampleSentenceDisplayEl.textContent = state.currentWordData.example_de as string;
    }

    dom.audioWordButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    dom.audioWordButtonEl.onclick = () => speak(germanWordForDisplay);
    dom.audioSentenceButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    
    const sentenceForSpeech = Array.isArray(state.currentWordData.example_de)
        ? state.currentWordData.example_de.map((part: any) => part.text).join('')
        : state.currentWordData.example_de;
    dom.audioSentenceButtonEl.onclick = () => speak(sentenceForSpeech as string, 'de-DE');

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

export function setupSpellingMode(
    dom: DOMElements, 
    state: TrainerState, 
    alleVokabeln: Word[], 
    processAnswer: ProcessAnswerFunction
): void {
    console.log('[setupSpellingMode] Starting - TypeScript version');
    
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
        
        // Button Click Handler
        dom.checkSpellingButton.onclick = () => {
            console.log('[setupSpellingMode] Noun button clicked');
            const correctAnswerSingular = `${state.currentWordData.artikel} ${state.currentWordData.german}`;
            const correctAnswerPluralWord = state.currentWordData.plural!;
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
        
        // Enter Key Handlers
        dom.spellingInputNoun1El.onkeydown = (event: KeyboardEvent) => {
            if (event.key === 'Enter' && !dom.checkSpellingButton.disabled) {
                event.preventDefault();
                dom.checkSpellingButton.click();
            }
        };
        dom.spellingInputNoun2El.onkeydown = (event: KeyboardEvent) => {
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
        
        // Button Click Handler
        dom.checkSpellingButton.onclick = () => {
            console.log('[setupSpellingMode] Single button clicked');
            const correctAnswer = state.currentWordData.german;
            const isCorrect = vergleicheAntwort(dom.spellingInputSingleEl.value.trim(), correctAnswer);
            dom.spellingInputSingleEl.classList.add(isCorrect ? 'correct-user-input' : 'incorrect-user-input');
            console.log('[setupSpellingMode] Calling processAnswer with:', isCorrect);
            processAnswer(isCorrect, correctAnswer);
        };
        
        dom.spellingInputSingleEl.onkeydown = (event: KeyboardEvent) => {
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
            (button as HTMLButtonElement).onclick = (event: MouseEvent) => {
                event.preventDefault();
                if (state.activeTextInput) {
                    const char = event.shiftKey ? button.textContent!.toUpperCase() : button.textContent!;
                    insertTextAtCursor(state.activeTextInput, char);
                } else {
                    console.log('[setupSpellingMode] No active input for umlaut');
                }
            };
        });
    }
    
    console.log('[setupSpellingMode] Setup complete');
}

export function setupClozeAdjDeMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    dom.checkClozeButton.disabled = false;
    
    const umlautContainer = dom.umlautButtonsContainerEl || dom.umlautButtonsContainer;
    if (umlautContainer) umlautContainer.style.display = 'flex';
    
    dom.clozeUiEl.style.display = 'block';
    dom.questionDisplayEl.textContent = '';
    dom.exampleSentenceDisplayEl.textContent = '';
    dom.wordLineContainerEl.style.display = 'none';
    dom.sentenceLineContainerEl.style.display = 'none';
    
    const { cloze_parts, cloze_answers, english } = state.currentWordData;
    const correctAnswer = cloze_answers?.[0] || "";
    
    dom.clozeSentenceContainerEl.innerHTML = '';
    
    if (cloze_parts && cloze_parts.length === 2 && correctAnswer) {
        dom.clozeHintContainerEl.textContent = english || "";
        dom.clozeHintContainerEl.style.display = 'block';
        
        dom.clozeSentenceContainerEl.append(document.createTextNode(cloze_parts[0]));
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'inline-block w-48 text-center border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent transition';
        input.autocapitalize = 'off';
        input.addEventListener('focus', () => state.activeTextInput = input);

        dom.clozeSentenceContainerEl.append(input);
        dom.clozeSentenceContainerEl.append(document.createTextNode(cloze_parts[1]));
        
        const handleCheckAnswer = (): void => {
            const isCorrect = vergleicheAntwort(input.value, correctAnswer);
            input.classList.add(isCorrect ? 'correct-user-input' : 'incorrect-user-input');
            processAnswer(isCorrect, correctAnswer);
        };
        
        const handleEnter = (event: KeyboardEvent): void => {
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

export function setupSentenceTranslationEnDeMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    dom.checkSentenceButton.disabled = false;
    
    const umlautContainer = dom.umlautButtonsContainerEl || dom.umlautButtonsContainer;
    if (umlautContainer) umlautContainer.style.display = 'flex';
    
    const sentenceUi = dom.sentenceTranslationUiEl || dom.sentenceUiEl;
    if (sentenceUi) sentenceUi.style.display = 'block';
    
    dom.questionDisplayEl.textContent = state.currentWordData.example_en || "";
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'none';

    let fullGermanSentence = "";
    if (Array.isArray(state.currentWordData.example_de)) {
        fullGermanSentence = state.currentWordData.example_de.map((part: any) => part.text).join("");
    } else {
        fullGermanSentence = state.currentWordData.example_de as string || "";
    }

    const wordsForLayout = splitSentence(fullGermanSentence.replace(/[.,;:!?'"„"»«]+$/, ''));
    const correctWords = splitSentence(fullGermanSentence);

    dom.sentenceWordInputContainerEl.innerHTML = '';

    const handleEnter = (event: KeyboardEvent): void => {
        if (event.key === 'Enter' && !dom.checkSentenceButton.disabled) {
            event.preventDefault();
            handleCheckAnswer();
        }
    };

    wordsForLayout.forEach((word) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'border border-gray-300 rounded-md text-center p-2 transition';
        input.style.width = `${Math.max(word.length, 3) + 2}ch`;
        input.addEventListener('keydown', handleEnter);
        input.addEventListener('focus', () => state.activeTextInput = input);
        dom.sentenceWordInputContainerEl.appendChild(input);
    });

    const handleCheckAnswer = (): void => {
        const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
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
            (dom.sentenceWordInputContainerEl.firstChild as HTMLInputElement).focus();
            state.activeTextInput = dom.sentenceWordInputContainerEl.firstChild as HTMLInputElement;
        }, 100);
    }
}

// Alias für Rückwärtskompatibilität
export const setupTypeDeAdjMode = setupSpellingMode;
export const setupClozeMode = setupClozeAdjDeMode;
export const setupSentenceTranslationMode = setupSentenceTranslationEnDeMode;