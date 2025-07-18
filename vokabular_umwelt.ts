// packages/trainer-themen/vokabular_umwelt.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_umwelt.js

import type {VocabularyStructure, Noun, WordId, CaseElement } from './src/core/types/vocabulary';
import {createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabularUmwelt: VocabularyStructure = createVocabulary({"Umwelt": {

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
                    {
    id: createWordId("umwelt-gegend-stadt-land-001"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-003"), text: "wohne", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-005"), text: "in einer kleinen Stadt", case: "dativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I live in a small town.",
                clozeParts: ["Ich wohne in einer kleinen ", "."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-002"),
                wordType: "noun",
                german: "Land",
                article: "das",
                plural: "Länder",
                english: "country / land",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-007"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-009"), text: "komme", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-011"), text: "aus Deutschland", case: "dativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I come from Germany.",
                clozeParts: ["Ich komme aus ", "."],
                clozeAnswers: ["Deutschland"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-003"),
                wordType: "noun",
                german: "Ausland",
                article: "das",
                plural: null,
                english: "abroad / foreign country",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-013"), text: "Mein Vater", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-015"), text: "war", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-017"), text: "lange", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-019"), text: "im Ausland", case: "dativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-020"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My father was abroad for a long time.",
                clozeParts: ["Mein Vater war lange im ", "."],
                clozeAnswers: ["Ausland"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-004"),
                wordType: "noun",
                german: "Baum",
                article: "der",
                plural: "Bäume",
                english: "tree",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-021"), text: "Die Bäume", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-023"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-025"), text: "schon grün", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-026"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The trees are already green.",
                clozeParts: ["Die ", " sind schon grün."],
                clozeAnswers: ["Bäume"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-005"),
                wordType: "noun",
                german: "Blume",
                article: "die",
                plural: "Blumen",
                english: "flower",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-027"), text: "Hier", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-029"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-031"), text: "Blumen", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-033"), text: "für dich", case: "akkusativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-034"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Here are flowers for you.",
                clozeParts: ["Hier sind ", " für dich."],
                clozeAnswers: ["Blumen"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-006"),
                wordType: "noun",
                german: "Fluss",
                article: "der",
                plural: "Flüsse",
                english: "river",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-035"), text: "Der Rhein", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-037"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-039"), text: "ein großer Fluss", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-040"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The Rhine is a large river.",
                clozeParts: ["Der Rhein ist ein großer ", "."],
                clozeAnswers: ["Fluss"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-007"),
                wordType: "noun",
                german: "Meer",
                article: "das",
                plural: "Meere",
                english: "sea / ocean",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-041"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-043"), text: "fahren", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-045"), text: "ans Meer", case: "akkusativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-046"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are going to the sea.",
                clozeParts: ["Wir fahren ans ", "."],
                clozeAnswers: ["Meer"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-008"),
                wordType: "noun",
                german: "Sonne",
                article: "die",
                plural: "Sonnen",
                english: "sun",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-047"), text: "Die Sonne", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-049"), text: "scheint", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-050"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The sun is shining.",
                clozeParts: ["Die ", " scheint."],
                clozeAnswers: ["Sonne"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-009"),
                wordType: "noun",
                german: "Norden",
                article: "der",
                plural: null,
                english: "north",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-051"), text: "Der Norden", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-053"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-055"), text: "kalt", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-056"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The north is cold.",
                clozeParts: ["Der ", " ist kalt."],
                clozeAnswers: ["Norden"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-010"),
                wordType: "noun",
                german: "Süden",
                article: "der",
                plural: null,
                english: "south",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-057"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-059"), text: "reisen", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-061"), text: "in den Süden", case: "akkusativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-062"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are traveling to the south.",
                clozeParts: ["Wir reisen in den ", "."],
                clozeAnswers: ["Süden"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-011"),
                wordType: "noun",
                german: "Westen",
                article: "der",
                plural: null,
                english: "west",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-063"), text: "Der Wind", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-065"), text: "kommt", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-067"), text: "aus Westen", case: "dativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-068"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The wind comes from the west.",
                clozeParts: ["Der Wind kommt aus ", "."],
                clozeAnswers: ["Westen"]
            } as Noun,
            {id: createWordId("umwelt-gegendstadtland-012"),
                wordType: "noun",
                german: "Osten",
                article: "der",
                plural: null,
                english: "east",
                exampleGerman: [
                    {
    id: createWordId("umwelt-gegend-stadt-land-069"), text: "Im Osten", case: "dativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-071"), text: "geht", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-072"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-073"), text: "die Sonne", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-074"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-075"), text: "auf", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-gegend-stadt-land-076"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The sun rises in the east.",
                clozeParts: ["Im ", " geht die Sonne auf."],
                clozeAnswers: ["Osten"]
            } as Noun
        ],

        // --- UNTER-THEMA: (Haus-)Tiere (5 Wörter) ---
        "(Haus-)Tiere": [
            {id: createWordId("umwelt-haustiere-001"),
                wordType: "noun",
                german: "Hund",
                article: "der",
                plural: "Hunde",
                english: "dog",
                exampleGerman: [
                    {
    id: createWordId("umwelt-haus--tiere-001"), text: "Ist", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-003"), text: "das", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-005"), text: "dein Hund", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-006"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Is that your dog?",
                clozeParts: ["Ist das dein ", "?"],
                clozeAnswers: ["Hund"]
            } as Noun,
            {id: createWordId("umwelt-haustiere-002"),
                wordType: "noun",
                german: "Katze",
                article: "die",
                plural: "Katzen",
                english: "cat",
                exampleGerman: [
                    {
    id: createWordId("umwelt-haus--tiere-007"), text: "Meine Katze", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-009"), text: "schläft", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-011"), text: "viel", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My cat sleeps a lot.",
                clozeParts: ["Meine ", " schläft viel."],
                clozeAnswers: ["Katze"]
            } as Noun,
            {id: createWordId("umwelt-haustiere-003"),
                wordType: "noun",
                german: "Tier",
                article: "das",
                plural: "Tiere",
                english: "animal",
                exampleGerman: [
                    {
    id: createWordId("umwelt-haus--tiere-013"), text: "Mein Lieblingstier", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-015"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-017"), text: "der Hund", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My favorite animal is the dog.",
                clozeParts: ["Mein Lieblings", " ist der Hund."],
                clozeAnswers: ["tier"]
            } as Noun,
            {id: createWordId("umwelt-haustiere-004"),
                wordType: "noun",
                german: "Haustier",
                article: "das",
                plural: "Haustiere",
                english: "pet",
                exampleGerman: [
                    {
    id: createWordId("umwelt-haus--tiere-019"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-021"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-023"), text: "ein Haustier", case: "akkusativ" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-024"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a pet.",
                clozeParts: ["Ich habe ein ", "."],
                clozeAnswers: ["Haustier"]
            } as Noun,
            {id: createWordId("umwelt-haustiere-005"),
                wordType: "noun",
                german: "Vogel",
                article: "der",
                plural: "Vögel",
                english: "bird",
                exampleGerman: [
                    {
    id: createWordId("umwelt-haus--tiere-025"), text: "Im Garten", case: "dativ" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-027"), text: "singt", case: "verb" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-029"), text: "ein Vogel", case: "nominativ" } as CaseElement,
                    {id: createWordId("umwelt-haus--tiere-030"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "A bird is singing in the garden.",
                clozeParts: ["Im Garten singt ein ", "."],
                clozeAnswers: ["Vogel"]
            } as Noun
        ]
    }
});