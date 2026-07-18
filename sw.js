const CACHE_NAME = 'raw-tracker-v27';
// Lista de archivos que queremos que se guarden en el móvil para usar offline
const ASSETS = [
  './gym.trk-v5.html',
  './sw.js',
  './manifest.json'
];

// Instalación: Guarda los archivos en la caché local del iPhone
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activación: Limpia cachés antiguas si actualizamos la app
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Peticiones: Si no hay internet, sirve el archivo guardado en caché
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
