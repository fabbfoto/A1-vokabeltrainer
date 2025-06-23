// device-sync.js - Universal Multi-Device Sync System
import { auth, db } from './firebase-config.js';
import { doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { signInAnonymously } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

class DeviceSyncService {
    constructor() {
        this.currentUserId = null;
        this.deviceInfo = this.detectDevice();
        this.syncCode = null;
        this.qrCode = null;
    }

    // Geräte-Detection
    detectDevice() {
        const ua = navigator.userAgent;
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
        const isTablet = /iPad|Android(?=.*Tablet)|PlayBook|Silk/i.test(ua);
        const isDesktop = !isMobile && !isTablet;
        
        // OS Detection
        let os = 'Unknown';
        if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
        else if (/Android/i.test(ua)) os = 'Android';
        else if (/Windows/i.test(ua)) os = 'Windows';
        else if (/Mac/i.test(ua)) os = 'macOS';
        else if (/Linux/i.test(ua)) os = 'Linux';
        
        // Browser Detection
        let browser = 'Unknown';
        if (/Chrome/i.test(ua) && !/Edge|Edg/i.test(ua)) browser = 'Chrome';
        else if (/Firefox/i.test(ua)) browser = 'Firefox';
        else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = 'Safari';
        else if (/Edge|Edg/i.test(ua)) browser = 'Edge';
        
        // Capabilities
        const hasCamera = 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;
        const supportsShare = 'share' in navigator;
        const supportsClipboard = 'clipboard' in navigator;
        
        return {
            type: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
            os,
            browser,
            displayName: `${os} ${browser}`,
            capabilities: {
                camera: hasCamera,
                share: supportsShare,
                clipboard: supportsClipboard,
                qrScan: hasCamera && isMobile // QR-Scan hauptsächlich auf Mobile
            }
        };
    }

    // Prüfe ob bereits ein Gerät verbunden ist
    async checkExistingSync() {
        const savedUserId = localStorage.getItem('syncedUserId');
        if (savedUserId) {
            console.log('✅ Bereits synchronisiert mit User-ID:', savedUserId);
            this.currentUserId = savedUserId;
            return true;
        }
        return false;
    }

    // Generiere 6-stelligen Sync-Code
    generateSyncCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    // Erstelle neuen Sync-Master (Hauptgerät)
    async createSyncMaster() {
        try {
            // Erstelle anonymen User falls noch nicht vorhanden
            let user = auth.currentUser;
            if (!user) {
                const credential = await signInAnonymously(auth);
                user = credential.user;
            }

            const userId = user.uid;
            const syncCode = this.generateSyncCode();
            
            // Speichere Sync-Info in Firestore (temporär für 10 Minuten)
            const syncRef = doc(db, 'syncCodes', syncCode);
            await setDoc(syncRef, {
                userId: userId,
                masterDevice: this.deviceInfo,
                createdAt: new Date(),
                expiresAt: new Date(Date.now() + 10 * 60 * 1000), // 10 Minuten
                used: false
            });

            this.currentUserId = userId;
            this.syncCode = syncCode;
            
            // Speichere lokal
            localStorage.setItem('syncedUserId', userId);
            localStorage.setItem('deviceSyncRole', 'master');
            
            console.log('✅ Sync-Master erstellt:', { userId, syncCode });
            
            return {
                userId,
                syncCode,
                qrData: this.generateQRData(userId, syncCode),
                shareLink: this.generateShareLink(userId, syncCode)
            };
            
        } catch (error) {
            console.error('❌ Fehler beim Erstellen des Sync-Masters:', error);
            throw error;
        }
    }

    // Verbinde mit bestehendem Sync via Code
    async connectViaCode(syncCode) {
        try {
            const syncRef = doc(db, 'syncCodes', syncCode);
            const syncDoc = await getDoc(syncRef);
            
            if (!syncDoc.exists()) {
                throw new Error('Sync-Code nicht gefunden');
            }
            
            const syncData = syncDoc.data();
            
            // Prüfe Ablaufzeit
            if (new Date() > syncData.expiresAt.toDate()) {
                throw new Error('Sync-Code ist abgelaufen');
            }
            
            if (syncData.used) {
                throw new Error('Sync-Code wurde bereits verwendet');
            }
            
            // Übernehme User-ID
            const userId = syncData.userId;
            this.currentUserId = userId;
            
            // Speichere lokal
            localStorage.setItem('syncedUserId', userId);
            localStorage.setItem('deviceSyncRole', 'connected');
            
            // Markiere Code als verwendet
            await setDoc(syncRef, { ...syncData, used: true, connectedDevice: this.deviceInfo });
            
            console.log('✅ Erfolgreich verbunden mit User-ID:', userId);
            
            return userId;
            
        } catch (error) {
            console.error('❌ Fehler beim Verbinden via Code:', error);
            throw error;
        }
    }

    // Verbinde via URL-Parameter
    async connectViaURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const syncParam = urlParams.get('sync');
        
        if (syncParam) {
            try {
                // Parse sync data from URL
                const syncData = JSON.parse(atob(syncParam));
                await this.connectViaCode(syncData.code);
                
                // URL bereinigen
                window.history.replaceState({}, document.title, window.location.pathname);
                
                return true;
            } catch (error) {
                console.error('❌ Fehler beim URL-Sync:', error);
                return false;
            }
        }
        return false;
    }

    // Generiere QR-Code Daten
    generateQRData(userId, syncCode) {
        const qrData = {
            type: 'vokabeltrainer-sync',
            code: syncCode,
            userId: userId,
            timestamp: Date.now()
        };
        return JSON.stringify(qrData);
    }

    // Generiere Share-Link
    generateShareLink(userId, syncCode) {
        const syncData = btoa(JSON.stringify({ code: syncCode, userId }));
        return `${window.location.origin}${window.location.pathname}?sync=${syncData}`;
    }

    // QR-Code als DataURL generieren
    async generateQRCodeImage(data) {
        // Einfache QR-Code Implementierung (placeholder)
        // In Production würdest du eine QR-Code Library verwenden
        return `data:image/svg+xml;base64,${btoa(this.createSimpleQR(data))}`;
    }

    // Einfacher QR-Code Placeholder (für Demo)
    createSimpleQR(data) {
        return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="white"/>
            <rect x="10" y="10" width="180" height="180" fill="black"/>
            <rect x="20" y="20" width="160" height="160" fill="white"/>
            <text x="100" y="100" text-anchor="middle" font-family="monospace" font-size="12" fill="black">
                QR: ${data.substring(0, 10)}...
            </text>
            <text x="100" y="120" text-anchor="middle" font-family="monospace" font-size="8" fill="gray">
                Scan with phone camera
            </text>
        </svg>`;
    }

    // Kopiere Text in Zwischenablage
    async copyToClipboard(text) {
        if (this.deviceInfo.capabilities.clipboard) {
            try {
                await navigator.clipboard.writeText(text);
                return true;
            } catch (error) {
                console.error('Clipboard-Fehler:', error);
            }
        }
        
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textArea);
        return success;
    }

    // Native Share API
    async shareLink(link, title = 'Vokabeltrainer Sync') {
        if (this.deviceInfo.capabilities.share) {
            try {
                await navigator.share({
                    title: title,
                    text: 'Verbinde dein Gerät mit dem Vokabeltrainer',
                    url: link
                });
                return true;
            } catch (error) {
                console.error('Share-Fehler:', error);
            }
        }
        return false;
    }

    // Hole verbundene Geräte
    async getConnectedDevices() {
        // Implementation für Device-Management
        // Würde in Production erweiterte Firestore-Queries nutzen
        return [];
    }

    // Entferne Gerät
    async removeDevice(deviceId) {
        // Implementation für Device-Removal
        console.log('Gerät entfernt:', deviceId);
    }

    // Reset Sync (alle Verbindungen löschen)
    resetSync() {
        localStorage.removeItem('syncedUserId');
        localStorage.removeItem('deviceSyncRole');
        this.currentUserId = null;
        console.log('✅ Sync zurückgesetzt');
    }
}

// Singleton Export
export const deviceSyncService = new DeviceSyncService();