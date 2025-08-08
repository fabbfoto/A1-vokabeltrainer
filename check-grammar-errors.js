#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Grammatik-Fehler, die wir suchen
const grammarErrors = [
  // Artikel + Nomen sollten als Einheit markiert werden
  { pattern: /{ text: "den", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "akkusativ" }/g, fix: '{ text: "den $1", case: "akkusativ" }' },
  { pattern: /{ text: "die", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "akkusativ" }/g, fix: '{ text: "die $1", case: "akkusativ" }' },
  { pattern: /{ text: "das", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "akkusativ" }/g, fix: '{ text: "das $1", case: "akkusativ" }' },
  { pattern: /{ text: "einen", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "akkusativ" }/g, fix: '{ text: "einen $1", case: "akkusativ" }' },
  { pattern: /{ text: "eine", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "akkusativ" }/g, fix: '{ text: "eine $1", case: "akkusativ" }' },
  { pattern: /{ text: "ein", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "akkusativ" }/g, fix: '{ text: "ein $1", case: "akkusativ" }' },
  
  // Nominativ
  { pattern: /{ text: "der", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "nominativ" }/g, fix: '{ text: "der $1", case: "nominativ" }' },
  { pattern: /{ text: "die", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "nominativ" }/g, fix: '{ text: "die $1", case: "nominativ" }' },
  { pattern: /{ text: "das", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "nominativ" }/g, fix: '{ text: "das $1", case: "nominativ" }' },
  
  // Dativ
  { pattern: /{ text: "dem", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "dativ" }/g, fix: '{ text: "dem $1", case: "dativ" }' },
  { pattern: /{ text: "der", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "dativ" }/g, fix: '{ text: "der $1", case: "dativ" }' },
  { pattern: /{ text: "den", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "dativ" }/g, fix: '{ text: "den $1", case: "dativ" }' }
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const errors = [];
  
  grammarErrors.forEach((error, index) => {
    const matches = content.match(error.pattern);
    if (matches) {
      errors.push({
        file: path.basename(filePath),
        line: content.split('\n').findIndex(line => line.includes(matches[0])) + 1,
        pattern: error.pattern.source,
        matches: matches.length
      });
    }
  });
  
  return errors;
}

function main() {
  const a2Dir = path.join(__dirname, 'a2-vokabular');
  const files = fs.readdirSync(a2Dir).filter(f => f.endsWith('.ts'));
  
  console.log('🔍 Überprüfe Grammatik-Fehler in A2-Vokabular-Dateien...\n');
  
  let totalErrors = 0;
  
  files.forEach(file => {
    const filePath = path.join(a2Dir, file);
    const errors = checkFile(filePath);
    
    if (errors.length > 0) {
      console.log(`📁 ${file}:`);
      errors.forEach(error => {
        console.log(`  ❌ Zeile ${error.line}: ${error.matches} Fehler gefunden`);
        console.log(`     Pattern: ${error.pattern}`);
      });
      totalErrors += errors.reduce((sum, e) => sum + e.matches, 0);
    } else {
      console.log(`✅ ${file}: Keine Fehler gefunden`);
    }
  });
  
  console.log(`\n📊 Zusammenfassung: ${totalErrors} Grammatik-Fehler gefunden`);
  
  if (totalErrors > 0) {
    console.log('\n💡 Empfehlung: Artikel + Nomen sollten als Einheit markiert werden');
    console.log('   Beispiel: "den Flug" statt "den" + "Flug"');
  }
}

main();
