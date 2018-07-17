// https://www.youtube.com/watch?v=N1J7Q1qJPQM
// annotating before 54:10
import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?libraries=visualization&key=AIzaSyCdZSZkRVx4Ns7NwSGs6xiKqCEZaDtwwdA",
        loadingElement: <div style={{ height: `100%`, width: '100%' }} />,
        containerElement: <div style={{ height: `400px`, width: '400' }} />,
        mapElement: <div style={{ height: `100%`, width: '100%' }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 41.5074066, lng: -81.60832649999999 }}>
        <Marker position={{ lat: 41.5074066, lng: -81.60832649999999 }} />
    </GoogleMap>
));

class Map extends Component {


    render() {
        return <MyMapComponent key="map" />
    


export default Map;