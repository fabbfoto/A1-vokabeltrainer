// Button-Factory für UI-Komponenten

export function createTopicButton(text: string, percentage: number, progressColorClass: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.className = 'relative overflow-hidden transition-all duration-200 transform hover:scale-105 rounded-lg py-3 px-4 font-medium shadow-lg hover:shadow-xl min-h-[90px] max-h-[110px]';
    
    // Progress-Bar
    const progressBar = document.createElement('div');
    progressBar.className = `absolute bottom-0 left-0 h-1 ${progressColorClass} transition-all duration-300`;
    progressBar.style.width = `${percentage}%`;
    
    // Text
    const textSpan = document.createElement('span');
    textSpan.className = 'relative z-10 text-sm';
    textSpan.textContent = text;
    
    button.appendChild(progressBar);
    button.appendChild(textSpan);
    
    return button;
}

export function createActionButton(id: string, text: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.id = id;
    button.className = 'bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200';
    button.textContent = text;
    
    return button;
} 