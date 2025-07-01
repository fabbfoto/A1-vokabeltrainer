// ui-modes.ts - TypeScript Version mit globalen Types
// Alle Lernmodus-Setup-Funktionen mit vollständiger Type-Safety

// ✅ IMPORT GLOBALE TYPES (statt lokale Definitionen)
import type { 
    Word, 
    TrainerState, 
    ModeId
} from '../types/index';

// Import DOMElements from the correct location to avoid conflicts
import type { DOMElements } from '../../dom';

// Import der Helfer-Funktionen
import { vergleicheAntwort, shuffleArray, speak, parseNounString, splitSentence } from './helfer';

// ✅ KORREKTE PROCESS-ANSWER-FUNCTION TYPE
type ProcessAnswerFunction = (isCorrect: boolean, correctAnswer?: string, timeSpent?: number) => void;

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

// ✅ MULTIPLE CHOICE MODE - mit korrekten Property-Namen
export function setupMultipleChoiceMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    console.log('[setupMultipleChoiceMode] Starting - korrekte globale Types');
    
    // UI Setup
    dom.mcUiEl.style.display = 'block';
    if (dom.umlautButtonsContainerEl) dom.umlautButtonsContainerEl.style.display = 'none';
    
    // ✅ KORREKT: currentWord statt currentWordData
    const currentWord = state.currentWord;
    if (!currentWord) {
        console.error('[setupMultipleChoiceMode] Kein currentWord gefunden!');
        return;
    }
    
    const germanWordForDisplay = currentWord.german || "";
    let displayGermanWord = germanWordForDisplay;
    
    // Nomen-Notation handling
    if ('nomen_notation' in currentWord && typeof parseNounString === 'function') {
        const parsed = parseNounString((currentWord as any).nomen_notation); 
        if (parsed) {
            displayGermanWord = parsed.isPluralOnly 
                ? `die ${parsed.singular} (Pl.)` 
                : `${{ 'r': 'der', 'e': 'die', 's': 'das' }[parsed.genus] || ''} ${parsed.singular}, ${parsed.pluralInfo}`;
        }
    }

    dom.questionDisplayEl.textContent = displayGermanWord;

    // Beispielsatz anzeigen
    if ('example_de' in currentWord) {
        const exampleDe = (currentWord as any).example_de;
        if (Array.isArray(exampleDe)) {
            dom.exampleSentenceDisplayEl.innerHTML = exampleDe.map(part => 
                `<span class="kasus-${part.kasus || 'none'}">${part.text}</span>`
            ).join('');
        } else if (typeof exampleDe === 'string') {
            dom.exampleSentenceDisplayEl.textContent = exampleDe;
        }
    }

    // Audio-Buttons setup
    dom.audioWordButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    dom.audioWordButtonEl.onclick = () => speak(currentWord.german);
    
    dom.audioSentenceButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    dom.audioSentenceButtonEl.onclick = () => {
        if ('example_de' in currentWord) {
            const exampleDe = (currentWord as any).example_de;
            if (Array.isArray(exampleDe)) {
                speak(exampleDe.map(part => part.text).join(''));
            } else if (typeof exampleDe === 'string') {
                speak(exampleDe);
            }
        }
    };

    // Container visibility
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'flex';

    // Multiple Choice Antworten generieren
    generateMultipleChoiceAnswers(dom, state, processAnswer);
}

function generateMultipleChoiceAnswers(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    dom.mcAnswersContainerEl.innerHTML = '';
    
    const currentWord = state.currentWord;
    if (!currentWord) return;
    
    const correctAnswerEN = currentWord.english;
    const wrongAnswers: string[] = [];
    
    // ✅ KORREKT: shuffledWordsForMode statt shuffledVocabForMode
    const shuffledWords = shuffleArray([...state.shuffledWordsForMode]);
    
    for (const word of shuffledWords) {
        if (word.id !== currentWord.id && wrongAnswers.length < 3) {
            wrongAnswers.push(word.english);
        }
    }
    
    // Fallback falls nicht genug falsche Antworten
    while (wrongAnswers.length < 3) {
        wrongAnswers.push(`Falsche Antwort ${wrongAnswers.length + 1}`);
    }
    
    const allAnswers = [correctAnswerEN, ...wrongAnswers];
    const shuffledAnswers = shuffleArray(allAnswers);
    
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'mc-answer-button w-full p-4 text-left border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors';
        button.textContent = answer;
        button.onclick = () => {
            const isCorrect = answer === correctAnswerEN;
            processAnswer(isCorrect, correctAnswerEN);
        };
        dom.mcAnswersContainerEl.appendChild(button);
    });
}

