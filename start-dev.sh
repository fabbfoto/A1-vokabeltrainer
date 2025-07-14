#!/bin/bash

# A1 Vokabeltrainer Development Server Starter
# Beendet automatisch blockierende Prozesse auf Port 5173

echo "🚀 Starte A1 Vokabeltrainer Development Server..."

# Prüfe ob Port 5173 belegt ist
if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 5173 ist belegt. Beende blockierenden Prozess..."
    lsof -ti:5173 | xargs kill -9
    echo "✅ Blockierender Prozess beendet."
    sleep 1
fi

# Starte Development Server
echo "📡 Starte Vite Development Server..."
npm run dev 