// vokabular.ts
// Zentrale TypeScript-Datei für alle Vokabulare

import {vokabularPerson } from './vokabular_person';
import {vokabularPersoenlicheBeziehungen } from './vokabular_persoenliche_beziehungen';
import {vokabularMenschlicherKoerperGesundheit } from './vokabular_menschlicher_koerper_gesundheit';
import {vokabularWohnen } from './vokabular_wohnen';
import {vokabularUmwelt } from './vokabular_umwelt';
import {vokabularEssenTrinken } from './vokabular_essen_trinken';
import {vokabularKommunikationsmittel } from './vokabular_Kommunikationsmittel';
import {vokabularReisenVerkehr } from './vokabular_reisen_verkehr';
import {vokabularEinkaufen } from './vokabular_einkaufen';
import {vokabularLernen } from './vokabular_lernen';
import {vokabularFreizeitUnterhaltung } from './vokabular_freizeit_unterhaltung';

import type {VocabularyStructure } from './shared/types/vocabulary.ts';

// Alle Vokabulare zusammenführen
export const vokabular: VocabularyStructure = {...vokabularPerson,
    ...vokabularPersoenlicheBeziehungen,
    ...vokabularMenschlicherKoerperGesundheit,
    ...vokabularWohnen,
    ...vokabularUmwelt,
    ...vokabularEssenTrinken,
    ...vokabularKommunikationsmittel,
    ...vokabularReisenVerkehr,
    ...vokabularEinkaufen,
    ...vokabularLernen,
    ...vokabularFreizeitUnterhaltung};

// Export für Validierung
export {vokabularPerson,
    vokabularPersoenlicheBeziehungen,
    vokabularMenschlicherKoerperGesundheit,
    vokabularWohnen,
    vokabularUmwelt,
    vokabularEssenTrinken,
    vokabularKommunikationsmittel,
    vokabularReisenVerkehr,
    vokabularEinkaufen,
    vokabularLernen,
    vokabularFreizeitUnterhaltung}; 