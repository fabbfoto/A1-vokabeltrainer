// vokabular_a2_18_medien_kommunikation.ts
// Thema 18: Medien und Kommunikation (35 Wörter)
// Story: Erstes Semester in Berlin - Austauschstudent/in lernt deutsche Kommunikation

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabularA2_18_medienKommunikation: VocabularyStructure = createVocabulary({
    "Medien und Kommunikation": {
        
        // --- UNTERKAPITEL: Geräte und Technologie (12 Wörter) ---
        "Geräte und Technologie": [
            {
                id: createWordId("a2-18-tech-001"),
                wordType: "noun",
                german: "Computer",
                article: "der",
                plural: "Computer",
                english: "computer",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " brauche", case: "verb" },
                    { text: " einen Computer", case: "akkusativ" },
                    { text: " für", case: "none" },
                    { text: " die Uni", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I need a computer for university.",
                clozeParts: ["Ich brauche einen ", " für die Uni."],
                clozeAnswers: ["Computer"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-002"),
                wordType: "noun",
                german: "Laptop",
                article: "das",
                plural: "Laptops",
                english: "laptop",
                exampleGerman: [
                    { text: "Das Laptop", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " leicht", case: "none" },
                    { text: " und", case: "none" },
                    { text: " passt", case: "verb" },
                    { text: " in", case: "none" },
                    { text: " den Rucksack", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The laptop is light and fits in the backpack.",
                clozeParts: ["Das ", " ist leicht und passt in den Rucksack."],
                clozeAnswers: ["Laptop"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-003"),
                wordType: "noun",
                german: "Handy",
                article: "das",
                plural: "Handys",
                english: "mobile phone",
                exampleGerman: [
                    { text: "Ohne", case: "none" },
                    { text: " mein Handy", case: "akkusativ" },
                    { text: " finde", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " die Adresse", case: "akkusativ" },
                    { text: " nicht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Without my mobile phone I can't find the address.",
                clozeParts: ["Ohne mein ", " finde ich die Adresse nicht."],
                clozeAnswers: ["Handy"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-004"),
                wordType: "noun",
                german: "Telefon",
                article: "das",
                plural: "Telefone",
                english: "telephone",
                exampleGerman: [
                    { text: "In", case: "none" },
                    { text: " der WG", case: "dativ" },
                    { text: " gibt es", case: "verb" },
                    { text: " ein altes Telefon", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There is an old telephone in the shared flat.",
                clozeParts: ["In der WG gibt es ein altes ", "."],
                clozeAnswers: ["Telefon"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-005"),
                wordType: "noun",
                german: "Tablet",
                article: "das",
                plural: "Tablets",
                english: "tablet",
                exampleGerman: [
                    { text: "Auf", case: "none" },
                    { text: " dem Tablet", case: "dativ" },
                    { text: " lese", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " die Texte", case: "akkusativ" },
                    { text: " für", case: "none" },
                    { text: " den Kurs", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I read the texts for the course on the tablet.",
                clozeParts: ["Auf dem ", " lese ich die Texte für den Kurs."],
                clozeAnswers: ["Tablet"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-006"),
                wordType: "noun",
                german: "Fernseher",
                article: "der",
                plural: "Fernseher",
                english: "television",
                exampleGerman: [
                    { text: "Der Fernseher", case: "nominativ" },
                    { text: " in", case: "none" },
                    { text: " der Küche", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " immer an", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The television in the kitchen is always on.",
                clozeParts: ["Der ", " in der Küche ist immer an."],
                clozeAnswers: ["Fernseher"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-007"),
                wordType: "noun",
                german: "Radio",
                article: "das",
                plural: "Radios",
                english: "radio",
                exampleGerman: [
                    { text: "Morgens", case: "none" },
                    { text: " höre", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " Radio", case: "akkusativ" },
                    { text: " beim Frühstück", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the morning I listen to the radio at breakfast.",
                clozeParts: ["Morgens höre ich ", " beim Frühstück."],
                clozeAnswers: ["Radio"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-008"),
                wordType: "noun",
                german: "Kamera",
                article: "die",
                plural: "Kameras",
                english: "camera",
                exampleGerman: [
                    { text: "Mit", case: "none" },
                    { text: " der Kamera", case: "dativ" },
                    { text: " mache", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " Fotos", case: "akkusativ" },
                    { text: " von", case: "none" },
                    { text: " Berlin", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "With the camera I take photos of Berlin.",
                clozeParts: ["Mit der ", " mache ich Fotos von Berlin."],
                clozeAnswers: ["Kamera"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-009"),
                wordType: "noun",
                german: "Drucker",
                article: "der",
                plural: "Drucker",
                english: "printer",
                exampleGerman: [
                    { text: "Der Drucker", case: "nominativ" },
                    { text: " in", case: "none" },
                    { text: " der Bibliothek", case: "dativ" },
                    { text: " funktioniert", case: "verb" },
                    { text: " heute nicht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The printer in the library is not working today.",
                clozeParts: ["Der ", " in der Bibliothek funktioniert heute nicht."],
                clozeAnswers: ["Drucker"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-010"),
                wordType: "noun",
                german: "Apparat",
                article: "der",
                plural: "Apparate",
                english: "device / telephone extension",
                exampleGerman: [
                    { text: "Welcher Apparat", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " das", case: "nominativ" },
                    { text: "?", case: "none" },
                    { text: " Ich", case: "nominativ" },
                    { text: " verstehe", case: "verb" },
                    { text: " es", case: "akkusativ" },
                    { text: " nicht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Which device is that? I don't understand it.",
                clozeParts: ["Welcher ", " ist das? Ich verstehe es nicht."],
                clozeAnswers: ["Apparat"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-011"),
                wordType: "noun",
                german: "Gerät",
                article: "das",
                plural: "Geräte",
                english: "device",
                exampleGerman: [
                    { text: "Dieses Gerät", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " neu", case: "none" },
                    { text: " und", case: "none" },
                    { text: " ich", case: "nominativ" },
                    { text: " kenne", case: "verb" },
                    { text: " es", case: "akkusativ" },
                    { text: " noch nicht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "This device is new and I don't know it yet.",
                clozeParts: ["Dieses ", " ist neu und ich kenne es noch nicht."],
                clozeAnswers: ["Gerät"]
            } as Noun,
            {
                id: createWordId("a2-18-tech-012"),
                wordType: "noun",
                german: "Mobiltelefon",
                article: "das",
                plural: "Mobiltelefone",
                english: "mobile phone",
                exampleGerman: [
                    { text: "Ein Mobiltelefon", case: "nominativ" },
                    { text: " mit", case: "none" },
                    { text: " deutscher Nummer", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " wichtig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "A mobile phone with a German number is important.",
                clozeParts: ["Ein ", " mit deutscher Nummer ist wichtig."],
                clozeAnswers: ["Mobiltelefon"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Telefonieren und Anrufen (10 Wörter) ---
        "Telefonieren und Anrufen": [
            {
                id: createWordId("a2-18-tel-001"),
                wordType: "verb",
                german: "telefonieren",
                english: "to phone / make a phone call",
                separable: false,
                coreForms: {
                    infinitive: "telefonieren",
                    thirdPerson: "telefoniert",
                    preterite: "telefonierte",
                    perfect: "hat telefoniert"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " telefoniere", case: "verb" },
                    { text: " jeden Sonntag", case: "none" },
                    { text: " mit", case: "none" },
                    { text: " meiner Familie", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I phone my family every Sunday.",
                clozeParts: ["Ich ", " jeden Sonntag mit meiner Familie."],
                clozeAnswers: ["telefoniere"]
            } as Verb,
            {
                id: createWordId("a2-18-tel-002"),
                wordType: "verb",
                german: "anrufen",
                english: "to call",
                separable: false,
                coreForms: {
                    infinitive: "anrufen",
                    thirdPerson: "ruft an",
                    preterite: "rief an",
                    perfect: "hat angerufen"
                },
                exampleGerman: [
                    { text: "Der Professor", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " gestern", case: "none" },
                    { text: " angerufen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The professor called yesterday.",
                clozeParts: ["Der Professor hat gestern ", "."],
                clozeAnswers: ["angerufen"]
            } as Verb,
            {
                id: createWordId("a2-18-tel-003"),
                wordType: "noun",
                german: "Anruf",
                article: "der",
                plural: "Anrufe",
                english: "phone call",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " warte", case: "verb" },
                    { text: " auf", case: "none" },
                    { text: " einen wichtigen Anruf", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm waiting for an important call.",
                clozeParts: ["Ich warte auf einen wichtigen ", "."],
                clozeAnswers: ["Anruf"]
            } as Noun,
            {
                id: createWordId("a2-18-tel-004"),
                wordType: "noun",
                german: "Anrufbeantworter",
                article: "der",
                plural: "Anrufbeantworter",
                english: "answering machine",
                exampleGerman: [
                    { text: "Der Anrufbeantworter", case: "nominativ" },
                    { text: " spricht", case: "verb" },
                    { text: " zu schnell", case: "none" },
                    { text: " für mich", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The answering machine speaks too fast for me.",
                clozeParts: ["Der ", " spricht zu schnell für mich."],
                clozeAnswers: ["Anrufbeantworter"]
            } as Noun,
            {
                id: createWordId("a2-18-tel-005"),
                wordType: "verb",
                german: "abheben",
                english: "to pick up (phone)",
                separable: false,
                coreForms: {
                    infinitive: "abheben",
                    thirdPerson: "hebt ab",
                    preterite: "hob ab",
                    perfect: "hat abgehoben"
                },
                exampleGerman: [
                    { text: "Niemand", case: "nominativ" },
                    { text: " hebt ab", case: "verb" },
                    { text: ",", case: "none" },
                    { text: " wenn", case: "none" },
                    { text: " ich", case: "nominativ" },
                    { text: " anrufe", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Nobody picks up when I call.",
                clozeParts: ["Niemand ", ", wenn ich anrufe."],
                clozeAnswers: ["hebt ab"]
            } as Verb,
            {
                id: createWordId("a2-18-tel-006"),
                wordType: "verb",
                german: "erreichen",
                english: "to reach",
                separable: false,
                coreForms: {
                    infinitive: "erreichen",
                    thirdPerson: "erreicht",
                    preterite: "erreichte",
                    perfect: "hat erreicht"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " kann", case: "verb" },
                    { text: " den Hausmeister", case: "akkusativ" },
                    { text: " nie", case: "none" },
                    { text: " erreichen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I can never reach the caretaker.",
                clozeParts: ["Ich kann den Hausmeister nie ", "."],
                clozeAnswers: ["erreichen"]
            } as Verb,
            {
                id: createWordId("a2-18-tel-007"),
                wordType: "verb",
                german: "klingeln",
                english: "to ring",
                separable: false,
                coreForms: {
                    infinitive: "klingeln",
                    thirdPerson: "klingelt",
                    preterite: "klingelte",
                    perfect: "hat geklingelt"
                },
                exampleGerman: [
                    { text: "Das Telefon", case: "nominativ" },
                    { text: " klingelt", case: "verb" },
                    { text: " schon", case: "none" },
                    { text: " den ganzen Tag", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The phone has been ringing all day.",
                clozeParts: ["Das Telefon ", " schon den ganzen Tag."],
                clozeAnswers: ["klingelt"]
            } as Verb,
            {
                id: createWordId("a2-18-tel-008"),
                wordType: "verb",
                german: "wählen",
                english: "to dial",
                separable: false,
                coreForms: {
                    infinitive: "wählen",
                    thirdPerson: "wählt",
                    preterite: "wählte",
                    perfect: "hat gewählt"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " wähle", case: "verb" },
                    { text: " die falsche Nummer", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I dial the wrong number.",
                clozeParts: ["Ich ", " die falsche Nummer."],
                clozeAnswers: ["wähle"]
            } as Verb,
            {
                id: createWordId("a2-18-tel-009"),
                wordType: "noun",
                german: "Anschluss",
                article: "der",
                plural: "Anschlüsse",
                english: "connection",
                exampleGerman: [
                    { text: "Der Anschluss", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " schlecht", case: "none" },
                    { text: " und", case: "none" },
                    { text: " ich", case: "nominativ" },
                    { text: " höre", case: "verb" },
                    { text: " nichts", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The connection is bad and I can't hear anything.",
                clozeParts: ["Der ", " ist schlecht und ich höre nichts."],
                clozeAnswers: ["Anschluss"]
            } as Noun,
            {
                id: createWordId("a2-18-tel-010"),
                wordType: "adjective",
                german: "besetzt",
                english: "busy / occupied",
                exampleGerman: [
                    { text: "Die Nummer", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " immer", case: "none" },
                    { text: " besetzt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The number is always busy.",
                clozeParts: ["Die Nummer ist immer ", "."],
                clozeAnswers: ["besetzt"]
            } as Adjective
        ],

        // --- UNTERKAPITEL: Schriftliche Kommunikation und Internet (13 Wörter) ---
        "Schriftliche Kommunikation und Internet": [
            {
                id: createWordId("a2-18-schrift-001"),
                wordType: "noun",
                german: "E-Mail",
                article: "die",
                plural: "E-Mails",
                english: "email",
                exampleGerman: [
                    { text: "Die E-Mail", case: "nominativ" },
                    { text: " vom Professor", case: "dativ" },
                    { text: " war", case: "verb" },
                    { text: " sehr wichtig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The email from the professor was very important.",
                clozeParts: ["Die ", " vom Professor war sehr wichtig."],
                clozeAnswers: ["E-Mail"]
            } as Noun,
            {
                id: createWordId("a2-18-schrift-002"),
                wordType: "noun",
                german: "Nachricht",
                article: "die",
                plural: "Nachrichten",
                english: "message / news",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " habe", case: "verb" },
                    { text: " eine Nachricht", case: "akkusativ" },
                    { text: " für dich", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have a message for you.",
                clozeParts: ["Ich habe eine ", " für dich."],
                clozeAnswers: ["Nachricht"]
            } as Noun,
            {
                id: createWordId("a2-18-schrift-003"),
                wordType: "verb",
                german: "schreiben",
                english: "to write",
                separable: false,
                coreForms: {
                    infinitive: "schreiben",
                    thirdPerson: "schreibt",
                    preterite: "schrieb",
                    perfect: "hat geschrieben"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " schreibe", case: "verb" },
                    { text: " meinen Eltern", case: "dativ" },
                    { text: " jede Woche", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I write to my parents every week.",
                clozeParts: ["Ich ", " meinen Eltern jede Woche."],
                clozeAnswers: ["schreibe"]
            } as Verb,
            {
                id: createWordId("a2-18-schrift-004"),
                wordType: "verb",
                german: "lesen",
                english: "to read",
                separable: false,
                coreForms: {
                    infinitive: "lesen",
                    thirdPerson: "liest",
                    preterite: "las",
                    perfect: "hat gelesen"
                },
                exampleGerman: [
                    { text: "Morgens", case: "none" },
                    { text: " lese", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " meine E-Mails", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the morning I read my emails.",
                clozeParts: ["Morgens ", " ich meine E-Mails."],
                clozeAnswers: ["lese"]
            } as Verb,
            {
                id: createWordId("a2-18-schrift-005"),
                wordType: "noun",
                german: "Brief",
                article: "der",
                plural: "Briefe",
                english: "letter",
                exampleGerman: [
                    { text: "Ein Brief", case: "nominativ" },
                    { text: " aus", case: "none" },
                    { text: " der Heimat", case: "dativ" },
                    { text: " macht", case: "verb" },
                    { text: " mich", case: "akkusativ" },
                    { text: " glücklich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "A letter from home makes me happy.",
                clozeParts: ["Ein ", " aus der Heimat macht mich glücklich."],
                clozeAnswers: ["Brief"]
            } as Noun,
            {
                id: createWordId("a2-18-schrift-006"),
                wordType: "noun",
                german: "Briefmarke",
                article: "die",
                plural: "Briefmarken",
                english: "stamp",
                exampleGerman: [
                    { text: "Wo", case: "none" },
                    { text: " kann", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " Briefmarken", case: "akkusativ" },
                    { text: " kaufen", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Where can I buy stamps?",
                clozeParts: ["Wo kann ich ", " kaufen?"],
                clozeAnswers: ["Briefmarken"]
            } as Noun,
            {
                id: createWordId("a2-18-schrift-007"),
                wordType: "noun",
                german: "Post",
                article: "die",
                plural: null,
                english: "mail / post office",
                exampleGerman: [
                    { text: "Die Post", case: "nominativ" },
                    { text: " kommt", case: "verb" },
                    { text: " immer", case: "none" },
                    { text: " um zehn Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The mail always comes at ten o'clock.",
                clozeParts: ["Die ", " kommt immer um zehn Uhr."],
                clozeAnswers: ["Post"]
            } as Noun,
            {
                id: createWordId("a2-18-schrift-008"),
                wordType: "verb",
                german: "schicken",
                english: "to send",
                separable: false,
                coreForms: {
                    infinitive: "schicken",
                    thirdPerson: "schickt",
                    preterite: "schickte",
                    perfect: "hat geschickt"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " schicke", case: "verb" },
                    { text: " dir", case: "dativ" },
                    { text: " die Fotos", case: "akkusativ" },
                    { text: " morgen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'll send you the photos tomorrow.",
                clozeParts: ["Ich ", " dir die Fotos morgen."],
                clozeAnswers: ["schicke"]
            } as Verb,
            {
                id: createWordId("a2-18-schrift-009"),
                wordType: "verb",
                german: "bekommen",
                english: "to receive / get",
                separable: false,
                coreForms: {
                    infinitive: "bekommen",
                    thirdPerson: "bekommt",
                    preterite: "bekam",
                    perfect: "hat bekommen"
                },
                exampleGerman: [
                    { text: "Gestern", case: "none" },
                    { text: " habe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " ein Paket", case: "akkusativ" },
                    { text: " bekommen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Yesterday I received a package.",
                clozeParts: ["Gestern habe ich ein Paket ", "."],
                clozeAnswers: ["bekommen"]
            } as Verb,
            {
                id: createWordId("a2-18-schrift-010"),
                wordType: "noun",
                german: "Internet",
                article: "das",
                plural: null,
                english: "internet",
                exampleGerman: [
                    { text: "Das Internet", case: "nominativ" },
                    { text: " in", case: "none" },
                    { text: " der WG", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " sehr langsam", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The internet in the shared flat is very slow.",
                clozeParts: ["Das ", " in der WG ist sehr langsam."],
                clozeAnswers: ["Internet"]
            } as Noun,
            {
                id: createWordId("a2-18-schrift-011"),
                wordType: "adjective",
                german: "online",
                english: "online",
                exampleGerman: [
                    { text: "Der Kurs", case: "nominativ" },
                    { text: " findet", case: "verb" },
                    { text: " online", case: "none" },
                    { text: " statt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The course takes place online.",
                clozeParts: ["Der Kurs findet ", " statt."],
                clozeAnswers: ["online"]
            } as Adjective,
            {
                id: createWordId("a2-18-schrift-012"),
                wordType: "noun",
                german: "Webseite",
                article: "die",
                plural: "Webseiten",
                english: "website",
                exampleGerman: [
                    { text: "Die Webseite", case: "nominativ" },
                    { text: " der Uni", case: "genitiv" },
                    { text: " hat", case: "verb" },
                    { text: " alle Informationen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The university website has all the information.",
                clozeParts: ["Die ", " der Uni hat alle Informationen."],
                clozeAnswers: ["Webseite"]
            } as Noun,
            {
                id: createWordId("a2-18-schrift-013"),
                wordType: "verb",
                german: "herunterladen",
                english: "to download",
                separable: false,
                coreForms: {
                    infinitive: "herunterladen",
                    thirdPerson: "lädt herunter",
                    preterite: "lud herunter",
                    perfect: "hat heruntergeladen"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " muss", case: "verb" },
                    { text: " die Dateien", case: "akkusativ" },
                    { text: " für", case: "none" },
                    { text: " den Kurs", case: "akkusativ" },
                    { text: " herunterladen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have to download the files for the course.",
                clozeParts: ["Ich muss die Dateien für den Kurs ", "."],
                clozeAnswers: ["herunterladen"]
            } as Verb
        ]
    }
});