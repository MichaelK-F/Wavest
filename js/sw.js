const CACHE = "wavest-v1";

const FILES = [
  "../",
  "../index.html",
  "../css/style.css",
  "../js/app.js",
  "../js/ggwave.js",
  "../icons/wavest.svg",
  "../manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});