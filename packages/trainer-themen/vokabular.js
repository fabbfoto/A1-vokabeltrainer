// packages/trainer-themen/vokabular.js
import { vokabularPerson } from './vokabular_person.js';
// Importiere hier zukünftig weitere themenspezifische Vokabulardateien
import { vokabularPersoenlicheBeziehungen } from './vokabular_persoenliche_beziehungen.js';
import { vokabularMenschlicherKoerperGesundheit } from './vokabular_menschlicher_koerper_gesundheit.js';
import { vokabularWohnen } from './vokabular_wohnen.js'; // NEU: Import für Wohnen
import { vokabularUmwelt } from './vokabular_umwelt.js'; // NEU: Import für Umwelt
import { vokabularEssenTrinken } from './vokabular_essen_trinken.js';
import { vokabularReisenVerkehr } from './vokabular_reisen_verkehr.js'; // NEU: Import für Reisen und Verkehr
import { vokabularEinkaufen } from './vokabular_einkaufen.js'; // NEU: Import für Einkaufen
import { vokabularLernen } from './vokabular_lernen.js'; // NEU: Import für Lernen
import { vokabularFreizeitUnterhaltung } from './vokabular_freizeit_unterhaltung.js'; // NEU: Import für Freizeit und Unterhaltung

export const vokabular = {
    ...vokabularPerson,
    ...vokabularPersoenlicheBeziehungen,
    ...vokabularMenschlicherKoerperGesundheit,
    ...vokabularWohnen,
    ...vokabularUmwelt,
    ...vokabularEssenTrinken,
    ...vokabularReisenVerkehr,
    ...vokabularEinkaufen,
    ...vokabularLernen,
    ...vokabularFreizeitUnterhaltung, // NEU: Hinzufügen des Themas Freizeit und Unterhaltung
    // ... weitere Themen hier mit dem Spread-Operator einfügen
};