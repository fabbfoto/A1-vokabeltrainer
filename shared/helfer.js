// helfer.js - Modul mit neuer, zentraler splitSentence Funktion

export async function speak(text, lang = 'de-DE') {
  const NETLIFY_FUNCTION_PATH = '/api/getGoogleVoice';
  if (window.currentAudio) {
      window.currentAudio.pause();
  }
  try {
      const response = await fetch(NETLIFY_FUNCTION_PATH, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: text, lang: lang }),
      });
      if (!response.ok) {
          throw new Error(`Fehler von der Server-Funktion: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.error) {
          throw new Error(`Fehler in der Server-Funktion: ${data.error}`);
      }
      const audioSource = `data:audio/mp3;base64,${data.audioContent}`;
      const audio = new Audio(audioSource);
      window.currentAudio = audio;
      audio.play();
  } catch (error) {
      console.error("Die Sprachausgabe ist fehlgeschlagen:", error);
      alert("Die Sprachausgabe konnte nicht geladen werden. Bitte die Browser-Konsole (F12) für Details prüfen.");
  }
}

export function parseNounString(nounString) {
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

export function vergleicheAntwort(userAnswer, correctAnswer, options = {}) {
  const config = {
      ignorePunctuation: options.ignorePunctuation === true,
  };
  
  let processedUserAnswer = userAnswer.replace(/\s+/g, ' ').trim();
  let processedCorrectAnswer = correctAnswer.replace(/\s+/g, ' ').trim();
  
  if (config.ignorePunctuation) {
      const punctuationRegex = /[.,/#!$%^&*;:{}=\-_`~()?]/g;
      processedUserAnswer = processedUserAnswer.replace(punctuationRegex, "");
      processedCorrectAnswer = processedCorrectAnswer.replace(punctuationRegex, "");
  }
  
  return processedUserAnswer === processedCorrectAnswer;
}

export function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}

/**
 * Steuert die Sichtbarkeit der Haupt-Container der Anwendung.
 * Versteckt alle Elemente mit der Klasse '.ui-mode' und zeigt nur das
 * Element an, dessen ID mit der übergebenen modeId übereinstimmt.
 * @param {string} modeId Die ID des anzuzeigenden Containers.
 */
export function setUIMode(modeId) {
    console.log(`[setUIMode] Aufgerufen mit modeId: ${modeId}`); // Log-Eintrag
    const uiModes = document.querySelectorAll('.ui-mode');
    console.log(`[setUIMode] ${uiModes.length} Elemente mit Klasse .ui-mode gefunden.`);
    
    if (uiModes.length === 0) {
        console.warn("[setUIMode] Keine Elemente mit der Klasse '.ui-mode' gefunden. UI-Umschaltung funktioniert nicht.");
    }

    uiModes.forEach(modeEl => {
        console.log(`[setUIMode] Verarbeite Element: #${modeEl.id}`);
        if (modeEl.id === modeId) {
            console.log(`[setUIMode] Zeige Element #${modeEl.id}`);
            modeEl.classList.remove('hidden-view'); // Wichtig, um `display: none !important` zu entfernen
            // Setzt den display-Stil explizit, um Sichtbarkeit sicherzustellen
            if (modeEl.id === 'trainer-main-view' || modeEl.id === 'navigation-view') { // navigation-view ist für trainer-themen
                modeEl.style.display = 'flex';
            } else { // Dies gilt für 'wortgruppen-selector'
                modeEl.style.display = 'block';
            }
            console.log(`[setUIMode] Style für #${modeEl.id}: display=${modeEl.style.display}, Klassen=${modeEl.className}`);
        } else {
            console.log(`[setUIMode] Verstecke Element #${modeEl.id}`);
            // Andere .ui-mode Elemente ausblenden
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
// ===== NEU HINZUGEFÜGT =====
// Zerlegt einen Satz in ein Array von Wörtern.
export function splitSentence(sentence) {
    if (typeof sentence !== 'string') return [];
    return sentence.match(/\S+/g) || [];
}
// ===== SCHWARZ-ROT-GOLD FARBSCHEMA-SYSTEM =====
let currentColorTheme = localStorage.getItem('vokabeltrainer-theme') || 'german';

export function calculateProgressPercentage(completed, total) {
    if (total === 0) return 0;
    return Math.round((completed / total) * 100);
}

export function getProgressColorClass(completed, total) {
    const percentage = calculateProgressPercentage(completed, total);
    
    if (currentColorTheme === 'german') {
        if (percentage < 34) return 'color-black-sr';
        if (percentage < 67) return 'color-red-sr';
        return 'color-gold-sr';
    }
    
    return 'color-original';
}

export function insertTextAtCursor(inputElement, text) {
    if (!inputElement) return;
    const start = inputElement.selectionStart;
    const end = inputElement.selectionEnd;
    const oldValue = inputElement.value;
    inputElement.value = oldValue.substring(0, start) + text + oldValue.substring(end);
    inputElement.selectionStart = inputElement.selectionEnd = start + text.length;
    inputElement.focus();
    const event = new Event('input', { bubbles: true, cancelable: true });
    inputElement.dispatchEvent(event);
}