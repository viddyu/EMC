import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Records from "./pages/Records/Records.js";
import Form from "./components/Form/Form.js";
import Chat from "./pages/Chat/Chat.js";
import Directions from "./pages/Directions/Directions.js";
import LoginLogout from "./components/Login/Login.js"
import Status from "./components/Login/Status/Status.js"
import Callback from './components/Login/Callback/Callback.js';
import Auth from './Auth/Auth.js';
import history from './history';
import "./App.css";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (

  <Router history={history}>
    <div>
      <Navbar />
      <Route exact path="/form" component={Form} />
      <Route exact path="/records" component={Records} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/directions" component={Directions} />
      <Route path="/logout" component={LoginLogout} render={(props) => <App auth={auth} {...props} />} />
      <Route path="/login" component={LoginLogout} render={(props) => <App auth={auth} {...props} />} />
      <Route path="/loginstatus" render={(props) => <Status auth={auth} {...props} />} />
      <Route path="/logincallback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }} />
    </div>
  </Router>

);

export default App;