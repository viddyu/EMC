import React, { Component } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Link } from "react-router-dom";
import "./Form.css";
import Records from "../../pages/Records/Records.js";
// import App from "../../App";

class Form extends Component {
    // Setting the component's initial state
    state = {
        emcs: [],
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        race: "",
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
            Race: ${this.state.race}\n
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
                race: this.state.race,
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

            <div className="forms">
                <section className="patient-fill-out">
                    <form>
                        <h1>Individual Patient Care Report</h1>
                        <h1>EMT's Name</h1>
                        <div className="form-group">
                            <input
                                value={this.state.eMT}
                                name="EMT"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="EMT Name on Duty"
                                className="form-control"
                            />
                        </div>
                        <h1>Shift Date</h1>
                        <h1>Service Name</h1>
                        <h1>Time in</h1>
                        <h1>Time Out</h1>
                        <br></br>
                        <h1>Dispatch</h1>
                        <div className="form-group">
                            <input
                                value={this.state.dispatch}
                                name="dispatch"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Non-Emergent, Transfer Emergent, Arrest/Critical, Nonembergent"
                                className="form-control"
                            />
                        </div>
                        <h1>Disposition/Call Outcome/Status</h1>
                        <div className="form-group">
                            <input
                                value={this.state.dispositionOutcome}
                                name="DispositionOutcome"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Disposition/Call Outcome/Status"
                                className="form-control"
                            />
                        </div>
                        <h1>Chief Complaint</h1>
                        <div className="form-group">
                            <input
                                value={this.state.dispatch}
                                name="dispatch"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Non-Emergent, Transfer Emergent, Arrest/Critical, Nonembergent"
                                className="form-control"
                            />
                        </div>

                        
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
                                placeholder="Date of Birth (MM/DD/YYYY)"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.gender}
                                name="gender"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Gender (e.g. Male, Female, *Leave Blank*)"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.race}
                                name="race"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Race (African American, American Indian, Asian, Caucasian, etc.)"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.bloodType}
                                name="bloodType"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Blood Type (e.g. O, A+, AB-, etc.)"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.heartRate}
                                name="heartRate"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Heart Rate (e.g. 80 bpm)"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.breathRate}
                                name="breathRate"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Breath Rate (e.g. 45 breaths/minute)"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.bloodPressure}
                                name="bloodPressure"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Blood Pressure (e.g. 120/80 mmHg)"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.medicalCondition}
                                name="medicalCondition"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Pre-existing Medical Conditions"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.allergies}
                                name="allergies"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Allergies"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.medicalTrauma}
                                name="medicalTrauma"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Medical/Trauma"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.mechanismOfInjury}
                                name="mechanismOfInjury"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Mechanism of Injury (Ejection, Rollover, Penetration)"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.medicationHistory}
                                name="medicationHistory"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Medication History"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={this.state.notes}
                                onChange={this.handleInputChange}
                                name="notes"
                                type="text"
                                placeholder="Assessment-Based Management/Plan/Treatment Narrative"
                                className="form-control"
                            />
                        </div>
                        <button
                            // disabled={!(this.state.firstName)}
                            onClick={this.handleFormSubmit} className="btn btn-primary patient-button">
                            Submit
                        </button>
                    </form>
                </section>
                <section>
                    <Records />
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