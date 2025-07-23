// ui/feedback.ts
// Feedback-Funktionen für UI

import type { DOMElements } from '../../core/types/ui';
import type { TrainerState } from '../../core/types/trainer';

// SVG Icons als Konstanten
const SVG_SPEAKER_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
</svg>`;

/**
 * Zeigt eine temporäre Nachricht (Toast) an.
 */
export function showMessage(
    dom: DOMElements,
    message: string,
    type: 'success' | 'info' | 'error' = 'error',
    duration: number = 3000
): void {
    if (!dom.messageBoxEl) {
        console.error('Message box element not found');
        return;
    }
    
    dom.messageBoxEl.textContent = message;
    
    // CSS-Klassen basierend auf Typ
    const baseClasses = 'fixed bottom-5 right-5 text-white p-3 rounded-lg shadow-de-gray-400/50';
    const typeClasses = {
        success: 'bg-de-green',
        info: 'bg-de-blue',
        error: 'bg-de-red'
    };
    
    dom.messageBoxEl.className = `${baseClasses} ${typeClasses[type]}`;
    dom.messageBoxEl.classList.remove('hidden');
    
    // Auto-hide nach duration
    setTimeout(() => {
        if (dom.messageBoxEl) {
            dom.messageBoxEl.classList.add('hidden');
        }
    }, duration);
}

/**
 * Zeigt eine Erfolgsmeldung mit "Übung wiederholen" Button an.
 */
export function showSuccessPopup(dom: DOMElements, state: TrainerState): void {
    if (!dom.successPopup) return;
    
    const mode = state.training.currentMode;
    const perfectCount = mode ? (state.progress.perfectRunsByMode[mode] || 0) : 0;
    
    // Entferne den unsinnigen Zähler
    dom.successPopup.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 text-center transform scale-100 transition-all duration-300">
            <div class="mb-6">
                <div class="w-24 h-24 bg-de-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-12 h-12 text-de-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-de-green mb-2">Perfekt!</h2>
                <p class="text-gray-600">Alle Wörter richtig beantwortet!</p>
            </div>
            
            <div class="space-y-3">
                <button 
                    onclick="window.location.reload()" 
                    class="w-full px-6 py-3 bg-de-green text-white rounded-lg hover:bg-de-green-dark transition-colors font-medium">
                    Übung wiederholen
                </button>
                <button 
                    onclick="document.getElementById('success-popup').style.display='none'" 
                    class="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                    Andere Übung wählen
                </button>
            </div>
        </div>
    `;
    
    dom.successPopup.style.display = 'flex';
}

/**
 * Schließt das "Perfekt!"-Popup manuell.
 */
export function closeSuccessPopup(dom: DOMElements): void {
    if (dom.messageBoxEl) {
        dom.messageBoxEl.classList.add('hidden');
        dom.messageBoxEl.innerHTML = '';
    }
}

/**
 * Zeigt eine Erfolgsmeldung mit Button an.
 */
