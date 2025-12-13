// ================= SAFE PWA CACHE (ALL DEVICES) =================
var CACHE_NAME = 'warung-cache-v1';

var FILES_TO_CACHE = [
  './',
  './index.html',

  // ===== CSS =====
  './css/ui.css',
  './css/flash.css',
  './css/search.css',
  './css/qty-addcart.css',
  './css/nama-alamat.css',
  './css/popup-reg.css',
  './css/produk-modal.css',
  './css/cart-modal.css',
  './css/cat-modal.css',
  './css/akun-modal.css',
  './css/toast.css',
  './css/text-scrol.css',

  // ===== CORE JS =====
  './js/elementtt.js',
  './js/data-loader.js',
  './js/main.js',

  // ===== UI / EFFECT =====
  './js/flash.js',
  './js/flash-sheet.js',

  // ===== FEATURE =====
  './js/sidebar.js',
  './js/filter.js',
  './js/search-autocomplete.js',
  './js/produk-modal.js',
  './js/cat-modal.js',
  './js/cart-modal.js',
  './js/akun-modal.js',
  './js/cta-links.js',
  './js/tentang.js',

  // ===== AUDIO / AUTH =====
  './js/toast-audio.js',
  './js/register.js',

  // ===== PI =====
  './js/pi-integration.js',

  // ===== PWA =====
  './js/pwa.js'
];

// ================= INSTALL =================
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ================= ACTIVATE =================
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// ================= FETCH =================
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

