import React, { Component } from "react";
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

const handleAuthentication = (({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
});

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    (auth.isAuthenticated() === true)
      ? <Component {...props} />
      : <Redirect push to={"/login"} />
  )} />
)

class App extends Component {

  render() {
    return (

      <Router history={history}>
        <div>
          <Navbar />

          <Route path={'/logout'} component={LoginLogout} render={(history) => <App auth={auth} {...history} />} />
          <Route path={'/login'} component={LoginLogout} render={(history) => <App auth={auth} {...history} />} />
          <Route path={'/status'} render={(history) => <Status auth={auth} {...history} />} />
          <Route path={'/callback'} render={(history) => { handleAuthentication(history); return <Callback {...history} /> }} />


          <div id="form">
            <div className="form-container">
              <Form />
            </div>
          </div>

          <div id="directions">
            <div className="directions-container">
              <Directions />
            </div>
          </div>

          <div id="chat">
            <div className="container">
              <Chat />
            </div>
          </div>

        </div >
      </Router>
    )
  }
};

export default App;
