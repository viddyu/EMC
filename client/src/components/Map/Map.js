import React, { Component } from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";

const google = window.google;

const MapWithADirectionsRenderer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_WeLpLMcu0ocjiDbzYNdzCqQgIMOe4qs&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();

            DirectionsService.route({
                origin: new google.maps.LatLng(41.5074066, -81.60832649999999),
                destination: new google.maps.LatLng(41.50236, -81.61755),
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(41.50236, -81.61755)}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
);

class Map extends Component {

    render() {
        return <MapWithADirectionsRenderer key="map" />
    }
}

export default Map;