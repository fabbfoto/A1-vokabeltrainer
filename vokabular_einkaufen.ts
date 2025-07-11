// packages/trainer-themen/vokabular_einkaufen.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_einkaufen.js

import type {VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary.ts';
import {createWordId, createVocabulary } from './shared/types/vocabulary.ts';

export const vokabularEinkaufen: VocabularyStructure = createVocabulary({"Einkaufen": {

        // --- UNTER-THEMA: Geschäfte ---
        "Geschäfte": [
            {
                id: createWordId("einkaufen-geschaefte-001"),
                wordType: "noun",
                german: "Geschäft",
                article: "das",
                plural: "Geschäfte",
                english: "shop / store",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-001"), text: "Das Geschäft", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-003"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-005"), text: "bis 18 Uhr", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-007"), text: "geöffnet", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-008"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The shop is open until 6 PM.",
                clozeParts: ["Das ", " ist bis 18 Uhr geöffnet."],
                clozeAnswers: ["Geschäft"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-002"),
                wordType: "noun",
                german: "Supermarkt",
                article: "der",
                plural: "Supermärkte",
                english: "supermarket",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-009"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-011"), text: "gehe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-013"), text: "in den Supermarkt", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-014"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am going to the supermarket.",
                clozeParts: ["Ich gehe in den ", "."],
                clozeAnswers: ["Supermarkt"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-003"),
                wordType: "noun",
                german: "Bäckerei",
                article: "die",
                plural: "Bäckereien",
                english: "bakery",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-015"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-017"), text: "kaufe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-019"), text: "Brot", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-021"), text: "in der Bäckerei", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-022"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I buy bread at the bakery.",
                clozeParts: ["Ich kaufe Brot in der ", "."],
                clozeAnswers: ["Bäckerei"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-004"),
                wordType: "noun",
                german: "Metzgerei",
                article: "die",
                plural: "Metzgereien",
                english: "butcher shop",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-023"), text: "Die Metzgerei", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-025"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-027"), text: "in der Stadtmitte", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-028"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The butcher shop is in the city center.",
                clozeParts: ["Die ", " ist in der Stadtmitte."],
                clozeAnswers: ["Metzgerei"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-005"),
                wordType: "noun",
                german: "Markt",
                article: "der",
                plural: "Märkte",
                english: "market",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-029"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-031"), text: "kaufe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-033"), text: "Obst", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-035"), text: "auf dem Markt", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-036"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I buy fruit at the market.",
                clozeParts: ["Ich kaufe Obst auf dem ", "."],
                clozeAnswers: ["Markt"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-006"),
                wordType: "noun",
                german: "Kiosk",
                article: "der",
                plural: "Kioske",
                english: "kiosk / newsstand",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-037"), text: "Am Kiosk", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-039"), text: "gibt", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-041"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-043"), text: "Zeitungen", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-044"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There are newspapers at the newsstand.",
                clozeParts: ["Am ", " gibt es Zeitungen."],
                clozeAnswers: ["Kiosk"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-007"),
                wordType: "noun",
                german: "Apotheke",
                article: "die",
                plural: "Apotheken",
                english: "pharmacy",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-045"), text: "Aspirin", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-046"), text: "?", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-047"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-048"), text: "Das", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-049"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-050"), text: "bekommen", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-051"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-052"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-053"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-054"), text: "in der Apotheke", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-055"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Aspirin? You can get that at the pharmacy.",
                clozeParts: ["Aspirin? Das bekommen Sie in der ", "."],
                clozeAnswers: ["Apotheke"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-008"),
                wordType: "noun",
                german: "Laden",
                article: "der",
                plural: "Läden",
                english: "shop",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-056"), text: "Der Laden", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-057"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-058"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-059"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-060"), text: "klein", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-061"), text: ",", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-063"), text: "aber gut", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-064"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The shop is small, but good.",
                clozeParts: ["Der ", " ist klein, aber gut."],
                clozeAnswers: ["Laden"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-009"),
                wordType: "noun",
                german: "Buchhandlung",
                article: "die",
                plural: "Buchhandlungen",
                english: "bookstore",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-065"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-067"), text: "kaufe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-068"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-069"), text: "das Buch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-071"), text: "in der Buchhandlung", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-072"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I buy the book in the bookstore.",
                clozeParts: ["Ich kaufe das Buch in der ", "."],
                clozeAnswers: ["Buchhandlung"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-010"),
                wordType: "noun",
                german: "Imbiss",
                article: "der",
                plural: "Imbisse",
                english: "snack bar",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-073"), text: "Am Bahnhof", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-074"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-075"), text: "gibt", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-077"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-078"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-079"), text: "einen Imbiss", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-080"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There is a snack bar at the train station.",
                clozeParts: ["Am Bahnhof gibt es einen ", "."],
                clozeAnswers: ["Imbiss"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-011"),
                wordType: "noun",
                german: "Café",
                article: "das",
                plural: "Cafés",
                english: "cafe",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-081"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-082"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-083"), text: "treffen uns", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-084"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-085"), text: "im Café", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-086"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are meeting at the cafe.",
                clozeParts: ["Wir treffen uns im ", "."],
                clozeAnswers: ["Café"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-012"),
                wordType: "noun",
                german: "Restaurant",
                article: "das",
                plural: "Restaurants",
                english: "restaurant",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-087"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-088"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-089"), text: "gehen", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-090"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-091"), text: "ins Restaurant", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-092"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are going to the restaurant.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Restaurant"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-013"),
                wordType: "noun",
                german: "Kaufhaus",
                article: "das",
                plural: "Kaufhäuser",
                english: "department store",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-093"), text: "Das Kaufhaus", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-094"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-095"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-096"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-097"), text: "sehr groß", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-098"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The department store is very big.",
                clozeParts: ["Das ", " ist sehr groß."],
                clozeAnswers: ["Kaufhaus"]
            } as Noun,
            {id: createWordId("einkaufen-geschaefte-014"),
                wordType: "noun",
                german: "Tankstelle",
                article: "die",
                plural: "Tankstellen",
                english: "gas station",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-gesch-fte-099"), text: "Die Tankstelle", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-100"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-101"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-102"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-103"), text: "an der Ecke", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-gesch-fte-104"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The gas station is on the corner.",
                clozeParts: ["Die ", " ist an der Ecke."],
                clozeAnswers: ["Tankstelle"]
            } as Noun
        ],

        // --- UNTER-THEMA: Preise ---
        "Preise": [
            {id: createWordId("einkaufen-preise-001"),
                wordType: "noun",
                german: "Preis",
                article: "der",
                plural: "Preise",
                english: "price",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-001"), text: "Was", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-003"), text: "kostet", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-005"), text: "das", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-006"), text: "?", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-007"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-008"), text: "–", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-009"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-010"), text: "Der Preis", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-011"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-012"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-013"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-014"), text: "günstig", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-015"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "What does that cost? – The price is reasonable.",
                clozeParts: ["Was kostet das? – Der ", " ist günstig."],
                clozeAnswers: ["Preis"]
            } as Noun,
            {id: createWordId("einkaufen-preise-002"),
                wordType: "verb",
                german: "kosten",
                english: "to cost", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekostet",
                presentConjugation: {
    id: createWordId("einkaufen-preise-016"), I: "koste", you_informal: "kostest", he: "kostet", we: "kosten", you_pl: "kostet", they: "kosten" },
                imperative: {id: createWordId("einkaufen-preise-017"), you_informal: "Koste!", you_pl: "Kostet!" },
                exampleGerman: [
                    {id: createWordId("einkaufen-preise-018"), text: "Was", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-019"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-020"), text: "kostet", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-021"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-022"), text: "das", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-023"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "What does that cost?",
                clozeParts: ["Was ", " das?"],
                clozeAnswers: ["kostet"]
            } as Verb,
            {id: createWordId("einkaufen-preise-003"),
                wordType: "adjective",
                german: "billig",
                english: "cheap / inexpensive",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-024"), text: "Die Brötchen", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-025"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-026"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-027"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-028"), text: "hier", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-029"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-030"), text: "billig", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-031"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-032"), text: "und gut", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-033"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The bread rolls are cheap and good here.",
                clozeParts: ["Die Brötchen sind hier ", " und gut."],
                clozeAnswers: ["billig"]
            } as Adjective,
            {id: createWordId("einkaufen-preise-004"),
                wordType: "adjective",
                german: "teuer",
                english: "expensive",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-034"), text: "Die Miete", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-035"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-036"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-037"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-038"), text: "teuer", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-039"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The rent is expensive.",
                clozeParts: ["Die ", " ist teuer."],
                clozeAnswers: ["Miete"]
            } as Adjective,
            {id: createWordId("einkaufen-preise-005"),
                wordType: "verb",
                german: "bezahlen",
                english: "to pay", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bezahlt",
                presentConjugation: {
    id: createWordId("einkaufen-preise-040"), I: "bezahle", you_informal: "bezahlst", he: "bezahlt", we: "bezahlen", you_pl: "bezahlt", they: "bezahlen" },
                imperative: {id: createWordId("einkaufen-preise-041"), you_informal: "Bezahl!", you_pl: "Bezahlt!" },
                exampleGerman: [
                    {id: createWordId("einkaufen-preise-042"), text: "Wo", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-043"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-044"), text: "muss", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-045"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-046"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-047"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-048"), text: "bezahlen", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-049"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Where do I have to pay?",
                clozeParts: ["Wo muss ich ", "?"],
                clozeAnswers: ["bezahlen"]
            } as Verb,
            {id: createWordId("einkaufen-preise-006"),
                wordType: "noun",
                german: "Euro",
                article: "der",
                plural: "Euro",
                english: "euro",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-050"), text: "Das", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-051"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-052"), text: "kostet", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-053"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-054"), text: "zehn Euro", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-055"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "That costs ten euros.",
                clozeParts: ["Das kostet zehn ", "."],
                clozeAnswers: ["Euro"]
            } as Noun,
            {id: createWordId("einkaufen-preise-007"),
                wordType: "noun",
                german: "Cent",
                article: "der",
                plural: "Cent",
                english: "cent",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-056"), text: "Die Banane", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-057"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-058"), text: "kostet", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-059"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-060"), text: "50 Cent", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-061"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The banana costs 50 cents.",
                clozeParts: ["Die Banane kostet 50 ", "."],
                clozeAnswers: ["Cent"]
            } as Noun,
            {id: createWordId("einkaufen-preise-008"),
                wordType: "noun",
                german: "Geld",
                article: "das",
                plural: null,
                english: "money",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-062"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-063"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-064"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-065"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-066"), text: "kein Geld", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-067"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-068"), text: "dabei", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-069"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I don't have any money with me.",
                clozeParts: ["Ich habe kein ", " dabei."],
                clozeAnswers: ["Geld"]
            } as Noun,
            {id: createWordId("einkaufen-preise-009"),
                wordType: "noun",
                german: "Wechselgeld",
                article: "das",
                plural: null,
                english: "change (money)",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-070"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-071"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-072"), text: "bekommen", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-073"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-074"), text: "2 Euro", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-075"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-076"), text: "Wechselgeld", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-077"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "You get 2 euros change.",
                clozeParts: ["Sie bekommen 2 Euro ", "."],
                clozeAnswers: ["Wechselgeld"]
            } as Noun,
            {id: createWordId("einkaufen-preise-010"),
                wordType: "verb",
                german: "kaufen",
                english: "to buy", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekauft",
                presentConjugation: {
    id: createWordId("einkaufen-preise-078"), I: "kaufe", you_informal: "kaufst", he: "kauft", we: "kaufen", you_pl: "kauft", they: "kaufen" },
                imperative: {id: createWordId("einkaufen-preise-079"), you_informal: "Kauf!", you_pl: "Kauft!" },
                exampleGerman: [
                    {id: createWordId("einkaufen-preise-080"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-081"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-082"), text: "kaufe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-083"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-084"), text: "ein Brot", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-085"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am buying a bread.",
                clozeParts: ["Ich ", " ein Brot."],
                clozeAnswers: ["kaufe"]
            } as Verb,
            {id: createWordId("einkaufen-preise-011"),
                wordType: "verb",
                german: "verkaufen",
                english: "to sell", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verkauft",
                presentConjugation: {
    id: createWordId("einkaufen-preise-086"), I: "verkaufe", you_informal: "verkaufst", he: "verkauft", we: "verkaufen", you_pl: "verkauft", they: "verkaufen" },
                imperative: {id: createWordId("einkaufen-preise-087"), you_informal: "Verkauf!", you_pl: "Verkauft!" },
                exampleGerman: [
                    {id: createWordId("einkaufen-preise-088"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-089"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-090"), text: "verkauft", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-091"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-092"), text: "Gemüse", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-093"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-094"), text: "auf dem Markt", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-095"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She sells vegetables at the market.",
                clozeParts: ["Sie ", " Gemüse auf dem Markt."],
                clozeAnswers: ["verkauft"]
            } as Verb,
            {id: createWordId("einkaufen-preise-012"),
                wordType: "noun",
                german: "Angebot",
                article: "das",
                plural: "Angebote",
                english: "offer / special",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-096"), text: "Heute", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-097"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-098"), text: "gibt", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-099"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-100"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-101"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-102"), text: "ein Angebot", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-103"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Today there is a special offer.",
                clozeParts: ["Heute gibt es ein ", "."],
                clozeAnswers: ["Angebot"]
            } as Noun,
            {id: createWordId("einkaufen-preise-013"),
                wordType: "noun",
                german: "Rabatt",
                article: "der",
                plural: "Rabatte",
                english: "discount",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-104"), text: "Gibt", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-105"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-106"), text: "es", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-107"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-108"), text: "Rabatt", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-109"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Is there a discount?",
                clozeParts: ["Gibt es ", "?"],
                clozeAnswers: ["Rabatt"]
            } as Noun,
            {id: createWordId("einkaufen-preise-014"),
                wordType: "noun",
                german: "Rechnung",
                article: "die",
                plural: "Rechnungen",
                english: "bill / invoice",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-110"), text: "Die Rechnung", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-111"), text: ",", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-112"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-113"), text: "bitte", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-114"), text: "!", case: "none" } as CaseElement
                ],
                exampleEnglish: "The bill, please!",
                clozeParts: ["Die ", ", bitte!"],
                clozeAnswers: ["Rechnung"]
            } as Noun,
            {id: createWordId("einkaufen-preise-015"),
                wordType: "noun",
                german: "Kasse",
                article: "die",
                plural: "Kassen",
                english: "cash register",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-115"), text: "Die Kasse", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-116"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-117"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-118"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-119"), text: "dort hinten", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-120"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The cash register is over there.",
                clozeParts: ["Die ", " ist dort hinten."],
                clozeAnswers: ["Kasse"]
            } as Noun,
            {id: createWordId("einkaufen-preise-016"),
                wordType: "noun",
                german: "Kassenzettel",
                article: "der",
                plural: "Kassenzettel",
                english: "receipt",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-preise-121"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-122"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-123"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-124"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-125"), text: "den Kassenzettel", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-preise-126"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-preise-127"), text: "verloren", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-preise-128"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have lost the receipt.",
                clozeParts: ["Ich habe den ", " verloren."],
                clozeAnswers: ["Kassenzettel"]
            } as Noun
        ],

        // --- UNTER-THEMA: Schulsachen ---
        "Schulsachen": [
            {id: createWordId("einkaufen-schulsachen-001"),
                wordType: "noun",
                german: "Bleistift",
                article: "der",
                plural: "Bleistifte",
                english: "pencil",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-001"), text: "Hier", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-003"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-005"), text: "dein Bleistift", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Here is your pencil.",
                clozeParts: ["Hier ist dein ", "."],
                clozeAnswers: ["Bleistift"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-002"),
                wordType: "noun",
                german: "Heft",
                article: "das",
                plural: "Hefte",
                english: "notebook",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-007"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-009"), text: "brauche", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-011"), text: "ein neues Heft", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a new notebook.",
                clozeParts: ["Ich brauche ein neues ", "."],
                clozeAnswers: ["Heft"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-003"),
                wordType: "noun",
                german: "Buch",
                article: "das",
                plural: "Bücher",
                english: "book",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-013"), text: "Die Bücher", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-015"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-017"), text: "schon", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-019"), text: "im Rucksack", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-020"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The books are already in the backpack.",
                clozeParts: ["Die ", " sind schon im Rucksack."],
                clozeAnswers: ["Bücher"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-004"),
                wordType: "noun",
                german: "Radiergummi",
                article: "der",
                plural: "Radiergummis",
                english: "eraser",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-021"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-023"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-025"), text: "meinen Radiergummi", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-027"), text: "vergessen", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-028"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have forgotten my eraser.",
                clozeParts: ["Ich habe meinen ", " vergessen."],
                clozeAnswers: ["Radiergummi"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-005"),
                wordType: "noun",
                german: "Lineal",
                article: "das",
                plural: "Lineale",
                english: "ruler",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-029"), text: "Das Lineal", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-031"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-033"), text: "lang", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-034"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The ruler is long.",
                clozeParts: ["Das ", " ist lang."],
                clozeAnswers: ["Lineal"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-006"),
                wordType: "noun",
                german: "Schere",
                article: "die",
                plural: "Scheren",
                english: "scissors",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-035"), text: "Die Schere", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-037"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-039"), text: "scharf", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-040"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The scissors are sharp.",
                clozeParts: ["Die ", " ist scharf."],
                clozeAnswers: ["Schere"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-007"),
                wordType: "noun",
                german: "Tasche",
                article: "die",
                plural: "Taschen",
                english: "bag",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-041"), text: "Die Tasche", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-043"), text: "steht", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-045"), text: "auf dem Boden", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-046"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The bag is on the floor.",
                clozeParts: ["Die ", " steht auf dem Boden."],
                clozeAnswers: ["Tasche"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-008"),
                wordType: "noun",
                german: "Rucksack",
                article: "der",
                plural: "Rucksäcke",
                english: "backpack",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-047"), text: "Mein Rucksack", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-049"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-051"), text: "schwer", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-052"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My backpack is heavy.",
                clozeParts: ["Mein ", " ist schwer."],
                clozeAnswers: ["Rucksack"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-009"),
                wordType: "noun",
                german: "Stift",
                article: "der",
                plural: "Stifte",
                english: "pen",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-053"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-055"), text: "schreibe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-057"), text: "mit dem Stift", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-058"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I write with the pen.",
                clozeParts: ["Ich schreibe mit dem ", "."],
                clozeAnswers: ["Stift"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-010"),
                wordType: "noun",
                german: "Füller",
                article: "der",
                plural: "Füller",
                english: "fountain pen",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-059"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-061"), text: "schreibe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-063"), text: "mit dem Füller", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-064"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I write with the fountain pen.",
                clozeParts: ["Ich schreibe mit dem ", "."],
                clozeAnswers: ["Füller"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-011"),
                wordType: "noun",
                german: "Papier",
                article: "das",
                plural: "Papiere",
                english: "paper",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-065"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-067"), text: "brauche", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-068"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-069"), text: "Papier", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-070"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need paper.",
                clozeParts: ["Ich brauche ", "."],
                clozeAnswers: ["Papier"]
            } as Noun,
            {id: createWordId("einkaufen-schulsachen-012"),
                wordType: "noun",
                german: "Mappe",
                article: "die",
                plural: "Mappen",
                english: "folder / portfolio",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-schulsachen-071"), text: "Die Mappe", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-072"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-073"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-074"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-075"), text: "blau", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-schulsachen-076"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The folder is blue.",
                clozeParts: ["Die ", " ist blau."],
                clozeAnswers: ["Mappe"]
            } as Noun
        ],

        // --- UNTER-THEMA: Unterhaltungsmedien ---
        "Unterhaltungsmedien": [
            {id: createWordId("einkaufen-unterhaltungsmedien-001"),
                wordType: "noun",
                german: "Buch",
                article: "das",
                plural: "Bücher",
                english: "book",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-unterhaltungsmedien-001"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-003"), text: "lese", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-005"), text: "ein Buch", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich lese ein ", "."],
                clozeAnswers: ["Buch"]
            } as Noun,
            {id: createWordId("einkaufen-unterhaltungsmedien-002"),
                wordType: "noun",
                german: "Zeitung",
                article: "die",
                plural: "Zeitungen",
                english: "newspaper",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-unterhaltungsmedien-007"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-009"), text: "lese", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-011"), text: "die Zeitung", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-013"), text: "am Morgen", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-014"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I read the newspaper in the morning.",
                clozeParts: ["Ich lese die ", " am Morgen."],
                clozeAnswers: ["Zeitung"]
            } as Noun,
            {id: createWordId("einkaufen-unterhaltungsmedien-003"),
                wordType: "noun",
                german: "Zeitschrift",
                article: "die",
                plural: "Zeitschriften",
                english: "magazine",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-unterhaltungsmedien-015"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-017"), text: "kaufe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-019"), text: "eine Zeitschrift", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-020"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am buying a magazine.",
                clozeParts: ["Ich kaufe eine ", "."],
                clozeAnswers: ["Zeitschrift"]
            } as Noun,
            {id: createWordId("einkaufen-unterhaltungsmedien-004"),
                wordType: "noun",
                german: "CD",
                article: "die",
                plural: "CDs",
                english: "CD",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-unterhaltungsmedien-021"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-023"), text: "können", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-025"), text: "ihm", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-027"), text: "eine CD", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-029"), text: "schenken", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-030"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We can give him a CD.",
                clozeParts: ["Wir können ihm eine ", " schenken."],
                clozeAnswers: ["CD"]
            } as Noun,
            {id: createWordId("einkaufen-unterhaltungsmedien-005"),
                wordType: "noun",
                german: "DVD",
                article: "die",
                plural: "DVDs",
                english: "DVD",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-unterhaltungsmedien-031"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-033"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-035"), text: "eine neue DVD", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-036"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a new DVD.",
                clozeParts: ["Ich habe eine neue ", "."],
                clozeAnswers: ["DVD"]
            } as Noun,
            {id: createWordId("einkaufen-unterhaltungsmedien-006"),
                wordType: "noun",
                german: "Comic",
                article: "der",
                plural: "Comics",
                english: "comic",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-unterhaltungsmedien-037"), text: "Liest", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-039"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-041"), text: "gern", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-043"), text: "Comics", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-044"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Do you like to read comics?",
                clozeParts: ["Liest du gern ", "?"],
                clozeAnswers: ["Comics"]
            } as Noun,
            {id: createWordId("einkaufen-unterhaltungsmedien-007"),
                wordType: "noun",
                german: "Poster",
                article: "das",
                plural: "Poster",
                english: "poster",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-unterhaltungsmedien-045"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-047"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-049"), text: "ein Poster", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-051"), text: "von meiner Lieblingsband", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-052"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a poster of my favorite band.",
                clozeParts: ["Ich habe ein ", " von meiner Lieblingsband."],
                clozeAnswers: ["Poster"]
            } as Noun,
            {id: createWordId("einkaufen-unterhaltungsmedien-008"),
                wordType: "noun",
                german: "Computerspiel",
                article: "das",
                plural: "Computerspiele",
                english: "computer game",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-unterhaltungsmedien-053"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-055"), text: "spiele", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-057"), text: "gern", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-059"), text: "Computerspiele", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-060"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I like to play computer games.",
                clozeParts: ["Ich spiele gern ", "."],
                clozeAnswers: ["Computerspiele"]
            } as Noun,
            {id: createWordId("einkaufen-unterhaltungsmedien-009"),
                wordType: "noun",
                german: "Spiel",
                article: "das",
                plural: "Spiele",
                english: "game",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-unterhaltungsmedien-061"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-062"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-063"), text: "spielen", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-065"), text: "ein Spiel", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-unterhaltungsmedien-066"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are playing a game.",
                clozeParts: ["Wir spielen ein ", "."],
                clozeAnswers: ["Spiel"]
            } as Noun
        ],

        // --- UNTER-THEMA: Spiele ---
        "Spiele": [
            {id: createWordId("einkaufen-spiele-001"),
                wordType: "noun",
                german: "Spiel",
                article: "das",
                plural: "Spiele",
                english: "game",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-spiele-001"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-003"), text: "spielen", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-005"), text: "ein Spiel", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are playing a game.",
                clozeParts: ["Wir spielen ein ", "."],
                clozeAnswers: ["Spiel"]
            } as Noun,
            {id: createWordId("einkaufen-spiele-002"),
                wordType: "noun",
                german: "Ball",
                article: "der",
                plural: "Bälle",
                english: "ball",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-spiele-007"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-008"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-009"), text: "spielen", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-011"), text: "mit dem Ball", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are playing with the ball.",
                clozeParts: ["Wir spielen mit dem ", "."],
                clozeAnswers: ["Ball"]
            } as Noun,
            {id: createWordId("einkaufen-spiele-003"),
                wordType: "noun",
                german: "Würfel",
                article: "der",
                plural: "Würfel",
                english: "dice / die",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-spiele-013"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-015"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-017"), text: "einen Würfel", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a die.",
                clozeParts: ["Ich habe einen ", "."],
                clozeAnswers: ["Würfel"]
            } as Noun,
            {id: createWordId("einkaufen-spiele-004"),
                wordType: "verb",
                german: "gewinnen",
                english: "to win", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gewonnen",
                presentConjugation: {
    id: createWordId("einkaufen-spiele-019"), I: "gewinne", you_informal: "gewinnst", he: "gewinnt", we: "gewinnen", you_pl: "gewinnt", they: "gewinnen" },
                imperative: {id: createWordId("einkaufen-spiele-020"), you_informal: "Gewinn!", you_pl: "Gewinnt!" },
                exampleGerman: [
                    {id: createWordId("einkaufen-spiele-021"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-023"), text: "möchte", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-025"), text: "gewinnen", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-026"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I want to win.",
                clozeParts: ["Ich möchte ", "."],
                clozeAnswers: ["gewinnen"]
            } as Verb,
            {id: createWordId("einkaufen-spiele-005"),
                wordType: "verb",
                german: "verlieren",
                english: "to lose", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verloren",
                presentConjugation: {
    id: createWordId("einkaufen-spiele-027"), I: "verliere", you_informal: "verlierst", he: "verliert", we: "verlieren", you_pl: "verliert", they: "verlieren" },
                imperative: {id: createWordId("einkaufen-spiele-028"), you_informal: "Verlier!", you_pl: "Verliert!" },
                exampleGerman: [
                    {id: createWordId("einkaufen-spiele-029"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-031"), text: "habe", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-033"), text: "verloren", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-034"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have lost.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["verloren"]
            } as Verb,
            {id: createWordId("einkaufen-spiele-006"),
                wordType: "noun",
                german: "Mannschaft",
                article: "die",
                plural: "Mannschaften",
                english: "team",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-spiele-035"), text: "Unsere Mannschaft", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-037"), text: "hat", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-039"), text: "gewonnen", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-040"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Our team has won.",
                clozeParts: ["Unsere ", " hat gewonnen."],
                clozeAnswers: ["Mannschaft"]
            } as Noun,
            {id: createWordId("einkaufen-spiele-007"),
                wordType: "noun",
                german: "Spieler/Spielerin",
                article: "der/die",
                plural: "Spieler/Spielerinnen",
                english: "player (male/female)",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-spiele-041"), text: "Die Spieler", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-043"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-045"), text: "auf dem Platz", case: "dativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-046"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The players are on the field.",
                clozeParts: ["Die ", " sind auf dem Platz."],
                clozeAnswers: ["Spieler"]
            } as Noun,
            {id: createWordId("einkaufen-spiele-008"),
                wordType: "noun",
                german: "Punkt",
                article: "der",
                plural: "Punkte",
                english: "point",
                exampleGerman: [
                    {
    id: createWordId("einkaufen-spiele-047"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-049"), text: "haben", case: "verb" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-051"), text: "zehn Punkte", case: "akkusativ" } as CaseElement,
                    {id: createWordId("einkaufen-spiele-052"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have ten points.",
                clozeParts: ["Wir haben zehn ", "."],
                clozeAnswers: ["Punkte"]
            } as Noun
        ]
    }
});