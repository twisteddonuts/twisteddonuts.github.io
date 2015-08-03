/*
 Wilson Yee
 wyee26@my.smccd.edu
 CIS 114
 File Name: map.js
 Assignment: Final
 Date: 12/15/2013
 */

function initialize() {
    // 37.7833° N, 122.4167° W
    // -122.3240659!3d37.5668711
    var myLatlng = new google.maps.LatLng(37.7540223,-122.4772129); // San Francisco Location
    var mapOptions = {
        zoom: 17,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    // Geolocations of Tea places in San Francisco
    // 37.750514!4d-122.488777 Eggettes
    // -122.4812183!3d37.7635058 Teaway
    // 37.750514!4d-122.488777 Wonderful Foods
    // -122.4977335!3d37.7757588 Purple Kow
    // 37.750514!4d-122.488777 Super Cue
    // @37.7540223,-122.4772129

    // Creating the markers
    var TpumpsMarker = new google.maps.Marker({
        position: new google.maps.LatLng(37.7540223,-122.4772129),
        map: map,
        title: 'Twisted'
    });

}

google.maps.event.addDomListener(window, 'load', initialize);