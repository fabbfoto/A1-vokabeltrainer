// packages/trainer-themen/vokabular_wohnen.ts

import type {VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary';
import {createWordId, createVocabulary } from './shared/types/vocabulary';

export const vokabularWohnen: VocabularyStructure = createVocabulary({"Wohnen": {

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
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-001"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-002"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-003"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-004"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-005"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-006"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-007"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-008"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please tidy up your room.",
                clozeParts: ["Räum bitte dein ", " auf."],
                clozeAnswers: ["Zimmer"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-014"),
                wordType: "noun",
                german: "Fenster",
                article: "das",
                plural: "Fenster",
                english: "window",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-009"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-010"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-011"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-012"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-013"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-014"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-015"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-016"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like a seat by the window.",
                clozeParts: ["Ich möchte einen Platz am ", "."],
                clozeAnswers: ["Fenster"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-015"),
                wordType: "noun",
                german: "Tür",
                article: "die",
                plural: "Türen",
                english: "door",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-017"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-018"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-019"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-020"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-021"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-022"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "The door is closed.",
                clozeParts: ["Die ", " ist zu."],
                clozeAnswers: ["Tür"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-016"),
                wordType: "noun",
                german: "Wand",
                article: "die",
                plural: "Wände",
                english: "wall",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-023"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-024"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-025"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-026"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-027"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-028"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "A picture hangs on the wall.",
                clozeParts: ["An der ", " hängt ein Bild."],
                clozeAnswers: ["Wand"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-022"),
                wordType: "noun",
                german: "Boden",
                article: "der",
                plural: "Böden",
                english: "floor / ground",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-029"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-030"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-031"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-032"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-033"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-034"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "The bag is on the floor.",
                clozeParts: ["Die Tasche steht auf dem ", "."],
                clozeAnswers: ["Boden"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-026"),
                wordType: "noun",
                german: "Bad",
                article: "das",
                plural: "Bäder",
                english: "bathroom",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-035"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-036"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-037"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-038"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-039"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-040"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "Where is the bathroom?",
                clozeParts: ["Wo ist das ", "?"],
                clozeAnswers: ["Bad"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-027"),
                wordType: "noun",
                german: "Dusche",
                article: "die",
                plural: "Duschen",
                english: "shower",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-041"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-042"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-043"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-044"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-045"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-046"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "The shower is broken.",
                clozeParts: ["Die ", " ist kaputt."],
                clozeAnswers: ["Dusche"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-028"),
                wordType: "noun",
                german: "Toilette/WC",
                article: "die",
                plural: "Toiletten/WCs",
                english: "toilet / WC",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-047"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-048"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-049"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-050"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-051"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-052"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "Where is the toilet?",
                clozeParts: ["Wo ist die ", "?"],
                clozeAnswers: ["Toilette"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-029"),
                wordType: "noun",
                german: "Küche",
                article: "die",
                plural: "Küchen",
                english: "kitchen",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-053"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-054"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-055"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-056"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-057"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-058"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "My mother is cooking in the kitchen.",
                clozeParts: ["In der ", " kocht meine Mutter."],
                clozeAnswers: ["Küche"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-034"),
                wordType: "noun",
                german: "Fensterbank",
                article: "die",
                plural: "Fensterbänke",
                english: "windowsill",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-059"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-060"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-061"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-062"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-063"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-064"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "The flowers are on the windowsill.",
                clozeParts: ["Die Blumen stehen auf der ", "."],
                clozeAnswers: ["Fensterbank"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-036"),
                wordType: "noun",
                german: "Flur",
                article: "der",
                plural: "Flure",
                english: "hallway / corridor",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-065"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-066"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-067"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-068"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-069"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-070"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "The shoes are in the hallway.",
                clozeParts: ["Die Schuhe stehen im ", "."],
                clozeAnswers: ["Flur"]
            } as Noun,
            {id: createWordId("wohnen-zimmer-037"),
                wordType: "noun",
                german: "Balkon",
                article: "der",
                plural: "Balkone",
                english: "balcony",
                exampleGerman: [
                    {
    id: createWordId("wohnen-r-ume-und-geb-udetei-071"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-072"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-073"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-074"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-075"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-r-ume-und-geb-udetei-076"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have a balcony.",
                clozeParts: ["Wir haben einen ", "."],
                clozeAnswers: ["Balkon"]
            } as Noun
        ],

        // --- KATEGORIE 2: Möbel und Einrichtung (18 Vokabeln) ---
        "Möbel und Einrichtung": [
            {id: createWordId("wohnen-zimmer-002"),
                wordType: "noun",
                german: "Bett",
                article: "das",
                plural: "Betten",
                english: "bed",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-001"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-m-bel-und-einrichtun-002"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-m-bel-und-einrichtun-003"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-m-bel-und-einrichtun-004"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-m-bel-und-einrichtun-005"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-m-bel-und-einrichtun-006"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-m-bel-und-einrichtun-007"), text: "", case: "none" } as CaseElement,
                    {id: createWordId("wohnen-m-bel-und-einrichtun-008"), text: "", case: "none" } as CaseElement
                ],
                exampleEnglish: "When do you go to bed?",
                clozeParts: ["Wann gehst du ins ", "?"],
                clozeAnswers: ["Bett"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Schrank",
                article: "der",
                plural: "Schränke",
                english: "closet / wardrobe",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-009"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-010"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-011"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-012"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-013"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-014"), text: "", case: "none" }
                ],
                exampleEnglish: "My clothes are in the closet.",
                clozeParts: ["Im ", " sind meine Kleider."],
                clozeAnswers: ["Schrank"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Regal",
                article: "das",
                plural: "Regale",
                english: "shelf / rack",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-015"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-016"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-017"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-018"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-019"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-020"), text: "", case: "none" }
                ],
                exampleEnglish: "The books are on the shelf.",
                clozeParts: ["Die Bücher stehen im ", "."],
                clozeAnswers: ["Regal"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Tisch",
                article: "der",
                plural: "Tische",
                english: "table",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-021"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-022"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-023"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-024"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-025"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-026"), text: "", case: "none" }
                ],
                exampleEnglish: "The table is in the living room.",
                clozeParts: ["Der ", " steht im Wohnzimmer."],
                clozeAnswers: ["Tisch"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Stuhl",
                article: "der",
                plural: "Stühle",
                english: "chair",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-027"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-028"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-029"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-030"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-031"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-032"), text: "", case: "none" }
                ],
                exampleEnglish: "My jacket is on the chair.",
                clozeParts: ["Auf dem ", " liegt meine Jacke."],
                clozeAnswers: ["Stuhl"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Sessel",
                article: "der",
                plural: "Sessel",
                english: "armchair",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-033"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-034"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-035"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-036"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-037"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-038"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-039"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-040"), text: "", case: "none" }
                ],
                exampleEnglish: "I like to sit in the armchair.",
                clozeParts: ["Ich sitze gern im ", "."],
                clozeAnswers: ["Sessel"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Sofa",
                article: "das",
                plural: "Sofas",
                english: "sofa / couch",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-041"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-042"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-043"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-044"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-045"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-046"), text: "", case: "none" }
                ],
                exampleEnglish: "The sofa is comfortable.",
                clozeParts: ["Das ", " ist bequem."],
                clozeAnswers: ["Sofa"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Decke",
                article: "die",
                plural: "Decken",
                english: "blanket / ceiling",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-047"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-048"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-049"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-050"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-051"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-052"), text: "", case: "none" }
                ],
                exampleEnglish: "The blanket is warm.",
                clozeParts: ["Die ", " ist warm."],
                clozeAnswers: ["Decke"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Kissen",
                article: "das",
                plural: "Kissen",
                english: "pillow / cushion",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-053"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-054"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-055"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-056"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-057"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-058"), text: "", case: "none" }
                ],
                exampleEnglish: "I need a pillow.",
                clozeParts: ["Ich brauche ein ", "."],
                clozeAnswers: ["Kissen"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Teppich",
                article: "der",
                plural: "Teppiche",
                english: "carpet / rug",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-059"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-060"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-061"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-062"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-063"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-064"), text: "", case: "none" }
                ],
                exampleEnglish: "The carpet is colorful.",
                clozeParts: ["Der ", " ist bunt."],
                clozeAnswers: ["Teppich"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Lampe",
                article: "die",
                plural: "Lampen",
                english: "lamp",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-065"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-066"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-067"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-068"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-069"), text: "", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-070"), text: "", case: "none" }
                ],
                exampleEnglish: "The lamp is broken.",
                clozeParts: ["Die ", " ist kaputt."],
                clozeAnswers: ["Lampe"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Licht",
                article: "das",
                plural: "Lichter",
                english: "light",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-071"), text: "Kannst", case: "verb" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-072"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-073"), text: "du", case: "nominativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-074"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-075"), text: "das Licht", case: "akkusativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-076"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-077"), text: "anmachen", case: "verb" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-078"), text: "?", case: "none" }
                ],
                exampleEnglish: "Can you turn on the light?",
                clozeParts: ["Kannst du das ", " anmachen?"],
                clozeAnswers: ["Licht"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Bild",
                article: "das",
                plural: "Bilder",
                english: "picture / image",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-079"), text: "An der Wand", case: "dativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-080"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-081"), text: "hängt", case: "verb" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-082"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-083"), text: "ein Bild", case: "nominativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-084"), text: ".", case: "none" }
                ],
                exampleEnglish: "A picture hangs on the wall.",
                clozeParts: ["An der Wand hängt ein ", "."],
                clozeAnswers: ["Bild"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Uhr",
                article: "die",
                plural: "Uhren",
                english: "clock / watch",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-085"), text: "Die Uhr", case: "nominativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-086"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-087"), text: "hängt", case: "verb" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-088"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-089"), text: "an der Wand", case: "dativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-090"), text: ".", case: "none" }
                ],
                exampleEnglish: "The clock hangs on the wall.",
                clozeParts: ["Die ", " hängt an der Wand."],
                clozeAnswers: ["Uhr"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Schreibtisch",
                article: "der",
                plural: "Schreibtische",
                english: "desk",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-091"), text: "Ich", case: "nominativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-092"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-093"), text: "mache", case: "verb" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-094"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-095"), text: "meine Hausaufgaben", case: "akkusativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-096"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-097"), text: "am Schreibtisch", case: "dativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-098"), text: ".", case: "none" }
                ],
                exampleEnglish: "I do my homework at the desk.",
                clozeParts: ["Ich mache meine Hausaufgaben am ", "."],
                clozeAnswers: ["Schreibtisch"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Spiegel",
                article: "der",
                plural: "Spiegel",
                english: "mirror",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-099"), text: "Der Spiegel", case: "nominativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-100"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-101"), text: "ist", case: "verb" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-102"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-103"), text: "im Bad", case: "dativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-104"), text: ".", case: "none" }
                ],
                exampleEnglish: "The mirror is in the bathroom.",
                clozeParts: ["Der ", " ist im Bad."],
                clozeAnswers: ["Spiegel"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Gardine/Vorhang",
                article: "die",
                plural: "Gardinen/Vorhänge",
                english: "curtain",
                exampleGerman: [
                    {
    id: createWordId("wohnen-m-bel-und-einrichtun-105"), text: "Die Gardinen", case: "nominativ" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-106"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-107"), text: "sind", case: "verb" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-108"), text: " ", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-109"), text: "weiß", case: "none" },
                    {id: createWordId("wohnen-m-bel-und-einrichtun-110"), text: ".", case: "none" }
                ],
                exampleEnglish: "The curtains are white.",
                clozeParts: ["Die ", " sind weiß."],
                clozeAnswers: ["Gardinen"]
            } as Noun
        ],

        // --- KATEGORIE 3: Haus, Geräte und Adresse (17 Vokabeln) ---
        "Haus, Geräte und Adresse": [
            {id: createWordId(""),
                wordType: "noun",
                german: "Fernseher",
                article: "der",
                plural: "Fernseher",
                english: "television set",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-001"), text: "Der Fernseher", case: "nominativ" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-002"), text: " ", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-003"), text: "ist", case: "verb" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-004"), text: " ", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-005"), text: "neu", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-006"), text: ".", case: "none" }
                ],
                exampleEnglish: "The television is new.",
                clozeParts: ["Der ", " ist neu."],
                clozeAnswers: ["Fernseher"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Heizung",
                article: "die",
                plural: "Heizungen",
                english: "heating",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-007"), text: "Die Heizung", case: "nominativ" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-008"), text: " ", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-009"), text: "ist", case: "verb" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-010"), text: " ", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-011"), text: "aus", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-012"), text: ".", case: "none" }
                ],
                exampleEnglish: "The heating is off.",
                clozeParts: ["Die ", " ist aus."],
                clozeAnswers: ["Heizung"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Stock",
                article: "der",
                plural: "Stockwerke",
                english: "floor / storey",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-013"), text: "Unsere Wohnung", case: "nominativ" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-014"), text: " ", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-015"), text: "ist", case: "verb" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-016"), text: " ", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-017"), text: "im ersten Stock", case: "dativ" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-018"), text: ".", case: "none" }
                ],
                exampleEnglish: "Our apartment is on the first floor.",
                clozeParts: ["Unsere Wohnung ist im ersten ", "."],
                clozeAnswers: ["Stock"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Wohnung",
                article: "die",
                plural: "Wohnungen",
                english: "apartment / flat",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-019"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-020"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-021"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-022"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-023"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-024"), text: "", case: "none" }
                ],
                exampleEnglish: "Our apartment is on the first floor.",
                clozeParts: ["Unsere ", " ist im ersten Stock."],
                clozeAnswers: ["Wohnung"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Haus",
                article: "das",
                plural: "Häuser",
                english: "house",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-025"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-026"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-027"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-028"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-029"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-030"), text: "", case: "none" }
                ],
                exampleEnglish: "Our house is very old.",
                clozeParts: ["Unser ", " ist sehr alt."],
                clozeAnswers: ["Haus"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Herd",
                article: "der",
                plural: "Herde",
                english: "stove / cooker",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-031"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-032"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-033"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-034"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-035"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-036"), text: "", case: "none" }
                ],
                exampleEnglish: "The stove is new.",
                clozeParts: ["Der ", " ist neu."],
                clozeAnswers: ["Herd"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Kühlschrank",
                article: "der",
                plural: "Kühlschränke",
                english: "refrigerator",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-037"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-038"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-039"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-040"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-041"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-042"), text: "", case: "none" }
                ],
                exampleEnglish: "There is milk in the refrigerator.",
                clozeParts: ["Im ", " ist Milch."],
                clozeAnswers: ["Kühlschrank"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Waschmaschine",
                article: "die",
                plural: "Waschmaschinen",
                english: "washing machine",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-043"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-044"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-045"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-046"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-047"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-048"), text: "", case: "none" }
                ],
                exampleEnglish: "The washing machine is loud.",
                clozeParts: ["Die ", " ist laut."],
                clozeAnswers: ["Waschmaschine"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Garage",
                article: "die",
                plural: "Garagen",
                english: "garage",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-049"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-050"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-051"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-052"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-053"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-054"), text: "", case: "none" }
                ],
                exampleEnglish: "The car is in the garage.",
                clozeParts: ["Das Auto steht in der ", "."],
                clozeAnswers: ["Garage"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Keller",
                article: "der",
                plural: "Keller",
                english: "basement / cellar",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-055"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-056"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-057"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-058"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-059"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-060"), text: "", case: "none" }
                ],
                exampleEnglish: "The bicycles are in the basement.",
                clozeParts: ["Die Fahrräder sind im ", "."],
                clozeAnswers: ["Keller"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Schlüssel",
                article: "der",
                plural: "Schlüssel",
                english: "key",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-061"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-062"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-063"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-064"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-065"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-066"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-067"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-068"), text: "", case: "none" }
                ],
                exampleEnglish: "I have lost my key.",
                clozeParts: ["Ich habe meinen ", " verloren."],
                clozeAnswers: ["Schlüssel"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Adresse",
                article: "die",
                plural: "Adressen",
                english: "address",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-069"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-070"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-071"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-072"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-073"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-074"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-075"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-076"), text: "", case: "none" }
                ],
                exampleEnglish: "I don't know the address.",
                clozeParts: ["Ich weiß die ", " nicht."],
                clozeAnswers: ["Adresse"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Nummer",
                article: "die",
                plural: "Nummern",
                english: "number (house number)",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-077"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-078"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-079"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-080"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-081"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-082"), text: "", case: "none" }
                ],
                exampleEnglish: "My house number is 12.",
                clozeParts: ["Meine Haus", " ist 12."],
                clozeAnswers: ["nummer"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Straße",
                article: "die",
                plural: "Straßen",
                english: "street",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-083"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-084"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-085"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-086"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-087"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-088"), text: "", case: "none" }
                ],
                exampleEnglish: "I live on Bahnhofstraße.",
                clozeParts: ["Ich wohne in der ", "."],
                clozeAnswers: ["Bahnhofstraße"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Stadt",
                article: "die",
                plural: "Städte",
                english: "city / town",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-089"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-090"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-091"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-092"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-093"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-094"), text: "", case: "none" }
                ],
                exampleEnglish: "I live in a small town.",
                clozeParts: ["Ich wohne in einer kleinen ", "."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Postleitzahl (PLZ)",
                article: "die",
                plural: "Postleitzahlen (PLZs)",
                english: "postal code / zip code",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-095"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-096"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-097"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-098"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-099"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-100"), text: "", case: "none" }
                ],
                exampleEnglish: "My postal code is 80331.",
                clozeParts: ["Meine ", " ist 80331."],
                clozeAnswers: ["Postleitzahl"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Nachbar/Nachbarin",
                article: "der",
                plural: "Nachbarn/Nachbarinnen",
                english: "neighbor (male/female)",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-101"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-102"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-103"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-104"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-105"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-106"), text: "", case: "none" }
                ],
                exampleEnglish: "My neighbor is very nice.",
                clozeParts: ["Mein ", " ist sehr nett."],
                clozeAnswers: ["Nachbar"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Miete",
                article: "die",
                plural: "Mieten",
                english: "rent",
                exampleGerman: [
                    {
    id: createWordId("wohnen-haus--ger-te-und-adr-107"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-108"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-109"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-110"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-111"), text: "", case: "none" },
                    {id: createWordId("wohnen-haus--ger-te-und-adr-112"), text: "", case: "none" }
                ],
                exampleEnglish: "The rent is expensive.",
                clozeParts: ["Die ", " ist teuer."],
                clozeAnswers: ["Miete"]
            } as Noun
        ],

        // --- KATEGORIE 4: Garten (22 Vokabeln) ---
        "Garten": [
            {id: createWordId(""),
                wordType: "noun",
                german: "Garten",
                article: "der",
                plural: "Gärten",
                english: "garden",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-001"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-002"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-003"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-004"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-005"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-006"), text: "", case: "none" }
                ],
                exampleEnglish: "We have a large garden.",
                clozeParts: ["Wir haben einen großen ", "."],
                clozeAnswers: ["Garten"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Baum",
                article: "der",
                plural: "Bäume",
                english: "tree",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-007"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-008"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-009"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-010"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-011"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-012"), text: "", case: "none" }
                ],
                exampleEnglish: "The trees are already green.",
                clozeParts: ["Die ", " sind schon grün."],
                clozeAnswers: ["Bäume"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Blume",
                article: "die",
                plural: "Blumen",
                english: "flower",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-013"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-014"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-015"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-016"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-017"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-018"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-019"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-020"), text: "", case: "none" }
                ],
                exampleEnglish: "Here are flowers for you.",
                clozeParts: ["Hier sind ", " für dich."],
                clozeAnswers: ["Blumen"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Gras",
                article: "das",
                plural: "Gräser",
                english: "grass",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-021"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-022"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-023"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-024"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-025"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-026"), text: "", case: "none" }
                ],
                exampleEnglish: "The children are playing on the grass.",
                clozeParts: ["Die Kinder spielen auf dem ", "."],
                clozeAnswers: ["Gras"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Rasen",
                article: "der",
                plural: "Rasen",
                english: "lawn",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-027"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-028"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-029"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-030"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-031"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-032"), text: "", case: "none" }
                ],
                exampleEnglish: "The lawn is freshly mown.",
                clozeParts: ["Der ", " ist frisch gemäht."],
                clozeAnswers: ["Rasen"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Busch",
                article: "der",
                plural: "Büsche",
                english: "bush",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-033"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-034"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-035"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-036"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-037"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-038"), text: "", case: "none" }
                ],
                exampleEnglish: "There is a bush next to the house.",
                clozeParts: ["Neben dem Haus ist ein ", "."],
                clozeAnswers: ["Busch"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Hecke",
                article: "die",
                plural: "Hecken",
                english: "hedge",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-039"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-040"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-041"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-042"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-043"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-044"), text: "", case: "none" }
                ],
                exampleEnglish: "The hedge is high.",
                clozeParts: ["Die ", " ist hoch."],
                clozeAnswers: ["Hecke"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Zaun",
                article: "der",
                plural: "Zäune",
                english: "fence",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-045"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-046"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-047"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-048"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-049"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-050"), text: "", case: "none" }
                ],
                exampleEnglish: "The fence is new.",
                clozeParts: ["Der ", " ist neu."],
                clozeAnswers: ["Zaun"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Terrasse",
                article: "die",
                plural: "Terrassen",
                english: "terrace / patio",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-051"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-052"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-053"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-054"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-055"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-056"), text: "", case: "none" }
                ],
                exampleEnglish: "We have breakfast on the terrace.",
                clozeParts: ["Wir frühstücken auf der ", "."],
                clozeAnswers: ["Terrasse"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Hof",
                article: "der",
                plural: "Höfe",
                english: "courtyard / yard",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-057"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-058"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-059"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-060"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-061"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-062"), text: "", case: "none" }
                ],
                exampleEnglish: "The children are playing in the yard.",
                clozeParts: ["Die Kinder spielen im ", "."],
                clozeAnswers: ["Hof"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Hund",
                article: "der",
                plural: "Hunde",
                english: "dog",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-063"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-064"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-065"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-066"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-067"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-068"), text: "", case: "none" }
                ],
                exampleEnglish: "Is that your dog?",
                clozeParts: ["Ist das dein ", "?"],
                clozeAnswers: ["Hund"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Katze",
                article: "die",
                plural: "Katzen",
                english: "cat",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-069"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-070"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-071"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-072"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-073"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-074"), text: "", case: "none" }
                ],
                exampleEnglish: "My cat sleeps a lot.",
                clozeParts: ["Meine ", " schläft viel."],
                clozeAnswers: ["Katze"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Vogel",
                article: "der",
                plural: "Vögel",
                english: "bird",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-075"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-076"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-077"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-078"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-079"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-080"), text: "", case: "none" }
                ],
                exampleEnglish: "A bird is singing in the garden.",
                clozeParts: ["Im Garten singt ein ", "."],
                clozeAnswers: ["Vogel"]
            } as Noun,
            {id: createWordId(""),
                wordType: "verb",
                german: "spielen",
                english: "to play", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                presentConjugation: {
    id: createWordId("wohnen-garten-081"),
                    I: "spiele",
                    you_informal: "spielst",
                    he: "spielt",
                    we: "spielen",
                    you_pl: "spielt",
                    they_you_formal: "spielen"
                },
                imperative: {id: createWordId("wohnen-garten-082"),
                    you_informal: "Spiel!",
                    you_pl: "Spielt!"
                },
                exampleGerman: [
                    {id: createWordId("wohnen-garten-083"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-084"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-085"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-086"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-087"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-088"), text: "", case: "none" }
                ],
                exampleEnglish: "The children are playing in the garden.",
                clozeParts: ["Die Kinder ", " im Garten."],
                clozeAnswers: ["spielen"]
            } as Verb,
            {id: createWordId(""),
                wordType: "verb",
                german: "gießen",
                english: "to water (plants)", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegossen",
                presentConjugation: {
    id: createWordId("wohnen-garten-089"),
                    I: "gieße",
                    you_informal: "gießt",
                    he: "gießt",
                    we: "gießen",
                    you_pl: "gießt",
                    they_you_formal: "gießen"
                },
                imperative: {id: createWordId("wohnen-garten-090"),
                    you_informal: "Gieß!",
                    you_pl: "Gießt!"
                },
                exampleGerman: [
                    {id: createWordId("wohnen-garten-091"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-092"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-093"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-094"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-095"), text: "", case: "none" },
                    {id: createWordId("wohnen-garten-096"), text: "", case: "none" }
                ],
                exampleEnglish: "I am watering the flowers.",
                clozeParts: ["Ich ", " die Blumen."],
                clozeAnswers: ["gieße"]
            } as Verb,
            {id: createWordId(""),
                wordType: "verb",
                german: "pflanzen",
                english: "to plant", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gepflanzt",
                presentConjugation: {
    id: createWordId("wohnen-garten-097"),
                    I: "pflanze",
                    you_informal: "pflanzt",
                    he: "pflanzt",
                    we: "pflanzen",
                    you_pl: "pflanzt",
                    they_you_formal: "pflanzen"
                },
                imperative: {id: createWordId("wohnen-garten-098"),
                    you_informal: "Pflanz!",
                    you_pl: "Pflanzt!"
                },
                exampleGerman: [
                    {id: createWordId("wohnen-garten-099"), text: "Wir", case: "nominativ" },
                    {id: createWordId("wohnen-garten-100"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-101"), text: "pflanzen", case: "verb" },
                    {id: createWordId("wohnen-garten-102"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-103"), text: "einen Baum", case: "akkusativ" },
                    {id: createWordId("wohnen-garten-104"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are planting a tree.",
                clozeParts: ["Wir ", " einen Baum."],
                clozeAnswers: ["pflanzen"]
            } as Verb,
            {id: createWordId(""),
                wordType: "verb",
                german: "sitzen",
                english: "to sit", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesessen",
                presentConjugation: {
    id: createWordId("wohnen-garten-105"),
                    I: "sitze",
                    you_informal: "sitzt",
                    he: "sitzt",
                    we: "sitzen",
                    you_pl: "sitzt",
                    they_you_formal: "sitzen"
                },
                imperative: {id: createWordId("wohnen-garten-106"),
                    you_informal: "Sitz!",
                    you_pl: "Sitzt!"
                },
                exampleGerman: [
                    {id: createWordId("wohnen-garten-107"), text: "Wir", case: "nominativ" },
                    {id: createWordId("wohnen-garten-108"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-109"), text: "sitzen", case: "verb" },
                    {id: createWordId("wohnen-garten-110"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-111"), text: "im Garten", case: "dativ" },
                    {id: createWordId("wohnen-garten-112"), text: ".", case: "none" }
                ],
                exampleEnglish: "We are sitting in the garden.",
                clozeParts: ["Wir ", " im Garten."],
                clozeAnswers: ["sitzen"]
            } as Verb,
            {id: createWordId(""),
                wordType: "verb",
                german: "grillen",
                english: "to grill / to barbecue", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegrillt",
                presentConjugation: {
    id: createWordId("wohnen-garten-113"),
                    I: "grille",
                    you_informal: "grillst",
                    he: "grillt",
                    we: "grillen",
                    you_pl: "grillt",
                    they_you_formal: "grillen"
                },
                imperative: {id: createWordId("wohnen-garten-114"),
                    you_informal: "Grill!",
                    you_pl: "Grillt!"
                },
                exampleGerman: [
                    {id: createWordId("wohnen-garten-115"), text: "Im Sommer", case: "dativ" },
                    {id: createWordId("wohnen-garten-116"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-117"), text: "grillen", case: "verb" },
                    {id: createWordId("wohnen-garten-118"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-119"), text: "wir", case: "nominativ" },
                    {id: createWordId("wohnen-garten-120"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-121"), text: "im Garten", case: "dativ" },
                    {id: createWordId("wohnen-garten-122"), text: ".", case: "none" }
                ],
                exampleEnglish: "In summer we grill in the garden.",
                clozeParts: ["Im Sommer ", " wir im Garten."],
                clozeAnswers: ["grillen"]
            } as Verb,
            {id: createWordId(""),
                wordType: "noun",
                german: "Sonne",
                article: "die",
                plural: "Sonnen",
                english: "sun",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-123"), text: "Die Sonne", case: "nominativ" },
                    {id: createWordId("wohnen-garten-124"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-125"), text: "scheint", case: "verb" },
                    {id: createWordId("wohnen-garten-126"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-127"), text: "im Garten", case: "dativ" },
                    {id: createWordId("wohnen-garten-128"), text: ".", case: "none" }
                ],
                exampleEnglish: "The sun is shining in the garden.",
                clozeParts: ["Die ", " scheint im Garten."],
                clozeAnswers: ["Sonne"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Schatten",
                article: "der",
                plural: "Schatten",
                english: "shade / shadow",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-129"), text: "Im Schatten", case: "dativ" },
                    {id: createWordId("wohnen-garten-130"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-131"), text: "ist", case: "verb" },
                    {id: createWordId("wohnen-garten-132"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-133"), text: "es", case: "nominativ" },
                    {id: createWordId("wohnen-garten-134"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-135"), text: "kühl", case: "none" },
                    {id: createWordId("wohnen-garten-136"), text: ".", case: "none" }
                ],
                exampleEnglish: "It is cool in the shade.",
                clozeParts: ["Im ", " ist es kühl."],
                clozeAnswers: ["Schatten"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Werkzeug",
                article: "das",
                plural: "Werkzeuge",
                english: "tool / tools",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-137"), text: "Das Werkzeug", case: "nominativ" },
                    {id: createWordId("wohnen-garten-138"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-139"), text: "liegt", case: "verb" },
                    {id: createWordId("wohnen-garten-140"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-141"), text: "im Gartenhaus", case: "dativ" },
                    {id: createWordId("wohnen-garten-142"), text: ".", case: "none" }
                ],
                exampleEnglish: "The tools are in the garden shed.",
                clozeParts: ["Das ", " liegt im Gartenhaus."],
                clozeAnswers: ["Werkzeug"]
            } as Noun,
            {id: createWordId(""),
                wordType: "noun",
                german: "Gartenhaus",
                article: "das",
                plural: "Gartenhäuser",
                english: "garden shed / summer house",
                exampleGerman: [
                    {
    id: createWordId("wohnen-garten-143"), text: "Das Werkzeug", case: "nominativ" },
                    {id: createWordId("wohnen-garten-144"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-145"), text: "liegt", case: "verb" },
                    {id: createWordId("wohnen-garten-146"), text: " ", case: "none" },
                    {id: createWordId("wohnen-garten-147"), text: "im Gartenhaus", case: "dativ" },
                    {id: createWordId("wohnen-garten-148"), text: ".", case: "none" }
                ],
                exampleEnglish: "The tools are in the garden shed.",
                clozeParts: ["Das Werkzeug liegt im ", "."],
                clozeAnswers: ["Gartenhaus"]
            } as Noun
        ]
    }
});