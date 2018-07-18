import React, { Component } from "react";
import Auth from "../../Auth/Auth.js";
import API from "../../utils/API";

//import API from "../../utils/API";
//import { Link } from "react-router-dom";
import "./Login.css";
import avatar from "./default-avatar.png";
// import App from "../../App";

const auth = new Auth();

class Login extends Component {
    // Setting the component's initial state
    
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Handle the change
        console.log( 'name: ' + name + 'value: '  + value);
    }

    //goTo(route) {
    //    this.props.history.replace(`/${route}`);
   // }
    
    login() {
        auth.login();
    }
    
    logout() {
        auth.logout();
    }
    
    profile() {
        auth.getProfile();
    }

    register() {
        API.saveUSER();
    }

    render() {
  //      const { isAuthenticated } = this.props.auth;

        return (
            <div>
                {/* <App /> */}
                <div>
                     <header>
                         <h1 className="LoginInstructions">Warning - Access is for Emergency Responders Only.</h1>
                         <br />
                         <h1>Please Dial 911 if you have an emergency!</h1>
                     </header>
                     <div>
                        {
                            !auth.isAuthenticated() && (
                                <button
                                     type="button"
                                     id="qsLoginBtn"
                                     className="btn-margin"
                                     onClick={this.login.bind(this)}
                                    >
                                      Log In
                                    </button> 
                            )
                        }
                    </div>
                    <div>
                        {
                            auth.isAuthenticated() && (
                                <button
                                     type="button"
                                     id="qsLogoutBtn"
                                     className="btn-margin"
                                     onClick={this.logout.bind(this)}
                                    >
                                      Log Out
                                    </button>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;