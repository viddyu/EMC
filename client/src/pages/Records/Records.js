import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Col } from "../../components/Grid/Col";
import "./Records.css"

class Records extends Component {

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

    loadEMCs = () => {
        API.getEMCs()
            .then(res =>
                this.setState({
                    emcs: res.data,
                    firstName: "",
                    lastName: "",
                    dateOfBirth: "",
                    gender: "",
                    bloodType: "",
                    heartRate: "",
                    breathRate: "",
                    bloodPressure: "",
                    notes: ""
                })
            )
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadEMCs();
    }

    // deleteEMC = id => {
    //     API.deleteEMC(id)
    //         .then(res => this.loadEMCs())
    //         .catch(err => console.log(err));
    // };

    render() {

        console.log(this.state.emcs);

        return (
            <div className="records">

                EMC Records

                {this.state.emcs.length ? (
                    <List>
                        {this.state.emcs.map(emc => (
                            <ListItem key={emc._id}>
                                <Link to={"/emcs/" + emc._id}>
                                    <strong>

                                        First Name: {emc.firstName}
                                        <br></br>
                                        Last Name: {emc.lastName}
                                        <br></br>
                                        Date Of Birth: {emc.dateOfBirth}
                                        <br></br>
                                        Gender: {emc.gender}
                                        <br></br>
                                        Blood Type: {emc.bloodType}
                                        <br></br>
                                        Heart Rate: {emc.heartRate}
                                        <br></br>
                                        Breath Rate: {emc.breathRate}
                                        <br></br>
                                        Blood Pressure: {emc.bloodPressure}


                                    </strong>
                                </Link>
                                {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </div>
        )
    }

}

export default Records;