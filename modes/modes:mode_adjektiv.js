import { vergleicheAntwort } from '../helfer.js';

export function setupAdjektivMode(
    ui,
    { questionDisplayEl, exampleSentenceDisplayEl, typeInputEl, checkTypeButton, taskPromptEl, wordLineContainerEl, sentenceLineContainerEl },
    { currentWordData },
    { processAnswer }
) {
    ui.style.display = 'block';
    questionDisplayEl.textContent = currentWordData.country;
    exampleSentenceDisplayEl.textContent = ''; 
    wordLineContainerEl.style.display = 'flex';
    sentenceLineContainerEl.style.display = 'none';
    taskPromptEl.textContent = ''; // Kein extra Text, wie gewünscht
    
    typeInputEl.value = '';
    typeInputEl.disabled = false;
    typeInputEl.style.width = '';
    typeInputEl.style.maxWidth = '250px';

    const correctAnswerString = currentWordData.german_adj;
    checkTypeButton.onclick = () => {
        processAnswer(vergleicheAntwort(typeInputEl.value, correctAnswerString), correctAnswerString);
        typeInputEl.disabled = true;
    };
    setTimeout(() => typeInputEl.focus(), 100);
    typeInputEl.onkeydown = (event) => { if (event.key === 'Enter') { event.preventDefault(); if (!checkTypeButton.disabled) checkTypeButton.click(); } };
}