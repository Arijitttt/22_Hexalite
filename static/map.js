var map = L.map('map').setView([28.5, 85], 8);
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
    //coochbihar
    { name: "Hotel Bangabhumi", bookingLink:"https://www.expedia.co.in/Alipurduar-Hotels-Hotel-Bangabhumi.h33312596.Hotel-Information?chkin=2024-03-12&chkout=2024-03-13&x_pwa=1&rfrr=HSR&pwa_ts=1707629521757&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jby5pbi9Ib3RlbC1TZWFyY2g%3D&useRewards=false&rm1=a2&regionId=3000441189&destination=Cooch+Behar%2C+West+Bengal%2C+India&destType=MARKET&selected=33312596&latLong=26.32173%2C89.45134&sort=RECOMMENDED&top_dp=9401&top_cur=INR&userIntent=&selectedRoomType=216930142&selectedRatePlan=382417722&searchId=71f43160-6487-45a7-be5d-48c0bf861ee6", location: [26.50282,89.52851], rating: "3.5/5", price:"9,401/night",  image: "../static/assets/hackfest hackathon/hotels/coochbihar/hotel-1.png" },
    { name: "Maa Greenary View",bookingLink:"https://www.expedia.co.in/Alipurduar-Hotels-Maa-Greenery-View.h37039287.Hotel-Information?chkin=2024-03-12&chkout=2024-03-13&x_pwa=1&rfrr=HSR&pwa_ts=1707629525767&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jby5pbi9Ib3RlbC1TZWFyY2g%3D&useRewards=false&rm1=a2&regionId=3000441189&destination=Cooch+Behar%2C+West+Bengal%2C+India&destType=MARKET&selected=33312596&latLong=26.32173%2C89.45134&sort=RECOMMENDED&top_dp=2444&top_cur=INR&userIntent=&selectedRoomType=215142954&selectedRatePlan=382369846&searchId=71f43160-6487-45a7-be5d-48c0bf861ee6", location: [26.540657144689416, 89.56577869558636], rating: "3.5/5",price:"2,444/night",  image: "../static/assets/hackfest hackathon/hotels/coochbihar/hotel-2.png" },
    { name: "Resort Jayanti Hills Jungle Camp", bookingLink:"https://www.expedia.co.in/Alipurduar-Hotels-Resort-Jayanti-Hills-Jungle-Camp.h29766992.Hotel-Information?chkin=2024-03-12&chkout=2024-03-13&x_pwa=1&rfrr=HSR&pwa_ts=1707629525772&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jby5pbi9Ib3RlbC1TZWFyY2g%3D&useRewards=false&rm1=a2&regionId=3000441189&destination=Cooch+Behar%2C+West+Bengal%2C+India&destType=MARKET&selected=33312596&latLong=26.32173%2C89.45134&sort=RECOMMENDED&userIntent=&searchId=71f43160-6487-45a7-be5d-48c0bf861ee6", location: [26.55072229287304, 89.5301477416167], rating: "3/5",price:"1889/night", image: "../static/assets/hackfest hackathon/hotels/coochbihar/hotel-3.png" },
    { name: "Oyo 29784 Hotel Debdutta", bookingLink:"https://www.expedia.co.in/Cooch-Behar-Hotels-OYO-27984-Hotel-Debdutta.h40151496.Hotel-Information?chkin=2024-03-12&chkout=2024-03-13&x_pwa=1&rfrr=HSR&pwa_ts=1707629525767&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jby5pbi9Ib3RlbC1TZWFyY2g%3D&useRewards=false&rm1=a2&regionId=3000441189&destination=Cooch+Behar%2C+West+Bengal%2C+India&destType=MARKET&selected=33312596&latLong=26.32173%2C89.45134&sort=RECOMMENDED&userIntent=&searchId=71f43160-6487-45a7-be5d-48c0bf861ee6", location: [26.32444045298772, 89.44731381092255], rating: "4/5",price:"1200/night",  image: "../static/assets/hackfest hackathon/hotels/coochbihar/hotel-4.png" },
    { name: "Hotel Dooars Mountain", bookingLink:"https://www.expedia.co.in/Alipurduar-Hotels-Hotel-Dooars-Mountain.h23050819.Hotel-Information?chkin=2024-03-12&chkout=2024-03-13&x_pwa=1&rfrr=HSR&pwa_ts=1707629525774&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jby5pbi9Ib3RlbC1TZWFyY2g%3D&useRewards=false&rm1=a2&regionId=3000441189&destination=Cooch+Behar%2C+West+Bengal%2C+India&destType=MARKET&selected=33312596&latLong=26.32173%2C89.45134&sort=RECOMMENDED&userIntent=&searchId=71f43160-6487-45a7-be5d-48c0bf861ee6", location: [26.488464775837272, 89.52678569161463 ], rating: "3/5",price:"1200/night",  image: "../static/assets/hackfest hackathon/hotels/coochbihar/hotel-5.png" },
    { name: "Hotel Maa River View", bookingLink:"https://www.expedia.co.in/Alipurduar-Hotels-Maa-River-View.h97338152.Hotel-Information?chkin=2024-03-12&chkout=2024-03-13&x_pwa=1&rfrr=HSR&pwa_ts=1707629525768&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jby5pbi9Ib3RlbC1TZWFyY2g%3D&useRewards=false&rm1=a2&regionId=3000441189&destination=Cooch+Behar%2C+West+Bengal%2C+India&destType=MARKET&selected=33312596&latLong=26.32173%2C89.45134&sort=RECOMMENDED&top_dp=1795&top_cur=INR&userIntent=&selectedRoomType=323665682&selectedRatePlan=392495313&searchId=71f43160-6487-45a7-be5d-48c0bf861ee6", location: [26.540540339555026, 89.56598992257132 ], rating: "3/5",price:"1,795/night", image: "../static/assets/hackfest hackathon/hotels/coochbihar/hotel-6.png" },
    // Add more restaurant data here
];
restaurants.forEach(function(restaurant) {
    var popupContent = `
    <div className="popup-wrapper">
        <b>${restaurant.name}</b><br>
        Rating: ${restaurant.rating}<br>
        Price: ${restaurant.price}<br>
        <img src="${restaurant.image}" class="popup-image" style="width: 180px; height: 140px;"><br> 
        <a href="${restaurant.bookingLink}" class="booking-link">
            <button class="booking-button " 
            style="background-color: #05ad5f; padding:10px; font-size: 9px;;
            cursor: pointer;
            border-radius: 5px;
            width:70px;"
            >Book Now</button></a>
        </a>
        </div>
    `;
    L.marker(restaurant.location).addTo(map)
        .bindPopup(popupContent)
        
});
function book(restaurantName) {
    // Implement your booking logic here
    alert("Booking for", + restaurantName);
    // Redirect to booking page, or perform any other action
}

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


    