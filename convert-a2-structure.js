// convert-a2-structure.js
// Konvertiert A2-Vokabular-Struktur zu A1-Struktur ohne Informationsverlust

const fs = require('fs');
const path = require('path');

function convertA2File(filePath) {
    console.log(`Konvertiere: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Ersetze coreForms mit A1-Struktur
    let convertedContent = content;
    
    // Konvertiere Verben
    convertedContent = convertedContent.replace(
        /coreForms:\s*{\s*infinitive:\s*"([^"]+)",\s*thirdPerson:\s*"([^"]+)",\s*preterite:\s*"([^"]+)",\s*perfect:\s*"([^"]+)"\s*}/g,
        (match, infinitive, thirdPerson, preterite, perfect) => {
            const isSeparable = infinitive.includes(' ');
            const hasSein = perfect.includes('ist ') || perfect.includes('sind ');
            const auxiliaryVerb = hasSein ? 'sein' : 'haben';
            const pastParticiple = perfect.replace(/^(hat|hatte|ist|war) /, '');
            
            return `separable: ${isSeparable},\n                auxiliaryVerb: "${auxiliaryVerb}",\n                pastParticiple: "${pastParticiple}"`;
        }
    );
    
    // Konvertiere Nomen mit article: null
    convertedContent = convertedContent.replace(
        /article:\s*null/g,
        'article: undefined'
    );
    
    // Entferne reflexive und fixedPreposition (nicht in A1-Struktur)
    convertedContent = convertedContent.replace(
        /,\s*reflexive:\s*(true|false)/g,
        ''
    );
    convertedContent = convertedContent.replace(
        /,\s*fixedPreposition:\s*{\s*preposition:\s*"[^"]+",\s*case:\s*"[^"]+"\s*}/g,
        ''
    );
    
    // Schreibe konvertierte Datei
    const outputPath = filePath.replace('.ts', '_converted.ts');
    fs.writeFileSync(outputPath, convertedContent);
    console.log(`Konvertiert: ${outputPath}`);
}

// Konvertiere beide A2-Dateien
convertA2File('./a2-vokabular/okabular_a2_01_persoenliche_informationen.ts');
convertA2File('./a2-vokabular/vokabular_a2_02_familie_kinder.ts');

console.log('Konvertierung abgeschlossen!'); 