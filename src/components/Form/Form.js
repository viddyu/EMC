import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
        age: "",
        bloodType: "",
        heartRate: "",
        breathRate: "",
        bloodPressure: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit 
        event.preventDefault();

        // Alert the user their first and last name, clear 'this.state.firstName' and 'this.state.lastName', 
        // clearing the inputs
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            age: "",
            bloodType: "",
            heartRate: "",
            breathRate: "",
            bloodPressure: ""
        });
    };

    render() {
        // Notice how each input has a 'value', 'name', and 'onChange' prop
        return (
            <div>
                <p>
                    Patient {this.state.firstName} {this.state.lastName}
                    <br></br>
                    Age {this.state.age}
                    <br></br>
                    Blood-Type {this.state.bloodType}
                    <br></br>
                    Heart Rate {this.state.heartRate}
                    <br></br>
                    Breath Rate {this.state.breathRate}
                    <br></br>
                    Blood Pressure {this.state.bloodPressure}
                </p>
                <form className="form">
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
                        value={this.state.age}
                        name="age"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Age"
                    />
                    <input
                        value={this.state.bloodType}
                        name="bloodType"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Blood Type"
                    />
                    <input
                        value={this.state.heartRate}
                        name="heartRate"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Heart Rate"
                    />
                    <input
                        value={this.state.breathRate}
                        name="breathRate"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Breath Rate"
                    />
                    <input
                        value={this.state.bloodPressure}
                        name="bloodPressure"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Blood Pressure"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;