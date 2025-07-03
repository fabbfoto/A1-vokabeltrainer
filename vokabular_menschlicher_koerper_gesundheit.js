// packages/trainer-themen/vokabular_menschlicher_koerper_gesundheit.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_menschlicher_koerper_gesundheit.js

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary';
import { createWordId, createVocabulary } from './shared/types/vocabulary';

export const vokabularMenschlicherKoerperGesundheit: VocabularyStructure = createVocabulary({
    "Menschlicher Körper und Gesundheit": {

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
                    { text: "Mein Arm", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "tut", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "weh", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My arm hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Arm"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-002"),
                wordType: "noun",
                german: "Auge",
                article: "das",
                plural: "Augen",
                english: "eye",
                exampleGerman: [
                    { text: "Seine Augen", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "grün", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "His eyes are green.",
                clozeParts: ["Seine ", " sind grün."],
                clozeAnswers: ["Augen"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-003"),
                wordType: "noun",
                german: "Bauch",
                article: "der",
                plural: "Bäuche",
                english: "belly / stomach",
                exampleGerman: [
                    { text: "Mein Bauch", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "tut", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "weh", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My stomach hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Bauch"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-004"),
                wordType: "noun",
                german: "Fuß",
                article: "der",
                plural: "Füße",
                english: "foot",
                exampleGerman: [
                    { text: "Mein Fuß", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "tut", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "weh", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My foot hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Fuß"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-005"),
                wordType: "noun",
                german: "Haar",
                article: "das",
                plural: "Haare",
                english: "hair",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "hat", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lange Haare", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She has long hair.",
                clozeParts: ["Sie hat lange ", "."],
                clozeAnswers: ["Haare"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-006"),
                wordType: "noun",
                german: "Kopf",
                article: "der",
                plural: "Köpfe",
                english: "head",
                exampleGerman: [
                    { text: "Mein Kopf", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "tut", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "weh", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My head hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Kopf"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-007"),
                wordType: "noun",
                german: "Mund",
                article: "der",
                plural: "Münder",
                english: "mouth",
                exampleGerman: [
                    { text: "Öffne", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bitte", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "den Mund", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please open your mouth.",
                clozeParts: ["Öffne bitte den ", "."],
                clozeAnswers: ["Mund"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-008"),
                wordType: "noun",
                german: "Nase",
                article: "die",
                plural: "Nasen",
                english: "nose",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine laufende Nase", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a runny nose.",
                clozeParts: ["Ich habe eine laufende ", "."],
                clozeAnswers: ["Nase"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-009"),
                wordType: "noun",
                german: "Ohr",
                article: "das",
                plural: "Ohren",
                english: "ear",
                exampleGerman: [
                    { text: "Mein Ohr", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "tut", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "weh", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My ear hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Ohr"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-010"),
                wordType: "noun",
                german: "Hand",
                article: "die",
                plural: "Hände",
                english: "hand",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "wasche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "meine Hände", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I wash my hands.",
                clozeParts: ["Ich wasche meine ", "."],
                clozeAnswers: ["Hände"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-011"),
                wordType: "noun",
                german: "Bein",
                article: "das",
                plural: "Beine",
                english: "leg",
                exampleGerman: [
                    { text: "Mein Bein", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "tut", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "weh", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My leg hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Bein"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-012"),
                wordType: "noun",
                german: "Körper",
                article: "der",
                plural: "Körper",
                english: "body",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "wasche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "meinen Körper", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I wash my body.",
                clozeParts: ["Ich wasche meinen ", "."],
                clozeAnswers: ["Körper"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-013"),
                wordType: "noun",
                german: "Zahn",
                article: "der",
                plural: "Zähne",
                english: "tooth",
                exampleGerman: [
                    { text: "Mir", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "tut", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "der Zahn", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "weh", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My tooth hurts.",
                clozeParts: ["Mir tut der ", " weh."],
                clozeAnswers: ["Zahn"]
            } as Noun
        ],

        // --- UNTER-THEMA: Körperpflege/Hygiene (4 Wörter) ---
        "Körperpflege/Hygiene": [
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-001"),
                wordType: "verb",
                german: "duschen",
                english: "to shower",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geduscht",
                presentConjugation: {},
                imperative: {},
                exampleGerman: [
                    { text: "Erst", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dusche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: ",", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dann", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gehe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zum Frühstück", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "First I shower, then I go to breakfast.",
                clozeParts: ["Erst ", " ich, dann gehe ich zum Frühstück."],
                clozeAnswers: ["dusche"]
            } as Verb,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-002"),
                wordType: "verb",
                german: "waschen",
                english: "to wash",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gewaschen",
                presentConjugation: {},
                imperative: {},
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "wasche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "meine Hände", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I wash my hands.",
                clozeParts: ["Ich ", " meine Hände."],
                clozeAnswers: ["wasche"]
            } as Verb,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-003"),
                wordType: "verb",
                german: "Zähne putzen",
                english: "to brush teeth",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geputzt",
                presentConjugation: {},
                imperative: {},
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "putze", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "meine Zähne", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I brush my teeth.",
                clozeParts: ["Ich ", " meine Zähne."],
                clozeAnswers: ["putze"]
            } as Verb,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-004"),
                wordType: "adjective",
                german: "sauber",
                english: "clean",
                exampleGerman: [
                    { text: "Das Handtuch", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sauber", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The towel is clean.",
                clozeParts: ["Das Handtuch ist ", "."],
                clozeAnswers: ["sauber"]
            } as Adjective
        ],

        // --- UNTER-THEMA: Befinden (10 Wörter) ---
        "Befinden": [
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-001"),
                wordType: "adjective",
                german: "gut",
                english: "good / well",
                exampleGerman: [
                    { text: "Wie", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "geht", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dir", case: "dativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "–", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Mir", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "geht", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gut", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "How are you? – I am well.",
                clozeParts: ["Mir geht es ", "."],
                clozeAnswers: ["gut"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-002"),
                wordType: "adjective",
                german: "schlecht",
                english: "bad / poorly",
                exampleGerman: [
                    { text: "Mir", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "geht", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schlecht", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am doing poorly.",
                clozeParts: ["Mir geht es ", "."],
                clozeAnswers: ["schlecht"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-003"),
                wordType: "adjective",
                german: "müde",
                english: "tired",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bin", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "müde", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am tired.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["müde"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-004"),
                wordType: "adjective",
                german: "krank",
                english: "sick / ill",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bin", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "krank", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am sick.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["krank"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-005"),
                wordType: "adjective",
                german: "besser",
                english: "better",
                exampleGerman: [
                    { text: "Hoffentlich", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "geht", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dir", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bald", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "besser", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Hopefully you will feel better soon.",
                clozeParts: ["Hoffentlich geht es dir bald ", "."],
                clozeAnswers: ["besser"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-006"),
                wordType: "noun",
                german: "Angst",
                article: "die",
                plural: "Ängste",
                english: "fear / anxiety",
                exampleGerman: [
                    { text: "Er", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "hat", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Angst", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "He is afraid. (Literally: He has fear.)",
                clozeParts: ["Er hat ", "."],
                clozeAnswers: ["Angst"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-007"),
                wordType: "adjective",
                german: "froh",
                english: "happy / glad",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bin", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "froh", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am glad.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["froh"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-008"),
                wordType: "adjective",
                german: "fit",
                english: "fit",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bin", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fit", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am fit.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["fit"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-009"),
                wordType: "adjective",
                german: "stark",
                english: "strong",
                exampleGerman: [
                    { text: "Er", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "stark", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "He is strong.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["stark"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-010"),
                wordType: "adjective",
                german: "schwach",
                english: "weak",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bin", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schwach", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am weak.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["schwach"]
            } as Adjective
        ],

        // --- UNTER-THEMA: Gesundheit/Krankheit (13 Wörter) ---
        "Gesundheit/Krankheit": [
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-001"),
                wordType: "noun",
                german: "Arzt",
                article: "der",
                plural: "Ärzte",
                english: "doctor (male)",
                exampleGerman: [
                    { text: "Er", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "war", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "beim Arzt", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "He was at the doctor's.",
                clozeParts: ["Er war beim ", "."],
                clozeAnswers: ["Arzt"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-002"),
                wordType: "noun",
                german: "Ärztin",
                article: "die",
                plural: "Ärztinnen",
                english: "doctor (female)",
                exampleGerman: [
                    { text: "Die Ärztin", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "arbeitet", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Krankenhaus", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The doctor (female) works in the hospital.",
                clozeParts: ["Die ", " arbeitet im Krankenhaus."],
                clozeAnswers: ["Ärztin"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-003"),
                wordType: "noun",
                german: "Apotheke",
                article: "die",
                plural: "Apotheken",
                english: "pharmacy",
                exampleGerman: [
                    { text: "Aspirin", case: "nominativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Das", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bekommen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in der Apotheke", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Aspirin? You can get that at the pharmacy.",
                clozeParts: ["Aspirin? Das bekommen Sie in der ", "."],
                clozeAnswers: ["Apotheke"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-004"),
                wordType: "noun",
                german: "Medikament",
                article: "das",
                plural: "Medikamente",
                english: "medication / medicine",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Medikament", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a medication.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Medikament"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-005"),
                wordType: "noun",
                german: "Kopfschmerzen",
                article: "die",
                plural: "Kopfschmerzen",
                english: "headache",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Kopfschmerzen", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a headache.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Kopfschmerzen"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-006"),
                wordType: "adjective",
                german: "krank",
                english: "sick / ill",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bin", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "krank", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am sick.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["krank"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-007"),
                wordType: "adjective",
                german: "gesund",
                english: "healthy",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bin", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "wieder", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gesund", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am healthy again.",
                clozeParts: ["Ich bin wieder ", "."],
                clozeAnswers: ["gesund"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-008"),
                wordType: "noun",
                german: "Fieber",
                article: "das",
                plural: null,
                english: "fever",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Fieber", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a fever.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Fieber"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-009"),
                wordType: "noun",
                german: "Husten",
                article: "der",
                plural: null,
                english: "cough",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Husten", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a cough.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Husten"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-010"),
                wordType: "noun",
                german: "Schnupfen",
                article: "der",
                plural: null,
                english: "cold (illness) / sniffles",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Schnupfen", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a cold.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Schnupfen"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-011"),
                wordType: "noun",
                german: "Schmerzen",
                article: "die",
                plural: "Schmerzen",
                english: "pain",
                exampleGerman: [
                    { text: "Mein Arm", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "tut", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "weh", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My arm hurts.",
                clozeParts: ["Mein Arm tut ", "."],
                clozeAnswers: ["weh"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-012"),
                wordType: "noun",
                german: "Hilfe",
                article: "die",
                plural: null,
                english: "help",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Hilfe", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need help.",
                clozeParts: ["Ich brauche ", "."],
                clozeAnswers: ["Hilfe"]
            } as Noun
        ]
    }
});