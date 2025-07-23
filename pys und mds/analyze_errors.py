#!/usr/bin/env python3
"""
Skript zur Analyse der tatsächlichen Validierungsfehler
"""

import os
import re
import json

def analyze_vocabulary_errors():
    """Analysiert die tatsächlichen Validierungsfehler in allen Vokabular-Dateien"""
    
    # Vokabular-Dateien finden
    vocab_files = []
    for root, dirs, filenames in os.walk('.'):
        for fname in filenames:
            if fname.startswith('vokabular') and fname.endswith('.ts') and not fname.endswith('.backup'):
                vocab_files.append(os.path.join(root, fname))
    
    print(f"🔍 Analysiere {len(vocab_files)} Vokabular-Dateien...")
    
    all_errors = []
    
    for file_path in vocab_files:
        print(f"📝 Analysiere: {file_path}")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extrahiere alle Wörter-Objekte
            word_objects = re.findall(r'{\s*([^}]+)\s*}', content)
            
            for i, word_obj in enumerate(word_objects):
                if 'id:' in word_obj and 'german:' in word_obj and 'english:' in word_obj:
                    # Validiere dieses Wort-Objekt
                    errors = validate_word_object(word_obj, f"{os.path.basename(file_path)}:Wort_{i+1}")
                    if errors:
                        all_errors.extend(errors)
                        
        except Exception as e:
            print(f"  ❌ Fehler beim Analysieren von {file_path}: {e}")
    
    print(f"\n📊 Gefundene Fehler: {len(all_errors)}")
    for i, error in enumerate(all_errors, 1):
        print(f"{i:2d}. {error}")
    
    return all_errors

def validate_word_object(word_obj, word_path):
    """Validiert ein einzelnes Wort-Objekt"""
    errors = []
    
    # Prüfe ID
    if not re.search(r'id:\s*"[^"]+"', word_obj):
        errors.append(f"{word_path}: Keine ID")
    
    # Prüfe german
    if not re.search(r'german:\s*"[^"]+"', word_obj):
        errors.append(f"{word_path}: Kein deutsches Wort")
    
    # Prüfe english
    if not re.search(r'english:\s*"[^"]+"', word_obj):
        errors.append(f"{word_path}: Keine englische Übersetzung")
    
    # Prüfe exampleGerman
    example_german_match = re.search(r'exampleGerman:\s*(\[[^\]]*\])', word_obj)
    if not example_german_match:
        errors.append(f"{word_path}: Kein exampleGerman Feld")
    else:
        example_german = example_german_match.group(1)
        if example_german == '[]':
            errors.append(f"{word_path}: exampleGerman ist leeres Array")
        elif not re.search(r'text:\s*"[^"]*"', example_german):
            errors.append(f"{word_path}: exampleGerman hat kein text-Feld")
    
    # Prüfe exampleEnglish
    if not re.search(r'exampleEnglish:\s*"[^"]*"', word_obj):
        errors.append(f"{word_path}: Kein exampleEnglish Feld")
    
    return errors

if __name__ == "__main__":
    print("🔍 Analysiere Validierungsfehler...")
    errors = analyze_vocabulary_errors()
    print(f"✅ Analyse abgeschlossen! {len(errors)} Fehler gefunden.") 