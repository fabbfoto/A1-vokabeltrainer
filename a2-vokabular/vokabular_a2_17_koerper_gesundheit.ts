// vokabular_a2_17_koerper_gesundheit.ts
// Thema 17: Körper und Gesundheit (40 Wörter)
// Story: Grippezeit in der Familie

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_17_koerper_gesundheit: VocabularyStructure = createVocabulary({
    "Körper und Gesundheit": {
        
        // --- STORY TEIL 1: Die ersten Symptome (15 Wörter) ---
        "Körperteile": [
            {
                id: createWordId("a2-17-koerper-001"),
                wordType: "noun",
                german: "Kopf",
                article: "der",
                plural: "Köpfe",
                english: "head",
                exampleGerman: [
                    { text: "Der Vater", case: "nominativ" },
                    { text: " hält sich", case: "verb" },
                    { text: " den schmerzenden Kopf", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The father holds his aching head.",
                clozeParts: ["Der Vater hält sich den schmerzenden ", "."],
                clozeAnswers: ["Kopf"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-002"),
                wordType: "noun",
                german: "Hals",
                article: "der",
                plural: "Hälse",
                english: "throat / neck",
                exampleGerman: [
                    { text: "Die Tochter", case: "nominativ" },
                    { text: " klagt", case: "verb" },
                    { text: " über", case: "none" },
                    { text: " einen dicken Hals", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The daughter complains about a swollen throat.",
                clozeParts: ["Die Tochter klagt über einen dicken ", "."],
                clozeAnswers: ["Hals"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-003"),
                wordType: "noun",
                german: "Körper",
                article: "der",
                plural: "Körper",
                english: "body",
                exampleGerman: [
                    { text: "Der ganze Körper", case: "nominativ" },
                    { text: " tut", case: "verb" },
                    { text: " weh", case: "verb" },
                    { text: " bei der Grippe", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The whole body hurts with the flu.",
                clozeParts: ["Der ganze ", " tut weh bei der Grippe."],
                clozeAnswers: ["Körper"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-004"),
                wordType: "noun",
                german: "Arm",
                article: "der",
                plural: "Arme",
                english: "arm",
                exampleGerman: [
                    { text: "Die Arme", case: "nominativ" },
                    { text: " fühlen sich", case: "verb" },
                    { text: " schwer an", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The arms feel heavy.",
                clozeParts: ["Die ", " fühlen sich schwer an."],
                clozeAnswers: ["Arme"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-005"),
                wordType: "noun",
                german: "Bein",
                article: "das",
                plural: "Beine",
                english: "leg",
                exampleGerman: [
                    { text: "Die Beine", case: "nominativ" },
                    { text: " zittern", case: "verb" },
                    { text: " vor Schwäche", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The legs tremble from weakness.",
                clozeParts: ["Die ", " zittern vor Schwäche."],
                clozeAnswers: ["Beine"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-006"),
                wordType: "noun",
                german: "Bauch",
                article: "der",
                plural: "Bäuche",
                english: "stomach / belly",
                exampleGerman: [
                    { text: "Der Sohn", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " Bauchschmerzen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The son has stomach pain.",
                clozeParts: ["Der Sohn hat ", "schmerzen."],
                clozeAnswers: ["Bauch"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-007"),
                wordType: "noun",
                german: "Auge",
                article: "das",
                plural: "Augen",
                english: "eye",
                exampleGerman: [
                    { text: "Die Augen", case: "nominativ" },
                    { text: " brennen", case: "verb" },
                    { text: " und tränen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The eyes burn and water.",
                clozeParts: ["Die ", " brennen und tränen."],
                clozeAnswers: ["Augen"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-008"),
                wordType: "noun",
                german: "Ohr",
                article: "das",
                plural: "Ohren",
                english: "ear",
                exampleGerman: [
                    { text: "Die Ohren", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " zu", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The ears are blocked.",
                clozeParts: ["Die ", " sind zu."],
                clozeAnswers: ["Ohren"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-009"),
                wordType: "noun",
                german: "Mund",
                article: "der",
                plural: "Münder",
                english: "mouth",
                exampleGerman: [
                    { text: "Der Mund", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " ganz trocken", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The mouth is completely dry.",
                clozeParts: ["Der ", " ist ganz trocken."],
                clozeAnswers: ["Mund"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-010"),
                wordType: "noun",
                german: "Zahn",
                article: "der",
                plural: "Zähne",
                english: "tooth",
                exampleGerman: [
                    { text: "Sogar die Zähne", case: "nominativ" },
                    { text: " tun", case: "verb" },
                    { text: " weh", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Even the teeth hurt.",
                clozeParts: ["Sogar die ", " tun weh."],
                clozeAnswers: ["Zähne"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-011"),
                wordType: "noun",
                german: "Hand",
                article: "die",
                plural: "Hände",
                english: "hand",
                exampleGerman: [
                    { text: "Die Hände", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " eiskalt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The hands are ice cold.",
                clozeParts: ["Die ", " sind eiskalt."],
                clozeAnswers: ["Hände"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-012"),
                wordType: "noun",
                german: "Fuß",
                article: "der",
                plural: "Füße",
                english: "foot",
                exampleGerman: [
                    { text: "Die Füße", case: "nominativ" },
                    { text: " wollen", case: "verb" },
                    { text: " nicht mehr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The feet don't want to go anymore.",
                clozeParts: ["Die ", " wollen nicht mehr."],
                clozeAnswers: ["Füße"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-013"),
                wordType: "noun",
                german: "Gesicht",
                article: "das",
                plural: "Gesichter",
                english: "face",
                exampleGerman: [
                    { text: "Das Gesicht", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " ganz rot", case: "none" },
                    { text: " vom Fieber", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The face is all red from fever.",
                clozeParts: ["Das ", " ist ganz rot vom Fieber."],
                clozeAnswers: ["Gesicht"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-014"),
                wordType: "noun",
                german: "Rücken",
                article: "der",
                plural: "Rücken",
                english: "back",
                exampleGerman: [
                    { text: "Der Rücken", case: "nominativ" },
                    { text: " schmerzt", case: "verb" },
                    { text: " beim Liegen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The back hurts when lying down.",
                clozeParts: ["Der ", " schmerzt beim Liegen."],
                clozeAnswers: ["Rücken"]
            } as Noun,
            {
                id: createWordId("a2-17-koerper-015"),
                wordType: "noun",
                german: "Haar",
                article: "das",
                plural: "Haare",
                english: "hair",
                exampleGerman: [
                    { text: "Die Haare", case: "nominativ" },
                    { text: " kleben", case: "verb" },
                    { text: " am Kopf", case: "dativ" },
                    { text: " vom Schwitzen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The hair sticks to the head from sweating.",
                clozeParts: ["Die ", " kleben am Kopf vom Schwitzen."],
                clozeAnswers: ["Haare"]
            } as Noun
        ],

        // --- STORY TEIL 2: Krankheit und Arztbesuch (17 Wörter) ---
        "Krankheit und Arzt": [
            {
                id: createWordId("a2-17-krank-001"),
                wordType: "adjective",
                german: "krank",
                english: "sick / ill",
                exampleGerman: [
                    { text: "Die ganze Familie", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " krank", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The whole family is sick.",
                clozeParts: ["Die ganze Familie ist ", "."],
                clozeAnswers: ["krank"]
            } as Adjective,
            {
                id: createWordId("a2-17-krank-002"),
                wordType: "noun",
                german: "Grippe",
                article: "die",
                plural: null,
                english: "flu",
                exampleGerman: [
                    { text: "Die Grippe", case: "nominativ" },
                    { text: " geht", case: "verb" },
                    { text: " gerade um", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The flu is going around.",
                clozeParts: ["Die ", " geht gerade um."],
                clozeAnswers: ["Grippe"]
            } as Noun,
            {
                id: createWordId("a2-17-krank-003"),
                wordType: "noun",
                german: "Fieber",
                article: "das",
                plural: null,
                english: "fever",
                exampleGerman: [
                    { text: "Das Kind", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " hohes Fieber", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The child has a high fever.",
                clozeParts: ["Das Kind hat hohes ", "."],
                clozeAnswers: ["Fieber"]
            } as Noun,
            {
                id: createWordId("a2-17-krank-004"),
                wordType: "verb",
                german: "husten",
                english: "to cough",
                separable: false,
                coreForms: {
                    infinitive: "husten",
                    thirdPerson: "hustet",
                    preterite: "hustete",
                    perfect: "hat gehustet"
                },
                exampleGerman: [
                    { text: "Der Großvater", case: "nominativ" },
                    { text: " hustet", case: "verb" },
                    { text: " die ganze Nacht", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The grandfather coughs all night.",
                clozeParts: ["Der Großvater ", " die ganze Nacht."],
                clozeAnswers: ["hustet"]
            } as Verb,
            {
                id: createWordId("a2-17-krank-005"),
                wordType: "adjective",
                german: "erkältet",
                english: "having a cold",
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " stark erkältet", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone has a bad cold.",
                clozeParts: ["Alle sind stark ", "."],
                clozeAnswers: ["erkältet"]
            } as Adjective,
            {
                id: createWordId("a2-17-krank-006"),
                wordType: "noun",
                german: "Schmerz",
                article: "der",
                plural: "Schmerzen",
                english: "pain",
                exampleGerman: [
                    { text: "Die Schmerzen", case: "nominativ" },
                    { text: " werden", case: "verb" },
                    { text: " immer schlimmer", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The pain gets worse and worse.",
                clozeParts: ["Die ", " werden immer schlimmer."],
                clozeAnswers: ["Schmerzen"]
            } as Noun,
            {
                id: createWordId("a2-17-krank-007"),
                wordType: "verb",
                german: "wehtun",
                english: "to hurt",
                separable: false,
                coreForms: {
                    infinitive: "wehtun",
                    thirdPerson: "tut weh",
                    preterite: "tat weh",
                    perfect: "hat wehgetan"
                },
                exampleGerman: [
                    { text: "Alles", case: "nominativ" },
                    { text: " tut", case: "verb" },
                    { text: " weh", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everything hurts.",
                clozeParts: ["Alles ", " ", "."],
                clozeAnswers: ["tut", "weh"]
            } as Verb,
            {
                id: createWordId("a2-17-krank-008"),
                wordType: "verb",
                german: "verletzen",
                english: "to injure",
                separable: false,
                reflexive: true,
                coreForms: {
                    infinitive: "sich verletzen",
                    thirdPerson: "verletzt sich",
                    preterite: "verletzte sich",
                    perfect: "hat sich verletzt"
                },
                exampleGerman: [
                    { text: "Beim Husten", case: "none" },
                    { text: " hat", case: "verb" },
                    { text: " sie sich", case: "akkusativ" },
                    { text: " den Rücken", case: "akkusativ" },
                    { text: " verletzt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She injured her back while coughing.",
                clozeParts: ["Beim Husten hat sie sich den Rücken ", "."],
                clozeAnswers: ["verletzt"]
            } as Verb,
            {
                id: createWordId("a2-17-krank-009"),
                wordType: "noun",
                german: "Krankheit",
                article: "die",
                plural: "Krankheiten",
                english: "illness / disease",
                exampleGerman: [
                    { text: "Diese Krankheit", case: "nominativ" },
                    { text: " dauert", case: "verb" },
                    { text: " mindestens eine Woche", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "This illness lasts at least a week.",
                clozeParts: ["Diese ", " dauert mindestens eine Woche."],
                clozeAnswers: ["Krankheit"]
            } as Noun,
            {
                id: createWordId("a2-17-krank-010"),
                wordType: "noun",
                german: "Krankenhaus",
                article: "das",
                plural: "Krankenhäuser",
                english: "hospital",
                exampleGerman: [
                    { text: "Die Großmutter", case: "nominativ" },
                    { text: " muss", case: "verb" },
                    { text: " ins Krankenhaus", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The grandmother has to go to the hospital.",
                clozeParts: ["Die Großmutter muss ins ", "."],
                clozeAnswers: ["Krankenhaus"]
            } as Noun,
            {
                id: createWordId("a2-17-krank-011"),
                wordType: "noun",
                german: "Krankenkasse",
                article: "die",
                plural: "Krankenkassen",
                english: "health insurance",
                exampleGerman: [
                    { text: "Die Krankenkasse", case: "nominativ" },
                    { text: " bezahlt", case: "verb" },
                    { text: " die Medikamente", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The health insurance pays for the medication.",
                clozeParts: ["Die ", " bezahlt die Medikamente."],
                clozeAnswers: ["Krankenkasse"]
            } as Noun,
            {
                id: createWordId("a2-17-krank-012"),
                wordType: "noun",
                german: "Medikament",
                article: "das",
                plural: "Medikamente",
                english: "medication / medicine",
                exampleGerman: [
                    { text: "Die Medikamente", case: "nominativ" },
                    { text: " helfen", case: "verb" },
                    { text: " gegen die Schmerzen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The medication helps against the pain.",
                clozeParts: ["Die ", " helfen gegen die Schmerzen."],
                clozeAnswers: ["Medikamente"]
            } as Noun,
            {
                id: createWordId("a2-17-krank-013"),
                wordType: "noun",
                german: "Tablette",
                article: "die",
                plural: "Tabletten",
                english: "pill / tablet",
                exampleGerman: [
                    { text: "Dreimal täglich", case: "none" },
                    { text: " eine Tablette", case: "akkusativ" },
                    { text: " nehmen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Take one pill three times daily.",
                clozeParts: ["Dreimal täglich eine ", " nehmen."],
                clozeAnswers: ["Tablette"]
            } as Noun,
            {
                id: createWordId("a2-17-krank-014"),
                wordType: "noun",
                german: "Apotheke",
                article: "die",
                plural: "Apotheken",
                english: "pharmacy",
                exampleGerman: [
                    { text: "Der Vater", case: "nominativ" },
                    { text: " geht", case: "verb" },
                    { text: " zur Apotheke", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The father goes to the pharmacy.",
                clozeParts: ["Der Vater geht zur ", "."],
                clozeAnswers: ["Apotheke"]
            } as Noun,
            {
                id: createWordId("a2-17-krank-015"),
                wordType: "verb",
                german: "untersuchen",
                english: "to examine",
                separable: false,
                coreForms: {
                    infinitive: "untersuchen",
                    thirdPerson: "untersucht",
                    preterite: "untersuchte",
                    perfect: "hat untersucht"
                },
                exampleGerman: [
                    { text: "Der Arzt", case: "nominativ" },
                    { text: " untersucht", case: "verb" },
                    { text: " alle Familienmitglieder", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The doctor examines all family members.",
                clozeParts: ["Der Arzt ", " alle Familienmitglieder."],
                clozeAnswers: ["untersucht"]
            } as Verb,
            {
                id: createWordId("a2-17-krank-016"),
                wordType: "noun",
                german: "Sprechstunde",
                article: "die",
                plural: "Sprechstunden",
                english: "consultation hours",
                exampleGerman: [
                    { text: "Die Sprechstunde", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " überfüllt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The consultation hours are overcrowded.",
                clozeParts: ["Die ", " ist überfüllt."],
                clozeAnswers: ["Sprechstunde"]
            } as Noun,
            {
                id: createWordId("a2-17-krank-017"),
                wordType: "adjective",
                german: "schwanger",
                english: "pregnant",
                exampleGerman: [
                    { text: "Die schwangere Nachbarin", case: "nominativ" },
                    { text: " will sich", case: "verb" },
                    { text: " nicht anstecken", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The pregnant neighbor doesn't want to catch it.",
                clozeParts: ["Die ", "e Nachbarin will sich nicht anstecken."],
                clozeAnswers: ["schwanger"]
            } as Adjective
        ],

        // --- STORY TEIL 3: Wahrnehmung und Genesung (8 Wörter) ---
        "Wahrnehmung und Wellness": [
            {
                id: createWordId("a2-17-wahr-001"),
                wordType: "verb",
                german: "sehen",
                english: "to see",
                separable: false,
                coreForms: {
                    infinitive: "sehen",
                    thirdPerson: "sieht",
                    preterite: "sah",
                    perfect: "hat gesehen"
                },
                exampleGerman: [
                    { text: "Die Mutter", case: "nominativ" },
                    { text: " sieht", case: "verb" },
                    { text: " alles verschwommen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The mother sees everything blurry.",
                clozeParts: ["Die Mutter ", " alles verschwommen."],
                clozeAnswers: ["sieht"]
            } as Verb,
            {
                id: createWordId("a2-17-wahr-002"),
                wordType: "verb",
                german: "hören",
                english: "to hear",
                separable: false,
                coreForms: {
                    infinitive: "hören",
                    thirdPerson: "hört",
                    preterite: "hörte",
                    perfect: "hat gehört"
                },
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " hört", case: "verb" },
                    { text: " alles", case: "akkusativ" },
                    { text: " wie durch Watte", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She hears everything as if through cotton.",
                clozeParts: ["Sie ", " alles wie durch Watte."],
                clozeAnswers: ["hört"]
            } as Verb,
            {
                id: createWordId("a2-17-wahr-003"),
                wordType: "verb",
                german: "fühlen",
                english: "to feel",
                separable: false,
                reflexive: true,
                coreForms: {
                    infinitive: "sich fühlen",
                    thirdPerson: "fühlt sich",
                    preterite: "fühlte sich",
                    perfect: "hat sich gefühlt"
                },
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " fühlen sich", case: "verb" },
                    { text: " schwach", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone feels weak.",
                clozeParts: ["Alle ", " schwach."],
                clozeAnswers: ["fühlen sich"]
            } as Verb,
            {
                id: createWordId("a2-17-wahr-004"),
                wordType: "verb",
                german: "riechen",
                english: "to smell",
                separable: false,
                coreForms: {
                    infinitive: "riechen",
                    thirdPerson: "riecht",
                    preterite: "roch",
                    perfect: "hat gerochen"
                },
                exampleGerman: [
                    { text: "Man", case: "nominativ" },
                    { text: " riecht", case: "verb" },
                    { text: " nichts mehr", case: "akkusativ" },
                    { text: " bei der Grippe", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You can't smell anything with the flu.",
                clozeParts: ["Man ", " nichts mehr bei der Grippe."],
                clozeAnswers: ["riecht"]
            } as Verb,
            {
                id: createWordId("a2-17-wahr-005"),
                wordType: "verb",
                german: "schmecken",
                english: "to taste",
                separable: false,
                coreForms: {
                    infinitive: "schmecken",
                    thirdPerson: "schmeckt",
                    preterite: "schmeckte",
                    perfect: "hat geschmeckt"
                },
                exampleGerman: [
                    { text: "Das Essen", case: "nominativ" },
                    { text: " schmeckt", case: "verb" },
                    { text: " nach nichts", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The food tastes like nothing.",
                clozeParts: ["Das Essen ", " nach nichts."],
                clozeAnswers: ["schmeckt"]
            } as Verb,
            {
                id: createWordId("a2-17-wahr-006"),
                wordType: "adjective",
                german: "gesund",
                english: "healthy",
                exampleGerman: [
                    { text: "Nach einer Woche", case: "dativ" },
                    { text: " sind", case: "verb" },
                    { text: " alle", case: "nominativ" },
                    { text: " wieder gesund", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After a week everyone is healthy again.",
                clozeParts: ["Nach einer Woche sind alle wieder ", "."],
                clozeAnswers: ["gesund"]
            } as Adjective,
            {
                id: createWordId("a2-17-wahr-007"),
                wordType: "noun",
                german: "Gesundheit",
                article: "die",
                plural: null,
                english: "health",
                exampleGerman: [
                    { text: "Die Gesundheit", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " das Wichtigste", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Health is the most important thing.",
                clozeParts: ["Die ", " ist das Wichtigste."],
                clozeAnswers: ["Gesundheit"]
            } as Noun,
            {
                id: createWordId("a2-17-wahr-008"),
                wordType: "adjective",
                german: "fit",
                english: "fit",
                exampleGerman: [
                    { text: "Endlich", case: "none" },
                    { text: " fühlen sich", case: "verb" },
                    { text: " alle", case: "nominativ" },
                    { text: " wieder fit", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Finally everyone feels fit again.",
                clozeParts: ["Endlich fühlen sich alle wieder ", "."],
                clozeAnswers: ["fit"]
            } as Adjective
        ]
    }
});