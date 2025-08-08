// vokabular_a2_16_aussehen_charakter.ts
// Thema 16: Aussehen, Charakter & Eigenschaften (44 Wörter)
// Story: Klassentreffen nach 10 Jahren

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_16_aussehen_charakter: VocabularyStructure = createVocabulary({
    "Aussehen, Charakter & Eigenschaften": {
        
        // --- STORY TEIL 1: Die ersten Eindrücke (14 Wörter) ---
        "Körperliche Beschreibung": [
            {
                id: createWordId("a2-16-koerper-001"),
                wordType: "verb",
                german: "aussehen",
                english: "to look / appear",
                separable: false,
                coreForms: {
                    infinitive: "aussehen",
                    thirdPerson: "sieht aus",
                    preterite: "sah aus",
                    perfect: "hat ausgesehen"
                },
                exampleGerman: [
                    { text: "Beim Klassentreffen", case: "dativ" },
                    { text: " sehen", case: "verb" },
                    { text: " alle", case: "nominativ" },
                    { text: " so anders", case: "none" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "At the class reunion everyone looks so different.",
                clozeParts: ["Beim Klassentreffen ", " alle so anders ", "."],
                clozeAnswers: ["sehen", "aus"]
            } as Verb,
            {
                id: createWordId("a2-16-koerper-002"),
                wordType: "noun",
                german: "Aussehen",
                article: "das",
                plural: null,
                english: "appearance",
                exampleGerman: [
                    { text: "Das Aussehen", case: "nominativ" },
                    { text: " hat sich", case: "verb" },
                    { text: " bei vielen", case: "dativ" },
                    { text: " stark verändert", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The appearance has changed a lot for many.",
                clozeParts: ["Das ", " hat sich bei vielen stark verändert."],
                clozeAnswers: ["Aussehen"]
            } as Noun,
            {
                id: createWordId("a2-16-koerper-003"),
                wordType: "adjective",
                german: "schön",
                english: "beautiful",
                exampleGerman: [
                    { text: "Die ehemalige Klassensprecherin", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " immer noch", case: "none" },
                    { text: " sehr schön", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The former class president is still very beautiful.",
                clozeParts: ["Die ehemalige Klassensprecherin ist immer noch sehr ", "."],
                clozeAnswers: ["schön"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-004"),
                wordType: "adjective",
                german: "hässlich",
                english: "ugly",
                exampleGerman: [
                    { text: "Niemand", case: "nominativ" },
                    { text: " sagt", case: "verb" },
                    { text: " es, aber die alte Schule", case: "nominativ" },
                    { text: " sieht", case: "verb" },
                    { text: " jetzt hässlich", case: "none" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Nobody says it, but the old school looks ugly now.",
                clozeParts: ["Niemand sagt es, aber die alte Schule sieht jetzt ", " aus."],
                clozeAnswers: ["hässlich"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-005"),
                wordType: "adjective",
                german: "dick",
                english: "fat / thick",
                exampleGerman: [
                    { text: "Der sportliche Klassenkamerad", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " etwas dick", case: "none" },
                    { text: " geworden", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The athletic classmate has become a bit fat.",
                clozeParts: ["Der sportliche Klassenkamerad ist etwas ", " geworden."],
                clozeAnswers: ["dick"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-006"),
                wordType: "adjective",
                german: "dünn",
                english: "thin",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " war", case: "verb" },
                    { text: " früher dick, jetzt", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " sie sehr dünn", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She used to be fat, now she is very thin.",
                clozeParts: ["Sie war früher dick, jetzt ist sie sehr ", "."],
                clozeAnswers: ["dünn"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-007"),
                wordType: "adjective",
                german: "schlank",
                english: "slim",
                exampleGerman: [
                    { text: "Mit Sport", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " er", case: "nominativ" },
                    { text: " wieder schlank", case: "none" },
                    { text: " geworden", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "With sports he has become slim again.",
                clozeParts: ["Mit Sport ist er wieder ", " geworden."],
                clozeAnswers: ["schlank"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-008"),
                wordType: "adjective",
                german: "jung",
                english: "young",
                exampleGerman: [
                    { text: "Die Lehrerin", case: "nominativ" },
                    { text: " sieht", case: "verb" },
                    { text: " immer noch jung", case: "none" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teacher still looks young.",
                clozeParts: ["Die Lehrerin sieht immer noch ", " aus."],
                clozeAnswers: ["jung"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-009"),
                wordType: "adjective",
                german: "alt",
                english: "old",
                exampleGerman: [
                    { text: "Nach zehn Jahren", case: "none" },
                    { text: " fühlen sich", case: "verb" },
                    { text: " alle", case: "nominativ" },
                    { text: " ein bisschen alt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After ten years everyone feels a bit old.",
                clozeParts: ["Nach zehn Jahren fühlen sich alle ein bisschen ", "."],
                clozeAnswers: ["alt"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-010"),
                wordType: "adjective",
                german: "stark",
                english: "strong",
                exampleGerman: [
                    { text: "Der schwache Junge von damals", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " jetzt sehr stark", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The weak boy from back then is now very strong.",
                clozeParts: ["Der schwache Junge von damals ist jetzt sehr ", "."],
                clozeAnswers: ["stark"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-011"),
                wordType: "adjective",
                german: "schwach",
                english: "weak",
                exampleGerman: [
                    { text: "Nach der Krankheit", case: "dativ" },
                    { text: " sieht", case: "verb" },
                    { text: " er", case: "nominativ" },
                    { text: " leider schwach", case: "none" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After the illness he unfortunately looks weak.",
                clozeParts: ["Nach der Krankheit sieht er leider ", " aus."],
                clozeAnswers: ["schwach"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-012"),
                wordType: "adjective",
                german: "hart",
                english: "hard / tough",
                exampleGerman: [
                    { text: "Das Leben", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " ihn", case: "akkusativ" },
                    { text: " hart", case: "none" },
                    { text: " gemacht", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Life has made him tough.",
                clozeParts: ["Das Leben hat ihn ", " gemacht."],
                clozeAnswers: ["hart"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-013"),
                wordType: "adjective",
                german: "weich",
                english: "soft",
                exampleGerman: [
                    { text: "Ihre Stimme", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " weich und freundlich", case: "none" },
                    { text: " geblieben", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Her voice has remained soft and friendly.",
                clozeParts: ["Ihre Stimme ist ", " und freundlich geblieben."],
                clozeAnswers: ["weich"]
            } as Adjective,
            {
                id: createWordId("a2-16-koerper-014"),
                wordType: "adjective",
                german: "bequem",
                english: "comfortable / lazy",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " zu bequem", case: "none" },
                    { text: " zum Tanzen", case: "none" },
                    { text: " geworden", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He has become too lazy to dance.",
                clozeParts: ["Er ist zu ", " zum Tanzen geworden."],
                clozeAnswers: ["bequem"]
            } as Adjective
        ],

        // --- STORY TEIL 2: Charakterveränderungen (15 Wörter) ---
        "Charaktereigenschaften": [
            {
                id: createWordId("a2-16-char-001"),
                wordType: "adjective",
                german: "nett",
                english: "nice",
                exampleGerman: [
                    { text: "Der strenge Lehrer", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " jetzt viel netter", case: "none" },
                    { text: " als früher", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The strict teacher is now much nicer than before.",
                clozeParts: ["Der strenge Lehrer ist jetzt viel ", "er als früher."],
                clozeAnswers: ["nett"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-002"),
                wordType: "adjective",
                german: "freundlich",
                english: "friendly",
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " sehr freundlich", case: "none" },
                    { text: " zueinander", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone is very friendly to each other.",
                clozeParts: ["Alle sind sehr ", " zueinander."],
                clozeAnswers: ["freundlich"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-003"),
                wordType: "adjective",
                german: "sympathisch",
                english: "likeable / nice",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " war", case: "verb" },
                    { text: " schon immer", case: "none" },
                    { text: " sehr sympathisch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She was always very likeable.",
                clozeParts: ["Sie war schon immer sehr ", "."],
                clozeAnswers: ["sympathisch"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-004"),
                wordType: "adjective",
                german: "intelligent",
                english: "intelligent",
                exampleGerman: [
                    { text: "Der intelligente Schüler", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " jetzt Professor", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The intelligent student is now a professor.",
                clozeParts: ["Der ", "e Schüler ist jetzt Professor."],
                clozeAnswers: ["intelligent"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-005"),
                wordType: "adjective",
                german: "klug",
                english: "clever / smart",
                exampleGerman: [
                    { text: "Es war klug", case: "none" },
                    { text: " von ihr", case: "none" },
                    { text: ", Medizin", case: "akkusativ" },
                    { text: " zu studieren", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It was smart of her to study medicine.",
                clozeParts: ["Es war ", " von ihr, Medizin zu studieren."],
                clozeAnswers: ["klug"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-006"),
                wordType: "adjective",
                german: "dumm",
                english: "stupid",
                exampleGerman: [
                    { text: "Die dummen Streiche", case: "nominativ" },
                    { text: " von damals", case: "none" },
                    { text: " sind", case: "verb" },
                    { text: " heute lustige Geschichten", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The stupid pranks from back then are funny stories today.",
                clozeParts: ["Die ", "en Streiche von damals sind heute lustige Geschichten."],
                clozeAnswers: ["dumm"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-007"),
                wordType: "adjective",
                german: "fleißig",
                english: "diligent / hardworking",
                exampleGerman: [
                    { text: "Die faule Schülerin", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " jetzt sehr fleißig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The lazy student is now very hardworking.",
                clozeParts: ["Die faule Schülerin ist jetzt sehr ", "."],
                clozeAnswers: ["fleißig"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-008"),
                wordType: "adjective",
                german: "faul",
                english: "lazy",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " war", case: "verb" },
                    { text: " früher faul", case: "none" },
                    { text: ", jetzt führt er eine Firma", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He used to be lazy, now he runs a company.",
                clozeParts: ["Er war früher ", ", jetzt führt er eine Firma."],
                clozeAnswers: ["faul"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-009"),
                wordType: "adjective",
                german: "ruhig",
                english: "calm / quiet",
                exampleGerman: [
                    { text: "Der nervöse Junge", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " jetzt ganz ruhig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The nervous boy is now completely calm.",
                clozeParts: ["Der nervöse Junge ist jetzt ganz ", "."],
                clozeAnswers: ["ruhig"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-010"),
                wordType: "adjective",
                german: "nervös",
                english: "nervous",
                exampleGerman: [
                    { text: "Vor der Rede", case: "dativ" },
                    { text: " wird", case: "verb" },
                    { text: " sie", case: "nominativ" },
                    { text: " etwas nervös", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Before the speech she gets a bit nervous.",
                clozeParts: ["Vor der Rede wird sie etwas ", "."],
                clozeAnswers: ["nervös"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-011"),
                wordType: "adjective",
                german: "lustig",
                english: "funny",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " erzählt", case: "verb" },
                    { text: " lustige Geschichten", case: "akkusativ" },
                    { text: " aus der Schulzeit", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He tells funny stories from school days.",
                clozeParts: ["Er erzählt ", "e Geschichten aus der Schulzeit."],
                clozeAnswers: ["lustig"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-012"),
                wordType: "adjective",
                german: "langweilig",
                english: "boring",
                exampleGerman: [
                    { text: "Die Reden", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " zum Glück nicht langweilig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The speeches are fortunately not boring.",
                clozeParts: ["Die Reden sind zum Glück nicht ", "."],
                clozeAnswers: ["langweilig"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-013"),
                wordType: "adjective",
                german: "mutig",
                english: "brave / courageous",
                exampleGerman: [
                    { text: "Der schüchterne Klassenkamerad", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " jetzt sehr mutig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The shy classmate is now very brave.",
                clozeParts: ["Der schüchterne Klassenkamerad ist jetzt sehr ", "."],
                clozeAnswers: ["mutig"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-014"),
                wordType: "adjective",
                german: "ängstlich",
                english: "anxious / fearful",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " war", case: "verb" },
                    { text: " früher ängstlich", case: "none" },
                    { text: ", jetzt hält sie Vorträge", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She used to be anxious, now she gives presentations.",
                clozeParts: ["Sie war früher ", ", jetzt hält sie Vorträge."],
                clozeAnswers: ["ängstlich"]
            } as Adjective,
            {
                id: createWordId("a2-16-char-015"),
                wordType: "adjective",
                german: "streng",
                english: "strict",
                exampleGerman: [
                    { text: "Der strenge Direktor", case: "nominativ" },
                    { text: " lacht", case: "verb" },
                    { text: " heute viel", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The strict principal laughs a lot today.",
                clozeParts: ["Der ", "e Direktor lacht heute viel."],
                clozeAnswers: ["streng"]
            } as Adjective
        ],

        // --- STORY TEIL 3: Emotionale Momente (15 Wörter) ---
        "Verhalten": [
            {
                id: createWordId("a2-16-verh-001"),
                wordType: "verb",
                german: "ärgern",
                english: "to annoy / get angry",
                separable: false,
                reflexive: true,
                coreForms: {
                    infinitive: "sich ärgern",
                    thirdPerson: "ärgert sich",
                    preterite: "ärgerte sich",
                    perfect: "hat sich geärgert"
                },
                exampleGerman: [
                    { text: "Niemand", case: "nominativ" },
                    { text: " ärgert sich", case: "verb" },
                    { text: " mehr", case: "none" },
                    { text: " über alte Geschichten", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Nobody gets angry about old stories anymore.",
                clozeParts: ["Niemand ", " mehr über alte Geschichten."],
                clozeAnswers: ["ärgert sich"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-002"),
                wordType: "verb",
                german: "lachen",
                english: "to laugh",
                separable: false,
                coreForms: {
                    infinitive: "lachen",
                    thirdPerson: "lacht",
                    preterite: "lachte",
                    perfect: "hat gelacht"
                },
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " lachen", case: "verb" },
                    { text: " über die alten Fotos", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone laughs about the old photos.",
                clozeParts: ["Alle ", " über die alten Fotos."],
                clozeAnswers: ["lachen"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-003"),
                wordType: "verb",
                german: "weinen",
                english: "to cry",
                separable: false,
                coreForms: {
                    infinitive: "weinen",
                    thirdPerson: "weint",
                    preterite: "weinte",
                    perfect: "hat geweint"
                },
                exampleGerman: [
                    { text: "Bei der Erinnerung", case: "dativ" },
                    { text: " an verstorbene Lehrer", case: "akkusativ" },
                    { text: " weinen", case: "verb" },
                    { text: " einige", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Some cry when remembering deceased teachers.",
                clozeParts: ["Bei der Erinnerung an verstorbene Lehrer ", " einige."],
                clozeAnswers: ["weinen"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-004"),
                wordType: "verb",
                german: "schimpfen",
                english: "to scold / complain",
                separable: false,
                coreForms: {
                    infinitive: "schimpfen",
                    thirdPerson: "schimpft",
                    preterite: "schimpfte",
                    perfect: "hat geschimpft"
                },
                exampleGerman: [
                    { text: "Keiner", case: "nominativ" },
                    { text: " schimpft", case: "verb" },
                    { text: " mehr", case: "none" },
                    { text: " wie früher", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Nobody complains anymore like before.",
                clozeParts: ["Keiner ", " mehr wie früher."],
                clozeAnswers: ["schimpft"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-005"),
                wordType: "verb",
                german: "streiten",
                english: "to argue",
                separable: false,
                reflexive: true,
                coreForms: {
                    infinitive: "sich streiten",
                    thirdPerson: "streitet sich",
                    preterite: "stritt sich",
                    perfect: "hat sich gestritten"
                },
                exampleGerman: [
                    { text: "Die alten Rivalen", case: "nominativ" },
                    { text: " streiten sich", case: "verb" },
                    { text: " nicht mehr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The old rivals don't argue anymore.",
                clozeParts: ["Die alten Rivalen ", " nicht mehr."],
                clozeAnswers: ["streiten sich"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-006"),
                wordType: "verb",
                german: "entschuldigen",
                english: "to apologize",
                separable: false,
                reflexive: true,
                coreForms: {
                    infinitive: "sich entschuldigen",
                    thirdPerson: "entschuldigt sich",
                    preterite: "entschuldigte sich",
                    perfect: "hat sich entschuldigt"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " entschuldigt sich", case: "verb" },
                    { text: " für sein Verhalten", case: "akkusativ" },
                    { text: " von damals", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He apologizes for his behavior from back then.",
                clozeParts: ["Er ", " für sein Verhalten von damals."],
                clozeAnswers: ["entschuldigt sich"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-007"),
                wordType: "noun",
                german: "Entschuldigung",
                article: "die",
                plural: "Entschuldigungen",
                english: "apology / excuse",
                exampleGerman: [
                    { text: "Die Entschuldigung", case: "nominativ" },
                    { text: " wird", case: "verb" },
                    { text: " gern", case: "none" },
                    { text: " angenommen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The apology is gladly accepted.",
                clozeParts: ["Die ", " wird gern angenommen."],
                clozeAnswers: ["Entschuldigung"]
            } as Noun,
            {
                id: createWordId("a2-16-verh-008"),
                wordType: "verb",
                german: "helfen",
                english: "to help",
                separable: false,
                coreForms: {
                    infinitive: "helfen",
                    thirdPerson: "hilft",
                    preterite: "half",
                    perfect: "hat geholfen"
                },
                exampleGerman: [
                    { text: "Die Klassenkameraden", case: "nominativ" },
                    { text: " helfen", case: "verb" },
                    { text: " beim Aufbau", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The classmates help with the setup.",
                clozeParts: ["Die Klassenkameraden ", " beim Aufbau."],
                clozeAnswers: ["helfen"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-009"),
                wordType: "verb",
                german: "stören",
                english: "to disturb",
                separable: false,
                coreForms: {
                    infinitive: "stören",
                    thirdPerson: "stört",
                    preterite: "störte",
                    perfect: "hat gestört"
                },
                exampleGerman: [
                    { text: "Die laute Musik", case: "nominativ" },
                    { text: " stört", case: "verb" },
                    { text: " niemanden", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The loud music doesn't disturb anyone.",
                clozeParts: ["Die laute Musik ", " niemanden."],
                clozeAnswers: ["stört"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-010"),
                wordType: "verb",
                german: "benehmen",
                english: "to behave",
                separable: false,
                reflexive: true,
                coreForms: {
                    infinitive: "sich benehmen",
                    thirdPerson: "benimmt sich",
                    preterite: "benahm sich",
                    perfect: "hat sich benommen"
                },
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " benehmen sich", case: "verb" },
                    { text: " heute erwachsen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone behaves like adults today.",
                clozeParts: ["Alle ", " heute erwachsen."],
                clozeAnswers: ["benehmen sich"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-011"),
                wordType: "verb",
                german: "verhalten",
                english: "to behave / conduct oneself",
                separable: false,
                reflexive: true,
                coreForms: {
                    infinitive: "sich verhalten",
                    thirdPerson: "verhält sich",
                    preterite: "verhielt sich",
                    perfect: "hat sich verhalten"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " verhält sich", case: "verb" },
                    { text: " ganz anders als früher", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He behaves completely differently than before.",
                clozeParts: ["Er ", " ganz anders als früher."],
                clozeAnswers: ["verhält sich"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-012"),
                wordType: "verb",
                german: "leidtun",
                english: "to be sorry",
                separable: false,
                coreForms: {
                    infinitive: "leidtun",
                    thirdPerson: "tut leid",
                    preterite: "tat leid",
                    perfect: "hat leidgetan"
                },
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " tut", case: "verb" },
                    { text: " mir", case: "dativ" },
                    { text: " leid", case: "verb" },
                    { text: ", dass wir uns gestritten haben", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm sorry that we argued.",
                clozeParts: ["Es ", " mir ", ", dass wir uns gestritten haben."],
                clozeAnswers: ["tut", "leid"]
            } as Verb,
            {
                id: createWordId("a2-16-verh-013"),
                wordType: "adjective",
                german: "böse",
                english: "angry / evil",
                exampleGerman: [
                    { text: "Keiner", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " mehr böse", case: "none" },
                    { text: " aufeinander", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Nobody is angry with each other anymore.",
                clozeParts: ["Keiner ist mehr ", " aufeinander."],
                clozeAnswers: ["böse"]
            } as Adjective,
            {
                id: createWordId("a2-16-verh-014"),
                wordType: "adjective",
                german: "lieb",
                english: "dear / kind",
                exampleGerman: [
                    { text: "Die lieben Worte", case: "nominativ" },
                    { text: " der alten Lehrerin", case: "genitiv" },
                    { text: " rühren", case: "verb" },
                    { text: " alle", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The kind words of the old teacher touch everyone.",
                clozeParts: ["Die ", "en Worte der alten Lehrerin rühren alle."],
                clozeAnswers: ["lieb"]
            } as Adjective,
            {
                id: createWordId("a2-16-verh-015"),
                wordType: "adjective",
                german: "ehrlich",
                english: "honest",
                exampleGerman: [
                    { text: "Beim Klassentreffen", case: "dativ" },
                    { text: " sind", case: "verb" },
                    { text: " alle", case: "nominativ" },
                    { text: " ehrlich", case: "none" },
                    { text: " miteinander", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "At the class reunion everyone is honest with each other.",
                clozeParts: ["Beim Klassentreffen sind alle ", " miteinander."],
                clozeAnswers: ["ehrlich"]
            } as Adjective
        ]
    }
});