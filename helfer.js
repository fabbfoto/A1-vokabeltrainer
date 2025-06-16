// helfer.js - Modul mit exportierten Hilfsfunktionen

/**
 * Ruft die Netlify Function auf, um Text über die Google TTS API vorlesen zu lassen.
 * Stoppt eine eventuell bereits laufende Wiedergabe.
 * @param {string} text Der vorzulesende Text.
 * @param {string} [lang='de-DE'] Der Sprachcode für die TTS-Engine.
 */
export async function speak(text, lang = 'de-DE') {
  const NETLIFY_FUNCTION_PATH = '/.netlify/functions/getGoogleVoice';

  // Stoppt die aktuelle Audio-Wiedergabe, falls vorhanden
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

/**
 * Zerlegt einen Nomen-String (veraltetes Format) in seine Bestandteile.
 * @param {string} nounString Der String aus der Vokabelliste, z.B. "r Tisch, -e".
 * @returns {object | null} Ein Objekt mit Genus, Singular und Plural oder null.
 */
export function parseNounString(nounString) {
  // Diese Funktion wird für die neue Datenstruktur eventuell nicht mehr benötigt,
  // bleibt aber für Kompatibilität oder andere Zwecke erhalten.
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
 * Vergleicht die Antwort des Nutzers mit der korrekten Antwort mit anpassbaren Optionen.
 * @param {string} userAnswer Die Eingabe des Benutzers.
 * @param {string} correctAnswer Die korrekte Antwort.
 * @param {object} [options={}] Optionen für den Vergleich.
 * @param {boolean} [options.caseSensitive=false] Ob Groß/Kleinschreibung beachtet werden soll.
 * @param {boolean} [options.ignorePunctuation=true] Ob Satzzeichen ignoriert werden sollen.
 * @returns {boolean} True, wenn die Antworten übereinstimmen.
 */
export function vergleicheAntwort(userAnswer, correctAnswer, options = {}) {
  const config = {
      caseSensitive: options.caseSensitive === true, // Standard ist false
      ignorePunctuation: options.ignorePunctuation !== false, // Standard ist true
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
 * Wandelt Umschreibungen wie "ae", "oe", "ue" und "ss" in die korrekten
 * deutschen Sonderzeichen (ä, ö, ü, ß) um.
 * Verhindert kontext-falsche Konvertierungen wie bei "Hausfrauen" -> "Hausfraün".
 * @param {string} text Der Eingabetext.
 * @returns {string} Der konvertierte Text.
 */
export function konvertiereUmlaute(text) {
  if (!text) return "";

  let konvertierterText = text;

  // --- Regel 1: Unproblematische Ersetzungen (ae, oe, ss) ---
  // Die Funktion im zweiten Parameter sorgt für korrekte Groß-/Kleinschreibung.
  // "Ae" wird zu "Ä", "ae" wird zu "ä", usw.
  konvertierterText = konvertierterText
    .replace(/ae/gi, match => (match === 'Ae' ? 'Ä' : 'ä'))
    .replace(/oe/gi, match => (match === 'Oe' ? 'Ö' : 'ö'))
    .replace(/ss/g, 'ß'); // "ss" wird immer zu "ß"

  // --- Regel 2: Kontextsensitive Ersetzung für "ue" -> "ü" ---
  // Verwendet einen "negative lookbehind" (?<!)
  // Ersetzt "ue" nur dann, wenn davor KEIN Vokal (a, e, i, o, u) steht.
  // Das verhindert Fehler bei Diphthongen (H[au]sfr[aue]n) oder Vokalfolgen (n[eue]).
  konvertierterText = konvertierterText.replace(/(?<![aeiou])ue/gi, match => {
    // Prüft, ob der Original-Match großgeschrieben war ("Ue"), um "Ü" zu erzeugen.
    return match.toLowerCase() === 'ue' && match.charAt(0) === 'U' ? 'Ü' : 'ü';
  });

  return konvertierterText;
}


/**
 * Mischt die Elemente eines Arrays zufällig durch (Fisher-Yates-Algorithmus).
 * @param {Array} array Das zu mischende Array.
 * @returns {Array} Das gemischte Array.
 */
export function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}