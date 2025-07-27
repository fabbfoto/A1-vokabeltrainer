import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
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