#!/usr/bin/env python3
import os
import re
import sys

# Konfiguration
ID_PREFIX_MAXLEN = 20  # Maximale Länge für Thema/Subthema in der ID

# Hilfsfunktion für ID-Generierung

def make_id(main_topic, sub_topic, idx):
    def clean(s):
        return re.sub(r'[^a-z0-9]', '-', s.lower())[:ID_PREFIX_MAXLEN].strip('-')
    return f"{clean(main_topic)}-{clean(sub_topic)}-{str(idx).zfill(3)}"

# Vokabular-Dateien finden
def find_vocab_files():
    files = []
    for root, dirs, filenames in os.walk('.'):
        for fname in filenames:
            if fname.startswith('vokabular') and fname.endswith('.ts') and not fname.endswith('.backup'):
                files.append(os.path.join(root, fname))
    return files

# Vokabel-Einträge im File finden und ergänzen
def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Versuche, das Hauptthema zu extrahieren
    main_topic_match = re.search(r'createVocabulary\(\s*{\s*"([^"]+)"\s*:', content)
    if not main_topic_match:
        print(f"[WARN] Kein Hauptthema in {path}")
        return False
    main_topic = main_topic_match.group(1)

    # Finde alle Subthemen
    subtopics = re.findall(r'"([^"]+)": \[', content)
    if not subtopics:
        print(f"[WARN] Keine Subthemen in {path}")
        return False

    # Splitte nach Subthemen
    parts = re.split(r'(\s+"[^"]+": \[)', content)
    new_content = parts[0]
    sub_idx = 0
    for i in range(1, len(parts), 2):
        subtopic_header = parts[i]
        subtopic_name = re.search(r'"([^"]+)": \[', subtopic_header).group(1)
        entries_block = parts[i+1]
        # Finde alle Einträge (geschweifte Klammern auf Top-Level)
        entries = re.split(r'(\{[^\{\}]*\})', entries_block)
        new_entries_block = ''
        entry_idx = 0
        for entry in entries:
            if not entry.strip().startswith('{'):
                new_entries_block += entry
                continue
            # Prüfe, ob id-Feld existiert
            if re.search(r'\bid\s*:', entry):
                new_entries_block += entry
            else:
                # Füge id-Feld hinzu
                gen_id = make_id(main_topic, subtopic_name, entry_idx)
                # Nach dem ersten '{' einfügen
                entry_fixed = re.sub(r'\{', f'{{\n    id: createWordId("{gen_id}"),', entry, count=1)
                print(f"[FIX] {path}: {main_topic} > {subtopic_name} > {gen_id}")
                new_entries_block += entry_fixed
            entry_idx += 1
        new_content += subtopic_header + new_entries_block
        sub_idx += 1
    # Schreibe Datei nur, wenn sich etwas geändert hat
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"[OK] Datei aktualisiert: {path}")
        return True
    else:
        print(f"[OK] Keine Änderungen nötig: {path}")
        return False

def main():
    files = find_vocab_files()
    if not files:
        print("Keine Vokabular-Dateien gefunden!")
        sys.exit(1)
    changed = 0
    for file in files:
        if fix_file(file):
            changed += 1
    print(f"Fertig. {changed} Dateien geändert.")

if __name__ == '__main__':
    main() 