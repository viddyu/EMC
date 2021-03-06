import React, { Component } from "react";
import Map from "../../components/Map";
import Places from "../../components/Places";
import "./Directions.css";

class Directions extends Component {

    constructor() {
        super()
        // Setting state to store data from the API return
        // REMEMBER THAT VENUES WILL UPDATE BASED ON THE APIs JSON parse!!!!!
        this.state = {
            venues: []
        }
    }

    // lifecycle method: triggering this function when the component mounts
    // fires an API request to receive initial set of local hospital data
    componentDidMount() {
        console.log('componentDidMount');


        const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.5074066,-81.60832649999999&radius=50&types=hospital&&key=AIzaSyCIONgJx9RS8JG4QFsjD5fi3PyLrPEOpuQ";

    }

    render() {

        const location = {
            // Thwing
            lat: 41.5074066,
            lng: -81.60832649999999
        }

        const markers = [
            {
                location: {
                    // Thwing
                    lat: 41.5074066,
                    lng: -81.60832649999999
                }
            }
        ];

        return (
            <div className="map-directions">
                <div className="directions-div">
                    <Map center={location} />
                </div>
            </div>
        )
    }
}

export default Directions;