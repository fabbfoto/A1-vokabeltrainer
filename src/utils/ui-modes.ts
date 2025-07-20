// HINWEIS: Alle Abstände (margin, padding, gap) werden ausschließlich über Tailwind-Klassen im HTML geregelt.
// Keine programmatischen Styles für Layout/Abstand in diesem File!

// ui-modes.ts - TypeScript Version mit globalen Types
// Alle Lernmodus-Setup-Funktionen mit vollständiger Type-Safety

// ✅ IMPORT GLOBALE TYPES (statt lokale Definitionen)
import type { ModeId, LearningMode } from '../core/types/trainer';
import type { Word, TrainerState } from '../core/types/trainer';
import type { DOMElements } from '../core/types/ui';
import { 
    ExampleSentencePart,
    ExampleSentenceData,
    isExampleSentencePartArray,
    isExampleSentenceString,
    getExampleSentenceText
} from '../core/types/vocabulary';

// Import der Helfer-Funktionen
import { vergleicheAntwort, shuffleArray, speak, parseNounString } from './helfer';
// ENTFERNT: import { registerInputForUmlauts } from '../../ui/views/umlaut-buttons';

// Import für UI-Feedback im Test-Modus
import * as ui from '../ui/views/index';

// Importiere loadNextTask aus trainer.ts oben einfügen:
// import { loadNextTask } from '../../trainer';

// ✅ KORREKTE PROCESS-ANSWER-FUNCTION TYPE
type ProcessAnswerFunction = (isCorrect: boolean, correctAnswer?: string, timeSpent?: number, userAnswer?: string) => void;

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
    case 'nominativ': return 'text-de-green font-semibold';
    case 'genitiv':   return 'text-de-gold font-semibold';
    case 'dativ':     return 'text-de-red font-semibold';
    case 'akkusativ': return 'text-de-blue font-semibold';
    case 'verb':      return 'text-fuchsia-500 italic font-semibold';
    default:          return 'text-gray-500';
  }
}

