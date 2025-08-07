// vokabular_einkaufen.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_einkaufen.js

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './src/core/types/vocabulary';
import { createWordId, createVocabulary } from './src/core/types/vocabulary';

export const vokabularEinkaufen: VocabularyStructure = createVocabulary({
    "Einkaufen": {

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
                    { text: "Das Geschäft", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bis 18 Uhr", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "geöffnet", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The shop is open until 6 PM.",
                clozeParts: ["Das ", " ist bis 18 Uhr geöffnet."],
                clozeAnswers: ["Geschäft"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-002"),
                wordType: "noun",
                german: "Supermarkt",
                article: "der",
                plural: "Supermärkte",
                english: "supermarket",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gehe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in den Supermarkt", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am going to the supermarket.",
                clozeParts: ["Ich gehe in den ", "."],
                clozeAnswers: ["Supermarkt"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-003"),
                wordType: "noun",
                german: "Bäckerei",
                article: "die",
                plural: "Bäckereien",
                english: "bakery",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kaufe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Brot", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in der Bäckerei", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I buy bread at the bakery.",
                clozeParts: ["Ich kaufe Brot in der ", "."],
                clozeAnswers: ["Bäckerei"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-004"),
                wordType: "noun",
                german: "Metzgerei",
                article: "die",
                plural: "Metzgereien",
                english: "butcher shop",
                exampleGerman: [
                    { text: "Die Metzgerei", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in der Stadtmitte", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The butcher shop is in the city center.",
                clozeParts: ["Die ", " ist in der Stadtmitte."],
                clozeAnswers: ["Metzgerei"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-005"),
                wordType: "noun",
                german: "Markt",
                article: "der",
                plural: "Märkte",
                english: "market",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kaufe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Obst", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auf dem Markt", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I buy fruit at the market.",
                clozeParts: ["Ich kaufe Obst auf dem ", "."],
                clozeAnswers: ["Markt"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-006"),
                wordType: "noun",
                german: "Kiosk",
                article: "der",
                plural: "Kioske",
                english: "kiosk / newsstand",
                exampleGerman: [
                    { text: "Am Kiosk", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gibt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Zeitungen", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There are newspapers at the newsstand.",
                clozeParts: ["Am ", " gibt es Zeitungen."],
                clozeAnswers: ["Kiosk"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-007"),
                wordType: "noun",
                german: "Apotheke",
                article: "die",
                plural: "Apotheken",
                english: "pharmacy",
                exampleGerman: [
                    { text: "Aspirin", case: "nominativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Das", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bekommen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in der Apotheke", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Aspirin? You can get that at the pharmacy.",
                clozeParts: ["Aspirin? Das bekommen Sie in der ", "."],
                clozeAnswers: ["Apotheke"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-008"),
                wordType: "noun",
                german: "Laden",
                article: "der",
                plural: "Läden",
                english: "shop",
                exampleGerman: [
                    { text: "Der Laden", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "klein", case: "none" } as CaseElement,
                    { text: ",", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "aber gut", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The shop is small, but good.",
                clozeParts: ["Der ", " ist klein, aber gut."],
                clozeAnswers: ["Laden"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-009"),
                wordType: "noun",
                german: "Buchhandlung",
                article: "die",
                plural: "Buchhandlungen",
                english: "bookstore",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kaufe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "das Buch", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in der Buchhandlung", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I buy the book in the bookstore.",
                clozeParts: ["Ich kaufe das Buch in der ", "."],
                clozeAnswers: ["Buchhandlung"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-010"),
                wordType: "noun",
                german: "Imbiss",
                article: "der",
                plural: "Imbisse",
                english: "snack bar",
                exampleGerman: [
                    { text: "Am Bahnhof", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gibt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Imbiss", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There is a snack bar at the train station.",
                clozeParts: ["Am Bahnhof gibt es einen ", "."],
                clozeAnswers: ["Imbiss"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-011"),
                wordType: "noun",
                german: "Café",
                article: "das",
                plural: "Cafés",
                english: "cafe",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "treffen uns", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Café", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are meeting at the cafe.",
                clozeParts: ["Wir treffen uns im ", "."],
                clozeAnswers: ["Café"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-012"),
                wordType: "noun",
                german: "Restaurant",
                article: "das",
                plural: "Restaurants",
                english: "restaurant",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gehen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ins Restaurant", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are going to the restaurant.",
                clozeParts: ["Wir gehen ins ", "."],
                clozeAnswers: ["Restaurant"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-013"),
                wordType: "noun",
                german: "Kaufhaus",
                article: "das",
                plural: "Kaufhäuser",
                english: "department store",
                exampleGerman: [
                    { text: "Das Kaufhaus", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sehr groß", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The department store is very big.",
                clozeParts: ["Das ", " ist sehr groß."],
                clozeAnswers: ["Kaufhaus"]
            } as Noun,
            {
                id: createWordId("einkaufen-geschaefte-014"),
                wordType: "noun",
                german: "Tankstelle",
                article: "die",
                plural: "Tankstellen",
                english: "gas station",
                exampleGerman: [
                    { text: "Die Tankstelle", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "an der Ecke", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The gas station is on the corner.",
                clozeParts: ["Die ", " ist an der Ecke."],
                clozeAnswers: ["Tankstelle"]
            } as Noun
        ],

        // --- UNTER-THEMA: Preise ---
        "Preise": [
            {
                id: createWordId("einkaufen-preise-001"),
                wordType: "noun",
                german: "Preis",
                article: "der",
                plural: "Preise",
                english: "price",
                exampleGerman: [
                    { text: "Was", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kostet", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "das", case: "nominativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "–", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Der Preis", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "günstig", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "What does that cost? – The price is reasonable.",
                clozeParts: ["Was kostet das? – Der ", " ist günstig."],
                clozeAnswers: ["Preis"]
            } as Noun,
            {
                id: createWordId("einkaufen-preise-002"),
                wordType: "verb",
                german: "kosten",
                english: "to cost",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekostet",
                presentConjugation: { ich: "koste", du: "kostest", er: "kostet", wir: "kosten", ihr: "kostet", sie: "kosten" },
                imperative: { du: "Koste!", ihr: "Kostet!" },
                exampleGerman: [
                    { text: "Was", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kostet", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "das", case: "nominativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "What does that cost?",
                clozeParts: ["Was ", " das?"],
                clozeAnswers: ["kostet"]
            } as Verb,
            {
                id: createWordId("einkaufen-preise-003"),
                wordType: "adjective",
                german: "billig",
                english: "cheap / inexpensive",
                exampleGerman: [
                    { text: "Die Brötchen", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "hier", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "billig", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "und gut", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The bread rolls are cheap and good here.",
                clozeParts: ["Die Brötchen sind hier ", " und gut."],
                clozeAnswers: ["billig"]
            } as Adjective,
            {
                id: createWordId("einkaufen-preise-004"),
                wordType: "adjective",
                german: "teuer",
                english: "expensive",
                exampleGerman: [
                    { text: "Die Miete", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "teuer", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The rent is expensive.",
                clozeParts: ["Die ", " ist teuer."],
                clozeAnswers: ["Miete"]
            } as Adjective,
            {
                id: createWordId("einkaufen-preise-005"),
                wordType: "verb",
                german: "bezahlen",
                english: "to pay",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bezahlt",
                presentConjugation: { ich: "bezahle", du: "bezahlst", er: "bezahlt", wir: "bezahlen", ihr: "bezahlt", sie: "bezahlen" },
                imperative: { du: "Bezahl!", ihr: "Bezahlt!" },
                exampleGerman: [
                    { text: "Wo", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "muss", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bezahlen", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Where do I have to pay?",
                clozeParts: ["Wo muss ich ", "?"],
                clozeAnswers: ["bezahlen"]
            } as Verb,
            {
                id: createWordId("einkaufen-preise-006"),
                wordType: "noun",
                german: "Euro",
                article: "der",
                plural: "Euro",
                english: "euro",
                exampleGerman: [
                    { text: "Das", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kostet", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zehn Euro", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "That costs ten euros.",
                clozeParts: ["Das kostet zehn ", "."],
                clozeAnswers: ["Euro"]
            } as Noun,
            {
                id: createWordId("einkaufen-preise-007"),
                wordType: "noun",
                german: "Cent",
                article: "der",
                plural: "Cent",
                english: "cent",
                exampleGerman: [
                    { text: "Die Banane", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kostet", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "50 Cent", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The banana costs 50 cents.",
                clozeParts: ["Die Banane kostet 50 ", "."],
                clozeAnswers: ["Cent"]
            } as Noun,
            {
                id: createWordId("einkaufen-preise-008"),
                wordType: "noun",
                german: "Geld",
                article: "das",
                plural: null,
                english: "money",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kein Geld", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dabei", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I don't have any money with me.",
                clozeParts: ["Ich habe kein ", " dabei."],
                clozeAnswers: ["Geld"]
            } as Noun,
            {
                id: createWordId("einkaufen-preise-009"),
                wordType: "noun",
                german: "Wechselgeld",
                article: "das",
                plural: null,
                english: "change (money)",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bekommen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "2 Euro", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Wechselgeld", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "You get 2 euros change.",
                clozeParts: ["Sie bekommen 2 Euro ", "."],
                clozeAnswers: ["Wechselgeld"]
            } as Noun,
            {
                id: createWordId("einkaufen-preise-010"),
                wordType: "verb",
                german: "kaufen",
                english: "to buy",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekauft",
                presentConjugation: { ich: "kaufe", du: "kaufst", er: "kauft", wir: "kaufen", ihr: "kauft", sie: "kaufen" },
                imperative: { du: "Kauf!", ihr: "Kauft!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kaufe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Brot", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am buying a bread.",
                clozeParts: ["Ich ", " ein Brot."],
                clozeAnswers: ["kaufe"]
            } as Verb,
            {
                id: createWordId("einkaufen-preise-011"),
                wordType: "verb",
                german: "verkaufen",
                english: "to sell",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verkauft",
                presentConjugation: { ich: "verkaufe", du: "verkaufst", er: "verkauft", wir: "verkaufen", ihr: "verkauft", sie: "verkaufen" },
                imperative: { du: "Verkauf!", ihr: "Verkauft!" },
                exampleGerman: [
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "verkauft", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Gemüse", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auf dem Markt", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She sells vegetables at the market.",
                clozeParts: ["Sie ", " Gemüse auf dem Markt."],
                clozeAnswers: ["verkauft"]
            } as Verb,
            {
                id: createWordId("einkaufen-preise-012"),
                wordType: "noun",
                german: "Angebot",
                article: "das",
                plural: "Angebote",
                english: "offer / special",
                exampleGerman: [
                    { text: "Heute", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gibt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Angebot", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Today there is a special offer.",
                clozeParts: ["Heute gibt es ein ", "."],
                clozeAnswers: ["Angebot"]
            } as Noun,
            {
                id: createWordId("einkaufen-preise-013"),
                wordType: "noun",
                german: "Rabatt",
                article: "der",
                plural: "Rabatte",
                english: "discount",
                exampleGerman: [
                    { text: "Gibt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "es", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Rabatt", case: "nominativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Is there a discount?",
                clozeParts: ["Gibt es ", "?"],
                clozeAnswers: ["Rabatt"]
            } as Noun,
            {
                id: createWordId("einkaufen-preise-014"),
                wordType: "noun",
                german: "Rechnung",
                article: "die",
                plural: "Rechnungen",
                english: "bill / invoice",
                exampleGerman: [
                    { text: "Die Rechnung", case: "nominativ" } as CaseElement,
                    { text: ",", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bitte", case: "none" } as CaseElement,
                    { text: "!", case: "none" } as CaseElement
                ],
                exampleEnglish: "The bill, please!",
                clozeParts: ["Die ", ", bitte!"],
                clozeAnswers: ["Rechnung"]
            } as Noun,
            {
                id: createWordId("einkaufen-preise-015"),
                wordType: "noun",
                german: "Kasse",
                article: "die",
                plural: "Kassen",
                english: "cash register",
                exampleGerman: [
                    { text: "Die Kasse", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dort hinten", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The cash register is over there.",
                clozeParts: ["Die ", " ist dort hinten."],
                clozeAnswers: ["Kasse"]
            } as Noun,
            {
                id: createWordId("einkaufen-preise-016"),
                wordType: "noun",
                german: "Kassenzettel",
                article: "der",
                plural: "Kassenzettel",
                english: "receipt",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "den Kassenzettel", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "verloren", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have lost the receipt.",
                clozeParts: ["Ich habe den ", " verloren."],
                clozeAnswers: ["Kassenzettel"]
            } as Noun
        ],

        // --- UNTER-THEMA: Schulsachen ---
        "Schulsachen": [
            {
                id: createWordId("einkaufen-schulsachen-001"),
                wordType: "noun",
                german: "Bleistift",
                article: "der",
                plural: "Bleistifte",
                english: "pencil",
                exampleGerman: [
                    { text: "Hier", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dein Bleistift", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Here is your pencil.",
                clozeParts: ["Hier ist dein ", "."],
                clozeAnswers: ["Bleistift"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-002"),
                wordType: "noun",
                german: "Heft",
                article: "das",
                plural: "Hefte",
                english: "notebook",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein neues Heft", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need a new notebook.",
                clozeParts: ["Ich brauche ein neues ", "."],
                clozeAnswers: ["Heft"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-003"),
                wordType: "noun",
                german: "Buch",
                article: "das",
                plural: "Bücher",
                english: "book",
                exampleGerman: [
                    { text: "Die Bücher", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schon", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Rucksack", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The books are already in the backpack.",
                clozeParts: ["Die ", " sind schon im Rucksack."],
                clozeAnswers: ["Bücher"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-004"),
                wordType: "noun",
                german: "Radiergummi",
                article: "der",
                plural: "Radiergummis",
                english: "eraser",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "meinen Radiergummi", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "vergessen", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have forgotten my eraser.",
                clozeParts: ["Ich habe meinen ", " vergessen."],
                clozeAnswers: ["Radiergummi"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-005"),
                wordType: "noun",
                german: "Lineal",
                article: "das",
                plural: "Lineale",
                english: "ruler",
                exampleGerman: [
                    { text: "Das Lineal", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lang", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The ruler is long.",
                clozeParts: ["Das ", " ist lang."],
                clozeAnswers: ["Lineal"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-006"),
                wordType: "noun",
                german: "Schere",
                article: "die",
                plural: "Scheren",
                english: "scissors",
                exampleGerman: [
                    { text: "Die Schere", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "scharf", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The scissors are sharp.",
                clozeParts: ["Die ", " ist scharf."],
                clozeAnswers: ["Schere"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-007"),
                wordType: "noun",
                german: "Tasche",
                article: "die",
                plural: "Taschen",
                english: "bag",
                exampleGerman: [
                    { text: "Die Tasche", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "steht", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auf dem Boden", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The bag is on the floor.",
                clozeParts: ["Die ", " steht auf dem Boden."],
                clozeAnswers: ["Tasche"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-008"),
                wordType: "noun",
                german: "Rucksack",
                article: "der",
                plural: "Rucksäcke",
                english: "backpack",
                exampleGerman: [
                    { text: "Mein Rucksack", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schwer", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My backpack is heavy.",
                clozeParts: ["Mein ", " ist schwer."],
                clozeAnswers: ["Rucksack"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-009"),
                wordType: "noun",
                german: "Stift",
                article: "der",
                plural: "Stifte",
                english: "pen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schreibe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit dem Stift", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I write with the pen.",
                clozeParts: ["Ich schreibe mit dem ", "."],
                clozeAnswers: ["Stift"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-010"),
                wordType: "noun",
                german: "Füller",
                article: "der",
                plural: "Füller",
                english: "fountain pen",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schreibe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit dem Füller", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I write with the fountain pen.",
                clozeParts: ["Ich schreibe mit dem ", "."],
                clozeAnswers: ["Füller"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-011"),
                wordType: "noun",
                german: "Papier",
                article: "das",
                plural: "Papiere",
                english: "paper",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "brauche", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Papier", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I need paper.",
                clozeParts: ["Ich brauche ", "."],
                clozeAnswers: ["Papier"]
            } as Noun,
            {
                id: createWordId("einkaufen-schulsachen-012"),
                wordType: "noun",
                german: "Mappe",
                article: "die",
                plural: "Mappen",
                english: "folder / portfolio",
                exampleGerman: [
                    { text: "Die Mappe", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "blau", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The folder is blue.",
                clozeParts: ["Die ", " ist blau."],
                clozeAnswers: ["Mappe"]
            } as Noun
        ],

        // --- UNTER-THEMA: Unterhaltungsmedien ---
        "Unterhaltungsmedien": [
            {
                id: createWordId("einkaufen-unterhaltungsmedien-001"),
                wordType: "noun",
                german: "Buch",
                article: "das",
                plural: "Bücher",
                english: "book",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lese", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Buch", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am reading a book.",
                clozeParts: ["Ich lese ein ", "."],
                clozeAnswers: ["Buch"]
            } as Noun,
            {
                id: createWordId("einkaufen-unterhaltungsmedien-002"),
                wordType: "noun",
                german: "Zeitung",
                article: "die",
                plural: "Zeitungen",
                english: "newspaper",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "lese", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Zeitung", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "am Morgen", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I read the newspaper in the morning.",
                clozeParts: ["Ich lese die ", " am Morgen."],
                clozeAnswers: ["Zeitung"]
            } as Noun,
            {
                id: createWordId("einkaufen-unterhaltungsmedien-003"),
                wordType: "noun",
                german: "Zeitschrift",
                article: "die",
                plural: "Zeitschriften",
                english: "magazine",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kaufe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Zeitschrift", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am buying a magazine.",
                clozeParts: ["Ich kaufe eine ", "."],
                clozeAnswers: ["Zeitschrift"]
            } as Noun,
            {
                id: createWordId("einkaufen-unterhaltungsmedien-004"),
                wordType: "noun",
                german: "CD",
                article: "die",
                plural: "CDs",
                english: "CD",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "können", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ihm", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine CD", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schenken", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We can give him a CD.",
                clozeParts: ["Wir können ihm eine ", " schenken."],
                clozeAnswers: ["CD"]
            } as Noun,
            {
                id: createWordId("einkaufen-unterhaltungsmedien-005"),
                wordType: "noun",
                german: "DVD",
                article: "die",
                plural: "DVDs",
                english: "DVD",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine neue DVD", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a new DVD.",
                clozeParts: ["Ich habe eine neue ", "."],
                clozeAnswers: ["DVD"]
            } as Noun,
            {
                id: createWordId("einkaufen-unterhaltungsmedien-006"),
                wordType: "noun",
                german: "Comic",
                article: "der",
                plural: "Comics",
                english: "comic",
                exampleGerman: [
                    { text: "Liest", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gern", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Comics", case: "akkusativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Do you like to read comics?",
                clozeParts: ["Liest du gern ", "?"],
                clozeAnswers: ["Comics"]
            } as Noun,
            {
                id: createWordId("einkaufen-unterhaltungsmedien-007"),
                wordType: "noun",
                german: "Poster",
                article: "das",
                plural: "Poster",
                english: "poster",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Poster", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "von meiner Lieblingsband", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a poster of my favorite band.",
                clozeParts: ["Ich habe ein ", " von meiner Lieblingsband."],
                clozeAnswers: ["Poster"]
            } as Noun,
            {
                id: createWordId("einkaufen-unterhaltungsmedien-008"),
                wordType: "noun",
                german: "Computerspiel",
                article: "das",
                plural: "Computerspiele",
                english: "computer game",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "spiele", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gern", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Computerspiele", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I like to play computer games.",
                clozeParts: ["Ich spiele gern ", "."],
                clozeAnswers: ["Computerspiele"]
            } as Noun,
            {
                id: createWordId("einkaufen-unterhaltungsmedien-009"),
                wordType: "noun",
                german: "Spiel",
                article: "das",
                plural: "Spiele",
                english: "game",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "spielen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Spiel", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are playing a game.",
                clozeParts: ["Wir spielen ein ", "."],
                clozeAnswers: ["Spiel"]
            } as Noun
        ],

        // --- UNTER-THEMA: Spiele ---
        "Spiele": [
            {
                id: createWordId("einkaufen-spiele-001"),
                wordType: "noun",
                german: "Spiel",
                article: "das",
                plural: "Spiele",
                english: "game",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "spielen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ein Spiel", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are playing a game.",
                clozeParts: ["Wir spielen ein ", "."],
                clozeAnswers: ["Spiel"]
            } as Noun,
            {
                id: createWordId("einkaufen-spiele-002"),
                wordType: "noun",
                german: "Ball",
                article: "der",
                plural: "Bälle",
                english: "ball",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "spielen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit dem Ball", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are playing with the ball.",
                clozeParts: ["Wir spielen mit dem ", "."],
                clozeAnswers: ["Ball"]
            } as Noun,
            {
                id: createWordId("einkaufen-spiele-003"),
                wordType: "noun",
                german: "Würfel",
                article: "der",
                plural: "Würfel",
                english: "dice / die",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "einen Würfel", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have a die.",
                clozeParts: ["Ich habe einen ", "."],
                clozeAnswers: ["Würfel"]
            } as Noun,
            {
                id: createWordId("einkaufen-spiele-004"),
                wordType: "verb",
                german: "gewinnen",
                english: "to win",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gewonnen",
                presentConjugation: { ich: "gewinne", du: "gewinnst", er: "gewinnt", wir: "gewinnen", ihr: "gewinnt", sie: "gewinnen" },
                imperative: { du: "Gewinn!", ihr: "Gewinnt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "möchte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gewinnen", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I want to win.",
                clozeParts: ["Ich möchte ", "."],
                clozeAnswers: ["gewinnen"]
            } as Verb,
            {
                id: createWordId("einkaufen-spiele-005"),
                wordType: "verb",
                german: "verlieren",
                english: "to lose",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verloren",
                presentConjugation: { ich: "verliere", du: "verlierst", er: "verliert", wir: "verlieren", ihr: "verliert", sie: "verlieren" },
                imperative: { du: "Verlier!", ihr: "Verliert!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "habe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "verloren", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I have lost.",
                clozeParts: ["Ich habe ", "."],
                clozeAnswers: ["verloren"]
            } as Verb,
            {
                id: createWordId("einkaufen-spiele-006"),
                wordType: "noun",
                german: "Mannschaft",
                article: "die",
                plural: "Mannschaften",
                english: "team",
                exampleGerman: [
                    { text: "Unsere Mannschaft", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "hat", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gewonnen", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Our team has won.",
                clozeParts: ["Unsere ", " hat gewonnen."],
                clozeAnswers: ["Mannschaft"]
            } as Noun,
            {
                id: createWordId("einkaufen-spiele-007"),
                wordType: "noun",
                german: "Spieler",
                article: "der",
                plural: "Spieler",
                english: "player",
                exampleGerman: [
                    { text: "Die Spieler", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auf dem Platz", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The players are on the field.",
                clozeParts: ["Die ", " sind auf dem Platz."],
                clozeAnswers: ["Spieler"]
            } as Noun,
            {
                id: createWordId("einkaufen-spiele-008"),
                wordType: "noun",
                german: "Punkt",
                article: "der",
                plural: "Punkte",
                english: "point",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "haben", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zehn Punkte", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We have ten points.",
                clozeParts: ["Wir haben zehn ", "."],
                clozeAnswers: ["Punkte"]
            } as Noun
        ]
    }
});