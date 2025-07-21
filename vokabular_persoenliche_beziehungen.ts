// packages/trainer-themen/vokabular_persoenliche_beziehungen.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_persoenliche_beziehungen.js

import type {VocabularyStructure, Noun, Verb, Adjective, Adverb} from './src/core/types/vocabulary';
import {createWordId, createVocabulary} from './src/core/types/vocabulary';

export const vokabularPersoenlicheBeziehungen: VocabularyStructure = createVocabulary({
    "Persönliche Beziehungen": {

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
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine große Familie", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He has a large family.",
                clozeParts: ["Er hat eine große ", "."],
                clozeAnswers: ["Familie"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-002"),
                wordType: "noun",
                german: "Eltern",
                article: "die",
                plural: "Eltern",
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
                id: createWordId("persoenliche-beziehungen-familie-003"),
                wordType: "noun",
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
                id: createWordId("persoenliche-beziehungen-familie-004"),
                wordType: "noun",
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
                id: createWordId("persoenliche-beziehungen-familie-005"),
                wordType: "noun",
                german: "Kind",
                article: "das",
                plural: "Kinder",
                english: "child",
                exampleGerman: [
                    { text: "Meine Schwester", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "noch ein Baby", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine Schwester ist noch ein ", "."],
                clozeAnswers: ["Baby"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-006"),
                wordType: "noun",
                german: "Baby",
                article: "das",
                plural: "Babys",
                english: "baby",
                exampleGerman: [
                    { text: "Meine Schwester", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "noch ein Baby", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine Schwester ist noch ein ", "."],
                clozeAnswers: ["Baby"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-007"),
                wordType: "noun",
                german: "Bruder",
                article: "der",
                plural: "Brüder",
                english: "brother",
                exampleGerman: [
                    { text: "Mein Bruder", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "heißt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Peter", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My brother is called Peter.",
                clozeParts: ["Mein ", " heißt Peter."],
                clozeAnswers: ["Bruder"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-008"),
                wordType: "noun",
                german: "Schwester",
                article: "die",
                plural: "Schwestern",
                english: "sister",
                exampleGerman: [
                    { text: "Meine Schwester", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "noch ein Baby", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is still a baby.",
                clozeParts: ["Meine ", " ist noch ein Baby."],
                clozeAnswers: ["Schwester"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-009"),
                wordType: "noun",
                german: "Geschwister",
                article: "die",
                plural: "Geschwister",
                english: "siblings",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "zwei Geschwister", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are two siblings.",
                clozeParts: ["Wir sind zwei ", "."],
                clozeAnswers: ["Geschwister"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-010"),
                wordType: "noun",
                german: "Tante",
                article: "die",
                plural: "Tanten",
                english: "aunt",
                exampleGerman: [
                    { text: "Meine Tante", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wohnt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in Berlin", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My aunt lives in Berlin.",
                clozeParts: ["Meine ", " wohnt in Berlin."],
                clozeAnswers: ["Tante"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-011"),
                wordType: "noun",
                german: "Onkel",
                article: "der",
                plural: "Onkel",
                english: "uncle",
                exampleGerman: [
                    { text: "Mein Onkel", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Arzt", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My uncle is a doctor.",
                clozeParts: ["Mein ", " ist Arzt."],
                clozeAnswers: ["Onkel"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-012"),
                wordType: "noun",
                german: "Großmutter",
                article: "die",
                plural: "Großmütter",
                english: "grandmother",
                exampleGerman: [
                    { text: "Meine Großmutter", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sehr alt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My grandmother is very old.",
                clozeParts: ["Meine ", " ist sehr alt."],
                clozeAnswers: ["Großmutter"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-013"),
                wordType: "noun",
                german: "Großvater",
                article: "der",
                plural: "Großväter",
                english: "grandfather",
                exampleGerman: [
                    { text: "Mein Großvater", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "liest", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "viel", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My grandfather reads a lot.",
                clozeParts: ["Mein ", " liest viel."],
                clozeAnswers: ["Großvater"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-014"),
                wordType: "noun",
                german: "Großeltern",
                article: "die",
                plural: "Großeltern",
                english: "grandparents",
                exampleGerman: [
                    { text: "Meine Großeltern", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wohnen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "auf dem Land", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My grandparents live in the countryside.",
                clozeParts: ["Meine ", " wohnen auf dem Land."],
                clozeAnswers: ["Großeltern"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-familie-015"),
                wordType: "noun",
                german: "Partner",
                article: "der",
                plural: "Partner",
                english: "partner",
                exampleGerman: [
                    { text: "Mein Partner", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "kommt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "aus Italien", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My partner comes from Italy.",
                clozeParts: ["Mein ", " kommt aus Italien."],
                clozeAnswers: ["Partner"]
            } as Noun
        ],

        // --- UNTER-THEMA: Freundschaft (11 Wörter) ---
        "Freundschaft": [
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-001"),
                wordType: "noun",
                german: "Freund",
                article: "der",
                plural: "Freunde",
                english: "friend (male)",
                exampleGerman: [
                    { text: "Mein bester Freund", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "heißt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Ivan", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My best friend is called Ivan.",
                clozeParts: ["Mein bester ", " heißt Ivan."],
                clozeAnswers: ["Freund"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-002"),
                wordType: "noun",
                german: "Freundin",
                article: "die",
                plural: "Freundinnen",
                english: "friend (female)",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "viele Freundinnen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have many friends (female).",
                clozeParts: ["Ich habe viele ", "."],
                clozeAnswers: ["Freundinnen"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-003"),
                wordType: "noun",
                german: "Freunde",
                article: "die",
                plural: "Freunde",
                english: "friends (plural)",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gehe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mit meinen Freunden", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "ins Kino", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am going to the cinema with my friends.",
                clozeParts: ["Ich gehe mit meinen ", " ins Kino."],
                clozeAnswers: ["Freunden"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-004"),
                wordType: "adjective",
                german: "beste(r)",
                english: "best",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meine beste Freundin", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She is my best friend.",
                clozeParts: ["Sie ist meine ", " Freundin."],
                clozeAnswers: ["beste"]
            } as Adjective,
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-005"),
                wordType: "verb",
                german: "besuchen",
                english: "to visit",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "besucht",
                exampleGerman: [
                    { text: "Im Sommer", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "besuche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "dich", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the summer I will visit you.",
                clozeParts: ["Im Sommer ", " ich dich."],
                clozeAnswers: ["besuche"]
            } as Verb,
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-006"),
                wordType: "adverb",
                german: "zusammen",
                english: "together",
                exampleGerman: [
                    { text: "Meine Schwester und ich", case: "nominativ" },
                    { text: ",", case: "none" },
                    { text: " ", case: "none" },
                    { text: "wir beide", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "immer zusammen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My sister and I, we are always together.",
                clozeParts: ["Meine Schwester und ich, wir beide sind immer ", "."],
                clozeAnswers: ["zusammen"]
            } as Adverb,
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-007"),
                wordType: "verb",
                german: "helfen",
                english: "to help",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geholfen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "helfe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dir", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "ein bisschen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I will help you a little.",
                clozeParts: ["Ich ", " dir ein bisschen."],
                clozeAnswers: ["helfe"]
            } as Verb,
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-008"),
                wordType: "verb",
                german: "einladen",
                english: "to invite",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingeladen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "lade", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dich", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "ein", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I invite you.",
                clozeParts: ["Ich lade dich ", "."],
                clozeAnswers: ["ein"]
            } as Verb,
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-009"),
                wordType: "noun",
                german: "Einladung",
                article: "die",
                plural: "Einladungen",
                english: "invitation",
                exampleGerman: [
                    { text: "Das", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine Einladung", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "zur Geburtstagsparty", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "This is an invitation to the birthday party.",
                clozeParts: ["Das ist eine ", " zur Geburtstagsparty."],
                clozeAnswers: ["Einladung"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-010"),
                wordType: "verb",
                german: "schenken",
                english: "to give (as a gift)",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschenkt",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "können", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ihm", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "eine CD", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "schenken", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We can give him a CD as a present.",
                clozeParts: ["Wir können ihm eine CD ", "."],
                clozeAnswers: ["schenken"]
            } as Verb,
            {
                id: createWordId("persoenliche-beziehungen-freundschaft-011"),
                wordType: "verb",
                german: "danken",
                english: "to thank",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gedankt",
                exampleGerman: [
                    { text: "Die CD", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "wunderbar", case: "none" },
                    { text: ",", case: "none" },
                    { text: " ", case: "none" },
                    { text: "ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "danke", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dir", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The CD is wonderful, I thank you.",
                clozeParts: ["Die CD ist wunderbar, ich danke ", "."],
                clozeAnswers: ["dir"]
            } as Verb
        ],

        // --- UNTER-THEMA: In der Schule (9 Wörter) ---
        "In der Schule": [
            {
                id: createWordId("persoenliche-beziehungen-schule-001"),
                wordType: "noun",
                german: "Klasse",
                article: "die",
                plural: "Klassen",
                english: "class",
                exampleGerman: [
                    { text: "In unserer Klasse", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "20 Schüler", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There are 20 students in our class.",
                clozeParts: ["In unserer ", " sind 20 Schüler."],
                clozeAnswers: ["Klasse"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-schule-002"),
                wordType: "noun",
                german: "Klassenkamerad",
                article: "der",
                plural: "Klassenkameraden",
                english: "classmate",
                exampleGerman: [
                    { text: "Mein Klassenkamerad", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hilft", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mir", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My classmate helps me.",
                clozeParts: ["Mein ", " hilft mir."],
                clozeAnswers: ["Klassenkamerad"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-schule-003"),
                wordType: "noun",
                german: "Lehrer",
                article: "der",
                plural: "Lehrer",
                english: "teacher",
                exampleGerman: [
                    { text: "Der Lehrer", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "freundlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teacher is friendly.",
                clozeParts: ["Der ", " ist freundlich."],
                clozeAnswers: ["Lehrer"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-schule-004"),
                wordType: "noun",
                german: "Schüler",
                article: "der",
                plural: "Schüler",
                english: "student",
                exampleGerman: [
                    { text: "Die Schüler", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "freundlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The students are friendly.",
                clozeParts: ["Die ", " sind freundlich."],
                clozeAnswers: ["Schüler"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-schule-005"),
                wordType: "noun",
                german: "Freund",
                article: "der",
                plural: "Freunde",
                english: "friend (male)",
                exampleGerman: [
                    { text: "Mein Freund", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sitzt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "neben mir", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "in der Schule", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My friend sits next to me in school.",
                clozeParts: ["Mein ", " sitzt neben mir in der Schule."],
                clozeAnswers: ["Freund"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-schule-006"),
                wordType: "verb",
                german: "zusammen lernen",
                english: "to learn together",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "lernen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "zusammen", case: "none" },
                    { text: " ", case: "none" },
                    { text: "für die Prüfung", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are learning together for the exam.",
                clozeParts: ["Wir ", " zusammen für die Prüfung."],
                clozeAnswers: ["lernen"]
            } as Verb,
            {
                id: createWordId("persoenliche-beziehungen-schule-007"),
                wordType: "verb",
                german: "helfen",
                english: "to help",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geholfen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "helfe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meiner Freundin", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "bei den Hausaufgaben", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I help my friend with the homework.",
                clozeParts: ["Ich ", " meiner Freundin bei den Hausaufgaben."],
                clozeAnswers: ["helfe"]
            } as Verb,
            {
                id: createWordId("persoenliche-beziehungen-schule-008"),
                wordType: "noun",
                german: "Gruppe",
                article: "die",
                plural: "Gruppen",
                english: "group",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "arbeiten", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in der Gruppe", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are working in the group.",
                clozeParts: ["Wir arbeiten in der ", "."],
                clozeAnswers: ["Gruppe"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-schule-009"),
                wordType: "adjective",
                german: "freundlich",
                english: "friendly",
                exampleGerman: [
                    { text: "Der Schuldirektor", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "war", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sehr freundlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The headmaster was very friendly.",
                clozeParts: ["Der Schuldirektor war sehr ", "."],
                clozeAnswers: ["freundlich"]
            } as Adjective
        ],

        // --- UNTER-THEMA: In der Klasse (7 Wörter) ---
        "In der Klasse": [
            {
                id: createWordId("persoenliche-beziehungen-klasse-001"),
                wordType: "noun",
                german: "Mitschüler",
                article: "der",
                plural: "Mitschüler",
                english: "classmate",
                exampleGerman: [
                    { text: "Meine Mitschülerin", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "nett", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My classmate is nice.",
                clozeParts: ["Meine ", " ist nett."],
                clozeAnswers: ["Mitschülerin"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-klasse-002"),
                wordType: "adverb",
                german: "zusammen",
                english: "together",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "machen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die Aufgabe", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "zusammen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are doing the task together.",
                clozeParts: ["Wir machen die Aufgabe ", "."],
                clozeAnswers: ["zusammen"]
            } as Adverb,
            {
                id: createWordId("persoenliche-beziehungen-klasse-003"),
                wordType: "verb",
                german: "helfen",
                english: "to help",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geholfen",
                exampleGerman: [
                    { text: "Kannst", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "mir", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "helfen", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Can you help me?",
                clozeParts: ["Kannst du mir ", "?"],
                clozeAnswers: ["helfen"]
            } as Verb,
            {
                id: createWordId("persoenliche-beziehungen-klasse-004"),
                wordType: "verb",
                german: "fragen",
                english: "to ask",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefragt",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "etwas", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "fragen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I would like to ask something.",
                clozeParts: ["Ich möchte etwas ", "."],
                clozeAnswers: ["fragen"]
            } as Verb,
            {
                id: createWordId("persoenliche-beziehungen-klasse-005"),
                wordType: "verb",
                german: "antworten",
                english: "to answer",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geantwortet",
                exampleGerman: [
                    { text: "Weißt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "die Antwort", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you know the answer?",
                clozeParts: ["Weißt du die ", "?"],
                clozeAnswers: ["Antwort"]
            } as Verb,
            {
                id: createWordId("persoenliche-beziehungen-klasse-006"),
                wordType: "noun",
                german: "Aufgabe",
                article: "die",
                plural: "Aufgaben",
                english: "task / exercise",
                exampleGerman: [
                    { text: "Die Aufgabe", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "einfach", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The task is easy.",
                clozeParts: ["Die ", " ist einfach."],
                clozeAnswers: ["Aufgabe"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-klasse-007"),
                wordType: "noun",
                german: "Team",
                article: "das",
                plural: "Teams",
                english: "team",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein gutes Team", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are a good team.",
                clozeParts: ["Wir sind ein gutes ", "."],
                clozeAnswers: ["Team"]
            } as Noun
        ],

        // --- UNTER-THEMA: Lieblingstiere (7 Wörter) ---
        "Lieblingstiere": [
            {
                id: createWordId("persoenliche-beziehungen-lieblingstiere-001"),
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
                id: createWordId("persoenliche-beziehungen-lieblingstiere-002"),
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
                id: createWordId("persoenliche-beziehungen-lieblingstiere-003"),
                wordType: "noun",
                german: "Lieblingstier",
                article: "das",
                plural: "Lieblingstiere",
                english: "favorite animal",
                exampleGerman: [
                    { text: "Mein Lieblingstier", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "der Hund", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My favorite animal is the dog.",
                clozeParts: ["Mein ", " ist der Hund."],
                clozeAnswers: ["Lieblingstier"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-lieblingstiere-004"),
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
                id: createWordId("persoenliche-beziehungen-lieblingstiere-005"),
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
                clozeParts: ["Mein Lieblingstier ist der Hund."],
                clozeAnswers: ["Lieblingstier"]
            } as Noun,
            {
                id: createWordId("persoenliche-beziehungen-lieblingstiere-006"),
                wordType: "verb",
                german: "füttern",
                english: "to feed",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefüttert",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "füttere", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meinen Hund", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "jeden Tag", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I feed my dog every day.",
                clozeParts: ["Ich ", " meinen Hund jeden Tag."],
                clozeAnswers: ["füttere"]
            } as Verb,
            {
                id: createWordId("persoenliche-beziehungen-lieblingstiere-007"),
                wordType: "verb",
                german: "spielen",
                english: "to play",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spiele", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mit meinem Hund", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "im Garten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I play with my dog in the garden.",
                clozeParts: ["Ich ", " mit meinem Hund im Garten."],
                clozeAnswers: ["spiele"]
            } as Verb
        ]
    }
});