// Neue splitSentence Funktion
function splitSentence(sentence: string): string[] {
    console.log('[DEBUG] splitSentence input:', sentence);
    
    // Wenn der Satz leer ist, leeres Array zurückgeben
    if (!sentence || sentence.trim() === '') {
        console.log('[DEBUG] splitSentence: empty sentence, returning empty array');
        return [];
    }
    
    const punctuationMatch = sentence.match(/[.,;:!?]+$/);
    const punctuation = punctuationMatch ? punctuationMatch[0] : '';
    
    // Satz in Wörter aufteilen, Leerzeichen entfernen
    const words = sentence
        .replace(/[.,;:!?]+$/, '')
        .split(' ')
        .filter(word => word.length > 0); // Nur leere Strings entfernen
    
    console.log('[DEBUG] splitSentence words before punctuation:', words);
    
    // Satzzeichen zum letzten Wort hinzufügen
    if (punctuation && words.length > 0) {
        words[words.length - 1] = words[words.length - 1] + punctuation;
    }
    
    console.log('[DEBUG] splitSentence final result:', words);
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
        if ((window as any).vokabular) {
            const vokabular = (window as any).vokabular;
            allEnglish = Object.values(vokabular)
                .flatMap((mainTopic: any) => Object.values(mainTopic))
                .flatMap((subTopic: any) => Array.isArray(subTopic) ? subTopic : [])
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
        button.className = 'mc-answer-button px-4 py-3 bg-gradient-to-br from-white via-white to-[#F2AE2E]/[0.05] text-gray-800 rounded-xl border-2 border-gray-300 shadow-sm hover:shadow-md hover:bg-gradient-to-br hover:from-white hover:via-white hover:to-[#F2AE2E]/[0.1] transition-all duration-200 font-medium';
        button.textContent = answer;
        button.onclick = () => {
            // Alle Buttons deaktivieren
            const allButtons = dom.mcAnswersContainerEl.querySelectorAll('.mc-answer-button');
            allButtons.forEach((btn: Element) => {
                (btn as HTMLButtonElement).disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            });
            
            const isCorrect = answer === correctAnswerEN;
            
            // URSÜRÜNGLICHE LOGIK: Im Lernmodus sofort weiter, kein visuelles Feedback
            if (!state.test.isTestModeActive) {
                // Lernmodus: Sofort weiter ohne visuelles Feedback
                processAnswer(isCorrect, correctAnswerEN, undefined, answer);
            } else {
                // Testmodus: Farbfeedback
                if (isCorrect) {
                    button.classList.add('bg-green-100', 'border-green-500');
                } else {
                    button.classList.add('bg-red-100', 'border-red-500');
                }
                // Testmodus: Kein Feedback, sofort weiter
                processAnswer(isCorrect, correctAnswerEN, undefined, answer);
            }
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
    // Sicherheitsnetz: Im normalen Lernmodus darf isTestModeActive false sein
    if (!state.test.currentTestWords && state.test.isTestModeActive) {
        console.warn('⚠️ Test-Modus war fälschlicherweise aktiv, korrigiere...');
        state.test.isTestModeActive = false;
    }
    
    console.log('🔍 setupSpellingMode aufgerufen:', {
        isTestModeActive: state.test.isTestModeActive,
        currentTestWords: state.test.currentTestWords,
        currentWord: state.training.currentWord?.german
    });
    
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
            import('../ui/views/umlaut-buttons').then(mod => mod.initializeUmlautButtons('setup', dom, state));
    
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
            input.classList.remove('border-de-red', 'bg-de-red/10', 'border-de-green', 'bg-de-green/10', 'border-green-500', 'bg-green-50', 'border-red-500', 'bg-red-50', 'bg-green-100', 'bg-red-100');
            input.classList.add('bg-gradient-to-br', 'from-white', 'to-[#F2AE2E]/[0.03]', 'border-gray-300');
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
            
            // NEU: Benutzerantwort für Test-Protokollierung
            const userAnswer = `${userInputArticle} ${userInputSingular} / ${userInputPlural}`;
            
            // DIDAKTISCHES FEEDBACK: Nur im Lern-Modus
            if (!state.test.isTestModeActive) {
                if (isArticleCorrect) {
                    dom.spellingInputArticleEl.classList.add('border-green-500', 'bg-green-100');
                } else {
                    dom.spellingInputArticleEl.classList.add('border-red-500', 'bg-red-100');
                }
                if (isSingularCorrect) {
                    dom.spellingInputNoun1El.classList.add('border-green-500', 'bg-green-100');
                } else {
                    dom.spellingInputNoun1El.classList.add('border-red-500', 'bg-red-100');
                }
                if (isPluralCorrect) {
                    dom.spellingInputNoun2El.classList.add('border-green-500', 'bg-green-100');
                } else {
                    dom.spellingInputNoun2El.classList.add('border-red-500', 'bg-red-100');
                }
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
                    processAnswer(true, correctAnswerText, undefined, userAnswer);
                }, 1200);
            } else {
                // Im Test-Modus: Keine Korrektur anzeigen
                if (state.test.isTestModeActive) {
                    // Test-Modus: Kein visuelles Feedback, direkt weiter
                    setTimeout(() => {
                        processAnswer(false, correctAnswerText, undefined, userAnswer);
                    }, 100);
                } else {
                    // Normaler Modus: Korrektur anzeigen
                    dom.correctionSolutionEl.textContent = correctAnswerText;
                    dom.correctionSolutionEl.classList.remove('hidden');
                    dom.continueButton.classList.remove('hidden');
                }
            }
            
            // Auswerten-Button deaktivieren
            dom.checkSpellingButton.disabled = true;
            
            // NOTFALL-FIX: Stelle sicher, dass Korrektur angezeigt wird (Nomen-Modus)
            if (!(isArticleCorrect && isSingularCorrect && isPluralCorrect) && !state.test.isTestModeActive) {
                console.log('🚨 NOTFALL-FIX: Force-zeige Korrektur (Nomen)');
                
                // Warte kurz, dann zeige Korrektur
                setTimeout(() => {
                    if (dom.correctionSolutionEl && correctAnswerText) {
                        dom.correctionSolutionEl.textContent = correctAnswerText;
                        dom.correctionSolutionEl.classList.remove('hidden');
                        dom.correctionSolutionEl.style.cssText = 'display: block !important; color: #ef4444 !important; font-size: 1.5rem !important; font-weight: bold !important;';
                    }
                    
                    if (dom.continueButton) {
                        dom.continueButton.classList.remove('hidden');
                        dom.continueButton.style.cssText = 'display: block !important;';
                        dom.continueButton.focus();
                    }
                }, 100);
            }
            
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
                    input.classList.remove('border-de-red', 'bg-de-red/10', 'border-de-green', 'bg-de-green/10', 'border-green-500', 'bg-green-50', 'border-red-500', 'bg-red-50', 'bg-green-100', 'bg-red-100');
                    input.classList.add('bg-gradient-to-br', 'from-white', 'to-[#F2AE2E]/[0.03]', 'border-gray-300');
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
            console.log('🔍 handleSingleCheckButtonClick aufgerufen:', {
                userInput,
                correctAnswer,
                userInputLength: userInput.length,
                correctAnswerLength: correctAnswer.length
            });
            const isCorrect = vergleicheAntwort(userInput, correctAnswer);
            console.log('→ vergleicheAntwort Ergebnis:', isCorrect);
            

            
            // 4.1 Schreibweise-Modus (Einzelfeld): Farbfeedback nur im Lern-Modus
            if (!state.test.isTestModeActive) {
                if (isCorrect) {
                    dom.spellingInputSingleEl.classList.add('border-green-500', 'bg-green-100');
                } else {
                    dom.spellingInputSingleEl.classList.add('border-red-500', 'bg-red-100');
                }
            }
            
            // 4.4a Rotes Kreuz im Schreibweise-Modus (Einzelfeld) entfernen
            if (state.test.isTestModeActive) {
                // Direkt weiter ohne visuelles Feedback
                processAnswer(false, correctAnswer, undefined, userInput);
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
                    processAnswer(true, correctAnswer, undefined, userInput);
                }, 1200);
            } else {
                // FALSCHE ANTWORT
                console.log('🔍 Schreibweise-Modus: Falsche Antwort');
                console.log('- Test-Modus aktiv?', state.test.isTestModeActive);
                console.log('- Korrekte Antwort:', correctAnswer);
                console.log('- DOM Elemente verfügbar?', {
                    correctionSolutionEl: !!dom.correctionSolutionEl,
                    continueButton: !!dom.continueButton
                });
                
                // Im Test-Modus: Keine Korrektur anzeigen
                if (state.test.isTestModeActive) {
                    console.log('→ Test-Modus: Keine Korrektur');
                    // Test-Modus: Kein visuelles Feedback, direkt weiter
                    setTimeout(() => {
                        processAnswer(false, correctAnswer, undefined, userInput);
                    }, 100);
                } else {
                    console.log('→ Lern-Modus: Zeige Korrektur');
                    // Normaler Modus: Korrektur anzeigen
                    dom.correctionSolutionEl.textContent = correctAnswer;
                    dom.correctionSolutionEl.classList.remove('hidden');
                    dom.continueButton.classList.remove('hidden');
                    
                    // WICHTIG: Stelle sicher, dass die Elemente wirklich sichtbar sind
                    dom.correctionSolutionEl.style.display = 'block';
                    dom.continueButton.style.display = 'block';
                    
                    console.log('- Korrektur Element sichtbar?', !dom.correctionSolutionEl.classList.contains('hidden'));
                    console.log('- Weiter-Button sichtbar?', !dom.continueButton.classList.contains('hidden'));
                    console.log('- Korrektur Text gesetzt:', dom.correctionSolutionEl.textContent);
                    
                    // Focus auf den Weiter-Button
                    setTimeout(() => {
                        dom.continueButton.focus();
                    }, 100);
                }
            }
            
            // Auswerten-Button deaktivieren
            dom.checkSpellingButton.disabled = true;
            
            // NOTFALL-FIX: Stelle sicher, dass Korrektur angezeigt wird (Einzelwort-Modus)
            if (!isCorrect && !state.test.isTestModeActive) {
                console.log('🚨 NOTFALL-FIX: Force-zeige Korrektur (Einzelwort)');
                
                // Warte kurz, dann zeige Korrektur
                setTimeout(() => {
                    if (dom.correctionSolutionEl && correctAnswer) {
                        dom.correctionSolutionEl.textContent = correctAnswer;
                        dom.correctionSolutionEl.classList.remove('hidden');
                        dom.correctionSolutionEl.style.cssText = 'display: block !important; color: #ef4444 !important; font-size: 1.5rem !important; font-weight: bold !important;';
                    }
                    
                    if (dom.continueButton) {
                        dom.continueButton.classList.remove('hidden');
                        dom.continueButton.style.cssText = 'display: block !important;';
                        dom.continueButton.focus();
                    }
                }, 100);
            }
            
            // Korrekturmodus nur aktivieren wenn NICHT im Test
            if (!state.test.isTestModeActive) {
                state.training.isCorrectionMode = !isCorrect;
            }
            
            // Weiter-Button Handler (nur bei falscher Antwort relevant)
            const handleSingleContinueButtonClick = () => {
                // Korrekturmodus beenden
                state.training.isCorrectionMode = false;
                
                // UI zurücksetzen
                dom.correctionSolutionEl.classList.add('hidden');
                dom.continueButton.classList.add('hidden');
                dom.checkSpellingButton.disabled = false;
                
                // ✅ ROBUSTE AKTIVIERUNG: Einzelfeld explizit aktivieren und zurücksetzen
                dom.spellingInputSingleEl.disabled = false;
                dom.spellingInputSingleEl.value = '';
                dom.spellingInputSingleEl.classList.remove('border-de-red', 'bg-de-red/10', 'border-de-green', 'bg-de-green/10', 'border-green-500', 'bg-green-50', 'border-red-500', 'bg-red-50', 'bg-green-100', 'bg-red-100');
                dom.spellingInputSingleEl.classList.add('bg-gradient-to-br', 'from-white', 'to-[#F2AE2E]/[0.03]', 'border-gray-300');
                
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
        console.log('🔍 Setze Event-Handler für Auswerten-Button');
        dom.checkSpellingButton.onclick = handleSingleCheckButtonClick;
        console.log('✅ Event-Handler gesetzt, Button verfügbar:', !!dom.checkSpellingButton);
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
            input.className = 'px-4 py-2 mx-2 text-xl text-center border-2 border-de-gray-300 rounded-lg min-w-[180px] focus:border-de-blue focus:outline-none focus:shadow-lg transition-all duration-200';
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
        input.classList.remove('border-de-green', 'bg-de-green/10', 'border-de-red', 'bg-de-red/10');
        input.classList.add('border-de-gray-300');
    });
    
    dom.checkClozeButton.onclick = () => {
        const inputs = dom.clozeSentenceContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
        let allCorrect = true;
        
        inputs.forEach((input, index) => {
            const userAnswer = input.value.trim();
            const correctAnswer = clozeAnswers[index];
            const isCorrect = vergleicheAntwort(userAnswer, correctAnswer);
            
            // 4.4 Cloze: Farbfeedback nur im Lern-Modus
            if (!state.test.isTestModeActive) {
                input.classList.add(isCorrect ? 'border-green-500' : 'border-red-500');
                input.classList.add(isCorrect ? 'bg-green-100' : 'bg-red-100');
            }
            if (!isCorrect) allCorrect = false;
        });
        
        // NEU: Benutzerantwort für Test-Protokollierung
        const userAnswers = Array.from(inputs).map(input => input.value.trim());
        const userAnswer = userAnswers.join(', ');
        processAnswer(allCorrect, clozeAnswers.join(', '), undefined, userAnswer);
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
            import('../ui/views/umlaut-buttons').then(mod => mod.initializeUmlautButtons('setup', dom, state));
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
        input.className = 'px-4 py-3 text-lg text-center border-2 border-de-gray-300 rounded-lg min-w-[120px] focus:border-de-blue focus:outline-none focus:shadow-lg transition-all duration-200';
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
        
        // Enter-Taste für schnelle Antwort
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                dom.checkSentenceButton.click();
            }
        });
    });
    
    // ✅ ROBUSTE AKTIVIERUNG: Alle Satzübersetzungs-Felder explizit aktivieren
    const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
    inputs.forEach(input => {
        input.disabled = false;
        input.classList.remove('border-de-red', 'bg-de-red/10', 'border-de-green', 'bg-de-green/10', 'border-green-500', 'bg-green-50', 'border-red-500', 'bg-red-50', 'bg-green-100', 'bg-red-100');
        input.classList.add('bg-gradient-to-br', 'from-white', 'to-[#F2AE2E]/[0.03]', 'border-gray-300');
    });
    
    dom.checkSentenceButton.onclick = () => {
        const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
        const userSentence = Array.from(inputs).map(input => input.value.trim()).join(' ');
        
        // Prüfe ob überhaupt etwas eingegeben wurde
        if (!userSentence || userSentence.trim() === '') {
            console.log('Keine Antwort eingegeben, warte auf Benutzereingabe...');
            return;
        }
        
        const isCorrect = vergleicheAntwort(userSentence, fullGermanSentence, { caseSensitive: true });
        
        // Button deaktivieren um mehrfache Klicks zu verhindern
        dom.checkSentenceButton.disabled = true;
        
        inputs.forEach((input, index) => {
            const userWord = input.value.trim();
            const expectedWord = input.dataset.expectedWord || '';
            const wordCorrect = vergleicheAntwort(userWord, expectedWord, { caseSensitive: true });
            // 4.5 Satzübersetzung: Farbfeedback nur im Lern-Modus
            if (!state.test.isTestModeActive) {
                input.classList.add(wordCorrect ? 'border-green-500' : 'border-red-500');
                input.classList.add(wordCorrect ? 'bg-green-100' : 'bg-red-100');
            }
            input.disabled = true;
        });
        
        // Kurze Verzögerung vor processAnswer um UI-Updates zu ermöglichen
        setTimeout(() => {
            processAnswer(isCorrect, fullGermanSentence, undefined, userSentence);
            
            // NEU: Weiter-Button-Handler für falsche Antworten setzen
            if (!isCorrect && !state.test.isTestModeActive) {
                // Weiter-Button-Handler setzen
                const handleContinueButtonClick = () => {
                    // Korrekturmodus beenden
                    state.training.isCorrectionMode = false;
                    
                    // UI zurücksetzen
                    dom.correctionSolutionEl.classList.add('hidden');
                    dom.continueButton.classList.add('hidden');
                    dom.checkSentenceButton.disabled = false;
                    
                    // Alle Input-Felder zurücksetzen
                    const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
                    inputs.forEach(input => {
                        input.disabled = false;
                        input.value = '';
                        input.classList.remove('border-de-red', 'bg-de-red/10', 'border-de-green', 'bg-de-green/10', 'border-green-500', 'bg-green-50', 'border-red-500', 'bg-red-50', 'bg-green-100', 'bg-red-100');
                        input.classList.add('bg-gradient-to-br', 'from-white', 'to-[#F2AE2E]/[0.03]', 'border-gray-300');
                    });
                    
                    // Nächstes Wort laden - verwende processAnswer mit einem speziellen Flag
                    processAnswer(true, '', undefined, 'continue');
                };
                
                // Event-Handler für Weiter-Button setzen
                dom.continueButton.onclick = handleContinueButtonClick;
            }
        }, 100);
    };
    setTimeout(() => {
        const firstInput = dom.sentenceWordInputContainerEl.querySelector('input[type="text"]') as HTMLInputElement;
        if (firstInput) { 
            firstInput.focus(); 
            state.training.activeTextInput = firstInput; 
            console.log('🎯 Satzübersetzung: Erstes Input-Feld fokussiert');
        }
        
        // Umlaut-Buttons für dynamisch erstellte Input-Felder initialisieren
        const inputs = dom.sentenceWordInputContainerEl.querySelectorAll('input[type="text"]') as NodeListOf<HTMLInputElement>;
        if (inputs.length > 0) {
            import('../ui/views/umlaut-buttons').then(mod => {
                mod.initializeUmlautButtons('setup', dom, state);
            });
        }
        
        // Debug-Ausgabe
        console.log('🎯 Satzübersetzung: UI initialisiert mit', inputs.length, 'Input-Feldern');
    }, 50); // Längere Verzögerung für bessere Initialisierung
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