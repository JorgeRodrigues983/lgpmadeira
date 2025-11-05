// service worker simples
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', event => {
  // permite que a app funcione mesmo que falhe o pedido
  event.respondWith(
    fetch(event.request).catch(() => new Response('Offline'))
  );
});
