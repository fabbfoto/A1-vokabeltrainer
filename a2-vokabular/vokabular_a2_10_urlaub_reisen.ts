import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

// Kontext: Eine Reise nach Italien
// Storyline: Reiseplanung und Buchung, Anreise und Ankunft, Urlaubsaktivitäten, Rückkehr und Erinnerungen

export const vokabularA2UrlaubReisen: VocabularyStructure = createVocabulary({
  "Urlaub und Reisen": {
    "Verkehrsmittel": [
      {
        id: createWordId("urlaub-verkehr-001"),
        wordType: 'noun',
        german: "Auto",
        article: "das",
        plural: "Autos",
        english: "car",
        exampleGerman: [
          { text: "Wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "fahren", case: "verb" },
          { text: " ", case: "none" },
          { text: "mit", case: "none" },
          { text: " ", case: "none" },
          { text: "dem Auto", case: "dativ" },
          { text: " ", case: "none" },
          { text: "in", case: "none" },
          { text: " ", case: "none" },
          { text: "den Urlaub", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "We're going on vacation by car.",
        clozeParts: ["Wir fahren mit dem ", " in den Urlaub."],
        clozeAnswers: ["Auto"]
      } as Noun,
      {
        id: createWordId("urlaub-verkehr-002"),
        wordType: 'noun',
        german: "Bahn",
        article: "die",
        plural: "Bahnen",
        english: "train, railway",
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Bahn", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "kommt", case: "verb" },
          { text: " ", case: "none" },
          { text: "pünktlich", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The train arrives on time.",
        clozeParts: ["Die ", " kommt pünktlich."],
        clozeAnswers: ["Bahn"]
      } as Noun,
      {
        id: createWordId("urlaub-verkehr-003"),
        wordType: 'noun',
        german: "Bus",
        article: "der",
        plural: "Busse",
        english: "bus",
        exampleGerman: [
          { text: "Der", case: "none" },
          { text: " ", case: "none" },
          { text: "Bus", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "fährt", case: "verb" },
          { text: " ", case: "none" },
          { text: "jede", case: "none" },
          { text: " ", case: "none" },
          { text: "Stunde", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The bus runs every hour.",
        clozeParts: ["Der ", " fährt jede Stunde."],
        clozeAnswers: ["Bus"]
      } as Noun,
      {
        id: createWordId("urlaub-verkehr-004"),
        wordType: 'noun',
        german: "Flugzeug",
        article: "das",
        plural: "Flugzeuge",
        english: "airplane",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Flugzeug", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "landet", case: "verb" },
          { text: " ", case: "none" },
          { text: "um", case: "none" },
          { text: " ", case: "none" },
          { text: "15", case: "none" },
          { text: " ", case: "none" },
          { text: "Uhr", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The airplane lands at 3 PM.",
        clozeParts: ["Das ", " landet um 15 Uhr."],
        clozeAnswers: ["Flugzeug"]
      } as Noun,
      {
        id: createWordId("urlaub-verkehr-005"),
        wordType: 'noun',
        german: "Zug",
        article: "der",
        plural: "Züge",
        english: "train",
        exampleGerman: [
          { text: "Ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "nehme", case: "verb" },
          { text: " ", case: "none" },
          { text: "den Zug", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "nach", case: "none" },
          { text: " ", case: "none" },
          { text: "Berlin", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "I'm taking the train to Berlin.",
        clozeParts: ["Ich nehme den ", " nach Berlin."],
        clozeAnswers: ["Zug"]
      } as Noun,
      {
        id: createWordId("urlaub-verkehr-006"),
        wordType: 'noun',
        german: "Schiff",
        article: "das",
        plural: "Schiffe",
        english: "ship",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Schiff", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "fährt", case: "verb" },
          { text: " ", case: "none" },
          { text: "über", case: "none" },
          { text: " ", case: "none" },
          { text: "das Meer", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The ship sails across the sea.",
        clozeParts: ["Das ", " fährt über das Meer."],
        clozeAnswers: ["Schiff"]
      } as Noun,
      {
        id: createWordId("urlaub-verkehr-007"),
        wordType: 'noun',
        german: "Taxi",
        article: "das",
        plural: "Taxis",
        english: "taxi",
        exampleGerman: [
          { text: "Können", case: "verb" },
          { text: " ", case: "none" },
          { text: "Sie", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "mir", case: "dativ" },
          { text: " ", case: "none" },
          { text: "ein Taxi", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "rufen", case: "verb" },
          { text: "?", case: "none" }
        ],
        exampleEnglish: "Can you call me a taxi?",
        clozeParts: ["Können Sie mir ein ", " rufen?"],
        clozeAnswers: ["Taxi"]
      } as Noun,
      {
        id: createWordId("urlaub-verkehr-008"),
        wordType: 'noun',
        german: "Fahrrad",
        article: "das",
        plural: "Fahrräder",
        english: "bicycle",
        exampleGerman: [
          { text: "Ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "fahre", case: "verb" },
          { text: " ", case: "none" },
          { text: "gern", case: "none" },
          { text: " ", case: "none" },
          { text: "mit", case: "none" },
          { text: " ", case: "none" },
          { text: "dem Fahrrad", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "I like riding a bicycle.",
        clozeParts: ["Ich fahre gern mit dem ", "."],
        clozeAnswers: ["Fahrrad"]
      } as Noun,
      {
        id: createWordId("urlaub-verkehr-009"),
        wordType: 'noun',
        german: "Motorroller",
        article: "der",
        plural: "Motorroller",
        english: "scooter",
        exampleGerman: [
          { text: "Ein", case: "none" },
          { text: " ", case: "none" },
          { text: "Motorroller", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "praktisch", case: "none" },
          { text: " ", case: "none" },
          { text: "in", case: "none" },
          { text: " ", case: "none" },
          { text: "der Stadt", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "A scooter is practical in the city.",
        clozeParts: ["Ein ", " ist praktisch in der Stadt."],
        clozeAnswers: ["Motorroller"]
      } as Noun
    ],
    "Reiseplanung": [
      {
        id: createWordId("urlaub-planung-001"),
        wordType: 'noun',
        german: "Reise",
        article: "die",
        plural: "Reisen",
        english: "trip, journey",
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Reise", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "war", case: "verb" },
          { text: " ", case: "none" },
          { text: "sehr", case: "none" },
          { text: " ", case: "none" },
          { text: "schön", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The trip was very nice.",
        clozeParts: ["Die ", " war sehr schön."],
        clozeAnswers: ["Reise"]
      } as Noun,
      {
        id: createWordId("urlaub-planung-002"),
        wordType: 'verb',
        german: "reisen",
        english: "to travel",
        separable: false,
        coreForms: {
          infinitive: "reisen",
          thirdPerson: "reist",
          preterite: "reiste",
          perfect: "ist gereist"
        },
        exampleGerman: [
          { text: "Wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "reisen", case: "verb" },
          { text: " ", case: "none" },
          { text: "gern", case: "none" },
          { text: " ", case: "none" },
          { text: "nach", case: "none" },
          { text: " ", case: "none" },
          { text: "Italien", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "We like traveling to Italy.",
        clozeParts: ["Wir ", " gern nach Italien."],
        clozeAnswers: ["reisen"]
      } as Verb,
      {
        id: createWordId("urlaub-planung-003"),
        wordType: 'noun',
        german: "Urlaub",
        article: "der",
        plural: "Urlaube",
        english: "vacation, holiday",
        exampleGerman: [
          { text: "Im", case: "none" },
          { text: " ", case: "none" },
          { text: "Urlaub", case: "dativ" },
          { text: " ", case: "none" },
          { text: "möchte", case: "verb" },
          { text: " ", case: "none" },
          { text: "ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "entspannen", case: "verb" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "On vacation I want to relax.",
        clozeParts: ["Im ", " möchte ich entspannen."],
        clozeAnswers: ["Urlaub"]
      } as Noun,
      {
        id: createWordId("urlaub-planung-004"),
        wordType: 'verb',
        german: "planen",
        english: "to plan",
        separable: false,
        coreForms: {
          infinitive: "planen",
          thirdPerson: "plant",
          preterite: "plante",
          perfect: "hat geplant"
        },
        exampleGerman: [
          { text: "Wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "planen", case: "verb" },
          { text: " ", case: "none" },
          { text: "eine Weltreise", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "We're planning a world trip.",
        clozeParts: ["Wir ", " eine Weltreise."],
        clozeAnswers: ["planen"]
      } as Verb,
      {
        id: createWordId("urlaub-planung-005"),
        wordType: 'noun',
        german: "Plan",
        article: "der",
        plural: "Pläne",
        english: "plan",
        exampleGerman: [
          { text: "Hast", case: "verb" },
          { text: " ", case: "none" },
          { text: "du", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "schon", case: "none" },
          { text: " ", case: "none" },
          { text: "einen Plan", case: "akkusativ" },
          { text: "?", case: "none" }
        ],
        exampleEnglish: "Do you already have a plan?",
        clozeParts: ["Hast du schon einen ", "?"],
        clozeAnswers: ["Plan"]
      } as Noun,
      {
        id: createWordId("urlaub-planung-006"),
        wordType: 'verb',
        german: "buchen",
        english: "to book",
        separable: false,
        coreForms: {
          infinitive: "buchen",
          thirdPerson: "bucht",
          preterite: "buchte",
          perfect: "hat gebucht"
        },
        exampleGerman: [
          { text: "Ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "buche", case: "verb" },
          { text: " ", case: "none" },
          { text: "den Flug", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "online", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "I book the flight online.",
        clozeParts: ["Ich ", " den Flug online."],
        clozeAnswers: ["buche"]
      } as Verb,
      {
        id: createWordId("urlaub-planung-007"),
        wordType: 'verb',
        german: "reservieren",
        english: "to reserve",
        separable: false,
        coreForms: {
          infinitive: "reservieren",
          thirdPerson: "reserviert",
          preterite: "reservierte",
          perfect: "hat reserviert"
        },
        exampleGerman: [
          { text: "Wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "müssen", case: "verb" },
          { text: " ", case: "none" },
          { text: "einen Tisch", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "reservieren", case: "verb" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "We need to reserve a table.",
        clozeParts: ["Wir müssen einen Tisch ", "."],
        clozeAnswers: ["reservieren"]
      } as Verb,
      {
        id: createWordId("urlaub-planung-008"),
        wordType: 'noun',
        german: "Reisebüro",
        article: "das",
        plural: "Reisebüros",
        english: "travel agency",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Reisebüro", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "hat", case: "verb" },
          { text: " ", case: "none" },
          { text: "gute", case: "none" },
          { text: " ", case: "none" },
          { text: "Angebote", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The travel agency has good offers.",
        clozeParts: ["Das ", " hat gute Angebote."],
        clozeAnswers: ["Reisebüro"]
      } as Noun,
      {
        id: createWordId("urlaub-planung-009"),
        wordType: 'noun',
        german: "Reiseführer",
        article: "der",
        plural: "Reiseführer",
        english: "travel guide",
        exampleGerman: [
          { text: "Der", case: "none" },
          { text: " ", case: "none" },
          { text: "Reiseführer", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "zeigt", case: "verb" },
          { text: " ", case: "none" },
          { text: "uns", case: "dativ" },
          { text: " ", case: "none" },
          { text: "die Stadt", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The travel guide shows us the city.",
        clozeParts: ["Der ", " zeigt uns die Stadt."],
        clozeAnswers: ["Reiseführer"]
      } as Noun,
      {
        id: createWordId("urlaub-planung-010"),
        wordType: 'noun',
        german: "Tour",
        article: "die",
        plural: "Touren",
        english: "tour",
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Tour", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "dauert", case: "verb" },
          { text: " ", case: "none" },
          { text: "drei", case: "none" },
          { text: " ", case: "none" },
          { text: "Stunden", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The tour lasts three hours.",
        clozeParts: ["Die ", " dauert drei Stunden."],
        clozeAnswers: ["Tour"]
      } as Noun,
      {
        id: createWordId("urlaub-planung-011"),
        wordType: 'noun',
        german: "Ausflug",
        article: "der",
        plural: "Ausflüge",
        english: "excursion, trip",
        exampleGerman: [
          { text: "Morgen", case: "none" },
          { text: " ", case: "none" },
          { text: "machen", case: "verb" },
          { text: " ", case: "none" },
          { text: "wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "einen Ausflug", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "Tomorrow we're going on an excursion.",
        clozeParts: ["Morgen machen wir einen ", "."],
        clozeAnswers: ["Ausflug"]
      } as Noun,
      {
        id: createWordId("urlaub-planung-012"),
        wordType: 'verb',
        german: "besichtigen",
        english: "to visit, to sightsee",
        separable: false,
        coreForms: {
          infinitive: "besichtigen",
          thirdPerson: "besichtigt",
          preterite: "besichtigte",
          perfect: "hat besichtigt"
        },
        exampleGerman: [
          { text: "Wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "besichtigen", case: "verb" },
          { text: " ", case: "none" },
          { text: "das Schloss", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "We're visiting the castle.",
        clozeParts: ["Wir ", " das Schloss."],
        clozeAnswers: ["besichtigen"]
      } as Verb,
      {
        id: createWordId("urlaub-planung-013"),
        wordType: 'noun',
        german: "Sehenswürdigkeit",
        article: "die",
        plural: "Sehenswürdigkeiten",
        english: "sight, attraction",
        exampleGerman: [
          { text: "Diese", case: "none" },
          { text: " ", case: "none" },
          { text: "Sehenswürdigkeit", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "berühmt", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "This attraction is famous.",
        clozeParts: ["Diese ", " ist berühmt."],
        clozeAnswers: ["Sehenswürdigkeit"]
      } as Noun,
      {
        id: createWordId("urlaub-planung-014"),
        wordType: 'noun',
        german: "Gepäck",
        article: "das",
        plural: "-",
        english: "luggage",
        exampleGerman: [
          { text: "Mein", case: "none" },
          { text: " ", case: "none" },
          { text: "Gepäck", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "zu", case: "none" },
          { text: " ", case: "none" },
          { text: "schwer", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "My luggage is too heavy.",
        clozeParts: ["Mein ", " ist zu schwer."],
        clozeAnswers: ["Gepäck"]
      } as Noun,
      {
        id: createWordId("urlaub-planung-015"),
        wordType: 'verb',
        german: "packen",
        english: "to pack",
        separable: false,
        coreForms: {
          infinitive: "packen",
          thirdPerson: "packt",
          preterite: "packte",
          perfect: "hat gepackt"
        },
        exampleGerman: [
          { text: "Ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "muss", case: "verb" },
          { text: " ", case: "none" },
          { text: "noch", case: "none" },
          { text: " ", case: "none" },
          { text: "meinen", case: "none" },
          { text: " ", case: "none" },
          { text: "Koffer", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "packen", case: "verb" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "I still need to pack my suitcase.",
        clozeParts: ["Ich muss noch meinen Koffer ", "."],
        clozeAnswers: ["packen"]
      } as Verb,
      {
        id: createWordId("urlaub-planung-016"),
        wordType: 'noun',
        german: "Koffer",
        article: "der",
        plural: "Koffer",
        english: "suitcase",
        exampleGerman: [
          { text: "Der", case: "none" },
          { text: " ", case: "none" },
          { text: "Koffer", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "passt", case: "verb" },
          { text: " ", case: "none" },
          { text: "nicht", case: "none" },
          { text: " ", case: "none" },
          { text: "ins", case: "none" },
          { text: " ", case: "none" },
          { text: "Auto", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The suitcase doesn't fit in the car.",
        clozeParts: ["Der ", " passt nicht ins Auto."],
        clozeAnswers: ["Koffer"]
      } as Noun
    ],
    "Unterkünfte": [
      {
        id: createWordId("urlaub-unterkunft-001"),
        wordType: 'noun',
        german: "Hotel",
        article: "das",
        plural: "Hotels",
        english: "hotel",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Hotel", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "hat", case: "verb" },
          { text: " ", case: "none" },
          { text: "fünf", case: "none" },
          { text: " ", case: "none" },
          { text: "Sterne", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The hotel has five stars.",
        clozeParts: ["Das ", " hat fünf Sterne."],
        clozeAnswers: ["Hotel"]
      } as Noun,
      {
        id: createWordId("urlaub-unterkunft-002"),
        wordType: 'noun',
        german: "Jugendherberge",
        article: "die",
        plural: "Jugendherbergen",
        english: "youth hostel",
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Jugendherberge", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "günstig", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The youth hostel is cheap.",
        clozeParts: ["Die ", " ist günstig."],
        clozeAnswers: ["Jugendherberge"]
      } as Noun,
      {
        id: createWordId("urlaub-unterkunft-003"),
        wordType: 'noun',
        german: "Doppelzimmer",
        article: "das",
        plural: "Doppelzimmer",
        english: "double room",
        exampleGerman: [
          { text: "Haben", case: "verb" },
          { text: " ", case: "none" },
          { text: "Sie", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "noch", case: "none" },
          { text: " ", case: "none" },
          { text: "ein Doppelzimmer", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "frei", case: "none" },
          { text: "?", case: "none" }
        ],
        exampleEnglish: "Do you still have a double room available?",
        clozeParts: ["Haben Sie noch ein ", " frei?"],
        clozeAnswers: ["Doppelzimmer"]
      } as Noun,
      {
        id: createWordId("urlaub-unterkunft-004"),
        wordType: 'verb',
        german: "übernachten",
        english: "to stay overnight",
        separable: false,
        coreForms: {
          infinitive: "übernachten",
          thirdPerson: "übernachtet",
          preterite: "übernachtete",
          perfect: "hat übernachtet"
        },
        exampleGerman: [
          { text: "Wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "übernachten", case: "verb" },
          { text: " ", case: "none" },
          { text: "bei", case: "none" },
          { text: " ", case: "none" },
          { text: "Freunden", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "We're staying overnight with friends.",
        clozeParts: ["Wir ", " bei Freunden."],
        clozeAnswers: ["übernachten"]
      } as Verb,
      {
        id: createWordId("urlaub-unterkunft-005"),
        wordType: 'noun',
        german: "Unterkunft",
        article: "die",
        plural: "Unterkünfte",
        english: "accommodation",
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Unterkunft", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "liegt", case: "verb" },
          { text: " ", case: "none" },
          { text: "am", case: "none" },
          { text: " ", case: "none" },
          { text: "Strand", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The accommodation is at the beach.",
        clozeParts: ["Die ", " liegt am Strand."],
        clozeAnswers: ["Unterkunft"]
      } as Noun,
      {
        id: createWordId("urlaub-unterkunft-006"),
        wordType: 'noun',
        german: "Rezeption",
        article: "die",
        plural: "Rezeptionen",
        english: "reception",
        exampleGerman: [
          { text: "An", case: "none" },
          { text: " ", case: "none" },
          { text: "der Rezeption", case: "dativ" },
          { text: " ", case: "none" },
          { text: "bekommen", case: "verb" },
          { text: " ", case: "none" },
          { text: "Sie", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "den Schlüssel", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "You get the key at the reception.",
        clozeParts: ["An der ", " bekommen Sie den Schlüssel."],
        clozeAnswers: ["Rezeption"]
      } as Noun,
      {
        id: createWordId("urlaub-unterkunft-007"),
        wordType: 'noun',
        german: "Service",
        article: "der",
        plural: "-",
        english: "service",
        exampleGerman: [
          { text: "Der", case: "none" },
          { text: " ", case: "none" },
          { text: "Service", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "im", case: "none" },
          { text: " ", case: "none" },
          { text: "Hotel", case: "dativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "ausgezeichnet", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The service in the hotel is excellent.",
        clozeParts: ["Der ", " im Hotel ist ausgezeichnet."],
        clozeAnswers: ["Service"]
      } as Noun,
      {
        id: createWordId("urlaub-unterkunft-008"),
        wordType: 'noun',
        german: "Gast",
        article: "der",
        plural: "Gäste",
        english: "guest",
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Gäste", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "sind", case: "verb" },
          { text: " ", case: "none" },
          { text: "sehr", case: "none" },
          { text: " ", case: "none" },
          { text: "zufrieden", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The guests are very satisfied.",
        clozeParts: ["Die ", " sind sehr zufrieden."],
        clozeAnswers: ["Gäste"]
      } as Noun
    ]
  }
});