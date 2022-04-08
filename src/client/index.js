import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { App } from './App';
import './bootstrap';

const container = document?.getElementById('root');
const component = <App />;

if (container?.hasChildNodes()) {
	hydrateRoot(container, component);
} else {
	const root = createRoot(container);
	root?.render(component);
}
