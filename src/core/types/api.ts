// shared/types/api.ts
// Professional API and Firebase integration types

import { Timestamp } from 'firebase/firestore';
import type { 
  DocumentReference,
  CollectionReference,
  QuerySnapshot,
  DocumentSnapshot
} from 'firebase/firestore';

import type { WordId, TopicId, SubTopicId } from './vocabulary';
import type { Progress, TestScore, SessionStats, ModeId } from './trainer';

// ========== BRANDED TYPES ==========
export type UserId = string & { __brand: 'UserId' };
export type SessionToken = string & { __brand: 'SessionToken' };
export type DocumentId = string & { __brand: 'DocumentId' };

// ========== USER TYPES ==========
export interface User {
  uid: UserId;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  lastLogin: Date;
  preferences: UserPreferences;
  subscription: UserSubscription;
}

export interface UserPreferences {
  language: 'en' | 'de' | 'es' | 'fr' | 'it';
  theme: 'light' | 'dark' | 'auto';
  soundEnabled: boolean;
  autoAdvance: boolean;
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced';
  preferredModes: ModeId[];
  dailyGoal: number;
  reminderSettings: ReminderSettings;
}

export interface ReminderSettings {
  enabled: boolean;
  time: string; // HH:MM format
  frequency: 'daily' | 'weekly' | 'custom';
  daysOfWeek?: number[]; // 0-6, Sunday = 0
}

export interface UserSubscription {
  plan: 'free' | 'premium' | 'enterprise';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate?: Date;
  features: string[];
}

// ========== AUTHENTICATION TYPES ==========
export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResult {
  user: User;
  token: SessionToken;
  refreshToken: string;
  expiresAt: Date;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: SessionToken | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthUI {
  show: () => void;
  hide: () => void;
  isVisible: boolean;
  container: HTMLElement | null;
}

export interface AuthService {
  signIn: (credentials: AuthCredentials) => Promise<AuthResult>;
  signOut: () => Promise<void>;
  signUp: (credentials: AuthCredentials & { displayName?: string }) => Promise<AuthResult>;
  resetPassword: (email: string) => Promise<void>;
  getCurrentUser: () => User | null;
  isLoggedIn: () => boolean;
  onAuthStateChange: (callback: (user: User | null) => void) => () => void;
}

export interface InitializeAuthResult {
  authService: AuthService;
  authUI: AuthUI;
  syncService: SyncService;
}

// ========== SYNC & STORAGE TYPES ==========
export interface UserData {
  progress: Progress;
  testScores: TestScore[];
  sessionStats: SessionStats[];
  preferences: UserPreferences;
  achievements: Achievement[];
  streaks: StreakData;
  lastSyncTimestamp: Date;
}

export interface SyncService {
  syncUserData: (userId: UserId) => Promise<void>;
  uploadProgress: (userId: UserId, progress: Progress) => Promise<void>;
  downloadProgress: (userId: UserId) => Promise<Progress>;
  onSyncUpdate: (callback: (data: Partial<UserData>) => void) => () => void;
  getLastSyncTime: () => Date | null;
  forceMerge: () => Promise<void>;
}

export interface SyncConflict {
  field: keyof UserData;
  localValue: unknown;
  remoteValue: unknown;
  lastModified: {
    local: Date;
    remote: Date;
  };
}

export interface SyncResult {
  success: boolean;
  conflicts: SyncConflict[];
  mergedData?: Partial<UserData>;
  error?: string;
}

// ========== FIRESTORE DOCUMENT TYPES ==========
export interface FirestoreUser {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Timestamp;
  lastLogin: Timestamp;
  preferences: UserPreferences;
  subscription: UserSubscription;
}

export interface FirestoreProgress {
  userId: string;
  topicProgress: {
    [topicKey: string]: {
      [modeId: string]: string[]; // WordId arrays for Firestore
    };
  };
  lastUpdated: Timestamp;
}

export interface FirestoreTestScore {
  userId: string;
  testId: string;
  correct: number;
  total: number;
  accuracy: number;
  timestamp: Timestamp;
  testType: string;
  topicId?: string;
  subTopicId?: string;
  duration: number;
  modesUsed: string[];
}

export interface FirestoreSessionStats {
  userId: string;
  sessionId: string;
  startTime: Timestamp;
  endTime?: Timestamp;
  mode: string;
  topicId?: string;
  subTopicId?: string;
  wordsAttempted: number;
  wordsCorrect: number;
  accuracy: number;
}

// ========== ACHIEVEMENT TYPES ==========
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  progress: number;
  target: number;
  category: 'learning' | 'streak' | 'accuracy' | 'speed' | 'completion';
}

