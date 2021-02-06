import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {code : 1}
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} onClick={() => alert(1)} className="App-logo" alt="logo" />
        <p>
          Edit <code>{this.state.code+1}</code> and save to reload.
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
