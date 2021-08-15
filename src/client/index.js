import { createElement } from 'react';
import { hydrate, render } from 'react-dom';

import { App } from './App';
import './analytics';
import './init';

const el = createElement(App);
const target = document.getElementById('root');
const handler = target?.hasChildNodes() ? hydrate : render;
handler(el, target);
