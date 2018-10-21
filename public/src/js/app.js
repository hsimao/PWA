// 如果瀏覽器有支援Service Worker將sw.js檔案引入註冊
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service worker is register"));
}
