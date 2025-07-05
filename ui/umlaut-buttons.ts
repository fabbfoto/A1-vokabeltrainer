// ui/umlaut-buttons.ts
// Umlaut-Button Funktionalität für Text-Eingabe

// Type imports (temporär any, später aus shared/types)
type DOMElements = any;
type TrainerState = any;

/**
 * Fügt Text an der aktuellen Cursor-Position ein.
 */
export function insertTextAtCursor(input: HTMLInputElement, text: string): void {
    console.log('[UMLAUT] insertTextAtCursor', input, text);
    if (!input) return;
    
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const currentValue = input.value;
    
    // Text einfügen
    input.value = currentValue.substring(0, start) + text + currentValue.substring(end);
    
    // Cursor nach dem eingefügten Text positionieren
    input.selectionStart = input.selectionEnd = start + text.length;
    input.focus();
    
    // Input Event triggern für React/andere Frameworks
    const event = new Event('input', { bubbles: true, cancelable: true });
    input.dispatchEvent(event);
}

/**
 * Setzt die Umlaut-Buttons für die Text-Eingabe auf.
 */
export function setupUmlautButtons(dom: DOMElements, state: TrainerState): void {
    console.log('[UMLAUT] setupUmlautButtons aufgerufen', dom.umlautButtonsContainer);
    if (!dom.umlautButtonsContainer) return;
    const umlautButtons = dom.umlautButtonsContainer.querySelectorAll('.umlaut-button');
    console.log('[UMLAUT] Anzahl gefundener Buttons:', umlautButtons.length);
    umlautButtons.forEach((btn: HTMLButtonElement) => {
        console.log('[UMLAUT] Button:', btn.textContent, 'data-umlaut-initialized:', btn.hasAttribute('data-umlaut-initialized'));
        if (!btn.hasAttribute('data-umlaut-initialized')) {
            console.log('[UMLAUT] Initialisiere Umlaut-Button:', btn.textContent);
            btn.addEventListener('click', (e: MouseEvent) => {
                console.log('[UMLAUT] Button geklickt:', btn.textContent, 'activeTextInput:', state.activeTextInput);
                e.preventDefault();
                if (!state.activeTextInput) return;
                const isShiftPressed = e.shiftKey;
                const buttonText = btn.textContent || '';
                const charToInsert = isShiftPressed ? buttonText.toUpperCase() : buttonText;
                insertTextAtCursor(state.activeTextInput, charToInsert);
            });
            btn.setAttribute('data-umlaut-initialized', 'true');
        }
        btn.title = 'Shift für Großbuchstaben';
    });
}

/**
 * Versteckt die Umlaut-Buttons.
 */
export function hideUmlautButtons(dom: DOMElements): void {
    if (dom.umlautButtonsContainer) {
        dom.umlautButtonsContainer.style.display = 'none';
    }
}

/**
 * Registriert ein Input-Element für Umlaut-Button Unterstützung.
 */
export function registerInputForUmlauts(
    input: HTMLInputElement,
    state: TrainerState,
    dom: DOMElements
): void {
    if (!input) return;
    input.addEventListener('focus', () => {
        state.activeTextInput = input;
        // Buttons werden nur einmalig initialisiert, kein erneutes setup nötig
    });
    input.addEventListener('blur', () => {
        setTimeout(() => {
            if (state.activeTextInput === input) {
                state.activeTextInput = null;
            }
        }, 200);
    });
}

/**
 * Initialisiert Umlaut-Funktionalität für multiple Inputs.
 */
export function initUmlautSupport(
    inputs: HTMLInputElement[],
    state: TrainerState,
    dom: DOMElements
): void {
    inputs.forEach(input => {
        if (input) {
            registerInputForUmlauts(input, state, dom);
        }
    });
}

/**
 * Erstellt die Umlaut-Button UI wenn noch nicht vorhanden.
 */
export function createUmlautButtonsUI(): HTMLElement {
    const container = document.createElement('div');
    container.id = 'umlaut-buttons-container';
    container.className = 'mt-4 flex justify-center space-x-2';
    container.style.display = 'none';
    
    const umlauts = ['ä', 'ö', 'ü', 'ß'];
    
    umlauts.forEach(umlaut => {
        const button = document.createElement('button');
        button.className = 'umlaut-button px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md font-medium transition-colors';
        button.textContent = umlaut;
        button.title = 'Shift für Großbuchstaben';
        button.type = 'button'; // Verhindert Form-Submit
        container.appendChild(button);
    });
    
    return container;
}