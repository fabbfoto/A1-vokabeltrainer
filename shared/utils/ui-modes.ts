// ui-modes.ts - TypeScript Version mit globalen Types
// Alle Lernmodus-Setup-Funktionen mit vollständiger Type-Safety

// ✅ IMPORT GLOBALE TYPES (statt lokale Definitionen)
import type { 
    Word, 
    TrainerState, 
    ModeId
} from '../types/index';

// Import DOMElements from the correct location to avoid conflicts
import type { DOMElements } from '../types/ui';

// Import der Helfer-Funktionen
import { vergleicheAntwort, shuffleArray, speak, parseNounString, splitSentence } from './helfer';
import { registerInputForUmlauts } from '../../ui/umlaut-buttons';

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

// Hilfsfunktion: Hole das Beispielsatzfeld (exampleGerman oder example_de)
function getExampleSentence(currentWord: any): any {
  if ('exampleGerman' in currentWord) return currentWord.exampleGerman;
  if ('example_de' in currentWord) return currentWord.example_de;
  return null;
}

// Neue Hilfsfunktion: Tailwind-Klasse für Kasus als Schriftfarbe
function getTailwindCaseClass(kasus: string): string {
  switch (kasus) {
    case 'nominativ': return 'text-green-700 font-bold';
    case 'genitiv':   return 'text-yellow-600 font-bold';
    case 'dativ':     return 'text-blue-700 font-bold';
    case 'akkusativ': return 'text-red-700 font-bold';
    case 'verb':      return 'text-purple-700 italic';
    default:          return 'text-gray-900';
  }
}

