// vokabular_a2_07_arbeit_beruf.ts
// Thema 7: Arbeit und Beruf (40 Wörter)
// Kontext: Eine Jobmesse - verschiedene Berufe stellen sich vor und Bewerber suchen Arbeit

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_07_arbeit_beruf: VocabularyStructure = createVocabulary({
    "Arbeit und Beruf": {
        
        // --- UNTERKAPITEL: Berufe (16 Wörter) ---
        "Berufe": [
            {
                id: createWordId("a2-07-beruf-001"),
                wordType: "noun",
                german: "Beruf",
                article: "der",
                plural: "Berufe",
                english: "profession / job",
                exampleGerman: [
                    { text: "Welchen Beruf", case: "akkusativ" },
                    { text: " möchten", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " erlernen", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Which profession would you like to learn?",
                clozeParts: ["Welchen ", " möchten Sie erlernen?"],
                clozeAnswers: ["Beruf"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-002"),
                wordType: "noun",
                german: "Arbeiter",
                article: "der",
                plural: "Arbeiter",
                english: "worker",
                exampleGerman: [
                    { text: "Die Arbeiter", case: "nominativ" },
                    { text: " in der Fabrik", case: "dativ" },
                    { text: " beginnen", case: "verb" },
                    { text: " um 6 Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The workers in the factory start at 6 o'clock.",
                clozeParts: ["Die ", " in der Fabrik beginnen um 6 Uhr."],
                clozeAnswers: ["Arbeiter"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-003"),
                wordType: "noun",
                german: "Angestellte",
                article: "der/die",
                plural: "Angestellten",
                english: "employee",
                exampleGerman: [
                    { text: "Die Angestellten", case: "nominativ" },
                    { text: " bekommen", case: "verb" },
                    { text: " 30 Tage Urlaub", case: "akkusativ" },
                    { text: " im Jahr", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The employees get 30 days of vacation per year.",
                clozeParts: ["Die ", " bekommen 30 Tage Urlaub im Jahr."],
                clozeAnswers: ["Angestellten"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-004"),
                wordType: "noun",
                german: "Chef",
                article: "der",
                plural: "Chefs",
                english: "boss",
                exampleGerman: [
                    { text: "Der Chef", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " auf einer Geschäftsreise", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The boss is on a business trip today.",
                clozeParts: ["Der ", " ist heute auf einer Geschäftsreise."],
                clozeAnswers: ["Chef"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-005"),
                wordType: "noun",
                german: "Kollege",
                article: "der",
                plural: "Kollegen",
                english: "colleague",
                exampleGerman: [
                    { text: "Meine Kollegen", case: "nominativ" },
                    { text: " helfen", case: "verb" },
                    { text: " mir", case: "dativ" },
                    { text: " bei schwierigen Aufgaben", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My colleagues help me with difficult tasks.",
                clozeParts: ["Meine ", " helfen mir bei schwierigen Aufgaben."],
                clozeAnswers: ["Kollegen"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-006"),
                wordType: "noun",
                german: "Handwerker",
                article: "der",
                plural: "Handwerker",
                english: "craftsman",
                exampleGerman: [
                    { text: "Der Handwerker", case: "nominativ" },
                    { text: " repariert", case: "verb" },
                    { text: " die Heizung", case: "akkusativ" },
                    { text: " in unserer Wohnung", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The craftsman repairs the heating in our apartment.",
                clozeParts: ["Der ", " repariert die Heizung in unserer Wohnung."],
                clozeAnswers: ["Handwerker"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-007"),
                wordType: "noun",
                german: "Kaufmann",
                article: "der",
                plural: "Kaufleute",
                english: "merchant / businessman",
                exampleGerman: [
                    { text: "Die Kaufleute", case: "nominativ" },
                    { text: " auf der Messe", case: "dativ" },
                    { text: " präsentieren", case: "verb" },
                    { text: " ihre Produkte", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The merchants at the fair present their products.",
                clozeParts: ["Die Kauf", " auf der Messe präsentieren ihre Produkte."],
                clozeAnswers: ["leute"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-008"),
                wordType: "noun",
                german: "Verkäufer",
                article: "der",
                plural: "Verkäufer",
                english: "salesperson",
                exampleGerman: [
                    { text: "Die Verkäuferin", case: "nominativ" },
                    { text: " berät", case: "verb" },
                    { text: " die Kunden", case: "akkusativ" },
                    { text: " sehr freundlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The saleswoman advises customers very kindly.",
                clozeParts: ["Die ", "in berät die Kunden sehr freundlich."],
                clozeAnswers: ["Verkäufer"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-009"),
                wordType: "noun",
                german: "Mechaniker",
                article: "der",
                plural: "Mechaniker",
                english: "mechanic",
                exampleGerman: [
                    { text: "Der Kfz-Mechaniker", case: "nominativ" },
                    { text: " sucht", case: "verb" },
                    { text: " nach dem Fehler", case: "dativ" },
                    { text: " im Motor", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The car mechanic is looking for the problem in the engine.",
                clozeParts: ["Der Kfz-", " sucht nach dem Fehler im Motor."],
                clozeAnswers: ["Mechaniker"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-010"),
                wordType: "noun",
                german: "Friseur",
                article: "der",
                plural: "Friseure",
                english: "hairdresser",
                exampleGerman: [
                    { text: "Der Friseur", case: "nominativ" },
                    { text: " schneidet", case: "verb" },
                    { text: " nicht nur Haare", case: "akkusativ" },
                    { text: ", sondern berät auch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The hairdresser not only cuts hair but also gives advice.",
                clozeParts: ["Der ", " schneidet nicht nur Haare, sondern berät auch."],
                clozeAnswers: ["Friseur"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-011"),
                wordType: "noun",
                german: "Koch",
                article: "der",
                plural: "Köche",
                english: "cook / chef",
                exampleGerman: [
                    { text: "Die Köche", case: "nominativ" },
                    { text: " im Restaurant", case: "dativ" },
                    { text: " arbeiten", case: "verb" },
                    { text: " unter großem Stress", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The chefs in the restaurant work under great stress.",
                clozeParts: ["Die ", " im Restaurant arbeiten unter großem Stress."],
                clozeAnswers: ["Köche"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-012"),
                wordType: "noun",
                german: "Kellner",
                article: "der",
                plural: "Kellner",
                english: "waiter",
                exampleGerman: [
                    { text: "Der Kellner", case: "nominativ" },
                    { text: " bringt", case: "verb" },
                    { text: " die Speisekarte", case: "akkusativ" },
                    { text: " an den Tisch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The waiter brings the menu to the table.",
                clozeParts: ["Der ", " bringt die Speisekarte an den Tisch."],
                clozeAnswers: ["Kellner"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-013"),
                wordType: "noun",
                german: "Bäcker",
                article: "der",
                plural: "Bäcker",
                english: "baker",
                exampleGerman: [
                    { text: "Der Bäcker", case: "nominativ" },
                    { text: " steht", case: "verb" },
                    { text: " schon um 3 Uhr morgens", case: "none" },
                    { text: " auf", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The baker gets up at 3 o'clock in the morning.",
                clozeParts: ["Der ", " steht schon um 3 Uhr morgens auf."],
                clozeAnswers: ["Bäcker"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-014"),
                wordType: "noun",
                german: "Krankenschwester",
                article: "die",
                plural: "Krankenschwestern",
                english: "nurse",
                exampleGerman: [
                    { text: "Die Krankenschwester", case: "nominativ" },
                    { text: " arbeitet", case: "verb" },
                    { text: " im Schichtdienst", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The nurse works in shifts.",
                clozeParts: ["Die ", " arbeitet im Schichtdienst."],
                clozeAnswers: ["Krankenschwester"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-015"),
                wordType: "noun",
                german: "Polizist",
                article: "der",
                plural: "Polizisten",
                english: "police officer",
                exampleGerman: [
                    { text: "Die Polizisten", case: "nominativ" },
                    { text: " sorgen", case: "verb" },
                    { text: " für Sicherheit", case: "akkusativ" },
                    { text: " auf der Jobmesse", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The police officers provide security at the job fair.",
                clozeParts: ["Die ", " sorgen für Sicherheit auf der Jobmesse."],
                clozeAnswers: ["Polizisten"]
            } as Noun,
            {
                id: createWordId("a2-07-beruf-016"),
                wordType: "noun",
                german: "Beamte",
                article: "der/die",
                plural: "Beamten",
                english: "civil servant",
                exampleGerman: [
                    { text: "Die Beamten", case: "nominativ" },
                    { text: " haben", case: "verb" },
                    { text: " einen sicheren Arbeitsplatz", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Civil servants have a secure job.",
                clozeParts: ["Die ", " haben einen sicheren Arbeitsplatz."],
                clozeAnswers: ["Beamten"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Arbeitsplatz (14 Wörter) ---
        "Arbeitsplatz": [
            {
                id: createWordId("a2-07-platz-001"),
                wordType: "noun",
                german: "Arbeit",
                article: "die",
                plural: "Arbeiten",
                english: "work / job",
                exampleGerman: [
                    { text: "Die Arbeit", case: "nominativ" },
                    { text: " macht", case: "verb" },
                    { text: " mir", case: "dativ" },
                    { text: " viel Spaß", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The work is a lot of fun for me.",
                clozeParts: ["Die ", " macht mir viel Spaß."],
                clozeAnswers: ["Arbeit"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-002"),
                wordType: "verb",
                german: "arbeiten",
                english: "to work",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gearbeitet",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " arbeite", case: "verb" },
                    { text: " bei einer großen Firma", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I work at a large company.",
                clozeParts: ["Ich ", " bei einer großen Firma."],
                clozeAnswers: ["arbeite"]
            } as Verb,
            {
                id: createWordId("a2-07-platz-003"),
                wordType: "noun",
                german: "Stelle",
                article: "die",
                plural: "Stellen",
                english: "position / job",
                exampleGerman: [
                    { text: "Die freie Stelle", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " schon besetzt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The vacant position is already filled.",
                clozeParts: ["Die freie ", " ist schon besetzt."],
                clozeAnswers: ["Stelle"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-004"),
                wordType: "noun",
                german: "Job",
                article: "der",
                plural: "Jobs",
                english: "job",
                exampleGerman: [
                    { text: "Der Nebenjob", case: "nominativ" },
                    { text: " hilft", case: "verb" },
                    { text: " beim Studium", case: "dativ" },
                    { text: " finanziell", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The part-time job helps financially during studies.",
                clozeParts: ["Der Neben", " hilft beim Studium finanziell."],
                clozeAnswers: ["job"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-005"),
                wordType: "noun",
                german: "Firma",
                article: "die",
                plural: "Firmen",
                english: "company",
                exampleGerman: [
                    { text: "Viele Firmen", case: "nominativ" },
                    { text: " präsentieren sich", case: "verb" },
                    { text: " auf der Jobmesse", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Many companies present themselves at the job fair.",
                clozeParts: ["Viele ", " präsentieren sich auf der Jobmesse."],
                clozeAnswers: ["Firmen"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-006"),
                wordType: "noun",
                german: "Betrieb",
                article: "der",
                plural: "Betriebe",
                english: "business / operation",
                exampleGerman: [
                    { text: "Der Betrieb", case: "nominativ" },
                    { text: " bildet", case: "verb" },
                    { text: " jedes Jahr", case: "none" },
                    { text: " zehn Lehrlinge", case: "akkusativ" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The business trains ten apprentices every year.",
                clozeParts: ["Der ", " bildet jedes Jahr zehn Lehrlinge aus."],
                clozeAnswers: ["Betrieb"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-007"),
                wordType: "noun",
                german: "Büro",
                article: "das",
                plural: "Büros",
                english: "office",
                exampleGerman: [
                    { text: "Im Büro", case: "dativ" },
                    { text: " herrscht", case: "verb" },
                    { text: " eine angenehme Atmosphäre", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There's a pleasant atmosphere in the office.",
                clozeParts: ["Im ", " herrscht eine angenehme Atmosphäre."],
                clozeAnswers: ["Büro"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-008"),
                wordType: "noun",
                german: "Fabrik",
                article: "die",
                plural: "Fabriken",
                english: "factory",
                exampleGerman: [
                    { text: "In der Fabrik", case: "dativ" },
                    { text: " werden", case: "verb" },
                    { text: " Autos", case: "nominativ" },
                    { text: " produziert", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Cars are produced in the factory.",
                clozeParts: ["In der ", " werden Autos produziert."],
                clozeAnswers: ["Fabrik"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-009"),
                wordType: "noun",
                german: "Werkstatt",
                article: "die",
                plural: "Werkstätten",
                english: "workshop",
                exampleGerman: [
                    { text: "Die Werkstatt", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " gut ausgestattet", case: "none" },
                    { text: " mit modernen Geräten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The workshop is well equipped with modern devices.",
                clozeParts: ["Die ", " ist gut ausgestattet mit modernen Geräten."],
                clozeAnswers: ["Werkstatt"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-010"),
                wordType: "noun",
                german: "Geschäft",
                article: "das",
                plural: "Geschäfte",
                english: "business / shop",
                exampleGerman: [
                    { text: "Das Geschäft", case: "nominativ" },
                    { text: " läuft", case: "verb" },
                    { text: " sehr gut", case: "none" },
                    { text: " dieses Jahr", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Business is going very well this year.",
                clozeParts: ["Das ", " läuft sehr gut dieses Jahr."],
                clozeAnswers: ["Geschäft"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-011"),
                wordType: "noun",
                german: "Abteilung",
                article: "die",
                plural: "Abteilungen",
                english: "department",
                exampleGerman: [
                    { text: "In unserer Abteilung", case: "dativ" },
                    { text: " arbeiten", case: "verb" },
                    { text: " 15 Mitarbeiter", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "15 employees work in our department.",
                clozeParts: ["In unserer ", " arbeiten 15 Mitarbeiter."],
                clozeAnswers: ["Abteilung"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-012"),
                wordType: "verb",
                german: "verdienen",
                english: "to earn",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verdient",
                exampleGerman: [
                    { text: "Als Anfänger", case: "none" },
                    { text: " verdient", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " noch nicht viel", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "As a beginner you don't earn much yet.",
                clozeParts: ["Als Anfänger ", " man noch nicht viel."],
                clozeAnswers: ["verdient"]
            } as Verb,
            {
                id: createWordId("a2-07-platz-013"),
                wordType: "noun",
                german: "Gehalt",
                article: "das",
                plural: "Gehälter",
                english: "salary",
                exampleGerman: [
                    { text: "Das Gehalt", case: "nominativ" },
                    { text: " wird", case: "verb" },
                    { text: " am Monatsende", case: "dativ" },
                    { text: " überwiesen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The salary is transferred at the end of the month.",
                clozeParts: ["Das ", " wird am Monatsende überwiesen."],
                clozeAnswers: ["Gehalt"]
            } as Noun,
            {
                id: createWordId("a2-07-platz-014"),
                wordType: "noun",
                german: "Lohn",
                article: "der",
                plural: "Löhne",
                english: "wage",
                exampleGerman: [
                    { text: "Der Stundenlohn", case: "nominativ" },
                    { text: " beträgt", case: "verb" },
                    { text: " 15 Euro", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The hourly wage is 15 euros.",
                clozeParts: ["Der Stunden", " beträgt 15 Euro."],
                clozeAnswers: ["lohn"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Arbeitsbedingungen (10 Wörter) ---
        "Arbeitsbedingungen": [
            {
                id: createWordId("a2-07-bed-001"),
                wordType: "noun",
                german: "Bewerbung",
                article: "die",
                plural: "Bewerbungen",
                english: "application",
                exampleGerman: [
                    { text: "Meine Bewerbung", case: "nominativ" },
                    { text: " habe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " gestern", case: "none" },
                    { text: " abgeschickt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I sent my application yesterday.",
                clozeParts: ["Meine ", " habe ich gestern abgeschickt."],
                clozeAnswers: ["Bewerbung"]
            } as Noun,
            {
                id: createWordId("a2-07-bed-002"),
                wordType: "verb",
                german: "bewerben",
                english: "to apply",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "beworben",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " bewerbe mich", case: "verb" },
                    { text: " um die Stelle", case: "akkusativ" },
                    { text: " als Verkäufer", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm applying for the position as salesperson.",
                clozeParts: ["Ich ", " um die Stelle als Verkäufer."],
                clozeAnswers: ["bewerbe mich"]
            } as Verb,
            {
                id: createWordId("a2-07-bed-003"),
                wordType: "noun",
                german: "Vertrag",
                article: "der",
                plural: "Verträge",
                english: "contract",
                exampleGerman: [
                    { text: "Der Arbeitsvertrag", case: "nominativ" },
                    { text: " gilt", case: "verb" },
                    { text: " für zwei Jahre", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The work contract is valid for two years.",
                clozeParts: ["Der Arbeits", " gilt für zwei Jahre."],
                clozeAnswers: ["vertrag"]
            } as Noun,
            {
                id: createWordId("a2-07-bed-004"),
                wordType: "noun",
                german: "Urlaub",
                article: "der",
                plural: null,
                english: "vacation",
                exampleGerman: [
                    { text: "Im Urlaub", case: "dativ" },
                    { text: " erholen sich", case: "verb" },
                    { text: " die Mitarbeiter", case: "nominativ" },
                    { text: " von der Arbeit", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "During vacation the employees recover from work.",
                clozeParts: ["Im ", " erholen sich die Mitarbeiter von der Arbeit."],
                clozeAnswers: ["Urlaub"]
            } as Noun,
            {
                id: createWordId("a2-07-bed-005"),
                wordType: "adjective",
                german: "arbeitslos",
                english: "unemployed",
                exampleGerman: [
                    { text: "Seit drei Monaten", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " er", case: "nominativ" },
                    { text: " arbeitslos", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He has been unemployed for three months.",
                clozeParts: ["Seit drei Monaten ist er ", "."],
                clozeAnswers: ["arbeitslos"]
            } as Adjective,
            {
                id: createWordId("a2-07-bed-006"),
                wordType: "adjective",
                german: "selbstständig",
                english: "self-employed",
                exampleGerman: [
                    { text: "Als selbstständiger Handwerker", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " flexible Arbeitszeiten", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "As a self-employed craftsman you have flexible working hours.",
                clozeParts: ["Als ", "er Handwerker hat man flexible Arbeitszeiten."],
                clozeAnswers: ["selbstständig"]
            } as Adjective,
            {
                id: createWordId("a2-07-bed-007"),
                wordType: "adjective",
                german: "angestellt",
                english: "employed",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " fest angestellt", case: "none" },
                    { text: " bei der Bank", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She is permanently employed at the bank.",
                clozeParts: ["Sie ist fest ", " bei der Bank."],
                clozeAnswers: ["angestellt"]
            } as Adjective,
            {
                id: createWordId("a2-07-bed-008"),
                wordType: "noun",
                german: "Erfahrung",
                article: "die",
                plural: "Erfahrungen",
                english: "experience",
                exampleGerman: [
                    { text: "Berufserfahrung", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " wichtig", case: "none" },
                    { text: " für diese Stelle", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Professional experience is important for this position.",
                clozeParts: ["Berufs", " ist wichtig für diese Stelle."],
                clozeAnswers: ["erfahrung"]
            } as Noun,
            {
                id: createWordId("a2-07-bed-009"),
                wordType: "noun",
                german: "Karriere",
                article: "die",
                plural: "Karrieren",
                english: "career",
                exampleGerman: [
                    { text: "Eine erfolgreiche Karriere", case: "nominativ" },
                    { text: " erfordert", case: "verb" },
                    { text: " viel Einsatz", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "A successful career requires a lot of commitment.",
                clozeParts: ["Eine erfolgreiche ", " erfordert viel Einsatz."],
                clozeAnswers: ["Karriere"]
            } as Noun,
            {
                id: createWordId("a2-07-bed-010"),
                wordType: "adjective",
                german: "zuständig",
                english: "responsible",
                exampleGerman: [
                    { text: "Wer", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " für Bewerbungen", case: "akkusativ" },
                    { text: " zuständig", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Who is responsible for applications?",
                clozeParts: ["Wer ist für Bewerbungen ", "?"],
                clozeAnswers: ["zuständig"]
            } as Adjective
        ]
    }
});