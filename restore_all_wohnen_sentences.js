import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Alle originalen Sätze für alle Kategorien
const allOriginalSentences = {
    // Kategorie 1: Räume und Gebäudeteile (bereits erledigt)
    "Räume und Gebäudeteile": {
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
        "Treppe": "Die Treppe führt nach oben.",
        "Balkon": "Wir haben einen Balkon."
    },
    
    // Kategorie 2: Möbel und Einrichtung
    "Möbel und Einrichtung": {
        "Bett": "Wann gehst du ins Bett?",
        "Schrank": "Im Schrank sind meine Kleider.",
        "Regal": "Die Bücher stehen im Regal.",
        "Tisch": "Der Tisch steht im Wohnzimmer.",
        "Stuhl": "Auf dem Stuhl liegt meine Jacke.",
        "Sessel": "Ich sitze gern im Sessel.",
        "Sofa": "Das Sofa ist bequem.",
        "Decke": "Die Decke ist warm.",
        "Kissen": "Das Kissen ist weich.",
        "Lampe": "Die Lampe ist an.",
        "Spiegel": "Ich schaue in den Spiegel.",
        "Teppich": "Der Teppich ist rot.",
        "Vorhang": "Der Vorhang ist zu.",
        "Bild": "Das Bild hängt an der Wand.",
        "Pflanze": "Die Pflanze braucht Wasser.",
        "Vase": "Die Vase steht auf dem Tisch.",
        "Buch": "Das Buch liegt auf dem Regal.",
        "Zeitung": "Die Zeitung ist auf dem Sofa."
    },
    
    // Kategorie 3: Haushaltsgeräte
    "Haushaltsgeräte": {
        "Kühlschrank": "Der Kühlschrank ist kalt.",
        "Herd": "Der Herd ist heiß.",
        "Mikrowelle": "Die Mikrowelle ist kaputt.",
        "Geschirrspüler": "Der Geschirrspüler ist voll.",
        "Waschmaschine": "Die Waschmaschine läuft.",
        "Trockner": "Der Trockner ist teuer.",
        "Staubsauger": "Der Staubsauger ist laut.",
        "Bügeleisen": "Das Bügeleisen ist heiß.",
        "Mixer": "Der Mixer ist praktisch.",
        "Toaster": "Der Toaster ist neu.",
        "Kaffeemaschine": "Die Kaffeemaschine ist kaputt.",
        "Wasserkocher": "Der Wasserkocher ist schnell."
    },
    
    // Kategorie 4: Wohnen und Leben
    "Wohnen und Leben": {
        "wohnen": "Ich wohne in Berlin.",
        "leben": "Wir leben in einem Haus.",
        "mieten": "Sie mietet eine Wohnung.",
        "kaufen": "Er kauft ein Haus.",
        "umziehen": "Wir ziehen um.",
        "einziehen": "Wann ziehst du ein?",
        "ausziehen": "Wann ziehst du aus?",
        "putzen": "Ich putze die Wohnung.",
        "aufräumen": "Räum bitte auf!",
        "waschen": "Ich wasche die Wäsche.",
        "kochen": "Meine Mutter kocht gern.",
        "schlafen": "Ich schlafe gern.",
        "aufstehen": "Wann stehst du auf?",
        "sich ausruhen": "Ich ruhe mich aus.",
        "sich entspannen": "Ich entspanne mich.",
        "sich wohlfühlen": "Ich fühle mich wohl.",
        "sich zu Hause fühlen": "Ich fühle mich zu Hause."
    }
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
    
    // Update each category
    Object.entries(allOriginalSentences).forEach(([categoryName, sentences]) => {
        console.log(`Processing category: ${categoryName}`);
        
        // Update each vocabulary item in the category
        Object.entries(sentences).forEach(([germanWord, sentence]) => {
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
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ All sentences restored successfully for all categories!');
}

updateVocabularyFile(); 