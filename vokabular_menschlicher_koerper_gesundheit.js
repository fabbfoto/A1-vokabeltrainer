// packages/trainer-themen/vokabular_menschlicher_koerper_gesundheit.js

export const vokabularMenschlicherKoerperGesundheit = {
    "Menschlicher Körper und Gesundheit": {

        // --- UNTER-THEMA: Körperteile ---
        "Körperteile": [
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-001",
                wortart: "Nomen",
                german: "Arm",
                artikel: "der", // Inferred
                plural: "Arme", // Inferred
                english: "arm",
                example_de: [
                    { "text": "Mein Arm", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tut", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weh", "kasus": "verb" }, // Part of "wehtun"
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My arm hurts.",
                cloze_parts: ["Mein ", " tut weh."],
                cloze_answers: ["Arm"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-002",
                wortart: "Nomen",
                german: "Auge",
                artikel: "das", // Inferred
                plural: "Augen", // Inferred
                english: "eye",
                example_de: [
                    { "text": "Seine Augen", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "grün", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "His eyes are green.",
                cloze_parts: ["Seine ", " sind grün."],
                cloze_answers: ["Augen"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-003",
                wortart: "Nomen",
                german: "Bauch",
                artikel: "der", // Inferred
                plural: "Bäuche", // Inferred
                english: "belly / stomach",
                example_de: [
                    { "text": "Mein Bauch", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tut", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weh", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My stomach hurts.",
                cloze_parts: ["Mein ", " tut weh."],
                cloze_answers: ["Bauch"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-004",
                wortart: "Nomen",
                german: "Fuß",
                artikel: "der", // Inferred
                plural: "Füße", // Inferred
                english: "foot",
                example_de: [
                    { "text": "Mein Fuß", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tut", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weh", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My foot hurts.",
                cloze_parts: ["Mein ", " tut weh."],
                cloze_answers: ["Fuß"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-005",
                wortart: "Nomen",
                german: "Haar",
                artikel: "das", // Inferred (often used in plural "die Haare")
                plural: "Haare", // Inferred
                english: "hair",
                example_de: [
                    { "text": "Sie", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hat", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lange Haare", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "She has long hair.",
                cloze_parts: ["Sie hat lange ", "."],
                cloze_answers: ["Haare"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-006",
                wortart: "Nomen",
                german: "Kopf",
                artikel: "der", // Inferred
                plural: "Köpfe", // Inferred
                english: "head",
                example_de: [
                    { "text": "Mein Kopf", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tut", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weh", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My head hurts.",
                cloze_parts: ["Mein ", " tut weh."],
                cloze_answers: ["Kopf"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-007",
                wortart: "Nomen",
                german: "Mund",
                artikel: "der", // Inferred
                plural: "Münder", // Inferred
                english: "mouth",
                example_de: [
                    { "text": "Öffne", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bitte", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "den Mund", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Please open your mouth.",
                cloze_parts: ["Öffne bitte den ", "."],
                cloze_answers: ["Mund"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-008",
                wortart: "Nomen",
                german: "Nase",
                artikel: "die", // Inferred
                plural: "Nasen", // Inferred
                english: "nose",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "eine laufende Nase", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have a runny nose.",
                cloze_parts: ["Ich habe eine laufende ", "."],
                cloze_answers: ["Nase"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-009",
                wortart: "Nomen",
                german: "Ohr",
                artikel: "das", // Inferred
                plural: "Ohren", // Inferred
                english: "ear",
                example_de: [
                    { "text": "Mein Ohr", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tut", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weh", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My ear hurts.",
                cloze_parts: ["Mein ", " tut weh."],
                cloze_answers: ["Ohr"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-010",
                wortart: "Nomen",
                german: "Hand",
                artikel: "die", // Inferred
                plural: "Hände", // Inferred
                english: "hand",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wasche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meine Hände", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I wash my hands.",
                cloze_parts: ["Ich wasche meine ", "."],
                cloze_answers: ["Hände"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-011",
                wortart: "Nomen",
                german: "Bein",
                artikel: "das", // Inferred
                plural: "Beine", // Inferred
                english: "leg",
                example_de: [
                    { "text": "Mein Bein", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tut", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weh", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My leg hurts.",
                cloze_parts: ["Mein ", " tut weh."],
                cloze_answers: ["Bein"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-012",
                wortart: "Nomen",
                german: "Körper",
                artikel: "der", // Inferred
                plural: "Körper", // Inferred
                english: "body",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wasche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meinen Körper", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I wash my body.",
                cloze_parts: ["Ich wasche meinen ", "."],
                cloze_answers: ["Körper"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperteile-013",
                wortart: "Nomen",
                german: "Zahn",
                artikel: "der",
                plural: "Zähne",
                english: "tooth",
                example_de: [
                    { "text": "Mir", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tut", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "der Zahn", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weh", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My tooth hurts.",
                cloze_parts: ["Mir tut der ", " weh."],
                cloze_answers: ["Zahn"]
            }
        ],

        // --- UNTER-THEMA: Körperpflege/Hygiene ---
        "Körperpflege/Hygiene": [
            {
                id: "menschlicher-koerper-gesundheit-koerperpflege-001",
                wortart: "Verb",
                german: "duschen",
                english: "to shower",
                trennbar: false,
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "geduscht", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Erst", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dusche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ich", "kasus": "nominativ" },
                    { "text": ",", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dann", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gehe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zum Frühstück", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "First I shower, then I go to breakfast.",
                cloze_parts: ["Erst ", " ich, dann gehe ich zum Frühstück."],
                cloze_answers: ["dusche"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperpflege-002",
                wortart: "Verb",
                german: "waschen",
                english: "to wash",
                trennbar: false,
                hilfsverb_perfekt: "haben", // Common
                partizip_ii: "gewaschen", // Common
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wasche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meine Hände", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I wash my hands.",
                cloze_parts: ["Ich ", " meine Hände."],
                cloze_answers: ["wasche"]
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperpflege-003",
                wortart: "Phrase", // Verb + Nomen
                german: "Zähne putzen",
                english: "to brush teeth",
                trennbar: false, // Treated as unit
                hilfsverb_perfekt: "haben", // Common for putzen
                partizip_ii: "geputzt", // Common for putzen
                konjugation_praesens: {}, // Needs manual fill
                imperativ: {}, // Needs manual fill
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "putze", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meine Zähne", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I brush my teeth.",
                cloze_parts: ["Ich ", " meine Zähne."],
                cloze_answers: ["putze"] // Cloze on verb part
            },
            {
                id: "menschlicher-koerper-gesundheit-koerperpflege-004",
                wortart: "Adjektiv",
                german: "sauber",
                english: "clean",
                example_de: [
                    { "text": "Das Handtuch", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sauber", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The towel is clean.",
                cloze_parts: ["Das Handtuch ist ", "."],
                cloze_answers: ["sauber"]
            }
        ],

        // --- UNTER-THEMA: Befinden ---
        "Befinden": [
            {
                id: "menschlicher-koerper-gesundheit-befinden-001",
                wortart: "Adjektiv",
                german: "gut",
                english: "good / well",
                example_de: [
                    { "text": "Wie", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "geht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dir", "kasus": "dativ" },
                    { "text": "?", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "–", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Mir", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "geht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gut", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "How are you? – I am well.",
                cloze_parts: ["Mir geht es ", "."],
                cloze_answers: ["gut"]
            },
            {
                id: "menschlicher-koerper-gesundheit-befinden-002",
                wortart: "Adjektiv",
                german: "schlecht",
                english: "bad / poorly",
                example_de: [
                    { "text": "Mir", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "geht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schlecht", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am doing poorly.",
                cloze_parts: ["Mir geht es ", "."],
                cloze_answers: ["schlecht"]
            },
            {
                id: "menschlicher-koerper-gesundheit-befinden-003",
                wortart: "Adjektiv",
                german: "müde",
                english: "tired",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "müde", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am tired.",
                cloze_parts: ["Ich bin ", "."],
                cloze_answers: ["müde"]
            },
            {
                id: "menschlicher-koerper-gesundheit-befinden-004",
                wortart: "Adjektiv",
                german: "krank",
                english: "sick / ill",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "krank", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am sick.",
                cloze_parts: ["Ich bin ", "."],
                cloze_answers: ["krank"]
            },
            {
                id: "menschlicher-koerper-gesundheit-befinden-005",
                wortart: "Adjektiv",
                german: "besser",
                english: "better",
                example_de: [
                    { "text": "Hoffentlich", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "geht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dir", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bald", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "besser", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Hopefully you will feel better soon.",
                cloze_parts: ["Hoffentlich geht es dir bald ", "."],
                cloze_answers: ["besser"]
            },
            {
                id: "menschlicher-koerper-gesundheit-befinden-006",
                wortart: "Nomen",
                german: "Angst",
                artikel: "die", // Inferred
                plural: "Ängste", // Inferred
                english: "fear / anxiety",
                example_de: [
                    { "text": "Er", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hat", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Angst", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "He is afraid. (Literally: He has fear.)",
                cloze_parts: ["Er hat ", "."],
                cloze_answers: ["Angst"]
            },
            {
                id: "menschlicher-koerper-gesundheit-befinden-007",
                wortart: "Adjektiv",
                german: "froh",
                english: "happy / glad",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "froh", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am glad.",
                cloze_parts: ["Ich bin ", "."],
                cloze_answers: ["froh"]
            },
            {
                id: "menschlicher-koerper-gesundheit-befinden-008",
                wortart: "Adjektiv",
                german: "fit",
                english: "fit",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "fit", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am fit.",
                cloze_parts: ["Ich bin ", "."],
                cloze_answers: ["fit"]
            },
            {
                id: "menschlicher-koerper-gesundheit-befinden-009",
                wortart: "Adjektiv",
                german: "stark",
                english: "strong",
                example_de: [
                    { "text": "Er", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "stark", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "He is strong.",
                cloze_parts: ["Er ist ", "."],
                cloze_answers: ["stark"]
            },
            {
                id: "menschlicher-koerper-gesundheit-befinden-010",
                wortart: "Adjektiv",
                german: "schwach",
                english: "weak",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schwach", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am weak.",
                cloze_parts: ["Ich bin ", "."],
                cloze_answers: ["schwach"]
            }
        ],

        // --- UNTER-THEMA: Gesundheit/Krankheit ---
        "Gesundheit/Krankheit": [
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-001",
                wortart: "Nomen",
                german: "Arzt",
                artikel: "der", // Inferred
                plural: "Ärzte", // Inferred
                english: "doctor (male)",
                example_de: [
                    { "text": "Er", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "war", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "beim Arzt", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "He was at the doctor's.",
                cloze_parts: ["Er war beim ", "."],
                cloze_answers: ["Arzt"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-002",
                wortart: "Nomen",
                german: "Ärztin",
                artikel: "die", // Inferred
                plural: "Ärztinnen", // Inferred
                english: "doctor (female)",
                example_de: [
                    { "text": "Die Ärztin", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "arbeitet", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Krankenhaus", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The doctor (female) works in the hospital.",
                cloze_parts: ["Die ", " arbeitet im Krankenhaus."],
                cloze_answers: ["Ärztin"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-003",
                wortart: "Nomen",
                german: "Apotheke",
                artikel: "die", // Inferred
                plural: "Apotheken", // Inferred
                english: "pharmacy",
                example_de: [
                    { "text": "Aspirin", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Das", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bekommen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Sie", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in der Apotheke", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Aspirin? You can get that at the pharmacy.",
                cloze_parts: ["Aspirin? Das bekommen Sie in der ", "."],
                cloze_answers: ["Apotheke"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-004",
                wortart: "Nomen",
                german: "Medikament",
                artikel: "das", // Inferred
                plural: "Medikamente", // Inferred
                english: "medication / medicine",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "brauche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Medikament", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I need a medication.",
                cloze_parts: ["Ich brauche ein ", "."],
                cloze_answers: ["Medikament"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-005",
                wortart: "Nomen",
                german: "Kopfschmerzen",
                artikel: "die", // Plural
                plural: "Kopfschmerzen", // Plural only
                english: "headache",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Kopfschmerzen", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have a headache.",
                cloze_parts: ["Ich habe ", "."],
                cloze_answers: ["Kopfschmerzen"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-006",
                wortart: "Adjektiv",
                german: "krank", // Duplicate word
                english: "sick / ill",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "krank", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am sick.",
                cloze_parts: ["Ich bin ", "."],
                cloze_answers: ["krank"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-007",
                wortart: "Adjektiv",
                german: "gesund",
                english: "healthy",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bin", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wieder", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gesund", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am healthy again.",
                cloze_parts: ["Ich bin wieder ", "."],
                cloze_answers: ["gesund"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-008",
                wortart: "Nomen",
                german: "Fieber",
                artikel: "das", // Inferred
                plural: null, // Often no plural
                english: "fever",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Fieber", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have a fever.",
                cloze_parts: ["Ich habe ", "."],
                cloze_answers: ["Fieber"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-009",
                wortart: "Nomen",
                german: "Husten",
                artikel: "der", // Inferred
                plural: null, // Often no plural
                english: "cough",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Husten", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have a cough.",
                cloze_parts: ["Ich habe ", "."],
                cloze_answers: ["Husten"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-010",
                wortart: "Nomen",
                german: "Schnupfen",
                artikel: "der", // Inferred
                plural: null, // Often no plural
                english: "cold (illness) / sniffles",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Schnupfen", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have a cold.",
                cloze_parts: ["Ich habe ", "."],
                cloze_answers: ["Schnupfen"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-011",
                wortart: "Nomen",
                german: "Schmerzen",
                artikel: "die", // Plural
                plural: "Schmerzen", // Plural only
                english: "pain",
                example_de: [
                    { "text": "Mein Arm", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "tut", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weh", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My arm hurts.", // Example sentence uses "weh tun", not "Schmerzen" directly
                cloze_parts: ["Mein Arm tut ", "."], // Cloze for "weh"
                cloze_answers: ["weh"]
            },
            {
                id: "menschlicher-koerper-gesundheit-gesundheit-012",
                wortart: "Nomen",
                german: "Hilfe",
                artikel: "die", // Inferred
                plural: null, // Often no plural
                english: "help",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "brauche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Hilfe", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I need help.",
                cloze_parts: ["Ich brauche ", "."],
                cloze_answers: ["Hilfe"]
            }
        ]
    }
};