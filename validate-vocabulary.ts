import { vokabularWohnen } from './vokabular_wohnen';
import { vokabularLernen } from './vokabular_lernen';
import { vokabularFreizeitUnterhaltung } from './vokabular_freizeit_unterhaltung';
// ... weitere imports

export function validateAllVocabularies() {
    const allVocabularies = {
        'Wohnen': vokabularWohnen,
        'Lernen': vokabularLernen,
        'Freizeit': vokabularFreizeitUnterhaltung,
        // ... weitere
    };
    
    const issues: any[] = [];
    
    Object.entries(allVocabularies).forEach(([fileName, vocabulary]) => {
        Object.entries(vocabulary).forEach(([topic, subtopics]) => {
            Object.entries(subtopics).forEach(([subtopic, words]) => {
                words.forEach((word: any) => {
                    // Prüfe auf leere exampleGerman
                    if (word.exampleEnglish) {
                        const hasValidGerman = word.exampleGerman && 
                            Array.isArray(word.exampleGerman) && 
                            word.exampleGerman.length > 0 &&
                            word.exampleGerman.some((part: any) => part.text && part.text.trim() !== '');
                        
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

// Nutze diese Funktion beim Start der App
const validationIssues = validateAllVocabularies();
if (validationIssues.length > 0) {
    console.error('Vokabular-Validierung gefunden:', validationIssues.length, 'Probleme');
    console.table(validationIssues);
} 