// packages/trainer-themen/vokabular_wohnen.ts

import type { Word } from '../shared/types/index';

export const vokabularWohnen: Record<string, Record<string, Word[]>> = {
    "Wohnen": {

        // --- KATEGORIE 1: Räume und Gebäudeteile (12 Vokabeln) ---
        "Räume und Gebäudeteile": [
            {
                id: "wohnen-zimmer-001",
                wortart: "Nomen",
                german: "Zimmer",
                artikel: "das",
                plural: "Zimmer",
                english: "room",
                example_de: [
                    { "text": "Räum", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bitte", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "dein Zimmer", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Please tidy up your room.",
                cloze_parts: ["Räum bitte dein ", " auf."],
                cloze_answers: ["Zimmer"]
            },
            {
                id: "wohnen-zimmer-014",
                wortart: "Nomen",
                german: "Fenster",
                artikel: "das",
                plural: "Fenster",
                english: "window",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "möchte", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen Platz", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "am Fenster", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I would like a seat by the window.",
                cloze_parts: ["Ich möchte einen Platz am ", "."],
                cloze_answers: ["Fenster"]
            },
            {
                id: "wohnen-zimmer-015",
                wortart: "Nomen",
                german: "Tür",
                artikel: "die",
                plural: "Türen",
                english: "door",
                example_de: [
                    { "text": "Die Tür", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "zu", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The door is closed.",
                cloze_parts: ["Die ", " ist zu."],
                cloze_answers: ["Tür"]
            },
            {
                id: "wohnen-zimmer-016",
                wortart: "Nomen",
                german: "Wand",
                artikel: "die",
                plural: "Wände",
                english: "wall",
                example_de: [
                    { "text": "An der Wand", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hängt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Bild", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "A picture hangs on the wall.",
                cloze_parts: ["An der ", " hängt ein Bild."],
                cloze_answers: ["Wand"]
            },
            {
                id: "wohnen-zimmer-022",
                wortart: "Nomen",
                german: "Boden",
                artikel: "der",
                plural: "Böden",
                english: "floor / ground",
                example_de: [
                    { "text": "Die Tasche", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "steht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf dem Boden", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The bag is on the floor.",
                cloze_parts: ["Die Tasche steht auf dem ", "."],
                cloze_answers: ["Boden"]
            },
            {
                id: "wohnen-zimmer-026",
                wortart: "Nomen",
                german: "Bad",
                artikel: "das",
                plural: "Bäder",
                english: "bathroom",
                example_de: [
                    { "text": "Wo", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "das Bad", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Where is the bathroom?",
                cloze_parts: ["Wo ist das ", "?"],
                cloze_answers: ["Bad"]
            },
            {
                id: "wohnen-zimmer-027",
                wortart: "Nomen",
                german: "Dusche",
                artikel: "die",
                plural: "Duschen",
                english: "shower",
                example_de: [
                    { "text": "Die Dusche", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kaputt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The shower is broken.",
                cloze_parts: ["Die ", " ist kaputt."],
                cloze_answers: ["Dusche"]
            },
            {
                id: "wohnen-zimmer-028",
                wortart: "Nomen",
                german: "Toilette/WC",
                artikel: "die/das",
                plural: "Toiletten/WCs",
                english: "toilet / WC",
                example_de: [
                    { "text": "Wo", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Toilette", "kasus": "nominativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Where is the toilet?",
                cloze_parts: ["Wo ist die ", "?"],
                cloze_answers: ["Toilette"]
            },
            {
                id: "wohnen-zimmer-029",
                wortart: "Nomen",
                german: "Küche",
                artikel: "die",
                plural: "Küchen",
                english: "kitchen",
                example_de: [
                    { "text": "In der Küche", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kocht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meine Mutter", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My mother is cooking in the kitchen.",
                cloze_parts: ["In der ", " kocht meine Mutter."],
                cloze_answers: ["Küche"]
            },
            {
                id: "wohnen-zimmer-034",
                wortart: "Nomen",
                german: "Fensterbank",
                artikel: "die",
                plural: "Fensterbänke",
                english: "windowsill",
                example_de: [
                    { "text": "Die Blumen", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "stehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf der Fensterbank", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The flowers are on the windowsill.",
                cloze_parts: ["Die Blumen stehen auf der ", "."],
                cloze_answers: ["Fensterbank"]
            },
            {
                id: "wohnen-zimmer-036",
                wortart: "Nomen",
                german: "Flur",
                artikel: "der",
                plural: "Flure",
                english: "hallway / corridor",
                example_de: [
                    { "text": "Die Schuhe", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "stehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Flur", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The shoes are in the hallway.",
                cloze_parts: ["Die Schuhe stehen im ", "."],
                cloze_answers: ["Flur"]
            },
            {
                id: "wohnen-zimmer-037",
                wortart: "Nomen",
                german: "Balkon",
                artikel: "der",
                plural: "Balkone",
                english: "balcony",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "haben", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen Balkon", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We have a balcony.",
                cloze_parts: ["Wir haben einen ", "."],
                cloze_answers: ["Balkon"]
            }
        ],

        // --- KATEGORIE 2: Möbel und Einrichtung (18 Vokabeln) ---
        "Möbel und Einrichtung": [
            {
                id: "wohnen-zimmer-002",
                wortart: "Nomen",
                german: "Bett",
                artikel: "das",
                plural: "Betten",
                english: "bed",
                example_de: [
                    { "text": "Wann", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gehst", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ins Bett", "kasus": "akkusativ" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "When do you go to bed?",
                cloze_parts: ["Wann gehst du ins ", "?"],
                cloze_answers: ["Bett"]
            },
            {
                id: "wohnen-zimmer-003",
                wortart: "Nomen",
                german: "Schrank",
                artikel: "der",
                plural: "Schränke",
                english: "closet / wardrobe",
                example_de: [
                    { "text": "Im Schrank", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meine Kleider", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My clothes are in the closet.",
                cloze_parts: ["Im ", " sind meine Kleider."],
                cloze_answers: ["Schrank"]
            },
            {
                id: "wohnen-zimmer-004",
                wortart: "Nomen",
                german: "Regal",
                artikel: "das",
                plural: "Regale",
                english: "shelf / rack",
                example_de: [
                    { "text": "Die Bücher", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "stehen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Regal", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The books are on the shelf.",
                cloze_parts: ["Die Bücher stehen im ", "."],
                cloze_answers: ["Regal"]
            },
            {
                id: "wohnen-zimmer-005",
                wortart: "Nomen",
                german: "Tisch",
                artikel: "der",
                plural: "Tische",
                english: "table",
                example_de: [
                    { "text": "Der Tisch", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "steht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Wohnzimmer", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The table is in the living room.",
                cloze_parts: ["Der ", " steht im Wohnzimmer."],
                cloze_answers: ["Tisch"]
            },
            {
                id: "wohnen-zimmer-006",
                wortart: "Nomen",
                german: "Stuhl",
                artikel: "der",
                plural: "Stühle",
                english: "chair",
                example_de: [
                    { "text": "Auf dem Stuhl", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "liegt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meine Jacke", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My jacket is on the chair.",
                cloze_parts: ["Auf dem ", " liegt meine Jacke."],
                cloze_answers: ["Stuhl"]
            },
            {
                id: "wohnen-zimmer-007",
                wortart: "Nomen",
                german: "Sessel",
                artikel: "der",
                plural: "Sessel",
                english: "armchair",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sitze", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gern", "kasus": "none" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Sessel", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I like to sit in the armchair.",
                cloze_parts: ["Ich sitze gern im ", "."],
                cloze_answers: ["Sessel"]
            },
            {
                id: "wohnen-zimmer-008",
                wortart: "Nomen",
                german: "Sofa",
                artikel: "das",
                plural: "Sofas",
                english: "sofa / couch",
                example_de: [
                    { "text": "Das Sofa", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bequem", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The sofa is comfortable.",
                cloze_parts: ["Das ", " ist bequem."],
                cloze_answers: ["Sofa"]
            },
            {
                id: "wohnen-zimmer-009",
                wortart: "Nomen",
                german: "Decke",
                artikel: "die",
                plural: "Decken",
                english: "blanket / ceiling",
                example_de: [
                    { "text": "Die Decke", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "warm", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The blanket is warm.",
                cloze_parts: ["Die ", " ist warm."],
                cloze_answers: ["Decke"]
            },
            {
                id: "wohnen-zimmer-010",
                wortart: "Nomen",
                german: "Kissen",
                artikel: "das",
                plural: "Kissen",
                english: "pillow / cushion",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "brauche", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Kissen", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I need a pillow.",
                cloze_parts: ["Ich brauche ein ", "."],
                cloze_answers: ["Kissen"]
            },
            {
                id: "wohnen-zimmer-011",
                wortart: "Nomen",
                german: "Teppich",
                artikel: "der",
                plural: "Teppiche",
                english: "carpet / rug",
                example_de: [
                    { "text": "Der Teppich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "bunt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The carpet is colorful.",
                cloze_parts: ["Der ", " ist bunt."],
                cloze_answers: ["Teppich"]
            },
            {
                id: "wohnen-zimmer-012",
                wortart: "Nomen",
                german: "Lampe",
                artikel: "die",
                plural: "Lampen",
                english: "lamp",
                example_de: [
                    { "text": "Die Lampe", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kaputt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The lamp is broken.",
                cloze_parts: ["Die ", " ist kaputt."],
                cloze_answers: ["Lampe"]
            },
            {
                id: "wohnen-zimmer-013",
                wortart: "Nomen",
                german: "Licht",
                artikel: "das",
                plural: "Lichter",
                english: "light",
                example_de: [
                    { "text": "Kannst", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "du", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "das Licht", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "anmachen", "kasus": "verb" },
                    { "text": "?", "kasus": "none" }
                ],
                example_en: "Can you turn on the light?",
                cloze_parts: ["Kannst du das ", " anmachen?"],
                cloze_answers: ["Licht"]
            },
            {
                id: "wohnen-zimmer-017",
                wortart: "Nomen",
                german: "Bild",
                artikel: "das",
                plural: "Bilder",
                english: "picture / image",
                example_de: [
                    { "text": "An der Wand", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hängt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Bild", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "A picture hangs on the wall.",
                cloze_parts: ["An der Wand hängt ein ", "."],
                cloze_answers: ["Bild"]
            },
            {
                id: "wohnen-zimmer-018",
                wortart: "Nomen",
                german: "Uhr",
                artikel: "die",
                plural: "Uhren",
                english: "clock / watch",
                example_de: [
                    { "text": "Die Uhr", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hängt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "an der Wand", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The clock hangs on the wall.",
                cloze_parts: ["Die ", " hängt an der Wand."],
                cloze_answers: ["Uhr"]
            },
            {
                id: "wohnen-zimmer-020",
                wortart: "Nomen",
                german: "Schreibtisch",
                artikel: "der",
                plural: "Schreibtische",
                english: "desk",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "mache", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meine Hausaufgaben", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "am Schreibtisch", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I do my homework at the desk.",
                cloze_parts: ["Ich mache meine Hausaufgaben am ", "."],
                cloze_answers: ["Schreibtisch"]
            },
            {
                id: "wohnen-zimmer-033",
                wortart: "Nomen",
                german: "Spiegel",
                artikel: "der",
                plural: "Spiegel",
                english: "mirror",
                example_de: [
                    { "text": "Der Spiegel", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Bad", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The mirror is in the bathroom.",
                cloze_parts: ["Der ", " ist im Bad."],
                cloze_answers: ["Spiegel"]
            },
            {
                id: "wohnen-zimmer-035",
                wortart: "Nomen",
                german: "Gardine/Vorhang",
                artikel: "die/der",
                plural: "Gardinen/Vorhänge",
                english: "curtain",
                example_de: [
                    { "text": "Die Gardinen", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weiß", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The curtains are white.",
                cloze_parts: ["Die ", " sind weiß."],
                cloze_answers: ["Gardinen"]
            }
        ],

        // --- KATEGORIE 3: Haus, Geräte und Adresse (17 Vokabeln) ---
        "Haus, Geräte und Adresse": [
            {
                id: "wohnen-zimmer-019",
                wortart: "Nomen",
                german: "Fernseher",
                artikel: "der",
                plural: "Fernseher",
                english: "television set",
                example_de: [
                    { "text": "Der Fernseher", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "neu", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The television is new.",
                cloze_parts: ["Der ", " ist neu."],
                cloze_answers: ["Fernseher"]
            },
            {
                id: "wohnen-zimmer-021",
                wortart: "Nomen",
                german: "Heizung",
                artikel: "die",
                plural: "Heizungen",
                english: "heating",
                example_de: [
                    { "text": "Die Heizung", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "aus", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The heating is off.",
                cloze_parts: ["Die ", " ist aus."],
                cloze_answers: ["Heizung"]
            },
            {
                id: "wohnen-zimmer-023",
                wortart: "Nomen",
                german: "Stock",
                artikel: "der",
                plural: "Stockwerke",
                english: "floor / storey",
                example_de: [
                    { "text": "Unsere Wohnung", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im ersten Stock", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Our apartment is on the first floor.",
                cloze_parts: ["Unsere Wohnung ist im ersten ", "."],
                cloze_answers: ["Stock"]
            },
            {
                id: "wohnen-zimmer-024",
                wortart: "Nomen",
                german: "Wohnung",
                artikel: "die",
                plural: "Wohnungen",
                english: "apartment / flat",
                example_de: [
                    { "text": "Unsere Wohnung", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im ersten Stock", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Our apartment is on the first floor.",
                cloze_parts: ["Unsere ", " ist im ersten Stock."],
                cloze_answers: ["Wohnung"]
            },
            {
                id: "wohnen-zimmer-025",
                wortart: "Nomen",
                german: "Haus",
                artikel: "das",
                plural: "Häuser",
                english: "house",
                example_de: [
                    { "text": "Unser Haus", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr alt", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "Our house is very old.",
                cloze_parts: ["Unser ", " ist sehr alt."],
                cloze_answers: ["Haus"]
            },
            {
                id: "wohnen-zimmer-030",
                wortart: "Nomen",
                german: "Herd",
                artikel: "der",
                plural: "Herde",
                english: "stove / cooker",
                example_de: [
                    { "text": "Der Herd", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "neu", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The stove is new.",
                cloze_parts: ["Der ", " ist neu."],
                cloze_answers: ["Herd"]
            },
            {
                id: "wohnen-zimmer-031",
                wortart: "Nomen",
                german: "Kühlschrank",
                artikel: "der",
                plural: "Kühlschränke",
                english: "refrigerator",
                example_de: [
                    { "text": "Im Kühlschrank", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "Milch", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "There is milk in the refrigerator.",
                cloze_parts: ["Im ", " ist Milch."],
                cloze_answers: ["Kühlschrank"]
            },
            {
                id: "wohnen-zimmer-032",
                wortart: "Nomen",
                german: "Waschmaschine",
                artikel: "die",
                plural: "Waschmaschinen",
                english: "washing machine",
                example_de: [
                    { "text": "Die Waschmaschine", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "laut", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The washing machine is loud.",
                cloze_parts: ["Die ", " ist laut."],
                cloze_answers: ["Waschmaschine"]
            },
            {
                id: "wohnen-zimmer-038",
                wortart: "Nomen",
                german: "Garage",
                artikel: "die",
                plural: "Garagen",
                english: "garage",
                example_de: [
                    { "text": "Das Auto", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "steht", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in der Garage", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The car is in the garage.",
                cloze_parts: ["Das Auto steht in der ", "."],
                cloze_answers: ["Garage"]
            },
            {
                id: "wohnen-zimmer-039",
                wortart: "Nomen",
                german: "Keller",
                artikel: "der",
                plural: "Keller",
                english: "basement / cellar",
                example_de: [
                    { "text": "Die Fahrräder", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sind", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Keller", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The bicycles are in the basement.",
                cloze_parts: ["Die Fahrräder sind im ", "."],
                cloze_answers: ["Keller"]
            },
            {
                id: "wohnen-zimmer-040",
                wortart: "Nomen",
                german: "Schlüssel",
                artikel: "der",
                plural: "Schlüssel",
                english: "key",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "habe", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "meinen Schlüssel", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "verloren", "kasus": "verb" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I have lost my key.",
                cloze_parts: ["Ich habe meinen ", " verloren."],
                cloze_answers: ["Schlüssel"]
            },
            {
                id: "wohnen-zimmer-041",
                wortart: "Nomen",
                german: "Adresse",
                artikel: "die",
                plural: "Adressen",
                english: "address",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "weiß", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Adresse", "kasus": "akkusativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "nicht", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I don't know the address.",
                cloze_parts: ["Ich weiß die ", " nicht."],
                cloze_answers: ["Adresse"]
            },
            {
                id: "wohnen-zimmer-042",
                wortart: "Nomen",
                german: "Nummer",
                artikel: "die",
                plural: "Nummern",
                english: "number (house number)",
                example_de: [
                    { "text": "Meine Hausnummer", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "12", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My house number is 12.",
                cloze_parts: ["Meine Haus", " ist 12."],
                cloze_answers: ["nummer"]
            },
            {
                id: "wohnen-zimmer-043",
                wortart: "Nomen",
                german: "Straße",
                artikel: "die",
                plural: "Straßen",
                english: "street",
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "wohne", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "in der Bahnhofstraße", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I live on Bahnhofstraße.",
                cloze_parts: ["Ich wohne in der ", "."],
                cloze_answers: ["Bahnhofstraße"]
            },
            {
                id: "wohnen-zimmer-044",
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
                id: "wohnen-zimmer-045",
                wortart: "Nomen",
                german: "Postleitzahl (PLZ)",
                artikel: "die",
                plural: "Postleitzahlen (PLZs)",
                english: "postal code / zip code",
                example_de: [
                    { "text": "Meine Postleitzahl", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "80331", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My postal code is 80331.",
                cloze_parts: ["Meine ", " ist 80331."],
                cloze_answers: ["Postleitzahl"]
            },
            {
                id: "wohnen-zimmer-046",
                wortart: "Nomen",
                german: "Nachbar/Nachbarin",
                artikel: "der/die",
                plural: "Nachbarn/Nachbarinnen",
                english: "neighbor (male/female)",
                example_de: [
                    { "text": "Mein Nachbar", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sehr nett", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "My neighbor is very nice.",
                cloze_parts: ["Mein ", " ist sehr nett."],
                cloze_answers: ["Nachbar"]
            },
            {
                id: "wohnen-zimmer-047",
                wortart: "Nomen",
                german: "Miete",
                artikel: "die",
                plural: "Mieten",
                english: "rent",
                example_de: [
                    { "text": "Die Miete", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "teuer", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The rent is expensive.",
                cloze_parts: ["Die ", " ist teuer."],
                cloze_answers: ["Miete"]
            }
        ],

        // --- KATEGORIE 4: Garten (22 Vokabeln) ---
        "Garten": [
            {
                id: "wohnen-garten-001",
                wortart: "Nomen",
                german: "Garten",
                artikel: "der",
                plural: "Gärten",
                english: "garden",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "haben", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen großen Garten", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We have a large garden.",
                cloze_parts: ["Wir haben einen großen ", "."],
                cloze_answers: ["Garten"]
            },
            {
                id: "wohnen-garten-002",
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
                id: "wohnen-garten-003",
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
                id: "wohnen-garten-004",
                wortart: "Nomen",
                german: "Gras",
                artikel: "das",
                plural: "Gräser",
                english: "grass",
                example_de: [
                    { "text": "Die Kinder", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spielen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf dem Gras", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The children are playing on the grass.",
                cloze_parts: ["Die Kinder spielen auf dem ", "."],
                cloze_answers: ["Gras"]
            },
            {
                id: "wohnen-garten-005",
                wortart: "Nomen",
                german: "Rasen",
                artikel: "der",
                plural: "Rasen",
                english: "lawn",
                example_de: [
                    { "text": "Der Rasen", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "frisch gemäht", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The lawn is freshly mown.",
                cloze_parts: ["Der ", " ist frisch gemäht."],
                cloze_answers: ["Rasen"]
            },
            {
                id: "wohnen-garten-006",
                wortart: "Nomen",
                german: "Busch",
                artikel: "der",
                plural: "Büsche",
                english: "bush",
                example_de: [
                    { "text": "Neben dem Haus", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ein Busch", "kasus": "nominativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "There is a bush next to the house.",
                cloze_parts: ["Neben dem Haus ist ein ", "."],
                cloze_answers: ["Busch"]
            },
            {
                id: "wohnen-garten-007",
                wortart: "Nomen",
                german: "Hecke",
                artikel: "die",
                plural: "Hecken",
                english: "hedge",
                example_de: [
                    { "text": "Die Hecke", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "hoch", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The hedge is high.",
                cloze_parts: ["Die ", " ist hoch."],
                cloze_answers: ["Hecke"]
            },
            {
                id: "wohnen-garten-008",
                wortart: "Nomen",
                german: "Zaun",
                artikel: "der",
                plural: "Zäune",
                english: "fence",
                example_de: [
                    { "text": "Der Zaun", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "neu", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The fence is new.",
                cloze_parts: ["Der ", " ist neu."],
                cloze_answers: ["Zaun"]
            },
            {
                id: "wohnen-garten-009",
                wortart: "Nomen",
                german: "Terrasse",
                artikel: "die",
                plural: "Terrassen",
                english: "terrace / patio",
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "frühstücken", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "auf der Terrasse", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We have breakfast on the terrace.",
                cloze_parts: ["Wir frühstücken auf der ", "."],
                cloze_answers: ["Terrasse"]
            },
            {
                id: "wohnen-garten-010",
                wortart: "Nomen",
                german: "Hof",
                artikel: "der",
                plural: "Höfe",
                english: "courtyard / yard",
                example_de: [
                    { "text": "Die Kinder", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spielen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Hof", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The children are playing in the yard.",
                cloze_parts: ["Die Kinder spielen im ", "."],
                cloze_answers: ["Hof"]
            },
            {
                id: "wohnen-garten-011",
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
                id: "wohnen-garten-012",
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
                id: "wohnen-garten-013",
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
            },
            {
                id: "wohnen-garten-014",
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
                    { "text": "Die Kinder", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "spielen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Garten", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The children are playing in the garden.",
                cloze_parts: ["Die Kinder ", " im Garten."],
                cloze_answers: ["spielen"]
            },
            {
                id: "wohnen-garten-015",
                wortart: "Verb",
                german: "gießen",
                english: "to water (plants)",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gegossen",
                konjugation_praesens: {
                    ich: "gieße",
                    du: "gießt",
                    er_sie_es: "gießt",
                    wir: "gießen",
                    ihr: "gießt",
                    sie_Sie: "gießen"
                },
                imperativ: {
                    du: "Gieß!",
                    ihr: "Gießt!"
                },
                example_de: [
                    { "text": "Ich", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "gieße", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "die Blumen", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "I am watering the flowers.",
                cloze_parts: ["Ich ", " die Blumen."],
                cloze_answers: ["gieße"]
            },
            {
                id: "wohnen-garten-016",
                wortart: "Verb",
                german: "pflanzen",
                english: "to plant",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gepflanzt",
                konjugation_praesens: {
                    ich: "pflanze",
                    du: "pflanzt",
                    er_sie_es: "pflanzt",
                    wir: "pflanzen",
                    ihr: "pflanzt",
                    sie_Sie: "pflanzen"
                },
                imperativ: {
                    du: "Pflanz!",
                    ihr: "Pflanzt!"
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "pflanzen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "einen Baum", "kasus": "akkusativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are planting a tree.",
                cloze_parts: ["Wir ", " einen Baum."],
                cloze_answers: ["pflanzen"]
            },
            {
                id: "wohnen-garten-017",
                wortart: "Verb",
                german: "sitzen",
                english: "to sit",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gesessen",
                konjugation_praesens: {
                    ich: "sitze",
                    du: "sitzt",
                    er_sie_es: "sitzt",
                    wir: "sitzen",
                    ihr: "sitzt",
                    sie_Sie: "sitzen"
                },
                imperativ: {
                    du: "Sitz!",
                    ihr: "Sitzt!"
                },
                example_de: [
                    { "text": "Wir", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "sitzen", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Garten", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "We are sitting in the garden.",
                cloze_parts: ["Wir ", " im Garten."],
                cloze_answers: ["sitzen"]
            },
            {
                id: "wohnen-garten-018",
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
            },
            {
                id: "wohnen-garten-019",
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
                    { "text": "im Garten", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The sun is shining in the garden.",
                cloze_parts: ["Die ", " scheint im Garten."],
                cloze_answers: ["Sonne"]
            },
            {
                id: "wohnen-garten-020",
                wortart: "Nomen",
                german: "Schatten",
                artikel: "der",
                plural: "Schatten",
                english: "shade / shadow",
                example_de: [
                    { "text": "Im Schatten", "kasus": "dativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "ist", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "es", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "kühl", "kasus": "none" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "It is cool in the shade.",
                cloze_parts: ["Im ", " ist es kühl."],
                cloze_answers: ["Schatten"]
            },
            {
                id: "wohnen-garten-021",
                wortart: "Nomen",
                german: "Werkzeug",
                artikel: "das",
                plural: "Werkzeuge",
                english: "tool / tools",
                example_de: [
                    { "text": "Das Werkzeug", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "liegt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Gartenhaus", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The tools are in the garden shed.",
                cloze_parts: ["Das ", " liegt im Gartenhaus."],
                cloze_answers: ["Werkzeug"]
            },
            {
                id: "wohnen-garten-022",
                wortart: "Nomen",
                german: "Gartenhaus",
                artikel: "das",
                plural: "Gartenhäuser",
                english: "garden shed / summer house",
                example_de: [
                    { "text": "Das Werkzeug", "kasus": "nominativ" },
                    { "text": " ", "kasus": "none" },
                    { "text": "liegt", "kasus": "verb" },
                    { "text": " ", "kasus": "none" },
                    { "text": "im Gartenhaus", "kasus": "dativ" },
                    { "text": ".", "kasus": "none" }
                ],
                example_en: "The tools are in the garden shed.",
                cloze_parts: ["Das Werkzeug liegt im ", "."],
                cloze_answers: ["Gartenhaus"]
            }
        ]
    }
};