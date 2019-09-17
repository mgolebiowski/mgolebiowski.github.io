import React from "preact-compat";

import "./main.css";

export default () => {
  return (
    <div className="container">
      <div className="row">
        <img className="my-face" src="face.jpeg" alt="My face" />
        <h1>Hi, I'm Michał</h1>
        <p>
          I am Fullstack JavaScript developer with three years of experience
          with Javascript, Vue.js and React.
        </p>
      </div>
      <div className="row flex-row">
        <div className="content-item">
          <h3>I can help you with</h3>
          <ul>
            <li>Coding: JavaScript (ES6), TypeScript, SQL</li>
            <li>Web design: HTML 5, CSS 3, Sass</li>
            <li>Frameworks: Bootstrap, React, Vue</li>
            <li>Tools: Webpack, Git, Linux, Node.js</li>
          </ul>
        </div>
        <div className="content-item">
          <h3>I did some awesome projects</h3>
          <ul>
            <li>
              <a
                href="http://www.eko-energia.agh.edu.pl/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Eko-Energia (Wordpress)
              </a>
            </li>
            <li>
              <a
                href="http://parkit-krk.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                park.it
              </a>
            </li>
            <li>
              <a
                href="http://www.metronic.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Metronic AKP (Joomla)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
