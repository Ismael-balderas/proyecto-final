self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('my-cache').then(function(cache){
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css'
                //'icone.png'
            ]);
        })

    );
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(events.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});