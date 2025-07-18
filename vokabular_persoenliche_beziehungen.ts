// packages/trainer-themen/vokabular_persoenliche_beziehungen.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_persoenliche_beziehungen.js

import type {VocabularyStructure, Noun, Verb, Adjective, Adverb, WordId, CaseElement } from './src/core/types/vocabulary';
import {createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabularPersoenlicheBeziehungen: VocabularyStructure = createVocabulary({"Persönliche Beziehungen": {

        // --- UNTER-THEMA: Familie (15 Wörter) ---
        "Familie": [
            {
                id: createWordId("persoenliche-beziehungen-familie-001"),
                wordType: "noun",
                german: "Familie",
                article: "die",
                plural: "Familien",
                english: "family",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-001"), text: "Er", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-003"), text: "hat", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-005"), text: "eine große Familie", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "He has a large family.",
                clozeParts: ["Er hat eine große ", "."],
                clozeAnswers: ["Familie"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-002"),
                wordType: "noun",
                german: "Eltern",
                article: "die",
                plural: "Eltern",
                english: "parents",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-007"), text: "Meine Eltern", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-009"), text: "leben", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-011"), text: "in Spanien", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My parents live in Spain.",
                clozeParts: ["Meine ", " leben in Spanien."],
                clozeAnswers: ["Eltern"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-003"),
                wordType: "noun",
                german: "Vater",
                article: "der",
                plural: "Väter",
                english: "father",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-013"), text: "Mein Vater", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-015"), text: "arbeitet", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-017"), text: "bei einer Autofirma", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My father works at a car company.",
                clozeParts: ["Mein ", " arbeitet bei einer Autofirma."],
                clozeAnswers: ["Vater"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-004"),
                wordType: "noun",
                german: "Mutter",
                article: "die",
                plural: "Mütter",
                english: "mother",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-019"), text: "Meine Mutter", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-021"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-023"), text: "arbeitslos", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-024"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My mother is unemployed.",
                clozeParts: ["Meine ", " ist arbeitslos."],
                clozeAnswers: ["Mutter"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-005"),
                wordType: "noun",
                german: "Kind",
                article: "das",
                plural: "Kinder",
                english: "child",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-025"), text: "Meine Schwester", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-027"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-029"), text: "noch ein Baby", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-030"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine Schwester ist noch ein ", "."],
                clozeAnswers: ["Baby"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-006"),
                wordType: "noun",
                german: "Baby",
                article: "das",
                plural: "Babys",
                english: "baby",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-031"), text: "Meine Schwester", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-033"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-035"), text: "noch ein Baby", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-036"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine Schwester ist noch ein ", "."],
                clozeAnswers: ["Baby"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-007"),
                wordType: "noun",
                german: "Bruder",
                article: "der",
                plural: "Brüder",
                english: "brother",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-037"), text: "Mein Bruder", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-039"), text: "heißt", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-041"), text: "Peter", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-042"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My brother is called Peter.",
                clozeParts: ["Mein ", " heißt Peter."],
                clozeAnswers: ["Bruder"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-008"),
                wordType: "noun",
                german: "Schwester",
                article: "die",
                plural: "Schwestern",
                english: "sister",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-043"), text: "Meine Schwester", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-045"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-047"), text: "noch ein Baby", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-048"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine ", " ist noch ein Baby."],
                clozeAnswers: ["Schwester"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-009"),
                wordType: "noun",
                german: "Geschwister",
                article: "die",
                plural: "Geschwister",
                english: "siblings",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-049"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-051"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-053"), text: "zwei Geschwister", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-054"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are two siblings.",
                clozeParts: ["Wir sind zwei ", "."],
                clozeAnswers: ["Geschwister"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-010"),
                wordType: "noun",
                german: "Tante",
                article: "die",
                plural: "Tanten",
                english: "aunt",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-055"), text: "Meine Tante", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-057"), text: "wohnt", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-059"), text: "in Berlin", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-060"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My aunt lives in Berlin.",
                clozeParts: ["Meine ", " wohnt in Berlin."],
                clozeAnswers: ["Tante"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-011"),
                wordType: "noun",
                german: "Onkel",
                article: "der",
                plural: "Onkel",
                english: "uncle",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-061"), text: "Mein Onkel", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-063"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-065"), text: "Arzt", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-066"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My uncle is a doctor.",
                clozeParts: ["Mein ", " ist Arzt."],
                clozeAnswers: ["Onkel"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-012"),
                wordType: "noun",
                german: "Großmutter",
                article: "die",
                plural: "Großmütter",
                english: "grandmother",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-067"), text: "Meine Großmutter", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-068"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-069"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-071"), text: "sehr alt", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-072"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My grandmother is very old.",
                clozeParts: ["Meine ", " ist sehr alt."],
                clozeAnswers: ["Großmutter"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-013"),
                wordType: "noun",
                german: "Großvater",
                article: "der",
                plural: "Großväter",
                english: "grandfather",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-073"), text: "Mein Großvater", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-074"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-075"), text: "liest", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-077"), text: "viel", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-078"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My grandfather reads a lot.",
                clozeParts: ["Mein ", " liest viel."],
                clozeAnswers: ["Großvater"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-014"),
                wordType: "noun",
                german: "Großeltern",
                article: "die",
                plural: "Großeltern",
                english: "grandparents",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-079"), text: "Meine Großeltern", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-080"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-081"), text: "wohnen", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-082"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-083"), text: "auf dem Land", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-084"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My grandparents live in the countryside.",
                clozeParts: ["Meine ", " wohnen auf dem Land."],
                clozeAnswers: ["Großeltern"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-familie-015"),
                wordType: "noun",
                german: "Partner/Partnerin",
                article: "der/die",
                plural: "Partner/Partnerinnen",
                english: "partner",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-familie-085"), text: "Mein Partner", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-086"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-087"), text: "kommt", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-088"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-089"), text: "aus Italien", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-familie-090"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My partner comes from Italy.",
                clozeParts: ["Mein ", " kommt aus Italien."],
                clozeAnswers: ["Partner"]
            } as Noun
        ],

        // --- UNTER-THEMA: Freundschaft (11 Wörter) ---
        "Freundschaft": [
            {id: createWordId("persoenliche-beziehungen-freundschaft-001"),
                wordType: "noun",
                german: "Freund",
                article: "der",
                plural: "Freunde",
                english: "friend (male)",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-freundschaft-001"), text: "Mein bester Freund", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-003"), text: "heißt", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-005"), text: "Ivan", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My best friend is called Ivan.",
                clozeParts: ["Mein bester ", " heißt Ivan."],
                clozeAnswers: ["Freund"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-freundschaft-002"),
                wordType: "noun",
                german: "Freundin",
                article: "die",
                plural: "Freundinnen",
                english: "friend (female)",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-freundschaft-007"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-009"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-011"), text: "viele Freundinnen", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have many friends (female).",
                clozeParts: ["Ich habe viele ", "."],
                clozeAnswers: ["Freundinnen"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-freundschaft-003"),
                wordType: "noun",
                german: "Freunde",
                article: "die",
                plural: "Freunde",
                english: "friends (plural)",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-freundschaft-013"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-015"), text: "gehe", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-017"), text: "mit meinen Freunden", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-019"), text: "ins Kino", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-020"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am going to the cinema with my friends.",
                clozeParts: ["Ich gehe mit meinen ", " ins Kino."],
                clozeAnswers: ["Freunden"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-freundschaft-004"),
                wordType: "adjective",
                german: "beste(r)",
                english: "best",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-freundschaft-021"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-023"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-025"), text: "meine beste Freundin", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-026"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She is my best friend.",
                clozeParts: ["Sie ist meine ", " Freundin."],
                clozeAnswers: ["beste"]
            } as Adjective,
            {id: createWordId("persoenliche-beziehungen-freundschaft-005"),
                wordType: "verb",
                german: "besuchen",
                english: "to visit", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "besucht",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-freundschaft-027")},
                imperative: {id: createWordId("pers-nliche-beziehun-freundschaft-028")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-freundschaft-029"), text: "Im Sommer", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-031"), text: "besuche", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-033"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-035"), text: "dich", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-036"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "In the summer I will visit you.",
                clozeParts: ["Im Sommer ", " ich dich."],
                clozeAnswers: ["besuche"]
            } as Verb,
            {id: createWordId("persoenliche-beziehungen-freundschaft-006"),
                wordType: "adverb",
                german: "zusammen",
                english: "together",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-freundschaft-037"), text: "Meine Schwester und ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-038"), text: ",", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-039"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-040"), text: "wir beide", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-041"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-042"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-043"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-044"), text: "immer zusammen", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-045"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My sister and I, we are always together.",
                clozeParts: ["Meine Schwester und ich, wir beide sind immer ", "."],
                clozeAnswers: ["zusammen"]
            } as Adverb,
            {id: createWordId("persoenliche-beziehungen-freundschaft-007"),
                wordType: "verb",
                german: "helfen",
                english: "to help", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geholfen",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-freundschaft-046")},
                imperative: {id: createWordId("pers-nliche-beziehun-freundschaft-047")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-freundschaft-048"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-049"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-050"), text: "helfe", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-051"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-052"), text: "dir", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-053"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-054"), text: "ein bisschen", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-055"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I will help you a little.",
                clozeParts: ["Ich ", " dir ein bisschen."],
                clozeAnswers: ["helfe"]
            } as Verb,
            {id: createWordId("persoenliche-beziehungen-freundschaft-008"),
                wordType: "verb",
                german: "einladen",
                english: "to invite", separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingeladen",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-freundschaft-056")},
                imperative: {id: createWordId("pers-nliche-beziehun-freundschaft-057")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-freundschaft-058"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-059"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-060"), text: "lade", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-061"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-062"), text: "dich", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-063"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-064"), text: "ein", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-065"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I invite you.",
                clozeParts: ["Ich lade dich ", "."],
                clozeAnswers: ["ein"]
            } as Verb,
            {id: createWordId("persoenliche-beziehungen-freundschaft-009"),
                wordType: "noun",
                german: "Einladung",
                article: "die",
                plural: "Einladungen",
                english: "invitation",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-freundschaft-066"), text: "Das", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-067"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-068"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-069"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-070"), text: "eine Einladung", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-071"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-072"), text: "zur Geburtstagsparty", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-073"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "This is an invitation to the birthday party.",
                clozeParts: ["Das ist eine ", " zur Geburtstagsparty."],
                clozeAnswers: ["Einladung"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-freundschaft-010"),
                wordType: "verb",
                german: "schenken",
                english: "to give (as a gift)", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschenkt",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-freundschaft-074")},
                imperative: {id: createWordId("pers-nliche-beziehun-freundschaft-075")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-freundschaft-076"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-077"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-078"), text: "können", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-079"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-080"), text: "ihm", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-081"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-082"), text: "eine CD", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-083"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-084"), text: "schenken", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-085"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We can give him a CD as a present.",
                clozeParts: ["Wir können ihm eine CD ", "."],
                clozeAnswers: ["schenken"]
            } as Verb,
            {id: createWordId("persoenliche-beziehungen-freundschaft-011"),
                wordType: "verb",
                german: "danken",
                english: "to thank", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gedankt",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-freundschaft-086")},
                imperative: {id: createWordId("pers-nliche-beziehun-freundschaft-087")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-freundschaft-088"), text: "Die CD", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-089"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-090"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-091"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-092"), text: "wunderbar", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-093"), text: ",", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-094"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-095"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-096"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-097"), text: "danke", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-098"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-099"), text: "dir", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-freundschaft-100"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The CD is wonderful, I thank you.",
                clozeParts: ["Die CD ist wunderbar, ich danke ", "."],
                clozeAnswers: ["dir"]
            } as Verb
        ],

        // --- UNTER-THEMA: In der Schule (9 Wörter) ---
        "In der Schule": [
            {id: createWordId("persoenliche-beziehungen-schule-001"),
                wordType: "noun",
                german: "Klasse",
                article: "die",
                plural: "Klassen",
                english: "class",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-schule-001"), text: "In unserer Klasse", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-003"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-005"), text: "20 Schüler", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There are 20 students in our class.",
                clozeParts: ["In unserer ", " sind 20 Schüler."],
                clozeAnswers: ["Klasse"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-schule-002"),
                wordType: "noun",
                german: "Klassenkamerad/Klassenkameradin",
                article: "der/die",
                plural: "Klassenkameraden/Klassenkameradinnen",
                english: "classmate (male/female)",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-schule-007"), text: "Mein Klassenkamerad", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-009"), text: "hilft", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-011"), text: "mir", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My classmate helps me.",
                clozeParts: ["Mein ", " hilft mir."],
                clozeAnswers: ["Klassenkamerad"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-schule-003"),
                wordType: "noun",
                german: "Lehrer/Lehrerin",
                article: "der/die",
                plural: "Lehrer/Lehrerinnen",
                english: "teacher (male/female)",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-schule-013"), text: "Der Lehrer", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-015"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-017"), text: "freundlich", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The teacher is friendly.",
                clozeParts: ["Der ", " ist freundlich."],
                clozeAnswers: ["Lehrer"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-schule-004"),
                wordType: "noun",
                german: "Schüler/Schülerin",
                article: "der/die",
                plural: "Schüler/Schülerinnen",
                english: "student (male/female)",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-schule-019"), text: "Die Schüler", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-021"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-023"), text: "freundlich", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-024"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The students are friendly.",
                clozeParts: ["Die ", " sind freundlich."],
                clozeAnswers: ["Schüler"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-schule-005"),
                wordType: "noun",
                german: "Freund",
                article: "der",
                plural: "Freunde",
                english: "friend (male)",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-schule-025"), text: "Mein Freund", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-027"), text: "sitzt", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-029"), text: "neben mir", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-031"), text: "in der Schule", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-032"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My friend sits next to me in school.",
                clozeParts: ["Mein ", " sitzt neben mir in der Schule."],
                clozeAnswers: ["Freund"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-schule-006"),
                wordType: "verb",
                german: "zusammen lernen",
                english: "to learn together", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-in-der-schule-033")},
                imperative: {id: createWordId("pers-nliche-beziehun-in-der-schule-034")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-035"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-037"), text: "lernen", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-039"), text: "zusammen", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-041"), text: "für die Prüfung", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-042"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are learning together for the exam.",
                clozeParts: ["Wir ", " zusammen für die Prüfung."],
                clozeAnswers: ["lernen"]
            } as Verb,
            {id: createWordId("persoenliche-beziehungen-schule-007"),
                wordType: "verb",
                german: "helfen",
                english: "to help", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geholfen",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-in-der-schule-043")},
                imperative: {id: createWordId("pers-nliche-beziehun-in-der-schule-044")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-045"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-047"), text: "helfe", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-049"), text: "meiner Freundin", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-051"), text: "bei den Hausaufgaben", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-052"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I help my friend with the homework.",
                clozeParts: ["Ich ", " meiner Freundin bei den Hausaufgaben."],
                clozeAnswers: ["helfe"]
            } as Verb,
            {id: createWordId("persoenliche-beziehungen-schule-008"),
                wordType: "noun",
                german: "Gruppe",
                article: "die",
                plural: "Gruppen",
                english: "group",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-schule-053"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-055"), text: "arbeiten", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-057"), text: "in der Gruppe", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-058"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are working in the group.",
                clozeParts: ["Wir arbeiten in der ", "."],
                clozeAnswers: ["Gruppe"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-schule-009"),
                wordType: "adjective",
                german: "freundlich",
                english: "friendly",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-schule-059"), text: "Der Schuldirektor", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-061"), text: "war", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-063"), text: "sehr freundlich", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-schule-064"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The headmaster was very friendly.",
                clozeParts: ["Der Schuldirektor war sehr ", "."],
                clozeAnswers: ["freundlich"]
            } as Adjective
        ],

        // --- UNTER-THEMA: In der Klasse (7 Wörter) ---
        "In der Klasse": [
            {id: createWordId("persoenliche-beziehungen-klasse-001"),
                wordType: "noun",
                german: "Mitschüler/Mitschülerin",
                article: "der/die",
                plural: "Mitschüler/Mitschülerinnen",
                english: "classmate (male/female)",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-klasse-001"), text: "Meine Mitschülerin", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-003"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-005"), text: "nett", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My classmate is nice.",
                clozeParts: ["Meine ", " ist nett."],
                clozeAnswers: ["Mitschülerin"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-klasse-002"),
                wordType: "adverb",
                german: "zusammen",
                english: "together",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-klasse-007"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-009"), text: "machen", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-011"), text: "die Aufgabe", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-013"), text: "zusammen", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-014"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are doing the task together.",
                clozeParts: ["Wir machen die Aufgabe ", "."],
                clozeAnswers: ["zusammen"]
            } as Adverb,
            {id: createWordId("persoenliche-beziehungen-klasse-003"),
                wordType: "verb",
                german: "helfen",
                english: "to help", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geholfen",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-in-der-klasse-015")},
                imperative: {id: createWordId("pers-nliche-beziehun-in-der-klasse-016")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-017"), text: "Kannst", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-019"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-021"), text: "mir", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-023"), text: "helfen", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-024"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you help me?",
                clozeParts: ["Kannst du mir ", "?"],
                clozeAnswers: ["helfen"]
            } as Verb,
            {id: createWordId("persoenliche-beziehungen-klasse-004"),
                wordType: "verb",
                german: "fragen",
                english: "to ask", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefragt",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-in-der-klasse-025")},
                imperative: {id: createWordId("pers-nliche-beziehun-in-der-klasse-026")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-027"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-029"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-031"), text: "etwas", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-033"), text: "fragen", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-034"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like to ask something.",
                clozeParts: ["Ich möchte etwas ", "."],
                clozeAnswers: ["fragen"]
            } as Verb,
            {id: createWordId("persoenliche-beziehungen-klasse-005"),
                wordType: "verb",
                german: "antworten",
                english: "to answer", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geantwortet",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-in-der-klasse-035")},
                imperative: {id: createWordId("pers-nliche-beziehun-in-der-klasse-036")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-037"), text: "Weißt", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-039"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-041"), text: "die Antwort", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-042"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Do you know the answer?",
                clozeParts: ["Weißt du die ", "?"],
                clozeAnswers: ["Antwort"]
            } as Verb,
            {id: createWordId("persoenliche-beziehungen-klasse-006"),
                wordType: "noun",
                german: "Aufgabe",
                article: "die",
                plural: "Aufgaben",
                english: "task / exercise",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-klasse-043"), text: "Die Aufgabe", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-045"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-047"), text: "einfach", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-048"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The task is easy.",
                clozeParts: ["Die ", " ist einfach."],
                clozeAnswers: ["Aufgabe"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-klasse-007"),
                wordType: "noun",
                german: "Team",
                article: "das",
                plural: "Teams",
                english: "team",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-in-der-klasse-049"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-051"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-053"), text: "ein gutes Team", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-in-der-klasse-054"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are a good team.",
                clozeParts: ["Wir sind ein gutes ", "."],
                clozeAnswers: ["Team"]
            } as Noun
        ],

        // --- UNTER-THEMA: Lieblingstiere (7 Wörter) ---
        "Lieblingstiere": [
            {id: createWordId("persoenliche-beziehungen-lieblingstiere-001"),
                wordType: "noun",
                german: "Hund",
                article: "der",
                plural: "Hunde",
                english: "dog",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-lieblingstiere-001"), text: "Ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-003"), text: "das", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-005"), text: "dein Hund", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-006"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Is that your dog?",
                clozeParts: ["Ist das dein ", "?"],
                clozeAnswers: ["Hund"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-lieblingstiere-002"),
                wordType: "noun",
                german: "Katze",
                article: "die",
                plural: "Katzen",
                english: "cat",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-lieblingstiere-007"), text: "Meine Katze", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-009"), text: "schläft", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-011"), text: "viel", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My cat sleeps a lot.",
                clozeParts: ["Meine ", " schläft viel."],
                clozeAnswers: ["Katze"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-lieblingstiere-003"),
                wordType: "noun",
                german: "Lieblingstier",
                article: "das",
                plural: "Lieblingstiere",
                english: "favorite animal",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-lieblingstiere-013"), text: "Mein Lieblingstier", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-015"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-017"), text: "der Hund", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My favorite animal is the dog.",
                clozeParts: ["Mein ", " ist der Hund."],
                clozeAnswers: ["Lieblingstier"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-lieblingstiere-004"),
                wordType: "noun",
                german: "Haustier",
                article: "das",
                plural: "Haustiere",
                english: "pet",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-lieblingstiere-019"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-021"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-023"), text: "ein Haustier", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-024"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a pet.",
                clozeParts: ["Ich habe ein ", "."],
                clozeAnswers: ["Haustier"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-lieblingstiere-005"),
                wordType: "noun",
                german: "Tier",
                article: "das",
                plural: "Tiere",
                english: "animal",
                exampleGerman: [
                    {
    id: createWordId("pers-nliche-beziehun-lieblingstiere-025"), text: "Mein Lieblingstier", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-027"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-029"), text: "der Hund", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-030"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My favorite animal is the dog.",
                clozeParts: ["Mein Lieblingstier ist der Hund."],
                clozeAnswers: ["Lieblingstier"]
            } as Noun,
            {id: createWordId("persoenliche-beziehungen-lieblingstiere-006"),
                wordType: "verb",
                german: "füttern",
                english: "to feed", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefüttert",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-lieblingstiere-031")},
                imperative: {id: createWordId("pers-nliche-beziehun-lieblingstiere-032")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-033"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-035"), text: "füttere", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-037"), text: "meinen Hund", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-039"), text: "jeden Tag", case: "akkusativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-040"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I feed my dog every day.",
                clozeParts: ["Ich ", " meinen Hund jeden Tag."],
                clozeAnswers: ["füttere"]
            } as Verb,
            {id: createWordId("persoenliche-beziehungen-lieblingstiere-007"),
                wordType: "verb",
                german: "spielen",
                english: "to play", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                presentConjugation: {
    id: createWordId("pers-nliche-beziehun-lieblingstiere-041")},
                imperative: {id: createWordId("pers-nliche-beziehun-lieblingstiere-042")},
                exampleGerman: [
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-043"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-045"), text: "spiele", case: "verb" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-047"), text: "mit meinem Hund", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-049"), text: "im Garten", case: "dativ" } as CaseElement,
                    {id: createWordId("pers-nliche-beziehun-lieblingstiere-050"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I play with my dog in the garden.",
                clozeParts: ["Ich ", " mit meinem Hund im Garten."],
                clozeAnswers: ["spiele"]
            } as Verb
        ]
    }
});