// packages/trainer-themen/vokabular_person.ts
// Converted from vokabular_person.js to match vocabulary.ts structure

import type {VocabularyStructure, 
    Word, 
    Noun, 
    Verb, 
    Adjective,
    WordId,
    CaseElement 
} from './src/core/types/vocabulary';
import {createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabularPerson: VocabularyStructure = createVocabulary({"Person": {
        // --- SUB-TOPIC: Name ---
        "Name": [
            {
                id: createWordId("person-name-001"),
                wordType: 'noun',
                german: "Name",
                article: "der",
                plural: "Namen",
                english: "name",
                exampleGerman: [
                    {
    id: createWordId("person-name-001"), text: "Wie", case: "none" },
                    {id: createWordId("person-name-002"), text: " ", case: "none" },
                    {id: createWordId("person-name-003"), text: "ist", case: "verb" },
                    {id: createWordId("person-name-004"), text: " ", case: "none" },
                    {id: createWordId("person-name-005"), text: "dein Name", case: "nominativ" },
                    {id: createWordId("person-name-006"), text: "?", case: "none" }
                ],
                exampleEnglish: "What is your name?",
                clozeParts: ["Wie ist dein ", "?"],
                clozeAnswers: ["Name"]
            } as Noun,
            {id: createWordId("person-name-002"),
                wordType: 'noun',
                german: "Familienname",
                article: "der",
                plural: "Familiennamen",
                english: "family name / surname",
                exampleGerman: [
                    {
    id: createWordId("person-name-007"), text: "Mein Familienname", case: "nominativ" },
                    {id: createWordId("person-name-008"), text: " ", case: "none" },
                    {id: createWordId("person-name-009"), text: "ist", case: "verb" },
                    {id: createWordId("person-name-010"), text: " ", case: "none" },
                    {id: createWordId("person-name-011"), text: "Schmidt", case: "nominativ" },
                    {id: createWordId("person-name-012"), text: ".", case: "none" }
                ],
                exampleEnglish: "My family name is Schmidt.",
                clozeParts: ["Mein ", " ist Schmidt."],
                clozeAnswers: ["Familienname"]
            } as Noun,
            {id: createWordId("person-name-003"),
                wordType: 'noun',
                german: "Vorname",
                article: "der",
                plural: "Vornamen",
                english: "first name",
                exampleGerman: [
                    {
    id: createWordId("person-name-013"), text: "Mein Vorname", case: "nominativ" },
                    {id: createWordId("person-name-014"), text: " ", case: "none" },
                    {id: createWordId("person-name-015"), text: "ist", case: "verb" },
                    {id: createWordId("person-name-016"), text: " ", case: "none" },
                    {id: createWordId("person-name-017"), text: "Anna", case: "nominativ" },
                    {id: createWordId("person-name-018"), text: ".", case: "none" }
                ],
                exampleEnglish: "My first name is Anna.",
                clozeParts: ["Mein ", " ist Anna."],
                clozeAnswers: ["Vorname"]
            } as Noun,
            {id: createWordId("person-name-004"),
                wordType: 'verb',
                german: "heißen",
                english: "to be called",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geheißen",
                exampleGerman: [
                    {
    id: createWordId("person-name-019"), text: "Wie", case: "none" },
                    {id: createWordId("person-name-020"), text: " ", case: "none" },
                    {id: createWordId("person-name-021"), text: "heißt", case: "verb" },
                    {id: createWordId("person-name-022"), text: " ", case: "none" },
                    {id: createWordId("person-name-023"), text: "du", case: "nominativ" },
                    {id: createWordId("person-name-024"), text: "?", case: "none" }
                ],
                exampleEnglish: "What are you called?",
                clozeParts: ["Wie ", " du?"],
                clozeAnswers: ["heißt"]
            } as Verb
        ],

        // --- SUB-TOPIC: Adresse ---
        "Adresse": [
            {id: createWordId("person-adresse-001"),
                wordType: 'noun',
                german: "Adresse",
                article: "die",
                plural: "Adressen",
                english: "address",
                exampleGerman: [
                    {
    id: createWordId("person-adresse-001"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-adresse-002"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-003"), text: "weiß", case: "verb" },
                    {id: createWordId("person-adresse-004"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-005"), text: "die Adresse", case: "akkusativ" },
                    {id: createWordId("person-adresse-006"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-007"), text: "nicht", case: "none" },
                    {id: createWordId("person-adresse-008"), text: ".", case: "none" }
                ],
                exampleEnglish: "I don't know the address.",
                clozeParts: ["Ich weiß die ", " nicht."],
                clozeAnswers: ["Adresse"]
            } as Noun,
            {id: createWordId("person-adresse-002"),
                wordType: 'noun',
                german: "Straße",
                article: "die",
                plural: "Straßen",
                english: "street",
                exampleGerman: [
                    {
    id: createWordId("person-adresse-009"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-adresse-010"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-011"), text: "wohne", case: "verb" },
                    {id: createWordId("person-adresse-012"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-013"), text: "in der Bahnhofstraße", case: "dativ" },
                    {id: createWordId("person-adresse-014"), text: ".", case: "none" }
                ],
                exampleEnglish: "I live on Bahnhofstraße.",
                clozeParts: ["Ich wohne in der ", "."],
                clozeAnswers: ["Bahnhofstraße"]
            } as Noun,
            {id: createWordId("person-adresse-003"),
                wordType: 'noun',
                german: "Haus",
                article: "das",
                plural: "Häuser",
                english: "house",
                exampleGerman: [
                    {
    id: createWordId("person-adresse-015"), text: "Unser Haus", case: "nominativ" },
                    {id: createWordId("person-adresse-016"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-017"), text: "ist", case: "verb" },
                    {id: createWordId("person-adresse-018"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-019"), text: "sehr alt", case: "none" },
                    {id: createWordId("person-adresse-020"), text: ".", case: "none" }
                ],
                exampleEnglish: "Our house is very old.",
                clozeParts: ["Unser ", " ist sehr alt."],
                clozeAnswers: ["Haus"]
            } as Noun,
            {id: createWordId("person-adresse-004"),
                wordType: 'noun',
                german: "Wohnung",
                article: "die",
                plural: "Wohnungen",
                english: "apartment",
                exampleGerman: [
                    {
    id: createWordId("person-adresse-021"), text: "Unsere Wohnung", case: "nominativ" },
                    {id: createWordId("person-adresse-022"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-023"), text: "ist", case: "verb" },
                    {id: createWordId("person-adresse-024"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-025"), text: "im ersten Stock", case: "dativ" },
                    {id: createWordId("person-adresse-026"), text: ".", case: "none" }
                ],
                exampleEnglish: "Our apartment is on the first floor.",
                clozeParts: ["Unsere ", " ist im ersten Stock."],
                clozeAnswers: ["Wohnung"]
            } as Noun,
            {id: createWordId("person-adresse-005"),
                wordType: 'noun',
                german: "Nummer",
                article: "die",
                plural: "Nummern",
                english: "number",
                exampleGerman: [
                    {
    id: createWordId("person-adresse-027"), text: "Meine Hausnummer", case: "nominativ" },
                    {id: createWordId("person-adresse-028"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-029"), text: "ist", case: "verb" },
                    {id: createWordId("person-adresse-030"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-031"), text: "12", case: "nominativ" },
                    {id: createWordId("person-adresse-032"), text: ".", case: "none" }
                ],
                exampleEnglish: "My house number is 12.",
                clozeParts: ["Meine Haus", " ist 12."],
                clozeAnswers: ["nummer"]
            } as Noun,
            {id: createWordId("person-adresse-006"),
                wordType: 'noun',
                german: "Stadt",
                article: "die",
                plural: "Städte",
                english: "city",
                exampleGerman: [
                    {
    id: createWordId("person-adresse-033"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-adresse-034"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-035"), text: "wohne", case: "verb" },
                    {id: createWordId("person-adresse-036"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-037"), text: "in einer kleinen Stadt", case: "dativ" },
                    {id: createWordId("person-adresse-038"), text: ".", case: "none" }
                ],
                exampleEnglish: "I live in a small city.",
                clozeParts: ["Ich wohne in einer kleinen ", "."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {id: createWordId("person-adresse-007"),
                wordType: 'noun',
                german: "PLZ (Postleitzahl)",
                article: "die",
                plural: "PLZs (Postleitzahlen)",
                english: "postal code",
                exampleGerman: [
                    {
    id: createWordId("person-adresse-039"), text: "Meine Postleitzahl", case: "nominativ" },
                    {id: createWordId("person-adresse-040"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-041"), text: "ist", case: "verb" },
                    {id: createWordId("person-adresse-042"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-043"), text: "80331", case: "nominativ" },
                    {id: createWordId("person-adresse-044"), text: ".", case: "none" }
                ],
                exampleEnglish: "My postal code is 80331.",
                clozeParts: ["Meine ", " ist 80331."],
                clozeAnswers: ["Postleitzahl"]
            } as Noun,
            {id: createWordId("person-adresse-008"),
                wordType: 'noun',
                german: "Land",
                article: "das",
                plural: "Länder",
                english: "country",
                exampleGerman: [
                    {
    id: createWordId("person-adresse-045"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-adresse-046"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-047"), text: "komme", case: "verb" },
                    {id: createWordId("person-adresse-048"), text: " ", case: "none" },
                    {id: createWordId("person-adresse-049"), text: "aus Deutschland", case: "dativ" },
                    {id: createWordId("person-adresse-050"), text: ".", case: "none" }
                ],
                exampleEnglish: "I come from Germany.",
                clozeParts: ["Ich komme aus ", "."],
                clozeAnswers: ["Deutschland"]
            } as Noun
        ],

        // --- SUB-TOPIC: Telefon ---
        "Telefon": [
            {id: createWordId("person-telefon-001"),
                wordType: 'noun',
                german: "Telefon",
                article: "das",
                plural: "Telefone",
                english: "telephone",
                exampleGerman: [
                    {
    id: createWordId("person-telefon-001"), text: "Mein Telefon", case: "nominativ" },
                    {id: createWordId("person-telefon-002"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-003"), text: "ist", case: "verb" },
                    {id: createWordId("person-telefon-004"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-005"), text: "kaputt", case: "none" },
                    {id: createWordId("person-telefon-006"), text: ".", case: "none" }
                ],
                exampleEnglish: "My telephone is broken.",
                clozeParts: ["Mein ", " ist kaputt."],
                clozeAnswers: ["Telefon"]
            } as Noun,
            {id: createWordId("person-telefon-002"),
                wordType: 'noun',
                german: "Handy",
                article: "das",
                plural: "Handys",
                english: "mobile phone",
                exampleGerman: [
                    {
    id: createWordId("person-telefon-007"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-telefon-008"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-009"), text: "habe", case: "verb" },
                    {id: createWordId("person-telefon-010"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-011"), text: "ein neues Handy", case: "akkusativ" },
                    {id: createWordId("person-telefon-012"), text: ".", case: "none" }
                ],
                exampleEnglish: "I have a new mobile phone.",
                clozeParts: ["Ich habe ein neues ", "."],
                clozeAnswers: ["Handy"]
            } as Noun,
            {id: createWordId("person-telefon-003"),
                wordType: 'verb',
                german: "anrufen",
                english: "to call (by phone)",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "angerufen",
                exampleGerman: [
                    {
    id: createWordId("person-telefon-013"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-telefon-014"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-015"), text: "rufe", case: "verb" },
                    {id: createWordId("person-telefon-016"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-017"), text: "dich", case: "akkusativ" },
                    {id: createWordId("person-telefon-018"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-019"), text: "morgen", case: "none" },
                    {id: createWordId("person-telefon-020"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-021"), text: "an", case: "verb" },
                    {id: createWordId("person-telefon-022"), text: ".", case: "none" }
                ],
                exampleEnglish: "I will call you tomorrow.",
                clozeParts: ["Ich rufe dich morgen ", "."],
                clozeAnswers: ["an"]
            } as Verb,
            {id: createWordId("person-telefon-004"),
                wordType: 'noun',
                german: "Anruf",
                article: "der",
                plural: "Anrufe",
                english: "call (noun)",
                exampleGerman: [
                    {
    id: createWordId("person-telefon-023"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-telefon-024"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-025"), text: "warte", case: "verb" },
                    {id: createWordId("person-telefon-026"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-027"), text: "dann", case: "none" },
                    {id: createWordId("person-telefon-028"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-029"), text: "auf deinen Anruf", case: "akkusativ" },
                    {id: createWordId("person-telefon-030"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-031"), text: "–", case: "none" },
                    {id: createWordId("person-telefon-032"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-033"), text: "okay", case: "none" },
                    {id: createWordId("person-telefon-034"), text: "?", case: "none" }
                ],
                exampleEnglish: "I'll wait for your call then – okay?",
                clozeParts: ["Ich warte dann auf deinen ", " – okay?"],
                clozeAnswers: ["Anruf"]
            } as Noun,
            {id: createWordId("person-telefon-005"),
                wordType: 'noun',
                german: "Anrufbeantworter",
                article: "der",
                plural: "Anrufbeantworter",
                english: "answering machine",
                exampleGerman: [
                    {
    id: createWordId("person-telefon-035"), text: "Sind", case: "verb" },
                    {id: createWordId("person-telefon-036"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-037"), text: "Nachrichten", case: "nominativ" },
                    {id: createWordId("person-telefon-038"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-039"), text: "auf dem Anrufbeantworter", case: "dativ" },
                    {id: createWordId("person-telefon-040"), text: "?", case: "none" }
                ],
                exampleEnglish: "Are there messages on the answering machine?",
                clozeParts: ["Sind Nachrichten auf dem ", "?"],
                clozeAnswers: ["Anrufbeantworter"]
            } as Noun,
            {id: createWordId("person-telefon-006"),
                wordType: 'noun',
                german: "Nummer",
                article: "die",
                plural: "Nummern",
                english: "number",
                exampleGerman: [
                    {
    id: createWordId("person-telefon-041"), text: "Wie", case: "none" },
                    {id: createWordId("person-telefon-042"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-043"), text: "ist", case: "verb" },
                    {id: createWordId("person-telefon-044"), text: " ", case: "none" },
                    {id: createWordId("person-telefon-045"), text: "deine Telefonnummer", case: "nominativ" },
                    {id: createWordId("person-telefon-046"), text: "?", case: "none" }
                ],
                exampleEnglish: "What is your phone number?",
                clozeParts: ["Wie ist deine ", "?"],
                clozeAnswers: ["Telefonnummer"]
            } as Noun
        ],

        // --- SUB-TOPIC: Geburtstag ---
        "Geburtstag": [
            {id: createWordId("person-geburtstag-001"),
                wordType: 'noun',
                german: "Geburtstag",
                article: "der",
                plural: "Geburtstage",
                english: "birthday",
                exampleGerman: [
                    {
    id: createWordId("person-geburtstag-001"), text: "Wann", case: "none" },
                    {id: createWordId("person-geburtstag-002"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-003"), text: "hast", case: "verb" },
                    {id: createWordId("person-geburtstag-004"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-005"), text: "du", case: "nominativ" },
                    {id: createWordId("person-geburtstag-006"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-007"), text: "Geburtstag", case: "akkusativ" },
                    {id: createWordId("person-geburtstag-008"), text: "?", case: "none" }
                ],
                exampleEnglish: "When is your birthday?",
                clozeParts: ["Wann hast du ", "?"],
                clozeAnswers: ["Geburtstag"]
            } as Noun,
            {id: createWordId("person-geburtstag-002"),
                wordType: 'verb',
                german: "bekommen",
                english: "to get / to receive",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bekommen",
                exampleGerman: [
                    {
    id: createWordId("person-geburtstag-009"), text: "Was", case: "akkusativ" },
                    {id: createWordId("person-geburtstag-010"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-011"), text: "bekommst", case: "verb" },
                    {id: createWordId("person-geburtstag-012"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-013"), text: "du", case: "nominativ" },
                    {id: createWordId("person-geburtstag-014"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-015"), text: "zum Geburtstag", case: "dativ" },
                    {id: createWordId("person-geburtstag-016"), text: "?", case: "none" }
                ],
                exampleEnglish: "What do you get for your birthday?",
                clozeParts: ["Was ", " du zum Geburtstag?"],
                clozeAnswers: ["bekommst"]
            } as Verb,
            {id: createWordId("person-geburtstag-003"),
                wordType: 'verb',
                german: "einladen",
                english: "to invite",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingeladen",
                exampleGerman: [
                    {
    id: createWordId("person-geburtstag-017"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-geburtstag-018"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-019"), text: "lade", case: "verb" },
                    {id: createWordId("person-geburtstag-020"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-021"), text: "dich", case: "akkusativ" },
                    {id: createWordId("person-geburtstag-022"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-023"), text: "ein", case: "verb" },
                    {id: createWordId("person-geburtstag-024"), text: ".", case: "none" }
                ],
                exampleEnglish: "I invite you.",
                clozeParts: ["Ich lade dich ", "."],
                clozeAnswers: ["ein"]
            } as Verb,
            {id: createWordId("person-geburtstag-004"),
                wordType: 'noun',
                german: "Einladung",
                article: "die",
                plural: "Einladungen",
                english: "invitation",
                exampleGerman: [
                    {
    id: createWordId("person-geburtstag-025"), text: "Das", case: "nominativ" },
                    {id: createWordId("person-geburtstag-026"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-027"), text: "ist", case: "verb" },
                    {id: createWordId("person-geburtstag-028"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-029"), text: "eine Einladung", case: "nominativ" },
                    {id: createWordId("person-geburtstag-030"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-031"), text: "zur Geburtstagsparty", case: "dativ" },
                    {id: createWordId("person-geburtstag-032"), text: ".", case: "none" }
                ],
                exampleEnglish: "This is an invitation to the birthday party.",
                clozeParts: ["Das ist eine ", " zur Geburtstagsparty."],
                clozeAnswers: ["Einladung"]
            } as Noun,
            {id: createWordId("person-geburtstag-005"),
                wordType: 'verb',
                german: "feiern",
                english: "to celebrate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefeiert",
                exampleGerman: [
                    {
    id: createWordId("person-geburtstag-033"), text: "Wir", case: "nominativ" },
                    {id: createWordId("person-geburtstag-034"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-035"), text: "feiern", case: "verb" },
                    {id: createWordId("person-geburtstag-036"), text: " ", case: "none" },
                    {id: createWordId("person-geburtstag-037"), text: "meinen Geburtstag", case: "akkusativ" },
                    {id: createWordId("person-geburtstag-038"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are celebrating my birthday.",
                clozeParts: ["Wir ", " meinen Geburtstag."],
                clozeAnswers: ["feiern"]
            } as Verb
        ],

        // --- SUB-TOPIC: Alter ---
        "Alter": [
            {id: createWordId("person-alter-001"),
                wordType: 'adjective',
                german: "alt",
                english: "old",
                exampleGerman: [
                    {
    id: createWordId("person-alter-001"), text: "Wie", case: "none" },
                    {id: createWordId("person-alter-002"), text: " ", case: "none" },
                    {id: createWordId("person-alter-003"), text: "alt", case: "none" },
                    {id: createWordId("person-alter-004"), text: " ", case: "none" },
                    {id: createWordId("person-alter-005"), text: "bist", case: "verb" },
                    {id: createWordId("person-alter-006"), text: " ", case: "none" },
                    {id: createWordId("person-alter-007"), text: "du", case: "nominativ" },
                    {id: createWordId("person-alter-008"), text: "?", case: "none" }
                ],
                exampleEnglish: "How old are you?",
                clozeParts: ["Wie ", " bist du?"],
                clozeAnswers: ["alt"]
            } as Adjective,
            {id: createWordId("person-alter-002"),
                wordType: 'noun',
                german: "Alter",
                article: "das",
                plural: null,
                english: "age",
                exampleGerman: [
                    {
    id: createWordId("person-alter-009"), text: "Das", case: "nominativ" },
                    {id: createWordId("person-alter-010"), text: " ", case: "none" },
                    {id: createWordId("person-alter-011"), text: "ist", case: "verb" },
                    {id: createWordId("person-alter-012"), text: " ", case: "none" },
                    {id: createWordId("person-alter-013"), text: "sein", case: "none" },
                    {id: createWordId("person-alter-014"), text: " ", case: "none" },
                    {id: createWordId("person-alter-015"), text: "Alter", case: "nominativ" },
                    {id: createWordId("person-alter-016"), text: ".", case: "none" }
                ],
                exampleEnglish: "That is his age.",
                clozeParts: ["Das ist sein ", "."],
                clozeAnswers: ["Alter"]
            } as Noun,
            {id: createWordId("person-alter-003"),
                wordType: 'adjective',
                german: "jung",
                english: "young",
                exampleGerman: [
                    {
    id: createWordId("person-alter-017"), text: "Meine Schwester", case: "nominativ" },
                    {id: createWordId("person-alter-018"), text: " ", case: "none" },
                    {id: createWordId("person-alter-019"), text: "ist", case: "verb" },
                    {id: createWordId("person-alter-020"), text: " ", case: "none" },
                    {id: createWordId("person-alter-021"), text: "noch sehr jung", case: "none" },
                    {id: createWordId("person-alter-022"), text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still very young.",
                clozeParts: ["Meine Schwester ist noch sehr ", "."],
                clozeAnswers: ["jung"]
            } as Adjective
        ],

        // --- SUB-TOPIC: Geschlecht ---
        "Geschlecht": [
            {id: createWordId("person-geschlecht-001"),
                wordType: 'adjective',
                german: "männlich",
                english: "male",
                exampleGerman: [
                    {
    id: createWordId("person-geschlecht-001"), text: "Er", case: "nominativ" },
                    {id: createWordId("person-geschlecht-002"), text: " ", case: "none" },
                    {id: createWordId("person-geschlecht-003"), text: "ist", case: "verb" },
                    {id: createWordId("person-geschlecht-004"), text: " ", case: "none" },
                    {id: createWordId("person-geschlecht-005"), text: "männlich", case: "none" },
                    {id: createWordId("person-geschlecht-006"), text: ".", case: "none" }
                ],
                exampleEnglish: "He is male.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["männlich"]
            } as Adjective,
            {id: createWordId("person-geschlecht-002"),
                wordType: 'adjective',
                german: "weiblich",
                english: "female",
                exampleGerman: [
                    {
    id: createWordId("person-geschlecht-007"), text: "Sie", case: "nominativ" },
                    {id: createWordId("person-geschlecht-008"), text: " ", case: "none" },
                    {id: createWordId("person-geschlecht-009"), text: "ist", case: "verb" },
                    {id: createWordId("person-geschlecht-010"), text: " ", case: "none" },
                    {id: createWordId("person-geschlecht-011"), text: "weiblich", case: "none" },
                    {id: createWordId("person-geschlecht-012"), text: ".", case: "none" }
                ],
                exampleEnglish: "She is female.",
                clozeParts: ["Sie ist ", "."],
                clozeAnswers: ["weiblich"]
            } as Adjective,
            {id: createWordId("person-geschlecht-003"),
                wordType: 'noun',
                german: "Herr",
                article: "der",
                plural: "Herren",
                english: "Mr.",
                exampleGerman: [
                    {
    id: createWordId("person-geschlecht-013"), text: "Guten Tag", case: "none" },
                    {id: createWordId("person-geschlecht-014"), text: ",", case: "none" },
                    {id: createWordId("person-geschlecht-015"), text: " ", case: "none" },
                    {id: createWordId("person-geschlecht-016"), text: "Herr Müller", case: "none" },
                    {id: createWordId("person-geschlecht-017"), text: "!", case: "none" }
                ],
                exampleEnglish: "Good day, Mr. Müller!",
                clozeParts: ["Guten Tag, ", " Müller!"],
                clozeAnswers: ["Herr"]
            } as Noun,
            {id: createWordId("person-geschlecht-004"),
                wordType: 'noun',
                german: "Frau",
                article: "die",
                plural: "Frauen",
                english: "Ms./Mrs.",
                exampleGerman: [
                    {
    id: createWordId("person-geschlecht-018"), text: "Das", case: "nominativ" },
                    {id: createWordId("person-geschlecht-019"), text: " ", case: "none" },
                    {id: createWordId("person-geschlecht-020"), text: "ist", case: "verb" },
                    {id: createWordId("person-geschlecht-021"), text: " ", case: "none" },
                    {id: createWordId("person-geschlecht-022"), text: "Frau Bergner", case: "nominativ" },
                    {id: createWordId("person-geschlecht-023"), text: ".", case: "none" }
                ],
                exampleEnglish: "This is Ms./Mrs. Bergner.",
                clozeParts: ["Das ist ", " Bergner."],
                clozeAnswers: ["Frau"]
            } as Noun
        ],

        // --- SUB-TOPIC: Familie ---
        "Familie": [
            {id: createWordId("person-familie-001"),
                wordType: 'noun',
                german: "Familie",
                article: "die",
                plural: "Familien",
                english: "family",
                exampleGerman: [
                    {
    id: createWordId("person-familie-001"), text: "Er", case: "nominativ" },
                    {id: createWordId("person-familie-002"), text: " ", case: "none" },
                    {id: createWordId("person-familie-003"), text: "hat", case: "verb" },
                    {id: createWordId("person-familie-004"), text: " ", case: "none" },
                    {id: createWordId("person-familie-005"), text: "eine große Familie", case: "akkusativ" },
                    {id: createWordId("person-familie-006"), text: ".", case: "none" }
                ],
                exampleEnglish: "He has a large family.",
                clozeParts: ["Er hat eine große ", "."],
                clozeAnswers: ["Familie"]
            } as Noun,
            {id: createWordId("person-familie-002"),
                wordType: 'noun',
                german: "Vater",
                article: "der",
                plural: "Väter",
                english: "father",
                exampleGerman: [
                    {
    id: createWordId("person-familie-007"), text: "Mein Vater", case: "nominativ" },
                    {id: createWordId("person-familie-008"), text: " ", case: "none" },
                    {id: createWordId("person-familie-009"), text: "arbeitet", case: "verb" },
                    {id: createWordId("person-familie-010"), text: " ", case: "none" },
                    {id: createWordId("person-familie-011"), text: "bei einer Autofirma", case: "dativ" },
                    {id: createWordId("person-familie-012"), text: ".", case: "none" }
                ],
                exampleEnglish: "My father works at a car company.",
                clozeParts: ["Mein ", " arbeitet bei einer Autofirma."],
                clozeAnswers: ["Vater"]
            } as Noun,
            {id: createWordId("person-familie-003"),
                wordType: 'noun',
                german: "Mutter",
                article: "die",
                plural: "Mütter",
                english: "mother",
                exampleGerman: [
                    {
    id: createWordId("person-familie-013"), text: "Meine Mutter", case: "nominativ" },
                    {id: createWordId("person-familie-014"), text: " ", case: "none" },
                    {id: createWordId("person-familie-015"), text: "ist", case: "verb" },
                    {id: createWordId("person-familie-016"), text: " ", case: "none" },
                    {id: createWordId("person-familie-017"), text: "arbeitslos", case: "none" },
                    {id: createWordId("person-familie-018"), text: ".", case: "none" }
                ],
                exampleEnglish: "My mother is unemployed.",
                clozeParts: ["Meine ", " ist arbeitslos."],
                clozeAnswers: ["Mutter"]
            } as Noun,
            {id: createWordId("person-familie-004"),
                wordType: 'noun',
                german: "Eltern",
                article: "die",
                plural: "Eltern",
                english: "parents",
                exampleGerman: [
                    {
    id: createWordId("person-familie-019"), text: "Meine Eltern", case: "nominativ" },
                    {id: createWordId("person-familie-020"), text: " ", case: "none" },
                    {id: createWordId("person-familie-021"), text: "leben", case: "verb" },
                    {id: createWordId("person-familie-022"), text: " ", case: "none" },
                    {id: createWordId("person-familie-023"), text: "in Spanien", case: "dativ" },
                    {id: createWordId("person-familie-024"), text: ".", case: "none" }
                ],
                exampleEnglish: "My parents live in Spain.",
                clozeParts: ["Meine ", " leben in Spanien."],
                clozeAnswers: ["Eltern"]
            } as Noun,
            {id: createWordId("person-familie-005"),
                wordType: 'noun',
                german: "Kind",
                article: "das",
                plural: "Kinder",
                english: "child",
                exampleGerman: [
                    {
    id: createWordId("person-familie-025"), text: "Meine Schwester", case: "nominativ" },
                    {id: createWordId("person-familie-026"), text: " ", case: "none" },
                    {id: createWordId("person-familie-027"), text: "ist", case: "verb" },
                    {id: createWordId("person-familie-028"), text: " ", case: "none" },
                    {id: createWordId("person-familie-029"), text: "noch ein Baby", case: "nominativ" },
                    {id: createWordId("person-familie-030"), text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine Schwester ist noch ein ", "."],
                clozeAnswers: ["Baby"]
            } as Noun,
            {id: createWordId("person-familie-006"),
                wordType: 'noun',
                german: "Baby",
                article: "das",
                plural: "Babys",
                english: "baby",
                exampleGerman: [
                    {
    id: createWordId("person-familie-031"), text: "Meine Schwester", case: "nominativ" },
                    {id: createWordId("person-familie-032"), text: " ", case: "none" },
                    {id: createWordId("person-familie-033"), text: "ist", case: "verb" },
                    {id: createWordId("person-familie-034"), text: " ", case: "none" },
                    {id: createWordId("person-familie-035"), text: "noch ein Baby", case: "nominativ" },
                    {id: createWordId("person-familie-036"), text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine Schwester ist noch ein ", "."],
                clozeAnswers: ["Baby"]
            } as Noun,
            {id: createWordId("person-familie-007"),
                wordType: 'noun',
                german: "Bruder",
                article: "der",
                plural: "Brüder",
                english: "brother",
                exampleGerman: [
                    {
    id: createWordId("person-familie-037"), text: "Mein Bruder", case: "nominativ" },
                    {id: createWordId("person-familie-038"), text: " ", case: "none" },
                    {id: createWordId("person-familie-039"), text: "heißt", case: "verb" },
                    {id: createWordId("person-familie-040"), text: " ", case: "none" },
                    {id: createWordId("person-familie-041"), text: "Peter", case: "nominativ" },
                    {id: createWordId("person-familie-042"), text: ".", case: "none" }
                ],
                exampleEnglish: "My brother is called Peter.",
                clozeParts: ["Mein ", " heißt Peter."],
                clozeAnswers: ["Bruder"]
            } as Noun,
            {id: createWordId("person-familie-008"),
                wordType: 'noun',
                german: "Schwester",
                article: "die",
                plural: "Schwestern",
                english: "sister",
                exampleGerman: [
                    {
    id: createWordId("person-familie-043"), text: "Meine Schwester", case: "nominativ" },
                    {id: createWordId("person-familie-044"), text: " ", case: "none" },
                    {id: createWordId("person-familie-045"), text: "ist", case: "verb" },
                    {id: createWordId("person-familie-046"), text: " ", case: "none" },
                    {id: createWordId("person-familie-047"), text: "noch ein Baby", case: "nominativ" },
                    {id: createWordId("person-familie-048"), text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine ", " ist noch ein Baby."],
                clozeAnswers: ["Schwester"]
            } as Noun,
            {id: createWordId("person-familie-009"),
                wordType: 'noun',
                german: "Geschwister",
                article: "die",
                plural: "Geschwister",
                english: "siblings",
                exampleGerman: [
                    {
    id: createWordId("person-familie-049"), text: "Wir", case: "nominativ" },
                    {id: createWordId("person-familie-050"), text: " ", case: "none" },
                    {id: createWordId("person-familie-051"), text: "sind", case: "verb" },
                    {id: createWordId("person-familie-052"), text: " ", case: "none" },
                    {id: createWordId("person-familie-053"), text: "zwei Geschwister", case: "nominativ" },
                    {id: createWordId("person-familie-054"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are two siblings.",
                clozeParts: ["Wir sind zwei ", "."],
                clozeAnswers: ["Geschwister"]
            } as Noun,
            {id: createWordId("person-familie-010"),
                wordType: 'noun',
                german: "Tante",
                article: "die",
                plural: "Tanten",
                english: "aunt",
                exampleGerman: [
                    {
    id: createWordId("person-familie-055"), text: "Meine Tante", case: "nominativ" },
                    {id: createWordId("person-familie-056"), text: " ", case: "none" },
                    {id: createWordId("person-familie-057"), text: "wohnt", case: "verb" },
                    {id: createWordId("person-familie-058"), text: " ", case: "none" },
                    {id: createWordId("person-familie-059"), text: "in Berlin", case: "dativ" },
                    {id: createWordId("person-familie-060"), text: ".", case: "none" }
                ],
                exampleEnglish: "My aunt lives in Berlin.",
                clozeParts: ["Meine ", " wohnt in Berlin."],
                clozeAnswers: ["Tante"]
            } as Noun,
            {id: createWordId("person-familie-011"),
                wordType: 'noun',
                german: "Onkel",
                article: "der",
                plural: "Onkel",
                english: "uncle",
                exampleGerman: [
                    {
    id: createWordId("person-familie-061"), text: "Mein Onkel", case: "nominativ" },
                    {id: createWordId("person-familie-062"), text: " ", case: "none" },
                    {id: createWordId("person-familie-063"), text: "ist", case: "verb" },
                    {id: createWordId("person-familie-064"), text: " ", case: "none" },
                    {id: createWordId("person-familie-065"), text: "Arzt", case: "nominativ" },
                    {id: createWordId("person-familie-066"), text: ".", case: "none" }
                ],
                exampleEnglish: "My uncle is a doctor.",
                clozeParts: ["Mein ", " ist Arzt."],
                clozeAnswers: ["Onkel"]
            } as Noun,
            {id: createWordId("person-familie-012"),
                wordType: 'noun',
                german: "Großmutter",
                article: "die",
                plural: "Großmütter",
                english: "grandmother",
                exampleGerman: [
                    {
    id: createWordId("person-familie-067"), text: "Meine Großmutter", case: "nominativ" },
                    {id: createWordId("person-familie-068"), text: " ", case: "none" },
                    {id: createWordId("person-familie-069"), text: "ist", case: "verb" },
                    {id: createWordId("person-familie-070"), text: " ", case: "none" },
                    {id: createWordId("person-familie-071"), text: "sehr alt", case: "none" },
                    {id: createWordId("person-familie-072"), text: ".", case: "none" }
                ],
                exampleEnglish: "My grandmother is very old.",
                clozeParts: ["Meine ", " ist sehr alt."],
                clozeAnswers: ["Großmutter"]
            } as Noun,
            {id: createWordId("person-familie-013"),
                wordType: 'noun',
                german: "Großvater",
                article: "der",
                plural: "Großväter",
                english: "grandfather",
                exampleGerman: [
                    {
    id: createWordId("person-familie-073"), text: "Mein Großvater", case: "nominativ" },
                    {id: createWordId("person-familie-074"), text: " ", case: "none" },
                    {id: createWordId("person-familie-075"), text: "liest", case: "verb" },
                    {id: createWordId("person-familie-076"), text: " ", case: "none" },
                    {id: createWordId("person-familie-077"), text: "viel", case: "none" },
                    {id: createWordId("person-familie-078"), text: ".", case: "none" }
                ],
                exampleEnglish: "My grandfather reads a lot.",
                clozeParts: ["Mein ", " liest viel."],
                clozeAnswers: ["Großvater"]
            } as Noun,
            {id: createWordId("person-familie-014"),
                wordType: 'noun',
                german: "Großeltern",
                article: "die",
                plural: "Großeltern",
                english: "grandparents",
                exampleGerman: [
                    {
    id: createWordId("person-familie-079"), text: "Meine Großeltern", case: "nominativ" },
                    {id: createWordId("person-familie-080"), text: " ", case: "none" },
                    {id: createWordId("person-familie-081"), text: "wohnen", case: "verb" },
                    {id: createWordId("person-familie-082"), text: " ", case: "none" },
                    {id: createWordId("person-familie-083"), text: "auf dem Land", case: "dativ" },
                    {id: createWordId("person-familie-084"), text: ".", case: "none" }
                ],
                exampleEnglish: "My grandparents live in the countryside.",
                clozeParts: ["Meine ", " wohnen auf dem Land."],
                clozeAnswers: ["Großeltern"]
            } as Noun,
            {id: createWordId("person-familie-015"),
                wordType: 'noun',
                german: "Partner/Partnerin",
                article: "der/die",
                plural: "Partner/Partnerinnen",
                english: "partner",
                exampleGerman: [
                    {
    id: createWordId("person-familie-085"), text: "Mein Partner", case: "nominativ" },
                    {id: createWordId("person-familie-086"), text: " ", case: "none" },
                    {id: createWordId("person-familie-087"), text: "kommt", case: "verb" },
                    {id: createWordId("person-familie-088"), text: " ", case: "none" },
                    {id: createWordId("person-familie-089"), text: "aus Italien", case: "dativ" },
                    {id: createWordId("person-familie-090"), text: ".", case: "none" }
                ],
                exampleEnglish: "My partner comes from Italy.",
                clozeParts: ["Mein ", " kommt aus Italien."],
                clozeAnswers: ["Partner"]
            } as Noun
        ],

        // --- SUB-TOPIC: Herkunft ---
        "Herkunft": [
            {id: createWordId("person-herkunft-001"),
                wordType: 'verb',
                german: "kommen (aus)",
                english: "to come (from)",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gekommen",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-001"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-herkunft-002"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-003"), text: "komme", case: "verb" },
                    {id: createWordId("person-herkunft-004"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-005"), text: "aus Deutschland", case: "dativ" },
                    {id: createWordId("person-herkunft-006"), text: ".", case: "none" }
                ],
                exampleEnglish: "I come from Germany.",
                clozeParts: ["Ich ", " aus Deutschland."],
                clozeAnswers: ["komme"]
            } as Verb,
            {id: createWordId("person-herkunft-002"),
                wordType: 'noun',
                german: "Land",
                article: "das",
                plural: "Länder",
                english: "country",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-007"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-herkunft-008"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-009"), text: "komme", case: "verb" },
                    {id: createWordId("person-herkunft-010"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-011"), text: "aus Deutschland", case: "dativ" },
                    {id: createWordId("person-herkunft-012"), text: ".", case: "none" }
                ],
                exampleEnglish: "I come from Germany.",
                clozeParts: ["Ich komme aus ", "."],
                clozeAnswers: ["Deutschland"]
            } as Noun,
            {id: createWordId("person-herkunft-003"),
                wordType: 'noun',
                german: "Stadt",
                article: "die",
                plural: "Städte",
                english: "city",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-013"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-herkunft-014"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-015"), text: "wohne", case: "verb" },
                    {id: createWordId("person-herkunft-016"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-017"), text: "in einer kleinen Stadt", case: "dativ" },
                    {id: createWordId("person-herkunft-018"), text: ".", case: "none" }
                ],
                exampleEnglish: "I live in a small city.",
                clozeParts: ["Ich wohne in einer kleinen ", "."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {id: createWordId("person-herkunft-004"),
                wordType: 'noun',
                german: "Nationalität",
                article: "die",
                plural: "Nationalitäten",
                english: "nationality",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-019"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-herkunft-020"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-021"), text: "bin", case: "verb" },
                    {id: createWordId("person-herkunft-022"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-023"), text: "Deutsche", case: "nominativ" },
                    {id: createWordId("person-herkunft-024"), text: ".", case: "none" }
                ],
                exampleEnglish: "I am German.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["Deutsche"]
            } as Noun,
            {id: createWordId("person-herkunft-005"),
                wordType: 'adjective',
                german: "deutsch",
                english: "German (adjective)",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-025"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-herkunft-026"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-027"), text: "spreche", case: "verb" },
                    {id: createWordId("person-herkunft-028"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-029"), text: "Deutsch", case: "akkusativ" },
                    {id: createWordId("person-herkunft-030"), text: ".", case: "none" }
                ],
                exampleEnglish: "I speak German.",
                clozeParts: ["Ich spreche ", "."],
                clozeAnswers: ["Deutsch"]
            } as Adjective,
            {id: createWordId("person-herkunft-006"),
                wordType: 'noun',
                german: "Deutschland",
                article: "das",
                plural: null,
                english: "Germany",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-031"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-herkunft-032"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-033"), text: "komme", case: "verb" },
                    {id: createWordId("person-herkunft-034"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-035"), text: "aus Deutschland", case: "dativ" },
                    {id: createWordId("person-herkunft-036"), text: ".", case: "none" }
                ],
                exampleEnglish: "I come from Germany.",
                clozeParts: ["Ich komme aus ", "."],
                clozeAnswers: ["Deutschland"]
            } as Noun,
            {id: createWordId("person-herkunft-007"),
                wordType: 'noun',
                german: "Italien",
                article: "das",
                plural: null,
                english: "Italy",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-037"), text: "Er", case: "nominativ" },
                    {id: createWordId("person-herkunft-038"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-039"), text: "ist", case: "verb" },
                    {id: createWordId("person-herkunft-040"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-041"), text: "Italiener", case: "nominativ" },
                    {id: createWordId("person-herkunft-042"), text: ".", case: "none" }
                ],
                exampleEnglish: "He is Italian.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["Italiener"]
            } as Noun,
            {id: createWordId("person-herkunft-008"),
                wordType: 'noun',
                german: "Italiener/Italienerin",
                article: "der/die",
                plural: "Italiener/Italienerinnen",
                english: "Italian (person)",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-043"), text: "Er", case: "nominativ" },
                    {id: createWordId("person-herkunft-044"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-045"), text: "ist", case: "verb" },
                    {id: createWordId("person-herkunft-046"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-047"), text: "Italiener", case: "nominativ" },
                    {id: createWordId("person-herkunft-048"), text: ".", case: "none" }
                ],
                exampleEnglish: "He is Italian.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["Italiener"]
            } as Noun,
            {id: createWordId("person-herkunft-009"),
                wordType: 'adjective',
                german: "italienisch",
                english: "Italian (adjective)",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-049"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-herkunft-050"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-051"), text: "spreche", case: "verb" },
                    {id: createWordId("person-herkunft-052"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-053"), text: "italienisch", case: "none" },
                    {id: createWordId("person-herkunft-054"), text: ".", case: "none" }
                ],
                exampleEnglish: "I speak Italian.",
                clozeParts: ["Ich spreche ", "."],
                clozeAnswers: ["italienisch"]
            } as Adjective,
            {id: createWordId("person-herkunft-010"),
                wordType: 'noun',
                german: "Türkei",
                article: "die",
                plural: null,
                english: "Turkey",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-055"), text: "Sie", case: "nominativ" },
                    {id: createWordId("person-herkunft-056"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-057"), text: "kommt", case: "verb" },
                    {id: createWordId("person-herkunft-058"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-059"), text: "aus der Türkei", case: "dativ" },
                    {id: createWordId("person-herkunft-060"), text: ".", case: "none" }
                ],
                exampleEnglish: "She comes from Turkey.",
                clozeParts: ["Sie kommt aus der ", "."],
                clozeAnswers: ["Türkei"]
            } as Noun,
            {id: createWordId("person-herkunft-011"),
                wordType: 'noun',
                german: "Türke/Türkin",
                article: "der/die",
                plural: "Türken/Türkinnen",
                english: "Turk (person)",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-061"), text: "Er", case: "nominativ" },
                    {id: createWordId("person-herkunft-062"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-063"), text: "ist", case: "verb" },
                    {id: createWordId("person-herkunft-064"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-065"), text: "Türke", case: "nominativ" },
                    {id: createWordId("person-herkunft-066"), text: ".", case: "none" }
                ],
                exampleEnglish: "He is Turkish.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["Türke"]
            } as Noun,
            {id: createWordId("person-herkunft-012"),
                wordType: 'adjective',
                german: "türkisch",
                english: "Turkish (adjective)",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-067"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-herkunft-068"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-069"), text: "spreche", case: "verb" },
                    {id: createWordId("person-herkunft-070"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-071"), text: "türkisch", case: "none" },
                    {id: createWordId("person-herkunft-072"), text: ".", case: "none" }
                ],
                exampleEnglish: "I speak Turkish.",
                clozeParts: ["Ich spreche ", "."],
                clozeAnswers: ["türkisch"]
            } as Adjective,
            {id: createWordId("person-herkunft-013"),
                wordType: 'noun',
                german: "Europa",
                article: "das",
                plural: null,
                english: "Europe",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-073"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-herkunft-074"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-075"), text: "bin", case: "verb" },
                    {id: createWordId("person-herkunft-076"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-077"), text: "Europäer", case: "nominativ" },
                    {id: createWordId("person-herkunft-078"), text: ".", case: "none" }
                ],
                exampleEnglish: "I am European.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["Europäer"]
            } as Noun,
            {id: createWordId("person-herkunft-014"),
                wordType: 'adjective',
                german: "europäisch",
                english: "European (adjective)",
                exampleGerman: [
                    {
    id: createWordId("person-herkunft-079"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-herkunft-080"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-081"), text: "bin", case: "verb" },
                    {id: createWordId("person-herkunft-082"), text: " ", case: "none" },
                    {id: createWordId("person-herkunft-083"), text: "Europäer", case: "nominativ" },
                    {id: createWordId("person-herkunft-084"), text: ".", case: "none" }
                ],
                exampleEnglish: "I am European.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["Europäer"]
            } as Adjective
        ],

        // --- SUB-TOPIC: Schule ---
        "Schule": [
            {id: createWordId("person-schule-001"),
                wordType: 'noun',
                german: "Schule",
                article: "die",
                plural: "Schulen",
                english: "school",
                exampleGerman: [
                    {
    id: createWordId("person-schule-001"), text: "Wir", case: "nominativ" },
                    {id: createWordId("person-schule-002"), text: " ", case: "none" },
                    {id: createWordId("person-schule-003"), text: "haben", case: "verb" },
                    {id: createWordId("person-schule-004"), text: " ", case: "none" },
                    {id: createWordId("person-schule-005"), text: "bis ein Uhr", case: "none" },
                    {id: createWordId("person-schule-006"), text: " ", case: "none" },
                    {id: createWordId("person-schule-007"), text: "Unterricht", case: "akkusativ" },
                    {id: createWordId("person-schule-008"), text: ".", case: "none" }
                ],
                exampleEnglish: "We have lessons until one o'clock.",
                clozeParts: ["Wir haben bis ein Uhr ", "."],
                clozeAnswers: ["Unterricht"]
            } as Noun,
            {id: createWordId("person-schule-002"),
                wordType: 'noun',
                german: "Schüler/Schülerin",
                article: "der/die",
                plural: "Schüler/Schülerinnen",
                english: "student (male/female)",
                exampleGerman: [
                    {
    id: createWordId("person-schule-009"), text: "Die Schüler", case: "nominativ" },
                    {id: createWordId("person-schule-010"), text: " ", case: "none" },
                    {id: createWordId("person-schule-011"), text: "sind", case: "verb" },
                    {id: createWordId("person-schule-012"), text: " ", case: "none" },
                    {id: createWordId("person-schule-013"), text: "freundlich", case: "none" },
                    {id: createWordId("person-schule-014"), text: ".", case: "none" }
                ],
                exampleEnglish: "The students are friendly.",
                clozeParts: ["Die ", " sind freundlich."],
                clozeAnswers: ["Schüler"]
            } as Noun,
            {id: createWordId("person-schule-003"),
                wordType: 'noun',
                german: "Lehrer/Lehrerin",
                article: "der/die",
                plural: "Lehrer/Lehrerinnen",
                english: "teacher (male/female)",
                exampleGerman: [
                    {
    id: createWordId("person-schule-015"), text: "Der Lehrer", case: "nominativ" },
                    {id: createWordId("person-schule-016"), text: " ", case: "none" },
                    {id: createWordId("person-schule-017"), text: "ist", case: "verb" },
                    {id: createWordId("person-schule-018"), text: " ", case: "none" },
                    {id: createWordId("person-schule-019"), text: "freundlich", case: "none" },
                    {id: createWordId("person-schule-020"), text: ".", case: "none" }
                ],
                exampleEnglish: "The teacher is friendly.",
                clozeParts: ["Der ", " ist freundlich."],
                clozeAnswers: ["Lehrer"]
            } as Noun,
            {id: createWordId("person-schule-004"),
                wordType: 'noun',
                german: "Klasse",
                article: "die",
                plural: "Klassen",
                english: "class",
                exampleGerman: [
                    {
    id: createWordId("person-schule-021"), text: "In unserer Klasse", case: "dativ" },
                    {id: createWordId("person-schule-022"), text: " ", case: "none" },
                    {id: createWordId("person-schule-023"), text: "sind", case: "verb" },
                    {id: createWordId("person-schule-024"), text: " ", case: "none" },
                    {id: createWordId("person-schule-025"), text: "20 Schüler", case: "nominativ" },
                    {id: createWordId("person-schule-026"), text: ".", case: "none" }
                ],
                exampleEnglish: "There are 20 students in our class.",
                clozeParts: ["In unserer ", " sind 20 Schüler."],
                clozeAnswers: ["Klasse"]
            } as Noun,
            {id: createWordId("person-schule-005"),
                wordType: 'verb',
                german: "lernen",
                english: "to learn",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                exampleGerman: [
                    {
    id: createWordId("person-schule-027"), text: "Wir", case: "nominativ" },
                    {id: createWordId("person-schule-028"), text: " ", case: "none" },
                    {id: createWordId("person-schule-029"), text: "lernen", case: "verb" },
                    {id: createWordId("person-schule-030"), text: " ", case: "none" },
                    {id: createWordId("person-schule-031"), text: "Deutsch", case: "akkusativ" },
                    {id: createWordId("person-schule-032"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are learning German.",
                clozeParts: ["Wir ", " Deutsch."],
                clozeAnswers: ["lernen"]
            } as Verb,
            {id: createWordId("person-schule-006"),
                wordType: 'noun',
                german: "Hausaufgabe",
                article: "die",
                plural: "Hausaufgaben",
                english: "homework",
                exampleGerman: [
                    {
    id: createWordId("person-schule-033"), text: "Die Hausaufgaben", case: "nominativ" },
                    {id: createWordId("person-schule-034"), text: " ", case: "none" },
                    {id: createWordId("person-schule-035"), text: "sind", case: "verb" },
                    {id: createWordId("person-schule-036"), text: " ", case: "none" },
                    {id: createWordId("person-schule-037"), text: "einfach", case: "none" },
                    {id: createWordId("person-schule-038"), text: ".", case: "none" }
                ],
                exampleEnglish: "The homework is easy.",
                clozeParts: ["Die ", " sind einfach."],
                clozeAnswers: ["Hausaufgaben"]
            } as Noun,
            {id: createWordId("person-schule-007"),
                wordType: 'noun',
                german: "Unterricht",
                article: "der",
                plural: null,
                english: "lesson / class",
                exampleGerman: [
                    {
    id: createWordId("person-schule-039"), text: "Wir", case: "nominativ" },
                    {id: createWordId("person-schule-040"), text: " ", case: "none" },
                    {id: createWordId("person-schule-041"), text: "haben", case: "verb" },
                    {id: createWordId("person-schule-042"), text: " ", case: "none" },
                    {id: createWordId("person-schule-043"), text: "bis ein Uhr", case: "none" },
                    {id: createWordId("person-schule-044"), text: " ", case: "none" },
                    {id: createWordId("person-schule-045"), text: "Unterricht", case: "akkusativ" },
                    {id: createWordId("person-schule-046"), text: ".", case: "none" }
                ],
                exampleEnglish: "We have lessons until one o'clock.",
                clozeParts: ["Wir haben bis ein Uhr ", "."],
                clozeAnswers: ["Unterricht"]
            } as Noun,
            {id: createWordId("person-schule-008"),
                wordType: 'noun',
                german: "Prüfung",
                article: "die",
                plural: "Prüfungen",
                english: "exam",
                exampleGerman: [
                    {
    id: createWordId("person-schule-047"), text: "Die Prüfung", case: "nominativ" },
                    {id: createWordId("person-schule-048"), text: " ", case: "none" },
                    {id: createWordId("person-schule-049"), text: "war", case: "verb" },
                    {id: createWordId("person-schule-050"), text: " ", case: "none" },
                    {id: createWordId("person-schule-051"), text: "schwer", case: "none" },
                    {id: createWordId("person-schule-052"), text: ".", case: "none" }
                ],
                exampleEnglish: "The exam was difficult.",
                clozeParts: ["Die ", " war schwer."],
                clozeAnswers: ["Prüfung"]
            } as Noun,
            {id: createWordId("person-schule-009"),
                wordType: 'noun',
                german: "Test",
                article: "der",
                plural: "Tests",
                english: "test",
                exampleGerman: [
                    {
    id: createWordId("person-schule-053"), text: "Wir", case: "nominativ" },
                    {id: createWordId("person-schule-054"), text: " ", case: "none" },
                    {id: createWordId("person-schule-055"), text: "schreiben", case: "verb" },
                    {id: createWordId("person-schule-056"), text: " ", case: "none" },
                    {id: createWordId("person-schule-057"), text: "einen Test", case: "akkusativ" },
                    {id: createWordId("person-schule-058"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are writing a test.",
                clozeParts: ["Wir schreiben einen ", "."],
                clozeAnswers: ["Test"]
            } as Noun,
            {id: createWordId("person-schule-010"),
                wordType: 'noun',
                german: "Wörterbuch",
                article: "das",
                plural: "Wörterbücher",
                english: "dictionary",
                exampleGerman: [
                    {
    id: createWordId("person-schule-059"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-schule-060"), text: " ", case: "none" },
                    {id: createWordId("person-schule-061"), text: "brauche", case: "verb" },
                    {id: createWordId("person-schule-062"), text: " ", case: "none" },
                    {id: createWordId("person-schule-063"), text: "ein Wörterbuch", case: "akkusativ" },
                    {id: createWordId("person-schule-064"), text: " ", case: "none" },
                    {id: createWordId("person-schule-065"), text: "benutzen", case: "verb" },
                    {id: createWordId("person-schule-066"), text: ".", case: "none" }
                ],
                exampleEnglish: "I need a dictionary.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Wörterbuch"]
            } as Noun
        ],

        // --- SUB-TOPIC: Aussehen ---
        "Aussehen": [
            {id: createWordId("person-aussehen-001"),
                wordType: 'verb',
                german: "aussehen",
                english: "to look / to appear",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "ausgesehen",
                exampleGerman: [
                    {
    id: createWordId("person-aussehen-001"), text: "Das Buch", case: "nominativ" },
                    {id: createWordId("person-aussehen-002"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-003"), text: "sieht", case: "verb" },
                    {id: createWordId("person-aussehen-004"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-005"), text: "sehr interessant", case: "none" },
                    {id: createWordId("person-aussehen-006"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-007"), text: "aus", case: "verb" },
                    {id: createWordId("person-aussehen-008"), text: ".", case: "none" }
                ],
                exampleEnglish: "The book looks very interesting.",
                clozeParts: ["Das Buch sieht sehr interessant ", "."],
                clozeAnswers: ["aus"]
            } as Verb,
            {id: createWordId("person-aussehen-002"),
                wordType: 'adjective',
                german: "hübsch",
                english: "pretty / handsome",
                exampleGerman: [
                    {
    id: createWordId("person-aussehen-009"), text: "Du", case: "nominativ" },
                    {id: createWordId("person-aussehen-010"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-011"), text: "siehst", case: "verb" },
                    {id: createWordId("person-aussehen-012"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-013"), text: "heute", case: "none" },
                    {id: createWordId("person-aussehen-014"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-015"), text: "hübsch", case: "none" },
                    {id: createWordId("person-aussehen-016"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-017"), text: "aus", case: "verb" },
                    {id: createWordId("person-aussehen-018"), text: ".", case: "none" }
                ],
                exampleEnglish: "You look pretty today.",
                clozeParts: ["Du siehst heute ", " aus."],
                clozeAnswers: ["hübsch"]
            } as Adjective,
            {id: createWordId("person-aussehen-003"),
                wordType: 'adjective',
                german: "dick",
                english: "fat / thick",
                exampleGerman: [
                    {
    id: createWordId("person-aussehen-019"), text: "Ich", case: "nominativ" },
                    {id: createWordId("person-aussehen-020"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-021"), text: "bin", case: "verb" },
                    {id: createWordId("person-aussehen-022"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-023"), text: "leider", case: "none" },
                    {id: createWordId("person-aussehen-024"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-025"), text: "sehr dick", case: "none" },
                    {id: createWordId("person-aussehen-026"), text: ".", case: "none" }
                ],
                exampleEnglish: "Unfortunately, I am very fat.",
                clozeParts: ["Ich bin leider sehr ", "."],
                clozeAnswers: ["dick"]
            } as Adjective,
            {id: createWordId("person-aussehen-004"),
                wordType: 'adjective',
                german: "groß",
                english: "tall / big",
                exampleGerman: [
                    {
    id: createWordId("person-aussehen-027"), text: "Mein Bruder", case: "nominativ" },
                    {id: createWordId("person-aussehen-028"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-029"), text: "ist", case: "verb" },
                    {id: createWordId("person-aussehen-030"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-031"), text: "sehr groß", case: "none" },
                    {id: createWordId("person-aussehen-032"), text: ".", case: "none" }
                ],
                exampleEnglish: "My brother is very tall.",
                clozeParts: ["Mein Bruder ist sehr ", "."],
                clozeAnswers: ["groß"]
            } as Adjective,
            {id: createWordId("person-aussehen-005"),
                wordType: 'adjective',
                german: "klein",
                english: "small / short",
                exampleGerman: [
                    {
    id: createWordId("person-aussehen-033"), text: "Meine Schwester", case: "nominativ" },
                    {id: createWordId("person-aussehen-034"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-035"), text: "ist", case: "verb" },
                    {id: createWordId("person-aussehen-036"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-037"), text: "noch klein", case: "none" },
                    {id: createWordId("person-aussehen-038"), text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still small.",
                clozeParts: ["Meine Schwester ist noch ", "."],
                clozeAnswers: ["klein"]
            } as Adjective,
            {id: createWordId("person-aussehen-006"),
                wordType: 'adjective',
                german: "jung",
                english: "young",
                exampleGerman: [
                    {
    id: createWordId("person-aussehen-039"), text: "Meine Schwester", case: "nominativ" },
                    {id: createWordId("person-aussehen-040"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-041"), text: "ist", case: "verb" },
                    {id: createWordId("person-aussehen-042"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-043"), text: "noch sehr jung", case: "none" },
                    {id: createWordId("person-aussehen-044"), text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still very young.",
                clozeParts: ["Meine Schwester ist noch sehr ", "."],
                clozeAnswers: ["jung"]
            } as Adjective,
            {id: createWordId("person-aussehen-007"),
                wordType: 'adjective',
                german: "alt",
                english: "old",
                exampleGerman: [
                    {
    id: createWordId("person-aussehen-045"), text: "Wie", case: "none" },
                    {id: createWordId("person-aussehen-046"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-047"), text: "alt", case: "none" },
                    {id: createWordId("person-aussehen-048"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-049"), text: "bist", case: "verb" },
                    {id: createWordId("person-aussehen-050"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-051"), text: "du", case: "nominativ" },
                    {id: createWordId("person-aussehen-052"), text: "?", case: "none" }
                ],
                exampleEnglish: "How old are you?",
                clozeParts: ["Wie ", " bist du?"],
                clozeAnswers: ["alt"]
            } as Adjective,
            {id: createWordId("person-aussehen-008"),
                wordType: 'noun',
                german: "Auge",
                article: "das",
                plural: "Augen",
                english: "eye",
                exampleGerman: [
                    {
    id: createWordId("person-aussehen-053"), text: "Seine Augen", case: "nominativ" },
                    {id: createWordId("person-aussehen-054"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-055"), text: "sind", case: "verb" },
                    {id: createWordId("person-aussehen-056"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-057"), text: "grün", case: "none" },
                    {id: createWordId("person-aussehen-058"), text: ".", case: "none" }
                ],
                exampleEnglish: "His eyes are green.",
                clozeParts: ["Seine ", " sind grün."],
                clozeAnswers: ["Augen"]
            } as Noun,
            {id: createWordId("person-aussehen-009"),
                wordType: 'noun',
                german: "Haar",
                article: "das",
                plural: "Haare",
                english: "hair",
                exampleGerman: [
                    {
    id: createWordId("person-aussehen-059"), text: "Sie", case: "nominativ" },
                    {id: createWordId("person-aussehen-060"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-061"), text: "hat", case: "verb" },
                    {id: createWordId("person-aussehen-062"), text: " ", case: "none" },
                    {id: createWordId("person-aussehen-063"), text: "lange Haare", case: "akkusativ" },
                    {id: createWordId("person-aussehen-064"), text: ".", case: "none" }
                ],
                exampleEnglish: "She has long hair.",
                clozeParts: ["Sie hat lange ", "."],
                clozeAnswers: ["Haare"]
            } as Noun
        ],

        // --- SUB-TOPIC: Gewohnheiten, Tagesablauf ---
        "Gewohnheiten, Tagesablauf": [
            {id: createWordId("person-gewohnheiten-001"),
                wordType: 'verb',
                german: "aufstehen",
                english: "to get up",
                separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "aufgestanden",
                exampleGerman: [
                    {
    id: createWordId("person-gewohnheiten-tagesab-001"), text: "Um acht Uhr", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-002"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-003"), text: "stehen", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-004"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-005"), text: "wir", case: "nominativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-006"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-007"), text: "auf", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-008"), text: ".", case: "none" }
                ],
                exampleEnglish: "We get up at eight o'clock.",
                clozeParts: ["Um acht Uhr stehen wir ", "."],
                clozeAnswers: ["auf"]
            } as Verb,
            {id: createWordId("person-gewohnheiten-002"),
                wordType: 'verb',
                german: "frühstücken",
                english: "to have breakfast",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefrühstückt",
                exampleGerman: [
                    {
    id: createWordId("person-gewohnheiten-tagesab-009"), text: "Wir", case: "nominativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-010"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-011"), text: "frühstücken", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-012"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-013"), text: "nicht zusammen", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-014"), text: ".", case: "none" }
                ],
                exampleEnglish: "We don't have breakfast together.",
                clozeParts: ["Wir ", " nicht zusammen."],
                clozeAnswers: ["frühstücken"]
            } as Verb,
            {id: createWordId("person-gewohnheiten-003"),
                wordType: 'verb',
                german: "arbeiten",
                english: "to work",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gearbeitet",
                exampleGerman: [
                    {
    id: createWordId("person-gewohnheiten-tagesab-015"), text: "Mein Vater", case: "nominativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-016"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-017"), text: "arbeitet", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-018"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-019"), text: "bei einer Autofirma", case: "dativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-020"), text: ".", case: "none" }
                ],
                exampleEnglish: "My father works at a car company.",
                clozeParts: ["Mein Vater ", " bei einer Autofirma."],
                clozeAnswers: ["arbeitet"]
            } as Verb,
            {id: createWordId("person-gewohnheiten-004"),
                wordType: 'verb',
                german: "lernen",
                english: "to learn",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                exampleGerman: [
                    {
    id: createWordId("person-gewohnheiten-tagesab-021"), text: "Wir", case: "nominativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-022"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-023"), text: "lernen", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-024"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-025"), text: "Deutsch", case: "akkusativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-026"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are learning German.",
                clozeParts: ["Wir ", " Deutsch."],
                clozeAnswers: ["lernen"]
            } as Verb,
            {id: createWordId("person-gewohnheiten-005"),
                wordType: 'verb',
                german: "fernsehen",
                english: "to watch TV",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "ferngesehen",
                exampleGerman: [
                    {
    id: createWordId("person-gewohnheiten-tagesab-027"), text: "Siehst", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-028"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-029"), text: "du", case: "nominativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-030"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-031"), text: "viel", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-032"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-033"), text: "fern", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-034"), text: "?", case: "none" }
                ],
                exampleEnglish: "Do you watch a lot of TV?",
                clozeParts: ["Siehst du viel ", "?"],
                clozeAnswers: ["fern"]
            } as Verb,
            {id: createWordId("person-gewohnheiten-006"),
                wordType: 'verb',
                german: "schlafen",
                english: "to sleep",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschlafen",
                exampleGerman: [
                    {
    id: createWordId("person-gewohnheiten-tagesab-035"), text: "Wann", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-036"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-037"), text: "gehst", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-038"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-039"), text: "du", case: "nominativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-040"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-041"), text: "ins Bett", case: "akkusativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-042"), text: "?", case: "none" }
                ],
                exampleEnglish: "When do you go to bed?",
                clozeParts: ["Wann gehst du ins ", "?"],
                clozeAnswers: ["Bett"]
            } as Verb,
            {id: createWordId("person-gewohnheiten-007"),
                wordType: 'verb',
                german: "ins Bett gehen",
                english: "to go to bed",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gegangen",
                exampleGerman: [
                    {
    id: createWordId("person-gewohnheiten-tagesab-043"), text: "Wann", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-044"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-045"), text: "gehst", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-046"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-047"), text: "du", case: "nominativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-048"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-049"), text: "ins Bett", case: "akkusativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-050"), text: "?", case: "none" }
                ],
                exampleEnglish: "When do you go to bed?",
                clozeParts: ["Wann gehst du ", "?"],
                clozeAnswers: ["ins Bett"]
            } as Verb,
            {id: createWordId("person-gewohnheiten-008"),
                wordType: 'verb',
                german: "bleiben",
                english: "to stay",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geblieben",
                exampleGerman: [
                    {
    id: createWordId("person-gewohnheiten-tagesab-051"), text: "Wir", case: "nominativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-052"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-053"), text: "bleiben", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-054"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-055"), text: "zu Hause", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-056"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are staying at home.",
                clozeParts: ["Wir ", " zu Hause."],
                clozeAnswers: ["bleiben"]
            } as Verb,
            {id: createWordId("person-gewohnheiten-009"),
                wordType: 'adjective',
                german: "früh",
                english: "early",
                exampleGerman: [
                    {
    id: createWordId("person-gewohnheiten-tagesab-057"), text: "Wir", case: "nominativ" },
                    {id: createWordId("person-gewohnheiten-tagesab-058"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-059"), text: "stehen", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-060"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-061"), text: "immer", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-062"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-063"), text: "früh", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-064"), text: " ", case: "none" },
                    {id: createWordId("person-gewohnheiten-tagesab-065"), text: "auf", case: "verb" },
                    {id: createWordId("person-gewohnheiten-tagesab-066"), text: ".", case: "none" }
                ],
                exampleEnglish: "We always get up early.",
                clozeParts: ["Wir stehen immer ", " auf."],
                clozeAnswers: ["früh"]
            } as Adjective
        ]
    }
});

// Export utility functions for easy access
export const getPersonVocabularyStats = () => {
    const stats = {
        totalWords: 0,
        wordsByType: {} as Record<string, number>,
        subTopics: Object.keys(vokabularPerson.Person)
    };

    Object.values(vokabularPerson.Person).forEach(subTopic => {
        stats.totalWords += subTopic.length;
        subTopic.forEach(word => {
            stats.wordsByType[word.wordType] = (stats.wordsByType[word.wordType] || 0) + 1;
        });
    });

    return stats;
};

// Export for easy usage in components
export default vokabularPerson;