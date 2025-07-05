// DIREKTER FIX: Überschreibe die setMode Funktion temporär
(function() {
    // Speichere die originale Funktion (falls vorhanden)
    const originalSetMode = window.setMode;
    
    // Erstelle unsere eigene setMode Funktion
    window.setMode = function(modeId, isRepeat = false) {
        console.log(`🔧 CUSTOM setMode: ${modeId}, repeat: ${isRepeat}`);
        
        // Simuliere einen Fehler-Wiederholungs-Klick
        if (isRepeat) {
            // Zeige eine Nachricht
            const message = document.createElement('div');
            message.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:red;color:white;padding:20px;border-radius:10px;z-index:9999';
            message.textContent = `Fehler-Wiederholung für ${modeId} wurde angeklickt, aber die Funktion ist noch nicht implementiert.`;
            document.body.appendChild(message);
            setTimeout(() => message.remove(), 3000);
            
            // Versuche trotzdem den normalen Modus zu starten
            if (originalSetMode) {
                originalSetMode(modeId, false);
            } else {
                // Klicke einfach auf den normalen Mode-Button
                const normalButton = document.getElementById(`mode-${modeId}`);
                if (normalButton) normalButton.click();
            }
        } else if (originalSetMode) {
            originalSetMode(modeId, isRepeat);
        }
    };
    
    // Registriere die Event-Listener neu
    const learningModes = {
        'mc-de-en': 'Bedeutung',
        'type-de-adj': 'Schreibweise', 
        'cloze-adj-de': 'Lückentext',
        'sentence-translation-en-de': 'Satzübersetzung'
    };

    Object.keys(learningModes).forEach(modeId => {
        const repeatButton = document.getElementById(`mode-repeat-${modeId}`);
        if (repeatButton) {
            // Entferne alte Listener
            const newButton = repeatButton.cloneNode(true);
            repeatButton.parentNode.replaceChild(newButton, repeatButton);
            
            // Füge neuen Listener hinzu
            newButton.addEventListener('click', () => {
                console.log(`🔴 Repeat clicked for ${modeId}`);
                window.setMode(modeId, true);
            });
        }
    });
    
    console.log('✅ Custom setMode installiert und Event-Listener registriert!');
})(); 