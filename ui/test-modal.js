"use strict";
// ui/test-modal.ts
// Test-Modal und Test-bezogene UI Funktionen
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTestModal = showTestModal;
exports.closeTestModal = closeTestModal;
exports.updateTestModeProgressBars = updateTestModeProgressBars;
exports.initTestModalListeners = initTestModalListeners;
/**
 * Zeigt das Test-Auswahl-Modal an.
 */
function showTestModal(dom, state, testType, topic, callbacks, learningModes) {
    // Update progress bars bevor Modal geöffnet wird
    updateTestModeProgressBars(dom, state);
    // Modal Element erstellen oder finden
    var modal = document.getElementById('test-modal');
    if (!modal) {
        modal = createTestModal();
        document.body.appendChild(modal);
    }
    // Modal Titel setzen
    var modalTitle = modal.querySelector('#test-modal-title');
    if (modalTitle) {
        modalTitle.textContent = testType === 'global'
            ? '🎯 Globaler Test - Modus wählen'
            : "\uD83C\uDFAF Test: ".concat(topic, " - Modus w\u00E4hlen");
    }
    // Modal anzeigen
    modal.classList.remove('hidden');
    // Event Listener für Modus-Buttons
    var modeButtons = modal.querySelectorAll('[data-test-mode]');
    modeButtons.forEach(function (button) {
        var btn = button;
        btn.onclick = function () {
            var selectedMode = btn.dataset.testMode;
            if (selectedMode) {
                closeTestModal();
                // Test starten
                if (testType === 'global') {
                    callbacks.starteGesamtTest(selectedMode);
                }
                else {
                    callbacks.starteHauptthemaTest(selectedMode);
                }
            }
        };
    });
    // Close Button
    var closeButton = modal.querySelector('#close-test-modal');
    if (closeButton) {
        closeButton.addEventListener('click', closeTestModal);
    }
    // Click outside to close
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeTestModal();
        }
    });
}
/**
 * Erstellt das Test-Modal HTML.
 */
function createTestModal() {
    var modal = document.createElement('div');
    modal.id = 'test-modal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
    modal.innerHTML = "\n        <div class=\"bg-white rounded-lg shadow-xl p-6 w-full max-w-md\">\n            <div class=\"flex justify-between items-center mb-4\">\n                <h2 id=\"test-modal-title\" class=\"text-xl font-bold text-gray-700\"></h2>\n                <button id=\"close-test-modal\" class=\"text-gray-500 hover:text-gray-700\">\n                    <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"></path>\n                    </svg>\n                </button>\n            </div>\n            \n            <div class=\"space-y-3\">\n                <button data-test-mode=\"mc-de-en\" class=\"test-mode-button w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors\">\n                    <div class=\"font-semibold\">Bedeutung</div>\n                    <div class=\"text-sm opacity-90\">Multiple Choice - Deutsche W\u00F6rter \u2192 Englische Bedeutung</div>\n                    <div class=\"test-mode-progress mt-2\"></div>\n                </button>\n                \n                <button data-test-mode=\"type-de-adj\" class=\"test-mode-button w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors\">\n                    <div class=\"font-semibold\">Schreibweise</div>\n                    <div class=\"text-sm opacity-90\">Rechtschreibung mit Artikel-Erkennung</div>\n                    <div class=\"test-mode-progress mt-2\"></div>\n                </button>\n                \n                <button data-test-mode=\"cloze-adj-de\" class=\"test-mode-button w-full bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition-colors\">\n                    <div class=\"font-semibold\">L\u00FCckentext</div>\n                    <div class=\"text-sm opacity-90\">L\u00FCckentexte mit Hinweisen</div>\n                    <div class=\"test-mode-progress mt-2\"></div>\n                </button>\n                \n                <button data-test-mode=\"sentence-translation-en-de\" class=\"test-mode-button w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors\">\n                    <div class=\"font-semibold\">Satz\u00FCbersetzung</div>\n                    <div class=\"text-sm opacity-90\">English \u2192 Deutsch</div>\n                    <div class=\"test-mode-progress mt-2\"></div>\n                </button>\n            </div>\n        </div>\n    ";
    return modal;
}
/**
 * Schließt das Test-Modal.
 */
function closeTestModal() {
    var modal = document.getElementById('test-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}
/**
 * Aktualisiert die Fortschrittsbalken im Test-Modal.
 */
function updateTestModeProgressBars(dom, state) {
    var modal = document.getElementById('test-modal');
    if (!modal)
        return;
    var modes = ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'];
    modes.forEach(function (mode) {
        var button = modal.querySelector("[data-test-mode=\"".concat(mode, "\"]"));
        if (!button)
            return;
        var progressContainer = button.querySelector('.test-mode-progress');
        if (!progressContainer)
            return;
        // Hole letztes Test-Ergebnis für diesen Modus
        var testKey = state.currentMainTopic
            ? "mainTopic-".concat(state.currentMainTopic, "-").concat(mode)
            : "global-".concat(mode);
        var lastScore = state.lastTestScores[testKey];
        if (lastScore) {
            var percentage = Math.round(lastScore.accuracy * 100);
            var colorClass = percentage >= 80 ? 'bg-green-400' : percentage >= 60 ? 'bg-yellow-400' : 'bg-red-400';
            progressContainer.innerHTML = "\n                <div class=\"flex items-center justify-between text-xs mt-1\">\n                    <span>Letzter Test: ".concat(percentage, "%</span>\n                    <span>").concat(lastScore.correct, "/").concat(lastScore.total, "</span>\n                </div>\n                <div class=\"w-full bg-gray-300 rounded-full h-2 mt-1\">\n                    <div class=\"").concat(colorClass, " h-2 rounded-full transition-all duration-300\" style=\"width: ").concat(percentage, "%\"></div>\n                </div>\n            ");
        }
        else {
            progressContainer.innerHTML = "\n                <div class=\"text-xs text-gray-300 mt-1\">Noch kein Test durchgef\u00FChrt</div>\n            ";
        }
    });
}
/**
 * Initialisiert Test-Modal Event Listener.
 */
function initTestModalListeners(dom, state, callbacks, learningModes) {
    // Listen for custom events to show test modal
    window.addEventListener('showTestModal', (function (e) {
        var _a = e.detail, type = _a.type, topic = _a.topic;
        showTestModal(dom, state, type, topic, callbacks, learningModes);
    }));
}
