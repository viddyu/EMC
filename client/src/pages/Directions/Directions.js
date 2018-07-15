import React, { Component } from "react";
import "./Directions.css";

class Directions extends Component {

    //'user strick';
    handleInit = () => {
        // call functions
//        initMap();
//        ZoomControl();
//        GeolocationControl();
    };
    //"https://maps.googleapis.com/maps/api/distancematrix/json?parameters";

    // Google Directions API
    // https://developers.google.com/maps/documentation/directions/intro?hl=en

    render() {
        return (
            <div>
                <h1>This is where the directions API goes</h1>
            </div>
        )
    }
};

export default Directions;