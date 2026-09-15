// Service worker: aplikacja działa offline, a online zawsze pobiera najnowszą wersję.
const CACHE = 'coherence-v1';
const SHELL = [
  './', './index.html', './manifest.webmanifest', './css/app.css',
  './js/app.js', './js/store.js', './js/ui.js', './js/db.js',
  './js/views/dashboard.js', './js/views/path.js', './js/views/courses.js', './js/views/lesson.js',
  './js/views/library.js', './js/views/review.js', './js/views/tools.js', './js/views/log.js', './js/views/profile.js',
  './data/curriculum.js', './data/lessons.js', './data/resources.js',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-180.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  // Najpierw sieć (świeże treści), przy braku zasięgu lub po 3 s — kopia z cache.
  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const fromCache = () => cache.match(request, { ignoreSearch: true })
        .then((r) => r || (request.mode === 'navigate' ? cache.match('./index.html') : Response.error()));
      const network = fetch(request).then((res) => { if (res.ok) cache.put(request, res.clone()); return res; });
      const timeout = new Promise((resolve) => setTimeout(resolve, 3000)).then(async () => (await cache.match(request, { ignoreSearch: true })) || network);
      return Promise.race([network, timeout]).catch(fromCache);
    }),
  );
});
