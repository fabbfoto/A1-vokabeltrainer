// vokabular_freizeit_unterhaltung.ts

import type { 
    VocabularyStructure, 
    Word, 
    Noun,
    Verb,
    Adjective,
    WordId,
    CaseElement 
} from './shared/types/vocabulary';
import { createWordId, createVocabulary } from './shared/types/vocabulary';

export const vokabularFreizeitUnterhaltung: VocabularyStructure = createVocabulary({
    "Freizeit und Unterhaltung": {

        // --- UNTER-THEMA: Hobbys, Interessen ---
        "Hobbys, Interessen": [
            {
                id: createWordId("freizeit-unterhaltung-hobbys-001"),
                wordType: 'noun',
                german: "Hobby",
                article: "das",
                plural: "Hobbys",
                english: "hobby",
                exampleGerman: [
                    { text: "Mein Hobby", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Fußball", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My hobby is football.",
                clozeParts: ["Mein ", " ist Fußball."],
                clozeAnswers: ["Hobby"]
            } as Noun,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-002"),
                wordType: 'verb',
                german: "basteln",
                english: "to do crafts / to tinker",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gebastelt",
                presentConjugation: { ich: "bastle", du: "bastelst", er: "bastelt", wir: "basteln", ihr: "bastelt", sie: "basteln" },
                imperative: { du: "Bastle!", ihr: "Bastelt!" },
                exampleGerman: [
                    { text: "Basteln", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mein Hobby", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Crafting is my hobby.",
                clozeParts: ["", " ist mein Hobby."],
                clozeAnswers: ["Basteln"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-003"),
                wordType: 'verb',
                german: "malen",
                english: "to paint / to draw",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gemalt",
                presentConjugation: { ich: "male", du: "malst", er: "malt", wir: "malen", ihr: "malt", sie: "malen" },
                imperative: { du: "Mal!", ihr: "Malt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "male", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Bilder", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to paint pictures.",
                clozeParts: ["Ich ", " gern Bilder."],
                clozeAnswers: ["male"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-004"),
                wordType: 'verb',
                german: "sammeln",
                english: "to collect",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesammelt",
                presentConjugation: { ich: "sammle", du: "sammelst", er: "sammelt", wir: "sammeln", ihr: "sammelt", sie: "sammeln" },
                imperative: { du: "Sammle!", ihr: "Sammelt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sammle", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Briefmarken", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I collect stamps.",
                clozeParts: ["Ich ", " Briefmarken."],
                clozeAnswers: ["sammle"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-005"),
                wordType: 'noun',
                german: "Musik",
                article: "die",
                plural: "Musiken", // (selten, meist ohne Plural)
                english: "music",
                exampleGerman: [
                    { text: "Meine Hobbys", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Basketball und Musik", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My hobbies are basketball and music.",
                clozeParts: ["Meine Hobbys sind Basketball und ", "."],
                clozeAnswers: ["Musik"]
            } as Noun,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-006"),
                wordType: 'verb',
                german: "spielen",
                english: "to play",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                presentConjugation: { ich: "spiele", du: "spielst", er: "spielt", wir: "spielen", ihr: "spielt", sie: "spielen" },
                imperative: { du: "Spiel!", ihr: "Spielt!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spielen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Spiel", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are playing a game.",
                clozeParts: ["Wir ", " ein Spiel."],
                clozeAnswers: ["spielen"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-007"),
                wordType: 'verb',
                german: "tanzen",
                english: "to dance",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getanzt",
                presentConjugation: { ich: "tanze", du: "tanzt", er: "tanzt", wir: "tanzen", ihr: "tanzt", sie: "tanzen" },
                imperative: { du: "Tanz!", ihr: "Tanzt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "tanze", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to dance.",
                clozeParts: ["Ich ", " gern."],
                clozeAnswers: ["tanze"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-008"),
                wordType: 'verb',
                german: "fotografieren",
                english: "to photograph",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "fotografiert",
                presentConjugation: { ich: "fotografiere", du: "fotografierst", er: "fotografiert", wir: "fotografieren", ihr: "fotografiert", sie: "fotografieren" },
                imperative: { du: "Fotografier!", ihr: "Fotografiert!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fotografiere", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "im Urlaub", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to take photos on holiday.",
                clozeParts: ["Ich ", " gern im Urlaub."],
                clozeAnswers: ["fotografiere"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-009"),
                wordType: 'verb',
                german: "zeichnen",
                english: "to draw",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gezeichnet",
                presentConjugation: { ich: "zeichne", du: "zeichnest", er: "zeichnet", wir: "zeichnen", ihr: "zeichnet", sie: "zeichnen" },
                imperative: { du: "Zeichne!", ihr: "Zeichnet!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "zeichne", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Bild", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am drawing a picture.",
                clozeParts: ["Ich ", " ein Bild."],
                clozeAnswers: ["zeichne"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-010"),
                wordType: 'verb',
                german: "lesen",
                english: "to read",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelesen",
                presentConjugation: { ich: "lese", du: "liest", er: "liest", wir: "lesen", ihr: "lest", sie: "lesen" },
                imperative: { du: "Lies!", ihr: "Lest!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "lese", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Buch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich ", " ein Buch."],
                clozeAnswers: ["lese"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-011"),
                wordType: 'verb',
                german: "schreiben",
                english: "to write",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschrieben",
                presentConjugation: { ich: "schreibe", du: "schreibst", er: "schreibt", wir: "schreiben", ihr: "schreibt", sie: "schreiben" },
                imperative: { du: "Schreib!", ihr: "Schreibt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schreibe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Geschichten", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to write stories.",
                clozeParts: ["Ich ", " gern Geschichten."],
                clozeAnswers: ["schreibe"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-012"),
                wordType: 'verb',
                german: "schwimmen",
                english: "to swim",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geschwommen",
                presentConjugation: { ich: "schwimme", du: "schwimmst", er: "schwimmt", wir: "schwimmen", ihr: "schwimmt", sie: "schwimmen" },
                imperative: { du: "Schwimm!", ihr: "Schwimmt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schwimme", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "im Sommer", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to swim in the summer.",
                clozeParts: ["Ich ", " gern im Sommer."],
                clozeAnswers: ["schwimme"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-013"),
                wordType: 'verb',
                german: "singen",
                english: "to sing",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesungen",
                presentConjugation: { ich: "singe", du: "singst", er: "singt", wir: "singen", ihr: "singt", sie: "singen" },
                imperative: { du: "Sing!", ihr: "Singt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "singe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in einer Band", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I sing in a band.",
                clozeParts: ["Ich ", " in einer Band."],
                clozeAnswers: ["singe"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-014"),
                wordType: 'verb',
                german: "wandern",
                english: "to hike",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gewandert",
                presentConjugation: { ich: "wandere", du: "wanderst", er: "wandert", wir: "wandern", ihr: "wandert", sie: "wandern" },
                imperative: { du: "Wandere!", ihr: "Wandert!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wandern", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in den Bergen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir ", " in den Bergen."],
                clozeAnswers: ["wandern"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-015"),
                wordType: 'verb',
                german: "reisen",
                english: "to travel",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gereist",
                presentConjugation: { ich: "reise", du: "reist", er: "reist", wir: "reisen", ihr: "reist", sie: "reisen" },
                imperative: { du: "Reis!", ihr: "Reist!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "reisen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "oft", case: "none" },
                    { text: " ", case: "none" },
                    { text: "nach Frankreich", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We often travel to France.",
                clozeParts: ["Wir ", " oft nach Frankreich."],
                clozeAnswers: ["reisen"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-016"),
                wordType: 'verb',
                german: "kochen",
                english: "to cook",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekocht",
                presentConjugation: { ich: "koche", du: "kochst", er: "kocht", wir: "kochen", ihr: "kocht", sie: "kochen" },
                imperative: { du: "Koch!", ihr: "Kocht!" },
                exampleGerman: [
                    { text: "In der Küche", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "kocht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meine Mutter", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My mother is cooking in the kitchen.",
                clozeParts: ["In der Küche ", " meine Mutter."],
                clozeAnswers: ["kocht"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-017"),
                wordType: 'verb',
                german: "backen",
                english: "to bake",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gebacken",
                presentConjugation: { ich: "backe", du: "bäckst", er: "bäckt", wir: "backen", ihr: "backt", sie: "backen" },
                imperative: { du: "Back!", ihr: "Backt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "backe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "einen Kuchen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am baking a cake.",
                clozeParts: ["Ich ", " einen Kuchen."],
                clozeAnswers: ["backe"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-hobbys-018"),
                wordType: 'verb',
                german: "grillen",
                english: "to grill / to barbecue",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegrillt",
                presentConjugation: { ich: "grille", du: "grillst", er: "grillt", wir: "grillen", ihr: "grillt", sie: "grillen" },
                imperative: { du: "Grill!", ihr: "Grillt!" },
                exampleGerman: [
                    { text: "Im Sommer", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "grillen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "im Garten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In summer we grill in the garden.",
                clozeParts: ["Im Sommer ", " wir im Garten."],
                clozeAnswers: ["grillen"]
            } as Verb
        ],

        // --- UNTER-THEMA: Kino, Konzert, Fernsehen, Radio ---
        "Kino, Konzert, Fernsehen, Radio": [
            {
                id: createWordId("freizeit-unterhaltung-kino-001"),
                wordType: 'noun',
                german: "Kino",
                article: "das",
                plural: "Kinos",
                english: "cinema / movie theater",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gehen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ins Kino", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the cinema.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Kino"]
            } as Noun,
            {
                id: createWordId("freizeit-unterhaltung-kino-002"),
                wordType: 'noun',
                german: "Film",
                article: "der",
                plural: "Filme",
                english: "film / movie",
                exampleGerman: [
                    { text: "Wie", case: "none" },
                    { text: " ", case: "none" },
                    { text: "war", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "der Film", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "How was the film?",
                clozeParts: ["Wie war der ", "?"],
                clozeAnswers: ["Film"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-003"),
                wordType: 'noun',
                german: "Fernsehen",
                article: "das",
                plural: null, // oft ohne Plural
                english: "television",
                exampleGerman: [
                    { text: "Was", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gibt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "heute", case: "none" },
                    { text: " ", case: "none" },
                    { text: "im Fernsehen", case: "dativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What's on television today?",
                clozeParts: ["Was gibt es heute im ", "?"],
                clozeAnswers: ["Fernsehen"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-004"),
                wordType: 'verb',
                german: "fernsehen",
                english: "to watch TV",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "ferngesehen",
                presentConjugation: { ich: "sehe fern", du: "siehst fern", er: "sieht fern", wir: "sehen fern", ihr: "seht fern", sie: "sehen fern" },
                imperative: { du: "Sieh fern!", ihr: "Seht fern!" },
                exampleGerman: [
                    { text: "Siehst", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "viel", case: "none" },
                    { text: " ", case: "none" },
                    { text: "fern", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you watch a lot of TV?",
                clozeParts: ["Siehst du viel ", "?"],
                clozeAnswers: ["fern"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-005"),
                wordType: 'noun',
                german: "Programm",
                article: "das",
                plural: "Programme",
                english: "program / schedule",
                exampleGerman: [
                    { text: "Das Programm", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "beginnt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "um acht Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The program starts at eight o'clock.",
                clozeParts: ["Das ", " beginnt um acht Uhr."],
                clozeAnswers: ["Programm"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-006"),
                wordType: 'noun',
                german: "Konzert",
                article: "das",
                plural: "Konzerte",
                english: "concert",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gehen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "heute Abend", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "ins Konzert", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the concert tonight.",
                clozeParts: ["Wir gehen heute Abend ins ", "."],
                clozeAnswers: ["Konzert"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-007"),
                wordType: 'noun',
                german: "Musik", // Duplicate from Hobbys
                article: "die",
                plural: "Musiken",
                english: "music",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "höre", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Musik", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to listen to music.",
                clozeParts: ["Ich höre gern ", "."],
                clozeAnswers: ["Musik"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-008"),
                wordType: 'noun',
                german: "Band",
                article: "die",
                plural: "Bands",
                english: "band (music)",
                exampleGerman: [
                    { text: "Die Schülerband", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spielt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "heute um 9", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The student band plays today at 9.",
                clozeParts: ["Die Schüler", " spielt heute um 9."],
                clozeAnswers: ["band"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-009"),
                wordType: 'noun',
                german: "CD",
                article: "die",
                plural: "CDs",
                english: "CD",
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
                exampleEnglish: "We can give him a CD.",
                clozeParts: ["Wir können ihm eine ", " schenken."],
                clozeAnswers: ["CD"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-010"),
                wordType: 'noun',
                german: "CD-Player",
                article: "der",
                plural: "CD-Player",
                english: "CD player",
                exampleGerman: [
                    { text: "Mein CD-Player", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "kaputt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My CD player is broken.",
                clozeParts: ["Mein ", " ist kaputt."],
                clozeAnswers: ["CD-Player"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-011"),
                wordType: 'noun',
                german: "Radio",
                article: "das",
                plural: "Radios",
                english: "radio",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "höre", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Radio", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "am Morgen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I listen to the radio in the morning.",
                clozeParts: ["Ich höre ", " am Morgen."],
                clozeAnswers: ["Radio"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-012"),
                wordType: 'noun',
                german: "Lied",
                article: "das",
                plural: "Lieder",
                english: "song",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "mag", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "dieses Lied", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like this song.",
                clozeParts: ["Ich mag dieses ", "."],
                clozeAnswers: ["Lied"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-013"),
                wordType: 'noun',
                german: "Sänger/Sängerin",
                article: "der/die",
                plural: "Sänger/Sängerinnen",
                english: "singer (male/female)",
                exampleGerman: [
                    { text: "Die Sängerin", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "sehr bekannt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The singer (female) is very famous.",
                clozeParts: ["Die ", " ist sehr bekannt."],
                clozeAnswers: ["Sängerin"]
            },
            {
                id: createWordId("freizeit-unterhaltung-kino-014"),
                wordType: 'verb',
                german: "hören",
                english: "to hear / to listen",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gehört",
                presentConjugation: { ich: "höre", du: "hörst", er: "hört", wir: "hören", ihr: "hört", sie: "hören" },
                imperative: { du: "Hör!", ihr: "Hört!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "höre", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Musik", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to listen to music.",
                clozeParts: ["Ich ", " gern Musik."],
                clozeAnswers: ["höre"]
            }
        ],

        // --- UNTER-THEMA: Lesen ---
        "Lesen": [
            {
                id: createWordId("freizeit-unterhaltung-lesen-001"),
                wordType: 'noun',
                german: "Buch",
                article: "das",
                plural: "Bücher",
                english: "book",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "lese", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Buch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich lese ein ", "."],
                clozeAnswers: ["Buch"]
            },
            {
                id: createWordId("freizeit-unterhaltung-lesen-002"),
                wordType: 'noun',
                german: "Bibliothek",
                article: "die",
                plural: "Bibliotheken",
                english: "library",
                exampleGerman: [
                    { text: "In der Bibliothek", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "gibt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "dreißigtausend Bücher", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There are thirty thousand books in the library.",
                clozeParts: ["In der ", " gibt es dreißigtausend Bücher."],
                clozeAnswers: ["Bibliothek"]
            },
            {
                id: createWordId("freizeit-unterhaltung-lesen-003"),
                wordType: 'noun',
                german: "Zeitung",
                article: "die",
                plural: "Zeitungen",
                english: "newspaper",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "lese", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "die Zeitung", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "am Morgen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I read the newspaper in the morning.",
                clozeParts: ["Ich lese die ", " am Morgen."],
                clozeAnswers: ["Zeitung"]
            },
            {
                id: createWordId("freizeit-unterhaltung-lesen-004"),
                wordType: 'noun',
                german: "Zeitschrift",
                article: "die",
                plural: "Zeitschriften",
                english: "magazine",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "kaufe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine Zeitschrift", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am buying a magazine.",
                clozeParts: ["Ich kaufe eine ", "."],
                clozeAnswers: ["Zeitschrift"]
            },
            {
                id: createWordId("freizeit-unterhaltung-lesen-005"),
                wordType: 'noun',
                german: "Comic",
                article: "der", // oder das
                plural: "Comics",
                english: "comic",
                exampleGerman: [
                    { text: "Liest", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "Comics", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you like to read comics?",
                clozeParts: ["Liest du gern ", "?"],
                clozeAnswers: ["Comics"]
            },
            {
                id: createWordId("freizeit-unterhaltung-lesen-006"),
                wordType: 'noun',
                german: "Geschichte",
                article: "die",
                plural: "Geschichten",
                english: "story / history",
                exampleGerman: [
                    { text: "Kannst", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "die Geschichte", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "erzählen", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Can you tell the story?",
                clozeParts: ["Kannst du die ", " erzählen?"],
                clozeAnswers: ["Geschichte"]
            },
            {
                id: createWordId("freizeit-unterhaltung-lesen-007"),
                wordType: 'verb',
                german: "lesen", // Duplicate from Hobbys
                english: "to read",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelesen",
                presentConjugation: { ich: "lese", du: "liest", er: "liest", wir: "lesen", ihr: "lest", sie: "lesen" },
                imperative: { du: "Lies!", ihr: "Lest!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "lese", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Buch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich ", " ein Buch."],
                clozeAnswers: ["lese"]
            }
        ],

        // --- UNTER-THEMA: Sport ---
        "Sport": [
            {
                id: createWordId("freizeit-unterhaltung-sport-001"),
                wordType: 'noun',
                german: "Sport",
                article: "der",
                plural: null, // oft ohne Plural
                english: "sport(s) / P.E.",
                exampleGerman: [
                    { text: "Sport", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ist", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mein Lieblingsfach", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Sport is my favorite subject.",
                clozeParts: ["", " ist mein Lieblingsfach."],
                clozeAnswers: ["Sport"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-002"),
                wordType: 'noun',
                german: "Fußball",
                article: "der",
                plural: "Fußbälle", // (selten)
                english: "football / soccer",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spielen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Fußball", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We play football.",
                clozeParts: ["Wir spielen ", "."],
                clozeAnswers: ["Fußball"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-003"),
                wordType: 'noun',
                german: "Basketball",
                article: "der",
                plural: "Basketbälle", // (selten)
                english: "basketball",
                exampleGerman: [
                    { text: "Meine Hobbys", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Basketball und Musik", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My hobbies are basketball and music.",
                clozeParts: ["Meine Hobbys sind ", " und Musik."],
                clozeAnswers: ["Basketball"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-004"),
                wordType: 'verb',
                german: "schwimmen", // Duplicate from Hobbys
                english: "to swim",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geschwommen",
                presentConjugation: { ich: "schwimme", du: "schwimmst", er: "schwimmt", wir: "schwimmen", ihr: "schwimmt", sie: "schwimmen" },
                imperative: { du: "Schwimm!", ihr: "Schwimmt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schwimme", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "im Sommer", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to swim in the summer.",
                clozeParts: ["Ich ", " gern im Sommer."],
                clozeAnswers: ["schwimme"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-005"),
                wordType: 'verb',
                german: "laufen",
                english: "to run / to walk",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gelaufen",
                presentConjugation: { ich: "laufe", du: "läufst", er: "läuft", wir: "laufen", ihr: "lauft", sie: "laufen" },
                imperative: { du: "Lauf!", ihr: "Lauft!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "laufe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "jeden Morgen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I run every morning.",
                clozeParts: ["Ich ", " jeden Morgen."],
                clozeAnswers: ["laufe"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-006"),
                wordType: 'verb',
                german: "spielen", // Duplicate from Hobbys
                english: "to play",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                presentConjugation: { ich: "spiele", du: "spielst", er: "spielt", wir: "spielen", ihr: "spielt", sie: "spielen" },
                imperative: { du: "Spiel!", ihr: "Spielt!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spielen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Spiel", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are playing a game.",
                clozeParts: ["Wir ", " ein Spiel."],
                clozeAnswers: ["spielen"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-007"),
                wordType: 'noun',
                german: "Mannschaft",
                article: "die",
                plural: "Mannschaften",
                english: "team",
                exampleGerman: [
                    { text: "Unsere Mannschaft", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gewonnen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Our team has won.",
                clozeParts: ["Unsere ", " hat gewonnen."],
                clozeAnswers: ["Mannschaft"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-008"),
                wordType: 'noun',
                german: "Spieler/Spielerin",
                article: "der/die",
                plural: "Spieler/Spielerinnen",
                english: "player (male/female)",
                exampleGerman: [
                    { text: "Die Spieler", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "sind", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "auf dem Platz", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The players are on the field.",
                clozeParts: ["Die ", " sind auf dem Platz."],
                clozeAnswers: ["Spieler"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-009"),
                wordType: 'noun',
                german: "Ball",
                article: "der",
                plural: "Bälle",
                english: "ball",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spielen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mit dem Ball", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are playing with the ball.",
                clozeParts: ["Wir spielen mit dem ", "."],
                clozeAnswers: ["Ball"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-010"),
                wordType: 'verb',
                german: "gewinnen",
                english: "to win",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gewonnen",
                presentConjugation: { ich: "gewinne", du: "gewinnst", er: "gewinnt", wir: "gewinnen", ihr: "gewinnt", sie: "gewinnen" },
                imperative: { du: "Gewinn!", ihr: "Gewinnt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "möchte", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gewinnen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I want to win.",
                clozeParts: ["Ich möchte ", "."],
                clozeAnswers: ["gewinnen"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-011"),
                wordType: 'verb',
                german: "verlieren",
                english: "to lose",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verloren",
                presentConjugation: { ich: "verliere", du: "verlierst", er: "verliert", wir: "verlieren", ihr: "verliert", sie: "verlieren" },
                imperative: { du: "Verlier!", ihr: "Verliert!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "verloren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have lost.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["verloren"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-012"),
                wordType: 'noun',
                german: "Punkt",
                article: "der",
                plural: "Punkte",
                english: "point",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "haben", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "zehn Punkte", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We have ten points.",
                clozeParts: ["Wir haben zehn ", "."],
                clozeAnswers: ["Punkte"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-013"),
                wordType: 'noun',
                german: "Tennis",
                article: "das",
                plural: null, // oft ohne Plural
                english: "tennis",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spiele", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Tennis", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I play tennis.",
                clozeParts: ["Ich spiele ", "."],
                clozeAnswers: ["Tennis"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-014"),
                wordType: 'noun',
                german: "Tischtennis",
                article: "das",
                plural: null, // oft ohne Plural
                english: "table tennis",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "spielen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Tischtennis", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We play table tennis.",
                clozeParts: ["Wir spielen ", "."],
                clozeAnswers: ["Tischtennis"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-015"),
                wordType: "verb",
                german: "Rad fahren",
                english: "to cycle / to ride a bike",
                separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "Rad gefahren",
                presentConjugation: { ich: "fahre Rad", du: "fährst Rad", er: "fährt Rad", wir: "fahren Rad", ihr: "fahrt Rad", sie: "fahren Rad" },
                imperative: { du: "Fahr Rad!", ihr: "Fahrt Rad!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "fahre", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit dem Rad", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zur Schule", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I ride my bike to school.",
                clozeParts: ["Ich fahre mit dem ", " zur Schule."],
                clozeAnswers: ["Rad"]
            } as Verb,
            {
                id: createWordId("freizeit-unterhaltung-sport-016"),
                wordType: 'verb',
                german: "tanzen", // Duplicate from Hobbys
                english: "to dance",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getanzt",
                presentConjugation: { ich: "tanze", du: "tanzt", er: "tanzt", wir: "tanzen", ihr: "tanzt", sie: "tanzen" },
                imperative: { du: "Tanz!", ihr: "Tanzt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "tanze", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to dance.",
                clozeParts: ["Ich ", " gern."],
                clozeAnswers: ["tanze"]
            },
            {
                id: createWordId("freizeit-unterhaltung-sport-017"),
                wordType: 'verb',
                german: "wandern", // Duplicate from Hobbys
                english: "to hike",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gewandert",
                presentConjugation: { ich: "wandere", du: "wanderst", er: "wandert", wir: "wandern", ihr: "wandert", sie: "wandern" },
                imperative: { du: "Wandere!", ihr: "Wandert!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wandern", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in den Bergen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir ", " in den Bergen."],
                clozeAnswers: ["wandern"]
            }
        ],

        // --- UNTER-THEMA: Ausgehen, Club ---
        "Ausgehen, Club": [
            {
                id: createWordId("freizeit-unterhaltung-ausgehen-001"),
                wordType: 'noun',
                german: "Disco/Diskothek",
                article: "die",
                plural: "Discos/Diskotheken",
                english: "disco / discotheque",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "geht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "in die Diskothek", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She likes to go to the discotheque.",
                clozeParts: ["Sie geht gern in die ", "."],
                clozeAnswers: ["Diskothek"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ausgehen-002"),
                wordType: 'verb',
                german: "tanzen", // Duplicate
                english: "to dance",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getanzt",
                presentConjugation: { ich: "tanze", du: "tanzt", er: "tanzt", wir: "tanzen", ihr: "tanzt", sie: "tanzen" },
                imperative: { du: "Tanz!", ihr: "Tanzt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "tanze", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to dance.",
                clozeParts: ["Ich ", " gern."],
                clozeAnswers: ["tanze"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ausgehen-003"),
                wordType: 'verb',
                german: "treffen",
                english: "to meet",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getroffen",
                presentConjugation: { ich: "treffe", du: "triffst", er: "trifft", wir: "treffen", ihr: "trefft", sie: "treffen" },
                imperative: { du: "Triff!", ihr: "Trefft!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "treffen uns", case: "verb" }, // reflexiv
                    { text: " ", case: "none" },
                    { text: "im Café", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are meeting at the cafe.",
                clozeParts: ["Wir ", " uns im Café."],
                clozeAnswers: ["treffen"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ausgehen-004"),
                wordType: 'noun',
                german: "Party",
                article: "die",
                plural: "Partys",
                english: "party",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "machen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine Party", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are having a party.",
                clozeParts: ["Wir machen eine ", "."],
                clozeAnswers: ["Party"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ausgehen-005"),
                wordType: 'verb',
                german: "feiern",
                english: "to celebrate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefeiert",
                presentConjugation: { ich: "feiere", du: "feierst", er: "feiert", wir: "feiern", ihr: "feiert", sie: "feiern" },
                imperative: { du: "Feiere!", ihr: "Feiert!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "feiern", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meinen Geburtstag", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are celebrating my birthday.",
                clozeParts: ["Wir ", " meinen Geburtstag."],
                clozeAnswers: ["feiern"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ausgehen-006"),
                wordType: 'noun',
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
            },
            {
                id: createWordId("freizeit-unterhaltung-ausgehen-007"),
                wordType: 'verb',
                german: "einladen",
                english: "to invite",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingeladen",
                presentConjugation: { ich: "lade ein", du: "lädst ein", er: "lädt ein", wir: "laden ein", ihr: "ladet ein", sie: "laden ein" },
                imperative: { du: "Lade ein!", ihr: "Ladet ein!" },
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
                clozeParts: ["Ich ", " dich ", "."],
                clozeAnswers: ["lade", "ein"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ausgehen-008"),
                wordType: 'noun',
                german: "Café",
                article: "das",
                plural: "Cafés",
                english: "cafe",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "treffen uns", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im Café", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are meeting at the cafe.",
                clozeParts: ["Wir treffen uns im ", "."],
                clozeAnswers: ["Café"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ausgehen-009"),
                wordType: 'noun',
                german: "Restaurant",
                article: "das",
                plural: "Restaurants",
                english: "restaurant",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gehen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ins Restaurant", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the restaurant.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Restaurant"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ausgehen-010"),
                wordType: 'noun',
                german: "Kino", // Duplicate
                article: "das",
                plural: "Kinos",
                english: "cinema / movie theater",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "gehen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ins Kino", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are going to the cinema.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Kino"]
            }
        ],

        // --- UNTER-THEMA: Feste, Feiern ---
        "Feste, Feiern": [
            {
                id: createWordId("freizeit-unterhaltung-feste-001"),
                wordType: 'noun',
                german: "Fest",
                article: "das",
                plural: "Feste",
                english: "festival / party / celebration",
                exampleGerman: [
                    { text: "Das Fest", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "war", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "schön", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The festival was nice.",
                clozeParts: ["Das ", " war schön."],
                clozeAnswers: ["Fest"]
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-002"),
                wordType: 'verb',
                german: "feiern", // Duplicate
                english: "to celebrate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefeiert",
                presentConjugation: { ich: "feiere", du: "feierst", er: "feiert", wir: "feiern", ihr: "feiert", sie: "feiern" },
                imperative: { du: "Feiere!", ihr: "Feiert!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "feiern", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meinen Geburtstag", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are celebrating my birthday.",
                clozeParts: ["Wir ", " meinen Geburtstag."],
                clozeAnswers: ["feiern"]
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-003"),
                wordType: 'noun',
                german: "Party", // Duplicate
                article: "die",
                plural: "Partys",
                english: "party",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "machen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "eine Party", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are having a party.",
                clozeParts: ["Wir machen eine ", "."],
                clozeAnswers: ["Party"]
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-004"),
                wordType: 'verb',
                german: "einladen", // Duplicate
                english: "to invite",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingeladen",
                presentConjugation: { ich: "lade ein", du: "lädst ein", er: "lädt ein", wir: "laden ein", ihr: "ladet ein", sie: "laden ein" },
                imperative: { du: "Lade ein!", ihr: "Ladet ein!" },
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
                clozeParts: ["Ich ", " dich ", "."],
                clozeAnswers: ["lade", "ein"]
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-005"),
                wordType: 'noun',
                german: "Einladung", // Duplicate
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
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-006"),
                wordType: 'noun',
                german: "Geschenk",
                article: "das",
                plural: "Geschenke",
                english: "present / gift",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "habe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ein Geschenk", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "für dich", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have a present for you.",
                clozeParts: ["Ich habe ein ", " für dich."],
                clozeAnswers: ["Geschenk"]
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-007"),
                wordType: 'noun',
                german: "Weihnachten",
                article: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "Christmas",
                exampleGerman: [
                    { text: "Frohe Weihnachten", case: "akkusativ" }, // Feste Wendung
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Merry Christmas!",
                clozeParts: ["Frohe ", "!"],
                clozeAnswers: ["Weihnachten"]
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-008"),
                wordType: 'noun',
                german: "Ostern",
                article: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "Easter",
                exampleGerman: [
                    { text: "Zu Ostern", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "gibt", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "es", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Schokolade", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There is chocolate at Easter.",
                clozeParts: ["Zu ", " gibt es Schokolade."],
                clozeAnswers: ["Ostern"]
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-009"),
                wordType: 'noun',
                german: "Karneval",
                article: "der",
                plural: "Karnevale", // oder Karnevals
                english: "carnival",
                exampleGerman: [
                    { text: "An Karneval", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "verkleiden", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "uns", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We dress up for Carnival.",
                clozeParts: ["An ", " verkleiden wir uns."],
                clozeAnswers: ["Karneval"]
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-010"),
                wordType: 'noun',
                german: "Geburtstag",
                article: "der",
                plural: "Geburtstage",
                english: "birthday",
                exampleGerman: [
                    { text: "Wann", case: "none" },
                    { text: " ", case: "none" },
                    { text: "hast", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "du", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "Geburtstag", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "When is your birthday?",
                clozeParts: ["Wann hast du ", "?"],
                clozeAnswers: ["Geburtstag"]
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-011"),
                wordType: 'noun',
                german: "Silvester",
                article: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "New Year's Eve",
                exampleGerman: [
                    { text: "An Silvester", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "machen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "ein Feuerwerk", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "On New Year's Eve we have fireworks.",
                clozeParts: ["An ", " machen wir ein Feuerwerk."],
                clozeAnswers: ["Silvester"]
            },
            {
                id: createWordId("freizeit-unterhaltung-feste-012"),
                wordType: 'noun',
                german: "Feuerwerk",
                article: "das",
                plural: "Feuerwerke",
                english: "fireworks",
                exampleGerman: [
                    { text: "Das Feuerwerk", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "war", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "schön", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The fireworks were beautiful.",
                clozeParts: ["Das ", " war schön."],
                clozeAnswers: ["Feuerwerk"]
            }
        ],

        // --- UNTER-THEMA: Ferien ---
        "Ferien": [
            {
                id: createWordId("freizeit-unterhaltung-ferien-001"),
                wordType: 'noun',
                german: "Ferien",
                article: "die", // Plural
                plural: "Ferien", // Plural only
                english: "holidays / vacation (school)",
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "macht", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "ihr", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "in den Ferien", case: "dativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What are you (plural) doing during the holidays?",
                clozeParts: ["Was macht ihr in den ", "?"],
                clozeAnswers: ["Ferien"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-002"),
                wordType: 'noun',
                german: "Urlaub",
                article: "der",
                plural: "Urlaube",
                english: "holiday / vacation",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "machen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Urlaub", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "in Italien", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are on holiday in Italy.",
                clozeParts: ["Wir machen ", " in Italien."],
                clozeAnswers: ["Urlaub"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-003"),
                wordType: 'noun',
                german: "Reise",
                article: "die",
                plural: "Reisen",
                english: "journey / trip",
                exampleGerman: [
                    { text: "Die Reise", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "nach Spanien", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "war", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "toll", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The trip to Spain was great.",
                clozeParts: ["Die ", " nach Spanien war toll."],
                clozeAnswers: ["Reise"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-004"),
                wordType: 'verb',
                german: "reisen", // Duplicate
                english: "to travel",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gereist",
                presentConjugation: { ich: "reise", du: "reist", er: "reist", wir: "reisen", ihr: "reist", sie: "reisen" },
                imperative: { du: "Reis!", ihr: "Reist!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "reisen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "oft", case: "none" },
                    { text: " ", case: "none" },
                    { text: "nach Frankreich", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We often travel to France.",
                clozeParts: ["Wir ", " oft nach Frankreich."],
                clozeAnswers: ["reisen"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-005"),
                wordType: 'noun',
                german: "Ausflug",
                article: "der",
                plural: "Ausflüge",
                english: "trip / excursion",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "machen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "mit der Schule", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "einen Ausflug", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are going on a trip with the school.",
                clozeParts: ["Wir machen mit der Schule einen ", "."],
                clozeAnswers: ["Ausflug"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-006"),
                wordType: 'verb',
                german: "wandern", // Duplicate
                english: "to hike",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gewandert",
                presentConjugation: { ich: "wandere", du: "wanderst", er: "wandert", wir: "wandern", ihr: "wandert", sie: "wandern" },
                imperative: { du: "Wandere!", ihr: "Wandert!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wandern", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in den Bergen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir ", " in den Bergen."],
                clozeAnswers: ["wandern"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-007"),
                wordType: 'verb',
                german: "schwimmen", // Duplicate
                english: "to swim",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geschwommen",
                presentConjugation: { ich: "schwimme", du: "schwimmst", er: "schwimmt", wir: "schwimmen", ihr: "schwimmt", sie: "schwimmen" },
                imperative: { du: "Schwimm!", ihr: "Schwimmt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schwimme", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "im Sommer", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to swim in the summer.",
                clozeParts: ["Ich ", " gern im Sommer."],
                clozeAnswers: ["schwimme"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-008"),
                wordType: 'verb',
                german: "zelten",
                english: "to camp (in a tent)",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gezeltet",
                presentConjugation: { ich: "zelte", du: "zeltest", er: "zeltet", wir: "zelten", ihr: "zeltet", sie: "zelten" },
                imperative: { du: "Zelte!", ihr: "Zeltet!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schlafen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im Zelt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We sleep in the tent.", // Example uses "schlafen im Zelt"
                clozeParts: ["Wir ", " im Zelt."], // Cloze for "schlafen"
                clozeAnswers: ["schlafen"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-009"),
                wordType: 'noun',
                german: "Camping",
                article: "das",
                plural: null, // oft ohne Plural
                english: "camping",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "machen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "Camping", case: "akkusativ" },
                    { text: " ", case: "none" },
                    { text: "am See", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are camping at the lake.",
                clozeParts: ["Wir machen ", " am See."],
                clozeAnswers: ["Camping"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-010"),
                wordType: 'noun',
                german: "Hotel",
                article: "das",
                plural: "Hotels",
                english: "hotel",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "schlafen", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im Hotel", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are sleeping in the hotel.",
                clozeParts: ["Wir schlafen im ", "."],
                clozeAnswers: ["Hotel"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-011"),
                wordType: 'noun',
                german: "Koffer",
                article: "der",
                plural: "Koffer",
                english: "suitcase",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "packe", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "meinen Koffer", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I am packing my suitcase.",
                clozeParts: ["Ich packe meinen ", "."],
                clozeAnswers: ["Koffer"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-012"),
                wordType: 'noun',
                german: "Fotoapparat",
                article: "der",
                plural: "Fotoapparate",
                english: "camera",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "hat", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "einen teuren Fotoapparat", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She has an expensive camera.",
                clozeParts: ["Sie hat einen teuren ", "."],
                clozeAnswers: ["Fotoapparat"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-013"),
                wordType: 'verb',
                german: "fotografieren", // Duplicate
                english: "to photograph",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "fotografiert",
                presentConjugation: { ich: "fotografiere", du: "fotografierst", er: "fotografiert", wir: "fotografieren", ihr: "fotografiert", sie: "fotografieren" },
                imperative: { du: "Fotografier!", ihr: "Fotografiert!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "fotografiere", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "gern", case: "none" },
                    { text: " ", case: "none" },
                    { text: "im Urlaub", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like to take photos on holiday.",
                clozeParts: ["Ich ", " gern im Urlaub."],
                clozeAnswers: ["fotografiere"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-014"),
                wordType: 'noun',
                german: "Sonne",
                article: "die",
                plural: "Sonnen",
                english: "sun",
                exampleGerman: [
                    { text: "Die Sonne", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "scheint", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "im Urlaub", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The sun shines on holiday.",
                clozeParts: ["Die ", " scheint im Urlaub."],
                clozeAnswers: ["Sonne"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-015"),
                wordType: 'noun',
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
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-016"),
                wordType: 'noun',
                german: "See",
                article: "der",
                plural: "Seen",
                english: "lake",
                exampleGerman: [
                    { text: "Am Wochenende", case: "dativ" },
                    { text: " ", case: "none" },
                    { text: "fahren", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "an den See", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "At the weekend we are going to the lake.",
                clozeParts: ["Am Wochenende fahren wir an den ", "."],
                clozeAnswers: ["See"]
            },
            {
                id: createWordId("freizeit-unterhaltung-ferien-017"),
                wordType: 'noun',
                german: "Berge",
                article: "die", // Plural
                plural: "Berge", // Plural only
                english: "mountains",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " ", case: "none" },
                    { text: "wandern", case: "verb" },
                    { text: " ", case: "none" },
                    { text: "in den Bergen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir wandern in den ", "."],
                clozeAnswers: ["Bergen"]
            }
        ]
    }
});