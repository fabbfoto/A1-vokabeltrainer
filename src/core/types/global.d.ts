// shared/types/global.d.ts
// Globale Type-Definitionen für Window-Erweiterungen

declare global {
  interface Window {
    // Ranking UI
    rankingUI?: {
      showUserStats: () => void;
      showGlobalRankings: () => void;
      showTopicRankings: (topic: string) => Promise<void>;
      showWeeklyRankings: () => void;
    };
    
    // Error Analysis Functions
    analyzeErrorCounts?: () => void;
    hasErrorsForMode?: (mode: string) => boolean;
    getErrorCountForMode?: (mode: string) => number;
    showErrorSummary?: () => void;
    
    // Supabase Services (Legacy Firebase entfernt)
supabaseSyncService?: {
      saveProgress: (data: unknown) => void;
      startRealtimeSync: (userId: string) => void;
      stopRealtimeSync: () => void;
    };
    
    // Vocabulary Data
    vokabular?: Record<string, Record<string, unknown[]>>;
    
    // Trainer State
    state?: {
      currentVocabularySet: Array<{
        id: string;
        german: string;
        english: string;
      }>;
    };
  }
}

export {}; 