const build = [
  "/_app/start-5fb293a7.js",
  "/_app/pages/__layout.svelte-fb274a1b.js",
  "/_app/assets/pages/__layout.svelte-de3876c9.css",
  "/_app/pages/__error.svelte-75288140.js",
  "/_app/pages/index.svelte-40a951ff.js",
  "/_app/assets/pages/index.svelte-bcd39e58.css",
  "/_app/pages/land-_id_.svelte-e323e0d2.js",
  "/_app/assets/pages/land-_id_.svelte-08def171.css",
  "/_app/chunks/vendor-321789e9.js",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/stores-13752311.js",
  "/_app/chunks/Box-5a7488f8.js",
  "/_app/assets/Box-e9f58395.css"
];
const files = [
  "/favicon.png",
  "/images/logos/logo-lok-192.png",
  "/images/logos/logo-lok-256.png",
  "/images/logos/logo.png",
  "/manifest.webmanifest",
  "/robots.txt"
];
const version = "1648689275487";
const ASSETS = `cache${version}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(ASSETS).then((cache) => cache.addAll(to_cache)).then(() => {
    self.skipWaiting();
  }));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== ASSETS)
        await caches.delete(key);
    }
    await self.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${version}`);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
//# sourceMappingURL=service-worker.js.map
