"use strict";
// ui/umlaut-buttons.ts
// Umlaut-Button Funktionalität für Text-Eingabe
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTextAtCursor = insertTextAtCursor;
exports.setupUmlautButtons = setupUmlautButtons;
exports.hideUmlautButtons = hideUmlautButtons;
exports.registerInputForUmlauts = registerInputForUmlauts;
exports.initUmlautSupport = initUmlautSupport;
exports.createUmlautButtonsUI = createUmlautButtonsUI;
/**
 * Fügt Text an der aktuellen Cursor-Position ein.
 */
function insertTextAtCursor(input, text) {
    if (!input)
        return;
    var start = input.selectionStart || 0;
    var end = input.selectionEnd || 0;
    var currentValue = input.value;
    // Text einfügen
    input.value = currentValue.substring(0, start) + text + currentValue.substring(end);
    // Cursor nach dem eingefügten Text positionieren
    input.selectionStart = input.selectionEnd = start + text.length;
    input.focus();
    // Input Event triggern für React/andere Frameworks
    var event = new Event('input', { bubbles: true, cancelable: true });
    input.dispatchEvent(event);
}
/**
 * Setzt die Umlaut-Buttons für die Text-Eingabe auf.
 */
function setupUmlautButtons(dom, state) {
    if (!dom.umlautButtonsContainer) {
        console.warn('Umlaut buttons container not found');
        return;
    }
    // Container anzeigen
    dom.umlautButtonsContainer.style.display = 'flex';
    // Alle Umlaut-Buttons finden
    var umlautButtons = dom.umlautButtonsContainer.querySelectorAll('.umlaut-button');
    umlautButtons.forEach(function (button) {
        var _a;
        var btn = button;
        // Entferne alte Event Listener
        var newButton = btn.cloneNode(true);
        (_a = btn.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newButton, btn);
        // Neuer Event Listener
        newButton.addEventListener('click', function (e) {
            e.preventDefault();
            if (!state.activeTextInput) {
                console.warn('No active text input found');
                return;
            }
            // Prüfe ob Shift gedrückt ist für Großbuchstaben
            var isShiftPressed = e.shiftKey;
            var buttonText = newButton.textContent || '';
            var charToInsert = isShiftPressed ? buttonText.toUpperCase() : buttonText;
            insertTextAtCursor(state.activeTextInput, charToInsert);
        });
        // Tooltip für Shift-Funktionalität
        newButton.title = 'Shift für Großbuchstaben';
    });
}
/**
 * Versteckt die Umlaut-Buttons.
 */
function hideUmlautButtons(dom) {
    if (dom.umlautButtonsContainer) {
        dom.umlautButtonsContainer.style.display = 'none';
    }
}
/**
 * Registriert ein Input-Element für Umlaut-Button Unterstützung.
 */
function registerInputForUmlauts(input, state, dom) {
    if (!input)
        return;
    // Focus Event - macht dieses Input zum aktiven
    input.addEventListener('focus', function () {
        state.activeTextInput = input;
        setupUmlautButtons(dom, state);
    });
    // Blur Event - optional: verstecke Buttons wenn kein Input aktiv
    input.addEventListener('blur', function () {
        // Verzögerung damit Button-Click noch funktioniert
        setTimeout(function () {
            if (state.activeTextInput === input) {
                state.activeTextInput = null;
            }
        }, 200);
    });
}
/**
 * Initialisiert Umlaut-Funktionalität für multiple Inputs.
 */
function initUmlautSupport(inputs, state, dom) {
    inputs.forEach(function (input) {
        if (input) {
            registerInputForUmlauts(input, state, dom);
        }
    });
}
/**
 * Erstellt die Umlaut-Button UI wenn noch nicht vorhanden.
 */
function createUmlautButtonsUI() {
    var container = document.createElement('div');
    container.id = 'umlaut-buttons-container';
    container.className = 'mt-4 flex justify-center space-x-2';
    container.style.display = 'none';
    var umlauts = ['ä', 'ö', 'ü', 'ß'];
    umlauts.forEach(function (umlaut) {
        var button = document.createElement('button');
        button.className = 'umlaut-button px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md font-medium transition-colors';
        button.textContent = umlaut;
        button.title = 'Shift für Großbuchstaben';
        button.type = 'button'; // Verhindert Form-Submit
        container.appendChild(button);
    });
    return container;
}
