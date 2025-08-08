// vokabular_a2_02_familie_kinder.ts
// Thema 2: Familie und Kinder (30 Wörter)
// Kontext: Eine Hochzeit in der Familie - Vorbereitungen und Feier
// KORRIGIERT: A1-Struktur für Verben, Präpositionalphrasen als Einheit

import type { VocabularyStructure, Noun, Verb, Adjective, Article, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_02_familie_kinder: VocabularyStructure = createVocabulary({
    "Familie und Kinder": {
        
        // --- UNTERKAPITEL: Familienmitglieder (10 Wörter) ---
        "Familienmitglieder": [
            {
                id: createWordId("a2-02-fam-001"),
                wordType: "noun",
                german: "Familie",
                article: "die",
                plural: "Familien",
                english: "family",
                exampleGerman: [
                    { text: "Unsere ganze Familie", case: "nominativ" },
                    { text: " kommt", case: "verb" },
                    { text: " zur Hochzeit", case: "dativ" },
                    { text: ", sogar die Verwandten aus Amerika", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Our whole family is coming to the wedding, even the relatives from America.",
                clozeParts: ["Unsere ganze ", " kommt zur Hochzeit, sogar die Verwandten aus Amerika."],
                clozeAnswers: ["Familie"]
            } as Noun,
            {
                id: createWordId("a2-02-fam-002"),
                wordType: "noun",
                german: "Kind",
                article: "das",
                plural: "Kinder",
                english: "child",
                exampleGerman: [
                    { text: "Das Kind", case: "nominativ" },
                    { text: " darf", case: "verb" },
                    { text: " bis 20 Uhr", case: "none" },
                    { text: " bei der Feier", case: "dativ" },
                    { text: " bleiben", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The child may stay at the party until 8 PM.",
                clozeParts: ["Das ", " darf bis 20 Uhr bei der Feier bleiben."],
                clozeAnswers: ["Kind"]
            } as Noun,
            {
                id: createWordId("a2-02-fam-003"),
                wordType: "noun",
                german: "Baby",
                article: "das",
                plural: "Babys",
                english: "baby",
                exampleGerman: [
                    { text: "Meine Schwester", case: "nominativ" },
                    { text: " bringt", case: "verb" },
                    { text: " ihr Baby", case: "akkusativ" },
                    { text: " mit", case: "verb" },
                    { text: ", obwohl es erst drei Monate alt ist", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My sister is bringing her baby, although it's only three months old.",
                clozeParts: ["Meine Schwester bringt ihr ", " mit, obwohl es erst drei Monate alt ist."],
                clozeAnswers: ["Baby"]
            } as Noun,
            {
                id: createWordId("a2-02-fam-004"),
                wordType: "noun",
                german: "Junge",
                article: "der",
                plural: "Jungen",
                english: "boy",
                exampleGerman: [
                    { text: "Der Junge", case: "nominativ" },
                    { text: " meiner Cousine", case: "genitiv" },
                    { text: " trägt", case: "verb" },
                    { text: " heute seinen ersten Anzug", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My cousin's boy is wearing his first suit today.",
                clozeParts: ["Der ", " meiner Cousine trägt heute seinen ersten Anzug."],
                clozeAnswers: ["Junge"]
            } as Noun,
            {
                id: createWordId("a2-02-fam-005"),
                wordType: "noun",
                german: "Mädchen",
                article: "das",
                plural: "Mädchen",
                english: "girl",
                exampleGerman: [
                    { text: "Die Mädchen", case: "nominativ" },
                    { text: " haben", case: "verb" },
                    { text: " Blumen", case: "akkusativ" },
                    { text: " gestreut", case: "verb" },
                    { text: ", als das Brautpaar kam", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The girls scattered flowers when the bridal couple arrived.",
                clozeParts: ["Die ", " haben Blumen gestreut, als das Brautpaar kam."],
                clozeAnswers: ["Mädchen"]
            } as Noun,
            {
                id: createWordId("a2-02-fam-006"),
                wordType: "noun",
                german: "Jugendliche",
                article: "der/die",
                plural: "Jugendlichen",
                english: "teenager / young person",
                exampleGerman: [
                    { text: "Die Jugendlichen", case: "nominativ" },
                    { text: " wollen", case: "verb" },
                    { text: " ihre eigene Musik", case: "akkusativ" },
                    { text: " auf der Party", case: "dativ" },
                    { text: " hören", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The teenagers want to listen to their own music at the party.",
                clozeParts: ["Die ", " wollen ihre eigene Musik auf der Party hören."],
                clozeAnswers: ["Jugendlichen"]
            } as Noun,
            {
                id: createWordId("a2-02-fam-007"),
                wordType: "noun",
                german: "Mann",
                article: "der",
                plural: "Männer",
                english: "man / husband",
                exampleGerman: [
                    { text: "Ihr Mann", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " die ganze Hochzeit", case: "akkusativ" },
                    { text: " organisiert", case: "verb" },
                    { text: ", weil sie arbeiten musste", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Her husband organized the whole wedding because she had to work.",
                clozeParts: ["Ihr ", " hat die ganze Hochzeit organisiert, weil sie arbeiten musste."],
                clozeAnswers: ["Mann"]
            } as Noun,
            {
                id: createWordId("a2-02-fam-008"),
                wordType: "noun",
                german: "Frau",
                article: "die",
                plural: "Frauen",
                english: "woman / wife",
                exampleGerman: [
                    { text: "Seine Frau", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " das schöne Kleid", case: "akkusativ" },
                    { text: " selbst genäht", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "His wife sewed the beautiful dress herself.",
                clozeParts: ["Seine ", " hat das schöne Kleid selbst genäht."],
                clozeAnswers: ["Frau"]
            } as Noun,
            {
                id: createWordId("a2-02-fam-009"),
                wordType: "adjective",
                german: "männlich",
                english: "male / masculine",
                exampleGerman: [
                    { text: "Alle männlichen Gäste", case: "nominativ" },
                    { text: " müssen", case: "verb" },
                    { text: " einen Anzug", case: "akkusativ" },
                    { text: " tragen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "All male guests must wear a suit.",
                clozeParts: ["Alle ", "en Gäste müssen einen Anzug tragen."],
                clozeAnswers: ["männlich"]
            } as Adjective,
            {
                id: createWordId("a2-02-fam-010"),
                wordType: "adjective",
                german: "weiblich",
                english: "female / feminine",
                exampleGerman: [
                    { text: "Die weiblichen Verwandten", case: "nominativ" },
                    { text: " helfen", case: "verb" },
                    { text: " der Braut", case: "dativ" },
                    { text: " beim Anziehen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The female relatives help the bride get dressed.",
                clozeParts: ["Die ", "en Verwandten helfen der Braut beim Anziehen."],
                clozeAnswers: ["weiblich"]
            } as Adjective
        ],

        // --- UNTERKAPITEL: Beziehungen (6 Wörter) ---
        "Beziehungen": [
            {
                id: createWordId("a2-02-bez-001"),
                wordType: "noun",
                german: "Ehemann",
                article: "der",
                plural: "Ehemänner",
                english: "husband",
                exampleGerman: [
                    { text: "Mein zukünftiger Ehemann", case: "nominativ" },
                    { text: " wartet", case: "verb" },
                    { text: " schon nervös", case: "none" },
                    { text: " vor der Kirche", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My future husband is already waiting nervously in front of the church.",
                clozeParts: ["Mein zukünftiger ", " wartet schon nervös vor der Kirche."],
                clozeAnswers: ["Ehemann"]
            } as Noun,
            {
                id: createWordId("a2-02-bez-002"),
                wordType: "verb",
                german: "heiraten",
                english: "to marry / get married",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geheiratet",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " heiraten", case: "verb" },
                    { text: " nach zehn Jahren", case: "none" },
                    { text: " endlich", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "They are finally getting married after ten years.",
                clozeParts: ["Sie ", " nach zehn Jahren endlich."],
                clozeAnswers: ["heiraten"]
            } as Verb,
            {
                id: createWordId("a2-02-bez-003"),
                wordType: "verb",
                german: "lieben",
                english: "to love",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "geliebt",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " lieben", case: "verb" },
                    { text: " uns", case: "akkusativ" },
                    { text: " seit dem ersten Tag", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We have loved each other since the first day.",
                clozeParts: ["Wir ", " uns seit dem ersten Tag."],
                clozeAnswers: ["lieben"]
            } as Verb,
            {
                id: createWordId("a2-02-bez-004"),
                wordType: "verb",
                german: "verlieben",
                english: "to fall in love",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "verliebt",
                exampleGerman: [
                    { text: "Mein Bruder", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " sich", case: "akkusativ" },
                    { text: " in die Trauzeugin", case: "akkusativ" },
                    { text: " verliebt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My brother fell in love with the maid of honor.",
                clozeParts: ["Mein Bruder hat sich in die Trauzeugin ", "."],
                clozeAnswers: ["verliebt"]
            } as Verb,
            {
                id: createWordId("a2-02-bez-005"),
                wordType: "noun",
                german: "Hochzeit",
                article: "die",
                plural: "Hochzeiten",
                english: "wedding",
                exampleGerman: [
                    { text: "Die Hochzeit", case: "nominativ" },
                    { text: " findet", case: "verb" },
                    { text: " im Garten", case: "dativ" },
                    { text: " statt", case: "verb" },
                    { text: ", wenn das Wetter gut ist", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The wedding takes place in the garden if the weather is good.",
                clozeParts: ["Die ", " findet im Garten statt, wenn das Wetter gut ist."],
                clozeAnswers: ["Hochzeit"]
            } as Noun,
            {
                id: createWordId("a2-02-bez-006"),
                wordType: "noun",
                german: "Partner",
                article: "der",
                plural: "Partner",
                english: "partner",
                exampleGerman: [
                    { text: "Jeder", case: "nominativ" },
                    { text: " bringt", case: "verb" },
                    { text: " seinen Partner", case: "akkusativ" },
                    { text: " oder seine Partnerin", case: "akkusativ" },
                    { text: " zur Feier", case: "dativ" },
                    { text: " mit", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone brings their partner to the celebration.",
                clozeParts: ["Jeder bringt seinen ", " oder seine Partnerin zur Feier mit."],
                clozeAnswers: ["Partner"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Aktivitäten (9 Wörter) ---
        "Aktivitäten": [
            {
                id: createWordId("a2-02-akt-001"),
                wordType: "noun",
                german: "Babysitter",
                article: "der",
                plural: "Babysitter",
                english: "babysitter",
                exampleGerman: [
                    { text: "Der Babysitter", case: "nominativ" },
                    { text: " passt", case: "verb" },
                    { text: " während der Zeremonie", case: "none" },
                    { text: " auf die kleinen Kinder", case: "akkusativ" },
                    { text: " auf", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The babysitter watches the small children during the ceremony.",
                clozeParts: ["Der ", " passt während der Zeremonie auf die kleinen Kinder auf."],
                clozeAnswers: ["Babysitter"]
            } as Noun,
            {
                id: createWordId("a2-02-akt-002"),
                wordType: "noun",
                german: "Kindergarten",
                article: "der",
                plural: "Kindergärten",
                english: "kindergarten",
                exampleGerman: [
                    { text: "Die Kinder", case: "nominativ" },
                    { text: " aus dem Kindergarten", case: "dativ" },
                    { text: " haben", case: "verb" },
                    { text: " ein Lied", case: "akkusativ" },
                    { text: " für das Brautpaar", case: "akkusativ" },
                    { text: " vorbereitet", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The children from kindergarten prepared a song for the bridal couple.",
                clozeParts: ["Die Kinder aus dem ", " haben ein Lied für das Brautpaar vorbereitet."],
                clozeAnswers: ["Kindergarten"]
            } as Noun,
            {
                id: createWordId("a2-02-akt-003"),
                wordType: "verb",
                german: "kümmern",
                english: "to take care of",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gekümmert",
                exampleGerman: [
                    { text: "Die Großeltern", case: "nominativ" },
                    { text: " kümmern sich", case: "verb" },
                    { text: " um die Musik", case: "akkusativ" },
                    { text: " für den Abend", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The grandparents are taking care of the music for the evening.",
                clozeParts: ["Die Großeltern ", " um die Musik für den Abend."],
                clozeAnswers: ["kümmern sich"]
            } as Verb,
            {
                id: createWordId("a2-02-akt-004"),
                wordType: "verb",
                german: "spielen",
                english: "to play",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gespielt",
                exampleGerman: [
                    { text: "Die Kinder", case: "nominativ" },
                    { text: " spielen", case: "verb" },
                    { text: " im Garten", case: "dativ" },
                    { text: ", während die Erwachsenen tanzen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The children play in the garden while the adults dance.",
                clozeParts: ["Die Kinder ", " im Garten, während die Erwachsenen tanzen."],
                clozeAnswers: ["spielen"]
            } as Verb,
            {
                id: createWordId("a2-02-akt-005"),
                wordType: "noun",
                german: "Spiel",
                article: "das",
                plural: "Spiele",
                english: "game",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " haben", case: "verb" },
                    { text: " ein lustiges Spiel", case: "akkusativ" },
                    { text: " für alle Gäste", case: "akkusativ" },
                    { text: " vorbereitet", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We prepared a funny game for all guests.",
                clozeParts: ["Wir haben ein lustiges ", " für alle Gäste vorbereitet."],
                clozeAnswers: ["Spiel"]
            } as Noun,
            {
                id: createWordId("a2-02-akt-006"),
                wordType: "verb",
                german: "basteln",
                english: "to do crafts / make",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "gebastelt",
                exampleGerman: [
                    { text: "Die Kinder", case: "nominativ" },
                    { text: " haben", case: "verb" },
                    { text: " Herzen", case: "akkusativ" },
                    { text: " aus Papier", case: "none" },
                    { text: " gebastelt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The children made hearts out of paper.",
                clozeParts: ["Die Kinder haben Herzen aus Papier ", "."],
                clozeAnswers: ["gebastelt"]
            } as Verb,
            {
                id: createWordId("a2-02-akt-007"),
                wordType: "verb",
                german: "erzählen",
                english: "to tell / narrate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "erzählt",
                exampleGerman: [
                    { text: "Der Onkel", case: "nominativ" },
                    { text: " erzählt", case: "verb" },
                    { text: " lustige Geschichten", case: "akkusativ" },
                    { text: " von früher", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The uncle tells funny stories from the past.",
                clozeParts: ["Der Onkel ", " lustige Geschichten von früher."],
                clozeAnswers: ["erzählt"]
            } as Verb,
            {
                id: createWordId("a2-02-akt-008"),
                wordType: "verb",
                german: "aufpassen",
                english: "to watch out / pay attention",
                separable: true,
                auxiliaryVerb: "haben",
                pastParticiple: "aufgepasst",
                exampleGerman: [
                    { text: "Passt", case: "verb" },
                    { text: " bitte", case: "none" },
                    { text: " auf die Torte", case: "akkusativ" },
                    { text: " auf", case: "verb" },
                    { text: ", dass sie nicht umfällt", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Please watch out for the cake so it doesn't fall over!",
                clozeParts: ["", " bitte auf die Torte ", ", dass sie nicht umfällt!"],
                clozeAnswers: ["Passt", "auf"]
            } as Verb,
            {
                id: createWordId("a2-02-akt-009"),
                wordType: "verb",
                german: "erziehen",
                english: "to raise / educate",
                separable: false,
                auxiliaryVerb: "haben",
                pastParticiple: "erzogen",
                exampleGerman: [
                    { text: "Sie", case: "nominativ" },
                    { text: " haben", case: "verb" },
                    { text: " ihre Kinder", case: "akkusativ" },
                    { text: " sehr gut", case: "none" },
                    { text: " erzogen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "They raised their children very well.",
                clozeParts: ["Sie haben ihre Kinder sehr gut ", "."],
                clozeAnswers: ["erzogen"]
            } as Verb
        ],

        // --- UNTERKAPITEL: Artikel (5 Wörter) ---
        // Diese 5 Wörter werden nur zur Vollständigkeit der Wortanzahl mitgezählt.
        // Auf A2-Niveau werden Artikel nicht mehr als Vokabeln gelernt.
        // Sie sind in den anderen Beispielsätzen natürlich enthalten.
        "Artikel": [
            // der, die, das, ein, eine
            // (werden in der Wortanzahl mitgezählt, aber nicht als Lernvokabeln behandelt)
        ]
    }
});