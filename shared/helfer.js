// helfer.js - Modul mit neuer, zentraler splitSentence Funktion

export async function speak(text, lang = 'de-DE') {
  const NETLIFY_FUNCTION_PATH = '/.netlify/functions/getGoogleVoice';
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

  console.log("User Answer:", processedUserAnswer); // Debugging
  console.log("Correct Answer:", processedCorrectAnswer); // Debugging


  
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
    console.log(`[setUIMode] Aufgerufen mit modeId: ${modeId}`);
    const uiModes = document.querySelectorAll('.ui-mode');
    console.log(`[setUIMode] ${uiModes.length} Elemente mit Klasse .ui-mode gefunden.`);
    
    if (uiModes.length === 0) {
        console.warn("[setUIMode] Keine Elemente mit der Klasse '.ui-mode' gefunden. UI-Umschaltung funktioniert nicht.");
    }

    uiModes.forEach(modeEl => {
        console.log(`[setUIMode] Verarbeite Element: #${modeEl.id}`);
        if (modeEl.id === modeId) {
            console.log(`[setUIMode] Zeige Element #${modeEl.id}`);
            modeEl.classList.remove('hidden-view');
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

// Zerlegt einen Satz in ein Array von Wörtern.
export function splitSentence(sentence) {
    if (typeof sentence !== 'string') return [];
    return sentence.match(/\S+/g) || [];
}

/**
 * Formatiert ein deutsches Nomen für die Anzeige, inklusive Artikel und Plural.
 * Erkennt automatisch, ob die Vokabel die `nomen_notation` (Basis-Trainer)
 * oder separate `artikel`/`plural` Felder (Themen-Trainer) verwendet.
 * @param {object} wordData Das Vokabelobjekt.
 * @returns {string} Der formatierte String für die Anzeige.
 */
export function formatGermanNoun(wordData) {
    const germanWord = wordData.german || "";

    if (wordData.nomen_notation && wordData.nomen_notation.includes('(Pl.)')) {
        const parsed = parseNounString(wordData.nomen_notation);
        if (parsed && parsed.isPluralOnly) {
            return `die ${parsed.singular} (Pl.)`;
        }
    }

    if (wordData.artikel && wordData.plural) {
        return `${wordData.artikel} ${germanWord}, ${wordData.plural}`;
    }

    return germanWord;
}

/**
 * Zeigt einen formatierten Beispielsatz in einem DOM-Element an,
 * inklusive Kasus-Hervorhebung.
 * @param {Array<Object>|string} sentenceData Ein Array von Objekten mit { text: string, kasus: string }
 *                                            oder ein einfacher String als Fallback.
 * @param {HTMLElement} targetElement Das DOM-Element, in dem der Satz angezeigt werden soll.
 */
export function displayFormattedSentence(sentenceData, targetElement) {
    if (!targetElement) {
        console.error("displayFormattedSentence: targetElement ist undefined.");
        return;
    }
    targetElement.innerHTML = '';

    if (Array.isArray(sentenceData)) {
        sentenceData.forEach(part => {
            const span = document.createElement('span');
            span.textContent = part.text;
            if (part.kasus && part.kasus !== 'none') {
                span.className = `kasus-${part.kasus}`;
            }
            targetElement.appendChild(span);
        });
    } else if (typeof sentenceData === 'string') {
        targetElement.textContent = sentenceData;
    }
}

/**
 * Berechnet den Fortschritt in Prozent.
 * @param {number} completed Die Anzahl der abgeschlossenen Aufgaben.
 * @param {number} total Die Gesamtanzahl der Aufgaben.
 * @returns {number} Der Fortschritt in Prozent (0-100).
 */
export function calculateProgressPercentage(completed, total) {
    if (total === 0) return 0;
    return (completed / total) * 100;
}

/**
 * Fügt Text an der aktuellen Cursorposition in einem Input-Feld ein.
 * @param {HTMLInputElement} inputElement - Das Ziel-Eingabefeld.
 * @param {string} text - Der einzufügende Text.
 */
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

// =======================================
// FARBSCHEMA-SYSTEM 
// =======================================

let currentColorTheme = localStorage.getItem('vokabeltrainer-theme') || 'german';

export function getProgressColorClass(completed, total) {
    const percentage = calculateProgressPercentage(completed, total);
    
    if (currentColorTheme === 'german') {
        if (percentage < 34) return 'color-black-sr';
        if (percentage < 67) return 'color-red-sr';
        return 'color-gold-sr';
    }
    
    return 'color-original';
}

export function setColorTheme(themeName) {
    currentColorTheme = themeName;
    localStorage.setItem('vokabeltrainer-theme', themeName);
    updateAllProgressBars();
    console.log(`Farbschema gewechselt zu: ${themeName}`);
}

export function updateAllProgressBars() {
    document.querySelectorAll('.progress-bar-fill, .stats-bar, .category-progress-bar-fg').forEach(bar => {
        const widthStyle = bar.style.width;
        const percentage = parseFloat(widthStyle) || 0;
        const completed = percentage;
        const total = 100;
        const newColorClass = getProgressColorClass(completed, total);
        
        bar.classList.remove('color-black-sr', 'color-red-sr', 'color-gold-sr', 'color-original');
        bar.classList.add(newColorClass);
    });
}