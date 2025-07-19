// shared/utils/ui-helpers.ts
// Zentrale UI-Helper-Funktionen für bessere Wartbarkeit

import type { DOMElements } from '../core/types/ui';

/**
 * Zentrale Funktion zum Ein-/Ausschalten der UI-Sichtbarkeit
 */
export function toggleUIVisibility(dom: DOMElements, activeMode: string): void {
    const uiElements = {
        'multipleChoice': dom.mcUiEl,
        'spelling': dom.spellingModeUiEl,
        'cloze': dom.clozeUiEl,
        'sentenceTranslation': dom.sentenceUiEl
    };

    // Alle UI-Elemente ausblenden
    Object.values(uiElements).forEach(element => {
        if (element) element.style.display = 'none';
    });

    // Aktives Element anzeigen
    const activeElement = uiElements[activeMode as keyof typeof uiElements];
    if (activeElement) activeElement.style.display = 'block';
}

/**
 * Zentrale Funktion zum Aktivieren/Deaktivieren von Input-Elementen
 */
export function setInputsEnabled(enabled: boolean): void {
    const selectors = [
        'input[type="text"]',
        'input[type="password"]', 
        'button.choice-button',
        'button:not([disabled])'
    ];

    document.querySelectorAll(selectors.join(', ')).forEach(el => {
        const element = el as HTMLInputElement | HTMLButtonElement;
        element.disabled = !enabled;
        
        if (enabled) {
            element.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        } else {
            element.classList.add('opacity-50', 'cursor-not-allowed');
        }
    });
}

/**
 * Zentrale Funktion zum Einfügen von Text an der Cursor-Position
 */
export function insertTextAtCursor(inputElement: HTMLInputElement | null, text: string): void {
    if (!inputElement) return;
    
    const start = inputElement.selectionStart || 0;
    const end = inputElement.selectionEnd || 0;
    const oldValue = inputElement.value;
    
    inputElement.value = oldValue.substring(0, start) + text + oldValue.substring(end);
    inputElement.selectionStart = inputElement.selectionEnd = start + text.length;
    inputElement.focus();
    
    // Input-Event auslösen
    const event = new Event('input', { bubbles: true, cancelable: true });
    inputElement.dispatchEvent(event);
}

/**
 * Zentrale Funktion zum Formatieren von Beispielsätzen
 */
export function formatExampleSentence(sentence: string | null): string {
    if (!sentence || sentence.trim() === '') return '';
    
    return `<span style="font-family: 'Times New Roman', Times, serif; font-size: 2.5rem; line-height: 1.5;">${sentence}</span>`;
}

/**
 * Zentrale Funktion zum Erstellen von Tailwind-Klassen für Kasus
 */
export function getTailwindCaseClass(kasus: string): string {
    const caseColors: Record<string, string> = {
        'nominativ': 'text-de-green font-semibold',
        'genitiv': 'text-de-gold font-semibold',
        'dativ': 'text-de-red font-semibold',
        'akkusativ': 'text-de-blue font-semibold',
    };
    
    return caseColors[kasus] || 'text-gray-500';
}

/**
 * Zentrale Funktion zum Aufteilen von Sätzen in Wörter
 */
export function splitSentence(sentence: string): string[] {
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

/**
 * Zentrale Funktion zum Validieren von Benutzereingaben
 */
export function validateUserInput(input: string, expectedAnswer: string): {
    isCorrect: boolean;
    normalizedInput: string;
    normalizedExpected: string;
} {
    const normalize = (str: string) => str.toLowerCase().trim().replace(/\s+/g, ' ');
    
    const normalizedInput = normalize(input);
    const normalizedExpected = normalize(expectedAnswer);
    
    return {
        isCorrect: normalizedInput === normalizedExpected,
        normalizedInput,
        normalizedExpected
    };
} 