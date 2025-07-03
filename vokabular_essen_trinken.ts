// packages/trainer-themen/vokabular_essen_trinken.ts

import type { Word } from '../shared/types/index';

export const vokabularEssenTrinken: Record<string, Record<string, Word[]>> = {
    "Essen und Trinken": {

        // --- KATEGORIE: Obst & Gemüse ---
        "Obst & Gemüse": [
            {
                id: "essen-trinken-lebensmittel-001",
                wortart: "Nomen",
                german: "Apfel",
                artikel: "der",
                plural: "Äpfel",
                english: "apple",
                example_de: [
                    { "text": "Schmeckt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dir", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "der Apfel", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Do you like the taste of the apple?",
                cloze_parts: ["Schmeckt dir der ", "?"],
                cloze_answers: ["Apfel"]
            },
            {
                id: "essen-trinken-lebensmittel-002",
                wortart: "Nomen",
                german: "Banane",
                artikel: "die",
                plural: "Bananen",
                english: "banana",
                example_de: [
                    { "text": "Kann", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Banane", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "haben", "kasus": "verb" },
                    { "text": "?", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Hunger", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Can I have a banana? I'm hungry.",
                cloze_parts: ["Kann ich eine ", " haben?"],
                cloze_answers: ["Banane"]
            },
            {
                id: "essen-trinken-lebensmittel-009",
                wortart: "Nomen",
                german: "Gemüse",
                artikel: "das",
                plural: null,
                english: "vegetables",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gehe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in den Supermarkt", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am going to the supermarket.",
                cloze_parts: ["Ich gehe in den ", "."],
                cloze_answers: ["Supermarkt"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-019",
                wortart: "Nomen",
                german: "Markt",
                artikel: "der",
                plural: "Märkte",
                english: "market",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kaufe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Obst", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf dem Markt", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I buy fruit at the market.",
                cloze_parts: ["Ich kaufe Obst auf dem ", "."],
                cloze_answers: ["Markt"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-020",
                wortart: "Nomen",
                german: "Gast",
                artikel: "der",
                plural: "Gäste",
                english: "guest",
                example_de: [
                    { "text": "Im Restaurant", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "viele Gäste", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "There are many guests in the restaurant.",
                cloze_parts: ["Im Restaurant sind viele ", "."],
                cloze_answers: ["Gäste"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-021",
                wortart: "Nomen",
                german: "Kellner/Kellnerin",
                artikel: "der/die",
                plural: "Kellner/Kellnerinnen",
                english: "waiter/waitress",
                example_de: [
                    { "text": "Die Kellnerin", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bringt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Speisekarte", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The waitress brings the menu.",
                cloze_parts: ["Die ", " bringt die Speisekarte."],
                cloze_answers: ["Kellnerin"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-022",
                wortart: "Nomen",
                german: "Speisekarte",
                artikel: "die",
                plural: "Speisekarten",
                english: "menu",
                example_de: [
                    { "text": "Kann", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Speisekarte", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "haben", "kasus": "verb" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Can I have the menu?",
                cloze_parts: ["Kann ich die ", " haben?"],
                cloze_answers: ["Speisekarte"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-023",
                wortart: "Nomen",
                german: "Rechnung",
                artikel: "die",
                plural: "Rechnungen",
                english: "bill / check",
                example_de: [
                    { "text": "Kann", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Rechnung", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "haben", "kasus": "verb" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Can I have the bill?",
                cloze_parts: ["Kann ich die ", " haben?"],
                cloze_answers: ["Rechnung"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-024",
                wortart: "Nomen",
                german: "Platz",
                artikel: "der",
                plural: "Plätze",
                english: "seat / place",
                example_de: [
                    { "text": "Ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "der Platz", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "frei", "kasus": "none" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Is the seat free?",
                cloze_parts: ["Ist der ", " frei?"],
                cloze_answers: ["Platz"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-025",
                wortart: "Verb",
                german: "reservieren",
                english: "to reserve / to book",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "reserviert",
                konjugation_praesens: {
                    ich: "reserviere",
                    du: "reservierst",
                    er_sie_es: "reserviert",
                    wir: "reservieren",
                    ihr: "reserviert",
                    sie_Sie: "reservieren"
                },
                imperativ: {
                    du: "Reservier!",
                    ihr: "Reserviert!"
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen Tisch", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "reservieren", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I would like to reserve a table.",
                cloze_parts: ["Ich möchte einen Tisch ", "."],
                cloze_answers: ["reservieren"]
            }
        ]
    }
}; "kasus": "none" },
                    { "text": "esse", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Gemüse", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to eat vegetables.",
                cloze_parts: ["Ich esse gern ", "."],
                cloze_answers: ["Gemüse"]
            },
            {
                id: "essen-trinken-lebensmittel-013",
                wortart: "Nomen",
                german: "Obst",
                artikel: "das",
                plural: null,
                english: "fruit",
                example_de: [
                    { "text": "Obst", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gesund", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Fruit is healthy.",
                cloze_parts: ["", " ist gesund."],
                cloze_answers: ["Obst"]
            },
            {
                id: "essen-trinken-lebensmittel-017",
                wortart: "Nomen",
                german: "Tomate",
                artikel: "die",
                plural: "Tomaten",
                english: "tomato",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "esse", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Tomaten", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Salat", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I eat tomatoes in salad.",
                cloze_parts: ["Ich esse ", " im Salat."],
                cloze_answers: ["Tomaten"]
            }
        ],

        // --- KATEGORIE: Grundnahrungsmittel & Tierprodukte ---
        "Grundnahrungsmittel & Tierprodukte": [
            {
                id: "essen-trinken-lebensmittel-003",
                wortart: "Nomen",
                german: "Brot",
                artikel: "das",
                plural: "Brote",
                english: "bread",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "müssen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auch", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Brot", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kaufen", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We also need to buy bread.",
                cloze_parts: ["Wir müssen auch ", " kaufen."],
                cloze_answers: ["Brot"]
            },
            {
                id: "essen-trinken-lebensmittel-004",
                wortart: "Nomen",
                german: "Brötchen",
                artikel: "das",
                plural: "Brötchen",
                english: "bread roll",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "esse", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lieber", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Brötchen", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I prefer to eat bread rolls.",
                cloze_parts: ["Ich esse lieber ", "."],
                cloze_answers: ["Brötchen"]
            },
            {
                id: "essen-trinken-lebensmittel-005",
                wortart: "Nomen",
                german: "Butter",
                artikel: "die",
                plural: null,
                english: "butter",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "nehme", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Butter", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aufs Brot", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I put butter on my bread.",
                cloze_parts: ["Ich nehme ", " aufs Brot."],
                cloze_answers: ["Butter"]
            },
            {
                id: "essen-trinken-lebensmittel-006",
                wortart: "Nomen",
                german: "Ei",
                artikel: "das",
                plural: "Eier",
                english: "egg",
                example_de: [
                    { "text": "Möchtest", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Ei", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zum Frühstück", "kasus": "dativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Would you like an egg for breakfast?",
                cloze_parts: ["Möchtest du ein ", " zum Frühstück?"],
                cloze_answers: ["Ei"]
            },
            {
                id: "essen-trinken-lebensmittel-007",
                wortart: "Nomen",
                german: "Fisch",
                artikel: "der",
                plural: "Fische",
                english: "fish",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mag", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "keinen Fisch", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I don't like fish.",
                cloze_parts: ["Ich mag keinen ", "."],
                cloze_answers: ["Fisch"]
            },
            {
                id: "essen-trinken-lebensmittel-008",
                wortart: "Nomen",
                german: "Fleisch",
                artikel: "das",
                plural: null,
                english: "meat",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "esse", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kein Fleisch", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I don't eat meat.",
                cloze_parts: ["Ich esse kein ", "."],
                cloze_answers: ["Fleisch"]
            },
            {
                id: "essen-trinken-lebensmittel-010",
                wortart: "Nomen",
                german: "Käse",
                artikel: "der",
                plural: null,
                english: "cheese",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "esse", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Käse", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zum Frühstück", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I eat cheese for breakfast.",
                cloze_parts: ["Ich esse ", " zum Frühstück."],
                cloze_answers: ["Käse"]
            },
            {
                id: "essen-trinken-lebensmittel-012",
                wortart: "Nomen",
                german: "Milch",
                artikel: "die",
                plural: null,
                english: "milk",
                example_de: [
                    { "text": "Im Kühlschrank", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Milch", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "There is milk in the refrigerator.",
                cloze_parts: ["Im Kühlschrank ist ", "."],
                cloze_answers: ["Milch"]
            },
            {
                id: "essen-trinken-lebensmittel-014",
                wortart: "Nomen",
                german: "Reis",
                artikel: "der",
                plural: null,
                english: "rice",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "esse", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Reis", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to eat rice.",
                cloze_parts: ["Ich esse gern ", "."],
                cloze_answers: ["Reis"]
            },
            {
                id: "essen-trinken-lebensmittel-018",
                wortart: "Nomen",
                german: "Wurst",
                artikel: "die",
                plural: "Würste",
                english: "sausage / cold cuts",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Wurst", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I would like a sausage.",
                cloze_parts: ["Ich möchte eine ", "."],
                cloze_answers: ["Wurst"]
            },
            {
                id: "essen-trinken-lebensmittel-026",
                wortart: "Nomen",
                german: "Joghurt",
                artikel: "der",
                plural: "Joghurts",
                english: "yogurt",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "esse", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Joghurt", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mit Obst", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I eat yogurt with fruit.",
                cloze_parts: ["Ich esse ", " mit Obst."],
                cloze_answers: ["Joghurt"]
            },
            {
                id: "essen-trinken-lebensmittel-038",
                wortart: "Nomen",
                german: "Butterbrot",
                artikel: "das",
                plural: "Butterbrote",
                english: "slice of bread with butter",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "esse", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Butterbrot", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I eat a slice of bread with butter.",
                cloze_parts: ["Ich esse ein ", "."],
                cloze_answers: ["Butterbrot"]
            }
        ],

        // --- KATEGORIE: Getränke & Süßes ---
        "Getränke & Süßes": [
            {
                id: "essen-trinken-lebensmittel-011",
                wortart: "Nomen",
                german: "Kuchen",
                artikel: "der",
                plural: "Kuchen",
                english: "cake",
                example_de: [
                    { "text": "Der Kuchen", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schmeckt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr gut", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The cake tastes very good.",
                cloze_parts: ["Der ", " schmeckt sehr gut."],
                cloze_answers: ["Kuchen"]
            },
            {
                id: "essen-trinken-lebensmittel-019",
                wortart: "Nomen",
                german: "Wasser",
                artikel: "das",
                plural: null,
                english: "water",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Glas Wasser", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I would like a glass of water.",
                cloze_parts: ["Ich möchte ein Glas ", "."],
                cloze_answers: ["Wasser"]
            },
            {
                id: "essen-trinken-lebensmittel-021",
                wortart: "Nomen",
                german: "Saft",
                artikel: "der",
                plural: "Säfte",
                english: "juice",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "trinke", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Apfelsaft", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to drink apple juice.",
                cloze_parts: ["Ich trinke gern Apfel", "."],
                cloze_answers: ["saft"]
            },
            {
                id: "essen-trinken-lebensmittel-022",
                wortart: "Nomen",
                german: "Tee",
                artikel: "der",
                plural: "Tees",
                english: "tea",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "trinke", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Tee", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zum Frühstück", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I drink tea for breakfast.",
                cloze_parts: ["Ich trinke ", " zum Frühstück."],
                cloze_answers: ["Tee"]
            },
            {
                id: "essen-trinken-lebensmittel-023",
                wortart: "Nomen",
                german: "Kaffee",
                artikel: "der",
                plural: "Kaffees",
                english: "coffee",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "trinke", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "keinen Kaffee", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I don't drink coffee.",
                cloze_parts: ["Ich trinke keinen ", "."],
                cloze_answers: ["Kaffee"]
            },
            {
                id: "essen-trinken-lebensmittel-024",
                wortart: "Nomen",
                german: "Schokolade",
                artikel: "die",
                plural: "Schokoladen",
                english: "chocolate",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "esse", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Schokolade", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to eat chocolate.",
                cloze_parts: ["Ich esse gern ", "."],
                cloze_answers: ["Schokolade"]
            },
            {
                id: "essen-trinken-lebensmittel-025",
                wortart: "Nomen",
                german: "Marmelade",
                artikel: "die",
                plural: "Marmeladen",
                english: "jam / marmalade",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "esse", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Marmelade", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zum Frühstück", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I eat jam for breakfast.",
                cloze_parts: ["Ich esse ", " zum Frühstück."],
                cloze_answers: ["Marmelade"]
            },
            {
                id: "essen-trinken-lebensmittel-027",
                wortart: "Nomen",
                german: "Mineralwasser",
                artikel: "das",
                plural: null,
                english: "mineral water",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "trinke", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Mineralwasser", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I drink mineral water.",
                cloze_parts: ["Ich trinke ", "."],
                cloze_answers: ["Mineralwasser"]
            },
            {
                id: "essen-trinken-lebensmittel-028",
                wortart: "Nomen",
                german: "Cola",
                artikel: "die",
                plural: "Colas",
                english: "cola",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Cola", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I would like a cola.",
                cloze_parts: ["Ich möchte eine ", "."],
                cloze_answers: ["Cola"]
            },
            {
                id: "essen-trinken-lebensmittel-029",
                wortart: "Nomen",
                german: "Eis",
                artikel: "das",
                plural: "Eis",
                english: "ice cream / ice",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein großes Eis", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I would like a large ice cream.",
                cloze_parts: ["Ich möchte ein großes ", "."],
                cloze_answers: ["Eis"]
            }
        ],

        // --- KATEGORIE: Geschirr & Zutaten ---
        "Geschirr & Zutaten": [
            {
                id: "essen-trinken-lebensmittel-015",
                wortart: "Nomen",
                german: "Salz",
                artikel: "das",
                plural: null,
                english: "salt",
                example_de: [
                    { "text": "Gibst", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mir", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bitte", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "das Salz", "kasus": "akkusativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Can you please pass me the salt?",
                cloze_parts: ["Gibst du mir bitte das ", "?"],
                cloze_answers: ["Salz"]
            },
            {
                id: "essen-trinken-lebensmittel-016",
                wortart: "Nomen",
                german: "Suppe",
                artikel: "die",
                plural: "Suppen",
                english: "soup",
                example_de: [
                    { "text": "Die Suppe", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "heiß", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The soup is hot.",
                cloze_parts: ["Die ", " ist heiß."],
                cloze_answers: ["Suppe"]
            },
            {
                id: "essen-trinken-lebensmittel-020",
                wortart: "Nomen",
                german: "Zucker",
                artikel: "der",
                plural: null,
                english: "sugar",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "nehme", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Zucker", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Tee", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I take sugar in my tea.",
                cloze_parts: ["Ich nehme ", " im Tee."],
                cloze_answers: ["Zucker"]
            },
            {
                id: "essen-trinken-lebensmittel-030",
                wortart: "Nomen",
                german: "Flasche",
                artikel: "die",
                plural: "Flaschen",
                english: "bottle",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "brauche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Flasche", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I need a bottle.",
                cloze_parts: ["Ich brauche eine ", "."],
                cloze_answers: ["Flasche"]
            },
            {
                id: "essen-trinken-lebensmittel-031",
                wortart: "Nomen",
                german: "Glas",
                artikel: "das",
                plural: "Gläser",
                english: "glass",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Glas", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Wasser", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I would like a glass of water.",
                cloze_parts: ["Ich möchte ein ", " Wasser."],
                cloze_answers: ["Glas"]
            },
            {
                id: "essen-trinken-lebensmittel-032",
                wortart: "Nomen",
                german: "Tasse",
                artikel: "die",
                plural: "Tassen",
                english: "cup / mug",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Tasse", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Kaffee", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I would like a cup of coffee.",
                cloze_parts: ["Ich möchte eine ", " Kaffee."],
                cloze_answers: ["Tasse"]
            },
            {
                id: "essen-trinken-lebensmittel-033",
                wortart: "Nomen",
                german: "Teller",
                artikel: "der",
                plural: "Teller",
                english: "plate",
                example_de: [
                    { "text": "Die Teller", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "stehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Schrank", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The plates are in the cupboard.",
                cloze_parts: ["Die ", " stehen im Schrank."],
                cloze_answers: ["Teller"]
            },
            {
                id: "essen-trinken-lebensmittel-034",
                wortart: "Nomen",
                german: "Messer",
                artikel: "das",
                plural: "Messer",
                english: "knife",
                example_de: [
                    { "text": "Das Messer", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "scharf", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The knife is sharp.",
                cloze_parts: ["Das ", " ist scharf."],
                cloze_answers: ["Messer"]
            },
            {
                id: "essen-trinken-lebensmittel-035",
                wortart: "Nomen",
                german: "Gabel",
                artikel: "die",
                plural: "Gabeln",
                english: "fork",
                example_de: [
                    { "text": "Die Gabel", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "liegt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf dem Tisch", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The fork is on the table.",
                cloze_parts: ["Die ", " liegt auf dem Tisch."],
                cloze_answers: ["Gabel"]
            },
            {
                id: "essen-trinken-lebensmittel-036",
                wortart: "Nomen",
                german: "Löffel",
                artikel: "der",
                plural: "Löffel",
                english: "spoon",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "brauche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen Löffel", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "für die Suppe", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I need a spoon for the soup.",
                cloze_parts: ["Ich brauche einen ", " für die Suppe."],
                cloze_answers: ["Löffel"]
            },
            {
                id: "essen-trinken-lebensmittel-037",
                wortart: "Nomen",
                german: "Pfeffer",
                artikel: "der",
                plural: null,
                english: "pepper",
                example_de: [
                    { "text": "Der Pfeffer", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "scharf", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The pepper is spicy.",
                cloze_parts: ["Der ", " ist scharf."],
                cloze_answers: ["Pfeffer"]
            }
        ],

        // --- KATEGORIE: Mahlzeiten & Restaurant ---
        "Mahlzeiten & Restaurant": [
            {
                id: "essen-trinken-mahlzeitenlokale-001",
                wortart: "Nomen",
                german: "Frühstück",
                artikel: "das",
                plural: "Frühstücke",
                english: "breakfast",
                example_de: [
                    { "text": "Zum Frühstück", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "trinke", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Milch", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "For breakfast I drink milk.",
                cloze_parts: ["Zum ", " trinke ich Milch."],
                cloze_answers: ["Frühstück"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-002",
                wortart: "Nomen",
                german: "Mittagessen",
                artikel: "das",
                plural: "Mittagessen",
                english: "lunch",
                example_de: [
                    { "text": "Was", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gibt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zum Mittagessen", "kasus": "dativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "What is there for lunch?",
                cloze_parts: ["Was gibt es zum ", "?"],
                cloze_answers: ["Mittagessen"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-003",
                wortart: "Nomen",
                german: "Abendessen",
                artikel: "das",
                plural: "Abendessen",
                english: "dinner",
                example_de: [
                    { "text": "Zum Abendessen", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gibt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Brot", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "There is bread for dinner.",
                cloze_parts: ["Zum ", " gibt es Brot."],
                cloze_answers: ["Abendessen"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-004",
                wortart: "Verb",
                german: "essen",
                english: "to eat",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gegessen",
                konjugation_praesens: {
                    ich: "esse",
                    du: "isst",
                    er_sie_es: "isst",
                    wir: "essen",
                    ihr: "esst",
                    sie_Sie: "essen"
                },
                imperativ: {
                    du: "Iss!",
                    ihr: "Esst!"
                },
                example_de: [
                    { "text": "Was", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wollt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ihr", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "essen", "kasus": "verb" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "What do you want to eat?",
                cloze_parts: ["Was wollt ihr ", "?"],
                cloze_answers: ["essen"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-005",
                wortart: "Verb",
                german: "trinken",
                english: "to drink",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "getrunken",
                konjugation_praesens: {
                    ich: "trinke",
                    du: "trinkst",
                    er_sie_es: "trinkt",
                    wir: "trinken",
                    ihr: "trinkt",
                    sie_Sie: "trinken"
                },
                imperativ: {
                    du: "Trink!",
                    ihr: "Trinkt!"
                },
                example_de: [
                    { "text": "Was", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchtest", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "trinken", "kasus": "verb" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "What would you like to drink?",
                cloze_parts: ["Was möchtest du ", "?"],
                cloze_answers: ["trinken"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-006",
                wortart: "Nomen",
                german: "Hunger",
                artikel: "der",
                plural: null,
                english: "hunger",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Hunger", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am hungry. (Literally: I have hunger.)",
                cloze_parts: ["Ich habe ", "."],
                cloze_answers: ["Hunger"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-007",
                wortart: "Nomen",
                german: "Durst",
                artikel: "der",
                plural: null,
                english: "thirst",
                example_de: [
                    { "text": "Hast", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Durst", "kasus": "akkusativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Are you thirsty? (Literally: Do you have thirst?)",
                cloze_parts: ["Hast du ", "?"],
                cloze_answers: ["Durst"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-008",
                wortart: "Verb",
                german: "kochen",
                english: "to cook",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gekocht",
                konjugation_praesens: {
                    ich: "koche",
                    du: "kochst",
                    er_sie_es: "kocht",
                    wir: "kochen",
                    ihr: "kocht",
                    sie_Sie: "kochen"
                },
                imperativ: {
                    du: "Koch!",
                    ihr: "Kocht!"
                },
                example_de: [
                    { "text": "In der Küche", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kocht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meine Mutter", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My mother is cooking in the kitchen.",
                cloze_parts: ["In der Küche ", " meine Mutter."],
                cloze_answers: ["kocht"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-009",
                wortart: "Verb",
                german: "schmecken",
                english: "to taste",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "geschmeckt",
                konjugation_praesens: {
                    ich: "schmecke",
                    du: "schmeckst",
                    er_sie_es: "schmeckt",
                    wir: "schmecken",
                    ihr: "schmeckt",
                    sie_Sie: "schmecken"
                },
                imperativ: {
                    du: "Schmeck!",
                    ihr: "Schmeckt!"
                },
                example_de: [
                    { "text": "Der Kuchen", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schmeckt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr gut", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The cake tastes very good.",
                cloze_parts: ["Der Kuchen ", " sehr gut."],
                cloze_answers: ["schmeckt"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-010",
                wortart: "Verb",
                german: "probieren",
                english: "to try / to taste",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "probiert",
                konjugation_praesens: {
                    ich: "probiere",
                    du: "probierst",
                    er_sie_es: "probiert",
                    wir: "probieren",
                    ihr: "probiert",
                    sie_Sie: "probieren"
                },
                imperativ: {
                    du: "Probier!",
                    ihr: "Probiert!"
                },
                example_de: [
                    { "text": "Probier", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mal", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Suppe", "kasus": "akkusativ" },
                    { "text": "!", "kasus": "none" }
                ],
                example_en: "Try the soup!",
                cloze_parts: ["", " mal die Suppe!"],
                cloze_answers: ["Probier"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-011",
                wortart: "Verb",
                german: "bestellen",
                english: "to order",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "bestellt",
                konjugation_praesens: {
                    ich: "bestelle",
                    du: "bestellst",
                    er_sie_es: "bestellt",
                    wir: "bestellen",
                    ihr: "bestellt",
                    sie_Sie: "bestellen"
                },
                imperativ: {
                    du: "Bestell!",
                    ihr: "Bestellt!"
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Pizza", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bestellen", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I would like to order a pizza.",
                cloze_parts: ["Ich möchte eine Pizza ", "."],
                cloze_answers: ["bestellen"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-012",
                wortart: "Verb",
                german: "bezahlen",
                english: "to pay",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "bezahlt",
                konjugation_praesens: {
                    ich: "bezahle",
                    du: "bezahlst",
                    er_sie_es: "bezahlt",
                    wir: "bezahlen",
                    ihr: "bezahlt",
                    sie_Sie: "bezahlen"
                },
                imperativ: {
                    du: "Bezahl!",
                    ihr: "Bezahlt!"
                },
                example_de: [
                    { "text": "Wo", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "muss", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bezahlen", "kasus": "verb" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Where do I have to pay?",
                cloze_parts: ["Wo muss ich ", "?"],
                cloze_answers: ["bezahlen"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-013",
                wortart: "Adjektiv",
                german: "satt",
                english: "full (after eating)",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "satt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am full.",
                cloze_parts: ["Ich bin ", "."],
                cloze_answers: ["satt"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-014",
                wortart: "Nomen",
                german: "Restaurant",
                artikel: "das",
                plural: "Restaurants",
                english: "restaurant",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ins Restaurant", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are going to the restaurant.",
                cloze_parts: ["Wir gehen ins ", "."],
                cloze_answers: ["Restaurant"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-015",
                wortart: "Nomen",
                german: "Café",
                artikel: "das",
                plural: "Cafés",
                english: "cafe",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "treffen uns", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Café", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are meeting at the cafe.",
                cloze_parts: ["Wir treffen uns im ", "."],
                cloze_answers: ["Café"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-016",
                wortart: "Nomen",
                german: "Imbiss",
                artikel: "der",
                plural: "Imbisse",
                english: "snack bar / food stand",
                example_de: [
                    { "text": "Am Bahnhof", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gibt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen Imbiss", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "There is a snack bar at the train station.",
                cloze_parts: ["Am Bahnhof gibt es einen ", "."],
                cloze_answers: ["Imbiss"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-017",
                wortart: "Nomen",
                german: "Bäckerei",
                artikel: "die",
                plural: "Bäckereien",
                english: "bakery",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kaufe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Brot", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in der Bäckerei", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I buy bread at the bakery.",
                cloze_parts: ["Ich kaufe Brot in der ", "."],
                cloze_answers: ["Bäckerei"]
            },
            {
                id: "essen-trinken-mahlzeitenlokale-018",
                wortart: "Nomen",
                german: "Supermarkt",
                artikel: "der",
                plural: "Supermärkte",
                english: "supermarket",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ",