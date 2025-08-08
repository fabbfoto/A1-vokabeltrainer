// vokabular.ts
// Zentrale TypeScript-Datei für A2-Vokabulare

import type { VocabularyStructure } from './src/core/types/vocabulary';
import { vokabular_a2_01_persoenliche_informationen } from './a2-vokabular/okabular_a2_01_persoenliche_informationen';
import { vokabular_a2_02_familie_kinder } from './a2-vokabular/vokabular_a2_02_familie_kinder';
import { vokabular_a2_03_mein_wohnort } from './a2-vokabular/vokabular_a2_03_mein_wohnort';
import { vokabularA2_04_meineWohnung } from './a2-vokabular/vokabular_a2_04_meine_wohnung';
import { vokabular_a2_05_sprachen_deutsch_lernen } from './a2-vokabular/vokabular_a2_05_sprachen_deutsch_lernen';
import { vokabular_a2_06_schule_ausbildung_studium } from './a2-vokabular/vokabular_a2_06_schule_ausbildung_studium';
import { vokabular_a2_07_arbeit_beruf } from './a2-vokabular/vokabular_a2_07_arbeit_beruf';
import { vokabular_a2_08_tagesablauf } from './a2-vokabular/vokabular_a2_08_tagesablauf';
import { vokabular_a2_09_freizeit_hobbys } from './a2-vokabular/vokabular_a2_09_freizeit_hobbys';
import { vokabularA2UrlaubReisen } from './a2-vokabular/vokabular_a2_10_urlaub_reisen';
import { vokabular_a2_11_geschmack_vorlieben } from './a2-vokabular/vokabular_a2_11_geschmack_vorlieben';
import { vokabular_a2_12_freunde_freundschaft } from './a2-vokabular/vokabular_a2_12_freunde_freundschaft';
import { vokabular_a2_13_plaene_wuensche } from './a2-vokabular/vokabular_a2_13_plaene_wuensche';
import { vokabular_a2_14_feste_einladungen } from './a2-vokabular/vokabular_a2_14_feste_einladungen';
import { vokabular_a2_15_kleidung } from './a2-vokabular/vokabular_a2_15_kleidung';
import { vokabular_a2_16_aussehen_charakter } from './a2-vokabular/vokabular_a2_16_aussehen_charakter';
import { vokabular_a2_17_koerper_gesundheit } from './a2-vokabular/vokabular_a2_17_koerper_gesundheit';
import { vokabularA2_18_medienKommunikation } from './a2-vokabular/vokabular_a2_18_medien_kommunikation';
import { vokabularA2_19_verkehrsmittel } from './a2-vokabular/vokabular_a2_19_verkehrsmittel';
import { vokabularA2_20_wetter } from './a2-vokabular/vokabular_a2_20_wetter';

// A2-Vokabulare zusammenführen - Alle verfügbaren Vokabulare
export const vokabular: VocabularyStructure = {
    ...vokabular_a2_01_persoenliche_informationen,
    ...vokabular_a2_02_familie_kinder,
    ...vokabular_a2_03_mein_wohnort,
    ...vokabularA2_04_meineWohnung,
    ...vokabular_a2_05_sprachen_deutsch_lernen,
    ...vokabular_a2_06_schule_ausbildung_studium,
    ...vokabular_a2_07_arbeit_beruf,
    ...vokabular_a2_08_tagesablauf,
    ...vokabular_a2_09_freizeit_hobbys,
    ...vokabularA2UrlaubReisen,
    ...vokabular_a2_11_geschmack_vorlieben,
    ...vokabular_a2_12_freunde_freundschaft,
    ...vokabular_a2_13_plaene_wuensche,
    ...vokabular_a2_14_feste_einladungen,
    ...vokabular_a2_15_kleidung,
    ...vokabular_a2_16_aussehen_charakter,
    ...vokabular_a2_17_koerper_gesundheit,
    ...vokabularA2_18_medienKommunikation,
    ...vokabularA2_19_verkehrsmittel,
    ...vokabularA2_20_wetter
};

// Export für Validierung
export {
    vokabular_a2_01_persoenliche_informationen,
    vokabular_a2_02_familie_kinder,
    vokabular_a2_03_mein_wohnort,
    vokabularA2_04_meineWohnung,
    vokabular_a2_05_sprachen_deutsch_lernen,
    vokabular_a2_06_schule_ausbildung_studium,
    vokabular_a2_07_arbeit_beruf,
    vokabular_a2_08_tagesablauf,
    vokabular_a2_09_freizeit_hobbys,
    vokabularA2UrlaubReisen,
    vokabular_a2_11_geschmack_vorlieben,
    vokabular_a2_12_freunde_freundschaft,
    vokabular_a2_13_plaene_wuensche,
    vokabular_a2_14_feste_einladungen,
    vokabular_a2_15_kleidung,
    vokabular_a2_16_aussehen_charakter,
    vokabular_a2_17_koerper_gesundheit,
    vokabularA2_18_medienKommunikation,
    vokabularA2_19_verkehrsmittel,
    vokabularA2_20_wetter
}; 