// Lumo Lesetraining – Offline-Speicher. Bei jedem Update die Versionsnummer erhöhen.
const CACHE="lumo-v4";
const CORE=["./","index.html","manifest.webmanifest","texts/de.json","texts/en.json","texts/ru.json","icons/icon-192.png","icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const req=e.request; if(req.method!=="GET") return;
  const url=new URL(req.url);
  // Wikipedia und GitHub-Abgleich immer live, nie aus dem Speicher
  if(url.hostname.endsWith("wikipedia.org")||url.hostname.endsWith("github.com")||url.hostname.endsWith("githubusercontent.com")) return;
  const isFont=url.hostname==="fonts.googleapis.com"||url.hostname==="fonts.gstatic.com";
  if(url.origin!==location.origin&&!isFont) return;
  // Erst aus dem Speicher antworten, im Hintergrund aktualisieren
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(req,{ignoreSearch:true});
    const net=fetch(req).then(r=>{if(r&&(r.ok||r.type==="opaque"))c.put(req,r.clone());return r;}).catch(()=>hit);
    return hit||net;
  }));
});
