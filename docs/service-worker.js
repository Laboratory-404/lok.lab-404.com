const build = [
  "/_app/start-464cda8e.js",
  "/_app/pages/__layout.svelte-680699d8.js",
  "/_app/assets/pages/__layout.svelte-6b973ec8.css",
  "/_app/pages/__error.svelte-53a35eb2.js",
  "/_app/pages/index.svelte-24262350.js",
  "/_app/pages/land-_id_.svelte-a429041a.js",
  "/_app/assets/pages/land-_id_.svelte-bfe503a5.css",
  "/_app/chunks/vendor-befabcea.js",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/navigation-0e6511d1.js",
  "/_app/chunks/stores-e1a3e6a9.js",
  "/_app/chunks/Box-bf251bc0.js",
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
const version = "1648635294597";
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
