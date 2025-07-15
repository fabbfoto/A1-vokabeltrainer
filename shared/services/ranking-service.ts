// shared/services/ranking-service.ts
// Firebase-basierter Ranking-Service für Test-Ergebnisse mit voller Typsicherheit

// Firebase-Imports für Runtime
import { collection, addDoc, query, orderBy, limit, getDocs, where, Timestamp } from 'firebase/firestore';
import type { QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import { db } from '../auth/firebase-config';
import type { AuthService } from './auth-service';
import type { TrainerState, SessionStats, TestResult } from '../types/trainer';
import { calculateGlobalRankingScore } from '../types/trainer';

// ========== ENHANCED TYPED INTERFACES ==========
export type TestType = 'chaos' | 'structured' | 'global-ranking';
export type DifficultyLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface TestResultSubmission {
  userId: string;
  userName: string;
  userEmail: string;
  testType: TestType;
  topic: string;
  category?: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeInSeconds: number;
  averageTimePerQuestion: number;
  timestamp: Date;
  difficulty: DifficultyLevel;
  // Erweiterte Felder für detaillierte Analyse
  baseScore: number;
  timePenalty: number;
  finalScore: number;
  accuracy: number;
  modesUsed: string[];
  // NEU: Globale Ranglisten-spezifische Felder
  timeFactor?: number;
  isGlobalRanking?: boolean;
  categoryDistribution?: Record<string, number>;
  testModeDistribution?: Record<string, number>;
}

export interface RankingEntry {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  score: number;
  timeInSeconds: number;
  accuracy: number;
  topic: string;
  testType: TestType;
  timestamp: Date;
  rank?: number;
  difficulty: DifficultyLevel;
  // NEU: Zusätzliche Felder für globale Ranglisten
  correctAnswers?: number;
  totalQuestions?: number;
  timeFactor?: number;
}

export interface UserStats {
  totalTests: number;
  averageScore: number;
  bestScore: number;
  totalTime: number;
  averageAccuracy: number;
  favoriteTopic: string;
  testCountByType: Record<TestType, number>;
  recentTests: TestResultSubmission[];
  improvementTrend: 'improving' | 'declining' | 'stable';
}

export interface RankingFilters {
  topic?: string;
  testType?: TestType;
  difficulty?: DifficultyLevel;
  timeRange?: 'day' | 'week' | 'month' | 'all';
  limit?: number;
}

export interface RankingResponse {
  entries: RankingEntry[];
  totalCount: number;
  userRank?: number;
  filters: RankingFilters;
}

// ========== DUMMY DATA GENERATOR ==========
export interface DummyUser {
  name: string;
  email: string;
  avatar?: string;
}

export const MOTIVATIONAL_DUMMY_USERS: DummyUser[] = [
  { name: "Anna Schmidt", email: "anna.s@example.com" },
  { name: "Max Müller", email: "max.m@example.com" },
  { name: "Lisa Weber", email: "lisa.w@example.com" },
  { name: "Tom Fischer", email: "tom.f@example.com" },
  { name: "Sarah Wagner", email: "sarah.w@example.com" },
  { name: "Paul Meyer", email: "paul.m@example.com" },
  { name: "Julia Becker", email: "julia.b@example.com" },
  { name: "Felix Hoffmann", email: "felix.h@example.com" },
  { name: "Nina Schulz", email: "nina.s@example.com" },
  { name: "Lukas Klein", email: "lukas.k@example.com" }
];

export function generateMotivationalDummyResults(count: number = 10): RankingEntry[] {
  const dummyResults: RankingEntry[] = [];
  
  for (let i = 0; i < count; i++) {
    const user = MOTIVATIONAL_DUMMY_USERS[i % MOTIVATIONAL_DUMMY_USERS.length];
    
    // Realistische aber motivierende Scores generieren
    // Höhere Scores für bessere Plätze, aber nicht perfekt
    const baseScore = 85 + Math.random() * 15; // 85-100 Punkte
    const accuracy = 0.75 + Math.random() * 0.25; // 75-100% Genauigkeit
    const timeInSeconds = 120 + Math.random() * 180; // 2-5 Minuten
    
    // Score basierend auf Platzierung anpassen
    const rankBonus = Math.max(0, (count - i - 1) * 2); // Bessere Plätze = höhere Scores
    const finalScore = Math.min(100, baseScore + rankBonus);
    
    // Realistische Zeitstempel (letzte 2 Wochen)
    const daysAgo = Math.floor(Math.random() * 14);
    const hoursAgo = Math.floor(Math.random() * 24);
    const timestamp = new Date();
    timestamp.setDate(timestamp.getDate() - daysAgo);
    timestamp.setHours(timestamp.getHours() - hoursAgo);
    
    dummyResults.push({
      id: `dummy-${i + 1}`,
      userId: `dummy-user-${i + 1}`,
      userName: user.name,
      userEmail: user.email,
      score: finalScore,
      timeInSeconds: timeInSeconds,
      accuracy: accuracy,
      topic: 'global',
      testType: 'global-ranking',
      timestamp: timestamp,
      rank: i + 1,
      difficulty: 'A1',
      correctAnswers: Math.floor(accuracy * 20), // 20 Fragen pro Test
      totalQuestions: 20,
      timeFactor: 1 - (timeInSeconds / 600) // Zeitfaktor basierend auf 10 Minuten
    });
  }
  
  return dummyResults.sort((a, b) => b.score - a.score);
}

// ========== RANKING SERVICE MIT VOLLER TYPSICHERHEIT ==========
export class RankingService {
  constructor(private authService: AuthService) {}

  /**
   * Sendet ein Test-Ergebnis an Firebase
   */
  async submitTestResult(
    testResult: TestResult, 
    testVariant: TestType, 
    selectedCategory?: string
  ): Promise<string> {
    // NEU: Validierung hinzufügen
    if (!testResult || !testResult.score) {
      console.error('❌ Ungültiges TestResult Objekt:', testResult);
      throw new Error('TestResult oder score ist undefined');
    }
    const user = this.authService.currentUser;
    if (!user) {
      console.warn('⚠️ User nicht angemeldet - Test-Ergebnis wird nicht gespeichert');
      throw new Error('User nicht angemeldet');
    }

    // NEU: Spezielle Behandlung für globale Ranglisten
    let finalScore = testResult.score.finalScore;
    let timeFactor: number | undefined;
    let baseScore = testResult.score.finalScore + testResult.score.timePenalty;

    if (testVariant === 'global-ranking') {
      const globalScore = calculateGlobalRankingScore(
        testResult.score.correct,
        testResult.score.total,
        testResult.score.duration
      );
      finalScore = globalScore.finalScore;
      timeFactor = globalScore.timeFactor;
      baseScore = globalScore.baseScore;
    }

    const testResultSubmission: TestResultSubmission = {
      userId: user.uid,
      userName: user.displayName || 'Anonym',
      userEmail: user.email || 'unknown@email.com',
      testType: testVariant,
      topic: testResult.score.topicId || 'global',
      score: finalScore,
      correctAnswers: testResult.score.correct,
      totalQuestions: testResult.score.total,
      timeInSeconds: testResult.score.duration,
      averageTimePerQuestion: testResult.score.averageTimePerQuestion,
      timestamp: testResult.score.timestamp,
      difficulty: 'A1',
      baseScore: baseScore,
      timePenalty: testResult.score.timePenalty,
      finalScore: finalScore,
      accuracy: testResult.score.accuracy,
      modesUsed: testResult.score.modesUsed,
      // NEU: Globale Ranglisten-spezifische Felder
      timeFactor: timeFactor,
      isGlobalRanking: testVariant === 'global-ranking'
    };

    // Füge category nur hinzu wenn definiert
    if (selectedCategory) {
      testResultSubmission.category = selectedCategory;
    }

    try {
      const docRef = await addDoc(collection(db, 'testResults'), {
        ...testResultSubmission,
        timestamp: Timestamp.fromDate(testResultSubmission.timestamp)
      });
      
      console.log(`✅ Test-Ergebnis gespeichert: ${testVariant} - Score: ${finalScore}`);
      return docRef.id;
    } catch (error: unknown) {
      console.error('❌ Fehler beim Speichern des Test-Ergebnisses:', error);
      throw new Error(`Fehler beim Speichern: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
    }
  }

  /**
   * Lädt globale Ranglisten mit motivierenden Dummy-Daten
   */
  async getGlobalRankings(limitCount: number = 100): Promise<RankingResponse> {
    try {
      const q = query(
        collection(db, 'testResults'),
        orderBy('finalScore', 'desc'),
        limit(limitCount)
      );
      
      const snapshot = await getDocs(q);
      const realEntries = snapshot.docs.map((doc: QueryDocumentSnapshot, index: number) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        rank: index + 1
      })) as RankingEntry[];
      
      // Wenn weniger als 5 echte Ergebnisse vorhanden sind, füge motivierende Dummy-Daten hinzu
      if (realEntries.length < 5) {
        const dummyCount = Math.min(10, limitCount - realEntries.length);
        const dummyEntries = generateMotivationalDummyResults(dummyCount);
        
        // Kombiniere echte und Dummy-Daten, sortiere nach Score
        const combinedEntries = [...realEntries, ...dummyEntries]
          .sort((a, b) => b.score - a.score)
          .slice(0, limitCount)
          .map((entry, index) => ({
            ...entry,
            rank: index + 1
          }));
        
        console.log(`📊 Rangliste: ${realEntries.length} echte + ${dummyEntries.length} Dummy-Ergebnisse`);
        
        return {
          entries: combinedEntries,
          totalCount: combinedEntries.length,
          filters: { limit: limitCount }
        };
      }
      
      return {
        entries: realEntries,
        totalCount: realEntries.length,
        filters: { limit: limitCount }
      };
    } catch (error: unknown) {
      console.error('❌ Fehler beim Laden der globalen Rangliste:', error);
      
      // Fallback: Zeige nur Dummy-Daten bei Fehlern
      console.log('🔄 Verwende Dummy-Daten als Fallback');
      const dummyEntries = generateMotivationalDummyResults(Math.min(10, limitCount));
      
      return {
        entries: dummyEntries,
        totalCount: dummyEntries.length,
        filters: { limit: limitCount }
      };
    }
  }

  /**
   * Lädt Ranglisten für ein spezifisches Thema
   */
  async getTopicRankings(topic: string, limitCount: number = 50): Promise<RankingResponse> {
    try {
      const q = query(
        collection(db, 'testResults'),
        where('topic', '==', topic),
        orderBy('finalScore', 'desc'),
        limit(limitCount)
      );
      
      const snapshot = await getDocs(q);
      const entries = snapshot.docs.map((doc: QueryDocumentSnapshot, index: number) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        rank: index + 1
      })) as RankingEntry[];
      
      return {
        entries,
        totalCount: entries.length,
        filters: { topic, limit: limitCount }
      };
    } catch (error: unknown) {
      console.error(`❌ Fehler beim Laden der Rangliste für ${topic}:`, error);
      throw new Error(`Fehler beim Laden der Rangliste für ${topic}: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
    }
  }

  /**
   * Lädt Ranglisten für einen spezifischen Test-Typ
   */
  async getTestTypeRankings(testType: TestType, limitCount: number = 50): Promise<RankingResponse> {
    try {
      const q = query(
        collection(db, 'testResults'),
        where('testType', '==', testType),
        orderBy('finalScore', 'desc'),
        limit(limitCount)
      );
      
      const snapshot = await getDocs(q);
      const entries = snapshot.docs.map((doc: QueryDocumentSnapshot, index: number) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        rank: index + 1
      })) as RankingEntry[];
      
      return {
        entries,
        totalCount: entries.length,
        filters: { testType, limit: limitCount }
      };
    } catch (error: unknown) {
      console.error(`❌ Fehler beim Laden der Rangliste für ${testType}:`, error);
      throw new Error(`Fehler beim Laden der Rangliste für ${testType}: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
    }
  }

  /**
   * NEU: Lädt spezielle globale Ranglisten mit motivierenden Dummy-Daten
   */
  async getGlobalRankingList(limitCount: number = 100): Promise<RankingResponse> {
    try {
      const q = query(
        collection(db, 'testResults'),
        where('testType', '==', 'global-ranking'),
        orderBy('finalScore', 'desc'),
        limit(limitCount)
      );
      
      const snapshot = await getDocs(q);
      const realEntries = snapshot.docs.map((doc: QueryDocumentSnapshot, index: number) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        rank: index + 1
      })) as RankingEntry[];
      
      // Wenn weniger als 3 echte globale Ranking-Ergebnisse vorhanden sind, füge Dummy-Daten hinzu
      if (realEntries.length < 3) {
        const dummyCount = Math.min(8, limitCount - realEntries.length);
        const dummyEntries = generateMotivationalDummyResults(dummyCount);
        
        // Kombiniere echte und Dummy-Daten, sortiere nach Score
        const combinedEntries = [...realEntries, ...dummyEntries]
          .sort((a, b) => b.score - a.score)
          .slice(0, limitCount)
          .map((entry, index) => ({
            ...entry,
            rank: index + 1
          }));
        
        console.log(`🏆 Globale Ranking-Liste: ${realEntries.length} echte + ${dummyEntries.length} Dummy-Ergebnisse`);
        
        return {
          entries: combinedEntries,
          totalCount: combinedEntries.length,
          filters: { testType: 'global-ranking', limit: limitCount }
        };
      }
      
      console.log(`🏆 Globale Rangliste geladen: ${realEntries.length} echte Einträge`);
      
      return {
        entries: realEntries,
        totalCount: realEntries.length,
        filters: { testType: 'global-ranking', limit: limitCount }
      };
    } catch (error: unknown) {
      console.error('❌ Fehler beim Laden der globalen Rangliste:', error);
      
      // Fallback: Zeige nur Dummy-Daten bei Fehlern
      console.log('🔄 Verwende Dummy-Daten als Fallback für globale Ranking-Liste');
      const dummyEntries = generateMotivationalDummyResults(Math.min(8, limitCount));
      
      return {
        entries: dummyEntries,
        totalCount: dummyEntries.length,
        filters: { testType: 'global-ranking', limit: limitCount }
      };
    }
  }

  /**
   * NEU: Lädt die besten globalen Ranglisten-Ergebnisse des aktuellen Benutzers
   */
  async getCurrentUserGlobalRanking(): Promise<RankingEntry | null> {
    const user = this.authService.currentUser;
    if (!user) return null;

    try {
      const q = query(
        collection(db, 'testResults'),
        where('userId', '==', user.uid),
        where('testType', '==', 'global-ranking'),
        orderBy('finalScore', 'desc'),
        limit(1)
      );
      
      const snapshot = await getDocs(q);
      if (snapshot.empty) return null;
      
      const bestResult = snapshot.docs[0].data();
      return {
        id: snapshot.docs[0].id,
        ...bestResult,
        timestamp: bestResult.timestamp?.toDate() || new Date()
      } as RankingEntry;
    } catch (error: unknown) {
      console.error('❌ Fehler beim Laden des User-Global-Rankings:', error);
      throw new Error(`Fehler beim Laden des Global-Rankings: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
    }
  }

  /**
   * Lädt detaillierte Statistiken für einen Benutzer
   */
  async getUserStats(userId: string): Promise<UserStats | null> {
    try {
      const q = query(
        collection(db, 'testResults'),
        where('userId', '==', userId),
        orderBy('timestamp', 'desc')
      );
      
      const snapshot = await getDocs(q);
      const results = snapshot.docs.map((doc: QueryDocumentSnapshot) => doc.data()) as TestResultSubmission[];
      
      if (results.length === 0) return null;
      
      // Statistiken berechnen
      const totalTests = results.length;
      const totalScore = results.reduce((sum, r) => sum + r.finalScore, 0);
      const averageScore = totalScore / totalTests;
      const bestScore = Math.max(...results.map(r => r.finalScore));
      const totalTime = results.reduce((sum, r) => sum + r.timeInSeconds, 0);
      const averageAccuracy = results.reduce((sum, r) => sum + r.accuracy, 0) / totalTests;
      
      // Häufigstes Thema
      const topicCounts: Record<string, number> = {};
      results.forEach(r => {
        topicCounts[r.topic] = (topicCounts[r.topic] || 0) + 1;
      });
      const favoriteTopic = Object.entries(topicCounts)
        .sort(([,a], [,b]) => b - a)[0]?.[0] || 'Unbekannt';
      
      // Test-Typen zählen
      const testCountByType: Record<TestType, number> = {
        chaos: 0,
        structured: 0,
        'global-ranking': 0
      };
      results.forEach(r => {
        testCountByType[r.testType]++;
      });
      
      // Verbesserungstrend berechnen
      const recentTests = results.slice(0, 5);
      const improvementTrend = this.calculateImprovementTrend(results);
      
      return {
        totalTests,
        averageScore: Math.round(averageScore),
        bestScore,
        totalTime: Math.round(totalTime),
        averageAccuracy: Math.round(averageAccuracy),
        favoriteTopic,
        testCountByType,
        recentTests,
        improvementTrend
      };
    } catch (error: unknown) {
      console.error('❌ Fehler beim Laden der User-Statistiken:', error);
      throw new Error(`Fehler beim Laden der Statistiken: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
    }
  }

  /**
   * Lädt das beste Ranking des aktuellen Benutzers
   */
  async getCurrentUserRanking(): Promise<RankingEntry | null> {
    const user = this.authService.currentUser;
    if (!user) return null;

    try {
      const q = query(
        collection(db, 'testResults'),
        where('userId', '==', user.uid),
        orderBy('finalScore', 'desc'),
        limit(1)
      );
      
      const snapshot = await getDocs(q);
      if (snapshot.empty) return null;
      
      const bestResult = snapshot.docs[0].data();
      return {
        id: snapshot.docs[0].id,
        ...bestResult,
        timestamp: bestResult.timestamp?.toDate() || new Date()
      } as RankingEntry;
    } catch (error: unknown) {
      console.error('❌ Fehler beim Laden des User-Rankings:', error);
      throw new Error(`Fehler beim Laden des Rankings: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
    }
  }

  /**
   * Lädt wöchentliche Ranglisten
   */
  async getWeeklyRankings(): Promise<RankingResponse> {
    try {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      
      const q = query(
        collection(db, 'testResults'),
        where('timestamp', '>=', Timestamp.fromDate(oneWeekAgo)),
        orderBy('finalScore', 'desc'),
        limit(50)
      );
      
      const snapshot = await getDocs(q);
      const entries = snapshot.docs.map((doc: QueryDocumentSnapshot, index: number) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        rank: index + 1
      })) as RankingEntry[];
      
      return {
        entries,
        totalCount: entries.length,
        filters: { timeRange: 'week', limit: 50 }
      };
    } catch (error: unknown) {
      console.error('❌ Fehler beim Laden der wöchentlichen Rangliste:', error);
      throw new Error(`Fehler beim Laden der wöchentlichen Rangliste: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
    }
  }

  /**
   * Lädt Ranglisten mit benutzerdefinierten Filtern
   */
  async getFilteredRankings(filters: RankingFilters): Promise<RankingResponse> {
    try {
      let q = query(collection(db, 'testResults'));
      
      // Filter anwenden
      if (filters.topic) {
        q = query(q, where('topic', '==', filters.topic));
      }
      if (filters.testType) {
        q = query(q, where('testType', '==', filters.testType));
      }
      if (filters.difficulty) {
        q = query(q, where('difficulty', '==', filters.difficulty));
      }
      if (filters.timeRange && filters.timeRange !== 'all') {
        const startDate = this.getStartDateForTimeRange(filters.timeRange);
        q = query(q, where('timestamp', '>=', Timestamp.fromDate(startDate)));
      }
      
      // Sortierung und Limit
      q = query(q, orderBy('finalScore', 'desc'), limit(filters.limit || 50));
      
      const snapshot = await getDocs(q);
      const entries = snapshot.docs.map((doc: QueryDocumentSnapshot, index: number) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        rank: index + 1
      })) as RankingEntry[];
      
      return {
        entries,
        totalCount: entries.length,
        filters
      };
    } catch (error: unknown) {
      console.error('❌ Fehler beim Laden der gefilterten Rangliste:', error);
      throw new Error(`Fehler beim Laden der gefilterten Rangliste: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`);
    }
  }

  /**
   * Berechnet den Verbesserungstrend basierend auf den letzten Tests
   */
  private calculateImprovementTrend(results: TestResultSubmission[]): 'improving' | 'declining' | 'stable' {
    if (results.length < 3) return 'stable';
    
    const recentScores = results.slice(0, 3).map(r => r.finalScore);
    const olderScores = results.slice(3, 6).map(r => r.finalScore);
    
    if (olderScores.length === 0) return 'stable';
    
    const recentAvg = recentScores.reduce((a, b) => a + b, 0) / recentScores.length;
    const olderAvg = olderScores.reduce((a, b) => a + b, 0) / olderScores.length;
    
    const difference = recentAvg - olderAvg;
    
    if (difference > 5) return 'improving';
    if (difference < -5) return 'declining';
    return 'stable';
  }

  /**
   * Hilfsfunktion für Zeitbereich-Filter
   */
  private getStartDateForTimeRange(timeRange: 'day' | 'week' | 'month'): Date {
    const now = new Date();
    switch (timeRange) {
      case 'day':
        now.setDate(now.getDate() - 1);
        break;
      case 'week':
        now.setDate(now.getDate() - 7);
        break;
      case 'month':
        now.setMonth(now.getMonth() - 1);
        break;
    }
    return now;
  }
} 