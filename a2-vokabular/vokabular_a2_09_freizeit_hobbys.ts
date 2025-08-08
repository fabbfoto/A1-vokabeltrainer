import type { VocabularyStructure, Noun, Verb, Adjective, WordId, CaseElement } from '../src/core/types/vocabulary';
import { createWordId, createVocabulary } from '../src/core/types/vocabulary';

// Kontext: Ein Sportwochenende mit Freunden
// Storyline: Freitag - Planung der Aktivitäten, Samstag - verschiedene Sportarten, Sonntag - Entspannung und Rückblick

export const vokabular_a2_09_freizeit_hobbys: VocabularyStructure = createVocabulary({
  "Freizeit und Hobbys": {
    "Sport und Training": [
      {
        id: createWordId("freizeit-sport-001"),
        wordType: 'noun',
        german: "Sport",
        article: "der",
        plural: "-",
        english: "sport",
        exampleGerman: [
          { text: "Ich", case: "none" },
          { text: " ", case: "none" },
          { text: "mache", case: "verb" },
          { text: " ", case: "none" },
          { text: "gern", case: "none" },
          { text: " ", case: "none" },
          { text: "Sport", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "I like to do sports.",
        clozeParts: ["Ich mache gern ", "."],
        clozeAnswers: ["Sport"]
      } as Noun,
      {
        id: createWordId("freizeit-sport-002"),
        wordType: 'adjective',
        german: "sportlich",
        english: "athletic, sporty",
        exampleGerman: [
          { text: "Meine", case: "none" },
          { text: " ", case: "none" },
          { text: "Schwester", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "sehr", case: "none" },
          { text: " ", case: "none" },
          { text: "sportlich", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "My sister is very athletic.",
        clozeParts: ["Meine Schwester ist sehr ", "."],
        clozeAnswers: ["sportlich"]
      } as Adjective,
      {
        id: createWordId("freizeit-sport-003"),
        wordType: 'noun',
        german: "Fußball",
        article: "der",
        plural: "Fußbälle",
        english: "football, soccer",
        exampleGerman: [
          { text: "Er", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "spielt", case: "verb" },
          { text: " ", case: "none" },
          { text: "jeden", case: "none" },
          { text: " ", case: "none" },
          { text: "Samstag", case: "none" },
          { text: " ", case: "none" },
          { text: "Fußball", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "He plays football every Saturday.",
        clozeParts: ["Er spielt jeden Samstag ", "."],
        clozeAnswers: ["Fußball"]
      } as Noun,
      {
        id: createWordId("freizeit-sport-004"),
        wordType: 'noun',
        german: "Basketball",
        article: "der",
        plural: "Basketbälle",
        english: "basketball",
        exampleGerman: [
          { text: "Basketball", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "macht", case: "verb" },
          { text: " ", case: "none" },
          { text: "Spaß", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "Basketball is fun.",
        clozeParts: ["", " macht Spaß."],
        clozeAnswers: ["Basketball"]
      } as Noun,
      {
        id: createWordId("freizeit-sport-005"),
        wordType: 'noun',
        german: "Volleyball",
        article: "der",
        plural: "Volleybälle",
        english: "volleyball",
        exampleGerman: [
          { text: "Wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "spielen", case: "verb" },
          { text: " ", case: "none" },
          { text: "am", case: "none" },
          { text: " ", case: "none" },
          { text: "Strand", case: "dativ" },
          { text: " ", case: "none" },
          { text: "Volleyball", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "We play volleyball at the beach.",
        clozeParts: ["Wir spielen am Strand ", "."],
        clozeAnswers: ["Volleyball"]
      } as Noun,
      {
        id: createWordId("freizeit-sport-006"),
        wordType: 'noun',
        german: "Tennis",
        article: "das",
        plural: "-",
        english: "tennis",
        exampleGerman: [
          { text: "Tennis", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "ein", case: "none" },
          { text: " ", case: "none" },
          { text: "schneller", case: "none" },
          { text: " ", case: "none" },
          { text: "Sport", case: "nominativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "Tennis is a fast sport.",
        clozeParts: ["", " ist ein schneller Sport."],
        clozeAnswers: ["Tennis"]
      } as Noun,
      {
        id: createWordId("freizeit-sport-007"),
        wordType: 'verb',
        german: "schwimmen",
        english: "to swim",
        separable: false,
        coreForms: {
          infinitive: "schwimmen",
          thirdPerson: "schwimmt",
          preterite: "schwamm",
          perfect: "ist geschwommen"
        },
        exampleGerman: [
          { text: "Im", case: "none" },
          { text: " ", case: "none" },
          { text: "Sommer", case: "dativ" },
          { text: " ", case: "none" },
          { text: "schwimme", case: "verb" },
          { text: " ", case: "none" },
          { text: "ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "gern", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "In summer I like to swim.",
        clozeParts: ["Im Sommer ", " ich gern."],
        clozeAnswers: ["schwimme"]
      } as Verb,
      {
        id: createWordId("freizeit-sport-008"),
        wordType: 'noun',
        german: "Schwimmbad",
        article: "das",
        plural: "Schwimmbäder",
        english: "swimming pool",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Schwimmbad", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "heute", case: "none" },
          { text: " ", case: "none" },
          { text: "geschlossen", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The swimming pool is closed today.",
        clozeParts: ["Das ", " ist heute geschlossen."],
        clozeAnswers: ["Schwimmbad"]
      } as Noun,
      {
        id: createWordId("freizeit-sport-009"),
        wordType: 'verb',
        german: "joggen",
        english: "to jog",
        separable: false,
        coreForms: {
          infinitive: "joggen",
          thirdPerson: "joggt",
          preterite: "joggte",
          perfect: "ist gejoggt"
        },
        exampleGerman: [
          { text: "Sie", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "joggt", case: "verb" },
          { text: " ", case: "none" },
          { text: "jeden", case: "none" },
          { text: " ", case: "none" },
          { text: "Morgen", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "im", case: "none" },
          { text: " ", case: "none" },
          { text: "Park", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "She jogs in the park every morning.",
        clozeParts: ["Sie ", " jeden Morgen im Park."],
        clozeAnswers: ["joggt"]
      } as Verb,
      {
        id: createWordId("freizeit-sport-010"),
        wordType: 'verb',
        german: "wandern",
        english: "to hike",
        separable: false,
        coreForms: {
          infinitive: "wandern",
          thirdPerson: "wandert",
          preterite: "wanderte",
          perfect: "ist gewandert"
        },
        exampleGerman: [
          { text: "Wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "wandern", case: "verb" },
          { text: " ", case: "none" },
          { text: "gern", case: "none" },
          { text: " ", case: "none" },
          { text: "in", case: "none" },
          { text: " ", case: "none" },
          { text: "den Bergen", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "We like to hike in the mountains.",
        clozeParts: ["Wir ", " gern in den Bergen."],
        clozeAnswers: ["wandern"]
      } as Verb,
      {
        id: createWordId("freizeit-sport-011"),
        wordType: 'verb',
        german: "reiten",
        english: "to ride (a horse)",
        separable: false,
        coreForms: {
          infinitive: "reiten",
          thirdPerson: "reitet",
          preterite: "ritt",
          perfect: "ist geritten"
        },
        exampleGerman: [
          { text: "Meine", case: "none" },
          { text: " ", case: "none" },
          { text: "Tochter", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "lernt", case: "verb" },
          { text: " ", case: "none" },
          { text: "reiten", case: "verb" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "My daughter is learning to ride.",
        clozeParts: ["Meine Tochter lernt ", "."],
        clozeAnswers: ["reiten"]
      } as Verb,
      {
        id: createWordId("freizeit-sport-012"),
        wordType: 'noun',
        german: "Ski",
        article: "der",
        plural: "Ski/Skier",
        english: "ski",
        exampleGerman: [
          { text: "Im", case: "none" },
          { text: " ", case: "none" },
          { text: "Winter", case: "dativ" },
          { text: " ", case: "none" },
          { text: "fahre", case: "verb" },
          { text: " ", case: "none" },
          { text: "ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "Ski", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "In winter I go skiing.",
        clozeParts: ["Im Winter fahre ich ", "."],
        clozeAnswers: ["Ski"]
      } as Noun,
      {
        id: createWordId("freizeit-sport-013"),
        wordType: 'verb',
        german: "trainieren",
        english: "to train, to exercise",
        separable: false,
        coreForms: {
          infinitive: "trainieren",
          thirdPerson: "trainiert",
          preterite: "trainierte",
          perfect: "hat trainiert"
        },
        exampleGerman: [
          { text: "Er", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "trainiert", case: "verb" },
          { text: " ", case: "none" },
          { text: "dreimal", case: "none" },
          { text: " ", case: "none" },
          { text: "pro", case: "none" },
          { text: " ", case: "none" },
          { text: "Woche", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "He trains three times per week.",
        clozeParts: ["Er ", " dreimal pro Woche."],
        clozeAnswers: ["trainiert"]
      } as Verb,
      {
        id: createWordId("freizeit-sport-014"),
        wordType: 'noun',
        german: "Training",
        article: "das",
        plural: "Trainings",
        english: "training, practice",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Training", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "beginnt", case: "verb" },
          { text: " ", case: "none" },
          { text: "um", case: "none" },
          { text: " ", case: "none" },
          { text: "18", case: "none" },
          { text: " ", case: "none" },
          { text: "Uhr", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The training starts at 6 PM.",
        clozeParts: ["Das ", " beginnt um 18 Uhr."],
        clozeAnswers: ["Training"]
      } as Noun,
      {
        id: createWordId("freizeit-sport-015"),
        wordType: 'adjective',
        german: "fit",
        english: "fit, in shape",
        exampleGerman: [
          { text: "Ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "möchte", case: "verb" },
          { text: " ", case: "none" },
          { text: "fit", case: "none" },
          { text: " ", case: "none" },
          { text: "bleiben", case: "verb" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "I want to stay fit.",
        clozeParts: ["Ich möchte ", " bleiben."],
        clozeAnswers: ["fit"]
      } as Adjective
    ],
    "Bewegungsverben": [
      {
        id: createWordId("freizeit-bewegung-001"),
        wordType: 'verb',
        german: "gehen",
        english: "to go, to walk",
        separable: false,
        coreForms: {
          infinitive: "gehen",
          thirdPerson: "geht",
          preterite: "ging",
          perfect: "ist gegangen"
        },
        exampleGerman: [
          { text: "Lass", case: "verb" },
          { text: " ", case: "none" },
          { text: "uns", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "spazieren", case: "none" },
          { text: " ", case: "none" },
          { text: "gehen", case: "verb" },
          { text: "!", case: "none" }
        ],
        exampleEnglish: "Let's go for a walk!",
        clozeParts: ["Lass uns spazieren ", "!"],
        clozeAnswers: ["gehen"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-002"),
        wordType: 'verb',
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
          { text: "Kommst", case: "verb" },
          { text: " ", case: "none" },
          { text: "du", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "mit", case: "none" },
          { text: " ", case: "none" },
          { text: "zum", case: "none" },
          { text: " ", case: "none" },
          { text: "Sport", case: "dativ" },
          { text: "?", case: "none" }
        ],
        exampleEnglish: "Are you coming to sports?",
        clozeParts: ["", " du mit zum Sport?"],
        clozeAnswers: ["Kommst"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-003"),
        wordType: 'verb',
        german: "laufen",
        english: "to run, to walk",
        separable: false,
        coreForms: {
          infinitive: "laufen",
          thirdPerson: "läuft",
          preterite: "lief",
          perfect: "ist gelaufen"
        },
        exampleGerman: [
          { text: "Der", case: "none" },
          { text: " ", case: "none" },
          { text: "Hund", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "läuft", case: "verb" },
          { text: " ", case: "none" },
          { text: "schnell", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The dog runs fast.",
        clozeParts: ["Der Hund ", " schnell."],
        clozeAnswers: ["läuft"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-004"),
        wordType: 'verb',
        german: "fallen",
        english: "to fall",
        separable: false,
        coreForms: {
          infinitive: "fallen",
          thirdPerson: "fällt",
          preterite: "fiel",
          perfect: "ist gefallen"
        },
        exampleGerman: [
          { text: "Pass", case: "verb" },
          { text: " ", case: "none" },
          { text: "auf", case: "none" },
          { text: ",", case: "none" },
          { text: " ", case: "none" },
          { text: "dass", case: "none" },
          { text: " ", case: "none" },
          { text: "du", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "nicht", case: "none" },
          { text: " ", case: "none" },
          { text: "fällst", case: "verb" },
          { text: "!", case: "none" }
        ],
        exampleEnglish: "Be careful not to fall!",
        clozeParts: ["Pass auf, dass du nicht ", "!"],
        clozeAnswers: ["fällst"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-005"),
        wordType: 'verb',
        german: "steigen",
        english: "to climb, to rise",
        separable: false,
        coreForms: {
          infinitive: "steigen",
          thirdPerson: "steigt",
          preterite: "stieg",
          perfect: "ist gestiegen"
        },
        exampleGerman: [
          { text: "Wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "steigen", case: "verb" },
          { text: " ", case: "none" },
          { text: "auf", case: "none" },
          { text: " ", case: "none" },
          { text: "den Berg", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "We climb the mountain.",
        clozeParts: ["Wir ", " auf den Berg."],
        clozeAnswers: ["steigen"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-006"),
        wordType: 'verb',
        german: "springen",
        english: "to jump",
        separable: false,
        coreForms: {
          infinitive: "springen",
          thirdPerson: "springt",
          preterite: "sprang",
          perfect: "ist gesprungen"
        },
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Kinder", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "springen", case: "verb" },
          { text: " ", case: "none" },
          { text: "auf", case: "none" },
          { text: " ", case: "none" },
          { text: "dem Trampolin", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The children jump on the trampoline.",
        clozeParts: ["Die Kinder ", " auf dem Trampolin."],
        clozeAnswers: ["springen"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-007"),
        wordType: 'verb',
        german: "rennen",
        english: "to run (fast)",
        separable: false,
        coreForms: {
          infinitive: "rennen",
          thirdPerson: "rennt",
          preterite: "rannte",
          perfect: "ist gerannt"
        },
        exampleGerman: [
          { text: "Er", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "rennt", case: "verb" },
          { text: " ", case: "none" },
          { text: "zum", case: "none" },
          { text: " ", case: "none" },
          { text: "Bus", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "He runs to the bus.",
        clozeParts: ["Er ", " zum Bus."],
        clozeAnswers: ["rennt"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-008"),
        wordType: 'verb',
        german: "hüpfen",
        english: "to hop",
        separable: false,
        coreForms: {
          infinitive: "hüpfen",
          thirdPerson: "hüpft",
          preterite: "hüpfte",
          perfect: "ist gehüpft"
        },
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Mädchen", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "hüpft", case: "verb" },
          { text: " ", case: "none" },
          { text: "vor", case: "none" },
          { text: " ", case: "none" },
          { text: "Freude", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The girl hops with joy.",
        clozeParts: ["Das Mädchen ", " vor Freude."],
        clozeAnswers: ["hüpft"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-009"),
        wordType: 'verb',
        german: "sich bewegen",
        english: "to move",
        reflexive: true,
        separable: false,
        coreForms: {
          infinitive: "sich bewegen",
          thirdPerson: "bewegt sich",
          preterite: "bewegte sich",
          perfect: "hat sich bewegt"
        },
        exampleGerman: [
          { text: "Du", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "musst", case: "verb" },
          { text: " ", case: "none" },
          { text: "dich", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "mehr", case: "none" },
          { text: " ", case: "none" },
          { text: "bewegen", case: "verb" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "You need to move more.",
        clozeParts: ["Du musst ", " mehr ", "."],
        clozeAnswers: ["dich", "bewegen"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-010"),
        wordType: 'verb',
        german: "ziehen",
        english: "to pull",
        separable: false,
        coreForms: {
          infinitive: "ziehen",
          thirdPerson: "zieht",
          preterite: "zog",
          perfect: "hat gezogen"
        },
        exampleGerman: [
          { text: "Zieh", case: "verb" },
          { text: " ", case: "none" },
          { text: "bitte", case: "none" },
          { text: " ", case: "none" },
          { text: "die", case: "none" },
          { text: " ", case: "none" },
          { text: "Tür", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "zu", case: "none" },
          { text: "!", case: "none" }
        ],
        exampleEnglish: "Please pull the door closed!",
        clozeParts: ["", " bitte die Tür zu!"],
        clozeAnswers: ["Zieh"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-011"),
        wordType: 'verb',
        german: "drücken",
        english: "to push, to press",
        separable: false,
        coreForms: {
          infinitive: "drücken",
          thirdPerson: "drückt",
          preterite: "drückte",
          perfect: "hat gedrückt"
        },
        exampleGerman: [
          { text: "Drücken", case: "verb" },
          { text: " ", case: "none" },
          { text: "Sie", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "den Knopf", case: "akkusativ" },
          { text: "!", case: "none" }
        ],
        exampleEnglish: "Press the button!",
        clozeParts: ["", " Sie den Knopf!"],
        clozeAnswers: ["Drücken"]
      } as Verb,
      {
        id: createWordId("freizeit-bewegung-012"),
        wordType: 'verb',
        german: "werfen",
        english: "to throw",
        separable: false,
        coreForms: {
          infinitive: "werfen",
          thirdPerson: "wirft",
          preterite: "warf",
          perfect: "hat geworfen"
        },
        exampleGerman: [
          { text: "Er", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "wirft", case: "verb" },
          { text: " ", case: "none" },
          { text: "den Ball", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "weit", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "He throws the ball far.",
        clozeParts: ["Er ", " den Ball weit."],
        clozeAnswers: ["wirft"]
      } as Verb
    ],
    "Sportplätze und Teams": [
      {
        id: createWordId("freizeit-teams-001"),
        wordType: 'noun',
        german: "Sportplatz",
        article: "der",
        plural: "Sportplätze",
        english: "sports field",
        exampleGerman: [
          { text: "Der", case: "none" },
          { text: " ", case: "none" },
          { text: "Sportplatz", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "nass", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The sports field is wet.",
        clozeParts: ["Der ", " ist nass."],
        clozeAnswers: ["Sportplatz"]
      } as Noun,
      {
        id: createWordId("freizeit-teams-002"),
        wordType: 'noun',
        german: "Mannschaft",
        article: "die",
        plural: "Mannschaften",
        english: "team",
        exampleGerman: [
          { text: "Unsere", case: "none" },
          { text: " ", case: "none" },
          { text: "Mannschaft", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "hat", case: "verb" },
          { text: " ", case: "none" },
          { text: "gewonnen", case: "verb" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "Our team won.",
        clozeParts: ["Unsere ", " hat gewonnen."],
        clozeAnswers: ["Mannschaft"]
      } as Noun,
      {
        id: createWordId("freizeit-teams-003"),
        wordType: 'noun',
        german: "Team",
        article: "das",
        plural: "Teams",
        english: "team",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Team", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "arbeitet", case: "verb" },
          { text: " ", case: "none" },
          { text: "gut", case: "none" },
          { text: " ", case: "none" },
          { text: "zusammen", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The team works well together.",
        clozeParts: ["Das ", " arbeitet gut zusammen."],
        clozeAnswers: ["Team"]
      } as Noun,
      {
        id: createWordId("freizeit-teams-004"),
        wordType: 'noun',
        german: "Ball",
        article: "der",
        plural: "Bälle",
        english: "ball",
        exampleGerman: [
          { text: "Wirf", case: "verb" },
          { text: " ", case: "none" },
          { text: "mir", case: "dativ" },
          { text: " ", case: "none" },
          { text: "den Ball", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "zu", case: "none" },
          { text: "!", case: "none" }
        ],
        exampleEnglish: "Throw me the ball!",
        clozeParts: ["Wirf mir den ", " zu!"],
        clozeAnswers: ["Ball"]
      } as Noun,
      {
        id: createWordId("freizeit-teams-005"),
        wordType: 'noun',
        german: "Gruppe",
        article: "die",
        plural: "Gruppen",
        english: "group",
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Gruppe", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "trifft", case: "verb" },
          { text: " ", case: "none" },
          { text: "sich", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "mittwochs", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The group meets on Wednesdays.",
        clozeParts: ["Die ", " trifft sich mittwochs."],
        clozeAnswers: ["Gruppe"]
      } as Noun
    ],
    "Musik und Künste": [
      {
        id: createWordId("freizeit-musik-001"),
        wordType: 'noun',
        german: "Musik",
        article: "die",
        plural: "-",
        english: "music",
        exampleGerman: [
          { text: "Ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "höre", case: "verb" },
          { text: " ", case: "none" },
          { text: "gern", case: "none" },
          { text: " ", case: "none" },
          { text: "Musik", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "I like listening to music.",
        clozeParts: ["Ich höre gern ", "."],
        clozeAnswers: ["Musik"]
      } as Noun,
      {
        id: createWordId("freizeit-musik-002"),
        wordType: 'verb',
        german: "singen",
        english: "to sing",
        separable: false,
        coreForms: {
          infinitive: "singen",
          thirdPerson: "singt",
          preterite: "sang",
          perfect: "hat gesungen"
        },
        exampleGerman: [
          { text: "Sie", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "singt", case: "verb" },
          { text: " ", case: "none" },
          { text: "sehr", case: "none" },
          { text: " ", case: "none" },
          { text: "schön", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "She sings very beautifully.",
        clozeParts: ["Sie ", " sehr schön."],
        clozeAnswers: ["singt"]
      } as Verb,
      {
        id: createWordId("freizeit-musik-003"),
        wordType: 'noun',
        german: "Lied",
        article: "das",
        plural: "Lieder",
        english: "song",
        exampleGerman: [
          { text: "Kennst", case: "verb" },
          { text: " ", case: "none" },
          { text: "du", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "dieses", case: "none" },
          { text: " ", case: "none" },
          { text: "Lied", case: "akkusativ" },
          { text: "?", case: "none" }
        ],
        exampleEnglish: "Do you know this song?",
        clozeParts: ["Kennst du dieses ", "?"],
        clozeAnswers: ["Lied"]
      } as Noun,
      {
        id: createWordId("freizeit-musik-004"),
        wordType: 'noun',
        german: "Gitarre",
        article: "die",
        plural: "Gitarren",
        english: "guitar",
        exampleGerman: [
          { text: "Er", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "spielt", case: "verb" },
          { text: " ", case: "none" },
          { text: "Gitarre", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "He plays guitar.",
        clozeParts: ["Er spielt ", "."],
        clozeAnswers: ["Gitarre"]
      } as Noun,
      {
        id: createWordId("freizeit-musik-005"),
        wordType: 'noun',
        german: "Klavier",
        article: "das",
        plural: "Klaviere",
        english: "piano",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Klavier", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "steht", case: "verb" },
          { text: " ", case: "none" },
          { text: "im", case: "none" },
          { text: " ", case: "none" },
          { text: "Wohnzimmer", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The piano is in the living room.",
        clozeParts: ["Das ", " steht im Wohnzimmer."],
        clozeAnswers: ["Klavier"]
      } as Noun,
      {
        id: createWordId("freizeit-musik-006"),
        wordType: 'noun',
        german: "Instrument",
        article: "das",
        plural: "Instrumente",
        english: "instrument",
        exampleGerman: [
          { text: "Welches", case: "none" },
          { text: " ", case: "none" },
          { text: "Instrument", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "spielst", case: "verb" },
          { text: " ", case: "none" },
          { text: "du", case: "nominativ" },
          { text: "?", case: "none" }
        ],
        exampleEnglish: "Which instrument do you play?",
        clozeParts: ["Welches ", " spielst du?"],
        clozeAnswers: ["Instrument"]
      } as Noun,
      {
        id: createWordId("freizeit-musik-007"),
        wordType: 'verb',
        german: "tanzen",
        english: "to dance",
        separable: false,
        coreForms: {
          infinitive: "tanzen",
          thirdPerson: "tanzt",
          preterite: "tanzte",
          perfect: "hat getanzt"
        },
        exampleGerman: [
          { text: "Wir", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "tanzen", case: "verb" },
          { text: " ", case: "none" },
          { text: "gern", case: "none" },
          { text: " ", case: "none" },
          { text: "Salsa", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "We like dancing salsa.",
        clozeParts: ["Wir ", " gern Salsa."],
        clozeAnswers: ["tanzen"]
      } as Verb,
      {
        id: createWordId("freizeit-musik-008"),
        wordType: 'noun',
        german: "Kunst",
        article: "die",
        plural: "Künste",
        english: "art",
        exampleGerman: [
          { text: "Moderne", case: "none" },
          { text: " ", case: "none" },
          { text: "Kunst", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "gefällt", case: "verb" },
          { text: " ", case: "none" },
          { text: "mir", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "I like modern art.",
        clozeParts: ["Moderne ", " gefällt mir."],
        clozeAnswers: ["Kunst"]
      } as Noun,
      {
        id: createWordId("freizeit-musik-009"),
        wordType: 'verb',
        german: "malen",
        english: "to paint",
        separable: false,
        coreForms: {
          infinitive: "malen",
          thirdPerson: "malt",
          preterite: "malte",
          perfect: "hat gemalt"
        },
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Kinder", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "malen", case: "verb" },
          { text: " ", case: "none" },
          { text: "ein Bild", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The children paint a picture.",
        clozeParts: ["Die Kinder ", " ein Bild."],
        clozeAnswers: ["malen"]
      } as Verb,
      {
        id: createWordId("freizeit-musik-010"),
        wordType: 'verb',
        german: "zeichnen",
        english: "to draw",
        separable: false,
        coreForms: {
          infinitive: "zeichnen",
          thirdPerson: "zeichnet",
          preterite: "zeichnete",
          perfect: "hat gezeichnet"
        },
        exampleGerman: [
          { text: "Sie", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "zeichnet", case: "verb" },
          { text: " ", case: "none" },
          { text: "sehr", case: "none" },
          { text: " ", case: "none" },
          { text: "gut", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "She draws very well.",
        clozeParts: ["Sie ", " sehr gut."],
        clozeAnswers: ["zeichnet"]
      } as Verb,
      {
        id: createWordId("freizeit-musik-011"),
        wordType: 'adjective',
        german: "kreativ",
        english: "creative",
        exampleGerman: [
          { text: "Er", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "sehr", case: "none" },
          { text: " ", case: "none" },
          { text: "kreativ", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "He is very creative.",
        clozeParts: ["Er ist sehr ", "."],
        clozeAnswers: ["kreativ"]
      } as Adjective,
      {
        id: createWordId("freizeit-musik-012"),
        wordType: 'noun',
        german: "Band",
        article: "die",
        plural: "Bands",
        english: "band",
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Band", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "spielt", case: "verb" },
          { text: " ", case: "none" },
          { text: "heute", case: "none" },
          { text: " ", case: "none" },
          { text: "Abend", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The band plays tonight.",
        clozeParts: ["Die ", " spielt heute Abend."],
        clozeAnswers: ["Band"]
      } as Noun
    ],
    "Hobbys und Sammeln": [
      {
        id: createWordId("freizeit-hobby-001"),
        wordType: 'noun',
        german: "Hobby",
        article: "das",
        plural: "Hobbys",
        english: "hobby",
        exampleGerman: [
          { text: "Was", case: "none" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "dein", case: "none" },
          { text: " ", case: "none" },
          { text: "Hobby", case: "nominativ" },
          { text: "?", case: "none" }
        ],
        exampleEnglish: "What is your hobby?",
        clozeParts: ["Was ist dein ", "?"],
        clozeAnswers: ["Hobby"]
      } as Noun,
      {
        id: createWordId("freizeit-hobby-002"),
        wordType: 'verb',
        german: "sammeln",
        english: "to collect",
        separable: false,
        coreForms: {
          infinitive: "sammeln",
          thirdPerson: "sammelt",
          preterite: "sammelte",
          perfect: "hat gesammelt"
        },
        exampleGerman: [
          { text: "Er", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "sammelt", case: "verb" },
          { text: " ", case: "none" },
          { text: "Briefmarken", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "He collects stamps.",
        clozeParts: ["Er ", " Briefmarken."],
        clozeAnswers: ["sammelt"]
      } as Verb,
      {
        id: createWordId("freizeit-hobby-003"),
        wordType: 'verb',
        german: "basteln",
        english: "to do crafts",
        separable: false,
        coreForms: {
          infinitive: "basteln",
          thirdPerson: "bastelt",
          preterite: "bastelte",
          perfect: "hat gebastelt"
        },
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Kinder", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "basteln", case: "verb" },
          { text: " ", case: "none" },
          { text: "gern", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The children like doing crafts.",
        clozeParts: ["Die Kinder ", " gern."],
        clozeAnswers: ["basteln"]
      } as Verb,
      {
        id: createWordId("freizeit-hobby-004"),
        wordType: 'verb',
        german: "fotografieren",
        english: "to photograph",
        separable: false,
        coreForms: {
          infinitive: "fotografieren",
          thirdPerson: "fotografiert",
          preterite: "fotografierte",
          perfect: "hat fotografiert"
        },
        exampleGerman: [
          { text: "Sie", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "fotografiert", case: "verb" },
          { text: " ", case: "none" },
          { text: "die Natur", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "She photographs nature.",
        clozeParts: ["Sie ", " die Natur."],
        clozeAnswers: ["fotografiert"]
      } as Verb,
      {
        id: createWordId("freizeit-hobby-005"),
        wordType: 'noun',
        german: "Fotoapparat",
        article: "der",
        plural: "Fotoapparate",
        english: "camera",
        exampleGerman: [
          { text: "Der", case: "none" },
          { text: " ", case: "none" },
          { text: "Fotoapparat", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "kaputt", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The camera is broken.",
        clozeParts: ["Der ", " ist kaputt."],
        clozeAnswers: ["Fotoapparat"]
      } as Noun,
      {
        id: createWordId("freizeit-hobby-006"),
        wordType: 'noun',
        german: "Foto",
        article: "das",
        plural: "Fotos",
        english: "photo",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Foto", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "schön", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The photo is nice.",
        clozeParts: ["Das ", " ist schön."],
        clozeAnswers: ["Foto"]
      } as Noun,
      {
        id: createWordId("freizeit-hobby-007"),
        wordType: 'adjective',
        german: "interessant",
        english: "interesting",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Buch", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "sehr", case: "none" },
          { text: " ", case: "none" },
          { text: "interessant", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The book is very interesting.",
        clozeParts: ["Das Buch ist sehr ", "."],
        clozeAnswers: ["interessant"]
      } as Adjective,
      {
        id: createWordId("freizeit-hobby-008"),
        wordType: 'noun',
        german: "Interesse",
        article: "das",
        plural: "Interessen",
        english: "interest",
        exampleGerman: [
          { text: "Ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "habe", case: "verb" },
          { text: " ", case: "none" },
          { text: "viele", case: "none" },
          { text: " ", case: "none" },
          { text: "Interessen", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "I have many interests.",
        clozeParts: ["Ich habe viele ", "."],
        clozeAnswers: ["Interessen"]
      } as Noun
    ],
    "Entspannung und Medien": [
      {
        id: createWordId("freizeit-entspannung-001"),
        wordType: 'noun',
        german: "Freizeit",
        article: "die",
        plural: "-",
        english: "free time, leisure",
        exampleGerman: [
          { text: "In", case: "none" },
          { text: " ", case: "none" },
          { text: "meiner", case: "none" },
          { text: " ", case: "none" },
          { text: "Freizeit", case: "dativ" },
          { text: " ", case: "none" },
          { text: "lese", case: "verb" },
          { text: " ", case: "none" },
          { text: "ich", case: "nominativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "In my free time I read.",
        clozeParts: ["In meiner ", " lese ich."],
        clozeAnswers: ["Freizeit"]
      } as Noun,
      {
        id: createWordId("freizeit-entspannung-002"),
        wordType: 'verb',
        german: "entspannen",
        english: "to relax",
        separable: false,
        coreForms: {
          infinitive: "entspannen",
          thirdPerson: "entspannt",
          preterite: "entspannte",
          perfect: "hat entspannt"
        },
        exampleGerman: [
          { text: "Am", case: "none" },
          { text: " ", case: "none" },
          { text: "Wochenende", case: "dativ" },
          { text: " ", case: "none" },
          { text: "entspanne", case: "verb" },
          { text: " ", case: "none" },
          { text: "ich", case: "nominativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "On the weekend I relax.",
        clozeParts: ["Am Wochenende ", " ich."],
        clozeAnswers: ["entspanne"]
      } as Verb,
      {
        id: createWordId("freizeit-entspannung-003"),
        wordType: 'verb',
        german: "sich ausruhen",
        english: "to rest",
        reflexive: true,
        separable: false,
        coreForms: {
          infinitive: "sich ausruhen",
          thirdPerson: "ruht sich aus",
          preterite: "ruhte sich aus",
          perfect: "hat sich ausgeruht"
        },
        exampleGerman: [
          { text: "Nach", case: "none" },
          { text: " ", case: "none" },
          { text: "dem Sport", case: "dativ" },
          { text: " ", case: "none" },
          { text: "ruhe", case: "verb" },
          { text: " ", case: "none" },
          { text: "ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "mich", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "aus", case: "verb" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "After sports I rest.",
        clozeParts: ["Nach dem Sport ", " ich ", " ", "."],
        clozeAnswers: ["ruhe", "mich", "aus"]
      } as Verb,
      {
        id: createWordId("freizeit-entspannung-004"),
        wordType: 'adjective',
        german: "frei",
        english: "free",
        exampleGerman: [
          { text: "Morgen", case: "none" },
          { text: " ", case: "none" },
          { text: "habe", case: "verb" },
          { text: " ", case: "none" },
          { text: "ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "frei", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "Tomorrow I'm free.",
        clozeParts: ["Morgen habe ich ", "."],
        clozeAnswers: ["frei"]
      } as Adjective,
      {
        id: createWordId("freizeit-entspannung-005"),
        wordType: 'noun',
        german: "Ruhe",
        article: "die",
        plural: "-",
        english: "peace, quiet",
        exampleGerman: [
          { text: "Ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "brauche", case: "verb" },
          { text: " ", case: "none" },
          { text: "etwas", case: "none" },
          { text: " ", case: "none" },
          { text: "Ruhe", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "I need some peace.",
        clozeParts: ["Ich brauche etwas ", "."],
        clozeAnswers: ["Ruhe"]
      } as Noun,
      {
        id: createWordId("freizeit-entspannung-006"),
        wordType: 'adjective',
        german: "ruhig",
        english: "quiet, calm",
        exampleGerman: [
          { text: "Es", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "ist", case: "verb" },
          { text: " ", case: "none" },
          { text: "sehr", case: "none" },
          { text: " ", case: "none" },
          { text: "ruhig", case: "none" },
          { text: " ", case: "none" },
          { text: "hier", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "It's very quiet here.",
        clozeParts: ["Es ist sehr ", " hier."],
        clozeAnswers: ["ruhig"]
      } as Adjective,
      {
        id: createWordId("freizeit-entspannung-007"),
        wordType: 'verb',
        german: "fernsehen",
        english: "to watch TV",
        separable: false,
        coreForms: {
          infinitive: "fernsehen",
          thirdPerson: "sieht fern",
          preterite: "sah fern",
          perfect: "hat ferngesehen"
        },
        exampleGerman: [
          { text: "Abends", case: "none" },
          { text: " ", case: "none" },
          { text: "sehe", case: "verb" },
          { text: " ", case: "none" },
          { text: "ich", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "gern", case: "none" },
          { text: " ", case: "none" },
          { text: "fern", case: "verb" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "In the evening I like watching TV.",
        clozeParts: ["Abends ", " ich gern ", "."],
        clozeAnswers: ["sehe", "fern"]
      } as Verb,
      {
        id: createWordId("freizeit-entspannung-008"),
        wordType: 'noun',
        german: "Fernseher",
        article: "der",
        plural: "Fernseher",
        english: "television",
        exampleGerman: [
          { text: "Der", case: "none" },
          { text: " ", case: "none" },
          { text: "Fernseher", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "läuft", case: "verb" },
          { text: " ", case: "none" },
          { text: "zu", case: "none" },
          { text: " ", case: "none" },
          { text: "laut", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The TV is too loud.",
        clozeParts: ["Der ", " läuft zu laut."],
        clozeAnswers: ["Fernseher"]
      } as Noun,
      {
        id: createWordId("freizeit-entspannung-009"),
        wordType: 'verb',
        german: "hören",
        english: "to hear, to listen",
        separable: false,
        coreForms: {
          infinitive: "hören",
          thirdPerson: "hört",
          preterite: "hörte",
          perfect: "hat gehört"
        },
        exampleGerman: [
          { text: "Hörst", case: "verb" },
          { text: " ", case: "none" },
          { text: "du", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "die Musik", case: "akkusativ" },
          { text: "?", case: "none" }
        ],
        exampleEnglish: "Do you hear the music?",
        clozeParts: ["", " du die Musik?"],
        clozeAnswers: ["Hörst"]
      } as Verb,
      {
        id: createWordId("freizeit-entspannung-010"),
        wordType: 'noun',
        german: "Radio",
        article: "das",
        plural: "Radios",
        english: "radio",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Radio", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "spielt", case: "verb" },
          { text: " ", case: "none" },
          { text: "mein", case: "none" },
          { text: " ", case: "none" },
          { text: "Lieblingslied", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The radio is playing my favorite song.",
        clozeParts: ["Das ", " spielt mein Lieblingslied."],
        clozeAnswers: ["Radio"]
      } as Noun
    ],
    "Spiele und Unterhaltung": [
      {
        id: createWordId("freizeit-spiele-001"),
        wordType: 'verb',
        german: "spielen",
        english: "to play",
        separable: false,
        coreForms: {
          infinitive: "spielen",
          thirdPerson: "spielt",
          preterite: "spielte",
          perfect: "hat gespielt"
        },
        exampleGerman: [
          { text: "Die", case: "none" },
          { text: " ", case: "none" },
          { text: "Kinder", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "spielen", case: "verb" },
          { text: " ", case: "none" },
          { text: "im", case: "none" },
          { text: " ", case: "none" },
          { text: "Garten", case: "dativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The children play in the garden.",
        clozeParts: ["Die Kinder ", " im Garten."],
        clozeAnswers: ["spielen"]
      } as Verb,
      {
        id: createWordId("freizeit-spiele-002"),
        wordType: 'noun',
        german: "Spiel",
        article: "das",
        plural: "Spiele",
        english: "game",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Spiel", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "macht", case: "verb" },
          { text: " ", case: "none" },
          { text: "Spaß", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The game is fun.",
        clozeParts: ["Das ", " macht Spaß."],
        clozeAnswers: ["Spiel"]
      } as Noun,
      {
        id: createWordId("freizeit-spiele-003"),
        wordType: 'noun',
        german: "Comic",
        article: "der/das",
        plural: "Comics",
        english: "comic",
        exampleGerman: [
          { text: "Er", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "liest", case: "verb" },
          { text: " ", case: "none" },
          { text: "gern", case: "none" },
          { text: " ", case: "none" },
          { text: "Comics", case: "akkusativ" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "He likes reading comics.",
        clozeParts: ["Er liest gern ", "."],
        clozeAnswers: ["Comics"]
      } as Noun,
      {
        id: createWordId("freizeit-spiele-004"),
        wordType: 'noun',
        german: "Quiz",
        article: "das",
        plural: "Quiz",
        english: "quiz",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "Quiz", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "war", case: "verb" },
          { text: " ", case: "none" },
          { text: "schwer", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The quiz was difficult.",
        clozeParts: ["Das ", " war schwer."],
        clozeAnswers: ["Quiz"]
      } as Noun,
      {
        id: createWordId("freizeit-spiele-005"),
        wordType: 'adjective',
        german: "lustig",
        english: "funny",
        exampleGerman: [
          { text: "Der", case: "none" },
          { text: " ", case: "none" },
          { text: "Film", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "war", case: "verb" },
          { text: " ", case: "none" },
          { text: "sehr", case: "none" },
          { text: " ", case: "none" },
          { text: "lustig", case: "none" },
          { text: ".", case: "none" }
        ],
        exampleEnglish: "The movie was very funny.",
        clozeParts: ["Der Film war sehr ", "."],
        clozeAnswers: ["lustig"]
      } as Adjective,
      {
        id: createWordId("freizeit-spiele-006"),
        wordType: 'noun',
        german: "Spaß",
        article: "der",
        plural: "-",
        english: "fun",
        exampleGerman: [
          { text: "Viel", case: "none" },
          { text: " ", case: "none" },
          { text: "Spaß", case: "akkusativ" },
          { text: " ", case: "none" },
          { text: "beim", case: "none" },
          { text: " ", case: "none" },
          { text: "Spielen", case: "dativ" },
          { text: "!", case: "none" }
        ],
        exampleEnglish: "Have fun playing!",
        clozeParts: ["Viel ", " beim Spielen!"],
        clozeAnswers: ["Spaß"]
      } as Noun,
      {
        id: createWordId("freizeit-spiele-007"),
        wordType: 'adjective',
        german: "toll",
        english: "great",
        exampleGerman: [
          { text: "Das", case: "none" },
          { text: " ", case: "none" },
          { text: "war", case: "verb" },
          { text: " ", case: "none" },
          { text: "wirklich", case: "none" },
          { text: " ", case: "none" },
          { text: "toll", case: "none" },
          { text: "!", case: "none" }
        ],
        exampleEnglish: "That was really great!",
        clozeParts: ["Das war wirklich ", "!"],
        clozeAnswers: ["toll"]
      } as Adjective,
      {
        id: createWordId("freizeit-spiele-008"),
        wordType: 'adjective',
        german: "super",
        english: "super, great",
        exampleGerman: [
          { text: "Du", case: "nominativ" },
          { text: " ", case: "none" },
          { text: "hast", case: "verb" },
          { text: " ", case: "none" },
          { text: "super", case: "none" },
          { text: " ", case: "none" },
          { text: "gespielt", case: "verb" },
          { text: "!", case: "none" }
        ],
        exampleEnglish: "You played great!",
        clozeParts: ["Du hast ", " gespielt!"],
        clozeAnswers: ["super"]
      } as Adjective
    ]
  }
});