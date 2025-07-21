// vokabular_menschlicher_koerper_gesundheit.ts

import type { 
    VocabularyStructure, 
    Word, 
    Noun,
    Verb,
    Adjective,
    WordId,
    CaseElement 
} from './src/core/types/vocabulary';
import { createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabularMenschlicherKoerperGesundheit: VocabularyStructure = createVocabulary({
    "Menschlicher Körper und Gesundheit": {

        // --- SUB-TOPIC: Körperteile ---
        "Körperteile": [
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-001"),
                wordType: 'noun',
                german: "Arm",
                article: "der",
                plural: "Arme",
                english: "arm",
                exampleGerman: [
                    { text: "Mein", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Arm", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "tut", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "weh", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My arm hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Arm"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-002"),
                wordType: 'noun',
                german: "Auge",
                article: "das",
                plural: "Augen",
                english: "eye",
                exampleGerman: [
                    { text: "Seine", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Augen", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "grün", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "His eyes are green.",
                clozeParts: ["Seine ", " sind grün."],
                clozeAnswers: ["Augen"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-003"),
                wordType: 'noun',
                german: "Bauch",
                article: "der",
                plural: "Bäuche",
                english: "belly / stomach",
                exampleGerman: [
                    { text: "Mein", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Bauch", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "tut", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "weh", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My stomach hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Bauch"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-004"),
                wordType: 'noun',
                german: "Fuß",
                article: "der",
                plural: "Füße",
                english: "foot",
                exampleGerman: [
                    { text: "Mein", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Fuß", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "tut", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "weh", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My foot hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Fuß"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-005"),
                wordType: 'noun',
                german: "Haar",
                article: "das",
                plural: "Haare",
                english: "hair",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "lange", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Haare", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She has long hair.",
                clozeParts: ["Sie hat lange ", "."],
                clozeAnswers: ["Haare"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-006"),
                wordType: 'noun',
                german: "Kopf",
                article: "der",
                plural: "Köpfe",
                english: "head",
                exampleGerman: [
                    { text: "Mein", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Kopf", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "tut", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "weh", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My head hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Kopf"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-007"),
                wordType: 'noun',
                german: "Mund",
                article: "der",
                plural: "Münder",
                english: "mouth",
                exampleGerman: [
                    { text: "Öffne", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "bitte", case: "none" },
                    { text: " ", case: "none" },
                    { text: "den", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Mund", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Please open your mouth.",
                clozeParts: ["Öffne bitte den ", "."],
                clozeAnswers: ["Mund"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-008"),
                wordType: 'noun',
                german: "Nase",
                article: "die",
                plural: "Nasen",
                english: "nose",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine", case: "none" },
                    { text: " ", case: "none" },
                    { text: "laufende", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Nase", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have a runny nose.",
                clozeParts: ["Ich habe eine laufende ", "."],
                clozeAnswers: ["Nase"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-009"),
                wordType: 'noun',
                german: "Ohr",
                article: "das",
                plural: "Ohren",
                english: "ear",
                exampleGerman: [
                    { text: "Mein", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Ohr", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "tut", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "weh", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My ear hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Ohr"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-010"),
                wordType: 'noun',
                german: "Hand",
                article: "die",
                plural: "Hände",
                english: "hand",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wasche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meine", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Hände", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I wash my hands.",
                clozeParts: ["Ich wasche meine ", "."],
                clozeAnswers: ["Hände"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-011"),
                wordType: 'noun',
                german: "Bein",
                article: "das",
                plural: "Beine",
                english: "leg",
                exampleGerman: [
                    { text: "Mein", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Bein", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "tut", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "weh", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My leg hurts.",
                clozeParts: ["Mein ", " tut weh."],
                clozeAnswers: ["Bein"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-012"),
                wordType: 'noun',
                german: "Körper",
                article: "der",
                plural: "Körper",
                english: "body",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wasche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meinen", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Körper", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I wash my body.",
                clozeParts: ["Ich wasche meinen ", "."],
                clozeAnswers: ["Körper"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperteile-013"),
                wordType: 'noun',
                german: "Zahn",
                article: "der",
                plural: "Zähne",
                english: "tooth",
                exampleGerman: [
                    { text: "Mir", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "tut", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "der", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Zahn", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "weh", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My tooth hurts.",
                clozeParts: ["Mir tut der ", " weh."],
                clozeAnswers: ["Zahn"]
            } as Noun
        ],

        // --- SUB-TOPIC: Körperpflege, Hygiene ---
        "Körperpflege, Hygiene": [
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-001"),
                wordType: 'verb',
                german: "duschen",
                english: "to shower",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geduscht",
                presentConjugation: { ich: "dusche", du: "duschst", er: "duscht", wir: "duschen", ihr: "duscht", sie: "duschen" },
                imperative: { du: "Dusch!", ihr: "Duscht!" },
                exampleGerman: [
                    { text: "Erst", case: "none" },
                    { text: " ", case: "none" },
                    { text: "dusche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ich", case: "nominativ" },
                    { text: ",", case: "none" },
                    { text: " ", case: "none" },
                    { text: "dann", case: "none" },
                    { text: " ", case: "none" },
                    { text: "gehe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "zum", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Frühstück", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "First I shower, then I go to breakfast.",
                clozeParts: ["Erst ", " ich, dann gehe ich zum Frühstück."],
                clozeAnswers: ["dusche"]
            } as Verb,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-002"),
                wordType: 'verb',
                german: "waschen",
                english: "to wash",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gewaschen",
                presentConjugation: { ich: "wasche", du: "wäschst", er: "wäscht", wir: "waschen", ihr: "wascht", sie: "waschen" },
                imperative: { du: "Wasch!", ihr: "Wascht!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wasche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meine", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Hände", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I wash my hands.",
                clozeParts: ["Ich ", " meine Hände."],
                clozeAnswers: ["wasche"]
            } as Verb,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-003"),
                wordType: 'verb',
                german: "putzen",
                english: "to clean / to brush",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geputzt",
                presentConjugation: { ich: "putze", du: "putzt", er: "putzt", wir: "putzen", ihr: "putzt", sie: "putzen" },
                imperative: { du: "Putz!", ihr: "Putzt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "putze", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meine", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Zähne", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I brush my teeth.",
                clozeParts: ["Ich ", " meine Zähne."],
                clozeAnswers: ["putze"]
            } as Verb,
            {
                id: createWordId("menschlicher-koerper-gesundheit-koerperpflege-004"),
                wordType: 'adjective',
                german: "sauber",
                english: "clean",
                exampleGerman: [
                    { text: "Das", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Handtuch", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sauber", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The towel is clean.",
                clozeParts: ["Das Handtuch ist ", "."],
                clozeAnswers: ["sauber"]
            } as Adjective
        ],

        // --- SUB-TOPIC: Befinden ---
        "Befinden": [
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-001"),
                wordType: 'adjective',
                german: "gut",
                english: "good / well",
                exampleGerman: [
                    { text: "Wie", case: "none" },
                    { text: " ", case: "none" },
                    { text: "geht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "dir", case: "dativ" },
                    { text: "?", case: "none" },
                    { text: " ", case: "none" },
                    { text: "–", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Mir", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "geht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gut", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "How are you? – I am well.",
                clozeParts: ["Mir geht es ", "."],
                clozeAnswers: ["gut"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-002"),
                wordType: 'adjective',
                german: "schlecht",
                english: "bad / poorly",
                exampleGerman: [
                    { text: "Mir", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "geht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schlecht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am doing poorly.",
                clozeParts: ["Mir geht es ", "."],
                clozeAnswers: ["schlecht"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-003"),
                wordType: 'adjective',
                german: "müde",
                english: "tired",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "müde", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am tired.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["müde"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-004"),
                wordType: 'adjective',
                german: "krank",
                english: "sick / ill",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "krank", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am sick.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["krank"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-005"),
                wordType: 'adjective',
                german: "besser",
                english: "better",
                exampleGerman: [
                    { text: "Hoffentlich", case: "none" },
                    { text: " ", case: "none" },
                    { text: "geht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "dir", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "bald", case: "none" },
                    { text: " ", case: "none" },
                    { text: "besser", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Hopefully you will feel better soon.",
                clozeParts: ["Hoffentlich geht es dir bald ", "."],
                clozeAnswers: ["besser"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-006"),
                wordType: 'noun',
                german: "Angst",
                article: "die",
                plural: "Ängste",
                english: "fear / anxiety",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Angst", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He is afraid.",
                clozeParts: ["Er hat ", "."],
                clozeAnswers: ["Angst"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-007"),
                wordType: 'adjective',
                german: "froh",
                english: "happy / glad",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "froh", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am glad.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["froh"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-008"),
                wordType: 'adjective',
                german: "fit",
                english: "fit",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "fit", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am fit.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["fit"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-009"),
                wordType: 'adjective',
                german: "stark",
                english: "strong",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "stark", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He is strong.",
                clozeParts: ["Er ist ", "."],
                clozeAnswers: ["stark"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-befinden-010"),
                wordType: 'adjective',
                german: "schwach",
                english: "weak",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "schwach", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am weak.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["schwach"]
            } as Adjective
        ],

        // --- SUB-TOPIC: Gesundheit, Krankheit ---
        "Gesundheit, Krankheit": [
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-001"),
                wordType: 'noun',
                german: "Arzt",
                article: "der",
                plural: "Ärzte",
                english: "doctor (male)",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "war", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "beim", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Arzt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He was at the doctor's.",
                clozeParts: ["Er war beim ", "."],
                clozeAnswers: ["Arzt"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-002"),
                wordType: 'noun',
                german: "Ärztin",
                article: "die",
                plural: "Ärztinnen",
                english: "doctor (female)",
                exampleGerman: [
                    { text: "Die", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Ärztin", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "arbeitet", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Krankenhaus", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The doctor (female) works in the hospital.",
                clozeParts: ["Die ", " arbeitet im Krankenhaus."],
                clozeAnswers: ["Ärztin"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-003"),
                wordType: 'noun',
                german: "Apotheke",
                article: "die",
                plural: "Apotheken",
                english: "pharmacy",
                exampleGerman: [
                    { text: "Aspirin", case: "akkusativ" },
                    { text: "?", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Das", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "bekommen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "in", case: "none" },
                    { text: " ", case: "none" },
                    { text: "der", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Apotheke", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Aspirin? You can get that at the pharmacy.",
                clozeParts: ["Aspirin? Das bekommen Sie in der ", "."],
                clozeAnswers: ["Apotheke"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-004"),
                wordType: 'noun',
                german: "Medikament",
                article: "das",
                plural: "Medikamente",
                english: "medication / medicine",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "brauche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Medikament", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I need a medication.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Medikament"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-005"),
                wordType: 'noun',
                german: "Kopfschmerzen",
                article: "die",
                plural: "Kopfschmerzen", // Plural only
                english: "headache",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Kopfschmerzen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have a headache.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Kopfschmerzen"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-006"),
                wordType: 'adjective',
                german: "krank",
                english: "sick / ill",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "krank", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am sick.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["krank"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-007"),
                wordType: 'adjective',
                german: "gesund",
                english: "healthy",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "bin", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "wieder", case: "none" },
                    { text: " ", case: "none" },
                    { text: "gesund", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am healthy again.",
                clozeParts: ["Ich bin wieder ", "."],
                clozeAnswers: ["gesund"]
            } as Adjective,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-008"),
                wordType: 'noun',
                german: "Fieber",
                article: "das",
                plural: null, // oft ohne Plural
                english: "fever",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Fieber", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have a fever.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Fieber"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-009"),
                wordType: 'noun',
                german: "Husten",
                article: "der",
                plural: null, // oft ohne Plural
                english: "cough",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Husten", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have a cough.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Husten"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-010"),
                wordType: 'noun',
                german: "Schnupfen",
                article: "der",
                plural: null, // oft ohne Plural
                english: "cold (illness) / sniffles",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Schnupfen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have a cold.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Schnupfen"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-011"),
                wordType: 'noun',
                german: "Schmerzen",
                article: "die",
                plural: "Schmerzen", // Plural only
                english: "pain",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Schmerzen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have pain.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Schmerzen"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-012"),
                wordType: 'noun',
                german: "Hilfe",
                article: "die",
                plural: null, // oft ohne Plural
                english: "help",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "brauche", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Hilfe", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I need help.",
                clozeParts: ["Ich brauche ", "."],
                clozeAnswers: ["Hilfe"]
            } as Noun,
            {
                id: createWordId("menschlicher-koerper-gesundheit-gesundheit-013"),
                wordType: 'verb',
                german: "wehtun",
                english: "to hurt",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "wehgetan",
                presentConjugation: { ich: "tue weh", du: "tust weh", er: "tut weh", wir: "tun weh", ihr: "tut weh", sie: "tun weh" },
                imperative: { du: "Tu weh!", ihr: "Tut weh!" },
                exampleGerman: [
                    { text: "Mein", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Arm", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "tut", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "weh", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My arm hurts.",
                clozeParts: ["Mein Arm ", " ", "."],
                clozeAnswers: ["tut", "weh"]
            } as Verb
        ]
    }
});