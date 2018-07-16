import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import "./User.css";
// import App from "../../App";

class User extends Component {
    // Setting the component's initial state
    state = {
        users: [],
        Name: "",
        Email: "",
        Photo: "",
        Role: "",
    };

    loadUSERs = () => {
        API.getUSERs()
            .then(res =>
                this.setState({
                    user: res.data,
                    Name: "",
                    Email: "",
                    Photo: "",
                    Role: ""
                })
            )
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadUSERs();
    }

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

        if (this.state.Name &&
            this.state.Email &&
            this.state.Photo &&
            this.state.Role) {

            alert(`Submitted:
            Name:  ${this.state.Name}\n 
            Photo: ${this.state.Photo}\n
            Email: ${this.state.Email}\n
            Role:  ${this.state.Role}`);

            API.saveUser({
                Name: this.state.Name,
                Email: this.state.Email,
                Photo: this.state.Photo,
                Role: this.state.Role
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
            Name: "",
            Email: "",
            Photo: "",
            Role: ""
        });
    };

    render() {

        console.log(this.state.user);
        // Notice how each input has a 'value', 'name', and 'onChange' prop
        return (

            <div>

                {/* <App /> */}

                <div>

                    <header>
                        <h1 className="App-title">Emergency Medical Communication</h1>
                    </header>

                    <p>
                        Emergency Responder {this.state.Name}
                        <br></br>
                        Role {this.state.Role}
                        <br></br>
                    </p>
                    <form className="user">
                        <input
                            value={this.state.Name}
                            name="Name"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            value={this.state.Photo}
                            name="Photo"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Photo"
                        />
                        <input
                            value={this.state.email}
                            name="Email"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="E-Mail"
                        />
                        <input
                            value={this.state.role}
                            name="Role"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Role"
                        />
                        <button
                            // disabled={!(this.state.firstName)}
                            onClick={this.handleUserSubmit}>Submit
                         </button>
                    </form>
                    {this.state.users.length ? (
                        <List>
                            {this.state.users.map(user => (
                                <ListItem key={user._id}>
                                    <Link to={"/user/" + user._id}>
                                        <strong>
                                            {user.Role} --- {user.Name}
                                        </strong>
                                        <b>
                                            {user.email}
                                        </b>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </div>
            </div>
        );
    }
}

export default User;