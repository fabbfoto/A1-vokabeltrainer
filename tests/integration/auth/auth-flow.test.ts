import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { initializeAuth } from '../../../src/infrastructure/auth/index';
import { AuthService } from '../../../src/services/auth-service';
import { SyncService } from '../../../src/services/sync-service';
import { RankingService } from '../../../src/services/ranking-service';

// Mock Firebase modules
vi.mock('firebase/auth');
vi.mock('firebase/firestore');
vi.mock('firebase/app');

describe('Auth Flow Integration', () => {
  let authService: AuthService;
  let syncService: SyncService;
  let rankingService: RankingService;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('initializeAuth', () => {
    it('should initialize all auth services successfully', async () => {
      const mockAuth = {
        currentUser: null,
        onIdTokenChanged: vi.fn((callback) => {
          // Simulate auth state change
          callback(null);
          return () => {}; // unsubscribe function
        })
      };

      const { getAuth } = await import('firebase/auth');
      (getAuth as any).mockReturnValue(mockAuth);

      const services = initializeAuth('test-trainer', {
        buttonContainerId: 'auth-button-container',
        rankingContainerId: 'ranking-container'
      });

      expect(services.authService).toBeInstanceOf(AuthService);
      expect(services.syncService).toBeInstanceOf(SyncService);
      expect(services.rankingService).toBeInstanceOf(RankingService);
      expect(services.authUI).toBeDefined();
    });

    it('should handle Firebase initialization errors gracefully', async () => {
      const { getAuth } = await import('firebase/auth');
      (getAuth as any).mockImplementation(() => {
        throw new Error('Firebase not configured');
      });

      const services = initializeAuth('test-trainer', {
        buttonContainerId: 'auth-button-container',
        rankingContainerId: 'ranking-container'
      });

      // Should still return mock services
      expect(services.authService).toBeDefined();
      expect(services.syncService).toBeDefined();
      expect(services.rankingService).toBeDefined();
      expect(services.authUI).toBeDefined();
    });
  });

  describe('Auth State Changes', () => {
    it('should handle user login', async () => {
      const mockUser = {
        uid: 'test-uid',
        email: 'test@example.com',
        displayName: 'Test User'
      };

      const mockAuth = {
        currentUser: mockUser,
        onIdTokenChanged: vi.fn((callback) => {
          callback(mockUser);
          return () => {};
        })
      };

      const { getAuth } = await import('firebase/auth');
      (getAuth as any).mockReturnValue(mockAuth);

      const services = initializeAuth('test-trainer', {
        buttonContainerId: 'auth-button-container',
        rankingContainerId: 'ranking-container'
      });

      // Verify auth state change was registered
      expect(mockAuth.onIdTokenChanged).toHaveBeenCalled();
    });

    it('should handle user logout', async () => {
      const mockAuth = {
        currentUser: null,
        onIdTokenChanged: vi.fn((callback) => {
          callback(null);
          return () => {};
        })
      };

      const { getAuth } = await import('firebase/auth');
      (getAuth as any).mockReturnValue(mockAuth);

      const services = initializeAuth('test-trainer', {
        buttonContainerId: 'auth-button-container',
        rankingContainerId: 'ranking-container'
      });

      // Verify auth state change was registered
      expect(mockAuth.onIdTokenChanged).toHaveBeenCalled();
    });
  });

  describe('Service Integration', () => {
    it('should properly connect AuthService with SyncService', async () => {
      const services = initializeAuth('test-trainer', {
        buttonContainerId: 'auth-button-container',
        rankingContainerId: 'ranking-container'
      });

      expect(services.syncService.authService).toBe(services.authService);
    });

    it('should properly connect AuthService with RankingService', async () => {
      const services = initializeAuth('test-trainer', {
        buttonContainerId: 'auth-button-container',
        rankingContainerId: 'ranking-container'
      });

      expect(services.rankingService.authService).toBe(services.authService);
    });

    it('should make ranking service globally available', async () => {
      const services = initializeAuth('test-trainer', {
        buttonContainerId: 'auth-button-container',
        rankingContainerId: 'ranking-container'
      });

      expect((window as any).rankingService).toBe(services.rankingService);
    });
  });

  describe('UI Integration', () => {
    it('should initialize AuthUI with correct configuration', async () => {
      const mockAuth = {
        currentUser: null,
        onIdTokenChanged: vi.fn(() => () => {})
      };

      const { getAuth } = await import('firebase/auth');
      (getAuth as any).mockReturnValue(mockAuth);

      const uiConfig = {
        buttonContainerId: 'auth-button-container',
        rankingContainerId: 'ranking-container'
      };

      const services = initializeAuth('test-trainer', uiConfig);

      expect(services.authUI).toBeDefined();
      expect(typeof services.authUI.show).toBe('function');
      expect(typeof services.authUI.hide).toBe('function');
    });

    it('should handle UI updates after login', async () => {
      const mockUser = {
        uid: 'test-uid',
        email: 'test@example.com',
        displayName: 'Test User'
      };

      const mockAuth = {
        currentUser: mockUser,
        onIdTokenChanged: vi.fn((callback) => {
          callback(mockUser);
          return () => {};
        })
      };

      const { getAuth } = await import('firebase/auth');
      (getAuth as any).mockReturnValue(mockAuth);

      const services = initializeAuth('test-trainer', {
        buttonContainerId: 'auth-button-container',
        rankingContainerId: 'ranking-container'
      });

      // Verify UI update method exists
      expect(typeof services.authUI.updateUIAfterLogin).toBe('function');
      expect(typeof services.authUI.updateUIAfterLogout).toBe('function');
    });
  });

  describe('Error Handling', () => {
    it('should handle Firebase auth errors gracefully', async () => {
      const mockAuth = {
        currentUser: null,
        onIdTokenChanged: vi.fn((callback) => {
          // Simulate error
          callback(null);
          return () => {};
        })
      };

      const { getAuth } = await import('firebase/auth');
      (getAuth as any).mockReturnValue(mockAuth);

      // Should not throw error
      expect(() => {
        initializeAuth('test-trainer', {
          buttonContainerId: 'auth-button-container',
          rankingContainerId: 'ranking-container'
        });
      }).not.toThrow();
    });

    it('should provide fallback services when Firebase is unavailable', async () => {
      const { getAuth } = await import('firebase/auth');
      (getAuth as any).mockImplementation(() => {
        throw new Error('Firebase not available');
      });

      const services = initializeAuth('test-trainer', {
        buttonContainerId: 'auth-button-container',
        rankingContainerId: 'ranking-container'
      });

      // Verify fallback services are provided
      expect(services.authService.isLoggedIn()).toBe(false);
      expect(services.syncService.isConnected()).toBe(false);
    });
  });
}); 