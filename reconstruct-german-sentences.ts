export function reconstructFromCloze(clozeParts: string[], clozeAnswers: string[]): string {
    if (!clozeParts || !clozeAnswers) return '';
    
    let sentence = clozeParts[0] || '';
    for (let i = 0; i < clozeAnswers.length && i < clozeParts.length - 1; i++) {
        sentence += (clozeAnswers[i] || '') + (clozeParts[i + 1] || '');
    }
    
    return sentence.trim();
}

// Beispiel-Nutzung:
// const germanSentence = reconstructFromCloze(
//     ["Kannst du das ", " anmachen?"], 
//     ["Licht"]
// );
// Ergebnis: "Kannst du das Licht anmachen?"

interface SentencePart {
    text: string;
    case: string;
}

export function createExampleGermanFromCloze(clozeParts: string[], clozeAnswers: string[]): SentencePart[] {
    if (!clozeParts || !clozeAnswers) return [];
    
    const result: SentencePart[] = [];
    
    // Erste Cloze-Part
    if (clozeParts[0]) {
        result.push({ text: clozeParts[0], case: "none" });
    }
    
    // Cloze-Answers und weitere Parts
    for (let i = 0; i < clozeAnswers.length && i < clozeParts.length - 1; i++) {
        if (clozeAnswers[i]) {
            result.push({ text: clozeAnswers[i], case: "none" });
        }
        if (clozeParts[i + 1]) {
            result.push({ text: clozeParts[i + 1], case: "none" });
        }
    }
    
    return result;
}

// Beispiel-Nutzung:
// const exampleGerman = createExampleGermanFromCloze(
//     ["Kannst du das ", " anmachen?"], 
//     ["Licht"]
// );
// Ergebnis: [
//   { text: "Kannst du das ", case: "none" },
//   { text: "Licht", case: "none" },
//   { text: " anmachen?", case: "none" }
// ] 