// ✅ MULTIPLE CHOICE MODE - mit korrekten Property-Namen
export function setupMultipleChoiceMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    document.getElementById('umlaut-buttons-container')!.style.display = 'none';
    // Sichtbarkeitsumschaltung
    dom.mcUiEl.style.display = 'block';
    dom.spellingModeUiEl.style.display = 'none';
    dom.clozeUiEl.style.display = 'none';
    dom.sentenceUiEl.style.display = 'none';
    
    console.log('[setupMultipleChoiceMode] Starting - korrekte globale Types');
    
    // UI Setup
    if (dom.umlautButtonsContainer) dom.umlautButtonsContainer.style.display = 'none';
    
    // KORREKT: currentWord statt currentWordData
    const currentWord = state.currentWord;
    if (!currentWord) {
        console.error('[setupMultipleChoiceMode] Kein currentWord gefunden!');
        return;
    }
    
    // DEBUG: Zeige aktuelles Wort und seine Eigenschaften
    console.log('[DEBUG][setupMultipleChoiceMode] Aktuelles Wort:', {
        german: currentWord.german,
        english: currentWord.english,
        id: currentWord.id,
        hasExampleGerman: 'exampleGerman' in currentWord,
        hasExampleDe: 'example_de' in currentWord,
        exampleGerman: (currentWord as any).exampleGerman,
        example_de: (currentWord as any).example_de
    });
    
    // Genus und Plural anzeigen
    let displayGermanWord = currentWord.german || "";
    if ('article' in currentWord && 'plural' in currentWord) {
        displayGermanWord = `${currentWord.article} ${currentWord.german}, ${currentWord.plural || '-'}`;
    }
    dom.questionDisplayEl.textContent = displayGermanWord;

    try {
        // Beispielsatz anzeigen (mit Tailwind-Farben, Times New Roman, größer, SCHRIFTFARBE)
        const exampleSentence = getExampleSentence(currentWord);
        console.log('[DEBUG][setupMultipleChoiceMode] Gefundener Beispielsatz:', exampleSentence);
        // Sicherheits-Check: Beispielsatz muss zum deutschen Wort passen
        let showExample = true;
        if (Array.isArray(exampleSentence)) {
            const joined = exampleSentence.map(part => part.text).join('');
            if (!joined.includes(currentWord.german)) {
                showExample = false;
                console.error('[SICHERHEIT][setupMultipleChoiceMode] Beispielsatz passt NICHT zum deutschen Wort:', currentWord.german, exampleSentence);
            }
        } else if (typeof exampleSentence === 'string') {
            if (!exampleSentence.includes(currentWord.german)) {
                showExample = false;
                console.error('[SICHERHEIT][setupMultipleChoiceMode] Beispielsatz (String) passt NICHT zum deutschen Wort:', currentWord.german, exampleSentence);
            }
        }
        if (showExample && exampleSentence) {
            if (Array.isArray(exampleSentence)) {
                dom.exampleSentenceDisplayEl.innerHTML = exampleSentence.map(part => {
                    try {
                        console.log('[DEBUG][Kasus]', part.text, '→', part.case || part.kasus);
                        return `<span class="${getTailwindCaseClass(part.case || part.kasus)}" style="font-family: 'Times New Roman', Times, serif; font-size: 2.5rem;">${part.text}</span>`;
                    } catch (e) {
                        console.error('[FEHLER][Kasus-Färbung]', part, e);
                        return `<span>${part.text}</span>`;
                    }
                }).join('');
                dom.exampleSentenceDisplayEl.style.fontFamily = "'Times New Roman', Times, serif";
                dom.exampleSentenceDisplayEl.style.fontSize = '2.5rem';
            } else if (typeof exampleSentence === 'string') {
                dom.exampleSentenceDisplayEl.textContent = exampleSentence;
                dom.exampleSentenceDisplayEl.style.fontFamily = "'Times New Roman', Times, serif";
                dom.exampleSentenceDisplayEl.style.fontSize = '2.5rem';
            }
        } else {
            dom.exampleSentenceDisplayEl.textContent = '';
        }
    } catch (e) {
        console.error('[FEHLER][setupMultipleChoiceMode] Fehler bei der Beispielsatz-Anzeige:', e);
        dom.exampleSentenceDisplayEl.textContent = '';
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
    
    // Sammle alle englischen Bedeutungen aus dem gesamten Vokabular
    let allEnglish: string[] = [];
    if (state.currentVocabularySet && state.currentVocabularySet.length > 0) {
        // Hole alle Vokabeln aus dem gesamten Vokabular (flach)
        if ((window as any).vokabular) {
            const vokabular = (window as any).vokabular;
            allEnglish = Object.values(vokabular)
                .flatMap((mainTopic: any) => Object.values(mainTopic))
                .flatMap((subTopic: any) => Array.isArray(subTopic) ? subTopic : [])
                .map((word: any) => word.english)
                .filter((en: string) => en && en !== correctAnswerEN);
        } else {
            // Fallback: alle aus currentVocabularySet
            allEnglish = state.currentVocabularySet
                .filter(word => word.english && word.english !== correctAnswerEN)
                .map(word => word.english);
        }
    }
    // Shuffle und filtere Duplikate
    const uniqueDistractors = Array.from(new Set(allEnglish));
    const shuffledDistractors = shuffleArray(uniqueDistractors).slice(0, 3);
    
    const allAnswers = shuffleArray([correctAnswerEN, ...shuffledDistractors]);
    
    allAnswers.forEach(answer => {
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
    document.getElementById('umlaut-buttons-container')!.style.display = 'flex';
    setTimeout(() => {
        if (typeof (window as any).initUmlautButtons === 'function') {
            (window as any).initUmlautButtons();
        }
    }, 100);
    // Sichtbarkeitsumschaltung
    dom.mcUiEl.style.display = 'none';
    dom.spellingModeUiEl.style.display = 'block';
    dom.clozeUiEl.style.display = 'none';
    dom.sentenceUiEl.style.display = 'none';
    
    console.log('[setupSpellingMode] Starting - globale Types');
    
    dom.checkSpellingButton.disabled = false;
    
    const umlautContainer = dom.umlautButtonsContainer;
    if (umlautContainer) umlautContainer.style.display = 'flex';
    // Buttons erst jetzt initialisieren, wenn sie im DOM sind
    import('../../ui/umlaut-buttons').then(mod => mod.setupUmlautButtons(dom, state));
    
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
        dom.spellingInputNoun1El.addEventListener('focus', () => {
            state.activeTextInput = dom.spellingInputNoun1El;
        });
        dom.spellingInputNoun2El.addEventListener('focus', () => {
            state.activeTextInput = dom.spellingInputNoun2El;
        });
        
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
        // Automatisch erstes Feld fokussieren
        setTimeout(() => { dom.spellingInputNoun1El.focus(); state.activeTextInput = dom.spellingInputNoun1El; }, 0);
    } else {
        // Single-Input-Modus
        dom.singleInputContainerEl.classList.remove('hidden');
        dom.nounInputContainerEl.classList.add('hidden');
        
        dom.spellingInputSingleEl.value = '';
        dom.spellingInputSingleEl.disabled = false;
        
        // Focus Handler
        dom.spellingInputSingleEl.addEventListener('focus', () => {
            state.activeTextInput = dom.spellingInputSingleEl;
        });
        
        // Button Click Handler
        dom.checkSpellingButton.onclick = () => {
            const userInput = dom.spellingInputSingleEl.value.trim();
            const correctAnswer = currentWord.german;
            const isCorrect = vergleicheAntwort(userInput, correctAnswer);
            
            dom.spellingInputSingleEl.classList.add(isCorrect ? 'correct-user-input' : 'incorrect-user-input');
            processAnswer(isCorrect, correctAnswer);
        };
        // Automatisch erstes Feld fokussieren
        setTimeout(() => { dom.spellingInputSingleEl.focus(); state.activeTextInput = dom.spellingInputSingleEl; }, 0);
    }
}

// ✅ CLOZE MODE - mit korrekten Property-Namen
export function setupClozeMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    document.getElementById('umlaut-buttons-container')!.style.display = 'flex';
    // Sichtbarkeitsumschaltung
    dom.mcUiEl.style.display = 'none';
    dom.spellingModeUiEl.style.display = 'none';
    dom.clozeUiEl.style.display = 'block';
    dom.sentenceUiEl.style.display = 'none';
    
    console.log('[setupClozeMode] Starting - globale Types');
    
    dom.checkClozeButton.disabled = false;
    
    const umlautContainer = dom.umlautButtonsContainer;
    if (umlautContainer) umlautContainer.style.display = 'flex';
    
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
            generateClozeUI(dom, clozeParts, clozeAnswers, processAnswer, state);
        }
    }
}

