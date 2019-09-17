import React from 'preact-compat';

import Footer from "./components/footer";
import Main from "./components/main";
import ReactGA from 'react-ga';

import './App.css';

function App() {
  ReactGA.initialize('UA-96954957-1');

  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="app-wrapper">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
