// Test-Script für Fortschrittsbalken
// In der Browser-Konsole ausführen: copy-paste dieses Script

console.log('🧪 Fortschrittsbalken-Test gestartet');

// Test-Funktion
const testBars = () => {
    console.log('🎯 Teste alle Fortschrittsbalken...');
    
    // Practice bar
    const practiceBar = document.getElementById('accuracy-bar');
    if (practiceBar) {
        console.log('✅ Practice bar gefunden');
        practiceBar.style.width = '75%';
        practiceBar.classList.add('bg-green-500');
        console.log('   → Breite: 75%, Farbe: grün');
    } else {
        console.error('❌ Practice bar nicht gefunden!');
    }
    
    // Test progress bar
    const testProgressBar = document.getElementById('test-progress-bar');
    if (testProgressBar) {
        console.log('✅ Test progress bar gefunden');
        testProgressBar.style.width = '60%';
        testProgressBar.classList.add('bg-red-600');
        console.log('   → Breite: 60%, Farbe: rot (DE)');
    } else {
        console.error('❌ Test progress bar nicht gefunden!');
    }
    
    // Test accuracy bar
    const testAccuracyBar = document.getElementById('test-accuracy-bar');
    if (testAccuracyBar) {
        console.log('✅ Test accuracy bar gefunden');
        testAccuracyBar.style.width = '90%';
        testAccuracyBar.classList.add('bg-green-500');
        console.log('   → Breite: 90%, Farbe: grün');
    } else {
        console.error('❌ Test accuracy bar nicht gefunden!');
    }
    
    // Category bars (falls vorhanden)
    const categoryBars = document.querySelectorAll('#category-stats-container .bg-gray-200 > div');
    if (categoryBars.length > 0) {
        console.log(`✅ ${categoryBars.length} Category bars gefunden`);
        categoryBars.forEach((bar, i) => {
            const percentage = (i + 1) * 25;
            bar.style.width = `${percentage}%`;
            if (percentage < 34) {
                bar.classList.add('bg-black');
            } else if (percentage < 67) {
                bar.classList.add('bg-red-600');
            } else {
                bar.classList.add('bg-yellow-400');
            }
            console.log(`   → Bar ${i + 1}: ${percentage}%`);
        });
    } else {
        console.log('ℹ️  Keine Category bars gefunden (normal, wenn keine Übung läuft)');
    }
    
    console.log('🎉 Test abgeschlossen!');
};

// Debug-Funktion
const checkBars = () => {
    console.log('🔍 Überprüfe alle Fortschrittsbalken...');
    
    ['accuracy-bar', 'test-progress-bar', 'test-accuracy-bar'].forEach(id => {
        const bar = document.getElementById(id);
        if (bar) {
            const computedStyle = window.getComputedStyle(bar);
            console.log(`${id}:`, {
                width: bar.style.width || 'keine inline-width',
                height: computedStyle.height,
                bg: computedStyle.backgroundColor,
                classes: bar.className
            });
        } else {
            console.log(`${id}: NICHT GEFUNDEN`);
        }
    });
};

// Reset-Funktion
const resetBars = () => {
    console.log('🔄 Setze alle Fortschrittsbalken zurück...');
    
    ['accuracy-bar', 'test-progress-bar', 'test-accuracy-bar'].forEach(id => {
        const bar = document.getElementById(id);
        if (bar) {
            bar.style.width = '0%';
            bar.className = 'h-full transition-all duration-500 ease-in-out';
            console.log(`✅ ${id} zurückgesetzt`);
        }
    });
    
    // Category bars zurücksetzen
    const categoryBars = document.querySelectorAll('#category-stats-container .bg-gray-200 > div');
    categoryBars.forEach(bar => {
        bar.style.width = '0%';
        bar.className = 'h-full transition-all duration-300 ease-in-out';
    });
    
    console.log('🎉 Reset abgeschlossen!');
};

// Globale Funktionen verfügbar machen
window.testBars = testBars;
window.checkBars = checkBars;
window.resetBars = resetBars;

console.log('📋 Verfügbare Funktionen:');
console.log('  testBars()  - Testet alle Fortschrittsbalken');
console.log('  checkBars() - Überprüft den Status aller Balken');
console.log('  resetBars() - Setzt alle Balken zurück');

// Automatisch testen
setTimeout(() => {
    console.log('🚀 Starte automatischen Test in 2 Sekunden...');
    setTimeout(testBars, 2000);
}, 1000); 