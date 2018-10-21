// 如果瀏覽器有支援Service Worker將sw.js檔案引入註冊
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service worker is register"));
}

let defaultPrompt;
// 監聽安裝主畫面提醒事件
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  defaultPrompt = event;
  return false;
});
