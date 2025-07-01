// vokabular_person.ts - VOLLSTÄNDIGE TypeScript Migration aller 65+ Vokabeln
import type { VocabularyStructure, WordId, CaseElement } from './shared/types/vocabulary.js';
import { createWordId } from './shared/types/vocabulary.js';

export const vokabularPerson: VocabularyStructure = {
    "Person": {
        // --- UNTERTHEMA 1: Name (3 Vokabeln) ---
        "Name": [
            {
                id: createWordId("person-name-001"),
                wordType: "noun",
                article: "der",
                plural: "Namen",
                german: "Name",
                english: "name",
                exampleGerman: [
                    { text: "Wie", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dein Name", case: "nominativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "What is your name?",
                clozeParts: ["Wie ist dein ", "?"],
                clozeAnswers: ["Name"]
            },
            {
                id: createWordId("person-name-002"),
                wordType: "noun",
                article: "der",
                plural: "Familiennamen",
                german: "Familienname",
                english: "family name / surname",
                exampleGerman: [
                    { text: "M