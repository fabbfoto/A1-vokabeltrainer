import { vokabularWohnen } from './vokabular_wohnen';
import { vokabularLernen } from './vokabular_lernen';
import { vokabularFreizeitUnterhaltung } from './vokabular_freizeit_unterhaltung';
import type { Word } from './shared/types/vocabulary';
// ... weitere imports

interface ValidationIssue {
    file: string;
    topic: string;
    subtopic: string;
    word: string;
    english: string;
    cloze?: string[];
}

export function validateAllVocabularies() {
    const allVocabularies = {
        'Wohnen': vokabularWohnen,
        'Lernen': vokabularLernen,
        'Freizeit': vokabularFreizeitUnterhaltung,
        // ... weitere
    };
    
    const issues: ValidationIssue[] = [];
    
    Object.entries(allVocabularies).forEach(([fileName, vocabulary]) => {
        Object.entries(vocabulary).forEach(([topic, subtopics]) => {
            Object.entries(subtopics).forEach(([subtopic, words]) => {
                words.forEach((word: Word) => {
                    // Prüfe auf leere exampleGerman
                    if (word.exampleEnglish) {
                        const hasValidGerman = word.exampleGerman && 
                            Array.isArray(word.exampleGerman) && 
                            word.exampleGerman.length > 0 &&
                            word.exampleGerman.some((part: { text: string }) => part.text && part.text.trim() !== '');
                        
                        if (!hasValidGerman) {
                            issues.push({
                                file: fileName,
                                topic,
                                subtopic,
                                word: word.german,
                                english: word.exampleEnglish,
                                cloze: word.clozeParts
                            });
                        }
                    }
                });
            });
        });
    });
    
    return issues;
}

// Nur ausführen, wenn diese Datei direkt mit Node gestartet wird
// (z.B. mit: npx ts-node validate-vocabulary.ts)
// Für Browser/Frontend ist diese Datei nicht gedacht!
declare const require: { main: unknown } | undefined;
declare const module: unknown;
declare const process: { exit: (code: number) => never } | undefined;

if (typeof require !== 'undefined' && typeof module !== 'undefined' && require?.main === module) {
    const validationIssues = validateAllVocabularies();
    if (validationIssues.length > 0) {
        // eslint-disable-next-line no-console
        console.error('Vokabular-Validierung gefunden:', validationIssues.length, 'Probleme');
        // eslint-disable-next-line no-console
        console.table(validationIssues);
        process?.exit(1);
    } else {
        // eslint-disable-next-line no-console
        console.log('✅ Alle Vokabularien sind valide!');
    }
} 