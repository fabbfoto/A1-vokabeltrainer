// Gesture Handler für Mobile-Navigation
export class GestureHandler {
  private startX = 0;
  private startY = 0;
  private isTracking = false;
  private minSwipeDistance = 50;

  constructor() {
    this.init();
  }

  private init(): void {
    document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
    document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
  }

  private handleTouchStart(event: TouchEvent): void {
    if (event.touches.length === 1) {
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
      this.isTracking = true;
    }
  }

  private handleTouchMove(event: TouchEvent): void {
    if (!this.isTracking) return;
    
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;
    
    const deltaX = Math.abs(currentX - this.startX);
    const deltaY = Math.abs(currentY - this.startY);
    
    // Verhindere Scrollen bei horizontalen Swipes
    if (deltaX > deltaY && deltaX > 10) {
      event.preventDefault();
    }
  }

  private handleTouchEnd(event: TouchEvent): void {
    if (!this.isTracking) return;
    
    const endX = event.changedTouches[0].clientX;
    const endY = event.changedTouches[0].clientY;
    
    const deltaX = endX - this.startX;
    const deltaY = endY - this.startY;
    
    // Horizontale Swipe-Erkennung
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > this.minSwipeDistance) {
      if (deltaX > 0) {
        this.handleSwipeRight();
      } else {
        this.handleSwipeLeft();
      }
    }
    
    this.isTracking = false;
  }

  private handleSwipeRight(): void {
    // Zurück-Navigation
    const backButton = document.getElementById('back-to-main-topics') || 
                      document.getElementById('back-to-subtopics');
    if (backButton && !backButton.classList.contains('hidden')) {
      backButton.click();
    }
  }

  private handleSwipeLeft(): void {
    // Vorwärts-Navigation (kann erweitert werden)
    console.log('Swipe Left detected');
  }
} 