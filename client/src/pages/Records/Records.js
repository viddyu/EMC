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
        age: "",
        // gender: "",
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
                    age: "",
                    // gender: "",
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
            <Col size="md-6 sm-12">

                EMC Records

                {this.state.emcs.length ? (
                    <List>
                        {this.state.emcs.map(emc => (
                            <ListItem key={emc._id}>
                                <Link to={"/emcs/" + emc._id}>
                                    <strong>

                                        -----------------------------------------------------------

                                        {emc.firstName}
                                        <br></br>
                                        {emc.lastName}
                                        <br></br>
                                        {emc.age}
                                        <br></br>
                                        {/* {emc.gender} */}
                                        <br></br>
                                        {emc.bloodType}
                                        <br></br>
                                        {emc.heartRate}
                                        <br></br>
                                        {emc.breathRate}
                                        <br></br>
                                        {emc.bloodPressure}

                                        -----------------------------------------------------------

                                    </strong>
                                </Link>
                                {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </Col>
        )
    }

}

export default Records;