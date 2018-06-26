import React, { Component } from "react";
import Forms from "./components/forms/Forms.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Emergency Medical Communication</h1>
        </header>
        <br/>
        <br/>
        <Forms/>
      </div>
    );
  }
}

export default App;