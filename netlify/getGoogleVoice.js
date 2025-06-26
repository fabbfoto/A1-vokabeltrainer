const textToSpeech = require('@google-cloud/text-to-speech');

exports.handler = async function (event, context) {
    // Nur POST-Anfragen erlauben, da wir Daten senden
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // Text aus der Anfrage holen, die vom Frontend kommt
        const { text, lang = 'de-DE' } = JSON.parse(event.body);

        if (!text) {
            return { statusCode: 400, body: 'Bitte Text mitsenden.' };
        }

        // API-Zugangsdaten sicher aus den Netlify Umgebungsvariablen laden
        // Diese legen wir in Schritt 3 an!
        const client = new textToSpeech.TextToSpeechClient({
            credentials: {
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
            },
            projectId: process.env.GOOGLE_PROJECT_ID,
        });

        // Die Anfrage an Google's Text-to-Speech API konfigurieren
        const request = {
            input: { text: text },
            // Hier wählen wir eine hochwertige deutsche Stimme aus
            voice: { languageCode: lang, name: 'de-DE-Wavenet-F' },
            // Wir wollen eine MP3-Datei als Ergebnis
            audioConfig: { audioEncoding: 'MP3' },
        };

        // Die Anfrage an Google senden und auf die Antwort warten
        const [response] = await client.synthesizeSpeech(request);

        // Die erhaltene Audiodatei für den Versand an den Browser vorbereiten
        const audioContent = response.audioContent.toString('base64');

        // Die Audiodatei als Antwort zurück an den Browser schicken
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ audioContent }),
        };

    } catch (error) {
        console.error("Fehler in der Netlify Function:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Ein interner Fehler ist aufgetreten.' }),
        };
    }
};