// Button Factory - Erstellt konsistente Buttons
export class ButtonFactory {
  static createTestButton(text, options = {}) {
    const button = document.createElement('button');
    
    // Base classes
    const classes = ['btn', 'btn-test'];
    
    // Size variants
    if (options.size === 'large') {
      classes.push('btn-test-large');
    }
    
    // Layout classes
    if (options.fullWidth) {
      classes.push('btn-full-width', 'sm:btn-full-width');
    }
    
    // Apply classes
    button.className = classes.join(' ');
    
    // Set text
    button.textContent = text;
    
    // Apply any data attributes
    if (options.data) {
      Object.entries(options.data).forEach(([key, value]) => {
        button.dataset[key] = value;
      });
    }
    
    return button;
  }
  
  static createThemeButton(text, options = {}) {
    const button = document.createElement('button');
    button.className = 'wortgruppe-button rounded-lg';
    
    if (options.data) {
      Object.entries(options.data).forEach(([key, value]) => {
        button.dataset[key] = value;
      });
    }
    
    // Progress bar
    const progressHTML = options.progress !== undefined ? 
      `<div class="progress-bar-container">
        <div class="progress-bar-fill ${options.progressClass}" style="width: ${options.progress}%;"></div>
      </div>` : '';
    
    button.innerHTML = `
      <span class="button-text-label">${text}</span>
      ${progressHTML}
    `;
    
    return button;
  }
}