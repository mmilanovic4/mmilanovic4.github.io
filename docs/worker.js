const cacheName = 'pwa';

const staticAssets = [
	'./',
	'./index.html',
	'./assets/css/style.css',
	'./assets/img/profile.jpg',
	'./assets/js/app.js'
];

self?.addEventListener('install', async (event) => {
	console?.log('Service worker - install event.');
	const cache = await caches?.open(cacheName);
	await cache?.addAll(staticAssets);
});

self?.addEventListener('fetch', async (event) => {
	console?.log('Service worker - fetch event.');
	const { request } = event;

	if (request?.url?.endsWith('.json')) {
		event?.respondWith(networkFirst(request));
	} else {
		event?.respondWith(cacheFirst(request));
	}
});

const cacheFirst = async (request) => {
	const cache = await caches?.open(cacheName);
	const cachedResponse = await cache?.match(request);
	return cachedResponse || networkFirst(request);
};

const networkFirst = async (request) => {
	const cache = await caches?.open(cacheName);
	try {
		const fresh = await fetch(request);
		cache?.put(request, fresh?.clone());
		return fresh;
	} catch (e) {
		const cachedResponse = await cache?.match(request);
		return cachedResponse;
	}
};
