import React, { Component } from "react";
import "./Directions.css";

<<<<<<< HEAD
// var map;
// var marker;
// var infowindow;
// var marker_created = [];
// var mapDiv = document.getElementById('map');
// var myLatlng = new google.maps.Latlng(1, 1)
// var directionsService = new google.maps.DirectionsService;
// var directionsDisplay = new google.maps.DirectionsRenderer;
// var directionDistance = new google.maps.DistanceMatrixService;

// function initMap() {
//     map = new google.maps.Map(mapDiv, {
//         center: myLatlng,
//         zoom: 13,
//         zoomControl: false,
//         streetViewControl: false,
//         scrollwheel: true
//     });

//     marker = new google.maps.Marker({
//         position: myLatlng,
//         map: map,
//         title: 'Hello World!',
//         icon: 'static/images/icon.png',
//         draggable: true
//     });

//     var contentString = '<div id="container>' +
//         '<h1>test infowindow</h1>' +
//         '</div>';

//     infowindow = new google.maps.Infowindow({
//         content: contentString,
//         maxwidth: 300
//     });

//     marker.addListener('click', function () {
//         infowindow.open(map, marker);
//     });

//     map.addListener('click', function () {
//         infowindow.close();
//     });

//     google.maps.event.addDomListener(marker, 'dragstart', function (event) {
//         // console.log('first marker', event);
//     });

//     google.maps.event.addDomListener(marker, 'dragend', function (event) {
//         // console.log('second marker', event.latLng.lat(), event.latLng.lng());
//         getNewMarker();
//         map.setCenter(marker.getPosition());
//         map.setZoom(15);
//     });

//     var customMapType = new google.maps.StyledMapType([
//         { stylers: [{ hue: '#D2E4C8' }] },
//         {
//             featureType: 'water',
//             stylers: [{ color: '#599459' }]
//         }
//     ]);

//     var customMapTypeId = 'custom_style';
//     map.mapTypes.set(customMapTypeId, customMapType);
//     map.setMapTypeId(customMapTypeId);
//     geolocate();
// };

// // zoom control
// function ZoomControl() {
//     var zoomInButton = document.getElementById('zoom-in');
//     var zoomOutButton = document.getElementById('zoom-out');
//     google.maps.event.addDomListener(zoomInButton, 'click', function () {
//         map.setZoom(map.getZoom() + 1);
//     });
//     google.maps.event.addDomListener(zoomOutButton, 'click', function () {
//         map.setZoom(map.getZoom() - 1);
//     });
// };

// // get current location when clicked
// function GeolocationControl() {
//     var geoButton = document.getElementById('current-location');
//     google.maps.event.addDomListener(geoButton, 'click', geolocate);
// };

// // get current location
// function geolocate() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             // console.log(position.coords.latitude);
//             var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };

//             map.setCenter(pos);
//             marker.setPosition(pos);
//         });
//     }

//     else {
//         alert('Message about the location');
//     };
//     // end geolocate
// }

// // marker list
// var markers = [
//     { 'coord': { 'lat': 41.50985499999999, 'lng': -81.606298 }, 'title': 'title information Infowindow 1' },
//     { 'coord': { 'lat': 41.5065812, 'lng': -81.6049621 }, 'title': 'title information Infowindow 1' },
//     { 'coord': { 'lat': 41.5034221, 'lng': -81.6212424 }, 'title': 'title information Infowindow 1' },
// ];



// function getNewMarker() {
//     for (var i = markers.length - 1; i >= 0; i--) {
//         var item = createMarkers(markers[i]);
//         marker_created.push(item);
//         // console.log(marker_created);
//     }
// };

// function createMarkers(pos) {

//     var newMarker = new google.maps.Marker({
//         position: pos.coord,
//         map: map
//     });

//     var contentString2 =

//         '<div id ="container-infobox">' +
//         '<h1> <a href="#" class="direction">' + pos.title + '</a><h1>' +
//         '<div style=" background: url(' + "static/images/picture.jp" + ') no-repeat center; width: 250px; height: 200px"' +
//         '</div>' +
//         '</div>';

//     var options = {
//         content: contentString2,
//         disableAutoPan: false,
//         maxWidth: 0,
//         pixelOffset: new google.maps.Size(-160, -382),
//         zIndex: null,
//         boxStyle: {
//             opacity: 0.75,
//             width: "280px"
//         },
//         closeBoxMargin: "10px 2px 2px 2px",
//         closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
//         infoBoxClearance: new google.maps.Size(1, 1),
//         isHidden: false,
//         pane: "floatPane",
//         enableEventPropagation: false
//     };

//     var ib = new InfoBox(options);

//     ib.addListener('domready', function () {
//         $(".direction").on('click', function () {
//             calculateAndDisplayRoute(newMarker);
//             $('.infobox').fadeOut('300');
//         });
//     })

//     newMarker.addListener('click', function () {
//         $('.infobox').fadeOut('300');
//         ib.open(map, newMarker);
//     });
//     return newMarker;
// };

// function calculateAndDisplayRoute(newMarker) {
//     directionsDisplay.setMap(map);
//     directionsService.route({
//         origin: marker.getPosition(),
//         destination: newMarker.getPosition(),
//         travelMode: google.maps.TravelMode.DRIVING
//     }, function (response, status) {
//         if (status === google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);

//             service.getDistanceMatrix({
//                 origins: [marker.getPosition()],
//                 destinations: [newMarker.getPosition()],
//                 travelMode: google.maps.TravelMode.DRIVING
//             }, function (response, status) {
//                 if (status !== google.maps.DistanceMatrixService.OK) {
//                     // response
//                     console.log(response);
//                 }
//             });
//         } else {
//             window.alert('Directions request failed due to ' + status);
//         }
//     });
// }

class Directions extends Component {

    'user strick';

    // call functions
    // initMap()
    // ZoomControl()
    // GeolocationControl()
    // });

    // "https://maps.googleapis.com/maps/api/distancematrix/json?parameters"
=======
class Directions extends Component {

    //'user strick';
    handleInit = () => {
        // call functions
//        initMap();
//        ZoomControl();
//        GeolocationControl();
    };
    //"https://maps.googleapis.com/maps/api/distancematrix/json?parameters";
>>>>>>> a48c653d9029f8e6b2d69e03c5e6c44009ab9b89

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