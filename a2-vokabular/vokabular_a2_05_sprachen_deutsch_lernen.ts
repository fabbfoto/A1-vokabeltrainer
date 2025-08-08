// vokabular_a2_05_sprachen_deutsch_lernen.ts
// Thema 5: Sprachen / Deutsch lernen (45 Wörter)
// Kontext: Ein internationaler Deutschkurs - verschiedene Nationalitäten lernen zusammen

import type { VocabularyStructure, Noun, Verb, Adjective, Adverb, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_05_sprachen_deutsch_lernen: VocabularyStructure = createVocabulary({
    "Sprachen und Deutsch lernen": {
        
        // --- UNTERKAPITEL: Lernaktivitäten (18 Wörter) ---
        "Lernaktivitäten": [
            {
                id: createWordId("a2-05-lern-001"),
                wordType: "verb",
                german: "lernen",
                english: "to learn",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gelernt",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " lernen", case: "verb" },
                    { text: " jeden Tag", case: "none" },
                    { text: " neue Wörter", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We learn new words every day.",
                clozeParts: ["Wir ", " jeden Tag neue Wörter."],
                clozeAnswers: ["lernen"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-002"),
                wordType: "verb",
                german: "üben",
                english: "to practice",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geübt",
                exampleGerman: [
                    { text: "Die Studentin", case: "nominativ" },
                    { text: " aus Japan", case: "none" },
                    { text: " übt", case: "verb" },
                    { text: " die Aussprache", case: "akkusativ" },
                    { text: " mit ihrer Tandempartnerin", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The student from Japan practices pronunciation with her tandem partner.",
                clozeParts: ["Die Studentin aus Japan ", " die Aussprache mit ihrer Tandempartnerin."],
                clozeAnswers: ["übt"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-003"),
                wordType: "verb",
                german: "studieren",
                english: "to study",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "studiert",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " studiert", case: "verb" },
                    { text: " Germanistik", case: "akkusativ" },
                    { text: " an der Universität", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He studies German Studies at the university.",
                clozeParts: ["Er ", " Germanistik an der Universität."],
                clozeAnswers: ["studiert"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-004"),
                wordType: "verb",
                german: "wiederholen",
                english: "to repeat / review",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "wiederholt",
                exampleGerman: [
                    { text: "Können", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " den Satz", case: "akkusativ" },
                    { text: " bitte", case: "none" },
                    { text: " wiederholen", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Can you please repeat the sentence?",
                clozeParts: ["Können Sie den Satz bitte ", "?"],
                clozeAnswers: ["wiederholen"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-005"),
                wordType: "verb",
                german: "buchstabieren",
                english: "to spell",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "buchstabiert",
                exampleGerman: [
                    { text: "Wie", case: "none" },
                    { text: " buchstabiert", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " Ihren Namen", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "How do you spell your name?",
                clozeParts: ["Wie ", " man Ihren Namen?"],
                clozeAnswers: ["buchstabiert"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-006"),
                wordType: "verb",
                german: "aussprechen",
                english: "to pronounce",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "ausgesprochen",
                exampleGerman: [
                    { text: "Die Lehrerin", case: "nominativ" },
                    { text: " spricht", case: "verb" },
                    { text: " schwierige Wörter", case: "akkusativ" },
                    { text: " langsam", case: "none" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teacher pronounces difficult words slowly.",
                clozeParts: ["Die Lehrerin ", " schwierige Wörter langsam ", "."],
                clozeAnswers: ["spricht", "aus"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-007"),
                wordType: "verb",
                german: "übersetzen",
                english: "to translate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "übersetzt",
                exampleGerman: [
                    { text: "Der Student", case: "nominativ" },
                    { text: " aus Brasilien", case: "none" },
                    { text: " übersetzt", case: "verb" },
                    { text: " den Text", case: "akkusativ" },
                    { text: " ins Portugiesische", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The student from Brazil translates the text into Portuguese.",
                clozeParts: ["Der Student aus Brasilien ", " den Text ins Portugiesische."],
                clozeAnswers: ["übersetzt"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-008"),
                wordType: "noun",
                german: "Übersetzung",
                article: "die",
                plural: "Übersetzungen",
                english: "translation",
                exampleGerman: [
                    { text: "Die Übersetzung", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " nicht ganz richtig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The translation is not quite correct.",
                clozeParts: ["Die ", " ist nicht ganz richtig."],
                clozeAnswers: ["Übersetzung"]
            } as Noun,
            {
                id: createWordId("a2-05-lern-009"),
                wordType: "verb",
                german: "verstehen",
                english: "to understand",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verstanden",
                exampleGerman: [
                    { text: "Verstehen", case: "verb" },
                    { text: " alle", case: "nominativ" },
                    { text: " die Aufgabe", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Does everyone understand the task?",
                clozeParts: ["", " alle die Aufgabe?"],
                clozeAnswers: ["Verstehen"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-010"),
                wordType: "verb",
                german: "erklären",
                english: "to explain",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "erklärt",
                exampleGerman: [
                    { text: "Der Lehrer", case: "nominativ" },
                    { text: " erklärt", case: "verb" },
                    { text: " die Grammatikregel", case: "akkusativ" },
                    { text: " mit einem Beispiel", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teacher explains the grammar rule with an example.",
                clozeParts: ["Der Lehrer ", " die Grammatikregel mit einem Beispiel."],
                clozeAnswers: ["erklärt"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-011"),
                wordType: "verb",
                german: "bedeuten",
                english: "to mean",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bedeutet",
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " bedeutet", case: "verb" },
                    { text: " dieses Wort", case: "nominativ" },
                    { text: " auf Englisch", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What does this word mean in English?",
                clozeParts: ["Was ", " dieses Wort auf Englisch?"],
                clozeAnswers: ["bedeutet"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-012"),
                wordType: "verb",
                german: "merken",
                english: "to remember / memorize",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gemerkt",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " kann", case: "verb" },
                    { text: " mir", case: "dativ" },
                    { text: " die Artikel", case: "akkusativ" },
                    { text: " nie", case: "none" },
                    { text: " merken", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I can never remember the articles.",
                clozeParts: ["Ich kann mir die Artikel nie ", "."],
                clozeAnswers: ["merken"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-013"),
                wordType: "verb",
                german: "notieren",
                english: "to note down",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "notiert",
                exampleGerman: [
                    { text: "Die Studenten", case: "nominativ" },
                    { text: " notieren", case: "verb" },
                    { text: " neue Vokabeln", case: "akkusativ" },
                    { text: " in ihren Heften", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The students note down new vocabulary in their notebooks.",
                clozeParts: ["Die Studenten ", " neue Vokabeln in ihren Heften."],
                clozeAnswers: ["notieren"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-014"),
                wordType: "verb",
                german: "korrigieren",
                english: "to correct",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "korrigiert",
                exampleGerman: [
                    { text: "Die Lehrerin", case: "nominativ" },
                    { text: " korrigiert", case: "verb" },
                    { text: " unsere Hausaufgaben", case: "akkusativ" },
                    { text: " sehr genau", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teacher corrects our homework very carefully.",
                clozeParts: ["Die Lehrerin ", " unsere Hausaufgaben sehr genau."],
                clozeAnswers: ["korrigiert"]
            } as Verb,
            {
                id: createWordId("a2-05-lern-015"),
                wordType: "noun",
                german: "Fehler",
                article: "der",
                plural: "Fehler",
                english: "mistake / error",
                exampleGerman: [
                    { text: "Aus Fehlern", case: "dativ" },
                    { text: " lernt", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " am besten", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "One learns best from mistakes.",
                clozeParts: ["Aus ", "n lernt man am besten."],
                clozeAnswers: ["Fehler"]
            } as Noun,
            {
                id: createWordId("a2-05-lern-016"),
                wordType: "noun",
                german: "Hausaufgabe",
                article: "die",
                plural: "Hausaufgaben",
                english: "homework",
                exampleGerman: [
                    { text: "Haben", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " heute", case: "none" },
                    { text: " Hausaufgaben", case: "akkusativ" },
                    { text: " auf", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do we have homework today?",
                clozeParts: ["Haben wir heute ", " auf?"],
                clozeAnswers: ["Hausaufgaben"]
            } as Noun,
            {
                id: createWordId("a2-05-lern-017"),
                wordType: "noun",
                german: "Beispiel",
                article: "das",
                plural: "Beispiele",
                english: "example",
                exampleGerman: [
                    { text: "Können", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " mir", case: "dativ" },
                    { text: " ein Beispiel", case: "akkusativ" },
                    { text: " geben", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Can you give me an example?",
                clozeParts: ["Können Sie mir ein ", " geben?"],
                clozeAnswers: ["Beispiel"]
            } as Noun,
            {
                id: createWordId("a2-05-lern-018"),
                wordType: "noun",
                german: "Lösung",
                article: "die",
                plural: "Lösungen",
                english: "solution / answer",
                exampleGerman: [
                    { text: "Die Lösung", case: "nominativ" },
                    { text: " steht", case: "verb" },
                    { text: " auf Seite 45", case: "dativ" },
                    { text: " im Arbeitsbuch", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The answer is on page 45 in the workbook.",
                clozeParts: ["Die ", " steht auf Seite 45 im Arbeitsbuch."],
                clozeAnswers: ["Lösung"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Sprachkenntnisse (12 Wörter) ---
        "Sprachkenntnisse": [
            {
                id: createWordId("a2-05-sprach-001"),
                wordType: "noun",
                german: "Sprache",
                article: "die",
                plural: "Sprachen",
                english: "language",
                exampleGerman: [
                    { text: "Wie viele Sprachen", case: "akkusativ" },
                    { text: " sprechen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "How many languages do you speak?",
                clozeParts: ["Wie viele ", " sprechen Sie?"],
                clozeAnswers: ["Sprachen"]
            } as Noun,
            {
                id: createWordId("a2-05-sprach-002"),
                wordType: "verb",
                german: "sprechen",
                english: "to speak",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesprochen",
                exampleGerman: [
                    { text: "Die Kursteilnehmerin", case: "nominativ" },
                    { text: " aus China", case: "none" },
                    { text: " spricht", case: "verb" },
                    { text: " schon gut", case: "none" },
                    { text: " Deutsch", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The course participant from China already speaks German well.",
                clozeParts: ["Die Kursteilnehmerin aus China ", " schon gut Deutsch."],
                clozeAnswers: ["spricht"]
            } as Verb,
            {
                id: createWordId("a2-05-sprach-003"),
                wordType: "verb",
                german: "können",
                english: "can / to be able to",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekonnt",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " kann", case: "verb" },
                    { text: " ein bisschen", case: "none" },
                    { text: " Französisch", case: "akkusativ" },
                    { text: " verstehen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I can understand a little French.",
                clozeParts: ["Ich ", " ein bisschen Französisch verstehen."],
                clozeAnswers: ["kann"]
            } as Verb,
            {
                id: createWordId("a2-05-sprach-004"),
                wordType: "verb",
                german: "wissen",
                english: "to know (facts)",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gewusst",
                exampleGerman: [
                    { text: "Wissen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " die Antwort", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you know the answer?",
                clozeParts: ["", " Sie die Antwort?"],
                clozeAnswers: ["Wissen"]
            } as Verb,
            {
                id: createWordId("a2-05-sprach-005"),
                wordType: "noun",
                german: "Kenntnisse",
                article: "die",
                plural: "Kenntnisse",
                english: "knowledge / skills",
                exampleGerman: [
                    { text: "Meine Deutschkenntnisse", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " noch nicht perfekt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My German skills are not perfect yet.",
                clozeParts: ["Meine Deutsch", " sind noch nicht perfekt."],
                clozeAnswers: ["kenntnisse"]
            } as Noun,
            {
                id: createWordId("a2-05-sprach-006"),
                wordType: "verb",
                german: "kennen",
                english: "to know (be familiar with)",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekannt",
                exampleGerman: [
                    { text: "Kennen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " dieses deutsche Sprichwort", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you know this German proverb?",
                clozeParts: ["", " Sie dieses deutsche Sprichwort?"],
                clozeAnswers: ["Kennen"]
            } as Verb,
            {
                id: createWordId("a2-05-sprach-007"),
                wordType: "verb",
                german: "kennenlernen",
                english: "to get to know",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "kennengelernt",
                exampleGerman: [
                    { text: "Im Kurs", case: "dativ" },
                    { text: " lernen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " viele neue Leute", case: "akkusativ" },
                    { text: " kennen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the course we get to know many new people.",
                clozeParts: ["Im Kurs ", " wir viele neue Leute ", "."],
                clozeAnswers: ["lernen", "kennen"]
            } as Verb,
            {
                id: createWordId("a2-05-sprach-008"),
                wordType: "adjective",
                german: "intelligent",
                english: "intelligent",
                exampleGerman: [
                    { text: "Die intelligenten Schüler", case: "nominativ" },
                    { text: " lernen", case: "verb" },
                    { text: " sehr schnell", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The intelligent students learn very quickly.",
                clozeParts: ["Die ", "en Schüler lernen sehr schnell."],
                clozeAnswers: ["intelligent"]
            } as Adjective,
            {
                id: createWordId("a2-05-sprach-009"),
                wordType: "adjective",
                german: "klug",
                english: "clever / smart",
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " klug", case: "none" },
                    { text: ", jeden Tag zu üben", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It is smart to practice every day.",
                clozeParts: ["Es ist ", ", jeden Tag zu üben."],
                clozeAnswers: ["klug"]
            } as Adjective,
            {
                id: createWordId("a2-05-sprach-010"),
                wordType: "noun",
                german: "Grammatik",
                article: "die",
                plural: null,
                english: "grammar",
                exampleGerman: [
                    { text: "Die deutsche Grammatik", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " manchmal kompliziert", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "German grammar is sometimes complicated.",
                clozeParts: ["Die deutsche ", " ist manchmal kompliziert."],
                clozeAnswers: ["Grammatik"]
            } as Noun,
            {
                id: createWordId("a2-05-sprach-011"),
                wordType: "noun",
                german: "Regel",
                article: "die",
                plural: "Regeln",
                english: "rule",
                exampleGerman: [
                    { text: "Diese Regel", case: "nominativ" },
                    { text: " müssen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " auswendig lernen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You must learn this rule by heart.",
                clozeParts: ["Diese ", " müssen Sie auswendig lernen."],
                clozeAnswers: ["Regel"]
            } as Noun,
            {
                id: createWordId("a2-05-sprach-012"),
                wordType: "noun",
                german: "Diktat",
                article: "das",
                plural: "Diktate",
                english: "dictation",
                exampleGerman: [
                    { text: "Morgen", case: "none" },
                    { text: " schreiben", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " ein Diktat", case: "akkusativ" },
                    { text: " über die neuen Vokabeln", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Tomorrow we will write a dictation about the new vocabulary.",
                clozeParts: ["Morgen schreiben wir ein ", " über die neuen Vokabeln."],
                clozeAnswers: ["Diktat"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Kommunikation (12 Wörter) ---
        "Kommunikation": [
            {
                id: createWordId("a2-05-komm-001"),
                wordType: "verb",
                german: "sagen",
                english: "to say",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesagt",
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " haben", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " gesagt", case: "verb" },
                    { text: "? Ich habe es nicht verstanden", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "What did you say? I didn't understand it.",
                clozeParts: ["Was haben Sie ", "? Ich habe es nicht verstanden."],
                clozeAnswers: ["gesagt"]
            } as Verb,
            {
                id: createWordId("a2-05-komm-002"),
                wordType: "verb",
                german: "reden",
                english: "to talk",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geredet",
                exampleGerman: [
                    { text: "In der Pause", case: "dativ" },
                    { text: " reden", case: "verb" },
                    { text: " alle", case: "nominativ" },
                    { text: " durcheinander", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "During the break everyone talks at once.",
                clozeParts: ["In der Pause ", " alle durcheinander."],
                clozeAnswers: ["reden"]
            } as Verb,
            {
                id: createWordId("a2-05-komm-003"),
                wordType: "verb",
                german: "fragen",
                english: "to ask",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gefragt",
                exampleGerman: [
                    { text: "Der Schüler", case: "nominativ" },
                    { text: " aus Italien", case: "none" },
                    { text: " fragt", case: "verb" },
                    { text: " nach der Bedeutung", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The student from Italy asks about the meaning.",
                clozeParts: ["Der Schüler aus Italien ", " nach der Bedeutung."],
                clozeAnswers: ["fragt"]
            } as Verb,
            {
                id: createWordId("a2-05-komm-004"),
                wordType: "verb",
                german: "antworten",
                english: "to answer",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geantwortet",
                exampleGerman: [
                    { text: "Bitte", case: "none" },
                    { text: " antworten", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " in ganzen Sätzen", case: "dativ" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Please answer in complete sentences!",
                clozeParts: ["Bitte ", " Sie in ganzen Sätzen!"],
                clozeAnswers: ["antworten"]
            } as Verb,
            {
                id: createWordId("a2-05-komm-005"),
                wordType: "noun",
                german: "Antwort",
                article: "die",
                plural: "Antworten",
                english: "answer",
                exampleGerman: [
                    { text: "Die richtige Antwort", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " B", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The correct answer is B.",
                clozeParts: ["Die richtige ", " ist B."],
                clozeAnswers: ["Antwort"]
            } as Noun,
            {
                id: createWordId("a2-05-komm-006"),
                wordType: "noun",
                german: "Gespräch",
                article: "das",
                plural: "Gespräche",
                english: "conversation",
                exampleGerman: [
                    { text: "Nach dem Kurs", case: "dativ" },
                    { text: " führen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " oft", case: "none" },
                    { text: " interessante Gespräche", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After the course we often have interesting conversations.",
                clozeParts: ["Nach dem Kurs führen wir oft interessante ", "."],
                clozeAnswers: ["Gespräche"]
            } as Noun,
            {
                id: createWordId("a2-05-komm-007"),
                wordType: "verb",
                german: "unterhalten",
                english: "to converse / chat",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "unterhalten",
                exampleGerman: [
                    { text: "Die Studenten", case: "nominativ" },
                    { text: " unterhalten sich", case: "verb" },
                    { text: " auf Deutsch", case: "none" },
                    { text: " über ihre Heimatländer", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The students converse in German about their home countries.",
                clozeParts: ["Die Studenten ", " auf Deutsch über ihre Heimatländer."],
                clozeAnswers: ["unterhalten sich"]
            } as Verb,
            {
                id: createWordId("a2-05-komm-008"),
                wordType: "noun",
                german: "Text",
                article: "der",
                plural: "Texte",
                english: "text",
                exampleGerman: [
                    { text: "Lesen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " den Text", case: "akkusativ" },
                    { text: " und markieren Sie die Verben", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Read the text and mark the verbs.",
                clozeParts: ["Lesen Sie den ", " und markieren Sie die Verben."],
                clozeAnswers: ["Text"]
            } as Noun,
            {
                id: createWordId("a2-05-komm-009"),
                wordType: "noun",
                german: "Artikel",
                article: "der",
                plural: "Artikel",
                english: "article",
                exampleGerman: [
                    { text: "Der bestimmte Artikel", case: "nominativ" },
                    { text: " für 'Haus'", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " 'das'", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The definite article for 'Haus' is 'das'.",
                clozeParts: ["Der bestimmte ", " für 'Haus' ist 'das'."],
                clozeAnswers: ["Artikel"]
            } as Noun,
            {
                id: createWordId("a2-05-komm-010"),
                wordType: "noun",
                german: "Wort",
                article: "das",
                plural: "Wörter",
                english: "word",
                exampleGerman: [
                    { text: "Dieses Wort", case: "nominativ" },
                    { text: " kenne", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " noch nicht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I don't know this word yet.",
                clozeParts: ["Dieses ", " kenne ich noch nicht."],
                clozeAnswers: ["Wort"]
            } as Noun,
            {
                id: createWordId("a2-05-komm-011"),
                wordType: "noun",
                german: "Satz",
                article: "der",
                plural: "Sätze",
                english: "sentence",
                exampleGerman: [
                    { text: "Bilden", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " einen Satz", case: "akkusativ" },
                    { text: " mit diesem Verb", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Form a sentence with this verb.",
                clozeParts: ["Bilden Sie einen ", " mit diesem Verb."],
                clozeAnswers: ["Satz"]
            } as Noun,
            {
                id: createWordId("a2-05-komm-012"),
                wordType: "noun",
                german: "Buchstabe",
                article: "der",
                plural: "Buchstaben",
                english: "letter (alphabet)",
                exampleGerman: [
                    { text: "Das deutsche Alphabet", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " 30 Buchstaben", case: "akkusativ" },
                    { text: " mit den Umlauten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The German alphabet has 30 letters with the umlauts.",
                clozeParts: ["Das deutsche Alphabet hat 30 ", " mit den Umlauten."],
                clozeAnswers: ["Buchstaben"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Prüfungen und Bewertung (3 Wörter) ---
        "Prüfungen und Bewertung": [
            {
                id: createWordId("a2-05-pruef-001"),
                wordType: "noun",
                german: "Prüfung",
                article: "die",
                plural: "Prüfungen",
                english: "exam / test",
                exampleGerman: [
                    { text: "Nächste Woche", case: "none" },
                    { text: " haben", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " die A2-Prüfung", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Next week we have the A2 exam.",
                clozeParts: ["Nächste Woche haben wir die A2-", "."],
                clozeAnswers: ["Prüfung"]
            } as Noun,
            {
                id: createWordId("a2-05-pruef-002"),
                wordType: "adjective",
                german: "richtig",
                english: "correct / right",
                exampleGerman: [
                    { text: "Ist", case: "verb" },
                    { text: " diese Antwort", case: "nominativ" },
                    { text: " richtig", case: "none" },
                    { text: " oder falsch", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Is this answer right or wrong?",
                clozeParts: ["Ist diese Antwort ", " oder falsch?"],
                clozeAnswers: ["richtig"]
            } as Adjective,
            {
                id: createWordId("a2-05-pruef-003"),
                wordType: "adjective",
                german: "falsch",
                english: "wrong / false",
                exampleGerman: [
                    { text: "Die falsche Aussprache", case: "nominativ" },
                    { text: " kann", case: "verb" },
                    { text: " zu Missverständnissen", case: "dativ" },
                    { text: " führen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Wrong pronunciation can lead to misunderstandings.",
                clozeParts: ["Die ", "e Aussprache kann zu Missverständnissen führen."],
                clozeAnswers: ["falsch"]
            } as Adjective
        ]
    }
});