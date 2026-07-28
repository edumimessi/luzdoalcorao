const CACHE_VERSION = "luzdoalcorao-v2";
const APP_SHELL = [
  "./",
  "./index.html",
  "./suratas.html",
  "./surata.html",
  "./biblioteca.html",
  "./tema.html",
  "./devocional.html",
  "./nomes-de-allah.html",
  "./profeta-muhammad.html",
  "./metodologia.html",
  "./fontes.html",
  "./privacidade.html",
  "./404.html",
  "./offline.html",
  "./assets/css/styles.css",
  "./assets/js/app.js",
  "./assets/js/data.js",
  "./assets/js/config.js",
  "./assets/favicon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => {
          if (cached) return cached;
          const pathname = new URL(request.url).pathname;
          const page = pathname.endsWith("/") ? "index.html" : pathname.split("/").pop();
          return caches.match(`./${page}`).then((shell) => shell || caches.match("./offline.html"));
        }))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
      }
      return response;
    }))
  );
});
