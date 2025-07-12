// HINWEIS: Alle Abstände (margin, padding, gap) werden ausschließlich über Tailwind-Klassen im HTML geregelt.
// Keine programmatischen Styles für Layout/Abstand in diesem File!

// ui-modes.ts - TypeScript Version mit globalen Types
// Alle Lernmodus-Setup-Funktionen mit vollständiger Type-Safety

// ✅ IMPORT GLOBALE TYPES (statt lokale Definitionen)
import type { ModeId, LearningMode } from '../types/trainer';
import type { Word, TrainerState } from '../types/trainer';
import type { DOMElements } from '../types/ui';
import { 
    ExampleSentencePart,
    ExampleSentenceData,
    isExampleSentencePartArray,
    isExampleSentenceString,
    getExampleSentenceText
} from '../types/vocabulary';

// Import der Helfer-Funktionen
import { vergleicheAntwort, shuffleArray, speak, parseNounString } from './helfer';
// ENTFERNT: import { registerInputForUmlauts } from '../../ui/umlaut-buttons';

// Import für UI-Feedback im Test-Modus
import * as ui from '../../ui/index';

// Importiere loadNextTask aus trainer.ts oben einfügen:
// import { loadNextTask } from '../../trainer';

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
function getExampleSentence(currentWord: ExampleSentenceData): ExampleSentencePart[] | string | null {
  if ('exampleGerman' in currentWord && currentWord.exampleGerman !== undefined) {
    return currentWord.exampleGerman;
  }
  if ('example_de' in currentWord && currentWord.example_de !== undefined) {
    return currentWord.example_de;
  }
  return null;
}

