import { createElement } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { App } from './App';
import './registerWorker';

const container = document?.getElementById('root');
const component = createElement(App);

if (container?.hasChildNodes()) {
	// CLIENT
	hydrateRoot(container, component);
} else {
	// SERVER
	const root = createRoot(container);
	root?.render(component);
}
