// vokabular_a2_11_geschmack_vorlieben.ts
// Thema 11: Geschmack und Vorlieben (66 Wörter)
// Kontext: Ein Kochabend mit Freunden - von der Planung über den Einkauf bis zum gemeinsamen Essen
// Storyline: Hauptperson plant einen besonderen Abend, kauft ein und kocht für Freunde

import type { VocabularyStructure, Noun, Verb, Adjective, Adverb, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_11_geschmack_vorlieben: VocabularyStructure = createVocabulary({
    "Geschmack und Vorlieben": {
        
        // --- UNTERKAPITEL: Getränke (8 Wörter) ---
        // Kontext: Planung - Was trinken die Gäste gern?
        "Getränke": [
            {
                id: createWordId("a2-11-getraenk-001"),
                wordType: "noun",
                german: "Kaffee",
                article: "der",
                plural: "-",
                english: "coffee",
                exampleGerman: [
                    { text: "Nach dem Essen", case: "dativ" },
                    { text: " serviere", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " immer", case: "none" },
                    { text: " Kaffee", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After the meal I always serve coffee.",
                clozeParts: ["Nach dem Essen serviere ich immer ", "."],
                clozeAnswers: ["Kaffee"]
            } as Noun,
            {
                id: createWordId("a2-11-getraenk-002"),
                wordType: "noun",
                german: "Tee",
                article: "der",
                plural: "Tees",
                english: "tea",
                exampleGerman: [
                    { text: "Maria", case: "nominativ" },
                    { text: " mag", case: "verb" },
                    { text: " lieber", case: "none" },
                    { text: " Tee", case: "akkusativ" },
                    { text: " als Kaffee", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Maria prefers tea to coffee.",
                clozeParts: ["Maria mag lieber ", " als Kaffee."],
                clozeAnswers: ["Tee"]
            } as Noun,
            {
                id: createWordId("a2-11-getraenk-003"),
                wordType: "noun",
                german: "Bier",
                article: "das",
                plural: "Biere",
                english: "beer",
                exampleGerman: [
                    { text: "Die Männer", case: "nominativ" },
                    { text: " wollen", case: "verb" },
                    { text: " kaltes Bier", case: "akkusativ" },
                    { text: " zum Fußballspiel", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The men want cold beer for the football game.",
                clozeParts: ["Die Männer wollen kaltes ", " zum Fußballspiel."],
                clozeAnswers: ["Bier"]
            } as Noun,
            {
                id: createWordId("a2-11-getraenk-004"),
                wordType: "noun",
                german: "Wein",
                article: "der",
                plural: "Weine",
                english: "wine",
                exampleGerman: [
                    { text: "Zum italienischen Essen", case: "dativ" },
                    { text: " passt", case: "verb" },
                    { text: " Rotwein", case: "nominativ" },
                    { text: " perfekt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Red wine goes perfectly with Italian food.",
                clozeParts: ["Zum italienischen Essen passt Rot", " perfekt."],
                clozeAnswers: ["wein"]
            } as Noun,
            {
                id: createWordId("a2-11-getraenk-005"),
                wordType: "noun",
                german: "Saft",
                article: "der",
                plural: "Säfte",
                english: "juice",
                exampleGerman: [
                    { text: "Für die Kinder", case: "akkusativ" },
                    { text: " kaufe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " Apfelsaft", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "For the children I buy apple juice.",
                clozeParts: ["Für die Kinder kaufe ich Apfel", "."],
                clozeAnswers: ["saft"]
            } as Noun,
            {
                id: createWordId("a2-11-getraenk-006"),
                wordType: "noun",
                german: "Wasser",
                article: "das",
                plural: "-",
                english: "water",
                exampleGerman: [
                    { text: "Auf dem Tisch", case: "dativ" },
                    { text: " steht", case: "verb" },
                    { text: " immer", case: "none" },
                    { text: " eine Karaffe", case: "nominativ" },
                    { text: " mit Wasser", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There's always a carafe with water on the table.",
                clozeParts: ["Auf dem Tisch steht immer eine Karaffe mit ", "."],
                clozeAnswers: ["Wasser"]
            } as Noun,
            {
                id: createWordId("a2-11-getraenk-007"),
                wordType: "noun",
                german: "Mineralwasser",
                article: "das",
                plural: "-",
                english: "mineral water",
                exampleGerman: [
                    { text: "Tom", case: "nominativ" },
                    { text: " trinkt", case: "verb" },
                    { text: " nur", case: "none" },
                    { text: " Mineralwasser", case: "akkusativ" },
                    { text: " ohne Kohlensäure", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Tom only drinks still mineral water.",
                clozeParts: ["Tom trinkt nur ", " ohne Kohlensäure."],
                clozeAnswers: ["Mineralwasser"]
            } as Noun,
            {
                id: createWordId("a2-11-getraenk-008"),
                wordType: "noun",
                german: "Milch",
                article: "die",
                plural: "-",
                english: "milk",
                exampleGerman: [
                    { text: "Für den Kaffee", case: "akkusativ" },
                    { text: " stelle", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " Milch", case: "akkusativ" },
                    { text: " bereit", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I prepare milk for the coffee.",
                clozeParts: ["Für den Kaffee stelle ich ", " bereit."],
                clozeAnswers: ["Milch"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Obst und Gemüse (8 Wörter) ---
        // Kontext: Einkauf auf dem Markt am Vormittag
        "Obst und Gemüse": [
            {
                id: createWordId("a2-11-obst-001"),
                wordType: "noun",
                german: "Apfel",
                article: "der",
                plural: "Äpfel",
                english: "apple",
                exampleGerman: [
                    { text: "Auf dem Markt", case: "dativ" },
                    { text: " kaufe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " frische Äpfel", case: "akkusativ" },
                    { text: " für den Nachtisch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "At the market I buy fresh apples for dessert.",
                clozeParts: ["Auf dem Markt kaufe ich frische ", " für den Nachtisch."],
                clozeAnswers: ["Äpfel"]
            } as Noun,
            {
                id: createWordId("a2-11-obst-002"),
                wordType: "noun",
                german: "Banane",
                article: "die",
                plural: "Bananen",
                english: "banana",
                exampleGerman: [
                    { text: "Die Bananen", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " perfekt reif", case: "none" },
                    { text: " für den Obstsalat", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The bananas are perfectly ripe for the fruit salad.",
                clozeParts: ["Die ", " sind perfekt reif für den Obstsalat."],
                clozeAnswers: ["Bananen"]
            } as Noun,
            {
                id: createWordId("a2-11-obst-003"),
                wordType: "noun",
                german: "Birne",
                article: "die",
                plural: "Birnen",
                english: "pear",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " nehme", case: "verb" },
                    { text: " auch", case: "none" },
                    { text: " zwei Birnen", case: "akkusativ" },
                    { text: " mit", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm also taking two pears.",
                clozeParts: ["Ich nehme auch zwei ", " mit."],
                clozeAnswers: ["Birnen"]
            } as Noun,
            {
                id: createWordId("a2-11-obst-004"),
                wordType: "noun",
                german: "Orange",
                article: "die",
                plural: "Orangen",
                english: "orange",
                exampleGerman: [
                    { text: "Aus den Orangen", case: "dativ" },
                    { text: " presse", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " frischen Saft", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm squeezing fresh juice from the oranges.",
                clozeParts: ["Aus den ", " presse ich frischen Saft."],
                clozeAnswers: ["Orangen"]
            } as Noun,
            {
                id: createWordId("a2-11-obst-005"),
                wordType: "noun",
                german: "Tomate",
                article: "die",
                plural: "Tomaten",
                english: "tomato",
                exampleGerman: [
                    { text: "Die reifen Tomaten", case: "nominativ" },
                    { text: " vom Bauern", case: "dativ" },
                    { text: " schmecken", case: "verb" },
                    { text: " am besten", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The ripe tomatoes from the farmer taste the best.",
                clozeParts: ["Die reifen ", " vom Bauern schmecken am besten."],
                clozeAnswers: ["Tomaten"]
            } as Noun,
            {
                id: createWordId("a2-11-obst-006"),
                wordType: "noun",
                german: "Kartoffel",
                article: "die",
                plural: "Kartoffeln",
                english: "potato",
                exampleGerman: [
                    { text: "Für das Gratin", case: "akkusativ" },
                    { text: " brauche", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " zwei Kilo Kartoffeln", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "For the gratin I need two kilos of potatoes.",
                clozeParts: ["Für das Gratin brauche ich zwei Kilo ", "."],
                clozeAnswers: ["Kartoffeln"]
            } as Noun,
            {
                id: createWordId("a2-11-obst-007"),
                wordType: "noun",
                german: "Gemüse",
                article: "das",
                plural: "-",
                english: "vegetables",
                exampleGerman: [
                    { text: "Das frische Gemüse", case: "nominativ" },
                    { text: " vom Markt", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " viel besser", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The fresh vegetables from the market are much better.",
                clozeParts: ["Das frische ", " vom Markt ist viel besser."],
                clozeAnswers: ["Gemüse"]
            } as Noun,
            {
                id: createWordId("a2-11-obst-008"),
                wordType: "noun",
                german: "Obst",
                article: "das",
                plural: "-",
                english: "fruit",
                exampleGerman: [
                    { text: "Zum Schluss", case: "dativ" },
                    { text: " kaufe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " noch Obst", case: "akkusativ" },
                    { text: " für morgen früh", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Finally I buy fruit for tomorrow morning.",
                clozeParts: ["Zum Schluss kaufe ich noch ", " für morgen früh."],
                clozeAnswers: ["Obst"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Fleisch und Hauptgerichte (9 Wörter) ---
        // Kontext: Vorbereitung des Hauptgangs am Nachmittag
        "Fleisch und Hauptgerichte": [
            {
                id: createWordId("a2-11-fleisch-001"),
                wordType: "noun",
                german: "Fleisch",
                article: "das",
                plural: "-",
                english: "meat",
                exampleGerman: [
                    { text: "Das Fleisch", case: "nominativ" },
                    { text: " muss", case: "verb" },
                    { text: " zwei Stunden", case: "akkusativ" },
                    { text: " marinieren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The meat needs to marinate for two hours.",
                clozeParts: ["Das ", " muss zwei Stunden marinieren."],
                clozeAnswers: ["Fleisch"]
            } as Noun,
            {
                id: createWordId("a2-11-fleisch-002"),
                wordType: "noun",
                german: "Fisch",
                article: "der",
                plural: "Fische",
                english: "fish",
                exampleGerman: [
                    { text: "Anna", case: "nominativ" },
                    { text: " isst", case: "verb" },
                    { text: " kein Fleisch", case: "akkusativ" },
                    { text: ", aber Fisch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Anna doesn't eat meat, but fish.",
                clozeParts: ["Anna isst kein Fleisch, aber ", "."],
                clozeAnswers: ["Fisch"]
            } as Noun,
            {
                id: createWordId("a2-11-fleisch-003"),
                wordType: "noun",
                german: "Hähnchen",
                article: "das",
                plural: "Hähnchen",
                english: "chicken",
                exampleGerman: [
                    { text: "Das Hähnchen", case: "nominativ" },
                    { text: " im Ofen", case: "dativ" },
                    { text: " duftet", case: "verb" },
                    { text: " schon herrlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The chicken in the oven already smells wonderful.",
                clozeParts: ["Das ", " im Ofen duftet schon herrlich."],
                clozeAnswers: ["Hähnchen"]
            } as Noun,
            {
                id: createWordId("a2-11-fleisch-004"),
                wordType: "noun",
                german: "Schwein",
                article: "das",
                plural: "Schweine",
                english: "pork",
                exampleGerman: [
                    { text: "Zwei Gäste", case: "nominativ" },
                    { text: " essen", case: "verb" },
                    { text: " kein Schweinefleisch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Two guests don't eat pork.",
                clozeParts: ["Zwei Gäste essen kein ", "efleisch."],
                clozeAnswers: ["Schwein"]
            } as Noun,
            {
                id: createWordId("a2-11-fleisch-005"),
                wordType: "noun",
                german: "Pizza",
                article: "die",
                plural: "Pizzas/Pizzen",
                english: "pizza",
                exampleGerman: [
                    { text: "Für die Kinder", case: "akkusativ" },
                    { text: " mache", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " extra", case: "none" },
                    { text: " eine kleine Pizza", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "For the children I'm making an extra small pizza.",
                clozeParts: ["Für die Kinder mache ich extra eine kleine ", "."],
                clozeAnswers: ["Pizza"]
            } as Noun,
            {
                id: createWordId("a2-11-fleisch-006"),
                wordType: "noun",
                german: "Hamburger",
                article: "der",
                plural: "Hamburger",
                english: "hamburger",
                exampleGerman: [
                    { text: "Die Teenager", case: "nominativ" },
                    { text: " wollen", case: "verb" },
                    { text: " lieber Hamburger", case: "akkusativ" },
                    { text: " als Braten", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teenagers prefer hamburgers to roast.",
                clozeParts: ["Die Teenager wollen lieber ", " als Braten."],
                clozeAnswers: ["Hamburger"]
            } as Noun,
            {
                id: createWordId("a2-11-fleisch-007"),
                wordType: "noun",
                german: "Reis",
                article: "der",
                plural: "-",
                english: "rice",
                exampleGerman: [
                    { text: "Zum Curry", case: "dativ" },
                    { text: " koche", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " Basmatireis", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "With the curry I'm cooking basmati rice.",
                clozeParts: ["Zum Curry koche ich Basmati", "."],
                clozeAnswers: ["reis"]
            } as Noun,
            {
                id: createWordId("a2-11-fleisch-008"),
                wordType: "noun",
                german: "Nudel",
                article: "die",
                plural: "Nudeln",
                english: "noodle, pasta",
                exampleGerman: [
                    { text: "Die selbstgemachten Nudeln", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " eine Überraschung", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The homemade pasta is a surprise.",
                clozeParts: ["Die selbstgemachten ", " sind eine Überraschung."],
                clozeAnswers: ["Nudeln"]
            } as Noun,
            {
                id: createWordId("a2-11-fleisch-009"),
                wordType: "noun",
                german: "Suppe",
                article: "die",
                plural: "Suppen",
                english: "soup",
                exampleGerman: [
                    { text: "Als Vorspeise", case: "akkusativ" },
                    { text: " serviere", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " eine Gemüsesuppe", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "As a starter I'm serving vegetable soup.",
                clozeParts: ["Als Vorspeise serviere ich eine Gemüse", "."],
                clozeAnswers: ["suppe"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Süßes und Snacks (8 Wörter) ---
        // Kontext: Nachtisch und Knabbereien vorbereiten
        "Süßes und Snacks": [
            {
                id: createWordId("a2-11-suess-001"),
                wordType: "noun",
                german: "Kuchen",
                article: "der",
                plural: "Kuchen",
                english: "cake",
                exampleGerman: [
                    { text: "Der selbstgebackene Kuchen", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " meine Spezialität", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The homemade cake is my specialty.",
                clozeParts: ["Der selbstgebackene ", " ist meine Spezialität."],
                clozeAnswers: ["Kuchen"]
            } as Noun,
            {
                id: createWordId("a2-11-suess-002"),
                wordType: "noun",
                german: "Torte",
                article: "die",
                plural: "Torten",
                english: "tart, fancy cake",
                exampleGerman: [
                    { text: "Die Schokoladentorte", case: "nominativ" },
                    { text: " steht", case: "verb" },
                    { text: " schon", case: "none" },
                    { text: " im Kühlschrank", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The chocolate cake is already in the fridge.",
                clozeParts: ["Die Schokoladen", " steht schon im Kühlschrank."],
                clozeAnswers: ["torte"]
            } as Noun,
            {
                id: createWordId("a2-11-suess-003"),
                wordType: "noun",
                german: "Schokolade",
                article: "die",
                plural: "Schokoladen",
                english: "chocolate",
                exampleGerman: [
                    { text: "Zur Torte", case: "dativ" },
                    { text: " verwende", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " nur dunkle Schokolade", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "For the cake I only use dark chocolate.",
                clozeParts: ["Zur Torte verwende ich nur dunkle ", "."],
                clozeAnswers: ["Schokolade"]
            } as Noun,
            {
                id: createWordId("a2-11-suess-004"),
                wordType: "noun",
                german: "Eis",
                article: "das",
                plural: "-",
                english: "ice cream",
                exampleGerman: [
                    { text: "Zum warmen Apfelkuchen", case: "dativ" },
                    { text: " gibt", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " Vanilleeis", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "With the warm apple cake there's vanilla ice cream.",
                clozeParts: ["Zum warmen Apfelkuchen gibt es Vanille", "."],
                clozeAnswers: ["eis"]
            } as Noun,
            {
                id: createWordId("a2-11-suess-005"),
                wordType: "noun",
                german: "Zucker",
                article: "der",
                plural: "-",
                english: "sugar",
                exampleGerman: [
                    { text: "In den Kuchen", case: "akkusativ" },
                    { text: " kommt", case: "verb" },
                    { text: " weniger Zucker", case: "nominativ" },
                    { text: " als im Rezept", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Less sugar goes into the cake than in the recipe.",
                clozeParts: ["In den Kuchen kommt weniger ", " als im Rezept."],
                clozeAnswers: ["Zucker"]
            } as Noun,
            {
                id: createWordId("a2-11-suess-006"),
                wordType: "adjective",
                german: "süß",
                english: "sweet",
                exampleGerman: [
                    { text: "Der Nachtisch", case: "nominativ" },
                    { text: " darf", case: "verb" },
                    { text: " nicht zu süß", case: "none" },
                    { text: " sein", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The dessert shouldn't be too sweet.",
                clozeParts: ["Der Nachtisch darf nicht zu ", " sein."],
                clozeAnswers: ["süß"]
            } as Adjective,
            {
                id: createWordId("a2-11-suess-007"),
                wordType: "noun",
                german: "Süßigkeiten",
                article: "die",
                plural: "Süßigkeiten",
                english: "sweets, candy",
                exampleGerman: [
                    { text: "Für die Kinder", case: "akkusativ" },
                    { text: " stelle", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " eine Schale", case: "akkusativ" },
                    { text: " mit Süßigkeiten", case: "dativ" },
                    { text: " bereit", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "For the children I prepare a bowl with sweets.",
                clozeParts: ["Für die Kinder stelle ich eine Schale mit ", " bereit."],
                clozeAnswers: ["Süßigkeiten"]
            } as Noun,
            {
                id: createWordId("a2-11-suess-008"),
                wordType: "noun",
                german: "Pommes frites",
                article: "die",
                plural: "Pommes frites",
                english: "french fries",
                exampleGerman: [
                    { text: "Zu den Hamburgern", case: "dativ" },
                    { text: " mache", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " selbstgemachte Pommes frites", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "With the hamburgers I'm making homemade french fries.",
                clozeParts: ["Zu den Hamburgern mache ich selbstgemachte ", "."],
                clozeAnswers: ["Pommes frites"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Grundnahrungsmittel und Kochen (15 Wörter) ---
        // Kontext: Der Kochprozess am späten Nachmittag
        "Grundnahrungsmittel und Kochen": [
            {
                id: createWordId("a2-11-grund-001"),
                wordType: "noun",
                german: "Brot",
                article: "das",
                plural: "Brote",
                english: "bread",
                exampleGerman: [
                    { text: "Das frische Brot", case: "nominativ" },
                    { text: " vom Bäcker", case: "dativ" },
                    { text: " schneide", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " in Scheiben", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm slicing the fresh bread from the bakery.",
                clozeParts: ["Das frische ", " vom Bäcker schneide ich in Scheiben."],
                clozeAnswers: ["Brot"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-002"),
                wordType: "noun",
                german: "Brötchen",
                article: "das",
                plural: "Brötchen",
                english: "bread roll",
                exampleGerman: [
                    { text: "Die warmen Brötchen", case: "nominativ" },
                    { text: " lege", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " in einen Korb", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm putting the warm bread rolls in a basket.",
                clozeParts: ["Die warmen ", " lege ich in einen Korb."],
                clozeAnswers: ["Brötchen"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-003"),
                wordType: "noun",
                german: "Butter",
                article: "die",
                plural: "-",
                english: "butter",
                exampleGerman: [
                    { text: "Die Butter", case: "nominativ" },
                    { text: " nehme", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " rechtzeitig", case: "none" },
                    { text: " aus dem Kühlschrank", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm taking the butter out of the fridge in time.",
                clozeParts: ["Die ", " nehme ich rechtzeitig aus dem Kühlschrank."],
                clozeAnswers: ["Butter"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-004"),
                wordType: "noun",
                german: "Ei",
                article: "das",
                plural: "Eier",
                english: "egg",
                exampleGerman: [
                    { text: "Für die Mayonnaise", case: "akkusativ" },
                    { text: " brauche", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " drei frische Eier", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "For the mayonnaise I need three fresh eggs.",
                clozeParts: ["Für die Mayonnaise brauche ich drei frische ", "."],
                clozeAnswers: ["Eier"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-005"),
                wordType: "noun",
                german: "Käse",
                article: "der",
                plural: "Käse",
                english: "cheese",
                exampleGerman: [
                    { text: "Den französischen Käse", case: "akkusativ" },
                    { text: " serviere", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " zum Wein", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm serving the French cheese with the wine.",
                clozeParts: ["Den französischen ", " serviere ich zum Wein."],
                clozeAnswers: ["Käse"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-006"),
                wordType: "noun",
                german: "Salz",
                article: "das",
                plural: "Salze",
                english: "salt",
                exampleGerman: [
                    { text: "Das Gemüse", case: "nominativ" },
                    { text: " braucht", case: "verb" },
                    { text: " noch", case: "none" },
                    { text: " etwas Salz", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The vegetables need a bit more salt.",
                clozeParts: ["Das Gemüse braucht noch etwas ", "."],
                clozeAnswers: ["Salz"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-007"),
                wordType: "noun",
                german: "Pfeffer",
                article: "der",
                plural: "-",
                english: "pepper",
                exampleGerman: [
                    { text: "Den frisch gemahlenen Pfeffer", case: "akkusativ" },
                    { text: " stelle", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " auf den Tisch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm putting the freshly ground pepper on the table.",
                clozeParts: ["Den frisch gemahlenen ", " stelle ich auf den Tisch."],
                clozeAnswers: ["Pfeffer"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-008"),
                wordType: "noun",
                german: "Öl",
                article: "das",
                plural: "Öle",
                english: "oil",
                exampleGerman: [
                    { text: "Mit Olivenöl", case: "dativ" },
                    { text: " brate", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " das Gemüse", case: "akkusativ" },
                    { text: " an", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm frying the vegetables with olive oil.",
                clozeParts: ["Mit Oliven", " brate ich das Gemüse an."],
                clozeAnswers: ["öl"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-009"),
                wordType: "noun",
                german: "Salat",
                article: "der",
                plural: "Salate",
                english: "salad",
                exampleGerman: [
                    { text: "Der bunte Salat", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " fast fertig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The colorful salad is almost ready.",
                clozeParts: ["Der bunte ", " ist fast fertig."],
                clozeAnswers: ["Salat"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-010"),
                wordType: "verb",
                german: "essen",
                english: "to eat",
                separable: false,
                coreForms: {
                    infinitive: "essen",
                    thirdPerson: "isst",
                    preterite: "aß",
                    perfect: "hat gegessen"
                },
                exampleGerman: [
                    { text: "Um acht Uhr", case: "none" },
                    { text: " essen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " alle zusammen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "At eight o'clock we all eat together.",
                clozeParts: ["Um acht Uhr ", " wir alle zusammen."],
                clozeAnswers: ["essen"]
            } as Verb,
            {
                id: createWordId("a2-11-grund-011"),
                wordType: "noun",
                german: "Essen",
                article: "das",
                plural: "-",
                english: "food, meal",
                exampleGerman: [
                    { text: "Das ganze Essen", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " endlich fertig", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "All the food is finally ready!",
                clozeParts: ["Das ganze ", " ist endlich fertig!"],
                clozeAnswers: ["Essen"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-012"),
                wordType: "verb",
                german: "trinken",
                english: "to drink",
                separable: false,
                coreForms: {
                    infinitive: "trinken",
                    thirdPerson: "trinkt",
                    preterite: "trank",
                    perfect: "hat getrunken"
                },
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " möchtet", case: "verb" },
                    { text: " ihr", case: "nominativ" },
                    { text: " denn trinken", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What would you like to drink?",
                clozeParts: ["Was möchtet ihr denn ", "?"],
                clozeAnswers: ["trinken"]
            } as Verb,
            {
                id: createWordId("a2-11-grund-013"),
                wordType: "noun",
                german: "Getränk",
                article: "das",
                plural: "Getränke",
                english: "drink, beverage",
                exampleGerman: [
                    { text: "Die kalten Getränke", case: "nominativ" },
                    { text: " stehen", case: "verb" },
                    { text: " schon", case: "none" },
                    { text: " auf der Terrasse", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The cold drinks are already on the terrace.",
                clozeParts: ["Die kalten ", " stehen schon auf der Terrasse."],
                clozeAnswers: ["Getränke"]
            } as Noun,
            {
                id: createWordId("a2-11-grund-014"),
                wordType: "verb",
                german: "kochen",
                english: "to cook",
                separable: false,
                coreForms: {
                    infinitive: "kochen",
                    thirdPerson: "kocht",
                    preterite: "kochte",
                    perfect: "hat gekocht"
                },
                exampleGerman: [
                    { text: "Seit drei Stunden", case: "none" },
                    { text: " koche", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " schon", case: "none" },
                    { text: " für meine Gäste", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I've been cooking for my guests for three hours.",
                clozeParts: ["Seit drei Stunden ", " ich schon für meine Gäste."],
                clozeAnswers: ["koche"]
            } as Verb,
            {
                id: createWordId("a2-11-grund-015"),
                wordType: "verb",
                german: "braten",
                english: "to fry, to roast",
                separable: false,
                coreForms: {
                    infinitive: "braten",
                    thirdPerson: "brät",
                    preterite: "briet",
                    perfect: "hat gebraten"
                },
                exampleGerman: [
                    { text: "Das Fleisch", case: "akkusativ" },
                    { text: " brate", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " bei niedriger Temperatur", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm roasting the meat at low temperature.",
                clozeParts: ["Das Fleisch ", " ich bei niedriger Temperatur."],
                clozeAnswers: ["brate"]
            } as Verb
        ],

        // --- UNTERKAPITEL: Geschmack und Bewertung (17 Wörter) ---
        // Kontext: Das gemeinsame Essen und die Reaktionen der Gäste
        "Geschmack und Bewertung": [
            {
                id: createWordId("a2-11-bewert-001"),
                wordType: "verb",
                german: "schmecken",
                english: "to taste",
                separable: false,
                coreForms: {
                    infinitive: "schmecken",
                    thirdPerson: "schmeckt",
                    preterite: "schmeckte",
                    perfect: "hat geschmeckt"
                },
                exampleGerman: [
                    { text: "Das Essen", case: "nominativ" },
                    { text: " schmeckt", case: "verb" },
                    { text: " allen Gästen", case: "dativ" },
                    { text: " ausgezeichnet", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The food tastes excellent to all guests.",
                clozeParts: ["Das Essen ", " allen Gästen ausgezeichnet."],
                clozeAnswers: ["schmeckt"]
            } as Verb,
            {
                id: createWordId("a2-11-bewert-002"),
                wordType: "adjective",
                german: "sauer",
                english: "sour",
                exampleGerman: [
                    { text: "Die Zitronen", case: "nominativ" },
                    { text: " im Salat", case: "dativ" },
                    { text: " sind", case: "verb" },
                    { text: " etwas zu sauer", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The lemons in the salad are a bit too sour.",
                clozeParts: ["Die Zitronen im Salat sind etwas zu ", "."],
                clozeAnswers: ["sauer"]
            } as Adjective,
            {
                id: createWordId("a2-11-bewert-003"),
                wordType: "adjective",
                german: "bitter",
                english: "bitter",
                exampleGerman: [
                    { text: "Der Espresso", case: "nominativ" },
                    { text: " nach dem Essen", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " angenehm bitter", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The espresso after dinner is pleasantly bitter.",
                clozeParts: ["Der Espresso nach dem Essen ist angenehm ", "."],
                clozeAnswers: ["bitter"]
            } as Adjective,
            {
                id: createWordId("a2-11-bewert-004"),
                wordType: "adjective",
                german: "scharf",
                english: "spicy, hot",
                exampleGerman: [
                    { text: "Das Curry", case: "nominativ" },
                    { text: " war", case: "verb" },
                    { text: " perfekt scharf", case: "none" },
                    { text: " gewürzt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The curry was perfectly spiced.",
                clozeParts: ["Das Curry war perfekt ", " gewürzt."],
                clozeAnswers: ["scharf"]
            } as Adjective,
            {
                id: createWordId("a2-11-bewert-005"),
                wordType: "adjective",
                german: "lecker",
                english: "delicious",
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " finden", case: "verb" },
                    { text: " das Essen", case: "akkusativ" },
                    { text: " unglaublich lecker", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone finds the food incredibly delicious.",
                clozeParts: ["Alle finden das Essen unglaublich ", "."],
                clozeAnswers: ["lecker"]
            } as Adjective,
            {
                id: createWordId("a2-11-bewert-006"),
                wordType: "verb",
                german: "mögen",
                english: "to like",
                separable: false,
                coreForms: {
                    infinitive: "mögen",
                    thirdPerson: "mag",
                    preterite: "mochte",
                    perfect: "hat gemocht"
                },
                exampleGerman: [
                    { text: "Die Kinder", case: "nominativ" },
                    { text: " mögen", case: "verb" },
                    { text: " besonders", case: "none" },
                    { text: " die Pizza", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The children especially like the pizza.",
                clozeParts: ["Die Kinder ", " besonders die Pizza."],
                clozeAnswers: ["mögen"]
            } as Verb,
            {
                id: createWordId("a2-11-bewert-007"),
                wordType: "adverb",
                german: "gern",
                english: "gladly, like to",
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " essen", case: "verb" },
                    { text: " gern", case: "none" },
                    { text: " bei mir", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone likes to eat at my place.",
                clozeParts: ["Alle essen ", " bei mir."],
                clozeAnswers: ["gern"]
            } as Adverb,
            {
                id: createWordId("a2-11-bewert-008"),
                wordType: "adverb",
                german: "lieber",
                english: "rather, prefer",
                exampleGerman: [
                    { text: "Tom", case: "nominativ" },
                    { text: " hätte", case: "verb" },
                    { text: " lieber", case: "none" },
                    { text: " Fisch", case: "akkusativ" },
                    { text: " gegessen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Tom would have preferred to eat fish.",
                clozeParts: ["Tom hätte ", " Fisch gegessen."],
                clozeAnswers: ["lieber"]
            } as Adverb,
            {
                id: createWordId("a2-11-bewert-009"),
                wordType: "adjective",
                german: "Lieblings-",
                english: "favorite",
                exampleGerman: [
                    { text: "Mein Lieblingsgericht", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " besonders gut", case: "none" },
                    { text: " gelungen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My favorite dish turned out particularly well today.",
                clozeParts: ["Mein ", "gericht ist heute besonders gut gelungen."],
                clozeAnswers: ["Lieblings"]
            } as Adjective,
            {
                id: createWordId("a2-11-bewert-010"),
                wordType: "verb",
                german: "probieren",
                english: "to try, to taste",
                separable: false,
                coreForms: {
                    infinitive: "probieren",
                    thirdPerson: "probiert",
                    preterite: "probierte",
                    perfect: "hat probiert"
                },
                exampleGerman: [
                    { text: "Jeder", case: "nominativ" },
                    { text: " muss", case: "verb" },
                    { text: " unbedingt", case: "none" },
                    { text: " den Nachtisch", case: "akkusativ" },
                    { text: " probieren", case: "verb" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Everyone must definitely try the dessert!",
                clozeParts: ["Jeder muss unbedingt den Nachtisch ", "!"],
                clozeAnswers: ["probieren"]
            } as Verb,
            {
                id: createWordId("a2-11-bewert-011"),
                wordType: "noun",
                german: "Geschmack",
                article: "der",
                plural: "Geschmäcker",
                english: "taste, flavor",
                exampleGerman: [
                    { text: "Der Geschmack", case: "nominativ" },
                    { text: " der Soße", case: "genitiv" },
                    { text: " ist", case: "verb" },
                    { text: " perfekt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The flavor of the sauce is perfect.",
                clozeParts: ["Der ", " der Soße ist perfekt."],
                clozeAnswers: ["Geschmack"]
            } as Noun,
            {
                id: createWordId("a2-11-bewert-012"),
                wordType: "adjective",
                german: "hungrig",
                english: "hungry",
                exampleGerman: [
                    { text: "Die Gäste", case: "nominativ" },
                    { text: " waren", case: "verb" },
                    { text: " sehr hungrig", case: "none" },
                    { text: " angekommen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The guests arrived very hungry.",
                clozeParts: ["Die Gäste waren sehr ", " angekommen."],
                clozeAnswers: ["hungrig"]
            } as Adjective,
            {
                id: createWordId("a2-11-bewert-013"),
                wordType: "adjective",
                german: "durstig",
                english: "thirsty",
                exampleGerman: [
                    { text: "Nach dem scharfen Essen", case: "dativ" },
                    { text: " sind", case: "verb" },
                    { text: " alle", case: "nominativ" },
                    { text: " durstig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After the spicy food everyone is thirsty.",
                clozeParts: ["Nach dem scharfen Essen sind alle ", "."],
                clozeAnswers: ["durstig"]
            } as Adjective,
            {
                id: createWordId("a2-11-bewert-014"),
                wordType: "adjective",
                german: "satt",
                english: "full, satisfied",
                exampleGerman: [
                    { text: "Jetzt", case: "none" },
                    { text: " sind", case: "verb" },
                    { text: " alle", case: "nominativ" },
                    { text: " glücklich und satt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Now everyone is happy and full.",
                clozeParts: ["Jetzt sind alle glücklich und ", "."],
                clozeAnswers: ["satt"]
            } as Adjective,
            {
                id: createWordId("a2-11-bewert-015"),
                wordType: "adjective",
                german: "vegetarisch",
                english: "vegetarian",
                exampleGerman: [
                    { text: "Die vegetarischen Gerichte", case: "nominativ" },
                    { text: " waren", case: "verb" },
                    { text: " besonders beliebt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The vegetarian dishes were particularly popular.",
                clozeParts: ["Die ", "en Gerichte waren besonders beliebt."],
                clozeAnswers: ["vegetarisch"]
            } as Adjective,
            {
                id: createWordId("a2-11-bewert-016"),
                wordType: "adjective",
                german: "bio",
                english: "organic",
                exampleGerman: [
                    { text: "Alle Zutaten", case: "nominativ" },
                    { text: " waren", case: "verb" },
                    { text: " bio", case: "none" },
                    { text: " und regional", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "All ingredients were organic and regional.",
                clozeParts: ["Alle Zutaten waren ", " und regional."],
                clozeAnswers: ["bio"]
            } as Adjective,
            {
                id: createWordId("a2-11-bewert-017"),
                wordType: "adjective",
                german: "frisch",
                english: "fresh",
                exampleGerman: [
                    { text: "Was für ein Abend", case: "nominativ" },
                    { text: " mit frischem Essen", case: "dativ" },
                    { text: " und guten Freunden", case: "dativ" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "What an evening with fresh food and good friends!",
                clozeParts: ["Was für ein Abend mit ", "em Essen und guten Freunden!"],
                clozeAnswers: ["frisch"]
            } as Adjective
        ]
    }
});