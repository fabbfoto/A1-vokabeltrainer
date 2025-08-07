// vokabular_a2_01_persoenliche_informationen.ts
// Thema 1: Persönliche Informationen (60 Wörter)
// Kontext: Anmeldung bei der Stadtverwaltung / Behördengang

import type { VocabularyStructure, Noun, Verb, Adjective, Pronoun, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_01_persoenliche_informationen: VocabularyStructure = createVocabulary({
    "Persönliche Informationen": {
        
        // --- UNTERKAPITEL: Grunddaten (12 Wörter) ---
        "Grunddaten": [
            {
                id: createWordId("a2-01-grund-001"),
                wordType: "noun",
                german: "Adresse",
                article: "die",
                plural: "Adressen",
                english: "address",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " muss", case: "verb" },
                    { text: " meine neue", case: "none" },
                    { text: " Adresse", case: "akkusativ" },
                    { text: " beim Einwohnermeldeamt", case: "dativ" },
                    { text: " anmelden", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have to register my new address at the registration office.",
                clozeParts: ["Ich muss meine neue ", " beim Einwohnermeldeamt anmelden."],
                clozeAnswers: ["Adresse"]
            } as Noun,
            {
                id: createWordId("a2-01-grund-002"),
                wordType: "noun",
                german: "Alter",
                article: "das",
                plural: null,
                english: "age",
                exampleGerman: [
                    { text: "Für diesen Kurs", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " das Alter", case: "nominativ" },
                    { text: " nicht wichtig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Age is not important for this course.",
                clozeParts: ["Für diesen Kurs ist das ", " nicht wichtig."],
                clozeAnswers: ["Alter"]
            } as Noun,
            {
                id: createWordId("a2-01-grund-003"),
                wordType: "noun",
                german: "Name",
                article: "der",
                plural: "Namen",
                english: "name",
                exampleGerman: [
                    { text: "Bitte", case: "none" },
                    { text: " schreiben", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " Ihren Namen", case: "akkusativ" },
                    { text: " in Druckbuchstaben", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Please write your name in block letters.",
                clozeParts: ["Bitte schreiben Sie Ihren ", " in Druckbuchstaben."],
                clozeAnswers: ["Namen"]
            } as Noun,
            {
                id: createWordId("a2-01-grund-004"),
                wordType: "noun",
                german: "Familienname",
                article: "der",
                plural: "Familiennamen",
                english: "surname / family name",
                exampleGerman: [
                    { text: "Mein Familienname", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " schwer zu schreiben", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My surname is difficult to write.",
                clozeParts: ["Mein ", " ist schwer zu schreiben."],
                clozeAnswers: ["Familienname"]
            } as Noun,
            {
                id: createWordId("a2-01-grund-005"),
                wordType: "noun",
                german: "Vorname",
                article: "der",
                plural: "Vornamen",
                english: "first name",
                exampleGerman: [
                    { text: "Der Vorname", case: "nominativ" },
                    { text: " kommt", case: "verb" },
                    { text: " vor dem Familiennamen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The first name comes before the surname.",
                clozeParts: ["Der ", " kommt vor dem Familiennamen."],
                clozeAnswers: ["Vorname"]
            } as Noun,
            {
                id: createWordId("a2-01-grund-006"),
                wordType: "adjective",
                german: "geboren",
                english: "born",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " bin", case: "verb" },
                    { text: " 1995", case: "none" },
                    { text: " in Berlin", case: "dativ" },
                    { text: " geboren", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I was born in Berlin in 1995.",
                clozeParts: ["Ich bin 1995 in Berlin ", "."],
                clozeAnswers: ["geboren"]
            } as Adjective,
            {
                id: createWordId("a2-01-grund-007"),
                wordType: "noun",
                german: "Geburtsjahr",
                article: "das",
                plural: "Geburtsjahre",
                english: "year of birth",
                exampleGerman: [
                    { text: "Mein Geburtsjahr", case: "nominativ" },
                    { text: " steht", case: "verb" },
                    { text: " im Pass", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My year of birth is in the passport.",
                clozeParts: ["Mein ", " steht im Pass."],
                clozeAnswers: ["Geburtsjahr"]
            } as Noun,
            {
                id: createWordId("a2-01-grund-008"),
                wordType: "noun",
                german: "Geburtsort",
                article: "der",
                plural: "Geburtsorte",
                english: "place of birth",
                exampleGerman: [
                    { text: "Als Geburtsort", case: "akkusativ" },
                    { text: " habe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " Hamburg", case: "akkusativ" },
                    { text: " angegeben", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I stated Hamburg as my place of birth.",
                clozeParts: ["Als ", " habe ich Hamburg angegeben."],
                clozeAnswers: ["Geburtsort"]
            } as Noun,
            {
                id: createWordId("a2-01-grund-009"),
                wordType: "noun",
                german: "Person",
                article: "die",
                plural: "Personen",
                english: "person",
                exampleGerman: [
                    { text: "Nur eine Person", case: "nominativ" },
                    { text: " darf", case: "verb" },
                    { text: " ins Büro", case: "akkusativ" },
                    { text: " kommen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Only one person may come into the office.",
                clozeParts: ["Nur eine ", " darf ins Büro kommen."],
                clozeAnswers: ["Person"]
            } as Noun,
            {
                id: createWordId("a2-01-grund-010"),
                wordType: "noun",
                german: "Erwachsene",
                article: "der/die",
                plural: "Erwachsenen",
                english: "adult",
                exampleGerman: [
                    { text: "Erwachsene", case: "nominativ" },
                    { text: " müssen", case: "verb" },
                    { text: " einen Ausweis", case: "akkusativ" },
                    { text: " haben", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Adults must have an ID card.",
                clozeParts: ["", " müssen einen Ausweis haben."],
                clozeAnswers: ["Erwachsene"]
            } as Noun,
            {
                id: createWordId("a2-01-grund-011"),
                wordType: "noun",
                german: "Dame",
                article: "die",
                plural: "Damen",
                english: "lady",
                exampleGerman: [
                    { text: "Die Dame", case: "nominativ" },
                    { text: " am Schalter", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " sehr freundlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The lady at the counter is very friendly.",
                clozeParts: ["Die ", " am Schalter ist sehr freundlich."],
                clozeAnswers: ["Dame"]
            } as Noun,
            {
                id: createWordId("a2-01-grund-012"),
                wordType: "noun",
                german: "Herr",
                article: "der",
                plural: "Herren",
                english: "gentleman / Mr.",
                exampleGerman: [
                    { text: "Der Herr", case: "nominativ" },
                    { text: " wartet", case: "verb" },
                    { text: " schon seit einer Stunde", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The gentleman has been waiting for an hour.",
                clozeParts: ["Der ", " wartet schon seit einer Stunde."],
                clozeAnswers: ["Herr"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Dokumente und Formulare (15 Wörter) ---
        "Dokumente und Formulare": [
            {
                id: createWordId("a2-01-dok-001"),
                wordType: "noun",
                german: "Ausweis",
                article: "der",
                plural: "Ausweise",
                english: "ID card",
                exampleGerman: [
                    { text: "Ohne Ausweis", case: "akkusativ" },
                    { text: " kann", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " das Paket", case: "akkusativ" },
                    { text: " nicht abholen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I cannot pick up the package without an ID card.",
                clozeParts: ["Ohne ", " kann ich das Paket nicht abholen."],
                clozeAnswers: ["Ausweis"]
            } as Noun,
            {
                id: createWordId("a2-01-dok-002"),
                wordType: "noun",
                german: "Pass",
                article: "der",
                plural: "Pässe",
                english: "passport",
                exampleGerman: [
                    { text: "Mein Pass", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " nächstes Jahr", case: "none" },
                    { text: " abgelaufen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My passport expires next year.",
                clozeParts: ["Mein ", " ist nächstes Jahr abgelaufen."],
                clozeAnswers: ["Pass"]
            } as Noun,
            {
                id: createWordId("a2-01-dok-003"),
                wordType: "noun",
                german: "Formular",
                article: "das",
                plural: "Formulare",
                english: "form",
                exampleGerman: [
                    { text: "Dieses Formular", case: "akkusativ" },
                    { text: " müssen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " komplett ausfüllen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You must fill out this form completely.",
                clozeParts: ["Dieses ", " müssen Sie komplett ausfüllen."],
                clozeAnswers: ["Formular"]
            } as Noun,
            {
                id: createWordId("a2-01-dok-004"),
                wordType: "noun",
                german: "Anmeldung",
                article: "die",
                plural: "Anmeldungen",
                english: "registration",
                exampleGerman: [
                    { text: "Die Anmeldung", case: "nominativ" },
                    { text: " für den Kurs", case: "none" },
                    { text: " läuft", case: "verb" },
                    { text: " noch bis Freitag", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Registration for the course runs until Friday.",
                clozeParts: ["Die ", " für den Kurs läuft noch bis Freitag."],
                clozeAnswers: ["Anmeldung"]
            } as Noun,
            {
                id: createWordId("a2-01-dok-005"),
                wordType: "verb",
                german: "ausfüllen",
                english: "to fill out",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "ausgefüllt",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " fülle", case: "verb" },
                    { text: " das Formular", case: "akkusativ" },
                    { text: " online", case: "none" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I fill out the form online.",
                clozeParts: ["Ich ", " das Formular online ", "."],
                clozeAnswers: ["fülle", "aus"]
            } as Verb,
            {
                id: createWordId("a2-01-dok-006"),
                wordType: "verb",
                german: "anmelden",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "angemeldet",
                english: "to register",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " haben", case: "verb" },
                    { text: " uns", case: "akkusativ" },
                    { text: " gestern", case: "none" },
                    { text: " beim Amt", case: "dativ" },
                    { text: " angemeldet", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We registered at the office yesterday.",
                clozeParts: ["Wir haben uns gestern beim Amt ", "."],
                clozeAnswers: ["angemeldet"]
            } as Verb,
            {
                id: createWordId("a2-01-dok-007"),
                wordType: "verb",
                german: "eintragen",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "eingetragen",
                english: "to enter / register",
                exampleGerman: [
                    { text: "Bitte", case: "none" },
                    { text: " tragen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " sich", case: "akkusativ" },
                    { text: " in die Liste", case: "akkusativ" },
                    { text: " ein", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Please enter your name in the list.",
                clozeParts: ["Bitte ", " Sie sich in die Liste ", "."],
                clozeAnswers: ["tragen", "ein"]
            } as Verb,
            {
                id: createWordId("a2-01-dok-008"),
                wordType: "verb",
                german: "unterschreiben",
                english: "to sign",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "unterschrieben",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " muss", case: "verb" },
                    { text: " den Vertrag", case: "akkusativ" },
                    { text: " noch", case: "none" },
                    { text: " unterschreiben", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I still have to sign the contract.",
                clozeParts: ["Ich muss den Vertrag noch ", "."],
                clozeAnswers: ["unterschreiben"]
            } as Verb,
            {
                id: createWordId("a2-01-dok-009"),
                wordType: "noun",
                german: "Unterschrift",
                article: "die",
                plural: "Unterschriften",
                english: "signature",
                exampleGerman: [
                    { text: "Ohne Ihre Unterschrift", case: "akkusativ" },
                    { text: " ist", case: "verb" },
                    { text: " das Dokument", case: "nominativ" },
                    { text: " nicht gültig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The document is not valid without your signature.",
                clozeParts: ["Ohne Ihre ", " ist das Dokument nicht gültig."],
                clozeAnswers: ["Unterschrift"]
            } as Noun,
            {
                id: createWordId("a2-01-dok-010"),
                wordType: "noun",
                german: "Zeugnis",
                article: "das",
                plural: "Zeugnisse",
                english: "certificate / report card",
                exampleGerman: [
                    { text: "Für die Bewerbung", case: "none" },
                    { text: " brauche", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " mein letztes Zeugnis", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I need my last certificate for the application.",
                clozeParts: ["Für die Bewerbung brauche ich mein letztes ", "."],
                clozeAnswers: ["Zeugnis"]
            } as Noun,
            {
                id: createWordId("a2-01-dok-011"),
                wordType: "noun",
                german: "Papiere",
                article: undefined,
                plural: "Papiere",
                english: "papers / documents",
                exampleGerman: [
                    { text: "Alle wichtigen Papiere", case: "akkusativ" },
                    { text: " bewahre", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " im Schrank", case: "dativ" },
                    { text: " auf", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I keep all important papers in the cupboard.",
                clozeParts: ["Alle wichtigen ", " bewahre ich im Schrank auf."],
                clozeAnswers: ["Papiere"]
            } as Noun,
            {
                id: createWordId("a2-01-dok-012"),
                wordType: "verb",
                german: "kontrollieren",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "kontrolliert",
                english: "to check / control",
                exampleGerman: [
                    { text: "Der Beamte", case: "nominativ" },
                    { text: " kontrolliert", case: "verb" },
                    { text: " alle Angaben", case: "akkusativ" },
                    { text: " sehr genau", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The official checks all information very carefully.",
                clozeParts: ["Der Beamte ", " alle Angaben sehr genau."],
                clozeAnswers: ["kontrolliert"]
            } as Verb,
            {
                id: createWordId("a2-01-dok-013"),
                wordType: "verb",
                german: "prüfen",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geprüft",
                english: "to examine / check",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " müssen", case: "verb" },
                    { text: " die Daten", case: "akkusativ" },
                    { text: " noch einmal", case: "none" },
                    { text: " prüfen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You must check the data once more.",
                clozeParts: ["Sie müssen die Daten noch einmal ", "."],
                clozeAnswers: ["prüfen"]
            } as Verb,
            {
                id: createWordId("a2-01-dok-014"),
                wordType: "noun",
                german: "Prüfung",
                article: "die",
                plural: "Prüfungen",
                english: "examination / test",
                exampleGerman: [
                    { text: "Die Prüfung", case: "nominativ" },
                    { text: " der Unterlagen", case: "genitiv" },
                    { text: " dauert", case: "verb" },
                    { text: " etwa zwei Wochen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The examination of the documents takes about two weeks.",
                clozeParts: ["Die ", " der Unterlagen dauert etwa zwei Wochen."],
                clozeAnswers: ["Prüfung"]
            } as Noun,
            {
                id: createWordId("a2-01-dok-015"),
                wordType: "verb",
                german: "bestätigen",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bestätigt",
                english: "to confirm",
                exampleGerman: [
                    { text: "Können", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " mir", case: "dativ" },
                    { text: " den Termin", case: "akkusativ" },
                    { text: " schriftlich", case: "none" },
                    { text: " bestätigen", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Can you confirm the appointment in writing?",
                clozeParts: ["Können Sie mir den Termin schriftlich ", "?"],
                clozeAnswers: ["bestätigen"]
            } as Verb
        ],

        // --- UNTERKAPITEL: Eigenschaften (8 Wörter) ---
        "Eigenschaften": [
            {
                id: createWordId("a2-01-eig-001"),
                wordType: "adjective",
                german: "alt",
                english: "old",
                exampleGerman: [
                    { text: "Die alten Dokumente", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " nicht mehr gültig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The old documents are no longer valid.",
                clozeParts: ["Die ", "en Dokumente sind nicht mehr gültig."],
                clozeAnswers: ["alt"]
            } as Adjective,
            {
                id: createWordId("a2-01-eig-002"),
                wordType: "adjective",
                german: "jung",
                english: "young",
                exampleGerman: [
                    { text: "Junge Menschen", case: "nominativ" },
                    { text: " bekommen", case: "verb" },
                    { text: " einen Studentenausweis", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Young people get a student ID.",
                clozeParts: ["", "e Menschen bekommen einen Studentenausweis."],
                clozeAnswers: ["Jung"]
            } as Adjective,
            {
                id: createWordId("a2-01-eig-003"),
                wordType: "adjective",
                german: "neu",
                english: "new",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " brauche", case: "verb" },
                    { text: " einen neuen Pass", case: "akkusativ" },
                    { text: ", weil meiner abgelaufen ist", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I need a new passport because mine has expired.",
                clozeParts: ["Ich brauche einen ", "en Pass, weil meiner abgelaufen ist."],
                clozeAnswers: ["neu"]
            } as Adjective,
            {
                id: createWordId("a2-01-eig-004"),
                wordType: "adjective",
                german: "eigen",
                english: "own",
                exampleGerman: [
                    { text: "Jeder", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " seine eigenen Daten", case: "akkusativ" },
                    { text: " zu schützen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone has to protect their own data.",
                clozeParts: ["Jeder hat seine ", "en Daten zu schützen."],
                clozeAnswers: ["eigen"]
            } as Adjective,
            {
                id: createWordId("a2-01-eig-005"),
                wordType: "adjective",
                german: "privat",
                english: "private",
                exampleGerman: [
                    { text: "Diese Information", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " privat", case: "none" },
                    { text: " und vertraulich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "This information is private and confidential.",
                clozeParts: ["Diese Information ist ", " und vertraulich."],
                clozeAnswers: ["privat"]
            } as Adjective,
            {
                id: createWordId("a2-01-eig-006"),
                wordType: "adjective",
                german: "einzeln",
                english: "individual / single",
                exampleGerman: [
                    { text: "Bitte", case: "none" },
                    { text: " kommen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " einzeln", case: "none" },
                    { text: " ins Büro", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Please come into the office individually.",
                clozeParts: ["Bitte kommen Sie ", " ins Büro."],
                clozeAnswers: ["einzeln"]
            } as Adjective,
            {
                id: createWordId("a2-01-eig-007"),
                wordType: "pronoun",
                german: "selbst",
                english: "self / myself",
                exampleGerman: [
                    { text: "Das", case: "akkusativ" },
                    { text: " muss", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " selbst", case: "none" },
                    { text: " unterschreiben", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have to sign that myself.",
                clozeParts: ["Das muss ich ", " unterschreiben."],
                clozeAnswers: ["selbst"]
            } as Pronoun,
            {
                id: createWordId("a2-01-eig-008"),
                wordType: "adjective",
                german: "typisch",
                english: "typical",
                exampleGerman: [
                    { text: "Das", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " ein typisches Problem", case: "nominativ" },
                    { text: " bei der Anmeldung", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "That's a typical problem with registration.",
                clozeParts: ["Das ist ein ", "es Problem bei der Anmeldung."],
                clozeAnswers: ["typisch"]
            } as Adjective
        ],

        // --- UNTERKAPITEL: Pronomen und Fragewörter (25 Wörter) ---
        "Pronomen und Fragewörter": [
            {
                id: createWordId("a2-01-pron-001"),
                wordType: "pronoun",
                german: "ich",
                english: "I",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " warte", case: "verb" },
                    { text: " schon seit einer Stunde", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have been waiting for an hour.",
                clozeParts: ["", " warte schon seit einer Stunde."],
                clozeAnswers: ["Ich"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-002"),
                wordType: "pronoun",
                german: "du",
                english: "you (informal)",
                exampleGerman: [
                    { text: "Hast", case: "verb" },
                    { text: " du", case: "nominativ" },
                    { text: " deinen Ausweis", case: "akkusativ" },
                    { text: " dabei", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Do you have your ID with you?",
                clozeParts: ["Hast ", " deinen Ausweis dabei?"],
                clozeAnswers: ["du"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-003"),
                wordType: "pronoun",
                german: "er",
                english: "he",
                exampleGerman: [
                    { text: "Er", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " alle Unterlagen", case: "akkusativ" },
                    { text: " mitgebracht", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "He brought all the documents.",
                clozeParts: ["", " hat alle Unterlagen mitgebracht."],
                clozeAnswers: ["Er"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-004"),
                wordType: "pronoun",
                german: "sie",
                english: "she / they",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " arbeitet", case: "verb" },
                    { text: " beim Einwohnermeldeamt", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "She works at the registration office.",
                clozeParts: ["", " arbeitet beim Einwohnermeldeamt."],
                clozeAnswers: ["Sie"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-005"),
                wordType: "pronoun",
                german: "es",
                english: "it",
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " wichtig", case: "none" },
                    { text: ", alles richtig auszufüllen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It is important to fill out everything correctly.",
                clozeParts: ["", " ist wichtig, alles richtig auszufüllen."],
                clozeAnswers: ["Es"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-006"),
                wordType: "pronoun",
                german: "wir",
                english: "we",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " haben", case: "verb" },
                    { text: " einen Termin", case: "akkusativ" },
                    { text: " um 10 Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We have an appointment at 10 o'clock.",
                clozeParts: ["", " haben einen Termin um 10 Uhr."],
                clozeAnswers: ["Wir"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-007"),
                wordType: "pronoun",
                german: "ihr",
                english: "you (plural informal)",
                exampleGerman: [
                    { text: "Habt", case: "verb" },
                    { text: " ihr", case: "nominativ" },
                    { text: " die Formulare", case: "akkusativ" },
                    { text: " schon ausgefüllt", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Have you already filled out the forms?",
                clozeParts: ["Habt ", " die Formulare schon ausgefüllt?"],
                clozeAnswers: ["ihr"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-008"),
                wordType: "pronoun",
                german: "man",
                english: "one / you (general)",
                exampleGerman: [
                    { text: "Hier", case: "none" },
                    { text: " muss", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " lange warten", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "One has to wait a long time here.",
                clozeParts: ["Hier muss ", " lange warten."],
                clozeAnswers: ["man"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-009"),
                wordType: "pronoun",
                german: "jemand",
                english: "someone",
                exampleGerman: [
                    { text: "Hat", case: "verb" },
                    { text: " jemand", case: "nominativ" },
                    { text: " einen Stift", case: "akkusativ" },
                    { text: " für mich", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Does someone have a pen for me?",
                clozeParts: ["Hat ", " einen Stift für mich?"],
                clozeAnswers: ["jemand"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-010"),
                wordType: "pronoun",
                german: "niemand",
                english: "nobody",
                exampleGerman: [
                    { text: "Niemand", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " mir", case: "dativ" },
                    { text: " geholfen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Nobody helped me.",
                clozeParts: ["", " hat mir geholfen."],
                clozeAnswers: ["Niemand"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-011"),
                wordType: "pronoun",
                german: "etwas",
                english: "something",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " habe", case: "verb" },
                    { text: " etwas", case: "akkusativ" },
                    { text: " vergessen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I forgot something.",
                clozeParts: ["Ich habe ", " vergessen."],
                clozeAnswers: ["etwas"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-012"),
                wordType: "pronoun",
                german: "nichts",
                english: "nothing",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " verstehe", case: "verb" },
                    { text: " nichts", case: "akkusativ" },
                    { text: " von diesem Formular", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I understand nothing of this form.",
                clozeParts: ["Ich verstehe ", " von diesem Formular."],
                clozeAnswers: ["nichts"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-013"),
                wordType: "pronoun",
                german: "was",
                english: "what",
                exampleGerman: [
                    { text: "Was", case: "akkusativ" },
                    { text: " brauchen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " noch", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "What else do you need?",
                clozeParts: ["", " brauchen Sie noch?"],
                clozeAnswers: ["Was"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-014"),
                wordType: "pronoun",
                german: "wer",
                english: "who",
                exampleGerman: [
                    { text: "Wer", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " als Nächster", case: "none" },
                    { text: " dran", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Who is next?",
                clozeParts: ["", " ist als Nächster dran?"],
                clozeAnswers: ["Wer"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-015"),
                wordType: "pronoun",
                german: "wie",
                english: "how",
                exampleGerman: [
                    { text: "Wie", case: "none" },
                    { text: " lange", case: "none" },
                    { text: " dauert", case: "verb" },
                    { text: " die Bearbeitung", case: "nominativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "How long does the processing take?",
                clozeParts: ["", " lange dauert die Bearbeitung?"],
                clozeAnswers: ["Wie"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-016"),
                wordType: "pronoun",
                german: "wo",
                english: "where",
                exampleGerman: [
                    { text: "Wo", case: "none" },
                    { text: " muss", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " unterschreiben", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Where do I have to sign?",
                clozeParts: ["", " muss ich unterschreiben?"],
                clozeAnswers: ["Wo"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-017"),
                wordType: "pronoun",
                german: "woher",
                english: "where from",
                exampleGerman: [
                    { text: "Woher", case: "none" },
                    { text: " kommen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " ursprünglich", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Where are you originally from?",
                clozeParts: ["", " kommen Sie ursprünglich?"],
                clozeAnswers: ["Woher"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-018"),
                wordType: "pronoun",
                german: "wohin",
                english: "where to",
                exampleGerman: [
                    { text: "Wohin", case: "none" },
                    { text: " soll", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " die Unterlagen", case: "akkusativ" },
                    { text: " schicken", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Where should I send the documents?",
                clozeParts: ["", " soll ich die Unterlagen schicken?"],
                clozeAnswers: ["Wohin"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-019"),
                wordType: "pronoun",
                german: "warum",
                english: "why",
                exampleGerman: [
                    { text: "Warum", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " das Amt", case: "nominativ" },
                    { text: " heute geschlossen", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Why is the office closed today?",
                clozeParts: ["", " ist das Amt heute geschlossen?"],
                clozeAnswers: ["Warum"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-020"),
                wordType: "pronoun",
                german: "wann",
                english: "when",
                exampleGerman: [
                    { text: "Wann", case: "none" },
                    { text: " kann", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " die Dokumente", case: "akkusativ" },
                    { text: " abholen", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "When can I pick up the documents?",
                clozeParts: ["", " kann ich die Dokumente abholen?"],
                clozeAnswers: ["Wann"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-021"),
                wordType: "pronoun",
                german: "welcher",
                english: "which",
                exampleGerman: [
                    { text: "Welches Formular", case: "akkusativ" },
                    { text: " brauche", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " für die Anmeldung", case: "akkusativ" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Which form do I need for registration?",
                clozeParts: ["", " Formular brauche ich für die Anmeldung?"],
                clozeAnswers: ["Welches"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-022"),
                wordType: "pronoun",
                german: "dieser",
                english: "this",
                exampleGerman: [
                    { text: "Diese Unterlagen", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " sehr wichtig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "These documents are very important.",
                clozeParts: ["", " Unterlagen sind sehr wichtig."],
                clozeAnswers: ["Diese"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-023"),
                wordType: "pronoun",
                german: "jeder",
                english: "every / each",
                exampleGerman: [
                    { text: "Jede Person", case: "nominativ" },
                    { text: " bekommt", case: "verb" },
                    { text: " eine Nummer", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Each person gets a number.",
                clozeParts: ["", " Person bekommt eine Nummer."],
                clozeAnswers: ["Jede"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-024"),
                wordType: "pronoun",
                german: "alle",
                english: "all / everyone",
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " müssen", case: "verb" },
                    { text: " einen Ausweis", case: "akkusativ" },
                    { text: " vorzeigen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone must show an ID.",
                clozeParts: ["", " müssen einen Ausweis vorzeigen."],
                clozeAnswers: ["Alle"]
            } as Pronoun,
            {
                id: createWordId("a2-01-pron-025"),
                wordType: "adjective",
                german: "geehrt",
                english: "honored / dear (formal)",
                exampleGerman: [
                    { text: "Sehr geehrte", case: "none" },
                    { text: " Damen und Herren", case: "nominativ" },
                    { text: ",", case: "none" }
                ],
                exampleEnglish: "Dear Ladies and Gentlemen,",
                clozeParts: ["Sehr ", "e Damen und Herren,"],
                clozeAnswers: ["geehrt"]
            } as Adjective
        ]
    }
});