// Neue Hilfsfunktion: Tailwind-Klasse für Kasus als Schriftfarbe
function getTailwindCaseClass(kasus: string): string {
  switch (kasus) {
    case 'nominativ': return 'text-green-700 font-semibold';
    case 'genitiv':   return 'text-yellow-600 font-semibold';
    case 'dativ':     return 'text-red-700 font-semibold';
    case 'akkusativ': return 'text-blue-700 font-semibold';
    case 'verb':      return 'text-fuchsia-500 italic font-semibold';
    default:          return 'text-gray-500';
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

// BUGFIX: Hilfsfunktion zum Aktivieren aller Eingabefelder
function ensureInputsEnabled() {
    setTimeout(() => {
        document.querySelectorAll('input[type="text"], input[type="password"], button.choice-button').forEach(el => {
            (el as HTMLInputElement | HTMLButtonElement).disabled = false;
            el.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        });
    }, 0);
}

// ✅ MULTIPLE CHOICE MODE - mit korrekten Property-Namen
export function setupMultipleChoiceMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    // NEU: Test-Modus NIEMALS zurücksetzen
    const wasInTestMode = state.test.isTestModeActive;
    
    // Korrekturmodus nur zurücksetzen wenn nicht im Test
    if (!state.test.isTestModeActive) {
        state.training.isCorrectionMode = false;
    }
    
    ensureInputsEnabled(); // BUGFIX: Alle Inputs aktivieren
    // BUGFIX: Explizit alle Choice-Buttons aktivieren
    const choiceButtons = document.querySelectorAll('.choice-button');
    choiceButtons.forEach(button => {
        (button as HTMLButtonElement).disabled = false;
        button.classList.remove('opacity-50', 'cursor-not-allowed');
    });

    if (state._removeCorrectionEnterHandler) { state._removeCorrectionEnterHandler(); delete state._removeCorrectionEnterHandler; }
    state._removeCorrectionEnterHandler = addCorrectionEnterHandler(dom, state);
    dom.feedbackContainerEl.innerHTML = '';
    dom.correctionSolutionEl.textContent = '';
    dom.correctionSolutionEl.classList.add('hidden');
    // Umlaut-Buttons verstecken
    if (dom.umlautButtonsContainer) dom.umlautButtonsContainer.style.display = 'none';
    // Sichtbarkeitsumschaltung
    dom.mcUiEl.style.display = 'block';
    dom.spellingModeUiEl.style.display = 'none';
    dom.clozeUiEl.style.display = 'none';
    dom.sentenceUiEl.style.display = 'none';
    

    
    // UI Setup
    if (dom.umlautButtonsContainer) dom.umlautButtonsContainer.style.display = 'none';
    // Audio-Buttons anzeigen
    if (dom.audioWordButtonEl) dom.audioWordButtonEl.style.display = 'inline-flex';
    if (dom.audioSentenceButtonEl) dom.audioSentenceButtonEl.style.display = 'inline-flex';
    
    // KORREKT: currentWord statt currentWordData
    const currentWord = state.training.currentWord;
    if (!currentWord) {

        return;
    }
    
    // HIER: exampleSentence einmal holen und für die ganze Funktion verwenden
    const exampleSentence = getExampleSentence(currentWord);
    

    
    // Genus und Plural anzeigen
    let displayGermanWord = currentWord.german || "";
    if ('article' in currentWord && 'plural' in currentWord) {
        displayGermanWord = `${currentWord.article} ${currentWord.german}, ${currentWord.plural || '-'}`;
    }
    dom.questionDisplayEl.textContent = displayGermanWord;

    try {
        // Beispielsatz anzeigen (mit Tailwind-Farben, Times New Roman, größer, SCHRIFTFARBE)
        if (exampleSentence && isExampleSentencePartArray(exampleSentence)) {
            const joined = exampleSentence.map(part => part.text).join('');
            if (joined.trim() !== '') {
                dom.exampleSentenceDisplayEl.innerHTML = exampleSentence.map(part => {
                    try {
                        return `<span class="${getTailwindCaseClass(part.case || part.kasus || 'none')}" style="font-family: 'Times New Roman', Times, serif; font-size: 2.5rem; line-height: 1.5;">${part.text}</span>`;
                    } catch (e) {
    
                        return `<span>${part.text}</span>`;
                    }
                }).join('');
                dom.exampleSentenceDisplayEl.style.fontFamily = "'Times New Roman', Times, serif";
                dom.exampleSentenceDisplayEl.style.fontSize = '2.5rem';
                dom.exampleSentenceDisplayEl.style.lineHeight = '1.5';
            } else {
                dom.exampleSentenceDisplayEl.textContent = '';
            }
        } else if (exampleSentence && isExampleSentenceString(exampleSentence)) {
            if (exampleSentence.trim() !== '') {
                dom.exampleSentenceDisplayEl.textContent = exampleSentence;
                dom.exampleSentenceDisplayEl.style.fontFamily = "'Times New Roman', Times, serif";
                dom.exampleSentenceDisplayEl.style.fontSize = '2.5rem';
                dom.exampleSentenceDisplayEl.style.lineHeight = '1.5';
            } else {
                dom.exampleSentenceDisplayEl.textContent = '';
            }
        } else {
            dom.exampleSentenceDisplayEl.textContent = '';
        }
    } catch (e) {

        dom.exampleSentenceDisplayEl.textContent = '[Fehler beim Anzeigen des Beispielsatzes]';
    }

    // Sichtbarkeit des gesamten Wort+Satz-Blocks abhängig vom Beispielsatz
    if (
        (exampleSentence && isExampleSentencePartArray(exampleSentence) && exampleSentence.length > 0 && exampleSentence.some(part => part.text && part.text.trim() !== '')) ||
        (exampleSentence && isExampleSentenceString(exampleSentence) && exampleSentence.trim() !== '')
    ) {
        dom.wordSentenceBlockEl.style.display = 'block';
    } else {
        dom.wordSentenceBlockEl.style.display = 'none';
    }

    // Audio-Buttons setup mit besserem Layout
    dom.audioWordButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    dom.audioWordButtonEl.onclick = () => speak(currentWord.german);

    dom.audioSentenceButtonEl.innerHTML = dom.SVG_SPEAKER_ICON;
    const sentenceForSpeech = getExampleSentenceText(exampleSentence);
    dom.audioSentenceButtonEl.onclick = () => speak(sentenceForSpeech, 'de-DE');

    // Container Layout verbessern
    dom.wordLineContainerEl.style.display = 'flex';
    dom.wordLineContainerEl.style.flexDirection = 'row';
    dom.wordLineContainerEl.style.alignItems = 'center';
    dom.wordLineContainerEl.style.justifyContent = 'center';

    dom.sentenceLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.flexDirection = 'row';
    dom.sentenceLineContainerEl.style.alignItems = 'center';
    dom.sentenceLineContainerEl.style.justifyContent = 'center';

    // Multiple Choice Antworten generieren
    generateMultipleChoiceAnswers(dom, state, processAnswer);
}

function generateMultipleChoiceAnswers(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    dom.mcAnswersContainerEl.innerHTML = '';
    
    const currentWord = state.training.currentWord;
    if (!currentWord) return;
    
    const correctAnswerEN = currentWord.english;
    const wrongAnswers: string[] = [];
    
    // Sammle alle englischen Bedeutungen aus dem gesamten Vokabular
    let allEnglish: string[] = [];
    if (state.training.currentVocabularySet && state.training.currentVocabularySet.length > 0) {
        // Hole alle Vokabeln aus dem gesamten Vokabular (flach)
        if (window.vokabular) {
            const vokabular = window.vokabular;
            allEnglish = Object.values(vokabular)
                .flatMap((mainTopic: Record<string, unknown[]>) => Object.values(mainTopic))
                .flatMap((subTopic: unknown[]) => Array.isArray(subTopic) ? subTopic : [])
                .map((word: unknown) => (word as { english: string }).english)
                .filter((en: string) => en && en !== correctAnswerEN);
        } else {
            // Fallback: alle aus currentVocabularySet
            allEnglish = state.training.currentVocabularySet
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
            // Alle Buttons deaktivieren
            const allButtons = dom.mcAnswersContainerEl.querySelectorAll('.mc-answer-button');
            allButtons.forEach((btn: Element) => {
                (btn as HTMLButtonElement).disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            });
            
            // Visuelles Feedback
            if (answer === correctAnswerEN) {
                button.classList.remove('border-gray-300');
                button.classList.add('border-green-500', 'bg-green-100');
            } else {
                button.classList.remove('border-gray-300');
                button.classList.add('border-red-500', 'bg-red-100');
                
                // Richtige Antwort hervorheben
                allButtons.forEach((btn: Element) => {
                    if (btn.textContent === correctAnswerEN) {
                        btn.classList.remove('border-gray-300');
                        btn.classList.add('border-green-500', 'bg-green-100');
                    }
                });
            }
            
            const isCorrect = answer === correctAnswerEN;
            
            // Wichtig: Bei Multiple Choice NIE in Correction Mode gehen
            // Das war das Problem!
            state.training.isCorrectionMode = false;
            
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
    ensureInputsEnabled(); // BUGFIX: Alle Inputs aktivieren

    // Robustes Reset: Alle Felder aktivieren
    if (dom.spellingInputSingleEl) dom.spellingInputSingleEl.disabled = false;
    if (dom.spellingInputArticleEl) dom.spellingInputArticleEl.disabled = false;
    if (dom.spellingInputNoun1El) dom.spellingInputNoun1El.disabled = false;
    if (dom.spellingInputNoun2El) dom.spellingInputNoun2El.disabled = false;
    if (state._removeCorrectionEnterHandler) { state._removeCorrectionEnterHandler(); delete state._removeCorrectionEnterHandler; }
    state._removeCorrectionEnterHandler = addCorrectionEnterHandler(dom, state);
    dom.feedbackContainerEl.innerHTML = '';
    dom.correctionSolutionEl.textContent = '';
    dom.correctionSolutionEl.classList.add('hidden');
    // Umlaut-Buttons anzeigen
    if (dom.umlautButtonsContainer) {
        dom.umlautButtonsContainer.style.display = 'flex';
    }
    
    // Sichtbarkeitsumschaltung
    dom.mcUiEl.style.display = 'none';
    dom.spellingModeUiEl.style.display = 'block';
    dom.clozeUiEl.style.display = 'none';
    dom.sentenceUiEl.style.display = 'none';
    

    
    // NEU: Test-Modus NIEMALS zurücksetzen
    const wasInTestMode = state.test.isTestModeActive;
    
    // Korrekturmodus nur zurücksetzen wenn nicht im Test
    if (!state.test.isTestModeActive) {
        state.training.isCorrectionMode = false;
    }
    
    // UI zurücksetzen
    dom.checkSpellingButton.disabled = false;
    dom.continueButton.classList.add('hidden');
    dom.correctionSolutionEl.classList.add('hidden');
    
    if (dom.umlautButtonsContainer) {
        dom.umlautButtonsContainer.style.display = 'flex';
    }
    // Audio-Buttons verstecken
    if (dom.audioWordButtonEl) dom.audioWordButtonEl.style.display = 'none';
    if (dom.audioSentenceButtonEl) dom.audioSentenceButtonEl.style.display = 'none';
    // Buttons erst jetzt initialisieren, wenn sie im DOM sind
    import('../../ui/umlaut-buttons').then(mod => mod.initializeUmlautButtons('setup', dom, state));
    
    // ✅ KORREKT: currentWord statt currentWordData
    const currentWord = state.training.currentWord;
    if (!currentWord) {

        return;
    }

    // Zeige das englische Wort oben
    dom.questionDisplayEl.textContent = currentWord.english.split(',')[0].trim();

    // Zeige den englischen Beispielsatz darunter
    const englishExample = (currentWord as { exampleEnglish?: string; example_en?: string }).exampleEnglish || (currentWord as { exampleEnglish?: string; example_en?: string }).example_en || "";
    dom.exampleSentenceDisplayEl.textContent = englishExample;

    // Zeige beide Container
    dom.wordLineContainerEl.style.display = 'flex';  // Zeigt das englische Wort
    dom.sentenceLineContainerEl.style.display = englishExample ? 'flex' : 'none'; // Zeigt den englischen Satz wenn vorhanden
    
    // Reset styles (Tailwind-Klassen)
    [dom.spellingInputSingleEl, dom.spellingInputNoun1El, dom.spellingInputNoun2El].forEach(input => {
        if(input) {
            input.classList.remove('border-green-400', 'bg-green-50', 'border-red-400', 'bg-red-50');
            input.classList.add('border-gray-300');
        }
    });
    
    // Check if noun with plural
    const isNounWithPlural = 'plural' in currentWord && currentWord.plural !== undefined;
    
    if (isNounWithPlural) {
        // Nomen-Modus: Drei Felder (Artikel, Singular, Plural)
        dom.nounInputContainerEl.classList.remove('hidden');
        dom.singleInputContainerEl.classList.add('hidden');
        
        // Reset alle Felder
        dom.spellingInputArticleEl.value = '';
        dom.spellingInputArticleEl.disabled = false;
        dom.spellingInputNoun1El.value = '';
        dom.spellingInputNoun1El.disabled = false;
        dom.spellingInputNoun2El.value = '';
        dom.spellingInputNoun2El.disabled = false;
        
        // Focus Handler für alle drei Felder
        dom.spellingInputArticleEl.addEventListener('focus', () => {
            state.training.activeTextInput = dom.spellingInputArticleEl;
        });
        dom.spellingInputNoun1El.addEventListener('focus', () => {
            state.training.activeTextInput = dom.spellingInputNoun1El;
        });
        dom.spellingInputNoun2El.addEventListener('focus', () => {
            state.training.activeTextInput = dom.spellingInputNoun2El;
        });
        
        // Enter-Key Handler NUR für das Pluralfeld
        const handlePluralEnterKey = (event: KeyboardEvent) => {
            if (event.key === 'Enter' && !state.training.isCorrectionMode) {
                event.preventDefault();
                handleCheckButtonClick();
            }
        };
        dom.spellingInputNoun2El.addEventListener('keydown', handlePluralEnterKey);
        // Entferne die Enter-Key-Handler von Artikel- und Singularfeld (lassen Standardverhalten zu)
        
        // Button Click Handler mit didaktischem Feedback
        const handleCheckButtonClick = () => {
            const correctArticle = (currentWord as { article?: string }).article || '';
            const correctSingular = currentWord.german;
            const correctPlural = (currentWord as { plural?: string }).plural || '';
            
            const userInputArticle = dom.spellingInputArticleEl.value.trim();
            const userInputSingular = dom.spellingInputNoun1El.value.trim();
            const userInputPlural = dom.spellingInputNoun2El.value.trim();
            

            
            // Separate Prüfung für jedes Feld
            const isArticleCorrect = vergleicheAntwort(userInputArticle, correctArticle);
            const isSingularCorrect = vergleicheAntwort(userInputSingular, correctSingular);
            const isPluralCorrect = vergleicheAntwort(userInputPlural, correctPlural);
            

            
            // DIDAKTISCHES FEEDBACK: Jedes Feld bekommt sofort grün/rot (Tailwind)
            if (isArticleCorrect) {
                dom.spellingInputArticleEl.classList.add('border-green-400', 'bg-green-50');
            } else {
                dom.spellingInputArticleEl.classList.add('border-red-400', 'bg-red-50');
            }
            
            if (isSingularCorrect) {
                dom.spellingInputNoun1El.classList.add('border-green-400', 'bg-green-50');
            } else {
                dom.spellingInputNoun1El.classList.add('border-red-400', 'bg-red-50');
            }
            
            if (isPluralCorrect) {
                dom.spellingInputNoun2El.classList.add('border-green-400', 'bg-green-50');
            } else {
                dom.spellingInputNoun2El.classList.add('border-red-400', 'bg-red-50');
            }
            
            // Felder sperren
            dom.spellingInputArticleEl.disabled = true;
            dom.spellingInputNoun1El.disabled = true;
            dom.spellingInputNoun2El.disabled = true;
            
            // Richtige Lösung anzeigen (groß und rot)
            const correctAnswerText = `${correctArticle} ${correctSingular} / ${correctPlural}`;
            if (isArticleCorrect && isSingularCorrect && isPluralCorrect) {
                // RICHTIGE ANTWORT: Keine Korrekturlösung, kein Weiter-Button, direkt nächste Aufgabe
                dom.correctionSolutionEl.classList.add('hidden');
                dom.correctionSolutionEl.textContent = '';
                dom.continueButton.classList.add('hidden');
                
                // Kurze Verzögerung für grünes Feedback, dann nächste Aufgabe
                setTimeout(() => {
                    processAnswer(true, correctAnswerText);
                }, 1200);
            } else {
                // Im Test-Modus: Keine Korrektur anzeigen
                if (state.test.isTestModeActive) {
                    // Kurze Fehlermeldung, dann weiter
                    ui.showMessage(dom, '✗', 'error', 1000);
                    setTimeout(() => {
                        processAnswer(false, correctAnswerText);
                    }, 1000);
                } else {
                    // Normaler Modus: Korrektur anzeigen
                    dom.correctionSolutionEl.textContent = correctAnswerText;
                    dom.correctionSolutionEl.classList.remove('hidden');
                    dom.continueButton.classList.remove('hidden');
                }
            }
            
            // Auswerten-Button deaktivieren
            dom.checkSpellingButton.disabled = true;
            
            // Korrekturmodus nur aktivieren wenn NICHT im Test
            if (!state.test.isTestModeActive) {
                state.training.isCorrectionMode = !(isArticleCorrect && isSingularCorrect && isPluralCorrect);
            }
            
            // Nur wenn alle drei Felder korrekt sind, ist die Antwort vollständig richtig
            const isFullyCorrect = isArticleCorrect && isSingularCorrect && isPluralCorrect;
            
            // Weiter-Button Handler (nur bei falscher Antwort relevant)
            const handleContinueButtonClick = () => {
                // Korrekturmodus beenden
                state.training.isCorrectionMode = false;
                
                // UI zurücksetzen
                dom.correctionSolutionEl.classList.add('hidden');
                dom.continueButton.classList.add('hidden');
                dom.checkSpellingButton.disabled = false;
                
                // ✅ ROBUSTE AKTIVIERUNG: Alle Felder explizit aktivieren und zurücksetzen
                [dom.spellingInputArticleEl, dom.spellingInputNoun1El, dom.spellingInputNoun2El].forEach(input => {
                    input.disabled = false;
                    input.value = '';
                    input.classList.remove('border-green-400', 'bg-green-50', 'border-red-400', 'bg-red-50');
                    input.classList.add('border-gray-300');
                });
                
                // ✅ FOKUSSIERUNG: Mittleres Feld (Singular) fokussieren
                if (dom.spellingInputNoun1El) {
                    dom.spellingInputNoun1El.focus();
                    state.training.activeTextInput = dom.spellingInputNoun1El;
                }
                
                // Nächstes Wort laden
                processAnswer(isFullyCorrect, correctAnswerText);
                dom.feedbackContainerEl.innerHTML = '';
                dom.correctionSolutionEl.textContent = '';
                dom.correctionSolutionEl.classList.add('hidden');
            };
            
            // Event-Handler für Weiter-Button setzen (nur bei falscher Antwort)
            if (!isFullyCorrect) {
                dom.continueButton.onclick = handleContinueButtonClick;
            }
        };
        
        // Event-Handler für Auswerten-Button setzen
        dom.checkSpellingButton.onclick = handleCheckButtonClick;
        // Automatisch Artikel-Feld fokussieren
        setTimeout(() => { dom.spellingInputArticleEl.focus(); state.training.activeTextInput = dom.spellingInputArticleEl; }, 0);
    } else {
        // Single-Input-Modus
        dom.singleInputContainerEl.classList.remove('hidden');
        dom.nounInputContainerEl.classList.add('hidden');
        
        dom.spellingInputSingleEl.value = '';
        dom.spellingInputSingleEl.disabled = false;
        
        // Focus Handler
        dom.spellingInputSingleEl.addEventListener('focus', () => {
            state.training.activeTextInput = dom.spellingInputSingleEl;
        });
        
        // Enter-Key Handler für Single-Input
        const handleSingleEnterKey = (event: KeyboardEvent) => {
            if (event.key === 'Enter' && !state.training.isCorrectionMode) {
                event.preventDefault();
                handleSingleCheckButtonClick();
            }
        };
        
        dom.spellingInputSingleEl.addEventListener('keydown', handleSingleEnterKey);
        
        // Button Click Handler mit didaktischem Feedback
        const handleSingleCheckButtonClick = () => {
            const userInput = dom.spellingInputSingleEl.value.trim();
            const correctAnswer = currentWord.german;
            const isCorrect = vergleicheAntwort(userInput, correctAnswer);
            

            
            // DIDAKTISCHES FEEDBACK: Feld bekommt sofort grün/rot (Tailwind)
            if (isCorrect) {
                dom.spellingInputSingleEl.classList.add('border-green-400', 'bg-green-50');
            } else {
                dom.spellingInputSingleEl.classList.add('border-red-400', 'bg-red-50');
            }
            
            // Feld sperren
            dom.spellingInputSingleEl.disabled = true;
            
            // Richtige Lösung anzeigen (groß und rot)
            if (isCorrect) {
                // RICHTIGE ANTWORT: Keine Korrekturlösung, kein Weiter-Button, direkt nächste Aufgabe
                dom.correctionSolutionEl.classList.add('hidden');
                dom.correctionSolutionEl.textContent = '';
                dom.continueButton.classList.add('hidden');
                
                // Kurze Verzögerung für grünes Feedback, dann nächste Aufgabe
                setTimeout(() => {
                    processAnswer(true, correctAnswer);
                }, 1200);
            } else {
                // Im Test-Modus: Keine Korrektur anzeigen
                if (state.test.isTestModeActive) {
                    // Kurze Fehlermeldung, dann weiter
                    ui.showMessage(dom, '✗', 'error', 1000);
                    setTimeout(() => {
                        processAnswer(false, correctAnswer);
                    }, 1000);
                } else {
                    // Normaler Modus: Korrektur anzeigen
                    dom.correctionSolutionEl.textContent = correctAnswer;
                    dom.correctionSolutionEl.classList.remove('hidden');
                    dom.continueButton.classList.remove('hidden');
                }
            }
            
            // Auswerten-Button deaktivieren
            dom.checkSpellingButton.disabled = true;
            
            // Korrekturmodus nur aktivieren wenn NICHT im Test
            if (!state.test.isTestModeActive) {
                state.isCorrectionMode = !isCorrect;
            }
            
            // Weiter-Button Handler (nur bei falscher Antwort relevant)
            const handleSingleContinueButtonClick = () => {
                // Korrekturmodus beenden
                state.isCorrectionMode = false;
                
                // UI zurücksetzen
                dom.correctionSolutionEl.classList.add('hidden');
                dom.continueButton.classList.add('hidden');
                dom.checkSpellingButton.disabled = false;
                
                // ✅ ROBUSTE AKTIVIERUNG: Einzelfeld explizit aktivieren und zurücksetzen
                dom.spellingInputSingleEl.disabled = false;
                dom.spellingInputSingleEl.value = '';
                dom.spellingInputSingleEl.classList.remove('border-green-400', 'bg-green-50', 'border-red-400', 'bg-red-50');
                dom.spellingInputSingleEl.classList.add('border-gray-300');
                
                // ✅ FOKUSSIERUNG: Einzelfeld fokussieren
                dom.spellingInputSingleEl.focus();
                state.training.activeTextInput = dom.spellingInputSingleEl;
                
                // Nächstes Wort laden
                processAnswer(isCorrect, correctAnswer);
                dom.feedbackContainerEl.innerHTML = '';
                dom.correctionSolutionEl.textContent = '';
                dom.correctionSolutionEl.classList.add('hidden');
            };
            
            // Event-Handler für Weiter-Button setzen (nur bei falscher Antwort)
            if (!isCorrect) {
                dom.continueButton.onclick = handleSingleContinueButtonClick;
            }
        };
        
        // Event-Handler für Auswerten-Button setzen
        dom.checkSpellingButton.onclick = handleSingleCheckButtonClick;
        // Automatisch erstes Feld fokussieren
        setTimeout(() => { dom.spellingInputSingleEl.focus(); state.training.activeTextInput = dom.spellingInputSingleEl; }, 0);
    }
}

// ✅ CLOZE MODE - mit korrekten Property-Namen
export function setupClozeMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    // NEU: Test-Modus NIEMALS zurücksetzen
    const wasInTestMode = state.test.isTestModeActive;
    
    ensureInputsEnabled(); // BUGFIX: Alle Inputs aktivieren

    if (state._removeCorrectionEnterHandler) { state._removeCorrectionEnterHandler(); delete state._removeCorrectionEnterHandler; }
    state._removeCorrectionEnterHandler = addCorrectionEnterHandler(dom, state);
    dom.feedbackContainerEl.innerHTML = '';
    dom.correctionSolutionEl.textContent = '';
    dom.correctionSolutionEl.classList.add('hidden');
    // Umlaut-Buttons anzeigen
    if (dom.umlautButtonsContainer) dom.umlautButtonsContainer.style.display = 'flex';
    // Sichtbarkeitsumschaltung
    dom.mcUiEl.style.display = 'none';
    dom.spellingModeUiEl.style.display = 'none';
    dom.clozeUiEl.style.display = 'block';
    dom.sentenceUiEl.style.display = 'none';
    

    
    dom.checkClozeButton.disabled = false;
    
    if (dom.umlautButtonsContainer) {
        dom.umlautButtonsContainer.style.display = 'flex';

    }
    // Audio-Buttons verstecken
    if (dom.audioWordButtonEl) dom.audioWordButtonEl.style.display = 'none';
    if (dom.audioSentenceButtonEl) dom.audioSentenceButtonEl.style.display = 'none';
    
    // ✅ KORREKT: currentWord statt currentWordData
    const currentWord = state.training.currentWord;
    if (!currentWord) {
        console.error('[setupClozeMode] Kein currentWord gefunden!');
        return;
    }
    
    dom.questionDisplayEl.textContent = currentWord.english;
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'none';

    // Cloze-spezifische Logik
    if ('clozeParts' in currentWord && 'clozeAnswers' in currentWord) {
        const clozeParts = (currentWord as { clozeParts: string[] }).clozeParts;
        const clozeAnswers = (currentWord as { clozeAnswers: string[] }).clozeAnswers;
        
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
                state.training.activeTextInput = input;
            });
        }
    });
    
    // ✅ ROBUSTE AKTIVIERUNG: Alle Cloze-Felder explizit aktivieren
    const inputs = dom.clozeSentenceContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
    inputs.forEach(input => {
        input.disabled = false;
        input.classList.remove('border-green-400', 'bg-green-50', 'border-red-400', 'bg-red-50');
        input.classList.add('border-gray-300');
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
        if (firstInput) { 
            firstInput.focus(); 
            state.training.activeTextInput = firstInput; 
        }
        
        // Umlaut-Buttons für dynamisch erstellte Input-Felder initialisieren
        const inputs = dom.clozeSentenceContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
        if (inputs.length > 0) {
            import('../../ui/umlaut-buttons').then(mod => {
                mod.initializeUmlautButtons('setup', dom, state);
            });
        }
    }, 0);
}

