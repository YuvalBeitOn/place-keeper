'use strict';

const EILATLAT = 29.55805;
const EILATLNG = 34.94821;

function initMap(lat = EILATLAT, lng = EILATLNG) {
    renderUserStyle();
    renderPlaces();
    // renderMarkers();
    var elMap = document.querySelector('#map');
    var options = {
        center: {
            lat,
            lng
        },
        zoom: 14
    };
    var map = new google.maps.Map(
        elMap,
        options
    );
    google.maps.event.addListener(map, "click", (event) => {
        var location = { lat: event.latLng.lat(), lng: event.latLng.lng() }
        var placeName = prompt('Enter place Name');
        if (!placeName) return;
        addMarker(location, map);
        addPlace(location, placeName);
        renderPlaces();
    });
}

// function renderMarkers() {
//     console.log('imhere');
//     places = loadFromStorage(STORAGE_KEY_PLACES);
//     if (!places) return;
//     const elMap = document.querySelector('#map');
//     places.forEach(element => {
//         console.log(element);
//         var location = { lat: element.lat, lng: element.lng };
//         addMarker(location, elMap);
//     });
// }




function getPosition() {
    if (!navigator.geolocation) return alert("HTML5 Geolocation is not supported in your browser.");
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
}


function showLocation(position) {
    initMap(position.coords.latitude, position.coords.longitude);
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError");

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}


// function goToPlace(lat, lng) {
//     var mapOptions = {
//         zoom: 8,
//         center: { lat, lng },
//     };
//     var elMap = document.getElementById('map');
//     var map = new google.maps.Map(
//         elMap,
//         mapOptions
//     );
// }


function renderPlaces() {
    var places = getPlaces();
    if (!places) return;
    var strHtmls = '';
    places.forEach(place => {
        console.log(place.lat, place.lng);
        strHtmls += `<li> 
                    <span onclick="goToPlace('${place.lat}', '${place.lng}')">${place.name}</span>
                    <button class="delete-btn" onclick="onDeletePlace('${place.id}')">X</button>
                    </li>`
    });
    document.querySelector('.places-list').innerHTML = strHtmls;
}

function goToPlace(lat, lng) {
    initMap(+lat, +lng);
}

function renderMarkers() {}

function onDeletePlace(placeId) {
    deletePlace(placeId);
    renderPlaces();
}