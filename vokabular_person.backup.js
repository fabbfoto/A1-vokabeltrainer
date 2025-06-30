// packages/trainer-themen/vokabular_person.js
import { createVokabular, Word, Nomen, Adjektiv, Verb } from './vokabular-types';
export const vokabularPerson = {
    "Person": {
        // --- UNTER-THEMA: Name ---
        "Name": [
            {
                id: "person-name-001",
                wortart: "Nomen",
                german: "Name",
                artikel: "der", // Inferred
                plural: "Namen", // Inferred
                english: "name",
                example_de: [
                    { "text": "Wie", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dein Name", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "What is your name?",
                cloze_parts: ["Wie ist dein ", "?"],
                cloze_answers: ["Name"]
            },
            {
                id: "person-name-002",
                wortart: "Nomen",
                german: "Familienname",
                artikel: "der", // Inferred
                plural: "Familiennamen", // Inferred
                english: "family name / surname",
                example_de: [
                    { "text": "Mein Familienname", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Schmidt", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My family name is Schmidt.",
                cloze_parts: ["Mein ", " ist Schmidt."],
                cloze_answers: ["Familienname"]
            },
            {
                id: "person-name-003",
                wortart: "Nomen",
                german: "Vorname",
                artikel: "der", // Inferred
                plural: "Vornamen", // Inferred
                english: "first name",
                example_de: [
                    { "text": "Mein Vorname", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Anna", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My first name is Anna.",
                cloze_parts: ["Mein ", " ist Anna."],
                cloze_answers: ["Vorname"]
            },
            {
                id: "person-name-004",
                wortart: "Verb",
                german: "heißen",
                english: "to be called",
                trennbar: false,
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "geheißen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Wie", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "heißt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "What are you called?",
                cloze_parts: ["Wie ", " du?"],
                cloze_answers: ["heißt"]
            }
        ],

        // --- UNTER-THEMA: Adresse ---
        "Adresse": [
            {
                id: "person-adresse-001",
                wortart: "Nomen",
                german: "Adresse",
                artikel: "die", // Inferred
                plural: "Adressen", // Inferred
                english: "address",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weiß", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Adresse", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "nicht", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I don't know the address.",
                cloze_parts: ["Ich weiß die ", " nicht."],
                cloze_answers: ["Adresse"]
            },
            {
                id: "person-adresse-002",
                wortart: "Nomen",
                german: "Straße",
                artikel: "die", // Inferred
                plural: "Straßen", // Inferred
                english: "street",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wohne", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in der Bahnhofstraße", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I live on Bahnhofstraße.",
                cloze_parts: ["Ich wohne in der ", "."],
                cloze_answers: ["Bahnhofstraße"] // Assuming Bahnhofstraße is the answer, not just Straße
            },
            {
                id: "person-adresse-003",
                wortart: "Nomen",
                german: "Haus",
                artikel: "das", // Inferred
                plural: "Häuser", // Inferred
                english: "house",
                example_de: [
                    { "text": "Unser Haus", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr alt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Our house is very old.",
                cloze_parts: ["Unser ", " ist sehr alt."],
                cloze_answers: ["Haus"]
            },
            {
                id: "person-adresse-004",
                wortart: "Nomen",
                german: "Wohnung",
                artikel: "die", // Inferred
                plural: "Wohnungen", // Inferred
                english: "apartment",
                example_de: [
                    { "text": "Unsere Wohnung", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im ersten Stock", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Our apartment is on the first floor.",
                cloze_parts: ["Unsere ", " ist im ersten Stock."],
                cloze_answers: ["Wohnung"]
            },
            {
                id: "person-adresse-005",
                wortart: "Nomen",
                german: "Nummer",
                artikel: "die", // Inferred
                plural: "Nummern", // Inferred
                english: "number",
                example_de: [
                    { "text": "Meine Hausnummer", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "12", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My house number is 12.",
                cloze_parts: ["Meine Haus", " ist 12."],
                cloze_answers: ["nummer"] // Assuming "nummer" is the cloze
            },
            {
                id: "person-adresse-006",
                wortart: "Nomen",
                german: "Stadt",
                artikel: "die", // Inferred
                plural: "Städte", // Inferred
                english: "city",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wohne", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in einer kleinen Stadt", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I live in a small city.",
                cloze_parts: ["Ich wohne in einer kleinen ", "."],
                cloze_answers: ["Stadt"]
            },
            {
                id: "person-adresse-007",
                wortart: "Nomen",
                german: "PLZ (Postleitzahl)",
                artikel: "die", // Inferred
                plural: "PLZs (Postleitzahlen)", // Inferred
                english: "postal code",
                example_de: [
                    { "text": "Meine Postleitzahl", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "80331", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My postal code is 80331.",
                cloze_parts: ["Meine ", " ist 80331."],
                cloze_answers: ["Postleitzahl"] // Assuming Postleitzahl is the cloze
            },
            {
                id: "person-adresse-008",
                wortart: "Nomen",
                german: "Land",
                artikel: "das", // Inferred
                plural: "Länder", // Inferred
                english: "country",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "komme", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus Deutschland", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I come from Germany.",
                cloze_parts: ["Ich komme aus ", "."],
                cloze_answers: ["Deutschland"] // The example sentence uses "Deutschland", not "Land" directly
            }
        ],

        // --- UNTER-THEMA: Telefon ---
        "Telefon": [
            {
                id: "person-telefon-001",
                wortart: "Nomen",
                german: "Telefon",
                artikel: "das", // Inferred
                plural: "Telefone", // Inferred
                english: "telephone",
                example_de: [
                    { "text": "Mein Telefon", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kaputt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My telephone is broken.",
                cloze_parts: ["Mein ", " ist kaputt."],
                cloze_answers: ["Telefon"]
            },
            {
                id: "person-telefon-002",
                wortart: "Nomen",
                german: "Handy",
                artikel: "das", // Inferred
                plural: "Handys", // Inferred
                english: "mobile phone",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein neues Handy", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have a new mobile phone.",
                cloze_parts: ["Ich habe ein neues ", "."],
                cloze_answers: ["Handy"]
            },
            {
                id: "person-telefon-003",
                wortart: "Verb",
                german: "anrufen",
                english: "to call (by phone)",
                trennbar: true, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "angerufen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "rufe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dich", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "morgen", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "an", "kasus": "verb" }, // Separated verb part
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I will call you tomorrow.",
                cloze_parts: ["Ich rufe dich morgen ", "."],
                cloze_answers: ["an"] // Cloze answer is the separated part
            },
            {
                id: "person-telefon-004",
                wortart: "Nomen",
                german: "Anruf",
                artikel: "der", // Inferred
                plural: "Anrufe", // Inferred
                english: "call (noun)",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "warte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dann", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf deinen Anruf", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "–", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "okay", "kasus": "none" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "I'll wait for your call then – okay?",
                cloze_parts: ["Ich warte dann auf deinen ", " – okay?"],
                cloze_answers: ["Anruf"]
            },
            {
                id: "person-telefon-005",
                wortart: "Nomen",
                german: "Anrufbeantworter",
                artikel: "der", // Inferred
                plural: "Anrufbeantworter", // Inferred (often same as singular)
                english: "answering machine",
                example_de: [
                    { "text": "Sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Nachrichten", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf dem Anrufbeantworter", "kasus": "dativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Are there messages on the answering machine?",
                cloze_parts: ["Sind Nachrichten auf dem ", "?"],
                cloze_answers: ["Anrufbeantworter"]
            },
            {
                id: "person-telefon-006",
                wortart: "Nomen",
                german: "Nummer", // Duplicate word, but different context (Telefonnummer)
                artikel: "die", // Inferred
                plural: "Nummern", // Inferred
                english: "number",
                example_de: [
                    { "text": "Wie", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "deine Telefonnummer", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "What is your phone number?",
                cloze_parts: ["Wie ist deine ", "?"],
                cloze_answers: ["Telefonnummer"] // Assuming Telefonnummer is the cloze
            }
        ],

        // --- UNTER-THEMA: Geburtstag ---
        "Geburtstag": [
            {
                id: "person-geburtstag-001",
                wortart: "Nomen",
                german: "Geburtstag",
                artikel: "der", // Inferred
                plural: "Geburtstage", // Inferred
                english: "birthday",
                example_de: [
                    { "text": "Wann", "kasus": "none" }, // Frageadverb
                    { "text": " ", "kasus": "none" },
                    { "text": "hast", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Geburtstag", "kasus": "akkusativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "When is your birthday?",
                cloze_parts: ["Wann hast du ", "?"],
                cloze_answers: ["Geburtstag"]
            },
            {
                id: "person-geburtstag-002",
                wortart: "Verb",
                german: "bekommen",
                english: "to get / to receive",
                trennbar: false,
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "bekommen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Was", "kasus": "akkusativ" }, // Fragepronomen als Objekt
                    { "text": " ", "kasus": "none" },
                    { "text": "bekommst", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zum Geburtstag", "kasus": "dativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "What do you get for your birthday?",
                cloze_parts: ["Was ", " du zum Geburtstag?"],
                cloze_answers: ["bekommst"]
            },
            {
                id: "person-geburtstag-003",
                wortart: "Verb",
                german: "einladen",
                english: "to invite",
                trennbar: true, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "eingeladen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lade", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dich", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein", "kasus": "verb" }, // Separated verb part
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I invite you.",
                cloze_parts: ["Ich lade dich ", "."],
                cloze_answers: ["ein"] // Cloze answer is the separated part
            },
            {
                id: "person-geburtstag-004",
                wortart: "Nomen",
                german: "Einladung",
                artikel: "die", // Inferred
                plural: "Einladungen", // Inferred
                english: "invitation",
                example_de: [
                    { "text": "Das", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Einladung", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zur Geburtstagsparty", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "This is an invitation to the birthday party.",
                cloze_parts: ["Das ist eine ", " zur Geburtstagsparty."],
                cloze_answers: ["Einladung"]
            },
            {
                id: "person-geburtstag-005",
                wortart: "Verb",
                german: "feiern",
                english: "to celebrate",
                trennbar: false,
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "gefeiert", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "feiern", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meinen Geburtstag", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are celebrating my birthday.",
                cloze_parts: ["Wir ", " meinen Geburtstag."],
                cloze_answers: ["feiern"]
            }
        ],

        // --- UNTER-THEMA: Alter ---
        "Alter": [
            {
                id: "person-alter-001",
                wortart: "Adjektiv", // Or Nomen depending on usage
                german: "alt",
                english: "old",
                example_de: [
                    { "text": "Wie", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "alt", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "How old are you?",
                cloze_parts: ["Wie ", " bist du?"],
                cloze_answers: ["alt"]
            },
            {
                id: "person-alter-002",
                wortart: "Nomen",
                german: "Alter",
                artikel: "das", // Inferred
                plural: null, // Often no plural in this sense
                english: "age",
                example_de: [
                    { "text": "Das", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sein", "kasus": "none" }, // Possessivpronomen
                    { "text": " ", "kasus": "none" },
                    { "text": "Alter", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "That is his age.", // Beispiel angepasst
                cloze_parts: ["Das ist sein ", "."],
                cloze_answers: ["Alter"]
            },
            {
                id: "person-alter-003",
                wortart: "Adjektiv",
                german: "jung",
                english: "young",
                example_de: [
                    { "text": "Meine Schwester", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "noch sehr jung", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My sister is still very young.",
                cloze_parts: ["Meine Schwester ist noch sehr ", "."],
                cloze_answers: ["jung"]
            }
        ],

        // --- UNTER-THEMA: Geschlecht ---
        "Geschlecht": [
            {
                id: "person-geschlecht-001",
                wortart: "Adjektiv",
                german: "männlich",
                english: "male",
                example_de: [
                    { "text": "Er", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "männlich", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "He is male.",
                cloze_parts: ["Er ist ", "."],
                cloze_answers: ["männlich"]
            },
            {
                id: "person-geschlecht-002",
                wortart: "Adjektiv",
                german: "weiblich",
                english: "female",
                example_de: [
                    { "text": "Sie", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weiblich", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "She is female.",
                cloze_parts: ["Sie ist ", "."],
                cloze_answers: ["weiblich"]
            },
            {
                id: "person-geschlecht-003",
                wortart: "Nomen", // Used as title/address
                german: "Herr",
                artikel: "der", // Inferred
                plural: "Herren", // Inferred
                english: "Mr.",
                example_de: [
                    { "text": "Guten Tag", "kasus": "none" }, // Fixed phrase
                    { "text": ",", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Herr Müller", "kasus": "none" }, // Direct address, no grammatical case in sentence structure
                    { "text": "!", "kasus": "none" }
                ],
                example_en: "Good day, Mr. Müller!",
                cloze_parts: ["Guten Tag, ", " Müller!"],
                cloze_answers: ["Herr"]
            },
            {
                id: "person-geschlecht-004",
                wortart: "Nomen", // Used as title/address
                german: "Frau",
                artikel: "die", // Inferred
                plural: "Frauen", // Inferred
                english: "Ms./Mrs.",
                example_de: [
                    { "text": "Das", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Frau Bergner", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "This is Ms./Mrs. Bergner.",
                cloze_parts: ["Das ist ", " Bergner."],
                cloze_answers: ["Frau"]
            }
        ],

        // --- UNTER-THEMA: Familie ---
        "Familie": [
            {
                id: "person-familie-001",
                wortart: "Nomen",
                german: "Familie",
                artikel: "die", // Inferred
                plural: "Familien", // Inferred
                english: "family",
                example_de: [
                    { "text": "Er", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hat", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine große Familie", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "He has a large family.",
                cloze_parts: ["Er hat eine große ", "."],
                cloze_answers: ["Familie"]
            },
            {
                id: "person-familie-002",
                wortart: "Nomen",
                german: "Vater",
                artikel: "der", // Inferred
                plural: "Väter", // Inferred
                english: "father",
                example_de: [
                    { "text": "Mein Vater", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "arbeitet", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bei einer Autofirma", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My father works at a car company.",
                cloze_parts: ["Mein ", " arbeitet bei einer Autofirma."],
                cloze_answers: ["Vater"]
            },
            {
                id: "person-familie-003",
                wortart: "Nomen",
                german: "Mutter",
                artikel: "die", // Inferred
                plural: "Mütter", // Inferred
                english: "mother",
                example_de: [
                    { "text": "Meine Mutter", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "arbeitslos", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My mother is unemployed.",
                cloze_parts: ["Meine ", " ist arbeitslos."],
                cloze_answers: ["Mutter"]
            },
            {
                id: "person-familie-004",
                wortart: "Nomen",
                german: "Eltern",
                artikel: "die", // Inferred
                plural: "Eltern", // Plural only
                english: "parents",
                example_de: [
                    { "text": "Meine Eltern", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "leben", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in Spanien", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My parents live in Spain.",
                cloze_parts: ["Meine ", " leben in Spanien."],
                cloze_answers: ["Eltern"]
            },
            {
                id: "person-familie-005",
                wortart: "Nomen",
                german: "Kind",
                artikel: "das", // Inferred
                plural: "Kinder", // Inferred
                english: "child",
                example_de: [
                    { "text": "Meine Schwester", "kasus": "nominativ" }, // Example uses Schwester, not Kind
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "noch ein Baby", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My sister is still a baby.",
                cloze_parts: ["Meine Schwester ist noch ein ", "."], // Cloze for Baby, not Kind
                cloze_answers: ["Baby"] // Cloze answer for Baby
            },
            {
                id: "person-familie-006",
                wortart: "Nomen",
                german: "Baby", // Duplicate word, but listed under Familie
                artikel: "das", // Inferred
                plural: "Babys", // Inferred
                english: "baby",
                example_de: [
                    { "text": "Meine Schwester", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "noch ein Baby", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My sister is still a baby.",
                cloze_parts: ["Meine Schwester ist noch ein ", "."],
                cloze_answers: ["Baby"]
            },
            {
                id: "person-familie-007",
                wortart: "Nomen",
                german: "Bruder",
                artikel: "der", // Inferred
                plural: "Brüder", // Inferred
                english: "brother",
                example_de: [
                    { "text": "Mein Bruder", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "heißt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Peter", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My brother is called Peter.",
                cloze_parts: ["Mein ", " heißt Peter."],
                cloze_answers: ["Bruder"]
            },
            {
                id: "person-familie-008",
                wortart: "Nomen",
                german: "Schwester",
                artikel: "die", // Inferred
                plural: "Schwestern", // Inferred
                english: "sister",
                example_de: [
                    { "text": "Meine Schwester", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "noch ein Baby", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My sister is still a baby.",
                cloze_parts: ["Meine ", " ist noch ein Baby."],
                cloze_answers: ["Schwester"]
            },
            {
                id: "person-familie-009",
                wortart: "Nomen",
                german: "Geschwister",
                artikel: "die", // Inferred
                plural: "Geschwister", // Plural only
                english: "siblings",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zwei Geschwister", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are two siblings.",
                cloze_parts: ["Wir sind zwei ", "."],
                cloze_answers: ["Geschwister"]
            },
            {
                id: "person-familie-010",
                wortart: "Nomen",
                german: "Tante",
                artikel: "die", // Inferred
                plural: "Tanten", // Inferred
                english: "aunt",
                example_de: [
                    { "text": "Meine Tante", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wohnt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in Berlin", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My aunt lives in Berlin.",
                cloze_parts: ["Meine ", " wohnt in Berlin."],
                cloze_answers: ["Tante"]
            },
            {
                id: "person-familie-011",
                wortart: "Nomen",
                german: "Onkel",
                artikel: "der", // Inferred
                plural: "Onkel", // Often same as singular
                english: "uncle",
                example_de: [
                    { "text": "Mein Onkel", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Arzt", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My uncle is a doctor.",
                cloze_parts: ["Mein ", " ist Arzt."],
                cloze_answers: ["Onkel"]
            },
            {
                id: "person-familie-012",
                wortart: "Nomen",
                german: "Großmutter",
                artikel: "die", // Inferred
                plural: "Großmütter", // Inferred
                english: "grandmother",
                example_de: [
                    { "text": "Meine Großmutter", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr alt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My grandmother is very old.",
                cloze_parts: ["Meine ", " ist sehr alt."],
                cloze_answers: ["Großmutter"]
            },
            {
                id: "person-familie-013",
                wortart: "Nomen",
                german: "Großvater",
                artikel: "der", // Inferred
                plural: "Großväter", // Inferred
                english: "grandfather",
                example_de: [
                    { "text": "Mein Großvater", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "liest", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "viel", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My grandfather reads a lot.",
                cloze_parts: ["Mein ", " liest viel."],
                cloze_answers: ["Großvater"]
            },
            {
                id: "person-familie-014",
                wortart: "Nomen",
                german: "Großeltern",
                artikel: "die", // Inferred
                plural: "Großeltern", // Plural only
                english: "grandparents",
                example_de: [
                    { "text": "Meine Großeltern", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wohnen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf dem Land", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My grandparents live in the countryside.",
                cloze_parts: ["Meine ", " wohnen auf dem Land."],
                cloze_answers: ["Großeltern"]
            },
            {
                id: "person-familie-015",
                wortart: "Nomen",
                german: "Partner/Partnerin",
                artikel: "der/die", // Inferred
                plural: "Partner/Partnerinnen", // Inferred
                english: "partner",
                example_de: [
                    { "text": "Mein Partner", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kommt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus Italien", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My partner comes from Italy.",
                cloze_parts: ["Mein ", " kommt aus Italien."],
                cloze_answers: ["Partner"] // Assuming cloze is for the male form
            }
        ],

        // --- UNTER-THEMA: Herkunft ---
        "Herkunft": [
            {
                id: "person-herkunft-001",
                wortart: "Verb",
                german: "kommen (aus)",
                english: "to come (from)",
                trennbar: false,
                hilfsverb_perfekt: "sein", // Common
                partizip_ii: "gekommen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "komme", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus Deutschland", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I come from Germany.",
                cloze_parts: ["Ich ", " aus Deutschland."],
                cloze_answers: ["komme"]
            },
            {
                id: "person-herkunft-002",
                wortart: "Nomen",
                german: "Land", // Duplicate word, but listed under Herkunft
                artikel: "das", // Inferred
                plural: "Länder", // Inferred
                english: "country",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "komme", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus Deutschland", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I come from Germany.",
                cloze_parts: ["Ich komme aus ", "."],
                cloze_answers: ["Deutschland"] // Example uses "Deutschland"
            },
            {
                id: "person-herkunft-003",
                wortart: "Nomen",
                german: "Stadt", // Duplicate word, but listed under Herkunft
                artikel: "die", // Inferred
                plural: "Städte", // Inferred
                english: "city",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wohne", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in einer kleinen Stadt", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I live in a small city.",
                cloze_parts: ["Ich wohne in einer kleinen ", "."],
                cloze_answers: ["Stadt"]
            },
            {
                id: "person-herkunft-004",
                wortart: "Nomen", // Or Adjektiv used nominally
                german: "Nationalität",
                artikel: "die", // Inferred
                plural: "Nationalitäten", // Inferred
                english: "nationality",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Deutsche", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am German.",
                cloze_parts: ["Ich bin ", "."],
                cloze_answers: ["Deutsche"] // Cloze answer is the nationality noun/adjective
            },
            {
                id: "person-herkunft-005",
                wortart: "Adjektiv",
                german: "deutsch", // Duplicate word, but listed under Herkunft
                english: "German (adjective)",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spreche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Deutsch", "kasus": "akkusativ" }, // Language names often treated as neuter noun/akkusativ
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I speak German.",
                cloze_parts: ["Ich spreche ", "."],
                cloze_answers: ["Deutsch"] // Cloze answer is the language name
            },
            {
                id: "person-herkunft-006",
                wortart: "Nomen",
                german: "Deutschland", // Duplicate word, but listed under Herkunft
                artikel: "das", // Inferred
                plural: null, // No plural
                english: "Germany",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "komme", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus Deutschland", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I come from Germany.",
                cloze_parts: ["Ich komme aus ", "."],
                cloze_answers: ["Deutschland"]
            },
            {
                id: "person-herkunft-007",
                wortart: "Nomen",
                german: "Italien", // Duplicate word, but listed under Herkunft
                artikel: "das", // Inferred
                plural: null, // No plural
                english: "Italy",
                example_de: [
                    { "text": "Er", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Italiener", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "He is Italian.",
                cloze_parts: ["Er ist ", "."],
                cloze_answers: ["Italiener"] // Example uses "Italiener"
            },
            {
                id: "person-herkunft-008",
                wortart: "Nomen", // Used nominally
                german: "Italiener/Italienerin",
                artikel: "der/die", // Inferred
                plural: "Italiener/Italienerinnen", // Inferred
                english: "Italian (person)",
                example_de: [
                    { "text": "Er", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Italiener", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "He is Italian.",
                cloze_parts: ["Er ist ", "."],
                cloze_answers: ["Italiener"] // Assuming cloze is for the male form
            },
            {
                id: "person-herkunft-009",
                wortart: "Adjektiv",
                german: "italienisch", // Duplicate word, but listed under Herkunft
                english: "Italian (adjective)",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spreche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "italienisch", "kasus": "none" }, // Adverbial use or language name
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I speak Italian.",
                cloze_parts: ["Ich spreche ", "."],
                cloze_answers: ["italienisch"]
            },
            {
                id: "person-herkunft-010",
                wortart: "Nomen",
                german: "Türkei",
                artikel: "die", // Inferred
                plural: null, // No plural
                english: "Turkey",
                example_de: [
                    { "text": "Sie", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kommt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus der Türkei", "kasus": "dativ" }, // With article
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "She comes from Turkey.",
                cloze_parts: ["Sie kommt aus der ", "."],
                cloze_answers: ["Türkei"]
            },
            {
                id: "person-herkunft-011",
                wortart: "Nomen", // Used nominally
                german: "Türke/Türkin",
                artikel: "der/die", // Inferred
                plural: "Türken/Türkinnen", // Inferred
                english: "Turk (person)",
                example_de: [
                    { "text": "Er", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Türke", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "He is Turkish.",
                cloze_parts: ["Er ist ", "."],
                cloze_answers: ["Türke"] // Assuming cloze is for the male form
            },
            {
                id: "person-herkunft-012",
                wortart: "Adjektiv",
                german: "türkisch",
                english: "Turkish (adjective)",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spreche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "türkisch", "kasus": "none" }, // Adverbial use or language name
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I speak Turkish.",
                cloze_parts: ["Ich spreche ", "."],
                cloze_answers: ["türkisch"]
            },
            {
                id: "person-herkunft-013",
                wortart: "Nomen",
                german: "Europa", // Duplicate word, but listed under Herkunft
                artikel: "das", // Inferred
                plural: null, // No plural
                english: "Europe",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Europäer", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am European.",
                cloze_parts: ["Ich bin ", "."],
                cloze_answers: ["Europäer"] // Example uses "Europäer"
            },
            {
                id: "person-herkunft-014",
                wortart: "Adjektiv",
                german: "europäisch", // Duplicate word, but listed under Herkunft
                english: "European (adjective)",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Europäer", "kasus": "nominativ" }, // Example uses "Europäer"
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am European.",
                cloze_parts: ["Ich bin ", "."],
                cloze_answers: ["Europäer"] // Cloze answer is the nominalized adjective/noun
            }
        ],

        // --- UNTER-THEMA: Schule ---
        "Schule": [
            {
                id: "person-schule-001",
                wortart: "Nomen",
                german: "Schule",
                artikel: "die", // Inferred
                plural: "Schulen", // Inferred
                english: "school",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "haben", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bis ein Uhr", "kasus": "none" }, // Time expression
                    { "text": " ", "kasus": "none" },
                    { "text": "Unterricht", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We have lessons until one o'clock.",
                cloze_parts: ["Wir haben bis ein Uhr ", "."],
                cloze_answers: ["Unterricht"] // Example uses "Unterricht"
            },
            {
                id: "person-schule-002",
                wortart: "Nomen",
                german: "Schüler/Schülerin",
                artikel: "der/die", // Inferred
                plural: "Schüler/Schülerinnen", // Inferred
                english: "student (male/female)",
                example_de: [
                    { "text": "Die Schüler", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "freundlich", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The students are friendly.",
                cloze_parts: ["Die ", " sind freundlich."],
                cloze_answers: ["Schüler"] // Assuming cloze is for the male plural
            },
            {
                id: "person-schule-003",
                wortart: "Nomen",
                german: "Lehrer/Lehrerin",
                artikel: "der/die", // Inferred
                plural: "Lehrer/Lehrerinnen", // Inferred
                english: "teacher (male/female)",
                example_de: [
                    { "text": "Der Lehrer", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "freundlich", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The teacher is friendly.",
                cloze_parts: ["Der ", " ist freundlich."],
                cloze_answers: ["Lehrer"] // Assuming cloze is for the male form
            },
            {
                id: "person-schule-004",
                wortart: "Nomen",
                german: "Klasse",
                artikel: "die", // Inferred
                plural: "Klassen", // Inferred
                english: "class",
                example_de: [
                    { "text": "In unserer Klasse", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "20 Schüler", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "There are 20 students in our class.",
                cloze_parts: ["In unserer ", " sind 20 Schüler."],
                cloze_answers: ["Klasse"]
            },
            {
                id: "person-schule-005",
                wortart: "Verb",
                german: "lernen", // Duplicate word, but listed under Schule
                english: "to learn",
                trennbar: false,
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "gelernt", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lernen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Deutsch", "kasus": "akkusativ" }, // Language name
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are learning German.",
                cloze_parts: ["Wir ", " Deutsch."],
                cloze_answers: ["lernen"]
            },
            {
                id: "person-schule-006",
                wortart: "Nomen",
                german: "Hausaufgabe",
                artikel: "die", // Inferred
                plural: "Hausaufgaben", // Inferred
                english: "homework",
                example_de: [
                    { "text": "Die Hausaufgaben", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einfach", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The homework is easy.",
                cloze_parts: ["Die ", " sind einfach."],
                cloze_answers: ["Hausaufgaben"]
            },
            {
                id: "person-schule-007",
                wortart: "Nomen",
                german: "Unterricht", // Duplicate word, but listed under Schule
                artikel: "der", // Inferred
                plural: null, // Often no plural in this sense
                english: "lesson / class",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "haben", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bis ein Uhr", "kasus": "none" }, // Time expression
                    { "text": " ", "kasus": "none" },
                    { "text": "Unterricht", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We have lessons until one o'clock.",
                cloze_parts: ["Wir haben bis ein Uhr ", "."],
                cloze_answers: ["Unterricht"]
            },
            {
                id: "person-schule-008",
                wortart: "Nomen",
                german: "Prüfung",
                artikel: "die", // Inferred
                plural: "Prüfungen", // Inferred
                english: "exam",
                example_de: [
                    { "text": "Die Prüfung", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "war", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schwer", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The exam was difficult.",
                cloze_parts: ["Die ", " war schwer."],
                cloze_answers: ["Prüfung"]
            },
            {
                id: "person-schule-009",
                wortart: "Nomen",
                german: "Test", // Duplicate word, but listed under Schule
                artikel: "der", // Inferred
                plural: "Tests", // Inferred
                english: "test",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schreiben", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen Test", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are writing a test.",
                cloze_parts: ["Wir schreiben einen ", "."],
                cloze_answers: ["Test"]
            },
            {
                id: "person-schule-010",
                wortart: "Nomen",
                german: "Wörterbuch", // Duplicate word, but listed under Schule
                artikel: "das", // Inferred
                plural: "Wörterbücher", // Inferred
                english: "dictionary",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "brauche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Wörterbuch", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "benutzen", "kasus": "verb" }, // Assuming full sentence from Basis Trainer
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I need a dictionary.", // Example from Basis Trainer
                cloze_parts: ["Ich brauche ein ", "."], // Example from Basis Trainer
                cloze_answers: ["Wörterbuch"] // Example from Basis Trainer
            }
        ],

        // --- UNTER-THEMA: Aussehen ---
        "Aussehen": [
            {
                id: "person-aussehen-001",
                wortart: "Verb",
                german: "aussehen",
                english: "to look / to appear",
                trennbar: true, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "ausgesehen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Das Buch", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sieht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr interessant", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus", "kasus": "verb" }, // Separated verb part
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The book looks very interesting.",
                cloze_parts: ["Das Buch sieht sehr interessant ", "."],
                cloze_answers: ["aus"] // Cloze answer is the separated part
            },
            {
                id: "person-aussehen-002",
                wortart: "Adjektiv",
                german: "hübsch",
                english: "pretty / handsome",
                example_de: [
                    { "text": "Du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "siehst", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "heute", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hübsch", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus", "kasus": "verb" }, // Separated verb part
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "You look pretty today.",
                cloze_parts: ["Du siehst heute ", " aus."],
                cloze_answers: ["hübsch"]
            },
            {
                id: "person-aussehen-003",
                wortart: "Adjektiv",
                german: "dick",
                english: "fat / thick",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "leider", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr dick", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Unfortunately, I am very fat.",
                cloze_parts: ["Ich bin leider sehr ", "."],
                cloze_answers: ["dick"]
            },
            {
                id: "person-aussehen-004",
                wortart: "Adjektiv",
                german: "groß", // Duplicate word, but listed under Aussehen
                english: "tall / big",
                example_de: [
                    { "text": "Mein Bruder", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr groß", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My brother is very tall.",
                cloze_parts: ["Mein Bruder ist sehr ", "."],
                cloze_answers: ["groß"]
            },
            {
                id: "person-aussehen-005",
                wortart: "Adjektiv",
                german: "klein",
                english: "small / short",
                example_de: [
                    { "text": "Meine Schwester", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "noch klein", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My sister is still small.",
                cloze_parts: ["Meine Schwester ist noch ", "."],
                cloze_answers: ["klein"]
            },
            {
                id: "person-aussehen-006",
                wortart: "Adjektiv",
                german: "jung", // Duplicate word, but listed under Aussehen
                english: "young",
                example_de: [
                    { "text": "Meine Schwester", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "noch sehr jung", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My sister is still very young.",
                cloze_parts: ["Meine Schwester ist noch sehr ", "."],
                cloze_answers: ["jung"]
            },
            {
                id: "person-aussehen-007",
                wortart: "Adjektiv",
                german: "alt", // Duplicate word, but listed under Aussehen
                english: "old",
                example_de: [
                    { "text": "Wie", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "alt", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "How old are you?",
                cloze_parts: ["Wie ", " bist du?"],
                cloze_answers: ["alt"]
            },
            {
                id: "person-aussehen-008",
                wortart: "Nomen",
                german: "Auge",
                artikel: "das", // Inferred
                plural: "Augen", // Inferred
                english: "eye",
                example_de: [
                    { "text": "Seine Augen", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "grün", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "His eyes are green.",
                cloze_parts: ["Seine ", " sind grün."],
                cloze_answers: ["Augen"]
            },
            {
                id: "person-aussehen-009",
                wortart: "Nomen",
                german: "Haar",
                artikel: "das", // Inferred (often used in plural "die Haare")
                plural: "Haare", // Inferred
                english: "hair",
                example_de: [
                    { "text": "Sie", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hat", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lange Haare", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "She has long hair.",
                cloze_parts: ["Sie hat lange ", "."],
                cloze_answers: ["Haare"]
            }
        ],

        // --- UNTER-THEMA: Gewohnheiten/Tagesablauf ---
        "Gewohnheiten/Tagesablauf": [
            {
                id: "person-gewohnheiten-001",
                wortart: "Verb",
                german: "aufstehen",
                english: "to get up",
                trennbar: true, // Inferred
                hilfsverb_perfekt: "sein", // Common
                partizip_ii: "aufgestanden", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Um acht Uhr", "kasus": "none" }, // Time expression
                    { "text": " ", "kasus": "none" },
                    { "text": "stehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf", "kasus": "verb" }, // Separated verb part
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We get up at eight o'clock.",
                cloze_parts: ["Um acht Uhr stehen wir ", "."],
                cloze_answers: ["auf"] // Cloze answer is the separated part
            },
            {
                id: "person-gewohnheiten-002",
                wortart: "Verb",
                german: "frühstücken",
                english: "to have breakfast",
                trennbar: false,
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "gefrühstückt", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "frühstücken", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "nicht zusammen", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We don't have breakfast together.",
                cloze_parts: ["Wir ", " nicht zusammen."],
                cloze_answers: ["frühstücken"]
            },
            {
                id: "person-gewohnheiten-003",
                wortart: "Verb",
                german: "arbeiten", // Duplicate word, but listed under Gewohnheiten
                english: "to work",
                trennbar: false,
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "gearbeitet", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Mein Vater", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "arbeitet", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bei einer Autofirma", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My father works at a car company.",
                cloze_parts: ["Mein Vater ", " bei einer Autofirma."],
                cloze_answers: ["arbeitet"]
            },
            {
                id: "person-gewohnheiten-004",
                wortart: "Verb",
                german: "lernen", // Duplicate word, but listed under Gewohnheiten
                english: "to learn",
                trennbar: false,
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "gelernt", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lernen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Deutsch", "kasus": "akkusativ" }, // Language name
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are learning German.",
                cloze_parts: ["Wir ", " Deutsch."],
                cloze_answers: ["lernen"]
            },
            {
                id: "person-gewohnheiten-005",
                wortart: "Verb",
                german: "fernsehen",
                english: "to watch TV",
                trennbar: true, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "ferngesehen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Siehst", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "viel", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "fern", "kasus": "verb" }, // Separated verb part
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Do you watch a lot of TV?",
                cloze_parts: ["Siehst du viel ", "?"],
                cloze_answers: ["fern"] // Cloze answer is the separated part
            },
            {
                id: "person-gewohnheiten-006",
                wortart: "Verb",
                german: "schlafen",
                english: "to sleep",
                trennbar: false,
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "geschlafen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Wann", "kasus": "none" }, // Frageadverb
                    { "text": " ", "kasus": "none" },
                    { "text": "gehst", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ins Bett", "kasus": "akkusativ" }, // Fixed phrase/directional
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "When do you go to bed?",
                cloze_parts: ["Wann gehst du ins ", "?"],
                cloze_answers: ["Bett"] // Cloze answer is "Bett"
            },
            {
                id: "person-gewohnheiten-007",
                wortart: "Phrase", // Or Verb + Präposition
                german: "ins Bett gehen",
                english: "to go to bed",
                trennbar: false, // Treated as a unit
                hilfsverb_perfekt: "sein", // Common for gehen
                partizip_ii: "gegangen", // Common for gehen
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Wann", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gehst", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ins Bett", "kasus": "akkusativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "When do you go to bed?",
                cloze_parts: ["Wann gehst du ", "?"],
                cloze_answers: ["ins Bett"] // Cloze answer is the phrase
            },
            {
                id: "person-gewohnheiten-008",
                wortart: "Verb",
                german: "bleiben",
                english: "to stay",
                trennbar: false,
                hilfsverb_perfekt: "sein", // Common
                partizip_ii: "geblieben", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bleiben", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zu Hause", "kasus": "none" }, // Fixed phrase/location
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are staying at home.",
                cloze_parts: ["Wir ", " zu Hause."],
                cloze_answers: ["bleiben"]
            },
            {
                id: "person-gewohnheiten-009",
                wortart: "Adjektiv", // Or Adverb
                german: "früh", // Duplicate word, but listed under Gewohnheiten
                english: "early",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "stehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "immer", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "früh", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf", "kasus": "verb" }, // Separated verb part
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We always get up early.",
                cloze_parts: ["Wir stehen immer ", " auf."],
                cloze_answers: ["früh"]
            }
        ]
    }
};
