var map = L.map('map').setView([28.5, 85], 4);
    // OSM Layer
    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
    osm.addTo(map);

    // GoogleStreet
    googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']

});
googleStreets.addTo(map);

var flight = L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var dark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});

// marker
var myIcon = L.icon({
    iconUrl: '../static/assets/marker.jpeg',
    iconSize: [10, 20],
    
});
var restaurants = [
    { name: "Restaurant 1", location: [28.5, 85], rating: 4, cuisine: "Italian", image: "../static/assets/pizza.jpeg" },
    { name: "Restaurant 2", location: [30.5, 86], rating: 4.5, cuisine: "Mexican", image: "../static/assets/pizza.jpeg" },
    // Add more restaurant data here
];
restaurants.forEach(function(restaurant) {
    var popupContent = `
        <b>${restaurant.name}</b><br>
        Rating: ${restaurant.rating}<br>
        Cuisine: ${restaurant.cuisine}<br>
        <img src="${restaurant.image}" class="popup-image">
    `;
    L.marker(restaurant.location).addTo(map)
        .bindPopup(popupContent)
        
});


// Layers
var baseMaps = {
    "OSM": osm,
    "Google Streets": googleStreets,
    "Flight": flight,
    "Dark": dark,


}

var overlayMaps = {
    "Marker": singleMarker
}
L.control.layers(baseMaps,overlayMaps).addTo(map); 
L.control.geocoder().addTo(map);
function onGeocodeResult(result) {
    map.fitBounds(result.bbox);
  }

  map.on('geocodereverse', function(event) {
    var latlng = event.latlng;
    console.log("You clicked the map at latitude: " + latlng.lat + " and longitude: " + latlng.lng);
  });







// var urlParams = new URLSearchParams(window.location.search);
// var lat = parseFloat(urlParams.get('lat')) || 0;
// var lon = parseFloat(urlParams.get('lon')) || 0;

// var map = L.map('map').setView([lat, lon], 13); // Set initial map view to the coordinates from the search

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

    // marker = L.marker([28.644800,  77.216721]).addTo(map)
    //marker = L.marker(navigator.geolocation.getCurrentPosition(getPosition)).addTo(map)
   // marker = L.marker([22.5599,  88.4899])

// map.on('click', function(e){
//     console.log(e);
//     var secondMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
//     L.Routing.control({
//         waypoints: [
//             // L.latLng(22.572645,  88.363892),
//             L.latLng(22.5599,  88.4899),
//             L.latLng(e.latlng.lat, e.latlng.lng)
//         ]
//     }).on('routesfound', function(e){
//         console.log(e);
//         e.routes[0].coordinates.forEach(function(coord, index){
//             setTimeout(() => {

//                 marker.setLatLng([coord.lat, coord.lng])

//             }, 100 * index)
//         })
//     })
    
//     .addTo(map)
// })


// var ownLoc;

// if (!navigator.geolocation) {
//     console.log('Your browser doesn\'t support geolocation feature.');
//   } else {
//       // setInterval(() => {
          
//       // }, interval);
//     ownLoc= navigator.geolocation.getCurrentPosition(getPosition);
//   }

//   var marker, circle;

//   function getPosition(position) {
//     console.log(position);

//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
//     var accuracy = position.coords.accuracy;

//     // Extract latitude and longitude values
//     var latitudeValue = lat.toFixed(4);
//     var longitudeValue = long.toFixed(4);

//     // Display latitude and longitude values in HTML
//     document.getElementById('latitude').innerHTML = 'Latitude: ' + latitudeValue;
//     document.getElementById('longitude').innerHTML = 'Longitude: ' + longitudeValue;

//     if (marker) {
//       map.removeLayer(marker);
//     }
//     if (circle) {
//       map.removeLayer(circle);
//     }

//     marker = L.marker([lat, long]).addTo(map);
//     circle = L.circle([lat, long], { radius: accuracy }).addTo(map);

//     var featureGroup = L.featureGroup([marker, circle]).addTo(map);

//     map.fitBounds(featureGroup.getBounds());

//     console.log('Your coordinate is : Lat:' + lat + ' Long:' + long + ' Accuracy : ' + accuracy);
//   }


    