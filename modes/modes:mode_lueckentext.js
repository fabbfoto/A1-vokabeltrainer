import { vergleicheAntwort } from '../helfer.js';

export function setupLueckentextMode(
    ui,
    { clozeSentenceContainerEl, checkClozeButton },
    { currentWordData },
    { processAnswer }
) {
    ui.style.display = 'block';
    const clozeParts = currentWordData.cloze_parts;
    const correctAnswer = currentWordData.cloze_answers[0];
    clozeSentenceContainerEl.innerHTML = '';

    if (clozeParts && clozeParts.length === 2 && correctAnswer) {
        const part1 = document.createElement('span'); 
        part1.textContent = clozeParts[0];
        const input = document.createElement('input'); 
        input.type = 'text'; 
        input.id = 'cloze-input-field'; 
        input.className = 'cloze-input inline-block w-48 text-center border-b-2 border-gray-400 focus:border-blue-500 outline-none';
        input.autocapitalize="off"; input.autocorrect="off"; input.autocomplete="off"; input.spellcheck="false";
        const part2 = document.createElement('span'); 
        part2.textContent = clozeParts[1];
        clozeSentenceContainerEl.append(part1, input, part2);
        
        checkClozeButton.onclick = () => { 
            processAnswer(vergleicheAntwort(input.value, correctAnswer), correctAnswer); 
            input.disabled = true; 
        };
        setTimeout(() => input.focus(), 100);
        input.onkeydown = (event) => { if (event.key === 'Enter') { event.preventDefault(); if (!checkClozeButton.disabled) checkClozeButton.click(); } };
    } else {
        clozeSentenceContainerEl.textContent = 'Für dieses Wort ist kein Lückentext verfügbar.';
        checkClozeButton.onclick = null;
    }
}