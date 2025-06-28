"use strict";
// ui/feedback.ts
// Feedback, Nachrichten und UI-Reset Funktionen
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMessage = showMessage;
exports.hideAllUIs = hideAllUIs;
exports.showCorrectFeedback = showCorrectFeedback;
exports.showIncorrectFeedback = showIncorrectFeedback;
exports.setupAudioButtons = setupAudioButtons;
// SVG Icons als Konstanten
var SVG_SPEAKER_ICON = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n    <path fill-rule=\"evenodd\" d=\"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z\" clip-rule=\"evenodd\" />\n</svg>";
/**
 * Zeigt eine temporäre Nachricht (Toast) an.
 */
function showMessage(dom, message, type, duration) {
    if (type === void 0) { type = 'error'; }
    if (duration === void 0) { duration = 3000; }
    if (!dom.messageBoxEl) {
        console.error('Message box element not found');
        return;
    }
    dom.messageBoxEl.textContent = message;
    // CSS-Klassen basierend auf Typ
    var baseClasses = 'fixed bottom-5 right-5 text-white p-3 rounded-lg shadow-xl';
    var typeClasses = {
        success: 'bg-green-500',
        info: 'bg-blue-500',
        error: 'bg-red-500'
    };
    dom.messageBoxEl.className = "".concat(baseClasses, " ").concat(typeClasses[type]);
    dom.messageBoxEl.classList.remove('hidden');
    // Auto-hide nach duration
    setTimeout(function () {
        if (dom.messageBoxEl) {
            dom.messageBoxEl.classList.add('hidden');
        }
    }, duration);
}
/**
 * Versteckt alle spezifischen Lernmodus-UIs und setzt Feedback-Container zurück.
 */
function hideAllUIs(dom) {
    // Verstecke alle Lernmodus-UIs
    var uiElements = [
        dom.mcUiEl,
        dom.spellingModeUiEl,
        dom.clozeUiEl,
        dom.sentenceUiEl
    ];
    uiElements.forEach(function (uiEl) {
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
    var audioButtons = [dom.audioWordButtonEl, dom.audioSentenceButtonEl];
    audioButtons.forEach(function (btn) {
        if (btn) {
            btn.onclick = null;
            btn.style.display = 'none';
        }
    });
    // Verstecke Umlaut Buttons
    if (dom.umlautButtonsContainer) {
        dom.umlautButtonsContainer.style.display = 'none';
    }
}
/**
 * Zeigt positives Feedback für richtige Antworten.
 */
function showCorrectFeedback(dom) {
    if (!dom.feedbackContainerEl)
        return;
    dom.feedbackContainerEl.innerHTML = '<span class="feedback-correct">Richtig!</span>';
    // Optional: Zusätzliches visuelles Feedback
    var feedbackEl = dom.feedbackContainerEl.querySelector('.feedback-correct');
    if (feedbackEl) {
        feedbackEl.style.color = '#10b981'; // green-500
        feedbackEl.style.fontWeight = 'bold';
        feedbackEl.style.fontSize = '1.25rem';
    }
}
/**
 * Zeigt negatives Feedback mit der korrekten Antwort.
 */
function showIncorrectFeedback(dom, correctAnswer) {
    if (!dom.feedbackContainerEl)
        return;
    dom.feedbackContainerEl.innerHTML = "<span class=\"feedback-incorrect\">".concat(correctAnswer, "</span>");
    // Optional: Zusätzliches visuelles Feedback
    var feedbackEl = dom.feedbackContainerEl.querySelector('.feedback-incorrect');
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
function setupAudioButtons(dom, wordText, sentenceText, speakFunction) {
    // Word Audio Button
    if (dom.audioWordButtonEl) {
        dom.audioWordButtonEl.innerHTML = SVG_SPEAKER_ICON;
        dom.audioWordButtonEl.onclick = function () { return speakFunction(wordText, 'de-DE'); };
        dom.audioWordButtonEl.style.display = 'inline-flex';
    }
    // Sentence Audio Button
    if (dom.audioSentenceButtonEl) {
        dom.audioSentenceButtonEl.innerHTML = SVG_SPEAKER_ICON;
        dom.audioSentenceButtonEl.onclick = function () { return speakFunction(sentenceText, 'de-DE'); };
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
