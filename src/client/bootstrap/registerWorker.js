const init = () => {
	setTimeout(registerWorker, 1000);
};

// Register service worker
const registerWorker = () => {
	if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
		navigator?.serviceWorker?.register('/worker.js', { scope: '/' })?.then(
			() => {
				console?.log('Service worker - registered.');
			},
			(err) => {
				console?.log(err);
			}
		);
	}

	navigator?.serviceWorker?.ready?.then(() => {
		console?.log('Service worker - ready.');
	});
};

if (typeof window !== 'undefined') {
	window.onload = init;
}
