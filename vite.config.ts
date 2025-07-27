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
          'vendor': ['vite'],
          'core': [
            './src/core/types/trainer.ts',
            './src/core/types/vocabulary.ts',
            './src/core/types/ui.ts',
            './src/core/events/navigation-events.ts'
          ],
          'services': [
            './src/services/error-counter-manager.ts',
            './src/services/mode-manager.ts',
            './src/services/mode-state-machine.ts',
            './src/services/navigation-state-manager.ts',
            './src/services/supabase.ts'
          ],
          'ui-core': [
            './src/ui/views/index.ts',
            './src/ui/views/navigation.ts',
            './src/ui/views/statistics.ts'
          ],
          'ui-components': [
            './src/ui/components/test-result-modal.ts',
            './src/ui/components/ranking-ui.ts',
            './src/ui/views/umlaut-buttons.ts'
          ],
          'utils': [
            './src/utils/helfer.ts',
            './src/utils/test-generator.ts',
            './src/utils/trainer-helpers.ts',
            './src/utils/error-analysis.ts',
            './src/utils/performance-optimizer.ts',
            './src/utils/memory-manager.ts',
            './src/utils/performance-monitor.ts'
          ]
        }
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020'
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
    strictPort: false,
    host: true,
    open: false
  },
  optimizeDeps: {
    include: ['vite'],
    exclude: ['fsevents']
  }
});