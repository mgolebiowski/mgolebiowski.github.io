import React from "preact/compat";

import "./main.css";

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="my-face-container">
          <img className="my-face" src="assets/face.jpeg" alt="My face" />
        </div>
        <div className="letter">
          <h1>Hi, I'm Michał</h1>
          <p>
            and I am Fullstack JavaScript developer.
            <br />I spent the last couple of years (about{" "}
            {new Date().getFullYear() - 2016} to be precise) working with
            React, Vue.js, Node.js and a couple of other technologies. I have
            expertise in building backend and frontend web applications from
            initial architectural discussions to deployment.
          </p>
          <p>
            If you have any questions or interesting projects don't hesitate to
            contact me using any option available in the footer (or you can{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tools.ietf.org/html/rfc1149"
            >
              send a pigeon)
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
