import React from 'react';
import Routes from '../src/routes';

import "./styles.css"

import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
