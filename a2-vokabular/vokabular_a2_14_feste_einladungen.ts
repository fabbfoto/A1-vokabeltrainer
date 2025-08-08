// vokabular_a2_14_feste_einladungen.ts
// Thema 14: Feste und Einladungen (35 Wörter)
// Story: Eine Überraschungs-Geburtstagsparty organisieren

import type { VocabularyStructure, Noun, Verb, Adjective, Adverb, Interjection, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_14_feste_einladungen: VocabularyStructure = createVocabulary({
    "Feste und Einladungen": {
        
        // --- STORY TEIL 1: Die heimliche Vorbereitung (12 Wörter) ---
        "Feiertage und Feste": [
            {
                id: createWordId("a2-14-fest-001"),
                wordType: "noun",
                german: "Geburtstag",
                article: "der",
                plural: "Geburtstage",
                english: "birthday",
                exampleGerman: [
                    { text: "Die Schwester", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " nächste Woche", case: "none" },
                    { text: " Geburtstag", case: "akkusativ" },
                    { text: " und weiß noch nichts von der Party", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The sister has her birthday next week and doesn't know about the party yet.",
                clozeParts: ["Die Schwester hat nächste Woche ", " und weiß noch nichts von der Party."],
                clozeAnswers: ["Geburtstag"]
            } as Noun,
            {
                id: createWordId("a2-14-fest-002"),
                wordType: "noun",
                german: "Überraschung",
                article: "die",
                plural: "Überraschungen",
                english: "surprise",
                exampleGerman: [
                    { text: "Die Überraschung", case: "nominativ" },
                    { text: " muss", case: "verb" },
                    { text: " unbedingt", case: "none" },
                    { text: " geheim bleiben", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The surprise must absolutely stay secret.",
                clozeParts: ["Die ", " muss unbedingt geheim bleiben."],
                clozeAnswers: ["Überraschung"]
            } as Noun,
            {
                id: createWordId("a2-14-fest-003"),
                wordType: "verb",
                german: "überraschen",
                english: "to surprise",
                separable: false,
                coreForms: {
                    infinitive: "überraschen",
                    thirdPerson: "überrascht",
                    preterite: "überraschte",
                    perfect: "hat überrascht"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " wollen", case: "verb" },
                    { text: " sie", case: "akkusativ" },
                    { text: " mit einer großen Party", case: "dativ" },
                    { text: " überraschen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We want to surprise her with a big party.",
                clozeParts: ["Wir wollen sie mit einer großen Party ", "."],
                clozeAnswers: ["überraschen"]
            } as Verb,
            {
                id: createWordId("a2-14-fest-004"),
                wordType: "noun",
                german: "Vorbereitung",
                article: "die",
                plural: "Vorbereitungen",
                english: "preparation",
                exampleGerman: [
                    { text: "Die Vorbereitungen", case: "nominativ" },
                    { text: " laufen", case: "verb" },
                    { text: " schon seit zwei Wochen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The preparations have been going on for two weeks already.",
                clozeParts: ["Die ", " laufen schon seit zwei Wochen."],
                clozeAnswers: ["Vorbereitungen"]
            } as Noun,
            {
                id: createWordId("a2-14-fest-005"),
                wordType: "noun",
                german: "Fest",
                article: "das",
                plural: "Feste",
                english: "celebration / party",
                exampleGerman: [
                    { text: "Das Fest", case: "nominativ" },
                    { text: " soll", case: "verb" },
                    { text: " im Garten", case: "dativ" },
                    { text: " stattfinden", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The celebration should take place in the garden.",
                clozeParts: ["Das ", " soll im Garten stattfinden."],
                clozeAnswers: ["Fest"]
            } as Noun,
            {
                id: createWordId("a2-14-fest-006"),
                wordType: "noun",
                german: "Festival",
                article: "das",
                plural: "Festivals",
                english: "festival",
                exampleGerman: [
                    { text: "Nach dem Festival-Besuch", case: "dativ" },
                    { text: " hatte", case: "verb" },
                    { text: " sie", case: "nominativ" },
                    { text: " die Idee für das Party-Motto", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After visiting the festival she had the idea for the party theme.",
                clozeParts: ["Nach dem ", "-Besuch hatte sie die Idee für das Party-Motto."],
                clozeAnswers: ["Festival"]
            } as Noun,
            {
                id: createWordId("a2-14-fest-007"),
                wordType: "verb",
                german: "feiern",
                english: "to celebrate",
                separable: false,
                coreForms: {
                    infinitive: "feiern",
                    thirdPerson: "feiert",
                    preterite: "feierte",
                    perfect: "hat gefeiert"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " werden", case: "verb" },
                    { text: " bis Mitternacht", case: "none" },
                    { text: " feiern", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We will celebrate until midnight.",
                clozeParts: ["Wir werden bis Mitternacht ", "."],
                clozeAnswers: ["feiern"]
            } as Verb,
            {
                id: createWordId("a2-14-fest-008"),
                wordType: "noun",
                german: "Feier",
                article: "die",
                plural: "Feiern",
                english: "celebration / party",
                exampleGerman: [
                    { text: "Die Feier", case: "nominativ" },
                    { text: " beginnt", case: "verb" },
                    { text: " um 19 Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The celebration begins at 7 PM.",
                clozeParts: ["Die ", " beginnt um 19 Uhr."],
                clozeAnswers: ["Feier"]
            } as Noun,
            {
                id: createWordId("a2-14-fest-009"),
                wordType: "verb",
                german: "gratulieren",
                english: "to congratulate",
                separable: false,
                coreForms: {
                    infinitive: "gratulieren",
                    thirdPerson: "gratuliert",
                    preterite: "gratulierte",
                    perfect: "hat gratuliert"
                },
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " gratulieren", case: "verb" },
                    { text: " ihr", case: "dativ" },
                    { text: " gleichzeitig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone congratulates her at the same time.",
                clozeParts: ["Alle ", " ihr gleichzeitig."],
                clozeAnswers: ["gratulieren"]
            } as Verb,
            {
                id: createWordId("a2-14-fest-010"),
                wordType: "noun",
                german: "Glückwunsch",
                article: "der",
                plural: "Glückwünsche",
                english: "congratulation",
                exampleGerman: [
                    { text: "Herzlichen Glückwunsch", case: "akkusativ" },
                    { text: " zum Geburtstag", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Happy birthday! (Congratulations on your birthday!)",
                clozeParts: ["Herzlichen ", " zum Geburtstag!"],
                clozeAnswers: ["Glückwunsch"]
            } as Noun,
            {
                id: createWordId("a2-14-fest-011"),
                wordType: "adjective",
                german: "herzlich",
                english: "warm / cordial",
                exampleGerman: [
                    { text: "Die herzliche Atmosphäre", case: "nominativ" },
                    { text: " macht", case: "verb" },
                    { text: " das Fest", case: "akkusativ" },
                    { text: " besonders schön", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The warm atmosphere makes the celebration especially nice.",
                clozeParts: ["Die ", "e Atmosphäre macht das Fest besonders schön."],
                clozeAnswers: ["herzlich"]
            } as Adjective,
            {
                id: createWordId("a2-14-fest-012"),
                wordType: "noun",
                german: "Kerze",
                article: "die",
                plural: "Kerzen",
                english: "candle",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " bläst", case: "verb" },
                    { text: " alle 30 Kerzen", case: "akkusativ" },
                    { text: " auf einmal", case: "none" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She blows out all 30 candles at once.",
                clozeParts: ["Sie bläst alle 30 ", " auf einmal aus."],
                clozeAnswers: ["Kerzen"]
            } as Noun
        ],

        // --- STORY TEIL 2: Die Einladungen (12 Wörter) ---
        "Einladungen": [
            {
                id: createWordId("a2-14-einl-001"),
                wordType: "verb",
                german: "einladen",
                english: "to invite",
                separable: false,
                coreForms: {
                    infinitive: "einladen",
                    thirdPerson: "lädt ein",
                    preterite: "lud ein",
                    perfect: "hat eingeladen"
                },
                exampleGerman: [
                    { text: "Der Bruder", case: "nominativ" },
                    { text: " lädt", case: "verb" },
                    { text: " heimlich", case: "none" },
                    { text: " alle Freunde", case: "akkusativ" },
                    { text: " ein", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The brother secretly invites all friends.",
                clozeParts: ["Der Bruder ", " heimlich alle Freunde ", "."],
                clozeAnswers: ["lädt", "ein"]
            } as Verb,
            {
                id: createWordId("a2-14-einl-002"),
                wordType: "noun",
                german: "Einladung",
                article: "die",
                plural: "Einladungen",
                english: "invitation",
                exampleGerman: [
                    { text: "Die Einladungen", case: "nominativ" },
                    { text: " wurden", case: "verb" },
                    { text: " per WhatsApp", case: "none" },
                    { text: " verschickt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The invitations were sent via WhatsApp.",
                clozeParts: ["Die ", " wurden per WhatsApp verschickt."],
                clozeAnswers: ["Einladungen"]
            } as Noun,
            {
                id: createWordId("a2-14-einl-003"),
                wordType: "noun",
                german: "Party",
                article: "die",
                plural: "Partys",
                english: "party",
                exampleGerman: [
                    { text: "Die Party", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " eine Überraschung", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The party is a surprise.",
                clozeParts: ["Die ", " ist eine Überraschung."],
                clozeAnswers: ["Party"]
            } as Noun,
            {
                id: createWordId("a2-14-einl-004"),
                wordType: "noun",
                german: "Gast",
                article: "der",
                plural: "Gäste",
                english: "guest",
                exampleGerman: [
                    { text: "Die Gäste", case: "nominativ" },
                    { text: " verstecken sich", case: "verb" },
                    { text: " im Wohnzimmer", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The guests hide in the living room.",
                clozeParts: ["Die ", " verstecken sich im Wohnzimmer."],
                clozeAnswers: ["Gäste"]
            } as Noun,
            {
                id: createWordId("a2-14-einl-005"),
                wordType: "interjection",
                german: "willkommen",
                english: "welcome",
                exampleGerman: [
                    { text: "Willkommen", case: "none" },
                    { text: " zur Überraschungsparty", case: "dativ" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Welcome to the surprise party!",
                clozeParts: ["", " zur Überraschungsparty!"],
                clozeAnswers: ["Willkommen"]
            } as Interjection,
            {
                id: createWordId("a2-14-einl-006"),
                wordType: "verb",
                german: "kommen",
                english: "to come",
                separable: false,
                coreForms: {
                    infinitive: "kommen",
                    thirdPerson: "kommt",
                    preterite: "kam",
                    perfect: "ist gekommen"
                },
                exampleGerman: [
                    { text: "Fast alle", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " gekommen", case: "verb" },
                    { text: ", nur zwei haben abgesagt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Almost everyone came, only two canceled.",
                clozeParts: ["Fast alle sind ", ", nur zwei haben abgesagt."],
                clozeAnswers: ["gekommen"]
            } as Verb,
            {
                id: createWordId("a2-14-einl-007"),
                wordType: "verb",
                german: "teilnehmen",
                english: "to participate",
                separable: false,
                coreForms: {
                    infinitive: "teilnehmen",
                    thirdPerson: "nimmt teil",
                    preterite: "nahm teil",
                    perfect: "hat teilgenommen"
                },
                exampleGerman: [
                    { text: "30 Personen", case: "nominativ" },
                    { text: " nehmen", case: "verb" },
                    { text: " an der Feier", case: "dativ" },
                    { text: " teil", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "30 people are participating in the celebration.",
                clozeParts: ["30 Personen ", " an der Feier ", "."],
                clozeAnswers: ["nehmen", "teil"]
            } as Verb,
            {
                id: createWordId("a2-14-einl-008"),
                wordType: "verb",
                german: "dabei sein",
                english: "to be there / present",
                separable: false,
                coreForms: {
                    infinitive: "dabei sein",
                    thirdPerson: "ist dabei",
                    preterite: "war dabei",
                    perfect: "ist dabei gewesen"
                },
                exampleGerman: [
                    { text: "Auch die Großeltern", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " dabei", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The grandparents are also there.",
                clozeParts: ["Auch die Großeltern sind ", "."],
                clozeAnswers: ["dabei"]
            } as Verb,
            {
                id: createWordId("a2-14-einl-009"),
                wordType: "verb",
                german: "besuchen",
                english: "to visit",
                separable: false,
                coreForms: {
                    infinitive: "besuchen",
                    thirdPerson: "besucht",
                    preterite: "besuchte",
                    perfect: "hat besucht"
                },
                exampleGerman: [
                    { text: "Die Tante", case: "nominativ" },
                    { text: " besucht", case: "verb" },
                    { text: " uns", case: "akkusativ" },
                    { text: " extra für die Party", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The aunt visits us especially for the party.",
                clozeParts: ["Die Tante ", " uns extra für die Party."],
                clozeAnswers: ["besucht"]
            } as Verb,
            {
                id: createWordId("a2-14-einl-010"),
                wordType: "noun",
                german: "Besuch",
                article: "der",
                plural: "Besuche",
                english: "visit",
                exampleGerman: [
                    { text: "Der Besuch", case: "nominativ" },
                    { text: " aus Hamburg", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " eine große Überraschung", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The visit from Hamburg is a big surprise.",
                clozeParts: ["Der ", " aus Hamburg ist eine große Überraschung."],
                clozeAnswers: ["Besuch"]
            } as Noun,
            {
                id: createWordId("a2-14-einl-011"),
                wordType: "adjective",
                german: "verabredet",
                english: "arranged / having an appointment",
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " für 18:30 Uhr", case: "none" },
                    { text: " verabredet", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone is arranged to meet at 6:30 PM.",
                clozeParts: ["Alle sind für 18:30 Uhr ", "."],
                clozeAnswers: ["verabredet"]
            } as Adjective,
            {
                id: createWordId("a2-14-einl-012"),
                wordType: "noun",
                german: "Veranstaltung",
                article: "die",
                plural: "Veranstaltungen",
                english: "event",
                exampleGerman: [
                    { text: "Die Veranstaltung", case: "nominativ" },
                    { text: " wurde", case: "verb" },
                    { text: " wochenlang", case: "none" },
                    { text: " geplant", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The event was planned for weeks.",
                clozeParts: ["Die ", " wurde wochenlang geplant."],
                clozeAnswers: ["Veranstaltung"]
            } as Noun
        ],

        // --- STORY TEIL 3: Geschenke und Feier (11 Wörter) ---
        "Geschenke": [
            {
                id: createWordId("a2-14-gesch-001"),
                wordType: "noun",
                german: "Geschenk",
                article: "das",
                plural: "Geschenke",
                english: "gift / present",
                exampleGerman: [
                    { text: "Die Geschenke", case: "nominativ" },
                    { text: " liegen", case: "verb" },
                    { text: " versteckt", case: "none" },
                    { text: " im Schlafzimmer", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The gifts are hidden in the bedroom.",
                clozeParts: ["Die ", " liegen versteckt im Schlafzimmer."],
                clozeAnswers: ["Geschenke"]
            } as Noun,
            {
                id: createWordId("a2-14-gesch-002"),
                wordType: "verb",
                german: "schenken",
                english: "to give (as a gift)",
                separable: false,
                coreForms: {
                    infinitive: "schenken",
                    thirdPerson: "schenkt",
                    preterite: "schenkte",
                    perfect: "hat geschenkt"
                },
                exampleGerman: [
                    { text: "Die Eltern", case: "nominativ" },
                    { text: " schenken", case: "verb" },
                    { text: " ihr", case: "dativ" },
                    { text: " eine Reise", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The parents give her a trip as a gift.",
                clozeParts: ["Die Eltern ", " ihr eine Reise."],
                clozeAnswers: ["schenken"]
            } as Verb,
            {
                id: createWordId("a2-14-gesch-003"),
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
                    { text: "Sie", case: "nominativ" },
                    { text: " bekommt", case: "verb" },
                    { text: " viele schöne Sachen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She receives many nice things.",
                clozeParts: ["Sie ", " viele schöne Sachen."],
                clozeAnswers: ["bekommt"]
            } as Verb,
            {
                id: createWordId("a2-14-gesch-004"),
                wordType: "verb",
                german: "geben",
                english: "to give",
                separable: false,
                coreForms: {
                    infinitive: "geben",
                    thirdPerson: "gibt",
                    preterite: "gab",
                    perfect: "hat gegeben"
                },
                exampleGerman: [
                    { text: "Jeder", case: "nominativ" },
                    { text: " gibt", case: "verb" },
                    { text: " ihr", case: "dativ" },
                    { text: " etwas Persönliches", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone gives her something personal.",
                clozeParts: ["Jeder ", " ihr etwas Persönliches."],
                clozeAnswers: ["gibt"]
            } as Verb,
            {
                id: createWordId("a2-14-gesch-005"),
                wordType: "verb",
                german: "danken",
                english: "to thank",
                separable: false,
                coreForms: {
                    infinitive: "danken",
                    thirdPerson: "dankt",
                    preterite: "dankte",
                    perfect: "hat gedankt"
                },
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " dankt", case: "verb" },
                    { text: " allen", case: "dativ" },
                    { text: " für die Überraschung", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She thanks everyone for the surprise.",
                clozeParts: ["Sie ", " allen für die Überraschung."],
                clozeAnswers: ["dankt"]
            } as Verb,
            {
                id: createWordId("a2-14-gesch-006"),
                wordType: "noun",
                german: "Dank",
                article: "der",
                plural: null,
                english: "thanks",
                exampleGerman: [
                    { text: "Vielen Dank", case: "akkusativ" },
                    { text: " für alles", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Many thanks for everything!",
                clozeParts: ["Vielen ", " für alles!"],
                clozeAnswers: ["Dank"]
            } as Noun,
            {
                id: createWordId("a2-14-gesch-007"),
                wordType: "interjection",
                german: "danke",
                english: "thank you",
                exampleGerman: [
                    { text: "Danke", case: "none" },
                    { text: ", dass ihr alle gekommen seid", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Thank you that you all came!",
                clozeParts: ["", ", dass ihr alle gekommen seid!"],
                clozeAnswers: ["Danke"]
            } as Interjection,
            {
                id: createWordId("a2-14-gesch-008"),
                wordType: "verb",
                german: "bedanken",
                english: "to thank",
                separable: false,
                reflexive: true,
                coreForms: {
                    infinitive: "sich bedanken",
                    thirdPerson: "bedankt sich",
                    preterite: "bedankte sich",
                    perfect: "hat sich bedankt"
                },
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " bedankt sich", case: "verb" },
                    { text: " mit Tränen in den Augen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She thanks everyone with tears in her eyes.",
                clozeParts: ["Sie ", " mit Tränen in den Augen."],
                clozeAnswers: ["bedankt sich"]
            } as Verb,
            {
                id: createWordId("a2-14-gesch-009"),
                wordType: "verb",
                german: "überreichen",
                english: "to hand over / present",
                separable: false,
                coreForms: {
                    infinitive: "überreichen",
                    thirdPerson: "überreicht",
                    preterite: "überreichte",
                    perfect: "hat überreicht"
                },
                exampleGerman: [
                    { text: "Der Bruder", case: "nominativ" },
                    { text: " überreicht", case: "verb" },
                    { text: " ihr", case: "dativ" },
                    { text: " den großen Blumenstrauß", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The brother presents her the big bouquet.",
                clozeParts: ["Der Bruder ", " ihr den großen Blumenstrauß."],
                clozeAnswers: ["überreicht"]
            } as Verb,
            {
                id: createWordId("a2-14-gesch-010"),
                wordType: "verb",
                german: "anstoßen",
                english: "to toast / clink glasses",
                separable: false,
                coreForms: {
                    infinitive: "anstoßen",
                    thirdPerson: "stößt an",
                    preterite: "stieß an",
                    perfect: "hat angestoßen"
                },
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " stoßen", case: "verb" },
                    { text: " mit Sekt", case: "dativ" },
                    { text: " an", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone toasts with sparkling wine.",
                clozeParts: ["Alle ", " mit Sekt ", "."],
                clozeAnswers: ["stoßen", "an"]
            } as Verb,
            {
                id: createWordId("a2-14-gesch-011"),
                wordType: "verb",
                german: "tanzen",
                english: "to dance",
                separable: false,
                coreForms: {
                    infinitive: "tanzen",
                    thirdPerson: "tanzt",
                    preterite: "tanzte",
                    perfect: "hat getanzt"
                },
                exampleGerman: [
                    { text: "Nach dem Essen", case: "none" },
                    { text: " tanzen", case: "verb" },
                    { text: " alle", case: "nominativ" },
                    { text: " bis spät in die Nacht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After dinner everyone dances until late at night.",
                clozeParts: ["Nach dem Essen ", " alle bis spät in die Nacht."],
                clozeAnswers: ["tanzen"]
            } as Verb
        ]
    }
});