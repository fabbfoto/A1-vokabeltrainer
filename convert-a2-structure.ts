// convert-a2-structure.ts
// Konvertiert A2-Vokabular-Struktur zu A1-Struktur ohne Informationsverlust

import * as fs from 'fs';
import * as path from 'path';

interface A2Verb {
    id: string;
    wordType: "verb";
    german: string;
    english: string;
    coreForms: {
        infinitive: string;
        thirdPerson: string;
        preterite: string;
        perfect: string;
    };
    exampleGerman: any[];
    exampleEnglish: string;
    clozeParts: string[];
    clozeAnswers: string[];
    reflexive?: boolean;
    fixedPreposition?: {
        preposition: string;
        case: string;
    };
}

interface A2Noun {
    id: string;
    wordType: "noun";
    german: string;
    article: string | null;
    plural: string;
    english: string;
    exampleGerman: any[];
    exampleEnglish: string;
    clozeParts: string[];
    clozeAnswers: string[];
}

function convertA2VerbToA1(verb: A2Verb): any {
    // Bestimme separable basierend auf Infinitiv
    const isSeparable = verb.coreForms.infinitive.includes(' ');
    
    // Bestimme auxiliary verb basierend auf perfect form
    const hasSein = verb.coreForms.perfect.includes('ist ') || verb.coreForms.perfect.includes('sind ');
    const auxiliaryVerb = hasSein ? 'sein' : 'haben';
    
    // Extrahiere past participle aus perfect form
    const pastParticiple = verb.coreForms.perfect.replace(/^(hat|hatte|ist|war) /, '');
    
    return {
        id: verb.id,
        wordType: "verb",
        german: verb.german,
        english: verb.english,
        separable: isSeparable,
        auxiliaryVerb: auxiliaryVerb,
        pastParticiple: pastParticiple,
        exampleGerman: verb.exampleGerman,
        exampleEnglish: verb.exampleEnglish,
        clozeParts: verb.clozeParts,
        clozeAnswers: verb.clozeAnswers
    };
}

function convertA2NounToA1(noun: A2Noun): any {
    return {
        id: noun.id,
        wordType: "noun",
        german: noun.german,
        article: noun.article === null ? undefined : noun.article,
        plural: noun.plural,
        english: noun.english,
        exampleGerman: noun.exampleGerman,
        exampleEnglish: noun.exampleEnglish,
        clozeParts: noun.clozeParts,
        clozeAnswers: noun.clozeAnswers
    };
}

function convertA2File(filePath: string): void {
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