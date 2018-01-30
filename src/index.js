console.log('i am running correctly');
const mapboxgl = require('mapbox-gl');
const buildMarker = require('./maker.js')

mapboxgl.accessToken = "pk.eyJ1Ijoic253b290ZW4iLCJhIjoiY2pkMXVvY2d6MWhqMjMzbzQwZWNqbWJyNiJ9.kUYt_xOxJSW-n4ZxjFckmA"

const map = new mapboxgl.Map({
  container: "map",
  center: [17.100, 48.148], //Bratislava, Slovakia
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([17.1077, 48.1486]).addTo(map);
//new mapboxgl.Marker(markerDomEl).setLngLat([17.172999308, 49.159832694]).addTo(map);

const marker = buildMarker([16.172999308, 49.159832694], 'hotel');
marker.addTo(map);
