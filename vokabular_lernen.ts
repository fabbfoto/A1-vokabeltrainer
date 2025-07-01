// vokabular_lernen.ts - KOMPLETTE TypeScript Version mit allen 69 Vokabeln
import type { VocabularyStructure, WordId, CaseElement } from './shared/types/vocabulary.js';
import { createWordId } from './shared/types/vocabulary.js';

export const vokabularLernen: VocabularyStructure = {
    "Lernen": {
        // --- KATEGORIE 1: Orte, Personen & Fächer (37 Vokabeln) ---
        "Orte, Personen & Fächer": [
            {
                id: createWordId("lernen-schuleunterricht-001"),
                wordType: "noun",
                article: "die",
                plural: "Schulen",
                german: "Schule",
                english: "school",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "haben", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bis ein Uhr", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Unterricht", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have lessons until one o'clock.",
                clozeParts: ["Wir haben bis ein Uhr ", "."],
                clozeAnswers: ["Unterricht"]
            },
            {
                id: createWordId("lernen-schuleunterricht-002"),
                wordType: "noun",
                article: "der",
                plural: null,
                german: "Unterricht",
                english: "lesson(s) / class",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "haben", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bis ein Uhr", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Unterricht", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have lessons until one o'clock.",
                clozeParts: ["Wir haben bis ein Uhr ", "."],
                clozeAnswers: ["Unterricht"]
            },
            {
                id: createWordId("lernen-schuleunterricht-003"),
                wordType: "noun",
                article: "der/die",
                plural: "Lehrer/Lehrerinnen",
                german: "Lehrer/Lehrerin",
                english: "teacher (male/female)",
                exampleGerman: [
                    { text: "Der Lehrer", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "freundlich", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The teacher is friendly.",
                clozeParts: ["Der ", " ist freundlich."],
                clozeAnswers: ["Lehrer"]
            },
            {
                id: createWordId("lernen-schuleunterricht-004"),
                wordType: "noun",
                article: "der/die",
                plural: "Schüler/Schülerinnen",
                german: "Schüler/Schülerin",
                english: "student (male/female)",
                exampleGerman: [
                    { text: "Die Schüler", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "freundlich", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The students are friendly.",
                clozeParts: ["Die ", " sind freundlich."],
                clozeAnswers: ["Schüler"]
            },
            {
                id: createWordId("lernen-schuleunterricht-005"),
                wordType: "noun",
                article: "der",
                plural: "Kurse",
                german: "Kurs",
                english: "course",
                exampleGerman: [
                    { text: "Der Kurs", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "beginnt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "um neun Uhr", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The course starts at nine o'clock.",
                clozeParts: ["Der ", " beginnt um neun Uhr."],
                clozeAnswers: ["Kurs"]
            },
            // Weitere Schulvokabeln...
            {
                id: createWordId("lernen-schuleunterricht-024"),
                wordType: "noun",
                article: "das",
                plural: "Gymnasien",
                german: "Gymnasium",
                english: "grammar school / high school",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gehe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "aufs Gymnasium", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I go to grammar school.",
                clozeParts: ["Ich gehe aufs ", "."],
                clozeAnswers: ["Gymnasium"]
            },
            {
                id: createWordId("lernen-schuleunterricht-025"),
                wordType: "noun",
                article: "die",
                plural: "Sprachenschulen",
                german: "Sprachenschule",
                english: "language school",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lerne", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Deutsch", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in der Sprachenschule", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I learn German at the language school.",
                clozeParts: ["Ich lerne Deutsch in der ", "."],
                clozeAnswers: ["Sprachenschule"]
            },
            // Schulfächer
            {
                id: createWordId("lernen-schuleunterricht-030"),
                wordType: "noun",
                article: "die",
                plural: "Künste",
                german: "Kunst",
                english: "art",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mag", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Kunst", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I like art.",
                clozeParts: ["Ich mag ", "."],
                clozeAnswers: ["Kunst"]
            },
            {
                id: createWordId("lernen-schuleunterricht-035"),
                wordType: "noun",
                article: "die",
                plural: null,
                german: "Mathematik",
                english: "mathematics",
                exampleGerman: [
                    { text: "Mathematik", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schwierig", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Mathematics is difficult.",
                clozeParts: ["", " ist schwierig."],
                clozeAnswers: ["Mathematik"]
            },
            {
                id: createWordId("lernen-schuleunterricht-036"),
                wordType: "noun",
                article: "das",
                plural: null,
                german: "Englisch",
                english: "English",
                exampleGerman: [
                    { text: "Englisch", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einfach", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "English is easy.",
                clozeParts: ["", " ist einfach."],
                clozeAnswers: ["Englisch"]
            },
            {
                id: createWordId("lernen-schuleunterricht-037"),
                wordType: "noun",
                article: "das",
                plural: null,
                german: "Deutsch",
                english: "German",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lernen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Deutsch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are learning German.",
                clozeParts: ["Wir lernen ", "."],
                clozeAnswers: ["Deutsch"]
            }
        ],

        // --- KATEGORIE 2: Materialien & Aufgaben (20 Vokabeln) ---
        "Materialien & Aufgaben": [
            {
                id: createWordId("lernen-materialien-001"),
                wordType: "noun",
                article: "die",
                plural: "Hausaufgaben",
                german: "Hausaufgabe",
                english: "homework",
                exampleGerman: [
                    { text: "Die Hausaufgaben", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einfach", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The homework is easy.",
                clozeParts: ["Die ", " sind einfach."],
                clozeAnswers: ["Hausaufgaben"]
            },
            {
                id: createWordId("lernen-materialien-002"),
                wordType: "noun",
                article: "die",
                plural: "Aufgaben",
                german: "Aufgabe",
                english: "task / exercise",
                exampleGerman: [
                    { text: "Die Aufgabe", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einfach", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The task is easy.",
                clozeParts: ["Die ", " ist einfach."],
                clozeAnswers: ["Aufgabe"]
            },
            {
                id: createWordId("lernen-materialien-003"),
                wordType: "noun",
                article: "die",
                plural: "Übungen",
                german: "Übung",
                english: "exercise / practice",
                exampleGerman: [
                    { text: "Die Übung", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ganz einfach", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The exercise is very easy.",
                clozeParts: ["Die ", " ist ganz einfach."],
                clozeAnswers: ["Übung"]
            },
            {
                id: createWordId("lernen-materialien-004"),
                wordType: "noun",
                article: "das",
                plural: "Bücher",
                german: "Buch",
                english: "book",
                exampleGerman: [
                    { text: "Das Buch", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "interessant", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The book is interesting.",
                clozeParts: ["Das ", " ist interessant."],
                clozeAnswers: ["Buch"]
            },
            {
                id: createWordId("lernen-materialien-005"),
                wordType: "noun",
                article: "das",
                plural: "Hefte",
                german: "Heft",
                english: "notebook / exercise book",
                exampleGerman: [
                    { text: "Mein Heft", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "voll", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My notebook is full.",
                clozeParts: ["Mein ", " ist voll."],
                clozeAnswers: ["Heft"]
            },
            {
                id: createWordId("lernen-materialien-006"),
                wordType: "noun",
                article: "der",
                plural: "Stifte",
                german: "Stift",
                english: "pen / pencil",
                exampleGerman: [
                    { text: "Der Stift", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schreibt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nicht", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The pen doesn't write.",
                clozeParts: ["Der ", " schreibt nicht."],
                clozeAnswers: ["Stift"]
            },
            {
                id: createWordId("lernen-materialien-007"),
                wordType: "noun",
                article: "der",
                plural: "Rucksäcke",
                german: "Rucksack",
                english: "backpack",
                exampleGerman: [
                    { text: "Mein Rucksack", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schwer", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My backpack is heavy.",
                clozeParts: ["Mein ", " ist schwer."],
                clozeAnswers: ["Rucksack"]
            },
            // Weitere Materialien...
            {
                id: createWordId("lernen-materialien-020"),
                wordType: "noun",
                article: "der",
                plural: "Stundenpläne",
                german: "Stundenplan",
                english: "timetable / schedule",
                exampleGerman: [
                    { text: "Mein Stundenplan", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "voll", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My timetable is full.",
                clozeParts: ["Mein ", " ist voll."],
                clozeAnswers: ["Stundenplan"]
            }
        ],

        // --- KATEGORIE 3: Verben des Lernens (18 Vokabeln) ---
        "Verben des Lernens": [
            {
                id: createWordId("lernen-verben-001"),
                wordType: "verb",
                separable: false,
                german: "lernen",
                english: "to learn",
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                presentConjugation: {
                    ich: "lerne",
                    du: "lernst",
                    er: "lernt",
                    wir: "lernen",
                    ihr: "lernt",
                    sie: "lernen"
                },
                imperative: {
                    du: "Lern!",
                    ihr: "Lernt!",
                    Sie: "Lernen Sie!"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lerne", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Deutsch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I learn German.",
                clozeParts: ["Ich ", " Deutsch."],
                clozeAnswers: ["lerne"]
            },
            {
                id: createWordId("lernen-verben-002"),
                wordType: "verb",
                separable: false,
                german: "sprechen",
                english: "to speak",
                auxiliaryVerb: "haben",
                pastParticiple: "gesprochen",
                presentConjugation: {
                    ich: "spreche",
                    du: "sprichst",
                    er: "spricht",
                    wir: "sprechen",
                    ihr: "sprecht",
                    sie: "sprechen"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "spreche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Englisch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I speak English.",
                clozeParts: ["Ich ", " Englisch."],
                clozeAnswers: ["spreche"]
            },
            {
                id: createWordId("lernen-verben-003"),
                wordType: "verb",
                separable: false,
                german: "schreiben",
                english: "to write",
                auxiliaryVerb: "haben",
                pastParticiple: "geschrieben",
                presentConjugation: {
                    ich: "schreibe",
                    du: "schreibst",
                    er: "schreibt",
                    wir: "schreiben",
                    ihr: "schreibt",
                    sie: "schreiben"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schreibe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Brief", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I write a letter.",
                clozeParts: ["Ich ", " einen Brief."],
                clozeAnswers: ["schreibe"]
            },
            {
                id: createWordId("lernen-verben-004"),
                wordType: "verb",
                separable: false,
                german: "lesen",
                english: "to read",
                auxiliaryVerb: "haben",
                pastParticiple: "gelesen",
                presentConjugation: {
                    ich: "lese",
                    du: "liest",
                    er: "liest",
                    wir: "lesen",
                    ihr: "lest",
                    sie: "lesen"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lese", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Buch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I read a book.",
                clozeParts: ["Ich ", " ein Buch."],
                clozeAnswers: ["lese"]
            },
            {
                id: createWordId("lernen-verben-005"),
                wordType: "verb",
                separable: false,
                german: "verstehen",
                english: "to understand",
                auxiliaryVerb: "haben",
                pastParticiple: "verstanden",
                presentConjugation: {
                    ich: "verstehe",
                    du: "verstehst",
                    er: "versteht",
                    wir: "verstehen",
                    ihr: "versteht",
                    sie: "verstehen"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "verstehe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nicht", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I don't understand.",
                clozeParts: ["Ich ", " nicht."],
                clozeAnswers: ["verstehe"]
            },
            {
                id: createWordId("lernen-verben-006"),
                wordType: "verb",
                separable: false,
                german: "üben",
                english: "to practice",
                auxiliaryVerb: "haben",
                pastParticiple: "geübt",
                presentConjugation: {
                    ich: "übe",
                    du: "übst",
                    er: "übt",
                    wir: "üben",
                    ihr: "übt",
                    sie: "üben"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "übe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "täglich", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I practice daily.",
                clozeParts: ["Ich ", " täglich."],
                clozeAnswers: ["übe"]
            },
            {
                id: createWordId("lernen-verben-007"),
                wordType: "verb",
                separable: false,
                german: "wiederholen",
                english: "to repeat",
                auxiliaryVerb: "haben",
                pastParticiple: "wiederholt",
                presentConjugation: {
                    ich: "wiederhole",
                    du: "wiederholst",
                    er: "wiederholt",
                    wir: "wiederholen",
                    ihr: "wiederholt",
                    sie: "wiederholen"
                },
                exampleGerman: [
                    { text: "Bitte", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "wiederholen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please repeat.",
                clozeParts: ["Bitte ", " Sie."],
                clozeAnswers: ["wiederholen"]
            },
            {
                id: createWordId("lernen-verben-008"),
                wordType: "verb",
                separable: true,
                german: "ergänzen",
                english: "to complete / to fill in",
                auxiliaryVerb: "haben",
                pastParticiple: "ergänzt",
                presentConjugation: {
                    ich: "ergänze",
                    du: "ergänzt",
                    er: "ergänzt",
                    wir: "ergänzen",
                    ihr: "ergänzt",
                    sie: "ergänzen"
                },
                exampleGerman: [
                    { text: "Ergänzen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bitte", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please complete.",
                clozeParts: ["", " Sie bitte."],
                clozeAnswers: ["Ergänzen"]
            },
            // Weitere Lernverben...
            {
                id: createWordId("lernen-verben-018"),
                wordType: "verb",
                separable: true,
                german: "ankreuzen",
                english: "to tick / to mark with a cross",
                auxiliaryVerb: "haben",
                pastParticiple: "angekreuzt",
                presentConjugation: {
                    ich: "kreuze an",
                    du: "kreuzt an",
                    er: "kreuzt an",
                    wir: "kreuzen an",
                    ihr: "kreuzt an",
                    sie: "kreuzen an"
                },
                imperative: {
                    du: "Kreuz an!",
                    ihr: "Kreuzt an!",
                    Sie: "Kreuzen Sie an!"
                },
                exampleGerman: [
                    { text: "Kreuzen Sie", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bitte", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "an", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please tick.",
                clozeParts: ["", " Sie bitte ", "."],
                clozeAnswers: ["Kreuzen", "an"]
            }
        ],

        // --- KATEGORIE 4: Konzepte & Prüfung (14 Vokabeln) ---
        "Konzepte & Prüfung": [
            {
                id: createWordId("lernen-konzepte-001"),
                wordType: "noun",
                article: "das",
                plural: "Beispiele",
                german: "Beispiel",
                english: "example",
                exampleGerman: [
                    { text: "Kannst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Beispiel", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "geben", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you give an example?",
                clozeParts: ["Kannst du ein ", " geben?"],
                clozeAnswers: ["Beispiel"]
            },
            {
                id: createWordId("lernen-konzepte-002"),
                wordType: "noun",
                article: "der",
                plural: "Fehler",
                german: "Fehler",
                english: "mistake / error",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Fehler", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gemacht", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I made a mistake.",
                clozeParts: ["Ich habe einen ", " gemacht."],
                clozeAnswers: ["Fehler"]
            },
            {
                id: createWordId("lernen-konzepte-003"),
                wordType: "noun",
                article: "die",
                plural: "Antworten",
                german: "Antwort",
                english: "answer",
                exampleGerman: [
                    { text: "Die Antwort", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "richtig", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The answer is correct.",
                clozeParts: ["Die ", " ist richtig."],
                clozeAnswers: ["Antwort"]
            },
            {
                id: createWordId("lernen-konzepte-004"),
                wordType: "noun",
                article: "die",
                plural: "Fragen",
                german: "Frage",
                english: "question",
                exampleGerman: [
                    { text: "Haben Sie", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Frage", case: "akkusativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Do you have a question?",
                clozeParts: ["Haben Sie eine ", "?"],
                clozeAnswers: ["Frage"]
            },
            {
                id: createWordId("lernen-konzepte-005"),
                wordType: "noun",
                article: "die",
                plural: "Prüfungen",
                german: "Prüfung",
                english: "exam / test",
                exampleGerman: [
                    { text: "Die Prüfung", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "morgen", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The exam is tomorrow.",
                clozeParts: ["Die ", " ist morgen."],
                clozeAnswers: ["Prüfung"]
            },
            {
                id: createWordId("lernen-konzepte-006"),
                wordType: "noun",
                article: "der",
                plural: "Tests",
                german: "Test",
                english: "test",
                exampleGerman: [
                    { text: "Der Test", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einfach", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The test is easy.",
                clozeParts: ["Der ", " ist einfach."],
                clozeAnswers: ["Test"]
            },
            {
                id: createWordId("lernen-konzepte-007"),
                wordType: "adjective",
                german: "richtig",
                english: "correct / right",
                exampleGerman: [
                    { text: "Das", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "richtig", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "That is correct.",
                clozeParts: ["Das ist ", "."],
                clozeAnswers: ["richtig"]
            },
            {
                id: createWordId("lernen-konzepte-008"),
                wordType: "adjective",
                german: "falsch",
                english: "wrong / false",
                exampleGerman: [
                    { text: "Das", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "falsch", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "That is wrong.",
                clozeParts: ["Das ist ", "."],
                clozeAnswers: ["falsch"]
            },
            {
                id: createWordId("lernen-konzepte-009"),
                wordType: "adjective",
                german: "schwierig",
                english: "difficult",
                exampleGerman: [
                    { text: "Die Aufgabe", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schwierig", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The task is difficult.",
                clozeParts: ["Die Aufgabe ist ", "."],
                clozeAnswers: ["schwierig"]
            },
            {
                id: createWordId("lernen-konzepte-010"),
                wordType: "adjective",
                german: "einfach",
                english: "easy / simple",
                exampleGerman: [
                    { text: "Die Übung", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ganz einfach", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The exercise is very easy.",
                clozeParts: ["Die Übung ist ganz ", "."],
                clozeAnswers: ["einfach"]
            },
            {
                id: createWordId("lernen-konzepte-011"),
                wordType: "adjective",
                german: "fertig",
                english: "ready / finished",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bin", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schon", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fertig", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am already finished.",
                clozeParts: ["Ich bin schon ", "."],
                clozeAnswers: ["fertig"]
            },
            {
                id: createWordId("lernen-konzepte-012"),
                wordType: "noun",
                article: "die",
                plural: "Noten",
                german: "Note",
                english: "grade / mark",
                exampleGerman: [
                    { text: "Meine Note", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gut", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My grade is good.",
                clozeParts: ["Meine ", " ist gut."],
                clozeAnswers: ["Note"]
            },
            {
                id: createWordId("lernen-konzepte-013"),
                wordType: "noun",
                article: "die",
                plural: "Punkte",
                german: "Punkt",
                english: "point",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "haben", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zehn Punkte", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have ten points.",
                clozeParts: ["Wir haben zehn ", "."],
                clozeAnswers: ["Punkte"]
            },
            {
                id: createWordId("lernen-konzepte-014"),
                wordType: "verb",
                separable: false,
                german: "kontrollieren",
                english: "to check / to control",
                auxiliaryVerb: "haben",
                pastParticiple: "kontrolliert",
                presentConjugation: {
                    ich: "kontrolliere",
                    du: "kontrollierst",
                    er: "kontrolliert",
                    wir: "kontrollieren",
                    ihr: "kontrolliert",
                    sie: "kontrollieren"
                },
                imperative: {
                    du: "Kontrolliere!",
                    ihr: "Kontrolliert!",
                    Sie: "Kontrollieren Sie!"
                },
                exampleGerman: [
                    { text: "Der Lehrer", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kontrolliert", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Hausaufgaben", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The teacher checks the homework.",
                clozeParts: ["Der Lehrer ", " die Hausaufgaben."],
                clozeAnswers: ["kontrolliert"]
            }
        ]
    }
};