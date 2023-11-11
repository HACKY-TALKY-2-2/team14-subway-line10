title = {title}
options = {
    body: {content},
    vibration: [200, 100, 200],
};
ServiceWorkerRegistration.showNotification(title, options);
mainpage = './MainPage.js'
promiseChain = clients.openWindow(mainpage);
event.waitUntil(promiseChain);