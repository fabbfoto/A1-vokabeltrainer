const CACHE_NAME = 'goethe-a1-trainer-cache-v1';
const urlsToCache = [
  '/', // Alias für index.html
  '/index.html',
  // '/style.css', // Wenn du CSS auslagerst
  // '/script.js', // Wenn du JS auslagerst
  // '/vocabulary.js', // Wenn du Vokabeln auslagerst
  '/manifest.json'
  // Füge hier Pfade zu deinen Icons hinzu, z.B.:
  // '/icons/icon-192x192.png',
  // '/icons/icon-512x512.png'
  // Und andere wichtige Assets
];

// Installation des Service Workers und Caching der App-Shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Failed to open cache or add URLs:', err);
      })
  );
});

// Netzwerk-Anfragen abfangen und aus dem Cache bedienen, wenn möglich
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          // Wichtig: Klone die Antwort. Eine Antwort ist ein Stream und
          // kann nur einmal konsumiert werden. Wir müssen eine für den Browser
          // und eine für den Cache klonen.
          function(response) {
            // Prüfe, ob wir eine valide Antwort erhalten haben
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(err => {
        console.error('Fetch event failed:', err);
        // Optional: Fallback auf eine Offline-Seite, wenn sowohl Cache als auch Netzwerk fehlschlagen
      })
  );
});

// Alten Cache löschen bei Aktivierung eines neuen Service Workers
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});