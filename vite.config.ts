import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    strictPort: false, // Erlaubt automatische Port-Wechsel wenn 5173 belegt ist
    host: true, // Erlaubt Netzwerk-Zugriff
    open: false // Öffnet Browser nicht automatisch
  },
  // Das war's! Mehr brauchst du erstmal nicht
})