// ✅ SPELLING MODE - mit korrekten Property-Namen
export function setupSpellingMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    console.log('[setupSpellingMode] Starting - globale Types');
    
    dom.checkSpellingButton.disabled = false;
    
    const umlautContainer = dom.umlautButtonsContainerEl;
    if (umlautContainer) umlautContainer.style.display = 'flex';
    
    dom.spellingModeUiEl.style.display = 'block';
    
    // ✅ KORREKT: currentWord statt currentWordData
    const currentWord = state.currentWord;
    if (!currentWord) {
        console.error('[setupSpellingMode] Kein currentWord gefunden!');
        return;
    }
    
    dom.questionDisplayEl.textContent = currentWord.english.split(',')[0].trim();
    
    if ('example_en' in currentWord) {
        dom.exampleSentenceDisplayEl.textContent = (currentWord as any).example_en || "";
    }
    
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'flex';
    
    // Reset styles
    [dom.spellingInputSingleEl, dom.spellingInputNoun1El, dom.spellingInputNoun2El].forEach(input => {
        if(input) input.classList.remove('correct-user-input', 'incorrect-user-input');
    });
    
    // Check if noun with plural
    const isNounWithPlural = 'plural' in currentWord && currentWord.plural !== undefined;
    
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
            const artikel = 'artikel' in currentWord ? (currentWord as any).artikel : '';
            const correctAnswerSingular = `${artikel} ${currentWord.german}`;
            const correctAnswerPluralWord = (currentWord as any).plural!;
            
            const userInputSingular = dom.spellingInputNoun1El.value.trim();
            const userInputPlural = dom.spellingInputNoun2El.value.trim();
            
            const isSingularCorrect = vergleicheAntwort(userInputSingular, correctAnswerSingular);
            const isPluralCorrect = vergleicheAntwort(userInputPlural, correctAnswerPluralWord);
            
            dom.spellingInputNoun1El.classList.add(isSingularCorrect ? 'correct-user-input' : 'incorrect-user-input');
            dom.spellingInputNoun2El.classList.add(isPluralCorrect ? 'correct-user-input' : 'incorrect-user-input');
            
            const isFullyCorrect = isSingularCorrect && isPluralCorrect;
            const correctAnswer = `${correctAnswerSingular} / ${correctAnswerPluralWord}`;
            
            processAnswer(isFullyCorrect, correctAnswer);
        };
    } else {
        // Single-Input-Modus
        dom.singleInputContainerEl.classList.remove('hidden');
        dom.nounInputContainerEl.classList.add('hidden');
        
        dom.spellingInputSingleEl.value = '';
        dom.spellingInputSingleEl.disabled = false;
        
        // Focus Handler
        dom.spellingInputSingleEl.addEventListener('focus', () => state.activeTextInput = dom.spellingInputSingleEl);
        
        // Button Click Handler
        dom.checkSpellingButton.onclick = () => {
            const userInput = dom.spellingInputSingleEl.value.trim();
            const correctAnswer = currentWord.german;
            const isCorrect = vergleicheAntwort(userInput, correctAnswer);
            
            dom.spellingInputSingleEl.classList.add(isCorrect ? 'correct-user-input' : 'incorrect-user-input');
            processAnswer(isCorrect, correctAnswer);
        };
    }
}

// ✅ CLOZE MODE - mit korrekten Property-Namen
export function setupClozeMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    console.log('[setupClozeMode] Starting - globale Types');
    
    dom.checkClozeButton.disabled = false;
    
    const umlautContainer = dom.umlautButtonsContainerEl;
    if (umlautContainer) umlautContainer.style.display = 'flex';
    
    dom.clozeUiEl.style.display = 'block';
    
    // ✅ KORREKT: currentWord statt currentWordData
    const currentWord = state.currentWord;
    if (!currentWord) {
        console.error('[setupClozeMode] Kein currentWord gefunden!');
        return;
    }
    
    dom.questionDisplayEl.textContent = currentWord.english;
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'none';

    // Cloze-spezifische Logik
    if ('cloze_parts' in currentWord && 'cloze_answers' in currentWord) {
        const clozeParts = (currentWord as any).cloze_parts;
        const clozeAnswers = (currentWord as any).cloze_answers;
        
        if (Array.isArray(clozeParts) && Array.isArray(clozeAnswers)) {
            generateClozeUI(dom, clozeParts, clozeAnswers, processAnswer);
        }
    }
}

