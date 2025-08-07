// packages/trainer-themen/vokabular_reisen_verkehr.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_reisen_verkehr.js

import type { VocabularyStructure, Noun, Verb } from './src/core/types/vocabulary';
import { createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabularReisenVerkehr: VocabularyStructure = createVocabulary({
    "Reisen und Verkehr": {

        // --- UNTER-THEMA: Verkehrsmittel (25 Wörter) ---
        "Verkehrsmittel": [
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-001"),
                wordType: "noun",
                german: "Auto",
                article: "das",
                plural: "Autos",
                english: "car",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "kommen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mit dem Auto", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are coming by car.",
                clozeParts: ["Wir kommen mit dem ", "."],
                clozeAnswers: ["Auto"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-002"),
                wordType: "noun",
                german: "Bus",
                article: "der",
                plural: "Busse",
                english: "bus",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fährt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mit dem Bus", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She travels by bus.",
                clozeParts: ["Sie fährt mit dem ", "."],
                clozeAnswers: ["Bus"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-003"),
                wordType: "noun",
                german: "Fahrrad",
                article: "das",
                plural: "Fahrräder",
                english: "bicycle",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "kommen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mit dem Fahrrad", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are coming by bicycle.",
                clozeParts: ["Wir kommen mit dem ", "."],
                clozeAnswers: ["Fahrrad"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-004"),
                wordType: "noun",
                german: "Zug",
                article: "der",
                plural: "Züge",
                english: "train",
                exampleGerman: [
                    { text: "Der Zug", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fährt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gleich", case: "none" },
                    { text: " ", case: "none" },
                    { text: "ab", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The train is departing soon.",
                clozeParts: ["Der ", " fährt gleich ab."],
                clozeAnswers: ["Zug"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-005"),
                wordType: "noun",
                german: "Bahn",
                article: "die",
                plural: "Bahnen",
                english: "train / railway",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fahren", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mit der Bahn", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are traveling by train.",
                clozeParts: ["Wir fahren mit der ", "."],
                clozeAnswers: ["Bahn"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-006"),
                wordType: "noun",
                german: "U-Bahn",
                article: "die",
                plural: "U-Bahnen",
                english: "subway / underground",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fahre", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mit der U-Bahn", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I travel by subway.",
                clozeParts: ["Ich fahre mit der ", "."],
                clozeAnswers: ["U-Bahn"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-007"),
                wordType: "noun",
                german: "Straßenbahn",
                article: "die",
                plural: "Straßenbahnen",
                english: "tram / streetcar",
                exampleGerman: [
                    { text: "Die Straßenbahn", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "schnell", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The tram is fast.",
                clozeParts: ["Die ", " ist schnell."],
                clozeAnswers: ["Straßenbahn"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-008"),
                wordType: "noun",
                german: "Taxi",
                article: "das",
                plural: "Taxis",
                english: "taxi",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "nehmen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Taxi", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are taking a taxi.",
                clozeParts: ["Wir nehmen ein ", "."],
                clozeAnswers: ["Taxi"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-009"),
                wordType: "noun",
                german: "Flugzeug",
                article: "das",
                plural: "Flugzeuge",
                english: "airplane",
                exampleGerman: [
                    { text: "Im Flugzeug", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "hatte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meine Mutter", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Angst", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My mother was scared on the airplane.",
                clozeParts: ["Im ", " hatte meine Mutter Angst."],
                clozeAnswers: ["Flugzeug"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-010"),
                wordType: "noun",
                german: "Flughafen",
                article: "der",
                plural: "Flughäfen",
                english: "airport",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "müssen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "um sieben Uhr", case: "none" },
                    { text: " ", case: "none" },
                    { text: "am Flughafen", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "sein", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We have to be at the airport at seven o'clock.",
                clozeParts: ["Wir müssen um sieben Uhr am ", " sein."],
                clozeAnswers: ["Flughafen"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-011"),
                wordType: "noun",
                german: "Bahnhof",
                article: "der",
                plural: "Bahnhöfe",
                english: "train station",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gehen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "zum Bahnhof", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the train station.",
                clozeParts: ["Wir gehen zum ", "."],
                clozeAnswers: ["Bahnhof"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-012"),
                wordType: "noun",
                german: "Bahnsteig",
                article: "der",
                plural: "Bahnsteige",
                english: "platform (train)",
                exampleGerman: [
                    { text: "Der Zug", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "kommt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "auf Bahnsteig", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "zehn", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "an", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The train arrives on platform ten.",
                clozeParts: ["Der Zug kommt auf ", " zehn an."],
                clozeAnswers: ["Bahnsteig"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-013"),
                wordType: "noun",
                german: "Fahrkarte",
                article: "die",
                plural: "Fahrkarten",
                english: "ticket (for transport)",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "brauchen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine Fahrkarte", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You need a ticket.",
                clozeParts: ["Sie brauchen eine ", "."],
                clozeAnswers: ["Fahrkarte"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-014"),
                wordType: "noun",
                german: "Fahrplan",
                article: "der",
                plural: "Fahrpläne",
                english: "timetable / schedule",
                exampleGerman: [
                    { text: "Da", case: "none" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "der Fahrplan", case: "nominativ" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "There is the timetable!",
                clozeParts: ["Da ist der ", "!"],
                clozeAnswers: ["Fahrplan"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-015"),
                wordType: "noun",
                german: "Haltestelle",
                article: "die",
                plural: "Haltestellen",
                english: "stop (bus/tram)",
                exampleGerman: [
                    { text: "Die Haltestelle", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "am Marktplatz", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The stop is at the marketplace.",
                clozeParts: ["Die ", " ist am Marktplatz."],
                clozeAnswers: ["Haltestelle"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-016"),
                wordType: "verb",
                german: "abfahren",
                english: "to depart / to leave",
                separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "abgefahren",
                exampleGerman: [
                    { text: "Der Zug", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fährt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gleich", case: "none" },
                    { text: " ", case: "none" },
                    { text: "ab", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The train is departing soon.",
                clozeParts: ["Der Zug ", " gleich ", "."],
                clozeAnswers: ["fährt", "ab"]
            } as Verb,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-017"),
                wordType: "verb",
                german: "abholen",
                english: "to pick up / to collect",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "abgeholt",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hole", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dich", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "am Bahnhof", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "ab", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I will pick you up at the train station.",
                clozeParts: ["Ich ", " dich am Bahnhof ", "."],
                clozeAnswers: ["hole", "ab"]
            } as Verb,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-018"),
                wordType: "verb",
                german: "aussteigen",
                english: "to get off / to alight",
                separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "ausgestiegen",
                exampleGerman: [
                    { text: "Du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "musst", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "am Marktplatz", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "aussteigen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You have to get off at the marketplace.",
                clozeParts: ["Du musst am Marktplatz ", "."],
                clozeAnswers: ["aussteigen"]
            } as Verb,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-019"),
                wordType: "verb",
                german: "einsteigen",
                english: "to get on / to board",
                separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "eingestiegen",
                exampleGerman: [
                    { text: "Bitte", case: "none" },
                    { text: " ", case: "none" },
                    { text: "steigen Sie", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein", case: "verb" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Please get on!",
                clozeParts: ["Bitte ", " Sie ", "!"],
                clozeAnswers: ["steigen", "ein"]
            } as Verb,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-020"),
                wordType: "verb",
                german: "fahren",
                english: "to drive / to travel / to go",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gefahren",
                exampleGerman: [
                    { text: "Wohin", case: "none" },
                    { text: " ", case: "none" },
                    { text: "fahrt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ihr", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Where are you (plural) going?",
                clozeParts: ["Wohin ", " ihr?"],
                clozeAnswers: ["fahrt"]
            } as Verb,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-021"),
                wordType: "verb",
                german: "fliegen",
                english: "to fly",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geflogen",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fliegen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "nach Athen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are flying to Athens.",
                clozeParts: ["Wir ", " nach Athen."],
                clozeAnswers: ["fliegen"]
            } as Verb,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-022"),
                wordType: "noun",
                german: "Ticket",
                article: "das",
                plural: "Tickets",
                english: "ticket",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "brauche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Ticket", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I need a ticket.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Ticket"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-023"),
                wordType: "noun",
                german: "Automat",
                article: "der",
                plural: "Automaten",
                english: "vending machine / ticket machine",
                exampleGerman: [
                    { text: "Die Fahrkarte", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bekommst", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "am Automaten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You get the ticket at the machine.",
                clozeParts: ["Die Fahrkarte bekommst du am ", "."],
                clozeAnswers: ["Automaten"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-024"),
                wordType: "noun",
                german: "Platz",
                article: "der",
                plural: "Plätze",
                english: "seat / space",
                exampleGerman: [
                    { text: "Ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "der Platz", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "frei", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Is this seat free?",
                clozeParts: ["Ist der ", " frei?"],
                clozeAnswers: ["Platz"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-verkehrsmittel-025"),
                wordType: "noun",
                german: "Verspätung",
                article: "die",
                plural: "Verspätungen",
                english: "delay",
                exampleGerman: [
                    { text: "Der Zug", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Verspätung", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The train is delayed.",
                clozeParts: ["Der Zug hat ", "."],
                clozeAnswers: ["Verspätung"]
            } as Noun
        ],

        // --- UNTER-THEMA: Ferienziele (20 Wörter) ---
        "Ferienziele": [
            {
                id: createWordId("reisen-verkehr-ferienziele-001"),
                wordType: "noun",
                german: "Ferien",
                article: "die",
                plural: "Ferien",
                english: "holidays / vacation (school)",
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "macht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ihr", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "in den Ferien", case: "dativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What are you (plural) doing during the holidays?",
                clozeParts: ["Was macht ihr in den ", "?"],
                clozeAnswers: ["Ferien"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-002"),
                wordType: "noun",
                german: "Urlaub",
                article: "der",
                plural: "Urlaube",
                english: "holiday / vacation",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "machen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Urlaub", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "in Italien", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are on holiday in Italy.",
                clozeParts: ["Wir machen ", " in Italien."],
                clozeAnswers: ["Urlaub"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-003"),
                wordType: "noun",
                german: "Reise",
                article: "die",
                plural: "Reisen",
                english: "journey / trip",
                exampleGerman: [
                    { text: "Die Reise", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "nach Spanien", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "war", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "toll", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The trip to Spain was great.",
                clozeParts: ["Die ", " nach Spanien war toll."],
                clozeAnswers: ["Reise"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-004"),
                wordType: "verb",
                german: "reisen",
                english: "to travel",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gereist",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "reisen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "oft", case: "none" },
                    { text: " ", case: "none" },
                    { text: "nach Frankreich", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We often travel to France.",
                clozeParts: ["Wir ", " oft nach Frankreich."],
                clozeAnswers: ["reisen"]
            } as Verb,
            {
                id: createWordId("reisen-verkehr-ferienziele-005"),
                wordType: "noun",
                german: "Meer",
                article: "das",
                plural: "Meere",
                english: "sea / ocean",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fahren", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ans Meer", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the sea.",
                clozeParts: ["Wir fahren ans ", "."],
                clozeAnswers: ["Meer"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-006"),
                wordType: "noun",
                german: "See",
                article: "der",
                plural: "Seen",
                english: "lake",
                exampleGerman: [
                    { text: "Am Wochenende", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "fahren", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "an den See", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "At the weekend we are going to the lake.",
                clozeParts: ["Am Wochenende fahren wir an den ", "."],
                clozeAnswers: ["See"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-007"),
                wordType: "noun",
                german: "Berg",
                article: "der",
                plural: "Berge",
                english: "mountains",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wandern", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in den Bergen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are hiking in the mountains.",
                clozeParts: ["Wir wandern in den ", "."],
                clozeAnswers: ["Bergen"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-008"),
                wordType: "noun",
                german: "Hotel",
                article: "das",
                plural: "Hotels",
                english: "hotel",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schlafen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im Hotel", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are sleeping in the hotel.",
                clozeParts: ["Wir schlafen im ", "."],
                clozeAnswers: ["Hotel"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-009"),
                wordType: "noun",
                german: "Camping",
                article: "das",
                plural: null,
                english: "camping",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "machen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Camping", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "am See", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are camping at the lake.",
                clozeParts: ["Wir machen ", " am See."],
                clozeAnswers: ["Camping"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-010"),
                wordType: "noun",
                german: "Zelt",
                article: "das",
                plural: "Zelte",
                english: "tent",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schlafen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im Zelt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are sleeping in the tent.",
                clozeParts: ["Wir schlafen im ", "."],
                clozeAnswers: ["Zelt"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-011"),
                wordType: "noun",
                german: "Stadt",
                article: "die",
                plural: "Städte",
                english: "city / town",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "mache", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Urlaub", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "in einer großen Stadt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am on holiday in a big city.",
                clozeParts: ["Ich mache Urlaub in einer großen ", "."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-012"),
                wordType: "noun",
                german: "Land",
                article: "das",
                plural: "Länder",
                english: "country / countryside",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fahren", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "aufs Land", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the countryside.",
                clozeParts: ["Wir fahren aufs ", "."],
                clozeAnswers: ["Land"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-013"),
                wordType: "noun",
                german: "Ausflug",
                article: "der",
                plural: "Ausflüge",
                english: "trip / excursion",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "machen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mit der Schule", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "einen Ausflug", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are going on a trip with the school.",
                clozeParts: ["Wir machen mit der Schule einen ", "."],
                clozeAnswers: ["Ausflug"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-014"),
                wordType: "noun",
                german: "Fotoapparat",
                article: "der",
                plural: "Fotoapparate",
                english: "camera",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "einen teuren Fotoapparat", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She has an expensive camera.",
                clozeParts: ["Sie hat einen teuren ", "."],
                clozeAnswers: ["Fotoapparat"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-015"),
                wordType: "noun",
                german: "Koffer",
                article: "der",
                plural: "Koffer",
                english: "suitcase",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "packe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meinen Koffer", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am packing my suitcase.",
                clozeParts: ["Ich packe meinen ", "."],
                clozeAnswers: ["Koffer"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-016"),
                wordType: "noun",
                german: "Tourist",
                article: "der",
                plural: "Touristen",
                english: "tourist",
                exampleGerman: [
                    { text: "Viele Touristen", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "besuchen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Berlin", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Many tourists visit Berlin.",
                clozeParts: ["Viele ", " besuchen Berlin."],
                clozeAnswers: ["Touristen"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-017"),
                wordType: "noun",
                german: "Stadtplan",
                article: "der",
                plural: "Stadtpläne",
                english: "city map",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "einen Stadtplan", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "von München", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have a city map of Munich.",
                clozeParts: ["Ich habe einen ", " von München."],
                clozeAnswers: ["Stadtplan"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-018"),
                wordType: "verb",
                german: "reservieren",
                english: "to reserve / to book",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "reserviert",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Zimmer", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "reservieren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I would like to reserve a room.",
                clozeParts: ["Ich möchte ein Zimmer ", "."],
                clozeAnswers: ["reservieren"]
            } as Verb,
            {
                id: createWordId("reisen-verkehr-ferienziele-019"),
                wordType: "verb",
                german: "buchen",
                english: "to book",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gebucht",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "buche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Hotelzimmer", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am booking a hotel room.",
                clozeParts: ["Ich ", " ein Hotelzimmer."],
                clozeAnswers: ["buche"]
            } as Verb,
            {
                id: createWordId("reisen-verkehr-ferienziele-020"),
                wordType: "noun",
                german: "Gepäck",
                article: "das",
                plural: null,
                english: "luggage / baggage",
                exampleGerman: [
                    { text: "Das Gepäck", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "schwer", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The luggage is heavy.",
                clozeParts: ["Das ", " ist schwer."],
                clozeAnswers: ["Gepäck"]
            } as Noun
        ]
    }
});