const CACHE_NAME = "smart-student-shop-v1";
const FILES_TO_CACHE = [
  "index.html",
  "style.css",
  "app.js",
  "manifest.json",
  "product1.jpg",
  "product2.jpg",
  "product3.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