export interface StreakData {
  current: number;
  longest: number;
  lastActiveDate: Date;
  streakStartDate: Date;
}

// ========== API RESPONSE TYPES ==========
export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: APIError;
  metadata: {
    timestamp: Date;
    requestId: string;
    version: string;
  };
}

export interface APIError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: Date;
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

// ========== VOICE & AUDIO TYPES ==========
export interface VoiceConfig {
  language: string;
  voice?: string;
  rate: number;
  pitch: number;
  volume: number;
}

export interface AudioResponse {
  audioUrl: string;
  duration: number;
  format: 'mp3' | 'wav' | 'ogg';
  cacheKey: string;
}

export interface TTSService {
  speak: (text: string, config?: Partial<VoiceConfig>) => Promise<AudioResponse>;
  preload: (texts: string[], config?: Partial<VoiceConfig>) => Promise<void>;
  clearCache: () => Promise<void>;
  getSupportedVoices: () => Promise<VoiceOption[]>;
}

export interface VoiceOption {
  id: string;
  name: string;
  language: string;
  gender: 'male' | 'female' | 'neutral';
  quality: 'standard' | 'premium';
}

// ========== ANALYTICS TYPES ==========
export interface AnalyticsEvent {
  event: string;
  properties: Record<string, unknown>;
  userId?: UserId;
  sessionId?: string;
  timestamp: Date;
}

export interface LearningAnalytics {
  totalWordsLearned: number;
  totalTimeSpent: number; // in minutes
  averageAccuracy: number;
  strongestTopics: TopicId[];
  weakestTopics: TopicId[];
  preferredModes: ModeId[];
  learningStreak: number;
  weeklyProgress: WeeklyProgress[];
}

export interface WeeklyProgress {
  week: Date;
  wordsLearned: number;
  timeSpent: number;
  accuracy: number;
  sessionsCompleted: number;
}

export interface AnalyticsService {
  track: (event: AnalyticsEvent) => Promise<void>;
  getUserAnalytics: (userId: UserId) => Promise<LearningAnalytics>;
  trackLearningSession: (sessionStats: SessionStats) => Promise<void>;
  trackTestCompletion: (testScore: TestScore) => Promise<void>;
}

// ========== UTILITY FUNCTIONS ==========
export function createUserId(id: string): UserId {
  return id as UserId;
}

export function createSessionToken(token: string): SessionToken {
  return token as SessionToken;
}

export function createDocumentId(id: string): DocumentId {
  return id as DocumentId;
}

export function toFirestoreTimestamp(date: Date): Timestamp {
  return Timestamp.fromDate(date);
}

export function fromFirestoreTimestamp(timestamp: Timestamp): Date {
  return timestamp.toDate();
}

export function convertProgressToFirestore(progress: Progress): FirestoreProgress['topicProgress'] {
  const firestoreProgress: FirestoreProgress['topicProgress'] = {};
  
  for (const [topicId, topicData] of Object.entries(progress)) {
    firestoreProgress[topicId] = {};
    for (const [modeId, wordIds] of Object.entries(topicData)) {
      firestoreProgress[topicId][modeId] = Array.from(wordIds);
    }
  }
  
  return firestoreProgress;
}

export function convertProgressFromFirestore(firestoreProgress: FirestoreProgress['topicProgress']): Progress {
  const progress: Progress = {};
  
  for (const [topicId, topicData] of Object.entries(firestoreProgress)) {
    progress[topicId] = {};
    for (const [modeId, wordIdArray] of Object.entries(topicData)) {
      progress[topicId][modeId] = new Set(wordIdArray.map(id => id as WordId));
    }
  }
  
  return progress;
}

// Ergänzung für Fortschritt-Synchronisation mit Firebase
export interface ProgressData extends Partial<UserData> {
    lastSync?: Date;
    version?: string;
    globalProgress?: Record<string, Record<string, string[]>>;
    trainerId?: string;
}