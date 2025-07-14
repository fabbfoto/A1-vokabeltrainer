// packages/trainer-themen/vokabular_lernen.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_lernen.js

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary';
import { createWordId, createVocabulary } from './shared/types/vocabulary';

export const vokabularLernen: VocabularyStructure = createVocabulary({
    "Lernen": {

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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-002"),
                wordType: "noun",
                german: "Unterricht",
                article: "der",
                plural: null,
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-003"),
                wordType: "noun",
                german: "Lehrer/Lehrerin",
                article: "der/die",
                plural: "Lehrer/Lehrerinnen",
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-004"),
                wordType: "noun",
                german: "Schüler/Schülerin",
                article: "der/die",
                plural: "Schüler/Schülerinnen",
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-005"),
                wordType: "noun",
                german: "Klasse",
                article: "die",
                plural: "Klassen",
                english: "class",
                exampleGerman: [
                    { text: "In unserer Klasse", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "20 Schüler", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There are 20 students in our class.",
                clozeParts: ["In unserer ", " sind 20 Schüler."],
                clozeAnswers: ["Klasse"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-024"),
                wordType: "noun",
                german: "Schulfach",
                article: "das",
                plural: "Schulfächer",
                english: "school subject",
                exampleGerman: [
                    { text: "Chemie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mein Lieblingsfach", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Chemistry is my favorite subject.",
                clozeParts: ["Chemie ist mein Lieblings", "."],
                clozeAnswers: ["fach"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-025"),
                wordType: "noun",
                german: "Gymnasium",
                article: "das",
                plural: "Gymnasien",
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-026"),
                wordType: "noun",
                german: "Sprachenschule",
                article: "die",
                plural: "Sprachenschulen",
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-027"),
                wordType: "noun",
                german: "Institut",
                article: "das",
                english: "institute",
                plural: "Institute",
                difficulty: 1,
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mache", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Kurs", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "am Institut", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am taking a course at the institute.",
                clozeParts: ["Ich mache einen Kurs am ", "."],
                clozeAnswers: ["Institut"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-028"),
                wordType: "noun",
                german: "Sozialkunde",
                article: "die",
                plural: null,
                english: "social studies",
                exampleGerman: [
                    { text: "Sozialkunde", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "interessant", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Social studies is interesting.",
                clozeParts: ["", " ist interessant."],
                clozeAnswers: ["Sozialkunde"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-029"),
                wordType: "noun",
                german: "Kunst",
                article: "die",
                plural: "Künste",
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-030"),
                wordType: "noun",
                german: "Sport",
                article: "der",
                plural: null,
                english: "sports / P.E.",
                exampleGerman: [
                    { text: "Sport", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mein Lieblingsfach", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Sports is my favorite subject.",
                clozeParts: ["", " ist mein Lieblingsfach."],
                clozeAnswers: ["Sport"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-031"),
                wordType: "noun",
                german: "Physik",
                article: "die",
                plural: null,
                english: "physics",
                exampleGerman: [
                    { text: "Physik", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schwer", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Physics is difficult.",
                clozeParts: ["", " ist schwer."],
                clozeAnswers: ["Physik"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-032"),
                wordType: "noun",
                german: "Chemie",
                article: "die",
                plural: null,
                english: "chemistry",
                exampleGerman: [
                    { text: "Chemie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mein Lieblingsfach", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Chemistry is my favorite subject.",
                clozeParts: ["", " ist mein Lieblingsfach."],
                clozeAnswers: ["Chemie"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-033"),
                wordType: "noun",
                german: "Geschichte",
                article: "die",
                plural: "Geschichten",
                english: "history",
                exampleGerman: [
                    { text: "Geschichte", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "spannend", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "History is exciting.",
                clozeParts: ["", " ist spannend."],
                clozeAnswers: ["Geschichte"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-034"),
                wordType: "noun",
                german: "Geografie",
                article: "die",
                plural: null,
                english: "geography",
                exampleGerman: [
                    { text: "Geografie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "finde", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "toll", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I find geography great.",
                clozeParts: ["", " finde ich toll."],
                clozeAnswers: ["Geografie"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-035"),
                wordType: "noun",
                german: "Mathematik",
                article: "die",
                plural: null,
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-036"),
                wordType: "noun",
                german: "Englisch",
                article: "das",
                plural: null,
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-037"),
                wordType: "noun",
                german: "Deutsch",
                article: "das",
                plural: null,
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
            } as Noun
        ],

        // --- NEUE KATEGORIE 2: Materialien & Aufgaben ---
        "Materialien & Aufgaben": [
            {
                id: createWordId("lernen-schuleunterricht-006"),
                wordType: "noun",
                german: "Hausaufgabe",
                article: "die",
                plural: "Hausaufgaben",
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-007"),
                wordType: "noun",
                german: "Aufgabe",
                article: "die",
                plural: "Aufgaben",
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-008"),
                wordType: "noun",
                german: "Übung",
                article: "die",
                plural: "Übungen",
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-009"),
                wordType: "noun",
                german: "Tafel",
                article: "die",
                plural: "Tafeln",
                english: "blackboard / whiteboard",
                exampleGerman: [
                    { text: "Die Tafel", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "grün", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The blackboard is green.",
                clozeParts: ["Die ", " ist grün."],
                clozeAnswers: ["Tafel"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-010"),
                wordType: "noun",
                german: "Heft",
                article: "das",
                plural: "Hefte",
                english: "notebook",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein neues Heft", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a new notebook.",
                clozeParts: ["Ich brauche ein neues ", "."],
                clozeAnswers: ["Heft"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-011"),
                wordType: "noun",
                german: "Buch",
                article: "das",
                plural: "Bücher",
                english: "book",
                exampleGerman: [
                    { text: "Die Bücher", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schon", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Rucksack", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The books are already in the backpack.",
                clozeParts: ["Die ", " sind schon im Rucksack."],
                clozeAnswers: ["Bücher"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-012"),
                wordType: "noun",
                german: "Wörterbuch",
                article: "das",
                plural: "Wörterbücher",
                english: "dictionary",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Wörterbuch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a dictionary.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Wörterbuch"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-013"),
                wordType: "noun",
                german: "Stift",
                article: "der",
                plural: "Stifte",
                english: "pen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schreibe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit dem Stift", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I write with the pen.",
                clozeParts: ["Ich schreibe mit dem ", "."],
                clozeAnswers: ["Stift"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-014"),
                wordType: "noun",
                german: "Bleistift",
                article: "der",
                plural: "Bleistifte",
                english: "pencil",
                exampleGerman: [
                    { text: "Hier", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dein Bleistift", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Here is your pencil.",
                clozeParts: ["Hier ist dein ", "."],
                clozeAnswers: ["Bleistift"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-015"),
                wordType: "noun",
                german: "Radiergummi",
                article: "der",
                plural: "Radiergummis",
                english: "eraser",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "meinen Radiergummi", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "vergessen", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have forgotten my eraser.",
                clozeParts: ["Ich habe meinen ", " vergessen."],
                clozeAnswers: ["Radiergummi"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-016"),
                wordType: "noun",
                german: "Lineal",
                article: "das",
                plural: "Lineale",
                english: "ruler",
                exampleGerman: [
                    { text: "Das Lineal", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lang", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The ruler is long.",
                clozeParts: ["Das ", " ist lang."],
                clozeAnswers: ["Lineal"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-017"),
                wordType: "noun",
                german: "Schere",
                article: "die",
                plural: "Scheren",
                english: "scissors",
                exampleGerman: [
                    { text: "Die Schere", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "scharf", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The scissors are sharp.",
                clozeParts: ["Die ", " ist scharf."],
                clozeAnswers: ["Schere"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-018"),
                wordType: "noun",
                german: "Mappe",
                article: "die",
                plural: "Mappen",
                english: "folder",
                exampleGerman: [
                    { text: "Die Mappe", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "blau", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The folder is blue.",
                clozeParts: ["Die ", " ist blau."],
                clozeAnswers: ["Mappe"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-019"),
                wordType: "noun",
                german: "Papier",
                article: "das",
                plural: "Papiere",
                english: "paper",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Papier", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need paper.",
                clozeParts: ["Ich brauche ", "."],
                clozeAnswers: ["Papier"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-020"),
                wordType: "noun",
                german: "Rucksack",
                article: "der",
                plural: "Rucksäcke",
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
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-021"),
                wordType: "noun",
                german: "Tasche",
                article: "die",
                plural: "Taschen",
                english: "bag",
                exampleGerman: [
                    { text: "Die Tasche", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "steht", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auf dem Boden", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The bag is on the floor.",
                clozeParts: ["Die ", " steht auf dem Boden."],
                clozeAnswers: ["Tasche"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-022"),
                wordType: "noun",
                german: "Pause",
                article: "die",
                plural: "Pausen",
                english: "break / recess",
                exampleGerman: [
                    { text: "In der Pause", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "spielen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Fußball", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "During the break, we play football.",
                clozeParts: ["In der ", " spielen wir Fußball."],
                clozeAnswers: ["Pause"]
            } as Noun,
            {
                id: createWordId("lernen-schuleunterricht-023"),
                wordType: "noun",
                german: "Stundenplan",
                article: "der",
                plural: "Stundenpläne",
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
            } as Noun
        ],

        // --- NEUE KATEGORIE 3: Verben des Lernens ---
        "Verben des Lernens": [
            {
                id: createWordId("lernen-sprachenlernen-001"),
                wordType: "verb",
                german: "lernen",
                english: "to learn",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                presentConjugation: { ich: "lerne", du: "lernst", er: "lernt", wir: "lernen", ihr: "lernt", sie: "lernen" },
                imperative: { du: "Lern!", ihr: "Lernt!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lernen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Deutsch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are learning German.",
                clozeParts: ["Wir ", " Deutsch."],
                clozeAnswers: ["lernen"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-002"),
                wordType: "verb",
                german: "üben",
                english: "to practice",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geübt",
                presentConjugation: { ich: "übe", du: "übst", er: "übt", wir: "üben", ihr: "übt", sie: "üben" },
                imperative: { du: "Üb!", ihr: "Übt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "übe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "jeden Tag", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Deutsch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I practice German every day.",
                clozeParts: ["Ich ", " jeden Tag Deutsch."],
                clozeAnswers: ["übe"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-003"),
                wordType: "verb",
                german: "sprechen",
                english: "to speak",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesprochen",
                presentConjugation: { ich: "spreche", du: "sprichst", er: "spricht", wir: "sprechen", ihr: "sprecht", sie: "sprechen" },
                imperative: { du: "Sprich!", ihr: "Sprecht!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "spreche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein bisschen", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Deutsch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I speak a little German.",
                clozeParts: ["Ich ", " ein bisschen Deutsch."],
                clozeAnswers: ["spreche"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-004"),
                wordType: "verb",
                german: "lesen",
                english: "to read",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelesen",
                presentConjugation: { ich: "lese", du: "liest", er: "liest", wir: "lesen", ihr: "lest", sie: "lesen" },
                imperative: { du: "Lies!", ihr: "Lest!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lese", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Buch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich ", " ein Buch."],
                clozeAnswers: ["lese"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-005"),
                wordType: "verb",
                german: "schreiben",
                english: "to write",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschrieben",
                presentConjugation: { ich: "schreibe", du: "schreibst", er: "schreibt", wir: "schreiben", ihr: "schreibt", sie: "schreiben" },
                imperative: { du: "Schreib!", ihr: "Schreibt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schreibe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Brief", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am writing a letter.",
                clozeParts: ["Ich ", " einen Brief."],
                clozeAnswers: ["schreibe"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-006"),
                wordType: "verb",
                german: "verstehen",
                english: "to understand",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verstanden",
                presentConjugation: { ich: "verstehe", du: "verstehst", er: "versteht", wir: "verstehen", ihr: "versteht", sie: "verstehen" },
                imperative: { du: "Versteh!", ihr: "Versteht!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "verstehe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Frage", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nicht", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I don't understand the question.",
                clozeParts: ["Ich ", " die Frage nicht."],
                clozeAnswers: ["verstehe"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-007"),
                wordType: "verb",
                german: "wiederholen",
                english: "to repeat",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "wiederholt",
                presentConjugation: { ich: "wiederhole", du: "wiederholst", er: "wiederholt", wir: "wiederholen", ihr: "wiederholt", sie: "wiederholen" },
                imperative: { du: "Wiederhol!", ihr: "Wiederholt!" },
                exampleGerman: [
                    { text: "Kannst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "das", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bitte", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "wiederholen", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you please repeat that?",
                clozeParts: ["Kannst du das bitte ", "?"],
                clozeAnswers: ["wiederholen"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-008"),
                wordType: "verb",
                german: "fragen",
                english: "to ask",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefragt",
                presentConjugation: { ich: "frage", du: "fragst", er: "fragt", wir: "fragen", ihr: "fragt", sie: "fragen" },
                imperative: { du: "Frag!", ihr: "Fragt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "etwas", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fragen", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like to ask something.",
                clozeParts: ["Ich möchte etwas ", "."],
                clozeAnswers: ["fragen"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-009"),
                wordType: "verb",
                german: "antworten",
                english: "to answer",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geantwortet",
                presentConjugation: { ich: "antworte", du: "antwortest", er: "antwortet", wir: "antworten", ihr: "antwortet", sie: "antworten" },
                imperative: { du: "Antworte!", ihr: "Antwortet!" },
                exampleGerman: [
                    { text: "Weißt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Antwort", case: "akkusativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Do you know the answer?",
                clozeParts: ["Weißt du die ", "?"],
                clozeAnswers: ["Antwort"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-010"),
                wordType: "verb",
                german: "erklären",
                english: "to explain",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "erklärt",
                presentConjugation: { ich: "erkläre", du: "erklärst", er: "erklärt", wir: "erklären", ihr: "erklärt", sie: "erklären" },
                imperative: { du: "Erklär!", ihr: "Erklärt!" },
                exampleGerman: [
                    { text: "Können", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "das", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bitte", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "erklären", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you please explain that?",
                clozeParts: ["Können Sie das bitte ", "?"],
                clozeAnswers: ["erklären"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-015"),
                wordType: "verb",
                german: "markieren",
                english: "to mark / to highlight",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "markiert",
                presentConjugation: { ich: "markiere", du: "markierst", er: "markiert", wir: "markieren", ihr: "markiert", sie: "markieren" },
                imperative: { du: "Markier!", ihr: "Markiert!" },
                exampleGerman: [
                    { text: "Markiere", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die richtige Antwort", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Mark the correct answer.",
                clozeParts: ["", " die richtige Antwort."],
                clozeAnswers: ["Markiere"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-016"),
                wordType: "verb",
                german: "ergänzen",
                english: "to complete / to fill in",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "ergänzt",
                presentConjugation: { ich: "ergänze", du: "ergänzt", er: "ergänzt", wir: "ergänzen", ihr: "ergänzt", sie: "ergänzen" },
                imperative: { du: "Ergänz!", ihr: "Ergänzt!" },
                exampleGerman: [
                    { text: "Ergänzen Sie", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Sätze", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Complete the sentences.",
                clozeParts: ["", " Sie die Sätze."],
                clozeAnswers: ["Ergänzen"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-017"),
                wordType: "verb",
                german: "zuordnen",
                english: "to match / to assign",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "zugeordnet",
                presentConjugation: { ich: "ordne zu", du: "ordnest zu", er: "ordnet zu", wir: "ordnen zu", ihr: "ordnet zu", sie: "ordnen zu" },
                imperative: { du: "Ordne zu!", ihr: "Ordnet zu!" },
                exampleGerman: [
                    { text: "Ordnen Sie", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zu", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Match.",
                clozeParts: ["", " Sie ", "."],
                clozeAnswers: ["Ordnen", "zu"]
            } as Verb,
            {
                id: createWordId("lernen-sprachenlernen-018"),
                wordType: "verb",
                german: "ankreuzen",
                english: "to tick / to mark with a cross",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "angekreuzt",
                presentConjugation: { ich: "kreuze an", du: "kreuzt an", er: "kreuzt an", wir: "kreuzen an", ihr: "kreuzt an", sie: "kreuzen an" },
                imperative: { du: "Kreuz an!", ihr: "Kreuzt an!" },
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
            } as Verb
        ],

        // --- NEUE KATEGORIE 4: Konzepte & Prüfung ---
        "Konzepte & Prüfung": [
            {
                id: createWordId("lernen-sprachenlernen-011"),
                wordType: "noun",
                german: "Beispiel",
                article: "das",
                plural: "Beispiele",
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
            } as Noun,
            {
                id: createWordId("lernen-sprachenlernen-012"),
                wordType: "noun",
                german: "Fehler",
                article: "der",
                plural: "Fehler",
                english: "mistake / error",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "hatte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "vier Fehler", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in der Englischarbeit", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I had four mistakes in the English test.",
                clozeParts: ["Ich hatte vier ", " in der Englischarbeit."],
                clozeAnswers: ["Fehler"]
            } as Noun,
            {
                id: createWordId("lernen-sprachenlernen-013"),
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
            } as Adjective,
            {
                id: createWordId("lernen-sprachenlernen-014"),
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
            } as Adjective,
            {
                id: createWordId("lernen-sprachenlernen-019"),
                wordType: "noun",
                german: "Lösung",
                article: "die",
                plural: "Lösungen",
                english: "solution / answer",
                exampleGerman: [
                    { text: "Die Lösung", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "richtig", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The solution is correct.",
                clozeParts: ["Die ", " ist richtig."],
                clozeAnswers: ["Lösung"]
            } as Noun,
            {
                id: createWordId("lernen-sprachenlernen-020"),
                wordType: "noun",
                german: "Text",
                article: "der",
                plural: "Texte",
                english: "text",
                exampleGerman: [
                    { text: "Der Text", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lang", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The text is long.",
                clozeParts: ["Der ", " ist lang."],
                clozeAnswers: ["Text"]
            } as Noun,
            {
                id: createWordId("lernen-sprachenlernen-021"),
                wordType: "noun",
                german: "Teil",
                article: "der",
                plural: "Teile",
                english: "part",
                exampleGerman: [
                    { text: "Der erste Teil", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einfach", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The first part is easy.",
                clozeParts: ["Der erste ", " ist einfach."],
                clozeAnswers: ["Teil"]
            } as Noun,
            {
                id: createWordId("lernen-pruefungen-001"),
                wordType: "noun",
                german: "Prüfung",
                article: "die",
                plural: "Prüfungen",
                english: "exam / test",
                exampleGerman: [
                    { text: "Die Prüfung", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "war", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schwer", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The exam was difficult.",
                clozeParts: ["Die ", " war schwer."],
                clozeAnswers: ["Prüfung"]
            } as Noun,
            {
                id: createWordId("lernen-pruefungen-002"),
                wordType: "noun",
                german: "Test",
                article: "der",
                plural: "Tests",
                english: "test",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schreiben", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Test", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are writing a test.",
                clozeParts: ["Wir schreiben einen ", "."],
                clozeAnswers: ["Test"]
            } as Noun,
            {
                id: createWordId("lernen-pruefungen-003"),
                wordType: "noun",
                german: "Note",
                article: "die",
                plural: "Noten",
                english: "grade / mark",
                exampleGerman: [
                    { text: "In Englisch", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Eins", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have an A (a one) in English.",
                clozeParts: ["In Englisch habe ich eine ", "."],
                clozeAnswers: ["Eins"]
            } as Noun,
            {
                id: createWordId("lernen-pruefungen-004"),
                wordType: "noun",
                german: "Punkt",
                article: "der",
                plural: "Punkte",
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
            } as Noun,
            {
                id: createWordId("lernen-pruefungen-005"),
                wordType: "verb",
                german: "bestehen",
                english: "to pass (an exam)",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bestanden",
                presentConjugation: { ich: "bestehe", du: "bestehst", er: "besteht", wir: "bestehen", ihr: "besteht", sie: "bestehen" },
                imperative: { du: "Besteh!", ihr: "Besteht!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Prüfung", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bestanden", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have passed the exam.",
                clozeParts: ["Ich habe die Prüfung ", "."],
                clozeAnswers: ["bestanden"]
            } as Verb,
            {
                id: createWordId("lernen-pruefungen-006"),
                wordType: "noun",
                german: "Antwortbogen",
                article: "der",
                plural: "Antwortbögen",
                english: "answer sheet",
                exampleGerman: [
                    { text: "Bitte", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "geben Sie", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "den Antwortbogen", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ab", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please hand in the answer sheet.",
                clozeParts: ["Bitte geben Sie den ", " ab."],
                clozeAnswers: ["Antwortbogen"]
            } as Noun,
            {
                id: createWordId("lernen-pruefungen-007"),
                wordType: "noun",
                german: "Ergebnis",
                article: "das",
                plural: "Ergebnisse",
                english: "result",
                exampleGerman: [
                    { text: "Das Ergebnis", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gut", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The result is good.",
                clozeParts: ["Das ", " ist gut."],
                clozeAnswers: ["Ergebnis"]
            } as Noun,
            {
                id: createWordId("lernen-pruefungen-008"),
                wordType: "verb",
                german: "kontrollieren",
                english: "to check / to control",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "kontrolliert",
                presentConjugation: { ich: "kontrolliere", du: "kontrollierst", er: "kontrolliert", wir: "kontrollieren", ihr: "kontrolliert", sie: "kontrollieren" },
                imperative: { du: "Kontrollier!", ihr: "Kontrolliert!" },
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
            } as Verb,
            {
                id: createWordId("lernen-pruefungen-009"),
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
            } as Adjective,
            {
                id: createWordId("lernen-pruefungen-010"),
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
            } as Adjective,
            {
                id: createWordId("lernen-pruefungen-011"),
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
            } as Adjective
        ]
    }
});