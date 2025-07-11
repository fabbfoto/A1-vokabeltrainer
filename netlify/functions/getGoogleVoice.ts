// netlify/functions/getGoogleVoice.ts
// TypeScript version of Google Text-to-Speech Netlify function

import { TextToSpeechClient } from '@google-cloud/text-to-speech';

// Type definitions for Netlify function
interface NetlifyEvent {
    httpMethod: string;
    body: string;
}

interface NetlifyContext {
    // Add context properties as needed
}

interface TextToSpeechRequest {
    text: string;
    lang?: string;
}

interface TextToSpeechResponse {
    audioContent: string;
}

interface ErrorResponse {
    error: string;
}

// Initialize the Google Cloud Text-to-Speech client
const client = new TextToSpeechClient({
    credentials: {
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
        client_email: process.env.GOOGLE_CLIENT_EMAIL || '',
    },
    projectId: process.env.GOOGLE_PROJECT_ID || '',
});

export const handler = async (event: NetlifyEvent, context: NetlifyContext): Promise<{
    statusCode: number;
    headers?: Record<string, string>;
    body: string;
}> => {
    // Nur POST-Anfragen erlauben, da wir Daten senden
    if (event.httpMethod !== 'POST') {
        return { 
            statusCode: 405, 
            body: 'Method Not Allowed' 
        };
    }

    try {
        // Text aus der Anfrage holen, die vom Frontend kommt
        const { text, lang = 'de-DE' }: TextToSpeechRequest = JSON.parse(event.body);

        if (!text) {
            return { 
                statusCode: 400, 
                body: 'Bitte Text mitsenden.' 
            };
        }

        // Die Anfrage an Google's Text-to-Speech API konfigurieren
        const request = {
            input: { text: text },
            // Hier wählen wir eine hochwertige deutsche Stimme aus
            voice: { languageCode: lang, name: 'de-DE-Wavenet-F' },
            // Wir wollen eine MP3-Datei als Ergebnis
            audioConfig: { audioEncoding: 'MP3' as const },
        };

        // Die Anfrage an Google senden und auf die Antwort warten
        const [response] = await client.synthesizeSpeech(request);

        // Die erhaltene Audiodatei für den Versand an den Browser vorbereiten
        const audioContent = response.audioContent?.toString('base64') || '';

        // Die Audiodatei als Antwort zurück an den Browser schicken
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ audioContent } as TextToSpeechResponse),
        };

    } catch (error) {
        console.error("Fehler in der Netlify Function:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Ein interner Fehler ist aufgetreten.' 
            } as ErrorResponse),
        };
    }
}; 