export function showSuccessMessageWithButton(
    dom: DOMElements,
    message: string,
    buttonText: string,
    onButtonClick: () => void
): void {
    if (!dom.successPopup) return;
    
    dom.successPopup.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 text-center transform scale-100 transition-all duration-300">
            <div class="mb-6">
                <div class="w-24 h-24 bg-de-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-12 h-12 text-de-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-de-green mb-2">Perfekt!</h2>
                <p class="text-gray-600">${message}</p>
            </div>
            
            <div class="space-y-3">
                <button 
                    id="success-action-button"
                    class="w-full px-6 py-3 bg-de-green text-white rounded-lg hover:bg-de-green-dark transition-colors font-medium">
                    ${buttonText}
                </button>
                <button 
                    onclick="document.getElementById('success-popup').style.display='none'" 
                    class="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                    Andere Übung wählen
                </button>
            </div>
        </div>
    `;
    
    dom.successPopup.style.display = 'flex';
    
    // Event Listener für den Action Button
    const actionButton = document.getElementById('success-action-button');
    if (actionButton) {
        actionButton.addEventListener('click', () => {
            dom.successPopup.style.display = 'none';
            onButtonClick();
        });
    }
}

/**
 * Versteckt alle spezifischen Lernmodus-UIs und setzt Feedback-Container zurück.
 */
export function hideAllUIs(dom: DOMElements): void {
    // Verstecke alle Lernmodus-UIs
    const uiElements = [
        dom.mcUiEl,
        dom.spellingModeUiEl,
        dom.clozeUiEl,
        dom.sentenceUiEl
    ];
    
    uiElements.forEach(uiEl => {
        if (uiEl) {
            uiEl.style.display = 'none';
        }
    });
    
    // Verstecke spezielle Container
    if (dom.clozeHintContainerEl) {
        dom.clozeHintContainerEl.style.display = 'none';
    }
    
    // Verstecke Continue Button
    if (dom.continueButton) {
        dom.continueButton.classList.add('hidden');
    }
    
    // Leere Feedback und Display Container
    if (dom.feedbackContainerEl) {
        dom.feedbackContainerEl.innerHTML = '';
    }
    if (dom.questionDisplayEl) {
        dom.questionDisplayEl.textContent = '';
    }
    if (dom.exampleSentenceDisplayEl) {
        dom.exampleSentenceDisplayEl.textContent = '';
    }
    
    // Reset Audio Buttons
    const audioButtons = [dom.audioWordButtonEl, dom.audioSentenceButtonEl];
    audioButtons.forEach(btn => {
        if (btn) {
            btn.onclick = null;
            btn.style.display = 'none';
        }
    });
    
    // Umlaut Buttons NICHT verstecken - werden von den einzelnen Modi gesteuert
    // if (dom.umlautButtonsContainer) {
    //     dom.umlautButtonsContainer.style.display = 'none';
    // }
}

/**
 * Zeigt positives Feedback für richtige Antworten.
 */
export function showCorrectFeedback(dom: DOMElements): void {
    if (!dom.feedbackContainerEl) return;
    
    dom.feedbackContainerEl.innerHTML = '<div class="mt-4 animate-bounce"><span class="inline-flex items-center gap-2 px-6 py-3 bg-[#F2AE2E]/10 rounded-xl border-2 border-[#F2AE2E]"><span class="text-2xl">✨</span><span class="text-2xl font-bold text-[#F2AE2E]">Richtig!</span><span class="text-2xl">🎉</span></span></div>';
    
    // Optional: Zusätzliches visuelles Feedback
    const feedbackEl = dom.feedbackContainerEl.querySelector('.feedback-correct') as HTMLElement;
    if (feedbackEl) {
        feedbackEl.style.color = '#10b981'; // green-500
        feedbackEl.style.fontWeight = 'bold';
        feedbackEl.style.fontSize = '1.25rem';
    }
}

/**
 * Zeigt negatives Feedback mit der korrekten Antwort.
 */
export function showIncorrectFeedback(dom: DOMElements, correctAnswer: string): void {
    if (!dom.feedbackContainerEl) return;
    
    dom.feedbackContainerEl.innerHTML = `<span class="feedback-incorrect">${correctAnswer}</span>`;
    
    // Optional: Zusätzliches visuelles Feedback
    const feedbackEl = dom.feedbackContainerEl.querySelector('.feedback-incorrect') as HTMLElement;
    if (feedbackEl) {
        feedbackEl.style.color = '#ef4444'; // red-500
        feedbackEl.style.fontWeight = 'bold';
        feedbackEl.style.fontSize = '1.125rem';
    }
    
    // Zeige Continue Button
    if (dom.continueButton) {
        dom.continueButton.classList.remove('hidden');
    }
}

/**
 * Setzt die Audio-Buttons für Wort und Satz.
 */
export function setupAudioButtons(
    dom: DOMElements,
    wordText: string,
    sentenceText: string,
    speakFunction: (text: string, lang?: string) => void
): void {
    // Word Audio Button
    if (dom.audioWordButtonEl) {
        dom.audioWordButtonEl.innerHTML = SVG_SPEAKER_ICON;
        dom.audioWordButtonEl.onclick = () => speakFunction(wordText, 'de-DE');
        dom.audioWordButtonEl.style.display = 'inline-flex';
    }
    
    // Sentence Audio Button
    if (dom.audioSentenceButtonEl) {
        dom.audioSentenceButtonEl.innerHTML = SVG_SPEAKER_ICON;
        dom.audioSentenceButtonEl.onclick = () => speakFunction(sentenceText, 'de-DE');
        dom.audioSentenceButtonEl.style.display = 'inline-flex';
    }
    
    // Container anzeigen
    if (dom.wordLineContainerEl) {
        dom.wordLineContainerEl.style.display = 'flex';
    }
    if (dom.sentenceLineContainerEl) {
        dom.sentenceLineContainerEl.style.display = 'flex';
    }
}