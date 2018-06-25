<<<<<<< HEAD
import React from "react";
import Form from "./components/Form";

const App = () => <Form />;
=======
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
>>>>>>> 982e290259b3e6fb0f975277d8534fb26e856aec

export default App;