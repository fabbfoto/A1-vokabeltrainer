// packages/trainer-themen/vokabular_persoenliche_beziehungen.js

export const vokabularPersoenlicheBeziehungen = {
    "Persönliche Beziehungen": {

        // --- UNTER-THEMA: Familie ---
        "Familie": [
            {
                id: "persoenliche-beziehungen-familie-001",
                wortart: "Nomen",
                german: "Familie",
                artikel: "die", // Inferred
                plural: "Familien", // Inferred
                english: "family",
                example_de: [
                    { "text": "Er", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hat", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine große Familie", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "He has a large family.",
                cloze_parts: ["Er hat eine große ", "."],
                cloze_answers: ["Familie"]
            },
            {
                id: "persoenliche-beziehungen-familie-002",
                wortart: "Nomen",
                german: "Eltern",
                artikel: "die", // Inferred
                plural: "Eltern", // Plural only
                english: "parents",
                example_de: [
                    { "text": "Meine Eltern", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "leben", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in Spanien", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My parents live in Spain.",
                cloze_parts: ["Meine ", " leben in Spanien."],
                cloze_answers: ["Eltern"]
            },
            {
                id: "persoenliche-beziehungen-familie-003",
                wortart: "Nomen",
                german: "Vater",
                artikel: "der", // Inferred
                plural: "Väter", // Inferred
                english: "father",
                example_de: [
                    { "text": "Mein Vater", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "arbeitet", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bei einer Autofirma", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My father works at a car company.",
                cloze_parts: ["Mein ", " arbeitet bei einer Autofirma."],
                cloze_answers: ["Vater"]
            },
            {
                id: "persoenliche-beziehungen-familie-004",
                wortart: "Nomen",
                german: "Mutter",
                artikel: "die", // Inferred
                plural: "Mütter", // Inferred
                english: "mother",
                example_de: [
                    { "text": "Meine Mutter", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "arbeitslos", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My mother is unemployed.",
                cloze_parts: ["Meine ", " ist arbeitslos."],
                cloze_answers: ["Mutter"]
            },
            {
                id: "persoenliche-beziehungen-familie-005",
                wortart: "Nomen",
                german: "Kind",
                artikel: "das", // Inferred
                plural: "Kinder", // Inferred
                english: "child",
                example_de: [
                    { "text": "Meine Schwester", "kasus": "nominativ" }, // Example uses Schwester, not Kind
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "noch ein Baby", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My sister is still a baby.",
                cloze_parts: ["Meine Schwester ist noch ein ", "."], // Cloze for Baby, not Kind
                cloze_answers: ["Baby"] // Cloze answer for Baby
            },
            {
                id: "persoenliche-beziehungen-familie-006",
                wortart: "Nomen",
                german: "Baby", // Duplicate word, but listed under Familie
                artikel: "das", // Inferred
                plural: "Babys", // Inferred
                english: "baby",
                example_de: [
                    { "text": "Meine Schwester", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "noch ein Baby", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My sister is still a baby.",
                cloze_parts: ["Meine Schwester ist noch ein ", "."],
                cloze_answers: ["Baby"]
            },
            {
                id: "persoenliche-beziehungen-familie-007",
                wortart: "Nomen",
                german: "Bruder",
                artikel: "der", // Inferred
                plural: "Brüder", // Inferred
                english: "brother",
                example_de: [
                    { "text": "Mein Bruder", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "heißt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Peter", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My brother is called Peter.",
                cloze_parts: ["Mein ", " heißt Peter."],
                cloze_answers: ["Bruder"]
            },
            {
                id: "persoenliche-beziehungen-familie-008",
                wortart: "Nomen",
                german: "Schwester",
                artikel: "die", // Inferred
                plural: "Schwestern", // Inferred
                english: "sister",
                example_de: [
                    { "text": "Meine Schwester", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "noch ein Baby", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My sister is still a baby.",
                cloze_parts: ["Meine ", " ist noch ein Baby."],
                cloze_answers: ["Schwester"]
            },
            {
                id: "persoenliche-beziehungen-familie-009",
                wortart: "Nomen",
                german: "Geschwister",
                artikel: "die", // Inferred
                plural: "Geschwister", // Plural only
                english: "siblings",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zwei Geschwister", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are two siblings.",
                cloze_parts: ["Wir sind zwei ", "."],
                cloze_answers: ["Geschwister"]
            },
            {
                id: "persoenliche-beziehungen-familie-010",
                wortart: "Nomen",
                german: "Tante",
                artikel: "die", // Inferred
                plural: "Tanten", // Inferred
                english: "aunt",
                example_de: [
                    { "text": "Meine Tante", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wohnt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in Berlin", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My aunt lives in Berlin.",
                cloze_parts: ["Meine ", " wohnt in Berlin."],
                cloze_answers: ["Tante"]
            },
            {
                id: "persoenliche-beziehungen-familie-011",
                wortart: "Nomen",
                german: "Onkel",
                artikel: "der", // Inferred
                plural: "Onkel", // Often same as singular
                english: "uncle",
                example_de: [
                    { "text": "Mein Onkel", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Arzt", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My uncle is a doctor.",
                cloze_parts: ["Mein ", " ist Arzt."],
                cloze_answers: ["Onkel"]
            },
            {
                id: "persoenliche-beziehungen-familie-012",
                wortart: "Nomen",
                german: "Großmutter",
                artikel: "die", // Inferred
                plural: "Großmütter", // Inferred
                english: "grandmother",
                example_de: [
                    { "text": "Meine Großmutter", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr alt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My grandmother is very old.",
                cloze_parts: ["Meine ", " ist sehr alt."],
                cloze_answers: ["Großmutter"]
            },
            {
                id: "persoenliche-beziehungen-familie-013",
                wortart: "Nomen",
                german: "Großvater",
                artikel: "der", // Inferred
                plural: "Großväter", // Inferred
                english: "grandfather",
                example_de: [
                    { "text": "Mein Großvater", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "liest", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "viel", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My grandfather reads a lot.",
                cloze_parts: ["Mein ", " liest viel."],
                cloze_answers: ["Großvater"]
            },
            {
                id: "persoenliche-beziehungen-familie-014",
                wortart: "Nomen",
                german: "Großeltern",
                artikel: "die", // Inferred
                plural: "Großeltern", // Plural only
                english: "grandparents",
                example_de: [
                    { "text": "Meine Großeltern", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wohnen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf dem Land", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My grandparents live in the countryside.",
                cloze_parts: ["Meine ", " wohnen auf dem Land."],
                cloze_answers: ["Großeltern"]
            },
            {
                id: "persoenliche-beziehungen-familie-015",
                wortart: "Nomen",
                german: "Partner/Partnerin",
                artikel: "der/die", // Inferred
                plural: "Partner/Partnerinnen", // Inferred
                english: "partner",
                example_de: [
                    { "text": "Mein Partner", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kommt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus Italien", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My partner comes from Italy.",
                cloze_parts: ["Mein ", " kommt aus Italien."],
                cloze_answers: ["Partner"] // Assuming cloze is for the male form
            }
        ],

        // --- UNTER-THEMA: Freundschaft ---
        "Freundschaft": [
            {
                id: "persoenliche-beziehungen-freundschaft-001",
                wortart: "Nomen",
                german: "Freund",
                artikel: "der", // Inferred
                plural: "Freunde", // Inferred
                english: "friend (male)",
                example_de: [
                    { "text": "Mein bester Freund", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "heißt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Ivan", "kasus": "nominativ" }, // Prädikatsnomen
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My best friend is called Ivan.",
                cloze_parts: ["Mein bester ", " heißt Ivan."],
                cloze_answers: ["Freund"]
            },
            {
                id: "persoenliche-beziehungen-freundschaft-002",
                wortart: "Nomen",
                german: "Freundin",
                artikel: "die", // Inferred
                plural: "Freundinnen", // Inferred
                english: "friend (female)",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "viele Freundinnen", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have many friends (female).",
                cloze_parts: ["Ich habe viele ", "."],
                cloze_answers: ["Freundinnen"]
            },
            {
                id: "persoenliche-beziehungen-freundschaft-003",
                wortart: "Nomen",
                german: "Freunde",
                artikel: "die", // Plural
                plural: "Freunde", // Plural only
                english: "friends (plural)",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gehe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mit meinen Freunden", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ins Kino", "kasus": "akkusativ" }, // Directional
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am going to the cinema with my friends.",
                cloze_parts: ["Ich gehe mit meinen ", " ins Kino."],
                cloze_answers: ["Freunden"]
            },
            {
                id: "persoenliche-beziehungen-freundschaft-004",
                wortart: "Adjektiv", // Used with Nomen
                german: "beste(r)",
                english: "best",
                example_de: [
                    { "text": "Sie", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meine beste Freundin", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "She is my best friend.",
                cloze_parts: ["Sie ist meine ", " Freundin."],
                cloze_answers: ["beste"]
            },
            {
                id: "persoenliche-beziehungen-freundschaft-005",
                wortart: "Verb",
                german: "besuchen", // Duplicate word
                english: "to visit",
                trennbar: false, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "besucht", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Im Sommer", "kasus": "dativ" }, // Time expression
                    { "text": " ", "kasus": "none" },
                    { "text": "besuche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dich", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "In the summer I will visit you.",
                cloze_parts: ["Im Sommer ", " ich dich."],
                cloze_answers: ["besuche"]
            },
            {
                id: "persoenliche-beziehungen-freundschaft-006",
                wortart: "Adverb", // Or Präposition
                german: "zusammen", // Duplicate word
                english: "together",
                example_de: [
                    { "text": "Meine Schwester und ich", "kasus": "nominativ" },
                    { "text": ",", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wir beide", "kasus": "nominativ" }, // Apposition
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "immer zusammen", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My sister and I, we are always together.",
                cloze_parts: ["Meine Schwester und ich, wir beide sind immer ", "."],
                cloze_answers: ["zusammen"]
            },
            {
                id: "persoenliche-beziehungen-freundschaft-007",
                wortart: "Verb",
                german: "helfen", // Duplicate word
                english: "to help",
                trennbar: false, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "geholfen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "helfe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dir", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein bisschen", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I will help you a little.",
                cloze_parts: ["Ich ", " dir ein bisschen."],
                cloze_answers: ["helfe"]
            },
            {
                id: "persoenliche-beziehungen-freundschaft-008",
                wortart: "Verb",
                german: "einladen", // Duplicate word
                english: "to invite",
                trennbar: true, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "eingeladen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lade", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dich", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein", "kasus": "verb" }, // Separated verb part
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I invite you.",
                cloze_parts: ["Ich lade dich ", "."],
                cloze_answers: ["ein"] // Cloze answer is the separated part
            },
            {
                id: "persoenliche-beziehungen-freundschaft-009",
                wortart: "Nomen",
                german: "Einladung", // Duplicate word
                artikel: "die", // Inferred
                plural: "Einladungen", // Inferred
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
                id: "persoenliche-beziehungen-freundschaft-010",
                wortart: "Verb",
                german: "schenken",
                english: "to give (as a gift)",
                trennbar: false, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "geschenkt", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "können", "kasus": "verb" }, // Modalverb
                    { "text": " ", "kasus": "none" },
                    { "text": "ihm", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine CD", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schenken", "kasus": "verb" }, // Vollverb am Ende
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We can give him a CD as a present.",
                cloze_parts: ["Wir können ihm eine CD ", "."],
                cloze_answers: ["schenken"]
            },
            {
                id: "persoenliche-beziehungen-freundschaft-011",
                wortart: "Verb",
                german: "danken",
                english: "to thank",
                trennbar: false, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "gedankt", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Die CD", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wunderbar", "kasus": "none" },
                    { "text": ",", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "danke", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dir", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The CD is wonderful, I thank you.",
                cloze_parts: ["Die CD ist wunderbar, ich danke ", "."],
                cloze_answers: ["dir"] // Cloze is on the dative pronoun
            }
        ],

        // --- UNTER-THEMA: In der Schule ---
        "In der Schule": [
            {
                id: "persoenliche-beziehungen-schule-001",
                wortart: "Nomen",
                german: "Klasse", // Duplicate word
                artikel: "die", // Inferred
                plural: "Klassen", // Inferred
                english: "class",
                example_de: [
                    { "text": "In unserer Klasse", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "20 Schüler", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "There are 20 students in our class.",
                cloze_parts: ["In unserer ", " sind 20 Schüler."],
                cloze_answers: ["Klasse"]
            },
            {
                id: "persoenliche-beziehungen-schule-002",
                wortart: "Nomen",
                german: "Klassenkamerad/Klassenkameradin",
                artikel: "der/die", // Inferred
                plural: "Klassenkameraden/Klassenkameradinnen", // Inferred
                english: "classmate (male/female)",
                example_de: [
                    { "text": "Mein Klassenkamerad", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hilft", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mir", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My classmate helps me.",
                cloze_parts: ["Mein ", " hilft mir."],
                cloze_answers: ["Klassenkamerad"] // Assuming cloze is for the male form
            },
            {
                id: "persoenliche-beziehungen-schule-003",
                wortart: "Nomen",
                german: "Lehrer/Lehrerin", // Duplicate word
                artikel: "der/die", // Inferred
                plural: "Lehrer/Lehrerinnen", // Inferred
                english: "teacher (male/female)",
                example_de: [
                    { "text": "Der Lehrer", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "freundlich", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The teacher is friendly.",
                cloze_parts: ["Der ", " ist freundlich."],
                cloze_answers: ["Lehrer"] // Assuming cloze is for the male form
            },
            {
                id: "persoenliche-beziehungen-schule-004",
                wortart: "Nomen",
                german: "Schüler/Schülerin", // Duplicate word
                artikel: "der/die", // Inferred
                plural: "Schüler/Schülerinnen", // Inferred
                english: "student (male/female)",
                example_de: [
                    { "text": "Die Schüler", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "freundlich", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The students are friendly.",
                cloze_parts: ["Die ", " sind freundlich."],
                cloze_answers: ["Schüler"] // Assuming cloze is for the male plural
            },
            {
                id: "persoenliche-beziehungen-schule-005",
                wortart: "Nomen",
                german: "Freund", // Duplicate word, but in school context
                artikel: "der", // Inferred
                plural: "Freunde", // Inferred
                english: "friend (male)",
                example_de: [
                    { "text": "Mein Freund", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sitzt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "neben mir", "kasus": "dativ" }, // Präpositionalphrase
                    { "text": " ", "kasus": "none" },
                    { "text": "in der Schule", "kasus": "dativ" }, // Präpositionalphrase
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My friend sits next to me in school.",
                cloze_parts: ["Mein ", " sitzt neben mir in der Schule."],
                cloze_answers: ["Freund"]
            },
            {
                id: "persoenliche-beziehungen-schule-006",
                wortart: "Phrase", // Verb + Adverb
                german: "zusammen lernen",
                english: "to learn together",
                trennbar: false, // Treat as unit
                hilfsverb_perfekt: "haben", // Common for lernen
                partizip_ii: "gelernt", // Common for lernen
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lernen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zusammen", "kasus": "none" }, // Adverb
                    { "text": " ", "kasus": "none" },
                    { "text": "für die Prüfung", "kasus": "akkusativ" }, // Präpositionalphrase
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are learning together for the exam.",
                cloze_parts: ["Wir ", " zusammen für die Prüfung."],
                cloze_answers: ["lernen"] // Cloze is on the verb part
            },
            {
                id: "persoenliche-beziehungen-schule-007",
                wortart: "Verb",
                german: "helfen", // Duplicate word
                english: "to help",
                trennbar: false, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "geholfen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "helfe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meiner Freundin", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bei den Hausaufgaben", "kasus": "dativ" }, // Präpositionalphrase
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I help my friend with the homework.",
                cloze_parts: ["Ich ", " meiner Freundin bei den Hausaufgaben."],
                cloze_answers: ["helfe"]
            },
            {
                id: "persoenliche-beziehungen-schule-008",
                wortart: "Nomen",
                german: "Gruppe",
                artikel: "die", // Inferred
                plural: "Gruppen", // Inferred
                english: "group",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "arbeiten", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in der Gruppe", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are working in the group.",
                cloze_parts: ["Wir arbeiten in der ", "."],
                cloze_answers: ["Gruppe"]
            },
            {
                id: "persoenliche-beziehungen-schule-009",
                wortart: "Adjektiv",
                german: "freundlich", // Duplicate word
                english: "friendly",
                example_de: [
                    { "text": "Der Schuldirektor", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "war", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr freundlich", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The headmaster was very friendly.",
                cloze_parts: ["Der Schuldirektor war sehr ", "."],
                cloze_answers: ["freundlich"]
            }
        ],

        // --- UNTER-THEMA: In der Klasse ---
        "In der Klasse": [
            {
                id: "persoenliche-beziehungen-klasse-001",
                wortart: "Nomen",
                german: "Mitschüler/Mitschülerin",
                artikel: "der/die", // Inferred
                plural: "Mitschüler/Mitschülerinnen", // Inferred
                english: "classmate (male/female)",
                example_de: [
                    { "text": "Meine Mitschülerin", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "nett", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My classmate is nice.",
                cloze_parts: ["Meine ", " ist nett."],
                cloze_answers: ["Mitschülerin"] // Assuming cloze is for the female form
            },
            {
                id: "persoenliche-beziehungen-klasse-002",
                wortart: "Adverb", // Or Präposition
                german: "zusammen", // Duplicate word
                english: "together",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "machen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Aufgabe", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zusammen", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are doing the task together.",
                cloze_parts: ["Wir machen die Aufgabe ", "."],
                cloze_answers: ["zusammen"]
            },
            {
                id: "persoenliche-beziehungen-klasse-003",
                wortart: "Verb",
                german: "helfen", // Duplicate word
                english: "to help",
                trennbar: false, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "geholfen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Kannst", "kasus": "verb" }, // Modalverb
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mir", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "helfen", "kasus": "verb" }, // Vollverb am Ende
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Can you help me?",
                cloze_parts: ["Kannst du mir ", "?"],
                cloze_answers: ["helfen"]
            },
            {
                id: "persoenliche-beziehungen-klasse-004",
                wortart: "Verb",
                german: "fragen",
                english: "to ask",
                trennbar: false, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "gefragt", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" }, // Modalverb
                    { "text": " ", "kasus": "none" },
                    { "text": "etwas", "kasus": "akkusativ" }, // Pronomen als Objekt
                    { "text": " ", "kasus": "none" },
                    { "text": "fragen", "kasus": "verb" }, // Vollverb am Ende
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I would like to ask something.",
                cloze_parts: ["Ich möchte etwas ", "."],
                cloze_answers: ["fragen"]
            },
            {
                id: "persoenliche-beziehungen-klasse-005",
                wortart: "Verb",
                german: "antworten",
                english: "to answer",
                trennbar: false, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "geantwortet", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Weißt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Antwort", "kasus": "akkusativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Do you know the answer?",
                cloze_parts: ["Weißt du die ", "?"],
                cloze_answers: ["Antwort"] // Cloze is on the noun in the example
            },
            {
                id: "persoenliche-beziehungen-klasse-006",
                wortart: "Nomen",
                german: "Aufgabe", // Duplicate word
                artikel: "die", // Inferred
                plural: "Aufgaben", // Inferred
                english: "task / exercise",
                example_de: [
                    { "text": "Die Aufgabe", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einfach", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The task is easy.",
                cloze_parts: ["Die ", " ist einfach."],
                cloze_answers: ["Aufgabe"]
            },
            {
                id: "persoenliche-beziehungen-klasse-007",
                wortart: "Nomen",
                german: "Team",
                artikel: "das", // Inferred
                plural: "Teams", // Inferred
                english: "team",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein gutes Team", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are a good team.",
                cloze_parts: ["Wir sind ein gutes ", "."],
                cloze_answers: ["Team"]
            }
        ],

        // --- UNTER-THEMA: Lieblingstiere ---
        "Lieblingstiere": [
            {
                id: "persoenliche-beziehungen-lieblingstiere-001",
                wortart: "Nomen",
                german: "Hund",
                artikel: "der", // Inferred
                plural: "Hunde", // Inferred
                english: "dog",
                example_de: [
                    { "text": "Ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "das", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dein Hund", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Is that your dog?",
                cloze_parts: ["Ist das dein ", "?"],
                cloze_answers: ["Hund"]
            },
            {
                id: "persoenliche-beziehungen-lieblingstiere-002",
                wortart: "Nomen",
                german: "Katze",
                artikel: "die", // Inferred
                plural: "Katzen", // Inferred
                english: "cat",
                example_de: [
                    { "text": "Meine Katze", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schläft", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "viel", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My cat sleeps a lot.",
                cloze_parts: ["Meine ", " schläft viel."],
                cloze_answers: ["Katze"]
            },
            {
                id: "persoenliche-beziehungen-lieblingstiere-003",
                wortart: "Nomen",
                german: "Lieblingstier",
                artikel: "das", // Inferred
                plural: "Lieblingstiere", // Inferred
                english: "favorite animal",
                example_de: [
                    { "text": "Mein Lieblingstier", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "der Hund", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My favorite animal is the dog.",
                cloze_parts: ["Mein ", " ist der Hund."],
                cloze_answers: ["Lieblingstier"]
            },
            {
                id: "persoenliche-beziehungen-lieblingstiere-004",
                wortart: "Nomen",
                german: "Haustier",
                artikel: "das", // Inferred
                plural: "Haustiere", // Inferred
                english: "pet",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Haustier", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have a pet.",
                cloze_parts: ["Ich habe ein ", "."],
                cloze_answers: ["Haustier"]
            },
            {
                id: "persoenliche-beziehungen-lieblingstiere-005",
                wortart: "Nomen",
                german: "Tier", // Duplicate word
                artikel: "das", // Inferred
                plural: "Tiere", // Inferred
                english: "animal",
                example_de: [
                    { "text": "Mein Lieblings-Tier", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "der Hund", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My favorite animal is the dog.",
                cloze_parts: ["Mein Lieblings-", " ist der Hund."],
                cloze_answers: ["Tier"] // Cloze on the second part of the compound
            },
            {
                id: "persoenliche-beziehungen-lieblingstiere-006",
                wortart: "Verb",
                german: "füttern",
                english: "to feed",
                trennbar: false, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "gefüttert", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "füttere", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meinen Hund", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "jeden Tag", "kasus": "akkusativ" }, // Time expression
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I feed my dog every day.",
                cloze_parts: ["Ich ", " meinen Hund jeden Tag."],
                cloze_answers: ["füttere"]
            },
            {
                id: "persoenliche-beziehungen-lieblingstiere-007",
                wortart: "Verb",
                german: "spielen", // Duplicate word
                english: "to play",
                trennbar: false, // Inferred
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "gespielt", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spiele", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mit meinem Hund", "kasus": "dativ" }, // Präpositionalphrase
                    { "text": " ", "kasus": "none" },
                    { "text": "im Garten", "kasus": "dativ" }, // Präpositionalphrase
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I play with my dog in the garden.",
                cloze_parts: ["Ich ", " mit meinem Hund im Garten."],
                cloze_answers: ["spiele"]
            }
        ]
    }
};