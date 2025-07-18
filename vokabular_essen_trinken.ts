// vokabular_essen_trinken.ts

import type {VocabularyStructure, Noun, Verb, Adjective, CaseElement } from './src/core/types/vocabulary';
import {createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabularEssenTrinken: VocabularyStructure = createVocabulary({"Essen und Trinken": {

        // --- NEUE KATEGORIE: Obst & Gemüse ---
        "Obst & Gemüse": [
            {
                id: createWordId("essen-trinken-lebensmittel-001"),
                wordType: "noun",
                german: "Apfel",
                article: "der",
                plural: "Äpfel",
                english: "apple",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-obst---gem-se-001"), text: "Schmeckt", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-003"), text: "dir", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-005"), text: "der Apfel", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-006"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Do you like the taste of the apple?",
                clozeParts: ["Schmeckt dir der ", "?"],
                clozeAnswers: ["Apfel"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-002"),
                wordType: "noun",
                german: "Banane",
                article: "die",
                plural: "Bananen",
                english: "banana",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-obst---gem-se-007"), text: "Kann", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-009"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-011"), text: "eine Banane", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-013"), text: "haben", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-014"), text: "?", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-015"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-016"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-017"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-018"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-019"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-020"), text: "Hunger", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-021"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can I have a banana? I'm hungry.",
                clozeParts: ["Kann ich eine ", " haben?"],
                clozeAnswers: ["Banane"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-009"),
                wordType: "noun",
                german: "Gemüse",
                article: "das",
                plural: null,
                english: "vegetables",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-obst---gem-se-022"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-023"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-024"), text: "esse", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-025"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-026"), text: "gern", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-027"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-028"), text: "Gemüse", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-029"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I like to eat vegetables.",
                clozeParts: ["Ich esse gern ", "."],
                clozeAnswers: ["Gemüse"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-013"),
                wordType: "noun",
                german: "Obst",
                article: "das",
                plural: null,
                english: "fruit",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-obst---gem-se-030"), text: "Obst", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-031"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-032"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-033"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-034"), text: "gesund", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-035"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Fruit is healthy.",
                clozeParts: ["", " ist gesund."],
                clozeAnswers: ["Obst"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-017"),
                wordType: "noun",
                german: "Tomate",
                article: "die",
                plural: "Tomaten",
                english: "tomato",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-obst---gem-se-036"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-037"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-038"), text: "esse", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-039"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-040"), text: "Tomaten", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-041"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-042"), text: "im Salat", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-obst---gem-se-043"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I eat tomatoes in salad.",
                clozeParts: ["Ich esse ", " im Salat."],
                clozeAnswers: ["Tomaten"]
            } as Noun
        ],

        // --- NEUE KATEGORIE: Grundnahrungsmittel & Tierprodukte ---
        "Grundnahrungsmittel & Tierprodukte": [
            {id: createWordId("essen-trinken-lebensmittel-003"),
                wordType: "noun",
                german: "Brot",
                article: "das",
                plural: "Brote",
                english: "bread",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-001"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-003"), text: "müssen", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-005"), text: "auch", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-007"), text: "Brot", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-009"), text: "kaufen", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-010"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We also need to buy bread.",
                clozeParts: ["Wir müssen auch ", " kaufen."],
                clozeAnswers: ["Brot"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-004"),
                wordType: "noun",
                german: "Brötchen",
                article: "das",
                plural: "Brötchen",
                english: "bread roll",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-011"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-013"), text: "esse", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-015"), text: "lieber", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-017"), text: "Brötchen", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I prefer to eat bread rolls.",
                clozeParts: ["Ich esse lieber ", "."],
                clozeAnswers: ["Brötchen"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-005"),
                wordType: "noun",
                german: "Butter",
                article: "die",
                plural: null,
                english: "butter",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-019"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-021"), text: "nehme", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-023"), text: "Butter", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-025"), text: "aufs Brot", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-026"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I put butter on my bread.",
                clozeParts: ["Ich nehme ", " aufs Brot."],
                clozeAnswers: ["Butter"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-006"),
                wordType: "noun",
                german: "Ei",
                article: "das",
                plural: "Eier",
                english: "egg",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-027"), text: "Möchtest", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-029"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-031"), text: "ein Ei", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-033"), text: "zum Frühstück", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-034"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Would you like an egg for breakfast?",
                clozeParts: ["Möchtest du ein ", " zum Frühstück?"],
                clozeAnswers: ["Ei"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-007"),
                wordType: "noun",
                german: "Fisch",
                article: "der",
                plural: "Fische",
                english: "fish",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-035"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-037"), text: "mag", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-039"), text: "keinen Fisch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-040"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I don't like fish.",
                clozeParts: ["Ich mag keinen ", "."],
                clozeAnswers: ["Fisch"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-008"),
                wordType: "noun",
                german: "Fleisch",
                article: "das",
                plural: null,
                english: "meat",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-041"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-043"), text: "esse", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-045"), text: "kein Fleisch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-046"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I don't eat meat.",
                clozeParts: ["Ich esse kein ", "."],
                clozeAnswers: ["Fleisch"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-010"),
                wordType: "noun",
                german: "Käse",
                article: "der",
                plural: null,
                english: "cheese",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-047"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-049"), text: "esse", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-051"), text: "Käse", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-053"), text: "zum Frühstück", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-054"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I eat cheese for breakfast.",
                clozeParts: ["Ich esse ", " zum Frühstück."],
                clozeAnswers: ["Käse"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-012"),
                wordType: "noun",
                german: "Milch",
                article: "die",
                plural: null,
                english: "milk",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-055"), text: "Im Kühlschrank", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-057"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-059"), text: "Milch", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-060"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There is milk in the refrigerator.",
                clozeParts: ["Im Kühlschrank ist ", "."],
                clozeAnswers: ["Milch"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-014"),
                wordType: "noun",
                german: "Reis",
                article: "der",
                plural: null,
                english: "rice",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-061"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-063"), text: "esse", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-065"), text: "gern", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-067"), text: "Reis", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-068"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I like to eat rice.",
                clozeParts: ["Ich esse gern ", "."],
                clozeAnswers: ["Reis"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-018"),
                wordType: "noun",
                german: "Wurst",
                article: "die",
                plural: "Würste",
                english: "sausage / cold cuts",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-069"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-071"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-072"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-073"), text: "eine Wurst", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-074"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like a sausage.",
                clozeParts: ["Ich möchte eine ", "."],
                clozeAnswers: ["Wurst"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-026"),
                wordType: "noun",
                german: "Joghurt",
                article: "der",
                plural: "Joghurts",
                english: "yogurt",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-075"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-077"), text: "esse", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-078"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-079"), text: "Joghurt", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-080"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-081"), text: "mit Obst", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-082"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I eat yogurt with fruit.",
                clozeParts: ["Ich esse ", " mit Obst."],
                clozeAnswers: ["Joghurt"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-038"),
                wordType: "noun",
                german: "Butterbrot",
                article: "das",
                plural: "Butterbrote",
                english: "slice of bread with butter",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-grundnahrungsmittel-083"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-084"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-085"), text: "esse", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-086"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-087"), text: "ein Butterbrot", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-grundnahrungsmittel-088"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I eat a slice of bread with butter.",
                clozeParts: ["Ich esse ein ", "."],
                clozeAnswers: ["Butterbrot"]
            } as Noun
        ],

        // --- NEUE KATEGORIE: Getränke & Süßes ---
        "Getränke & Süßes": [
            {id: createWordId("essen-trinken-lebensmittel-011"),
                wordType: "noun",
                german: "Kuchen",
                article: "der",
                plural: "Kuchen",
                english: "cake",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-getr-nke---s--es-001"), text: "Der Kuchen", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-003"), text: "schmeckt", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-005"), text: "sehr gut", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The cake tastes very good.",
                clozeParts: ["Der ", " schmeckt sehr gut."],
                clozeAnswers: ["Kuchen"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-019"),
                wordType: "noun",
                german: "Wasser",
                article: "das",
                plural: null,
                english: "water",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-getr-nke---s--es-007"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-009"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-011"), text: "ein Glas Wasser", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like a glass of water.",
                clozeParts: ["Ich möchte ein Glas ", "."],
                clozeAnswers: ["Wasser"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-021"),
                wordType: "noun",
                german: "Saft",
                article: "der",
                plural: "Säfte",
                english: "juice",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-getr-nke---s--es-013"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-015"), text: "trinke", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-017"), text: "gern", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-019"), text: "Apfelsaft", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-020"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I like to drink apple juice.",
                clozeParts: ["Ich trinke gern Apfel", "."],
                clozeAnswers: ["saft"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-022"),
                wordType: "noun",
                german: "Tee",
                article: "der",
                plural: "Tees",
                english: "tea",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-getr-nke---s--es-021"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-023"), text: "trinke", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-025"), text: "Tee", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-027"), text: "zum Frühstück", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-028"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I drink tea for breakfast.",
                clozeParts: ["Ich trinke ", " zum Frühstück."],
                clozeAnswers: ["Tee"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-023"),
                wordType: "noun",
                german: "Kaffee",
                article: "der",
                plural: "Kaffees",
                english: "coffee",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-getr-nke---s--es-029"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-031"), text: "trinke", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-033"), text: "keinen Kaffee", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-034"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I don't drink coffee.",
                clozeParts: ["Ich trinke keinen ", "."],
                clozeAnswers: ["Kaffee"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-024"),
                wordType: "noun",
                german: "Schokolade",
                article: "die",
                plural: "Schokoladen",
                english: "chocolate",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-getr-nke---s--es-035"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-037"), text: "esse", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-039"), text: "gern", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-041"), text: "Schokolade", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-042"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I like to eat chocolate.",
                clozeParts: ["Ich esse gern ", "."],
                clozeAnswers: ["Schokolade"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-025"),
                wordType: "noun",
                german: "Marmelade",
                article: "die",
                plural: "Marmeladen",
                english: "jam / marmalade",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-getr-nke---s--es-043"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-045"), text: "esse", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-047"), text: "Marmelade", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-049"), text: "zum Frühstück", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-050"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I eat jam for breakfast.",
                clozeParts: ["Ich esse ", " zum Frühstück."],
                clozeAnswers: ["Marmelade"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-027"),
                wordType: "noun",
                german: "Mineralwasser",
                article: "das",
                plural: null,
                english: "mineral water",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-getr-nke---s--es-051"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-053"), text: "trinke", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-055"), text: "Mineralwasser", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-056"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I drink mineral water.",
                clozeParts: ["Ich trinke ", "."],
                clozeAnswers: ["Mineralwasser"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-028"),
                wordType: "noun",
                german: "Cola",
                article: "die",
                plural: "Colas",
                english: "cola",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-getr-nke---s--es-057"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-059"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-061"), text: "eine Cola", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-062"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like a cola.",
                clozeParts: ["Ich möchte eine ", "."],
                clozeAnswers: ["Cola"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-029"),
                wordType: "noun",
                german: "Eis",
                article: "das",
                plural: "Eis",
                english: "ice cream / ice",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-getr-nke---s--es-063"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-065"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-067"), text: "ein großes Eis", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-getr-nke---s--es-068"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like a large ice cream.",
                clozeParts: ["Ich möchte ein großes ", "."],
                clozeAnswers: ["Eis"]
            } as Noun
        ],

        // --- NEUE KATEGORIE: Geschirr & Zutaten ---
        "Geschirr & Zutaten": [
            {id: createWordId("essen-trinken-lebensmittel-015"),
                wordType: "noun",
                german: "Salz",
                article: "das",
                plural: null,
                english: "salt",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-001"), text: "Gibst", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-003"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-005"), text: "mir", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-007"), text: "bitte", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-009"), text: "das Salz", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-010"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you please pass me the salt?",
                clozeParts: ["Gibst du mir bitte das ", "?"],
                clozeAnswers: ["Salz"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-016"),
                wordType: "noun",
                german: "Suppe",
                article: "die",
                plural: "Suppen",
                english: "soup",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-011"), text: "Die Suppe", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-013"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-015"), text: "heiß", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-016"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The soup is hot.",
                clozeParts: ["Die ", " ist heiß."],
                clozeAnswers: ["Suppe"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-020"),
                wordType: "noun",
                german: "Zucker",
                article: "der",
                plural: null,
                english: "sugar",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-017"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-019"), text: "nehme", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-021"), text: "Zucker", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-023"), text: "im Tee", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-024"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I take sugar in my tea.",
                clozeParts: ["Ich nehme ", " im Tee."],
                clozeAnswers: ["Zucker"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-030"),
                wordType: "noun",
                german: "Flasche",
                article: "die",
                plural: "Flaschen",
                english: "bottle",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-025"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-027"), text: "brauche", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-029"), text: "eine Flasche", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-030"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a bottle.",
                clozeParts: ["Ich brauche eine ", "."],
                clozeAnswers: ["Flasche"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-031"),
                wordType: "noun",
                german: "Glas",
                article: "das",
                plural: "Gläser",
                english: "glass",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-031"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-033"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-035"), text: "ein Glas", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-037"), text: "Wasser", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-038"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like a glass of water.",
                clozeParts: ["Ich möchte ein ", " Wasser."],
                clozeAnswers: ["Glas"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-032"),
                wordType: "noun",
                german: "Tasse",
                article: "die",
                plural: "Tassen",
                english: "cup / mug",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-039"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-041"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-043"), text: "eine Tasse", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-045"), text: "Kaffee", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-046"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like a cup of coffee.",
                clozeParts: ["Ich möchte eine ", " Kaffee."],
                clozeAnswers: ["Tasse"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-033"),
                wordType: "noun",
                german: "Teller",
                article: "der",
                plural: "Teller",
                english: "plate",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-047"), text: "Die Teller", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-049"), text: "stehen", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-051"), text: "im Schrank", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-052"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The plates are in the cupboard.",
                clozeParts: ["Die ", " stehen im Schrank."],
                clozeAnswers: ["Teller"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-034"),
                wordType: "noun",
                german: "Messer",
                article: "das",
                plural: "Messer",
                english: "knife",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-053"), text: "Das Messer", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-055"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-057"), text: "scharf", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-058"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The knife is sharp.",
                clozeParts: ["Das ", " ist scharf."],
                clozeAnswers: ["Messer"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-035"),
                wordType: "noun",
                german: "Gabel",
                article: "die",
                plural: "Gabeln",
                english: "fork",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-059"), text: "Die Gabel", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-061"), text: "liegt", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-063"), text: "auf dem Tisch", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-064"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The fork is on the table.",
                clozeParts: ["Die ", " liegt auf dem Tisch."],
                clozeAnswers: ["Gabel"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-036"),
                wordType: "noun",
                german: "Löffel",
                article: "der",
                plural: "Löffel",
                english: "spoon",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-065"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-067"), text: "brauche", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-068"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-069"), text: "einen Löffel", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-071"), text: "für die Suppe", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-072"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a spoon for the soup.",
                clozeParts: ["Ich brauche einen ", " für die Suppe."],
                clozeAnswers: ["Löffel"]
            } as Noun,
            {id: createWordId("essen-trinken-lebensmittel-037"),
                wordType: "noun",
                german: "Pfeffer",
                article: "der",
                plural: null,
                english: "pepper",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-geschirr---zutaten-073"), text: "Der Pfeffer", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-074"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-075"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-077"), text: "scharf", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-geschirr---zutaten-078"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The pepper is spicy.",
                clozeParts: ["Der ", " ist scharf."],
                clozeAnswers: ["Pfeffer"]
            } as Noun
        ],

        // --- UNTER-THEMA: Mahlzeiten/Lokale --- (UNVERÄNDERT)
        "Mahlzeiten & Restaurant": [
            {id: createWordId("essen-trinken-mahlzeitenlokale-001"),
                wordType: "noun",
                german: "Frühstück",
                article: "das",
                plural: "Frühstücke",
                english: "breakfast",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-001"), text: "Zum Frühstück", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-003"), text: "trinke", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-005"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-007"), text: "Milch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-008"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "For breakfast I drink milk.",
                clozeParts: ["Zum ", " trinke ich Milch."],
                clozeAnswers: ["Frühstück"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-002"),
                wordType: "noun",
                german: "Mittagessen",
                article: "das",
                plural: "Mittagessen",
                english: "lunch",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-009"), text: "Was", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-011"), text: "gibt", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-013"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-015"), text: "zum Mittagessen", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-016"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "What is there for lunch?",
                clozeParts: ["Was gibt es zum ", "?"],
                clozeAnswers: ["Mittagessen"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-003"),
                wordType: "noun",
                german: "Abendessen",
                article: "das",
                plural: "Abendessen",
                english: "dinner",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-017"), text: "Zum Abendessen", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-019"), text: "gibt", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-021"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-023"), text: "Brot", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-024"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There is bread for dinner.",
                clozeParts: ["Zum ", " gibt es Brot."],
                clozeAnswers: ["Abendessen"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-004"),
                wordType: "verb",
                german: "essen",
                english: "to eat", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegessen",
                presentConjugation: {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-025"), 
                    I: "esse", 
                    you_informal: "isst", 
                    he: "isst", 
                    we: "essen", 
                    you_pl: "esst", 
                    they: "essen" 
                },
                imperative: {id: createWordId("essen-und-trinken-mahlzeiten---restaur-026"), you_informal: "Iss!", you_pl: "Esst!" },
                exampleGerman: [
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-027"), text: "Was", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-029"), text: "wollt", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-031"), text: "ihr", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-033"), text: "essen", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-034"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "What do you want to eat?",
                clozeParts: ["Was wollt ihr ", "?"],
                clozeAnswers: ["essen"]
            } as Verb,
            {id: createWordId("essen-trinken-mahlzeitenlokale-005"),
                wordType: "verb",
                german: "trinken",
                english: "to drink", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getrunken",
                presentConjugation: {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-035"), 
                    I: "trinke", 
                    you_informal: "trinkst", 
                    he: "trinkt", 
                    we: "trinken", 
                    you_pl: "trinkt", 
                    they: "trinken" 
                },
                imperative: {id: createWordId("essen-und-trinken-mahlzeiten---restaur-036"), you_informal: "Trink!", you_pl: "Trinkt!" },
                exampleGerman: [
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-037"), text: "Was", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-039"), text: "möchtest", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-041"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-043"), text: "trinken", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-044"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "What would you like to drink?",
                clozeParts: ["Was möchtest du ", "?"],
                clozeAnswers: ["trinken"]
            } as Verb,
            {id: createWordId("essen-trinken-mahlzeitenlokale-006"),
                wordType: "noun",
                german: "Hunger",
                article: "der",
                plural: null,
                english: "hunger",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-045"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-047"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-049"), text: "Hunger", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-050"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am hungry. (Literally: I have hunger.)",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["Hunger"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-007"),
                wordType: "noun",
                german: "Durst",
                article: "der",
                plural: null,
                english: "thirst",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-051"), text: "Hast", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-053"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-055"), text: "Durst", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-056"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Are you thirsty? (Literally: Do you have thirst?)",
                clozeParts: ["Hast du ", "?"],
                clozeAnswers: ["Durst"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-008"),
                wordType: "verb",
                german: "kochen",
                english: "to cook", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekocht",
                presentConjugation: {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-057"), 
                    I: "koche", 
                    you_informal: "kochst", 
                    he: "kocht", 
                    we: "kochen", 
                    you_pl: "kocht", 
                    they: "kochen" 
                },
                imperative: {id: createWordId("essen-und-trinken-mahlzeiten---restaur-058"), you_informal: "Koch!", you_pl: "Kocht!" },
                exampleGerman: [
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-059"), text: "In der Küche", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-061"), text: "kocht", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-063"), text: "meine Mutter", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-064"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My mother is cooking in the kitchen.",
                clozeParts: ["In der Küche ", " meine Mutter."],
                clozeAnswers: ["kocht"]
            } as Verb,
            {id: createWordId("essen-trinken-mahlzeitenlokale-009"),
                wordType: "verb",
                german: "schmecken",
                english: "to taste", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschmeckt",
                presentConjugation: {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-065"), 
                    I: "schmecke", 
                    you_informal: "schmeckst", 
                    he: "schmeckt", 
                    we: "schmecken", 
                    you_pl: "schmeckt", 
                    they: "schmecken" 
                },
                imperative: {id: createWordId("essen-und-trinken-mahlzeiten---restaur-066"), you_informal: "Schmeck!", you_pl: "Schmeckt!" },
                exampleGerman: [
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-067"), text: "Der Kuchen", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-068"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-069"), text: "schmeckt", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-071"), text: "sehr gut", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-072"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The cake tastes very good.",
                clozeParts: ["Der Kuchen ", " sehr gut."],
                clozeAnswers: ["schmeckt"]
            } as Verb,
            {id: createWordId("essen-trinken-mahlzeitenlokale-010"),
                wordType: "verb",
                german: "probieren",
                english: "to try / to taste", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "probiert",
                presentConjugation: {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-073"), 
                    I: "probiere", 
                    you_informal: "probierst", 
                    he: "probiert", 
                    we: "probieren", 
                    you_pl: "probiert", 
                    they: "probieren" 
                },
                imperative: {id: createWordId("essen-und-trinken-mahlzeiten---restaur-074"), you_informal: "Probier!", you_pl: "Probiert!" },
                exampleGerman: [
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-075"), text: "Probier", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-077"), text: "mal", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-078"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-079"), text: "die Suppe", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-080"), text: "!", case: "none" } as CaseElement
                ],
                exampleEnglish: "Try the soup!",
                clozeParts: ["", " mal die Suppe!"],
                clozeAnswers: ["Probier"]
            } as Verb,
            {id: createWordId("essen-trinken-mahlzeitenlokale-011"),
                wordType: "verb",
                german: "bestellen",
                english: "to order", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bestellt",
                presentConjugation: {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-081"), 
                    I: "bestelle", 
                    you_informal: "bestellst", 
                    he: "bestellt", 
                    we: "bestellen", 
                    you_pl: "bestellt", 
                    they: "bestellen" 
                },
                imperative: {id: createWordId("essen-und-trinken-mahlzeiten---restaur-082"), you_informal: "Bestell!", you_pl: "Bestellt!" },
                exampleGerman: [
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-083"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-084"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-085"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-086"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-087"), text: "eine Pizza", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-088"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-089"), text: "bestellen", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-090"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like to order a pizza.",
                clozeParts: ["Ich möchte eine Pizza ", "."],
                clozeAnswers: ["bestellen"]
            } as Verb,
            {id: createWordId("essen-trinken-mahlzeitenlokale-012"),
                wordType: "verb",
                german: "bezahlen",
                english: "to pay", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bezahlt",
                presentConjugation: {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-091"), 
                    I: "bezahle", 
                    you_informal: "bezahlst", 
                    he: "bezahlt", 
                    we: "bezahlen", 
                    you_pl: "bezahlt", 
                    they: "bezahlen" 
                },
                imperative: {id: createWordId("essen-und-trinken-mahlzeiten---restaur-092"), you_informal: "Bezahl!", you_pl: "Bezahlt!" },
                exampleGerman: [
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-093"), text: "Wo", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-094"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-095"), text: "muss", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-096"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-097"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-098"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-099"), text: "bezahlen", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-100"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Where do I have to pay?",
                clozeParts: ["Wo muss ich ", "?"],
                clozeAnswers: ["bezahlen"]
            } as Verb,
            {id: createWordId("essen-trinken-mahlzeitenlokale-013"),
                wordType: "adjective",
                german: "satt",
                english: "full (after eating)",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-101"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-102"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-103"), text: "bin", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-104"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-105"), text: "satt", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-106"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am full.",
                clozeParts: ["Ich bin ", "."],
                clozeAnswers: ["satt"]
            } as Adjective,
            {id: createWordId("essen-trinken-mahlzeitenlokale-014"),
                wordType: "noun",
                german: "Restaurant",
                article: "das",
                plural: "Restaurants",
                english: "restaurant",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-107"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-108"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-109"), text: "gehen", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-110"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-111"), text: "ins Restaurant", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-112"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are going to the restaurant.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Restaurant"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-015"),
                wordType: "noun",
                german: "Café",
                article: "das",
                plural: "Cafés",
                english: "cafe",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-113"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-114"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-115"), text: "treffen uns", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-116"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-117"), text: "im Café", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-118"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are meeting at the cafe.",
                clozeParts: ["Wir treffen uns im ", "."],
                clozeAnswers: ["Café"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-016"),
                wordType: "noun",
                german: "Imbiss",
                article: "der",
                plural: "Imbisse",
                english: "snack bar / food stand",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-119"), text: "Am Bahnhof", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-120"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-121"), text: "gibt", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-122"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-123"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-124"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-125"), text: "einen Imbiss", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-126"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There is a snack bar at the train station.",
                clozeParts: ["Am Bahnhof gibt es einen ", "."],
                clozeAnswers: ["Imbiss"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-017"),
                wordType: "noun",
                german: "Bäckerei",
                article: "die",
                plural: "Bäckereien",
                english: "bakery",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-127"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-128"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-129"), text: "kaufe", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-130"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-131"), text: "Brot", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-132"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-133"), text: "in der Bäckerei", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-134"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I buy bread at the bakery.",
                clozeParts: ["Ich kaufe Brot in der ", "."],
                clozeAnswers: ["Bäckerei"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-018"),
                wordType: "noun",
                german: "Supermarkt",
                article: "der",
                plural: "Supermärkte",
                english: "supermarket",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-135"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-136"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-137"), text: "gehe", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-138"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-139"), text: "in den Supermarkt", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-140"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am going to the supermarket.",
                clozeParts: ["Ich gehe in den ", "."],
                clozeAnswers: ["Supermarkt"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-019"),
                wordType: "noun",
                german: "Markt",
                article: "der",
                plural: "Märkte",
                english: "market",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-141"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-142"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-143"), text: "kaufe", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-144"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-145"), text: "Obst", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-146"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-147"), text: "auf dem Markt", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-148"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I buy fruit at the market.",
                clozeParts: ["Ich kaufe Obst auf dem ", "."],
                clozeAnswers: ["Markt"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-020"),
                wordType: "noun",
                german: "Gast",
                article: "der",
                plural: "Gäste",
                english: "guest",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-149"), text: "Im Restaurant", case: "dativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-150"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-151"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-152"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-153"), text: "viele Gäste", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-154"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There are many guests in the restaurant.",
                clozeParts: ["Im Restaurant sind viele ", "."],
                clozeAnswers: ["Gäste"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-021"),
                wordType: "noun",
                german: "Kellner/Kellnerin",
                article: "der/die",
                plural: "Kellner/Kellnerinnen",
                english: "waiter/waitress",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-155"), text: "Die Kellnerin", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-156"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-157"), text: "bringt", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-158"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-159"), text: "die Speisekarte", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-160"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The waitress brings the menu.",
                clozeParts: ["Die ", " bringt die Speisekarte."],
                clozeAnswers: ["Kellnerin"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-022"),
                wordType: "noun",
                german: "Speisekarte",
                article: "die",
                plural: "Speisekarten",
                english: "menu",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-161"), text: "Kann", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-162"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-163"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-164"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-165"), text: "die Speisekarte", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-166"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-167"), text: "haben", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-168"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can I have the menu?",
                clozeParts: ["Kann ich die ", " haben?"],
                clozeAnswers: ["Speisekarte"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-023"),
                wordType: "noun",
                german: "Rechnung",
                article: "die",
                plural: "Rechnungen",
                english: "bill / check",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-169"), text: "Kann", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-170"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-171"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-172"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-173"), text: "die Rechnung", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-174"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-175"), text: "haben", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-176"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can I have the bill?",
                clozeParts: ["Kann ich die ", " haben?"],
                clozeAnswers: ["Rechnung"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-024"),
                wordType: "noun",
                german: "Platz",
                article: "der",
                plural: "Plätze",
                english: "seat / place",
                exampleGerman: [
                    {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-177"), text: "Ist", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-178"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-179"), text: "der Platz", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-180"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-181"), text: "frei", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-182"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Is the seat free?",
                clozeParts: ["Ist der ", " frei?"],
                clozeAnswers: ["Platz"]
            } as Noun,
            {id: createWordId("essen-trinken-mahlzeitenlokale-025"),
                wordType: "verb",
                german: "reservieren",
                english: "to reserve / to book", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "reserviert",
                presentConjugation: {
    id: createWordId("essen-und-trinken-mahlzeiten---restaur-183"), 
                    I: "reserviere", 
                    you_informal: "reservierst", 
                    he: "reserviert", 
                    we: "reservieren", 
                    you_pl: "reserviert", 
                    they: "reservieren" 
                },
                imperative: {id: createWordId("essen-und-trinken-mahlzeiten---restaur-184"), you_informal: "Reservier!", you_pl: "Reserviert!" },
                exampleGerman: [
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-185"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-186"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-187"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-188"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-189"), text: "einen Tisch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-190"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-191"), text: "reservieren", case: "verb" } as CaseElement,
                    {id: createWordId("essen-und-trinken-mahlzeiten---restaur-192"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I would like to reserve a table.",
                clozeParts: ["Ich möchte einen Tisch ", "."],
                clozeAnswers: ["reservieren"]
            } as Verb
        ]
    }
});