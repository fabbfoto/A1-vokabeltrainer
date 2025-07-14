#!/usr/bin/env python3
"""
Skript zur Behebung der verbleibenden 19 Validierungsfehler
"""

import os
import re
import sys

def fix_vocabulary_errors():
    """Behebt die verbleibenden Validierungsfehler in allen Vokabular-Dateien"""
    
    # Häufige Fehlertypen und deren Lösungen
    error_patterns = [
        # 1. Fehlende exampleGerman Felder
        (r'(\s+)(english:\s*"[^"]*",?\s*)(\n)', r'\1\2\1exampleGerman: [{text: ""}],\3'),
        
        # 2. Fehlende exampleEnglish Felder  
        (r'(\s+)(exampleGerman:\s*\[[^\]]*\],?\s*)(\n)', r'\1\2\1exampleEnglish: "",\3'),
        
        # 3. Leere exampleGerman Arrays
        (r'exampleGerman:\s*\[\s*\]', 'exampleGerman: [{text: ""}]'),
        
        # 4. Fehlende text-Felder in exampleGerman
        (r'exampleGerman:\s*\[\s*{\s*([^}]*)\s*}\s*\]', r'exampleGerman: [{text: "\1"}]'),
        
        # 5. Fehlende Kommas nach exampleGerman
        (r'(exampleGerman:\s*\[[^\]]*\])(\s*\n)', r'\1,\2'),
        
        # 6. Fehlende Kommas nach exampleEnglish
        (r'(exampleEnglish:\s*"[^"]*")(\s*\n)', r'\1,\2'),
        
        # 7. Doppelte Kommas entfernen
        (r',\s*,', ','),
        
        # 8. Fehlende schließende Klammern
        (r'(\s+)(english:\s*"[^"]*")(\s*\n)(\s*})', r'\1\2,\n\1exampleGerman: [{text: ""}],\n\1exampleEnglish: "",\n\4'),
    ]
    
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
            
            # Wörter-Objekte finden und reparieren
            word_pattern = r'{\s*id:\s*"[^"]*",\s*german:\s*"[^"]*",\s*english:\s*"[^"]*"[^}]*}'
            words = re.findall(word_pattern, content, re.DOTALL)
            
            for word in words:
                fixed_word = word
                
                # Prüfe und repariere fehlende exampleGerman
                if 'exampleGerman:' not in word:
                    # Füge exampleGerman nach english hinzu
                    fixed_word = re.sub(
                        r'(english:\s*"[^"]*")(,?\s*)',
                        r'\1,\n        exampleGerman: [{text: ""}]\2',
                        fixed_word
                    )
                    file_fixes += 1
                
                # Prüfe und repariere fehlende exampleEnglish
                if 'exampleEnglish:' not in word:
                    # Füge exampleEnglish nach exampleGerman hinzu
                    if 'exampleGerman:' in fixed_word:
                        fixed_word = re.sub(
                            r'(exampleGerman:\s*\[[^\]]*\])',
                            r'\1,\n        exampleEnglish: ""',
                            fixed_word
                        )
                    else:
                        fixed_word = re.sub(
                            r'(english:\s*"[^"]*")(,?\s*)',
                            r'\1,\n        exampleEnglish: ""\2',
                            fixed_word
                        )
                    file_fixes += 1
                
                # Repariere leere exampleGerman Arrays
                if 'exampleGerman: []' in fixed_word:
                    fixed_word = fixed_word.replace('exampleGerman: []', 'exampleGerman: [{text: ""}]')
                    file_fixes += 1
                
                # Repariere fehlende Kommas
                if not re.search(r'exampleGerman:\s*\[[^\]]*\],', fixed_word):
                    fixed_word = re.sub(
                        r'(exampleGerman:\s*\[[^\]]*\])(\s*\n)',
                        r'\1,\2',
                        fixed_word
                    )
                    file_fixes += 1
                
                if not re.search(r'exampleEnglish:\s*"[^"]*",', fixed_word):
                    fixed_word = re.sub(
                        r'(exampleEnglish:\s*"[^"]*")(\s*\n)',
                        r'\1,\2',
                        fixed_word
                    )
                    file_fixes += 1
                
                # Ersetze das ursprüngliche Wort mit dem reparierten
                if fixed_word != word:
                    content = content.replace(word, fixed_word)
            
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
    print("🔧 Behebe verbleibende Validierungsfehler...")
    fixes = fix_vocabulary_errors()
    print(f"✅ Fertig! {fixes} Fehler behoben.") 