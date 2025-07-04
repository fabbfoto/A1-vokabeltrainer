// packages/trainer-themen/vokabular_wohnen.ts

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary';
import { createWordId, createVocabulary } from './shared/types/vocabulary';

export const vokabularWohnen: VocabularyStructure = createVocabulary({
    "Wohnen": {

        // --- KATEGORIE 1: Räume und Gebäudeteile (12 Vokabeln) ---
        "Räume und Gebäudeteile": [
            {
                id: createWordId("wohnen-zimmer-001"),
                wordType: "noun",
                german: "Zimmer",
                article: "das",
                plural: "Zimmer",
                english: "room",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please tidy up your room.",
                clozeParts: ["Räum bitte dein ", " auf."],
                clozeAnswers: ["Zimmer"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-014"),
                wordType: "noun",
                german: "Fenster",
                article: "das",
                plural: "Fenster",
                english: "window",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like a seat by the window.",
                clozeParts: ["Ich möchte einen Platz am ", "."],
                clozeAnswers: ["Fenster"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-015"),
                wordType: "noun",
                german: "Tür",
                article: "die",
                plural: "Türen",
                english: "door",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "The door is closed.",
                clozeParts: ["Die ", " ist zu."],
                clozeAnswers: ["Tür"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-016"),
                wordType: "noun",
                german: "Wand",
                article: "die",
                plural: "Wände",
                english: "wall",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "A picture hangs on the wall.",
                clozeParts: ["An der ", " hängt ein Bild."],
                clozeAnswers: ["Wand"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-022"),
                wordType: "noun",
                german: "Boden",
                article: "der",
                plural: "Böden",
                english: "floor / ground",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "The bag is on the floor.",
                clozeParts: ["Die Tasche steht auf dem ", "."],
                clozeAnswers: ["Boden"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-026"),
                wordType: "noun",
                german: "Bad",
                article: "das",
                plural: "Bäder",
                english: "bathroom",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "Where is the bathroom?",
                clozeParts: ["Wo ist das ", "?"],
                clozeAnswers: ["Bad"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-027"),
                wordType: "noun",
                german: "Dusche",
                article: "die",
                plural: "Duschen",
                english: "shower",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "The shower is broken.",
                clozeParts: ["Die ", " ist kaputt."],
                clozeAnswers: ["Dusche"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-028"),
                wordType: "noun",
                german: "Toilette/WC",
                article: "die",
                plural: "Toiletten/WCs",
                english: "toilet / WC",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "Where is the toilet?",
                clozeParts: ["Wo ist die ", "?"],
                clozeAnswers: ["Toilette"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-029"),
                wordType: "noun",
                german: "Küche",
                article: "die",
                plural: "Küchen",
                english: "kitchen",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "My mother is cooking in the kitchen.",
                clozeParts: ["In der ", " kocht meine Mutter."],
                clozeAnswers: ["Küche"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-034"),
                wordType: "noun",
                german: "Fensterbank",
                article: "die",
                plural: "Fensterbänke",
                english: "windowsill",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "The flowers are on the windowsill.",
                clozeParts: ["Die Blumen stehen auf der ", "."],
                clozeAnswers: ["Fensterbank"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-036"),
                wordType: "noun",
                german: "Flur",
                article: "der",
                plural: "Flure",
                english: "hallway / corridor",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "The shoes are in the hallway.",
                clozeParts: ["Die Schuhe stehen im ", "."],
                clozeAnswers: ["Flur"]
            } as Noun,
            {
                id: createWordId("wohnen-zimmer-037"),
                wordType: "noun",
                german: "Balkon",
                article: "der",
                plural: "Balkone",
                english: "balcony",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have a balcony.",
                clozeParts: ["Wir haben einen ", "."],
                clozeAnswers: ["Balkon"]
            } as Noun
        ],

        // --- KATEGORIE 2: Möbel und Einrichtung (18 Vokabeln) ---
        "Möbel und Einrichtung": [
            {
                id: createWordId("wohnen-zimmer-002"),
                wordType: "noun",
                german: "Bett",
                article: "das",
                plural: "Betten",
                english: "bed",
                exampleGerman: [
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement,
                    { text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "When do you go to bed?",
                clozeParts: ["Wann gehst du ins ", "?"],
                clozeAnswers: ["Bett"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Schrank",
                article: "der",
                plural: "Schränke",
                english: "closet / wardrobe",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My clothes are in the closet.",
                clozeParts: ["Im ", " sind meine Kleider."],
                clozeAnswers: ["Schrank"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Regal",
                article: "das",
                plural: "Regale",
                english: "shelf / rack",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The books are on the shelf.",
                clozeParts: ["Die Bücher stehen im ", "."],
                clozeAnswers: ["Regal"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Tisch",
                article: "der",
                plural: "Tische",
                english: "table",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The table is in the living room.",
                clozeParts: ["Der ", " steht im Wohnzimmer."],
                clozeAnswers: ["Tisch"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Stuhl",
                article: "der",
                plural: "Stühle",
                english: "chair",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My jacket is on the chair.",
                clozeParts: ["Auf dem ", " liegt meine Jacke."],
                clozeAnswers: ["Stuhl"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Sessel",
                article: "der",
                plural: "Sessel",
                english: "armchair",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I like to sit in the armchair.",
                clozeParts: ["Ich sitze gern im ", "."],
                clozeAnswers: ["Sessel"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Sofa",
                article: "das",
                plural: "Sofas",
                english: "sofa / couch",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The sofa is comfortable.",
                clozeParts: ["Das ", " ist bequem."],
                clozeAnswers: ["Sofa"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Decke",
                article: "die",
                plural: "Decken",
                english: "blanket / ceiling",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The blanket is warm.",
                clozeParts: ["Die ", " ist warm."],
                clozeAnswers: ["Decke"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Kissen",
                article: "das",
                plural: "Kissen",
                english: "pillow / cushion",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I need a pillow.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Kissen"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Teppich",
                article: "der",
                plural: "Teppiche",
                english: "carpet / rug",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The carpet is colorful.",
                clozeParts: ["Der ", " ist bunt."],
                clozeAnswers: ["Teppich"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Lampe",
                article: "die",
                plural: "Lampen",
                english: "lamp",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The lamp is broken.",
                clozeParts: ["Die ", " ist kaputt."],
                clozeAnswers: ["Lampe"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Licht",
                article: "das",
                plural: "Lichter",
                english: "light",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Can you turn on the light?",
                clozeParts: ["Kannst du das ", " anmachen?"],
                clozeAnswers: ["Licht"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Bild",
                article: "das",
                plural: "Bilder",
                english: "picture / image",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "A picture hangs on the wall.",
                clozeParts: ["An der Wand hängt ein ", "."],
                clozeAnswers: ["Bild"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Uhr",
                article: "die",
                plural: "Uhren",
                english: "clock / watch",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The clock hangs on the wall.",
                clozeParts: ["Die ", " hängt an der Wand."],
                clozeAnswers: ["Uhr"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Schreibtisch",
                article: "der",
                plural: "Schreibtische",
                english: "desk",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I do my homework at the desk.",
                clozeParts: ["Ich mache meine Hausaufgaben am ", "."],
                clozeAnswers: ["Schreibtisch"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Spiegel",
                article: "der",
                plural: "Spiegel",
                english: "mirror",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The mirror is in the bathroom.",
                clozeParts: ["Der ", " ist im Bad."],
                clozeAnswers: ["Spiegel"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Gardine/Vorhang",
                article: "die",
                plural: "Gardinen/Vorhänge",
                english: "curtain",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The curtains are white.",
                clozeParts: ["Die ", " sind weiß."],
                clozeAnswers: ["Gardinen"]
            } as Noun
        ],

        // --- KATEGORIE 3: Haus, Geräte und Adresse (17 Vokabeln) ---
        "Haus, Geräte und Adresse": [
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Fernseher",
                article: "der",
                plural: "Fernseher",
                english: "television set",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The television is new.",
                clozeParts: ["Der ", " ist neu."],
                clozeAnswers: ["Fernseher"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Heizung",
                article: "die",
                plural: "Heizungen",
                english: "heating",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The heating is off.",
                clozeParts: ["Die ", " ist aus."],
                clozeAnswers: ["Heizung"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Stock",
                article: "der",
                plural: "Stockwerke",
                english: "floor / storey",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Our apartment is on the first floor.",
                clozeParts: ["Unsere Wohnung ist im ersten ", "."],
                clozeAnswers: ["Stock"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Wohnung",
                article: "die",
                plural: "Wohnungen",
                english: "apartment / flat",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Our apartment is on the first floor.",
                clozeParts: ["Unsere ", " ist im ersten Stock."],
                clozeAnswers: ["Wohnung"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Haus",
                article: "das",
                plural: "Häuser",
                english: "house",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Our house is very old.",
                clozeParts: ["Unser ", " ist sehr alt."],
                clozeAnswers: ["Haus"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Herd",
                article: "der",
                plural: "Herde",
                english: "stove / cooker",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The stove is new.",
                clozeParts: ["Der ", " ist neu."],
                clozeAnswers: ["Herd"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Kühlschrank",
                article: "der",
                plural: "Kühlschränke",
                english: "refrigerator",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "There is milk in the refrigerator.",
                clozeParts: ["Im ", " ist Milch."],
                clozeAnswers: ["Kühlschrank"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Waschmaschine",
                article: "die",
                plural: "Waschmaschinen",
                english: "washing machine",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The washing machine is loud.",
                clozeParts: ["Die ", " ist laut."],
                clozeAnswers: ["Waschmaschine"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Garage",
                article: "die",
                plural: "Garagen",
                english: "garage",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The car is in the garage.",
                clozeParts: ["Das Auto steht in der ", "."],
                clozeAnswers: ["Garage"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Keller",
                article: "der",
                plural: "Keller",
                english: "basement / cellar",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The bicycles are in the basement.",
                clozeParts: ["Die Fahrräder sind im ", "."],
                clozeAnswers: ["Keller"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Schlüssel",
                article: "der",
                plural: "Schlüssel",
                english: "key",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I have lost my key.",
                clozeParts: ["Ich habe meinen ", " verloren."],
                clozeAnswers: ["Schlüssel"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Adresse",
                article: "die",
                plural: "Adressen",
                english: "address",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I don't know the address.",
                clozeParts: ["Ich weiß die ", " nicht."],
                clozeAnswers: ["Adresse"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Nummer",
                article: "die",
                plural: "Nummern",
                english: "number (house number)",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My house number is 12.",
                clozeParts: ["Meine Haus", " ist 12."],
                clozeAnswers: ["nummer"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Straße",
                article: "die",
                plural: "Straßen",
                english: "street",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I live on Bahnhofstraße.",
                clozeParts: ["Ich wohne in der ", "."],
                clozeAnswers: ["Bahnhofstraße"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Stadt",
                article: "die",
                plural: "Städte",
                english: "city / town",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I live in a small town.",
                clozeParts: ["Ich wohne in einer kleinen ", "."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Postleitzahl (PLZ)",
                article: "die",
                plural: "Postleitzahlen (PLZs)",
                english: "postal code / zip code",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My postal code is 80331.",
                clozeParts: ["Meine ", " ist 80331."],
                clozeAnswers: ["Postleitzahl"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Nachbar/Nachbarin",
                article: "der",
                plural: "Nachbarn/Nachbarinnen",
                english: "neighbor (male/female)",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My neighbor is very nice.",
                clozeParts: ["Mein ", " ist sehr nett."],
                clozeAnswers: ["Nachbar"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Miete",
                article: "die",
                plural: "Mieten",
                english: "rent",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The rent is expensive.",
                clozeParts: ["Die ", " ist teuer."],
                clozeAnswers: ["Miete"]
            } as Noun
        ],

        // --- KATEGORIE 4: Garten (22 Vokabeln) ---
        "Garten": [
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Garten",
                article: "der",
                plural: "Gärten",
                english: "garden",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We have a large garden.",
                clozeParts: ["Wir haben einen großen ", "."],
                clozeAnswers: ["Garten"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Baum",
                article: "der",
                plural: "Bäume",
                english: "tree",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The trees are already green.",
                clozeParts: ["Die ", " sind schon grün."],
                clozeAnswers: ["Bäume"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Blume",
                article: "die",
                plural: "Blumen",
                english: "flower",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Here are flowers for you.",
                clozeParts: ["Hier sind ", " für dich."],
                clozeAnswers: ["Blumen"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Gras",
                article: "das",
                plural: "Gräser",
                english: "grass",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The children are playing on the grass.",
                clozeParts: ["Die Kinder spielen auf dem ", "."],
                clozeAnswers: ["Gras"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Rasen",
                article: "der",
                plural: "Rasen",
                english: "lawn",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The lawn is freshly mown.",
                clozeParts: ["Der ", " ist frisch gemäht."],
                clozeAnswers: ["Rasen"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Busch",
                article: "der",
                plural: "Büsche",
                english: "bush",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "There is a bush next to the house.",
                clozeParts: ["Neben dem Haus ist ein ", "."],
                clozeAnswers: ["Busch"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Hecke",
                article: "die",
                plural: "Hecken",
                english: "hedge",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The hedge is high.",
                clozeParts: ["Die ", " ist hoch."],
                clozeAnswers: ["Hecke"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Zaun",
                article: "der",
                plural: "Zäune",
                english: "fence",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The fence is new.",
                clozeParts: ["Der ", " ist neu."],
                clozeAnswers: ["Zaun"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Terrasse",
                article: "die",
                plural: "Terrassen",
                english: "terrace / patio",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We have breakfast on the terrace.",
                clozeParts: ["Wir frühstücken auf der ", "."],
                clozeAnswers: ["Terrasse"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Hof",
                article: "der",
                plural: "Höfe",
                english: "courtyard / yard",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The children are playing in the yard.",
                clozeParts: ["Die Kinder spielen im ", "."],
                clozeAnswers: ["Hof"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Hund",
                article: "der",
                plural: "Hunde",
                english: "dog",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "Is that your dog?",
                clozeParts: ["Ist das dein ", "?"],
                clozeAnswers: ["Hund"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Katze",
                article: "die",
                plural: "Katzen",
                english: "cat",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "My cat sleeps a lot.",
                clozeParts: ["Meine ", " schläft viel."],
                clozeAnswers: ["Katze"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Vogel",
                article: "der",
                plural: "Vögel",
                english: "bird",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "A bird is singing in the garden.",
                clozeParts: ["Im Garten singt ein ", "."],
                clozeAnswers: ["Vogel"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "verb",
                german: "spielen",
                english: "to play",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                presentConjugation: {
                    ich: "spiele",
                    du: "spielst",
                    er: "spielt",
                    wir: "spielen",
                    ihr: "spielt",
                    sie_Sie: "spielen"
                },
                imperative: {
                    du: "Spiel!",
                    ihr: "Spielt!"
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The children are playing in the garden.",
                clozeParts: ["Die Kinder ", " im Garten."],
                clozeAnswers: ["spielen"]
            } as Verb,
            {
                id: createWordId(""),
                wordType: "verb",
                german: "gießen",
                english: "to water (plants)",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegossen",
                presentConjugation: {
                    ich: "gieße",
                    du: "gießt",
                    er: "gießt",
                    wir: "gießen",
                    ihr: "gießt",
                    sie_Sie: "gießen"
                },
                imperative: {
                    du: "Gieß!",
                    ihr: "Gießt!"
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "I am watering the flowers.",
                clozeParts: ["Ich ", " die Blumen."],
                clozeAnswers: ["gieße"]
            } as Verb,
            {
                id: createWordId(""),
                wordType: "verb",
                german: "pflanzen",
                english: "to plant",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gepflanzt",
                presentConjugation: {
                    ich: "pflanze",
                    du: "pflanzt",
                    er: "pflanzt",
                    wir: "pflanzen",
                    ihr: "pflanzt",
                    sie_Sie: "pflanzen"
                },
                imperative: {
                    du: "Pflanz!",
                    ihr: "Pflanzt!"
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are planting a tree.",
                clozeParts: ["Wir ", " einen Baum."],
                clozeAnswers: ["pflanzen"]
            } as Verb,
            {
                id: createWordId(""),
                wordType: "verb",
                german: "sitzen",
                english: "to sit",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesessen",
                presentConjugation: {
                    ich: "sitze",
                    du: "sitzt",
                    er: "sitzt",
                    wir: "sitzen",
                    ihr: "sitzt",
                    sie_Sie: "sitzen"
                },
                imperative: {
                    du: "Sitz!",
                    ihr: "Sitzt!"
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "We are sitting in the garden.",
                clozeParts: ["Wir ", " im Garten."],
                clozeAnswers: ["sitzen"]
            } as Verb,
            {
                id: createWordId(""),
                wordType: "verb",
                german: "grillen",
                english: "to grill / to barbecue",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegrillt",
                presentConjugation: {
                    ich: "grille",
                    du: "grillst",
                    er: "grillt",
                    wir: "grillen",
                    ihr: "grillt",
                    sie_Sie: "grillen"
                },
                imperative: {
                    du: "Grill!",
                    ihr: "Grillt!"
                },
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "In summer we grill in the garden.",
                clozeParts: ["Im Sommer ", " wir im Garten."],
                clozeAnswers: ["grillen"]
            } as Verb,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Sonne",
                article: "die",
                plural: "Sonnen",
                english: "sun",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The sun is shining in the garden.",
                clozeParts: ["Die ", " scheint im Garten."],
                clozeAnswers: ["Sonne"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Schatten",
                article: "der",
                plural: "Schatten",
                english: "shade / shadow",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "It is cool in the shade.",
                clozeParts: ["Im ", " ist es kühl."],
                clozeAnswers: ["Schatten"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Werkzeug",
                article: "das",
                plural: "Werkzeuge",
                english: "tool / tools",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The tools are in the garden shed.",
                clozeParts: ["Das ", " liegt im Gartenhaus."],
                clozeAnswers: ["Werkzeug"]
            } as Noun,
            {
                id: createWordId(""),
                wordType: "noun",
                german: "Gartenhaus",
                article: "das",
                plural: "Gartenhäuser",
                english: "garden shed / summer house",
                exampleGerman: [
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" },
                    { text: "", case: "none" }
                ],
                exampleEnglish: "The tools are in the garden shed.",
                clozeParts: ["Das Werkzeug liegt im ", "."],
                clozeAnswers: ["Gartenhaus"]
            } as Noun
        ]
    }
});