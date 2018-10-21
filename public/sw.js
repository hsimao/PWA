self.addEventListener("install", event => {
  console.log("[Servic Worker] 已安裝 Service Worker ...", event);
});

self.addEventListener("activate", event => {
  console.log("[Servic Worker] 已激活 Service Worker ...", event);
  return self.clients.claim();
});

// 監聽所有的請求事件
self.addEventListener("fetch", event => {
  console.log("[Servic Worker] 捕獲事件 ...", event);
  // 回應請求事件
  event.respondWith(fetch(event.request));
});
