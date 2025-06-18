// packages/trainer-themen/vokabular.js

export const vokabular = {

    // =========================================================================
    // HAUPT-THEMA: PERSON (von Seite 5 im PDF) 
    // =========================================================================
    "Person": {

        // --- UNTER-THEMA: Name --- 
        "Name": [
            {
                id: "person-name-001",
                wortart: "Nomen",
                german: "Familienname",
                artikel: "der",
                plural: "Familiennamen",
                english: "family name / surname",
                example_de: "Mein Familienname ist Schmidt.", // aus PDF, S. 12 
                example_en: "My family name is Schmidt.",
                cloze_parts: ["Mein ", " ist Schmidt."],
                cloze_answers: ["Familienname"]
            },
            {
                id: "person-name-002",
                wortart: "Verb",
                german: "heißen",
                english: "to be called",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "geheißen",
                konjugation_praesens: {
                    ich: "heiße",
                    du: "heißt",
                    er_sie_es: "heißt",
                    wir: "heißen",
                    ihr: "heißt",
                    sie_Sie: "heißen"
                },
                imperativ: {
                    du: "Heiß!",
                    ihr: "Heißt!"
                },
                example_de: "Wie heißt du?", // aus PDF, S. 14 
                example_en: "What are you called? / What is your name?",
                cloze_parts: ["Wie ", " du?"],
                cloze_answers: ["heißt"]
            }
        ],

        // --- UNTER-THEMA: Adresse --- 
        "Adresse": [
            {
                id: "person-adresse-001",
                wortart: "Nomen",
                german: "Adresse",
                artikel: "die",
                plural: "Adressen",
                english: "address",
                example_de: "Ich weiß die Adresse nicht.", // aus PDF, S. 9 
                example_en: "I don't know the address.",
                cloze_parts: ["Ich weiß die ", " nicht."],
                cloze_answers: ["Adresse"]
            },
            {
                id: "person-adresse-002",
                wortart: "Verb",
                german: "wohnen",
                english: "to live / to reside",
                trennbar: false,
                hilfsverb_perfekt: "haben",
                partizip_ii: "gewohnt",
                konjugation_praesens: {
                    ich: "wohne",
                    du: "wohnst",
                    er_sie_es: "wohnt",
                    wir: "wohnen",
                    ihr: "wohnt",
                    sie_Sie: "wohnen"
                },
                imperativ: {
                    du: "Wohn!",
                    ihr: "Wohnt!"
                },
                example_de: "Wo wohnst du?", // aus PDF, S. 20 
                example_en: "Where do you live?",
                cloze_parts: ["Wo ", " du?"],
                cloze_answers: ["wohnst"]
            }
        ],

        // --- UNTER-THEMA: Geburtstag --- 
        "Geburtstag": [
             {
                id: "person-geburtstag-001",
                wortart: "Nomen",
                german: "Geburtstag",
                artikel: "der",
                plural: "Geburtstage",
                english: "birthday",
                example_de: "Heute ist mein Geburtstag.", // aus PDF, S. 13 
                example_en: "Today is my birthday.",
                cloze_parts: ["Heute ist mein ", "."],
                cloze_answers: ["Geburtstag"]
            }
        ],
        
        // --- UNTER-THEMA: Familie --- 
        "Familie": [
            {
                id: "person-familie-001",
                wortart: "Nomen",
                german: "Mutter",
                artikel: "die",
                plural: "Mütter",
                english: "mother",
                example_de: "Meine Mutter ist arbeitslos.", // aus PDF, S. 9, aber aus originaler Blaupause übernommen
                example_en: "My mother is unemployed.",
                cloze_parts: ["Meine ", " ist arbeitslos."],
                cloze_answers: ["Mutter"]
            }
        ],

        // --- UNTER-THEMA: Herkunft --- 
        "Herkunft": [
            {
                id: "person-herkunft-001",
                wortart: "Verb",
                german: "kommen",
                english: "to come",
                trennbar: false,
                hilfsverb_perfekt: "sein",
                partizip_ii: "gekommen",
                konjugation_praesens: {
                    ich: "komme",
                    du: "kommst",
                    er_sie_es: "kommt",
                    wir: "kommen",
                    ihr: "kommt",
                    sie_Sie: "kommen"
                },
                imperativ: {
                    du: "Komm!",
                    ihr: "Kommt!"
                },
                example_de: "Ich komme aus Polen.", // aus PDF, S. 15 
                example_en: "I come from Poland.",
                cloze_parts: ["Ich ", " aus Polen."],
                cloze_answers: ["komme"]
            }
        ],
        
        // Leere Unter-Themen als Platzhalter, um die Struktur zu zeigen
        "Telefon": [], // 
        "Alter": [], // 
        "Geschlecht": [], // 
        "Aussehen": [] // 
    },

    // =========================================================================
    // NÄCHSTES HAUPT-THEMA WÜRDE HIER FOLGEN
    // =========================================================================
    "Reisen/Verkehr": {
        // ...
    }
};