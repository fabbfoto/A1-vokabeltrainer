// shared/utils/error-reset.ts
// Utility für das Zurücksetzen von Fehlerzählern in Übungen

import type { ModeId } from '../types/trainer';

/**
 * Setzt die Fehlerzähler für eine neue Übung zurück
 * Wird nur für normale Übungen aufgerufen, NICHT für Wiederholungen oder Tests
 * 
 * @param state - Der aktuelle Trainer-State
 * @param modeId - Der Modus, für den die Fehlerzähler zurückgesetzt werden sollen
 * @param saveWordsToRepeat - Funktion zum Speichern der Words-to-Repeat
 */
export function resetErrorCountsForNewExercise(
    state: { training: { correctInCurrentRound: number; attemptedInCurrentRound: number }; progress: { wordsToRepeatByMode: Record<string, Set<string>> } }, 
    modeId: ModeId, 
    saveWordsToRepeat: () => void
): void {

    
    // 1. Aktuelle Übungszähler zurücksetzen
    state.training.correctInCurrentRound = 0;
    state.training.attemptedInCurrentRound = 0;
    
    // 2. Fehlerzähler für diesen Modus zurücksetzen
    if (state.progress.wordsToRepeatByMode[modeId]) {
        state.progress.wordsToRepeatByMode[modeId] = new Set();
        saveWordsToRepeat();

    }
    
    // 3. localStorage direkt löschen (da Firebase-Services keine saveWordsToRepeat haben)
    localStorage.removeItem('trainer-words-to-repeat');

    
    // 4. Firebase Progress zurücksetzen (falls verfügbar)
    if (window.firebaseSyncService) {
        try {
            // Leeren Progress an Firebase senden
            const emptyProgress = {};
            window.firebaseSyncService.saveProgress(emptyProgress);
    
        } catch (error) {
            console.warn('⚠️ Fehler beim Firebase-Reset:', error);
        }
    }
}

/**
 * Vollständiger Reset aller Fehlerzähler (für manuelle Aufrufe)
 * Setzt alle Fehlerzähler für alle Modi zurück
 * 
 * @param state - Der aktuelle Trainer-State
 * @param saveWordsToRepeat - Funktion zum Speichern der Words-to-Repeat
 */
export function resetAllErrorCounts(
    state: { training: { correctInCurrentRound: number; attemptedInCurrentRound: number }; progress: { wordsToRepeatByMode: Record<string, Set<string>> } }, 
    saveWordsToRepeat: () => void
): void {

    
    // 1. State zurücksetzen
    state.training.correctInCurrentRound = 0;
    state.training.attemptedInCurrentRound = 0;
    state.progress.wordsToRepeatByMode = {};
    
    // 2. localStorage löschen
    localStorage.removeItem('trainer-words-to-repeat');
    
    
    // 3. Speichern
    saveWordsToRepeat();
    
    // 4. Firebase zurücksetzen (falls verfügbar)
    if (window.firebaseSyncService) {
        try {
            const emptyProgress = {};
            window.firebaseSyncService.saveProgress(emptyProgress);
    
        } catch (error) {
            console.warn('⚠️ Fehler beim Firebase-Reset:', error);
        }
    }
    

}

/**
 * Prüft, ob Fehlerzähler für einen bestimmten Modus vorhanden sind
 * 
 * @param state - Der aktuelle Trainer-State
 * @param modeId - Der zu prüfende Modus
 * @returns true wenn Fehler vorhanden sind, false sonst
 */
export function hasErrorCounts(state: { progress: { wordsToRepeatByMode: Record<string, Set<string>> } }, modeId: ModeId): boolean {
    const errorSet = state.progress.wordsToRepeatByMode[modeId];
    return errorSet && errorSet.size > 0;
}

/**
 * Gibt die Anzahl der Fehler für einen bestimmten Modus zurück
 * 
 * @param state - Der aktuelle Trainer-State
 * @param modeId - Der zu prüfende Modus
 * @returns Anzahl der Fehler
 */
export function getErrorCount(state: { progress: { wordsToRepeatByMode: Record<string, Set<string>> } }, modeId: ModeId): number {
    const errorSet = state.progress.wordsToRepeatByMode[modeId];
    return errorSet ? errorSet.size : 0;
} 