// packages/trainer-themen/vokabular_freizeit_unterhaltung.ts

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary';
import { createWordId, createVocabulary } from './shared/types/vocabulary';

export const vokabularFreizeitUnterhaltung: Record<string, Record<string, Word[]>> = {
    "Freizeit und Unterhaltung": {

        // --- UNTER-THEMA: Hobbys/Interessen ---
        "Hobbys/Interessen": [
            {
                id: "freizeit-unterhaltung-hobbys-001",
                wortart: "Nomen",
                german: "Hobby",
                artikel: "das",
                plural: "Hobbys",
                english: "hobby",
                example_de: [
                    { "text": "Mein Hobby", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Fußball", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My hobby is football.",
                cloze_parts: ["Mein ", " ist Fußball."],
                cloze_answers: ["Hobby"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-002",
                wortart: "Verb",
                german: "basteln",
                english: "to do crafts / to tinker",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gebastelt",
                konjugation_praesens: { 
                    ich: "bastle", 
                    du: "bastelst", 
                    er_sie_es: "bastelt", 
                    wir: "basteln", 
                    ihr: "bastelt", 
                    sie_Sie: "basteln" 
                },
                imperativ: { 
                    du: "Bastle!", 
                    ihr: "Bastelt!" 
                },
                example_de: [
                    { "text": "Basteln", "kasus": "nominativ" }, // Nominalisiertes Verb
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mein Hobby", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Crafting is my hobby.",
                cloze_parts: ["", " ist mein Hobby."],
                cloze_answers: ["Basteln"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-003",
                wortart: "Verb",
                german: "malen",
                english: "to paint / to draw",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gemalt",
                konjugation_praesens: { 
                    ich: "male", 
                    du: "malst", 
                    er_sie_es: "malt", 
                    wir: "malen", 
                    ihr: "malt", 
                    sie_Sie: "malen" 
                },
                imperativ: { 
                    du: "Mal!", 
                    ihr: "Malt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "male", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Bilder", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to paint pictures.",
                cloze_parts: ["Ich ", " gern Bilder."],
                cloze_answers: ["male"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-004",
                wortart: "Verb",
                german: "sammeln",
                english: "to collect",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gesammelt",
                konjugation_praesens: { 
                    ich: "sammle", 
                    du: "sammelst", 
                    er_sie_es: "sammelt", 
                    wir: "sammeln", 
                    ihr: "sammelt", 
                    sie_Sie: "sammeln" 
                },
                imperativ: { 
                    du: "Sammle!", 
                    ihr: "Sammelt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sammle", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Briefmarken", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I collect stamps.",
                cloze_parts: ["Ich ", " Briefmarken."],
                cloze_answers: ["sammle"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-005",
                wortart: "Nomen",
                german: "Musik",
                artikel: "die",
                plural: "Musiken", // (selten, meist ohne Plural)
                english: "music",
                example_de: [
                    { "text": "Meine Hobbys", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Basketball und Musik", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My hobbies are basketball and music.",
                cloze_parts: ["Meine Hobbys sind Basketball und ", "."],
                cloze_answers: ["Musik"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-006",
                wortart: "Verb",
                german: "spielen",
                english: "to play",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gespielt",
                konjugation_praesens: { 
                    ich: "spiele", 
                    du: "spielst", 
                    er_sie_es: "spielt", 
                    wir: "spielen", 
                    ihr: "spielt", 
                    sie_Sie: "spielen" 
                },
                imperativ: { 
                    du: "Spiel!", 
                    ihr: "Spielt!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spielen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Spiel", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are playing a game.",
                cloze_parts: ["Wir ", " ein Spiel."],
                cloze_answers: ["spielen"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-007",
                wortart: "Verb",
                german: "tanzen",
                english: "to dance",
                trennbar: false,
                hilfsverb_perfekt: "haben", // oder sein
                partizip_ii: "getanzt",
                konjugation_praesens: { 
                    ich: "tanze", 
                    du: "tanzt", 
                    er_sie_es: "tanzt", 
                    wir: "tanzen", 
                    ihr: "tanzt", 
                    sie_Sie: "tanzen" 
                },
                imperativ: { 
                    du: "Tanz!", 
                    ihr: "Tanzt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tanze", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to dance.",
                cloze_parts: ["Ich ", " gern."],
                cloze_answers: ["tanze"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-008",
                wortart: "Verb",
                german: "fotografieren",
                english: "to photograph",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "fotografiert",
                konjugation_praesens: { 
                    ich: "fotografiere", 
                    du: "fotografierst", 
                    er_sie_es: "fotografiert", 
                    wir: "fotografieren", 
                    ihr: "fotografiert", 
                    sie_Sie: "fotografieren" 
                },
                imperativ: { 
                    du: "Fotografier!", 
                    ihr: "Fotografiert!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "fotografiere", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Urlaub", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to take photos on holiday.",
                cloze_parts: ["Ich ", " gern im Urlaub."],
                cloze_answers: ["fotografiere"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-009",
                wortart: "Verb",
                german: "zeichnen",
                english: "to draw",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gezeichnet",
                konjugation_praesens: { 
                    ich: "zeichne", 
                    du: "zeichnest", 
                    er_sie_es: "zeichnet", 
                    wir: "zeichnen", 
                    ihr: "zeichnet", 
                    sie_Sie: "zeichnen" 
                },
                imperativ: { 
                    du: "Zeichne!", 
                    ihr: "Zeichnet!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zeichne", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Bild", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am drawing a picture.",
                cloze_parts: ["Ich ", " ein Bild."],
                cloze_answers: ["zeichne"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-010",
                wortart: "Verb",
                german: "lesen",
                english: "to read",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gelesen",
                konjugation_praesens: { 
                    ich: "lese", 
                    du: "liest", 
                    er_sie_es: "liest", 
                    wir: "lesen", 
                    ihr: "lest", 
                    sie_Sie: "lesen" 
                },
                imperativ: { 
                    du: "Lies!", 
                    ihr: "Lest!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lese", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Buch", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am reading a book.",
                cloze_parts: ["Ich ", " ein Buch."],
                cloze_answers: ["lese"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-011",
                wortart: "Verb",
                german: "schreiben",
                english: "to write",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "geschrieben",
                konjugation_praesens: { 
                    ich: "schreibe", 
                    du: "schreibst", 
                    er_sie_es: "schreibt", 
                    wir: "schreiben", 
                    ihr: "schreibt", 
                    sie_Sie: "schreiben" 
                },
                imperativ: { 
                    du: "Schreib!", 
                    ihr: "Schreibt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schreibe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Geschichten", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to write stories.",
                cloze_parts: ["Ich ", " gern Geschichten."],
                cloze_answers: ["schreibe"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-012",
                wortart: "Verb",
                german: "schwimmen",
                english: "to swim",
                trennbar: false,
                hilfsverb_perfekt: "sein", // oder haben
                partizip_ii: "geschwommen",
                konjugation_praesens: { 
                    ich: "schwimme", 
                    du: "schwimmst", 
                    er_sie_es: "schwimmt", 
                    wir: "schwimmen", 
                    ihr: "schwimmt", 
                    sie_Sie: "schwimmen" 
                },
                imperativ: { 
                    du: "Schwimm!", 
                    ihr: "Schwimmt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schwimme", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Sommer", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to swim in the summer.",
                cloze_parts: ["Ich ", " gern im Sommer."],
                cloze_answers: ["schwimme"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-013",
                wortart: "Verb",
                german: "singen",
                english: "to sing",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gesungen",
                konjugation_praesens: { 
                    ich: "singe", 
                    du: "singst", 
                    er_sie_es: "singt", 
                    wir: "singen", 
                    ihr: "singt", 
                    sie_Sie: "singen" 
                },
                imperativ: { 
                    du: "Sing!", 
                    ihr: "Singt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "singe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in einer Band", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I sing in a band.",
                cloze_parts: ["Ich ", " in einer Band."],
                cloze_answers: ["singe"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-014",
                wortart: "Verb",
                german: "wandern",
                english: "to hike",
                trennbar: false,
                hilfsverb_perfekt: "sein",
                partizip_ii: "gewandert",
                konjugation_praesens: { 
                    ich: "wandere", 
                    du: "wanderst", 
                    er_sie_es: "wandert", 
                    wir: "wandern", 
                    ihr: "wandert", 
                    sie_Sie: "wandern" 
                },
                imperativ: { 
                    du: "Wandere!", 
                    ihr: "Wandert!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wandern", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in den Bergen", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We hike in the mountains.",
                cloze_parts: ["Wir ", " in den Bergen."],
                cloze_answers: ["wandern"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-015",
                wortart: "Verb",
                german: "reisen",
                english: "to travel",
                trennbar: false,
                hilfsverb_perfekt: "sein",
                partizip_ii: "gereist",
                konjugation_praesens: { 
                    ich: "reise", 
                    du: "reist", 
                    er_sie_es: "reist", 
                    wir: "reisen", 
                    ihr: "reist", 
                    sie_Sie: "reisen" 
                },
                imperativ: { 
                    du: "Reis!", 
                    ihr: "Reist!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "reisen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "oft", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "nach Frankreich", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We often travel to France.",
                cloze_parts: ["Wir ", " oft nach Frankreich."],
                cloze_answers: ["reisen"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-016",
                wortart: "Verb",
                german: "kochen",
                english: "to cook",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gekocht",
                konjugation_praesens: { 
                    ich: "koche", 
                    du: "kochst", 
                    er_sie_es: "kocht", 
                    wir: "kochen", 
                    ihr: "kocht", 
                    sie_Sie: "kochen" 
                },
                imperativ: { 
                    du: "Koch!", 
                    ihr: "Kocht!" 
                },
                example_de: [
                    { "text": "In der Küche", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kocht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meine Mutter", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My mother is cooking in the kitchen.",
                cloze_parts: ["In der Küche ", " meine Mutter."],
                cloze_answers: ["kocht"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-017",
                wortart: "Verb",
                german: "backen",
                english: "to bake",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gebacken",
                konjugation_praesens: { 
                    ich: "backe", 
                    du: "bäckst", 
                    er_sie_es: "bäckt", 
                    wir: "backen", 
                    ihr: "backt", 
                    sie_Sie: "backen" 
                },
                imperativ: { 
                    du: "Back!", 
                    ihr: "Backt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "backe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen Kuchen", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am baking a cake.",
                cloze_parts: ["Ich ", " einen Kuchen."],
                cloze_answers: ["backe"]
            },
            {
                id: "freizeit-unterhaltung-hobbys-018",
                wortart: "Verb",
                german: "grillen",
                english: "to grill / to barbecue",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gegrillt",
                konjugation_praesens: { 
                    ich: "grille", 
                    du: "grillst", 
                    er_sie_es: "grillt", 
                    wir: "grillen", 
                    ihr: "grillt", 
                    sie_Sie: "grillen" 
                },
                imperativ: { 
                    du: "Grill!", 
                    ihr: "Grillt!" 
                },
                example_de: [
                    { "text": "Im Sommer", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "grillen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Garten", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "In summer we grill in the garden.",
                cloze_parts: ["Im Sommer ", " wir im Garten."],
                cloze_answers: ["grillen"]
            }
        ],

        // --- UNTER-THEMA: Kino/Konzert/Fernsehen/Radio ---
        "Kino/Konzert/Fernsehen/Radio": [
            {
                id: "freizeit-unterhaltung-kino-001",
                wortart: "Nomen",
                german: "Kino",
                artikel: "das",
                plural: "Kinos",
                english: "cinema / movie theater",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ins Kino", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are going to the cinema.",
                cloze_parts: ["Wir gehen ins ", "."],
                cloze_answers: ["Kino"]
            },
            {
                id: "freizeit-unterhaltung-kino-002",
                wortart: "Nomen",
                german: "Film",
                artikel: "der",
                plural: "Filme",
                english: "film / movie",
                example_de: [
                    { "text": "Wie", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "war", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "der Film", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "How was the film?",
                cloze_parts: ["Wie war der ", "?"],
                cloze_answers: ["Film"]
            },
            {
                id: "freizeit-unterhaltung-kino-003",
                wortart: "Nomen",
                german: "Fernsehen",
                artikel: "das",
                plural: null, // oft ohne Plural
                english: "television",
                example_de: [
                    { "text": "Was", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gibt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "heute", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Fernsehen", "kasus": "dativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "What's on television today?",
                cloze_parts: ["Was gibt es heute im ", "?"],
                cloze_answers: ["Fernsehen"]
            },
            {
                id: "freizeit-unterhaltung-kino-004",
                wortart: "Verb",
                german: "fernsehen",
                english: "to watch TV",
                trennbar: true,
                hilfsverb_perfekt: "haben",
                partizip_ii: "ferngesehen",
                konjugation_praesens: { 
                    ich: "sehe fern", 
                    du: "siehst fern", 
                    er_sie_es: "sieht fern", 
                    wir: "sehen fern", 
                    ihr: "seht fern", 
                    sie_Sie: "sehen fern" 
                },
                imperativ: { 
                    du: "Sieh fern!", 
                    ihr: "Seht fern!" 
                },
                example_de: [
                    { "text": "Siehst", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "viel", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "fern", "kasus": "verb" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Do you watch a lot of TV?",
                cloze_parts: ["Siehst du viel ", "?"],
                cloze_answers: ["fern"]
            },
            {
                id: "freizeit-unterhaltung-kino-005",
                wortart: "Nomen",
                german: "Programm",
                artikel: "das",
                plural: "Programme",
                english: "program / schedule",
                example_de: [
                    { "text": "Das Programm", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "beginnt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "um acht Uhr", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The program starts at eight o'clock.",
                cloze_parts: ["Das ", " beginnt um acht Uhr."],
                cloze_answers: ["Programm"]
            },
            {
                id: "freizeit-unterhaltung-kino-006",
                wortart: "Nomen",
                german: "Konzert",
                artikel: "das",
                plural: "Konzerte",
                english: "concert",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "heute Abend", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ins Konzert", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are going to the concert tonight.",
                cloze_parts: ["Wir gehen heute Abend ins ", "."],
                cloze_answers: ["Konzert"]
            },
            {
                id: "freizeit-unterhaltung-kino-007",
                wortart: "Nomen",
                german: "Musik", // Duplicate from Hobbys
                artikel: "die",
                plural: "Musiken",
                english: "music",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "höre", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Musik", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to listen to music.",
                cloze_parts: ["Ich höre gern ", "."],
                cloze_answers: ["Musik"]
            },
            {
                id: "freizeit-unterhaltung-kino-008",
                wortart: "Nomen",
                german: "Band",
                artikel: "die",
                plural: "Bands",
                english: "band (music)",
                example_de: [
                    { "text": "Die Schülerband", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spielt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "heute um 9", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The student band plays today at 9.",
                cloze_parts: ["Die Schüler", " spielt heute um 9."],
                cloze_answers: ["band"]
            },
            {
                id: "freizeit-unterhaltung-kino-009",
                wortart: "Nomen",
                german: "CD",
                artikel: "die",
                plural: "CDs",
                english: "CD",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "können", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ihm", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine CD", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schenken", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We can give him a CD.",
                cloze_parts: ["Wir können ihm eine ", " schenken."],
                cloze_answers: ["CD"]
            },
            {
                id: "freizeit-unterhaltung-kino-010",
                wortart: "Nomen",
                german: "CD-Player",
                artikel: "der",
                plural: "CD-Player",
                english: "CD player",
                example_de: [
                    { "text": "Mein CD-Player", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kaputt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My CD player is broken.",
                cloze_parts: ["Mein ", " ist kaputt."],
                cloze_answers: ["CD-Player"]
            },
            {
                id: "freizeit-unterhaltung-kino-011",
                wortart: "Nomen",
                german: "Radio",
                artikel: "das",
                plural: "Radios",
                english: "radio",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "höre", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Radio", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "am Morgen", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I listen to the radio in the morning.",
                cloze_parts: ["Ich höre ", " am Morgen."],
                cloze_answers: ["Radio"]
            },
            {
                id: "freizeit-unterhaltung-kino-012",
                wortart: "Nomen",
                german: "Lied",
                artikel: "das",
                plural: "Lieder",
                english: "song",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mag", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dieses Lied", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like this song.",
                cloze_parts: ["Ich mag dieses ", "."],
                cloze_answers: ["Lied"]
            },
            {
                id: "freizeit-unterhaltung-kino-013",
                wortart: "Nomen",
                german: "Sänger/Sängerin",
                artikel: "der/die",
                plural: "Sänger/Sängerinnen",
                english: "singer (male/female)",
                example_de: [
                    { "text": "Die Sängerin", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr bekannt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The singer (female) is very famous.",
                cloze_parts: ["Die ", " ist sehr bekannt."],
                cloze_answers: ["Sängerin"]
            },
            {
                id: "freizeit-unterhaltung-kino-014",
                wortart: "Verb",
                german: "hören",
                english: "to hear / to listen",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gehört",
                konjugation_praesens: { 
                    ich: "höre", 
                    du: "hörst", 
                    er_sie_es: "hört", 
                    wir: "hören", 
                    ihr: "hört", 
                    sie_Sie: "hören" 
                },
                imperativ: { 
                    du: "Hör!", 
                    ihr: "Hört!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "höre", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Musik", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to listen to music.",
                cloze_parts: ["Ich ", " gern Musik."],
                cloze_answers: ["höre"]
            }
        ],

        // --- UNTER-THEMA: Lesen ---
        "Lesen": [
            {
                id: "freizeit-unterhaltung-lesen-001",
                wortart: "Nomen",
                german: "Buch",
                artikel: "das",
                plural: "Bücher",
                english: "book",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lese", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Buch", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am reading a book.",
                cloze_parts: ["Ich lese ein ", "."],
                cloze_answers: ["Buch"]
            },
            {
                id: "freizeit-unterhaltung-lesen-002",
                wortart: "Nomen",
                german: "Bibliothek",
                artikel: "die",
                plural: "Bibliotheken",
                english: "library",
                example_de: [
                    { "text": "In der Bibliothek", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gibt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dreißigtausend Bücher", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "There are thirty thousand books in the library.",
                cloze_parts: ["In der ", " gibt es dreißigtausend Bücher."],
                cloze_answers: ["Bibliothek"]
            },
            {
                id: "freizeit-unterhaltung-lesen-003",
                wortart: "Nomen",
                german: "Zeitung",
                artikel: "die",
                plural: "Zeitungen",
                english: "newspaper",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lese", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Zeitung", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "am Morgen", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I read the newspaper in the morning.",
                cloze_parts: ["Ich lese die ", " am Morgen."],
                cloze_answers: ["Zeitung"]
            },
            {
                id: "freizeit-unterhaltung-lesen-004",
                wortart: "Nomen",
                german: "Zeitschrift",
                artikel: "die",
                plural: "Zeitschriften",
                english: "magazine",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kaufe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Zeitschrift", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am buying a magazine.",
                cloze_parts: ["Ich kaufe eine ", "."],
                cloze_answers: ["Zeitschrift"]
            },
            {
                id: "freizeit-unterhaltung-lesen-005",
                wortart: "Nomen",
                german: "Comic",
                artikel: "der", // oder das
                plural: "Comics",
                english: "comic",
                example_de: [
                    { "text": "Liest", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Comics", "kasus": "akkusativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Do you like to read comics?",
                cloze_parts: ["Liest du gern ", "?"],
                cloze_answers: ["Comics"]
            },
            {
                id: "freizeit-unterhaltung-lesen-006",
                wortart: "Nomen",
                german: "Geschichte",
                artikel: "die",
                plural: "Geschichten",
                english: "story / history",
                example_de: [
                    { "text": "Kannst", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Geschichte", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "erzählen", "kasus": "verb" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Can you tell the story?",
                cloze_parts: ["Kannst du die ", " erzählen?"],
                cloze_answers: ["Geschichte"]
            },
            {
                id: "freizeit-unterhaltung-lesen-007",
                wortart: "Verb",
                german: "lesen", // Duplicate from Hobbys
                english: "to read",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gelesen",
                konjugation_praesens: { 
                    ich: "lese", 
                    du: "liest", 
                    er_sie_es: "liest", 
                    wir: "lesen", 
                    ihr: "lest", 
                    sie_Sie: "lesen" 
                },
                imperativ: { 
                    du: "Lies!", 
                    ihr: "Lest!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lese", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Buch", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am reading a book.",
                cloze_parts: ["Ich ", " ein Buch."],
                cloze_answers: ["lese"]
            }
        ],

        // --- UNTER-THEMA: Sport ---
        "Sport": [
            {
                id: "freizeit-unterhaltung-sport-001",
                wortart: "Nomen",
                german: "Sport",
                artikel: "der",
                plural: null, // oft ohne Plural
                english: "sport(s) / P.E.",
                example_de: [
                    { "text": "Sport", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mein Lieblingsfach", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Sport is my favorite subject.",
                cloze_parts: ["", " ist mein Lieblingsfach."],
                cloze_answers: ["Sport"]
            },
            {
                id: "freizeit-unterhaltung-sport-002",
                wortart: "Nomen",
                german: "Fußball",
                artikel: "der",
                plural: "Fußbälle", // (selten)
                english: "football / soccer",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spielen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Fußball", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We play football.",
                cloze_parts: ["Wir spielen ", "."],
                cloze_answers: ["Fußball"]
            },
            {
                id: "freizeit-unterhaltung-sport-003",
                wortart: "Nomen",
                german: "Basketball",
                artikel: "der",
                plural: "Basketbälle", // (selten)
                english: "basketball",
                example_de: [
                    { "text": "Meine Hobbys", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Basketball und Musik", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My hobbies are basketball and music.",
                cloze_parts: ["Meine Hobbys sind ", " und Musik."],
                cloze_answers: ["Basketball"]
            },
            {
                id: "freizeit-unterhaltung-sport-004",
                wortart: "Verb",
                german: "schwimmen", // Duplicate from Hobbys
                english: "to swim",
                trennbar: false,
                hilfsverb_perfekt: "sein",
                partizip_ii: "geschwommen",
                konjugation_praesens: { 
                    ich: "schwimme", 
                    du: "schwimmst", 
                    er_sie_es: "schwimmt", 
                    wir: "schwimmen", 
                    ihr: "schwimmt", 
                    sie_Sie: "schwimmen" 
                },
                imperativ: { 
                    du: "Schwimm!", 
                    ihr: "Schwimmt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schwimme", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Sommer", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to swim in the summer.",
                cloze_parts: ["Ich ", " gern im Sommer."],
                cloze_answers: ["schwimme"]
            },
            {
                id: "freizeit-unterhaltung-sport-005",
                wortart: "Verb",
                german: "laufen",
                english: "to run / to walk",
                trennbar: false,
                hilfsverb_perfekt: "sein",
                partizip_ii: "gelaufen",
                konjugation_praesens: { 
                    ich: "laufe", 
                    du: "läufst", 
                    er_sie_es: "läuft", 
                    wir: "laufen", 
                    ihr: "lauft", 
                    sie_Sie: "laufen" 
                },
                imperativ: { 
                    du: "Lauf!", 
                    ihr: "Lauft!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "laufe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "jeden Morgen", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I run every morning.",
                cloze_parts: ["Ich ", " jeden Morgen."],
                cloze_answers: ["laufe"]
            },
            {
                id: "freizeit-unterhaltung-sport-006",
                wortart: "Verb",
                german: "spielen", // Duplicate from Hobbys
                english: "to play",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gespielt",
                konjugation_praesens: { 
                    ich: "spiele", 
                    du: "spielst", 
                    er_sie_es: "spielt", 
                    wir: "spielen", 
                    ihr: "spielt", 
                    sie_Sie: "spielen" 
                },
                imperativ: { 
                    du: "Spiel!", 
                    ihr: "Spielt!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spielen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Spiel", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are playing a game.",
                cloze_parts: ["Wir ", " ein Spiel."],
                cloze_answers: ["spielen"]
            },
            {
                id: "freizeit-unterhaltung-sport-007",
                wortart: "Nomen",
                german: "Mannschaft",
                artikel: "die",
                plural: "Mannschaften",
                english: "team",
                example_de: [
                    { "text": "Unsere Mannschaft", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hat", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gewonnen", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Our team has won.",
                cloze_parts: ["Unsere ", " hat gewonnen."],
                cloze_answers: ["Mannschaft"]
            },
            {
                id: "freizeit-unterhaltung-sport-008",
                wortart: "Nomen",
                german: "Spieler/Spielerin",
                artikel: "der/die",
                plural: "Spieler/Spielerinnen",
                english: "player (male/female)",
                example_de: [
                    { "text": "Die Spieler", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf dem Platz", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The players are on the field.",
                cloze_parts: ["Die ", " sind auf dem Platz."],
                cloze_answers: ["Spieler"]
            },
            {
                id: "freizeit-unterhaltung-sport-009",
                wortart: "Nomen",
                german: "Ball",
                artikel: "der",
                plural: "Bälle",
                english: "ball",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spielen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mit dem Ball", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are playing with the ball.",
                cloze_parts: ["Wir spielen mit dem ", "."],
                cloze_answers: ["Ball"]
            },
            {
                id: "freizeit-unterhaltung-sport-010",
                wortart: "Verb",
                german: "gewinnen",
                english: "to win",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gewonnen",
                konjugation_praesens: { 
                    ich: "gewinne", 
                    du: "gewinnst", 
                    er_sie_es: "gewinnt", 
                    wir: "gewinnen", 
                    ihr: "gewinnt", 
                    sie_Sie: "gewinnen" 
                },
                imperativ: { 
                    du: "Gewinn!", 
                    ihr: "Gewinnt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gewinnen", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I want to win.",
                cloze_parts: ["Ich möchte ", "."],
                cloze_answers: ["gewinnen"]
            },
            {
                id: "freizeit-unterhaltung-sport-011",
                wortart: "Verb",
                german: "verlieren",
                english: "to lose",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "verloren",
                konjugation_praesens: { 
                    ich: "verliere", 
                    du: "verlierst", 
                    er_sie_es: "verliert", 
                    wir: "verlieren", 
                    ihr: "verliert", 
                    sie_Sie: "verlieren" 
                },
                imperativ: { 
                    du: "Verlier!", 
                    ihr: "Verliert!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "verloren", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have lost.",
                cloze_parts: ["Ich habe ", "."],
                cloze_answers: ["verloren"]
            },
            {
                id: "freizeit-unterhaltung-sport-012",
                wortart: "Nomen",
                german: "Punkt",
                artikel: "der",
                plural: "Punkte",
                english: "point",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "haben", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zehn Punkte", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We have ten points.",
                cloze_parts: ["Wir haben zehn ", "."],
                cloze_answers: ["Punkte"]
            },
            {
                id: "freizeit-unterhaltung-sport-013",
                wortart: "Nomen",
                german: "Tennis",
                artikel: "das",
                plural: null, // oft ohne Plural
                english: "tennis",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spiele", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Tennis", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I play tennis.",
                cloze_parts: ["Ich spiele ", "."],
                cloze_answers: ["Tennis"]
            },
            {
                id: "freizeit-unterhaltung-sport-014",
                wortart: "Nomen",
                german: "Tischtennis",
                artikel: "das",
                plural: null, // oft ohne Plural
                english: "table tennis",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spielen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Tischtennis", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We play table tennis.",
                cloze_parts: ["Wir spielen ", "."],
                cloze_answers: ["Tischtennis"]
            },
            {
                id: "freizeit-unterhaltung-sport-015",
                wortart: "Phrase", // Verb + Nomen
                german: "Rad fahren",
                english: "to cycle / to ride a bike",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "fahre", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mit dem Rad", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zur Schule", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I ride my bike to school.",
                cloze_parts: ["Ich fahre mit dem ", " zur Schule."],
                cloze_answers: ["Rad"]
            },
            {
                id: "freizeit-unterhaltung-sport-016",
                wortart: "Verb",
                german: "tanzen", // Duplicate from Hobbys
                english: "to dance",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "getanzt",
                konjugation_praesens: { 
                    ich: "tanze", 
                    du: "tanzt", 
                    er_sie_es: "tanzt", 
                    wir: "tanzen", 
                    ihr: "tanzt", 
                    sie_Sie: "tanzen" 
                },
                imperativ: { 
                    du: "Tanz!", 
                    ihr: "Tanzt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tanze", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to dance.",
                cloze_parts: ["Ich ", " gern."],
                cloze_answers: ["tanze"]
            },
            {
                id: "freizeit-unterhaltung-sport-017",
                wortart: "Verb",
                german: "wandern", // Duplicate from Hobbys
                english: "to hike",
                trennbar: false,
                hilfsverb_perfekt: "sein",
                partizip_ii: "gewandert",
                konjugation_praesens: { 
                    ich: "wandere", 
                    du: "wanderst", 
                    er_sie_es: "wandert", 
                    wir: "wandern", 
                    ihr: "wandert", 
                    sie_Sie: "wandern" 
                },
                imperativ: { 
                    du: "Wandere!", 
                    ihr: "Wandert!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wandern", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in den Bergen", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We hike in the mountains.",
                cloze_parts: ["Wir ", " in den Bergen."],
                cloze_answers: ["wandern"]
            }
        ],

        // --- UNTER-THEMA: Ausgehen (Disco) ---
        "Ausgehen (Disco)": [
            {
                id: "freizeit-unterhaltung-ausgehen-001",
                wortart: "Nomen",
                german: "Disco/Diskothek",
                artikel: "die",
                plural: "Discos/Diskotheken",
                english: "disco / discotheque",
                example_de: [
                    { "text": "Sie", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "geht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in die Diskothek", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "She likes to go to the discotheque.",
                cloze_parts: ["Sie geht gern in die ", "."],
                cloze_answers: ["Diskothek"]
            },
            {
                id: "freizeit-unterhaltung-ausgehen-002",
                wortart: "Verb",
                german: "tanzen", // Duplicate
                english: "to dance",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "getanzt",
                konjugation_praesens: { 
                    ich: "tanze", 
                    du: "tanzt", 
                    er_sie_es: "tanzt", 
                    wir: "tanzen", 
                    ihr: "tanzt", 
                    sie_Sie: "tanzen" 
                },
                imperativ: { 
                    du: "Tanz!", 
                    ihr: "Tanzt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tanze", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to dance.",
                cloze_parts: ["Ich ", " gern."],
                cloze_answers: ["tanze"]
            },
            {
                id: "freizeit-unterhaltung-ausgehen-003",
                wortart: "Verb",
                german: "treffen",
                english: "to meet",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "getroffen",
                konjugation_praesens: { 
                    ich: "treffe", 
                    du: "triffst", 
                    er_sie_es: "trifft", 
                    wir: "treffen", 
                    ihr: "trefft", 
                    sie_Sie: "treffen" 
                },
                imperativ: { 
                    du: "Triff!", 
                    ihr: "Trefft!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "treffen uns", "kasus": "verb" }, // reflexiv
                    { "text": " ", "kasus": "none" },
                    { "text": "im Café", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are meeting at the cafe.",
                cloze_parts: ["Wir ", " uns im Café."],
                cloze_answers: ["treffen"]
            },
            {
                id: "freizeit-unterhaltung-ausgehen-004",
                wortart: "Nomen",
                german: "Party",
                artikel: "die",
                plural: "Partys",
                english: "party",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "machen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Party", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are having a party.",
                cloze_parts: ["Wir machen eine ", "."],
                cloze_answers: ["Party"]
            },
            {
                id: "freizeit-unterhaltung-ausgehen-005",
                wortart: "Verb",
                german: "feiern",
                english: "to celebrate",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gefeiert",
                konjugation_praesens: { 
                    ich: "feiere", 
                    du: "feierst", 
                    er_sie_es: "feiert", 
                    wir: "feiern", 
                    ihr: "feiert", 
                    sie_Sie: "feiern" 
                },
                imperativ: { 
                    du: "Feiere!", 
                    ihr: "Feiert!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "feiern", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meinen Geburtstag", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are celebrating my birthday.",
                cloze_parts: ["Wir ", " meinen Geburtstag."],
                cloze_answers: ["feiern"]
            },
            {
                id: "freizeit-unterhaltung-ausgehen-006",
                wortart: "Nomen",
                german: "Einladung",
                artikel: "die",
                plural: "Einladungen",
                english: "invitation",
                example_de: [
                    { "text": "Das", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Einladung", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zur Geburtstagsparty", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "This is an invitation to the birthday party.",
                cloze_parts: ["Das ist eine ", " zur Geburtstagsparty."],
                cloze_answers: ["Einladung"]
            },
            {
                id: "freizeit-unterhaltung-ausgehen-007",
                wortart: "Verb",
                german: "einladen",
                english: "to invite",
                trennbar: true,
                hilfsverb_perfekt: "haben",
                partizip_ii: "eingeladen",
                konjugation_praesens: { 
                    ich: "lade ein", 
                    du: "lädst ein", 
                    er_sie_es: "lädt ein", 
                    wir: "laden ein", 
                    ihr: "ladet ein", 
                    sie_Sie: "laden ein" 
                },
                imperativ: { 
                    du: "Lade ein!", 
                    ihr: "Ladet ein!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lade", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dich", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I invite you.",
                cloze_parts: ["Ich ", " dich ", "."],
                cloze_answers: ["lade", "ein"]
            },
            {
                id: "freizeit-unterhaltung-ausgehen-008",
                wortart: "Nomen",
                german: "Café",
                artikel: "das",
                plural: "Cafés",
                english: "cafe",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "treffen uns", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Café", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are meeting at the cafe.",
                cloze_parts: ["Wir treffen uns im ", "."],
                cloze_answers: ["Café"]
            },
            {
                id: "freizeit-unterhaltung-ausgehen-009",
                wortart: "Nomen",
                german: "Restaurant",
                artikel: "das",
                plural: "Restaurants",
                english: "restaurant",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ins Restaurant", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are going to the restaurant.",
                cloze_parts: ["Wir gehen ins ", "."],
                cloze_answers: ["Restaurant"]
            },
            {
                id: "freizeit-unterhaltung-ausgehen-010",
                wortart: "Nomen",
                german: "Kino", // Duplicate
                artikel: "das",
                plural: "Kinos",
                english: "cinema / movie theater",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ins Kino", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are going to the cinema.",
                cloze_parts: ["Wir gehen ins ", "."],
                cloze_answers: ["Kino"]
            }
        ],

        // --- UNTER-THEMA: Feste/Feiern ---
        "Feste/Feiern": [
            {
                id: "freizeit-unterhaltung-feste-001",
                wortart: "Nomen",
                german: "Fest",
                artikel: "das",
                plural: "Feste",
                english: "festival / party / celebration",
                example_de: [
                    { "text": "Das Fest", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "war", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schön", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The festival was nice.",
                cloze_parts: ["Das ", " war schön."],
                cloze_answers: ["Fest"]
            },
            {
                id: "freizeit-unterhaltung-feste-002",
                wortart: "Verb",
                german: "feiern", // Duplicate
                english: "to celebrate",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gefeiert",
                konjugation_praesens: { 
                    ich: "feiere", 
                    du: "feierst", 
                    er_sie_es: "feiert", 
                    wir: "feiern", 
                    ihr: "feiert", 
                    sie_Sie: "feiern" 
                },
                imperativ: { 
                    du: "Feiere!", 
                    ihr: "Feiert!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "feiern", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meinen Geburtstag", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are celebrating my birthday.",
                cloze_parts: ["Wir ", " meinen Geburtstag."],
                cloze_answers: ["feiern"]
            },
            {
                id: "freizeit-unterhaltung-feste-003",
                wortart: "Nomen",
                german: "Party", // Duplicate
                artikel: "die",
                plural: "Partys",
                english: "party",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "machen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Party", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are having a party.",
                cloze_parts: ["Wir machen eine ", "."],
                cloze_answers: ["Party"]
            },
            {
                id: "freizeit-unterhaltung-feste-004",
                wortart: "Verb",
                german: "einladen", // Duplicate
                english: "to invite",
                trennbar: true,
                hilfsverb_perfekt: "haben",
                partizip_ii: "eingeladen",
                konjugation_praesens: { 
                    ich: "lade ein", 
                    du: "lädst ein", 
                    er_sie_es: "lädt ein", 
                    wir: "laden ein", 
                    ihr: "ladet ein", 
                    sie_Sie: "laden ein" 
                },
                imperativ: { 
                    du: "Lade ein!", 
                    ihr: "Ladet ein!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lade", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dich", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I invite you.",
                cloze_parts: ["Ich ", " dich ", "."],
                cloze_answers: ["lade", "ein"]
            },
            {
                id: "freizeit-unterhaltung-feste-005",
                wortart: "Nomen",
                german: "Einladung", // Duplicate
                artikel: "die",
                plural: "Einladungen",
                english: "invitation",
                example_de: [
                    { "text": "Das", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine Einladung", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zur Geburtstagsparty", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "This is an invitation to the birthday party.",
                cloze_parts: ["Das ist eine ", " zur Geburtstagsparty."],
                cloze_answers: ["Einladung"]
            },
            {
                id: "freizeit-unterhaltung-feste-006",
                wortart: "Nomen",
                german: "Geschenk",
                artikel: "das",
                plural: "Geschenke",
                english: "present / gift",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Geschenk", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "für dich", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have a present for you.",
                cloze_parts: ["Ich habe ein ", " für dich."],
                cloze_answers: ["Geschenk"]
            },
            {
                id: "freizeit-unterhaltung-feste-007",
                wortart: "Nomen",
                german: "Weihnachten",
                artikel: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "Christmas",
                example_de: [
                    { "text": "Frohe Weihnachten", "kasus": "akkusativ" }, // Feste Wendung
                    { "text": "!", "kasus": "none" }
                ],
                example_en: "Merry Christmas!",
                cloze_parts: ["Frohe ", "!"],
                cloze_answers: ["Weihnachten"]
            },
            {
                id: "freizeit-unterhaltung-feste-008",
                wortart: "Nomen",
                german: "Ostern",
                artikel: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "Easter",
                example_de: [
                    { "text": "Zu Ostern", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gibt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Schokolade", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "There is chocolate at Easter.",
                cloze_parts: ["Zu ", " gibt es Schokolade."],
                cloze_answers: ["Ostern"]
            },
            {
                id: "freizeit-unterhaltung-feste-009",
                wortart: "Nomen",
                german: "Karneval",
                artikel: "der",
                plural: "Karnevale", // oder Karnevals
                english: "carnival",
                example_de: [
                    { "text": "An Karneval", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "verkleiden", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "uns", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We dress up for Carnival.",
                cloze_parts: ["An ", " verkleiden wir uns."],
                cloze_answers: ["Karneval"]
            },
            {
                id: "freizeit-unterhaltung-feste-010",
                wortart: "Nomen",
                german: "Geburtstag",
                artikel: "der",
                plural: "Geburtstage",
                english: "birthday",
                example_de: [
                    { "text": "Wann", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hast", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Geburtstag", "kasus": "akkusativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "When is your birthday?",
                cloze_parts: ["Wann hast du ", "?"],
                cloze_answers: ["Geburtstag"]
            },
            {
                id: "freizeit-unterhaltung-feste-011",
                wortart: "Nomen",
                german: "Silvester",
                artikel: "das", // (sächlich, aber oft ohne Artikel)
                plural: null, // oft ohne Plural
                english: "New Year's Eve",
                example_de: [
                    { "text": "An Silvester", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "machen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Feuerwerk", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "On New Year's Eve we have fireworks.",
                cloze_parts: ["An ", " machen wir ein Feuerwerk."],
                cloze_answers: ["Silvester"]
            },
            {
                id: "freizeit-unterhaltung-feste-012",
                wortart: "Nomen",
                german: "Feuerwerk",
                artikel: "das",
                plural: "Feuerwerke",
                english: "fireworks",
                example_de: [
                    { "text": "Das Feuerwerk", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "war", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schön", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The fireworks were beautiful.",
                cloze_parts: ["Das ", " war schön."],
                cloze_answers: ["Feuerwerk"]
            }
        ],

        // --- UNTER-THEMA: Ferien ---
        "Ferien": [
            {
                id: "freizeit-unterhaltung-ferien-001",
                wortart: "Nomen",
                german: "Ferien",
                artikel: "die", // Plural
                plural: "Ferien", // Plural only
                english: "holidays / vacation (school)",
                example_de: [
                    { "text": "Was", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "macht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ihr", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in den Ferien", "kasus": "dativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "What are you (plural) doing during the holidays?",
                cloze_parts: ["Was macht ihr in den ", "?"],
                cloze_answers: ["Ferien"]
            },
            {
                id: "freizeit-unterhaltung-ferien-002",
                wortart: "Nomen",
                german: "Urlaub",
                artikel: "der",
                plural: "Urlaube",
                english: "holiday / vacation",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "machen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Urlaub", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in Italien", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are on holiday in Italy.",
                cloze_parts: ["Wir machen ", " in Italien."],
                cloze_answers: ["Urlaub"]
            },
            {
                id: "freizeit-unterhaltung-ferien-003",
                wortart: "Nomen",
                german: "Reise",
                artikel: "die",
                plural: "Reisen",
                english: "journey / trip",
                example_de: [
                    { "text": "Die Reise", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "nach Spanien", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "war", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "toll", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The trip to Spain was great.",
                cloze_parts: ["Die ", " nach Spanien war toll."],
                cloze_answers: ["Reise"]
            },
            {
                id: "freizeit-unterhaltung-ferien-004",
                wortart: "Verb",
                german: "reisen", // Duplicate
                english: "to travel",
                trennbar: false,
                hilfsverb_perfekt: "sein",
                partizip_ii: "gereist",
                konjugation_praesens: { 
                    ich: "reise", 
                    du: "reist", 
                    er_sie_es: "reist", 
                    wir: "reisen", 
                    ihr: "reist", 
                    sie_Sie: "reisen" 
                },
                imperativ: { 
                    du: "Reis!", 
                    ihr: "Reist!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "reisen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "oft", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "nach Frankreich", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We often travel to France.",
                cloze_parts: ["Wir ", " oft nach Frankreich."],
                cloze_answers: ["reisen"]
            },
            {
                id: "freizeit-unterhaltung-ferien-005",
                wortart: "Nomen",
                german: "Ausflug",
                artikel: "der",
                plural: "Ausflüge",
                english: "trip / excursion",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "machen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mit der Schule", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen Ausflug", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are going on a trip with the school.",
                cloze_parts: ["Wir machen mit der Schule einen ", "."],
                cloze_answers: ["Ausflug"]
            },
            {
                id: "freizeit-unterhaltung-ferien-006",
                wortart: "Verb",
                german: "wandern", // Duplicate
                english: "to hike",
                trennbar: false,
                hilfsverb_perfekt: "sein",
                partizip_ii: "gewandert",
                konjugation_praesens: { 
                    ich: "wandere", 
                    du: "wanderst", 
                    er_sie_es: "wandert", 
                    wir: "wandern", 
                    ihr: "wandert", 
                    sie_Sie: "wandern" 
                },
                imperativ: { 
                    du: "Wandere!", 
                    ihr: "Wandert!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wandern", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in den Bergen", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We hike in the mountains.",
                cloze_parts: ["Wir ", " in den Bergen."],
                cloze_answers: ["wandern"]
            },
            {
                id: "freizeit-unterhaltung-ferien-007",
                wortart: "Verb",
                german: "schwimmen", // Duplicate
                english: "to swim",
                trennbar: false,
                hilfsverb_perfekt: "sein",
                partizip_ii: "geschwommen",
                konjugation_praesens: { 
                    ich: "schwimme", 
                    du: "schwimmst", 
                    er_sie_es: "schwimmt", 
                    wir: "schwimmen", 
                    ihr: "schwimmt", 
                    sie_Sie: "schwimmen" 
                },
                imperativ: { 
                    du: "Schwimm!", 
                    ihr: "Schwimmt!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schwimme", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Sommer", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to swim in the summer.",
                cloze_parts: ["Ich ", " gern im Sommer."],
                cloze_answers: ["schwimme"]
            },
            {
                id: "freizeit-unterhaltung-ferien-008",
                wortart: "Verb",
                german: "zelten",
                english: "to camp (in a tent)",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gezeltet",
                konjugation_praesens: { 
                    ich: "zelte", 
                    du: "zeltest", 
                    er_sie_es: "zeltet", 
                    wir: "zelten", 
                    ihr: "zeltet", 
                    sie_Sie: "zelten" 
                },
                imperativ: { 
                    du: "Zelte!", 
                    ihr: "Zeltet!" 
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schlafen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Zelt", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We sleep in the tent.", // Example uses "schlafen im Zelt"
                cloze_parts: ["Wir ", " im Zelt."], // Cloze for "schlafen"
                cloze_answers: ["schlafen"]
            },
            {
                id: "freizeit-unterhaltung-ferien-009",
                wortart: "Nomen",
                german: "Camping",
                artikel: "das",
                plural: null, // oft ohne Plural
                english: "camping",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "machen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Camping", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "am See", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are camping at the lake.",
                cloze_parts: ["Wir machen ", " am See."],
                cloze_answers: ["Camping"]
            },
            {
                id: "freizeit-unterhaltung-ferien-010",
                wortart: "Nomen",
                german: "Hotel",
                artikel: "das",
                plural: "Hotels",
                english: "hotel",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schlafen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Hotel", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are sleeping in the hotel.",
                cloze_parts: ["Wir schlafen im ", "."],
                cloze_answers: ["Hotel"]
            },
            {
                id: "freizeit-unterhaltung-ferien-011",
                wortart: "Nomen",
                german: "Koffer",
                artikel: "der",
                plural: "Koffer",
                english: "suitcase",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "packe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meinen Koffer", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am packing my suitcase.",
                cloze_parts: ["Ich packe meinen ", "."],
                cloze_answers: ["Koffer"]
            },
            {
                id: "freizeit-unterhaltung-ferien-012",
                wortart: "Nomen",
                german: "Fotoapparat",
                artikel: "der",
                plural: "Fotoapparate",
                english: "camera",
                example_de: [
                    { "text": "Sie", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hat", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen teuren Fotoapparat", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "She has an expensive camera.",
                cloze_parts: ["Sie hat einen teuren ", "."],
                cloze_answers: ["Fotoapparat"]
            },
            {
                id: "freizeit-unterhaltung-ferien-013",
                wortart: "Verb",
                german: "fotografieren", // Duplicate
                english: "to photograph",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "fotografiert",
                konjugation_praesens: { 
                    ich: "fotografiere", 
                    du: "fotografierst", 
                    er_sie_es: "fotografiert", 
                    wir: "fotografieren", 
                    ihr: "fotografiert", 
                    sie_Sie: "fotografieren" 
                },
                imperativ: { 
                    du: "Fotografier!", 
                    ihr: "Fotografiert!" 
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "fotografiere", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Urlaub", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to take photos on holiday.",
                cloze_parts: ["Ich ", " gern im Urlaub."],
                cloze_answers: ["fotografiere"]
            },
            {
                id: "freizeit-unterhaltung-ferien-014",
                wortart: "Nomen",
                german: "Sonne",
                artikel: "die",
                plural: "Sonnen",
                english: "sun",
                example_de: [
                    { "text": "Die Sonne", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "scheint", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Urlaub", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The sun shines on holiday.",
                cloze_parts: ["Die ", " scheint im Urlaub."],
                cloze_answers: ["Sonne"]
            },
            {
                id: "freizeit-unterhaltung-ferien-015",
                wortart: "Nomen",
                german: "Meer",
                artikel: "das",
                plural: "Meere",
                english: "sea / ocean",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "fahren", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ans Meer", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are going to the sea.",
                cloze_parts: ["Wir fahren ans ", "."],
                cloze_answers: ["Meer"]
            },
            {
                id: "freizeit-unterhaltung-ferien-016",
                wortart: "Nomen",
                german: "See",
                artikel: "der",
                plural: "Seen",
                english: "lake",
                example_de: [
                    { "text": "Am Wochenende", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "fahren", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "an den See", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "At the weekend we are going to the lake.",
                cloze_parts: ["Am Wochenende fahren wir an den ", "."],
                cloze_answers: ["See"]
            },
            {
                id: "freizeit-unterhaltung-ferien-017",
                wortart: "Nomen",
                german: "Berge",
                artikel: "die", // Plural
                plural: "Berge", // Plural only
                english: "mountains",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wandern", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in den Bergen", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We hike in the mountains.",
                cloze_parts: ["Wir wandern in den ", "."],
                cloze_answers: ["Bergen"]
            }
        ]
    }
};