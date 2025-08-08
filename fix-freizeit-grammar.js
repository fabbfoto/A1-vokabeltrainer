#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixGrammarErrors() {
  const filePath = path.join(__dirname, 'a2-vokabular/vokabular_a2_09_freizeit_hobbys.ts');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Grammatik-Fehler korrigieren
  const fixes = [
    // den + Nomen (Akkusativ)
    {
      pattern: /{ text: "den", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "akkusativ" }/g,
      replacement: '{ text: "den $1", case: "akkusativ" }'
    },
    // die + Nomen (Akkusativ)
    {
      pattern: /{ text: "die", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "akkusativ" }/g,
      replacement: '{ text: "die $1", case: "akkusativ" }'
    },
    // ein + Nomen (Akkusativ)
    {
      pattern: /{ text: "ein", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "akkusativ" }/g,
      replacement: '{ text: "ein $1", case: "akkusativ" }'
    },
    // dem + Nomen (Dativ)
    {
      pattern: /{ text: "dem", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "dativ" }/g,
      replacement: '{ text: "dem $1", case: "dativ" }'
    },
    // den + Nomen (Dativ)
    {
      pattern: /{ text: "den", case: "none" },\s*{ text: " ", case: "none" },\s*{ text: "(\w+)", case: "dativ" }/g,
      replacement: '{ text: "den $1", case: "dativ" }'
    }
  ];
  
  let totalFixes = 0;
  fixes.forEach((fix, index) => {
    const matches = content.match(fix.pattern);
    if (matches) {
      content = content.replace(fix.pattern, fix.replacement);
      totalFixes += matches.length;
      console.log(`✅ Fix ${index + 1}: ${matches.length} Korrekturen`);
    }
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`\n📊 Insgesamt ${totalFixes} Grammatik-Fehler korrigiert`);
}

fixGrammarErrors();

