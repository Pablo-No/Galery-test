var CACHE_NAME = 'my-offline-cache';
var urlsToCache = [
  'index.html',
  'assets/images/1.jpg',
  'assets/images/2.jpg',
  'assets/images/3.jpg',
  'assets/scripts/script.js',
  'assets/styles/style.css',
  'assets/styles/fonts/NotoSans/NotoSans-Regular.woff2',
  'assets/styles/fonts/NotoSans/NotoSans-Italic.woff2',
  'assets/styles/fonts/NotoSans/NotoSans-Bold.woff2',
  'assets/styles/fonts/NotoSans/NotoSans-BoldItalic.woff2'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, response);
        });
      })
      .catch(function() {
          caches.match(event.request).then(function(response) {
            return response;
          }
        );
      }
    )
  );
})
