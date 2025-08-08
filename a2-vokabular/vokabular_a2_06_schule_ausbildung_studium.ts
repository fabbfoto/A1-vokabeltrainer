// vokabular_a2_06_schule_ausbildung_studium.ts
// Thema 6: Schule, Ausbildung und Studium (35 Wörter)
// Kontext: Der erste Tag an einer deutschen Berufsschule - neue Auszubildende lernen sich kennen

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_06_schule_ausbildung_studium: VocabularyStructure = createVocabulary({
    "Schule, Ausbildung und Studium": {
        
        // --- UNTERKAPITEL: Bildungseinrichtungen (9 Wörter) ---
        "Bildungseinrichtungen": [
            {
                id: createWordId("a2-06-bild-001"),
                wordType: "noun",
                german: "Schule",
                article: "die",
                plural: "Schulen",
                english: "school",
                exampleGerman: [
                    { text: "Die Berufsschule", case: "nominativ" },
                    { text: " beginnt", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " für alle neuen Auszubildenden", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The vocational school starts today for all new apprentices.",
                clozeParts: ["Die Berufs", " beginnt heute für alle neuen Auszubildenden."],
                clozeAnswers: ["schule"]
            } as Noun,
            {
                id: createWordId("a2-06-bild-002"),
                wordType: "noun",
                german: "Universität",
                article: "die",
                plural: "Universitäten",
                english: "university",
                exampleGerman: [
                    { text: "Nach der Ausbildung", case: "dativ" },
                    { text: " möchte", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " an der Universität", case: "dativ" },
                    { text: " studieren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After the apprenticeship I want to study at the university.",
                clozeParts: ["Nach der Ausbildung möchte ich an der ", " studieren."],
                clozeAnswers: ["Universität"]
            } as Noun,
            {
                id: createWordId("a2-06-bild-003"),
                wordType: "noun",
                german: "Kindergarten",
                article: "der",
                plural: "Kindergärten",
                english: "kindergarten",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " macht", case: "verb" },
                    { text: " ihre Ausbildung", case: "akkusativ" },
                    { text: " im Kindergarten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She does her training in the kindergarten.",
                clozeParts: ["Sie macht ihre Ausbildung im ", "."],
                clozeAnswers: ["Kindergarten"]
            } as Noun,
            {
                id: createWordId("a2-06-bild-004"),
                wordType: "noun",
                german: "Kurs",
                article: "der",
                plural: "Kurse",
                english: "course",
                exampleGerman: [
                    { text: "Der Computerkurs", case: "nominativ" },
                    { text: " findet", case: "verb" },
                    { text: " zweimal pro Woche", case: "none" },
                    { text: " statt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The computer course takes place twice a week.",
                clozeParts: ["Der Computer", " findet zweimal pro Woche statt."],
                clozeAnswers: ["kurs"]
            } as Noun,
            {
                id: createWordId("a2-06-bild-005"),
                wordType: "noun",
                german: "Workshop",
                article: "der",
                plural: "Workshops",
                english: "workshop",
                exampleGerman: [
                    { text: "Im Workshop", case: "dativ" },
                    { text: " lernen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " praktische Fähigkeiten", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the workshop we learn practical skills.",
                clozeParts: ["Im ", " lernen wir praktische Fähigkeiten."],
                clozeAnswers: ["Workshop"]
            } as Noun,
            {
                id: createWordId("a2-06-bild-006"),
                wordType: "noun",
                german: "Ausbildung",
                article: "die",
                plural: "Ausbildungen",
                english: "training / apprenticeship",
                exampleGerman: [
                    { text: "Die Ausbildung", case: "nominativ" },
                    { text: " zur Krankenschwester", case: "dativ" },
                    { text: " dauert", case: "verb" },
                    { text: " drei Jahre", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The training to become a nurse takes three years.",
                clozeParts: ["Die ", " zur Krankenschwester dauert drei Jahre."],
                clozeAnswers: ["Ausbildung"]
            } as Noun,
            {
                id: createWordId("a2-06-bild-007"),
                wordType: "noun",
                german: "Studium",
                article: "das",
                plural: "Studien",
                english: "studies / degree program",
                exampleGerman: [
                    { text: "Das Studium", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " sehr anspruchsvoll", case: "none" },
                    { text: " aber interessant", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The studies are very demanding but interesting.",
                clozeParts: ["Das ", " ist sehr anspruchsvoll aber interessant."],
                clozeAnswers: ["Studium"]
            } as Noun,
            {
                id: createWordId("a2-06-bild-008"),
                wordType: "noun",
                german: "Praktikum",
                article: "das",
                plural: "Praktika",
                english: "internship",
                exampleGerman: [
                    { text: "Im Sommer", case: "dativ" },
                    { text: " mache", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " ein Praktikum", case: "akkusativ" },
                    { text: " bei einer großen Firma", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In summer I'm doing an internship at a large company.",
                clozeParts: ["Im Sommer mache ich ein ", " bei einer großen Firma."],
                clozeAnswers: ["Praktikum"]
            } as Noun,
            {
                id: createWordId("a2-06-bild-009"),
                wordType: "noun",
                german: "Klasse",
                article: "die",
                plural: "Klassen",
                english: "class",
                exampleGerman: [
                    { text: "Unsere Klasse", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " 24 Schüler", case: "akkusativ" },
                    { text: " aus verschiedenen Betrieben", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Our class has 24 students from different companies.",
                clozeParts: ["Unsere ", " hat 24 Schüler aus verschiedenen Betrieben."],
                clozeAnswers: ["Klasse"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Lernmaterialien (15 Wörter) ---
        "Lernmaterialien": [
            {
                id: createWordId("a2-06-lern-001"),
                wordType: "noun",
                german: "Buch",
                article: "das",
                plural: "Bücher",
                english: "book",
                exampleGerman: [
                    { text: "Das Fachbuch", case: "nominativ" },
                    { text: " für Elektrotechnik", case: "akkusativ" },
                    { text: " kostet", case: "verb" },
                    { text: " 45 Euro", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The textbook for electrical engineering costs 45 euros.",
                clozeParts: ["Das Fach", " für Elektrotechnik kostet 45 Euro."],
                clozeAnswers: ["buch"]
            } as Noun,
            {
                id: createWordId("a2-06-lern-002"),
                wordType: "noun",
                german: "Heft",
                article: "das",
                plural: "Hefte",
                english: "notebook",
                exampleGerman: [
                    { text: "Schreibt", case: "verb" },
                    { text: " die Hausaufgaben", case: "akkusativ" },
                    { text: " bitte", case: "none" },
                    { text: " ins Heft", case: "akkusativ" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Please write the homework in your notebook!",
                clozeParts: ["Schreibt die Hausaufgaben bitte ins ", "!"],
                clozeAnswers: ["Heft"]
            } as Noun,
            {
                id: createWordId("a2-06-lern-003"),
                wordType: "noun",
                german: "Bleistift",
                article: "der",
                plural: "Bleistifte",
                english: "pencil",
                exampleGerman: [
                    { text: "Mit Bleistift", case: "dativ" },
                    { text: " können", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " Fehler leicht korrigieren", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "With a pencil you can easily correct mistakes.",
                clozeParts: ["Mit ", " können Sie Fehler leicht korrigieren."],
                clozeAnswers: ["Bleistift"]
            } as Noun,
            {
                id: createWordId("a2-06-lern-004"),
                wordType: "noun",
                german: "Stift",
                article: "der",
                plural: "Stifte",
                english: "pen",
                exampleGerman: [
                    { text: "Hast", case: "verb" },
                    { text: " du", case: "nominativ" },
                    { text: " einen Stift", case: "akkusativ" },
                    { text: " für mich", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you have a pen for me?",
                clozeParts: ["Hast du einen ", " für mich?"],
                clozeAnswers: ["Stift"]
            } as Noun,
            {
                id: createWordId("a2-06-lern-005"),
                wordType: "noun",
                german: "Blatt",
                article: "das",
                plural: "Blätter",
                english: "sheet / page",
                exampleGerman: [
                    { text: "Nehmen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " ein leeres Blatt", case: "akkusativ" },
                    { text: " für den Test", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Take a blank sheet for the test.",
                clozeParts: ["Nehmen Sie ein leeres ", " für den Test."],
                clozeAnswers: ["Blatt"]
            } as Noun,
            {
                id: createWordId("a2-06-lern-006"),
                wordType: "noun",
                german: "Papier",
                article: "das",
                plural: "Papiere",
                english: "paper",
                exampleGerman: [
                    { text: "Das Papier", case: "nominativ" },
                    { text: " für den Drucker", case: "akkusativ" },
                    { text: " ist", case: "verb" },
                    { text: " alle", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The paper for the printer is finished.",
                clozeParts: ["Das ", " für den Drucker ist alle."],
                clozeAnswers: ["Papier"]
            } as Noun,
            {
                id: createWordId("a2-06-lern-007"),
                wordType: "noun",
                german: "Tafel",
                article: "die",
                plural: "Tafeln",
                english: "blackboard / whiteboard",
                exampleGerman: [
                    { text: "Der Lehrer", case: "nominativ" },
                    { text: " schreibt", case: "verb" },
                    { text: " die Formel", case: "akkusativ" },
                    { text: " an die Tafel", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teacher writes the formula on the board.",
                clozeParts: ["Der Lehrer schreibt die Formel an die ", "."],
                clozeAnswers: ["Tafel"]
            } as Noun,
            {
                id: createWordId("a2-06-lern-008"),
                wordType: "verb",
                german: "schreiben",
                english: "to write",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschrieben",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " schreiben", case: "verb" },
                    { text: " morgen", case: "none" },
                    { text: " einen Test", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We are writing a test tomorrow.",
                clozeParts: ["Wir ", " morgen einen Test."],
                clozeAnswers: ["schreiben"]
            } as Verb,
            {
                id: createWordId("a2-06-lern-009"),
                wordType: "verb",
                german: "lesen",
                english: "to read",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelesen",
                exampleGerman: [
                    { text: "Die Auszubildenden", case: "nominativ" },
                    { text: " müssen", case: "verb" },
                    { text: " viele Fachtexte", case: "akkusativ" },
                    { text: " lesen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The apprentices have to read many technical texts.",
                clozeParts: ["Die Auszubildenden müssen viele Fachtexte ", "."],
                clozeAnswers: ["lesen"]
            } as Verb,
            {
                id: createWordId("a2-06-lern-010"),
                wordType: "verb",
                german: "rechnen",
                english: "to calculate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gerechnet",
                exampleGerman: [
                    { text: "Im Mathematikunterricht", case: "dativ" },
                    { text: " rechnen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " mit großen Zahlen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In math class we calculate with large numbers.",
                clozeParts: ["Im Mathematikunterricht ", " wir mit großen Zahlen."],
                clozeAnswers: ["rechnen"]
            } as Verb,
            {
                id: createWordId("a2-06-lern-011"),
                wordType: "verb",
                german: "zeichnen",
                english: "to draw",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gezeichnet",
                exampleGerman: [
                    { text: "Die technischen Zeichner", case: "nominativ" },
                    { text: " zeichnen", case: "verb" },
                    { text: " Baupläne", case: "akkusativ" },
                    { text: " am Computer", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The technical drafters draw building plans on the computer.",
                clozeParts: ["Die technischen Zeichner ", " Baupläne am Computer."],
                clozeAnswers: ["zeichnen"]
            } as Verb,
            {
                id: createWordId("a2-06-lern-012"),
                wordType: "verb",
                german: "malen",
                english: "to paint",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gemalt",
                exampleGerman: [
                    { text: "Im Kunstunterricht", case: "dativ" },
                    { text: " malen", case: "verb" },
                    { text: " die Schüler", case: "nominativ" },
                    { text: " mit Wasserfarben", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In art class the students paint with watercolors.",
                clozeParts: ["Im Kunstunterricht ", " die Schüler mit Wasserfarben."],
                clozeAnswers: ["malen"]
            } as Verb,
            {
                id: createWordId("a2-06-lern-013"),
                wordType: "verb",
                german: "notieren",
                english: "to note down",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "notiert",
                exampleGerman: [
                    { text: "Notieren", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " sich", case: "dativ" },
                    { text: " die wichtigsten Punkte", case: "akkusativ" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Note down the most important points!",
                clozeParts: ["", " Sie sich die wichtigsten Punkte!"],
                clozeAnswers: ["Notieren"]
            } as Verb,
            {
                id: createWordId("a2-06-lern-014"),
                wordType: "noun",
                german: "Notiz",
                article: "die",
                plural: "Notizen",
                english: "note",
                exampleGerman: [
                    { text: "Meine Notizen", case: "nominativ" },
                    { text: " vom Unterricht", case: "dativ" },
                    { text: " sind", case: "verb" },
                    { text: " sehr hilfreich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My notes from class are very helpful.",
                clozeParts: ["Meine ", " vom Unterricht sind sehr hilfreich."],
                clozeAnswers: ["Notizen"]
            } as Noun,
            {
                id: createWordId("a2-06-lern-015"),
                wordType: "noun",
                german: "Comic",
                article: "der/das",
                plural: "Comics",
                english: "comic",
                exampleGerman: [
                    { text: "Der Comic", case: "nominativ" },
                    { text: " erklärt", case: "verb" },
                    { text: " die Sicherheitsregeln", case: "akkusativ" },
                    { text: " mit lustigen Bildern", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The comic explains the safety rules with funny pictures.",
                clozeParts: ["Der ", " erklärt die Sicherheitsregeln mit lustigen Bildern."],
                clozeAnswers: ["Comic"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Qualifikationen (11 Wörter) ---
        "Qualifikationen": [
            {
                id: createWordId("a2-06-qual-001"),
                wordType: "noun",
                german: "Zeugnis",
                article: "das",
                plural: "Zeugnisse",
                english: "certificate / report card",
                exampleGerman: [
                    { text: "Das Abschlusszeugnis", case: "nominativ" },
                    { text: " bekommt", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " nach der Prüfung", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You get the final certificate after the exam.",
                clozeParts: ["Das Abschluss", " bekommt man nach der Prüfung."],
                clozeAnswers: ["zeugnis"]
            } as Noun,
            {
                id: createWordId("a2-06-qual-002"),
                wordType: "noun",
                german: "Prüfung",
                article: "die",
                plural: "Prüfungen",
                english: "exam",
                exampleGerman: [
                    { text: "Die praktische Prüfung", case: "nominativ" },
                    { text: " findet", case: "verb" },
                    { text: " in der Werkstatt", case: "dativ" },
                    { text: " statt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The practical exam takes place in the workshop.",
                clozeParts: ["Die praktische ", " findet in der Werkstatt statt."],
                clozeAnswers: ["Prüfung"]
            } as Noun,
            {
                id: createWordId("a2-06-qual-003"),
                wordType: "verb",
                german: "prüfen",
                english: "to test / examine",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geprüft",
                exampleGerman: [
                    { text: "Der Meister", case: "nominativ" },
                    { text: " prüft", case: "verb" },
                    { text: " unsere Werkstücke", case: "akkusativ" },
                    { text: " sehr genau", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The master examines our workpieces very carefully.",
                clozeParts: ["Der Meister ", " unsere Werkstücke sehr genau."],
                clozeAnswers: ["prüft"]
            } as Verb,
            {
                id: createWordId("a2-06-qual-004"),
                wordType: "verb",
                german: "bestehen",
                english: "to pass (exam)",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bestanden",
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " haben", case: "verb" },
                    { text: " die Zwischenprüfung", case: "akkusativ" },
                    { text: " bestanden", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone passed the intermediate exam.",
                clozeParts: ["Alle haben die Zwischenprüfung ", "."],
                clozeAnswers: ["bestanden"]
            } as Verb,
            {
                id: createWordId("a2-06-qual-005"),
                wordType: "noun",
                german: "Note",
                article: "die",
                plural: "Noten",
                english: "grade",
                exampleGerman: [
                    { text: "Die Noten", case: "nominativ" },
                    { text: " für die Projektarbeit", case: "akkusativ" },
                    { text: " waren", case: "verb" },
                    { text: " sehr gut", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The grades for the project work were very good.",
                clozeParts: ["Die ", " für die Projektarbeit waren sehr gut."],
                clozeAnswers: ["Noten"]
            } as Noun,
            {
                id: createWordId("a2-06-qual-006"),
                wordType: "noun",
                german: "Stipendium",
                article: "das",
                plural: "Stipendien",
                english: "scholarship",
                exampleGerman: [
                    { text: "Mit einem Stipendium", case: "dativ" },
                    { text: " kann", case: "verb" },
                    { text: " sie", case: "nominativ" },
                    { text: " das Studium", case: "akkusativ" },
                    { text: " finanzieren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "With a scholarship she can finance her studies.",
                clozeParts: ["Mit einem ", " kann sie das Studium finanzieren."],
                clozeAnswers: ["Stipendium"]
            } as Noun,
            {
                id: createWordId("a2-06-qual-007"),
                wordType: "noun",
                german: "Qualität",
                article: "die",
                plural: "Qualitäten",
                english: "quality",
                exampleGerman: [
                    { text: "Die Qualität", case: "nominativ" },
                    { text: " der Ausbildung", case: "genitiv" },
                    { text: " ist", case: "verb" },
                    { text: " hier sehr hoch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The quality of training here is very high.",
                clozeParts: ["Die ", " der Ausbildung ist hier sehr hoch."],
                clozeAnswers: ["Qualität"]
            } as Noun,
            {
                id: createWordId("a2-06-qual-008"),
                wordType: "adjective",
                german: "fleißig",
                english: "diligent / hardworking",
                exampleGerman: [
                    { text: "Die fleißigen Auszubildenden", case: "nominativ" },
                    { text: " bekommen", case: "verb" },
                    { text: " oft", case: "none" },
                    { text: " einen Arbeitsvertrag", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The hardworking apprentices often get a work contract.",
                clozeParts: ["Die ", "en Auszubildenden bekommen oft einen Arbeitsvertrag."],
                clozeAnswers: ["fleißig"]
            } as Adjective,
            {
                id: createWordId("a2-06-qual-009"),
                wordType: "adjective",
                german: "faul",
                english: "lazy",
                exampleGerman: [
                    { text: "Faule Schüler", case: "nominativ" },
                    { text: " haben", case: "verb" },
                    { text: " schlechte Chancen", case: "akkusativ" },
                    { text: " auf dem Arbeitsmarkt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Lazy students have poor chances in the job market.",
                clozeParts: ["", "e Schüler haben schlechte Chancen auf dem Arbeitsmarkt."],
                clozeAnswers: ["Faul"]
            } as Adjective,
            {
                id: createWordId("a2-06-qual-010"),
                wordType: "noun",
                german: "Schüler",
                article: "der",
                plural: "Schüler",
                english: "student / pupil",
                exampleGerman: [
                    { text: "Die Berufsschüler", case: "nominativ" },
                    { text: " arbeiten", case: "verb" },
                    { text: " drei Tage", case: "akkusativ" },
                    { text: " im Betrieb", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The vocational students work three days in the company.",
                clozeParts: ["Die Berufs", " arbeiten drei Tage im Betrieb."],
                clozeAnswers: ["schüler"]
            } as Noun,
            {
                id: createWordId("a2-06-qual-011"),
                wordType: "noun",
                german: "Student",
                article: "der",
                plural: "Studenten",
                english: "university student",
                exampleGerman: [
                    { text: "Die Studenten", case: "nominativ" },
                    { text: " machen", case: "verb" },
                    { text: " oft", case: "none" },
                    { text: " Praktika", case: "akkusativ" },
                    { text: " in den Semesterferien", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The university students often do internships during semester breaks.",
                clozeParts: ["Die ", " machen oft Praktika in den Semesterferien."],
                clozeAnswers: ["Studenten"]
            } as Noun
        ]
    }
});