import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import App from './App';

require('particles.js');

ReactDOM.render(<App />, document.getElementById('root'));

window.particlesJS.load('particles-js', 'particles.json', null);