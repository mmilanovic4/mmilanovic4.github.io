import { createElement } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { App } from './App';
import './bootstrap';

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

// import { createElement } from 'react';
// import { hydrate, render } from 'react-dom';

// import { App } from './App';
// import './bootstrap';

// const el = createElement(App);
// const target = document?.getElementById('root');
// const handler = target?.hasChildNodes() ? hydrate : render;
// handler(el, target);
