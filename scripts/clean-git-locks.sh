#!/bin/bash

# Git Lock-Dateien Bereinigung
echo "🧹 Bereinige Git Lock-Dateien..."

# Entferne alle Lock-Dateien
rm -f .git/index*.lock
rm -f .git/ORIG_HEAD.lock
rm -f .git/MERGE_HEAD.lock
rm -f .git/CHERRY_PICK_HEAD.lock
rm -f .git/REBASE_HEAD.lock

echo "✅ Git Lock-Dateien bereinigt!"
echo "💡 Git sollte jetzt wieder normal funktionieren." 