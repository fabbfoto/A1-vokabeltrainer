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
  
  return processedUserAnswer === processedCorrectAnswer;
}

// ===== KORRIGIERTE FUNKTION =====
export function konvertiereUmlaute(text) {
    if (typeof text !== 'string' || !text) {
        return "";
    }

    // Die Ersetzungen werden in einer Kette ausgeführt.
    // Der /gi Flag sorgt für eine globale, case-insensitive Suche.
    // Die Callback-Funktion stellt sicher, dass die Groß-/Kleinschreibung des Ersatzes
    // (z.B. 'Ae' -> 'Ä' vs. 'ae' -> 'ä') korrekt behandelt wird.
    const konvertierterText = text
      .replace(/ae/gi, match => (match[0].toUpperCase() === 'A' ? 'Ä' : 'ä'))
      .replace(/oe/gi, match => (match[0].toUpperCase() === 'O' ? 'Ö' : 'ö'))
      .replace(/ue/gi, match => (match[0].toUpperCase() === 'U' ? 'Ü' : 'ü'))
      // KORREKTUR: Nur 'sz' wird zu 'ß'.
      .replace(/sz/gi, 'ß');

    // Die problematische und falsche Zeile .replace(/ss/g, 'ß') wurde entfernt.
    // Die Regex für 'ue' wurde zur Vereinfachung und Konsistenz angepasst.

    return konvertierterText;
}

export function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}

export function aktiviereUmlautKonverter(inputElement) {
    if (!inputElement) return;
    inputElement.addEventListener('input', () => {
        const cursorPos = inputElement.selectionStart;
        const originalValue = inputElement.value;
        const convertedValue = konvertiereUmlaute(originalValue);
        if (originalValue !== convertedValue) {
            inputElement.value = convertedValue;
            inputElement.setSelectionRange(cursorPos, cursorPos);
        }
    });
}

// ===== NEU HINZUGEFÜGT =====
// Zerlegt einen Satz in ein Array von Wörtern.
export function splitSentence(sentence) {
    if (typeof sentence !== 'string') return [];
    return sentence.match(/\S+/g) || [];
}