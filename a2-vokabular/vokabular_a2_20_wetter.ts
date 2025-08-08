// vokabular_a2_20_wetter.ts
// Thema 20: Wetter (30 Wörter)
// Story: Ein Jahr im Garten - Durch alle Jahreszeiten mit dem Wetter

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabularA2_20_wetter: VocabularyStructure = createVocabulary({
    "Wetter": {
        
        // --- UNTERKAPITEL: Wetterbeschreibungen (13 Wörter) ---
        "Wetterbeschreibungen": [
            {
                id: createWordId("a2-20-beschr-001"),
                wordType: "noun",
                german: "Wetter",
                article: "das",
                plural: null,
                english: "weather",
                exampleGerman: [
                    { text: "Das Wetter", case: "nominativ" },
                    { text: " im Garten", case: "dativ" },
                    { text: " ändert", case: "verb" },
                    { text: " sich", case: "akkusativ" },
                    { text: " jeden Tag", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The weather in the garden changes every day.",
                clozeParts: ["Das ", " im Garten ändert sich jeden Tag."],
                clozeAnswers: ["Wetter"]
            } as Noun,
            {
                id: createWordId("a2-20-beschr-002"),
                wordType: "noun",
                german: "Sonne",
                article: "die",
                plural: "Sonnen",
                english: "sun",
                exampleGerman: [
                    { text: "Im Sommer", case: "dativ" },
                    { text: " scheint", case: "verb" },
                    { text: " die Sonne", case: "nominativ" },
                    { text: " den ganzen Tag", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In summer the sun shines all day.",
                clozeParts: ["Im Sommer scheint die ", " den ganzen Tag."],
                clozeAnswers: ["Sonne"]
            } as Noun,
            {
                id: createWordId("a2-20-beschr-003"),
                wordType: "adjective",
                german: "sonnig",
                english: "sunny",
                exampleGerman: [
                    { text: "An", case: "none" },
                    { text: " sonnigen Tagen", case: "dativ" },
                    { text: " arbeite", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " gern", case: "none" },
                    { text: " im Garten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "On sunny days I like to work in the garden.",
                clozeParts: ["An ", " Tagen arbeite ich gern im Garten."],
                clozeAnswers: ["sonnigen"]
            } as Adjective,
            {
                id: createWordId("a2-20-beschr-004"),
                wordType: "noun",
                german: "Regen",
                article: "der",
                plural: null,
                english: "rain",
                exampleGerman: [
                    { text: "Der Regen", case: "nominativ" },
                    { text: " im Frühling", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " gut", case: "none" },
                    { text: " für", case: "none" },
                    { text: " die Pflanzen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The rain in spring is good for the plants.",
                clozeParts: ["Der ", " im Frühling ist gut für die Pflanzen."],
                clozeAnswers: ["Regen"]
            } as Noun,
            {
                id: createWordId("a2-20-beschr-005"),
                wordType: "verb",
                german: "regnen",
                english: "to rain",
                separable: false,
                coreForms: {
                    infinitive: "regnen",
                    thirdPerson: "regnet",
                    preterite: "regnete",
                    perfect: "hat geregnet"
                },
                exampleGerman: [
                    { text: "Gestern", case: "none" },
                    { text: " hat", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " den ganzen Tag", case: "akkusativ" },
                    { text: " geregnet", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Yesterday it rained all day.",
                clozeParts: ["Gestern hat es den ganzen Tag ", "."],
                clozeAnswers: ["geregnet"]
            } as Verb,
            {
                id: createWordId("a2-20-beschr-006"),
                wordType: "noun",
                german: "Schnee",
                article: "der",
                plural: null,
                english: "snow",
                exampleGerman: [
                    { text: "Im Winter", case: "dativ" },
                    { text: " liegt", case: "verb" },
                    { text: " viel Schnee", case: "nominativ" },
                    { text: " im Garten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In winter there is a lot of snow in the garden.",
                clozeParts: ["Im Winter liegt viel ", " im Garten."],
                clozeAnswers: ["Schnee"]
            } as Noun,
            {
                id: createWordId("a2-20-beschr-007"),
                wordType: "verb",
                german: "schneien",
                english: "to snow",
                separable: false,
                coreForms: {
                    infinitive: "schneien",
                    thirdPerson: "schneit",
                    preterite: "schneite",
                    perfect: "hat geschneit"
                },
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " schneit", case: "verb" },
                    { text: " schon", case: "none" },
                    { text: " seit", case: "none" },
                    { text: " drei Stunden", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It has been snowing for three hours.",
                clozeParts: ["Es ", " schon seit drei Stunden."],
                clozeAnswers: ["schneit"]
            } as Verb,
            {
                id: createWordId("a2-20-beschr-008"),
                wordType: "noun",
                german: "Wolke",
                article: "die",
                plural: "Wolken",
                english: "cloud",
                exampleGerman: [
                    { text: "Dunkle Wolken", case: "nominativ" },
                    { text: " bedeuten", case: "verb" },
                    { text: " oft", case: "none" },
                    { text: " Regen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Dark clouds often mean rain.",
                clozeParts: ["Dunkle ", " bedeuten oft Regen."],
                clozeAnswers: ["Wolken"]
            } as Noun,
            {
                id: createWordId("a2-20-beschr-009"),
                wordType: "adjective",
                german: "bewölkt",
                english: "cloudy",
                exampleGerman: [
                    { text: "Der Himmel", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " bewölkt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The sky is cloudy today.",
                clozeParts: ["Der Himmel ist heute ", "."],
                clozeAnswers: ["bewölkt"]
            } as Adjective,
            {
                id: createWordId("a2-20-beschr-010"),
                wordType: "adjective",
                german: "neblig",
                english: "foggy",
                exampleGerman: [
                    { text: "Im Herbst", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " morgens", case: "none" },
                    { text: " oft", case: "none" },
                    { text: " neblig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In autumn it is often foggy in the morning.",
                clozeParts: ["Im Herbst ist es morgens oft ", "."],
                clozeAnswers: ["neblig"]
            } as Adjective,
            {
                id: createWordId("a2-20-beschr-011"),
                wordType: "noun",
                german: "Wind",
                article: "der",
                plural: "Winde",
                english: "wind",
                exampleGerman: [
                    { text: "Der Wind", case: "nominativ" },
                    { text: " bringt", case: "verb" },
                    { text: " die Blätter", case: "akkusativ" },
                    { text: " zum Tanzen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The wind makes the leaves dance.",
                clozeParts: ["Der ", " bringt die Blätter zum Tanzen."],
                clozeAnswers: ["Wind"]
            } as Noun,
            {
                id: createWordId("a2-20-beschr-012"),
                wordType: "adjective",
                german: "windig",
                english: "windy",
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " zu windig", case: "none" },
                    { text: " zum Arbeiten", case: "none" },
                    { text: " im Garten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It is too windy to work in the garden.",
                clozeParts: ["Es ist zu ", " zum Arbeiten im Garten."],
                clozeAnswers: ["windig"]
            } as Adjective,
            {
                id: createWordId("a2-20-beschr-013"),
                wordType: "noun",
                german: "Nebel",
                article: "der",
                plural: "Nebel",
                english: "fog",
                exampleGerman: [
                    { text: "Der Nebel", case: "nominativ" },
                    { text: " am Morgen", case: "dativ" },
                    { text: " verschwindet", case: "verb" },
                    { text: " langsam", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The fog in the morning disappears slowly.",
                clozeParts: ["Der ", " am Morgen verschwindet langsam."],
                clozeAnswers: ["Nebel"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Temperaturen und Messung (8 Wörter) ---
        "Temperaturen und Messung": [
            {
                id: createWordId("a2-20-temp-001"),
                wordType: "adjective",
                german: "warm",
                english: "warm",
                exampleGerman: [
                    { text: "Im Mai", case: "dativ" },
                    { text: " wird", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " endlich", case: "none" },
                    { text: " warm", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In May it finally gets warm.",
                clozeParts: ["Im Mai wird es endlich ", "."],
                clozeAnswers: ["warm"]
            } as Adjective,
            {
                id: createWordId("a2-20-temp-002"),
                wordType: "adjective",
                german: "heiß",
                english: "hot",
                exampleGerman: [
                    { text: "Im Juli", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " oft", case: "none" },
                    { text: " zu heiß", case: "none" },
                    { text: " zum Arbeiten", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In July it is often too hot to work.",
                clozeParts: ["Im Juli ist es oft zu ", " zum Arbeiten."],
                clozeAnswers: ["heiß"]
            } as Adjective,
            {
                id: createWordId("a2-20-temp-003"),
                wordType: "adjective",
                german: "kalt",
                english: "cold",
                exampleGerman: [
                    { text: "Im Januar", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " sehr kalt", case: "none" },
                    { text: " im Garten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In January it is very cold in the garden.",
                clozeParts: ["Im Januar ist es sehr ", " im Garten."],
                clozeAnswers: ["kalt"]
            } as Adjective,
            {
                id: createWordId("a2-20-temp-004"),
                wordType: "adjective",
                german: "kühl",
                english: "cool",
                exampleGerman: [
                    { text: "Die Nächte", case: "nominativ" },
                    { text: " werden", case: "verb" },
                    { text: " im September", case: "dativ" },
                    { text: " schon", case: "none" },
                    { text: " kühl", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The nights are already getting cool in September.",
                clozeParts: ["Die Nächte werden im September schon ", "."],
                clozeAnswers: ["kühl"]
            } as Adjective,
            {
                id: createWordId("a2-20-temp-005"),
                wordType: "adjective",
                german: "frisch",
                english: "fresh",
                exampleGerman: [
                    { text: "Die Luft", case: "nominativ" },
                    { text: " nach", case: "none" },
                    { text: " dem Regen", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " frisch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The air after the rain is fresh.",
                clozeParts: ["Die Luft nach dem Regen ist ", "."],
                clozeAnswers: ["frisch"]
            } as Adjective,
            {
                id: createWordId("a2-20-temp-006"),
                wordType: "adjective",
                german: "trocken",
                english: "dry",
                exampleGerman: [
                    { text: "Der Boden", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " zu trocken", case: "none" },
                    { text: ",", case: "none" },
                    { text: " ich", case: "nominativ" },
                    { text: " muss", case: "verb" },
                    { text: " gießen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The ground is too dry, I have to water.",
                clozeParts: ["Der Boden ist zu ", ", ich muss gießen."],
                clozeAnswers: ["trocken"]
            } as Adjective,
            {
                id: createWordId("a2-20-temp-007"),
                wordType: "noun",
                german: "Temperatur",
                article: "die",
                plural: "Temperaturen",
                english: "temperature",
                exampleGerman: [
                    { text: "Die Temperatur", case: "nominativ" },
                    { text: " steigt", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " auf", case: "none" },
                    { text: " dreißig Grad", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The temperature rises to thirty degrees today.",
                clozeParts: ["Die ", " steigt heute auf dreißig Grad."],
                clozeAnswers: ["Temperatur"]
            } as Noun,
            {
                id: createWordId("a2-20-temp-008"),
                wordType: "verb",
                german: "frieren",
                english: "to freeze / be cold",
                separable: false,
                coreForms: {
                    infinitive: "frieren",
                    thirdPerson: "friert",
                    preterite: "fror",
                    perfect: "hat gefroren"
                },
                exampleGerman: [
                    { text: "Ohne Jacke", case: "none" },
                    { text: " friere", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " im Garten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Without a jacket I freeze in the garden.",
                clozeParts: ["Ohne Jacke ", " ich im Garten."],
                clozeAnswers: ["friere"]
            } as Verb
        ],

        // --- UNTERKAPITEL: Wetterphänomene (9 Wörter) ---
        "Wetterphänomene": [
            {
                id: createWordId("a2-20-phaen-001"),
                wordType: "noun",
                german: "Gewitter",
                article: "das",
                plural: "Gewitter",
                english: "thunderstorm",
                exampleGerman: [
                    { text: "Im Sommer", case: "dativ" },
                    { text: " gibt es", case: "verb" },
                    { text: " oft", case: "none" },
                    { text: " Gewitter", case: "akkusativ" },
                    { text: " am Abend", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In summer there are often thunderstorms in the evening.",
                clozeParts: ["Im Sommer gibt es oft ", " am Abend."],
                clozeAnswers: ["Gewitter"]
            } as Noun,
            {
                id: createWordId("a2-20-phaen-002"),
                wordType: "noun",
                german: "Sturm",
                article: "der",
                plural: "Stürme",
                english: "storm",
                exampleGerman: [
                    { text: "Der Sturm", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " viele Äste", case: "akkusativ" },
                    { text: " abgebrochen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The storm broke off many branches.",
                clozeParts: ["Der ", " hat viele Äste abgebrochen."],
                clozeAnswers: ["Sturm"]
            } as Noun,
            {
                id: createWordId("a2-20-phaen-003"),
                wordType: "noun",
                german: "Eis",
                article: "das",
                plural: null,
                english: "ice",
                exampleGerman: [
                    { text: "Das Eis", case: "nominativ" },
                    { text: " auf", case: "none" },
                    { text: " dem Teich", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " dick", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The ice on the pond is thick.",
                clozeParts: ["Das ", " auf dem Teich ist dick."],
                clozeAnswers: ["Eis"]
            } as Noun,
            {
                id: createWordId("a2-20-phaen-004"),
                wordType: "adjective",
                german: "nass",
                english: "wet",
                exampleGerman: [
                    { text: "Nach", case: "none" },
                    { text: " dem Regen", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " alles", case: "nominativ" },
                    { text: " nass", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After the rain everything is wet.",
                clozeParts: ["Nach dem Regen ist alles ", "."],
                clozeAnswers: ["nass"]
            } as Adjective,
            {
                id: createWordId("a2-20-phaen-005"),
                wordType: "adjective",
                german: "feucht",
                english: "damp / humid",
                exampleGerman: [
                    { text: "Die Erde", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " noch", case: "none" },
                    { text: " feucht", case: "none" },
                    { text: " vom Tau", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The soil is still damp from the dew.",
                clozeParts: ["Die Erde ist noch ", " vom Tau."],
                clozeAnswers: ["feucht"]
            } as Adjective,
            {
                id: createWordId("a2-20-phaen-006"),
                wordType: "adjective",
                german: "hell",
                english: "bright",
                exampleGerman: [
                    { text: "Im Sommer", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " schon", case: "none" },
                    { text: " um fünf Uhr", case: "none" },
                    { text: " hell", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In summer it is already bright at five o'clock.",
                clozeParts: ["Im Sommer ist es schon um fünf Uhr ", "."],
                clozeAnswers: ["hell"]
            } as Adjective,
            {
                id: createWordId("a2-20-phaen-007"),
                wordType: "adjective",
                german: "dunkel",
                english: "dark",
                exampleGerman: [
                    { text: "Im Winter", case: "dativ" },
                    { text: " wird", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " schon", case: "none" },
                    { text: " um vier Uhr", case: "none" },
                    { text: " dunkel", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In winter it gets dark already at four o'clock.",
                clozeParts: ["Im Winter wird es schon um vier Uhr ", "."],
                clozeAnswers: ["dunkel"]
            } as Adjective,
            {
                id: createWordId("a2-20-phaen-008"),
                wordType: "noun",
                german: "Himmel",
                article: "der",
                plural: "Himmel",
                english: "sky",
                exampleGerman: [
                    { text: "Der Himmel", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " blau", case: "none" },
                    { text: " und", case: "none" },
                    { text: " klar", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The sky is blue and clear today.",
                clozeParts: ["Der ", " ist heute blau und klar."],
                clozeAnswers: ["Himmel"]
            } as Noun,
            {
                id: createWordId("a2-20-phaen-009"),
                wordType: "adjective",
                german: "draußen",
                english: "outside",
                exampleGerman: [
                    { text: "Draußen", case: "none" },
                    { text: " regnet", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: ",", case: "none" },
                    { text: " aber", case: "none" },
                    { text: " ich", case: "nominativ" },
                    { text: " muss", case: "verb" },
                    { text: " in", case: "none" },
                    { text: " den Garten", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It's raining outside, but I have to go to the garden.",
                clozeParts: [" ", " regnet es, aber ich muss in den Garten."],
                clozeAnswers: ["Draußen"]
            } as Adjective
        ]
    }
});