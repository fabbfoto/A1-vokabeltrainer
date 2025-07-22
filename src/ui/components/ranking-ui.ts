// shared/ui/ranking-ui.ts
// UI-Komponenten für Ranking-System

// Firebase-Imports für Runtime
import { collection, addDoc, query, orderBy, limit, getDocs, where, Timestamp } from 'firebase/firestore';
import type { QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import type { RankingEntry, UserStats } from '../../services/ranking-service';
import type { RankingService } from '../../services/ranking-service';

export interface RankingUIConfig {
  containerId: string;
  showUserStats?: boolean;
  showGlobalRankings?: boolean;
  showTopicRankings?: boolean;
  showWeeklyRankings?: boolean;
}

export class RankingUI {
  private container: HTMLElement | null = null;
  private rankingService: RankingService;
  private config: RankingUIConfig;

  constructor(rankingService: RankingService, config: RankingUIConfig) {
    this.rankingService = rankingService;
    this.config = config;
    this.container = document.getElementById(config.containerId);
  }

  async showGlobalRankings(): Promise<void> {
    if (!this.container) return;
    
    this.showLoading('Lade globale Rangliste...');
    try {
      const response = await this.rankingService.getGlobalRankings(20);
      this.renderRankings(response.entries, '🌍 Globale Rangliste', 'Alle Themen');
    } catch (error) {
      this.showError('Fehler beim Laden der globalen Rangliste');
    }
  }

  // NEU: Spezielle Methode für globale Ranglisten
  async showGlobalRankingList(): Promise<void> {
    if (!this.container) return;
    
    this.showLoading('🏆 Lade globale Ranglisten-Liste...');
    try {
      const response = await this.rankingService.getGlobalRankingList(50);
      this.renderGlobalRankings(response.entries, '🏆 Globale Ranglisten-Liste', 'Ausgewogene 20-Fragen-Tests');
    } catch (error) {
      this.showError('Fehler beim Laden der globalen Ranglisten-Liste');
    }
  }

  async showTopicRankings(topic: string): Promise<void> {
    if (!this.container) return;
    
    this.showLoading(`Lade Rangliste für ${topic}...`);
    try {
      const response = await this.rankingService.getTopicRankings(topic, 20);
      this.renderRankings(response.entries, `📚 Rangliste: ${topic}`, topic);
    } catch (error) {
      this.showError(`Fehler beim Laden der Rangliste für ${topic}`);
    }
  }

  async showTestTypeRankings(testType: 'chaos' | 'structured'): Promise<void> {
    if (!this.container) return;
    
    const typeName = testType === 'chaos' ? 'Chaos-Test' : 'Strukturierter Test';
    this.showLoading(`Lade Rangliste für ${typeName}...`);
    try {
      const response = await this.rankingService.getTestTypeRankings(testType, 20);
      this.renderRankings(response.entries, `🎯 Rangliste: ${typeName}`, testType);
    } catch (error) {
      this.showError(`Fehler beim Laden der Rangliste für ${typeName}`);
    }
  }

  async showWeeklyRankings(): Promise<void> {
    if (!this.container) return;
    
    this.showLoading('Lade wöchentliche Rangliste...');
    try {
      const response = await this.rankingService.getWeeklyRankings();
      this.renderRankings(response.entries, '📅 Wöchentliche Rangliste', 'Diese Woche');
    } catch (error) {
      this.showError('Fehler beim Laden der wöchentlichen Rangliste');
    }
  }

  async showUserStats(): Promise<void> {
    if (!this.container) return;
    
    this.showLoading('Lade deine Statistiken...');
    const user = this.rankingService['authService'].currentUser;
    if (!user) {
      this.showError('Du musst angemeldet sein, um deine Statistiken zu sehen.');
      return;
    }
    
    const stats = await this.rankingService.getUserStats(user.uid);
    if (!stats) {
      this.showError('Keine Statistiken gefunden.');
      return;
    }
    
    this.renderUserStats(stats);
  }

  private renderRankings(rankings: RankingEntry[], title: string, subtitle: string): void {
    if (!this.container) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    modal.innerHTML = `
              <div class="bg-gradient-to-br from-white to-[#F2AE2E]/[0.03] rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-800">${title}</h2>
            <p class="text-gray-600">${subtitle}</p>
          </div>
          <button class="text-gray-500 hover:text-gray-700 text-2xl" onclick="this.parentElement.parentElement.parentElement.remove()">
            ✕
          </button>
        </div>
        
        <div class="space-y-3">
          ${rankings.map((entry, index) => `
            <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div class="flex items-center space-x-4">
                <div class="flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg ${
                  index === 0 ? 'bg-yellow-500' : 
                  index === 1 ? 'bg-gray-400' : 
                  index === 2 ? 'bg-orange-500' : 'bg-de-blue'
                }">
                  ${index + 1}
                </div>
                <div>
                  <div class="font-semibold text-lg">${entry.userName}</div>
                  <div class="text-sm text-gray-600">
                    ${entry.topic} • Chaos-Test • 
                    ${new Date(entry.timestamp).toLocaleDateString('de-DE')}
                  </div>
                </div>
              </div>
              <div class="text-right">
                <div class="font-bold text-2xl text-de-blue">${entry.score.toFixed(2)}</div>
                <div class="text-sm text-gray-600">
                  ${Math.floor(entry.timeInSeconds)}s • ${Math.round(entry.accuracy * 100)}%
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        ${rankings.length === 0 ? `
          <div class="text-center py-8 text-gray-500">
            <div class="text-4xl mb-2">🏆</div>
            <div class="text-xl">Noch keine Ergebnisse</div>
            <div class="text-sm">Sei der Erste und starte einen Test!</div>
          </div>
        ` : ''}
        
        <div class="mt-6 flex justify-center">
          <button class="px-6 py-2 bg-de-blue text-white rounded-lg hover:bg-de-blue/90 transition-colors" 
                  onclick="this.parentElement.parentElement.parentElement.remove()">
            Schließen
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  }

  // NEU: Spezielle Render-Methode für globale Ranglisten
  private renderGlobalRankings(rankings: RankingEntry[], title: string, subtitle: string): void {
    if (!this.container) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    modal.innerHTML = `
              <div class="bg-gradient-to-br from-white to-[#F2AE2E]/[0.03] rounded-lg p-6 max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-800">${title}</h2>
            <p class="text-gray-600">${subtitle}</p>
            <p class="text-sm text-gray-500 mt-1">
              🎯 20 Fragen • 5 Bedeutung • 5 Lückentext • 5 Schreibweise • 5 Satzübersetzung
            </p>
          </div>
          <button class="text-gray-500 hover:text-gray-700 text-2xl" onclick="this.parentElement.parentElement.parentElement.remove()">
            ✕
          </button>
        </div>
        
        <div class="space-y-3">
          ${rankings.map((entry, index) => {
            const isDummy = entry.userId.startsWith('dummy-user-');
            return `
            <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow ${isDummy ? 'border-dashed border-orange-300 bg-orange-50' : ''}">
              <div class="flex items-center space-x-4">
                <div class="flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg ${
                  index === 0 ? 'bg-yellow-500' : 
                  index === 1 ? 'bg-gray-400' : 
                  index === 2 ? 'bg-orange-500' : 'bg-de-blue'
                }">
                  ${index + 1}
                </div>
                <div>
                  <div class="font-semibold text-lg flex items-center">
                    ${entry.userName}
                    ${isDummy ? '<span class="ml-2 text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">⭐ Beispiel</span>' : ''}
                  </div>
                  <div class="text-sm text-gray-600">
                    ${Math.round(entry.accuracy * 100)}% Genauigkeit • ${Math.floor(entry.timeInSeconds)}s • 
                    ${new Date(entry.timestamp).toLocaleDateString('de-DE')}
                  </div>
                  ${(entry as any).timeFactor ? `
                    <div class="text-xs text-gray-500">
                      ⏱️ Zeitfaktor: ${(entry as any).timeFactor.toFixed(2)}x
                    </div>
                  ` : ''}
                </div>
              </div>
              <div class="text-right">
                <div class="font-bold text-2xl text-de-blue">${entry.score.toFixed(2)}</div>
                <div class="text-sm text-gray-600">
                  ${entry.correctAnswers}/${entry.totalQuestions} • ${Math.floor(entry.timeInSeconds / 60)}:${(entry.timeInSeconds % 60).toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          `}).join('')}
        </div>
        
        ${rankings.some(entry => entry.userId.startsWith('dummy-user-')) ? `
          <div class="mt-4 p-3 bg-purple-100 border border-purple-300 rounded-lg">
            <div class="text-sm text-purple-800">
              <span class="font-semibold">🌟 Willkommen!</span> Die Ergebnisse mit ⭐ sind Beispiel-Daten von anderen Lernenden. 
              Starte deinen eigenen Test und schaue, wo du landest!
            </div>
          </div>
        ` : ''}
        
        ${rankings.length === 0 ? `
          <div class="text-center py-8 text-gray-500">
            <div class="text-4xl mb-2">🏆</div>
            <div class="text-xl">Noch keine globalen Ranglisten-Ergebnisse</div>
            <div class="text-sm">Starte den ersten globalen Ranglisten-Test!</div>
          </div>
        ` : ''}
        
        <div class="mt-6 flex justify-center space-x-4">
          <button class="px-6 py-2 bg-de-green text-white rounded-lg hover:bg-de-green/90 transition-colors" 
                  onclick="window.location.reload()">
            🏆 Test starten
          </button>
          <button class="px-6 py-2 bg-de-blue text-white rounded-lg hover:bg-de-blue/90 transition-colors" 
                  onclick="this.parentElement.parentElement.parentElement.remove()">
            Schließen
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  }

  private renderUserStats(stats: UserStats): void {
    if (!this.container) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    modal.innerHTML = `
              <div class="bg-gradient-to-br from-white to-[#F2AE2E]/[0.03] rounded-lg p-6 max-w-2xl w-full mx-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold text-gray-800">📊 Deine Statistiken</h2>
          <button class="text-gray-500 hover:text-gray-700 text-2xl" onclick="this.parentElement.parentElement.remove()">
            ✕
          </button>
        </div>
        
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <div class="text-2xl font-bold text-de-blue">${stats.totalTests}</div>
            <div class="text-sm text-gray-600">Tests</div>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <div class="text-2xl font-bold text-de-green">${stats.averageScore}</div>
            <div class="text-sm text-gray-600">Ø Score</div>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg">
            <div class="text-2xl font-bold text-de-gold">${stats.bestScore}</div>
            <div class="text-sm text-gray-600">Bester Score</div>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <div class="text-2xl font-bold text-purple-600">${Math.floor(stats.totalTime / 60)}m</div>
            <div class="text-sm text-gray-600">Gesamtzeit</div>
          </div>
        </div>
        
        <div class="space-y-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="font-semibold mb-2">📈 Durchschnittliche Genauigkeit</div>
            <div class="text-2xl font-bold text-gray-800">${stats.averageAccuracy}%</div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="font-semibold mb-2">⭐ Lieblingsthema</div>
            <div class="text-lg text-gray-800">${stats.favoriteTopic}</div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="font-semibold mb-2">🎯 Test-Verteilung</div>
            <div class="space-y-2">
              ${Object.entries(stats.testCountByType).map(([type, count]) => `
                <div class="flex justify-between">
                  <span>${type === 'chaos' ? 'Chaos-Tests' : 'Strukturierte Tests'}</span>
                  <span class="font-semibold">${count}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        
        <div class="mt-6 flex justify-center">
          <button class="px-6 py-2 bg-de-blue text-white rounded-lg hover:bg-de-blue/90 transition-colors" 
                  onclick="this.parentElement.parentElement.remove()">
            Schließen
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  }

  private showLoading(message: string): void {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <div class="flex items-center justify-center p-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-3"></div>
        <span class="text-gray-600">${message}</span>
      </div>
    `;
  }

  private showError(message: string): void {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <div class="text-center p-8 text-de-red">
        <div class="text-2xl mb-2">⚠️</div>
        <div>${message}</div>
      </div>
    `;
  }

  // Navigation für verschiedene Ranking-Typen
  showRankingNavigation(): void {
    if (!this.container) return;
    
    this.container.innerHTML = `
              <div class="bg-gradient-to-br from-white to-[#F2AE2E]/[0.03] rounded-lg p-6 shadow-de-gray-300/50">
        <h3 class="text-xl font-bold mb-4">🏆 Ranglisten</h3>
        <div class="grid grid-cols-2 gap-3">
          <button class="p-3 bg-de-gold/10 text-de-gold rounded-lg hover:bg-de-gold/20 transition-colors" 
                  onclick="window.rankingUI.showGlobalRankingList()">
            🏆 Global Ranking
          </button>
          <button class="p-3 bg-de-blue/10 text-de-blue rounded-lg hover:bg-de-blue/20 transition-colors" 
                  onclick="window.rankingUI.showGlobalRankings()">
            🌍 Global
          </button>
          <button class="p-3 bg-de-green/10 text-de-green rounded-lg hover:bg-de-green/20 transition-colors" 
                  onclick="window.rankingUI.showWeeklyRankings()">
            📅 Diese Woche
          </button>
          <button class="p-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors" 
                  onclick="window.rankingUI.showTestTypeRankings('chaos')">
            🎯 Chaos-Tests
          </button>
          <button class="p-3 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors" 
                  onclick="window.rankingUI.showTestTypeRankings('structured')">
            📚 Strukturiert
          </button>
        </div>
        <div class="mt-4">
          <button class="w-full p-3 bg-de-gray-100 text-gray-700 rounded-lg hover:bg-de-gray-200 transition-colors" 
                  onclick="window.rankingUI.showUserStats()">
            📊 Meine Statistiken
          </button>
        </div>
      </div>
    `;
  }
} 