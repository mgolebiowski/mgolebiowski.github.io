import React from 'preact-compat';

import Footer from "./components/footer";
import Main from "./components/main";

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
