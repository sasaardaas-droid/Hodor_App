// Service Worker - Hodor
const CACHE_NAME = 'hodor-v1';

self.addEventListener('install', event => {
  console.log('Service Worker: install event');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker: activate event');
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  console.log('Service Worker: fetch event -', event.request.url);

  event.respondWith(
    fetch(event.request)
      .then(response => response)
      .catch(() => {
        return new Response('Offline', { status: 503 });
      })
  );
});
