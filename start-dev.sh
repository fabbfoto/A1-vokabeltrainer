#!/bin/bash

echo "🛑 Stoppe alle Vite-Prozesse..."
pkill -f "vite" 2>/dev/null || true
sleep 2

echo "🧹 Prüfe ob Port 5173 frei ist..."
if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null ; then
    echo "❌ Port 5173 ist noch belegt. Stoppe alle Node-Prozesse..."
    pkill -f "node" 2>/dev/null || true
    sleep 3
fi

echo "🚀 Starte Vite auf Port 5173..."
npm run dev 