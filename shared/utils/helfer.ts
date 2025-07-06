//import { Word } from '../types/index';

// Window-Erweiterung für currentAudio
declare global {
  interface Window {
    currentAudio?: HTMLAudioElement;
  }
}

export async function speak(text: string, lang: string = 'de-DE'): Promise<void> {
  const NETLIFY_FUNCTION_PATH = '/.netlify/functions/getGoogleVoice';
  
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }
  
  try {
    const response = await fetch(NETLIFY_FUNCTION_PATH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, lang }),
    });
    
    if (!response.ok) {
      throw new Error(`Fehler beim Abrufen der Audio-Datei: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.audioUrl) {
      const audio = new Audio(data.audioUrl);
      window.currentAudio = audio;
      await audio.play();
    } else {
      throw new Error('Keine Audio-URL erhalten');
    }
  } catch (error) {
    console.error('[speak] Fehler beim Abspielen der Sprache:', error);
  }
}

export function vergleicheAntwort(userAnswer: string, correctAnswer: string, { ignorePunctuation = false } = {}): boolean {
  let processedUserAnswer = userAnswer.trim().toLowerCase();
  let processedCorrectAnswer = correctAnswer.trim().toLowerCase();
  
  // Artikel am Anfang entfernen (der, die, das, ein, eine, einen, einem, einer, eines)
  const artikelRegex = /^(der|die|das|ein|eine|einen|einem|einer|eines)\s+/i;
  processedUserAnswer = processedUserAnswer.replace(artikelRegex, '');
  processedCorrectAnswer = processedCorrectAnswer.replace(artikelRegex, '');
  
  if (ignorePunctuation) {
    const punctuationRegex = /[.,;:!?'"„"»«]/g;
    processedUserAnswer = processedUserAnswer.replace(punctuationRegex, "");
    processedCorrectAnswer = processedCorrectAnswer.replace(punctuationRegex, "");
  }
  
  return processedUserAnswer === processedCorrectAnswer;
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function setUIMode(modeId: string): void {
  console.log(`[setUIMode] Aufgerufen mit modeId: ${modeId}`);
  const uiModes = document.querySelectorAll<HTMLElement>('.ui-mode');
  console.log(`[setUIMode] ${uiModes.length} Elemente mit Klasse .ui-mode gefunden.`);
  
  if (uiModes.length === 0) {
    console.warn("[setUIMode] Keine Elemente mit der Klasse '.ui-mode' gefunden. UI-Umschaltung funktioniert nicht.");
  }

  uiModes.forEach(modeEl => {
    console.log(`[setUIMode] Verarbeite Element: #${modeEl.id}`);
    if (modeEl.id === modeId) {
      console.log(`[setUIMode] Zeige Element #${modeEl.id}`);
      modeEl.classList.remove('hidden');
      if (modeEl.id === 'trainer-main-view' || modeEl.id === 'navigation-view') {
        modeEl.style.display = 'flex';
      } else {
        modeEl.style.display = 'block';
      }
      console.log(`[setUIMode] Style für #${modeEl.id}: display=${modeEl.style.display}, Klassen=${modeEl.className}`);
    } else {
      console.log(`[setUIMode] Verstecke Element #${modeEl.id}`);
      modeEl.style.display = 'none';
      console.log(`[setUIMode] Style für #${modeEl.id}: display=${modeEl.style.display}, Klassen=${modeEl.className}`);
    }
  });
  
  const activeElement = document.getElementById(modeId);
  if (activeElement && activeElement.style.display !== 'none') {
    console.log(`[setUIMode] Element #${modeId} sollte jetzt sichtbar sein.`);
  } else if (activeElement) {
    console.error(`[setUIMode] FEHLER: Element #${modeId} ist nach dem Anzeigen immer noch versteckt! display: ${activeElement.style.display}`);
  } else {
    console.error(`[setUIMode] FEHLER: Element mit ID #${modeId} wurde nicht im DOM gefunden!`);
  }
}

let currentColorTheme = localStorage.getItem('vokabeltrainer-theme') || 'german';

export function calculateProgressPercentage(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function getProgressColorClass(completed: number, total: number): string {
  const percentage = calculateProgressPercentage(completed, total);
  
  if (currentColorTheme === 'german') {
    if (percentage < 34) return 'bg-de-black';
    if (percentage < 67) return 'bg-de-red';
    return 'bg-de-gold';
  }
  
  return 'bg-blue-500';
}

export function insertTextAtCursor(inputElement: HTMLInputElement, text: string): void {
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

// Parse Noun String Interface
interface ParsedNoun {
  genus: string;
  singular: string;
  pluralInfo: string;
  isPluralOnly: boolean;
}

export function parseNounString(nounString: string): ParsedNoun | null {
  if (!nounString) return null;
  
  if (nounString.includes('(Pl.)')) {
    return {
      genus: 'e',
      singular: nounString.replace(' (Pl.)', '').trim(),
      pluralInfo: '(Pl.)',
      isPluralOnly: true
    };
  }
  
  const parts = nounString.split(',');
  if (parts.length < 2) {
    const firstSpaceIndex = nounString.indexOf(' ');
    if (firstSpaceIndex > -1) {
      const genus = nounString.charAt(0);
      const singular = nounString.substring(1, firstSpaceIndex).trim();
      const pluralInfo = nounString.substring(firstSpaceIndex).trim();
      return { genus, singular, pluralInfo, isPluralOnly: false };
    }
    return null;
  }
  
  const firstPart = parts[0].trim();
  const genus = firstPart.charAt(0);
  const singular = firstPart.substring(1).trim();
  const pluralInfo = parts[1].trim();
  return { genus, singular, pluralInfo, isPluralOnly: false };
}

// Zerlegt einen Satz in ein Array von Wörtern
export function splitSentence(sentence: string): string[] {
    if (typeof sentence !== 'string') return [];
    return sentence.match(/\S+/g) || [];
}
