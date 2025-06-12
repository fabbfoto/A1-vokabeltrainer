/**
 * Vergleicht zwei Antworten tolerant. Trimmt Leerzeichen und ignoriert Groß-/Kleinschreibung.
 * Erkennt Nomen-Notationen und behandelt diese als eine Einheit.
 * @param {string} userInput Die Eingabe des Benutzers.
 * @param {string} correctAnswer Die korrekte Antwort.
 * @returns {boolean} True, wenn die Antworten übereinstimmen.
 */
function vergleicheAntwort(userInput, correctAnswer) {
    if (typeof userInput !== 'string' || typeof correctAnswer !== 'string') {
        return false;
    }
    
    const normalizedUserInput = userInput.trim().toLowerCase();
    const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase();

    // KORREKTUR HIER: Prüfen, ob es sich um eine Nomen-Notation handelt.
    // Ein Komma gefolgt von einem Leerzeichen und einem Bindestrich ist ein starkes Indiz.
    if (correctAnswer.includes(', -')) {
        // Wenn ja, vergleiche die Zeichenketten direkt.
        return normalizedUserInput === normalizedCorrectAnswer;
    } else {
        // Ansonsten, benutze die alte Logik für mögliche Synonyme.
        const correctOptions = correctAnswer.split(',').map(s => s.trim().toLowerCase());
        return correctOptions.includes(normalizedUserInput);
    }
}

/**
 * Nutzt die Web Speech API, um Text vorzulesen.
 * @param {string} text Der vorzulesende Text.
 * @param {string} [lang='de-DE'] Die Sprache (z.B. 'de-DE', 'en-US').
 */
function speak(text, lang = 'de-DE') {
    if ('speechSynthesis' in window && text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.9;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Speech Synthesis wird von diesem Browser nicht unterstützt.");
    }
}

/**
 * Parst einen Nomen-String (z.B. "r Held, -en") in ein Objekt.
 * @param {string} nomenString Der String aus dem Vokabular.
 * @returns {{genus: string, singular: string, pluralInfo: string, isPluralOnly: boolean}|null}
 */
function parseNounString(nomenString) {
    if (!nomenString) return null;
    if (nomenString.includes('(Pl.)')) {
        return {
            genus: 'e',
            singular: nomenString.replace('(Pl.)', '').trim(),
            pluralInfo: '(Pl.)',
            isPluralOnly: true
        };
    }
    const parts = nomenString.split(',');
    if (parts.length < 2) return { genus: null, singular: nomenString.trim(), pluralInfo: '', isPluralOnly: false };
    const genusAndSingular = parts[0].trim();
    const pluralInfo = parts[1].trim();
    const genus = genusAndSingular.split(' ')[0];
    const singular = genusAndSingular.substring(genus.length).trim();
    return {
        genus: genus,
        singular: singular,
        pluralInfo: `-${pluralInfo}`,
        isPluralOnly: false
    };
}

/**
 * Mischt die Elemente eines Arrays zufällig durch (Fisher-Yates Algorithmus).
 * @param {Array} array Das zu mischende Array.
 * @returns {Array} Das gemischte Array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Teilt einen Satz in ein Array von Wörtern auf.
 * @param {string} sentence Der zu teilende Satz.
 * @returns {Array<string>} Ein Array der Wörter.
 */
function splitSentence(sentence) {
    if (typeof sentence !== 'string') return [];
    return sentence.match(/\S+/g) || [];
}

/**
 * Generiert die vollständige Nomen-Antwortzeichenkette mit Artikel und Plural.
 * Z.B. aus "r Held, -en" wird "der Held, -en".
 * @param {string} nomenNotation Die Notation aus der Vokabeldatei (z.B. "r Arzt, -ä-e").
 * @returns {string|null} Die vollständige Zeichenkette oder null, wenn die Eingabe ungültig ist.
 */
function getFullNounAnswer(nomenNotation) {
    if (!nomenNotation || typeof nomenNotation !== 'string' || !nomenNotation.includes(',')) {
        return null;
    }
    const genusMap = { 'r': 'der', 'e': 'die', 's': 'das' };
    const genusAbbr = nomenNotation.substring(0, 1);
    if (genusMap[genusAbbr]) {
        return genusMap[genusAbbr] + nomenNotation.slice(1);
    }
    return nomenNotation;
}