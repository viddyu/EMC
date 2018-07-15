import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import "./Form.css";
// import App from "../../App";

class Form extends Component {
    // Setting the component's initial state
    state = {
        emcs: [],
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
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
            this.state.heartRate &&
            this.state.breathRate &&
            this.state.bloodPressure) {

            alert(`Submitted:
            First name: ${this.state.firstName}\n 
            Last name: ${this.state.lastName}\n
            Date of Birth: ${this.state.dateOfBirth}\n
            Gender: ${this.state.gender}\n
            Blood Type: ${this.state.bloodType}\n
            Heart Rate: ${this.state.heartRate}\n
            Breath Rate: ${this.state.breathRate}\n
            Blood Pressure: ${this.state.bloodPressure}\n
            Notes: ${this.state.notes}`);

            API.saveEMC({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                dateOfBirth: this.state.dateOfBirth,
                gender: this.state.gender,
                bloodType: this.state.bloodType,
                heartRate: this.state.heartRate,
                breathRate: this.state.breathRate,
                bloodPressure: this.state.bloodPressure,
            })
                // .then(res => this.loadEMCs())
                .then(res => this.loadEMCs())
                .catch(err => console.log(err));
        }

        else {
            alert('You left one or more EMC entries blank. \nPlease provide all of the EMC information.')
        }

        // Alert the user their first and last name, clear 'this.state.firstName' and 'this.state.lastName', 
        // clearing the inputs
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "",
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
                <section className="topList">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Patient: {this.state.firstName} {this.state.lastName}
                        </li>
                        <li className="list-group-item">
                            Date of Birth: {this.state.dateOfBirth}
                        </li>
                        <li className="list-group-item">
                            Gender: {this.state.gender}
                        </li>
                        <li className="list-group-item">
                            Blood-Type: {this.state.bloodType}
                        </li>
                        <li className="list-group-item">
                            Heart Rate: {this.state.heartRate}
                        </li>
                        <li className="list-group-item">
                            Breath Rate: {this.state.breathRate}
                        </li>
                        <li className="list-group-item">
                            Blood Pressure: {this.state.bloodPressure}
                        </li>
                        <li className="list-group-item">
                            Notes: {this.state.notes}
                        </li>
                    </ul>
                </section>
                <section className="patient-form">
                <form>
                    <div className="form-group">
                        <input
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Last Name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.age}
                            name="dateOfBirth"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="MM/DD/YYYY"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.gender}
                            name="gender"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Gender"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.bloodType}
                            name="bloodType"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Blood Type"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.heartRate}
                            name="heartRate"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Heart Rate"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.breathRate}
                            name="breathRate"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Breath Rate"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.bloodPressure}
                            name="bloodPressure"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Blood Pressure"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            value={this.state.notes}
                            onChange={this.handleInputChange}
                            name="notes"
                            type="text"
                            placeholder="Additional Notes(Optional)"
                            className="form-control"
                        />
                    </div>
                    <button
                        // disabled={!(this.state.firstName)}
                        onClick={this.handleFormSubmit} className="btn btn-primary">Submit</button>
                </form>
                </section>
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