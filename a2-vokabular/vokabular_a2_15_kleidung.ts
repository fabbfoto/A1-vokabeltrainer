// vokabular_a2_15_kleidung.ts
// Thema 15: Kleidung (37 Wörter)
// Story: Shopping für das Vorstellungsgespräch

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_15_kleidung: VocabularyStructure = createVocabulary({
    "Kleidung": {
        
        // --- STORY TEIL 1: Die Suche beginnt (12 Wörter) ---
        "Kleidungsstücke": [
            {
                id: createWordId("a2-15-kleid-001"),
                wordType: "noun",
                german: "Anzug",
                article: "der",
                plural: "Anzüge",
                english: "suit",
                exampleGerman: [
                    { text: "Der Bewerber", case: "nominativ" },
                    { text: " braucht", case: "verb" },
                    { text: " einen neuen Anzug", case: "akkusativ" },
                    { text: " für das Vorstellungsgespräch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The applicant needs a new suit for the job interview.",
                clozeParts: ["Der Bewerber braucht einen neuen ", " für das Vorstellungsgespräch."],
                clozeAnswers: ["Anzug"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-002"),
                wordType: "noun",
                german: "Bluse",
                article: "die",
                plural: "Blusen",
                english: "blouse",
                exampleGerman: [
                    { text: "Die weiße Bluse", case: "nominativ" },
                    { text: " passt", case: "verb" },
                    { text: " perfekt", case: "none" },
                    { text: " zum schwarzen Rock", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The white blouse matches perfectly with the black skirt.",
                clozeParts: ["Die weiße ", " passt perfekt zum schwarzen Rock."],
                clozeAnswers: ["Bluse"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-003"),
                wordType: "noun",
                german: "Hemd",
                article: "das",
                plural: "Hemden",
                english: "shirt",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " probiert", case: "verb" },
                    { text: " drei verschiedene Hemden", case: "akkusativ" },
                    { text: " an", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He tries on three different shirts.",
                clozeParts: ["Er probiert drei verschiedene ", " an."],
                clozeAnswers: ["Hemden"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-004"),
                wordType: "noun",
                german: "Hose",
                article: "die",
                plural: "Hosen",
                english: "pants / trousers",
                exampleGerman: [
                    { text: "Die graue Hose", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " leider", case: "none" },
                    { text: " zu eng", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The gray pants are unfortunately too tight.",
                clozeParts: ["Die graue ", " ist leider zu eng."],
                clozeAnswers: ["Hose"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-005"),
                wordType: "noun",
                german: "Jacke",
                article: "die",
                plural: "Jacken",
                english: "jacket",
                exampleGerman: [
                    { text: "Diese Jacke", case: "nominativ" },
                    { text: " sieht", case: "verb" },
                    { text: " sehr professionell", case: "none" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "This jacket looks very professional.",
                clozeParts: ["Diese ", " sieht sehr professionell aus."],
                clozeAnswers: ["Jacke"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-006"),
                wordType: "noun",
                german: "Rock",
                article: "der",
                plural: "Röcke",
                english: "skirt",
                exampleGerman: [
                    { text: "Der Rock", case: "nominativ" },
                    { text: " sollte", case: "verb" },
                    { text: " nicht zu kurz", case: "none" },
                    { text: " sein", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The skirt shouldn't be too short.",
                clozeParts: ["Der ", " sollte nicht zu kurz sein."],
                clozeAnswers: ["Rock"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-007"),
                wordType: "noun",
                german: "Kleid",
                article: "das",
                plural: "Kleider",
                english: "dress",
                exampleGerman: [
                    { text: "Das elegante Kleid", case: "nominativ" },
                    { text: " kostet", case: "verb" },
                    { text: " 150 Euro", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The elegant dress costs 150 euros.",
                clozeParts: ["Das elegante ", " kostet 150 Euro."],
                clozeAnswers: ["Kleid"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-008"),
                wordType: "noun",
                german: "Schuh",
                article: "der",
                plural: "Schuhe",
                english: "shoe",
                exampleGerman: [
                    { text: "Die schwarzen Schuhe", case: "nominativ" },
                    { text: " passen", case: "verb" },
                    { text: " zu allem", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The black shoes match with everything.",
                clozeParts: ["Die schwarzen ", " passen zu allem."],
                clozeAnswers: ["Schuhe"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-009"),
                wordType: "noun",
                german: "Kaufhaus",
                article: "das",
                plural: "Kaufhäuser",
                english: "department store",
                exampleGerman: [
                    { text: "Im Kaufhaus", case: "dativ" },
                    { text: " gibt es", case: "verb" },
                    { text: " eine große Auswahl", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There is a large selection in the department store.",
                clozeParts: ["Im ", " gibt es eine große Auswahl."],
                clozeAnswers: ["Kaufhaus"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-010"),
                wordType: "noun",
                german: "Laden",
                article: "der",
                plural: "Läden",
                english: "shop / store",
                exampleGerman: [
                    { text: "Der Laden", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " Sonderangebote", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The shop has special offers today.",
                clozeParts: ["Der ", " hat heute Sonderangebote."],
                clozeAnswers: ["Laden"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-011"),
                wordType: "noun",
                german: "Geschäft",
                article: "das",
                plural: "Geschäfte",
                english: "store / shop",
                exampleGerman: [
                    { text: "Das Geschäft", case: "nominativ" },
                    { text: " schließt", case: "verb" },
                    { text: " um 20 Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The store closes at 8 PM.",
                clozeParts: ["Das ", " schließt um 20 Uhr."],
                clozeAnswers: ["Geschäft"]
            } as Noun,
            {
                id: createWordId("a2-15-kleid-012"),
                wordType: "verb",
                german: "kaufen",
                english: "to buy",
                separable: false,
                coreForms: {
                    infinitive: "kaufen",
                    thirdPerson: "kauft",
                    preterite: "kaufte",
                    perfect: "hat gekauft"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " möchte", case: "verb" },
                    { text: " nicht zu viel", case: "akkusativ" },
                    { text: " kaufen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He doesn't want to buy too much.",
                clozeParts: ["Er möchte nicht zu viel ", "."],
                clozeAnswers: ["kaufen"]
            } as Verb
        ],

        // --- STORY TEIL 2: Anprobieren und Größenprobleme (13 Wörter) ---
        "Farben und Größen": [
            {
                id: createWordId("a2-15-groesse-001"),
                wordType: "noun",
                german: "Umkleidekabine",
                article: "die",
                plural: "Umkleidekabinen",
                english: "changing room / fitting room",
                exampleGerman: [
                    { text: "In der Umkleidekabine", case: "dativ" },
                    { text: " probiert", case: "verb" },
                    { text: " sie", case: "nominativ" },
                    { text: " alles", case: "akkusativ" },
                    { text: " in Ruhe an", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the fitting room she tries everything on in peace.",
                clozeParts: ["In der ", " probiert sie alles in Ruhe an."],
                clozeAnswers: ["Umkleidekabine"]
            } as Noun,
            {
                id: createWordId("a2-15-groesse-002"),
                wordType: "verb",
                german: "anprobieren",
                english: "to try on",
                separable: false,
                coreForms: {
                    infinitive: "anprobieren",
                    thirdPerson: "probiert an",
                    preterite: "probierte an",
                    perfect: "hat anprobiert"
                },
                exampleGerman: [
                    { text: "Darf ich", case: "nominativ" },
                    { text: " diese Jacke", case: "akkusativ" },
                    { text: " mal", case: "none" },
                    { text: " anprobieren", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "May I try on this jacket?",
                clozeParts: ["Darf ich diese Jacke mal ", "?"],
                clozeAnswers: ["anprobieren"]
            } as Verb,
            {
                id: createWordId("a2-15-groesse-003"),
                wordType: "verb",
                german: "passen",
                english: "to fit",
                separable: false,
                coreForms: {
                    infinitive: "passen",
                    thirdPerson: "passt",
                    preterite: "passte",
                    perfect: "hat gepasst"
                },
                exampleGerman: [
                    { text: "Die Hose", case: "nominativ" },
                    { text: " passt", case: "verb" },
                    { text: " perfekt", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "The pants fit perfectly!",
                clozeParts: ["Die Hose ", " perfekt!"],
                clozeAnswers: ["passt"]
            } as Verb,
            {
                id: createWordId("a2-15-groesse-004"),
                wordType: "verb",
                german: "stehen",
                english: "to suit / look good on",
                separable: false,
                coreForms: {
                    infinitive: "stehen",
                    thirdPerson: "steht",
                    preterite: "stand",
                    perfect: "hat gestanden"
                },
                exampleGerman: [
                    { text: "Das", case: "nominativ" },
                    { text: " steht", case: "verb" },
                    { text: " Ihnen", case: "dativ" },
                    { text: " wirklich gut", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "That really looks good on you!",
                clozeParts: ["Das ", " Ihnen wirklich gut!"],
                clozeAnswers: ["steht"]
            } as Verb,
            {
                id: createWordId("a2-15-groesse-005"),
                wordType: "noun",
                german: "Größe",
                article: "die",
                plural: "Größen",
                english: "size",
                exampleGerman: [
                    { text: "Haben Sie", case: "nominativ" },
                    { text: " das", case: "akkusativ" },
                    { text: " auch in Größe", case: "dativ" },
                    { text: " 42", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you have this also in size 42?",
                clozeParts: ["Haben Sie das auch in ", " 42?"],
                clozeAnswers: ["Größe"]
            } as Noun,
            {
                id: createWordId("a2-15-groesse-006"),
                wordType: "adjective",
                german: "groß",
                english: "big / large",
                exampleGerman: [
                    { text: "Die Jacke", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " mir", case: "dativ" },
                    { text: " zu groß", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The jacket is too big for me.",
                clozeParts: ["Die Jacke ist mir zu ", "."],
                clozeAnswers: ["groß"]
            } as Adjective,
            {
                id: createWordId("a2-15-groesse-007"),
                wordType: "adjective",
                german: "klein",
                english: "small",
                exampleGerman: [
                    { text: "Eine Nummer kleiner", case: "nominativ" },
                    { text: " wäre", case: "verb" },
                    { text: " besser", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "One size smaller would be better.",
                clozeParts: ["Eine Nummer ", "er wäre besser."],
                clozeAnswers: ["klein"]
            } as Adjective,
            {
                id: createWordId("a2-15-groesse-008"),
                wordType: "adjective",
                german: "eng",
                english: "tight",
                exampleGerman: [
                    { text: "Das Hemd", case: "nominativ" },
                    { text: " sitzt", case: "verb" },
                    { text: " zu eng", case: "none" },
                    { text: " an den Schultern", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The shirt is too tight at the shoulders.",
                clozeParts: ["Das Hemd sitzt zu ", " an den Schultern."],
                clozeAnswers: ["eng"]
            } as Adjective,
            {
                id: createWordId("a2-15-groesse-009"),
                wordType: "adjective",
                german: "lang",
                english: "long",
                exampleGerman: [
                    { text: "Die Ärmel", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " etwas zu lang", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The sleeves are a bit too long.",
                clozeParts: ["Die Ärmel sind etwas zu ", "."],
                clozeAnswers: ["lang"]
            } as Adjective,
            {
                id: createWordId("a2-15-groesse-010"),
                wordType: "adjective",
                german: "kurz",
                english: "short",
                exampleGerman: [
                    { text: "Der Rock", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " nicht zu kurz", case: "none" },
                    { text: " fürs Büro", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The skirt is not too short for the office.",
                clozeParts: ["Der Rock ist nicht zu ", " fürs Büro."],
                clozeAnswers: ["kurz"]
            } as Adjective,
            {
                id: createWordId("a2-15-groesse-011"),
                wordType: "verb",
                german: "anziehen",
                english: "to put on / wear",
                separable: false,
                coreForms: {
                    infinitive: "anziehen",
                    thirdPerson: "zieht an",
                    preterite: "zog an",
                    perfect: "hat angezogen"
                },
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " zieht", case: "verb" },
                    { text: " das blaue Kleid", case: "akkusativ" },
                    { text: " an", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She puts on the blue dress.",
                clozeParts: ["Sie ", " das blaue Kleid ", "."],
                clozeAnswers: ["zieht", "an"]
            } as Verb,
            {
                id: createWordId("a2-15-groesse-012"),
                wordType: "verb",
                german: "ausziehen",
                english: "to take off",
                separable: false,
                coreForms: {
                    infinitive: "ausziehen",
                    thirdPerson: "zieht aus",
                    preterite: "zog aus",
                    perfect: "hat ausgezogen"
                },
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " zieht", case: "verb" },
                    { text: " die Jacke", case: "akkusativ" },
                    { text: " wieder aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He takes off the jacket again.",
                clozeParts: ["Er ", " die Jacke wieder ", "."],
                clozeAnswers: ["zieht", "aus"]
            } as Verb,
            {
                id: createWordId("a2-15-groesse-013"),
                wordType: "verb",
                german: "umziehen",
                english: "to change clothes",
                separable: false,
                reflexive: true,
                coreForms: {
                    infinitive: "sich umziehen",
                    thirdPerson: "zieht sich um",
                    preterite: "zog sich um",
                    perfect: "hat sich umgezogen"
                },
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " zieht sich", case: "verb" },
                    { text: " schnell", case: "none" },
                    { text: " um", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She changes clothes quickly.",
                clozeParts: ["Sie ", " schnell ", "."],
                clozeAnswers: ["zieht sich", "um"]
            } as Verb
        ],

        // --- STORY TEIL 3: Die Entscheidung (12 Wörter) ---
        "Einkaufen": [
            {
                id: createWordId("a2-15-einkauf-001"),
                wordType: "noun",
                german: "Farbe",
                article: "die",
                plural: "Farben",
                english: "color",
                exampleGerman: [
                    { text: "Welche Farbe", case: "akkusativ" },
                    { text: " gefällt", case: "verb" },
                    { text: " Ihnen", case: "dativ" },
                    { text: " besser", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Which color do you like better?",
                clozeParts: ["Welche ", " gefällt Ihnen besser?"],
                clozeAnswers: ["Farbe"]
            } as Noun,
            {
                id: createWordId("a2-15-einkauf-002"),
                wordType: "adjective",
                german: "bunt",
                english: "colorful",
                exampleGerman: [
                    { text: "Für das Gespräch", case: "akkusativ" },
                    { text: " ist", case: "verb" },
                    { text: " das", case: "nominativ" },
                    { text: " zu bunt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "That's too colorful for the interview.",
                clozeParts: ["Für das Gespräch ist das zu ", "."],
                clozeAnswers: ["bunt"]
            } as Adjective,
            {
                id: createWordId("a2-15-einkauf-003"),
                wordType: "verb",
                german: "gefallen",
                english: "to please / like",
                separable: false,
                coreForms: {
                    infinitive: "gefallen",
                    thirdPerson: "gefällt",
                    preterite: "gefiel",
                    perfect: "hat gefallen"
                },
                exampleGerman: [
                    { text: "Der Anzug", case: "nominativ" },
                    { text: " gefällt", case: "verb" },
                    { text: " mir", case: "dativ" },
                    { text: " sehr gut", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I like the suit very much.",
                clozeParts: ["Der Anzug ", " mir sehr gut."],
                clozeAnswers: ["gefällt"]
            } as Verb,
            {
                id: createWordId("a2-15-einkauf-004"),
                wordType: "adjective",
                german: "teuer",
                english: "expensive",
                exampleGerman: [
                    { text: "Das ist", case: "none" },
                    { text: " leider", case: "none" },
                    { text: " zu teuer", case: "none" },
                    { text: " für mich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "That's unfortunately too expensive for me.",
                clozeParts: ["Das ist leider zu ", " für mich."],
                clozeAnswers: ["teuer"]
            } as Adjective,
            {
                id: createWordId("a2-15-einkauf-005"),
                wordType: "adjective",
                german: "billig",
                english: "cheap",
                exampleGerman: [
                    { text: "Im Ausverkauf", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " alles", case: "nominativ" },
                    { text: " viel billiger", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everything is much cheaper in the sale.",
                clozeParts: ["Im Ausverkauf ist alles viel ", "er."],
                clozeAnswers: ["billig"]
            } as Adjective,
            {
                id: createWordId("a2-15-einkauf-006"),
                wordType: "noun",
                german: "Mode",
                article: "die",
                plural: null,
                english: "fashion",
                exampleGerman: [
                    { text: "Die aktuelle Mode", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " sehr elegant", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The current fashion is very elegant.",
                clozeParts: ["Die aktuelle ", " ist sehr elegant."],
                clozeAnswers: ["Mode"]
            } as Noun,
            {
                id: createWordId("a2-15-einkauf-007"),
                wordType: "verb",
                german: "tragen",
                english: "to wear / carry",
                separable: false,
                coreForms: {
                    infinitive: "tragen",
                    thirdPerson: "trägt",
                    preterite: "trug",
                    perfect: "hat getragen"
                },
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " trägt", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " zum Vorstellungsgespräch", case: "dativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What does one wear to a job interview?",
                clozeParts: ["Was ", " man zum Vorstellungsgespräch?"],
                clozeAnswers: ["trägt"]
            } as Verb,
            {
                id: createWordId("a2-15-einkauf-008"),
                wordType: "noun",
                german: "Kleidung",
                article: "die",
                plural: null,
                english: "clothing",
                exampleGerman: [
                    { text: "Die richtige Kleidung", case: "nominativ" },
                    { text: " macht", case: "verb" },
                    { text: " einen guten Eindruck", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The right clothing makes a good impression.",
                clozeParts: ["Die richtige ", " macht einen guten Eindruck."],
                clozeAnswers: ["Kleidung"]
            } as Noun,
            {
                id: createWordId("a2-15-einkauf-009"),
                wordType: "noun",
                german: "Pullover",
                article: "der",
                plural: "Pullover",
                english: "sweater / pullover",
                exampleGerman: [
                    { text: "Der graue Pullover", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " warm und bequem", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The gray sweater is warm and comfortable.",
                clozeParts: ["Der graue ", " ist warm und bequem."],
                clozeAnswers: ["Pullover"]
            } as Noun,
            {
                id: createWordId("a2-15-einkauf-010"),
                wordType: "noun",
                german: "Mantel",
                article: "der",
                plural: "Mäntel",
                english: "coat",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " braucht", case: "verb" },
                    { text: " noch", case: "none" },
                    { text: " einen Mantel", case: "akkusativ" },
                    { text: " für den Winter", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She still needs a coat for winter.",
                clozeParts: ["Sie braucht noch einen ", " für den Winter."],
                clozeAnswers: ["Mantel"]
            } as Noun,
            {
                id: createWordId("a2-15-einkauf-011"),
                wordType: "noun",
                german: "Brille",
                article: "die",
                plural: "Brillen",
                english: "glasses",
                exampleGerman: [
                    { text: "Mit der neuen Brille", case: "dativ" },
                    { text: " sieht", case: "verb" },
                    { text: " er", case: "nominativ" },
                    { text: " sehr intelligent", case: "none" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "With the new glasses he looks very intelligent.",
                clozeParts: ["Mit der neuen ", " sieht er sehr intelligent aus."],
                clozeAnswers: ["Brille"]
            } as Noun,
            {
                id: createWordId("a2-15-einkauf-012"),
                wordType: "noun",
                german: "T-Shirt",
                article: "das",
                plural: "T-Shirts",
                english: "T-shirt",
                exampleGerman: [
                    { text: "Ein T-Shirt", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " zu lässig", case: "none" },
                    { text: " für das Gespräch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "A T-shirt is too casual for the interview.",
                clozeParts: ["Ein ", " ist zu lässig für das Gespräch."],
                clozeAnswers: ["T-Shirt"]
            } as Noun
        ]
    }
});