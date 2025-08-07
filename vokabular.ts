// vokabular.ts
// Zentrale TypeScript-Datei für A2-Vokabulare

import type { VocabularyStructure } from './src/core/types/vocabulary';
import { vokabular_a2_01_persoenliche_informationen } from './a2-vokabular/okabular_a2_01_persoenliche_informationen';

// A2-Vokabulare zusammenführen
export const vokabular: VocabularyStructure = {
    ...vokabular_a2_01_persoenliche_informationen
};

// Export für Validierung
export {
    vokabular_a2_01_persoenliche_informationen
}; 