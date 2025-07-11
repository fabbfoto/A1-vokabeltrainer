// packages/trainer-themen/vokabular_reisen_verkehr.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_reisen_verkehr.js

import type {VocabularyStructure, Noun, Verb, WordId, CaseElement } from './shared/types/vocabulary.ts';
import {createWordId, createVocabulary } from './shared/types/vocabulary.ts';

export const vokabularReisenVerkehr: VocabularyStructure = createVocabulary({"Reisen und Verkehr": {

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
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-001"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-003"), text: "kommen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-005"), text: "mit dem Auto", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are coming by car.",
                clozeParts: ["Wir kommen mit dem ", "."],
                clozeAnswers: ["Auto"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-002"),
                wordType: "noun",
                german: "Bus",
                article: "der",
                plural: "Busse",
                english: "bus",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-007"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-009"), text: "fährt", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-011"), text: "mit dem Bus", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She travels by bus.",
                clozeParts: ["Sie fährt mit dem ", "."],
                clozeAnswers: ["Bus"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-003"),
                wordType: "noun",
                german: "Fahrrad",
                article: "das",
                plural: "Fahrräder",
                english: "bicycle",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-013"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-015"), text: "kommen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-017"), text: "mit dem Fahrrad", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are coming by bicycle.",
                clozeParts: ["Wir kommen mit dem ", "."],
                clozeAnswers: ["Fahrrad"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-004"),
                wordType: "noun",
                german: "Zug",
                article: "der",
                plural: "Züge",
                english: "train",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-019"), text: "Der Zug", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-021"), text: "fährt", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-023"), text: "gleich", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-025"), text: "ab", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-026"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The train is departing soon.",
                clozeParts: ["Der ", " fährt gleich ab."],
                clozeAnswers: ["Zug"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-005"),
                wordType: "noun",
                german: "Bahn",
                article: "die",
                plural: "Bahnen",
                english: "train / railway",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-027"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-029"), text: "fahren", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-031"), text: "mit der Bahn", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-032"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are traveling by train.",
                clozeParts: ["Wir fahren mit der ", "."],
                clozeAnswers: ["Bahn"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-006"),
                wordType: "noun",
                german: "U-Bahn",
                article: "die",
                plural: "U-Bahnen",
                english: "subway / underground",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-033"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-035"), text: "fahre", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-037"), text: "mit der U-Bahn", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-038"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I travel by subway.",
                clozeParts: ["Ich fahre mit der ", "."],
                clozeAnswers: ["U-Bahn"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-007"),
                wordType: "noun",
                german: "Straßenbahn",
                article: "die",
                plural: "Straßenbahnen",
                english: "tram / streetcar",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-039"), text: "Die Straßenbahn", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-041"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-043"), text: "schnell", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-044"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The tram is fast.",
                clozeParts: ["Die ", " ist schnell."],
                clozeAnswers: ["Straßenbahn"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-008"),
                wordType: "noun",
                german: "Taxi",
                article: "das",
                plural: "Taxis",
                english: "taxi",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-045"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-047"), text: "nehmen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-049"), text: "ein Taxi", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-050"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are taking a taxi.",
                clozeParts: ["Wir nehmen ein ", "."],
                clozeAnswers: ["Taxi"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-009"),
                wordType: "noun",
                german: "Flugzeug",
                article: "das",
                plural: "Flugzeuge",
                english: "airplane",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-051"), text: "Im Flugzeug", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-053"), text: "hatte", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-055"), text: "meine Mutter", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-057"), text: "Angst", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-058"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My mother was scared on the airplane.",
                clozeParts: ["Im ", " hatte meine Mutter Angst."],
                clozeAnswers: ["Flugzeug"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-010"),
                wordType: "noun",
                german: "Flughafen",
                article: "der",
                plural: "Flughäfen",
                english: "airport",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-059"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-061"), text: "müssen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-063"), text: "um sieben Uhr", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-065"), text: "am Flughafen", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-067"), text: "sein", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-068"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have to be at the airport at seven o'clock.",
                clozeParts: ["Wir müssen um sieben Uhr am ", " sein."],
                clozeAnswers: ["Flughafen"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-011"),
                wordType: "noun",
                german: "Bahnhof",
                article: "der",
                plural: "Bahnhöfe",
                english: "train station",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-069"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-071"), text: "gehen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-072"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-073"), text: "zum Bahnhof", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-074"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are going to the train station.",
                clozeParts: ["Wir gehen zum ", "."],
                clozeAnswers: ["Bahnhof"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-012"),
                wordType: "noun",
                german: "Bahnsteig",
                article: "der",
                plural: "Bahnsteige",
                english: "platform (train)",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-075"), text: "Der Zug", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-077"), text: "kommt", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-078"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-079"), text: "auf Bahnsteig", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-080"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-081"), text: "zehn", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-082"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-083"), text: "an", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-084"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The train arrives on platform ten.",
                clozeParts: ["Der Zug kommt auf ", " zehn an."],
                clozeAnswers: ["Bahnsteig"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-013"),
                wordType: "noun",
                german: "Fahrkarte",
                article: "die",
                plural: "Fahrkarten",
                english: "ticket (for transport)",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-085"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-086"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-087"), text: "brauchen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-088"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-089"), text: "eine Fahrkarte", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-090"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "You need a ticket.",
                clozeParts: ["Sie brauchen eine ", "."],
                clozeAnswers: ["Fahrkarte"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-014"),
                wordType: "noun",
                german: "Fahrplan",
                article: "der",
                plural: "Fahrpläne",
                english: "timetable / schedule",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-091"), text: "Da", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-092"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-093"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-094"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-095"), text: "der Fahrplan", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-096"), text: "!", case: "none" } as CaseElement
                ],
                exampleEnglish: "There is the timetable!",
                clozeParts: ["Da ist der ", "!"],
                clozeAnswers: ["Fahrplan"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-015"),
                wordType: "noun",
                german: "Haltestelle",
                article: "die",
                plural: "Haltestellen",
                english: "stop (bus/tram)",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-097"), text: "Die Haltestelle", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-098"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-099"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-100"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-101"), text: "am Marktplatz", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-102"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The stop is at the marketplace.",
                clozeParts: ["Die ", " ist am Marktplatz."],
                clozeAnswers: ["Haltestelle"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-016"),
                wordType: "verb",
                german: "abfahren",
                english: "to depart / to leave", separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "abgefahren",
                presentConjugation: {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-103"), I: "fahre ab", you_informal: "fährst ab", he: "fährt ab", we: "fahren ab", you_pl: "fahrt ab", they: "fahren ab" },
                imperative: {id: createWordId("reisen-und-verkehr-verkehrsmittel-104"), you_informal: "Fahr ab!", you_pl: "Fahrt ab!" },
                exampleGerman: [
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-105"), text: "Der Zug", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-106"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-107"), text: "fährt", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-108"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-109"), text: "gleich", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-110"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-111"), text: "ab", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-112"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The train is departing soon.",
                clozeParts: ["Der Zug ", " gleich ", "."],
                clozeAnswers: ["fährt", "ab"]
            } as Verb,
            {id: createWordId("reisen-verkehr-verkehrsmittel-017"),
                wordType: "verb",
                german: "abholen",
                english: "to pick up / to collect", separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "abgeholt",
                presentConjugation: {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-113"), I: "hole ab", you_informal: "holst ab", he: "holt ab", we: "holen ab", you_pl: "holt ab", they: "holen ab" },
                imperative: {id: createWordId("reisen-und-verkehr-verkehrsmittel-114"), you_informal: "Hol ab!", you_pl: "Holt ab!" },
                exampleGerman: [
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-115"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-116"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-117"), text: "hole", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-118"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-119"), text: "dich", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-120"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-121"), text: "am Bahnhof", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-122"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-123"), text: "ab", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-124"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I will pick you up at the train station.",
                clozeParts: ["Ich ", " dich am Bahnhof ", "."],
                clozeAnswers: ["hole", "ab"]
            } as Verb,
            {id: createWordId("reisen-verkehr-verkehrsmittel-018"),
                wordType: "verb",
                german: "aussteigen",
                english: "to get off / to alight", separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "ausgestiegen",
                presentConjugation: {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-125"), I: "steige aus", you_informal: "steigst aus", he: "steigt aus", we: "steigen aus", you_pl: "steigt aus", they: "steigen aus" },
                imperative: {id: createWordId("reisen-und-verkehr-verkehrsmittel-126"), you_informal: "Steig aus!", you_pl: "Steigt aus!" },
                exampleGerman: [
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-127"), text: "Du", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-128"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-129"), text: "musst", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-130"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-131"), text: "am Marktplatz", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-132"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-133"), text: "aussteigen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-134"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "You have to get off at the marketplace.",
                clozeParts: ["Du musst am Marktplatz ", "."],
                clozeAnswers: ["aussteigen"]
            } as Verb,
            {id: createWordId("reisen-verkehr-verkehrsmittel-019"),
                wordType: "verb",
                german: "einsteigen",
                english: "to get on / to board", separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "eingestiegen",
                presentConjugation: {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-135"), I: "steige ein", you_informal: "steigst ein", he: "steigt ein", we: "steigen ein", you_pl: "steigt ein", they: "steigen ein" },
                imperative: {id: createWordId("reisen-und-verkehr-verkehrsmittel-136"), you_informal: "Steig ein!", you_pl: "Steigt ein!" },
                exampleGerman: [
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-137"), text: "Bitte", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-138"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-139"), text: "steigen Sie", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-140"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-141"), text: "ein", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-142"), text: "!", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please get on!",
                clozeParts: ["Bitte ", " Sie ", "!"],
                clozeAnswers: ["steigen", "ein"]
            } as Verb,
            {id: createWordId("reisen-verkehr-verkehrsmittel-020"),
                wordType: "verb",
                german: "fahren",
                english: "to drive / to travel / to go", separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gefahren",
                presentConjugation: {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-143"), I: "fahre", you_informal: "fährst", he: "fährt", we: "fahren", you_pl: "fahrt", they: "fahren" },
                imperative: {id: createWordId("reisen-und-verkehr-verkehrsmittel-144"), you_informal: "Fahr!", you_pl: "Fahrt!" },
                exampleGerman: [
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-145"), text: "Wohin", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-146"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-147"), text: "fahrt", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-148"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-149"), text: "ihr", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-150"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Where are you (plural) going?",
                clozeParts: ["Wohin ", " ihr?"],
                clozeAnswers: ["fahrt"]
            } as Verb,
            {id: createWordId("reisen-verkehr-verkehrsmittel-021"),
                wordType: "verb",
                german: "fliegen",
                english: "to fly", separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geflogen",
                presentConjugation: {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-151"), I: "fliege", you_informal: "fliegst", he: "fliegt", we: "fliegen", you_pl: "fliegt", they: "fliegen" },
                imperative: {id: createWordId("reisen-und-verkehr-verkehrsmittel-152"), you_informal: "Flieg!", you_pl: "Fliegt!" },
                exampleGerman: [
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-153"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-154"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-155"), text: "fliegen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-156"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-157"), text: "nach Athen", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-158"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are flying to Athens.",
                clozeParts: ["Wir ", " nach Athen."],
                clozeAnswers: ["fliegen"]
            } as Verb,
            {id: createWordId("reisen-verkehr-verkehrsmittel-022"),
                wordType: "noun",
                german: "Ticket",
                article: "das",
                plural: "Tickets",
                english: "ticket",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-159"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-160"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-161"), text: "brauche", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-162"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-163"), text: "ein Ticket", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-164"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a ticket.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Ticket"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-023"),
                wordType: "noun",
                german: "Automat",
                article: "der",
                plural: "Automaten",
                english: "vending machine / ticket machine",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-165"), text: "Die Fahrkarte", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-166"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-167"), text: "bekommst", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-168"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-169"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-170"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-171"), text: "am Automaten", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-172"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "You get the ticket at the machine.",
                clozeParts: ["Die Fahrkarte bekommst du am ", "."],
                clozeAnswers: ["Automaten"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-024"),
                wordType: "noun",
                german: "Platz",
                article: "der",
                plural: "Plätze",
                english: "seat / space",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-173"), text: "Ist", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-174"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-175"), text: "der Platz", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-176"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-177"), text: "frei", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-178"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Is this seat free?",
                clozeParts: ["Ist der ", " frei?"],
                clozeAnswers: ["Platz"]
            } as Noun,
            {id: createWordId("reisen-verkehr-verkehrsmittel-025"),
                wordType: "noun",
                german: "Verspätung",
                article: "die",
                plural: "Verspätungen",
                english: "delay",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-verkehrsmittel-179"), text: "Der Zug", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-180"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-181"), text: "hat", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-182"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-183"), text: "Verspätung", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-verkehrsmittel-184"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The train is delayed.",
                clozeParts: ["Der Zug hat ", "."],
                clozeAnswers: ["Verspätung"]
            } as Noun
        ],

        // --- UNTER-THEMA: Ferienziele (20 Wörter) ---
        "Ferienziele": [
            {id: createWordId("reisen-verkehr-ferienziele-001"),
                wordType: "noun",
                german: "Ferien",
                article: "die",
                plural: "Ferien",
                english: "holidays / vacation (school)",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-001"), text: "Was", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-003"), text: "macht", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-005"), text: "ihr", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-007"), text: "in den Ferien", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-008"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "What are you (plural) doing during the holidays?",
                clozeParts: ["Was macht ihr in den ", "?"],
                clozeAnswers: ["Ferien"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-002"),
                wordType: "noun",
                german: "Urlaub",
                article: "der",
                plural: "Urlaube",
                english: "holiday / vacation",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-009"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-011"), text: "machen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-013"), text: "Urlaub", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-015"), text: "in Italien", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-016"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are on holiday in Italy.",
                clozeParts: ["Wir machen ", " in Italien."],
                clozeAnswers: ["Urlaub"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-003"),
                wordType: "noun",
                german: "Reise",
                article: "die",
                plural: "Reisen",
                english: "journey / trip",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-017"), text: "Die Reise", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-019"), text: "nach Spanien", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-021"), text: "war", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-023"), text: "toll", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-024"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The trip to Spain was great.",
                clozeParts: ["Die ", " nach Spanien war toll."],
                clozeAnswers: ["Reise"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-004"),
                wordType: "verb",
                german: "reisen",
                english: "to travel", separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gereist",
                presentConjugation: {
    id: createWordId("reisen-und-verkehr-ferienziele-025"), I: "reise", you_informal: "reist", he: "reist", we: "reisen", you_pl: "reist", they: "reisen" },
                imperative: {id: createWordId("reisen-und-verkehr-ferienziele-026"), you_informal: "Reis!", you_pl: "Reist!" },
                exampleGerman: [
                    {id: createWordId("reisen-und-verkehr-ferienziele-027"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-029"), text: "reisen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-031"), text: "oft", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-033"), text: "nach Frankreich", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-034"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We often travel to France.",
                clozeParts: ["Wir ", " oft nach Frankreich."],
                clozeAnswers: ["reisen"]
            } as Verb,
            {id: createWordId("reisen-verkehr-ferienziele-005"),
                wordType: "noun",
                german: "Meer",
                article: "das",
                plural: "Meere",
                english: "sea / ocean",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-035"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-037"), text: "fahren", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-039"), text: "ans Meer", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-040"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are going to the sea.",
                clozeParts: ["Wir fahren ans ", "."],
                clozeAnswers: ["Meer"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-006"),
                wordType: "noun",
                german: "See",
                article: "der",
                plural: "Seen",
                english: "lake",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-041"), text: "Am Wochenende", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-043"), text: "fahren", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-045"), text: "wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-047"), text: "an den See", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-048"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "At the weekend we are going to the lake.",
                clozeParts: ["Am Wochenende fahren wir an den ", "."],
                clozeAnswers: ["See"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-007"),
                wordType: "noun",
                german: "Berge",
                article: "die",
                plural: "Berge",
                english: "mountains",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-049"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-051"), text: "wandern", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-053"), text: "in den Bergen", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-054"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are hiking in the mountains.",
                clozeParts: ["Wir wandern in den ", "."],
                clozeAnswers: ["Bergen"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-008"),
                wordType: "noun",
                german: "Hotel",
                article: "das",
                plural: "Hotels",
                english: "hotel",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-055"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-057"), text: "schlafen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-059"), text: "im Hotel", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-060"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are sleeping in the hotel.",
                clozeParts: ["Wir schlafen im ", "."],
                clozeAnswers: ["Hotel"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-009"),
                wordType: "noun",
                german: "Camping",
                article: "das",
                plural: null,
                english: "camping",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-061"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-063"), text: "machen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-065"), text: "Camping", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-067"), text: "am See", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-068"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are camping at the lake.",
                clozeParts: ["Wir machen ", " am See."],
                clozeAnswers: ["Camping"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-010"),
                wordType: "noun",
                german: "Zelt",
                article: "das",
                plural: "Zelte",
                english: "tent",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-069"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-071"), text: "schlafen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-072"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-073"), text: "im Zelt", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-074"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are sleeping in the tent.",
                clozeParts: ["Wir schlafen im ", "."],
                clozeAnswers: ["Zelt"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-011"),
                wordType: "noun",
                german: "Stadt",
                article: "die",
                plural: "Städte",
                english: "city / town",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-075"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-077"), text: "mache", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-078"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-079"), text: "Urlaub", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-080"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-081"), text: "in einer großen Stadt", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-082"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am on holiday in a big city.",
                clozeParts: ["Ich mache Urlaub in einer großen ", "."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-012"),
                wordType: "noun",
                german: "Land",
                article: "das",
                plural: "Länder",
                english: "country / countryside",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-083"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-084"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-085"), text: "fahren", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-086"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-087"), text: "aufs Land", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-088"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are going to the countryside.",
                clozeParts: ["Wir fahren aufs ", "."],
                clozeAnswers: ["Land"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-013"),
                wordType: "noun",
                german: "Ausflug",
                article: "der",
                plural: "Ausflüge",
                english: "trip / excursion",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-089"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-090"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-091"), text: "machen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-092"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-093"), text: "mit der Schule", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-094"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-095"), text: "einen Ausflug", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-096"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are going on a trip with the school.",
                clozeParts: ["Wir machen mit der Schule einen ", "."],
                clozeAnswers: ["Ausflug"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-014"),
                wordType: "noun",
                german: "Fotoapparat",
                article: "der",
                plural: "Fotoapparate",
                english: "camera",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-097"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-098"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-099"), text: "hat", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-100"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-101"), text: "einen teuren Fotoapparat", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-102"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She has an expensive camera.",
                clozeParts: ["Sie hat einen teuren ", "."],
                clozeAnswers: ["Fotoapparat"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-015"),
                wordType: "noun",
                german: "Koffer",
                article: "der",
                plural: "Koffer",
                english: "suitcase",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-103"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-104"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-105"), text: "packe", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-106"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-107"), text: "meinen Koffer", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-108"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am packing my suitcase.",
                clozeParts: ["Ich packe meinen ", "."],
                clozeAnswers: ["Koffer"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-016"),
                wordType: "noun",
                german: "Tourist/Touristin",
                article: "der/die",
                plural: "Touristen/Touristinnen",
                english: "tourist (male/female)",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-109"), text: "Viele Touristen", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-110"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-111"), text: "besuchen", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-112"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-113"), text: "Berlin", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-114"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Many tourists visit Berlin.",
                clozeParts: ["Viele ", " besuchen Berlin."],
                clozeAnswers: ["Touristen"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-017"),
                wordType: "noun",
                german: "Stadtplan",
                article: "der",
                plural: "Stadtpläne",
                english: "city map",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-115"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-116"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-117"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-118"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-119"), text: "einen Stadtplan", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-120"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-121"), text: "von München", case: "dativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-122"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a city map of Munich.",
                clozeParts: ["Ich habe einen ", " von München."],
                clozeAnswers: ["Stadtplan"]
            } as Noun,
            {id: createWordId("reisen-verkehr-ferienziele-018"),
                wordType: "verb",
                german: "reservieren",
                english: "to reserve / to book", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "reserviert",
                presentConjugation: {
    id: createWordId("reisen-und-verkehr-ferienziele-123"), I: "reserviere", you_informal: "reservierst", he: "reserviert", we: "reservieren", you_pl: "reserviert", they: "reservieren" },
                imperative: {id: createWordId("reisen-und-verkehr-ferienziele-124"), you_informal: "Reservier!", you_pl: "Reserviert!" },
                exampleGerman: [
                    {id: createWordId("reisen-und-verkehr-ferienziele-125"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-126"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-127"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-128"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-129"), text: "ein Zimmer", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-130"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-131"), text: "reservieren", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-132"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like to reserve a room.",
                clozeParts: ["Ich möchte ein Zimmer ", "."],
                clozeAnswers: ["reservieren"]
            } as Verb,
            {id: createWordId("reisen-verkehr-ferienziele-019"),
                wordType: "verb",
                german: "buchen",
                english: "to book", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gebucht",
                presentConjugation: {
    id: createWordId("reisen-und-verkehr-ferienziele-133"), I: "buche", you_informal: "buchst", he: "bucht", we: "buchen", you_pl: "bucht", they: "buchen" },
                imperative: {id: createWordId("reisen-und-verkehr-ferienziele-134"), you_informal: "Buch!", you_pl: "Bucht!" },
                exampleGerman: [
                    {id: createWordId("reisen-und-verkehr-ferienziele-135"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-136"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-137"), text: "buche", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-138"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-139"), text: "ein Hotelzimmer", case: "akkusativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-140"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am booking a hotel room.",
                clozeParts: ["Ich ", " ein Hotelzimmer."],
                clozeAnswers: ["buche"]
            } as Verb,
            {id: createWordId("reisen-verkehr-ferienziele-020"),
                wordType: "noun",
                german: "Gepäck",
                article: "das",
                plural: null,
                english: "luggage / baggage",
                exampleGerman: [
                    {
    id: createWordId("reisen-und-verkehr-ferienziele-141"), text: "Das Gepäck", case: "nominativ" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-142"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-143"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-144"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-145"), text: "schwer", case: "none" } as CaseElement,
                    {id: createWordId("reisen-und-verkehr-ferienziele-146"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The luggage is heavy.",
                clozeParts: ["Das ", " ist schwer."],
                clozeAnswers: ["Gepäck"]
            } as Noun
        ]
    }
});