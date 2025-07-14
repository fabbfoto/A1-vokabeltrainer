#!/bin/bash

# Clean Git Locks and Port Conflicts
# Bereinigt Git-Locks und Port-Konflikte für den A1 Vokabeltrainer

echo "🧹 Bereinige Git-Locks und Port-Konflikte..."

# Git-Locks bereinigen
echo "📁 Bereinige Git-Locks..."
find .git -name "*.lock" -delete 2>/dev/null || true
find .git -name "index.lock" -delete 2>/dev/null || true

# Port 5173 freigeben
echo "🔌 Prüfe Port 5173..."
if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 5173 ist belegt. Beende Prozess..."
    lsof -ti:5173 | xargs kill -9
    echo "✅ Port 5173 freigegeben."
else
    echo "✅ Port 5173 ist frei."
fi

# Node-Prozesse bereinigen (optional)
echo "🔄 Bereinige hängende Node-Prozesse..."
pkill -f "vite" 2>/dev/null || true
pkill -f "node.*dev" 2>/dev/null || true

echo "✨ Bereinigung abgeschlossen!" 