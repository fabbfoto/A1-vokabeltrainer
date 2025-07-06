// Debug-Script für Wiederholungs-Modus
// In der Browser-Konsole ausführen: copy-paste dieses Script

console.log('🐛 Debug für Wiederholungs-Modus aktiviert');

// Debug: Zeige aktuelle Fehlerlisten
window.debugErrors = function() {
    if (!window.state) {
        console.error('State nicht gefunden');
        return;
    }
    
    console.log('=== FEHLER-LISTEN DEBUG ===');
    console.log('Repeat Session aktiv?', window.state.isRepeatSessionActive);
    console.log('Aktueller Modus:', window.state.currentMode);
    console.log('Aktuelles Wort:', window.state.currentWord?.german);
    
    Object.keys(window.state.wordsToRepeatByMode).forEach(mode => {
        const errors = window.state.wordsToRepeatByMode[mode];
        console.log(`${mode}: ${errors.size} Fehler`, Array.from(errors));
    });
    
    // Force Update der Buttons
    if (window.ui && window.ui.updateErrorCounts) {
        window.ui.updateErrorCounts(window.dom, window.state, window.learningModes);
        console.log('✅ Buttons aktualisiert');
    }
};

// Debug: Zeige Progress
window.debugProgress = function() {
    if (!window.state) {
        console.error('State nicht gefunden');
        return;
    }
    
    console.log('=== PROGRESS DEBUG ===');
    const progressKey = `${window.state.currentMainTopic}|${window.state.currentSubTopic}`;
    console.log('Progress Key:', progressKey);
    
    if (window.state.globalProgress[progressKey]) {
        Object.keys(window.state.globalProgress[progressKey]).forEach(mode => {
            const progress = window.state.globalProgress[progressKey][mode];
            console.log(`${mode}: ${progress.size} beherrscht`);
        });
    } else {
        console.log('Kein Progress für diesen Key gefunden');
    }
};

// Debug: Simuliere richtige Antwort
window.simulateCorrect = function() {
    if (!window.processAnswer) {
        console.error('processAnswer nicht gefunden');
        return;
    }
    
    console.log('🎯 Simuliere richtige Antwort...');
    window.processAnswer(true);
};

// Debug: Simuliere falsche Antwort
window.simulateIncorrect = function() {
    if (!window.processAnswer) {
        console.error('processAnswer nicht gefunden');
        return;
    }
    
    console.log('❌ Simuliere falsche Antwort...');
    window.processAnswer(false, 'Test-Antwort');
};

// Debug: Überwache processAnswer
const origProcessAnswer = window.processAnswer;
window.processAnswer = function(isCorrect, answer) {
    console.log('[PROCESS] Vorher:', {
        isCorrect,
        repeatMode: window.state?.isRepeatSessionActive,
        word: window.state?.currentWord?.german,
        errorsBefore: window.state?.wordsToRepeatByMode[window.state?.currentMode]?.size
    });
    
    if (origProcessAnswer) {
        origProcessAnswer.call(this, isCorrect, answer);
    }
    
    console.log('[PROCESS] Nachher:', {
        errorsAfter: window.state?.wordsToRepeatByMode[window.state?.currentMode]?.size,
        progressKey: `${window.state?.currentMainTopic}|${window.state?.currentSubTopic}`,
        progressSize: window.state?.globalProgress[`${window.state?.currentMainTopic}|${window.state?.currentSubTopic}`]?.[window.state?.currentMode]?.size
    });
};

// Debug: Teste Wiederholungs-Modus
window.testRepeatMode = function() {
    console.log('🧪 Teste Wiederholungs-Modus...');
    
    // 1. Zeige aktuelle Fehler
    debugErrors();
    
    // 2. Zeige aktuellen Progress
    debugProgress();
    
    // 3. Prüfe UI-Status
    const repeatButtons = document.querySelectorAll('[id^="mode-repeat-"]');
    console.log('Repeat Buttons gefunden:', repeatButtons.length);
    repeatButtons.forEach(btn => {
        const id = btn.id;
        const count = btn.querySelector('.count-display')?.textContent;
        const disabled = btn.hasAttribute('disabled');
        console.log(`  ${id}: ${count} Fehler, disabled: ${disabled}`);
    });
    
    // 4. Prüfe Fortschrittsbalken
    const progressBars = document.querySelectorAll('#category-stats-container .bg-gray-200 > div');
    console.log('Fortschrittsbalken gefunden:', progressBars.length);
    progressBars.forEach((bar, i) => {
        const width = bar.style.width;
        const bgColor = window.getComputedStyle(bar).backgroundColor;
        console.log(`  Bar ${i + 1}: ${width}, Farbe: ${bgColor}`);
    });
};

// Debug: Reset alles
window.resetRepeatMode = function() {
    console.log('🔄 Reset Wiederholungs-Modus...');
    
    if (window.state) {
        // Alle Fehlerlisten leeren
        Object.keys(window.state.wordsToRepeatByMode).forEach(mode => {
            window.state.wordsToRepeatByMode[mode].clear();
        });
        
        // Wiederholungs-Modus beenden
        window.state.isRepeatSessionActive = false;
        
        // Speichern
        if (window.saveWordsToRepeat) {
            window.saveWordsToRepeat();
        }
        
        // UI aktualisieren
        if (window.ui && window.ui.updateErrorCounts) {
            window.ui.updateErrorCounts(window.dom, window.state, window.learningModes);
        }
        
        console.log('✅ Reset abgeschlossen');
    }
};

// Globale Funktionen verfügbar machen
window.debugErrors = debugErrors;
window.debugProgress = debugProgress;
window.simulateCorrect = simulateCorrect;
window.simulateIncorrect = simulateIncorrect;
window.testRepeatMode = testRepeatMode;
window.resetRepeatMode = resetRepeatMode;

console.log('📋 Verfügbare Debug-Funktionen:');
console.log('  debugErrors()      - Zeige Fehlerlisten');
console.log('  debugProgress()    - Zeige Progress');
console.log('  simulateCorrect()  - Simuliere richtige Antwort');
console.log('  simulateIncorrect() - Simuliere falsche Antwort');
console.log('  testRepeatMode()   - Vollständiger Test');
console.log('  resetRepeatMode()  - Reset alles');

// Automatisch testen
setTimeout(() => {
    console.log('🚀 Starte automatischen Test in 3 Sekunden...');
    setTimeout(testRepeatMode, 3000);
}, 1000); 