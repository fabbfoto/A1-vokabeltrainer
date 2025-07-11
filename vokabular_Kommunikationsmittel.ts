// packages/trainer-themen/vokabular_kommunikationsmittel.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_kommunikationsmittel.js

import type {VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary.ts';
import {createWordId, createVocabulary } from './shared/types/vocabulary.ts';

export const vokabularKommunikationsmittel: VocabularyStructure = createVocabulary({"Kommunikationsmittel": {

        // --- KATEGORIE 1: Schriftliche Kommunikation (6 Wörter) ---
        "Schriftliche Kommunikation": [
            {
                id: createWordId("kommunikation-schriftlich-001"),
                wordType: "noun",
                german: "E-Mail",
                article: "die",
                plural: "E-Mails",
                english: "email",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-schriftliche-kommuni-001"), text: "Danke", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-003"), text: "für", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-005"), text: "deine E-Mail", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-006"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Thank you for your email.",
                clozeParts: ["Danke für deine ", "."],
                clozeAnswers: ["E-Mail"]
            } as Noun,
            {id: createWordId("kommunikation-schriftlich-002"),
                wordType: "verb",
                german: "mailen",
                english: "to email", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gemailt",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-schriftliche-kommuni-007"), I: "maile", you_informal: "mailst", he: "mailt", we: "mailen", you_pl: "mailt", they: "mailen" },
                imperative: {id: createWordId("kommunikationsmittel-schriftliche-kommuni-008"), you_informal: "Maile!", you_pl: "Mailt!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-009"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-011"), text: "maile", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-013"), text: "dir", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-015"), text: "die Fotos", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-017"), text: "morgen", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I will email you the photos tomorrow.",
                clozeParts: ["Ich ", " dir die Fotos morgen."],
                clozeAnswers: ["maile"]
            } as Verb,
            {id: createWordId("kommunikation-schriftlich-003"),
                wordType: "noun",
                german: "Mailbox",
                article: "die",
                plural: "Mailboxen",
                english: "mailbox",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-schriftliche-kommuni-019"), text: "In", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-021"), text: "meiner Mailbox", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-023"), text: "sind", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-025"), text: "drei neue Nachrichten", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-026"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There are three new messages in my mailbox.",
                clozeParts: ["In meiner ", " sind drei neue Nachrichten."],
                clozeAnswers: ["Mailbox"]
            } as Noun,
            {id: createWordId("kommunikation-schriftlich-004"),
                wordType: "noun",
                german: "Brief",
                article: "der",
                plural: "Briefe",
                english: "letter",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-schriftliche-kommuni-027"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-029"), text: "bekommt", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-031"), text: "immer", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-033"), text: "viele Briefe", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-034"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She always receives many letters.",
                clozeParts: ["Sie bekommt immer viele ", "."],
                clozeAnswers: ["Briefe"]
            } as Noun,
            {id: createWordId("kommunikation-schriftlich-005"),
                wordType: "noun",
                german: "Postkarte",
                article: "die",
                plural: "Postkarten",
                english: "postcard",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-schriftliche-kommuni-035"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-037"), text: "schreiben", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-039"), text: "ihm", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-041"), text: "eine Postkarte", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-042"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are writing him a postcard.",
                clozeParts: ["Wir schreiben ihm eine ", "."],
                clozeAnswers: ["Postkarte"]
            } as Noun,
            {id: createWordId("kommunikation-schriftlich-006"),
                wordType: "noun",
                german: "Nachricht",
                article: "die",
                plural: "Nachrichten",
                english: "message",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-schriftliche-kommuni-043"), text: "Du", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-045"), text: "hörst", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-047"), text: "die Nachricht", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-049"), text: "noch einmal", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-schriftliche-kommuni-050"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "You hear the message once more.",
                clozeParts: ["Du hörst die ", " noch einmal."],
                clozeAnswers: ["Nachricht"]
            } as Noun
        ],

        // --- KATEGORIE 2: Telefon (7 Wörter) ---
        "Telefon": [
            {id: createWordId("kommunikation-telefon-001"),
                wordType: "noun",
                german: "Handy",
                article: "das",
                plural: "Handys",
                english: "mobile phone",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-telefon-001"), text: "Du", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-003"), text: "kannst", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-005"), text: "mit dem Handy", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-007"), text: "telefonieren", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-008"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "You can make phone calls with the mobile phone.",
                clozeParts: ["Du kannst mit dem ", " telefonieren."],
                clozeAnswers: ["Handy"]
            } as Noun,
            {id: createWordId("kommunikation-telefon-002"),
                wordType: "noun",
                german: "Telefon",
                article: "das",
                plural: "Telefone",
                english: "telephone",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-telefon-009"), text: "Das Telefon", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-010"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-011"), text: "klingelt", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-012"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The telephone is ringing.",
                clozeParts: ["Das ", " klingelt."],
                clozeAnswers: ["Telefon"]
            } as Noun,
            {id: createWordId("kommunikation-telefon-003"),
                wordType: "verb",
                german: "telefonieren",
                english: "to make a phone call", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "telefoniert",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-telefon-013"), I: "telefoniere", you_informal: "telefonierst", he: "telefoniert", we: "telefonieren", you_pl: "telefoniert", they: "telefonieren" },
                imperative: {id: createWordId("kommunikationsmittel-telefon-014"), you_informal: "Telefonier!", you_pl: "Telefoniert!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-telefon-015"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-017"), text: "telefoniere", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-019"), text: "oft", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-021"), text: "mit meiner Freundin", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-023"), text: "in Frankfurt", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-024"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I often make phone calls with my friend in Frankfurt.",
                clozeParts: ["Ich ", " oft mit meiner Freundin in Frankfurt."],
                clozeAnswers: ["telefoniere"]
            } as Verb,
            {id: createWordId("kommunikation-telefon-004"),
                wordType: "verb",
                german: "anrufen",
                english: "to call", separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "angerufen",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-telefon-025"), I: "rufe an", you_informal: "rufst an", he: "ruft an", we: "rufen an", you_pl: "ruft an", they: "rufen an" },
                imperative: {id: createWordId("kommunikationsmittel-telefon-026"), you_informal: "Ruf an!", you_pl: "Ruft an!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-telefon-027"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-029"), text: "rufe", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-031"), text: "dich", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-033"), text: "morgen", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-035"), text: "an", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-036"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I will call you tomorrow.",
                clozeParts: ["Ich ", " dich morgen ", "."],
                clozeAnswers: ["rufe", "an"]
            } as Verb,
            {id: createWordId("kommunikation-telefon-005"),
                wordType: "noun",
                german: "Anruf",
                article: "der",
                plural: "Anrufe",
                english: "call",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-telefon-037"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-039"), text: "warte", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-041"), text: "dann", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-043"), text: "auf", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-044"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-045"), text: "deinen Anruf", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-047"), text: "- okay?", case: "none" } as CaseElement
                ],
                exampleEnglish: "I'll wait for your call then - okay?",
                clozeParts: ["Ich warte dann auf deinen ", " - okay?"],
                clozeAnswers: ["Anruf"]
            } as Noun,
            {id: createWordId("kommunikation-telefon-006"),
                wordType: "noun",
                german: "Anrufbeantworter",
                article: "der",
                plural: "Anrufbeantworter",
                english: "answering machine",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-telefon-048"), text: "Sind", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-049"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-050"), text: "Nachrichten", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-051"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-052"), text: "auf dem Anrufbeantworter", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-053"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Are there messages on the answering machine?",
                clozeParts: ["Sind Nachrichten auf dem ", "?"],
                clozeAnswers: ["Anrufbeantworter"]
            } as Noun,
            {id: createWordId("kommunikation-telefon-007"),
                wordType: "noun",
                german: "Telefonnummer",
                article: "die",
                plural: "Telefonnummern",
                english: "phone number",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-telefon-054"), text: "Bitte", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-055"), text: ", ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-056"), text: "sag", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-057"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-058"), text: "mir", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-059"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-060"), text: "deine Telefonnummer", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-telefon-061"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please tell me your phone number.",
                clozeParts: ["Bitte, sag mir deine ", "."],
                clozeAnswers: ["Telefonnummer"]
            } as Noun
        ],

        // --- KATEGORIE 3: Internet (9 Wörter) ---
        "Internet": [
            {id: createWordId("kommunikation-internet-001"),
                wordType: "noun",
                german: "Internet",
                article: "das",
                plural: null,
                english: "internet",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-internet-001"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-002"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-003"), text: "suchen", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-005"), text: "die Informationen", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-007"), text: "im Internet", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-008"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are looking for the information on the internet.",
                clozeParts: ["Wir suchen die Informationen im ", "."],
                clozeAnswers: ["Internet"]
            } as Noun,
            {id: createWordId("kommunikation-internet-002"),
                wordType: "verb",
                german: "googeln",
                english: "to google", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegoogelt",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-internet-009"), I: "google", you_informal: "googlest", he: "googelt", we: "googeln", you_pl: "googelt", they: "googeln" },
                imperative: {id: createWordId("kommunikationsmittel-internet-010"), you_informal: "Google!", you_pl: "Googelt!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-internet-011"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-013"), text: "google", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-014"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-015"), text: "den Namen", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-017"), text: "der Schauspielerin", case: "genitiv" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-018"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am googling the actress's name.",
                clozeParts: ["Ich ", " den Namen der Schauspielerin."],
                clozeAnswers: ["google"]
            } as Verb,
            {id: createWordId("kommunikation-internet-003"),
                wordType: "noun",
                german: "Homepage",
                article: "die",
                plural: "Homepages",
                english: "homepage",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-internet-019"), text: "Die Homepage", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-021"), text: "der Schule", case: "genitiv" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-022"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-023"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-024"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-025"), text: "sehr interessant", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-026"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The school's homepage is very interesting.",
                clozeParts: ["Die ", " der Schule ist sehr interessant."],
                clozeAnswers: ["Homepage"]
            } as Noun,
            {id: createWordId("kommunikation-internet-004"),
                wordType: "noun",
                german: "Link",
                article: "der",
                plural: "Links",
                english: "link",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-internet-027"), text: "Kannst", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-029"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-031"), text: "mir", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-032"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-033"), text: "den Link", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-034"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-035"), text: "schicken", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-036"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you send me the link?",
                clozeParts: ["Kannst du mir den ", " schicken?"],
                clozeAnswers: ["Link"]
            } as Noun,
            {id: createWordId("kommunikation-internet-005"),
                wordType: "adjective",
                german: "online",
                english: "online",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-internet-037"), text: "Meine Freundin", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-039"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-041"), text: "gerade", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-042"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-043"), text: "online", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-044"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My friend is online right now.",
                clozeParts: ["Meine Freundin ist gerade ", "."],
                clozeAnswers: ["online"]
            } as Adjective,
            {id: createWordId("kommunikation-internet-006"),
                wordType: "verb",
                german: "surfen",
                english: "to surf (the internet)", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesurft",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-internet-045"), I: "surfe", you_informal: "surfst", he: "surft", we: "surfen", you_pl: "surft", they: "surfen" },
                imperative: {id: createWordId("kommunikationsmittel-internet-046"), you_informal: "Surf!", you_pl: "Surft!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-internet-047"), text: "Am Abend", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-049"), text: "surfe", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-050"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-051"), text: "ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-052"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-053"), text: "gern", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-055"), text: "im Internet", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-056"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "In the evening I like to surf the internet.",
                clozeParts: ["Am Abend ", " ich gern im Internet."],
                clozeAnswers: ["surfe"]
            } as Verb,
            {id: createWordId("kommunikation-internet-007"),
                wordType: "noun",
                german: "Website",
                article: "die",
                plural: "Websites",
                english: "website",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-internet-057"), text: "Die Website", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-059"), text: "ist", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-060"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-061"), text: "sehr schön", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-062"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The website is very nice.",
                clozeParts: ["Die ", " ist sehr schön."],
                clozeAnswers: ["Website"]
            } as Noun,
            {id: createWordId("kommunikation-internet-008"),
                wordType: "verb",
                german: "chatten",
                english: "to chat", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gechattet",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-internet-063"), I: "chatte", you_informal: "chattest", he: "chattet", we: "chatten", you_pl: "chattet", they: "chatten" },
                imperative: {id: createWordId("kommunikationsmittel-internet-064"), you_informal: "Chatt!", you_pl: "Chattet!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-internet-065"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-067"), text: "chatte", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-068"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-069"), text: "gern", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-071"), text: "mit Freunden", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-072"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I like to chat with friends.",
                clozeParts: ["Ich ", " gern mit Freunden."],
                clozeAnswers: ["chatte"]
            } as Verb,
            {id: createWordId("kommunikation-internet-009"),
                wordType: "noun",
                german: "Chat",
                article: "der",
                plural: "Chats",
                english: "chat",
                exampleGerman: [
                    {
    id: createWordId("kommunikationsmittel-internet-073"), text: "Der Chat", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-074"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-075"), text: "war", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-077"), text: "interessant", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-internet-078"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The chat was interesting.",
                clozeParts: ["Der ", " war interessant."],
                clozeAnswers: ["Chat"]
            } as Noun
        ],

        // --- KATEGORIE 4: Verben der Kommunikation (10 Wörter) ---
        "Verben der Kommunikation": [
            {id: createWordId("kommunikation-verben-001"),
                wordType: "verb",
                german: "sprechen",
                english: "to speak", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesprochen",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-verben-der-kommunika-001"), I: "spreche", you_informal: "sprichst", he: "spricht", we: "sprechen", you_pl: "sprecht", they: "sprechen" },
                imperative: {id: createWordId("kommunikationsmittel-verben-der-kommunika-002"), you_informal: "Sprich!", you_pl: "Sprecht!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-003"), text: "Sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-004"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-005"), text: "spricht", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-006"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-007"), text: "mit dem Lehrer", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-008"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She is speaking with the teacher.",
                clozeParts: ["Sie ", " mit dem Lehrer."],
                clozeAnswers: ["spricht"]
            } as Verb,
            {id: createWordId("kommunikation-verben-002"),
                wordType: "verb",
                german: "sagen",
                english: "to say", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesagt",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-verben-der-kommunika-009"), I: "sage", you_informal: "sagst", he: "sagt", we: "sagen", you_pl: "sagt", they: "sagen" },
                imperative: {id: createWordId("kommunikationsmittel-verben-der-kommunika-010"), you_informal: "Sag!", you_pl: "Sagt!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-011"), text: "Eva", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-012"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-013"), text: "sagt", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-014"), text: ", ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-015"), text: "sie", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-016"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-017"), text: "kommt", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-018"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-019"), text: "heute", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-020"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-021"), text: "nicht", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-022"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Eva says she is not coming today.",
                clozeParts: ["Eva ", ", sie kommt heute nicht."],
                clozeAnswers: ["sagt"]
            } as Verb,
            {id: createWordId("kommunikation-verben-003"),
                wordType: "verb",
                german: "erzählen",
                english: "to tell / to narrate", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "erzählt",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-verben-der-kommunika-023"), I: "erzähle", you_informal: "erzählst", he: "erzählt", we: "erzählen", you_pl: "erzählt", they: "erzählen" },
                imperative: {id: createWordId("kommunikationsmittel-verben-der-kommunika-024"), you_informal: "Erzähl!", you_pl: "Erzählt!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-025"), text: "Kannst", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-026"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-027"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-028"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-029"), text: "die Geschichte", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-030"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-031"), text: "erzählen", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-032"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you tell the story?",
                clozeParts: ["Kannst du die Geschichte ", "?"],
                clozeAnswers: ["erzählen"]
            } as Verb,
            {id: createWordId("kommunikation-verben-004"),
                wordType: "verb",
                german: "hören",
                english: "to hear / to listen", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gehört",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-verben-der-kommunika-033"), I: "höre", you_informal: "hörst", he: "hört", we: "hören", you_pl: "hört", they: "hören" },
                imperative: {id: createWordId("kommunikationsmittel-verben-der-kommunika-034"), you_informal: "Hör!", you_pl: "Hört!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-035"), text: "Hörst", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-036"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-037"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-038"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-039"), text: "gern", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-040"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-041"), text: "Musik", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-042"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Do you like to listen to music?",
                clozeParts: ["", " du gern Musik?"],
                clozeAnswers: ["Hörst"]
            } as Verb,
            {id: createWordId("kommunikation-verben-005"),
                wordType: "verb",
                german: "zuhören",
                english: "to listen (to)", separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "zugehört",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-verben-der-kommunika-043"), I: "höre zu", you_informal: "hörst zu", he: "hört zu", we: "hören zu", you_pl: "hört zu", they: "hören zu" },
                imperative: {id: createWordId("kommunikationsmittel-verben-der-kommunika-044"), you_informal: "Hör zu!", you_pl: "Hört zu!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-045"), text: "Hör", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-046"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-047"), text: "bitte", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-048"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-049"), text: "zu", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-050"), text: "!", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please listen!",
                clozeParts: ["", " bitte ", "!"],
                clozeAnswers: ["Hör", "zu"]
            } as Verb,
            {id: createWordId("kommunikation-verben-006"),
                wordType: "verb",
                german: "senden",
                english: "to send", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesendet",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-verben-der-kommunika-051"), I: "sende", you_informal: "sendest", he: "sendet", we: "senden", you_pl: "sendet", they: "senden" },
                imperative: {id: createWordId("kommunikationsmittel-verben-der-kommunika-052"), you_informal: "Sende!", you_pl: "Sendet!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-053"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-054"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-055"), text: "sende", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-056"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-057"), text: "dir", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-058"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-059"), text: "eine Nachricht", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-060"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am sending you a message.",
                clozeParts: ["Ich ", " dir eine Nachricht."],
                clozeAnswers: ["sende"]
            } as Verb,
            {id: createWordId("kommunikation-verben-007"),
                wordType: "verb",
                german: "schicken",
                english: "to send", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschickt",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-verben-der-kommunika-061"), I: "schicke", you_informal: "schickst", he: "schickt", we: "schicken", you_pl: "schickt", they: "schicken" },
                imperative: {id: createWordId("kommunikationsmittel-verben-der-kommunika-062"), you_informal: "Schick!", you_pl: "Schickt!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-063"), text: "Wir", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-064"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-065"), text: "können", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-066"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-067"), text: "unseren Freunden", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-068"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-069"), text: "eine Karte", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-070"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-071"), text: "schicken", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-072"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We can send our friends a card.",
                clozeParts: ["Wir können unseren Freunden eine Karte ", "."],
                clozeAnswers: ["schicken"]
            } as Verb,
            {id: createWordId("kommunikation-verben-008"),
                wordType: "verb",
                german: "bekommen",
                english: "to receive / to get", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bekommen",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-verben-der-kommunika-073"), I: "bekomme", you_informal: "bekommst", he: "bekommt", we: "bekommen", you_pl: "bekommt", they: "bekommen" },
                imperative: {id: createWordId("kommunikationsmittel-verben-der-kommunika-074"), you_informal: "Bekomm!", you_pl: "Bekommt!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-075"), text: "Was", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-076"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-077"), text: "bekommst", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-078"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-079"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-080"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-081"), text: "zum Geburtstag", case: "dativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-082"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "What are you getting for your birthday?",
                clozeParts: ["Was ", " du zum Geburtstag?"],
                clozeAnswers: ["bekommst"]
            } as Verb,
            {id: createWordId("kommunikation-verben-009"),
                wordType: "verb",
                german: "empfangen",
                english: "to receive", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "empfangen",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-verben-der-kommunika-083"), I: "empfange", you_informal: "empfängst", he: "empfängt", we: "empfangen", you_pl: "empfangt", they: "empfangen" },
                imperative: {id: createWordId("kommunikationsmittel-verben-der-kommunika-084"), you_informal: "Empfang!", you_pl: "Empfangt!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-085"), text: "Ich", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-086"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-087"), text: "empfange", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-088"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-089"), text: "viele E-Mails", case: "akkusativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-090"), text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I receive many emails.",
                clozeParts: ["Ich ", " viele E-Mails."],
                clozeAnswers: ["empfange"]
            } as Verb,
            {id: createWordId("kommunikation-verben-010"),
                wordType: "verb",
                german: "antworten",
                english: "to answer / to reply", separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geantwortet",
                presentConjugation: {
    id: createWordId("kommunikationsmittel-verben-der-kommunika-091"), I: "antworte", you_informal: "antwortest", he: "antwortet", we: "antworten", you_pl: "antwortet", they: "antworten" },
                imperative: {id: createWordId("kommunikationsmittel-verben-der-kommunika-092"), you_informal: "Antworte!", you_pl: "Antwortet!" },
                exampleGerman: [
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-093"), text: "Warum", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-094"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-095"), text: "antwortest", case: "verb" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-096"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-097"), text: "du", case: "nominativ" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-098"), text: " ", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-099"), text: "nicht", case: "none" } as CaseElement,
                    {id: createWordId("kommunikationsmittel-verben-der-kommunika-100"), text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Why don't you answer?",
                clozeParts: ["Warum ", " du nicht?"],
                clozeAnswers: ["antwortest"]
            } as Verb
        ]
    }
});