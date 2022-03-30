const build = [
  "/_app/start-785e090e.js",
  "/_app/pages/__layout.svelte-37f03e1b.js",
  "/_app/assets/pages/__layout.svelte-a205d0ac.css",
  "/_app/pages/__error.svelte-bce36983.js",
  "/_app/pages/index.svelte-f77ca757.js",
  "/_app/pages/land-_id_.svelte-4808e1c4.js",
  "/_app/chunks/vendor-ad1cfbc0.js",
  "/_app/chunks/stores-eb6a96cf.js",
  "/_app/chunks/Land-a1225893.js",
  "/_app/assets/Land-80a0df5b.css"
];
const files = [
  "/favicon.png",
  "/images/logos/logo-lok-192.png",
  "/images/logos/logo-lok-256.png",
  "/images/logos/logo.png",
  "/manifest.webmanifest",
  "/robots.txt"
];
const version = "1648618224860";
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
