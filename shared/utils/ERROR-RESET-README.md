# Fehlerzähler-Reset Lösung

## Problem
Die Fehlerzähler in den Übungen wurden nicht korrekt zurückgesetzt, wenn eine neue Übung gestartet wurde. Alte Fehlerzähler blieben bestehen und verfälschten die Anzeige.

## Lösung
Die Lösung wurde in `shared/utils/error-reset.ts` implementiert und setzt Fehlerzähler auf mehreren Ebenen zurück:

### 1. State zurücksetzen
- `correctInCurrentRound = 0`
- `attemptedInCurrentRound = 0`
- `wordsToRepeatByMode[modeId] = new Set()`

### 2. localStorage löschen
- `localStorage.removeItem('trainer-words-to-repeat')`
- Wichtig: localStorage ist die Hauptquelle für `wordsToRepeatByMode`

### 3. Firebase zurücksetzen
- `firebaseSyncService.saveProgress(emptyProgress)`
- Firebase speichert die Daten in der Cloud und lädt sie beim Reload wieder

## Verwendung

### Automatischer Reset bei neuen Übungen
```typescript
// In setMode() - nur für normale Übungen (nicht für Wiederholungen)
if (!isRepeat) {
    resetErrorCountsForNewExercise(state, modeId, saveWordsToRepeat);
}
```

### Manueller Reset aller Fehlerzähler
```typescript
// Für manuelle Aufrufe (z.B. über Browser-Konsole)
resetAllErrorCounts(state, saveWordsToRepeat);
```

### Prüfen von Fehlerzählern
```typescript
// Prüfen ob Fehler vorhanden sind
const hasErrors = hasErrorCounts(state, modeId);

// Anzahl der Fehler abrufen
const errorCount = getErrorCount(state, modeId);
```

## Wichtige Hinweise

### Wann wird zurückgesetzt?
- ✅ **Normale Übungen:** Fehlerzähler werden zurückgesetzt
- ❌ **Wiederholungen:** Fehlerzähler bleiben (für gezielte Fehlerübung)
- ❌ **Tests:** Fehlerzähler bleiben (für spätere Fehleranalyse)

### Warum localStorage löschen?
Die Firebase-Services haben keine `saveWordsToRepeat` Methode. Die Fehlerzähler werden hauptsächlich in localStorage gespeichert und von dort wieder geladen.

### Firebase-Synchronisation
Firebase speichert die Daten in der Cloud. Beim nächsten Laden werden sie wieder heruntergeladen. Daher muss auch Firebase zurückgesetzt werden.

## Integration in trainer.ts

Die Lösung ist bereits in `trainer.ts` integriert:

```typescript
// In setMode() Funktion
if (!isRepeat) {
    console.log('🔄 Setze Fehlerzähler für neue Übung zurück...');
    state.correctInCurrentRound = 0;
    state.attemptedInCurrentRound = 0;
    
    if (state.wordsToRepeatByMode[modeId]) {
        state.wordsToRepeatByMode[modeId] = new Set();
        saveWordsToRepeat();
    }
    
    localStorage.removeItem('trainer-words-to-repeat');
    
    if ((window as any).firebaseSyncService) {
        const emptyProgress = {};
        (window as any).firebaseSyncService.saveProgress(emptyProgress);
    }
}
```

## Debugging

Falls die Fehlerzähler immer noch nicht zurückgesetzt werden:

1. **Browser-Konsole prüfen:** Schauen Sie nach den Console-Logs
2. **localStorage prüfen:** `localStorage.getItem('trainer-words-to-repeat')`
3. **Firebase prüfen:** Schauen Sie in der Firebase-Konsole nach den Daten
4. **Manueller Reset:** `window.resetAllErrorCounts()` in der Browser-Konsole

## Dateien
- `shared/utils/error-reset.ts` - Utility-Funktionen
- `trainer.ts` - Integration in setMode()
- `shared/utils/ERROR-RESET-README.md` - Diese Dokumentation 