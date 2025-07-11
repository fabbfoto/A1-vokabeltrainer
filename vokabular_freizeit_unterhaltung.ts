// packages/trainer-themen/vokabular_freizeit_unterhaltung.ts

import type {Word,
    Noun,
    Verb,
    Adjective,
    Conjugation,
    Imperative,
    WordId,
    CaseElement,
    VocabularyStructure
} from './shared/types/vocabulary.ts';
import {createWordId, createVocabulary } from './shared/types/vocabulary.ts';

export const vokabularFreizeitUnterhaltung: VocabularyStructure = createVocabulary({"Freizeit und Unterhaltung": {

        // --- UNTER-THEMA: Hobbys/Interessen ---
        "Hobbys/Interessen": [
            {
                id: createWordId("freizeit-unterhaltung-hobbys-001"),
                wordType: 'noun',
                german: "Hobby",
                article: "das",
                plural: "Hobbys",
                english: "hobby",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-001"), text: "Mein Hobby", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-002"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-003"), text: "ist", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-004"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-005"), text: "Fußball", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-006"), text: ".", case: "none" }
                ],
                exampleEnglish: "My hobby is football.",
                clozeParts: ["Mein ", " ist Fußball."],
                clozeAnswers: ["Hobby"]
            } as Noun,
            {id: createWordId("freizeit-unterhaltung-hobbys-002"),
                wordType: 'verb',
                german: "basteln",
                english: "to do crafts / to tinker", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gebastelt",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-007"), ich: "bastle", du: "bastelst", er: "bastelt", wir: "basteln", ihr: "bastelt", sie: "basteln" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-008"), du: "Bastle!", ihr: "Bastelt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-009"), text: "Basteln", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-010"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-011"), text: "ist", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-012"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-013"), text: "mein Hobby", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-014"), text: ".", case: "none" }
                ],
                exampleEnglish: "Crafting is my hobby.",
                clozeParts: ["", " ist mein Hobby."],
                clozeAnswers: ["Basteln"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-003"),
                wordType: 'verb',
                german: "malen",
                english: "to paint / to draw", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gemalt",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-015"), ich: "male", du: "malst", er: "malt", wir: "malen", ihr: "malt", sie: "malen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-016"), du: "Mal!", ihr: "Malt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-017"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-018"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-019"), text: "male", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-020"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-021"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-022"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-023"), text: "Bilder", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-024"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to paint pictures.",
                clozeParts: ["Ich ", " gern Bilder."],
                clozeAnswers: ["male"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-004"),
                wordType: 'verb',
                german: "sammeln",
                english: "to collect", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesammelt",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-025"), ich: "sammle", du: "sammelst", er: "sammelt", wir: "sammeln", ihr: "sammelt", sie: "sammeln" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-026"), du: "Sammle!", ihr: "Sammelt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-027"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-028"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-029"), text: "sammle", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-030"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-031"), text: "Briefmarken", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-032"), text: ".", case: "none" }
                ],
                exampleEnglish: "I collect stamps.",
                clozeParts: ["Ich ", " Briefmarken."],
                clozeAnswers: ["sammle"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-005"),
                wordType: 'noun',
                german: "Musik",
                article: "die",
                plural: "Musiken", // (selten, meist ohne Plural)
                english: "music",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-033"), text: "Meine Hobbys", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-034"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-035"), text: "sind", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-036"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-037"), text: "Basketball und Musik", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-038"), text: ".", case: "none" }
                ],
                exampleEnglish: "My hobbies are basketball and music.",
                clozeParts: ["Meine Hobbys sind Basketball und ", "."],
                clozeAnswers: ["Musik"]
            } as Noun,
            {id: createWordId("freizeit-unterhaltung-hobbys-006"),
                wordType: 'verb',
                german: "spielen",
                english: "to play", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-039"), ich: "spiele", du: "spielst", er: "spielt", wir: "spielen", ihr: "spielt", sie: "spielen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-040"), du: "Spiel!", ihr: "Spielt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-041"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-042"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-043"), text: "spielen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-044"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-045"), text: "ein Spiel", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-046"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are playing a game.",
                clozeParts: ["Wir ", " ein Spiel."],
                clozeAnswers: ["spielen"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-007"),
                wordType: 'verb',
                german: "tanzen",
                english: "to dance", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getanzt",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-047"), ich: "tanze", du: "tanzt", er: "tanzt", wir: "tanzen", ihr: "tanzt", sie: "tanzen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-048"), du: "Tanz!", ihr: "Tanzt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-049"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-050"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-051"), text: "tanze", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-052"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-053"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-054"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to dance.",
                clozeParts: ["Ich ", " gern."],
                clozeAnswers: ["tanze"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-008"),
                wordType: 'verb',
                german: "fotografieren",
                english: "to photograph", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "fotografiert",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-055"), ich: "fotografiere", du: "fotografierst", er: "fotografiert", wir: "fotografieren", ihr: "fotografiert", sie: "fotografieren" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-056"), du: "Fotografier!", ihr: "Fotografiert!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-057"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-058"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-059"), text: "fotografiere", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-060"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-061"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-062"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-063"), text: "im Urlaub", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-064"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to take photos on holiday.",
                clozeParts: ["Ich ", " gern im Urlaub."],
                clozeAnswers: ["fotografiere"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-009"),
                wordType: 'verb',
                german: "zeichnen",
                english: "to draw", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gezeichnet",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-065"), ich: "zeichne", du: "zeichnest", er: "zeichnet", wir: "zeichnen", ihr: "zeichnet", sie: "zeichnen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-066"), du: "Zeichne!", ihr: "Zeichnet!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-067"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-068"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-069"), text: "zeichne", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-070"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-071"), text: "ein Bild", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-072"), text: ".", case: "none" }
                ],
                exampleEnglish: "I am drawing a picture.",
                clozeParts: ["Ich ", " ein Bild."],
                clozeAnswers: ["zeichne"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-010"),
                wordType: 'verb',
                german: "lesen",
                english: "to read", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelesen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-073"), ich: "lese", du: "liest", er: "liest", wir: "lesen", ihr: "lest", sie: "lesen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-074"), du: "Lies!", ihr: "Lest!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-075"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-076"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-077"), text: "lese", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-078"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-079"), text: "ein Buch", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-080"), text: ".", case: "none" }
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich ", " ein Buch."],
                clozeAnswers: ["lese"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-011"),
                wordType: 'verb',
                german: "schreiben",
                english: "to write", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschrieben",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-081"), ich: "schreibe", du: "schreibst", er: "schreibt", wir: "schreiben", ihr: "schreibt", sie: "schreiben" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-082"), du: "Schreib!", ihr: "Schreibt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-083"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-084"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-085"), text: "schreibe", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-086"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-087"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-088"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-089"), text: "Geschichten", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-090"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to write stories.",
                clozeParts: ["Ich ", " gern Geschichten."],
                clozeAnswers: ["schreibe"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-012"),
                wordType: 'verb',
                german: "schwimmen",
                english: "to swim", separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geschwommen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-091"), ich: "schwimme", du: "schwimmst", er: "schwimmt", wir: "schwimmen", ihr: "schwimmt", sie: "schwimmen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-092"), du: "Schwimm!", ihr: "Schwimmt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-093"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-094"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-095"), text: "schwimme", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-096"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-097"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-098"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-099"), text: "im Sommer", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-100"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to swim in the summer.",
                clozeParts: ["Ich ", " gern im Sommer."],
                clozeAnswers: ["schwimme"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-013"),
                wordType: 'verb',
                german: "singen",
                english: "to sing", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesungen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-101"), ich: "singe", du: "singst", er: "singt", wir: "singen", ihr: "singt", sie: "singen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-102"), du: "Sing!", ihr: "Singt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-103"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-104"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-105"), text: "singe", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-106"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-107"), text: "in einer Band", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-108"), text: ".", case: "none" }
                ],
                exampleEnglish: "I sing in a band.",
                clozeParts: ["Ich ", " in einer Band."],
                clozeAnswers: ["singe"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-014"),
                wordType: 'verb',
                german: "wandern",
                english: "to hike", separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gewandert",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-109"), ich: "wandere", du: "wanderst", er: "wandert", wir: "wandern", ihr: "wandert", sie: "wandern" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-110"), du: "Wandere!", ihr: "Wandert!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-111"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-112"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-113"), text: "wandern", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-114"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-115"), text: "in den Bergen", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-116"), text: ".", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir ", " in den Bergen."],
                clozeAnswers: ["wandern"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-015"),
                wordType: 'verb',
                german: "reisen",
                english: "to travel", separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gereist",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-117"), ich: "reise", du: "reist", er: "reist", wir: "reisen", ihr: "reist", sie: "reisen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-118"), du: "Reis!", ihr: "Reist!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-119"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-120"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-121"), text: "reisen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-122"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-123"), text: "oft", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-124"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-125"), text: "nach Frankreich", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-126"), text: ".", case: "none" }
                ],
                exampleEnglish: "We often travel to France.",
                clozeParts: ["Wir ", " oft nach Frankreich."],
                clozeAnswers: ["reisen"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-016"),
                wordType: 'verb',
                german: "kochen",
                english: "to cook", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekocht",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-127"), ich: "koche", du: "kochst", er: "kocht", wir: "kochen", ihr: "kocht", sie: "kochen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-128"), du: "Koch!", ihr: "Kocht!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-129"), text: "In der Küche", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-130"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-131"), text: "kocht", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-132"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-133"), text: "meine Mutter", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-134"), text: ".", case: "none" }
                ],
                exampleEnglish: "My mother is cooking in the kitchen.",
                clozeParts: ["In der Küche ", " meine Mutter."],
                clozeAnswers: ["kocht"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-017"),
                wordType: 'verb',
                german: "backen",
                english: "to bake", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gebacken",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-135"), ich: "backe", du: "bäckst", er: "bäckt", wir: "backen", ihr: "backt", sie: "backen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-136"), du: "Back!", ihr: "Backt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-137"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-138"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-139"), text: "backe", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-140"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-141"), text: "einen Kuchen", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-142"), text: ".", case: "none" }
                ],
                exampleEnglish: "I am baking a cake.",
                clozeParts: ["Ich ", " einen Kuchen."],
                clozeAnswers: ["backe"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-hobbys-018"),
                wordType: 'verb',
                german: "grillen",
                english: "to grill / to barbecue", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegrillt",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-hobbys-interessen-143"), ich: "grille", du: "grillst", er: "grillt", wir: "grillen", ihr: "grillt", sie: "grillen" },
                imperative: {id: createWordId("freizeit-und-unterha-hobbys-interessen-144"), du: "Grill!", ihr: "Grillt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-145"), text: "Im Sommer", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-146"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-147"), text: "grillen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-148"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-149"), text: "wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-150"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-151"), text: "im Garten", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-hobbys-interessen-152"), text: ".", case: "none" }
                ],
                exampleEnglish: "In summer we grill in the garden.",
                clozeParts: ["Im Sommer ", " wir im Garten."],
                clozeAnswers: ["grillen"]
            } as Verb
        ],

        // --- UNTER-THEMA: Kino/Konzert/Fernsehen/Radio ---
        "Kino/Konzert/Fernsehen/Radio": [
            {id: createWordId("freizeit-unterhaltung-kino-001"),
                wordType: 'noun',
                german: "Kino",
                article: "das",
                plural: "Kinos",
                english: "cinema / movie theater",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-001"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-002"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-003"), text: "gehen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-004"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-005"), text: "ins Kino", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-006"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the cinema.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Kino"]
            } as Noun,
            {id: createWordId("freizeit-unterhaltung-kino-002"),
                wordType: 'noun',
                german: "Film",
                article: "der",
                plural: "Filme",
                english: "film / movie",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-007"), text: "Wie", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-008"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-009"), text: "war", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-010"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-011"), text: "der Film", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-012"), text: "?", case: "none" }
                ],
                exampleEnglish: "How was the film?",
                clozeParts: ["Wie war der ", "?"],
                clozeAnswers: ["Film"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-003"),
                wordType: 'noun',
                german: "Fernsehen",
                article: "das",
                plural: null, // oft ohne Plural
                english: "television",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-013"), text: "Was", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-014"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-015"), text: "gibt", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-016"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-017"), text: "es", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-018"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-019"), text: "heute", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-020"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-021"), text: "im Fernsehen", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-022"), text: "?", case: "none" }
                ],
                exampleEnglish: "What's on television today?",
                clozeParts: ["Was gibt es heute im ", "?"],
                clozeAnswers: ["Fernsehen"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-004"),
                wordType: 'verb',
                german: "fernsehen",
                english: "to watch TV", separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "ferngesehen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-023"), ich: "sehe fern", du: "siehst fern", er: "sieht fern", wir: "sehen fern", ihr: "seht fern", sie: "sehen fern" },
                imperative: {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-024"), du: "Sieh fern!", ihr: "Seht fern!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-025"), text: "Siehst", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-026"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-027"), text: "du", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-028"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-029"), text: "viel", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-030"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-031"), text: "fern", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-032"), text: "?", case: "none" }
                ],
                exampleEnglish: "Do you watch a lot of TV?",
                clozeParts: ["Siehst du viel ", "?"],
                clozeAnswers: ["fern"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-005"),
                wordType: 'noun',
                german: "Programm",
                article: "das",
                plural: "Programme",
                english: "program / schedule",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-033"), text: "Das Programm", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-034"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-035"), text: "beginnt", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-036"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-037"), text: "um acht Uhr", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-038"), text: ".", case: "none" }
                ],
                exampleEnglish: "The program starts at eight o'clock.",
                clozeParts: ["Das ", " beginnt um acht Uhr."],
                clozeAnswers: ["Programm"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-006"),
                wordType: 'noun',
                german: "Konzert",
                article: "das",
                plural: "Konzerte",
                english: "concert",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-039"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-040"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-041"), text: "gehen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-042"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-043"), text: "heute Abend", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-044"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-045"), text: "ins Konzert", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-046"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the concert tonight.",
                clozeParts: ["Wir gehen heute Abend ins ", "."],
                clozeAnswers: ["Konzert"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-007"),
                wordType: 'noun',
                german: "Musik", // Duplicate from Hobbys
                article: "die",
                plural: "Musiken",
                english: "music",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-047"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-048"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-049"), text: "höre", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-050"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-051"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-052"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-053"), text: "Musik", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-054"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to listen to music.",
                clozeParts: ["Ich höre gern ", "."],
                clozeAnswers: ["Musik"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-008"),
                wordType: 'noun',
                german: "Band",
                article: "die",
                plural: "Bands",
                english: "band (music)",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-055"), text: "Die Schülerband", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-056"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-057"), text: "spielt", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-058"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-059"), text: "heute um 9", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-060"), text: ".", case: "none" }
                ],
                exampleEnglish: "The student band plays today at 9.",
                clozeParts: ["Die Schüler", " spielt heute um 9."],
                clozeAnswers: ["band"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-009"),
                wordType: 'noun',
                german: "CD",
                article: "die",
                plural: "CDs",
                english: "CD",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-061"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-062"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-063"), text: "können", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-064"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-065"), text: "ihm", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-066"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-067"), text: "eine CD", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-068"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-069"), text: "schenken", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-070"), text: ".", case: "none" }
                ],
                exampleEnglish: "We can give him a CD.",
                clozeParts: ["Wir können ihm eine ", " schenken."],
                clozeAnswers: ["CD"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-010"),
                wordType: 'noun',
                german: "CD-Player",
                article: "der",
                plural: "CD-Player",
                english: "CD player",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-071"), text: "Mein CD-Player", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-072"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-073"), text: "ist", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-074"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-075"), text: "kaputt", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-076"), text: ".", case: "none" }
                ],
                exampleEnglish: "My CD player is broken.",
                clozeParts: ["Mein ", " ist kaputt."],
                clozeAnswers: ["CD-Player"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-011"),
                wordType: 'noun',
                german: "Radio",
                article: "das",
                plural: "Radios",
                english: "radio",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-077"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-078"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-079"), text: "höre", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-080"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-081"), text: "Radio", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-082"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-083"), text: "am Morgen", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-084"), text: ".", case: "none" }
                ],
                exampleEnglish: "I listen to the radio in the morning.",
                clozeParts: ["Ich höre ", " am Morgen."],
                clozeAnswers: ["Radio"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-012"),
                wordType: 'noun',
                german: "Lied",
                article: "das",
                plural: "Lieder",
                english: "song",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-085"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-086"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-087"), text: "mag", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-088"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-089"), text: "dieses Lied", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-090"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like this song.",
                clozeParts: ["Ich mag dieses ", "."],
                clozeAnswers: ["Lied"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-013"),
                wordType: 'noun',
                german: "Sänger/Sängerin",
                article: "der/die",
                plural: "Sänger/Sängerinnen",
                english: "singer (male/female)",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-091"), text: "Die Sängerin", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-092"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-093"), text: "ist", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-094"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-095"), text: "sehr bekannt", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-096"), text: ".", case: "none" }
                ],
                exampleEnglish: "The singer (female) is very famous.",
                clozeParts: ["Die ", " ist sehr bekannt."],
                clozeAnswers: ["Sängerin"]
            },
            {id: createWordId("freizeit-unterhaltung-kino-014"),
                wordType: 'verb',
                german: "hören",
                english: "to hear / to listen", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gehört",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-097"), ich: "höre", du: "hörst", er: "hört", wir: "hören", ihr: "hört", sie: "hören" },
                imperative: {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-098"), du: "Hör!", ihr: "Hört!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-099"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-100"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-101"), text: "höre", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-102"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-103"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-104"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-105"), text: "Musik", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-kino-konzert-fernseh-106"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to listen to music.",
                clozeParts: ["Ich ", " gern Musik."],
                clozeAnswers: ["höre"]
            }
        ],

        // --- UNTER-THEMA: Lesen ---
        "Lesen": [
            {id: createWordId("freizeit-unterhaltung-lesen-001"),
                wordType: 'noun',
                german: "Buch",
                article: "das",
                plural: "Bücher",
                english: "book",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-lesen-001"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-002"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-003"), text: "lese", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-lesen-004"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-005"), text: "ein Buch", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-006"), text: ".", case: "none" }
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich lese ein ", "."],
                clozeAnswers: ["Buch"]
            },
            {id: createWordId("freizeit-unterhaltung-lesen-002"),
                wordType: 'noun',
                german: "Bibliothek",
                article: "die",
                plural: "Bibliotheken",
                english: "library",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-lesen-007"), text: "In der Bibliothek", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-008"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-009"), text: "gibt", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-lesen-010"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-011"), text: "es", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-012"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-013"), text: "dreißigtausend Bücher", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-014"), text: ".", case: "none" }
                ],
                exampleEnglish: "There are thirty thousand books in the library.",
                clozeParts: ["In der ", " gibt es dreißigtausend Bücher."],
                clozeAnswers: ["Bibliothek"]
            },
            {id: createWordId("freizeit-unterhaltung-lesen-003"),
                wordType: 'noun',
                german: "Zeitung",
                article: "die",
                plural: "Zeitungen",
                english: "newspaper",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-lesen-015"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-016"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-017"), text: "lese", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-lesen-018"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-019"), text: "die Zeitung", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-020"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-021"), text: "am Morgen", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-022"), text: ".", case: "none" }
                ],
                exampleEnglish: "I read the newspaper in the morning.",
                clozeParts: ["Ich lese die ", " am Morgen."],
                clozeAnswers: ["Zeitung"]
            },
            {id: createWordId("freizeit-unterhaltung-lesen-004"),
                wordType: 'noun',
                german: "Zeitschrift",
                article: "die",
                plural: "Zeitschriften",
                english: "magazine",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-lesen-023"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-024"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-025"), text: "kaufe", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-lesen-026"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-027"), text: "eine Zeitschrift", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-028"), text: ".", case: "none" }
                ],
                exampleEnglish: "I am buying a magazine.",
                clozeParts: ["Ich kaufe eine ", "."],
                clozeAnswers: ["Zeitschrift"]
            },
            {id: createWordId("freizeit-unterhaltung-lesen-005"),
                wordType: 'noun',
                german: "Comic",
                article: "der", // oder das
                plural: "Comics",
                english: "comic",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-lesen-029"), text: "Liest", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-lesen-030"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-031"), text: "du", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-032"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-033"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-034"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-035"), text: "Comics", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-036"), text: "?", case: "none" }
                ],
                exampleEnglish: "Do you like to read comics?",
                clozeParts: ["Liest du gern ", "?"],
                clozeAnswers: ["Comics"]
            },
            {id: createWordId("freizeit-unterhaltung-lesen-006"),
                wordType: 'noun',
                german: "Geschichte",
                article: "die",
                plural: "Geschichten",
                english: "story / history",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-lesen-037"), text: "Kannst", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-lesen-038"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-039"), text: "du", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-040"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-041"), text: "die Geschichte", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-042"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-043"), text: "erzählen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-lesen-044"), text: "?", case: "none" }
                ],
                exampleEnglish: "Can you tell the story?",
                clozeParts: ["Kannst du die ", " erzählen?"],
                clozeAnswers: ["Geschichte"]
            },
            {id: createWordId("freizeit-unterhaltung-lesen-007"),
                wordType: 'verb',
                german: "lesen", // Duplicate from Hobbys
                english: "to read", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelesen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-lesen-045"), ich: "lese", du: "liest", er: "liest", wir: "lesen", ihr: "lest", sie: "lesen" },
                imperative: {id: createWordId("freizeit-und-unterha-lesen-046"), du: "Lies!", ihr: "Lest!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-lesen-047"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-048"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-049"), text: "lese", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-lesen-050"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-lesen-051"), text: "ein Buch", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-lesen-052"), text: ".", case: "none" }
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich ", " ein Buch."],
                clozeAnswers: ["lese"]
            }
        ],

        // --- UNTER-THEMA: Sport ---
        "Sport": [
            {id: createWordId("freizeit-unterhaltung-sport-001"),
                wordType: 'noun',
                german: "Sport",
                article: "der",
                plural: null, // oft ohne Plural
                english: "sport(s) / P.E.",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-sport-001"), text: "Sport", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-002"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-003"), text: "ist", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-004"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-005"), text: "mein Lieblingsfach", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-006"), text: ".", case: "none" }
                ],
                exampleEnglish: "Sport is my favorite subject.",
                clozeParts: ["", " ist mein Lieblingsfach."],
                clozeAnswers: ["Sport"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-002"),
                wordType: 'noun',
                german: "Fußball",
                article: "der",
                plural: "Fußbälle", // (selten)
                english: "football / soccer",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-sport-007"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-008"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-009"), text: "spielen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-010"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-011"), text: "Fußball", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-sport-012"), text: ".", case: "none" }
                ],
                exampleEnglish: "We play football.",
                clozeParts: ["Wir spielen ", "."],
                clozeAnswers: ["Fußball"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-003"),
                wordType: 'noun',
                german: "Basketball",
                article: "der",
                plural: "Basketbälle", // (selten)
                english: "basketball",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-sport-013"), text: "Meine Hobbys", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-014"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-015"), text: "sind", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-016"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-017"), text: "Basketball und Musik", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-018"), text: ".", case: "none" }
                ],
                exampleEnglish: "My hobbies are basketball and music.",
                clozeParts: ["Meine Hobbys sind ", " und Musik."],
                clozeAnswers: ["Basketball"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-004"),
                wordType: 'verb',
                german: "schwimmen", // Duplicate from Hobbys
                english: "to swim", separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geschwommen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-sport-019"), ich: "schwimme", du: "schwimmst", er: "schwimmt", wir: "schwimmen", ihr: "schwimmt", sie: "schwimmen" },
                imperative: {id: createWordId("freizeit-und-unterha-sport-020"), du: "Schwimm!", ihr: "Schwimmt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-sport-021"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-022"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-023"), text: "schwimme", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-024"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-025"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-026"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-027"), text: "im Sommer", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-sport-028"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to swim in the summer.",
                clozeParts: ["Ich ", " gern im Sommer."],
                clozeAnswers: ["schwimme"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-005"),
                wordType: 'verb',
                german: "laufen",
                english: "to run / to walk", separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gelaufen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-sport-029"), ich: "laufe", du: "läufst", er: "läuft", wir: "laufen", ihr: "lauft", sie: "laufen" },
                imperative: {id: createWordId("freizeit-und-unterha-sport-030"), du: "Lauf!", ihr: "Lauft!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-sport-031"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-032"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-033"), text: "laufe", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-034"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-035"), text: "jeden Morgen", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-sport-036"), text: ".", case: "none" }
                ],
                exampleEnglish: "I run every morning.",
                clozeParts: ["Ich ", " jeden Morgen."],
                clozeAnswers: ["laufe"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-006"),
                wordType: 'verb',
                german: "spielen", // Duplicate from Hobbys
                english: "to play", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-sport-037"), ich: "spiele", du: "spielst", er: "spielt", wir: "spielen", ihr: "spielt", sie: "spielen" },
                imperative: {id: createWordId("freizeit-und-unterha-sport-038"), du: "Spiel!", ihr: "Spielt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-sport-039"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-040"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-041"), text: "spielen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-042"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-043"), text: "ein Spiel", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-sport-044"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are playing a game.",
                clozeParts: ["Wir ", " ein Spiel."],
                clozeAnswers: ["spielen"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-007"),
                wordType: 'noun',
                german: "Mannschaft",
                article: "die",
                plural: "Mannschaften",
                english: "team",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-sport-045"), text: "Unsere Mannschaft", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-046"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-047"), text: "hat", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-048"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-049"), text: "gewonnen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-050"), text: ".", case: "none" }
                ],
                exampleEnglish: "Our team has won.",
                clozeParts: ["Unsere ", " hat gewonnen."],
                clozeAnswers: ["Mannschaft"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-008"),
                wordType: 'noun',
                german: "Spieler/Spielerin",
                article: "der/die",
                plural: "Spieler/Spielerinnen",
                english: "player (male/female)",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-sport-051"), text: "Die Spieler", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-052"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-053"), text: "sind", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-054"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-055"), text: "auf dem Platz", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-sport-056"), text: ".", case: "none" }
                ],
                exampleEnglish: "The players are on the field.",
                clozeParts: ["Die ", " sind auf dem Platz."],
                clozeAnswers: ["Spieler"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-009"),
                wordType: 'noun',
                german: "Ball",
                article: "der",
                plural: "Bälle",
                english: "ball",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-sport-057"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-058"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-059"), text: "spielen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-060"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-061"), text: "mit dem Ball", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-sport-062"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are playing with the ball.",
                clozeParts: ["Wir spielen mit dem ", "."],
                clozeAnswers: ["Ball"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-010"),
                wordType: 'verb',
                german: "gewinnen",
                english: "to win", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gewonnen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-sport-063"), ich: "gewinne", du: "gewinnst", er: "gewinnt", wir: "gewinnen", ihr: "gewinnt", sie: "gewinnen" },
                imperative: {id: createWordId("freizeit-und-unterha-sport-064"), du: "Gewinn!", ihr: "Gewinnt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-sport-065"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-066"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-067"), text: "möchte", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-068"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-069"), text: "gewinnen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-070"), text: ".", case: "none" }
                ],
                exampleEnglish: "I want to win.",
                clozeParts: ["Ich möchte ", "."],
                clozeAnswers: ["gewinnen"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-011"),
                wordType: 'verb',
                german: "verlieren",
                english: "to lose", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verloren",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-sport-071"), ich: "verliere", du: "verlierst", er: "verliert", wir: "verlieren", ihr: "verliert", sie: "verlieren" },
                imperative: {id: createWordId("freizeit-und-unterha-sport-072"), du: "Verlier!", ihr: "Verliert!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-sport-073"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-074"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-075"), text: "habe", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-076"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-077"), text: "verloren", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-078"), text: ".", case: "none" }
                ],
                exampleEnglish: "I have lost.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["verloren"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-012"),
                wordType: 'noun',
                german: "Punkt",
                article: "der",
                plural: "Punkte",
                english: "point",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-sport-079"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-080"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-081"), text: "haben", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-082"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-083"), text: "zehn Punkte", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-sport-084"), text: ".", case: "none" }
                ],
                exampleEnglish: "We have ten points.",
                clozeParts: ["Wir haben zehn ", "."],
                clozeAnswers: ["Punkte"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-013"),
                wordType: 'noun',
                german: "Tennis",
                article: "das",
                plural: null, // oft ohne Plural
                english: "tennis",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-sport-085"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-086"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-087"), text: "spiele", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-088"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-089"), text: "Tennis", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-sport-090"), text: ".", case: "none" }
                ],
                exampleEnglish: "I play tennis.",
                clozeParts: ["Ich spiele ", "."],
                clozeAnswers: ["Tennis"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-014"),
                wordType: 'noun',
                german: "Tischtennis",
                article: "das",
                plural: null, // oft ohne Plural
                english: "table tennis",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-sport-091"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-092"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-093"), text: "spielen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-094"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-095"), text: "Tischtennis", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-sport-096"), text: ".", case: "none" }
                ],
                exampleEnglish: "We play table tennis.",
                clozeParts: ["Wir spielen ", "."],
                clozeAnswers: ["Tischtennis"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-015"),
                wordType: "verb",
                german: "Rad fahren",
                english: "to cycle / to ride a bike", separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "Rad gefahren",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-sport-097"), ich: "fahre Rad", du: "fährst Rad", er: "fährt Rad", wir: "fahren Rad", ihr: "fahrt Rad", sie: "fahren Rad" },
                imperative: {id: createWordId("freizeit-und-unterha-sport-098"), du: "Fahr Rad!", ihr: "Fahrt Rad!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-sport-099"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("freizeit-und-unterha-sport-100"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("freizeit-und-unterha-sport-101"), text: "fahre", case: "verb" } as CaseElement,
                    {id: createWordId("freizeit-und-unterha-sport-102"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("freizeit-und-unterha-sport-103"), text: "mit dem Rad", case: "dativ" } as CaseElement,
                    {id: createWordId("freizeit-und-unterha-sport-104"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("freizeit-und-unterha-sport-105"), text: "zur Schule", case: "dativ" } as CaseElement,
                    {id: createWordId("freizeit-und-unterha-sport-106"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I ride my bike to school.",
                clozeParts: ["Ich fahre mit dem ", " zur Schule."],
                clozeAnswers: ["Rad"]
            } as Verb,
            {id: createWordId("freizeit-unterhaltung-sport-016"),
                wordType: 'verb',
                german: "tanzen", // Duplicate from Hobbys
                english: "to dance", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getanzt",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-sport-107"), ich: "tanze", du: "tanzt", er: "tanzt", wir: "tanzen", ihr: "tanzt", sie: "tanzen" },
                imperative: {id: createWordId("freizeit-und-unterha-sport-108"), du: "Tanz!", ihr: "Tanzt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-sport-109"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-110"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-111"), text: "tanze", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-112"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-113"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-114"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to dance.",
                clozeParts: ["Ich ", " gern."],
                clozeAnswers: ["tanze"]
            },
            {id: createWordId("freizeit-unterhaltung-sport-017"),
                wordType: 'verb',
                german: "wandern", // Duplicate from Hobbys
                english: "to hike", separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gewandert",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-sport-115"), ich: "wandere", du: "wanderst", er: "wandert", wir: "wandern", ihr: "wandert", sie: "wandern" },
                imperative: {id: createWordId("freizeit-und-unterha-sport-116"), du: "Wandere!", ihr: "Wandert!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-sport-117"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-sport-118"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-119"), text: "wandern", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-sport-120"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-sport-121"), text: "in den Bergen", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-sport-122"), text: ".", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir ", " in den Bergen."],
                clozeAnswers: ["wandern"]
            }
        ],

        // --- UNTER-THEMA: Ausgehen (Disco) ---
        "Ausgehen (Disco)": [
            {id: createWordId("freizeit-unterhaltung-ausgehen-001"),
                wordType: 'noun',
                german: "Disco/Diskothek",
                article: "die",
                plural: "Discos/Diskotheken",
                english: "disco / discotheque",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ausgehen--disco-001"), text: "Sie", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-002"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-003"), text: "geht", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-004"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-005"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-006"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-007"), text: "in die Diskothek", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-008"), text: ".", case: "none" }
                ],
                exampleEnglish: "She likes to go to the discotheque.",
                clozeParts: ["Sie geht gern in die ", "."],
                clozeAnswers: ["Diskothek"]
            },
            {id: createWordId("freizeit-unterhaltung-ausgehen-002"),
                wordType: 'verb',
                german: "tanzen", // Duplicate
                english: "to dance", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getanzt",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-ausgehen--disco-009"), ich: "tanze", du: "tanzt", er: "tanzt", wir: "tanzen", ihr: "tanzt", sie: "tanzen" },
                imperative: {id: createWordId("freizeit-und-unterha-ausgehen--disco-010"), du: "Tanz!", ihr: "Tanzt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-011"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-012"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-013"), text: "tanze", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-014"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-015"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-016"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to dance.",
                clozeParts: ["Ich ", " gern."],
                clozeAnswers: ["tanze"]
            },
            {id: createWordId("freizeit-unterhaltung-ausgehen-003"),
                wordType: 'verb',
                german: "treffen",
                english: "to meet", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getroffen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-ausgehen--disco-017"), ich: "treffe", du: "triffst", er: "trifft", wir: "treffen", ihr: "trefft", sie: "treffen" },
                imperative: {id: createWordId("freizeit-und-unterha-ausgehen--disco-018"), du: "Triff!", ihr: "Trefft!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-019"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-020"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-021"), text: "treffen uns", case: "verb" }, // reflexiv
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-022"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-023"), text: "im Café", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-024"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are meeting at the cafe.",
                clozeParts: ["Wir ", " uns im Café."],
                clozeAnswers: ["treffen"]
            },
            {id: createWordId("freizeit-unterhaltung-ausgehen-004"),
                wordType: 'noun',
                german: "Party",
                article: "die",
                plural: "Partys",
                english: "party",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ausgehen--disco-025"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-026"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-027"), text: "machen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-028"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-029"), text: "eine Party", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-030"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are having a party.",
                clozeParts: ["Wir machen eine ", "."],
                clozeAnswers: ["Party"]
            },
            {id: createWordId("freizeit-unterhaltung-ausgehen-005"),
                wordType: 'verb',
                german: "feiern",
                english: "to celebrate", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefeiert",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-ausgehen--disco-031"), ich: "feiere", du: "feierst", er: "feiert", wir: "feiern", ihr: "feiert", sie: "feiern" },
                imperative: {id: createWordId("freizeit-und-unterha-ausgehen--disco-032"), du: "Feiere!", ihr: "Feiert!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-033"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-034"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-035"), text: "feiern", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-036"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-037"), text: "meinen Geburtstag", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-038"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are celebrating my birthday.",
                clozeParts: ["Wir ", " meinen Geburtstag."],
                clozeAnswers: ["feiern"]
            },
            {id: createWordId("freizeit-unterhaltung-ausgehen-006"),
                wordType: 'noun',
                german: "Einladung",
                article: "die",
                plural: "Einladungen",
                english: "invitation",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ausgehen--disco-039"), text: "Das", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-040"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-041"), text: "ist", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-042"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-043"), text: "eine Einladung", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-044"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-045"), text: "zur Geburtstagsparty", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-046"), text: ".", case: "none" }
                ],
                exampleEnglish: "This is an invitation to the birthday party.",
                clozeParts: ["Das ist eine ", " zur Geburtstagsparty."],
                clozeAnswers: ["Einladung"]
            },
            {id: createWordId("freizeit-unterhaltung-ausgehen-007"),
                wordType: 'verb',
                german: "einladen",
                english: "to invite", separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingeladen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-ausgehen--disco-047"), ich: "lade ein", du: "lädst ein", er: "lädt ein", wir: "laden ein", ihr: "ladet ein", sie: "laden ein" },
                imperative: {id: createWordId("freizeit-und-unterha-ausgehen--disco-048"), du: "Lade ein!", ihr: "Ladet ein!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-049"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-050"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-051"), text: "lade", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-052"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-053"), text: "dich", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-054"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-055"), text: "ein", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-056"), text: ".", case: "none" }
                ],
                exampleEnglish: "I invite you.",
                clozeParts: ["Ich ", " dich ", "."],
                clozeAnswers: ["lade", "ein"]
            },
            {id: createWordId("freizeit-unterhaltung-ausgehen-008"),
                wordType: 'noun',
                german: "Café",
                article: "das",
                plural: "Cafés",
                english: "cafe",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ausgehen--disco-057"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-058"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-059"), text: "treffen uns", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-060"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-061"), text: "im Café", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-062"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are meeting at the cafe.",
                clozeParts: ["Wir treffen uns im ", "."],
                clozeAnswers: ["Café"]
            },
            {id: createWordId("freizeit-unterhaltung-ausgehen-009"),
                wordType: 'noun',
                german: "Restaurant",
                article: "das",
                plural: "Restaurants",
                english: "restaurant",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ausgehen--disco-063"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-064"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-065"), text: "gehen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-066"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-067"), text: "ins Restaurant", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-068"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the restaurant.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Restaurant"]
            },
            {id: createWordId("freizeit-unterhaltung-ausgehen-010"),
                wordType: 'noun',
                german: "Kino", // Duplicate
                article: "das",
                plural: "Kinos",
                english: "cinema / movie theater",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ausgehen--disco-069"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-070"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-071"), text: "gehen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-072"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-073"), text: "ins Kino", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ausgehen--disco-074"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the cinema.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Kino"]
            }
        ],

        // --- UNTER-THEMA: Feste/Feiern ---
        "Feste/Feiern": [
            {id: createWordId("freizeit-unterhaltung-feste-001"),
                wordType: 'noun',
                german: "Fest",
                article: "das",
                plural: "Feste",
                english: "festival / party / celebration",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-feste-feiern-001"), text: "Das Fest", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-002"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-003"), text: "war", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-004"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-005"), text: "schön", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-006"), text: ".", case: "none" }
                ],
                exampleEnglish: "The festival was nice.",
                clozeParts: ["Das ", " war schön."],
                clozeAnswers: ["Fest"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-002"),
                wordType: 'verb',
                german: "feiern", // Duplicate
                english: "to celebrate", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefeiert",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-feste-feiern-007"), ich: "feiere", du: "feierst", er: "feiert", wir: "feiern", ihr: "feiert", sie: "feiern" },
                imperative: {id: createWordId("freizeit-und-unterha-feste-feiern-008"), du: "Feiere!", ihr: "Feiert!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-feste-feiern-009"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-010"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-011"), text: "feiern", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-012"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-013"), text: "meinen Geburtstag", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-014"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are celebrating my birthday.",
                clozeParts: ["Wir ", " meinen Geburtstag."],
                clozeAnswers: ["feiern"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-003"),
                wordType: 'noun',
                german: "Party", // Duplicate
                article: "die",
                plural: "Partys",
                english: "party",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-feste-feiern-015"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-016"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-017"), text: "machen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-018"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-019"), text: "eine Party", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-020"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are having a party.",
                clozeParts: ["Wir machen eine ", "."],
                clozeAnswers: ["Party"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-004"),
                wordType: 'verb',
                german: "einladen", // Duplicate
                english: "to invite", separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingeladen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-feste-feiern-021"), ich: "lade ein", du: "lädst ein", er: "lädt ein", wir: "laden ein", ihr: "ladet ein", sie: "laden ein" },
                imperative: {id: createWordId("freizeit-und-unterha-feste-feiern-022"), du: "Lade ein!", ihr: "Ladet ein!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-feste-feiern-023"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-024"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-025"), text: "lade", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-026"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-027"), text: "dich", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-028"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-029"), text: "ein", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-030"), text: ".", case: "none" }
                ],
                exampleEnglish: "I invite you.",
                clozeParts: ["Ich ", " dich ", "."],
                clozeAnswers: ["lade", "ein"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-005"),
                wordType: 'noun',
                german: "Einladung", // Duplicate
                article: "die",
                plural: "Einladungen",
                english: "invitation",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-feste-feiern-031"), text: "Das", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-032"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-033"), text: "ist", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-034"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-035"), text: "eine Einladung", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-036"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-037"), text: "zur Geburtstagsparty", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-038"), text: ".", case: "none" }
                ],
                exampleEnglish: "This is an invitation to the birthday party.",
                clozeParts: ["Das ist eine ", " zur Geburtstagsparty."],
                clozeAnswers: ["Einladung"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-006"),
                wordType: 'noun',
                german: "Geschenk",
                article: "das",
                plural: "Geschenke",
                english: "present / gift",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-feste-feiern-039"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-040"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-041"), text: "habe", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-042"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-043"), text: "ein Geschenk", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-044"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-045"), text: "für dich", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-046"), text: ".", case: "none" }
                ],
                exampleEnglish: "I have a present for you.",
                clozeParts: ["Ich habe ein ", " für dich."],
                clozeAnswers: ["Geschenk"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-007"),
                wordType: 'noun',
                german: "Weihnachten",
                article: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "Christmas",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-feste-feiern-047"), text: "Frohe Weihnachten", case: "akkusativ" }, // Feste Wendung
                    {id: createWordId("freizeit-und-unterha-feste-feiern-048"), text: "!", case: "none" }
                ],
                exampleEnglish: "Merry Christmas!",
                clozeParts: ["Frohe ", "!"],
                clozeAnswers: ["Weihnachten"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-008"),
                wordType: 'noun',
                german: "Ostern",
                article: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "Easter",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-feste-feiern-049"), text: "Zu Ostern", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-050"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-051"), text: "gibt", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-052"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-053"), text: "es", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-054"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-055"), text: "Schokolade", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-056"), text: ".", case: "none" }
                ],
                exampleEnglish: "There is chocolate at Easter.",
                clozeParts: ["Zu ", " gibt es Schokolade."],
                clozeAnswers: ["Ostern"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-009"),
                wordType: 'noun',
                german: "Karneval",
                article: "der",
                plural: "Karnevale", // oder Karnevals
                english: "carnival",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-feste-feiern-057"), text: "An Karneval", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-058"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-059"), text: "verkleiden", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-060"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-061"), text: "wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-062"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-063"), text: "uns", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-064"), text: ".", case: "none" }
                ],
                exampleEnglish: "We dress up for Carnival.",
                clozeParts: ["An ", " verkleiden wir uns."],
                clozeAnswers: ["Karneval"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-010"),
                wordType: 'noun',
                german: "Geburtstag",
                article: "der",
                plural: "Geburtstage",
                english: "birthday",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-feste-feiern-065"), text: "Wann", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-066"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-067"), text: "hast", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-068"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-069"), text: "du", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-070"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-071"), text: "Geburtstag", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-072"), text: "?", case: "none" }
                ],
                exampleEnglish: "When is your birthday?",
                clozeParts: ["Wann hast du ", "?"],
                clozeAnswers: ["Geburtstag"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-011"),
                wordType: 'noun',
                german: "Silvester",
                article: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "New Year's Eve",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-feste-feiern-073"), text: "An Silvester", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-074"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-075"), text: "machen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-076"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-077"), text: "wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-078"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-079"), text: "ein Feuerwerk", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-080"), text: ".", case: "none" }
                ],
                exampleEnglish: "On New Year's Eve we have fireworks.",
                clozeParts: ["An ", " machen wir ein Feuerwerk."],
                clozeAnswers: ["Silvester"]
            },
            {id: createWordId("freizeit-unterhaltung-feste-012"),
                wordType: 'noun',
                german: "Feuerwerk",
                article: "das",
                plural: "Feuerwerke",
                english: "fireworks",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-feste-feiern-081"), text: "Das Feuerwerk", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-082"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-083"), text: "war", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-084"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-085"), text: "schön", case: "none" },
                    {id: createWordId("freizeit-und-unterha-feste-feiern-086"), text: ".", case: "none" }
                ],
                exampleEnglish: "The fireworks were beautiful.",
                clozeParts: ["Das ", " war schön."],
                clozeAnswers: ["Feuerwerk"]
            }
        ],

        // --- UNTER-THEMA: Ferien ---
        "Ferien": [
            {id: createWordId("freizeit-unterhaltung-ferien-001"),
                wordType: 'noun',
                german: "Ferien",
                article: "die", // Plural
                plural: "Ferien", // Plural only
                english: "holidays / vacation (school)",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-001"), text: "Was", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-002"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-003"), text: "macht", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-004"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-005"), text: "ihr", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-006"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-007"), text: "in den Ferien", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-008"), text: "?", case: "none" }
                ],
                exampleEnglish: "What are you (plural) doing during the holidays?",
                clozeParts: ["Was macht ihr in den ", "?"],
                clozeAnswers: ["Ferien"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-002"),
                wordType: 'noun',
                german: "Urlaub",
                article: "der",
                plural: "Urlaube",
                english: "holiday / vacation",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-009"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-010"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-011"), text: "machen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-012"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-013"), text: "Urlaub", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-014"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-015"), text: "in Italien", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-016"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are on holiday in Italy.",
                clozeParts: ["Wir machen ", " in Italien."],
                clozeAnswers: ["Urlaub"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-003"),
                wordType: 'noun',
                german: "Reise",
                article: "die",
                plural: "Reisen",
                english: "journey / trip",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-017"), text: "Die Reise", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-018"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-019"), text: "nach Spanien", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-020"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-021"), text: "war", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-022"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-023"), text: "toll", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-024"), text: ".", case: "none" }
                ],
                exampleEnglish: "The trip to Spain was great.",
                clozeParts: ["Die ", " nach Spanien war toll."],
                clozeAnswers: ["Reise"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-004"),
                wordType: 'verb',
                german: "reisen", // Duplicate
                english: "to travel",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gereist",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-ferien-025"), ich: "reise", du: "reist", er: "reist", wir: "reisen", ihr: "reist", sie: "reisen" },
                imperative: {id: createWordId("freizeit-und-unterha-ferien-026"), du: "Reis!", ihr: "Reist!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-ferien-027"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-028"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-029"), text: "reisen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-030"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-031"), text: "oft", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-032"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-033"), text: "nach Frankreich", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-034"), text: ".", case: "none" }
                ],
                exampleEnglish: "We often travel to France.",
                clozeParts: ["Wir ", " oft nach Frankreich."],
                clozeAnswers: ["reisen"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-005"),
                wordType: 'noun',
                german: "Ausflug",
                article: "der",
                plural: "Ausflüge",
                english: "trip / excursion",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-035"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-036"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-037"), text: "machen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-038"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-039"), text: "mit der Schule", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-040"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-041"), text: "einen Ausflug", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-042"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are going on a trip with the school.",
                clozeParts: ["Wir machen mit der Schule einen ", "."],
                clozeAnswers: ["Ausflug"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-006"),
                wordType: 'verb',
                german: "wandern", // Duplicate
                english: "to hike",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gewandert",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-ferien-043"), ich: "wandere", du: "wanderst", er: "wandert", wir: "wandern", ihr: "wandert", sie: "wandern" },
                imperative: {id: createWordId("freizeit-und-unterha-ferien-044"), du: "Wandere!", ihr: "Wandert!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-ferien-045"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-046"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-047"), text: "wandern", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-048"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-049"), text: "in den Bergen", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-050"), text: ".", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir ", " in den Bergen."],
                clozeAnswers: ["wandern"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-007"),
                wordType: 'verb',
                german: "schwimmen", // Duplicate
                english: "to swim", separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geschwommen",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-ferien-051"), ich: "schwimme", du: "schwimmst", er: "schwimmt", wir: "schwimmen", ihr: "schwimmt", sie: "schwimmen" },
                imperative: {id: createWordId("freizeit-und-unterha-ferien-052"), du: "Schwimm!", ihr: "Schwimmt!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-ferien-053"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-054"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-055"), text: "schwimme", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-056"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-057"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-058"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-059"), text: "im Sommer", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-060"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to swim in the summer.",
                clozeParts: ["Ich ", " gern im Sommer."],
                clozeAnswers: ["schwimme"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-008"),
                wordType: 'verb',
                german: "zelten",
                english: "to camp (in a tent)", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gezeltet",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-ferien-061"), ich: "zelte", du: "zeltest", er: "zeltet", wir: "zelten", ihr: "zeltet", sie: "zelten" },
                imperative: {id: createWordId("freizeit-und-unterha-ferien-062"), du: "Zelte!", ihr: "Zeltet!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-ferien-063"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-064"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-065"), text: "schlafen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-066"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-067"), text: "im Zelt", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-068"), text: ".", case: "none" }
                ],
                exampleEnglish: "We sleep in the tent.", // Example uses "schlafen im Zelt"
                clozeParts: ["Wir ", " im Zelt."], // Cloze for "schlafen"
                clozeAnswers: ["schlafen"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-009"),
                wordType: 'noun',
                german: "Camping",
                article: "das",
                plural: null, // oft ohne Plural
                english: "camping",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-069"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-070"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-071"), text: "machen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-072"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-073"), text: "Camping", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-074"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-075"), text: "am See", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-076"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are camping at the lake.",
                clozeParts: ["Wir machen ", " am See."],
                clozeAnswers: ["Camping"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-010"),
                wordType: 'noun',
                german: "Hotel",
                article: "das",
                plural: "Hotels",
                english: "hotel",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-077"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-078"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-079"), text: "schlafen", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-080"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-081"), text: "im Hotel", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-082"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are sleeping in the hotel.",
                clozeParts: ["Wir schlafen im ", "."],
                clozeAnswers: ["Hotel"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-011"),
                wordType: 'noun',
                german: "Koffer",
                article: "der",
                plural: "Koffer",
                english: "suitcase",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-083"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-084"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-085"), text: "packe", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-086"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-087"), text: "meinen Koffer", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-088"), text: ".", case: "none" }
                ],
                exampleEnglish: "I am packing my suitcase.",
                clozeParts: ["Ich packe meinen ", "."],
                clozeAnswers: ["Koffer"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-012"),
                wordType: 'noun',
                german: "Fotoapparat",
                article: "der",
                plural: "Fotoapparate",
                english: "camera",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-089"), text: "Sie", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-090"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-091"), text: "hat", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-092"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-093"), text: "einen teuren Fotoapparat", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-094"), text: ".", case: "none" }
                ],
                exampleEnglish: "She has an expensive camera.",
                clozeParts: ["Sie hat einen teuren ", "."],
                clozeAnswers: ["Fotoapparat"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-013"),
                wordType: 'verb',
                german: "fotografieren", // Duplicate
                english: "to photograph", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "fotografiert",
                presentConjugation: {
    id: createWordId("freizeit-und-unterha-ferien-095"), ich: "fotografiere", du: "fotografierst", er: "fotografiert", wir: "fotografieren", ihr: "fotografiert", sie: "fotografieren" },
                imperative: {id: createWordId("freizeit-und-unterha-ferien-096"), du: "Fotografier!", ihr: "Fotografiert!" },
                exampleGerman: [
                    {id: createWordId("freizeit-und-unterha-ferien-097"), text: "Ich", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-098"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-099"), text: "fotografiere", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-100"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-101"), text: "gern", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-102"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-103"), text: "im Urlaub", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-104"), text: ".", case: "none" }
                ],
                exampleEnglish: "I like to take photos on holiday.",
                clozeParts: ["Ich ", " gern im Urlaub."],
                clozeAnswers: ["fotografiere"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-014"),
                wordType: 'noun',
                german: "Sonne",
                article: "die",
                plural: "Sonnen",
                english: "sun",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-105"), text: "Die Sonne", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-106"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-107"), text: "scheint", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-108"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-109"), text: "im Urlaub", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-110"), text: ".", case: "none" }
                ],
                exampleEnglish: "The sun shines on holiday.",
                clozeParts: ["Die ", " scheint im Urlaub."],
                clozeAnswers: ["Sonne"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-015"),
                wordType: 'noun',
                german: "Meer",
                article: "das",
                plural: "Meere",
                english: "sea / ocean",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-111"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-112"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-113"), text: "fahren", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-114"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-115"), text: "ans Meer", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-116"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the sea.",
                clozeParts: ["Wir fahren ans ", "."],
                clozeAnswers: ["Meer"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-016"),
                wordType: 'noun',
                german: "See",
                article: "der",
                plural: "Seen",
                english: "lake",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-117"), text: "Am Wochenende", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-118"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-119"), text: "fahren", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-120"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-121"), text: "wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-122"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-123"), text: "an den See", case: "akkusativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-124"), text: ".", case: "none" }
                ],
                exampleEnglish: "At the weekend we are going to the lake.",
                clozeParts: ["Am Wochenende fahren wir an den ", "."],
                clozeAnswers: ["See"]
            },
            {id: createWordId("freizeit-unterhaltung-ferien-017"),
                wordType: 'noun',
                german: "Berge",
                article: "die", // Plural
                plural: "Berge", // Plural only
                english: "mountains",
                exampleGerman: [
                    {
    id: createWordId("freizeit-und-unterha-ferien-125"), text: "Wir", case: "nominativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-126"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-127"), text: "wandern", case: "verb" },
                    {id: createWordId("freizeit-und-unterha-ferien-128"), text: " ", case: "none" },
                    {id: createWordId("freizeit-und-unterha-ferien-129"), text: "in den Bergen", case: "dativ" },
                    {id: createWordId("freizeit-und-unterha-ferien-130"), text: ".", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir wandern in den ", "."],
                clozeAnswers: ["Bergen"]
            }
        ]
    }
});