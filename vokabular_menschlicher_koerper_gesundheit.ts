// packages/trainer-themen/vokabular_menschlicher_koerper_gesundheit.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_menschlicher_koerper_gesundheit.js

import type {VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary';
import {createWordId, createVocabulary } from './shared/types/vocabulary';

export const vokabularMenschlicherKoerperGesundheit: VocabularyStructure = createVocabulary({"Menschlicher Körper und Gesundheit": {

        // --- UNTER-THEMA: Körperteile (13 Wörter) ---
        "Körperteile": [
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-001"),
                wordType: "noun",
                german: "Arm",
                article: "der",
                plural: "Arme",
                english: "arm",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-001"), text: "Mein Arm", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-003"), text: "tut", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-005"), text: "weh", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My arm hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Arm"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-002"),
                wordType: "noun",
                german: "Auge",
                article: "das",
                plural: "Augen",
                english: "eye",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-007"), text: "Seine Augen", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-009"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-011"), text: "grün", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "His eyes are green.",
                clozeParts: ["Seine ", " sind grün."],
                clozeAnswers: ["Augen"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-003"),
                wordType: "noun",
                german: "Bauch",
                article: "der",
                plural: "Bäuche",
                english: "belly / stomach",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-013"), text: "Mein Bauch", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-015"), text: "tut", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-017"), text: "weh", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My stomach hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Bauch"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-004"),
                wordType: "noun",
                german: "Fuß",
                article: "der",
                plural: "Füße",
                english: "foot",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-019"), text: "Mein Fuß", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-021"), text: "tut", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-023"), text: "weh", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-024"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My foot hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Fuß"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-005"),
                wordType: "noun",
                german: "Haar",
                article: "das",
                plural: "Haare",
                english: "hair",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-025"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-027"), text: "hat", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-029"), text: "lange Haare", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-030"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She has long hair.",
                clozeParts: ["Sie hat lange ", "."],
                clozeAnswers: ["Haare"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-006"),
                wordType: "noun",
                german: "Kopf",
                article: "der",
                plural: "Köpfe",
                english: "head",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-031"), text: "Mein Kopf", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-033"), text: "tut", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-035"), text: "weh", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-036"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My head hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Kopf"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-007"),
                wordType: "noun",
                german: "Mund",
                article: "der",
                plural: "Münder",
                english: "mouth",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-037"), text: "Öffne", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-039"), text: "bitte", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-041"), text: "den Mund", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-042"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please open your mouth.",
                clozeParts: ["Öffne bitte den ", "."],
                clozeAnswers: ["Mund"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-008"),
                wordType: "noun",
                german: "Nase",
                article: "die",
                plural: "Nasen",
                english: "nose",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-043"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-045"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-047"), text: "eine laufende Nase", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-048"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a runny nose.",
                clozeParts: ["Ich habe eine laufende ", "."],
                clozeAnswers: ["Nase"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-009"),
                wordType: "noun",
                german: "Ohr",
                article: "das",
                plural: "Ohren",
                english: "ear",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-049"), text: "Mein Ohr", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-051"), text: "tut", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-053"), text: "weh", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-054"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My ear hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Ohr"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-010"),
                wordType: "noun",
                german: "Hand",
                article: "die",
                plural: "Hände",
                english: "hand",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-055"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-057"), text: "wasche", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-059"), text: "meine Hände", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-060"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I wash my hands.",
                clozeParts: ["Ich wasche meine ", "."],
                clozeAnswers: ["Hände"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-011"),
                wordType: "noun",
                german: "Bein",
                article: "das",
                plural: "Beine",
                english: "leg",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-061"), text: "Mein Bein", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-063"), text: "tut", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-065"), text: "weh", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-066"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My leg hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Bein"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-012"),
                wordType: "noun",
                german: "Körper",
                article: "der",
                plural: "Körper",
                english: "body",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-067"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-068"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-069"), text: "wasche", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-071"), text: "meinen Körper", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-072"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I wash my body.",
                clozeParts: ["Ich wasche meinen ", "."],
                clozeAnswers: ["Körper"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperteile-013"),
                wordType: "noun",
                german: "Zahn",
                article: "der",
                plural: "Zähne",
                english: "tooth",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperteile-073"), text: "Mir", case: "dativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-074"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-075"), text: "tut", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-077"), text: "der Zahn", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-078"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-079"), text: "weh", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperteile-080"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My tooth hurts.",
                clozeParts: ["Mir tut der ", " weh."],
                clozeAnswers: ["Zahn"]
            } as Noun
        ],

        // --- UNTER-THEMA: Körperpflege/Hygiene (4 Wörter) ---
        "Körperpflege/Hygiene": [
            {id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-001"),
                wordType: "verb",
                german: "duschen",
                english: "to shower", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geduscht",
                presentConjugation: {
    id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-001")},
                imperative: {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-002")},
                exampleGerman: [
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-003"), text: "Erst", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-005"), text: "dusche", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-007"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-008"), text: ",", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-009"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-010"), text: "dann", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-011"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-012"), text: "gehe", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-013"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-014"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-015"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-016"), text: "zum Frühstück", case: "dativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-017"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "First I shower, then I go to breakfast.",
                clozeParts: ["Erst ", " ich, dann gehe ich zum Frühstück."],
                clozeAnswers: ["dusche"]
            } as Verb,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-002"),
                wordType: "verb",
                german: "waschen",
                english: "to wash", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gewaschen",
                presentConjugation: {
    id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-018")},
                imperative: {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-019")},
                exampleGerman: [
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-020"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-021"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-022"), text: "wasche", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-023"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-024"), text: "meine Hände", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-025"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I wash my hands.",
                clozeParts: ["Ich ", " meine Hände."],
                clozeAnswers: ["wasche"]
            } as Verb,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-003"),
                wordType: "verb",
                german: "Zähne putzen",
                english: "to brush teeth", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geputzt",
                presentConjugation: {
    id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-026")},
                imperative: {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-027")},
                exampleGerman: [
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-028"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-029"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-030"), text: "putze", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-031"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-032"), text: "meine Zähne", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-033"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I brush my teeth.",
                clozeParts: ["Ich ", " meine Zähne."],
                clozeAnswers: ["putze"]
            } as Verb,
            {id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-004"),
                wordType: "adjective",
                german: "sauber",
                english: "clean",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-034"), text: "Das Handtuch", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-035"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-036"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-037"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-038"), text: "sauber", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-k-rperpflege-hygiene-039"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The towel is clean.",
                clozeParts: ["Das Handtuch ist ", "."],
                clozeAnswers: ["sauber"]
            } as Adjective
        ],

        // --- UNTER-THEMA: Befinden (10 Wörter) ---
        "Befinden": [
            {id: createWordId("menschlicher-koerper-gesundheit-befinden-001"),
                wordType: "adjective",
                german: "gut",
                english: "good / well",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-befinden-001"), text: "Wie", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-003"), text: "geht", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-005"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-007"), text: "dir", case: "dativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-008"), text: "?", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-009"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-010"), text: "–", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-011"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-012"), text: "Mir", case: "dativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-013"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-014"), text: "geht", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-015"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-016"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-017"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-018"), text: "gut", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-019"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "How are you? – I am well.",
                clozeParts: ["Mir geht es ", "."],
                clozeAnswers: ["gut"]
            } as Adjective,
            {id: createWordId("menschlicher-koerper-gesundheit-befinden-002"),
                wordType: "adjective",
                german: "schlecht",
                english: "bad / poorly",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-befinden-020"), text: "Mir", case: "dativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-021"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-022"), text: "geht", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-023"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-024"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-025"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-026"), text: "schlecht", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-027"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am doing poorly.",
                clozeParts: ["Mir geht es ", "."],
                clozeAnswers: ["schlecht"]
            } as Adjective,
            {id: createWordId("menschlicher-koerper-gesundheit-befinden-003"),
                wordType: "adjective",
                german: "müde",
                english: "tired",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-befinden-028"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-029"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-030"), text: "bin", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-031"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-032"), text: "müde", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-033"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am tired.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["müde"]
            } as Adjective,
            {id: createWordId("menschlicher-koerper-gesundheit-befinden-004"),
                wordType: "adjective",
                german: "krank",
                english: "sick / ill",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-befinden-034"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-035"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-036"), text: "bin", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-037"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-038"), text: "krank", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-039"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am sick.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["krank"]
            } as Adjective,
            {id: createWordId("menschlicher-koerper-gesundheit-befinden-005"),
                wordType: "adjective",
                german: "besser",
                english: "better",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-befinden-040"), text: "Hoffentlich", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-041"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-042"), text: "geht", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-043"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-044"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-045"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-046"), text: "dir", case: "dativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-047"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-048"), text: "bald", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-049"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-050"), text: "besser", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-051"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Hopefully you will feel better soon.",
                clozeParts: ["Hoffentlich geht es dir bald ", "."],
                clozeAnswers: ["besser"]
            } as Adjective,
            {id: createWordId("menschlicher-koerper-gesundheit-befinden-006"),
                wordType: "noun",
                german: "Angst",
                article: "die",
                plural: "Ängste",
                english: "fear / anxiety",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-befinden-052"), text: "Er", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-053"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-054"), text: "hat", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-055"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-056"), text: "Angst", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-057"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "He is afraid. (Literally: He has fear.)",
                clozeParts: ["Er hat ", "."],
                clozeAnswers: ["Angst"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-befinden-007"),
                wordType: "adjective",
                german: "froh",
                english: "happy / glad",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-befinden-058"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-059"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-060"), text: "bin", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-061"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-062"), text: "froh", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-063"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am glad.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["froh"]
            } as Adjective,
            {id: createWordId("menschlicher-koerper-gesundheit-befinden-008"),
                wordType: "adjective",
                german: "fit",
                english: "fit",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-befinden-064"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-065"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-066"), text: "bin", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-067"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-068"), text: "fit", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-069"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am fit.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["fit"]
            } as Adjective,
            {id: createWordId("menschlicher-koerper-gesundheit-befinden-009"),
                wordType: "adjective",
                german: "stark",
                english: "strong",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-befinden-070"), text: "Er", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-071"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-072"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-073"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-074"), text: "stark", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-075"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "He is strong.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["stark"]
            } as Adjective,
            {id: createWordId("menschlicher-koerper-gesundheit-befinden-010"),
                wordType: "adjective",
                german: "schwach",
                english: "weak",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-befinden-076"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-077"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-078"), text: "bin", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-079"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-080"), text: "schwach", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-befinden-081"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am weak.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["schwach"]
            } as Adjective
        ],

        // --- UNTER-THEMA: Gesundheit/Krankheit (13 Wörter) ---
        "Gesundheit/Krankheit": [
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-001"),
                wordType: "noun",
                german: "Arzt",
                article: "der",
                plural: "Ärzte",
                english: "doctor (male)",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-001"), text: "Er", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-003"), text: "war", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-005"), text: "beim Arzt", case: "dativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "He was at the doctor's.",
                clozeParts: ["Er war beim ", "."],
                clozeAnswers: ["Arzt"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-002"),
                wordType: "noun",
                german: "Ärztin",
                article: "die",
                plural: "Ärztinnen",
                english: "doctor (female)",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-007"), text: "Die Ärztin", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-009"), text: "arbeitet", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-011"), text: "im Krankenhaus", case: "dativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The doctor (female) works in the hospital.",
                clozeParts: ["Die ", " arbeitet im Krankenhaus."],
                clozeAnswers: ["Ärztin"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-003"),
                wordType: "noun",
                german: "Apotheke",
                article: "die",
                plural: "Apotheken",
                english: "pharmacy",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-013"), text: "Aspirin", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-014"), text: "?", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-015"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-016"), text: "Das", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-017"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-018"), text: "bekommen", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-019"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-020"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-021"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-022"), text: "in der Apotheke", case: "dativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-023"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Aspirin? You can get that at the pharmacy.",
                clozeParts: ["Aspirin? Das bekommen Sie in der ", "."],
                clozeAnswers: ["Apotheke"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-004"),
                wordType: "noun",
                german: "Medikament",
                article: "das",
                plural: "Medikamente",
                english: "medication / medicine",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-024"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-025"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-026"), text: "brauche", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-027"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-028"), text: "ein Medikament", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-029"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a medication.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Medikament"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-005"),
                wordType: "noun",
                german: "Kopfschmerzen",
                article: "die",
                plural: "Kopfschmerzen",
                english: "headache",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-030"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-031"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-032"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-033"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-034"), text: "Kopfschmerzen", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-035"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a headache.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Kopfschmerzen"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-006"),
                wordType: "adjective",
                german: "krank",
                english: "sick / ill",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-036"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-037"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-038"), text: "bin", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-039"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-040"), text: "krank", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-041"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am sick.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["krank"]
            } as Adjective,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-007"),
                wordType: "adjective",
                german: "gesund",
                english: "healthy",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-042"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-043"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-044"), text: "bin", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-045"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-046"), text: "wieder", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-047"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-048"), text: "gesund", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-049"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am healthy again.",
                clozeParts: ["Ich bin wieder ", "."],
                clozeAnswers: ["gesund"]
            } as Adjective,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-008"),
                wordType: "noun",
                german: "Fieber",
                article: "das",
                plural: null,
                english: "fever",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-050"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-051"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-052"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-053"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-054"), text: "Fieber", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-055"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a fever.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Fieber"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-009"),
                wordType: "noun",
                german: "Husten",
                article: "der",
                plural: null,
                english: "cough",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-056"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-057"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-058"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-059"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-060"), text: "Husten", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-061"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a cough.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Husten"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-010"),
                wordType: "noun",
                german: "Schnupfen",
                article: "der",
                plural: null,
                english: "cold (illness) / sniffles",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-062"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-063"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-064"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-065"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-066"), text: "Schnupfen", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-067"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a cold.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Schnupfen"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-011"),
                wordType: "noun",
                german: "Schmerzen",
                article: "die",
                plural: "Schmerzen",
                english: "pain",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-068"), text: "Mein Arm", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-069"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-070"), text: "tut", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-071"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-072"), text: "weh", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-073"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My arm hurts.",
                clozeParts: ["Mein Arm tut ", "."],
                clozeAnswers: ["weh"]
            } as Noun,
            {id: createWordId("menschlicher-koerper-gesundheit-gesundheit-012"),
                wordType: "noun",
                german: "Hilfe",
                article: "die",
                plural: null,
                english: "help",
                exampleGerman: [
                    {
    id: createWordId("menschlicher-k-rper-gesundheit-krankheit-074"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-075"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-076"), text: "brauche", case: "verb" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-077"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-078"), text: "Hilfe", case: "akkusativ" } as CaseElement,
                    {id: createWordId("menschlicher-k-rper-gesundheit-krankheit-079"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need help.",
                clozeParts: ["Ich brauche ", "."],
                clozeAnswers: ["Hilfe"]
            } as Noun
        ]
    }
});