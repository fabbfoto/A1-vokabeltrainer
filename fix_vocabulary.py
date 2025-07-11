#!/usr/bin/env python3
import os
import re
from pathlib import Path
import sys

FIELD_MAPPING = {
    "wortart": "wordType",
    "kasus": "case",
    "genus": "gender",
    "plural": "plural",
    "beispiel": "example",
    "bedeutung": "meaning",
    "artikel": "article",
    "adjektiv": "adjective",
    "verbform": "verbForm",
    "praeposition": "preposition",
    "kommentar": "comment",
    "thema": "topic",
    "unterthema": "subTopic",
    "schwierigkeitsgrad": "difficulty",
    "satz": "sentence",
    "synonym": "synonym",
    "antonym": "antonym",
    "ich": "I",
    "du": "you_informal",
    "er": "he",
    "sie": "they",
    "Sie": "you_formal",
    "sie_Sie": "they_you_formal",
    "wir": "we",
    "ihr": "you_pl",
    "text": "text"
}

# Mapping für Wortarten
WORD_TYPE_MAP = {
    'Nomen': 'noun',
    'Verb': 'verb',
    'Adjektiv': 'adjective',
    'Adverb': 'adverb',
    'Präposition': 'preposition',
    'Pronomen': 'pronoun',
    'Konjunktion': 'conjunction',
    'Interjektion': 'interjection'
}

def fix_vocabulary_files():
    vocab_files = list(Path('.').glob('vokabular_*.ts'))
    total_vocab_count = 0
    unmapped_fields = set()
    for file_path in vocab_files:
        print(f"\nBearbeite: {file_path}")
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        original_content = content
        # Finde alle Vokabel-Objekte (vereinfachte Annahme: { ... },)
        vocab_matches = list(re.finditer(r'\{([^{}]*)\}', content, re.DOTALL))
        file_vocab_count = 0
        for match in vocab_matches:
            obj = match.group(0)
            # Finde alle Felder im Objekt
            fields = re.findall(r'([a-zA-ZäöüßÄÖÜ_]+)\s*:', obj)
            for field in fields:
                if field in FIELD_MAPPING:
                    # Ersetze Feldnamen
                    content = re.sub(rf'\b{field}\s*:', f'{FIELD_MAPPING[field]}:', content)
                elif field == 'wortart':
                    # handled above
                    continue
                elif field not in FIELD_MAPPING.values():
                    unmapped_fields.add(field)
        total_vocab_count += len(vocab_matches)
        file_vocab_count += len(vocab_matches)
        if unmapped_fields:
            print(f"  ❌ Nicht gemappte Felder gefunden: {', '.join(sorted(unmapped_fields))}")
            print("  Skript bricht ab. Bitte Mapping ergänzen!")
            sys.exit(1)
        if content != original_content:
            backup_path = file_path.with_suffix('.ts.backup')
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(original_content)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✓ {file_vocab_count} Vokabeln bearbeitet, Backup erstellt: {backup_path}")
        else:
            print(f"  - Keine Änderungen notwendig")
    print(f"\n✓ Alle Dateien geprüft. Gesamt bearbeitete Vokabeln: {total_vocab_count}")
    if not unmapped_fields:
        print("✓ Mapping zu 100% angewendet!")

if __name__ == "__main__":
    fix_vocabulary_files() 