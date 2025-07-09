import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true, // Verhindert automatische Port-Wechsel
    host: true // Erlaubt Netzwerk-Zugriff
  },
  // Das war's! Mehr brauchst du erstmal nicht
})