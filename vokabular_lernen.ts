// packages/trainer-themen/vokabular_lernen.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_lernen.js

import type {VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary.ts';
import {createWordId, createVocabulary } from './shared/types/vocabulary.ts';

export const vokabularLernen: VocabularyStructure = createVocabulary({"Lernen": {

        // --- NEUE KATEGORIE 1: Orte, Personen & Fächer ---
        "Orte, Personen & Fächer": [
            {
                id: createWordId("lernen-schuleunterricht-001"),
                wordType: "noun",
                german: "Schule",
                article: "die",
                plural: "Schulen",
                english: "school",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-001"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-003"), text: "haben", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-005"), text: "bis ein Uhr", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-007"), text: "Unterricht", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-008"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have lessons until one o'clock.",
                clozeParts: ["Wir haben bis ein Uhr ", "."],
                clozeAnswers: ["Unterricht"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-002"),
                wordType: "noun",
                german: "Unterricht",
                article: "der",
                plural: null,
                english: "lesson(s) / class",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-009"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-011"), text: "haben", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-013"), text: "bis ein Uhr", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-015"), text: "Unterricht", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-016"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have lessons until one o'clock.",
                clozeParts: ["Wir haben bis ein Uhr ", "."],
                clozeAnswers: ["Unterricht"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-003"),
                wordType: "noun",
                german: "Lehrer/Lehrerin",
                article: "der/die",
                plural: "Lehrer/Lehrerinnen",
                english: "teacher (male/female)",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-017"), text: "Der Lehrer", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-019"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-021"), text: "freundlich", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-022"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The teacher is friendly.",
                clozeParts: ["Der ", " ist freundlich."],
                clozeAnswers: ["Lehrer"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-004"),
                wordType: "noun",
                german: "Schüler/Schülerin",
                article: "der/die",
                plural: "Schüler/Schülerinnen",
                english: "student (male/female)",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-023"), text: "Die Schüler", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-025"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-027"), text: "freundlich", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-028"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The students are friendly.",
                clozeParts: ["Die ", " sind freundlich."],
                clozeAnswers: ["Schüler"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-005"),
                wordType: "noun",
                german: "Klasse",
                article: "die",
                plural: "Klassen",
                english: "class",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-029"), text: "In unserer Klasse", case: "dativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-031"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-033"), text: "20 Schüler", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-034"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There are 20 students in our class.",
                clozeParts: ["In unserer ", " sind 20 Schüler."],
                clozeAnswers: ["Klasse"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-024"),
                wordType: "noun",
                german: "Schulfach",
                article: "das",
                plural: "Schulfächer",
                english: "school subject",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-035"), text: "Chemie", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-037"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-039"), text: "mein Lieblingsfach", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-040"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Chemistry is my favorite subject.",
                clozeParts: ["Chemie ist mein Lieblings", "."],
                clozeAnswers: ["fach"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-025"),
                wordType: "noun",
                german: "Gymnasium",
                article: "das",
                plural: "Gymnasien",
                english: "grammar school / high school",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-041"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-043"), text: "gehe", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-045"), text: "aufs Gymnasium", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-046"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I go to grammar school.",
                clozeParts: ["Ich gehe aufs ", "."],
                clozeAnswers: ["Gymnasium"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-026"),
                wordType: "noun",
                german: "Sprachenschule",
                article: "die",
                plural: "Sprachenschulen",
                english: "language school",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-047"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-049"), text: "lerne", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-051"), text: "Deutsch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-053"), text: "in der Sprachenschule", case: "dativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-054"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I learn German at the language school.",
                clozeParts: ["Ich lerne Deutsch in der ", "."],
                clozeAnswers: ["Sprachenschule"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-027"),
                wordType: "noun",
                german: "Goethe-Institut",
                article: "das",
                plural: "Goethe-Institute",
                english: "Goethe-Institut",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-055"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-057"), text: "mache", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-059"), text: "einen Kurs", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-061"), text: "am Goethe-Institut", case: "dativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-062"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am taking a course at the Goethe-Institut.",
                clozeParts: ["Ich mache einen Kurs am ", "."],
                clozeAnswers: ["Goethe-Institut"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-028"),
                wordType: "noun",
                german: "Sozialkunde",
                article: "die",
                plural: null,
                english: "social studies",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-063"), text: "Sozialkunde", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-065"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-067"), text: "interessant", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-068"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Social studies is interesting.",
                clozeParts: ["", " ist interessant."],
                clozeAnswers: ["Sozialkunde"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-029"),
                wordType: "noun",
                german: "Kunst",
                article: "die",
                plural: "Künste",
                english: "art",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-069"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-071"), text: "mag", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-072"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-073"), text: "Kunst", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-074"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I like art.",
                clozeParts: ["Ich mag ", "."],
                clozeAnswers: ["Kunst"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-030"),
                wordType: "noun",
                german: "Sport",
                article: "der",
                plural: null,
                english: "sports / P.E.",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-075"), text: "Sport", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-077"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-078"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-079"), text: "mein Lieblingsfach", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-080"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Sports is my favorite subject.",
                clozeParts: ["", " ist mein Lieblingsfach."],
                clozeAnswers: ["Sport"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-031"),
                wordType: "noun",
                german: "Physik",
                article: "die",
                plural: null,
                english: "physics",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-081"), text: "Physik", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-082"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-083"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-084"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-085"), text: "schwer", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-086"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Physics is difficult.",
                clozeParts: ["", " ist schwer."],
                clozeAnswers: ["Physik"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-032"),
                wordType: "noun",
                german: "Chemie",
                article: "die",
                plural: null,
                english: "chemistry",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-087"), text: "Chemie", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-088"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-089"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-090"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-091"), text: "mein Lieblingsfach", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-092"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Chemistry is my favorite subject.",
                clozeParts: ["", " ist mein Lieblingsfach."],
                clozeAnswers: ["Chemie"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-033"),
                wordType: "noun",
                german: "Geschichte",
                article: "die",
                plural: "Geschichten",
                english: "history",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-093"), text: "Geschichte", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-094"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-095"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-096"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-097"), text: "spannend", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-098"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "History is exciting.",
                clozeParts: ["", " ist spannend."],
                clozeAnswers: ["Geschichte"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-034"),
                wordType: "noun",
                german: "Geografie",
                article: "die",
                plural: null,
                english: "geography",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-099"), text: "Geografie", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-100"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-101"), text: "finde", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-102"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-103"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-104"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-105"), text: "toll", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-106"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I find geography great.",
                clozeParts: ["", " finde ich toll."],
                clozeAnswers: ["Geografie"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-035"),
                wordType: "noun",
                german: "Mathematik",
                article: "die",
                plural: null,
                english: "mathematics",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-107"), text: "Mathematik", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-108"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-109"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-110"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-111"), text: "schwierig", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-112"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Mathematics is difficult.",
                clozeParts: ["", " ist schwierig."],
                clozeAnswers: ["Mathematik"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-036"),
                wordType: "noun",
                german: "Englisch",
                article: "das",
                plural: null,
                english: "English",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-113"), text: "Englisch", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-114"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-115"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-116"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-117"), text: "einfach", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-118"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "English is easy.",
                clozeParts: ["", " ist einfach."],
                clozeAnswers: ["Englisch"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-037"),
                wordType: "noun",
                german: "Deutsch",
                article: "das",
                plural: null,
                english: "German",
                exampleGerman: [
                    {
    id: createWordId("lernen-orte--personen---f-c-119"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-120"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-121"), text: "lernen", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-122"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-123"), text: "Deutsch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-orte--personen---f-c-124"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are learning German.",
                clozeParts: ["Wir lernen ", "."],
                clozeAnswers: ["Deutsch"]
            } as Noun
        ],

        // --- NEUE KATEGORIE 2: Materialien & Aufgaben ---
        "Materialien & Aufgaben": [
            {id: createWordId("lernen-schuleunterricht-006"),
                wordType: "noun",
                german: "Hausaufgabe",
                article: "die",
                plural: "Hausaufgaben",
                english: "homework",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-001"), text: "Die Hausaufgaben", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-003"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-005"), text: "einfach", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The homework is easy.",
                clozeParts: ["Die ", " sind einfach."],
                clozeAnswers: ["Hausaufgaben"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-007"),
                wordType: "noun",
                german: "Aufgabe",
                article: "die",
                plural: "Aufgaben",
                english: "task / exercise",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-007"), text: "Die Aufgabe", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-009"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-011"), text: "einfach", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The task is easy.",
                clozeParts: ["Die ", " ist einfach."],
                clozeAnswers: ["Aufgabe"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-008"),
                wordType: "noun",
                german: "Übung",
                article: "die",
                plural: "Übungen",
                english: "exercise / practice",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-013"), text: "Die Übung", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-015"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-017"), text: "ganz einfach", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The exercise is very easy.",
                clozeParts: ["Die ", " ist ganz einfach."],
                clozeAnswers: ["Übung"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-009"),
                wordType: "noun",
                german: "Tafel",
                article: "die",
                plural: "Tafeln",
                english: "blackboard / whiteboard",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-019"), text: "Die Tafel", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-021"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-023"), text: "grün", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-024"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The blackboard is green.",
                clozeParts: ["Die ", " ist grün."],
                clozeAnswers: ["Tafel"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-010"),
                wordType: "noun",
                german: "Heft",
                article: "das",
                plural: "Hefte",
                english: "notebook",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-025"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-027"), text: "brauche", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-029"), text: "ein neues Heft", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-030"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a new notebook.",
                clozeParts: ["Ich brauche ein neues ", "."],
                clozeAnswers: ["Heft"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-011"),
                wordType: "noun",
                german: "Buch",
                article: "das",
                plural: "Bücher",
                english: "book",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-031"), text: "Die Bücher", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-033"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-035"), text: "schon", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-037"), text: "im Rucksack", case: "dativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-038"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The books are already in the backpack.",
                clozeParts: ["Die ", " sind schon im Rucksack."],
                clozeAnswers: ["Bücher"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-012"),
                wordType: "noun",
                german: "Wörterbuch",
                article: "das",
                plural: "Wörterbücher",
                english: "dictionary",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-039"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-041"), text: "brauche", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-043"), text: "ein Wörterbuch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-044"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a dictionary.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Wörterbuch"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-013"),
                wordType: "noun",
                german: "Stift",
                article: "der",
                plural: "Stifte",
                english: "pen",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-045"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-047"), text: "schreibe", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-049"), text: "mit dem Stift", case: "dativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-050"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I write with the pen.",
                clozeParts: ["Ich schreibe mit dem ", "."],
                clozeAnswers: ["Stift"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-014"),
                wordType: "noun",
                german: "Bleistift",
                article: "der",
                plural: "Bleistifte",
                english: "pencil",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-051"), text: "Hier", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-053"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-055"), text: "dein Bleistift", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-056"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Here is your pencil.",
                clozeParts: ["Hier ist dein ", "."],
                clozeAnswers: ["Bleistift"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-015"),
                wordType: "noun",
                german: "Radiergummi",
                article: "der",
                plural: "Radiergummis",
                english: "eraser",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-057"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-059"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-061"), text: "meinen Radiergummi", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-063"), text: "vergessen", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-064"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have forgotten my eraser.",
                clozeParts: ["Ich habe meinen ", " vergessen."],
                clozeAnswers: ["Radiergummi"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-016"),
                wordType: "noun",
                german: "Lineal",
                article: "das",
                plural: "Lineale",
                english: "ruler",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-065"), text: "Das Lineal", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-067"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-068"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-069"), text: "lang", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-070"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The ruler is long.",
                clozeParts: ["Das ", " ist lang."],
                clozeAnswers: ["Lineal"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-017"),
                wordType: "noun",
                german: "Schere",
                article: "die",
                plural: "Scheren",
                english: "scissors",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-071"), text: "Die Schere", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-072"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-073"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-074"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-075"), text: "scharf", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-076"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The scissors are sharp.",
                clozeParts: ["Die ", " ist scharf."],
                clozeAnswers: ["Schere"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-018"),
                wordType: "noun",
                german: "Mappe",
                article: "die",
                plural: "Mappen",
                english: "folder",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-077"), text: "Die Mappe", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-078"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-079"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-080"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-081"), text: "blau", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-082"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The folder is blue.",
                clozeParts: ["Die ", " ist blau."],
                clozeAnswers: ["Mappe"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-019"),
                wordType: "noun",
                german: "Papier",
                article: "das",
                plural: "Papiere",
                english: "paper",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-083"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-084"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-085"), text: "brauche", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-086"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-087"), text: "Papier", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-088"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need paper.",
                clozeParts: ["Ich brauche ", "."],
                clozeAnswers: ["Papier"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-020"),
                wordType: "noun",
                german: "Rucksack",
                article: "der",
                plural: "Rucksäcke",
                english: "backpack",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-089"), text: "Mein Rucksack", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-090"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-091"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-092"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-093"), text: "schwer", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-094"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My backpack is heavy.",
                clozeParts: ["Mein ", " ist schwer."],
                clozeAnswers: ["Rucksack"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-021"),
                wordType: "noun",
                german: "Tasche",
                article: "die",
                plural: "Taschen",
                english: "bag",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-095"), text: "Die Tasche", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-096"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-097"), text: "steht", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-098"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-099"), text: "auf dem Boden", case: "dativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-100"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The bag is on the floor.",
                clozeParts: ["Die ", " steht auf dem Boden."],
                clozeAnswers: ["Tasche"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-022"),
                wordType: "noun",
                german: "Pause",
                article: "die",
                plural: "Pausen",
                english: "break / recess",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-101"), text: "In der Pause", case: "dativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-102"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-103"), text: "spielen", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-104"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-105"), text: "wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-106"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-107"), text: "Fußball", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-108"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "During the break, we play football.",
                clozeParts: ["In der ", " spielen wir Fußball."],
                clozeAnswers: ["Pause"]
            } as Noun,
            {id: createWordId("lernen-schuleunterricht-023"),
                wordType: "noun",
                german: "Stundenplan",
                article: "der",
                plural: "Stundenpläne",
                english: "timetable / schedule",
                exampleGerman: [
                    {
    id: createWordId("lernen-materialien---aufgab-109"), text: "Mein Stundenplan", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-110"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-111"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-112"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-113"), text: "voll", case: "none" } as CaseElement,
                    {id: createWordId("lernen-materialien---aufgab-114"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My timetable is full.",
                clozeParts: ["Mein ", " ist voll."],
                clozeAnswers: ["Stundenplan"]
            } as Noun
        ],

        // --- NEUE KATEGORIE 3: Verben des Lernens ---
        "Verben des Lernens": [
            {id: createWordId("lernen-sprachenlernen-001"),
                wordType: "verb",
                german: "lernen",
                english: "to learn", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-001"), I: "lerne", you_informal: "lernst", he: "lernt", we: "lernen", you_pl: "lernt", they: "lernen" },
                imperative: {id: createWordId("lernen-verben-des-lernens-002"), you_informal: "Lern!", you_pl: "Lernt!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-003"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-005"), text: "lernen", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-007"), text: "Deutsch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-008"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are learning German.",
                clozeParts: ["Wir ", " Deutsch."],
                clozeAnswers: ["lernen"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-002"),
                wordType: "verb",
                german: "üben",
                english: "to practice", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geübt",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-009"), I: "übe", you_informal: "übst", he: "übt", we: "üben", you_pl: "übt", they: "üben" },
                imperative: {id: createWordId("lernen-verben-des-lernens-010"), you_informal: "Üb!", you_pl: "Übt!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-011"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-013"), text: "übe", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-015"), text: "jeden Tag", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-017"), text: "Deutsch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I practice German every day.",
                clozeParts: ["Ich ", " jeden Tag Deutsch."],
                clozeAnswers: ["übe"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-003"),
                wordType: "verb",
                german: "sprechen",
                english: "to speak", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesprochen",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-019"), I: "spreche", you_informal: "sprichst", he: "spricht", we: "sprechen", you_pl: "sprecht", they: "sprechen" },
                imperative: {id: createWordId("lernen-verben-des-lernens-020"), you_informal: "Sprich!", you_pl: "Sprecht!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-021"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-023"), text: "spreche", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-025"), text: "ein bisschen", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-027"), text: "Deutsch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-028"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I speak a little German.",
                clozeParts: ["Ich ", " ein bisschen Deutsch."],
                clozeAnswers: ["spreche"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-004"),
                wordType: "verb",
                german: "lesen",
                english: "to read", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelesen",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-029"), I: "lese", you_informal: "liest", he: "liest", we: "lesen", you_pl: "lest", they: "lesen" },
                imperative: {id: createWordId("lernen-verben-des-lernens-030"), you_informal: "Lies!", you_pl: "Lest!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-031"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-033"), text: "lese", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-035"), text: "ein Buch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-036"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich ", " ein Buch."],
                clozeAnswers: ["lese"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-005"),
                wordType: "verb",
                german: "schreiben",
                english: "to write", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschrieben",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-037"), I: "schreibe", you_informal: "schreibst", he: "schreibt", we: "schreiben", you_pl: "schreibt", they: "schreiben" },
                imperative: {id: createWordId("lernen-verben-des-lernens-038"), you_informal: "Schreib!", you_pl: "Schreibt!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-039"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-041"), text: "schreibe", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-043"), text: "einen Brief", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-044"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am writing a letter.",
                clozeParts: ["Ich ", " einen Brief."],
                clozeAnswers: ["schreibe"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-006"),
                wordType: "verb",
                german: "verstehen",
                english: "to understand", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verstanden",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-045"), I: "verstehe", you_informal: "verstehst", he: "versteht", we: "verstehen", you_pl: "versteht", they: "verstehen" },
                imperative: {id: createWordId("lernen-verben-des-lernens-046"), you_informal: "Versteh!", you_pl: "Versteht!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-047"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-049"), text: "verstehe", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-051"), text: "die Frage", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-053"), text: "nicht", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-054"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I don't understand the question.",
                clozeParts: ["Ich ", " die Frage nicht."],
                clozeAnswers: ["verstehe"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-007"),
                wordType: "verb",
                german: "wiederholen",
                english: "to repeat", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "wiederholt",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-055"), I: "wiederhole", you_informal: "wiederholst", he: "wiederholt", we: "wiederholen", you_pl: "wiederholt", they: "wiederholen" },
                imperative: {id: createWordId("lernen-verben-des-lernens-056"), you_informal: "Wiederhol!", you_pl: "Wiederholt!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-057"), text: "Kannst", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-059"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-061"), text: "das", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-063"), text: "bitte", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-065"), text: "wiederholen", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-066"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you please repeat that?",
                clozeParts: ["Kannst du das bitte ", "?"],
                clozeAnswers: ["wiederholen"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-008"),
                wordType: "verb",
                german: "fragen",
                english: "to ask", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefragt",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-067"), I: "frage", you_informal: "fragst", he: "fragt", we: "fragen", you_pl: "fragt", they: "fragen" },
                imperative: {id: createWordId("lernen-verben-des-lernens-068"), you_informal: "Frag!", you_pl: "Fragt!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-069"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-071"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-072"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-073"), text: "etwas", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-074"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-075"), text: "fragen", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-076"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like to ask something.",
                clozeParts: ["Ich möchte etwas ", "."],
                clozeAnswers: ["fragen"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-009"),
                wordType: "verb",
                german: "antworten",
                english: "to answer", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geantwortet",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-077"), I: "antworte", you_informal: "antwortest", he: "antwortet", we: "antworten", you_pl: "antwortet", they: "antworten" },
                imperative: {id: createWordId("lernen-verben-des-lernens-078"), you_informal: "Antworte!", you_pl: "Antwortet!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-079"), text: "Weißt", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-080"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-081"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-082"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-083"), text: "die Antwort", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-084"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Do you know the answer?",
                clozeParts: ["Weißt du die ", "?"],
                clozeAnswers: ["Antwort"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-010"),
                wordType: "verb",
                german: "erklären",
                english: "to explain", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "erklärt",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-085"), I: "erkläre", you_informal: "erklärst", he: "erklärt", we: "erklären", you_pl: "erklärt", they: "erklären" },
                imperative: {id: createWordId("lernen-verben-des-lernens-086"), you_informal: "Erklär!", you_pl: "Erklärt!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-087"), text: "Können", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-088"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-089"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-090"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-091"), text: "das", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-092"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-093"), text: "bitte", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-094"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-095"), text: "erklären", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-096"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you please explain that?",
                clozeParts: ["Können Sie das bitte ", "?"],
                clozeAnswers: ["erklären"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-015"),
                wordType: "verb",
                german: "markieren",
                english: "to mark / to highlight", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "markiert",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-097"), I: "markiere", you_informal: "markierst", he: "markiert", we: "markieren", you_pl: "markiert", they: "markieren" },
                imperative: {id: createWordId("lernen-verben-des-lernens-098"), you_informal: "Markier!", you_pl: "Markiert!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-099"), text: "Markiere", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-100"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-101"), text: "die richtige Antwort", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-102"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Mark the correct answer.",
                clozeParts: ["", " die richtige Antwort."],
                clozeAnswers: ["Markiere"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-016"),
                wordType: "verb",
                german: "ergänzen",
                english: "to complete / to fill in", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "ergänzt",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-103"), I: "ergänze", you_informal: "ergänzt", he: "ergänzt", we: "ergänzen", you_pl: "ergänzt", they: "ergänzen" },
                imperative: {id: createWordId("lernen-verben-des-lernens-104"), you_informal: "Ergänz!", you_pl: "Ergänzt!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-105"), text: "Ergänzen Sie", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-106"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-107"), text: "die Sätze", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-108"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Complete the sentences.",
                clozeParts: ["", " Sie die Sätze."],
                clozeAnswers: ["Ergänzen"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-017"),
                wordType: "verb",
                german: "zuordnen",
                english: "to match / to assign", separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "zugeordnet",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-109"), I: "ordne zu", you_informal: "ordnest zu", he: "ordnet zu", we: "ordnen zu", you_pl: "ordnet zu", they: "ordnen zu" },
                imperative: {id: createWordId("lernen-verben-des-lernens-110"), you_informal: "Ordne zu!", you_pl: "Ordnet zu!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-111"), text: "Ordnen Sie", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-112"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-113"), text: "zu", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-114"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Match.",
                clozeParts: ["", " Sie ", "."],
                clozeAnswers: ["Ordnen", "zu"]
            } as Verb,
            {id: createWordId("lernen-sprachenlernen-018"),
                wordType: "verb",
                german: "ankreuzen",
                english: "to tick / to mark with a cross", separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "angekreuzt",
                presentConjugation: {
    id: createWordId("lernen-verben-des-lernens-115"), I: "kreuze an", you_informal: "kreuzt an", he: "kreuzt an", we: "kreuzen an", you_pl: "kreuzt an", they: "kreuzen an" },
                imperative: {id: createWordId("lernen-verben-des-lernens-116"), you_informal: "Kreuz an!", you_pl: "Kreuzt an!" },
                exampleGerman: [
                    {id: createWordId("lernen-verben-des-lernens-117"), text: "Kreuzen Sie", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-118"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-119"), text: "bitte", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-120"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-121"), text: "an", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-verben-des-lernens-122"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please tick.",
                clozeParts: ["", " Sie bitte ", "."],
                clozeAnswers: ["Kreuzen", "an"]
            } as Verb
        ],

        // --- NEUE KATEGORIE 4: Konzepte & Prüfung ---
        "Konzepte & Prüfung": [
            {id: createWordId("lernen-sprachenlernen-011"),
                wordType: "noun",
                german: "Beispiel",
                article: "das",
                plural: "Beispiele",
                english: "example",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-001"), text: "Kannst", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-003"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-005"), text: "ein Beispiel", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-007"), text: "geben", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-008"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you give an example?",
                clozeParts: ["Kannst du ein ", " geben?"],
                clozeAnswers: ["Beispiel"]
            } as Noun,
            {id: createWordId("lernen-sprachenlernen-012"),
                wordType: "noun",
                german: "Fehler",
                article: "der",
                plural: "Fehler",
                english: "mistake / error",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-009"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-011"), text: "hatte", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-013"), text: "vier Fehler", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-015"), text: "in der Englischarbeit", case: "dativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-016"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I had four mistakes in the English test.",
                clozeParts: ["Ich hatte vier ", " in der Englischarbeit."],
                clozeAnswers: ["Fehler"]
            } as Noun,
            {id: createWordId("lernen-sprachenlernen-013"),
                wordType: "adjective",
                german: "richtig",
                english: "correct / right",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-017"), text: "Das", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-019"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-021"), text: "richtig", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-022"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "That is correct.",
                clozeParts: ["Das ist ", "."],
                clozeAnswers: ["richtig"]
            } as Adjective,
            {id: createWordId("lernen-sprachenlernen-014"),
                wordType: "adjective",
                german: "falsch",
                english: "wrong / false",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-023"), text: "Das", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-025"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-027"), text: "falsch", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-028"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "That is wrong.",
                clozeParts: ["Das ist ", "."],
                clozeAnswers: ["falsch"]
            } as Adjective,
            {id: createWordId("lernen-sprachenlernen-019"),
                wordType: "noun",
                german: "Lösung",
                article: "die",
                plural: "Lösungen",
                english: "solution / answer",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-029"), text: "Die Lösung", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-031"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-033"), text: "richtig", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-034"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The solution is correct.",
                clozeParts: ["Die ", " ist richtig."],
                clozeAnswers: ["Lösung"]
            } as Noun,
            {id: createWordId("lernen-sprachenlernen-020"),
                wordType: "noun",
                german: "Text",
                article: "der",
                plural: "Texte",
                english: "text",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-035"), text: "Der Text", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-037"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-039"), text: "lang", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-040"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The text is long.",
                clozeParts: ["Der ", " ist lang."],
                clozeAnswers: ["Text"]
            } as Noun,
            {id: createWordId("lernen-sprachenlernen-021"),
                wordType: "noun",
                german: "Teil",
                article: "der",
                plural: "Teile",
                english: "part",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-041"), text: "Der erste Teil", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-043"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-045"), text: "einfach", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-046"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The first part is easy.",
                clozeParts: ["Der erste ", " ist einfach."],
                clozeAnswers: ["Teil"]
            } as Noun,
            {id: createWordId("lernen-pruefungen-001"),
                wordType: "noun",
                german: "Prüfung",
                article: "die",
                plural: "Prüfungen",
                english: "exam / test",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-047"), text: "Die Prüfung", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-049"), text: "war", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-051"), text: "schwer", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-052"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The exam was difficult.",
                clozeParts: ["Die ", " war schwer."],
                clozeAnswers: ["Prüfung"]
            } as Noun,
            {id: createWordId("lernen-pruefungen-002"),
                wordType: "noun",
                german: "Test",
                article: "der",
                plural: "Tests",
                english: "test",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-053"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-055"), text: "schreiben", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-057"), text: "einen Test", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-058"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are writing a test.",
                clozeParts: ["Wir schreiben einen ", "."],
                clozeAnswers: ["Test"]
            } as Noun,
            {id: createWordId("lernen-pruefungen-003"),
                wordType: "noun",
                german: "Note",
                article: "die",
                plural: "Noten",
                english: "grade / mark",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-059"), text: "In Englisch", case: "dativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-061"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-063"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-065"), text: "eine Eins", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-066"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have an A (a one) in English.",
                clozeParts: ["In Englisch habe ich eine ", "."],
                clozeAnswers: ["Eins"]
            } as Noun,
            {id: createWordId("lernen-pruefungen-004"),
                wordType: "noun",
                german: "Punkt",
                article: "der",
                plural: "Punkte",
                english: "point",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-067"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-068"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-069"), text: "haben", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-071"), text: "zehn Punkte", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-072"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have ten points.",
                clozeParts: ["Wir haben zehn ", "."],
                clozeAnswers: ["Punkte"]
            } as Noun,
            {id: createWordId("lernen-pruefungen-005"),
                wordType: "verb",
                german: "bestehen",
                english: "to pass (an exam)", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bestanden",
                presentConjugation: {
    id: createWordId("lernen-konzepte---pr-fung-073"), I: "bestehe", you_informal: "bestehst", he: "besteht", we: "bestehen", you_pl: "besteht", they: "bestehen" },
                imperative: {id: createWordId("lernen-konzepte---pr-fung-074"), you_informal: "Besteh!", you_pl: "Besteht!" },
                exampleGerman: [
                    {id: createWordId("lernen-konzepte---pr-fung-075"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-077"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-078"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-079"), text: "die Prüfung", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-080"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-081"), text: "bestanden", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-082"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have passed the exam.",
                clozeParts: ["Ich habe die Prüfung ", "."],
                clozeAnswers: ["bestanden"]
            } as Verb,
            {id: createWordId("lernen-pruefungen-006"),
                wordType: "noun",
                german: "Antwortbogen",
                article: "der",
                plural: "Antwortbögen",
                english: "answer sheet",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-083"), text: "Bitte", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-084"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-085"), text: "geben Sie", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-086"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-087"), text: "den Antwortbogen", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-088"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-089"), text: "ab", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-090"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please hand in the answer sheet.",
                clozeParts: ["Bitte geben Sie den ", " ab."],
                clozeAnswers: ["Antwortbogen"]
            } as Noun,
            {id: createWordId("lernen-pruefungen-007"),
                wordType: "noun",
                german: "Ergebnis",
                article: "das",
                plural: "Ergebnisse",
                english: "result",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-091"), text: "Das Ergebnis", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-092"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-093"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-094"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-095"), text: "gut", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-096"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The result is good.",
                clozeParts: ["Das ", " ist gut."],
                clozeAnswers: ["Ergebnis"]
            } as Noun,
            {id: createWordId("lernen-pruefungen-008"),
                wordType: "verb",
                german: "kontrollieren",
                english: "to check / to control", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "kontrolliert",
                presentConjugation: {
    id: createWordId("lernen-konzepte---pr-fung-097"), I: "kontrolliere", you_informal: "kontrollierst", he: "kontrolliert", we: "kontrollieren", you_pl: "kontrolliert", they: "kontrollieren" },
                imperative: {id: createWordId("lernen-konzepte---pr-fung-098"), you_informal: "Kontrollier!", you_pl: "Kontrolliert!" },
                exampleGerman: [
                    {id: createWordId("lernen-konzepte---pr-fung-099"), text: "Der Lehrer", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-100"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-101"), text: "kontrolliert", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-102"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-103"), text: "die Hausaufgaben", case: "akkusativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-104"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The teacher checks the homework.",
                clozeParts: ["Der Lehrer ", " die Hausaufgaben."],
                clozeAnswers: ["kontrolliert"]
            } as Verb,
            {id: createWordId("lernen-pruefungen-009"),
                wordType: "adjective",
                german: "fertig",
                english: "ready / finished",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-105"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-106"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-107"), text: "bin", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-108"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-109"), text: "schon", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-110"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-111"), text: "fertig", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-112"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am already finished.",
                clozeParts: ["Ich bin schon ", "."],
                clozeAnswers: ["fertig"]
            } as Adjective,
            {id: createWordId("lernen-pruefungen-010"),
                wordType: "adjective",
                german: "schwierig",
                english: "difficult",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-113"), text: "Die Aufgabe", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-114"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-115"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-116"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-117"), text: "schwierig", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-118"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The task is difficult.",
                clozeParts: ["Die Aufgabe ist ", "."],
                clozeAnswers: ["schwierig"]
            } as Adjective,
            {id: createWordId("lernen-pruefungen-011"),
                wordType: "adjective",
                german: "einfach",
                english: "easy / simple",
                exampleGerman: [
                    {
    id: createWordId("lernen-konzepte---pr-fung-119"), text: "Die Übung", case: "nominativ" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-120"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-121"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-122"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-123"), text: "ganz einfach", case: "none" } as CaseElement,
                    {id: createWordId("lernen-konzepte---pr-fung-124"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The exercise is very easy.",
                clozeParts: ["Die Übung ist ganz ", "."],
                clozeAnswers: ["einfach"]
            } as Adjective
        ]
    }
});