function generateClozeUI(
    dom: DOMElements, 
    clozeParts: string[], 
    clozeAnswers: string[], 
    processAnswer: ProcessAnswerFunction,
    state: TrainerState
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
            
            input.addEventListener('focus', () => {
                state.activeTextInput = input;
            });
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
    setTimeout(() => {
        const firstInput = dom.clozeSentenceContainerEl.querySelector('.cloze-input') as HTMLInputElement;
        if (firstInput) { firstInput.focus(); state.activeTextInput = firstInput; }
    }, 0);
}

// ✅ SENTENCE TRANSLATION MODE - mit korrekten Property-Namen
export function setupSentenceTranslationEnDeMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    document.getElementById('umlaut-buttons-container')!.style.display = 'flex';
    // Sichtbarkeitsumschaltung
    dom.mcUiEl.style.display = 'none';
    dom.spellingModeUiEl.style.display = 'none';
    dom.clozeUiEl.style.display = 'none';
    dom.sentenceUiEl.style.display = 'block';
    
    console.log('[setupSentenceTranslationEnDeMode] Starting - globale Types');
    
    dom.checkSentenceButton.disabled = false;
    
    const umlautContainer = dom.umlautButtonsContainer;
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
    generateSentenceInputs(dom, wordsForLayout, fullGermanSentence, processAnswer, state);
}

function generateSentenceInputs(
    dom: DOMElements, 
    wordsForLayout: string[], 
    fullGermanSentence: string, 
    processAnswer: ProcessAnswerFunction,
    state: TrainerState
): void {
    dom.sentenceWordInputContainerEl.innerHTML = '';
    
    wordsForLayout.forEach((word, index) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'sentence-word-input px-2 py-1 border-2 border-gray-300 rounded mx-1 my-1';
        input.placeholder = word;
        input.dataset.expectedWord = word;
        dom.sentenceWordInputContainerEl.appendChild(input);
        
        input.addEventListener('focus', () => {
            state.activeTextInput = input;
        });
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
    setTimeout(() => {
        const firstInput = dom.sentenceWordInputContainerEl.querySelector('.sentence-word-input') as HTMLInputElement;
        if (firstInput) { firstInput.focus(); state.activeTextInput = firstInput; }
    }, 0);
}