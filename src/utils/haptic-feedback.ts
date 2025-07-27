// Haptic Feedback für Mobile-Geräte
export class HapticFeedback {
  private isSupported = false;
  public isEnabled = true;

  constructor() {
    this.checkSupport();
  }

  private checkSupport(): void {
    // iOS Haptic Feedback
    if ('vibrate' in navigator) {
      this.isSupported = true;
    }
    
    // Android Vibration API
    if ('vibrate' in navigator) {
      this.isSupported = true;
    }
  }

  // Leichtes Feedback (Button-Klicks)
  light(): void {
    if (!this.isSupported || !this.isEnabled) return;
    
    try {
      navigator.vibrate(10);
    } catch (error) {
      console.log('Haptic feedback not available');
    }
  }

  // Mittleres Feedback (Erfolg)
  medium(): void {
    if (!this.isSupported || !this.isEnabled) return;
    
    try {
      navigator.vibrate([10, 20, 10]);
    } catch (error) {
      console.log('Haptic feedback not available');
    }
  }

  // Starkes Feedback (Fehler)
  heavy(): void {
    if (!this.isSupported || !this.isEnabled) return;
    
    try {
      navigator.vibrate([20, 30, 20, 30]);
    } catch (error) {
      console.log('Haptic feedback not available');
    }
  }

  // Feedback für Navigation
  navigation(): void {
    if (!this.isSupported || !this.isEnabled) return;
    
    try {
      navigator.vibrate(15);
    } catch (error) {
      console.log('Haptic feedback not available');
    }
  }

  // Feedback für Test-Ergebnisse
  testResult(isCorrect: boolean): void {
    if (isCorrect) {
      this.medium(); // Erfolg
    } else {
      this.heavy(); // Fehler
    }
  }

  // Ein/Ausschalten
  toggle(): void {
    this.isEnabled = !this.isEnabled;
    localStorage.setItem('haptic-feedback', this.isEnabled.toString());
  }

  // Status laden
  loadSettings(): void {
    const saved = localStorage.getItem('haptic-feedback');
    if (saved !== null) {
      this.isEnabled = saved === 'true';
    }
  }
} 