function generateClozeUI(
    dom: DOMElements, 
    clozeParts: string[], 
    clozeAnswers: string[], 
    processAnswer: ProcessAnswerFunction
): void {
    dom.clozeSentenceContainerEl.innerHTML = '';
    
    clozeParts.forEach((part, index) => {
        const span = document.createElement('span');
        span.textContent = part;
        dom.clozeSentenceContainerEl.appendChild(span);
        
        if (index < clozeAnswers.length) {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'cloze-input px-2 py-1 border-2 border-gray-300 rounded mx-1';
            input.placeholder = '___';
            dom.clozeSentenceContainerEl.appendChild(input);
        }
    });
    
    dom.checkClozeButton.onclick = () => {
        const inputs = dom.clozeSentenceContainerEl.querySelectorAll('.cloze-input') as NodeListOf<HTMLInputElement>;
        let allCorrect = true;
        
        inputs.forEach((input, index) => {
            const userAnswer = input.value.trim();
            const correctAnswer = clozeAnswers[index];
            const isCorrect = vergleicheAntwort(userAnswer, correctAnswer);
            
            input.classList.add(isCorrect ? 'correct-user-input' : 'incorrect-user-input');
            if (!isCorrect) allCorrect = false;
        });
        
        processAnswer(allCorrect, clozeAnswers.join(', '));
    };
}

// ✅ SENTENCE TRANSLATION MODE - mit korrekten Property-Namen
export function setupSentenceTranslationEnDeMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    console.log('[setupSentenceTranslationEnDeMode] Starting - globale Types');
    
    dom.checkSentenceButton.disabled = false;
    
    const umlautContainer = dom.umlautButtonsContainerEl;
    if (umlautContainer) umlautContainer.style.display = 'flex';
    
    const sentenceUi = dom.sentenceUiEl;
    if (sentenceUi) sentenceUi.style.display = 'block';
    
    // ✅ KORREKT: currentWord statt currentWordData
    const currentWord = state.currentWord;
    if (!currentWord) {
        console.error('[setupSentenceTranslationEnDeMode] Kein currentWord gefunden!');
        return;
    }
    
    if ('example_en' in currentWord) {
        dom.questionDisplayEl.textContent = (currentWord as any).example_en;
    }
    
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'none';

    // Deutschen Satz für Vergleich vorbereiten
    let fullGermanSentence = "";
    if ('example_de' in currentWord) {
        const exampleDe = (currentWord as any).example_de;
        if (Array.isArray(exampleDe)) {
            fullGermanSentence = exampleDe.map(part => part.text).join("");
        } else if (typeof exampleDe === 'string') {
            fullGermanSentence = exampleDe;
        }
    }

    // Wörter für Layout extrahieren (ohne Satzzeichen am Ende)
    const wordsForLayout = splitSentence(fullGermanSentence.replace(/[.,;:!?]+$/, ''));
    
    // Sentence-Input-Container generieren
    generateSentenceInputs(dom, wordsForLayout, fullGermanSentence, processAnswer);
}

function generateSentenceInputs(
    dom: DOMElements, 
    wordsForLayout: string[], 
    fullGermanSentence: string, 
    processAnswer: ProcessAnswerFunction
): void {
    dom.sentenceWordInputContainerEl.innerHTML = '';
    
    wordsForLayout.forEach((word, index) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'sentence-word-input px-2 py-1 border-2 border-gray-300 rounded mx-1 my-1';
        input.placeholder = word;
        input.dataset.expectedWord = word;
        dom.sentenceWordInputContainerEl.appendChild(input);
    });
    
    dom.checkSentenceButton.onclick = () => {
        const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('.sentence-word-input') as NodeListOf<HTMLInputElement>;
        const userSentence = Array.from(inputs).map(input => input.value.trim()).join(' ');
        
        const isCorrect = vergleicheAntwort(userSentence, fullGermanSentence.replace(/[.,;:!?]+$/, ''));
        
        inputs.forEach((input, index) => {
            const userWord = input.value.trim();
            const expectedWord = input.dataset.expectedWord || '';
            const wordCorrect = vergleicheAntwort(userWord, expectedWord);
            
            input.classList.add(wordCorrect ? 'correct-user-input' : 'incorrect-user-input');
        });
        
        processAnswer(isCorrect, fullGermanSentence);
    };
}