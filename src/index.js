import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import 'normalize.css';
import App from './App';

require('particles.js');

render(<App />, document.getElementById('root'));

window.particlesJS.load('particles-js', 'particles.json', null);