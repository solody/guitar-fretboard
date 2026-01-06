import {s} from './test'

console.log('Happy developing ✨')
console.log(s)

import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';

console.log(document.getElementById('app'))

// Render your React component instead
// @ts-ignore
const root = createRoot(document.getElementById('app'));
root.render(s);