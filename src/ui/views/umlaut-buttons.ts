// ui/umlaut-buttons.ts
// Umlaut-Button-Funktionen

import type { DOMElements } from '../../core/types/ui';
import type { TrainerState } from '../../core/types/trainer';

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

        }
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
    
    Array.from(clozeInputs).concat(Array.from(sentenceInputs)).forEach(input => {
        if (input && !input.hasAttribute('data-umlaut-registered')) {
            registerInputForUmlauts(input, state, dom);
            input.setAttribute('data-umlaut-registered', 'true');

        }
    });
    
    // Fallback: Alle sichtbaren Text-Inputs registrieren
    const allTextInputs = document.querySelectorAll('input[type="text"]:not([disabled])') as NodeListOf<HTMLInputElement>;
    allTextInputs.forEach(input => {
        if (input && !input.hasAttribute('data-umlaut-registered') && (input as HTMLElement).offsetParent !== null) {
            registerInputForUmlauts(input, state, dom);
            input.setAttribute('data-umlaut-registered', 'true');

        }
    });
    

    
    // Event-Listener für alle Umlaut-Buttons in allen Containern setzen
    umlautContainers.forEach(container => {
        if (!container) return;
        const umlautButtons = container.querySelectorAll('.umlaut-button');
        umlautButtons.forEach((btn: Element) => {
            if (!(btn instanceof HTMLButtonElement)) return;
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
        button.className = 'umlaut-button px-3 py-2 bg-de-gray-200 hover:bg-de-gray-300 rounded-md font-medium transition-colors';
        button.textContent = umlaut;
        button.title = 'Shift für Großbuchstaben';
        button.type = 'button'; // Verhindert Form-Submit
        container.appendChild(button);
    });
    
    return container;
}

/**
 * Zentrale Management-Funktion für Umlaut-Buttons
 * Stellt eine konsistente API für alle Umlaut-Button-Operationen bereit
 */
export class UmlautButtonManager {
    private static instance: UmlautButtonManager;
    private initialized = false;

    static getInstance(): UmlautButtonManager {
        if (!UmlautButtonManager.instance) {
            UmlautButtonManager.instance = new UmlautButtonManager();
        }
        return UmlautButtonManager.instance;
    }

    /**
     * Initialisiert die Umlaut-Buttons für einen bestimmten Modus
     */
    async setupForMode(dom: DOMElements, state: TrainerState, modeId?: string): Promise<void> {
        if (!this.initialized) {
            this.initialized = true;
        }
        
        const umlautModes = ['type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'];
        
        if (!modeId || umlautModes.includes(modeId)) {
            setupUmlautButtons(dom, state);
        } else {
            hideUmlautButtons(dom);
        }
    }

    /**
     * Registriert ein Input-Element für Umlaut-Unterstützung
     */
    async registerInput(input: HTMLInputElement, state: TrainerState, dom: DOMElements): Promise<void> {
        registerInputForUmlauts(input, state, dom);
    }

    /**
     * Initialisiert Umlaut-Support für multiple Inputs
     */
    async initSupport(inputs: HTMLInputElement[], state: TrainerState, dom: DOMElements): Promise<void> {
        initUmlautSupport(inputs, state, dom);
    }

    /**
     * Versteckt alle Umlaut-Buttons
     */
    async hide(dom: DOMElements): Promise<void> {
        hideUmlautButtons(dom);
    }

    /**
     * Erstellt die Umlaut-Button UI
     */
    async createUI(): Promise<HTMLElement> {
        return createUmlautButtonsUI();
    }
}

/**
 * Zentrale Initialisierungsfunktion für Umlaut-Buttons
 * Diese Funktion ist der einzige Einstiegspunkt für alle Umlaut-Button-Operationen
 * und stellt sicher, dass alle Imports konsistent sind.
 */
export async function initializeUmlautButtons(
    operation: 'setup' | 'hide' | 'register' | 'init',
    dom: DOMElements,
    state: TrainerState,
    options?: {
        modeId?: string;
        input?: HTMLInputElement;
        inputs?: HTMLInputElement[];
    }
): Promise<void> {
    try {
        switch (operation) {
            case 'setup':
                const modeId = options?.modeId;
                const umlautModes = ['type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'];
                if (!modeId || umlautModes.includes(modeId)) {
                    setupUmlautButtons(dom, state);
                } else {
                    hideUmlautButtons(dom);
                }
                break;
                
            case 'hide':
                hideUmlautButtons(dom);
                break;
                
            case 'register':
                if (options?.input) {
                    registerInputForUmlauts(options.input, state, dom);
                }
                break;
                
            case 'init':
                if (options?.inputs) {
                    initUmlautSupport(options.inputs, state, dom);
                }
                break;
        }
    } catch (error) {
        console.error('❌ Fehler bei Umlaut-Button-Operation:', error);
    }
}

// Export der Manager-Instanz für einfache Verwendung
export const umlautManager = UmlautButtonManager.getInstance();