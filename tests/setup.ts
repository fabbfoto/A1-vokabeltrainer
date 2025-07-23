import { vi } from 'vitest';

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
  },
  writable: true
});

// Mock sessionStorage
Object.defineProperty(window, 'sessionStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
  },
  writable: true
});

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: vi.fn(),
  debug: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn()
};

// Mock fetch
global.fetch = vi.fn();

// Mock Web Speech API
Object.defineProperty(window, 'speechSynthesis', {
  value: {
    speak: vi.fn(),
    cancel: vi.fn(),
    getVoices: vi.fn(() => [])
  },
  writable: true
});

Object.defineProperty(window, 'SpeechSynthesisUtterance', {
  value: vi.fn(() => ({
    text: '',
    lang: '',
    rate: 1,
    pitch: 1,
    volume: 1,
    onstart: null,
    onend: null,
    onerror: null
  })),
  writable: true
}); 