import React from 'preact-compat';
import { render } from 'preact-compat';
import './index.css';
import 'normalize.css';
import App from './App';

require('particles.js');

render(<App />, document.getElementById('root'));

window.particlesJS.load('particles-js', 'particles.json', null);