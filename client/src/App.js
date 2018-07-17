import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Records from "./pages/Records/Records.js";
// import User from "./pages/User/User.js";
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
      
      <section id="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <Form/>
          </div>
        </div>
      </div>
    </section>

    <section id="chat" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <Chat/>
          </div>
        </div>
      </div>
    </section>

     <section id="directions">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <Directions/>
          </div>
        </div>
      </div>
    </section>
    </div>
  </Router>

);

export default App;