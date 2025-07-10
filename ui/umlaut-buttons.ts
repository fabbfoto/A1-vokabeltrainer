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
export function setupUmlautButtons(dom: any, state: any): void {
    // Alle möglichen Umlaut-Button-Container finden
    const umlautContainers = [
        dom.umlautButtonsContainer, // Schreibweise-Modus
        document.getElementById('umlaut-buttons-container-cloze'), // Cloze-Modus
        document.getElementById('umlaut-buttons-container-sentence') // Satzübersetzungs-Modus
    ].filter(Boolean);
    
    if (umlautContainers.length === 0) {
        console.error('❌ Keine Umlaut-Buttons Container gefunden!');
        return;
    }
    
    // Alle sichtbaren Container anzeigen
    umlautContainers.forEach(container => {
        if (container) {
            container.style.display = 'flex';
            console.log(`✅ Umlaut-Buttons Container angezeigt: ${container.id}`);
        }
    });
    
    // Debug: Prüfe ob Container wirklich sichtbar ist
    const computedStyle = window.getComputedStyle(dom.umlautButtonsContainer);
    console.log('🔍 Umlaut-Container Debug:', {
        display: computedStyle.display,
        visibility: computedStyle.visibility,
        opacity: computedStyle.opacity,
        height: computedStyle.height,
        width: computedStyle.width,
        position: computedStyle.position,
        zIndex: computedStyle.zIndex
    });
    
    // Alle relevanten Input-Felder registrieren
    const inputsToRegister = [
        'spelling-input-single',
        'spelling-input-article', 
        'spelling-input-noun-1',
        'spelling-input-noun-2'
    ];
    
    inputsToRegister.forEach(inputId => {
        const input = document.getElementById(inputId) as HTMLInputElement;
        if (input) {
            registerInputForUmlauts(input, state, dom);
        }
    });
    
    // Dynamisch erstellte Input-Felder registrieren (Cloze und Satzübersetzung)
    const clozeInputs = document.querySelectorAll('#cloze-sentence-container input[type="text"]') as NodeListOf<HTMLInputElement>;
    const sentenceInputs = document.querySelectorAll('#sentence-word-input-container input[type="text"]') as NodeListOf<HTMLInputElement>;
    
    [...clozeInputs, ...sentenceInputs].forEach(input => {
        if (input && !input.hasAttribute('data-umlaut-registered')) {
            registerInputForUmlauts(input, state, dom);
            input.setAttribute('data-umlaut-registered', 'true');
            console.log(`✅ Input-Feld registriert: ${input.className}`);
        }
    });
    
    // Fallback: Alle sichtbaren Text-Inputs registrieren
    const allTextInputs = document.querySelectorAll('input[type="text"]:not([disabled])') as NodeListOf<HTMLInputElement>;
    allTextInputs.forEach(input => {
        if (input && !input.hasAttribute('data-umlaut-registered') && (input as HTMLElement).offsetParent !== null) {
            registerInputForUmlauts(input, state, dom);
            input.setAttribute('data-umlaut-registered', 'true');
            console.log(`✅ Fallback Input-Feld registriert: ${input.className}`);
        }
    });
    
    console.log(`✅ Insgesamt ${allTextInputs.length} Input-Felder für Umlaut-Buttons gefunden`);
    
    // Event-Listener für alle Umlaut-Buttons in allen Containern setzen
    umlautContainers.forEach(container => {
        const umlautButtons = container.querySelectorAll('.umlaut-button');
        umlautButtons.forEach((btn: HTMLButtonElement) => {
        if (!btn.hasAttribute('data-umlaut-initialized')) {
            btn.addEventListener('mousedown', function(e: MouseEvent) {
                e.preventDefault();
                e.stopPropagation();
                
                // Ziel-Input bestimmen
                let input: HTMLInputElement | null = state.training.activeTextInput;
                if (!input || input.disabled || !(input as HTMLElement).offsetParent) {
                    // Fallback: aktives oder sichtbares Input suchen
                    if (document.activeElement && (document.activeElement as HTMLElement).tagName === 'INPUT') {
                        input = document.activeElement as HTMLInputElement;
                    } else {
                        const visibleInputs = Array.from(document.querySelectorAll('input[type="text"]:not([disabled])'))
                            .filter(inp => (inp as HTMLElement).offsetParent !== null) as HTMLInputElement[];
                        if (visibleInputs.length === 1) input = visibleInputs[0];
                    }
                }
                
                if (input) {
                    const char = e.shiftKey && btn.textContent ? btn.textContent.toUpperCase() : btn.textContent || '';
                    insertTextAtCursor(input, char);
                }
            });
            btn.setAttribute('data-umlaut-initialized', 'true');
        }
        btn.title = 'Shift für Großbuchstaben';
        });
    });
    
    console.log('✅ Umlaut-Buttons erfolgreich initialisiert');
}

/**
 * Versteckt die Umlaut-Buttons.
 */
export function hideUmlautButtons(dom: DOMElements): void {
    const umlautContainers = [
        dom.umlautButtonsContainer,
        document.getElementById('umlaut-buttons-container-cloze'),
        document.getElementById('umlaut-buttons-container-sentence')
    ].filter(Boolean);
    
    umlautContainers.forEach(container => {
        if (container) {
            container.style.display = 'none';
            console.log(`✅ Umlaut-Buttons versteckt: ${container.id}`);
        }
    });
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
        state.training.activeTextInput = input;
        // Buttons werden nur einmalig initialisiert, kein erneutes setup nötig
    });
    input.addEventListener('blur', () => {
        setTimeout(() => {
            if (state.training.activeTextInput === input) {
                state.training.activeTextInput = null;
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
    container.className = 'mt-1 flex justify-center space-x-2';
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