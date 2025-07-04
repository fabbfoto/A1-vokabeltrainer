// packages/trainer-themen/vokabular_essen_trinken.ts

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary';
import { createWordId, createVocabulary } from './shared/types/vocabulary';

export const vokabularEssenTrinken: VocabularyStructure = createVocabulary({
    "Essen und Trinken": {
        "Grundnahrungsmittel": [
            {
                id: createWordId("essen-trinken-grundnahrungsmittel-001"),
                wordType: "noun",
                german: "Brot",
                article: "das",
                plural: "Brote",
                english: "bread",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kaufe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "frisches Brot", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I buy fresh bread.",
                clozeParts: ["Ich kaufe frisches ", "."],
                clozeAnswers: ["Brot"]
            } as Noun,
            {
                id: createWordId("essen-trinken-grundnahrungsmittel-002"),
                wordType: "noun",
                german: "Käse",
                article: "der",
                plural: "Käse",
                english: "cheese",
                exampleGerman: [
                    { text: "Der Käse", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schmeckt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gut", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The cheese tastes good.",
                clozeParts: ["Der ", " schmeckt gut."],
                clozeAnswers: ["Käse"]
            } as Noun
        ],
        "Getränke": [
            {
                id: createWordId("essen-trinken-getraenke-001"),
                wordType: "noun",
                german: "Wasser",
                article: "das",
                plural: null,
                english: "water",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "trinke", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Wasser", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I drink water.",
                clozeParts: ["Ich trinke ", "."],
                clozeAnswers: ["Wasser"]
            } as Noun,
            {
                id: createWordId("essen-trinken-getraenke-002"),
                wordType: "verb",
                german: "trinken",
                english: "to drink",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "getrunken",
                presentConjugation: { ich: "trinke", du: "trinkst", er: "trinkt", wir: "trinken", ihr: "trinkt", sie: "trinken" },
                imperative: { du: "Trink!", ihr: "Trinkt!" },
                exampleGerman: [
                    { text: "Was", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "trinkst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "What are you drinking?",
                clozeParts: ["Was ", " du?"],
                clozeAnswers: ["trinkst"]
            } as Verb
        ]
    }
});

// ... existing code ...