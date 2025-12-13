/* sw.js — SAFE MODE UNIVERSAL */

/* ❗❗ PENTING
   - TIDAK pakai const / let
   - TIDAK pakai arrow function
   - TIDAK pakai cache API kompleks
   - TIDAK pakai Promise chain
   - TIDAK pakai async / await
*/

self.addEventListener('install', function (event) {
  // langsung aktif
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  // ambil kontrol halaman
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  // NETWORK ONLY (tidak cache apa pun)
  event.respondWith(fetch(event.request));
});

