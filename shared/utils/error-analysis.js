// Analysiere was im localStorage gespeichert ist
const wordsToRepeat = JSON.parse(localStorage.getItem('trainer-words-to-repeat') || '{}');
const currentVocab = window.state?.currentVocabularySet || [];

console.log('📊 FEHLER-ANALYSE:');
console.log('Gespeicherte Fehler:', wordsToRepeat);
console.log('Aktuelle Vokabeln:', currentVocab.length, 'Wörter');
console.log('Vokabel-IDs:', currentVocab.map(w => w.id));

// Prüfe ob die Fehler-IDs in den aktuellen Vokabeln existieren
Object.entries(wordsToRepeat).forEach(([mode, ids]) => {
    const matching = ids.filter(id => currentVocab.some(word => word.id === id));
    console.log(`Mode ${mode}: ${ids.length} Fehler gespeichert, ${matching.length} in aktuellen Vokabeln gefunden`);
    
    // Zeige Details für nicht gefundene IDs
    const notFound = ids.filter(id => !currentVocab.some(word => word.id === id));
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
const availableModes = ['mc-de-en', 'type-de-adj', 'cloze-adj-de', 'sentence-translation-en-de'];
availableModes.forEach(mode => {
    const hasErrors = wordsToRepeat[mode] && wordsToRepeat[mode].length > 0;
    console.log(`${mode}: ${hasErrors ? '✅ Fehler vorhanden' : '❌ Keine Fehler'}`);
});

// Zeige localStorage Größe
console.log('\n💾 LOCALSTORAGE INFO:');
console.log('Gesamtgröße:', new Blob([JSON.stringify(wordsToRepeat)]).size, 'Bytes');
console.log('Alle Keys:', Object.keys(localStorage).filter(key => key.startsWith('trainer-'))); 