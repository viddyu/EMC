import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import "./User.css";
// import App from "../../App";

class User extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
        role: "",
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleUserSubmit = event => {
        // Preventing the default behavior of the form submit 
        event.preventDefault();

        if (this.state.firstName &&
            this.state.lastName &&
            this.state.role) {

            alert(`Submitted:
            First name: ${this.state.firstName}\n 
            Last name: ${this.state.lastName}\n
            Role: ${this.state.role}`);

            API.saveUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                role: this.state.role
            })
            // .then(res => this.loadEMCs())
            .then(res => this.loadUsers())
            .catch(err => console.log(err));
        }

        else {
            alert('You left one or more User entries blank. \nPlease provide all of the User information.')
        }

        // Alert the user their first and last name, clear 'this.state.firstName' and 'this.state.lastName', 
        // clearing the inputs
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            role: ""
          });
    };

    render() {
        // Notice how each input has a 'value', 'name', and 'onChange' prop
        return (

            <div>

                {/* <App /> */}

                <div>

                    <header>
                        <h1 className="App-title">Emergency Medical Communication</h1>
                    </header>

                    <p>
                        Emergency Responder {this.state.firstName} {this.state.lastName}
                        <br></br>
                        Role {this.state.role}
                        <br></br>
                    </p>
                    <form className="user">
                        <input
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Last Name"
                        />
                        <input
                            value={this.state.role}
                            name="role"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Role"
                        />
                         <button
                            // disabled={!(this.state.firstName)}
                            onClick={this.handleUserSubmit}>Submit</button>
                    </form>
                    <List>
                        {this.state.users.map(user => (
                            <ListItem key={user._id}>
                                <Link to={"/user/" + user._id}>
                                    <strong>
                                        {user.role} --- {user.firstName} + {user.lastName}
                                    </strong>
                                </Link>
                                {/* <DeleteBtn onClick={() => this.deleteEMC(emc._id)} /> */}
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        );
    }
}

export default User;