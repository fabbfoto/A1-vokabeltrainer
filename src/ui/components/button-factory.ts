// Button-Factory für UI-Komponenten

export function createTopicButton(text: string, percentage: number, progressColorClass: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.className = 'relative flex flex-col items-center justify-center p-5 text-center cursor-pointer font-semibold transition-all duration-300 rounded-2xl whitespace-normal break-words bg-white border-2 border-gray-300 shadow-md hover:shadow-lg hover:-translate-y-1 min-h-[80px] hover:border-gray-400';
    
    // Progress-Container (grauer Hintergrund)
    const progressContainer = document.createElement('div');
    progressContainer.className = 'absolute bottom-0 left-0 right-0 h-2 bg-gray-200 rounded-b-2xl overflow-hidden';
    
    // Progress-Bar
    const progressBar = document.createElement('div');
    progressBar.className = `h-full ${progressColorClass} transition-all duration-300 ease-out`;
    progressBar.style.width = `${percentage}%`;
    
    // Text
    const textSpan = document.createElement('span');
    textSpan.className = 'relative z-10 text-sm mb-2';
    textSpan.textContent = text;
    
    // Struktur zusammenbauen
    progressContainer.appendChild(progressBar);
    button.appendChild(textSpan);
    button.appendChild(progressContainer);
    
    return button;
}

export function createActionButton(id: string, text: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.id = id;
    button.className = 'bg-de-blue hover:bg-de-blue/90 text-white font-medium py-2 px-4 rounded transition-colors duration-200';
    button.textContent = text;
    
    return button;
} 