// packages/trainer-themen/vokabular_umwelt.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_umwelt.js

import type {VocabularyStructure, Noun} from './src/core/types/vocabulary';
import {createWordId, createVocabulary} from './src/core/types/vocabulary';

export const vokabularUmwelt: VocabularyStructure = createVocabulary({
    "Umwelt": {

        // --- UNTER-THEMA: Gegend, Stadt, Land (12 Wörter) ---
        "Gegend, Stadt, Land": [
            {
                id: createWordId("umwelt-gegendstadtland-001"),
                wordType: "noun",
                german: "Stadt",
                article: "die",
                plural: "Städte",
                english: "city / town",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wohne", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in einer kleinen Stadt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I live in a small town.",
                clozeParts: ["Ich wohne in einer kleinen ", "."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {
                id: createWordId("umwelt-gegendstadtland-002"),
                wordType: "noun",
                german: "Land",
                article: "das",
                plural: "Länder",
                english: "country / land",
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
                id: createWordId("umwelt-gegendstadtland-003"),
                wordType: "noun",
                german: "Ausland",
                article: "das",
                plural: null,
                english: "abroad / foreign country",
                exampleGerman: [
                    { text: "Mein Vater", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "war", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "lange", case: "none" },
                    { text: " ", case: "none" },
                    { text: "im Ausland", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My father was abroad for a long time.",
                clozeParts: ["Mein Vater war lange im ", "."],
                clozeAnswers: ["Ausland"]
            } as Noun,
            {
                id: createWordId("umwelt-gegendstadtland-004"),
                wordType: "noun",
                german: "Baum",
                article: "der",
                plural: "Bäume",
                english: "tree",
                exampleGerman: [
                    { text: "Die Bäume", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "schon grün", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The trees are already green.",
                clozeParts: ["Die ", " sind schon grün."],
                clozeAnswers: ["Bäume"]
            } as Noun,
            {
                id: createWordId("umwelt-gegendstadtland-005"),
                wordType: "noun",
                german: "Blume",
                article: "die",
                plural: "Blumen",
                english: "flower",
                exampleGerman: [
                    { text: "Hier", case: "none" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Blumen", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "für dich", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Here are flowers for you.",
                clozeParts: ["Hier sind ", " für dich."],
                clozeAnswers: ["Blumen"]
            } as Noun,
            {
                id: createWordId("umwelt-gegendstadtland-006"),
                wordType: "noun",
                german: "Fluss",
                article: "der",
                plural: "Flüsse",
                english: "river",
                exampleGerman: [
                    { text: "Der Rhein", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein großer Fluss", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The Rhine is a large river.",
                clozeParts: ["Der Rhein ist ein großer ", "."],
                clozeAnswers: ["Fluss"]
            } as Noun,
            {
                id: createWordId("umwelt-gegendstadtland-007"),
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
                id: createWordId("umwelt-gegendstadtland-008"),
                wordType: "noun",
                german: "Sonne",
                article: "die",
                plural: "Sonnen",
                english: "sun",
                exampleGerman: [
                    { text: "Die Sonne", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "scheint", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The sun is shining.",
                clozeParts: ["Die ", " scheint."],
                clozeAnswers: ["Sonne"]
            } as Noun,
            {
                id: createWordId("umwelt-gegendstadtland-009"),
                wordType: "noun",
                german: "Norden",
                article: "der",
                plural: null,
                english: "north",
                exampleGerman: [
                    { text: "Der Norden", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "kalt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The north is cold.",
                clozeParts: ["Der ", " ist kalt."],
                clozeAnswers: ["Norden"]
            } as Noun,
            {
                id: createWordId("umwelt-gegendstadtland-010"),
                wordType: "noun",
                german: "Süden",
                article: "der",
                plural: null,
                english: "south",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "reisen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in den Süden", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are traveling to the south.",
                clozeParts: ["Wir reisen in den ", "."],
                clozeAnswers: ["Süden"]
            } as Noun,
            {
                id: createWordId("umwelt-gegendstadtland-011"),
                wordType: "noun",
                german: "Westen",
                article: "der",
                plural: null,
                english: "west",
                exampleGerman: [
                    { text: "Der Wind", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "kommt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "aus Westen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The wind comes from the west.",
                clozeParts: ["Der Wind kommt aus ", "."],
                clozeAnswers: ["Westen"]
            } as Noun,
            {
                id: createWordId("umwelt-gegendstadtland-012"),
                wordType: "noun",
                german: "Osten",
                article: "der",
                plural: null,
                english: "east",
                exampleGerman: [
                    { text: "Im Osten", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "geht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die Sonne", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "auf", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The sun rises in the east.",
                clozeParts: ["Im ", " geht die Sonne auf."],
                clozeAnswers: ["Osten"]
            } as Noun
        ],

        // --- UNTER-THEMA: (Haus-)Tiere (5 Wörter) ---
        "(Haus-)Tiere": [
            {
                id: createWordId("umwelt-haustiere-001"),
                wordType: "noun",
                german: "Hund",
                article: "der",
                plural: "Hunde",
                english: "dog",
                exampleGerman: [
                    { text: "Ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "das", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "dein Hund", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Is that your dog?",
                clozeParts: ["Ist das dein ", "?"],
                clozeAnswers: ["Hund"]
            } as Noun,
            {
                id: createWordId("umwelt-haustiere-002"),
                wordType: "noun",
                german: "Katze",
                article: "die",
                plural: "Katzen",
                english: "cat",
                exampleGerman: [
                    { text: "Meine Katze", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schläft", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "viel", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My cat sleeps a lot.",
                clozeParts: ["Meine ", " schläft viel."],
                clozeAnswers: ["Katze"]
            } as Noun,
            {
                id: createWordId("umwelt-haustiere-003"),
                wordType: "noun",
                german: "Tier",
                article: "das",
                plural: "Tiere",
                english: "animal",
                exampleGerman: [
                    { text: "Mein Lieblingstier", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "der Hund", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My favorite animal is the dog.",
                clozeParts: ["Mein Lieblings", " ist der Hund."],
                clozeAnswers: ["tier"]
            } as Noun,
            {
                id: createWordId("umwelt-haustiere-004"),
                wordType: "noun",
                german: "Haustier",
                article: "das",
                plural: "Haustiere",
                english: "pet",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Haustier", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have a pet.",
                clozeParts: ["Ich habe ein ", "."],
                clozeAnswers: ["Haustier"]
            } as Noun,
            {
                id: createWordId("umwelt-haustiere-005"),
                wordType: "noun",
                german: "Vogel",
                article: "der",
                plural: "Vögel",
                english: "bird",
                exampleGerman: [
                    { text: "Im Garten", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "singt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Vogel", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "A bird is singing in the garden.",
                clozeParts: ["Im Garten singt ein ", "."],
                clozeAnswers: ["Vogel"]
            } as Noun
        ]
    }
});