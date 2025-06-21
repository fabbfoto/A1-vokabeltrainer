// packages/trainer-themen/vokabular_umwelt.js

export const vokabularUmwelt = {
    "Umwelt": {

        // --- UNTER-THEMA: Gegend/Stadt/Land ---
        "Gegend/Stadt/Land": [
            {
                id: "umwelt-gegendstadtland-001",
                wortart: "Nomen",
                german: "Stadt",
                artikel: "die",
                plural: "Städte",
                english: "city / town",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wohne", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in einer kleinen Stadt", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I live in a small town.",
                cloze_parts: ["Ich wohne in einer kleinen ", "."],
                cloze_answers: ["Stadt"]
            },
            {
                id: "umwelt-gegendstadtland-002",
                wortart: "Nomen",
                german: "Land",
                artikel: "das",
                plural: "Länder",
                english: "country / land",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "komme", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus Deutschland", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I come from Germany.",
                cloze_parts: ["Ich komme aus ", "."],
                cloze_answers: ["Deutschland"] // Beispiel verwendet spezifisches Land
            },
            {
                id: "umwelt-gegendstadtland-003",
                wortart: "Nomen",
                german: "Ausland",
                artikel: "das",
                plural: null, // oft ohne Plural verwendet
                english: "abroad / foreign country",
                example_de: [
                    { "text": "Mein Vater", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "war", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "lange", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Ausland", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My father was abroad for a long time.",
                cloze_parts: ["Mein Vater war lange im ", "."],
                cloze_answers: ["Ausland"]
            },
            {
                id: "umwelt-gegendstadtland-004",
                wortart: "Nomen",
                german: "Baum",
                artikel: "der",
                plural: "Bäume",
                english: "tree",
                example_de: [
                    { "text": "Die Bäume", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "schon grün", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The trees are already green.",
                cloze_parts: ["Die ", " sind schon grün."],
                cloze_answers: ["Bäume"]
            },
            {
                id: "umwelt-gegendstadtland-005",
                wortart: "Nomen",
                german: "Blume",
                artikel: "die",
                plural: "Blumen",
                english: "flower",
                example_de: [
                    { "text": "Hier", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Blumen", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "für dich", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Here are flowers for you.",
                cloze_parts: ["Hier sind ", " für dich."],
                cloze_answers: ["Blumen"]
            },
            {
                id: "umwelt-gegendstadtland-006",
                wortart: "Nomen",
                german: "Fluss",
                artikel: "der",
                plural: "Flüsse",
                english: "river",
                example_de: [
                    { "text": "Der Rhein", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein großer Fluss", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The Rhine is a large river.",
                cloze_parts: ["Der Rhein ist ein großer ", "."],
                cloze_answers: ["Fluss"]
            },
            {
                id: "umwelt-gegendstadtland-007",
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
                id: "umwelt-gegendstadtland-008",
                wortart: "Nomen",
                german: "Sonne",
                artikel: "die",
                plural: "Sonnen",
                english: "sun",
                example_de: [
                    { "text": "Die Sonne", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "scheint", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The sun is shining.",
                cloze_parts: ["Die ", " scheint."],
                cloze_answers: ["Sonne"]
            },
            {
                id: "umwelt-gegendstadtland-009",
                wortart: "Nomen",
                german: "Norden",
                artikel: "der",
                plural: null, // meist ohne Plural
                english: "north",
                example_de: [
                    { "text": "Der Norden", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kalt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The north is cold.",
                cloze_parts: ["Der ", " ist kalt."],
                cloze_answers: ["Norden"]
            },
            {
                id: "umwelt-gegendstadtland-010",
                wortart: "Nomen",
                german: "Süden",
                artikel: "der",
                plural: null, // meist ohne Plural
                english: "south",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "reisen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in den Süden", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are traveling to the south.",
                cloze_parts: ["Wir reisen in den ", "."],
                cloze_answers: ["Süden"]
            },
            {
                id: "umwelt-gegendstadtland-011",
                wortart: "Nomen",
                german: "Westen",
                artikel: "der",
                plural: null, // meist ohne Plural
                english: "west",
                example_de: [
                    { "text": "Der Wind", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kommt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus Westen", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The wind comes from the west.",
                cloze_parts: ["Der Wind kommt aus ", "."],
                cloze_answers: ["Westen"]
            },
            {
                id: "umwelt-gegendstadtland-012",
                wortart: "Nomen",
                german: "Osten",
                artikel: "der",
                plural: null, // meist ohne Plural
                english: "east",
                example_de: [
                    { "text": "Im Osten", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "geht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Sonne", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The sun rises in the east.",
                cloze_parts: ["Im ", " geht die Sonne auf."],
                cloze_answers: ["Osten"]
            }
        ],

        // --- UNTER-THEMA: (Haus-)Tiere ---
        "(Haus-)Tiere": [
            {
                id: "umwelt-haustiere-001",
                wortart: "Nomen",
                german: "Hund",
                artikel: "der",
                plural: "Hunde",
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
                id: "umwelt-haustiere-002",
                wortart: "Nomen",
                german: "Katze",
                artikel: "die",
                plural: "Katzen",
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
                id: "umwelt-haustiere-003",
                wortart: "Nomen",
                german: "Tier",
                artikel: "das",
                plural: "Tiere",
                english: "animal",
                example_de: [
                    { "text": "Mein Lieblingstier", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "der Hund", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My favorite animal is the dog.",
                cloze_parts: ["Mein Lieblings", " ist der Hund."],
                cloze_answers: ["tier"]
            },
            {
                id: "umwelt-haustiere-004",
                wortart: "Nomen",
                german: "Haustier",
                artikel: "das",
                plural: "Haustiere",
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
                id: "umwelt-haustiere-005",
                wortart: "Nomen",
                german: "Vogel",
                artikel: "der",
                plural: "Vögel",
                english: "bird",
                example_de: [
                    { "text": "Im Garten", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "singt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Vogel", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "A bird is singing in the garden.",
                cloze_parts: ["Im Garten singt ein ", "."],
                cloze_answers: ["Vogel"]
            }
        ]
    }
};