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
import { vergleicheAntwort, shuffleArray, speak, parseNounString } from './helfer';
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

// Neue splitSentence Funktion
function splitSentence(sentence: string): string[] {
    const punctuationMatch = sentence.match(/[.,;:!?]+$/);
    const punctuation = punctuationMatch ? punctuationMatch[0] : '';
    
    const words = sentence
        .replace(/[.,;:!?]+$/, '')
        .split(' ')
        .filter(word => word.length > 0);
    
    if (punctuation && words.length > 0) {
        words[words.length - 1] = words[words.length - 1] + punctuation;
    }
    
    return words;
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
    // Audio-Buttons anzeigen
    if (dom.audioWordButtonEl) dom.audioWordButtonEl.style.display = 'inline-flex';
    if (dom.audioSentenceButtonEl) dom.audioSentenceButtonEl.style.display = 'inline-flex';
    
    // KORREKT: currentWord statt currentWordData
    const currentWord = state.currentWord;
    if (!currentWord) {
        console.error('[setupMultipleChoiceMode] Kein currentWord gefunden!');
        return;
    }
    
    // HIER: exampleSentence einmal holen und für die ganze Funktion verwenden
    const exampleSentence = getExampleSentence(currentWord);
    
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
    
    // DEBUG-Ausgabe für exampleSentence
    console.log('[DEBUG][setupMultipleChoiceMode] exampleSentence:', exampleSentence);
    
    // Genus und Plural anzeigen
    let displayGermanWord = currentWord.german || "";
    if ('article' in currentWord && 'plural' in currentWord) {
        displayGermanWord = `${currentWord.article} ${currentWord.german}, ${currentWord.plural || '-'}`;
    }
    dom.questionDisplayEl.textContent = displayGermanWord;

    try {
        // Beispielsatz anzeigen (mit Tailwind-Farben, Times New Roman, größer, SCHRIFTFARBE)
        if (Array.isArray(exampleSentence)) {
            const joined = exampleSentence.map(part => part.text).join('');
            console.log('[DEBUG][setupMultipleChoiceMode] exampleSentence (joined):', joined);
            if (joined.trim() !== '') {
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
            } else {
                dom.exampleSentenceDisplayEl.textContent = '';
            }
        } else if (typeof exampleSentence === 'string') {
            if (exampleSentence.trim() !== '') {
                dom.exampleSentenceDisplayEl.textContent = exampleSentence;
                dom.exampleSentenceDisplayEl.style.fontFamily = "'Times New Roman', Times, serif";
                dom.exampleSentenceDisplayEl.style.fontSize = '2.5rem';
            } else {
                dom.exampleSentenceDisplayEl.textContent = '';
            }
        } else {
            dom.exampleSentenceDisplayEl.textContent = '';
        }
    } catch (e) {
        console.error('[FEHLER][setupMultipleChoiceMode] Fehler bei der Beispielsatz-Anzeige:', e, exampleSentence);
        dom.exampleSentenceDisplayEl.textContent = '[Fehler beim Anzeigen des Beispielsatzes]';
    }

    // Sichtbarkeit des gesamten Wort+Satz-Blocks abhängig vom Beispielsatz
    if (
        (Array.isArray(exampleSentence) && exampleSentence.length > 0 && exampleSentence.some(part => part.text && part.text.trim() !== '')) ||
        (typeof exampleSentence === 'string' && exampleSentence.trim() !== '')
    ) {
        dom.wordSentenceBlockEl.style.display = 'block';
    } else {
        dom.wordSentenceBlockEl.style.display = 'none';
    }

    // Audio-Buttons setup mit besserem Layout
    dom.audioWordButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    dom.audioWordButtonEl.onclick = () => speak(currentWord.german);

    dom.audioSentenceButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    const sentenceForSpeech = Array.isArray(exampleSentence) 
        ? exampleSentence.map((part: any) => part.text).join('') 
        : exampleSentence || '';
    dom.audioSentenceButtonEl.onclick = () => speak(sentenceForSpeech, 'de-DE');

    // Container Layout verbessern
    dom.wordLineContainerEl.style.display = 'flex';
    dom.wordLineContainerEl.style.flexDirection = 'row';
    dom.wordLineContainerEl.style.alignItems = 'center';
    dom.wordLineContainerEl.style.justifyContent = 'center';
    dom.wordLineContainerEl.style.gap = '16px';
    dom.wordLineContainerEl.style.marginBottom = '8px';

    dom.sentenceLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.flexDirection = 'row';
    dom.sentenceLineContainerEl.style.alignItems = 'center';
    dom.sentenceLineContainerEl.style.justifyContent = 'center';
    dom.sentenceLineContainerEl.style.gap = '16px';
    dom.sentenceLineContainerEl.style.marginBottom = '16px';

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
    // Audio-Buttons verstecken
    if (dom.audioWordButtonEl) dom.audioWordButtonEl.style.display = 'none';
    if (dom.audioSentenceButtonEl) dom.audioSentenceButtonEl.style.display = 'none';
    // Buttons erst jetzt initialisieren, wenn sie im DOM sind
    import('../../ui/umlaut-buttons').then(mod => mod.setupUmlautButtons(dom, state));
    
    // ✅ KORREKT: currentWord statt currentWordData
    const currentWord = state.currentWord;
    if (!currentWord) {
        console.error('[setupSpellingMode] Kein currentWord gefunden!');
        return;
    }

    // Zeige das englische Wort oben
    dom.questionDisplayEl.textContent = currentWord.english.split(',')[0].trim();

    // Zeige den englischen Beispielsatz darunter
    const englishExample = (currentWord as any).exampleEnglish || (currentWord as any).example_en || "";
    dom.exampleSentenceDisplayEl.textContent = englishExample;

    // Zeige beide Container
    dom.wordLineContainerEl.style.display = 'flex';  // Zeigt das englische Wort
    dom.sentenceLineContainerEl.style.display = englishExample ? 'flex' : 'none'; // Zeigt den englischen Satz wenn vorhanden
    
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
            const article = (currentWord as any).article || '';
            const correctAnswerSingular = article ? `${article} ${currentWord.german}` : currentWord.german;
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
    // Audio-Buttons verstecken
    if (dom.audioWordButtonEl) dom.audioWordButtonEl.style.display = 'none';
    if (dom.audioSentenceButtonEl) dom.audioSentenceButtonEl.style.display = 'none';
    
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
    if ('clozeParts' in currentWord && 'clozeAnswers' in currentWord) {
        const clozeParts = (currentWord as any).clozeParts;
        const clozeAnswers = (currentWord as any).clozeAnswers;
        
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
            input.className = 'px-4 py-2 mx-2 text-xl text-center border-2 border-gray-300 rounded-lg min-w-[180px] focus:border-blue-500 focus:outline-none focus:shadow-lg transition-all duration-200';
            input.placeholder = '___';
            dom.clozeSentenceContainerEl.appendChild(input);
            
            input.addEventListener('focus', () => {
                state.activeTextInput = input;
            });
        }
    });
    
    dom.checkClozeButton.onclick = () => {
        const inputs = dom.clozeSentenceContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
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
        const firstInput = dom.clozeSentenceContainerEl.querySelector('input[type="text"]') as HTMLInputElement;
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
    // Audio-Buttons verstecken
    if (dom.audioWordButtonEl) dom.audioWordButtonEl.style.display = 'none';
    if (dom.audioSentenceButtonEl) dom.audioSentenceButtonEl.style.display = 'none';
    
    const sentenceUi = dom.sentenceUiEl;
    if (sentenceUi) sentenceUi.style.display = 'block';
    
    // ✅ KORREKT: currentWord statt currentWordData
    const currentWord = state.currentWord;
    if (!currentWord) {
        console.error('[setupSentenceTranslationEnDeMode] Kein currentWord gefunden!');
        return;
    }
    
    if ('exampleEnglish' in currentWord) {
        dom.questionDisplayEl.textContent = (currentWord as any).exampleEnglish;
        dom.questionDisplayEl.className = 'text-center text-3xl font-semibold text-gray-900 mb-6';
    }
    
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'none';

    // Deutschen Satz für Vergleich vorbereiten
    let fullGermanSentence = "";
    if ('exampleGerman' in currentWord) {
        const exampleGerman = (currentWord as any).exampleGerman;
        if (Array.isArray(exampleGerman)) {
            fullGermanSentence = exampleGerman.map((part: any) => part.text).join("");
        } else if (typeof exampleGerman === 'string') {
            fullGermanSentence = exampleGerman;
        }
    }

    // Wörter für Layout extrahieren (jetzt inkl. Satzzeichen)
    const wordsForLayout = splitSentence(fullGermanSentence);
    
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
        input.className = 'px-4 py-3 text-lg text-center border-2 border-gray-300 rounded-lg min-w-[120px] focus:border-blue-500 focus:outline-none focus:shadow-lg transition-all duration-200';
        const minWidth = Math.max(120, word.length * 12);
        input.style.width = `${minWidth}px`;
        // Optional: Letztes Wort mit Satzzeichen breiter
        if (index === wordsForLayout.length - 1 && word.match(/[.,;:!?]+$/)) {
            input.style.width = `${minWidth + 20}px`;
        }
        // Kein Placeholder
        input.dataset.expectedWord = word;
        dom.sentenceWordInputContainerEl.appendChild(input);
        input.addEventListener('focus', () => {
            state.activeTextInput = input;
        });
    });
    
    dom.checkSentenceButton.onclick = () => {
        const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
        const userSentence = Array.from(inputs).map(input => input.value.trim()).join(' ');
        
        const isCorrect = vergleicheAntwort(userSentence, fullGermanSentence);
        
        inputs.forEach((input, index) => {
            const userWord = input.value.trim();
            const expectedWord = input.dataset.expectedWord || '';
            const wordCorrect = vergleicheAntwort(userWord, expectedWord);
            input.classList.add(wordCorrect ? 'correct-user-input' : 'incorrect-user-input');
        });
        
        processAnswer(isCorrect, fullGermanSentence);
    };
    setTimeout(() => {
        const firstInput = dom.sentenceWordInputContainerEl.querySelector('input[type="text"]') as HTMLInputElement;
        if (firstInput) { firstInput.focus(); state.activeTextInput = firstInput; }
    }, 0);
}