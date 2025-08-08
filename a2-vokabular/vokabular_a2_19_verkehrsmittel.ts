// vokabular_a2_19_verkehrsmittel.ts
// Thema 19: Verkehrsmittel (35 Wörter)
// Story: Omas 80. Geburtstag - Die Familie reist aus verschiedenen Richtungen an

import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

export const vokabularA2_19_verkehrsmittel: VocabularyStructure = createVocabulary({
    "Verkehrsmittel": {
        
        // --- UNTERKAPITEL: Fahrzeuge (9 Wörter) ---
        "Fahrzeuge": [
            {
                id: createWordId("a2-19-fahr-001"),
                wordType: "noun",
                german: "Auto",
                article: "das",
                plural: "Autos",
                english: "car",
                exampleGerman: [
                    { text: "Die Eltern", case: "nominativ" },
                    { text: " fahren", case: "verb" },
                    { text: " mit", case: "none" },
                    { text: " dem Auto", case: "dativ" },
                    { text: " zu", case: "none" },
                    { text: " Oma", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The parents drive to grandma by car.",
                clozeParts: ["Die Eltern fahren mit dem ", " zu Oma."],
                clozeAnswers: ["Auto"]
            } as Noun,
            {
                id: createWordId("a2-19-fahr-002"),
                wordType: "noun",
                german: "Bahn",
                article: "die",
                plural: "Bahnen",
                english: "train / railway",
                exampleGerman: [
                    { text: "Mit", case: "none" },
                    { text: " der Bahn", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " es", case: "nominativ" },
                    { text: " billiger", case: "none" },
                    { text: " als", case: "none" },
                    { text: " mit", case: "none" },
                    { text: " dem Auto", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "By train it's cheaper than by car.",
                clozeParts: ["Mit der ", " ist es billiger als mit dem Auto."],
                clozeAnswers: ["Bahn"]
            } as Noun,
            {
                id: createWordId("a2-19-fahr-003"),
                wordType: "noun",
                german: "Bus",
                article: "der",
                plural: "Busse",
                english: "bus",
                exampleGerman: [
                    { text: "Der Bus", case: "nominativ" },
                    { text: " vom Bahnhof", case: "dativ" },
                    { text: " zu", case: "none" },
                    { text: " Omas Dorf", case: "dativ" },
                    { text: " fährt", case: "verb" },
                    { text: " nur zweimal", case: "none" },
                    { text: " am Tag", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The bus from the station to grandma's village only runs twice a day.",
                clozeParts: ["Der ", " vom Bahnhof zu Omas Dorf fährt nur zweimal am Tag."],
                clozeAnswers: ["Bus"]
            } as Noun,
            {
                id: createWordId("a2-19-fahr-004"),
                wordType: "noun",
                german: "Flugzeug",
                article: "das",
                plural: "Flugzeuge",
                english: "airplane",
                exampleGerman: [
                    { text: "Der Onkel", case: "nominativ" },
                    { text: " aus", case: "none" },
                    { text: " München", case: "dativ" },
                    { text: " kommt", case: "verb" },
                    { text: " mit", case: "none" },
                    { text: " dem Flugzeug", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The uncle from Munich is coming by plane.",
                clozeParts: ["Der Onkel aus München kommt mit dem ", "."],
                clozeAnswers: ["Flugzeug"]
            } as Noun,
            {
                id: createWordId("a2-19-fahr-005"),
                wordType: "noun",
                german: "Zug",
                article: "der",
                plural: "Züge",
                english: "train",
                exampleGerman: [
                    { text: "Der Zug", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " zwanzig Minuten", case: "akkusativ" },
                    { text: " Verspätung", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The train is twenty minutes late today.",
                clozeParts: ["Der ", " hat heute zwanzig Minuten Verspätung."],
                clozeAnswers: ["Zug"]
            } as Noun,
            {
                id: createWordId("a2-19-fahr-006"),
                wordType: "noun",
                german: "Schiff",
                article: "das",
                plural: "Schiffe",
                english: "ship",
                exampleGerman: [
                    { text: "Die Cousine", case: "nominativ" },
                    { text: " von", case: "none" },
                    { text: " der Insel", case: "dativ" },
                    { text: " muss", case: "verb" },
                    { text: " erst", case: "none" },
                    { text: " mit", case: "none" },
                    { text: " dem Schiff", case: "dativ" },
                    { text: " fahren", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The cousin from the island has to take the ship first.",
                clozeParts: ["Die Cousine von der Insel muss erst mit dem ", " fahren."],
                clozeAnswers: ["Schiff"]
            } as Noun,
            {
                id: createWordId("a2-19-fahr-007"),
                wordType: "noun",
                german: "Taxi",
                article: "das",
                plural: "Taxis",
                english: "taxi",
                exampleGerman: [
                    { text: "Vom Flughafen", case: "dativ" },
                    { text: " nehmen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " ein Taxi", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "From the airport we take a taxi.",
                clozeParts: ["Vom Flughafen nehmen wir ein ", "."],
                clozeAnswers: ["Taxi"]
            } as Noun,
            {
                id: createWordId("a2-19-fahr-008"),
                wordType: "noun",
                german: "Fahrrad",
                article: "das",
                plural: "Fahrräder",
                english: "bicycle",
                exampleGerman: [
                    { text: "Die Kinder", case: "nominativ" },
                    { text: " aus", case: "none" },
                    { text: " dem Nachbardorf", case: "dativ" },
                    { text: " kommen", case: "verb" },
                    { text: " mit", case: "none" },
                    { text: " dem Fahrrad", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The children from the neighboring village come by bicycle.",
                clozeParts: ["Die Kinder aus dem Nachbardorf kommen mit dem ", "."],
                clozeAnswers: ["Fahrrad"]
            } as Noun,
            {
                id: createWordId("a2-19-fahr-009"),
                wordType: "noun",
                german: "Motorroller",
                article: "der",
                plural: "Motorroller",
                english: "scooter",
                exampleGerman: [
                    { text: "Der Neffe", case: "nominativ" },
                    { text: " hat", case: "verb" },
                    { text: " einen neuen Motorroller", case: "akkusativ" },
                    { text: " und", case: "none" },
                    { text: " will", case: "verb" },
                    { text: " ihn", case: "akkusativ" },
                    { text: " zeigen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The nephew has a new scooter and wants to show it.",
                clozeParts: ["Der Neffe hat einen neuen ", " und will ihn zeigen."],
                clozeAnswers: ["Motorroller"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Verkehrsinfrastruktur (12 Wörter) ---
        "Verkehrsinfrastruktur": [
            {
                id: createWordId("a2-19-infra-001"),
                wordType: "noun",
                german: "Bahnhof",
                article: "der",
                plural: "Bahnhöfe",
                english: "train station",
                exampleGerman: [
                    { text: "Am Bahnhof", case: "dativ" },
                    { text: " treffen", case: "verb" },
                    { text: " sich", case: "akkusativ" },
                    { text: " alle", case: "nominativ" },
                    { text: " um zehn Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone meets at the train station at ten o'clock.",
                clozeParts: ["Am ", " treffen sich alle um zehn Uhr."],
                clozeAnswers: ["Bahnhof"]
            } as Noun,
            {
                id: createWordId("a2-19-infra-002"),
                wordType: "noun",
                german: "Bahnsteig",
                article: "der",
                plural: "Bahnsteige",
                english: "platform",
                exampleGerman: [
                    { text: "Der Zug", case: "nominativ" },
                    { text: " nach", case: "none" },
                    { text: " Hamburg", case: "dativ" },
                    { text: " fährt", case: "verb" },
                    { text: " von", case: "none" },
                    { text: " Bahnsteig drei", case: "dativ" },
                    { text: " ab", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The train to Hamburg departs from platform three.",
                clozeParts: ["Der Zug nach Hamburg fährt von ", " drei ab."],
                clozeAnswers: ["Bahnsteig"]
            } as Noun,
            {
                id: createWordId("a2-19-infra-003"),
                wordType: "noun",
                german: "Haltestelle",
                article: "die",
                plural: "Haltestellen",
                english: "stop",
                exampleGerman: [
                    { text: "Die Haltestelle", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " direkt", case: "none" },
                    { text: " vor", case: "none" },
                    { text: " Omas Haus", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The stop is right in front of grandma's house.",
                clozeParts: ["Die ", " ist direkt vor Omas Haus."],
                clozeAnswers: ["Haltestelle"]
            } as Noun,
            {
                id: createWordId("a2-19-infra-004"),
                wordType: "noun",
                german: "Flughafen",
                article: "der",
                plural: "Flughäfen",
                english: "airport",
                exampleGerman: [
                    { text: "Der Flughafen", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " eine Stunde", case: "akkusativ" },
                    { text: " entfernt", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The airport is one hour away.",
                clozeParts: ["Der ", " ist eine Stunde entfernt."],
                clozeAnswers: ["Flughafen"]
            } as Noun,
            {
                id: createWordId("a2-19-infra-005"),
                wordType: "noun",
                german: "Autobahn",
                article: "die",
                plural: "Autobahnen",
                english: "highway",
                exampleGerman: [
                    { text: "Auf", case: "none" },
                    { text: " der Autobahn", case: "dativ" },
                    { text: " gibt es", case: "verb" },
                    { text: " heute", case: "none" },
                    { text: " viel Verkehr", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "There's a lot of traffic on the highway today.",
                clozeParts: ["Auf der ", " gibt es heute viel Verkehr."],
                clozeAnswers: ["Autobahn"]
            } as Noun,
            {
                id: createWordId("a2-19-infra-006"),
                wordType: "noun",
                german: "Straße",
                article: "die",
                plural: "Straßen",
                english: "street",
                exampleGerman: [
                    { text: "Omas Straße", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " sehr ruhig", case: "none" },
                    { text: " und", case: "none" },
                    { text: " schön", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Grandma's street is very quiet and beautiful.",
                clozeParts: ["Omas ", " ist sehr ruhig und schön."],
                clozeAnswers: ["Straße"]
            } as Noun,
            {
                id: createWordId("a2-19-infra-007"),
                wordType: "noun",
                german: "Straßenbahn",
                article: "die",
                plural: "Straßenbahnen",
                english: "tram",
                exampleGerman: [
                    { text: "In", case: "none" },
                    { text: " der Stadt", case: "dativ" },
                    { text: " nehmen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " die Straßenbahn", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In the city we take the tram.",
                clozeParts: ["In der Stadt nehmen wir die ", "."],
                clozeAnswers: ["Straßenbahn"]
            } as Noun,
            {
                id: createWordId("a2-19-infra-008"),
                wordType: "noun",
                german: "Ampel",
                article: "die",
                plural: "Ampeln",
                english: "traffic light",
                exampleGerman: [
                    { text: "Die Ampel", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " rot", case: "none" },
                    { text: ",", case: "none" },
                    { text: " wir", case: "nominativ" },
                    { text: " müssen", case: "verb" },
                    { text: " warten", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The traffic light is red, we have to wait.",
                clozeParts: ["Die ", " ist rot, wir müssen warten."],
                clozeAnswers: ["Ampel"]
            } as Noun,
            {
                id: createWordId("a2-19-infra-009"),
                wordType: "noun",
                german: "Kreuzung",
                article: "die",
                plural: "Kreuzungen",
                english: "intersection",
                exampleGerman: [
                    { text: "An", case: "none" },
                    { text: " der Kreuzung", case: "dativ" },
                    { text: " biegen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " links ab", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "At the intersection we turn left.",
                clozeParts: ["An der ", " biegen wir links ab."],
                clozeAnswers: ["Kreuzung"]
            } as Noun,
            {
                id: createWordId("a2-19-infra-010"),
                wordType: "noun",
                german: "Gleis",
                article: "das",
                plural: "Gleise",
                english: "track",
                exampleGerman: [
                    { text: "Der Zug", case: "nominativ" },
                    { text: " kommt", case: "verb" },
                    { text: " auf", case: "none" },
                    { text: " Gleis zwei", case: "dativ" },
                    { text: " an", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The train arrives on track two.",
                clozeParts: ["Der Zug kommt auf ", " zwei an."],
                clozeAnswers: ["Gleis"]
            } as Noun,
            {
                id: createWordId("a2-19-infra-011"),
                wordType: "verb",
                german: "parken",
                english: "to park",
                separable: false,
                coreForms: {
                    infinitive: "parken",
                    thirdPerson: "parkt",
                    preterite: "parkte",
                    perfect: "hat geparkt"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " können", case: "verb" },
                    { text: " direkt", case: "none" },
                    { text: " vor", case: "none" },
                    { text: " dem Haus", case: "dativ" },
                    { text: " parken", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We can park directly in front of the house.",
                clozeParts: ["Wir können direkt vor dem Haus ", "."],
                clozeAnswers: ["parken"]
            } as Verb,
            {
                id: createWordId("a2-19-infra-012"),
                wordType: "noun",
                german: "Parkplatz",
                article: "der",
                plural: "Parkplätze",
                english: "parking space",
                exampleGerman: [
                    { text: "Der Parkplatz", case: "nominativ" },
                    { text: " am Bahnhof", case: "dativ" },
                    { text: " kostet", case: "verb" },
                    { text: " fünf Euro", case: "akkusativ" },
                    { text: " pro Tag", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The parking space at the station costs five euros per day.",
                clozeParts: ["Der ", " am Bahnhof kostet fünf Euro pro Tag."],
                clozeAnswers: ["Parkplatz"]
            } as Noun
        ],

        // --- UNTERKAPITEL: Bewegung und Transport (14 Wörter) ---
        "Bewegung und Transport": [
            {
                id: createWordId("a2-19-trans-001"),
                wordType: "verb",
                german: "fahren",
                english: "to drive / go",
                separable: false,
                coreForms: {
                    infinitive: "fahren",
                    thirdPerson: "fährt",
                    preterite: "fuhr",
                    perfect: "ist gefahren"
                },
                exampleGerman: [
                    { text: "Alle", case: "nominativ" },
                    { text: " fahren", case: "verb" },
                    { text: " zu", case: "none" },
                    { text: " Omas Geburtstag", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Everyone is going to grandma's birthday.",
                clozeParts: ["Alle ", " zu Omas Geburtstag."],
                clozeAnswers: ["fahren"]
            } as Verb,
            {
                id: createWordId("a2-19-trans-002"),
                wordType: "verb",
                german: "abfahren",
                english: "to depart",
                separable: false,
                coreForms: {
                    infinitive: "abfahren",
                    thirdPerson: "fährt ab",
                    preterite: "fuhr ab",
                    perfect: "ist abgefahren"
                },
                exampleGerman: [
                    { text: "Unser Zug", case: "nominativ" },
                    { text: " fährt", case: "verb" },
                    { text: " um acht Uhr", case: "none" },
                    { text: " ab", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Our train departs at eight o'clock.",
                clozeParts: ["Unser Zug ", " um acht Uhr ", "."],
                clozeAnswers: ["fährt", "ab"]
            } as Verb,
            {
                id: createWordId("a2-19-trans-003"),
                wordType: "verb",
                german: "fliegen",
                english: "to fly",
                separable: false,
                coreForms: {
                    infinitive: "fliegen",
                    thirdPerson: "fliegt",
                    preterite: "flog",
                    perfect: "ist geflogen"
                },
                exampleGerman: [
                    { text: "Der Onkel", case: "nominativ" },
                    { text: " fliegt", case: "verb" },
                    { text: " nur", case: "none" },
                    { text: " eine Stunde", case: "akkusativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The uncle only flies for one hour.",
                clozeParts: ["Der Onkel ", " nur eine Stunde."],
                clozeAnswers: ["fliegt"]
            } as Verb,
            {
                id: createWordId("a2-19-trans-004"),
                wordType: "verb",
                german: "gehen",
                english: "to go / walk",
                separable: false,
                coreForms: {
                    infinitive: "gehen",
                    thirdPerson: "geht",
                    preterite: "ging",
                    perfect: "ist gegangen"
                },
                exampleGerman: [
                    { text: "Vom Bahnhof", case: "dativ" },
                    { text: " gehen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " zu Fuß", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "From the station we walk.",
                clozeParts: ["Vom Bahnhof ", " wir zu Fuß."],
                clozeAnswers: ["gehen"]
            } as Verb,
            {
                id: createWordId("a2-19-trans-005"),
                wordType: "verb",
                german: "kommen",
                english: "to come",
                separable: false,
                coreForms: {
                    infinitive: "kommen",
                    thirdPerson: "kommt",
                    preterite: "kam",
                    perfect: "ist gekommen"
                },
                exampleGerman: [
                    { text: "Die Tante", case: "nominativ" },
                    { text: " kommt", case: "verb" },
                    { text: " immer", case: "none" },
                    { text: " zu spät", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The aunt always comes too late.",
                clozeParts: ["Die Tante ", " immer zu spät."],
                clozeAnswers: ["kommt"]
            } as Verb,
            {
                id: createWordId("a2-19-trans-006"),
                wordType: "verb",
                german: "laufen",
                english: "to run / walk",
                separable: false,
                coreForms: {
                    infinitive: "laufen",
                    thirdPerson: "läuft",
                    preterite: "lief",
                    perfect: "ist gelaufen"
                },
                exampleGerman: [
                    { text: "Die Kinder", case: "nominativ" },
                    { text: " laufen", case: "verb" },
                    { text: " schnell", case: "none" },
                    { text: " zum Bahnhof", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The children run quickly to the station.",
                clozeParts: ["Die Kinder ", " schnell zum Bahnhof."],
                clozeAnswers: ["laufen"]
            } as Verb,
            {
                id: createWordId("a2-19-trans-007"),
                wordType: "noun",
                german: "Fahrkarte",
                article: "die",
                plural: "Fahrkarten",
                english: "ticket",
                exampleGerman: [
                    { text: "Die Fahrkarte", case: "nominativ" },
                    { text: " für", case: "none" },
                    { text: " die ganze Familie", case: "akkusativ" },
                    { text: " ist", case: "verb" },
                    { text: " teuer", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The ticket for the whole family is expensive.",
                clozeParts: ["Die ", " für die ganze Familie ist teuer."],
                clozeAnswers: ["Fahrkarte"]
            } as Noun,
            {
                id: createWordId("a2-19-trans-008"),
                wordType: "noun",
                german: "Fahrplan",
                article: "der",
                plural: "Fahrpläne",
                english: "timetable",
                exampleGerman: [
                    { text: "Im Fahrplan", case: "dativ" },
                    { text: " steht", case: "verb" },
                    { text: ",", case: "none" },
                    { text: " wann", case: "none" },
                    { text: " der Bus", case: "nominativ" },
                    { text: " kommt", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The timetable shows when the bus comes.",
                clozeParts: ["Im ", " steht, wann der Bus kommt."],
                clozeAnswers: ["Fahrplan"]
            } as Noun,
            {
                id: createWordId("a2-19-trans-009"),
                wordType: "noun",
                german: "Ticket",
                article: "das",
                plural: "Tickets",
                english: "ticket",
                exampleGerman: [
                    { text: "Das Ticket", case: "nominativ" },
                    { text: " kann", case: "verb" },
                    { text: " man", case: "nominativ" },
                    { text: " online", case: "none" },
                    { text: " kaufen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "You can buy the ticket online.",
                clozeParts: ["Das ", " kann man online kaufen."],
                clozeAnswers: ["Ticket"]
            } as Noun,
            {
                id: createWordId("a2-19-trans-010"),
                wordType: "noun",
                german: "Abfahrt",
                article: "die",
                plural: "Abfahrten",
                english: "departure",
                exampleGerman: [
                    { text: "Die Abfahrt", case: "nominativ" },
                    { text: " ist", case: "verb" },
                    { text: " in", case: "none" },
                    { text: " zehn Minuten", case: "dativ" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The departure is in ten minutes.",
                clozeParts: ["Die ", " ist in zehn Minuten."],
                clozeAnswers: ["Abfahrt"]
            } as Noun,
            {
                id: createWordId("a2-19-trans-011"),
                wordType: "noun",
                german: "Ankunft",
                article: "die",
                plural: "Ankünfte",
                english: "arrival",
                exampleGerman: [
                    { text: "Die Ankunft", case: "nominativ" },
                    { text: " in", case: "none" },
                    { text: " Omas Dorf", case: "dativ" },
                    { text: " ist", case: "verb" },
                    { text: " um elf Uhr", case: "none" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "The arrival in grandma's village is at eleven o'clock.",
                clozeParts: ["Die ", " in Omas Dorf ist um elf Uhr."],
                clozeAnswers: ["Ankunft"]
            } as Noun,
            {
                id: createWordId("a2-19-trans-012"),
                wordType: "verb",
                german: "ankommen",
                english: "to arrive",
                separable: false,
                coreForms: {
                    infinitive: "ankommen",
                    thirdPerson: "kommt an",
                    preterite: "kam an",
                    perfect: "ist angekommen"
                },
                exampleGerman: [
                    { text: "Wir", case: "nominativ" },
                    { text: " kommen", case: "verb" },
                    { text: " pünktlich", case: "none" },
                    { text: " bei", case: "none" },
                    { text: " Oma", case: "dativ" },
                    { text: " an", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "We arrive at grandma's on time.",
                clozeParts: ["Wir ", " pünktlich bei Oma ", "."],
                clozeAnswers: ["kommen", "an"]
            } as Verb,
            {
                id: createWordId("a2-19-trans-013"),
                wordType: "verb",
                german: "umsteigen",
                english: "to change / transfer",
                separable: false,
                coreForms: {
                    infinitive: "umsteigen",
                    thirdPerson: "steigt um",
                    preterite: "stieg um",
                    perfect: "ist umgestiegen"
                },
                exampleGerman: [
                    { text: "In", case: "none" },
                    { text: " Frankfurt", case: "dativ" },
                    { text: " müssen", case: "verb" },
                    { text: " wir", case: "nominativ" },
                    { text: " umsteigen", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "In Frankfurt we have to change trains.",
                clozeParts: ["In Frankfurt müssen wir ", "."],
                clozeAnswers: ["umsteigen"]
            } as Verb,
            {
                id: createWordId("a2-19-trans-014"),
                wordType: "verb",
                german: "einsteigen",
                english: "to get on / board",
                separable: false,
                coreForms: {
                    infinitive: "einsteigen",
                    thirdPerson: "steigt ein",
                    preterite: "stieg ein",
                    perfect: "ist eingestiegen"
                },
                exampleGerman: [
                    { text: "Bitte", case: "none" },
                    { text: " schnell", case: "none" },
                    { text: " einsteigen", case: "verb" },
                    { text: "!", case: "none" },
                    { text: " Der Zug", case: "nominativ" },
                    { text: " fährt", case: "verb" },
                    { text: " gleich ab", case: "verb" },
                    { text: ".", case: "none" }
                ],
                exampleEnglish: "Please board quickly! The train is leaving soon.",
                clozeParts: ["Bitte schnell ", "! Der Zug fährt gleich ab."],
                clozeAnswers: ["einsteigen"]
            } as Verb
        ]
    }
});