import { describe, it, expect, beforeEach, vi } from 'vitest';
import { vergleicheAntwort, shuffleArray, speak, parseNounString } from '../../../src/utils/helfer';

describe('Helfer Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('vergleicheAntwort', () => {
    it('should return true for exact match', () => {
      expect(vergleicheAntwort('Haus', 'Haus')).toBe(true);
    });

    it('should return false for different words', () => {
      expect(vergleicheAntwort('Haus', 'Auto')).toBe(false);
    });

    it('should handle case insensitive comparison', () => {
      expect(vergleicheAntwort('haus', 'Haus')).toBe(true);
      expect(vergleicheAntwort('HAUS', 'Haus')).toBe(true);
    });

    it('should handle whitespace', () => {
      expect(vergleicheAntwort('  Haus  ', 'Haus')).toBe(true);
      expect(vergleicheAntwort('Haus', '  Haus  ')).toBe(true);
    });

    it('should handle umlauts correctly', () => {
      expect(vergleicheAntwort('Müller', 'Müller')).toBe(true);
      expect(vergleicheAntwort('Muller', 'Müller')).toBe(false);
    });

    it('should handle ß vs ss correctly', () => {
      expect(vergleicheAntwort('Straße', 'Straße')).toBe(true);
      expect(vergleicheAntwort('Strasse', 'Straße')).toBe(false);
    });

    it('should handle multiple correct answers separated by comma', () => {
      expect(vergleicheAntwort('Haus', 'Haus, Gebäude')).toBe(true);
      expect(vergleicheAntwort('Gebäude', 'Haus, Gebäude')).toBe(true);
      expect(vergleicheAntwort('Auto', 'Haus, Gebäude')).toBe(false);
    });

    it('should handle empty strings', () => {
      expect(vergleicheAntwort('', '')).toBe(true);
      expect(vergleicheAntwort('Haus', '')).toBe(false);
      expect(vergleicheAntwort('', 'Haus')).toBe(false);
    });
  });

  describe('shuffleArray', () => {
    it('should return array with same length', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray([...original]);
      expect(shuffled.length).toBe(original.length);
    });

    it('should contain all original elements', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray([...original]);
      original.forEach(item => {
        expect(shuffled).toContain(item);
      });
    });

    it('should handle empty array', () => {
      const shuffled = shuffleArray([]);
      expect(shuffled).toEqual([]);
    });

    it('should handle single element array', () => {
      const shuffled = shuffleArray([1]);
      expect(shuffled).toEqual([1]);
    });

    it('should not modify original array', () => {
      const original = [1, 2, 3, 4, 5];
      const originalCopy = [...original];
      shuffleArray(original);
      expect(original).toEqual(originalCopy);
    });
  });

  describe('speak', () => {
    it('should call speechSynthesis.speak', () => {
      const mockSpeak = vi.fn();
      const mockUtterance = vi.fn(() => ({
        text: '',
        lang: '',
        rate: 1,
        pitch: 1,
        volume: 1,
        onstart: null,
        onend: null,
        onerror: null
      }));

      Object.defineProperty(window, 'speechSynthesis', {
        value: { speak: mockSpeak },
        writable: true
      });

      Object.defineProperty(window, 'SpeechSynthesisUtterance', {
        value: mockUtterance,
        writable: true
      });

      speak('Haus', 'de-DE');

      expect(mockUtterance).toHaveBeenCalled();
      expect(mockSpeak).toHaveBeenCalled();
    });

    it('should use default language when not specified', () => {
      const mockUtterance = vi.fn(() => ({
        text: '',
        lang: '',
        rate: 1,
        pitch: 1,
        volume: 1,
        onstart: null,
        onend: null,
        onerror: null
      }));

      Object.defineProperty(window, 'SpeechSynthesisUtterance', {
        value: mockUtterance,
        writable: true
      });

      speak('Haus');

      const utteranceInstance = mockUtterance.mock.results[0].value;
      expect(utteranceInstance.lang).toBe('de-DE');
    });
  });

  describe('parseNounString', () => {
    it('should parse simple noun string', () => {
      const result = parseNounString('der Hund');
      expect(result).toEqual({
        article: 'der',
        noun: 'Hund'
      });
    });

    it('should parse noun with plural', () => {
      const result = parseNounString('der Hund, die Hunde');
      expect(result).toEqual({
        article: 'der',
        noun: 'Hund',
        plural: 'die Hunde'
      });
    });

    it('should handle noun without article', () => {
      const result = parseNounString('Hund');
      expect(result).toEqual({
        article: '',
        noun: 'Hund'
      });
    });

    it('should handle empty string', () => {
      const result = parseNounString('');
      expect(result).toEqual({
        article: '',
        noun: ''
      });
    });

    it('should handle complex plural forms', () => {
      const result = parseNounString('das Buch, die Bücher');
      expect(result).toEqual({
        article: 'das',
        noun: 'Buch',
        plural: 'die Bücher'
      });
    });

    it('should handle multiple commas', () => {
      const result = parseNounString('der Mann, die Männer, die Menschen');
      expect(result).toEqual({
        article: 'der',
        noun: 'Mann',
        plural: 'die Männer, die Menschen'
      });
    });
  });
}); 