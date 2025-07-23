#!/usr/bin/env python3
"""
Umfassendes Skript zur Behebung aller Validierungsfehler
"""

import os
import re
import sys

def fix_all_vocabulary_errors():
    """Behebt alle Validierungsfehler in allen Vokabular-Dateien"""
    
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
                content = f.read()
            
            original_content = content
            file_fixes = 0
            
            # Extrahiere Dateiname für ID-Generierung
            filename = os.path.basename(file_path).replace('.ts', '').replace('vokabular_', '')
            
            # Finde alle Wörter-Objekte und repariere sie
            word_pattern = r'{\s*([^}]+)\s*}'
            
            def replace_word(match):
                word_content = match.group(1)
                
                # Prüfe ob es ein Wort-Objekt ist (enthält german und english)
                if 'german:' in word_content and 'english:' in word_content:
                    # Extrahiere german für ID-Generierung
                    german_match = re.search(r'german:\s*"([^"]+)"', word_content)
                    german = german_match.group(1) if german_match else "unknown"
                    
                    # Generiere ID falls fehlend
                    if 'id:' not in word_content:
                        # Erstelle eine saubere ID
                        clean_german = re.sub(r'[^a-z0-9]', '-', german.lower()).strip('-')
                        clean_filename = re.sub(r'[^a-z0-9]', '-', filename.lower()).strip('-')
                        word_id = f"{clean_filename}-{clean_german}"
                        word_content = f'id: "{word_id}",\n        {word_content}'
                        nonlocal file_fixes
                        file_fixes += 1
                    
                    # Füge exampleGerman hinzu falls fehlend
                    if 'exampleGerman:' not in word_content:
                        # Füge nach english hinzu
                        word_content = re.sub(
                            r'(english:\s*"[^"]*")(,?\s*)',
                            r'\1,\n        exampleGerman: [{text: ""}]\2',
                            word_content
                        )
                        file_fixes += 1
                    
                    # Füge exampleEnglish hinzu falls fehlend
                    if 'exampleEnglish:' not in word_content:
                        # Füge nach exampleGerman hinzu
                        if 'exampleGerman:' in word_content:
                            word_content = re.sub(
                                r'(exampleGerman:\s*\[[^\]]*\])',
                                r'\1,\n        exampleEnglish: ""',
                                word_content
                            )
                        else:
                            word_content = re.sub(
                                r'(english:\s*"[^"]*")(,?\s*)',
                                r'\1,\n        exampleEnglish: ""\2',
                                word_content
                            )
                        file_fixes += 1
                    
                    # Repariere leere exampleGerman Arrays
                    if 'exampleGerman: []' in word_content:
                        word_content = word_content.replace('exampleGerman: []', 'exampleGerman: [{text: ""}]')
                        file_fixes += 1
                    
                    # Stelle sicher, dass Kommas korrekt sind
                    if not re.search(r'exampleGerman:\s*\[[^\]]*\],', word_content):
                        word_content = re.sub(
                            r'(exampleGerman:\s*\[[^\]]*\])(\s*\n)',
                            r'\1,\2',
                            word_content
                        )
                        file_fixes += 1
                    
                    if not re.search(r'exampleEnglish:\s*"[^"]*",', word_content):
                        word_content = re.sub(
                            r'(exampleEnglish:\s*"[^"]*")(\s*\n)',
                            r'\1,\2',
                            word_content
                        )
                        file_fixes += 1
                
                return '{' + word_content + '}'
            
            # Ersetze alle Wörter-Objekte
            content = re.sub(word_pattern, replace_word, content)
            
            # Speichere die Datei nur wenn Änderungen gemacht wurden
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"  ✅ {file_fixes} Fehler in {os.path.basename(file_path)} behoben")
                total_fixes += file_fixes
            else:
                print(f"  ✅ {os.path.basename(file_path)} bereits korrekt")
                
        except Exception as e:
            print(f"  ❌ Fehler beim Bearbeiten von {file_path}: {e}")
    
    print(f"\n🎉 Insgesamt {total_fixes} Fehler behoben!")
    return total_fixes

if __name__ == "__main__":
    print("🔧 Behebe alle Validierungsfehler...")
    fixes = fix_all_vocabulary_errors()
    print(f"✅ Fertig! {fixes} Fehler behoben.") 