import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          // Core functionality
          'core': [
            './src/core/types/trainer.ts',
            './src/core/types/vocabulary.ts',
            './src/core/types/ui.ts',
            './src/core/events/navigation-events.ts'
          ],
          // Services
          'services': [
            './src/services/error-counter-manager.ts',
            './src/services/mode-manager.ts',
            './src/services/mode-state-machine.ts',
            './src/services/navigation-state-manager.ts',
            './src/services/supabase.ts'
          ],
          // UI components
          'ui': [
            './src/ui/views/index.ts',
            './src/ui/views/navigation.ts',
            './src/ui/views/statistics.ts',
            './src/ui/components/test-result-modal.ts',
            './src/ui/components/ranking-ui.ts'
          ],
          // Utils
          'utils': [
            './src/utils/helfer.ts',
            './src/utils/test-generator.ts',
            './src/utils/trainer-helpers.ts',
            './src/utils/error-analysis.ts',
            './src/utils/performance-optimizer.ts'
          ]
        }
      },
      external: ['fsevents'] // Exclude fsevents from build
    },
    chunkSizeWarningLimit: 1000, // Erhöhe Limit für bessere Kontrolle
    sourcemap: false, // Deaktiviere Sourcemaps für Production
    minify: 'esbuild' // Verwende esbuild für bessere Komprimierung
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@core': resolve(__dirname, './src/core'),
      '@ui': resolve(__dirname, './src/ui'),
      '@utils': resolve(__dirname, './src/utils'),
    }
  },
  server: {
    port: 5173,
    strictPort: false, // Erlaubt automatische Port-Wechsel wenn 5173 belegt ist
    host: true, // Erlaubt Netzwerk-Zugriff
    open: false // Öffnet Browser nicht automatisch
  }
});