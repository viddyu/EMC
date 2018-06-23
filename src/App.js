import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./components/forms/Forms.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br/>
        <br/>
        <Forms/>
      </div>
    );
  }
}

export default App;
