// Test-Script für automatische Weiterleitung nach Fehlerkorrektur
// In der Browser-Konsole ausführen: copy-paste dieses Script

console.log('🚀 Test für automatische Weiterleitung nach Fehlerkorrektur');

// Test: Simuliere Fehler und dann Korrektur
window.testAutoContinue = function() {
    console.log('🧪 Teste automatische Weiterleitung...');
    
    if (!window.state) {
        console.error('State nicht gefunden');
        return;
    }
    
    // 1. Prüfe aktuellen Status
    console.log('=== AKTUELLER STATUS ===');
    console.log('Repeat Session aktiv?', window.state.isRepeatSessionActive);
    console.log('Aktueller Modus:', window.state.currentMode);
    console.log('Aktuelles Wort:', window.state.currentWord?.german);
    
    // 2. Simuliere Fehler (falls nicht im Wiederholungsmodus)
    if (!window.state.isRepeatSessionActive) {
        console.log('📝 Simuliere Fehler...');
        if (window.processAnswer) {
            window.processAnswer(false, 'Test-Antwort');
        }
    }
    
    // 3. Starte Wiederholungsmodus (falls Fehler vorhanden)
    const currentMode = window.state.currentMode;
    if (currentMode && window.state.wordsToRepeatByMode[currentMode]?.size > 0) {
        console.log('🔄 Starte Wiederholungsmodus...');
        if (window.setMode) {
            window.setMode(currentMode, true);
        }
    } else {
        console.log('ℹ️  Keine Fehler zum Wiederholen vorhanden');
    }
    
    // 4. Simuliere korrekte Antwort im Wiederholungsmodus
    setTimeout(() => {
        if (window.state.isRepeatSessionActive) {
            console.log('✅ Simuliere korrekte Antwort im Wiederholungsmodus...');
            if (window.processAnswer) {
                window.processAnswer(true);
            }
        } else {
            console.log('ℹ️  Nicht im Wiederholungsmodus');
        }
    }, 2000);
};

// Test: Vollständiger Workflow
window.testFullWorkflow = function() {
    console.log('🔄 Teste vollständigen Workflow...');
    
    // 1. Fehler machen
    console.log('1️⃣ Mache absichtlich einen Fehler...');
    if (window.processAnswer) {
        window.processAnswer(false, 'Falsche Antwort');
    }
    
    // 2. Warte und starte Wiederholung
    setTimeout(() => {
        console.log('2️⃣ Starte Wiederholungsmodus...');
        const currentMode = window.state?.currentMode;
        if (currentMode && window.setMode) {
            window.setMode(currentMode, true);
        }
    }, 3000);
    
    // 3. Löse den Fehler
    setTimeout(() => {
        console.log('3️⃣ Löse den Fehler...');
        if (window.processAnswer) {
            window.processAnswer(true);
        }
    }, 6000);
    
    // 4. Beobachte automatische Weiterleitung
    setTimeout(() => {
        console.log('4️⃣ Prüfe automatische Weiterleitung...');
        console.log('Repeat Session noch aktiv?', window.state?.isRepeatSessionActive);
        console.log('Aktuelles Wort:', window.state?.currentWord?.german);
    }, 8000);
};

// Test: Überwache processAnswer
const origProcessAnswer = window.processAnswer;
window.processAnswer = function(isCorrect, answer) {
    console.log('[PROCESS] Aufruf:', {
        isCorrect,
        repeatMode: window.state?.isRepeatSessionActive,
        word: window.state?.currentWord?.german,
        errorsBefore: window.state?.wordsToRepeatByMode[window.state?.currentMode]?.size
    });
    
    if (origProcessAnswer) {
        origProcessAnswer.call(this, isCorrect, answer);
    }
    
    // Nach kurzer Pause Status prüfen
    setTimeout(() => {
        console.log('[PROCESS] Nachher:', {
            errorsAfter: window.state?.wordsToRepeatByMode[window.state?.currentMode]?.size,
            repeatMode: window.state?.isRepeatSessionActive,
            nextWord: window.state?.currentWord?.german
        });
    }, 1000);
};

// Test: Überwache loadNextTask
const origLoadNextTask = window.loadNextTask;
window.loadNextTask = function() {
    console.log('[LOAD] loadNextTask aufgerufen:', {
        repeatMode: window.state?.isRepeatSessionActive,
        currentIndex: window.state?.currentWordIndex,
        totalWords: window.state?.shuffledWordsForMode?.length,
        currentWord: window.state?.currentWord?.german
    });
    
    if (origLoadNextTask) {
        origLoadNextTask.call(this);
    }
    
    console.log('[LOAD] loadNextTask beendet:', {
        newIndex: window.state?.currentWordIndex,
        newWord: window.state?.currentWord?.german
    });
};

// Debug: Zeige Status
window.showStatus = function() {
    console.log('=== STATUS ===');
    console.log('Repeat Session:', window.state?.isRepeatSessionActive);
    console.log('Test Mode:', window.state?.isTestModeActive);
    console.log('Correction Mode:', window.state?.isCorrectionMode);
    console.log('Current Mode:', window.state?.currentMode);
    console.log('Current Word:', window.state?.currentWord?.german);
    console.log('Word Index:', window.state?.currentWordIndex);
    console.log('Total Words:', window.state?.shuffledWordsForMode?.length);
    
    // Fehler pro Modus
    Object.keys(window.state?.wordsToRepeatByMode || {}).forEach(mode => {
        const errors = window.state.wordsToRepeatByMode[mode];
        console.log(`${mode}: ${errors.size} Fehler`);
    });
};

// Globale Funktionen verfügbar machen
window.testAutoContinue = testAutoContinue;
window.testFullWorkflow = testFullWorkflow;
window.showStatus = showStatus;

console.log('📋 Verfügbare Test-Funktionen:');
console.log('  testAutoContinue() - Testet automatische Weiterleitung');
console.log('  testFullWorkflow() - Vollständiger Workflow-Test');
console.log('  showStatus()      - Zeigt aktuellen Status');

// Automatisch Status anzeigen
setTimeout(() => {
    console.log('🚀 Zeige initialen Status in 2 Sekunden...');
    setTimeout(showStatus, 2000);
}, 1000); 