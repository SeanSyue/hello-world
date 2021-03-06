import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const state = {
    code : "12321"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} onClick={() => alert(1)} className="App-logo" alt="logo" />
        <p>
          Edit <code>{state.code}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
