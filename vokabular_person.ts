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

export const vokabularPerson: VocabularyStructure = createVocabulary({
    "Person": {
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
                    { text: "Wie", case: "none" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dein Name", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What is your name?",
                clozeParts: ["Wie ist dein ", "?"],
                clozeAnswers: ["Name"]
            } as Noun,
            {
                id: createWordId("person-name-002"),
                wordType: 'noun',
                german: "Familienname",
                article: "der",
                plural: "Familiennamen",
                english: "family name / surname",
                exampleGerman: [
                    { text: "Mein Familienname", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Schmidt", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My family name is Schmidt.",
                clozeParts: ["Mein ", " ist Schmidt."],
                clozeAnswers: ["Familienname"]
            } as Noun,
            {
                id: createWordId("person-name-003"),
                wordType: 'noun',
                german: "Vorname",
                article: "der",
                plural: "Vornamen",
                english: "first name",
                exampleGerman: [
                    { text: "Mein Vorname", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Anna", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My first name is Anna.",
                clozeParts: ["Mein ", " ist Anna."],
                clozeAnswers: ["Vorname"]
            } as Noun,
            {
                id: createWordId("person-name-004"),
                wordType: 'verb',
                german: "heißen",
                english: "to be called",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geheißen",
                exampleGerman: [
                    { text: "Wie", case: "none" },
                    { text: " ", case: "none" },
                    { text: "heißt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What are you called?",
                clozeParts: ["Wie ", " du?"],
                clozeAnswers: ["heißt"]
            } as Verb
        ],

        // --- SUB-TOPIC: Adresse ---
        "Adresse": [
            {
                id: createWordId("person-adresse-001"),
                wordType: 'noun',
                german: "Adresse",
                article: "die",
                plural: "Adressen",
                english: "address",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "weiß", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die Adresse", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "nicht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I don't know the address.",
                clozeParts: ["Ich weiß die ", " nicht."],
                clozeAnswers: ["Adresse"]
            } as Noun,
            {
                id: createWordId("person-adresse-002"),
                wordType: 'noun',
                german: "Straße",
                article: "die",
                plural: "Straßen",
                english: "street",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wohne", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in der Bahnhofstraße", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I live on Bahnhofstraße.",
                clozeParts: ["Ich wohne in der ", "."],
                clozeAnswers: ["Bahnhofstraße"]
            } as Noun,
            {
                id: createWordId("person-adresse-003"),
                wordType: 'noun',
                german: "Haus",
                article: "das",
                plural: "Häuser",
                english: "house",
                exampleGerman: [
                    { text: "Unser Haus", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sehr alt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Our house is very old.",
                clozeParts: ["Unser ", " ist sehr alt."],
                clozeAnswers: ["Haus"]
            } as Noun,
            {
                id: createWordId("person-adresse-004"),
                wordType: 'noun',
                german: "Wohnung",
                article: "die",
                plural: "Wohnungen",
                english: "apartment",
                exampleGerman: [
                    { text: "Unsere Wohnung", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im ersten Stock", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Our apartment is on the first floor.",
                clozeParts: ["Unsere ", " ist im ersten Stock."],
                clozeAnswers: ["Wohnung"]
            } as Noun,
            {
                id: createWordId("person-adresse-005"),
                wordType: 'noun',
                german: "Nummer",
                article: "die",
                plural: "Nummern",
                english: "number",
                exampleGerman: [
                    { text: "Meine Hausnummer", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "12", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My house number is 12.",
                clozeParts: ["Meine Haus", " ist 12."],
                clozeAnswers: ["nummer"]
            } as Noun,
            {
                id: createWordId("person-adresse-006"),
                wordType: 'noun',
                german: "Stadt",
                article: "die",
                plural: "Städte",
                english: "city",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wohne", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in einer kleinen Stadt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I live in a small city.",
                clozeParts: ["Ich wohne in einer kleinen ", "."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {
                id: createWordId("person-adresse-007"),
                wordType: 'noun',
                german: "PLZ (Postleitzahl)",
                article: "die",
                plural: "PLZs (Postleitzahlen)",
                english: "postal code",
                exampleGerman: [
                    { text: "Meine Postleitzahl", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "80331", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My postal code is 80331.",
                clozeParts: ["Meine ", " ist 80331."],
                clozeAnswers: ["Postleitzahl"]
            } as Noun,
            {
                id: createWordId("person-adresse-008"),
                wordType: 'noun',
                german: "Land",
                article: "das",
                plural: "Länder",
                english: "country",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "komme", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "aus Deutschland", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I come from Germany.",
                clozeParts: ["Ich komme aus ", "."],
                clozeAnswers: ["Deutschland"]
            } as Noun
        ],

        // --- SUB-TOPIC: Telefon ---
        "Telefon": [
            {
                id: createWordId("person-telefon-001"),
                wordType: 'noun',
                german: "Telefon",
                article: "das",
                plural: "Telefone",
                english: "telephone",
                exampleGerman: [
                    { text: "Mein Telefon", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "kaputt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My telephone is broken.",
                clozeParts: ["Mein ", " ist kaputt."],
                clozeAnswers: ["Telefon"]
            } as Noun,
            {
                id: createWordId("person-telefon-002"),
                wordType: 'noun',
                german: "Handy",
                article: "das",
                plural: "Handys",
                english: "mobile phone",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein neues Handy", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have a new mobile phone.",
                clozeParts: ["Ich habe ein neues ", "."],
                clozeAnswers: ["Handy"]
            } as Noun,
            {
                id: createWordId("person-telefon-003"),
                wordType: 'verb',
                german: "anrufen",
                english: "to call (by phone)",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "angerufen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "rufe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dich", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "morgen", case: "none" },
                    { text: " ", case: "none" },
                    { text: "an", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I will call you tomorrow.",
                clozeParts: ["Ich rufe dich morgen ", "."],
                clozeAnswers: ["an"]
            } as Verb,
            {
                id: createWordId("person-telefon-004"),
                wordType: 'noun',
                german: "Anruf",
                article: "der",
                plural: "Anrufe",
                english: "call (noun)",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "warte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dann", case: "none" },
                    { text: " ", case: "none" },
                    { text: "auf deinen Anruf", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "–", case: "none" },
                    { text: " ", case: "none" },
                    { text: "okay", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "I'll wait for your call then – okay?",
                clozeParts: ["Ich warte dann auf deinen ", " – okay?"],
                clozeAnswers: ["Anruf"]
            } as Noun,
            {
                id: createWordId("person-telefon-005"),
                wordType: 'noun',
                german: "Anrufbeantworter",
                article: "der",
                plural: "Anrufbeantworter",
                english: "answering machine",
                exampleGerman: [
                    { text: "Sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Nachrichten", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "auf dem Anrufbeantworter", case: "dativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Are there messages on the answering machine?",
                clozeParts: ["Sind Nachrichten auf dem ", "?"],
                clozeAnswers: ["Anrufbeantworter"]
            } as Noun,
            {
                id: createWordId("person-telefon-006"),
                wordType: 'noun',
                german: "Nummer",
                article: "die",
                plural: "Nummern",
                english: "number",
                exampleGerman: [
                    { text: "Wie", case: "none" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "deine Telefonnummer", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What is your phone number?",
                clozeParts: ["Wie ist deine Telefon", "?"],
                clozeAnswers: ["nummer"]
            } as Noun
        ],

        // --- SUB-TOPIC: Geburtstag ---
        "Geburtstag": [
            {
                id: createWordId("person-geburtstag-001"),
                wordType: 'noun',
                german: "Geburtstag",
                article: "der",
                plural: "Geburtstage",
                english: "birthday",
                exampleGerman: [
                    { text: "Wann", case: "none" },
                    { text: " ", case: "none" },
                    { text: "hast", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Geburtstag", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "When is your birthday?",
                clozeParts: ["Wann hast du ", "?"],
                clozeAnswers: ["Geburtstag"]
            } as Noun,
            {
                id: createWordId("person-geburtstag-002"),
                wordType: 'verb',
                german: "bekommen",
                english: "to get / to receive",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bekommen",
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "bekommst", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "zum Geburtstag", case: "dativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What do you get for your birthday?",
                clozeParts: ["Was ", " du zum Geburtstag?"],
                clozeAnswers: ["bekommst"]
            } as Verb,
            {
                id: createWordId("person-geburtstag-003"),
                wordType: 'verb',
                german: "einladen",
                english: "to invite",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingeladen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "lade", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dich", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "ein", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I invite you.",
                clozeParts: ["Ich lade dich ", "."],
                clozeAnswers: ["ein"]
            } as Verb,
            {
                id: createWordId("person-geburtstag-004"),
                wordType: 'noun',
                german: "Einladung",
                article: "die",
                plural: "Einladungen",
                english: "invitation",
                exampleGerman: [
                    { text: "Das", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine Einladung", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "zur Geburtstagsparty", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "This is an invitation to the birthday party.",
                clozeParts: ["Das ist eine ", " zur Geburtstagsparty."],
                clozeAnswers: ["Einladung"]
            } as Noun,
            {
                id: createWordId("person-geburtstag-005"),
                wordType: 'verb',
                german: "feiern",
                english: "to celebrate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefeiert",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "feiern", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meinen Geburtstag", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are celebrating my birthday.",
                clozeParts: ["Wir ", " meinen Geburtstag."],
                clozeAnswers: ["feiern"]
            } as Verb
        ],

        // --- SUB-TOPIC: Alter ---
        "Alter": [
            {
                id: createWordId("person-alter-001"),
                wordType: 'adjective',
                german: "alt",
                english: "old",
                exampleGerman: [
                    { text: "Wie", case: "none" },
                    { text: " ", case: "none" },
                    { text: "alt", case: "none" },
                    { text: " ", case: "none" },
                    { text: "bist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "How old are you?",
                clozeParts: ["Wie ", " bist du?"],
                clozeAnswers: ["alt"]
            } as Adjective,
            {
                id: createWordId("person-alter-002"),
                wordType: 'noun',
                german: "Alter",
                article: "das",
                plural: null,
                english: "age",
                exampleGerman: [
                    { text: "Das", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sein", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Alter", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "That is his age.",
                clozeParts: ["Das ist sein ", "."],
                clozeAnswers: ["Alter"]
            } as Noun,
            {
                id: createWordId("person-alter-003"),
                wordType: 'adjective',
                german: "jung",
                english: "young",
                exampleGerman: [
                    { text: "Meine Schwester", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "noch sehr jung", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still very young.",
                clozeParts: ["Meine Schwester ist noch sehr ", "."],
                clozeAnswers: ["jung"]
            } as Adjective
        ],

        // --- SUB-TOPIC: Geschlecht ---
        "Geschlecht": [
            {
                id: createWordId("person-geschlecht-001"),
                wordType: 'adjective',
                german: "männlich",
                english: "male",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "männlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He is male.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["männlich"]
            } as Adjective,
            {
                id: createWordId("person-geschlecht-002"),
                wordType: 'adjective',
                german: "weiblich",
                english: "female",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "weiblich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She is female.",
                clozeParts: ["Sie ist ", "."],
                clozeAnswers: ["weiblich"]
            } as Adjective,
            {
                id: createWordId("person-geschlecht-003"),
                wordType: 'noun',
                german: "Herr",
                article: "der",
                plural: "Herren",
                english: "Mr.",
                exampleGerman: [
                    { text: "Guten Tag", case: "none" },
                    { text: ",", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Herr Müller", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Good day, Mr. Müller!",
                clozeParts: ["Guten Tag, ", " Müller!"],
                clozeAnswers: ["Herr"]
            } as Noun,
            {
                id: createWordId("person-geschlecht-004"),
                wordType: 'noun',
                german: "Frau",
                article: "die",
                plural: "Frauen",
                english: "Ms./Mrs.",
                exampleGerman: [
                    { text: "Das", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Frau Bergner", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "This is Ms./Mrs. Bergner.",
                clozeParts: ["Das ist ", " Bergner."],
                clozeAnswers: ["Frau"]
            } as Noun
        ],

        // --- SUB-TOPIC: Familie ---
        "Familie": [
            {
                id: createWordId("person-familie-001"),
                wordType: 'noun',
                german: "Familie",
                article: "die",
                plural: "Familien",
                english: "family",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine große Familie", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He has a large family.",
                clozeParts: ["Er hat eine große ", "."],
                clozeAnswers: ["Familie"]
            } as Noun,
            {
                id: createWordId("person-familie-002"),
                wordType: 'noun',
                german: "Vater",
                article: "der",
                plural: "Väter",
                english: "father",
                exampleGerman: [
                    { text: "Mein Vater", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "arbeitet", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "bei einer Autofirma", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My father works at a car company.",
                clozeParts: ["Mein ", " arbeitet bei einer Autofirma."],
                clozeAnswers: ["Vater"]
            } as Noun,
            {
                id: createWordId("person-familie-003"),
                wordType: 'noun',
                german: "Mutter",
                article: "die",
                plural: "Mütter",
                english: "mother",
                exampleGerman: [
                    { text: "Meine Mutter", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "arbeitslos", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My mother is unemployed.",
                clozeParts: ["Meine ", " ist arbeitslos."],
                clozeAnswers: ["Mutter"]
            } as Noun,
            {
                id: createWordId("person-familie-004"),
                wordType: 'noun',
                german: "Eltern",
                article: "die",
                plural: "Eltern",
                english: "parents",
                exampleGerman: [
                    { text: "Meine Eltern", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "leben", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in Spanien", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My parents live in Spain.",
                clozeParts: ["Meine ", " leben in Spanien."],
                clozeAnswers: ["Eltern"]
            } as Noun,
            {
                id: createWordId("person-familie-005"),
                wordType: 'noun',
                german: "Kind",
                article: "das",
                plural: "Kinder",
                english: "child",
                exampleGerman: [
                    { text: "Das Kind", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spielt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im Garten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The child is playing in the garden.",
                clozeParts: ["Das ", " spielt im Garten."],
                clozeAnswers: ["Kind"]
            } as Noun,
            {
                id: createWordId("person-familie-006"),
                wordType: 'noun',
                german: "Baby",
                article: "das",
                plural: "Babys",
                english: "baby",
                exampleGerman: [
                    { text: "Meine Schwester", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "noch ein Baby", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine Schwester ist noch ein ", "."],
                clozeAnswers: ["Baby"]
            } as Noun,
            {
                id: createWordId("person-familie-007"),
                wordType: 'noun',
                german: "Bruder",
                article: "der",
                plural: "Brüder",
                english: "brother",
                exampleGerman: [
                    { text: "Mein Bruder", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "heißt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Peter", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My brother is called Peter.",
                clozeParts: ["Mein ", " heißt Peter."],
                clozeAnswers: ["Bruder"]
            } as Noun,
            {
                id: createWordId("person-familie-008"),
                wordType: 'noun',
                german: "Schwester",
                article: "die",
                plural: "Schwestern",
                english: "sister",
                exampleGerman: [
                    { text: "Meine Schwester", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "noch ein Baby", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine ", " ist noch ein Baby."],
                clozeAnswers: ["Schwester"]
            } as Noun,
            {
                id: createWordId("person-familie-009"),
                wordType: 'noun',
                german: "Geschwister",
                article: "die",
                plural: "Geschwister",
                english: "siblings",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "zwei Geschwister", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are two siblings.",
                clozeParts: ["Wir sind zwei ", "."],
                clozeAnswers: ["Geschwister"]
            } as Noun,
            {
                id: createWordId("person-familie-010"),
                wordType: 'noun',
                german: "Tante",
                article: "die",
                plural: "Tanten",
                english: "aunt",
                exampleGerman: [
                    { text: "Meine Tante", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wohnt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in Berlin", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My aunt lives in Berlin.",
                clozeParts: ["Meine ", " wohnt in Berlin."],
                clozeAnswers: ["Tante"]
            } as Noun,
            {
                id: createWordId("person-familie-011"),
                wordType: 'noun',
                german: "Onkel",
                article: "der",
                plural: "Onkel",
                english: "uncle",
                exampleGerman: [
                    { text: "Mein Onkel", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Arzt", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My uncle is a doctor.",
                clozeParts: ["Mein ", " ist Arzt."],
                clozeAnswers: ["Onkel"]
            } as Noun,
            {
                id: createWordId("person-familie-012"),
                wordType: 'noun',
                german: "Großmutter",
                article: "die",
                plural: "Großmütter",
                english: "grandmother",
                exampleGerman: [
                    { text: "Meine Großmutter", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sehr alt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My grandmother is very old.",
                clozeParts: ["Meine ", " ist sehr alt."],
                clozeAnswers: ["Großmutter"]
            } as Noun,
            {
                id: createWordId("person-familie-013"),
                wordType: 'noun',
                german: "Großvater",
                article: "der",
                plural: "Großväter",
                english: "grandfather",
                exampleGerman: [
                    { text: "Mein Großvater", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "liest", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "viel", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My grandfather reads a lot.",
                clozeParts: ["Mein ", " liest viel."],
                clozeAnswers: ["Großvater"]
            } as Noun,
            {
                id: createWordId("person-familie-014"),
                wordType: 'noun',
                german: "Großeltern",
                article: "die",
                plural: "Großeltern",
                english: "grandparents",
                exampleGerman: [
                    { text: "Meine Großeltern", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wohnen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "auf dem Land", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My grandparents live in the countryside.",
                clozeParts: ["Meine ", " wohnen auf dem Land."],
                clozeAnswers: ["Großeltern"]
            } as Noun,
            {
                id: createWordId("person-familie-015"),
                wordType: 'noun',
                german: "Partner",
                article: "der",
                plural: "Partner",
                english: "partner",
                exampleGerman: [
                    { text: "Mein Partner", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "kommt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "aus Italien", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My partner comes from Italy.",
                clozeParts: ["Mein ", " kommt aus Italien."],
                clozeAnswers: ["Partner"]
            } as Noun
        ],

        // --- SUB-TOPIC: Herkunft ---
        "Herkunft": [
            {
                id: createWordId("person-herkunft-001"),
                wordType: 'verb',
                german: "kommen (aus)",
                english: "to come (from)",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gekommen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "komme", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "aus Deutschland", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I come from Germany.",
                clozeParts: ["Ich ", " aus Deutschland."],
                clozeAnswers: ["komme"]
            } as Verb,
            {
                id: createWordId("person-herkunft-002"),
                wordType: 'noun',
                german: "Land",
                article: "das",
                plural: "Länder",
                english: "country",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "komme", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "aus Deutschland", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I come from Germany.",
                clozeParts: ["Ich komme aus ", "."],
                clozeAnswers: ["Deutschland"]
            } as Noun,
            {
                id: createWordId("person-herkunft-003"),
                wordType: 'noun',
                german: "Stadt",
                article: "die",
                plural: "Städte",
                english: "city",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wohne", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in einer kleinen Stadt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I live in a small city.",
                clozeParts: ["Ich wohne in einer kleinen ", "."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {
                id: createWordId("person-herkunft-004"),
                wordType: 'noun',
                german: "Nationalität",
                article: "die",
                plural: "Nationalitäten",
                english: "nationality",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Deutsche", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am German.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["Deutsche"]
            } as Noun,
            {
                id: createWordId("person-herkunft-005"),
                wordType: 'adjective',
                german: "deutsch",
                english: "German (adjective)",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spreche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Deutsch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I speak German.",
                clozeParts: ["Ich spreche ", "."],
                clozeAnswers: ["Deutsch"]
            } as Adjective,
            {
                id: createWordId("person-herkunft-006"),
                wordType: 'noun',
                german: "Deutschland",
                article: "das",
                plural: null,
                english: "Germany",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "komme", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "aus Deutschland", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I come from Germany.",
                clozeParts: ["Ich komme aus ", "."],
                clozeAnswers: ["Deutschland"]
            } as Noun,
            {
                id: createWordId("person-herkunft-007"),
                wordType: 'noun',
                german: "Italien",
                article: "das",
                plural: null,
                english: "Italy",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Italiener", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He is Italian.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["Italiener"]
            } as Noun,
            {
                id: createWordId("person-herkunft-008"),
                wordType: 'noun',
                german: "Italiener",
                article: "der",
                plural: "Italiener",
                english: "Italian (person)",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Italiener", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He is Italian.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["Italiener"]
            } as Noun,
            {
                id: createWordId("person-herkunft-009"),
                wordType: 'adjective',
                german: "Italienisch",
                english: "Italian (adjective)",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spreche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Italienisch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I speak Italian.",
                clozeParts: ["Ich spreche ", "."],
                clozeAnswers: ["Italienisch"]
            } as Adjective,
            {
                id: createWordId("person-herkunft-010"),
                wordType: 'noun',
                german: "Türkei",
                article: "die",
                plural: null,
                english: "Turkey",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "kommt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "aus der Türkei", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She comes from Turkey.",
                clozeParts: ["Sie kommt aus der ", "."],
                clozeAnswers: ["Türkei"]
            } as Noun,
            {
                id: createWordId("person-herkunft-011"),
                wordType: 'noun',
                german: "Türke",
                article: "der",
                plural: "Türken",
                english: "Turk",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Türke", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He is Turkish.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["Türke"]
            } as Noun,
            {
                id: createWordId("person-herkunft-012"),
                wordType: 'adjective',
                german: "Türkisch",
                english: "Turkish (adjective)",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spreche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Türkisch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I speak Turkish.",
                clozeParts: ["Ich spreche ", "."],
                clozeAnswers: ["Türkisch"]
            } as Adjective,
            {
                id: createWordId("person-herkunft-013"),
                wordType: 'noun',
                german: "Europa",
                article: "das",
                plural: null,
                english: "Europe",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Europäer", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am European.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["Europäer"]
            } as Noun,
            {
                id: createWordId("person-herkunft-014"),
                wordType: 'adjective',
                german: "europäisch",
                english: "European (adjective)",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Europäer", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am European.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["Europäer"]
            } as Adjective
        ],

        // --- SUB-TOPIC: Schule ---
        "Schule": [
            {
                id: createWordId("person-schule-001"),
                wordType: 'noun',
                german: "Schule",
                article: "die",
                plural: "Schulen",
                english: "school",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "haben", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "bis ein Uhr", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Unterricht", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We have lessons until one o'clock.",
                clozeParts: ["Wir haben bis ein Uhr ", "."],
                clozeAnswers: ["Unterricht"]
            } as Noun,
            {
                id: createWordId("person-schule-002"),
                wordType: 'noun',
                german: "Schüler",
                article: "der",
                plural: "Schüler",
                english: "student",
                exampleGerman: [
                    { text: "Die Schüler", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "freundlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The students are friendly.",
                clozeParts: ["Die ", " sind freundlich."],
                clozeAnswers: ["Schüler"]
            } as Noun,
            {
                id: createWordId("person-schule-003"),
                wordType: 'noun',
                german: "Lehrer",
                article: "der",
                plural: "Lehrer",
                english: "teacher",
                exampleGerman: [
                    { text: "Der Lehrer", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "freundlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teacher is friendly.",
                clozeParts: ["Der ", " ist freundlich."],
                clozeAnswers: ["Lehrer"]
            } as Noun,
            {
                id: createWordId("person-schule-004"),
                wordType: 'noun',
                german: "Klasse",
                article: "die",
                plural: "Klassen",
                english: "class",
                exampleGerman: [
                    { text: "In unserer Klasse", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "20 Schüler", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There are 20 students in our class.",
                clozeParts: ["In unserer ", " sind 20 Schüler."],
                clozeAnswers: ["Klasse"]
            } as Noun,
            {
                id: createWordId("person-schule-005"),
                wordType: 'verb',
                german: "lernen",
                english: "to learn",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "lernen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Deutsch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are learning German.",
                clozeParts: ["Wir ", " Deutsch."],
                clozeAnswers: ["lernen"]
            } as Verb,
            {
                id: createWordId("person-schule-006"),
                wordType: 'noun',
                german: "Hausaufgabe",
                article: "die",
                plural: "Hausaufgaben",
                english: "homework",
                exampleGerman: [
                    { text: "Die Hausaufgaben", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "einfach", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The homework is easy.",
                clozeParts: ["Die ", " sind einfach."],
                clozeAnswers: ["Hausaufgaben"]
            } as Noun,
            {
                id: createWordId("person-schule-007"),
                wordType: 'noun',
                german: "Unterricht",
                article: "der",
                plural: null,
                english: "lesson / class",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "haben", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "bis ein Uhr", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Unterricht", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We have lessons until one o'clock.",
                clozeParts: ["Wir haben bis ein Uhr ", "."],
                clozeAnswers: ["Unterricht"]
            } as Noun,
            {
                id: createWordId("person-schule-008"),
                wordType: 'noun',
                german: "Prüfung",
                article: "die",
                plural: "Prüfungen",
                english: "exam",
                exampleGerman: [
                    { text: "Die Prüfung", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "war", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "schwer", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The exam was difficult.",
                clozeParts: ["Die ", " war schwer."],
                clozeAnswers: ["Prüfung"]
            } as Noun,
            {
                id: createWordId("person-schule-009"),
                wordType: 'noun',
                german: "Test",
                article: "der",
                plural: "Tests",
                english: "test",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schreiben", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "einen Test", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are writing a test.",
                clozeParts: ["Wir schreiben einen ", "."],
                clozeAnswers: ["Test"]
            } as Noun,
            {
                id: createWordId("person-schule-010"),
                wordType: 'noun',
                german: "Wörterbuch",
                article: "das",
                plural: "Wörterbücher",
                english: "dictionary",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "brauche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Wörterbuch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I need a dictionary.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Wörterbuch"]
            } as Noun
        ],

        // --- SUB-TOPIC: Beruf ---
        "Beruf": [
            {
                id: createWordId("person-beruf-001"),
                wordType: 'noun',
                german: "Beruf",
                article: "der",
                plural: "Berufe",
                english: "profession / job",
                exampleGerman: [
                    { text: "Was", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dein Beruf", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What is your profession?",
                clozeParts: ["Was ist dein ", "?"],
                clozeAnswers: ["Beruf"]
            } as Noun,
            {
                id: createWordId("person-beruf-002"),
                wordType: 'noun',
                german: "Arbeit",
                article: "die",
                plural: "Arbeiten",
                english: "work",
                exampleGerman: [
                    { text: "Die Arbeit", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "interessant", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The work is interesting.",
                clozeParts: ["Die ", " ist interessant."],
                clozeAnswers: ["Arbeit"]
            } as Noun,
            {
                id: createWordId("person-beruf-003"),
                wordType: 'noun',
                german: "Polizist",
                article: "der",
                plural: "Polizisten",
                english: "police officer",
                exampleGerman: [
                    { text: "Der Polizist", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hilft", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "den Menschen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The police officer helps people.",
                clozeParts: ["Der ", " hilft den Menschen."],
                clozeAnswers: ["Polizist"]
            } as Noun,
            {
                id: createWordId("person-beruf-004"),
                wordType: 'noun',
                german: "Angestellter",
                article: "der",
                plural: "Angestellten",
                english: "employee",
                exampleGerman: [
                    { text: "Der Angestellte", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "arbeitet", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im Büro", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The employee works in the office.",
                clozeParts: ["Der ", " arbeitet im Büro."],
                clozeAnswers: ["Angestellte"]
            } as Noun,
            {
                id: createWordId("person-beruf-005"),
                wordType: 'noun',
                german: "Arbeiter",
                article: "der",
                plural: "Arbeiter",
                english: "worker",
                exampleGerman: [
                    { text: "Der Arbeiter", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "fleißig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The worker is diligent.",
                clozeParts: ["Der ", " ist fleißig."],
                clozeAnswers: ["Arbeiter"]
            } as Noun,
            {
                id: createWordId("person-beruf-006"),
                wordType: 'adjective',
                german: "arbeitslos",
                english: "unemployed",
                exampleGerman: [
                    { text: "Meine Mutter", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "arbeitslos", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My mother is unemployed.",
                clozeParts: ["Meine Mutter ist ", "."],
                clozeAnswers: ["arbeitslos"]
            } as Adjective,
            {
                id: createWordId("person-beruf-007"),
                wordType: 'noun',
                german: "Arzt",
                article: "der",
                plural: "Ärzte",
                english: "doctor",
                exampleGerman: [
                    { text: "Mein Onkel", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Arzt", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My uncle is a doctor.",
                clozeParts: ["Mein Onkel ist ", "."],
                clozeAnswers: ["Arzt"]
            } as Noun
        ],
 
        // --- SUB-TOPIC: Aussehen ---
        "Aussehen": [
            {
                id: createWordId("person-aussehen-001"),
                wordType: 'verb',
                german: "aussehen",
                english: "to look / to appear",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "ausgesehen",
                exampleGerman: [
                    { text: "Das Buch", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sieht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sehr interessant", case: "none" },
                    { text: " ", case: "none" },
                    { text: "aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The book looks very interesting.",
                clozeParts: ["Das Buch sieht sehr interessant ", "."],
                clozeAnswers: ["aus"]
            } as Verb,
            {
                id: createWordId("person-aussehen-002"),
                wordType: 'adjective',
                german: "hübsch",
                english: "pretty / handsome",
                exampleGerman: [
                    { text: "Du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "siehst", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "heute", case: "none" },
                    { text: " ", case: "none" },
                    { text: "hübsch", case: "none" },
                    { text: " ", case: "none" },
                    { text: "aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You look pretty today.",
                clozeParts: ["Du siehst heute ", " aus."],
                clozeAnswers: ["hübsch"]
            } as Adjective,
            {
                id: createWordId("person-aussehen-003"),
                wordType: 'adjective',
                german: "dick",
                english: "fat / thick",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "leider", case: "none" },
                    { text: " ", case: "none" },
                    { text: "sehr dick", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Unfortunately, I am very fat.",
                clozeParts: ["Ich bin leider sehr ", "."],
                clozeAnswers: ["dick"]
            } as Adjective,
            {
                id: createWordId("person-aussehen-004"),
                wordType: 'adjective',
                german: "groß",
                english: "tall / big",
                exampleGerman: [
                    { text: "Mein Bruder", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sehr groß", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My brother is very tall.",
                clozeParts: ["Mein Bruder ist sehr ", "."],
                clozeAnswers: ["groß"]
            } as Adjective,
            {
                id: createWordId("person-aussehen-005"),
                wordType: 'adjective',
                german: "klein",
                english: "small / short",
                exampleGerman: [
                    { text: "Meine Schwester", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "noch klein", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still small.",
                clozeParts: ["Meine Schwester ist noch ", "."],
                clozeAnswers: ["klein"]
            } as Adjective,
            {
                id: createWordId("person-aussehen-006"),
                wordType: 'adjective',
                german: "jung",
                english: "young",
                exampleGerman: [
                    { text: "Meine Schwester", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "noch sehr jung", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still very young.",
                clozeParts: ["Meine Schwester ist noch sehr ", "."],
                clozeAnswers: ["jung"]
            } as Adjective,
            {
                id: createWordId("person-aussehen-007"),
                wordType: 'adjective',
                german: "alt",
                english: "old",
                exampleGerman: [
                    { text: "Wie", case: "none" },
                    { text: " ", case: "none" },
                    { text: "alt", case: "none" },
                    { text: " ", case: "none" },
                    { text: "bist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "How old are you?",
                clozeParts: ["Wie ", " bist du?"],
                clozeAnswers: ["alt"]
            } as Adjective,
            {
                id: createWordId("person-aussehen-008"),
                wordType: 'noun',
                german: "Auge",
                article: "das",
                plural: "Augen",
                english: "eye",
                exampleGerman: [
                    { text: "Seine Augen", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "grün", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "His eyes are green.",
                clozeParts: ["Seine ", " sind grün."],
                clozeAnswers: ["Augen"]
            } as Noun,
            {
                id: createWordId("person-aussehen-009"),
                wordType: 'noun',
                german: "Haar",
                article: "das",
                plural: "Haare",
                english: "hair",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "lange Haare", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She has long hair.",
                clozeParts: ["Sie hat lange ", "."],
                clozeAnswers: ["Haare"]
            } as Noun
        ],
 
        // --- SUB-TOPIC: Gewohnheiten, Tagesablauf ---
        "Gewohnheiten, Tagesablauf": [
            {
                id: createWordId("person-gewohnheiten-001"),
                wordType: 'verb',
                german: "aufstehen",
                english: "to get up",
                separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "aufgestanden",
                exampleGerman: [
                    { text: "Um acht Uhr", case: "none" },
                    { text: " ", case: "none" },
                    { text: "stehen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "auf", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We get up at eight o'clock.",
                clozeParts: ["Um acht Uhr stehen wir ", "."],
                clozeAnswers: ["auf"]
            } as Verb,
            {
                id: createWordId("person-gewohnheiten-002"),
                wordType: 'verb',
                german: "frühstücken",
                english: "to have breakfast",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefrühstückt",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "frühstücken", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "nicht zusammen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We don't have breakfast together.",
                clozeParts: ["Wir ", " nicht zusammen."],
                clozeAnswers: ["frühstücken"]
            } as Verb,
            {
                id: createWordId("person-gewohnheiten-003"),
                wordType: 'verb',
                german: "arbeiten",
                english: "to work",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gearbeitet",
                exampleGerman: [
                    { text: "Mein Vater", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "arbeitet", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "bei einer Autofirma", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My father works at a car company.",
                clozeParts: ["Mein Vater ", " bei einer Autofirma."],
                clozeAnswers: ["arbeitet"]
            } as Verb,
            {
                id: createWordId("person-gewohnheiten-004"),
                wordType: 'verb',
                german: "lernen",
                english: "to learn",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "lernen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Deutsch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are learning German.",
                clozeParts: ["Wir ", " Deutsch."],
                clozeAnswers: ["lernen"]
            } as Verb,
            {
                id: createWordId("person-gewohnheiten-005"),
                wordType: 'verb',
                german: "fernsehen",
                english: "to watch TV",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "ferngesehen",
                exampleGerman: [
                    { text: "Siehst", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "viel", case: "none" },
                    { text: " ", case: "none" },
                    { text: "fern", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you watch a lot of TV?",
                clozeParts: ["Siehst du viel ", "?"],
                clozeAnswers: ["fern"]
            } as Verb,
            {
                id: createWordId("person-gewohnheiten-006"),
                wordType: 'verb',
                german: "schlafen",
                english: "to sleep",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschlafen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schlafe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern lange", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to sleep late.",
                clozeParts: ["Ich ", " gern lange."],
                clozeAnswers: ["schlafe"]
            } as Verb,
            {
                id: createWordId("person-gewohnheiten-007"),
                wordType: 'verb',
                german: "ins Bett gehen",
                english: "to go to bed",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gegangen",
                exampleGerman: [
                    { text: "Wann", case: "none" },
                    { text: " ", case: "none" },
                    { text: "gehst", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ins Bett", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "When do you go to bed?",
                clozeParts: ["Wann gehst du ", "?"],
                clozeAnswers: ["ins Bett"]
            } as Verb,
            {
                id: createWordId("person-gewohnheiten-008"),
                wordType: 'verb',
                german: "bleiben",
                english: "to stay",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geblieben",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bleiben", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "zu Hause", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are staying at home.",
                clozeParts: ["Wir ", " zu Hause."],
                clozeAnswers: ["bleiben"]
            } as Verb,
            {
                id: createWordId("person-gewohnheiten-009"),
                wordType: 'adjective',
                german: "früh",
                english: "early",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "stehen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "immer", case: "none" },
                    { text: " ", case: "none" },
                    { text: "früh", case: "none" },
                    { text: " ", case: "none" },
                    { text: "auf", case: "verb" },
                    { text: ".", case: "none" }
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