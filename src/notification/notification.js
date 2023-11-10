export function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    alert("서비스 워커 미지원 브라우저입니다.");
    return;
  }
  
  navigator.serviceWorker
    .register("./firebase-messaging-sw")
    .then(function (registration) {
      console.log("Service Worker 등록 성공:", registration);
    })
    .catch(function (error) {
      console.log("Service Worker 등록 실패:", error);
    });
}