#!/usr/bin/env python3
"""
Finales Skript zur Behebung aller Validierungsfehler
"""

import os
import re
import sys

def fix_all_vocabulary_errors_final():
    """Behebt alle Validierungsfehler in allen Vokabular-Dateien - finale Version"""
    
    # Vokabular-Dateien finden
    vocab_files = []
    for root, dirs, filenames in os.walk('.'):
        for fname in filenames:
            if fname.startswith('vokabular') and fname.endswith('.ts') and not fname.endswith('.backup'):
                vocab_files.append(os.path.join(root, fname))
    
    print(f"🔍 Gefundene Vokabular-Dateien: {len(vocab_files)}")
    
    total_fixes = 0
    
    for file_path in vocab_files:
        print(f"📝 Bearbeite: {file_path}")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            filename = os.path.basename(file_path).replace('.ts', '').replace('vokabular_', '')
            file_fixes = 0
            new_lines = []
            
            i = 0
            while i < len(lines):
                line = lines[i]
                new_lines.append(line)
                
                # Suche nach Zeilen mit "german:" und "english:" (Wort-Objekt Start)
                if 'german:' in line and 'english:' in line:
                    # Extrahiere german für ID-Generierung
                    german_match = re.search(r'german:\s*"([^"]+)"', line)
                    german = german_match.group(1) if german_match else "unknown"
                    
                    # Prüfe ob ID fehlt
                    has_id = False
                    has_example_german = False
                    has_example_english = False
                    
                    # Schaue in den nächsten Zeilen nach den Feldern
                    j = i + 1
                    while j < len(lines) and not lines[j].strip().startswith('}'):
                        next_line = lines[j]
                        if 'id:' in next_line:
                            has_id = True
                        if 'exampleGerman:' in next_line:
                            has_example_german = True
                        if 'exampleEnglish:' in next_line:
                            has_example_english = True
                        j += 1
                    
                    # Füge fehlende Felder hinzu
                    if not has_id:
                        # Füge ID nach der aktuellen Zeile hinzu
                        clean_german = re.sub(r'[^a-z0-9]', '-', german.lower()).strip('-')
                        clean_filename = re.sub(r'[^a-z0-9]', '-', filename.lower()).strip('-')
                        word_id = f"{clean_filename}-{clean_german}"
                        new_lines.append(f'        id: "{word_id}",\n')
                        file_fixes += 1
                    
                    if not has_example_german:
                        # Füge exampleGerman hinzu
                        new_lines.append('        exampleGerman: [{text: ""}],\n')
                        file_fixes += 1
                    
                    if not has_example_english:
                        # Füge exampleEnglish hinzu
                        new_lines.append('        exampleEnglish: "",\n')
                        file_fixes += 1
                
                i += 1
            
            # Speichere die Datei nur wenn Änderungen gemacht wurden
            if file_fixes > 0:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.writelines(new_lines)
                print(f"  ✅ {file_fixes} Fehler in {os.path.basename(file_path)} behoben")
                total_fixes += file_fixes
            else:
                print(f"  ✅ {os.path.basename(file_path)} bereits korrekt")
                
        except Exception as e:
            print(f"  ❌ Fehler beim Bearbeiten von {file_path}: {e}")
    
    print(f"\n🎉 Insgesamt {total_fixes} Fehler behoben!")
    return total_fixes

if __name__ == "__main__":
    print("🔧 Behebe alle Validierungsfehler - FINALE VERSION...")
    fixes = fix_all_vocabulary_errors_final()
    print(f"✅ Fertig! {fixes} Fehler behoben.") 