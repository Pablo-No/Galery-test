importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/Privado1/index.html',
       '/Privado1/assets/images/1.jpg',
       '/Privado1/assets/images/2.jpg',
       '/Privado1/assets/images/3.jpg',
       '/Privado1/assets/scripts/script.js',
       '/Privado1/assets/styles/style.css',
       '/Privado1/assets/styles/fonts/NotoSans/NotoSans-Regular.woff2',
       '/Privado1/assets/styles/fonts/NotoSans/NotoSans-Italic.woff2',
       '/Privado1/assets/styles/fonts/NotoSans/NotoSans-Bold.woff2',
       '/Privado1/assets/styles/fonts/NotoSans/NotoSans-BoldItalic.woff2'
     ]);
   })
 );
});
