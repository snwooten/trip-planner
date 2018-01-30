const mapboxgl = require('mapbox-gl');

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
}
const markerHotel = document.createElement("div");
markerHotel.style.width = "32px";
markerHotel.style.height = "39px";
markerHotel.style.backgroundImage = `url(${iconURLs.hotels})`;

const markerRest = document.createElement("div");
markerRest.style.width = "32px";
markerRest.style.height = "39px";
markerRest.style.backgroundImage = `url(${iconURLs.restaurants})`;

const markerAct = document.createElement("div");
markerAct.style.width = "32px";
markerAct.style.height = "39px";
markerAct.style.backgroundImage = `url(${iconURLs.activities})`;


const buildMarker = function([long, lat], type) {
  let markerParam;
  let lcType = type.toLowerCase()
  if (lcType === 'activity') {
     markerParam = markerAct;
  }
  else if (lcType === 'restaurant') {
     markerParam = markerRest
  }
  else if (lcType === 'hotel') {
   markerParam = markerHotel
  } else {
    alert(type + ' is not an option. Pick activity, restaurant, or hotel')
  }
  return new mapboxgl.Marker(markerParam).setLngLat([long, lat])
}

module.exports = buildMarker
