import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Col } from "../../components/Grid/Col";
import "./Records.css"

class Records extends Component {

    state = {
        eMT: [],
        shiftDate: "",
        serviceName: "",
        timeIn: "",
        timeOut: "",
        Dispatch: "",
        dispositionOutcome: "",
        chiefComplaint: "",
        medical: "",
        trauma: "",
        medication: "",
        pastHistory: "",
        allergies: "",
        locAVPU: "",
        eyesOpen: "",
        bestVerbal: "",
        bestMotor: "",
        airway: "",
        ivIoAccess: "",
        drug: "",
        dose: "",
        route: "",
        mechanismOfInjury: "",
        medicalTrauma: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        race: "",
        bloodtype: "",
        heartRate: "",
        breathRate: "",
        bloodPressure: "",
        medicalCondition: "",
        notes: ""

//        emcs: [],
//        firstName: "",
//        lastName: "",
//        dateOfBirth: "",
//        gender: "",
//        bloodType: "",
//        heartRate: "",
//        breathRate: "",
//        bloodPressure: "",
//        notes: ""

    };

    loadEMCs = () => {
        API.getEMCs()
            .then(res =>
                this.setState({
                    eMT: res.data,
                    shiftDate: res.shiftDate,
                    serviceName: res.serviceName,
                    timeIn: res.timeIn,
                    timeOut: res.timeOut,
                    Dispatch: res.Dispatch,
                    dispositionOutcome: res.dispositionOutcome,
                    chiefComplaint: res.chiefComplaint,
                    medical: res.medical,
                    trauma: res.trauma,
                    medication: res.medication,
                    pastHistory: res.pastHistory,
                    allergies: res.allergies,
                    locAVPU: res.locAVPU,
                    eyesOpen: res.eyesOpen,
                    bestVerbal: res.bestVerbal,
                    bestMotor: res.bestMotor,
                    airway: res.airway,
                    ivIoAccess: res.ivIoAccess,
                    drug: res.drug,
                    dose: res.dose,
                    route: res.route,
                    mechanismOfInjury: res.mechanismOfInjury,
                    medicalTrauma: res.medicalTrauma,
                    firstName: res.firstName,
                    lastName: res.lastName,
                    dateOfBirth: res.dateOfBirth,
                    gender: res.gender,
                    race: res.race,
                    bloodtype: res.bloodPressure,
                    heartRate: res.heartRate,
                    breathRate: res.breathRate,
                    bloodPressure: res.bloodPressure,
                    medicalCondition: res.medicalCondition,
                    notes: res.notes  
//                    emcs: res.data,
//                    firstName: "",
//                    lastName: "",
//                    dateOfBirth: "",
//                    gender: "",
//                    bloodType: "",
//                    heartRate: "",
//                    breathRate: "",
//                    bloodPressure: "",
//                    notes: ""
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

        console.log(this.state.eMT);

        return (
            <div className="records">
                <form>
                {this.state.eMT.length ? (
                    <List>
                        {this.state.eMT.map(emc => (
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
                </form>
            </div>
        )
    }

}

export default Records;