'use strict';
const STORAGE_KEY_PLACES = 'placesDB'
    // const STORAGE_KEY_MARKERS = 'markersDB'
var gPlaces = [];
// var gMarkers = [];

createPlaces();

function createPlaces() {
    var places = loadFromStorage(STORAGE_KEY_PLACES);
    if (places) gPlaces = places;
    else gPlaces = [];
}

function createPlace(location, name) {
    return {
        id: makeId(),
        lat: location.lat,
        lng: location.lng,
        name
    }
}

function addPlace(location, placeName) {
    gPlaces.push(createPlace(location, placeName));
    saveToStorage(STORAGE_KEY_PLACES, gPlaces);

}

function addMarker(location, map) {
    const mark = new google.maps.Marker({
        position: location,
        map: map
    });
}

function getPlaces() {
    var places = loadFromStorage(STORAGE_KEY_PLACES)
    return places;
}

function getPlaceIdxById(placeId) {
    const placeIdx = gPlaces.findIndex(place => {
        return placeId === place.id;
    });
    return placeIdx;
    console.log(placeIdx);
}

function deletePlace(placeId) {
    var placeIdx = getPlaceIdxById(placeId);
    gPlaces.splice(placeIdx, 1)
    saveToStorage(STORAGE_KEY_PLACES, gPlaces)
}