/**
 * Ruft die Netlify Function auf, um Text über die Google TTS API vorlesen zu lassen.
 * @param {string} text Der vorzulesende Text.
 * @param {string} lang Die Sprache (z.B. 'de-DE').
 */
async function speak(text, lang = 'de-DE') {
  // Der Pfad zu deiner Netlify Function. Netlify leitet dies automatisch an die richtige Funktion weiter.
  const NETLIFY_FUNCTION_PATH = '/.netlify/functions/getGoogleVoice';

  // Falls gerade eine andere Audiodatei abgespielt wird, stoppe sie.
  if (window.currentAudio) {
      window.currentAudio.pause();
  }

  try {
      // Sende den Text an deine "Küchen"-Funktion auf Netlify
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

      // Erstelle eine abspielbare Audio-Quelle aus der Antwort und spiele sie ab
      const audioSource = `data:audio/mp3;base64,${audioContent}`;
      const audio = new Audio(audioSource);
      window.currentAudio = audio; // Speichere die aktuelle Audio-Instanz global
      audio.play();

  } catch (error) {
      console.error("Die Sprachausgabe ist fehlgeschlagen:", error);
      alert("Die Sprachausgabe konnte nicht geladen werden. Bitte die Browser-Konsole (F12) für Details prüfen.");
  }
}


/**
* Zerlegt einen Nomen-String in seine Bestandteile.
*/
function parseNounString(nounString) {
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
function vergleicheAntwort(userAnswer, correctAnswer, options = {}) {
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