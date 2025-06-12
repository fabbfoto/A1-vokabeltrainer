import { vergleicheAntwort } from '../helfer.js';

export function setupNationalitaetMode(
    ui,
    { questionDisplayEl, typeInputEl, checkTypeButton, taskPromptEl, wordLineContainerEl, sentenceLineContainerEl },
    { currentWordData },
    { processAnswer }
) {
    ui.style.display = 'block';
    questionDisplayEl.textContent = currentWordData.country;
    wordLineContainerEl.style.display = 'flex';
    sentenceLineContainerEl.style.display = 'none';
    
    typeInputEl.value = '';
    typeInputEl.disabled = false;
    typeInputEl.style.width = '100%';
    typeInputEl.style.maxWidth = '450px';

    const correctAnswerString = `${currentWordData.nationality_m}, ${currentWordData.nationality_f}`;
    taskPromptEl.textContent = "Schreibe die männliche und weibliche Form der Nationalität.";

    checkTypeButton.onclick = () => {
        processAnswer(vergleicheAntwort(typeInputEl.value, correctAnswerString), correctAnswerString);
        typeInputEl.disabled = true;
    };
    setTimeout(() => typeInputEl.focus(), 100);
    typeInputEl.onkeydown = (event) => { if (event.key === 'Enter') { event.preventDefault(); if (!checkTypeButton.disabled) checkTypeButton.click(); } };
}