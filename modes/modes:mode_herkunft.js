import { vergleicheAntwort } from '../helfer.js';

export function setupHerkunftMode(
    ui,
    { questionDisplayEl, typeInputEl, checkTypeButton, taskPromptEl, wordLineContainerEl, sentenceLineContainerEl },
    { currentWordData },
    { processAnswer }
) {
    ui.style.display = 'block';
    questionDisplayEl.textContent = currentWordData.example_en;
    wordLineContainerEl.style.display = 'flex';
    sentenceLineContainerEl.style.display = 'none';
    
    typeInputEl.value = '';
    typeInputEl.disabled = false;
    typeInputEl.style.width = '100%';
    typeInputEl.style.maxWidth = '500px';

    const correctAnswerString = currentWordData.example_de;
    taskPromptEl.textContent = "Übersetze den Satz ins Deutsche.";

    checkTypeButton.onclick = () => {
        processAnswer(vergleicheAntwort(typeInputEl.value, correctAnswerString), correctAnswerString);
        typeInputEl.disabled = true;
    };
    setTimeout(() => typeInputEl.focus(), 100);
    typeInputEl.onkeydown = (event) => { if (event.key === 'Enter') { event.preventDefault(); if (!checkTypeButton.disabled) checkTypeButton.click(); } };
}