// shared/services/ranking-service.ts
// Firebase-basierter Ranking-Service für Test-Ergebnisse

// Firebase-Imports für Runtime
import { collection, addDoc, query, orderBy, limit, getDocs, where } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';
import { db } from '../auth/firebase-config.js';
import type { TestScore, TestVariant, TestCategory, TopicId } from '../types/index.js';

// TypeScript-Typen für Firebase
type Timestamp = any;

export interface TestResultSubmission {
  userId: string;
  userName: string;
  userEmail: string;
  testType: 'chaos' | 'structured';
  topic: string;
  category?: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeInSeconds: number;
  averageTimePerQuestion: number;
  timestamp: Date;
  difficulty: 'A1';
  // Erweiterte Felder für detaillierte Analyse
  baseScore: number;
  timePenalty: number;
  finalScore: number;
  accuracy: number;
  modesUsed: string[];
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
  testType: string;
  timestamp: Date;
  rank?: number;
}

export interface UserStats {
  totalTests: number;
  averageScore: number;
  bestScore: number;
  totalTime: number;
  averageAccuracy: number;
  favoriteTopic: string;
  testCountByType: Record<string, number>;
}

export class RankingService {
  constructor(private authService: any) {}

  async submitTestResult(testScore: TestScore, testVariant: TestVariant, selectedCategory?: TestCategory): Promise<void> {
    const user = this.authService.currentUser;
    if (!user) {
      console.warn('User nicht angemeldet - Test-Ergebnis wird nicht gespeichert');
      return;
    }

    const testResult: TestResultSubmission = {
      userId: user.uid,
      userName: user.displayName || 'Anonym',
      userEmail: user.email || 'unknown@email.com',
      testType: testVariant,
      topic: testScore.topicId || 'global',
      category: selectedCategory,
      score: testScore.finalScore,
      correctAnswers: testScore.correct,
      totalQuestions: testScore.total,
      timeInSeconds: testScore.duration,
      averageTimePerQuestion: testScore.averageTimePerQuestion,
      timestamp: testScore.timestamp,
      difficulty: 'A1',
      baseScore: testScore.finalScore + testScore.timePenalty, // Rekonstruiere Basis-Score
      timePenalty: testScore.timePenalty,
      finalScore: testScore.finalScore,
      accuracy: testScore.accuracy,
      modesUsed: testScore.modesUsed
    };

    try {
      await addDoc(collection(db, 'testResults'), {
        ...testResult,
        timestamp: Timestamp.fromDate(testResult.timestamp)
      });
      console.log('✅ Test-Ergebnis erfolgreich an Firebase gesendet');
    } catch (error) {
      console.error('❌ Fehler beim Speichern des Test-Ergebnisses:', error);
    }
  }

  async getGlobalRankings(limitCount: number = 100): Promise<RankingEntry[]> {
    try {
      const q = query(
        collection(db, 'testResults'),
        orderBy('finalScore', 'desc'),
        limit(limitCount)
      );
      
      const snapshot = await getDocs(q);
      const rankings = snapshot.docs.map((doc, index) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        rank: index + 1
      })) as RankingEntry[];
      
      return rankings;
    } catch (error) {
      console.error('❌ Fehler beim Laden der globalen Rangliste:', error);
      return [];
    }
  }

  async getTopicRankings(topic: string, limitCount: number = 50): Promise<RankingEntry[]> {
    try {
      const q = query(
        collection(db, 'testResults'),
        where('topic', '==', topic),
        orderBy('finalScore', 'desc'),
        limit(limitCount)
      );
      
      const snapshot = await getDocs(q);
      const rankings = snapshot.docs.map((doc, index) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        rank: index + 1
      })) as RankingEntry[];
      
      return rankings;
    } catch (error) {
      console.error(`❌ Fehler beim Laden der Rangliste für ${topic}:`, error);
      return [];
    }
  }

  async getTestTypeRankings(testType: TestVariant, limitCount: number = 50): Promise<RankingEntry[]> {
    try {
      const q = query(
        collection(db, 'testResults'),
        where('testType', '==', testType),
        orderBy('finalScore', 'desc'),
        limit(limitCount)
      );
      
      const snapshot = await getDocs(q);
      const rankings = snapshot.docs.map((doc, index) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        rank: index + 1
      })) as RankingEntry[];
      
      return rankings;
    } catch (error) {
      console.error(`❌ Fehler beim Laden der Rangliste für ${testType}:`, error);
      return [];
    }
  }

  async getUserStats(userId: string): Promise<UserStats | null> {
    try {
      const q = query(
        collection(db, 'testResults'),
        where('userId', '==', userId),
        orderBy('timestamp', 'desc')
      );
      
      const snapshot = await getDocs(q);
      const results = snapshot.docs.map(doc => doc.data()) as TestResultSubmission[];
      
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
      const testCountByType: Record<string, number> = {};
      results.forEach(r => {
        testCountByType[r.testType] = (testCountByType[r.testType] || 0) + 1;
      });
      
      return {
        totalTests,
        averageScore: Math.round(averageScore),
        bestScore,
        totalTime: Math.round(totalTime),
        averageAccuracy: Math.round(averageAccuracy),
        favoriteTopic,
        testCountByType
      };
    } catch (error) {
      console.error('❌ Fehler beim Laden der User-Statistiken:', error);
      return null;
    }
  }

  async getCurrentUserRanking(): Promise<RankingEntry | null> {
    const user = this.authService.currentUser;
    if (!user) return null;

    try {
      // Hole alle Ergebnisse des Users
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
    } catch (error) {
      console.error('❌ Fehler beim Laden des User-Rankings:', error);
      return null;
    }
  }

  async getWeeklyRankings(): Promise<RankingEntry[]> {
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
      const rankings = snapshot.docs.map((doc, index) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
        rank: index + 1
      })) as RankingEntry[];
      
      return rankings;
    } catch (error) {
      console.error('❌ Fehler beim Laden der wöchentlichen Rangliste:', error);
      return [];
    }
  }
} 