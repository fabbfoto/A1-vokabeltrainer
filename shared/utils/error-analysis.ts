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

declare global {
    interface Window {
        state?: TrainerState;
    }
}

/**
 * Analysiert die gespeicherten Fehlerzähler im localStorage
 * und vergleicht sie mit den aktuellen Vokabeln
 */
export function analyzeErrorCounts(): void {
    const wordsToRepeat: WordsToRepeat = JSON.parse(
        localStorage.getItem('trainer-words-to-repeat') || '{}'
    );
    const currentVocab: Word[] = window.state?.currentVocabularySet || [];

    console.log('📊 FEHLER-ANALYSE:');
    console.log('Gespeicherte Fehler:', wordsToRepeat);
    console.log('Aktuelle Vokabeln:', currentVocab.length, 'Wörter');
    console.log('Vokabel-IDs:', currentVocab.map(w => w.id));

    // Prüfe ob die Fehler-IDs in den aktuellen Vokabeln existieren
    Object.entries(wordsToRepeat).forEach(([mode, ids]) => {
        const matching = ids.filter(id => 
            currentVocab.some(word => word.id === id)
        );
        console.log(`Mode ${mode}: ${ids.length} Fehler gespeichert, ${matching.length} in aktuellen Vokabeln gefunden`);
        
        // Zeige Details für nicht gefundene IDs
        const notFound = ids.filter(id => 
            !currentVocab.some(word => word.id === id)
        );
        if (notFound.length > 0) {
            console.log(`  ❌ Nicht gefunden:`, notFound);
        }
        
        // Zeige Details für gefundene IDs
        if (matching.length > 0) {
            console.log(`  ✅ Gefunden:`, matching);
            console.log(`  📝 Wörter:`, matching.map(id => {
                const word = currentVocab.find(w => w.id === id);
                return word ? `${word.german} (${word.english})` : id;
            }));
        }
    });

    // Zusätzliche Analyse: Zeige alle verfügbaren Modi
    console.log('\n🎯 VERFÜGBARE MODI:');
    const availableModes: string[] = [
        'mc-de-en', 
        'type-de-adj', 
        'cloze-adj-de', 
        'sentence-translation-en-de'
    ];
    
    availableModes.forEach(mode => {
        const hasErrors = wordsToRepeat[mode] && wordsToRepeat[mode].length > 0;
        console.log(`${mode}: ${hasErrors ? '✅ Fehler vorhanden' : '❌ Keine Fehler'}`);
    });

    // Zeige localStorage Größe
    console.log('\n💾 LOCALSTORAGE INFO:');
    const storageSize = new Blob([JSON.stringify(wordsToRepeat)]).size;
    console.log('Gesamtgröße:', storageSize, 'Bytes');
    
    const trainerKeys = Object.keys(localStorage).filter(key => 
        key.startsWith('trainer-')
    );
    console.log('Alle Keys:', trainerKeys);
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
    
    console.log('📋 FEHLERZÄHLER-ZUSAMMENFASSUNG:');
    
    if (Object.keys(wordsToRepeat).length === 0) {
        console.log('✅ Keine Fehlerzähler gefunden');
        return;
    }
    
    Object.entries(wordsToRepeat).forEach(([mode, ids]) => {
        console.log(`${mode}: ${ids.length} Fehler`);
    });
    
    const totalErrors = Object.values(wordsToRepeat).reduce(
        (sum, ids) => sum + ids.length, 0
    );
    console.log(`\n📊 Gesamt: ${totalErrors} Fehler`);
}

// Automatische Ausführung wenn die Datei direkt geladen wird
if (typeof window !== 'undefined') {
    // Globale Funktionen für Browser-Konsole verfügbar machen
    (window as any).analyzeErrorCounts = analyzeErrorCounts;
    (window as any).hasErrorsForMode = hasErrorsForMode;
    (window as any).getErrorCountForMode = getErrorCountForMode;
    (window as any).showErrorSummary = showErrorSummary;
} 