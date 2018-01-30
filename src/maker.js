const mapboxgl = require('mapbox-gl');

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
}
const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([17.1077, 48.1486])

const buildMarker = function([long, lat], type) {
  console.log('you are making a marker')
  let markerParam;
  let lcType = type.toLowerCase()
  // if (lcType === 'activity') {
  //    markerParam = markerDomAct
  // }
  // else if (lcType === 'restaurant') {
  //    markerParam = markerDomRest
  // }
  // else if (lcType === 'hotel') {
  //  markerParam = markerDomHot
  // } else {
  //   alert(type + ' is not an option. Pick activity, restaurant, or hotel')
  //}
  return new mapboxgl.Marker(markerDomEl).setLngLat([long, lat])
}

module.exports = buildMarker;
