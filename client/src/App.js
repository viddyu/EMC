import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Records from "./pages/Records/Records.js";
import Form from "./components/Form/Form.js";
import Chat from "./pages/chat/Chat.js";
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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    (auth.isAuthenticated() === true)
    ? <Component {...props} />
    : <Redirect to='/login' />
  )} />
)

const App = () => (

  <Router history={history}>
    <div>
      <Navbar/>
      <br/>
      <section className="sec1">
      <Form/>
      </section>
      <section className="sec2">
      <Records/>
      </section>
      <section className="sec3">
      <Chat/>
      </section>
      <section className="sec4">
      <Directions/>
      </section>
    </div>
  </Router>

);

export default App;