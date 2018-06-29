import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import "./Form.css";
import App from "../../App";

class Form extends Component {
    // Setting the component's initial state
    state = {
        emcs: [],
        firstName: "",
        lastName: "",
        age: "",
        // gender: "",
        bloodType: "",
        heartRate: "",
        breathRate: "",
        bloodPressure: "",
        notes: ""
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

        if (this.state.firstName &&
            this.state.lastName &&
            this.state.bloodPressure &&
            this.state.breathRate &&
            this.state.heartRate) {

            alert(`Submitted:
            First name: ${this.state.firstName}\n 
            Last name: ${this.state.lastName}\n
            Age: ${this.state.age}\n
            Blood Type: ${this.state.bloodType}\n
            Heart Rate: ${this.state.heartRate}\n
            Breath Rate: ${this.state.breathRate}\n
            Blood Pressure: ${this.state.bloodPressure}\n
            Notes: ${this.state.notes}`);

            API.saveEMC({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                bloodType: this.state.bloodType,
                heartRate: this.state.heartRate,
                breathRate: this.state.breathRate,
                bloodPressure: this.state.bloodPressure,
            })
                // .then(res => this.loadEMCs())
                .then(res => this.loadEMCs())
                .catch(err => console.log(err));
        } else {
            alert('You left one or more EMC entries blank. \nPlease provide all of the EMC information.')
        }

        // Alert the user their first and last name, clear 'this.state.firstName' and 'this.state.lastName', 
        // clearing the inputs
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            age: "",
            // gender: "",
            bloodType: "",
            heartRate: "",
            breathRate: "",
            bloodPressure: "",
            notes: ""
        });
    };

    render() {
        // Notice how each input has a 'value', 'name', and 'onChange' prop
        return (

            <div>


                <header>
                    <h1 className="App-title">Emergency Medical Communication</h1>
                </header>

                <p>
                    Patient {this.state.firstName} {this.state.lastName}
                    <br></br>
                    Age {this.state.age}
                    <br></br>
                    {/* Gender {this.state.gender} */}
                    <br></br>
                    Blood-Type {this.state.bloodType}
                    <br></br>
                    Heart Rate {this.state.heartRate}
                    <br></br>
                    Breath Rate {this.state.breathRate}
                    <br></br>
                    Blood Pressure {this.state.bloodPressure}
                    <br></br>
                    Notes {this.state.notes}
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
                    {/* <input
                        value={this.state.gender}
                        name="gender"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Gender"
                    /> */}
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
                    <textarea
                        value={this.state.notes}
                        onChange={this.handleInputChange}
                        name="notes"
                        placeholder="Notes (Optional)"
                    />
                    <button
                        // disabled={!(this.state.firstName)}
                        onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <List>
                    {this.state.emcs.map(emc => (
                        <ListItem key={emc._id}>
                            <Link to={"/emcs/" + emc._id}>
                                <strong>
                                    {emc.title} by {emc.author}
                                </strong>
                            </Link>
                            {/* <DeleteBtn onClick={() => this.deleteEMC(emc._id)} /> */}
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default Form;