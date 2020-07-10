var CACHE_NAME = 'my-offline-cache';
var urlsToCache = [
  '../../index.html',
  '../images/1.jpg',
  '../images/2.jpg',
  '../images/3.jpg',
  '../scripts/script.js',
  '../styles/style.css',
  '../styles/fonts/NotoSans/NotoSans-Regular.woff2',
  '../styles/fonts/NotoSans/NotoSans-Italic.woff2',
  '../styles/fonts/NotoSans/NotoSans-Bold.woff2',
  '../styles/fonts/NotoSans/NotoSans-BoldItalic.woff2'
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
    fetch(event.request).catch(
      function() {
        caches.match(event.request).then(
          function(response){
            return response;
          }
        );
      }
    )
  )
};
