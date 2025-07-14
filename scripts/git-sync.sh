#!/bin/bash

# Git Synchronisation Script
# Automatisch pushen und Status prüfen

echo "🔄 Git Synchronisation wird geprüft..."

# Prüfe ob es ungepushte Commits gibt
unpushed_commits=$(git log --oneline origin/themen-trainer-adapter..HEAD 2>/dev/null | wc -l)

if [ $unpushed_commits -gt 0 ]; then
    echo "📤 $unpushed_commits Commits werden gepusht..."
    git push
    if [ $? -eq 0 ]; then
        echo "✅ Push erfolgreich!"
    else
        echo "❌ Push fehlgeschlagen!"
        exit 1
    fi
else
    echo "✅ Keine ungepushten Commits vorhanden."
fi

# Prüfe ob es Updates gibt
echo "📥 Prüfe auf Updates..."
git fetch origin

behind_commits=$(git log --oneline HEAD..origin/themen-trainer-adapter 2>/dev/null | wc -l)

if [ $behind_commits -gt 0 ]; then
    echo "📥 $behind_commits Commits verfügbar. Möchtest du pullen? (y/n)"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        git pull
        echo "✅ Pull erfolgreich!"
    fi
else
    echo "✅ Repository ist aktuell."
fi

echo "🎉 Git Synchronisation abgeschlossen!" 