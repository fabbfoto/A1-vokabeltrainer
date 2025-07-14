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
    details?: string;
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
    // Log environment variables (without sensitive data)
    console.log('🔧 Environment check:');
    console.log('- GOOGLE_CLIENT_EMAIL:', process.env.GOOGLE_CLIENT_EMAIL ? '✅ Set' : '❌ Missing');
    console.log('- GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? '✅ Set' : '❌ Missing');
    console.log('- GOOGLE_PROJECT_ID:', process.env.GOOGLE_PROJECT_ID ? '✅ Set' : '❌ Missing');

    // Nur POST-Anfragen erlauben, da wir Daten senden
    if (event.httpMethod !== 'POST') {
        return { 
            statusCode: 405, 
            body: JSON.stringify({ error: 'Method Not Allowed' } as ErrorResponse)
        };
    }

    try {
        // Text aus der Anfrage holen, die vom Frontend kommt
        const { text, lang = 'de-DE' }: TextToSpeechRequest = JSON.parse(event.body);

        console.log('📝 Received request:', { text: text.substring(0, 50) + '...', lang });

        if (!text) {
            return { 
                statusCode: 400, 
                body: JSON.stringify({ error: 'Bitte Text mitsenden.' } as ErrorResponse)
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

        console.log('🎤 Sending request to Google TTS API...');

        // Die Anfrage an Google senden und auf die Antwort warten
        const [response] = await client.synthesizeSpeech(request);

        console.log('✅ Received response from Google TTS API');

        // Die erhaltene Audiodatei für den Versand an den Browser vorbereiten
        const audioContent = response.audioContent?.toString('base64') || '';

        if (!audioContent) {
            console.error('❌ No audio content received from Google TTS API');
            return {
                statusCode: 500,
                body: JSON.stringify({ 
                    error: 'Keine Audiodaten von Google TTS API erhalten.',
                    details: 'Audio content is empty'
                } as ErrorResponse),
            };
        }

        console.log('🎵 Audio content length:', audioContent.length);

        // Die Audiodatei als Antwort zurück an den Browser schicken
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: JSON.stringify({ audioContent } as TextToSpeechResponse),
        };

    } catch (error) {
        console.error("❌ Fehler in der Netlify Function:", error);
        
        // Detaillierte Fehlerbehandlung
        let errorMessage = 'Ein interner Fehler ist aufgetreten.';
        let errorDetails = '';
        
        if (error instanceof Error) {
            errorMessage = error.message;
            errorDetails = error.stack || '';
        }
        
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: JSON.stringify({ 
                error: errorMessage,
                details: errorDetails
            } as ErrorResponse),
        };
    }
}; 