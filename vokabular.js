// packages/trainer-themen/vokabular.js
import { vokabularPerson } from './vokabular_person';
// Importiere hier zukünftig weitere themenspezifische Vokabulardateien
import { vokabularPersoenlicheBeziehungen } from './vokabular_persoenliche_beziehungen';
import { vokabularMenschlicherKoerperGesundheit } from './vokabular_menschlicher_koerper_gesundheit';
import { vokabularWohnen } from './vokabular_wohnen'; // NEU: Import für Wohnen
import { vokabularUmwelt } from './vokabular_umwelt'; // NEU: Import für Umwelt
import { vokabularEssenTrinken } from './vokabular_essen_trinken';
import { vokabularKommunikationsmittel } from './vokabular_Kommunikationsmittel'; // NEU: Import für Kommunikationsmittel
import { vokabularReisenVerkehr } from './vokabular_reisen_verkehr'; // NEU: Import für Reisen und Verkehr
import { vokabularEinkaufen } from './vokabular_einkaufen'; // NEU: Import für Einkaufen
import { vokabularLernen } from './vokabular_lernen'; // NEU: Import für Lernen
import { vokabularFreizeitUnterhaltung } from './vokabular_freizeit_unterhaltung'; // NEU: Import für Freizeit und Unterhaltung

export const vokabular = {
    ...vokabularPerson,
    ...vokabularPersoenlicheBeziehungen,
    ...vokabularMenschlicherKoerperGesundheit,
    ...vokabularWohnen,
    ...vokabularUmwelt,
    ...vokabularEssenTrinken,
    ...vokabularKommunikationsmittel, // NEU: Hinzufügen des Themas Kommunikationsmittel
    ...vokabularReisenVerkehr,
    ...vokabularEinkaufen,
    ...vokabularLernen,
    ...vokabularFreizeitUnterhaltung, // NEU: Hinzufügen des Themas Freizeit und Unterhaltung
    // ... weitere Themen hier mit dem Spread-Operator einfügen
};