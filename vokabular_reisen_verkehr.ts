// packages/trainer-themen/vokabular_reisen_verkehr.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_reisen_verkehr.js

import type { VocabularyStructure, Noun, Verb, WordId, CaseElement } from './src/core/types/vocabulary';
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kommen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit dem Auto", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fährt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit dem Bus", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kommen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit dem Fahrrad", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Der Zug", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fährt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gleich", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ab", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fahren", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit der Bahn", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fahre", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit der U-Bahn", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Die Straßenbahn", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schnell", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nehmen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Taxi", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Im Flugzeug", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "hatte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "meine Mutter", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Angst", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "müssen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "um sieben Uhr", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "am Flughafen", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sein", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gehen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zum Bahnhof", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Der Zug", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kommt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auf Bahnsteig", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zehn", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "an", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauchen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Fahrkarte", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Da", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "der Fahrplan", case: "nominativ" } as CaseElement,
                    { text: "!", case: "none" } as CaseElement
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
                    { text: "Die Haltestelle", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "am Marktplatz", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                presentConjugation: { ich: "fahre ab", du: "fährst ab", er: "fährt ab", wir: "fahren ab", ihr: "fahrt ab", sie: "fahren ab" },
                imperative: { du: "Fahr ab!", ihr: "Fahrt ab!" },
                exampleGerman: [
                    { text: "Der Zug", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fährt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gleich", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ab", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                presentConjugation: { ich: "hole ab", du: "holst ab", er: "holt ab", wir: "holen ab", ihr: "holt ab", sie: "holen ab" },
                imperative: { du: "Hol ab!", ihr: "Holt ab!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "hole", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dich", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "am Bahnhof", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ab", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                presentConjugation: { ich: "steige aus", du: "steigst aus", er: "steigt aus", wir: "steigen aus", ihr: "steigt aus", sie: "steigen aus" },
                imperative: { du: "Steig aus!", ihr: "Steigt aus!" },
                exampleGerman: [
                    { text: "Du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "musst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "am Marktplatz", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "aussteigen", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                presentConjugation: { ich: "steige ein", du: "steigst ein", er: "steigt ein", wir: "steigen ein", ihr: "steigt ein", sie: "steigen ein" },
                imperative: { du: "Steig ein!", ihr: "Steigt ein!" },
                exampleGerman: [
                    { text: "Bitte", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "steigen Sie", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein", case: "verb" } as CaseElement,
                    { text: "!", case: "none" } as CaseElement
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
                presentConjugation: { ich: "fahre", du: "fährst", er: "fährt", wir: "fahren", ihr: "fahrt", sie: "fahren" },
                imperative: { du: "Fahr!", ihr: "Fahrt!" },
                exampleGerman: [
                    { text: "Wohin", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fahrt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ihr", case: "nominativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                presentConjugation: { ich: "fliege", du: "fliegst", er: "fliegt", wir: "fliegen", ihr: "fliegt", sie: "fliegen" },
                imperative: { du: "Flieg!", ihr: "Fliegt!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fliegen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nach Athen", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Ticket", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Die Fahrkarte", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bekommst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "am Automaten", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "der Platz", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "frei", case: "none" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    { text: "Der Zug", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "hat", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Verspätung", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Was", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "macht", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ihr", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in den Ferien", case: "dativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "machen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Urlaub", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in Italien", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Die Reise", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nach Spanien", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "war", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "toll", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                presentConjugation: { ich: "reise", du: "reist", er: "reist", wir: "reisen", ihr: "reist", sie: "reisen" },
                imperative: { du: "Reis!", ihr: "Reist!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "reisen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "oft", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nach Frankreich", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fahren", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ans Meer", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Am Wochenende", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fahren", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "an den See", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "At the weekend we are going to the lake.",
                clozeParts: ["Am Wochenende fahren wir an den ", "."],
                clozeAnswers: ["See"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-007"),
                wordType: "noun",
                german: "Berge",
                article: "die",
                plural: "Berge",
                english: "mountains",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "wandern", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in den Bergen", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schlafen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Hotel", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "machen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Camping", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "am See", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schlafen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Zelt", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mache", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Urlaub", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in einer großen Stadt", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fahren", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "aufs Land", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "machen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit der Schule", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Ausflug", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "hat", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen teuren Fotoapparat", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "packe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "meinen Koffer", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am packing my suitcase.",
                clozeParts: ["Ich packe meinen ", "."],
                clozeAnswers: ["Koffer"]
            } as Noun,
            {
                id: createWordId("reisen-verkehr-ferienziele-016"),
                wordType: "noun",
                german: "Tourist/Touristin",
                article: "der/die",
                plural: "Touristen/Touristinnen",
                english: "tourist (male/female)",
                exampleGerman: [
                    { text: "Viele Touristen", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "besuchen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Berlin", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Stadtplan", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "von München", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                presentConjugation: { ich: "reserviere", du: "reservierst", er: "reserviert", wir: "reservieren", ihr: "reserviert", sie: "reservieren" },
                imperative: { du: "Reservier!", ihr: "Reserviert!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Zimmer", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "reservieren", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                presentConjugation: { ich: "buche", du: "buchst", er: "bucht", wir: "buchen", ihr: "bucht", sie: "buchen" },
                imperative: { du: "Buch!", ihr: "Bucht!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "buche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Hotelzimmer", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
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
                    { text: "Das Gepäck", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schwer", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The luggage is heavy.",
                clozeParts: ["Das ", " ist schwer."],
                clozeAnswers: ["Gepäck"]
            } as Noun
        ]
    }
});