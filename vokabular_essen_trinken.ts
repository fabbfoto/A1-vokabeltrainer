// vokabular_essen_trinken.ts

import type {VocabularyStructure, Noun, Verb, Adjective, CaseElement } from './src/core/types/vocabulary';
import {createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabularEssenTrinken: VocabularyStructure = createVocabulary({
    "Essen und Trinken": {

        // --- NEUE KATEGORIE: Obst & Gemüse ---
        "Obst & Gemüse": [
            {
                id: createWordId("essen-trinken-lebensmittel-001"),
                wordType: "noun",
                german: "Apfel",
                article: "der",
                plural: "Äpfel",
                english: "apple",
                exampleGerman: [
                    { text: "Schmeckt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dir", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "der", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Apfel", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you like the taste of the apple?",
                clozeParts: ["Schmeckt dir der ", "?"],
                clozeAnswers: ["Apfel"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-002"),
                wordType: "noun",
                german: "Banane",
                article: "die",
                plural: "Bananen",
                english: "banana",
                exampleGerman: [
                    { text: "Kann", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "eine", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Banane", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "haben", case: "verb" },
                    { text: "?", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Hunger", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Can I have a banana? I'm hungry.",
                clozeParts: ["Kann ich eine ", " haben?"],
                clozeAnswers: ["Banane"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-009"),
                wordType: "noun",
                german: "Gemüse",
                article: "das",
                plural: null,
                english: "vegetables",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "esse", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Gemüse", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to eat vegetables.",
                clozeParts: ["Ich esse gern ", "."],
                clozeAnswers: ["Gemüse"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-013"),
                wordType: "noun",
                german: "Obst",
                article: "das",
                plural: null,
                english: "fruit",
                exampleGerman: [
                    { text: "Obst", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gesund", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Fruit is healthy.",
                clozeParts: ["", " ist gesund."],
                clozeAnswers: ["Obst"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-017"),
                wordType: "noun",
                german: "Tomate",
                article: "die",
                plural: "Tomaten",
                english: "tomato",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "esse", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Tomaten", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "im", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Salat", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I eat tomatoes in salad.",
                clozeParts: ["Ich esse ", " im Salat."],
                clozeAnswers: ["Tomaten"]
            } as Noun
        ],

        // --- NEUE KATEGORIE: Grundnahrungsmittel & Tierprodukte ---
        "Grundnahrungsmittel & Tierprodukte": [
            {
                id: createWordId("essen-trinken-lebensmittel-003"),
                wordType: "noun",
                german: "Brot",
                article: "das",
                plural: "Brote",
                english: "bread",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "müssen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "auch", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Brot", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "kaufen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We also need to buy bread.",
                clozeParts: ["Wir müssen auch ", " kaufen."],
                clozeAnswers: ["Brot"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-004"),
                wordType: "noun",
                german: "Brötchen",
                article: "das",
                plural: "Brötchen",
                english: "bread roll",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "esse", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "lieber", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Brötchen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I prefer to eat bread rolls.",
                clozeParts: ["Ich esse lieber ", "."],
                clozeAnswers: ["Brötchen"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-005"),
                wordType: "noun",
                german: "Butter",
                article: "die",
                plural: null,
                english: "butter",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "nehme", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Butter", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "aufs", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Brot", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I put butter on my bread.",
                clozeParts: ["Ich nehme ", " aufs Brot."],
                clozeAnswers: ["Butter"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-006"),
                wordType: "noun",
                german: "Ei",
                article: "das",
                plural: "Eier",
                english: "egg",
                exampleGerman: [
                    { text: "Möchtest", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ein", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Ei", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "zum", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Frühstück", case: "dativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Would you like an egg for breakfast?",
                clozeParts: ["Möchtest du ein ", " zum Frühstück?"],
                clozeAnswers: ["Ei"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-007"),
                wordType: "noun",
                german: "Fisch",
                article: "der",
                plural: "Fische",
                english: "fish",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "mag", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "keinen", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Fisch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I don't like fish.",
                clozeParts: ["Ich mag keinen ", "."],
                clozeAnswers: ["Fisch"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-008"),
                wordType: "noun",
                german: "Fleisch",
                article: "das",
                plural: null,
                english: "meat",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "esse", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "kein", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Fleisch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I don't eat meat.",
                clozeParts: ["Ich esse kein ", "."],
                clozeAnswers: ["Fleisch"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-010"),
                wordType: "noun",
                german: "Käse",
                article: "der",
                plural: null,
                english: "cheese",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "esse", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Käse", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "zum", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Frühstück", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I eat cheese for breakfast.",
                clozeParts: ["Ich esse ", " zum Frühstück."],
                clozeAnswers: ["Käse"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-012"),
                wordType: "noun",
                german: "Milch",
                article: "die",
                plural: null,
                english: "milk",
                exampleGerman: [
                    { text: "Im", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Kühlschrank", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Milch", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There is milk in the refrigerator.",
                clozeParts: ["Im Kühlschrank ist ", "."],
                clozeAnswers: ["Milch"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-014"),
                wordType: "noun",
                german: "Reis",
                article: "der",
                plural: null,
                english: "rice",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "esse", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Reis", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to eat rice.",
                clozeParts: ["Ich esse gern ", "."],
                clozeAnswers: ["Reis"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-018"),
                wordType: "noun",
                german: "Wurst",
                article: "die",
                plural: "Würste",
                english: "sausage / cold cuts",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Wurst", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I would like a sausage.",
                clozeParts: ["Ich möchte eine ", "."],
                clozeAnswers: ["Wurst"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-026"),
                wordType: "noun",
                german: "Joghurt",
                article: "der",
                plural: "Joghurts",
                english: "yogurt",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "esse", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Joghurt", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "mit", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Obst", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I eat yogurt with fruit.",
                clozeParts: ["Ich esse ", " mit Obst."],
                clozeAnswers: ["Joghurt"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-038"),
                wordType: "noun",
                german: "Butterbrot",
                article: "das",
                plural: "Butterbrote",
                english: "slice of bread with butter",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "esse", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Butterbrot", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I eat a slice of bread with butter.",
                clozeParts: ["Ich esse ein ", "."],
                clozeAnswers: ["Butterbrot"]
            } as Noun
        ],

        // --- NEUE KATEGORIE: Getränke & Süßes ---
        "Getränke & Süßes": [
            {
                id: createWordId("essen-trinken-lebensmittel-011"),
                wordType: "noun",
                german: "Kuchen",
                article: "der",
                plural: "Kuchen",
                english: "cake",
                exampleGerman: [
                    { text: "Der", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Kuchen", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schmeckt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sehr", case: "none" },
                    { text: " ", case: "none" },
                    { text: "gut", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The cake tastes very good.",
                clozeParts: ["Der ", " schmeckt sehr gut."],
                clozeAnswers: ["Kuchen"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-019"),
                wordType: "noun",
                german: "Wasser",
                article: "das",
                plural: null,
                english: "water",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Glas", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Wasser", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I would like a glass of water.",
                clozeParts: ["Ich möchte ein Glas ", "."],
                clozeAnswers: ["Wasser"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-021"),
                wordType: "noun",
                german: "Saft",
                article: "der",
                plural: "Säfte",
                english: "juice",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "trinke", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Apfelsaft", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to drink apple juice.",
                clozeParts: ["Ich trinke gern Apfel", "."],
                clozeAnswers: ["saft"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-022"),
                wordType: "noun",
                german: "Tee",
                article: "der",
                plural: "Tees",
                english: "tea",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "trinke", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Tee", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "zum", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Frühstück", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I drink tea for breakfast.",
                clozeParts: ["Ich trinke ", " zum Frühstück."],
                clozeAnswers: ["Tee"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-023"),
                wordType: "noun",
                german: "Kaffee",
                article: "der",
                plural: "Kaffees",
                english: "coffee",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "trinke", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "keinen", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Kaffee", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I don't drink coffee.",
                clozeParts: ["Ich trinke keinen ", "."],
                clozeAnswers: ["Kaffee"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-024"),
                wordType: "noun",
                german: "Schokolade",
                article: "die",
                plural: "Schokoladen",
                english: "chocolate",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "esse", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Schokolade", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to eat chocolate.",
                clozeParts: ["Ich esse gern ", "."],
                clozeAnswers: ["Schokolade"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-025"),
                wordType: "noun",
                german: "Marmelade",
                article: "die",
                plural: "Marmeladen",
                english: "jam / marmalade",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "esse", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Marmelade", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "zum", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Frühstück", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I eat jam for breakfast.",
                clozeParts: ["Ich esse ", " zum Frühstück."],
                clozeAnswers: ["Marmelade"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-027"),
                wordType: "noun",
                german: "Mineralwasser",
                article: "das",
                plural: null,
                english: "mineral water",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "trinke", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Mineralwasser", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I drink mineral water.",
                clozeParts: ["Ich trinke ", "."],
                clozeAnswers: ["Mineralwasser"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-028"),
                wordType: "noun",
                german: "Cola",
                article: "die",
                plural: "Colas",
                english: "cola",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Cola", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I would like a cola.",
                clozeParts: ["Ich möchte eine ", "."],
                clozeAnswers: ["Cola"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-029"),
                wordType: "noun",
                german: "Eis",
                article: "das",
                plural: "Eis",
                english: "ice cream / ice",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "großes", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Eis", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I would like a large ice cream.",
                clozeParts: ["Ich möchte ein großes ", "."],
                clozeAnswers: ["Eis"]
            } as Noun
        ],

        // --- NEUE KATEGORIE: Geschirr & Zutaten ---
        "Geschirr & Zutaten": [
            {
                id: createWordId("essen-trinken-lebensmittel-015"),
                wordType: "noun",
                german: "Salz",
                article: "das",
                plural: null,
                english: "salt",
                exampleGerman: [
                    { text: "Gibst", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "mir", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "bitte", case: "none" },
                    { text: " ", case: "none" },
                    { text: "das", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Salz", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Can you please pass me the salt?",
                clozeParts: ["Gibst du mir bitte das ", "?"],
                clozeAnswers: ["Salz"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-016"),
                wordType: "noun",
                german: "Suppe",
                article: "die",
                plural: "Suppen",
                english: "soup",
                exampleGerman: [
                    { text: "Die", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Suppe", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "heiß", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The soup is hot.",
                clozeParts: ["Die ", " ist heiß."],
                clozeAnswers: ["Suppe"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-020"),
                wordType: "noun",
                german: "Zucker",
                article: "der",
                plural: null,
                english: "sugar",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "nehme", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Zucker", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "im", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Tee", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I take sugar in my tea.",
                clozeParts: ["Ich nehme ", " im Tee."],
                clozeAnswers: ["Zucker"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-030"),
                wordType: "noun",
                german: "Flasche",
                article: "die",
                plural: "Flaschen",
                english: "bottle",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "brauche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Flasche", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I need a bottle.",
                clozeParts: ["Ich brauche eine ", "."],
                clozeAnswers: ["Flasche"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-031"),
                wordType: "noun",
                german: "Glas",
                article: "das",
                plural: "Gläser",
                english: "glass",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Glas", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Wasser", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I would like a glass of water.",
                clozeParts: ["Ich möchte ein ", " Wasser."],
                clozeAnswers: ["Glas"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-032"),
                wordType: "noun",
                german: "Tasse",
                article: "die",
                plural: "Tassen",
                english: "cup / mug",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Tasse", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Kaffee", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I would like a cup of coffee.",
                clozeParts: ["Ich möchte eine ", " Kaffee."],
                clozeAnswers: ["Tasse"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-033"),
                wordType: "noun",
                german: "Teller",
                article: "der",
                plural: "Teller",
                english: "plate",
                exampleGerman: [
                    { text: "Die", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Teller", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "stehen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Schrank", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The plates are in the cupboard.",
                clozeParts: ["Die ", " stehen im Schrank."],
                clozeAnswers: ["Teller"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-034"),
                wordType: "noun",
                german: "Messer",
                article: "das",
                plural: "Messer",
                english: "knife",
                exampleGerman: [
                    { text: "Das", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Messer", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "scharf", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The knife is sharp.",
                clozeParts: ["Das ", " ist scharf."],
                clozeAnswers: ["Messer"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-035"),
                wordType: "noun",
                german: "Gabel",
                article: "die",
                plural: "Gabeln",
                english: "fork",
                exampleGerman: [
                    { text: "Die", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Gabel", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "liegt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "auf", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "dem", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Tisch", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The fork is on the table.",
                clozeParts: ["Die ", " liegt auf dem Tisch."],
                clozeAnswers: ["Gabel"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-036"),
                wordType: "noun",
                german: "Löffel",
                article: "der",
                plural: "Löffel",
                english: "spoon",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "brauche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "einen", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Löffel", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "für", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "die", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Suppe", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I need a spoon for the soup.",
                clozeParts: ["Ich brauche einen ", " für die Suppe."],
                clozeAnswers: ["Löffel"]
            } as Noun,
            {
                id: createWordId("essen-trinken-lebensmittel-037"),
                wordType: "noun",
                german: "Pfeffer",
                article: "der",
                plural: null,
                english: "pepper",
                exampleGerman: [
                    { text: "Der", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Pfeffer", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "scharf", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The pepper is spicy.",
                clozeParts: ["Der ", " ist scharf."],
                clozeAnswers: ["Pfeffer"]
            } as Noun
        ],

        // --- UNTER-THEMA: Mahlzeiten/Lokale --- (UNVERÄNDERT)
        "Mahlzeiten & Restaurant": [
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-001"),
                wordType: "noun",
                german: "Frühstück",
                article: "das",
                plural: "Frühstücke",
                english: "breakfast",
                exampleGerman: [
                    { text: "Zum", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Frühstück", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "trinke", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Milch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "For breakfast I drink milk.",
                clozeParts: ["Zum ", " trinke ich Milch."],
                clozeAnswers: ["Frühstück"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-002"),
                wordType: "noun",
                german: "Mittagessen",
                article: "das",
                plural: "Mittagessen",
                english: "lunch",
                exampleGerman: [
                    { text: "Was", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gibt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "zum", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Mittagessen", case: "dativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What is there for lunch?",
                clozeParts: ["Was gibt es zum ", "?"],
                clozeAnswers: ["Mittagessen"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-003"),
                wordType: "noun",
                german: "Abendessen",
                article: "das",
                plural: "Abendessen",
                english: "dinner",
                exampleGerman: [
                    { text: "Zum", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Abendessen", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "gibt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Brot", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There is bread for dinner.",
                clozeParts: ["Zum ", " gibt es Brot."],
                clozeAnswers: ["Abendessen"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-004"),
                wordType: "verb",
                german: "essen",
                english: "to eat",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegessen",
                presentConjugation: {
                    ich: "esse",
                    du: "isst",
                    er: "isst",
                    wir: "essen",
                    ihr: "esst",
                    sie: "essen"
                },
                imperative: {
                    du: "Iss!",
                    ihr: "Esst!",
                    Sie: "Essen Sie!"
                },
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "wollt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ihr", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "essen", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What do you want to eat?",
                clozeParts: ["Was wollt ihr ", "?"],
                clozeAnswers: ["essen"]
            } as Verb,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-005"),
                wordType: "verb",
                german: "trinken",
                english: "to drink",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getrunken",
                presentConjugation: {
                    ich: "trinke",
                    du: "trinkst",
                    er: "trinkt",
                    wir: "trinken",
                    ihr: "trinkt",
                    sie: "trinken"
                },
                imperative: {
                    du: "Trink!",
                    ihr: "Trinkt!",
                    Sie: "Trinken Sie!"
                },
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "möchtest", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "trinken", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What would you like to drink?",
                clozeParts: ["Was möchtest du ", "?"],
                clozeAnswers: ["trinken"]
            } as Verb,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-006"),
                wordType: "noun",
                german: "Hunger",
                article: "der",
                plural: null,
                english: "hunger",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Hunger", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am hungry. (Literally: I have hunger.)",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Hunger"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-007"),
                wordType: "noun",
                german: "Durst",
                article: "der",
                plural: null,
                english: "thirst",
                exampleGerman: [
                    { text: "Hast", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Durst", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Are you thirsty? (Literally: Do you have thirst?)",
                clozeParts: ["Hast du ", "?"],
                clozeAnswers: ["Durst"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-008"),
                wordType: "verb",
                german: "kochen",
                english: "to cook",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekocht",
                presentConjugation: {
                    ich: "koche",
                    du: "kochst",
                    er: "kocht",
                    wir: "kochen",
                    ihr: "kocht",
                    sie: "kochen"
                },
                imperative: {
                    du: "Koch!",
                    ihr: "Kocht!",
                    Sie: "Kochen Sie!"
                },
                exampleGerman: [
                    { text: "In", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "der", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Küche", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "kocht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meine", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Mutter", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My mother is cooking in the kitchen.",
                clozeParts: ["In der Küche ", " meine Mutter."],
                clozeAnswers: ["kocht"]
            } as Verb,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-009"),
                wordType: "verb",
                german: "schmecken",
                english: "to taste",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschmeckt",
                presentConjugation: {
                    ich: "schmecke",
                    du: "schmeckst",
                    er: "schmeckt",
                    wir: "schmecken",
                    ihr: "schmeckt",
                    sie: "schmecken"
                },
                imperative: {
                    du: "Schmeck!",
                    ihr: "Schmeckt!",
                    Sie: "Schmecken Sie!"
                },
                exampleGerman: [
                    { text: "Der", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Kuchen", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schmeckt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sehr", case: "none" },
                    { text: " ", case: "none" },
                    { text: "gut", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The cake tastes very good.",
                clozeParts: ["Der Kuchen ", " sehr gut."],
                clozeAnswers: ["schmeckt"]
            } as Verb,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-010"),
                wordType: "verb",
                german: "probieren",
                english: "to try / to taste",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "probiert",
                presentConjugation: {
                    ich: "probiere",
                    du: "probierst",
                    er: "probiert",
                    wir: "probieren",
                    ihr: "probiert",
                    sie: "probieren"
                },
                imperative: {
                    du: "Probier!",
                    ihr: "Probiert!",
                    Sie: "Probieren Sie!"
                },
                exampleGerman: [
                    { text: "Probier", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mal", case: "none" },
                    { text: " ", case: "none" },
                    { text: "die", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Suppe", case: "akkusativ" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Try the soup!",
                clozeParts: ["", " mal die Suppe!"],
                clozeAnswers: ["Probier"]
            } as Verb,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-011"),
                wordType: "verb",
                german: "bestellen",
                english: "to order",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bestellt",
                presentConjugation: {
                    ich: "bestelle",
                    du: "bestellst",
                    er: "bestellt",
                    wir: "bestellen",
                    ihr: "bestellt",
                    sie: "bestellen"
                },
                imperative: {
                    du: "Bestell!",
                    ihr: "Bestellt!",
                    Sie: "Bestellen Sie!"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Pizza", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "bestellen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I would like to order a pizza.",
                clozeParts: ["Ich möchte eine Pizza ", "."],
                clozeAnswers: ["bestellen"]
            } as Verb,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-012"),
                wordType: "verb",
                german: "bezahlen",
                english: "to pay",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bezahlt",
                presentConjugation: {
                    ich: "bezahle",
                    du: "bezahlst",
                    er: "bezahlt",
                    wir: "bezahlen",
                    ihr: "bezahlt",
                    sie: "bezahlen"
                },
                imperative: {
                    du: "Bezahl!",
                    ihr: "Bezahlt!",
                    Sie: "Bezahlen Sie!"
                },
                exampleGerman: [
                    { text: "Wo", case: "none" },
                    { text: " ", case: "none" },
                    { text: "muss", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bezahlen", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Where do I have to pay?",
                clozeParts: ["Wo muss ich ", "?"],
                clozeAnswers: ["bezahlen"]
            } as Verb,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-013"),
                wordType: "adjective",
                german: "satt",
                english: "full (after eating)",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "satt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am full.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["satt"]
            } as Adjective,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-014"),
                wordType: "noun",
                german: "Restaurant",
                article: "das",
                plural: "Restaurants",
                english: "restaurant",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gehen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ins", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Restaurant", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the restaurant.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Restaurant"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-015"),
                wordType: "noun",
                german: "Café",
                article: "das",
                plural: "Cafés",
                english: "cafe",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "treffen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "uns", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "im", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Café", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are meeting at the cafe.",
                clozeParts: ["Wir treffen uns im ", "."],
                clozeAnswers: ["Café"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-016"),
                wordType: "noun",
                german: "Imbiss",
                article: "der",
                plural: "Imbisse",
                english: "snack bar / food stand",
                exampleGerman: [
                    { text: "Am", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Bahnhof", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "gibt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "einen", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Imbiss", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There is a snack bar at the train station.",
                clozeParts: ["Am Bahnhof gibt es einen ", "."],
                clozeAnswers: ["Imbiss"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-017"),
                wordType: "noun",
                german: "Bäckerei",
                article: "die",
                plural: "Bäckereien",
                english: "bakery",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "kaufe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Brot", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "in", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "der", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Bäckerei", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I buy bread at the bakery.",
                clozeParts: ["Ich kaufe Brot in der ", "."],
                clozeAnswers: ["Bäckerei"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-018"),
                wordType: "noun",
                german: "Supermarkt",
                article: "der",
                plural: "Supermärkte",
                english: "supermarket",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gehe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "den", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Supermarkt", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am going to the supermarket.",
                clozeParts: ["Ich gehe in den ", "."],
                clozeAnswers: ["Supermarkt"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-019"),
                wordType: "noun",
                german: "Markt",
                article: "der",
                plural: "Märkte",
                english: "market",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "kaufe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Obst", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "auf", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "dem", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Markt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I buy fruit at the market.",
                clozeParts: ["Ich kaufe Obst auf dem ", "."],
                clozeAnswers: ["Markt"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-020"),
                wordType: "noun",
                german: "Gast",
                article: "der",
                plural: "Gäste",
                english: "guest",
                exampleGerman: [
                    { text: "Im", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Restaurant", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "viele", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Gäste", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There are many guests in the restaurant.",
                clozeParts: ["Im Restaurant sind viele ", "."],
                clozeAnswers: ["Gäste"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-021"),
                wordType: "noun",
                german: "Kellner",
                article: "der",
                plural: "Kellner",
                english: "waiter",
                exampleGerman: [
                    { text: "Die", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Kellnerin", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bringt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Speisekarte", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The waitress brings the menu.",
                clozeParts: ["Die ", " bringt die Speisekarte."],
                clozeAnswers: ["Kellnerin"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-022"),
                wordType: "noun",
                german: "Speisekarte",
                article: "die",
                plural: "Speisekarten",
                english: "menu",
                exampleGerman: [
                    { text: "Kann", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "die", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Speisekarte", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "haben", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Can I have the menu?",
                clozeParts: ["Kann ich die ", " haben?"],
                clozeAnswers: ["Speisekarte"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-023"),
                wordType: "noun",
                german: "Rechnung",
                article: "die",
                plural: "Rechnungen",
                english: "bill / check",
                exampleGerman: [
                    { text: "Kann", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "die", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Rechnung", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "haben", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Can I have the bill?",
                clozeParts: ["Kann ich die ", " haben?"],
                clozeAnswers: ["Rechnung"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-024"),
                wordType: "noun",
                german: "Platz",
                article: "der",
                plural: "Plätze",
                english: "seat / place",
                exampleGerman: [
                    { text: "Ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "der", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Platz", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "frei", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Is the seat free?",
                clozeParts: ["Ist der ", " frei?"],
                clozeAnswers: ["Platz"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-025"),
                wordType: "verb",
                german: "reservieren",
                english: "to reserve / to book",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "reserviert",
                presentConjugation: {
                    ich: "reserviere",
                    du: "reservierst",
                    er: "reserviert",
                    wir: "reservieren",
                    ihr: "reserviert",
                    sie: "reservieren"
                },
                imperative: {
                    du: "Reservier!",
                    ihr: "Reserviert!",
                    Sie: "Reservieren Sie!"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "einen", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "Tisch", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "reservieren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I would like to reserve a table.",
                clozeParts: ["Ich möchte einen Tisch ", "."],
                clozeAnswers: ["reservieren"]
            } as Verb
        ]
    }
});
