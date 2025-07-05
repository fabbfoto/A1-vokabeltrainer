#!/usr/bin/env python3
import os
import re
from pathlib import Path
import json

# Definiere alle erwarteten Feldnamen (Englisch)
EXPECTED_FIELDS = {
    'artikel': 'article',
    'plural': 'plural',
    'partizip_ii': 'pastParticiple',
    'hilfsverb_perfekt': 'auxiliaryVerb',
    'trennbar': 'separable',
    'example_de': 'exampleGerman',
    'example_en': 'exampleEnglish',
    'cloze_parts': 'clozeParts',
    'cloze_answers': 'clozeAnswers',
    'konjugation_praesens': 'presentConjugation',
    'imperativ': 'imperative',
    'wortart': 'wordType',
    'kasus': 'case'
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

def analyze_vocabulary_files():
    """Analysiere alle vokabular_*.ts Dateien auf Inkonsistenzen"""
    
    issues = {
        'field_inconsistencies': {},
        'word_type_inconsistencies': {},
        'case_inconsistencies': {},
        'missing_fields': {},
        'duplicate_ids': []
    }
    
    vocab_files = list(Path('.').glob('vokabular_*.ts'))
    all_ids = []
    
    for file_path in vocab_files:
        print(f"\nAnalysiere: {file_path}")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Finde alle IDs für Duplikat-Check
        ids = re.findall(r'id:\s*createWordId\("([^"]+)"\)', content)
        all_ids.extend(ids)
        
        # Prüfe auf deutsche Feldnamen
        for german, english in EXPECTED_FIELDS.items():
            pattern = rf'\b{german}:'
            matches = re.findall(pattern, content)
            if matches:
                if file_path.name not in issues['field_inconsistencies']:
                    issues['field_inconsistencies'][file_path.name] = []
                issues['field_inconsistencies'][file_path.name].append(f"{german} -> {english} ({len(matches)} Vorkommen)")
        
        # Prüfe auf deutsche Wortarten
        for german, english in WORD_TYPE_MAP.items():
            pattern = rf'wortart:\s*["\']?{german}["\']?'
            matches = re.findall(pattern, content)
            if matches:
                if file_path.name not in issues['word_type_inconsistencies']:
                    issues['word_type_inconsistencies'][file_path.name] = []
                issues['word_type_inconsistencies'][file_path.name].append(f"{german} -> {english} ({len(matches)} Vorkommen)")
        
        # Prüfe auf inkonsistente Kasus-Schreibweise
        kasus_variants = re.findall(r'(kasus|case):\s*["\'](\w+)["\']', content)
        for field, value in kasus_variants:
            if field == 'kasus':
                if file_path.name not in issues['case_inconsistencies']:
                    issues['case_inconsistencies'][file_path.name] = []
                issues['case_inconsistencies'][file_path.name].append(f"'kasus' sollte 'case' sein")
                break
    
    # Finde Duplikate
    id_counts = {}
    for id in all_ids:
        id_counts[id] = id_counts.get(id, 0) + 1
    
    for id, count in id_counts.items():
        if count > 1:
            issues['duplicate_ids'].append(f"{id} ({count} mal)")
    
    return issues

def fix_vocabulary_files():
    """Korrigiere alle gefundenen Inkonsistenzen"""
    
    vocab_files = list(Path('.').glob('vokabular_*.ts'))
    
    for file_path in vocab_files:
        print(f"\nKorrigiere: {file_path}")
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Ersetze deutsche Feldnamen
        for german, english in EXPECTED_FIELDS.items():
            content = re.sub(rf'\b{german}:', f'{english}:', content)
        
        # Ersetze deutsche Wortarten
        for german, english in WORD_TYPE_MAP.items():
            content = re.sub(rf'(wordType|wortart):\s*["\']?{german}["\']?', f'wordType: "{english}"', content)
        
        # Erstelle Backup wenn Änderungen vorgenommen wurden
        if content != original_content:
            backup_path = file_path.with_suffix('.ts.backup')
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(original_content)
            print(f"  Backup erstellt: {backup_path}")
            
            # Schreibe korrigierte Datei
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✓ Datei korrigiert")
        else:
            print(f"  - Keine Änderungen notwendig")

if __name__ == "__main__":
    print("=== Vokabular-Dateien Analyse ===")
    
    # Analysiere zuerst
    issues = analyze_vocabulary_files()
    
    print("\n=== Gefundene Probleme ===")
    
    if issues['field_inconsistencies']:
        print("\n1. Feldnamen-Inkonsistenzen (Deutsch statt Englisch):")
        for file, problems in issues['field_inconsistencies'].items():
            print(f"  {file}:")
            for problem in problems:
                print(f"    - {problem}")
    
    if issues['word_type_inconsistencies']:
        print("\n2. Wortart-Inkonsistenzen (Deutsch statt Englisch):")
        for file, problems in issues['word_type_inconsistencies'].items():
            print(f"  {file}:")
            for problem in problems:
                print(f"    - {problem}")
    
    if issues['duplicate_ids']:
        print("\n3. Duplizierte IDs:")
        for dup in issues['duplicate_ids']:
            print(f"  - {dup}")
    
    if any(issues.values()):
        print("\nStarte automatische Korrektur...")
        fix_vocabulary_files()
        print("\n✓ Alle Korrekturen abgeschlossen!")
    else:
        print("\n✓ Keine Probleme gefunden!") 