// ✅ SENTENCE TRANSLATION MODE - mit korrekten Property-Namen
export function setupSentenceTranslationEnDeMode(
    dom: DOMElements, 
    state: TrainerState, 
    processAnswer: ProcessAnswerFunction
): void {
    // NEU: Test-Modus NIEMALS zurücksetzen
    const wasInTestMode = state.test.isTestModeActive;
    
    ensureInputsEnabled(); // BUGFIX: Alle Inputs aktivieren

    if (state._removeCorrectionEnterHandler) { state._removeCorrectionEnterHandler(); delete state._removeCorrectionEnterHandler; }
    state._removeCorrectionEnterHandler = addCorrectionEnterHandler(dom, state);
    dom.feedbackContainerEl.innerHTML = '';
    dom.correctionSolutionEl.textContent = '';
    dom.correctionSolutionEl.classList.add('hidden');
    // Umlaut-Buttons anzeigen
    if (dom.umlautButtonsContainer) dom.umlautButtonsContainer.style.display = 'flex';
    // Sichtbarkeitsumschaltung
    dom.mcUiEl.style.display = 'none';
    dom.spellingModeUiEl.style.display = 'none';
    dom.clozeUiEl.style.display = 'none';
    dom.sentenceUiEl.style.display = 'block';
    

    
    dom.checkSentenceButton.disabled = false;
    
    if (dom.umlautButtonsContainer) {
        dom.umlautButtonsContainer.style.display = 'flex';

    }
    // Audio-Buttons verstecken
    if (dom.audioWordButtonEl) dom.audioWordButtonEl.style.display = 'none';
    if (dom.audioSentenceButtonEl) dom.audioSentenceButtonEl.style.display = 'none';
    
    const sentenceUi = dom.sentenceUiEl;
    if (sentenceUi) sentenceUi.style.display = 'block';
    
    // ✅ KORREKT: currentWord statt currentWordData
    const currentWord = state.training.currentWord;
    if (!currentWord) {
        console.error('[setupSentenceTranslationEnDeMode] Kein currentWord gefunden!');
        return;
    }
    
    if ('exampleEnglish' in currentWord) {
        dom.questionDisplayEl.textContent = (currentWord as { exampleEnglish: string }).exampleEnglish;
        dom.questionDisplayEl.className = 'text-center text-3xl font-semibold text-gray-900 mb-6';
    }
    
    dom.wordLineContainerEl.style.display = 'flex';
    dom.sentenceLineContainerEl.style.display = 'none';

    // Deutschen Satz für Vergleich vorbereiten
    let fullGermanSentence = "";
    if ('exampleGerman' in currentWord) {
        const exampleGerman = currentWord.exampleGerman;
        console.log('[DEBUG] exampleGerman raw:', exampleGerman);
        fullGermanSentence = getExampleSentenceText(exampleGerman);
        console.log('[DEBUG] fullGermanSentence after getExampleSentenceText:', fullGermanSentence);
        
        // Fallback: Wenn kein Satz gefunden wurde, verwende das deutsche Wort
        if (!fullGermanSentence || fullGermanSentence.trim() === '') {
            console.log('[DEBUG] Using fallback - german word:', currentWord.german);
            fullGermanSentence = currentWord.german;
        }
    } else {
        // Fallback: Verwende das deutsche Wort als Satz
        console.log('[DEBUG] No exampleGerman found, using german word:', currentWord.german);
        fullGermanSentence = currentWord.german;
    }

    // Wörter für Layout extrahieren (jetzt inkl. Satzzeichen)
    const wordsForLayout = splitSentence(fullGermanSentence);
    
    // Fallback: Wenn keine Wörter gefunden wurden, verwende das deutsche Wort
    if (wordsForLayout.length === 0) {
        wordsForLayout.push(fullGermanSentence);
    }
    
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
    
    if (wordsForLayout.length === 0) {
        console.error('[generateSentenceInputs] Keine Wörter für Layout gefunden!');
        return;
    }
    
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
            state.training.activeTextInput = input;
        });
    });
    
    // ✅ ROBUSTE AKTIVIERUNG: Alle Satzübersetzungs-Felder explizit aktivieren
    const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
    inputs.forEach(input => {
        input.disabled = false;
        input.classList.remove('border-green-400', 'bg-green-50', 'border-red-400', 'bg-red-50');
        input.classList.add('border-gray-300');
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
        if (firstInput) { firstInput.focus(); state.training.activeTextInput = firstInput; }
        
        // Umlaut-Buttons für dynamisch erstellte Input-Felder initialisieren
        const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
        if (inputs.length > 0) {
            import('../../ui/umlaut-buttons').then(mod => {
                mod.initializeUmlautButtons('setup', dom, state);
            });
        }
    }, 0);
}

function addCorrectionEnterHandler(dom: DOMElements, state: TrainerState) {
    function handler(e: KeyboardEvent) {
        if (state.training.isCorrectionMode && e.key === 'Enter') {
            e.preventDefault();
            dom.continueButton?.click();
        }
    }
    document.addEventListener('keydown', handler);
    // Rückgabefunktion zum Entfernen
    return () => document.removeEventListener('keydown', handler);
}