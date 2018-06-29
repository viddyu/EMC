import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Records from "./pages/Records/Records.js";
import Form from "./components/Form/Form.js";
import Chat from "./pages/Chat/Chat.js";
import "./App.css";

const App = () => (

  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Form} />
      <Route exact path="/records" component={Records} />
      <Route exact path="/chat" component={Chat} />
    </div>
  </Router>

);

export default App;