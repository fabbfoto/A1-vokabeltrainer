// vokabular_a2_03_mein_wohnort.ts
// Thema 3: Mein Wohnort (75 Wörter)
// Kontext: Neu in der Stadt - Orientierung und Wegbeschreibungen
// KORRIGIERT: Präpositionalphrasen als eine Einheit

import type { VocabularyStructure, Noun, Adjective, Adverb, Preposition, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabular_a2_03_mein_wohnort: VocabularyStructure = createVocabulary({
    "Mein Wohnort": {
        
        // --- UNTERKAPITEL: Ortsbeschreibung (16 Wörter) ---
        "Ortsbeschreibung": [
            {
                id: createWordId("a2-03-ort-001"),
                wordType: "noun",
                german: "Dorf",
                article: "das",
                plural: "Dörfer",
                english: "village",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " komme", case: "verb" },
                    { text: " aus einem kleinen Dorf", case: "dativ" },
                    { text: ", aber jetzt wohne ich in der Stadt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I come from a small village, but now I live in the city.",
                clozeParts: ["Ich komme aus einem kleinen ", ", aber jetzt wohne ich in der Stadt."],
                clozeAnswers: ["Dorf"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-002"),
                wordType: "noun",
                german: "Stadt",
                article: "die",
                plural: "Städte",
                english: "city",
                exampleGerman: [
                    { text: "Die Stadt", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " viel größer", case: "none" },
                    { text: ", als ich dachte", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The city is much bigger than I thought.",
                clozeParts: ["Die ", " ist viel größer, als ich dachte."],
                clozeAnswers: ["Stadt"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-003"),
                wordType: "noun",
                german: "Hauptstadt",
                article: "die",
                plural: "Hauptstädte",
                english: "capital",
                exampleGerman: [
                    { text: "Berlin", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " die Hauptstadt", case: "nominativ" },
                    { text: " von Deutschland", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Berlin is the capital of Germany.",
                clozeParts: ["Berlin ist die ", " von Deutschland."],
                clozeAnswers: ["Hauptstadt"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-004"),
                wordType: "noun",
                german: "Land",
                article: "das",
                plural: "Länder",
                english: "country",
                exampleGerman: [
                    { text: "In diesem Land", case: "dativ" },
                    { text: " sprechen", case: "verb" },
                    { text: " die Menschen", case: "nominativ" },
                    { text: " drei Sprachen", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In this country, people speak three languages.",
                clozeParts: ["In diesem ", " sprechen die Menschen drei Sprachen."],
                clozeAnswers: ["Land"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-005"),
                wordType: "noun",
                german: "Heimat",
                article: "die",
                plural: null,
                english: "homeland / home",
                exampleGerman: [
                    { text: "Meine Heimat", case: "nominativ" },
                    { text: " vermisse", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " manchmal sehr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I sometimes miss my homeland very much.",
                clozeParts: ["Meine ", " vermisse ich manchmal sehr."],
                clozeAnswers: ["Heimat"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-006"),
                wordType: "noun",
                german: "Ort",
                article: "der",
                plural: "Orte",
                english: "place / location",
                exampleGerman: [
                    { text: "An diesem Ort", case: "dativ" },
                    { text: " treffen", case: "verb" },
                    { text: " sich", case: "akkusativ" },
                    { text: " alle Jugendlichen", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "All young people meet at this place.",
                clozeParts: ["An diesem ", " treffen sich alle Jugendlichen."],
                clozeAnswers: ["Ort"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-007"),
                wordType: "noun",
                german: "Zentrum",
                article: "das",
                plural: "Zentren",
                english: "center",
                exampleGerman: [
                    { text: "Das Zentrum", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " nur zehn Minuten", case: "none" },
                    { text: " zu Fuß", case: "none" },
                    { text: " entfernt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The center is only ten minutes away on foot.",
                clozeParts: ["Das ", " ist nur zehn Minuten zu Fuß entfernt."],
                clozeAnswers: ["Zentrum"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-008"),
                wordType: "noun",
                german: "Mitte",
                article: "die",
                plural: null,
                english: "middle",
                exampleGerman: [
                    { text: "In der Mitte", case: "dativ" },
                    { text: " des Platzes", case: "genitiv" },
                    { text: " steht", case: "verb" },
                    { text: " ein Brunnen", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the middle of the square there is a fountain.",
                clozeParts: ["In der ", " des Platzes steht ein Brunnen."],
                clozeAnswers: ["Mitte"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-009"),
                wordType: "noun",
                german: "Nähe",
                article: "die",
                plural: null,
                english: "vicinity / proximity",
                exampleGerman: [
                    { text: "In der Nähe", case: "dativ" },
                    { text: " gibt", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " einen schönen Park", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There is a nice park nearby.",
                clozeParts: ["In der ", " gibt es einen schönen Park."],
                clozeAnswers: ["Nähe"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-010"),
                wordType: "noun",
                german: "Landschaft",
                article: "die",
                plural: "Landschaften",
                english: "landscape",
                exampleGerman: [
                    { text: "Die Landschaft", case: "nominativ" },
                    { text: " hier", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " wirklich wunderschön", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The landscape here is really beautiful.",
                clozeParts: ["Die ", " hier ist wirklich wunderschön."],
                clozeAnswers: ["Landschaft"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-011"),
                wordType: "noun",
                german: "Berg",
                article: "der",
                plural: "Berge",
                english: "mountain",
                exampleGerman: [
                    { text: "Hinter unserem Haus", case: "dativ" },
                    { text: " sieht", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " die Berge", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Behind our house you can see the mountains.",
                clozeParts: ["Hinter unserem Haus sieht man die ", "e."],
                clozeAnswers: ["Berg"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-012"),
                wordType: "noun",
                german: "Wald",
                article: "der",
                plural: "Wälder",
                english: "forest",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " gehen", case: "verb" },
                    { text: " oft", case: "none" },
                    { text: " im Wald", case: "dativ" },
                    { text: " spazieren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We often go for walks in the forest.",
                clozeParts: ["Wir gehen oft im ", " spazieren."],
                clozeAnswers: ["Wald"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-013"),
                wordType: "noun",
                german: "Meer",
                article: "das",
                plural: "Meere",
                english: "sea",
                exampleGerman: [
                    { text: "Das Meer", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " leider weit weg", case: "none" },
                    { text: " von hier", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The sea is unfortunately far away from here.",
                clozeParts: ["Das ", " ist leider weit weg von hier."],
                clozeAnswers: ["Meer"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-014"),
                wordType: "noun",
                german: "See",
                article: "die",
                plural: null,
                english: "sea / ocean",
                exampleGerman: [
                    { text: "An der See", case: "dativ" },
                    { text: " weht", case: "verb" },
                    { text: " immer", case: "none" },
                    { text: " ein starker Wind", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There is always a strong wind at the sea.",
                clozeParts: ["An der ", " weht immer ein starker Wind."],
                clozeAnswers: ["See"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-015"),
                wordType: "noun",
                german: "See",
                article: "der",
                plural: "Seen",
                english: "lake",
                exampleGerman: [
                    { text: "Am See", case: "dativ" },
                    { text: " kann", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " gut schwimmen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You can swim well at the lake.",
                clozeParts: ["Am ", " kann man gut schwimmen."],
                clozeAnswers: ["See"]
            } as Noun,
            {
                id: createWordId("a2-03-ort-016"),
                wordType: "noun",
                german: "Insel",
                article: "die",
                plural: "Inseln",
                english: "island",
                exampleGerman: [
                    { text: "Auf der Insel", case: "dativ" },
                    { text: " leben", case: "verb" },
                    { text: " nur wenige Menschen", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Only few people live on the island.",
                clozeParts: ["Auf der ", " leben nur wenige Menschen."],
                clozeAnswers: ["Insel"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Richtungen und Lage (33 Wörter) ---
        "Richtungen und Lage": [
            {
                id: createWordId("a2-03-richt-001"),
                wordType: "adverb",
                german: "oben",
                english: "up / above",
                exampleGerman: [
                    { text: "Meine Wohnung", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " ganz oben", case: "none" },
                    { text: " im fünften Stock", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My apartment is all the way up on the fifth floor.",
                clozeParts: ["Meine Wohnung ist ganz ", " im fünften Stock."],
                clozeAnswers: ["oben"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-002"),
                wordType: "adverb",
                german: "unten",
                english: "down / below",
                exampleGerman: [
                    { text: "Unten", case: "none" },
                    { text: " im Erdgeschoss", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " ein Café", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Down on the ground floor is a café.",
                clozeParts: ["", " im Erdgeschoss ist ein Café."],
                clozeAnswers: ["Unten"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-003"),
                wordType: "adverb",
                german: "links",
                english: "left",
                exampleGerman: [
                    { text: "Gehen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " an der Ampel", case: "dativ" },
                    { text: " links", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Turn left at the traffic light.",
                clozeParts: ["Gehen Sie an der Ampel ", "."],
                clozeAnswers: ["links"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-004"),
                wordType: "adverb",
                german: "rechts",
                english: "right",
                exampleGerman: [
                    { text: "Die Post", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " rechts", case: "none" },
                    { text: " neben der Bank", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The post office is to the right next to the bank.",
                clozeParts: ["Die Post ist ", " neben der Bank."],
                clozeAnswers: ["rechts"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-005"),
                wordType: "adverb",
                german: "hier",
                english: "here",
                exampleGerman: [
                    { text: "Hier", case: "none" },
                    { text: " wohne", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " seit drei Monaten", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I have been living here for three months.",
                clozeParts: ["", " wohne ich seit drei Monaten."],
                clozeAnswers: ["Hier"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-006"),
                wordType: "adverb",
                german: "dort",
                english: "there",
                exampleGerman: [
                    { text: "Dort", case: "none" },
                    { text: " drüben", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " der Bahnhof", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Over there is the train station.",
                clozeParts: ["", " drüben ist der Bahnhof."],
                clozeAnswers: ["Dort"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-007"),
                wordType: "adverb",
                german: "da",
                english: "there",
                exampleGerman: [
                    { text: "Da", case: "none" },
                    { text: " vorne", case: "none" },
                    { text: " sehe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " schon", case: "none" },
                    { text: " die Kirche", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I can already see the church up there.",
                clozeParts: ["", " vorne sehe ich schon die Kirche."],
                clozeAnswers: ["Da"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-008"),
                wordType: "adverb",
                german: "drüben",
                english: "over there",
                exampleGerman: [
                    { text: "Das Geschäft", case: "nominativ" },
                    { text: " drüben", case: "none" },
                    { text: " hat", case: "verb" },
                    { text: " bessere Preise", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The shop over there has better prices.",
                clozeParts: ["Das Geschäft ", " hat bessere Preise."],
                clozeAnswers: ["drüben"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-009"),
                wordType: "adverb",
                german: "nebenan",
                english: "next door",
                exampleGerman: [
                    { text: "Die Familie", case: "nominativ" },
                    { text: " nebenan", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " sehr nett", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The family next door is very nice.",
                clozeParts: ["Die Familie ", " ist sehr nett."],
                clozeAnswers: ["nebenan"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-010"),
                wordType: "preposition",
                german: "daneben",
                english: "next to it",
                exampleGerman: [
                    { text: "Die Apotheke", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " daneben", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The pharmacy is next to it.",
                clozeParts: ["Die Apotheke ist ", "."],
                clozeAnswers: ["daneben"]
            } as Preposition,
            {
                id: createWordId("a2-03-richt-011"),
                wordType: "preposition",
                german: "gegenüber",
                english: "opposite / across from",
                exampleGerman: [
                    { text: "Gegenüber dem Park", case: "dativ" },
                    { text: " wohnt", case: "verb" },
                    { text: " meine Freundin", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "My girlfriend lives across from the park.",
                clozeParts: ["", " wohnt meine Freundin."],
                clozeAnswers: ["Gegenüber dem Park"]
            } as Preposition,
            {
                id: createWordId("a2-03-richt-012"),
                wordType: "preposition",
                german: "bei",
                english: "at / near",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " warte", case: "verb" },
                    { text: " bei der Bushaltestelle", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'm waiting at the bus stop.",
                clozeParts: ["Ich warte ", " der Bushaltestelle."],
                clozeAnswers: ["bei"]
            } as Preposition,
            {
                id: createWordId("a2-03-richt-013"),
                wordType: "preposition",
                german: "neben",
                english: "next to",
                exampleGerman: [
                    { text: "Der Supermarkt", case: "nominativ" },
                    { text: " liegt", case: "verb" },
                    { text: " neben dem Rathaus", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The supermarket is next to the town hall.",
                clozeParts: ["Der Supermarkt liegt ", " dem Rathaus."],
                clozeAnswers: ["neben"]
            } as Preposition,
            {
                id: createWordId("a2-03-richt-014"),
                wordType: "preposition",
                german: "zwischen",
                english: "between",
                exampleGerman: [
                    { text: "Die Bibliothek", case: "nominativ" },
                    { text: " steht", case: "verb" },
                    { text: " zwischen der Post und der Bank", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The library is between the post office and the bank.",
                clozeParts: ["Die Bibliothek steht ", " der Post und der Bank."],
                clozeAnswers: ["zwischen"]
            } as Preposition,
            {
                id: createWordId("a2-03-richt-015"),
                wordType: "preposition",
                german: "vor",
                english: "in front of",
                exampleGerman: [
                    { text: "Vor dem Museum", case: "dativ" },
                    { text: " treffen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " uns", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We meet in front of the museum.",
                clozeParts: ["", " treffen wir uns."],
                clozeAnswers: ["Vor dem Museum"]
            } as Preposition,
            {
                id: createWordId("a2-03-richt-016"),
                wordType: "preposition",
                german: "hinter",
                english: "behind",
                exampleGerman: [
                    { text: "Hinter dem Haus", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " ein großer Garten", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Behind the house is a large garden.",
                clozeParts: ["", " ist ein großer Garten."],
                clozeAnswers: ["Hinter dem Haus"]
            } as Preposition,
            {
                id: createWordId("a2-03-richt-017"),
                wordType: "preposition",
                german: "über",
                english: "above / over",
                exampleGerman: [
                    { text: "Die Wohnung", case: "nominativ" },
                    { text: " über uns", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " leer", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The apartment above us is empty.",
                clozeParts: ["Die Wohnung ", " uns ist leer."],
                clozeAnswers: ["über"]
            } as Preposition,
            {
                id: createWordId("a2-03-richt-018"),
                wordType: "preposition",
                german: "unter",
                english: "under / below",
                exampleGerman: [
                    { text: "Unter der Brücke", case: "dativ" },
                    { text: " fließt", case: "verb" },
                    { text: " ein kleiner Fluss", case: "nominativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "A small river flows under the bridge.",
                clozeParts: ["", " fließt ein kleiner Fluss."],
                clozeAnswers: ["Unter der Brücke"]
            } as Preposition,
            {
                id: createWordId("a2-03-richt-019"),
                wordType: "adverb",
                german: "hin",
                english: "there / towards",
                exampleGerman: [
                    { text: "Wo", case: "none" },
                    { text: " gehst", case: "verb" },
                    { text: " du", case: "nominativ" },
                    { text: " hin", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "Where are you going?",
                clozeParts: ["Wo gehst du ", "?"],
                clozeAnswers: ["hin"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-020"),
                wordType: "adverb",
                german: "her",
                english: "here / from",
                exampleGerman: [
                    { text: "Komm", case: "verb" },
                    { text: " mal", case: "none" },
                    { text: " her", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Come here!",
                clozeParts: ["Komm mal ", "!"],
                clozeAnswers: ["her"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-021"),
                wordType: "adverb",
                german: "weg",
                english: "away",
                exampleGerman: [
                    { text: "Geh", case: "verb" },
                    { text: " nicht", case: "none" },
                    { text: " zu weit", case: "none" },
                    { text: " weg", case: "none" },
                    { text: "!", case: "none" }
                ],
                exampleEnglish: "Don't go too far away!",
                clozeParts: ["Geh nicht zu weit ", "!"],
                clozeAnswers: ["weg"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-022"),
                wordType: "adverb",
                german: "zurück",
                english: "back",
                exampleGerman: [
                    { text: "Wann", case: "none" },
                    { text: " kommst", case: "verb" },
                    { text: " du", case: "nominativ" },
                    { text: " zurück", case: "none" },
                    { text: "?", case: "none" }
                ],
                exampleEnglish: "When are you coming back?",
                clozeParts: ["Wann kommst du ", "?"],
                clozeAnswers: ["zurück"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-023"),
                wordType: "adverb",
                german: "vorwärts",
                english: "forward",
                exampleGerman: [
                    { text: "Gehen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " immer", case: "none" },
                    { text: " vorwärts", case: "none" },
                    { text: ", nie zurück", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Always go forward, never back.",
                clozeParts: ["Gehen Sie immer ", ", nie zurück."],
                clozeAnswers: ["vorwärts"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-024"),
                wordType: "adverb",
                german: "geradeaus",
                english: "straight ahead",
                exampleGerman: [
                    { text: "Gehen", case: "verb" },
                    { text: " Sie", case: "nominativ" },
                    { text: " einfach", case: "none" },
                    { text: " geradeaus", case: "none" },
                    { text: " bis zur Kreuzung", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Just go straight ahead to the intersection.",
                clozeParts: ["Gehen Sie einfach ", " bis zur Kreuzung."],
                clozeAnswers: ["geradeaus"]
            } as Adverb,
            {
                id: createWordId("a2-03-richt-025"),
                wordType: "preposition",
                german: "außerhalb",
                english: "outside of",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " wohnen", case: "verb" },
                    { text: " außerhalb der Stadt", case: "genitiv" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We live outside of the city.",
                clozeParts: ["Wir wohnen ", " der Stadt."],
                clozeAnswers: ["außerhalb"]
            } as Preposition,
            {
                id: createWordId("a2-03-richt-026"),
                wordType: "preposition",
                german: "außer",
                english: "except",
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " sind", case: "verb" },
                    { text: " da", case: "none" },
                    { text: ", außer Maria", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone is here except Maria.",
                clozeParts: ["Alle sind da, ", " Maria."],
                clozeAnswers: ["außer"]
            } as Preposition
        ],

        // --- UNTERKAPITEL: Infrastruktur (14 Wörter) ---
        "Infrastruktur": [
            {
                id: createWordId("a2-03-infra-001"),
                wordType: "noun",
                german: "Brücke",
                article: "die",
                plural: "Brücken",
                english: "bridge",
                exampleGerman: [
                    { text: "Die alte Brücke", case: "nominativ" },
                    { text: " führt", case: "verb" },
                    { text: " über den Fluss", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The old bridge goes over the river.",
                clozeParts: ["Die alte ", " führt über den Fluss."],
                clozeAnswers: ["Brücke"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-002"),
                wordType: "noun",
                german: "Straße",
                article: "die",
                plural: "Straßen",
                english: "street",
                exampleGerman: [
                    { text: "Diese Straße", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " nachts sehr ruhig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "This street is very quiet at night.",
                clozeParts: ["Diese ", " ist nachts sehr ruhig."],
                clozeAnswers: ["Straße"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-003"),
                wordType: "noun",
                german: "Park",
                article: "der",
                plural: "Parks",
                english: "park",
                exampleGerman: [
                    { text: "Im Park", case: "dativ" },
                    { text: " joggen", case: "verb" },
                    { text: " viele Leute", case: "nominativ" },
                    { text: " am Morgen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Many people jog in the park in the morning.",
                clozeParts: ["Im ", " joggen viele Leute am Morgen."],
                clozeAnswers: ["Park"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-004"),
                wordType: "noun",
                german: "Kirche",
                article: "die",
                plural: "Kirchen",
                english: "church",
                exampleGerman: [
                    { text: "Die Kirche", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " das älteste Gebäude", case: "nominativ" },
                    { text: " hier", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The church is the oldest building here.",
                clozeParts: ["Die ", " ist das älteste Gebäude hier."],
                clozeAnswers: ["Kirche"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-005"),
                wordType: "noun",
                german: "Rathaus",
                article: "das",
                plural: "Rathäuser",
                english: "town hall",
                exampleGerman: [
                    { text: "Im Rathaus", case: "dativ" },
                    { text: " kann", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " sich anmelden", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You can register at the town hall.",
                clozeParts: ["Im ", " kann man sich anmelden."],
                clozeAnswers: ["Rathaus"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-006"),
                wordType: "noun",
                german: "Bibliothek",
                article: "die",
                plural: "Bibliotheken",
                english: "library",
                exampleGerman: [
                    { text: "Die Bibliothek", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " samstags", case: "none" },
                    { text: " nur bis 14 Uhr", case: "none" },
                    { text: " geöffnet", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The library is only open until 2 PM on Saturdays.",
                clozeParts: ["Die ", " hat samstags nur bis 14 Uhr geöffnet."],
                clozeAnswers: ["Bibliothek"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-007"),
                wordType: "noun",
                german: "Museum",
                article: "das",
                plural: "Museen",
                english: "museum",
                exampleGerman: [
                    { text: "Das Museum", case: "nominativ" },
                    { text: " zeigt", case: "verb" },
                    { text: " moderne Kunst", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The museum shows modern art.",
                clozeParts: ["Das ", " zeigt moderne Kunst."],
                clozeAnswers: ["Museum"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-008"),
                wordType: "noun",
                german: "Post",
                article: "die",
                plural: null,
                english: "post office",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " muss", case: "verb" },
                    { text: " noch", case: "none" },
                    { text: " zur Post", case: "dativ" },
                    { text: " gehen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I still have to go to the post office.",
                clozeParts: ["Ich muss noch zur ", " gehen."],
                clozeAnswers: ["Post"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-009"),
                wordType: "noun",
                german: "Bank",
                article: "die",
                plural: "Banken",
                english: "bank",
                exampleGerman: [
                    { text: "Die Bank", case: "nominativ" },
                    { text: " öffnet", case: "verb" },
                    { text: " erst um 9 Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The bank doesn't open until 9 o'clock.",
                clozeParts: ["Die ", " öffnet erst um 9 Uhr."],
                clozeAnswers: ["Bank"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-010"),
                wordType: "noun",
                german: "Markt",
                article: "der",
                plural: "Märkte",
                english: "market",
                exampleGerman: [
                    { text: "Auf dem Markt", case: "dativ" },
                    { text: " kaufe", case: "verb" },
                    { text: " ich", case: "nominativ" },
                    { text: " frisches Gemüse", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I buy fresh vegetables at the market.",
                clozeParts: ["Auf dem ", " kaufe ich frisches Gemüse."],
                clozeAnswers: ["Markt"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-011"),
                wordType: "noun",
                german: "Kaufhaus",
                article: "das",
                plural: "Kaufhäuser",
                english: "department store",
                exampleGerman: [
                    { text: "Das große Kaufhaus", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " alles", case: "akkusativ" },
                    { text: ", was man braucht", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The big department store has everything you need.",
                clozeParts: ["Das große ", " hat alles, was man braucht."],
                clozeAnswers: ["Kaufhaus"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-012"),
                wordType: "noun",
                german: "Supermarkt",
                article: "der",
                plural: "Supermärkte",
                english: "supermarket",
                exampleGerman: [
                    { text: "Der Supermarkt", case: "nominativ" },
                    { text: " um die Ecke", case: "none" },
                    { text: " ist", case: "verb" },
                    { text: " sehr teuer", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The supermarket around the corner is very expensive.",
                clozeParts: ["Der ", " um die Ecke ist sehr teuer."],
                clozeAnswers: ["Supermarkt"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-013"),
                wordType: "noun",
                german: "Krankenhaus",
                article: "das",
                plural: "Krankenhäuser",
                english: "hospital",
                exampleGerman: [
                    { text: "Das Krankenhaus", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " nicht weit", case: "none" },
                    { text: " von hier", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The hospital is not far from here.",
                clozeParts: ["Das ", " ist nicht weit von hier."],
                clozeAnswers: ["Krankenhaus"]
            } as Noun,
            {
                id: createWordId("a2-03-infra-014"),
                wordType: "noun",
                german: "Apotheke",
                article: "die",
                plural: "Apotheken",
                english: "pharmacy",
                exampleGerman: [
                    { text: "Die nächste Apotheke", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " heute Notdienst", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The nearest pharmacy has emergency service today.",
                clozeParts: ["Die nächste ", " hat heute Notdienst."],
                clozeAnswers: ["Apotheke"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Weitere Präpositionen (12 Wörter) ---
        "Weitere Präpositionen": [
            {
                id: createWordId("a2-03-praep-001"),
                wordType: "preposition",
                german: "durch",
                english: "through",
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " gehen", case: "verb" },
                    { text: " durch den Park", case: "akkusativ" },
                    { text: " nach Hause", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We walk home through the park.",
                clozeParts: ["Wir gehen ", " den Park nach Hause."],
                clozeAnswers: ["durch"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-002"),
                wordType: "preposition",
                german: "für",
                english: "for",
                exampleGerman: [
                    { text: "Das", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " für dich", case: "akkusativ" },
                    { text: " zu weit", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "That is too far for you.",
                clozeParts: ["Das ist ", " dich zu weit."],
                clozeAnswers: ["für"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-003"),
                wordType: "preposition",
                german: "gegen",
                english: "against / around (time)",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " komme", case: "verb" },
                    { text: " gegen 8 Uhr", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I'll come around 8 o'clock.",
                clozeParts: ["Ich komme ", " 8 Uhr."],
                clozeAnswers: ["gegen"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-004"),
                wordType: "preposition",
                german: "mit",
                english: "with",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " fahre", case: "verb" },
                    { text: " mit dem Bus", case: "dativ" },
                    { text: " zur Arbeit", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I go to work by bus.",
                clozeParts: ["Ich fahre ", " dem Bus zur Arbeit."],
                clozeAnswers: ["mit"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-005"),
                wordType: "preposition",
                german: "ohne",
                english: "without",
                exampleGerman: [
                    { text: "Ohne Auto", case: "akkusativ" },
                    { text: " ist", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " hier schwierig", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "It's difficult here without a car.",
                clozeParts: ["", " Auto ist es hier schwierig."],
                clozeAnswers: ["Ohne"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-006"),
                wordType: "preposition",
                german: "seit",
                english: "since / for",
                exampleGerman: [
                    { text: "Ich", case: "nominativ" },
                    { text: " wohne", case: "verb" },
                    { text: " seit einem Jahr", case: "dativ" },
                    { text: " hier", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "I've been living here for a year.",
                clozeParts: ["Ich wohne ", " einem Jahr hier."],
                clozeAnswers: ["seit"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-007"),
                wordType: "preposition",
                german: "bis",
                english: "until",
                exampleGerman: [
                    { text: "Geh", case: "verb" },
                    { text: " bis zur Ampel", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Go until the traffic light.",
                clozeParts: ["Geh ", " zur Ampel."],
                clozeAnswers: ["bis"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-008"),
                wordType: "preposition",
                german: "während",
                english: "during",
                exampleGerman: [
                    { text: "Während des Sommers", case: "genitiv" },
                    { text: " ist", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " hier sehr voll", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "During the summer it's very crowded here.",
                clozeParts: ["", " ist es hier sehr voll."],
                clozeAnswers: ["Während des Sommers"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-009"),
                wordType: "preposition",
                german: "wegen",
                english: "because of",
                exampleGerman: [
                    { text: "Wegen des Regens", case: "genitiv" },
                    { text: " bleiben", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " zu Hause", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We're staying home because of the rain.",
                clozeParts: ["", " bleiben wir zu Hause."],
                clozeAnswers: ["Wegen des Regens"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-010"),
                wordType: "preposition",
                german: "trotz",
                english: "despite",
                exampleGerman: [
                    { text: "Trotz des schlechten Wetters", case: "genitiv" },
                    { text: " gehen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " spazieren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Despite the bad weather, we go for a walk.",
                clozeParts: ["", " gehen wir spazieren."],
                clozeAnswers: ["Trotz des schlechten Wetters"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-011"),
                wordType: "preposition",
                german: "um",
                english: "around / at (time)",
                exampleGerman: [
                    { text: "Um die Ecke", case: "akkusativ" },
                    { text: " gibt", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " einen Bäcker", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There's a bakery around the corner.",
                clozeParts: ["", " gibt es einen Bäcker."],
                clozeAnswers: ["Um die Ecke"]
            } as Preposition,
            {
                id: createWordId("a2-03-praep-012"),
                wordType: "preposition",
                german: "ab",
                english: "from (time/place)",
                exampleGerman: [
                    { text: "Ab morgen", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " der Laden", case: "nominativ" },
                    { text: " geschlossen", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "From tomorrow the shop is closed.",
                clozeParts: ["", " ist der Laden geschlossen."],
                clozeAnswers: ["Ab morgen"]
            } as Preposition
        ]
    }
});