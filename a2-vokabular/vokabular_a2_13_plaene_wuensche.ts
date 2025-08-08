// vokabular_a2_13_plaene_wuensche.ts
// Thema 13: Pläne und Wünsche (38 Wörter)
// Story: Ein Student plant seine A2-Deutschprüfung

import type { VocabularyStructure, Noun, Verb, Adjective, Adverb, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_13_plaene_wuensche: VocabularyStructure = createVocabulary({
    "Pläne und Wünsche": {
        
        // --- STORY TEIL 1: Die Planung beginnt (12 Wörter) ---
        "Zukunftspläne": [
            {
                id: createWordId("a2-13-zukunft-001"),
                wordType: "noun",
                german: "Plan",
                article: "der",
                plural: "Pläne",
                english: "plan",
                exampleGerman: [
                    { text: "Der Student", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " einen klaren Plan", case: "akkusativ" },
                    { text: ": Er will die A2-Prüfung im Juni schaffen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The student has a clear plan: He wants to pass the A2 exam in June.",
                clozeParts: ["Der Student hat einen klaren ", ": Er will die B1-Prüfung im Juni schaffen."],
                clozeAnswers: ["Plan"]
            } as Noun,
            {
                id: createWordId("a2-13-zukunft-002"),
                wordType: "verb",
                german: "planen",
                english: "to plan",
                separable: false,
                coreForms: {
                    infinitive: "planen",
                    thirdPerson: "plant",
                    preterite: "plante",
                    perfect: "hat geplant"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " plant", case: "verb" },
                    { text: " jeden Tag", case: "none" },
                    { text: " drei Stunden", case: "akkusativ" },
                    { text: " zu lernen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He plans to study three hours every day.",
                clozeParts: ["Er ", " jeden Tag drei Stunden zu lernen."],
                clozeAnswers: ["plant"]
            } as Verb,
            {
                id: createWordId("a2-13-zukunft-003"),
                wordType: "noun",
                german: "Absicht",
                article: "die",
                plural: "Absichten",
                english: "intention",
                exampleGerman: [
                    { text: "Seine Absicht", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " es, danach", case: "none" },
                    { text: " in Deutschland", case: "dativ" },
                    { text: " zu arbeiten", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "His intention is to work in Germany afterwards.",
                clozeParts: ["Seine ", " ist es, danach in Deutschland zu arbeiten."],
                clozeAnswers: ["Absicht"]
            } as Noun,
            {
                id: createWordId("a2-13-zukunft-004"),
                wordType: "noun",
                german: "Projekt",
                article: "das",
                plural: "Projekte",
                english: "project",
                exampleGerman: [
                    { text: "Das Prüfungsprojekt", case: "nominativ" },
                    { text: " dauert", case: "verb" },
                    { text: " insgesamt", case: "none" },
                    { text: " sechs Monate", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The exam project takes six months in total.",
                clozeParts: ["Das Prüfungs", " dauert insgesamt sechs Monate."],
                clozeAnswers: ["projekt"]
            } as Noun,
            {
                id: createWordId("a2-13-zukunft-005"),
                wordType: "noun",
                german: "Ziel",
                article: "das",
                plural: "Ziele",
                english: "goal",
                exampleGerman: [
                    { text: "Sein wichtigstes Ziel", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " das A2-Zertifikat", case: "nominativ" },
                    { text: " für die Arbeit", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "His most important goal is the A2 certificate for work.",
                clozeParts: ["Sein wichtigstes ", " ist das A2-Zertifikat für die Arbeit."],
                clozeAnswers: ["Ziel"]
            } as Noun,
            {
                id: createWordId("a2-13-zukunft-006"),
                wordType: "verb",
                german: "werden",
                english: "will / to become",
                separable: false,
                coreForms: {
                    infinitive: "werden",
                    thirdPerson: "wird",
                    preterite: "wurde",
                    perfect: "ist geworden"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " wird", case: "verb" },
                    { text: " jeden Tag", case: "none" },
                    { text: " besser", case: "none" },
                    { text: " werden", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He will get better every day.",
                clozeParts: ["Er ", " jeden Tag besser werden."],
                clozeAnswers: ["wird"]
            } as Verb,
            {
                id: createWordId("a2-13-zukunft-007"),
                wordType: "verb",
                german: "sollen",
                english: "should / supposed to",
                separable: false,
                coreForms: {
                    infinitive: "sollen",
                    thirdPerson: "soll",
                    preterite: "sollte",
                    perfect: "hat gesollt"
                },
                exampleGerman: [
                    { text: "Der Lehrer sagt, er", case: "nominativ" },
                    { text: " soll", case: "verb" },
                    { text: " mehr", case: "none" },
                    { text: " Übungen", case: "akkusativ" },
                    { text: " machen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teacher says he should do more exercises.",
                clozeParts: ["Der Lehrer sagt, er ", " mehr Übungen machen."],
                clozeAnswers: ["soll"]
            } as Verb,
            {
                id: createWordId("a2-13-zukunft-008"),
                wordType: "verb",
                german: "wollen",
                english: "to want",
                separable: false,
                coreForms: {
                    infinitive: "wollen",
                    thirdPerson: "will",
                    preterite: "wollte",
                    perfect: "hat gewollt"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " will", case: "verb" },
                    { text: " unbedingt", case: "none" },
                    { text: " die Prüfung", case: "akkusativ" },
                    { text: " bestehen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He absolutely wants to pass the exam.",
                clozeParts: ["Er ", " unbedingt die Prüfung bestehen."],
                clozeAnswers: ["will"]
            } as Verb,
            {
                id: createWordId("a2-13-zukunft-009"),
                wordType: "verb",
                german: "vorhaben",
                english: "to intend / plan",
                separable: false,
                coreForms: {
                    infinitive: "vorhaben",
                    thirdPerson: "hat vor",
                    preterite: "hatte vor",
                    perfect: "hat vorgehabt"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " hat vor", case: "verb" },
                    { text: ", einen Vorbereitungskurs", case: "akkusativ" },
                    { text: " zu besuchen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He intends to attend a preparation course.",
                clozeParts: ["Er ", ", einen Vorbereitungskurs zu besuchen."],
                clozeAnswers: ["hat vor"]
            } as Verb,
            {
                id: createWordId("a2-13-zukunft-010"),
                wordType: "verb",
                german: "versprechen",
                english: "to promise",
                separable: false,
                coreForms: {
                    infinitive: "versprechen",
                    thirdPerson: "verspricht",
                    preterite: "versprach",
                    perfect: "hat versprochen"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " verspricht", case: "verb" },
                    { text: " seinen Eltern", case: "dativ" },
                    { text: ", fleißig zu lernen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He promises his parents to study diligently.",
                clozeParts: ["Er ", " seinen Eltern, fleißig zu lernen."],
                clozeAnswers: ["verspricht"]
            } as Verb,
            {
                id: createWordId("a2-13-zukunft-011"),
                wordType: "noun",
                german: "Zukunft",
                article: "die",
                plural: null,
                english: "future",
                exampleGerman: [
                    { text: "In der Zukunft", case: "dativ" },
                    { text: " möchte", case: "verb" },
                    { text: " er", case: "nominativ" },
                    { text: " perfekt Deutsch", case: "akkusativ" },
                    { text: " sprechen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the future he wants to speak perfect German.",
                clozeParts: ["In der ", " möchte er perfekt Deutsch sprechen."],
                clozeAnswers: ["Zukunft"]
            } as Noun,
            {
                id: createWordId("a2-13-zukunft-012"),
                wordType: "adverb",
                german: "bald",
                english: "soon",
                exampleGerman: [
                    { text: "Die Anmeldung", case: "nominativ" },
                    { text: " für die Prüfung", case: "none" },
                    { text: " beginnt", case: "verb" },
                    { text: " bald", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Registration for the exam begins soon.",
                clozeParts: ["Die Anmeldung für die Prüfung beginnt ", "."],
                clozeAnswers: ["bald"]
            } as Adverb
        ],

        // --- STORY TEIL 2: Hoffnungen und Zweifel (12 Wörter) ---
        "Wünsche und Träume": [
            {
                id: createWordId("a2-13-wunsch-001"),
                wordType: "noun",
                german: "Wunsch",
                article: "der",
                plural: "Wünsche",
                english: "wish",
                exampleGerman: [
                    { text: "Sein größter Wunsch", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " es, später", case: "none" },
                    { text: " in einem Büro", case: "dativ" },
                    { text: " zu arbeiten", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "His biggest wish is to work in an office later.",
                clozeParts: ["Sein größter ", " ist es, später in einem Büro zu arbeiten."],
                clozeAnswers: ["Wunsch"]
            } as Noun,
            {
                id: createWordId("a2-13-wunsch-002"),
                wordType: "verb",
                german: "wünschen",
                english: "to wish",
                separable: false,
                coreForms: {
                    infinitive: "wünschen",
                    thirdPerson: "wünscht",
                    preterite: "wünschte",
                    perfect: "hat gewünscht"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " wünscht sich", case: "verb" },
                    { text: " mehr Zeit", case: "akkusativ" },
                    { text: " zum Lernen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He wishes for more time to study.",
                clozeParts: ["Er ", " sich mehr Zeit zum Lernen."],
                clozeAnswers: ["wünscht"]
            } as Verb,
            {
                id: createWordId("a2-13-wunsch-003"),
                wordType: "verb",
                german: "träumen",
                english: "to dream",
                separable: false,
                coreForms: {
                    infinitive: "träumen",
                    thirdPerson: "träumt",
                    preterite: "träumte",
                    perfect: "hat geträumt"
                },
                exampleGerman: [
                    { text: "Nachts", case: "none" },
                    { text: " träumt", case: "verb" },
                    { text: " er", case: "nominativ" },
                    { text: " manchmal", case: "none" },
                    { text: " von der Prüfung", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "At night he sometimes dreams about the exam.",
                clozeParts: ["Nachts ", " er manchmal von der Prüfung."],
                clozeAnswers: ["träumt"]
            } as Verb,
            {
                id: createWordId("a2-13-wunsch-004"),
                wordType: "noun",
                german: "Traum",
                article: "der",
                plural: "Träume",
                english: "dream",
                exampleGerman: [
                    { text: "Ein Job in Deutschland", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " sein großer Traum", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "A job in Germany is his big dream.",
                clozeParts: ["Ein Job in Deutschland ist sein großer ", "."],
                clozeAnswers: ["Traum"]
            } as Noun,
            {
                id: createWordId("a2-13-wunsch-005"),
                wordType: "noun",
                german: "Idee",
                article: "die",
                plural: "Ideen",
                english: "idea",
                exampleGerman: [
                    { text: "Die Idee", case: "nominativ" },
                    { text: " mit dem Tandempartner", case: "none" },
                    { text: " war", case: "verb" },
                    { text: " sehr gut", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The idea with the tandem partner was very good.",
                clozeParts: ["Die ", " mit dem Tandempartner war sehr gut."],
                clozeAnswers: ["Idee"]
            } as Noun,
            {
                id: createWordId("a2-13-wunsch-006"),
                wordType: "verb",
                german: "vorstellen",
                english: "to imagine",
                separable: false,
                reflexive: true,
                coreForms: {
                    infinitive: "sich vorstellen",
                    thirdPerson: "stellt sich vor",
                    preterite: "stellte sich vor",
                    perfect: "hat sich vorgestellt"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " kann sich", case: "akkusativ" },
                    { text: " schon", case: "none" },
                    { text: " vorstellen", case: "verb" },
                    { text: ", wie die Prüfung sein wird", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He can already imagine what the exam will be like.",
                clozeParts: ["Er kann sich schon ", ", wie die Prüfung sein wird."],
                clozeAnswers: ["vorstellen"]
            } as Verb,
            {
                id: createWordId("a2-13-wunsch-007"),
                wordType: "verb",
                german: "hoffen",
                english: "to hope",
                separable: false,
                coreForms: {
                    infinitive: "hoffen",
                    thirdPerson: "hofft",
                    preterite: "hoffte",
                    perfect: "hat gehofft"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " hofft", case: "verb" },
                    { text: " auf eine gute Note", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He hopes for a good grade.",
                clozeParts: ["Er ", " auf eine gute Note."],
                clozeAnswers: ["hofft"]
            } as Verb,
            {
                id: createWordId("a2-13-wunsch-008"),
                wordType: "noun",
                german: "Hoffnung",
                article: "die",
                plural: "Hoffnungen",
                english: "hope",
                exampleGerman: [
                    { text: "Die Hoffnung", case: "nominativ" },
                    { text: " auf Erfolg", case: "none" },
                    { text: " motiviert", case: "verb" },
                    { text: " ihn", case: "akkusativ" },
                    { text: " jeden Tag", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The hope for success motivates him every day.",
                clozeParts: ["Die ", " auf Erfolg motiviert ihn jeden Tag."],
                clozeAnswers: ["Hoffnung"]
            } as Noun,
            {
                id: createWordId("a2-13-wunsch-009"),
                wordType: "adverb",
                german: "hoffentlich",
                english: "hopefully",
                exampleGerman: [
                    { text: "Hoffentlich", case: "none" },
                    { text: " klappt", case: "verb" },
                    { text: " alles", case: "nominativ" },
                    { text: " beim ersten Versuch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Hopefully everything works out on the first try.",
                clozeParts: ["", " klappt alles beim ersten Versuch."],
                clozeAnswers: ["Hoffentlich"]
            } as Adverb,
            {
                id: createWordId("a2-13-wunsch-010"),
                wordType: "verb",
                german: "möchten",
                english: "would like",
                separable: false,
                coreForms: {
                    infinitive: "möchten",
                    thirdPerson: "möchte",
                    preterite: "wollte",
                    perfect: "hat gewollt"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " möchte", case: "verb" },
                    { text: " gern", case: "none" },
                    { text: " einen Muttersprachler", case: "akkusativ" },
                    { text: " kennenlernen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He would like to meet a native speaker.",
                clozeParts: ["Er ", " gern einen Muttersprachler kennenlernen."],
                clozeAnswers: ["möchte"]
            } as Verb,
            {
                id: createWordId("a2-13-wunsch-011"),
                wordType: "verb",
                german: "erwarten",
                english: "to expect",
                separable: false,
                coreForms: {
                    infinitive: "erwarten",
                    thirdPerson: "erwartet",
                    preterite: "erwartete",
                    perfect: "hat erwartet"
                },
                exampleGerman: [
                    { text: "Die Prüfer", case: "nominativ" },
                    { text: " erwarten", case: "verb" },
                    { text: " gute Deutschkenntnisse", case: "akkusativ" },
                    { text: " auf A2-Niveau", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The examiners expect good German skills at A2 level.",
                clozeParts: ["Die Prüfer ", " gute Deutschkenntnisse auf A2-Niveau."],
                clozeAnswers: ["erwarten"]
            } as Verb,
            {
                id: createWordId("a2-13-wunsch-012"),
                wordType: "adjective",
                german: "wunderbar",
                english: "wonderful",
                exampleGerman: [
                    { text: "Es wäre", case: "none" },
                    { text: " wunderbar", case: "none" },
                    { text: ", die Prüfung", case: "akkusativ" },
                    { text: " zu bestehen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It would be wonderful to pass the exam.",
                clozeParts: ["Es wäre ", ", die Prüfung zu bestehen."],
                clozeAnswers: ["wunderbar"]
            } as Adjective
        ],

        // --- STORY TEIL 3: Erfolg und Misserfolg (14 Wörter) ---
        "Ziele": [
            {
                id: createWordId("a2-13-ziel-001"),
                wordType: "verb",
                german: "erreichen",
                english: "to reach / achieve",
                separable: false,
                coreForms: {
                    infinitive: "erreichen",
                    thirdPerson: "erreicht",
                    preterite: "erreichte",
                    perfect: "hat erreicht"
                },
                exampleGerman: [
                    { text: "Nach sechs Monaten", case: "none" },
                    { text: " erreicht", case: "verb" },
                    { text: " er", case: "nominativ" },
                    { text: " endlich", case: "none" },
                    { text: " sein Ziel", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After six months he finally reaches his goal.",
                clozeParts: ["Nach sechs Monaten ", " er endlich sein Ziel."],
                clozeAnswers: ["erreicht"]
            } as Verb,
            {
                id: createWordId("a2-13-ziel-002"),
                wordType: "verb",
                german: "schaffen",
                english: "to manage / accomplish",
                separable: false,
                coreForms: {
                    infinitive: "schaffen",
                    thirdPerson: "schafft",
                    preterite: "schaffte",
                    perfect: "hat geschafft"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " es", case: "akkusativ" },
                    { text: " geschafft", case: "verb" },
                    { text: "! Die Prüfung ist bestanden", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "He made it! The exam is passed!",
                clozeParts: ["Er hat es ", "! Die Prüfung ist bestanden!"],
                clozeAnswers: ["geschafft"]
            } as Verb,
            {
                id: createWordId("a2-13-ziel-003"),
                wordType: "verb",
                german: "gelingen",
                english: "to succeed",
                separable: false,
                coreForms: {
                    infinitive: "gelingen",
                    thirdPerson: "gelingt",
                    preterite: "gelang",
                    perfect: "ist gelungen"
                },
                exampleGerman: [
                    { text: "Die mündliche Prüfung", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " ihm", case: "dativ" },
                    { text: " besonders gut", case: "none" },
                    { text: " gelungen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The oral exam went particularly well for him.",
                clozeParts: ["Die mündliche Prüfung ist ihm besonders gut ", "."],
                clozeAnswers: ["gelungen"]
            } as Verb,
            {
                id: createWordId("a2-13-ziel-004"),
                wordType: "verb",
                german: "klappen",
                english: "to work out (colloquial)",
                separable: false,
                coreForms: {
                    infinitive: "klappen",
                    thirdPerson: "klappt",
                    preterite: "klappte",
                    perfect: "hat geklappt"
                },
                exampleGerman: [
                    { text: "Mit dem Hörverständnis", case: "none" },
                    { text: " hat", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " super", case: "none" },
                    { text: " geklappt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The listening comprehension worked out great.",
                clozeParts: ["Mit dem Hörverständnis hat es super ", "."],
                clozeAnswers: ["geklappt"]
            } as Verb,
            {
                id: createWordId("a2-13-ziel-005"),
                wordType: "adjective",
                german: "erfolgreich",
                english: "successful",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " war", case: "verb" },
                    { text: " sehr erfolgreich", case: "none" },
                    { text: " bei der Prüfung", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He was very successful in the exam.",
                clozeParts: ["Er war sehr ", " bei der Prüfung."],
                clozeAnswers: ["erfolgreich"]
            } as Adjective,
            {
                id: createWordId("a2-13-ziel-006"),
                wordType: "noun",
                german: "Erfolg",
                article: "der",
                plural: "Erfolge",
                english: "success",
                exampleGerman: [
                    { text: "Der Erfolg", case: "nominativ" },
                    { text: " motiviert", case: "verb" },
                    { text: " ihn", case: "akkusativ" },
                    { text: " weiterzulernen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The success motivates him to continue learning.",
                clozeParts: ["Der ", " motiviert ihn weiterzulernen."],
                clozeAnswers: ["Erfolg"]
            } as Noun,
            {
                id: createWordId("a2-13-ziel-007"),
                wordType: "verb",
                german: "versuchen",
                english: "to try",
                separable: false,
                coreForms: {
                    infinitive: "versuchen",
                    thirdPerson: "versucht",
                    preterite: "versuchte",
                    perfect: "hat versucht"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " versucht", case: "verb" },
                    { text: " jeden Tag", case: "none" },
                    { text: " neue Wörter", case: "akkusativ" },
                    { text: " zu lernen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He tries to learn new words every day.",
                clozeParts: ["Er ", " jeden Tag neue Wörter zu lernen."],
                clozeAnswers: ["versucht"]
            } as Verb,
            {
                id: createWordId("a2-13-ziel-008"),
                wordType: "verb",
                german: "probieren",
                english: "to try / test",
                separable: false,
                coreForms: {
                    infinitive: "probieren",
                    thirdPerson: "probiert",
                    preterite: "probierte",
                    perfect: "hat probiert"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " probiert", case: "verb" },
                    { text: " verschiedene Lernmethoden", case: "akkusativ" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He tries out different learning methods.",
                clozeParts: ["Er ", " verschiedene Lernmethoden aus."],
                clozeAnswers: ["probiert"]
            } as Verb,
            {
                id: createWordId("a2-13-ziel-009"),
                wordType: "verb",
                german: "beginnen",
                english: "to begin",
                separable: false,
                coreForms: {
                    infinitive: "beginnen",
                    thirdPerson: "beginnt",
                    preterite: "begann",
                    perfect: "hat begonnen"
                },
                exampleGerman: [
                    { text: "Der Kurs", case: "nominativ" },
                    { text: " beginnt", case: "verb" },
                    { text: " nächste Woche", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The course begins next week.",
                clozeParts: ["Der Kurs ", " nächste Woche."],
                clozeAnswers: ["beginnt"]
            } as Verb,
            {
                id: createWordId("a2-13-ziel-010"),
                wordType: "noun",
                german: "Anfang",
                article: "der",
                plural: "Anfänge",
                english: "beginning",
                exampleGerman: [
                    { text: "Am Anfang", case: "dativ" },
                    { text: " war", case: "verb" },
                    { text: " alles", case: "nominativ" },
                    { text: " sehr schwierig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the beginning everything was very difficult.",
                clozeParts: ["Am ", " war alles sehr schwierig."],
                clozeAnswers: ["Anfang"]
            } as Noun,
            {
                id: createWordId("a2-13-ziel-011"),
                wordType: "verb",
                german: "beenden",
                english: "to finish / end",
                separable: false,
                coreForms: {
                    infinitive: "beenden",
                    thirdPerson: "beendet",
                    preterite: "beendete",
                    perfect: "hat beendet"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " beendet", case: "verb" },
                    { text: " den Kurs", case: "akkusativ" },
                    { text: " im Mai", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He finishes the course in May.",
                clozeParts: ["Er ", " den Kurs im Mai."],
                clozeAnswers: ["beendet"]
            } as Verb,
            {
                id: createWordId("a2-13-ziel-012"),
                wordType: "noun",
                german: "Ende",
                article: "das",
                plural: "Enden",
                english: "end",
                exampleGerman: [
                    { text: "Am Ende", case: "dativ" },
                    { text: " hat", case: "verb" },
                    { text: " sich", case: "akkusativ" },
                    { text: " die ganze Arbeit", case: "nominativ" },
                    { text: " gelohnt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the end all the work was worth it.",
                clozeParts: ["Am ", " hat sich die ganze Arbeit gelohnt."],
                clozeAnswers: ["Ende"]
            } as Noun,
            {
                id: createWordId("a2-13-ziel-013"),
                wordType: "adjective",
                german: "möglich",
                english: "possible",
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " möglich", case: "none" },
                    { text: ", die Prüfung", case: "akkusativ" },
                    { text: " zu wiederholen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It is possible to repeat the exam.",
                clozeParts: ["Es ist ", ", die Prüfung zu wiederholen."],
                clozeAnswers: ["möglich"]
            } as Adjective,
            {
                id: createWordId("a2-13-ziel-014"),
                wordType: "adjective",
                german: "unmöglich",
                english: "impossible",
                exampleGerman: [
                    { text: "Ohne Vorbereitung", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " fast unmöglich", case: "none" },
                    { text: " zu bestehen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Without preparation it is almost impossible to pass.",
                clozeParts: ["Ohne Vorbereitung ist es fast ", " zu bestehen."],
                clozeAnswers: ["unmöglich"]
            } as Adjective
        ]
    }
});