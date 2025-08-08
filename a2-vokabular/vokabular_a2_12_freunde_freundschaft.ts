// vokabular_a2_12_freunde_freundschaft.ts
// Thema 12: Freunde und Freundschaft (44 Wörter)
// Kontext: Ein Klassentreffen nach 10 Jahren - alte Freundschaften werden erneuert und neue entstehen
// Storyline: Die Hauptperson organisiert das Treffen, kontaktiert alte Freunde und erlebt einen emotionalen Abend

import type { VocabularyStructure, Noun, Verb, Adjective, Adverb, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_12_freunde_freundschaft: VocabularyStructure = createVocabulary({
    "Freunde und Freundschaft": {
        
        // --- UNTERKAPITEL: Soziale Kontakte (12 Wörter) ---
        // Kontext: Die Hauptperson denkt über ihre Freundschaften nach
        "Soziale Kontakte": [
            {
                id: createWordId("a2-12-sozial-001"),
                wordType: "noun",
                german: "Freund",
                article: "der",
                plural: "Freunde",
                english: "friend (male)",
                exampleGerman: [
                    { text: "Mein bester Freund", case: "nominativ" },
                    { text: " aus der Schulzeit", case: "dativ" },
                    { text: " wohnt", case: "verb" },
                    { text: " jetzt", case: "none" },
                    { text: " in Hamburg", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My best friend from school now lives in Hamburg.",
                clozeParts: ["Mein bester ", " aus der Schulzeit wohnt jetzt in Hamburg."],
                clozeAnswers: ["Freund"]
            } as Noun,
            {
                id: createWordId("a2-12-sozial-002"),
                wordType: "noun",
                german: "Freundin",
                article: "die",
                plural: "Freundinnen",
                english: "friend (female)",
                exampleGerman: [
                    { text: "Mit meiner alten Freundin", case: "dativ" },
                    { text: " hatte", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " zehn Jahre", case: "akkusativ" },
                    { text: " keinen Kontakt", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I had no contact with my old friend for ten years.",
                clozeParts: ["Mit meiner alten ", " hatte ich zehn Jahre keinen Kontakt."],
                clozeAnswers: ["Freundin"]
            } as Noun,
            {
                id: createWordId("a2-12-sozial-003"),
                wordType: "noun",
                german: "Bekannte",
                article: "der/die",
                plural: "Bekannten",
                english: "acquaintance",
                exampleGerman: [
                    { text: "Viele Bekannte", case: "nominativ" },
                    { text: " aus der Schulzeit", case: "dativ" },
                    { text: " sind", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " richtige Freunde", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Many acquaintances from school are real friends today.",
                clozeParts: ["Viele ", " aus der Schulzeit sind heute richtige Freunde."],
                clozeAnswers: ["Bekannte"]
            } as Noun,
            {
                id: createWordId("a2-12-sozial-004"),
                wordType: "adjective",
                german: "bekannt",
                english: "known / familiar",
                exampleGerman: [
                    { text: "Das bekannte Gefühl", case: "nominativ" },
                    { text: " von früher", case: "none" },
                    { text: " kam", case: "verb" },
                    { text: " sofort", case: "none" },
                    { text: " zurück", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The familiar feeling from before came back immediately.",
                clozeParts: ["Das ", " Gefühl von früher kam sofort zurück."],
                clozeAnswers: ["bekannte"]
            } as Adjective,
            {
                id: createWordId("a2-12-sozial-005"),
                wordType: "verb",
                german: "kennen",
                english: "to know",
                separable: false,
                coreForms: {
                    infinitive: "kennen",
                    thirdPerson: "kennt",
                    preterite: "kannte",
                    perfect: "hat gekannt"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " kenne", case: "verb" },
                    { text: " diese Menschen", case: "akkusativ" },
                    { text: " seit zwanzig Jahren", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I've known these people for twenty years.",
                clozeParts: ["Ich ", " diese Menschen seit zwanzig Jahren."],
                clozeAnswers: ["kenne"]
            } as Verb,
            {
                id: createWordId("a2-12-sozial-006"),
                wordType: "verb",
                german: "kennenlernen",
                english: "to get to know",
                separable: false,
                coreForms: {
                    infinitive: "kennenlernen",
                    thirdPerson: "lernt kennen",
                    preterite: "lernte kennen",
                    perfect: "hat kennengelernt"
                },
                exampleGerman: [
                    { text: "Beim Klassentreffen", case: "dativ" },
                    { text: " konnte", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " auch neue Partner", case: "akkusativ" },
                    { text: " kennenlernen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "At the class reunion I could also meet new partners.",
                clozeParts: ["Beim Klassentreffen konnte ich auch neue Partner ", "."],
                clozeAnswers: ["kennenlernen"]
            } as Verb,
            {
                id: createWordId("a2-12-sozial-007"),
                wordType: "verb",
                german: "treffen",
                english: "to meet",
                separable: false,
                coreForms: {
                    infinitive: "sich treffen",
                    thirdPerson: "trifft sich",
                    preterite: "traf sich",
                    perfect: "hat sich getroffen"
                },
                reflexive: true,
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " treffen", case: "verb" },
                    { text: " uns", case: "akkusativ" },
                    { text: " im alten Schulgebäude", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We're meeting in the old school building.",
                clozeParts: ["Wir ", " uns im alten Schulgebäude."],
                clozeAnswers: ["treffen"]
            } as Verb,
            {
                id: createWordId("a2-12-sozial-008"),
                wordType: "noun",
                german: "Kontakt",
                article: "der",
                plural: "Kontakte",
                english: "contact",
                exampleGerman: [
                    { text: "Der Kontakt", case: "nominativ" },
                    { text: " über Social Media", case: "akkusativ" },
                    { text: " macht", case: "verb" },
                    { text: " vieles", case: "akkusativ" },
                    { text: " einfacher", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Contact through social media makes many things easier.",
                clozeParts: ["Der ", " über Social Media macht vieles einfacher."],
                clozeAnswers: ["Kontakt"]
            } as Noun,
            {
                id: createWordId("a2-12-sozial-009"),
                wordType: "adjective",
                german: "sympathisch",
                english: "likeable / nice",
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " fanden", case: "verb" },
                    { text: " den neuen Freund", case: "akkusativ" },
                    { text: " sehr sympathisch", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone found the new friend very likeable.",
                clozeParts: ["Alle fanden den neuen Freund sehr ", "."],
                clozeAnswers: ["sympathisch"]
            } as Adjective,
            {
                id: createWordId("a2-12-sozial-010"),
                wordType: "adjective",
                german: "nett",
                english: "nice / kind",
                exampleGerman: [
                    { text: "Es", case: "nominativ" },
                    { text: " war", case: "verb" },
                    { text: " nett", case: "none" },
                    { text: " von dir", case: "dativ" },
                    { text: ", das Treffen zu organisieren", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It was nice of you to organize the reunion.",
                clozeParts: ["Es war ", " von dir, das Treffen zu organisieren."],
                clozeAnswers: ["nett"]
            } as Adjective,
            {
                id: createWordId("a2-12-sozial-011"),
                wordType: "adjective",
                german: "freundlich",
                english: "friendly",
                exampleGerman: [
                    { text: "Die freundliche Begrüßung", case: "nominativ" },
                    { text: " nach so langer Zeit", case: "dativ" },
                    { text: " war", case: "verb" },
                    { text: " wunderbar", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The friendly greeting after such a long time was wonderful.",
                clozeParts: ["Die ", " Begrüßung nach so langer Zeit war wunderbar."],
                clozeAnswers: ["freundliche"]
            } as Adjective,
            {
                id: createWordId("a2-12-sozial-012"),
                wordType: "adjective",
                german: "treu",
                english: "loyal / faithful",
                exampleGerman: [
                    { text: "Ein treuer Freund", case: "nominativ" },
                    { text: " bleibt", case: "verb" },
                    { text: " auch", case: "none" },
                    { text: " in schweren Zeiten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "A loyal friend stays even in difficult times.",
                clozeParts: ["Ein ", "er Freund bleibt auch in schweren Zeiten."],
                clozeAnswers: ["treu"]
            } as Adjective
        ],

        // --- UNTERKAPITEL: Gemeinsame Aktivitäten (13 Wörter) ---
        // Kontext: Die Organisation und Durchführung des Klassentreffens
        "Gemeinsame Aktivitäten": [
            {
                id: createWordId("a2-12-aktiv-001"),
                wordType: "verb",
                german: "besuchen",
                english: "to visit",
                separable: false,
                coreForms: {
                    infinitive: "besuchen",
                    thirdPerson: "besucht",
                    preterite: "besuchte",
                    perfect: "hat besucht"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " besuchen", case: "verb" },
                    { text: " zusammen", case: "none" },
                    { text: " unsere alte Schule", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We visit our old school together.",
                clozeParts: ["Wir ", " zusammen unsere alte Schule."],
                clozeAnswers: ["besuchen"]
            } as Verb,
            {
                id: createWordId("a2-12-aktiv-002"),
                wordType: "noun",
                german: "Besuch",
                article: "der",
                plural: "Besuche",
                english: "visit",
                exampleGerman: [
                    { text: "Der Besuch", case: "nominativ" },
                    { text: " im alten Klassenzimmer", case: "dativ" },
                    { text: " weckte", case: "verb" },
                    { text: " viele Erinnerungen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The visit to the old classroom awakened many memories.",
                clozeParts: ["Der ", " im alten Klassenzimmer weckte viele Erinnerungen."],
                clozeAnswers: ["Besuch"]
            } as Noun,
            {
                id: createWordId("a2-12-aktiv-003"),
                wordType: "verb",
                german: "einladen",
                english: "to invite",
                separable: false,
                coreForms: {
                    infinitive: "einladen",
                    thirdPerson: "lädt ein",
                    preterite: "lud ein",
                    perfect: "hat eingeladen"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " lade", case: "verb" },
                    { text: " alle ehemaligen Mitschüler", case: "akkusativ" },
                    { text: " zum Treffen", case: "dativ" },
                    { text: " ein", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I invite all former classmates to the reunion.",
                clozeParts: ["Ich ", " alle ehemaligen Mitschüler zum Treffen ", "."],
                clozeAnswers: ["lade", "ein"]
            } as Verb,
            {
                id: createWordId("a2-12-aktiv-004"),
                wordType: "noun",
                german: "Einladung",
                article: "die",
                plural: "Einladungen",
                english: "invitation",
                exampleGerman: [
                    { text: "Die Einladung", case: "nominativ" },
                    { text: " per E-Mail", case: "none" },
                    { text: " erreichte", case: "verb" },
                    { text: " fast alle", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The invitation by email reached almost everyone.",
                clozeParts: ["Die ", " per E-Mail erreichte fast alle."],
                clozeAnswers: ["Einladung"]
            } as Noun,
            {
                id: createWordId("a2-12-aktiv-005"),
                wordType: "noun",
                german: "Party",
                article: "die",
                plural: "Partys",
                english: "party",
                exampleGerman: [
                    { text: "Nach dem offiziellen Teil", case: "dativ" },
                    { text: " feierten", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " eine große Party", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After the official part, we celebrated a big party.",
                clozeParts: ["Nach dem offiziellen Teil feierten wir eine große ", "."],
                clozeAnswers: ["Party"]
            } as Noun,
            {
                id: createWordId("a2-12-aktiv-006"),
                wordType: "verb",
                german: "feiern",
                english: "to celebrate",
                separable: false,
                coreForms: {
                    infinitive: "feiern",
                    thirdPerson: "feiert",
                    preterite: "feierte",
                    perfect: "hat gefeiert"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " feierten", case: "verb" },
                    { text: " bis in die Nacht", case: "akkusativ" },
                    { text: " wie früher", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We celebrated into the night like in the old days.",
                clozeParts: ["Wir ", " bis in die Nacht wie früher."],
                clozeAnswers: ["feierten"]
            } as Verb,
            {
                id: createWordId("a2-12-aktiv-007"),
                wordType: "adverb",
                german: "zusammen",
                english: "together",
                exampleGerman: [
                    { text: "Zusammen", case: "none" },
                    { text: " sind", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " durch dick und dünn", case: "akkusativ" },
                    { text: " gegangen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Together we went through thick and thin.",
                clozeParts: ["", " sind wir durch dick und dünn gegangen."],
                clozeAnswers: ["Zusammen"]
            } as Adverb,
            {
                id: createWordId("a2-12-aktiv-008"),
                wordType: "noun",
                german: "Team",
                article: "das",
                plural: "Teams",
                english: "team",
                exampleGerman: [
                    { text: "Unser altes Team", case: "nominativ" },
                    { text: " vom Fußball", case: "dativ" },
                    { text: " traf", case: "verb" },
                    { text: " sich", case: "akkusativ" },
                    { text: " komplett wieder", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Our old soccer team met up completely again.",
                clozeParts: ["Unser altes ", " vom Fußball traf sich komplett wieder."],
                clozeAnswers: ["Team"]
            } as Noun,
            {
                id: createWordId("a2-12-aktiv-009"),
                wordType: "noun",
                german: "Gruppe",
                article: "die",
                plural: "Gruppen",
                english: "group",
                exampleGerman: [
                    { text: "In kleinen Gruppen", case: "dativ" },
                    { text: " unterhielten", case: "verb" },
                    { text: " sich", case: "akkusativ" },
                    { text: " die Leute", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "People chatted in small groups.",
                clozeParts: ["In kleinen ", " unterhielten sich die Leute."],
                clozeAnswers: ["Gruppen"]
            } as Noun,
            {
                id: createWordId("a2-12-aktiv-010"),
                wordType: "noun",
                german: "Mannschaft",
                article: "die",
                plural: "Mannschaften",
                english: "team / crew",
                exampleGerman: [
                    { text: "Die ganze Mannschaft", case: "nominativ" },
                    { text: " von damals", case: "none" },
                    { text: " kam", case: "verb" },
                    { text: " zum Treffen", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The whole team from back then came to the reunion.",
                clozeParts: ["Die ganze ", " von damals kam zum Treffen."],
                clozeAnswers: ["Mannschaft"]
            } as Noun,
            {
                id: createWordId("a2-12-aktiv-011"),
                wordType: "verb",
                german: "ausgehen",
                english: "to go out",
                separable: false,
                coreForms: {
                    infinitive: "ausgehen",
                    thirdPerson: "geht aus",
                    preterite: "ging aus",
                    perfect: "ist ausgegangen"
                },
                exampleGerman: [
                    { text: "Nach dem Essen", case: "dativ" },
                    { text: " gingen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " noch", case: "none" },
                    { text: " in eine Bar", case: "akkusativ" },
                    { text: " aus", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After dinner we went out to a bar.",
                clozeParts: ["Nach dem Essen ", " wir noch in eine Bar ", "."],
                clozeAnswers: ["gingen", "aus"]
            } as Verb,
            {
                id: createWordId("a2-12-aktiv-012"),
                wordType: "verb",
                german: "verabreden",
                english: "to arrange to meet",
                separable: false,
                coreForms: {
                    infinitive: "sich verabreden",
                    thirdPerson: "verabredet sich",
                    preterite: "verabredete sich",
                    perfect: "hat sich verabredet"
                },
                reflexive: true,
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " verabredeten", case: "verb" },
                    { text: " uns", case: "akkusativ" },
                    { text: " für nächstes Jahr", case: "akkusativ" },
                    { text: " wieder", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We arranged to meet again next year.",
                clozeParts: ["Wir ", " uns für nächstes Jahr wieder."],
                clozeAnswers: ["verabredeten"]
            } as Verb,
            {
                id: createWordId("a2-12-aktiv-013"),
                wordType: "verb",
                german: "mitkommen",
                english: "to come along",
                separable: false,
                coreForms: {
                    infinitive: "mitkommen",
                    thirdPerson: "kommt mit",
                    preterite: "kam mit",
                    perfect: "ist mitgekommen"
                },
                exampleGerman: [
                    { text: "Kommst", case: "verb" },
                    { text: " du", case: "nominativ" },
                    { text: " auch", case: "none" },
                    { text: " zum Nachttreffen", case: "dativ" },
                    { text: " mit", case: "verb" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Are you coming along to the after-party?",
                clozeParts: ["Kommst du auch zum Nachttreffen ", "?"],
                clozeAnswers: ["mit"]
            } as Verb
        ],

        // --- UNTERKAPITEL: Kommunikation (12 Wörter) ---
        // Kontext: Gespräche und Austausch beim Klassentreffen
        "Kommunikation": [
            {
                id: createWordId("a2-12-komm-001"),
                wordType: "verb",
                german: "sprechen",
                english: "to speak",
                separable: false,
                coreForms: {
                    infinitive: "sprechen",
                    thirdPerson: "spricht",
                    preterite: "sprach",
                    perfect: "hat gesprochen"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " sprachen", case: "verb" },
                    { text: " über alte Zeiten", case: "akkusativ" },
                    { text: " und neue Pläne", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We talked about old times and new plans.",
                clozeParts: ["Wir ", " über alte Zeiten und neue Pläne."],
                clozeAnswers: ["sprachen"]
            } as Verb,
            {
                id: createWordId("a2-12-komm-002"),
                wordType: "verb",
                german: "reden",
                english: "to talk",
                separable: false,
                coreForms: {
                    infinitive: "reden",
                    thirdPerson: "redet",
                    preterite: "redete",
                    perfect: "hat geredet"
                },
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " redeten", case: "verb" },
                    { text: " durcheinander", case: "none" },
                    { text: " vor Aufregung", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone talked at once out of excitement.",
                clozeParts: ["Alle ", " durcheinander vor Aufregung."],
                clozeAnswers: ["redeten"]
            } as Verb,
            {
                id: createWordId("a2-12-komm-003"),
                wordType: "verb",
                german: "erzählen",
                english: "to tell / narrate",
                separable: false,
                coreForms: {
                    infinitive: "erzählen",
                    thirdPerson: "erzählt",
                    preterite: "erzählte",
                    perfect: "hat erzählt"
                },
                exampleGerman: [
                    { text: "Jeder", case: "nominativ" },
                    { text: " erzählte", case: "verb" },
                    { text: " von seinem Leben", case: "dativ" },
                    { text: " nach der Schule", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone told about their life after school.",
                clozeParts: ["Jeder ", " von seinem Leben nach der Schule."],
                clozeAnswers: ["erzählte"]
            } as Verb,
            {
                id: createWordId("a2-12-komm-004"),
                wordType: "verb",
                german: "zuhören",
                english: "to listen",
                separable: false,
                coreForms: {
                    infinitive: "zuhören",
                    thirdPerson: "hört zu",
                    preterite: "hörte zu",
                    perfect: "hat zugehört"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " hörte", case: "verb" },
                    { text: " interessiert", case: "none" },
                    { text: " den Geschichten", case: "dativ" },
                    { text: " zu", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I listened to the stories with interest.",
                clozeParts: ["Ich ", " interessiert den Geschichten ", "."],
                clozeAnswers: ["hörte", "zu"]
            } as Verb,
            {
                id: createWordId("a2-12-komm-005"),
                wordType: "noun",
                german: "Gespräch",
                article: "das",
                plural: "Gespräche",
                english: "conversation",
                exampleGerman: [
                    { text: "Die tiefen Gespräche", case: "nominativ" },
                    { text: " bis spät in die Nacht", case: "akkusativ" },
                    { text: " waren", case: "verb" },
                    { text: " das Beste", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The deep conversations late into the night were the best.",
                clozeParts: ["Die tiefen ", " bis spät in die Nacht waren das Beste."],
                clozeAnswers: ["Gespräche"]
            } as Noun,
            {
                id: createWordId("a2-12-komm-006"),
                wordType: "verb",
                german: "unterhalten",
                english: "to converse / chat",
                separable: false,
                coreForms: {
                    infinitive: "sich unterhalten",
                    thirdPerson: "unterhält sich",
                    preterite: "unterhielt sich",
                    perfect: "hat sich unterhalten"
                },
                reflexive: true,
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " unterhielten", case: "verb" },
                    { text: " uns", case: "akkusativ" },
                    { text: " prächtig", case: "none" },
                    { text: " über die alten Streiche", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We had a wonderful chat about the old pranks.",
                clozeParts: ["Wir ", " uns prächtig über die alten Streiche."],
                clozeAnswers: ["unterhielten"]
            } as Verb,
            {
                id: createWordId("a2-12-komm-007"),
                wordType: "verb",
                german: "anrufen",
                english: "to call",
                separable: false,
                coreForms: {
                    infinitive: "anrufen",
                    thirdPerson: "ruft an",
                    preterite: "rief an",
                    perfect: "hat angerufen"
                },
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " rief", case: "verb" },
                    { text: " alle", case: "akkusativ" },
                    { text: " persönlich", case: "none" },
                    { text: " an", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I called everyone personally.",
                clozeParts: ["Ich ", " alle persönlich ", "."],
                clozeAnswers: ["rief", "an"]
            } as Verb,
            {
                id: createWordId("a2-12-komm-008"),
                wordType: "verb",
                german: "telefonieren",
                english: "to telephone",
                separable: false,
                coreForms: {
                    infinitive: "telefonieren",
                    thirdPerson: "telefoniert",
                    preterite: "telefonierte",
                    perfect: "hat telefoniert"
                },
                exampleGerman: [
                    { text: "Nach dem Treffen", case: "dativ" },
                    { text: " telefonierten", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " noch oft", case: "none" },
                    { text: " miteinander", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "After the reunion we often talked on the phone.",
                clozeParts: ["Nach dem Treffen ", " wir noch oft miteinander."],
                clozeAnswers: ["telefonierten"]
            } as Verb,
            {
                id: createWordId("a2-12-komm-009"),
                wordType: "verb",
                german: "schreiben",
                english: "to write",
                separable: false,
                coreForms: {
                    infinitive: "schreiben",
                    thirdPerson: "schreibt",
                    preterite: "schrieb",
                    perfect: "hat geschrieben"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " schreiben", case: "verb" },
                    { text: " uns", case: "dativ" },
                    { text: " jetzt regelmäßig", case: "none" },
                    { text: " Nachrichten", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We now write messages to each other regularly.",
                clozeParts: ["Wir ", " uns jetzt regelmäßig Nachrichten."],
                clozeAnswers: ["schreiben"]
            } as Verb,
            {
                id: createWordId("a2-12-komm-010"),
                wordType: "noun",
                german: "Nachricht",
                article: "die",
                plural: "Nachrichten",
                english: "message",
                exampleGerman: [
                    { text: "Die erste Nachricht", case: "nominativ" },
                    { text: " nach zehn Jahren", case: "dativ" },
                    { text: " war", case: "verb" },
                    { text: " sehr emotional", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The first message after ten years was very emotional.",
                clozeParts: ["Die erste ", " nach zehn Jahren war sehr emotional."],
                clozeAnswers: ["Nachricht"]
            } as Noun,
            {
                id: createWordId("a2-12-komm-011"),
                wordType: "verb",
                german: "diskutieren",
                english: "to discuss",
                separable: false,
                coreForms: {
                    infinitive: "diskutieren",
                    thirdPerson: "diskutiert",
                    preterite: "diskutierte",
                    perfect: "hat diskutiert"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " diskutierten", case: "verb" },
                    { text: " lebhaft", case: "none" },
                    { text: " über Politik", case: "akkusativ" },
                    { text: " wie früher", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We discussed politics lively like in the old days.",
                clozeParts: ["Wir ", " lebhaft über Politik wie früher."],
                clozeAnswers: ["diskutierten"]
            } as Verb,
            {
                id: createWordId("a2-12-komm-012"),
                wordType: "verb",
                german: "streiten",
                english: "to argue",
                separable: false,
                coreForms: {
                    infinitive: "sich streiten",
                    thirdPerson: "streitet sich",
                    preterite: "stritt sich",
                    perfect: "hat sich gestritten"
                },
                reflexive: true,
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " stritten", case: "verb" },
                    { text: " uns", case: "akkusativ" },
                    { text: " nie ernsthaft", case: "none" },
                    { text: " trotz unterschiedlicher Meinungen", case: "genitiv" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We never argued seriously despite different opinions.",
                clozeParts: ["Wir ", " uns nie ernsthaft trotz unterschiedlicher Meinungen."],
                clozeAnswers: ["stritten"]
            } as Verb
        ],

        // --- UNTERKAPITEL: Gefühle und Beziehungen (7 Wörter) ---
        // Kontext: Die emotionalen Momente des Wiedersehens
        "Gefühle und Beziehungen": [
            {
                id: createWordId("a2-12-gefuehl-001"),
                wordType: "verb",
                german: "freuen",
                english: "to be happy",
                separable: false,
                coreForms: {
                    infinitive: "sich freuen",
                    thirdPerson: "freut sich",
                    preterite: "freute sich",
                    perfect: "hat sich gefreut"
                },
                reflexive: true,
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " freute", case: "verb" },
                    { text: " mich", case: "akkusativ" },
                    { text: " riesig", case: "none" },
                    { text: " über das Wiedersehen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I was hugely happy about the reunion.",
                clozeParts: ["Ich ", " mich riesig über das Wiedersehen."],
                clozeAnswers: ["freute"]
            } as Verb,
            {
                id: createWordId("a2-12-gefuehl-002"),
                wordType: "verb",
                german: "mögen",
                english: "to like",
                separable: false,
                coreForms: {
                    infinitive: "mögen",
                    thirdPerson: "mag",
                    preterite: "mochte",
                    perfect: "hat gemocht"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " mochten", case: "verb" },
                    { text: " uns", case: "akkusativ" },
                    { text: " immer noch", case: "none" },
                    { text: " wie damals", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We still liked each other like back then.",
                clozeParts: ["Wir ", " uns immer noch wie damals."],
                clozeAnswers: ["mochten"]
            } as Verb,
            {
                id: createWordId("a2-12-gefuehl-003"),
                wordType: "verb",
                german: "lieben",
                english: "to love",
                separable: false,
                coreForms: {
                    infinitive: "lieben",
                    thirdPerson: "liebt",
                    preterite: "liebte",
                    perfect: "hat geliebt"
                },
                exampleGerman: [
                    { text: "Diese Menschen", case: "akkusativ" },
                    { text: " zu lieben", case: "verb" },
                    { text: " ist", case: "verb" },
                    { text: " ein Geschenk", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "To love these people is a gift.",
                clozeParts: ["Diese Menschen zu ", " ist ein Geschenk."],
                clozeAnswers: ["lieben"]
            } as Verb,
            {
                id: createWordId("a2-12-gefuehl-004"),
                wordType: "verb",
                german: "ärgern",
                english: "to annoy / get angry",
                separable: false,
                coreForms: {
                    infinitive: "sich ärgern",
                    thirdPerson: "ärgert sich",
                    preterite: "ärgerte sich",
                    perfect: "hat sich geärgert"
                },
                reflexive: true,
                exampleGerman: [
                    { text: "Niemand", case: "nominativ" },
                    { text: " ärgerte", case: "verb" },
                    { text: " sich", case: "akkusativ" },
                    { text: " über alte Konflikte", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Nobody got angry about old conflicts.",
                clozeParts: ["Niemand ", " sich über alte Konflikte."],
                clozeAnswers: ["ärgerte"]
            } as Verb,
            {
                id: createWordId("a2-12-gefuehl-005"),
                wordType: "verb",
                german: "entschuldigen",
                english: "to apologize",
                separable: false,
                coreForms: {
                    infinitive: "sich entschuldigen",
                    thirdPerson: "entschuldigt sich",
                    preterite: "entschuldigte sich",
                    perfect: "hat sich entschuldigt"
                },
                reflexive: true,
                exampleGerman: [
                    { text: "Einige", case: "nominativ" },
                    { text: " entschuldigten", case: "verb" },
                    { text: " sich", case: "akkusativ" },
                    { text: " für alte Dummheiten", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Some apologized for old stupidities.",
                clozeParts: ["Einige ", " sich für alte Dummheiten."],
                clozeAnswers: ["entschuldigten"]
            } as Verb,
            {
                id: createWordId("a2-12-gefuehl-006"),
                wordType: "verb",
                german: "helfen",
                english: "to help",
                separable: false,
                coreForms: {
                    infinitive: "helfen",
                    thirdPerson: "hilft",
                    preterite: "half",
                    perfect: "hat geholfen"
                },
                fixedPreposition: {
                    preposition: "bei",
                    case: "dativ"
                },
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " halfen", case: "verb" },
                    { text: " bei der Organisation", case: "dativ" },
                    { text: " des Treffens", case: "genitiv" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone helped with organizing the reunion.",
                clozeParts: ["Alle ", " bei der Organisation des Treffens."],
                clozeAnswers: ["halfen"]
            } as Verb,
            {
                id: createWordId("a2-12-gefuehl-007"),
                wordType: "verb",
                german: "vertrauen",
                english: "to trust",
                separable: false,
                coreForms: {
                    infinitive: "vertrauen",
                    thirdPerson: "vertraut",
                    preterite: "vertraute",
                    perfect: "hat vertraut"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " vertrauen", case: "verb" },
                    { text: " einander", case: "dativ" },
                    { text: " immer noch blind", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We still trust each other blindly.",
                clozeParts: ["Wir ", " einander immer noch blind."],
                clozeAnswers: ["vertrauen"]
            } as Verb
        ]
    }
});