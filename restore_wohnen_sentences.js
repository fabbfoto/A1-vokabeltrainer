import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Original sentences from JavaScript file
const originalSentences = {
    "Zimmer": "Räum bitte dein Zimmer auf.",
    "Fenster": "Ich möchte einen Platz am Fenster.",
    "Tür": "Die Tür ist zu.",
    "Wand": "An der Wand hängt ein Bild.",
    "Boden": "Die Tasche steht auf dem Boden.",
    "Bad": "Wo ist das Bad?",
    "Dusche": "Die Dusche ist kaputt.",
    "Toilette/WC": "Wo ist die Toilette?",
    "Küche": "In der Küche kocht meine Mutter.",
    "Fensterbank": "Die Blumen stehen auf der Fensterbank.",
    "Flur": "Der Flur ist sehr lang.",
    "Treppe": "Die Treppe führt nach oben."
};

function createCaseElements(sentence, wordId) {
    const words = sentence.split(' ');
    const elements = [];
    let elementId = 1;
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const isLast = i === words.length - 1;
        
        elements.push({
            id: `${wordId}-${elementId.toString().padStart(3, '0')}`,
            text: word,
            case: "none"
        });
        elementId++;
        
        if (!isLast) {
            elements.push({
                id: `${wordId}-${elementId.toString().padStart(3, '0')}`,
                text: " ",
                case: "none"
            });
            elementId++;
        }
    }
    
    return elements;
}

function updateVocabularyFile() {
    const filePath = path.join(__dirname, 'vokabular_wohnen.ts');
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update each vocabulary item
    Object.entries(originalSentences).forEach(([germanWord, sentence]) => {
        const wordId = `wohnen-${germanWord.toLowerCase().replace(/[^a-z]/g, '')}`;
        const caseElements = createCaseElements(sentence, wordId);
        
        // Create the exampleGerman array string
        const exampleGermanString = caseElements.map(element => 
            `{ id: createWordId("${element.id}"), text: "${element.text}", case: "${element.case}" } as CaseElement`
        ).join(',\n                    ');
        
        // Find and replace the exampleGerman array for this word
        const pattern = new RegExp(`(exampleGerman:\\s*\\[)[^\\]]*\\]`, 's');
        const replacement = `exampleGerman: [\n                    ${exampleGermanString}\n                ]`;
        
        content = content.replace(pattern, replacement);
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ All sentences restored successfully!');
}

updateVocabularyFile(); 