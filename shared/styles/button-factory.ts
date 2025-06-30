// shared/styles/button-factory.ts
// 🔧 KORRIGIERT: Einheitliche Button-Höhen für perfektes Grid-Layout
// This factory is the single source of truth for all major button styles in the app.
// It uses pure Tailwind CSS classes to ensure consistency and maintainability.

/**
 * Creates a standard topic button (for main and subtopics).
 * ✅ FESTE HÖHE: min-h-[90px] max-h-[110px] für alle Topic-Buttons
 */
export function createTopicButton(
    text: string,
    percentage: number,
    progressColorClass: string
): HTMLButtonElement {
    const button = document.createElement('button');
    // ✅ FESTE HÖHE: min-h-[90px] max-h-[110px] 
    button.className = 'relative flex flex-col items-center justify-between p-3 text-center cursor-pointer font-medium transition-all duration-300 border rounded-lg bg-btn-bg text-btn-text border-btn-border shadow-sm hover:bg-btn-bg-hover hover:shadow-lg hover:scale-[1.02] min-h-[90px] max-h-[110px]';

    const textSpan = document.createElement('span');
    textSpan.className = 'button-text-label flex-1 flex items-center justify-center text-sm font-semibold leading-tight px-1 overflow-hidden';
    textSpan.innerHTML = text;

    const progressContainer = document.createElement('div');
    progressContainer.className = 'w-full mt-1 bg-progress-bg h-[6px] rounded-full overflow-hidden';

    const progressBar = document.createElement('div');
    progressBar.className = `h-full transition-all duration-500 ${progressColorClass}`;
    progressBar.style.width = `${percentage}%`;

    progressContainer.append(progressBar);
    button.appendChild(textSpan);
    button.appendChild(progressContainer);

    return button;
}

type ActionButtonType = 'global-test' | 'main-topic-test' | 'sync';

/**
 * Creates a primary action button (e.g., for tests or device sync).
 * 🔧 FIX: Action-Buttons bekommen GLEICHE HÖHE wie Topic-Buttons!
 */
export function createActionButton(
    type: ActionButtonType,
    text: string,
    subtext?: string
): HTMLButtonElement {
    const button = document.createElement('button');
    
    // 🔧 WICHTIGE ÄNDERUNG: h-[80px] → min-h-[90px] max-h-[110px] 
    // Dadurch haben alle Buttons die GLEICHE HÖHE!
    const baseClasses = 'col-span-full flex flex-col items-center justify-center text-white font-bold py-3 px-4 rounded-lg border-none cursor-pointer transition-all duration-300 relative overflow-hidden min-h-[90px] max-h-[110px] hover:scale-[1.02]';
    
    const styles: Record<ActionButtonType, { id: string; classes: string; innerHTML: string }> = {
        'global-test': {
            id: 'start-test-mode-btn',
            classes: 'bg-gradient-to-br from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 hover:-translate-y-0.5 hover:shadow-xl',
            innerHTML: `<span>🎯</span> <span>${text}</span>`
        },
        'main-topic-test': {
            id: '', // ID is not needed, dataset is used
            classes: 'bg-gradient-to-br from-de-black via-de-red to-de-gold hover:brightness-125 hover:-translate-y-0.5 hover:shadow-xl',
            innerHTML: `<div class="flex items-center justify-center gap-2"><span>🎯</span><span class="text-sm font-semibold">${text}</span></div><div class="text-xs opacity-90 mt-1">${subtext || ''}</div>`
        },
        'sync': {
            id: 'device-sync-btn',
            classes: 'bg-gradient-to-r from-de-black via-de-red to-de-gold hover:brightness-125',
            innerHTML: `<div class="flex items-center justify-center gap-2"><span>📱🇩🇪</span><span>${text}</span></div>`
        }
    };
    
    const config = styles[type];
    
    button.id = config.id;
    button.className = `${baseClasses} ${config.classes}`;
    button.innerHTML = config.innerHTML;
    
    return button;
}

/**
 * 🎯 ZUSÄTZLICHE GRID-OPTIMIERUNG für Unterthemen
 * Stelle sicher, dass alle Buttons die gleiche Höhe haben
 */
export function optimizeSubTopicGrid(container: HTMLElement): void {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
        // Falls ein Button nicht die richtigen Klassen hat, korrigiere ihn
        if (!button.className.includes('min-h-[90px]')) {
            button.classList.add('min-h-[90px]', 'max-h-[110px]');
        }
    });
}