// helfer.js - Jetzt als Modul mit exportierten Funktionen

/**
 * Ruft die Netlify Function auf, um Text über die Google TTS API vorlesen zu lassen.
 */
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
      
      const audioContent = data.audioContent;

      const audioSource = `data:audio/mp3;base64,${audioContent}`;
      const audio = new Audio(audioSource);
      window.currentAudio = audio;
      audio.play();

  } catch (error) {
      console.error("Die Sprachausgabe ist fehlgeschlagen:", error);
      alert("Die Sprachausgabe konnte nicht geladen werden. Bitte die Browser-Konsole (F12) für Details prüfen.");
  }
}

/**
* Zerlegt einen Nomen-String in seine Bestandteile.
*/
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

/**
* Vergleicht die Antwort des Nutzers mit der korrekten Antwort.
*/
export function vergleicheAntwort(userAnswer, correctAnswer, options = {}) {
  const config = {
      caseSensitive: options.caseSensitive !== false,
      ignorePunctuation: options.ignorePunctuation === true,
  };
  let processedUserAnswer = userAnswer.trim();
  let processedCorrectAnswer = correctAnswer.trim();
  if (config.ignorePunctuation) {
      const punctuationRegex = /[.,/#!$%^&*;:{}=\-_`~()?]/g;
      processedUserAnswer = processedUserAnswer.replace(punctuationRegex, "");
      processedCorrectAnswer = processedCorrectAnswer.replace(punctuationRegex, "");
  }
  if (!config.caseSensitive) {
      processedUserAnswer = processedUserAnswer.toLowerCase();
      processedCorrectAnswer = processedCorrectAnswer.toLowerCase();
  }
  return processedUserAnswer === processedCorrectAnswer;
}

/**
 * Wandelt deutsche Umschreibungen (ae, oe, ue, sz) in Umlaute und ß um.
 */
// In der Datei: helfer.js

export function konvertiereUmlaute(text) {
  return text
    // Zuerst die komplett großgeschriebenen Fälle (z.B. bei Caps-Lock)
    .replace(/AE/g, 'Ä')
    .replace(/OE/g, 'Ö')
    .replace(/UE/g, 'Ü')
    // Dann die gemischte Schreibweise (typisch am Wortanfang)
    .replace(/Ae/g, 'Ä')
    .replace(/Oe/g, 'Ö')
    .replace(/Ue/g, 'Ü')
    // Dann die normale Kleinschreibung
    .replace(/ae/g, 'ä')
    .replace(/oe/g, 'ö')
    .replace(/ue/g, 'ü')
    // Und zum Schluss der Sonderfall ß
    .replace(/ss/g, 'ß');
}

/**
 * Mischt die Elemente eines Arrays zufällig durch.
 */
export function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}