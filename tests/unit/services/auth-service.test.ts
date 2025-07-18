import { describe, it, expect, beforeEach, vi } from 'vitest';
import { AuthService } from '../../../src/services/auth-service';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';

// Mock Firebase Auth
vi.mock('firebase/auth');

describe('AuthService', () => {
  let authService: AuthService;
  let mockAuth: any;

  beforeEach(() => {
    vi.clearAllMocks();
    
    mockAuth = {
      currentUser: null,
      onIdTokenChanged: vi.fn(),
      signInWithPopup: vi.fn(),
      signOut: vi.fn()
    };

    (getAuth as any).mockReturnValue(mockAuth);
    authService = new AuthService();
  });

  describe('constructor', () => {
    it('should initialize with null auth and user', () => {
      expect(authService.auth).toBeNull();
      expect(authService.currentUser).toBeNull();
      expect(authService.firebaseUser).toBeNull();
    });
  });

  describe('isLoggedIn', () => {
    it('should return false when no user is logged in', () => {
      expect(authService.isLoggedIn()).toBe(false);
    });

    it('should return true when user is logged in', () => {
      const mockUser = { uid: 'test-uid', email: 'test@example.com' };
      authService.currentUser = mockUser;
      expect(authService.isLoggedIn()).toBe(true);
    });
  });

  describe('getCurrentUser', () => {
    it('should return null when no user is logged in', () => {
      expect(authService.getCurrentUser()).toBeNull();
    });

    it('should return current user when logged in', () => {
      const mockUser = { uid: 'test-uid', email: 'test@example.com' };
      authService.currentUser = mockUser;
      expect(authService.getCurrentUser()).toEqual(mockUser);
    });
  });

  describe('getUserId', () => {
    it('should return null when no user is logged in', () => {
      expect(authService.getUserId()).toBeNull();
    });

    it('should return user ID when logged in', () => {
      const mockUser = { uid: 'test-uid', email: 'test@example.com' };
      authService.currentUser = mockUser;
      expect(authService.getUserId()).toBe('test-uid');
    });
  });

  describe('getUserEmail', () => {
    it('should return null when no user is logged in', () => {
      expect(authService.getUserEmail()).toBeNull();
    });

    it('should return user email when logged in', () => {
      const mockUser = { uid: 'test-uid', email: 'test@example.com' };
      authService.currentUser = mockUser;
      expect(authService.getUserEmail()).toBe('test@example.com');
    });
  });

  describe('getDisplayName', () => {
    it('should return null when no user is logged in', () => {
      expect(authService.getDisplayName()).toBeNull();
    });

    it('should return display name when logged in', () => {
      const mockUser = { uid: 'test-uid', displayName: 'Test User' };
      authService.currentUser = mockUser;
      expect(authService.getDisplayName()).toBe('Test User');
    });
  });

  describe('isEmailVerified', () => {
    it('should return false when no user is logged in', () => {
      expect(authService.isEmailVerified()).toBe(false);
    });

    it('should return email verification status when logged in', () => {
      const mockUser = { uid: 'test-uid', emailVerified: true };
      authService.currentUser = mockUser;
      expect(authService.isEmailVerified()).toBe(true);
    });
  });

  describe('convertFirebaseUser', () => {
    it('should return null for null input', () => {
      expect(authService.convertFirebaseUser(null)).toBeNull();
    });

    it('should convert Firebase user to internal format', () => {
      const firebaseUser = {
        uid: 'test-uid',
        email: 'test@example.com',
        displayName: 'Test User',
        emailVerified: true
      };

      const result = authService.convertFirebaseUser(firebaseUser as any);
      expect(result).toEqual({
        uid: 'test-uid',
        email: 'test@example.com',
        displayName: 'Test User',
        emailVerified: true
      });
    });
  });

  describe('login', () => {
    it('should throw error when auth is not available', async () => {
      await expect(authService.login()).rejects.toThrow('Auth not available');
    });
  });

  describe('logout', () => {
    it('should throw error when auth is not available', async () => {
      await expect(authService.logout()).rejects.toThrow('Auth not available');
    });
  });

  describe('loginWithGoogle', () => {
    it('should throw error when auth is not available', async () => {
      await expect(authService.loginWithGoogle()).rejects.toThrow('Auth not available');
    });
  });

  describe('onAuthStateChanged', () => {
    it('should return unsubscribe function', () => {
      const unsubscribe = authService.onAuthStateChanged(() => {});
      expect(typeof unsubscribe).toBe('function');
    });
  });
}); 