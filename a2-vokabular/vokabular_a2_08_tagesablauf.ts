// vokabular_a2_08_tagesablauf.ts
// Thema 8: Tagesablauf (45 Wörter)
// Kontext: Ein typischer Arbeitstag - vom Aufstehen bis zum Schlafengehen

import type { VocabularyStructure, Noun, Verb, Adjective, Adverb, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_08_tagesablauf: VocabularyStructure = createVocabulary({
    "Tagesablauf": {
        
        // --- UNTERKAPITEL: Uhrzeiten und Zeitangaben (15 Wörter) ---
        "Uhrzeiten und Zeitangaben": [
            {
                id: createWordId("a2-08-zeit-001"),
                wordType: "noun",
                german: "Zeit",
                article: "die",
                plural: "Zeiten",
                english: "time",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " habe", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " keine Zeit", case: "akkusativ" },
                    { text: " für ein langes Frühstück", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I don't have time for a long breakfast today.",
                clozeParts: ["Ich habe heute keine ", " für ein langes Frühstück."],
                clozeAnswers: ["Zeit"]
            } as Noun,
            {
                id: createWordId("a2-08-zeit-002"),
                wordType: "noun",
                german: "Uhr",
                article: "die",
                plural: "Uhren",
                english: "clock / watch",
                exampleGerman: [
                    { text: "Meine Uhr", case: "nominativ" },
                    { text: " zeigt", case: "verb" },
                    { text: " schon halb acht", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My watch already shows half past seven.",
                clozeParts: ["Meine ", " zeigt schon halb acht."],
                clozeAnswers: ["Uhr"]
            } as Noun,
            {
                id: createWordId("a2-08-zeit-003"),
                wordType: "adverb",
                german: "heute",
                english: "today",
                exampleGerman: [
                    { text: "Heute", case: "none" },
                    { text: " muss", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " früher aufstehen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Today I have to get up earlier.",
                clozeParts: ["", " muss ich früher aufstehen."],
                clozeAnswers: ["Heute"]
            } as Adverb,
            {
                id: createWordId("a2-08-zeit-004"),
                wordType: "adverb",
                german: "gestern",
                english: "yesterday",
                exampleGerman: [
                    { text: "Gestern", case: "none" },
                    { text: " bin", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " zu spät", case: "none" },
                    { text: " ins Bett", case: "akkusativ" },
                    { text: " gegangen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Yesterday I went to bed too late.",
                clozeParts: ["", " bin ich zu spät ins Bett gegangen."],
                clozeAnswers: ["Gestern"]
            } as Adverb,
            {
                id: createWordId("a2-08-zeit-005"),
                wordType: "adverb",
                german: "morgen",
                english: "tomorrow",
                exampleGerman: [
                    { text: "Morgen", case: "none" },
                    { text: " kann", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " ausschlafen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Tomorrow I can sleep in.",
                clozeParts: ["", " kann ich ausschlafen."],
                clozeAnswers: ["Morgen"]
            } as Adverb,
            {
                id: createWordId("a2-08-zeit-006"),
                wordType: "adverb",
                german: "vorgestern",
                english: "the day before yesterday",
                exampleGerman: [
                    { text: "Vorgestern", case: "none" },
                    { text: " hatte", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " einen anstrengenden Tag", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The day before yesterday I had a strenuous day.",
                clozeParts: ["", " hatte ich einen anstrengenden Tag."],
                clozeAnswers: ["Vorgestern"]
            } as Adverb,
            {
                id: createWordId("a2-08-zeit-007"),
                wordType: "adverb",
                german: "übermorgen",
                english: "the day after tomorrow",
                exampleGerman: [
                    { text: "Übermorgen", case: "none" },
                    { text: " beginnt", case: "verb" },
                    { text: " das Wochenende", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The day after tomorrow the weekend begins.",
                clozeParts: ["", " beginnt das Wochenende."],
                clozeAnswers: ["Übermorgen"]
            } as Adverb,
            {
                id: createWordId("a2-08-zeit-008"),
                wordType: "adverb",
                german: "jetzt",
                english: "now",
                exampleGerman: [
                    { text: "Jetzt", case: "none" },
                    { text: " muss", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " aber wirklich los", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Now I really have to go!",
                clozeParts: ["", " muss ich aber wirklich los!"],
                clozeAnswers: ["Jetzt"]
            } as Adverb,
            {
                id: createWordId("a2-08-zeit-009"),
                wordType: "adverb",
                german: "dann",
                english: "then",
                exampleGerman: [
                    { text: "Erst frühstücke ich", case: "none" },
                    { text: ", dann", case: "none" },
                    { text: " fahre", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " zur Arbeit", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "First I have breakfast, then I go to work.",
                clozeParts: ["Erst frühstücke ich, ", " fahre ich zur Arbeit."],
                clozeAnswers: ["dann"]
            } as Adverb,
            {
                id: createWordId("a2-08-zeit-010"),
                wordType: "adverb",
                german: "bald",
                english: "soon",
                exampleGerman: [
                    { text: "Bald", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " Mittagspause", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Soon it's lunch break.",
                clozeParts: ["", " ist Mittagspause."],
                clozeAnswers: ["Bald"]
            } as Adverb,
            {
                id: createWordId("a2-08-zeit-011"),
                wordType: "adjective",
                german: "früh",
                english: "early",
                exampleGerman: [
                    { text: "Am frühen Morgen", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " noch ruhig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the early morning it's still quiet.",
                clozeParts: ["Am ", "en Morgen ist es noch ruhig."],
                clozeAnswers: ["früh"]
            } as Adjective,
            {
                id: createWordId("a2-08-zeit-012"),
                wordType: "adjective",
                german: "spät",
                english: "late",
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " schon spät", case: "none" },
                    { text: ", ich muss ins Bett", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It's already late, I have to go to bed.",
                clozeParts: ["Es ist schon ", ", ich muss ins Bett."],
                clozeAnswers: ["spät"]
            } as Adjective,
            {
                id: createWordId("a2-08-zeit-013"),
                wordType: "adjective",
                german: "pünktlich",
                english: "punctual / on time",
                exampleGerman: [
                    { text: "Der Bus", case: "nominativ" },
                    { text: " kommt", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " pünktlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The bus is on time today.",
                clozeParts: ["Der Bus kommt heute ", "."],
                clozeAnswers: ["pünktlich"]
            } as Adjective,
            {
                id: createWordId("a2-08-zeit-014"),
                wordType: "noun",
                german: "Datum",
                article: "das",
                plural: "Daten",
                english: "date",
                exampleGerman: [
                    { text: "Welches Datum", case: "akkusativ" },
                    { text: " haben", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " heute", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What's the date today?",
                clozeParts: ["Welches ", " haben wir heute?"],
                clozeAnswers: ["Datum"]
            } as Noun,
            {
                id: createWordId("a2-08-zeit-015"),
                wordType: "noun",
                german: "Kalender",
                article: "der",
                plural: "Kalender",
                english: "calendar",
                exampleGerman: [
                    { text: "Im Kalender", case: "dativ" },
                    { text: " stehen", case: "verb" },
                    { text: " alle wichtigen Termine", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "All important appointments are in the calendar.",
                clozeParts: ["Im ", " stehen alle wichtigen Termine."],
                clozeAnswers: ["Kalender"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Morgendliche Routine (10 Wörter) ---
        "Morgendliche Routine": [
            {
                id: createWordId("a2-08-morgen-001"),
                wordType: "noun",
                german: "Wecker",
                article: "der",
                plural: "Wecker",
                english: "alarm clock",
                exampleGerman: [
                    { text: "Der Wecker", case: "nominativ" },
                    { text: " klingelt", case: "verb" },
                    { text: " um sechs Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The alarm clock rings at six o'clock.",
                clozeParts: ["Der ", " klingelt um sechs Uhr."],
                clozeAnswers: ["Wecker"]
            } as Noun,
            {
                id: createWordId("a2-08-morgen-002"),
                wordType: "verb",
                german: "aufstehen",
                english: "to get up",
                separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "aufgestanden",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " stehe", case: "verb" },
                    { text: " jeden Morgen", case: "none" },
                    { text: " um sieben Uhr", case: "none" },
                    { text: " auf", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I get up at seven o'clock every morning.",
                clozeParts: ["Ich ", " jeden Morgen um sieben Uhr ", "."],
                clozeAnswers: ["stehe", "auf"]
            } as Verb,
            {
                id: createWordId("a2-08-morgen-003"),
                wordType: "verb",
                german: "aufwachen",
                english: "to wake up",
                separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "aufgewacht",
                exampleGerman: [
                    { text: "Manchmal", case: "none" },
                    { text: " wache", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " schon vor dem Wecker", case: "dativ" },
                    { text: " auf", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Sometimes I wake up before the alarm.",
                clozeParts: ["Manchmal ", " ich schon vor dem Wecker ", "."],
                clozeAnswers: ["wache", "auf"]
            } as Verb,
            {
                id: createWordId("a2-08-morgen-004"),
                wordType: "verb",
                german: "duschen",
                english: "to shower",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geduscht",
                exampleGerman: [
                    { text: "Nach dem Aufstehen", case: "dativ" },
                    { text: " dusche", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " mich", case: "akkusativ" },
                    { text: " immer kalt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After getting up I always take a cold shower.",
                clozeParts: ["Nach dem Aufstehen ", " ich mich immer kalt."],
                clozeAnswers: ["dusche"]
            } as Verb,
            {
                id: createWordId("a2-08-morgen-005"),
                wordType: "verb",
                german: "waschen",
                english: "to wash",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gewaschen",
                exampleGerman: [
                    { text: "Die Kinder", case: "nominativ" },
                    { text: " waschen sich", case: "verb" },
                    { text: " das Gesicht", case: "akkusativ" },
                    { text: " mit kaltem Wasser", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The children wash their faces with cold water.",
                clozeParts: ["Die Kinder ", " das Gesicht mit kaltem Wasser."],
                clozeAnswers: ["waschen sich"]
            } as Verb,
            {
                id: createWordId("a2-08-morgen-006"),
                wordType: "noun",
                german: "Frühstück",
                article: "das",
                plural: "Frühstücke",
                english: "breakfast",
                exampleGerman: [
                    { text: "Das Frühstück", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " die wichtigste Mahlzeit", case: "nominativ" },
                    { text: " des Tages", case: "genitiv" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Breakfast is the most important meal of the day.",
                clozeParts: ["Das ", " ist die wichtigste Mahlzeit des Tages."],
                clozeAnswers: ["Frühstück"]
            } as Noun,
            {
                id: createWordId("a2-08-morgen-007"),
                wordType: "verb",
                german: "frühstücken",
                english: "to have breakfast",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefrühstückt",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " frühstücken", case: "verb" },
                    { text: " immer zusammen", case: "none" },
                    { text: " in der Küche", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We always have breakfast together in the kitchen.",
                clozeParts: ["Wir ", " immer zusammen in der Küche."],
                clozeAnswers: ["frühstücken"]
            } as Verb,
            {
                id: createWordId("a2-08-morgen-008"),
                wordType: "verb",
                german: "anziehen",
                english: "to get dressed",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "angezogen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ziehe", case: "verb" },
                    { text: " mir", case: "dativ" },
                    { text: " schnell etwas Warmes", case: "akkusativ" },
                    { text: " an", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I quickly put on something warm.",
                clozeParts: ["Ich ", " mir schnell etwas Warmes ", "."],
                clozeAnswers: ["ziehe", "an"]
            } as Verb,
            {
                id: createWordId("a2-08-morgen-009"),
                wordType: "verb",
                german: "umziehen",
                english: "to change clothes",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "umgezogen",
                exampleGerman: [
                    { text: "Nach dem Sport", case: "dativ" },
                    { text: " muss", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " mich", case: "akkusativ" },
                    { text: " umziehen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After sports I have to change clothes.",
                clozeParts: ["Nach dem Sport muss ich mich ", "."],
                clozeAnswers: ["umziehen"]
            } as Verb
        ],

        // --- UNTERKAPITEL: Tägliche Notwendigkeiten (14 Wörter) ---
        "Tägliche Notwendigkeiten": [
            {
                id: createWordId("a2-08-taeg-001"),
                wordType: "verb",
                german: "arbeiten",
                english: "to work",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gearbeitet",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " arbeite", case: "verb" },
                    { text: " acht Stunden", case: "akkusativ" },
                    { text: " am Tag", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I work eight hours a day.",
                clozeParts: ["Ich ", " acht Stunden am Tag."],
                clozeAnswers: ["arbeite"]
            } as Verb,
            {
                id: createWordId("a2-08-taeg-002"),
                wordType: "verb",
                german: "lernen",
                english: "to learn / study",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                exampleGerman: [
                    { text: "Abends", case: "none" },
                    { text: " lerne", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " noch eine Stunde", case: "akkusativ" },
                    { text: " Deutsch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the evening I study German for another hour.",
                clozeParts: ["Abends ", " ich noch eine Stunde Deutsch."],
                clozeAnswers: ["lerne"]
            } as Verb,
            {
                id: createWordId("a2-08-taeg-003"),
                wordType: "verb",
                german: "einkaufen",
                english: "to shop",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingekauft",
                exampleGerman: [
                    { text: "Nach der Arbeit", case: "dativ" },
                    { text: " kaufe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " schnell", case: "none" },
                    { text: " ein", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After work I quickly go shopping.",
                clozeParts: ["Nach der Arbeit ", " ich schnell ", "."],
                clozeAnswers: ["kaufe", "ein"]
            } as Verb,
            {
                id: createWordId("a2-08-taeg-004"),
                wordType: "verb",
                german: "kochen",
                english: "to cook",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekocht",
                exampleGerman: [
                    { text: "Heute", case: "none" },
                    { text: " koche", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " etwas Leckeres", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Today I'm cooking something delicious.",
                clozeParts: ["Heute ", " ich etwas Leckeres."],
                clozeAnswers: ["koche"]
            } as Verb,
            {
                id: createWordId("a2-08-taeg-005"),
                wordType: "verb",
                german: "essen",
                english: "to eat",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegessen",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " essen", case: "verb" },
                    { text: " immer", case: "none" },
                    { text: " um 18 Uhr", case: "none" },
                    { text: " zu Abend", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We always eat dinner at 6 PM.",
                clozeParts: ["Wir ", " immer um 18 Uhr zu Abend."],
                clozeAnswers: ["essen"]
            } as Verb,
            {
                id: createWordId("a2-08-taeg-006"),
                wordType: "verb",
                german: "putzen",
                english: "to clean",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geputzt",
                exampleGerman: [
                    { text: "Samstags", case: "none" },
                    { text: " putze", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " die ganze Wohnung", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "On Saturdays I clean the whole apartment.",
                clozeParts: ["Samstags ", " ich die ganze Wohnung."],
                clozeAnswers: ["putze"]
            } as Verb,
            {
                id: createWordId("a2-08-taeg-007"),
                wordType: "verb",
                german: "aufräumen",
                english: "to tidy up",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "aufgeräumt",
                exampleGerman: [
                    { text: "Die Kinder", case: "nominativ" },
                    { text: " räumen", case: "verb" },
                    { text: " ihr Zimmer", case: "akkusativ" },
                    { text: " auf", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The children tidy up their room.",
                clozeParts: ["Die Kinder ", " ihr Zimmer ", "."],
                clozeAnswers: ["räumen", "auf"]
            } as Verb,
            {
                id: createWordId("a2-08-taeg-008"),
                wordType: "verb",
                german: "schlafen",
                english: "to sleep",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschlafen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " schlafe", case: "verb" },
                    { text: " mindestens", case: "none" },
                    { text: " sieben Stunden", case: "akkusativ" },
                    { text: " pro Nacht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I sleep at least seven hours per night.",
                clozeParts: ["Ich ", " mindestens sieben Stunden pro Nacht."],
                clozeAnswers: ["schlafe"]
            } as Verb,
            {
                id: createWordId("a2-08-taeg-009"),
                wordType: "noun",
                german: "Mittagessen",
                article: "das",
                plural: "Mittagessen",
                english: "lunch",
                exampleGerman: [
                    { text: "Das Mittagessen", case: "nominativ" },
                    { text: " in der Kantine", case: "dativ" },
                    { text: " schmeckt", case: "verb" },
                    { text: " heute gut", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The lunch in the canteen tastes good today.",
                clozeParts: ["Das ", " in der Kantine schmeckt heute gut."],
                clozeAnswers: ["Mittagessen"]
            } as Noun,
            {
                id: createWordId("a2-08-taeg-010"),
                wordType: "noun",
                german: "Abendessen",
                article: "das",
                plural: "Abendessen",
                english: "dinner",
                exampleGerman: [
                    { text: "Zum Abendessen", case: "dativ" },
                    { text: " gibt", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " heute Pizza", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "For dinner there's pizza today.",
                clozeParts: ["Zum ", " gibt es heute Pizza."],
                clozeAnswers: ["Abendessen"]
            } as Noun,
            {
                id: createWordId("a2-08-taeg-011"),
                wordType: "adjective",
                german: "müde",
                english: "tired",
                exampleGerman: [
                    { text: "Nach der Arbeit", case: "dativ" },
                    { text: " bin", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " immer sehr müde", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After work I'm always very tired.",
                clozeParts: ["Nach der Arbeit bin ich immer sehr ", "."],
                clozeAnswers: ["müde"]
            } as Adjective,
            {
                id: createWordId("a2-08-taeg-012"),
                wordType: "noun",
                german: "Pause",
                article: "die",
                plural: "Pausen",
                english: "break",
                exampleGerman: [
                    { text: "In der Pause", case: "dativ" },
                    { text: " trinke", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " einen Kaffee", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "During the break I drink a coffee.",
                clozeParts: ["In der ", " trinke ich einen Kaffee."],
                clozeAnswers: ["Pause"]
            } as Noun,
            {
                id: createWordId("a2-08-taeg-013"),
                wordType: "verb",
                german: "ausruhen",
                english: "to rest",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "ausgeruht",
                exampleGerman: [
                    { text: "Am Wochenende", case: "dativ" },
                    { text: " ruhe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " mich", case: "akkusativ" },
                    { text: " richtig", case: "none" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "On the weekend I really rest.",
                clozeParts: ["Am Wochenende ", " ich mich richtig ", "."],
                clozeAnswers: ["ruhe", "aus"]
            } as Verb
        ],

        // --- UNTERKAPITEL: Häufigkeitsangaben (8 Wörter) ---
        "Häufigkeitsangaben": [
            {
                id: createWordId("a2-08-haeuf-001"),
                wordType: "adverb",
                german: "immer",
                english: "always",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " gehe", case: "verb" },
                    { text: " immer", case: "none" },
                    { text: " zur gleichen Zeit", case: "dativ" },
                    { text: " schlafen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I always go to sleep at the same time.",
                clozeParts: ["Ich gehe ", " zur gleichen Zeit schlafen."],
                clozeAnswers: ["immer"]
            } as Adverb,
            {
                id: createWordId("a2-08-haeuf-002"),
                wordType: "adverb",
                german: "oft",
                english: "often",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " gehen", case: "verb" },
                    { text: " oft", case: "none" },
                    { text: " nach der Arbeit", case: "dativ" },
                    { text: " spazieren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We often go for a walk after work.",
                clozeParts: ["Wir gehen ", " nach der Arbeit spazieren."],
                clozeAnswers: ["oft"]
            } as Adverb,
            {
                id: createWordId("a2-08-haeuf-003"),
                wordType: "adverb",
                german: "manchmal",
                english: "sometimes",
                exampleGerman: [
                    { text: "Manchmal", case: "none" },
                    { text: " arbeite", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " auch am Wochenende", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Sometimes I also work on weekends.",
                clozeParts: ["", " arbeite ich auch am Wochenende."],
                clozeAnswers: ["Manchmal"]
            } as Adverb,
            {
                id: createWordId("a2-08-haeuf-004"),
                wordType: "adverb",
                german: "selten",
                english: "rarely",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " gehe", case: "verb" },
                    { text: " selten", case: "none" },
                    { text: " vor Mitternacht", case: "dativ" },
                    { text: " ins Bett", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I rarely go to bed before midnight.",
                clozeParts: ["Ich gehe ", " vor Mitternacht ins Bett."],
                clozeAnswers: ["selten"]
            } as Adverb,
            {
                id: createWordId("a2-08-haeuf-005"),
                wordType: "adverb",
                german: "nie",
                english: "never",
                exampleGerman: [
                    { text: "Sonntags", case: "none" },
                    { text: " stehe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " nie", case: "none" },
                    { text: " vor 10 Uhr", case: "none" },
                    { text: " auf", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "On Sundays I never get up before 10 o'clock.",
                clozeParts: ["Sonntags stehe ich ", " vor 10 Uhr auf."],
                clozeAnswers: ["nie"]
            } as Adverb,
            {
                id: createWordId("a2-08-haeuf-006"),
                wordType: "adjective",
                german: "täglich",
                english: "daily",
                exampleGerman: [
                    { text: "Die tägliche Routine", case: "nominativ" },
                    { text: " hilft", case: "verb" },
                    { text: " mir", case: "dativ" },
                    { text: " beim Zeitmanagement", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The daily routine helps me with time management.",
                clozeParts: ["Die ", "e Routine hilft mir beim Zeitmanagement."],
                clozeAnswers: ["täglich"]
            } as Adjective,
            {
                id: createWordId("a2-08-haeuf-007"),
                wordType: "adverb",
                german: "normalerweise",
                english: "normally / usually",
                exampleGerman: [
                    { text: "Normalerweise", case: "none" },
                    { text: " fahre", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " mit dem Fahrrad", case: "dativ" },
                    { text: " zur Arbeit", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Usually I go to work by bike.",
                clozeParts: ["", " fahre ich mit dem Fahrrad zur Arbeit."],
                clozeAnswers: ["Normalerweise"]
            } as Adverb,
            {
                id: createWordId("a2-08-haeuf-008"),
                wordType: "adverb",
                german: "meistens",
                english: "mostly / most of the time",
                exampleGerman: [
                    { text: "Meistens", case: "none" },
                    { text: " bin", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " abends zu Hause", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Most of the time I'm at home in the evenings.",
                clozeParts: ["", " bin ich abends zu Hause."],
                clozeAnswers: ["Meistens"]
            } as Adverb
        ]
    }
});