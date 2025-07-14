// packages/trainer-themen/vokabular_kommunikationsmittel.ts
// VOLLSTÄNDIGE TypeScript Migration von vokabular_kommunikationsmittel.js

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from './shared/types/vocabulary';
import { createWordId, createVocabulary } from './shared/types/vocabulary';

export const vokabularKommunikationsmittel: VocabularyStructure = createVocabulary({
    "Kommunikationsmittel": {

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
                    { text: "Danke", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "für", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "deine E-Mail", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Thank you for your email.",
                clozeParts: ["Danke für deine ", "."],
                clozeAnswers: ["E-Mail"]
            } as Noun,
            {
                id: createWordId("kommunikation-schriftlich-002"),
                wordType: "verb",
                german: "mailen",
                english: "to email",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gemailt",
                presentConjugation: { ich: "maile", du: "mailst", er: "mailt", wir: "mailen", ihr: "mailt", sie: "mailen" },
                imperative: { du: "Maile!", ihr: "Mailt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "maile", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dir", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Fotos", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "morgen", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I will email you the photos tomorrow.",
                clozeParts: ["Ich ", " dir die Fotos morgen."],
                clozeAnswers: ["maile"]
            } as Verb,
            {
                id: createWordId("kommunikation-schriftlich-003"),
                wordType: "noun",
                german: "Mailbox",
                article: "die",
                plural: "Mailboxen",
                english: "mailbox",
                exampleGerman: [
                    { text: "In", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "meiner Mailbox", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "drei neue Nachrichten", case: "nominativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "There are three new messages in my mailbox.",
                clozeParts: ["In meiner ", " sind drei neue Nachrichten."],
                clozeAnswers: ["Mailbox"]
            } as Noun,
            {
                id: createWordId("kommunikation-schriftlich-004"),
                wordType: "noun",
                german: "Brief",
                article: "der",
                plural: "Briefe",
                english: "letter",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bekommt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "immer", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "viele Briefe", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She always receives many letters.",
                clozeParts: ["Sie bekommt immer viele ", "."],
                clozeAnswers: ["Briefe"]
            } as Noun,
            {
                id: createWordId("kommunikation-schriftlich-005"),
                wordType: "noun",
                german: "Postkarte",
                article: "die",
                plural: "Postkarten",
                english: "postcard",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schreiben", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ihm", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Postkarte", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are writing him a postcard.",
                clozeParts: ["Wir schreiben ihm eine ", "."],
                clozeAnswers: ["Postkarte"]
            } as Noun,
            {
                id: createWordId("kommunikation-schriftlich-006"),
                wordType: "noun",
                german: "Nachricht",
                article: "die",
                plural: "Nachrichten",
                english: "message",
                exampleGerman: [
                    { text: "Du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "hörst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Nachricht", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "noch einmal", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "You hear the message once more.",
                clozeParts: ["Du hörst die ", " noch einmal."],
                clozeAnswers: ["Nachricht"]
            } as Noun
        ],

        // --- KATEGORIE 2: Telefon (7 Wörter) ---
        "Telefon": [
            {
                id: createWordId("kommunikation-telefon-001"),
                wordType: "noun",
                german: "Handy",
                article: "das",
                plural: "Handys",
                english: "mobile phone",
                exampleGerman: [
                    { text: "Du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kannst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit dem Handy", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "telefonieren", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "You can make phone calls with the mobile phone.",
                clozeParts: ["Du kannst mit dem ", " telefonieren."],
                clozeAnswers: ["Handy"]
            } as Noun,
            {
                id: createWordId("kommunikation-telefon-002"),
                wordType: "noun",
                german: "Telefon",
                article: "das",
                plural: "Telefone",
                english: "telephone",
                exampleGerman: [
                    { text: "Das Telefon", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "klingelt", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The telephone is ringing.",
                clozeParts: ["Das ", " klingelt."],
                clozeAnswers: ["Telefon"]
            } as Noun,
            {
                id: createWordId("kommunikation-telefon-003"),
                wordType: "verb",
                german: "telefonieren",
                english: "to make a phone call",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "telefoniert",
                presentConjugation: { ich: "telefoniere", du: "telefonierst", er: "telefoniert", wir: "telefonieren", ihr: "telefoniert", sie: "telefonieren" },
                imperative: { du: "Telefonier!", ihr: "Telefoniert!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "telefoniere", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "oft", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit meiner Freundin", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "in Frankfurt", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I often make phone calls with my friend in Frankfurt.",
                clozeParts: ["Ich ", " oft mit meiner Freundin in Frankfurt."],
                clozeAnswers: ["telefoniere"]
            } as Verb,
            {
                id: createWordId("kommunikation-telefon-004"),
                wordType: "verb",
                german: "anrufen",
                english: "to call",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "angerufen",
                presentConjugation: { ich: "rufe an", du: "rufst an", er: "ruft an", wir: "rufen an", ihr: "ruft an", sie: "rufen an" },
                imperative: { du: "Ruf an!", ihr: "Ruft an!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "rufe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dich", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "morgen", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "an", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I will call you tomorrow.",
                clozeParts: ["Ich ", " dich morgen ", "."],
                clozeAnswers: ["rufe", "an"]
            } as Verb,
            {
                id: createWordId("kommunikation-telefon-005"),
                wordType: "noun",
                german: "Anruf",
                article: "der",
                plural: "Anrufe",
                english: "call",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "warte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dann", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auf", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "deinen Anruf", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "- okay?", case: "none" } as CaseElement
                ],
                exampleEnglish: "I'll wait for your call then - okay?",
                clozeParts: ["Ich warte dann auf deinen ", " - okay?"],
                clozeAnswers: ["Anruf"]
            } as Noun,
            {
                id: createWordId("kommunikation-telefon-006"),
                wordType: "noun",
                german: "Anrufbeantworter",
                article: "der",
                plural: "Anrufbeantworter",
                english: "answering machine",
                exampleGerman: [
                    { text: "Sind", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Nachrichten", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "auf dem Anrufbeantworter", case: "dativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Are there messages on the answering machine?",
                clozeParts: ["Sind Nachrichten auf dem ", "?"],
                clozeAnswers: ["Anrufbeantworter"]
            } as Noun,
            {
                id: createWordId("kommunikation-telefon-007"),
                wordType: "noun",
                german: "Telefonnummer",
                article: "die",
                plural: "Telefonnummern",
                english: "phone number",
                exampleGerman: [
                    { text: "Bitte", case: "none" } as CaseElement,
                    { text: ", ", case: "none" } as CaseElement,
                    { text: "sag", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mir", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "deine Telefonnummer", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please tell me your phone number.",
                clozeParts: ["Bitte, sag mir deine ", "."],
                clozeAnswers: ["Telefonnummer"]
            } as Noun
        ],

        // --- KATEGORIE 3: Internet (9 Wörter) ---
        "Internet": [
            {
                id: createWordId("kommunikation-internet-001"),
                wordType: "noun",
                german: "Internet",
                article: "das",
                plural: null,
                english: "internet",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "suchen", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Informationen", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Internet", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We are looking for the information on the internet.",
                clozeParts: ["Wir suchen die Informationen im ", "."],
                clozeAnswers: ["Internet"]
            } as Noun,
            {
                id: createWordId("kommunikation-internet-002"),
                wordType: "verb",
                german: "googeln",
                english: "to google",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gegoogelt",
                presentConjugation: { ich: "google", du: "googlest", er: "googelt", wir: "googeln", ihr: "googelt", sie: "googeln" },
                imperative: { du: "Google!", ihr: "Googelt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "google", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "den Namen", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "der Schauspielerin", case: "genitiv" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am googling the actress's name.",
                clozeParts: ["Ich ", " den Namen der Schauspielerin."],
                clozeAnswers: ["google"]
            } as Verb,
            {
                id: createWordId("kommunikation-internet-003"),
                wordType: "noun",
                german: "Homepage",
                article: "die",
                plural: "Homepages",
                english: "homepage",
                exampleGerman: [
                    { text: "Die Homepage", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "der Schule", case: "genitiv" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sehr interessant", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The school's homepage is very interesting.",
                clozeParts: ["Die ", " der Schule ist sehr interessant."],
                clozeAnswers: ["Homepage"]
            } as Noun,
            {
                id: createWordId("kommunikation-internet-004"),
                wordType: "noun",
                german: "Link",
                article: "der",
                plural: "Links",
                english: "link",
                exampleGerman: [
                    { text: "Kannst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mir", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "den Link", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schicken", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you send me the link?",
                clozeParts: ["Kannst du mir den ", " schicken?"],
                clozeAnswers: ["Link"]
            } as Noun,
            {
                id: createWordId("kommunikation-internet-005"),
                wordType: "adjective",
                german: "online",
                english: "online",
                exampleGerman: [
                    { text: "Meine Freundin", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gerade", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "online", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "My friend is online right now.",
                clozeParts: ["Meine Freundin ist gerade ", "."],
                clozeAnswers: ["online"]
            } as Adjective,
            {
                id: createWordId("kommunikation-internet-006"),
                wordType: "verb",
                german: "surfen",
                english: "to surf (the internet)",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesurft",
                presentConjugation: { ich: "surfe", du: "surfst", er: "surft", wir: "surfen", ihr: "surft", sie: "surfen" },
                imperative: { du: "Surf!", ihr: "Surft!" },
                exampleGerman: [
                    { text: "Am Abend", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "surfe", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gern", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "im Internet", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "In the evening I like to surf the internet.",
                clozeParts: ["Am Abend ", " ich gern im Internet."],
                clozeAnswers: ["surfe"]
            } as Verb,
            {
                id: createWordId("kommunikation-internet-007"),
                wordType: "noun",
                german: "Website",
                article: "die",
                plural: "Websites",
                english: "website",
                exampleGerman: [
                    { text: "Die Website", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "ist", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sehr schön", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The website is very nice.",
                clozeParts: ["Die ", " ist sehr schön."],
                clozeAnswers: ["Website"]
            } as Noun,
            {
                id: createWordId("kommunikation-internet-008"),
                wordType: "verb",
                german: "chatten",
                english: "to chat",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gechattet",
                presentConjugation: { ich: "chatte", du: "chattest", er: "chattet", wir: "chatten", ihr: "chattet", sie: "chatten" },
                imperative: { du: "Chatt!", ihr: "Chattet!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "chatte", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gern", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit Freunden", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I like to chat with friends.",
                clozeParts: ["Ich ", " gern mit Freunden."],
                clozeAnswers: ["chatte"]
            } as Verb,
            {
                id: createWordId("kommunikation-internet-009"),
                wordType: "noun",
                german: "Chat",
                article: "der",
                plural: "Chats",
                english: "chat",
                exampleGerman: [
                    { text: "Der Chat", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "war", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "interessant", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "The chat was interesting.",
                clozeParts: ["Der ", " war interessant."],
                clozeAnswers: ["Chat"]
            } as Noun
        ],

        // --- KATEGORIE 4: Verben der Kommunikation (10 Wörter) ---
        "Verben der Kommunikation": [
            {
                id: createWordId("kommunikation-verben-001"),
                wordType: "verb",
                german: "sprechen",
                english: "to speak",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesprochen",
                presentConjugation: { ich: "spreche", du: "sprichst", er: "spricht", wir: "sprechen", ihr: "sprecht", sie: "sprechen" },
                imperative: { du: "Sprich!", ihr: "Sprecht!" },
                exampleGerman: [
                    { text: "Sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "spricht", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "mit dem Lehrer", case: "dativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "She is speaking with the teacher.",
                clozeParts: ["Sie ", " mit dem Lehrer."],
                clozeAnswers: ["spricht"]
            } as Verb,
            {
                id: createWordId("kommunikation-verben-002"),
                wordType: "verb",
                german: "sagen",
                english: "to say",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesagt",
                presentConjugation: { ich: "sage", du: "sagst", er: "sagt", wir: "sagen", ihr: "sagt", sie: "sagen" },
                imperative: { du: "Sag!", ihr: "Sagt!" },
                exampleGerman: [
                    { text: "Eva", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sagt", case: "verb" } as CaseElement,
                    { text: ", ", case: "none" } as CaseElement,
                    { text: "sie", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "kommt", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "heute", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nicht", case: "none" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "Eva says she is not coming today.",
                clozeParts: ["Eva ", ", sie kommt heute nicht."],
                clozeAnswers: ["sagt"]
            } as Verb,
            {
                id: createWordId("kommunikation-verben-003"),
                wordType: "verb",
                german: "erzählen",
                english: "to tell / to narrate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "erzählt",
                presentConjugation: { ich: "erzähle", du: "erzählst", er: "erzählt", wir: "erzählen", ihr: "erzählt", sie: "erzählen" },
                imperative: { du: "Erzähl!", ihr: "Erzählt!" },
                exampleGerman: [
                    { text: "Kannst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "die Geschichte", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "erzählen", case: "verb" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Can you tell the story?",
                clozeParts: ["Kannst du die Geschichte ", "?"],
                clozeAnswers: ["erzählen"]
            } as Verb,
            {
                id: createWordId("kommunikation-verben-004"),
                wordType: "verb",
                german: "hören",
                english: "to hear / to listen",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gehört",
                presentConjugation: { ich: "höre", du: "hörst", er: "hört", wir: "hören", ihr: "hört", sie: "hören" },
                imperative: { du: "Hör!", ihr: "Hört!" },
                exampleGerman: [
                    { text: "Hörst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "gern", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "Musik", case: "akkusativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Do you like to listen to music?",
                clozeParts: ["", " du gern Musik?"],
                clozeAnswers: ["Hörst"]
            } as Verb,
            {
                id: createWordId("kommunikation-verben-005"),
                wordType: "verb",
                german: "zuhören",
                english: "to listen (to)",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "zugehört",
                presentConjugation: { ich: "höre zu", du: "hörst zu", er: "hört zu", wir: "hören zu", ihr: "hört zu", sie: "hören zu" },
                imperative: { du: "Hör zu!", ihr: "Hört zu!" },
                exampleGerman: [
                    { text: "Hör", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bitte", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zu", case: "verb" } as CaseElement,
                    { text: "!", case: "none" } as CaseElement
                ],
                exampleEnglish: "Please listen!",
                clozeParts: ["", " bitte ", "!"],
                clozeAnswers: ["Hör", "zu"]
            } as Verb,
            {
                id: createWordId("kommunikation-verben-006"),
                wordType: "verb",
                german: "senden",
                english: "to send",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gesendet",
                presentConjugation: { ich: "sende", du: "sendest", er: "sendet", wir: "senden", ihr: "sendet", sie: "senden" },
                imperative: { du: "Sende!", ihr: "Sendet!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "sende", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "dir", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Nachricht", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I am sending you a message.",
                clozeParts: ["Ich ", " dir eine Nachricht."],
                clozeAnswers: ["sende"]
            } as Verb,
            {
                id: createWordId("kommunikation-verben-007"),
                wordType: "verb",
                german: "schicken",
                english: "to send",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geschickt",
                presentConjugation: { ich: "schicke", du: "schickst", er: "schickt", wir: "schicken", ihr: "schickt", sie: "schicken" },
                imperative: { du: "Schick!", ihr: "Schickt!" },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "können", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "unseren Freunden", case: "dativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "eine Karte", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "schicken", case: "verb" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "We can send our friends a card.",
                clozeParts: ["Wir können unseren Freunden eine Karte ", "."],
                clozeAnswers: ["schicken"]
            } as Verb,
            {
                id: createWordId("kommunikation-verben-008"),
                wordType: "verb",
                german: "bekommen",
                english: "to receive / to get",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "bekommen",
                presentConjugation: { ich: "bekomme", du: "bekommst", er: "bekommt", wir: "bekommen", ihr: "bekommt", sie: "bekommen" },
                imperative: { du: "Bekomm!", ihr: "Bekommt!" },
                exampleGerman: [
                    { text: "Was", case: "akkusativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "bekommst", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "zum Geburtstag", case: "dativ" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "What are you getting for your birthday?",
                clozeParts: ["Was ", " du zum Geburtstag?"],
                clozeAnswers: ["bekommst"]
            } as Verb,
            {
                id: createWordId("kommunikation-verben-009"),
                wordType: "verb",
                german: "empfangen",
                english: "to receive",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "empfangen",
                presentConjugation: { ich: "empfange", du: "empfängst", er: "empfängt", wir: "empfangen", ihr: "empfangt", sie: "empfangen" },
                imperative: { du: "Empfang!", ihr: "Empfangt!" },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "empfange", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "viele E-Mails", case: "akkusativ" } as CaseElement,
                    { text: ".", case: "none" } as CaseElement
                ],
                exampleEnglish: "I receive many emails.",
                clozeParts: ["Ich ", " viele E-Mails."],
                clozeAnswers: ["empfange"]
            } as Verb,
            {
                id: createWordId("kommunikation-verben-010"),
                wordType: "verb",
                german: "antworten",
                english: "to answer / to reply",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geantwortet",
                presentConjugation: { ich: "antworte", du: "antwortest", er: "antwortet", wir: "antworten", ihr: "antwortet", sie: "antworten" },
                imperative: { du: "Antworte!", ihr: "Antwortet!" },
                exampleGerman: [
                    { text: "Warum", case: "none" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "antwortest", case: "verb" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "du", case: "nominativ" } as CaseElement,
                    { text: " ", case: "none" } as CaseElement,
                    { text: "nicht", case: "none" } as CaseElement,
                    { text: "?", case: "none" } as CaseElement
                ],
                exampleEnglish: "Why don't you answer?",
                clozeParts: ["Warum ", " du nicht?"],
                clozeAnswers: ["antwortest"]
            } as Verb
        ]
    }
});