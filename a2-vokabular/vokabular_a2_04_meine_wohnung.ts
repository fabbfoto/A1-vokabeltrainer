// vokabular_a2_04_meine_wohnung.ts
// Thema 4: Meine Wohnung (58 Wörter)
// Story: Der Umzugstag - Chaos und Organisation beim Einzug in die neue Wohnung

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabularA2_04_meineWohnung: VocabularyStructure = createVocabulary({
    "Meine Wohnung": {
        
        // --- UNTERKAPITEL: Räume (10 Wörter) ---
        "Räume": [
            {
                id: createWordId("a2-04-raum-001"),
                wordType: "noun",
                german: "Zimmer",
                article: "das",
                plural: "Zimmer",
                english: "room",
                exampleGerman: [
                    { text: "Die neue Wohnung", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " vier Zimmer", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The new apartment has four rooms.",
                clozeParts: ["Die neue Wohnung hat vier ", "."],
                clozeAnswers: ["Zimmer"]
            } as Noun,
            {
                id: createWordId("a2-04-raum-002"),
                wordType: "noun",
                german: "Wohnzimmer",
                article: "das",
                plural: "Wohnzimmer",
                english: "living room",
                exampleGerman: [
                    { text: "Das Wohnzimmer", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " sehr groß", case: "none" },
                    { text: " und hell", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The living room is very big and bright.",
                clozeParts: ["Das ", " ist sehr groß und hell."],
                clozeAnswers: ["Wohnzimmer"]
            } as Noun,
            {
                id: createWordId("a2-04-raum-003"),
                wordType: "noun",
                german: "Schlafzimmer",
                article: "das",
                plural: "Schlafzimmer",
                english: "bedroom",
                exampleGerman: [
                    { text: "Im Schlafzimmer", case: "dativ" },
                    { text: " steht", case: "verb" },
                    { text: " schon", case: "none" },
                    { text: " das Bett", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The bed is already in the bedroom.",
                clozeParts: ["Im ", " steht schon das Bett."],
                clozeAnswers: ["Schlafzimmer"]
            } as Noun,
            {
                id: createWordId("a2-04-raum-004"),
                wordType: "noun",
                german: "Küche",
                article: "die",
                plural: "Küchen",
                english: "kitchen",
                exampleGerman: [
                    { text: "Die Küche", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " klein", case: "none" },
                    { text: ", aber", case: "none" },
                    { text: " praktisch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The kitchen is small but practical.",
                clozeParts: ["Die ", " ist klein, aber praktisch."],
                clozeAnswers: ["Küche"]
            } as Noun,
            {
                id: createWordId("a2-04-raum-005"),
                wordType: "noun",
                german: "Bad",
                article: "das",
                plural: "Bäder",
                english: "bathroom",
                exampleGerman: [
                    { text: "Das Bad", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " eine Dusche", case: "akkusativ" },
                    { text: " und", case: "none" },
                    { text: " eine Badewanne", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The bathroom has a shower and a bathtub.",
                clozeParts: ["Das ", " hat eine Dusche und eine Badewanne."],
                clozeAnswers: ["Bad"]
            } as Noun,
            {
                id: createWordId("a2-04-raum-006"),
                wordType: "noun",
                german: "Keller",
                article: "der",
                plural: "Keller",
                english: "basement",
                exampleGerman: [
                    { text: "Im Keller", case: "dativ" },
                    { text: " können", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " die Kartons", case: "akkusativ" },
                    { text: " lagern", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We can store the boxes in the basement.",
                clozeParts: ["Im ", " können wir die Kartons lagern."],
                clozeAnswers: ["Keller"]
            } as Noun,
            {
                id: createWordId("a2-04-raum-007"),
                wordType: "noun",
                german: "Balkon",
                article: "der",
                plural: "Balkone",
                english: "balcony",
                exampleGerman: [
                    { text: "Der Balkon", case: "nominativ" },
                    { text: " geht", case: "verb" },
                    { text: " nach Süden", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The balcony faces south.",
                clozeParts: ["Der ", " geht nach Süden."],
                clozeAnswers: ["Balkon"]
            } as Noun,
            {
                id: createWordId("a2-04-raum-008"),
                wordType: "noun",
                german: "Garage",
                article: "die",
                plural: "Garagen",
                english: "garage",
                exampleGerman: [
                    { text: "Das Auto", case: "nominativ" },
                    { text: " steht", case: "verb" },
                    { text: " noch", case: "none" },
                    { text: " in", case: "none" },
                    { text: " der Garage", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The car is still in the garage.",
                clozeParts: ["Das Auto steht noch in der ", "."],
                clozeAnswers: ["Garage"]
            } as Noun,
            {
                id: createWordId("a2-04-raum-009"),
                wordType: "noun",
                german: "Erdgeschoss",
                article: "das",
                plural: "Erdgeschosse",
                english: "ground floor",
                exampleGerman: [
                    { text: "Die Wohnung", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " im Erdgeschoss", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The apartment is on the ground floor.",
                clozeParts: ["Die Wohnung ist im ", "."],
                clozeAnswers: ["Erdgeschoss"]
            } as Noun,
            {
                id: createWordId("a2-04-raum-010"),
                wordType: "noun",
                german: "Stock",
                article: "der",
                plural: "Stockwerke",
                english: "floor / storey",
                exampleGerman: [
                    { text: "Die Nachbarn", case: "nominativ" },
                    { text: " wohnen", case: "verb" },
                    { text: " im dritten Stock", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The neighbors live on the third floor.",
                clozeParts: ["Die Nachbarn wohnen im dritten ", "."],
                clozeAnswers: ["Stock"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Möbel und Einrichtung (20 Wörter) ---
        "Möbel und Einrichtung": [
            {
                id: createWordId("a2-04-moeb-001"),
                wordType: "noun",
                german: "Bett",
                article: "das",
                plural: "Betten",
                english: "bed",
                exampleGerman: [
                    { text: "Das Bett", case: "nominativ" },
                    { text: " passt", case: "verb" },
                    { text: " kaum", case: "none" },
                    { text: " durch", case: "none" },
                    { text: " die Tür", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The bed barely fits through the door.",
                clozeParts: ["Das ", " passt kaum durch die Tür."],
                clozeAnswers: ["Bett"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-002"),
                wordType: "noun",
                german: "Stuhl",
                article: "der",
                plural: "Stühle",
                english: "chair",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " brauchen", case: "verb" },
                    { text: " noch", case: "none" },
                    { text: " vier Stühle", case: "akkusativ" },
                    { text: " für", case: "none" },
                    { text: " den Tisch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We still need four chairs for the table.",
                clozeParts: ["Wir brauchen noch vier ", " für den Tisch."],
                clozeAnswers: ["Stühle"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-003"),
                wordType: "noun",
                german: "Tisch",
                article: "der",
                plural: "Tische",
                english: "table",
                exampleGerman: [
                    { text: "Der Tisch", case: "nominativ" },
                    { text: " kommt", case: "verb" },
                    { text: " in", case: "none" },
                    { text: " die Mitte", case: "akkusativ" },
                    { text: " des Zimmers", case: "genitiv" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The table goes in the middle of the room.",
                clozeParts: ["Der ", " kommt in die Mitte des Zimmers."],
                clozeAnswers: ["Tisch"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-004"),
                wordType: "noun",
                german: "Sofa",
                article: "das",
                plural: "Sofas",
                english: "sofa",
                exampleGerman: [
                    { text: "Das alte Sofa", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " zu groß", case: "none" },
                    { text: " für", case: "none" },
                    { text: " das Wohnzimmer", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The old sofa is too big for the living room.",
                clozeParts: ["Das alte ", " ist zu groß für das Wohnzimmer."],
                clozeAnswers: ["Sofa"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-005"),
                wordType: "noun",
                german: "Schrank",
                article: "der",
                plural: "Schränke",
                english: "cupboard / wardrobe",
                exampleGerman: [
                    { text: "Der Schrank", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " sehr schwer", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The wardrobe is very heavy.",
                clozeParts: ["Der ", " ist sehr schwer."],
                clozeAnswers: ["Schrank"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-006"),
                wordType: "noun",
                german: "Kühlschrank",
                article: "der",
                plural: "Kühlschränke",
                english: "refrigerator",
                exampleGerman: [
                    { text: "Der Kühlschrank", case: "nominativ" },
                    { text: " funktioniert", case: "verb" },
                    { text: " schon", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The refrigerator is already working.",
                clozeParts: ["Der ", " funktioniert schon."],
                clozeAnswers: ["Kühlschrank"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-007"),
                wordType: "noun",
                german: "Herd",
                article: "der",
                plural: "Herde",
                english: "stove",
                exampleGerman: [
                    { text: "Der Herd", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " elektrisch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The stove is electric.",
                clozeParts: ["Der ", " ist elektrisch."],
                clozeAnswers: ["Herd"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-008"),
                wordType: "noun",
                german: "Lampe",
                article: "die",
                plural: "Lampen",
                english: "lamp",
                exampleGerman: [
                    { text: "Die Lampe", case: "nominativ" },
                    { text: " müssen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " noch", case: "none" },
                    { text: " aufhängen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We still have to hang up the lamp.",
                clozeParts: ["Die ", " müssen wir noch aufhängen."],
                clozeAnswers: ["Lampe"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-009"),
                wordType: "noun",
                german: "Bild",
                article: "das",
                plural: "Bilder",
                english: "picture",
                exampleGerman: [
                    { text: "Die Bilder", case: "nominativ" },
                    { text: " hängen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " morgen", case: "none" },
                    { text: " auf", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We'll hang the pictures tomorrow.",
                clozeParts: ["Die ", " hängen wir morgen auf."],
                clozeAnswers: ["Bilder"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-010"),
                wordType: "noun",
                german: "Möbel",
                article: "die",
                plural: "Möbel",
                english: "furniture",
                exampleGerman: [
                    { text: "Alle Möbel", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " endlich", case: "none" },
                    { text: " da", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "All the furniture is finally here.",
                clozeParts: ["Alle ", " sind endlich da."],
                clozeAnswers: ["Möbel"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-011"),
                wordType: "noun",
                german: "Geschirr",
                article: "das",
                plural: null,
                english: "dishes",
                exampleGerman: [
                    { text: "Das Geschirr", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " noch", case: "none" },
                    { text: " in", case: "none" },
                    { text: " den Kartons", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The dishes are still in the boxes.",
                clozeParts: ["Das ", " ist noch in den Kartons."],
                clozeAnswers: ["Geschirr"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-012"),
                wordType: "noun",
                german: "Gabel",
                article: "die",
                plural: "Gabeln",
                english: "fork",
                exampleGerman: [
                    { text: "Wo", case: "none" },
                    { text: " sind", case: "verb" },
                    { text: " die Gabeln", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Where are the forks?",
                clozeParts: ["Wo sind die ", "?"],
                clozeAnswers: ["Gabeln"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-013"),
                wordType: "noun",
                german: "Löffel",
                article: "der",
                plural: "Löffel",
                english: "spoon",
                exampleGerman: [
                    { text: "Die Löffel", case: "nominativ" },
                    { text: " kommen", case: "verb" },
                    { text: " in", case: "none" },
                    { text: " die Schublade", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The spoons go in the drawer.",
                clozeParts: ["Die ", " kommen in die Schublade."],
                clozeAnswers: ["Löffel"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-014"),
                wordType: "noun",
                german: "Messer",
                article: "das",
                plural: "Messer",
                english: "knife",
                exampleGerman: [
                    { text: "Pass auf", case: "none" },
                    { text: " mit", case: "none" },
                    { text: " den Messern", case: "dativ" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Be careful with the knives!",
                clozeParts: ["Pass auf mit den ", "!"],
                clozeAnswers: ["Messern"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-015"),
                wordType: "noun",
                german: "Teller",
                article: "der",
                plural: "Teller",
                english: "plate",
                exampleGerman: [
                    { text: "Ein Teller", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " beim Umzug", case: "dativ" },
                    { text: " kaputtgegangen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "One plate broke during the move.",
                clozeParts: ["Ein ", " ist beim Umzug kaputtgegangen."],
                clozeAnswers: ["Teller"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-016"),
                wordType: "noun",
                german: "Tasse",
                article: "die",
                plural: "Tassen",
                english: "cup",
                exampleGerman: [
                    { text: "Die Tassen", case: "nominativ" },
                    { text: " stehen", case: "verb" },
                    { text: " schon", case: "none" },
                    { text: " im Schrank", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The cups are already in the cupboard.",
                clozeParts: ["Die ", " stehen schon im Schrank."],
                clozeAnswers: ["Tassen"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-017"),
                wordType: "noun",
                german: "Glas",
                article: "das",
                plural: "Gläser",
                english: "glass",
                exampleGerman: [
                    { text: "Die Gläser", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " gut", case: "none" },
                    { text: " verpackt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The glasses are well packed.",
                clozeParts: ["Die ", " sind gut verpackt."],
                clozeAnswers: ["Gläser"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-018"),
                wordType: "noun",
                german: "Topf",
                article: "der",
                plural: "Töpfe",
                english: "pot",
                exampleGerman: [
                    { text: "Die Töpfe", case: "nominativ" },
                    { text: " brauchen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " in", case: "none" },
                    { text: " der Küche", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We need the pots in the kitchen.",
                clozeParts: ["Die ", " brauchen wir in der Küche."],
                clozeAnswers: ["Töpfe"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-019"),
                wordType: "noun",
                german: "Bank",
                article: "die",
                plural: "Bänke",
                english: "bench",
                exampleGerman: [
                    { text: "Die Bank", case: "nominativ" },
                    { text: " kommt", case: "verb" },
                    { text: " auf", case: "none" },
                    { text: " den Balkon", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The bench goes on the balcony.",
                clozeParts: ["Die ", " kommt auf den Balkon."],
                clozeAnswers: ["Bank"]
            } as Noun,
            {
                id: createWordId("a2-04-moeb-020"),
                wordType: "noun",
                german: "Handtuch",
                article: "das",
                plural: "Handtücher",
                english: "towel",
                exampleGerman: [
                    { text: "Die Handtücher", case: "nominativ" },
                    { text: " liegen", case: "verb" },
                    { text: " schon", case: "none" },
                    { text: " im Bad", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The towels are already in the bathroom.",
                clozeParts: ["Die ", " liegen schon im Bad."],
                clozeAnswers: ["Handtücher"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Haushaltsaktivitäten (20 Wörter) ---
        "Haushaltsaktivitäten": [
            {
                id: createWordId("a2-04-haus-001"),
                wordType: "verb",
                german: "putzen",
                english: "to clean",
                separable: false,
                coreForms: {
                    infinitive: "putzen",
                    thirdPerson: "putzt",
                    preterite: "putzte",
                    perfect: "hat geputzt"
                },
                exampleGerman: [
                    { text: "Zuerst", case: "none" },
                    { text: " müssen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " alles", case: "akkusativ" },
                    { text: " putzen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "First we have to clean everything.",
                clozeParts: ["Zuerst müssen wir alles ", "."],
                clozeAnswers: ["putzen"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-002"),
                wordType: "verb",
                german: "waschen",
                english: "to wash",
                separable: false,
                coreForms: {
                    infinitive: "waschen",
                    thirdPerson: "wäscht",
                    preterite: "wusch",
                    perfect: "hat gewaschen"
                },
                reflexive: true,
                exampleGerman: [
                    { text: "Nach", case: "none" },
                    { text: " dem Umzug", case: "dativ" },
                    { text: " möchte", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " mich", case: "akkusativ" },
                    { text: " waschen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After the move I want to wash myself.",
                clozeParts: ["Nach dem Umzug möchte ich mich ", "."],
                clozeAnswers: ["waschen"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-003"),
                wordType: "noun",
                german: "Wäsche",
                article: "die",
                plural: null,
                english: "laundry",
                exampleGerman: [
                    { text: "Die Wäsche", case: "nominativ" },
                    { text: " machen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " morgen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We'll do the laundry tomorrow.",
                clozeParts: ["Die ", " machen wir morgen."],
                clozeAnswers: ["Wäsche"]
            } as Noun,
            {
                id: createWordId("a2-04-haus-004"),
                wordType: "verb",
                german: "aufräumen",
                english: "to tidy up",
                separable: true,
                coreForms: {
                    infinitive: "aufräumen",
                    thirdPerson: "räumt auf",
                    preterite: "räumte auf",
                    perfect: "hat aufgeräumt"
                },
                exampleGerman: [
                    { text: "Die Kartons", case: "akkusativ" },
                    { text: " müssen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " noch", case: "none" },
                    { text: " aufräumen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We still have to clear away the boxes.",
                clozeParts: ["Die Kartons müssen wir noch ", "."],
                clozeAnswers: ["aufräumen"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-005"),
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
                    { text: "Heute", case: "none" },
                    { text: " können", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " noch nicht", case: "none" },
                    { text: " kochen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We can't cook yet today.",
                clozeParts: ["Heute können wir noch nicht ", "."],
                clozeAnswers: ["kochen"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-006"),
                wordType: "verb",
                german: "backen",
                english: "to bake",
                separable: false,
                coreForms: {
                    infinitive: "backen",
                    thirdPerson: "backt",
                    preterite: "backte",
                    perfect: "hat gebacken"
                },
                exampleGerman: [
                    { text: "In", case: "none" },
                    { text: " der neuen Küche", case: "dativ" },
                    { text: " will", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " viel", case: "none" },
                    { text: " backen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I want to bake a lot in the new kitchen.",
                clozeParts: ["In der neuen Küche will ich viel ", "."],
                clozeAnswers: ["backen"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-007"),
                wordType: "noun",
                german: "Heizung",
                article: "die",
                plural: "Heizungen",
                english: "heating",
                exampleGerman: [
                    { text: "Die Heizung", case: "nominativ" },
                    { text: " funktioniert", case: "verb" },
                    { text: " gut", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The heating works well.",
                clozeParts: ["Die ", " funktioniert gut."],
                clozeAnswers: ["Heizung"]
            } as Noun,
            {
                id: createWordId("a2-04-haus-008"),
                wordType: "noun",
                german: "Licht",
                article: "das",
                plural: "Lichter",
                english: "light",
                exampleGerman: [
                    { text: "Das Licht", case: "nominativ" },
                    { text: " im Flur", case: "dativ" },
                    { text: " geht", case: "verb" },
                    { text: " nicht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The light in the hallway doesn't work.",
                clozeParts: ["Das ", " im Flur geht nicht."],
                clozeAnswers: ["Licht"]
            } as Noun,
            {
                id: createWordId("a2-04-haus-009"),
                wordType: "verb",
                german: "öffnen",
                english: "to open",
                separable: false,
                coreForms: {
                    infinitive: "öffnen",
                    thirdPerson: "öffnet",
                    preterite: "öffnete",
                    perfect: "hat geöffnet"
                },
                exampleGerman: [
                    { text: "Kannst", case: "verb" },
                    { text: " du", case: "nominativ" },
                    { text: " das Fenster", case: "akkusativ" },
                    { text: " öffnen", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Can you open the window?",
                clozeParts: ["Kannst du das Fenster ", "?"],
                clozeAnswers: ["öffnen"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-010"),
                wordType: "verb",
                german: "schließen",
                english: "to close",
                separable: false,
                coreForms: {
                    infinitive: "schließen",
                    thirdPerson: "schließt",
                    preterite: "schloss",
                    perfect: "hat geschlossen"
                },
                exampleGerman: [
                    { text: "Die Tür", case: "nominativ" },
                    { text: " schließt", case: "verb" },
                    { text: " nicht richtig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The door doesn't close properly.",
                clozeParts: ["Die Tür ", " nicht richtig."],
                clozeAnswers: ["schließt"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-011"),
                wordType: "verb",
                german: "machen",
                english: "to make / do",
                separable: false,
                coreForms: {
                    infinitive: "machen",
                    thirdPerson: "macht",
                    preterite: "machte",
                    perfect: "hat gemacht"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " machen", case: "verb" },
                    { text: " eine Pause", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We're taking a break.",
                clozeParts: ["Wir ", " eine Pause."],
                clozeAnswers: ["machen"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-012"),
                wordType: "verb",
                german: "tun",
                english: "to do",
                separable: false,
                coreForms: {
                    infinitive: "tun",
                    thirdPerson: "tut",
                    preterite: "tat",
                    perfect: "hat getan"
                },
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " soll", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " mit", case: "none" },
                    { text: " den Büchern", case: "dativ" },
                    { text: " tun", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What should I do with the books?",
                clozeParts: ["Was soll ich mit den Büchern ", "?"],
                clozeAnswers: ["tun"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-013"),
                wordType: "verb",
                german: "stellen",
                english: "to put / place",
                separable: false,
                coreForms: {
                    infinitive: "stellen",
                    thirdPerson: "stellt",
                    preterite: "stellte",
                    perfect: "hat gestellt"
                },
                exampleGerman: [
                    { text: "Die Blumen", case: "akkusativ" },
                    { text: " stelle", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " auf", case: "none" },
                    { text: " den Tisch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'll put the flowers on the table.",
                clozeParts: ["Die Blumen ", " ich auf den Tisch."],
                clozeAnswers: ["stelle"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-014"),
                wordType: "verb",
                german: "legen",
                english: "to lay / put",
                separable: false,
                coreForms: {
                    infinitive: "legen",
                    thirdPerson: "legt",
                    preterite: "legte",
                    perfect: "hat gelegt"
                },
                exampleGerman: [
                    { text: "Die Bücher", case: "akkusativ" },
                    { text: " lege", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " ins Regal", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'll put the books on the shelf.",
                clozeParts: ["Die Bücher ", " ich ins Regal."],
                clozeAnswers: ["lege"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-015"),
                wordType: "verb",
                german: "aufmachen",
                english: "to open",
                separable: true,
                coreForms: {
                    infinitive: "aufmachen",
                    thirdPerson: "macht auf",
                    preterite: "machte auf",
                    perfect: "hat aufgemacht"
                },
                exampleGerman: [
                    { text: "Mach", case: "verb" },
                    { text: " bitte", case: "none" },
                    { text: " die Kartons", case: "akkusativ" },
                    { text: " auf", case: "verb" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Please open the boxes!",
                clozeParts: ["", " bitte die Kartons ", "!"],
                clozeAnswers: ["Mach", "auf"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-016"),
                wordType: "verb",
                german: "hängen",
                english: "to hang",
                separable: false,
                coreForms: {
                    infinitive: "hängen",
                    thirdPerson: "hängt",
                    preterite: "hängte",
                    perfect: "hat gehängt"
                },
                exampleGerman: [
                    { text: "Das Bild", case: "akkusativ" },
                    { text: " hängen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " über", case: "none" },
                    { text: " das Sofa", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We'll hang the picture above the sofa.",
                clozeParts: ["Das Bild ", " wir über das Sofa."],
                clozeAnswers: ["hängen"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-017"),
                wordType: "verb",
                german: "bringen",
                english: "to bring",
                separable: false,
                coreForms: {
                    infinitive: "bringen",
                    thirdPerson: "bringt",
                    preterite: "brachte",
                    perfect: "hat gebracht"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " bringe", case: "verb" },
                    { text: " die Kisten", case: "akkusativ" },
                    { text: " nach oben", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'll bring the boxes upstairs.",
                clozeParts: ["Ich ", " die Kisten nach oben."],
                clozeAnswers: ["bringe"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-018"),
                wordType: "verb",
                german: "holen",
                english: "to fetch / get",
                separable: false,
                coreForms: {
                    infinitive: "holen",
                    thirdPerson: "holt",
                    preterite: "holte",
                    perfect: "hat geholt"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " hole", case: "verb" },
                    { text: " noch", case: "none" },
                    { text: " mehr Kartons", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'll get more boxes.",
                clozeParts: ["Ich ", " noch mehr Kartons."],
                clozeAnswers: ["hole"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-019"),
                wordType: "verb",
                german: "setzen",
                english: "to sit down",
                separable: false,
                coreForms: {
                    infinitive: "sich setzen",
                    thirdPerson: "setzt sich",
                    preterite: "setzte sich",
                    perfect: "hat sich gesetzt"
                },
                reflexive: true,
                exampleGerman: [
                    { text: "Nach", case: "none" },
                    { text: " der Arbeit", case: "dativ" },
                    { text: " setze", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " mich", case: "akkusativ" },
                    { text: " aufs Sofa", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After work I sit down on the sofa.",
                clozeParts: ["Nach der Arbeit ", " ich mich aufs Sofa."],
                clozeAnswers: ["setze"]
            } as Verb,
            {
                id: createWordId("a2-04-haus-020"),
                wordType: "verb",
                german: "funktionieren",
                english: "to work / function",
                separable: false,
                coreForms: {
                    infinitive: "funktionieren",
                    thirdPerson: "funktioniert",
                    preterite: "funktionierte",
                    perfect: "hat funktioniert"
                },
                exampleGerman: [
                    { text: "Alles", case: "nominativ" },
                    { text: " funktioniert", case: "verb" },
                    { text: " perfekt", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Everything works perfectly!",
                clozeParts: ["Alles ", " perfekt!"],
                clozeAnswers: ["funktioniert"]
            } as Verb
        ],

        // --- UNTERKAPITEL: Wohnen und Miete (8 Wörter) ---
        "Wohnen und Miete": [
            {
                id: createWordId("a2-04-wohn-001"),
                wordType: "noun",
                german: "Miete",
                article: "die",
                plural: "Mieten",
                english: "rent",
                exampleGerman: [
                    { text: "Die Miete", case: "nominativ" },
                    { text: " für", case: "none" },
                    { text: " die neue Wohnung", case: "akkusativ" },
                    { text: " ist", case: "verb" },
                    { text: " höher", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The rent for the new apartment is higher.",
                clozeParts: ["Die ", " für die neue Wohnung ist höher."],
                clozeAnswers: ["Miete"]
            } as Noun,
            {
                id: createWordId("a2-04-wohn-002"),
                wordType: "verb",
                german: "mieten",
                english: "to rent",
                separable: false,
                coreForms: {
                    infinitive: "mieten",
                    thirdPerson: "mietet",
                    preterite: "mietete",
                    perfect: "hat gemietet"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " haben", case: "verb" },
                    { text: " die Wohnung", case: "akkusativ" },
                    { text: " für zwei Jahre", case: "none" },
                    { text: " gemietet", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We rented the apartment for two years.",
                clozeParts: ["Wir haben die Wohnung für zwei Jahre ", "."],
                clozeAnswers: ["gemietet"]
            } as Verb,
            {
                id: createWordId("a2-04-wohn-003"),
                wordType: "noun",
                german: "Vermieter",
                article: "der",
                plural: "Vermieter",
                english: "landlord",
                exampleGerman: [
                    { text: "Der Vermieter", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " sehr nett", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The landlord is very nice.",
                clozeParts: ["Der ", " ist sehr nett."],
                clozeAnswers: ["Vermieter"]
            } as Noun,
            {
                id: createWordId("a2-04-wohn-004"),
                wordType: "noun",
                german: "Vermieterin",
                article: "die",
                plural: "Vermieterinnen",
                english: "landlady",
                exampleGerman: [
                    { text: "Die Vermieterin", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " uns", case: "dativ" },
                    { text: " die Schlüssel", case: "akkusativ" },
                    { text: " gegeben", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The landlady gave us the keys.",
                clozeParts: ["Die ", " hat uns die Schlüssel gegeben."],
                clozeAnswers: ["Vermieterin"]
            } as Noun,
            {
                id: createWordId("a2-04-wohn-005"),
                wordType: "verb",
                german: "umziehen",
                english: "to move (house)",
                separable: true,
                coreForms: {
                    infinitive: "umziehen",
                    thirdPerson: "zieht um",
                    preterite: "zog um",
                    perfect: "ist umgezogen"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " gestern", case: "none" },
                    { text: " umgezogen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We moved yesterday.",
                clozeParts: ["Wir sind gestern ", "."],
                clozeAnswers: ["umgezogen"]
            } as Verb,
            {
                id: createWordId("a2-04-wohn-006"),
                wordType: "noun",
                german: "Umzug",
                article: "der",
                plural: "Umzüge",
                english: "move",
                exampleGerman: [
                    { text: "Der Umzug", case: "nominativ" },
                    { text: " war", case: "verb" },
                    { text: " sehr anstrengend", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The move was very exhausting.",
                clozeParts: ["Der ", " war sehr anstrengend."],
                clozeAnswers: ["Umzug"]
            } as Noun,
            {
                id: createWordId("a2-04-wohn-007"),
                wordType: "verb",
                german: "renovieren",
                english: "to renovate",
                separable: false,
                coreForms: {
                    infinitive: "renovieren",
                    thirdPerson: "renoviert",
                    preterite: "renovierte",
                    perfect: "hat renoviert"
                },
                exampleGerman: [
                    { text: "Das Bad", case: "akkusativ" },
                    { text: " müssen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " noch", case: "none" },
                    { text: " renovieren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We still have to renovate the bathroom.",
                clozeParts: ["Das Bad müssen wir noch ", "."],
                clozeAnswers: ["renovieren"]
            } as Verb,
            {
                id: createWordId("a2-04-wohn-008"),
                wordType: "noun",
                german: "Reparatur",
                article: "die",
                plural: "Reparaturen",
                english: "repair",
                exampleGerman: [
                    { text: "Die Reparatur", case: "nominativ" },
                    { text: " der Heizung", case: "genitiv" },
                    { text: " kostet", case: "verb" },
                    { text: " viel", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The heating repair costs a lot.",
                clozeParts: ["Die ", " der Heizung kostet viel."],
                clozeAnswers: ["Reparatur"]
            } as Noun,
            {
                id: createWordId("a2-04-wohn-009"),
                wordType: "verb",
                german: "reparieren",
                english: "to repair",
                separable: false,
                coreForms: {
                    infinitive: "reparieren",
                    thirdPerson: "repariert",
                    preterite: "reparierte",
                    perfect: "hat repariert"
                },
                exampleGerman: [
                    { text: "Der Hausmeister", case: "nominativ" },
                    { text: " kann", case: "verb" },
                    { text: " alles", case: "akkusativ" },
                    { text: " reparieren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The caretaker can repair everything.",
                clozeParts: ["Der Hausmeister kann alles ", "."],
                clozeAnswers: ["reparieren"]
            } as Verb
        ]
    }
});