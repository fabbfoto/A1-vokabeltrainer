// packages/trainer-themen/vokabular_freizeit_unterhaltung.ts

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary';
import { createWordId, createVocabulary } from './shared/types/vocabulary';

export const vokabularFreizeitUnterhaltung: VocabularyStructure = createVocabulary({
    "Freizeit und Unterhaltung": {

        // --- UNTER-THEMA: Hobbys/Interessen ---
        "Hobbys/Interessen": [
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Hobby",
                article: "das",
                plural: "Hobbys",
                english: "hobby",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My hobby is football.",
                clozeParts: ["Mein ", " ist Fußball."],
                clozeAnswers: ["Hobby"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "basteln",
                english: "to do crafts / to tinker",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gebastelt",
                presentConjugation: { 
                    ich: "bastle", 
                    du: "bastelst", 
                    er: "bastelt", 
                    wir: "basteln", 
                    ihr: "bastelt", 
                    sie: "basteln" 
                },
                imperative: { 
                    du: "Bastle!", 
                    ihr: "Bastelt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" }, // Nominalisiertes Verb
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Crafting is my hobby.",
                clozeParts: ["", " ist mein Hobby."],
                clozeAnswers: ["Basteln"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "malen",
                english: "to paint / to draw",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gemalt",
                presentConjugation: { 
                    ich: "male", 
                    du: "malst", 
                    er: "malt", 
                    wir: "malen", 
                    ihr: "malt", 
                    sie: "malen" 
                },
                imperative: { 
                    du: "Mal!", 
                    ihr: "Malt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to paint pictures.",
                clozeParts: ["Ich ", " gern Bilder."],
                clozeAnswers: ["male"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "sammeln",
                english: "to collect",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesammelt",
                presentConjugation: { 
                    ich: "sammle", 
                    du: "sammelst", 
                    er: "sammelt", 
                    wir: "sammeln", 
                    ihr: "sammelt", 
                    sie: "sammeln" 
                },
                imperative: { 
                    du: "Sammle!", 
                    ihr: "Sammelt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I collect stamps.",
                clozeParts: ["Ich ", " Briefmarken."],
                clozeAnswers: ["sammle"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Musik",
                article: "die",
                plural: null, // (selten, meist ohne Plural)
                english: "music",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My hobbies are basketball and music.",
                clozeParts: ["Meine Hobbys sind Basketball und ", "."],
                clozeAnswers: ["Musik"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "spielen",
                english: "to play",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                presentConjugation: { 
                    ich: "spiele", 
                    du: "spielst", 
                    er: "spielt", 
                    wir: "spielen", 
                    ihr: "spielt", 
                    sie: "spielen" 
                },
                imperative: { 
                    du: "Spiel!", 
                    ihr: "Spielt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are playing a game.",
                clozeParts: ["Wir ", " ein Spiel."],
                clozeAnswers: ["spielen"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "tanzen",
                english: "to dance",
                separable: false,
                auxiliaryVerb: "haben", // oder sein
                pastParticiple: "getanzt",
                presentConjugation: { 
                    ich: "tanze", 
                    du: "tanzt", 
                    er: "tanzt", 
                    wir: "tanzen", 
                    ihr: "tanzt", 
                    sie: "tanzen" 
                },
                imperative: { 
                    du: "Tanz!", 
                    ihr: "Tanzt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to dance.",
                clozeParts: ["Ich ", " gern."],
                clozeAnswers: ["tanze"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "fotografieren",
                english: "to photograph",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "fotografiert",
                presentConjugation: { 
                    ich: "fotografiere", 
                    du: "fotografierst", 
                    er: "fotografiert", 
                    wir: "fotografieren", 
                    ihr: "fotografiert", 
                    sie: "fotografieren" 
                },
                imperative: { 
                    du: "Fotografier!", 
                    ihr: "Fotografiert!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to take photos on holiday.",
                clozeParts: ["Ich ", " gern im Urlaub."],
                clozeAnswers: ["fotografiere"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "zeichnen",
                english: "to draw",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gezeichnet",
                presentConjugation: { 
                    ich: "zeichne", 
                    du: "zeichnest", 
                    er: "zeichnet", 
                    wir: "zeichnen", 
                    ihr: "zeichnet", 
                    sie: "zeichnen" 
                },
                imperative: { 
                    du: "Zeichne!", 
                    ihr: "Zeichnet!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I am drawing a picture.",
                clozeParts: ["Ich ", " ein Bild."],
                clozeAnswers: ["zeichne"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "lesen",
                english: "to read",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelesen",
                presentConjugation: { 
                    ich: "lese", 
                    du: "liest", 
                    er: "liest", 
                    wir: "lesen", 
                    ihr: "lest", 
                    sie: "lesen" 
                },
                imperative: { 
                    du: "Lies!", 
                    ihr: "Lest!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich ", " ein Buch."],
                clozeAnswers: ["lese"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "schreiben",
                english: "to write",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschrieben",
                presentConjugation: { 
                    ich: "schreibe", 
                    du: "schreibst", 
                    er: "schreibt", 
                    wir: "schreiben", 
                    ihr: "schreibt", 
                    sie: "schreiben" 
                },
                imperative: { 
                    du: "Schreib!", 
                    ihr: "Schreibt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to write stories.",
                clozeParts: ["Ich ", " gern Geschichten."],
                clozeAnswers: ["schreibe"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "schwimmen",
                english: "to swim",
                separable: false,
                auxiliaryVerb: "sein", // oder haben
                pastParticiple: "geschwommen",
                presentConjugation: { 
                    ich: "schwimme", 
                    du: "schwimmst", 
                    er: "schwimmt", 
                    wir: "schwimmen", 
                    ihr: "schwimmt", 
                    sie: "schwimmen" 
                },
                imperative: { 
                    du: "Schwimm!", 
                    ihr: "Schwimmt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to swim in the summer.",
                clozeParts: ["Ich ", " gern im Sommer."],
                clozeAnswers: ["schwimme"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "singen",
                english: "to sing",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesungen",
                presentConjugation: { 
                    ich: "singe", 
                    du: "singst", 
                    er: "singt", 
                    wir: "singen", 
                    ihr: "singt", 
                    sie: "singen" 
                },
                imperative: { 
                    du: "Sing!", 
                    ihr: "Singt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I sing in a band.",
                clozeParts: ["Ich ", " in einer Band."],
                clozeAnswers: ["singe"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "wandern",
                english: "to hike",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gewandert",
                presentConjugation: { 
                    ich: "wandere", 
                    du: "wanderst", 
                    er: "wandert", 
                    wir: "wandern", 
                    ihr: "wandert", 
                    sie: "wandern" 
                },
                imperative: { 
                    du: "Wandere!", 
                    ihr: "Wandert!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir ", " in den Bergen."],
                clozeAnswers: ["wandern"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "reisen",
                english: "to travel",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gereist",
                presentConjugation: { 
                    ich: "reise", 
                    du: "reist", 
                    er: "reist", 
                    wir: "reisen", 
                    ihr: "reist", 
                    sie: "reisen" 
                },
                imperative: { 
                    du: "Reis!", 
                    ihr: "Reist!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We often travel to France.",
                clozeParts: ["Wir ", " oft nach Frankreich."],
                clozeAnswers: ["reisen"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "kochen",
                english: "to cook",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekocht",
                presentConjugation: { 
                    ich: "koche", 
                    du: "kochst", 
                    er: "kocht", 
                    wir: "kochen", 
                    ihr: "kocht", 
                    sie: "kochen" 
                },
                imperative: { 
                    du: "Koch!", 
                    ihr: "Kocht!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My mother is cooking in the kitchen.",
                clozeParts: ["In der Küche ", " meine Mutter."],
                clozeAnswers: ["kocht"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "backen",
                english: "to bake",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gebacken",
                presentConjugation: { 
                    ich: "backe", 
                    du: "bäckst", 
                    er: "bäckt", 
                    wir: "backen", 
                    ihr: "backt", 
                    sie: "backen" 
                },
                imperative: { 
                    du: "Back!", 
                    ihr: "Backt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I am baking a cake.",
                clozeParts: ["Ich ", " einen Kuchen."],
                clozeAnswers: ["backe"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "grillen",
                english: "to grill / to barbecue",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegrillt",
                presentConjugation: { 
                    ich: "grille", 
                    du: "grillst", 
                    er: "grillt", 
                    wir: "grillen", 
                    ihr: "grillt", 
                    sie: "grillen" 
                },
                imperative: { 
                    du: "Grill!", 
                    ihr: "Grillt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "In summer we grill in the garden.",
                clozeParts: ["Im Sommer ", " wir im Garten."],
                clozeAnswers: ["grillen"]
            },
            {
                id: createWordId("freizeit-unterhaltung-hobbys-xxx"),
                wordType: "verb",
                german: "Rad fahren",
                english: "to cycle / to ride a bike",
                separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "ist Rad gefahren",
                presentConjugation: { ich: "fahre Rad", du: "fährst Rad", er: "fährt Rad", wir: "fahren Rad", ihr: "fahrt Rad", sie: "fahren Rad" },
                imperative: { du: "Fahr Rad!", ihr: "Fahrt Rad!" },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I ride my bike to school.",
                clozeParts: ["Ich fahre mit dem ", " zur Schule."],
                clozeAnswers: ["Rad"]
            } as Verb
        ],

        // --- UNTER-THEMA: Kino/Konzert/Fernsehen/Radio ---
        "Kino/Konzert/Fernsehen/Radio": [
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Kino",
                article: "das",
                plural: "Kinos",
                english: "cinema / movie theater",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are going to the cinema.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Kino"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Film",
                article: "der",
                plural: "Filme",
                english: "film / movie",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "How was the film?",
                clozeParts: ["Wie war der ", "?"],
                clozeAnswers: ["Film"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Fernsehen",
                article: "das",
                plural: null, // oft ohne Plural
                english: "television",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "What's on television today?",
                clozeParts: ["Was gibt es heute im ", "?"],
                clozeAnswers: ["Fernsehen"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "fernsehen",
                english: "to watch TV",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "ferngesehen",
                presentConjugation: { 
                    ich: "sehe fern", 
                    du: "siehst fern", 
                    er: "sieht fern", 
                    wir: "sehen fern", 
                    ihr: "seht fern", 
                    sie: "sehen fern" 
                },
                imperative: { 
                    du: "Sieh fern!", 
                    ihr: "Seht fern!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Do you watch a lot of TV?",
                clozeParts: ["Siehst du viel ", "?"],
                clozeAnswers: ["fern"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Programm",
                article: "das",
                plural: "Programme",
                english: "program / schedule",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The program starts at eight o'clock.",
                clozeParts: ["Das ", " beginnt um acht Uhr."],
                clozeAnswers: ["Programm"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Konzert",
                article: "das",
                plural: "Konzerte",
                english: "concert",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are going to the concert tonight.",
                clozeParts: ["Wir gehen heute Abend ins ", "."],
                clozeAnswers: ["Konzert"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Musik", // Duplicate from Hobbys
                article: "die",
                plural: null,
                english: "music",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to listen to music.",
                clozeParts: ["Ich höre gern ", "."],
                clozeAnswers: ["Musik"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Band",
                article: "die",
                plural: "Bands",
                english: "band (music)",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The student band plays today at 9.",
                clozeParts: ["Die Schüler", " spielt heute um 9."],
                clozeAnswers: ["band"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "CD",
                article: "die",
                plural: "CDs",
                english: "CD",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We can give him a CD.",
                clozeParts: ["Wir können ihm eine ", " schenken."],
                clozeAnswers: ["CD"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "CD-Player",
                article: "der",
                plural: "CD-Player",
                english: "CD player",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My CD player is broken.",
                clozeParts: ["Mein ", " ist kaputt."],
                clozeAnswers: ["CD-Player"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Radio",
                article: "das",
                plural: "Radios",
                english: "radio",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I listen to the radio in the morning.",
                clozeParts: ["Ich höre ", " am Morgen."],
                clozeAnswers: ["Radio"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Lied",
                article: "das",
                plural: "Lieder",
                english: "song",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like this song.",
                clozeParts: ["Ich mag dieses ", "."],
                clozeAnswers: ["Lied"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Sänger/Sängerin",
                article: "der",
                plural: "Sänger/Sängerinnen",
                english: "singer (male/female)",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The singer (female) is very famous.",
                clozeParts: ["Die ", " ist sehr bekannt."],
                clozeAnswers: ["Sängerin"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "hören",
                english: "to hear / to listen",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gehört",
                presentConjugation: { 
                    ich: "höre", 
                    du: "hörst", 
                    er: "hört", 
                    wir: "hören", 
                    ihr: "hört", 
                    sie: "hören" 
                },
                imperative: { 
                    du: "Hör!", 
                    ihr: "Hört!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to listen to music.",
                clozeParts: ["Ich ", " gern Musik."],
                clozeAnswers: ["höre"]
            }
        ],

        // --- UNTER-THEMA: Lesen ---
        "Lesen": [
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Buch",
                article: "das",
                plural: "Bücher",
                english: "book",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich lese ein ", "."],
                clozeAnswers: ["Buch"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Bibliothek",
                article: "die",
                plural: "Bibliotheken",
                english: "library",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "There are thirty thousand books in the library.",
                clozeParts: ["In der ", " gibt es dreißigtausend Bücher."],
                clozeAnswers: ["Bibliothek"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Zeitung",
                article: "die",
                plural: "Zeitungen",
                english: "newspaper",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I read the newspaper in the morning.",
                clozeParts: ["Ich lese die ", " am Morgen."],
                clozeAnswers: ["Zeitung"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Zeitschrift",
                article: "die",
                plural: "Zeitschriften",
                english: "magazine",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I am buying a magazine.",
                clozeParts: ["Ich kaufe eine ", "."],
                clozeAnswers: ["Zeitschrift"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Comic",
                article: "der", // oder das
                plural: "Comics",
                english: "comic",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Do you like to read comics?",
                clozeParts: ["Liest du gern ", "?"],
                clozeAnswers: ["Comics"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Geschichte",
                article: "die",
                plural: "Geschichten",
                english: "story / history",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Can you tell the story?",
                clozeParts: ["Kannst du die ", " erzählen?"],
                clozeAnswers: ["Geschichte"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "lesen", // Duplicate from Hobbys
                english: "to read",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelesen",
                presentConjugation: { 
                    ich: "lese", 
                    du: "liest", 
                    er: "liest", 
                    wir: "lesen", 
                    ihr: "lest", 
                    sie: "lesen" 
                },
                imperative: { 
                    du: "Lies!", 
                    ihr: "Lest!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich ", " ein Buch."],
                clozeAnswers: ["lese"]
            }
        ],

        // --- UNTER-THEMA: Sport ---
        "Sport": [
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Sport",
                article: "der",
                plural: null, // oft ohne Plural
                english: "sport(s) / P.E.",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Sport is my favorite subject.",
                clozeParts: ["", " ist mein Lieblingsfach."],
                clozeAnswers: ["Sport"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Fußball",
                article: "der",
                plural: "Fußbälle", // (selten)
                english: "football / soccer",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We play football.",
                clozeParts: ["Wir spielen ", "."],
                clozeAnswers: ["Fußball"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Basketball",
                article: "der",
                plural: "Basketbälle", // (selten)
                english: "basketball",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My hobbies are basketball and music.",
                clozeParts: ["Meine Hobbys sind ", " und Musik."],
                clozeAnswers: ["Basketball"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "schwimmen", // Duplicate from Hobbys
                english: "to swim",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geschwommen",
                presentConjugation: { 
                    ich: "schwimme", 
                    du: "schwimmst", 
                    er: "schwimmt", 
                    wir: "schwimmen", 
                    ihr: "schwimmt", 
                    sie: "schwimmen" 
                },
                imperative: { 
                    du: "Schwimm!", 
                    ihr: "Schwimmt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to swim in the summer.",
                clozeParts: ["Ich ", " gern im Sommer."],
                clozeAnswers: ["schwimme"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "laufen",
                english: "to run / to walk",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gelaufen",
                presentConjugation: { 
                    ich: "laufe", 
                    du: "läufst", 
                    er: "läuft", 
                    wir: "laufen", 
                    ihr: "lauft", 
                    sie: "laufen" 
                },
                imperative: { 
                    du: "Lauf!", 
                    ihr: "Lauft!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I run every morning.",
                clozeParts: ["Ich ", " jeden Morgen."],
                clozeAnswers: ["laufe"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "spielen", // Duplicate from Hobbys
                english: "to play",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                presentConjugation: { 
                    ich: "spiele", 
                    du: "spielst", 
                    er: "spielt", 
                    wir: "spielen", 
                    ihr: "spielt", 
                    sie: "spielen" 
                },
                imperative: { 
                    du: "Spiel!", 
                    ihr: "Spielt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are playing a game.",
                clozeParts: ["Wir ", " ein Spiel."],
                clozeAnswers: ["spielen"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Mannschaft",
                article: "die",
                plural: "Mannschaften",
                english: "team",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Our team has won.",
                clozeParts: ["Unsere ", " hat gewonnen."],
                clozeAnswers: ["Mannschaft"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Spieler/Spielerin",
                article: "der",
                plural: "Spieler/Spielerinnen",
                english: "player (male/female)",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The players are on the field.",
                clozeParts: ["Die ", " sind auf dem Platz."],
                clozeAnswers: ["Spieler"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Ball",
                article: "der",
                plural: "Bälle",
                english: "ball",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are playing with the ball.",
                clozeParts: ["Wir spielen mit dem ", "."],
                clozeAnswers: ["Ball"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "gewinnen",
                english: "to win",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gewonnen",
                presentConjugation: { 
                    ich: "gewinne", 
                    du: "gewinnst", 
                    er: "gewinnt", 
                    wir: "gewinnen", 
                    ihr: "gewinnt", 
                    sie: "gewinnen" 
                },
                imperative: { 
                    du: "Gewinn!", 
                    ihr: "Gewinnt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I want to win.",
                clozeParts: ["Ich möchte ", "."],
                clozeAnswers: ["gewinnen"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "verlieren",
                english: "to lose",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verloren",
                presentConjugation: { 
                    ich: "verliere", 
                    du: "verlierst", 
                    er: "verliert", 
                    wir: "verlieren", 
                    ihr: "verliert", 
                    sie: "verlieren" 
                },
                imperative: { 
                    du: "Verlier!", 
                    ihr: "Verliert!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I have lost.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["verloren"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Punkt",
                article: "der",
                plural: "Punkte",
                english: "point",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We have ten points.",
                clozeParts: ["Wir haben zehn ", "."],
                clozeAnswers: ["Punkte"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Tennis",
                article: "das",
                plural: null, // oft ohne Plural
                english: "tennis",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I play tennis.",
                clozeParts: ["Ich spiele ", "."],
                clozeAnswers: ["Tennis"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Tischtennis",
                article: "das",
                plural: null, // oft ohne Plural
                english: "table tennis",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We play table tennis.",
                clozeParts: ["Wir spielen ", "."],
                clozeAnswers: ["Tischtennis"]
            },
            {
                id: createWordId("freizeit-unterhaltung-hobbys-xxx"),
                wordType: "verb", // war vorher wortart: "Phrase"
                german: "Rad fahren",
                english: "to cycle / to ride a bike",
                separable: true,
                auxiliaryVerb: "sein",
                pastParticiple: "ist Rad gefahren",
                presentConjugation: { ich: "fahre Rad", du: "fährst Rad", er: "fährt Rad", wir: "fahren Rad", ihr: "fahrt Rad", sie: "fahren Rad" },
                imperative: { du: "Fahr Rad!", ihr: "Fahrt Rad!" },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I ride my bike to school.",
                clozeParts: ["Ich fahre mit dem ", " zur Schule."],
                clozeAnswers: ["Rad"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "tanzen", // Duplicate from Hobbys
                english: "to dance",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getanzt",
                presentConjugation: { 
                    ich: "tanze", 
                    du: "tanzt", 
                    er: "tanzt", 
                    wir: "tanzen", 
                    ihr: "tanzt", 
                    sie: "tanzen" 
                },
                imperative: { 
                    du: "Tanz!", 
                    ihr: "Tanzt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to dance.",
                clozeParts: ["Ich ", " gern."],
                clozeAnswers: ["tanze"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "wandern", // Duplicate from Hobbys
                english: "to hike",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gewandert",
                presentConjugation: { 
                    ich: "wandere", 
                    du: "wanderst", 
                    er: "wandert", 
                    wir: "wandern", 
                    ihr: "wandert", 
                    sie: "wandern" 
                },
                imperative: { 
                    du: "Wandere!", 
                    ihr: "Wandert!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir ", " in den Bergen."],
                clozeAnswers: ["wandern"]
            }
        ],

        // --- UNTER-THEMA: Ausgehen (Disco) ---
        "Ausgehen (Disco)": [
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Disco/Diskothek",
                article: "die",
                plural: "Discos/Diskotheken",
                english: "disco / discotheque",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "She likes to go to the discotheque.",
                clozeParts: ["Sie geht gern in die ", "."],
                clozeAnswers: ["Diskothek"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "tanzen", // Duplicate
                english: "to dance",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getanzt",
                presentConjugation: { 
                    ich: "tanze", 
                    du: "tanzt", 
                    er: "tanzt", 
                    wir: "tanzen", 
                    ihr: "tanzt", 
                    sie: "tanzen" 
                },
                imperative: { 
                    du: "Tanz!", 
                    ihr: "Tanzt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to dance.",
                clozeParts: ["Ich ", " gern."],
                clozeAnswers: ["tanze"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "treffen",
                english: "to meet",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getroffen",
                presentConjugation: { 
                    ich: "treffe", 
                    du: "triffst", 
                    er: "trifft", 
                    wir: "treffen", 
                    ihr: "trefft", 
                    sie: "treffen" 
                },
                imperative: { 
                    du: "Triff!", 
                    ihr: "Trefft!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }, // reflexiv
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are meeting at the cafe.",
                clozeParts: ["Wir ", " uns im Café."],
                clozeAnswers: ["treffen"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Party",
                article: "die",
                plural: "Partys",
                english: "party",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are having a party.",
                clozeParts: ["Wir machen eine ", "."],
                clozeAnswers: ["Party"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "feiern",
                english: "to celebrate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefeiert",
                presentConjugation: { 
                    ich: "feiere", 
                    du: "feierst", 
                    er: "feiert", 
                    wir: "feiern", 
                    ihr: "feiert", 
                    sie: "feiern" 
                },
                imperative: { 
                    du: "Feiere!", 
                    ihr: "Feiert!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are celebrating my birthday.",
                clozeParts: ["Wir ", " meinen Geburtstag."],
                clozeAnswers: ["feiern"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Einladung",
                article: "die",
                plural: "Einladungen",
                english: "invitation",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "This is an invitation to the birthday party.",
                clozeParts: ["Das ist eine ", " zur Geburtstagsparty."],
                clozeAnswers: ["Einladung"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "einladen",
                english: "to invite",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingeladen",
                presentConjugation: { 
                    ich: "lade ein", 
                    du: "lädst ein", 
                    er: "lädt ein", 
                    wir: "laden ein", 
                    ihr: "ladet ein", 
                    sie: "laden ein" 
                },
                imperative: { 
                    du: "Lade ein!", 
                    ihr: "Ladet ein!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I invite you.",
                clozeParts: ["Ich ", " dich ", "."],
                clozeAnswers: ["lade", "ein"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Café",
                article: "das",
                plural: "Cafés",
                english: "cafe",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are meeting at the cafe.",
                clozeParts: ["Wir treffen uns im ", "."],
                clozeAnswers: ["Café"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Restaurant",
                article: "das",
                plural: "Restaurants",
                english: "restaurant",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are going to the restaurant.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Restaurant"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Kino", // Duplicate
                article: "das",
                plural: "Kinos",
                english: "cinema / movie theater",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are going to the cinema.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Kino"]
            }
        ],

        // --- UNTER-THEMA: Feste/Feiern ---
        "Feste/Feiern": [
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Fest",
                article: "das",
                plural: "Feste",
                english: "festival / party / celebration",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The festival was nice.",
                clozeParts: ["Das ", " war schön."],
                clozeAnswers: ["Fest"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "feiern", // Duplicate
                english: "to celebrate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefeiert",
                presentConjugation: { 
                    ich: "feiere", 
                    du: "feierst", 
                    er: "feiert", 
                    wir: "feiern", 
                    ihr: "feiert", 
                    sie: "feiern" 
                },
                imperative: { 
                    du: "Feiere!", 
                    ihr: "Feiert!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are celebrating my birthday.",
                clozeParts: ["Wir ", " meinen Geburtstag."],
                clozeAnswers: ["feiern"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Party", // Duplicate
                article: "die",
                plural: "Partys",
                english: "party",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are having a party.",
                clozeParts: ["Wir machen eine ", "."],
                clozeAnswers: ["Party"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "einladen", // Duplicate
                english: "to invite",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingeladen",
                presentConjugation: { 
                    ich: "lade ein", 
                    du: "lädst ein", 
                    er: "lädt ein", 
                    wir: "laden ein", 
                    ihr: "ladet ein", 
                    sie: "laden ein" 
                },
                imperative: { 
                    du: "Lade ein!", 
                    ihr: "Ladet ein!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I invite you.",
                clozeParts: ["Ich ", " dich ", "."],
                clozeAnswers: ["lade", "ein"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Einladung", // Duplicate
                article: "die",
                plural: "Einladungen",
                english: "invitation",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "This is an invitation to the birthday party.",
                clozeParts: ["Das ist eine ", " zur Geburtstagsparty."],
                clozeAnswers: ["Einladung"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Geschenk",
                article: "das",
                plural: "Geschenke",
                english: "present / gift",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I have a present for you.",
                clozeParts: ["Ich habe ein ", " für dich."],
                clozeAnswers: ["Geschenk"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Weihnachten",
                article: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "Christmas",
                exampleGerman: [
                    { text: "", case: "none" }, // Feste Wendung
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Merry Christmas!",
                clozeParts: ["Frohe ", "!"],
                clozeAnswers: ["Weihnachten"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Ostern",
                article: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "Easter",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "There is chocolate at Easter.",
                clozeParts: ["Zu ", " gibt es Schokolade."],
                clozeAnswers: ["Ostern"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Karneval",
                article: "der",
                plural: "Karnevale", // oder Karnevals
                english: "carnival",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We dress up for Carnival.",
                clozeParts: ["An ", " verkleiden wir uns."],
                clozeAnswers: ["Karneval"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Geburtstag",
                article: "der",
                plural: "Geburtstage",
                english: "birthday",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "When is your birthday?",
                clozeParts: ["Wann hast du ", "?"],
                clozeAnswers: ["Geburtstag"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Silvester",
                article: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "New Year's Eve",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "On New Year's Eve we have fireworks.",
                clozeParts: ["An ", " machen wir ein Feuerwerk."],
                clozeAnswers: ["Silvester"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Feuerwerk",
                article: "das",
                plural: "Feuerwerke",
                english: "fireworks",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The fireworks were beautiful.",
                clozeParts: ["Das ", " war schön."],
                clozeAnswers: ["Feuerwerk"]
            }
        ],

        // --- UNTER-THEMA: Ferien ---
        "Ferien": [
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Ferien",
                article: "die", // Plural
                plural: "Ferien", // Plural only
                english: "holidays / vacation (school)",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "What are you (plural) doing during the holidays?",
                clozeParts: ["Was macht ihr in den ", "?"],
                clozeAnswers: ["Ferien"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Urlaub",
                article: "der",
                plural: "Urlaube",
                english: "holiday / vacation",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are on holiday in Italy.",
                clozeParts: ["Wir machen ", " in Italien."],
                clozeAnswers: ["Urlaub"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Reise",
                article: "die",
                plural: "Reisen",
                english: "journey / trip",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The trip to Spain was great.",
                clozeParts: ["Die ", " nach Spanien war toll."],
                clozeAnswers: ["Reise"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "reisen", // Duplicate
                english: "to travel",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gereist",
                presentConjugation: { 
                    ich: "reise", 
                    du: "reist", 
                    er: "reist", 
                    wir: "reisen", 
                    ihr: "reist", 
                    sie: "reisen" 
                },
                imperative: { 
                    du: "Reis!", 
                    ihr: "Reist!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We often travel to France.",
                clozeParts: ["Wir ", " oft nach Frankreich."],
                clozeAnswers: ["reisen"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Ausflug",
                article: "der",
                plural: "Ausflüge",
                english: "trip / excursion",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are going on a trip with the school.",
                clozeParts: ["Wir machen mit der Schule einen ", "."],
                clozeAnswers: ["Ausflug"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "wandern", // Duplicate
                english: "to hike",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "gewandert",
                presentConjugation: { 
                    ich: "wandere", 
                    du: "wanderst", 
                    er: "wandert", 
                    wir: "wandern", 
                    ihr: "wandert", 
                    sie: "wandern" 
                },
                imperative: { 
                    du: "Wandere!", 
                    ihr: "Wandert!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir ", " in den Bergen."],
                clozeAnswers: ["wandern"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "schwimmen", // Duplicate
                english: "to swim",
                separable: false,
                auxiliaryVerb: "sein",
                pastParticiple: "geschwommen",
                presentConjugation: { 
                    ich: "schwimme", 
                    du: "schwimmst", 
                    er: "schwimmt", 
                    wir: "schwimmen", 
                    ihr: "schwimmt", 
                    sie: "schwimmen" 
                },
                imperative: { 
                    du: "Schwimm!", 
                    ihr: "Schwimmt!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to swim in the summer.",
                clozeParts: ["Ich ", " gern im Sommer."],
                clozeAnswers: ["schwimme"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "zelten",
                english: "to camp (in a tent)",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gezeltet",
                presentConjugation: { 
                    ich: "zelte", 
                    du: "zeltest", 
                    er: "zeltet", 
                    wir: "zelten", 
                    ihr: "zeltet", 
                    sie: "zelten" 
                },
                imperative: { 
                    du: "Zelte!", 
                    ihr: "Zeltet!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We sleep in the tent.", // Example uses "schlafen im Zelt"
                clozeParts: ["Wir ", " im Zelt."], // Cloze for "schlafen"
                clozeAnswers: ["schlafen"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Camping",
                article: "das",
                plural: null, // oft ohne Plural
                english: "camping",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are camping at the lake.",
                clozeParts: ["Wir machen ", " am See."],
                clozeAnswers: ["Camping"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Hotel",
                article: "das",
                plural: "Hotels",
                english: "hotel",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are sleeping in the hotel.",
                clozeParts: ["Wir schlafen im ", "."],
                clozeAnswers: ["Hotel"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Koffer",
                article: "der",
                plural: "Koffer",
                english: "suitcase",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I am packing my suitcase.",
                clozeParts: ["Ich packe meinen ", "."],
                clozeAnswers: ["Koffer"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Fotoapparat",
                article: "der",
                plural: "Fotoapparate",
                english: "camera",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "She has an expensive camera.",
                clozeParts: ["Sie hat einen teuren ", "."],
                clozeAnswers: ["Fotoapparat"]
            },
            {
                id: createWordId(""),
                wordType: "verb",
                german: "fotografieren", // Duplicate
                english: "to photograph",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "fotografiert",
                presentConjugation: { 
                    ich: "fotografiere", 
                    du: "fotografierst", 
                    er: "fotografiert", 
                    wir: "fotografieren", 
                    ihr: "fotografiert", 
                    sie: "fotografieren" 
                },
                imperative: { 
                    du: "Fotografier!", 
                    ihr: "Fotografiert!" 
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to take photos on holiday.",
                clozeParts: ["Ich ", " gern im Urlaub."],
                clozeAnswers: ["fotografiere"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Sonne",
                article: "die",
                plural: "Sonnen",
                english: "sun",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The sun shines on holiday.",
                clozeParts: ["Die ", " scheint im Urlaub."],
                clozeAnswers: ["Sonne"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Meer",
                article: "das",
                plural: "Meere",
                english: "sea / ocean",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are going to the sea.",
                clozeParts: ["Wir fahren ans ", "."],
                clozeAnswers: ["Meer"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "See",
                article: "der",
                plural: "Seen",
                english: "lake",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "At the weekend we are going to the lake.",
                clozeParts: ["Am Wochenende fahren wir an den ", "."],
                clozeAnswers: ["See"]
            },
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Berge",
                article: "die", // Plural
                plural: "Berge", // Plural only
                english: "mountains",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We hike in the mountains.",
                clozeParts: ["Wir wandern in den ", "."],
                clozeAnswers: ["Bergen"]
            }
        ]
    }
});