// packages/trainer-themen/vokabular_essen_trinken.ts

import type { VocabularyStructure, Noun, Verb, Adjective, CaseElement } from './shared/types/vocabulary.ts';
import { createWordId, createVocabulary } from './shared/types/vocabulary.ts';

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
                    { text: "Schmeckt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dir", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "der Apfel", case: "nominativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    { text: "Kann", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Banane", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "haben", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Hunger", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "esse", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gern", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Gemüse", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Obst", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gesund", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "esse", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Tomaten", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Salat", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "müssen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auch", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Brot", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kaufen", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "esse", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lieber", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Brötchen", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nehme", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Butter", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "aufs Brot", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Möchtest", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Ei", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zum Frühstück", case: "dativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mag", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "keinen Fisch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "esse", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kein Fleisch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "esse", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Käse", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zum Frühstück", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Im Kühlschrank", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Milch", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "esse", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gern", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Reis", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Wurst", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "esse", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Joghurt", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit Obst", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "esse", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Butterbrot", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Der Kuchen", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schmeckt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sehr gut", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Glas Wasser", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "trinke", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gern", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Apfelsaft", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "trinke", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Tee", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zum Frühstück", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "trinke", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "keinen Kaffee", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "esse", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gern", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Schokolade", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "esse", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Marmelade", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zum Frühstück", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "trinke", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Mineralwasser", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Cola", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein großes Eis", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Gibst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mir", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bitte", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "das Salz", case: "akkusativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    { text: "Die Suppe", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "heiß", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nehme", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Zucker", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Tee", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Flasche", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Glas", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Wasser", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Tasse", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Kaffee", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Die Teller", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "stehen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Schrank", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Das Messer", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "scharf", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Die Gabel", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "liegt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auf dem Tisch", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Löffel", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "für die Suppe", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Der Pfeffer", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "scharf", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Zum Frühstück", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "trinke", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Milch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Was", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gibt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zum Mittagessen", case: "dativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    { text: "Zum Abendessen", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gibt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Brot", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    I: "esse", 
                    you_informal: "isst", 
                    he: "isst", 
                    we: "essen", 
                    you_pl: "esst", 
                    they: "essen" 
                },
                imperative: { you_informal: "Iss!", you_pl: "Esst!" },
                exampleGerman: [
                    { text: "Was", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "wollt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ihr", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "essen", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    I: "trinke", 
                    you_informal: "trinkst", 
                    he: "trinkt", 
                    we: "trinken", 
                    you_pl: "trinkt", 
                    they: "trinken" 
                },
                imperative: { you_informal: "Trink!", you_pl: "Trinkt!" },
                exampleGerman: [
                    { text: "Was", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchtest", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "trinken", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Hunger", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Hast", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Durst", case: "akkusativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    I: "koche", 
                    you_informal: "kochst", 
                    he: "kocht", 
                    we: "kochen", 
                    you_pl: "kocht", 
                    they: "kochen" 
                },
                imperative: { you_informal: "Koch!", you_pl: "Kocht!" },
                exampleGerman: [
                    { text: "In der Küche", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kocht", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "meine Mutter", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    I: "schmecke", 
                    you_informal: "schmeckst", 
                    he: "schmeckt", 
                    we: "schmecken", 
                    you_pl: "schmeckt", 
                    they: "schmecken" 
                },
                imperative: { you_informal: "Schmeck!", you_pl: "Schmeckt!" },
                exampleGerman: [
                    { text: "Der Kuchen", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schmeckt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sehr gut", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    I: "probiere", 
                    you_informal: "probierst", 
                    he: "probiert", 
                    we: "probieren", 
                    you_pl: "probiert", 
                    they: "probieren" 
                },
                imperative: { you_informal: "Probier!", you_pl: "Probiert!" },
                exampleGerman: [
                    { text: "Probier", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mal", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Suppe", case: "akkusativ" } as CaseElement,
                    { text: "!", case: "none" } as CaseElement
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
                    I: "bestelle", 
                    you_informal: "bestellst", 
                    he: "bestellt", 
                    we: "bestellen", 
                    you_pl: "bestellt", 
                    they: "bestellen" 
                },
                imperative: { you_informal: "Bestell!", you_pl: "Bestellt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Pizza", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bestellen", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    I: "bezahle", 
                    you_informal: "bezahlst", 
                    he: "bezahlt", 
                    we: "bezahlen", 
                    you_pl: "bezahlt", 
                    they: "bezahlen" 
                },
                imperative: { you_informal: "Bezahl!", you_pl: "Bezahlt!" },
                exampleGerman: [
                    { text: "Wo", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "muss", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bezahlen", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bin", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "satt", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gehen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ins Restaurant", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "treffen uns", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Café", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Am Bahnhof", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gibt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Imbiss", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kaufe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Brot", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in der Bäckerei", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gehe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in den Supermarkt", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kaufe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Obst", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auf dem Markt", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Im Restaurant", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "viele Gäste", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There are many guests in the restaurant.",
                clozeParts: ["Im Restaurant sind viele ", "."],
                clozeAnswers: ["Gäste"]
            } as Noun,
            {
                id: createWordId("essen-trinken-mahlzeitenlokale-021"),
                wordType: "noun",
                german: "Kellner/Kellnerin",
                article: "der/die",
                plural: "Kellner/Kellnerinnen",
                english: "waiter/waitress",
                exampleGerman: [
                    { text: "Die Kellnerin", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bringt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Speisekarte", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Kann", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Speisekarte", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "haben", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    { text: "Kann", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Rechnung", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "haben", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    { text: "Ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "der Platz", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "frei", case: "none" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    I: "reserviere", 
                    you_informal: "reservierst", 
                    he: "reserviert", 
                    we: "reservieren", 
                    you_pl: "reserviert", 
                    they: "reservieren" 
                },
                imperative: { you_informal: "Reservier!", you_pl: "Reserviert!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Tisch", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "reservieren", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like to reserve a table.",
                clozeParts: ["Ich möchte einen Tisch ", "."],
                clozeAnswers: ["reservieren"]
            } as Verb
        ]
    }
});