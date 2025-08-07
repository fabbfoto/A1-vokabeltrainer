// packages/trainer-themen/vokabular_wortgruppen.ts
// Converted from a2-vokabeltrainer/wortgruppen.js to match vocabulary.ts structure
// Contains all 91 words from the original JavaScript file

import type {VocabularyStructure, 
    Word, 
    Noun, 
    Verb, 
    Adjective,
    WordId,
    CaseElement 
} from './src/core/types/vocabulary';
import {createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabularWortgruppen: VocabularyStructure = createVocabulary({
    "Wortgruppen": {
        // --- SUB-TOPIC: Farben ---
        "Farben": [
            {
                id: createWordId("wortgruppen-farben-001"),
                wordType: 'adjective',
                german: "schwarz",
                english: "black",
                exampleGerman: [
                    { text: "Das Gegenteil", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "von weiß", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "schwarz", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The opposite of white is black.",
                clozeParts: ["Das Gegenteil von weiß ist ", "."],
                clozeAnswers: ["schwarz"]
            } as Adjective,
            {
                id: createWordId("wortgruppen-farben-002"),
                wordType: 'adjective',
                german: "weiß",
                english: "white",
                exampleGerman: [
                    { text: "Der Sand", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "so", case: "none" },
                    { text: " ", case: "none" },
                    { text: "weiß", case: "none" },
                    { text: " ", case: "none" },
                    { text: "wie Schnee", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The sand is as white as snow.",
                clozeParts: ["Der Sand ist so ", " wie Schnee."],
                clozeAnswers: ["weiß"]
            } as Adjective,
            {
                id: createWordId("wortgruppen-farben-003"),
                wordType: 'adjective',
                german: "rot",
                english: "red",
                exampleGerman: [
                    { text: "Die Ampel", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "rot", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The traffic light is red.",
                clozeParts: ["Die Ampel ist ", "."],
                clozeAnswers: ["rot"]
            } as Adjective,
            {
                id: createWordId("wortgruppen-farben-004"),
                wordType: 'adjective',
                german: "gelb",
                english: "yellow",
                exampleGerman: [
                    { text: "Die Zitrone", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gelb", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The lemon is yellow.",
                clozeParts: ["Die Zitrone ist ", "."],
                clozeAnswers: ["gelb"]
            } as Adjective,
            {
                id: createWordId("wortgruppen-farben-005"),
                wordType: 'adjective',
                german: "grün",
                english: "green",
                exampleGerman: [
                    { text: "Das Gras", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "grün", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The grass is green.",
                clozeParts: ["Das Gras ist ", "."],
                clozeAnswers: ["grün"]
            } as Adjective,
            {
                id: createWordId("wortgruppen-farben-006"),
                wordType: 'adjective',
                german: "blau",
                english: "blue",
                exampleGerman: [
                    { text: "Der Himmel", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "blau", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The sky is blue.",
                clozeParts: ["Der Himmel ist ", "."],
                clozeAnswers: ["blau"]
            } as Adjective,
            {
                id: createWordId("wortgruppen-farben-007"),
                wordType: 'adjective',
                german: "braun",
                english: "brown",
                exampleGerman: [
                    { text: "Der Bär", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "braun", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The bear is brown.",
                clozeParts: ["Der Bär ist ", "."],
                clozeAnswers: ["braun"]
            } as Adjective,
            {
                id: createWordId("wortgruppen-farben-008"),
                wordType: 'adjective',
                german: "grau",
                english: "grey",
                exampleGerman: [
                    { text: "Die Maus", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "grau", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The mouse is grey.",
                clozeParts: ["Die Maus ist ", "."],
                clozeAnswers: ["grau"]
            } as Adjective,
            {
                id: createWordId("wortgruppen-farben-009"),
                wordType: 'adjective',
                german: "blond",
                english: "blond",
                exampleGerman: [
                    { text: "Ihre Haare", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "blond", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Her hair is blond.",
                clozeParts: ["Ihre Haare sind ", "."],
                clozeAnswers: ["blond"]
            } as Adjective
        ],

        // --- SUB-TOPIC: Monatsnamen ---
        "Monatsnamen": [
            {
                id: createWordId("wortgruppen-monate-001"),
                wordType: 'noun',
                german: "Januar",
                article: "der",
                plural: "Januare",
                english: "January",
                exampleGerman: [
                    { text: "Im Januar", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "oft", case: "none" },
                    { text: " ", case: "none" },
                    { text: "kalt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In January it is often cold.",
                clozeParts: ["Im ", " ist es oft kalt."],
                clozeAnswers: ["Januar"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-002"),
                wordType: 'noun',
                german: "Februar",
                article: "der",
                plural: "Februare",
                english: "February",
                exampleGerman: [
                    { text: "Der Februar", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "kurz", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "February is short.",
                clozeParts: ["Der ", " ist kurz."],
                clozeAnswers: ["Februar"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-003"),
                wordType: 'noun',
                german: "März",
                article: "der",
                plural: "Märze",
                english: "March",
                exampleGerman: [
                    { text: "Im März", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "beginnt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "der Frühling", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In March spring begins.",
                clozeParts: ["Im ", " beginnt der Frühling."],
                clozeAnswers: ["März"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-004"),
                wordType: 'noun',
                german: "April",
                article: "der",
                plural: "Aprile",
                english: "April",
                exampleGerman: [
                    { text: "Der April", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "macht", case: "verb" },
                    { text: ",", case: "none" },
                    { text: " ", case: "none" },
                    { text: "was", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "will", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "April does what it wants.",
                clozeParts: ["Der ", " macht, was er will."],
                clozeAnswers: ["April"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-005"),
                wordType: 'noun',
                german: "Mai",
                article: "der",
                plural: "Maie",
                english: "May",
                exampleGerman: [
                    { text: "Im Mai", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "blühen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "viele Blumen", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In May many flowers bloom.",
                clozeParts: ["Im ", " blühen viele Blumen."],
                clozeAnswers: ["Mai"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-006"),
                wordType: 'noun',
                german: "Juni",
                article: "der",
                plural: "Junis",
                english: "June",
                exampleGerman: [
                    { text: "Der Juni", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "lange Tage", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "June has long days.",
                clozeParts: ["Der ", " hat lange Tage."],
                clozeAnswers: ["Juni"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-007"),
                wordType: 'noun',
                german: "Juli",
                article: "der",
                plural: "Julis",
                english: "July",
                exampleGerman: [
                    { text: "Im Juli", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "oft", case: "none" },
                    { text: " ", case: "none" },
                    { text: "heiß", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In July it is often hot.",
                clozeParts: ["Im ", " ist es oft heiß."],
                clozeAnswers: ["Juli"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-008"),
                wordType: 'noun',
                german: "August",
                article: "der",
                plural: "Auguste",
                english: "August",
                exampleGerman: [
                    { text: "Viele Leute", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "haben", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im August", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "Urlaub", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Many people have holidays in August.",
                clozeParts: ["Viele Leute haben im ", " Urlaub."],
                clozeAnswers: ["August"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-009"),
                wordType: 'noun',
                german: "September",
                article: "der",
                plural: "September",
                english: "September",
                exampleGerman: [
                    { text: "Im September", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "beginnt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die Schule", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In September school begins.",
                clozeParts: ["Im ", " beginnt die Schule."],
                clozeAnswers: ["September"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-010"),
                wordType: 'noun',
                german: "Oktober",
                article: "der",
                plural: "Oktober",
                english: "October",
                exampleGerman: [
                    { text: "Der Oktober", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "oft", case: "none" },
                    { text: " ", case: "none" },
                    { text: "golden", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "October is often golden.",
                clozeParts: ["Der ", " ist oft golden."],
                clozeAnswers: ["Oktober"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-011"),
                wordType: 'noun',
                german: "November",
                article: "der",
                plural: "November",
                english: "November",
                exampleGerman: [
                    { text: "Im November", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "fallen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die Blätter", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In November the leaves fall.",
                clozeParts: ["Im ", " fallen die Blätter."],
                clozeAnswers: ["November"]
            } as Noun,
            {
                id: createWordId("wortgruppen-monate-012"),
                wordType: 'noun',
                german: "Dezember",
                article: "der",
                plural: "Dezember",
                english: "December",
                exampleGerman: [
                    { text: "Im Dezember", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Weihnachten", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In December is Christmas.",
                clozeParts: ["Im ", " ist Weihnachten."],
                clozeAnswers: ["Dezember"]
            } as Noun
        ],

        // --- SUB-TOPIC: Zahlen ---
        "Zahlen": [
            {
                id: createWordId("wortgruppen-zahlen-001"),
                wordType: 'noun',
                german: "eins",
                english: "one",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "einen Apfel", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have one apple.",
                clozeParts: ["Ich habe ", " Apfel."],
                clozeAnswers: ["einen"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-002"),
                wordType: 'noun',
                german: "zwei",
                english: "two",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "haben", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "zwei Katzen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We have two cats.",
                clozeParts: ["Wir haben ", " Katzen."],
                clozeAnswers: ["zwei"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-003"),
                wordType: 'noun',
                german: "drei",
                english: "three",
                exampleGerman: [
                    { text: "Drei Kinder", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spielen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im Park", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Three children are playing in the park.",
                clozeParts: ["", " Kinder spielen im Park."],
                clozeAnswers: ["Drei"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-004"),
                wordType: 'noun',
                german: "vier",
                english: "four",
                exampleGerman: [
                    { text: "Das Auto", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "vier Räder", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The car has four wheels.",
                clozeParts: ["Das Auto hat ", " Räder."],
                clozeAnswers: ["vier"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-005"),
                wordType: 'noun',
                german: "fünf",
                english: "five",
                exampleGerman: [
                    { text: "Eine Hand", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "fünf Finger", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "A hand has five fingers.",
                clozeParts: ["Eine Hand hat ", " Finger."],
                clozeAnswers: ["fünf"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-006"),
                wordType: 'noun',
                german: "sechs",
                english: "six",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "arbeitet", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sechs Tage die Woche", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He works six days a week.",
                clozeParts: ["Er arbeitet ", " Tage die Woche."],
                clozeAnswers: ["sechs"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-007"),
                wordType: 'noun',
                german: "sieben",
                english: "seven",
                exampleGerman: [
                    { text: "Die Woche", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sieben Tage", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The week has seven days.",
                clozeParts: ["Die Woche hat ", " Tage."],
                clozeAnswers: ["sieben"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-008"),
                wordType: 'noun',
                german: "acht",
                english: "eight",
                exampleGerman: [
                    { text: "Die Spinne", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "acht Beine", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The spider has eight legs.",
                clozeParts: ["Die Spinne hat ", " Beine."],
                clozeAnswers: ["acht"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-009"),
                wordType: 'noun',
                german: "neun",
                english: "nine",
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "fast neun Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It is almost nine o'clock.",
                clozeParts: ["Es ist fast ", " Uhr."],
                clozeAnswers: ["neun"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-010"),
                wordType: 'noun',
                german: "zehn",
                english: "ten",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "zehn Euro", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have ten euros.",
                clozeParts: ["Ich habe ", " Euro."],
                clozeAnswers: ["zehn"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-011"),
                wordType: 'noun',
                german: "elf",
                english: "eleven",
                exampleGerman: [
                    { text: "Die Fußballmannschaft", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "elf Spieler", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The football team has eleven players.",
                clozeParts: ["Die Fußballmannschaft hat ", " Spieler."],
                clozeAnswers: ["elf"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-012"),
                wordType: 'noun',
                german: "zwölf",
                english: "twelve",
                exampleGerman: [
                    { text: "Das Jahr", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "zwölf Monate", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The year has twelve months.",
                clozeParts: ["Das Jahr hat ", " Monate."],
                clozeAnswers: ["zwölf"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-013"),
                wordType: 'noun',
                german: "zwanzig",
                english: "twenty",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "zwanzig Jahre alt", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am twenty years old.",
                clozeParts: ["Ich bin ", " Jahre alt."],
                clozeAnswers: ["zwanzig"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-014"),
                wordType: 'noun',
                german: "hundert",
                english: "hundred",
                exampleGerman: [
                    { text: "Das Buch", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "hundert Seiten", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The book has one hundred pages.",
                clozeParts: ["Das Buch hat ", " Seiten."],
                clozeAnswers: ["hundert"]
            } as Noun,
            {
                id: createWordId("wortgruppen-zahlen-015"),
                wordType: 'noun',
                german: "tausend",
                english: "thousand",
                exampleGerman: [
                    { text: "Die Stadt", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "tausend Einwohner", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The city has a thousand inhabitants.",
                clozeParts: ["Die Stadt hat ", " Einwohner."],
                clozeAnswers: ["tausend"]
            } as Noun
        ],

        // --- SUB-TOPIC: Uhrzeit ---
        "Uhrzeit": [
            {
                id: createWordId("wortgruppen-uhrzeit-001"),
                wordType: 'noun',
                german: "sieben Uhr drei",
                english: "seven oh three (7:03)",
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sieben Uhr drei", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It is seven oh three.",
                clozeParts: ["Es ist ", "."],
                clozeAnswers: ["sieben Uhr drei"]
            } as Noun,
            {
                id: createWordId("wortgruppen-uhrzeit-002"),
                wordType: 'noun',
                german: "drei Uhr fünfzehn",
                english: "three fifteen (3:15)",
                exampleGerman: [
                    { text: "Der Zug", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fährt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "um drei Uhr fünfzehn", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The train leaves at three fifteen.",
                clozeParts: ["Der Zug fährt um ", "."],
                clozeAnswers: ["drei Uhr fünfzehn"]
            } as Noun,
            {
                id: createWordId("wortgruppen-uhrzeit-003"),
                wordType: 'noun',
                german: "fünfzehn Uhr dreißig",
                english: "fifteen thirty (3:30 PM)",
                exampleGerman: [
                    { text: "Das Meeting", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "um fünfzehn Uhr dreißig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The meeting is at fifteen thirty.",
                clozeParts: ["Das Meeting ist um ", "."],
                clozeAnswers: ["fünfzehn Uhr dreißig"]
            } as Noun,
            {
                id: createWordId("wortgruppen-uhrzeit-004"),
                wordType: 'noun',
                german: "halb zwölf",
                english: "half past eleven (11:30)",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "treffen uns", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "um halb zwölf", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We meet at half past eleven.",
                clozeParts: ["Wir treffen uns um ", "."],
                clozeAnswers: ["halb zwölf"]
            } as Noun,
            {
                id: createWordId("wortgruppen-uhrzeit-005"),
                wordType: 'noun',
                german: "ein Uhr",
                english: "one o'clock (13:00)",
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "jetzt genau ein Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It is exactly one o'clock now.",
                clozeParts: ["Es ist jetzt genau ", "."],
                clozeAnswers: ["ein Uhr"]
            } as Noun
        ],

        // --- SUB-TOPIC: Berufe ---
        "Berufe": [
            {
                id: createWordId("wortgruppen-berufe-001"),
                wordType: 'noun',
                german: "Architekt",
                article: "der",
                plural: "Architekten",
                english: "architect",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Architekt", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "werden", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I want to become an architect.",
                clozeParts: ["Ich möchte ", " werden."],
                clozeAnswers: ["Architekt"]
            } as Noun,
            {
                id: createWordId("wortgruppen-berufe-002"),
                wordType: 'noun',
                german: "Hausmann",
                article: "der",
                plural: "Hausmänner",
                english: "house husband, stay-at-home dad",
                exampleGerman: [
                    { text: "Sein Vater", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Hausmann", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "und", case: "none" },
                    { text: " ", case: "none" },
                    { text: "kümmert sich", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "um die Kinder", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "His father is a house husband and takes care of the children.",
                clozeParts: ["Sein Vater ist ", " und kümmert sich um die Kinder."],
                clozeAnswers: ["Hausmann"]
            } as Noun,
            {
                id: createWordId("wortgruppen-berufe-003"),
                wordType: 'noun',
                german: "Hausfrau",
                article: "die",
                plural: "Hausfrauen",
                english: "housewife",
                exampleGerman: [
                    { text: "Ihre Mutter", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Hausfrau", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "und", case: "none" },
                    { text: " ", case: "none" },
                    { text: "arbeitet", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "nicht", case: "none" },
                    { text: " ", case: "none" },
                    { text: "im Büro", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Her mother is a housewife and does not work in an office.",
                clozeParts: ["Ihre Mutter ist ", " und arbeitet nicht im Büro."],
                clozeAnswers: ["Hausfrau"]
            } as Noun,
            {
                id: createWordId("wortgruppen-berufe-004"),
                wordType: 'noun',
                german: "Techniker",
                article: "der",
                plural: "Techniker",
                english: "technician",
                exampleGerman: [
                    { text: "Ein Techniker", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "repariert", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die kaputte Heizung", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "A technician is repairing the broken heating.",
                clozeParts: ["Ein ", " repariert die kaputte Heizung."],
                clozeAnswers: ["Techniker"]
            } as Noun,
            {
                id: createWordId("wortgruppen-berufe-005"),
                wordType: 'noun',
                german: "Lehrer",
                article: "der",
                plural: "Lehrer",
                english: "teacher",
                exampleGerman: [
                    { text: "Sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "der neue Lehrer", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Are you the new teacher?",
                clozeParts: ["Sind Sie der neue ", "?"],
                clozeAnswers: ["Lehrer"]
            } as Noun,
            {
                id: createWordId("wortgruppen-berufe-006"),
                wordType: 'noun',
                german: "Künstler",
                article: "der",
                plural: "Künstler",
                english: "artist",
                exampleGerman: [
                    { text: "Der Künstler", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "malt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Bild", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "von der Stadt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The artist is painting a picture of the city.",
                clozeParts: ["Der ", " malt ein Bild von der Stadt."],
                clozeAnswers: ["Künstler"]
            } as Noun,
            {
                id: createWordId("wortgruppen-berufe-007"),
                wordType: 'noun',
                german: "Ingenieur",
                article: "der",
                plural: "Ingenieure",
                english: "engineer",
                exampleGerman: [
                    { text: "Mein Bruder", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Ingenieur", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bei einer großen Firma", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My brother is an engineer at a large company.",
                clozeParts: ["Mein Bruder ist ", " bei einer großen Firma."],
                clozeAnswers: ["Ingenieur"]
            } as Noun,
            {
                id: createWordId("wortgruppen-berufe-008"),
                wordType: 'noun',
                german: "Kaufmann",
                article: "der",
                plural: "Kaufleute",
                english: "businessman, merchant",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Kaufmann", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "und", case: "none" },
                    { text: " ", case: "none" },
                    { text: "reist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sehr viel", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He is a businessman and travels a lot.",
                clozeParts: ["Er ist ", " und reist sehr viel."],
                clozeAnswers: ["Kaufmann"]
            } as Noun,
            {
                id: createWordId("wortgruppen-berufe-009"),
                wordType: 'noun',
                german: "Arzt",
                article: "der",
                plural: "Ärzte",
                english: "doctor",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "war", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "beim Arzt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He was at the doctor's.",
                clozeParts: ["Er war beim ", "."],
                clozeAnswers: ["Arzt"]
            } as Noun,
            {
                id: createWordId("wortgruppen-berufe-010"),
                wordType: 'noun',
                german: "Schauspieler",
                article: "der",
                plural: "Schauspieler",
                english: "actor",
                exampleGerman: [
                    { text: "Der Schauspieler", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "aus vielen Filmen", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "bekannt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The actor is known from many movies.",
                clozeParts: ["Der ", " ist aus vielen Filmen bekannt."],
                clozeAnswers: ["Schauspieler"]
            } as Noun,
            {
                id: createWordId("wortgruppen-berufe-011"),
                wordType: 'noun',
                german: "Sekretär",
                article: "der",
                plural: "Sekretäre",
                english: "secretary",
                exampleGerman: [
                    { text: "Der Sekretär", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "organisiert", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die Termine", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "für seinen Chef", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The secretary organizes the appointments for his boss.",
                clozeParts: ["Der ", " organisiert die Termine für seinen Chef."],
                clozeAnswers: ["Sekretär"]
            } as Noun
        ],

        // --- SUB-TOPIC: Familienmitglieder ---
        "Familienmitglieder": [
            {
                id: createWordId("wortgruppen-familie-001"),
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
                id: createWordId("wortgruppen-familie-002"),
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
                id: createWordId("wortgruppen-familie-003"),
                wordType: 'noun',
                german: "Eltern",
                article: "die",
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
                id: createWordId("wortgruppen-familie-004"),
                wordType: 'noun',
                german: "Kind",
                article: "das",
                plural: "Kinder",
                english: "child",
                exampleGerman: [
                    { text: "Die Kinder", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "noch", case: "none" },
                    { text: " ", case: "none" },
                    { text: "in der Schule", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The children are still at school.",
                clozeParts: ["Die ", " sind noch in der Schule."],
                clozeAnswers: ["Kinder"]
            } as Noun,
            {
                id: createWordId("wortgruppen-familie-005"),
                wordType: 'noun',
                german: "Bruder",
                article: "der",
                plural: "Brüder",
                english: "brother",
                exampleGerman: [
                    { text: "Das", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mein Bruder", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "This is my brother.",
                clozeParts: ["Das ist mein ", "."],
                clozeAnswers: ["Bruder"]
            } as Noun,
            {
                id: createWordId("wortgruppen-familie-006"),
                wordType: 'noun',
                german: "Schwester",
                article: "die",
                plural: "Schwestern",
                english: "sister",
                exampleGerman: [
                    { text: "Nächste Woche", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "heiratet", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meine Schwester", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Next week my sister is getting married.",
                clozeParts: ["Nächste Woche heiratet meine ", "."],
                clozeAnswers: ["Schwester"]
            } as Noun,
            {
                id: createWordId("wortgruppen-familie-007"),
                wordType: 'noun',
                german: "Geschwister",
                article: "die",
                english: "siblings",
                exampleGerman: [
                    { text: "Hast", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Geschwister", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you have siblings?",
                clozeParts: ["Hast du ", "?"],
                clozeAnswers: ["Geschwister"]
            } as Noun,
            {
                id: createWordId("wortgruppen-familie-008"),
                wordType: 'noun',
                german: "Tante",
                article: "die",
                plural: "Tanten",
                english: "aunt",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "will", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meine Tante", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "besuchen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I want to visit my aunt.",
                clozeParts: ["Ich will meine ", " besuchen."],
                clozeAnswers: ["Tante"]
            } as Noun,
            {
                id: createWordId("wortgruppen-familie-009"),
                wordType: 'noun',
                german: "Onkel",
                article: "der",
                plural: "Onkel",
                english: "uncle",
                exampleGerman: [
                    { text: "Der Computer", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Geschenk", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "von meinem Onkel", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The computer is a gift from my uncle.",
                clozeParts: ["Der Computer ist ein Geschenk von meinem ", "."],
                clozeAnswers: ["Onkel"]
            } as Noun,
            {
                id: createWordId("wortgruppen-familie-010"),
                wordType: 'noun',
                german: "Großmutter",
                article: "die",
                plural: "Großmütter",
                english: "grandmother",
                exampleGerman: [
                    { text: "Meine Großmutter", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "erzählt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die besten Geschichten", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My grandmother tells the best stories.",
                clozeParts: ["Meine ", " erzählt die besten Geschichten."],
                clozeAnswers: ["Großmutter"]
            } as Noun,
            {
                id: createWordId("wortgruppen-familie-011"),
                wordType: 'noun',
                german: "Großvater",
                article: "der",
                plural: "Großväter",
                english: "grandfather",
                exampleGerman: [
                    { text: "Mein Großvater", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "schon", case: "none" },
                    { text: " ", case: "none" },
                    { text: "sehr alt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My grandfather is already very old.",
                clozeParts: ["Mein ", " ist schon sehr alt."],
                clozeAnswers: ["Großvater"]
            } as Noun,
            {
                id: createWordId("wortgruppen-familie-012"),
                wordType: 'noun',
                german: "Großeltern",
                article: "die",
                english: "grandparents",
                exampleGerman: [
                    { text: "Meine Großeltern", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wohnen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "nicht", case: "none" },
                    { text: " ", case: "none" },
                    { text: "bei uns", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My grandparents do not live with us.",
                clozeParts: ["Meine ", " wohnen nicht bei uns."],
                clozeAnswers: ["Großeltern"]
            } as Noun
        ]
    }
});

// Export statistics function
export const getWortgruppenVocabularyStats = () => {
    const stats = {
        totalWords: 0,
        categories: {} as Record<string, number>
    };

    // Count words in each category
    Object.keys(vokabularWortgruppen).forEach(category => {
        const categoryWords = vokabularWortgruppen[category];
        if (categoryWords) {
            Object.keys(categoryWords).forEach(subCategory => {
                const words = categoryWords[subCategory];
                if (words) {
                    stats.categories[subCategory] = words.length;
                    stats.totalWords += words.length;
                }
            });
        }
    });

    return stats;
}; 