// shared/utils/error-analysis.ts
// Analysiere was im localStorage gespeichert ist

interface Word {
    id: string;
    german: string;
    english: string;
}

interface WordsToRepeat {
    [mode: string]: string[];
}

interface TrainerState {
    currentVocabularySet: Word[];
}

/**
 * Analysiert die gespeicherten Fehlerzähler im localStorage
 * und vergleicht sie mit den aktuellen Vokabeln
 */
export function analyzeErrorCounts(): void {
    const wordsToRepeat: WordsToRepeat = JSON.parse(
        localStorage.getItem('trainer-words-to-repeat') || '{}'
    );
    const currentVocab: Word[] = window.state?.training.currentVocabularySet || [];



    // Prüfe ob die Fehler-IDs in den aktuellen Vokabeln existieren
    Object.entries(wordsToRepeat).forEach(([mode, ids]) => {
        const matching = ids.filter(id => 
            currentVocab.some(word => word.id === id)
        );

    });


}

/**
 * Prüft ob Fehlerzähler für einen bestimmten Modus vorhanden sind
 * @param mode - Der zu prüfende Modus
 * @returns true wenn Fehler vorhanden sind, false sonst
 */
export function hasErrorsForMode(mode: string): boolean {
    const wordsToRepeat: WordsToRepeat = JSON.parse(
        localStorage.getItem('trainer-words-to-repeat') || '{}'
    );
    return wordsToRepeat[mode] && wordsToRepeat[mode].length > 0;
}

/**
 * Gibt die Anzahl der Fehler für einen bestimmten Modus zurück
 * @param mode - Der zu prüfende Modus
 * @returns Anzahl der Fehler
 */
export function getErrorCountForMode(mode: string): number {
    const wordsToRepeat: WordsToRepeat = JSON.parse(
        localStorage.getItem('trainer-words-to-repeat') || '{}'
    );
    return wordsToRepeat[mode] ? wordsToRepeat[mode].length : 0;
}

/**
 * Zeigt eine Zusammenfassung aller Fehlerzähler
 */
export function showErrorSummary(): void {
    const wordsToRepeat: WordsToRepeat = JSON.parse(
        localStorage.getItem('trainer-words-to-repeat') || '{}'
    );
    

}

// Automatische Ausführung wenn die Datei direkt geladen wird
if (typeof window !== 'undefined') {
    // Globale Funktionen für Browser-Konsole verfügbar machen
    window.analyzeErrorCounts = analyzeErrorCounts;
    window.hasErrorsForMode = hasErrorsForMode;
    window.getErrorCountForMode = getErrorCountForMode;
    window.showErrorSummary = showErrorSummary;
} 