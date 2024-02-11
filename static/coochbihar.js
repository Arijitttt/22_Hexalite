var map = L.map('map-coochbihar').setView([30,30], 8);


// // Function to handle button click event
// function onChangeMapView() {
//     // Here you can implement your logic to get the coordinates dynamically
//     // For this example, let's set it to a static coordinate
//     var newMapView = [30, 80]; // Example: New coordinates to set the map view

//     // Update the map view to the new coordinates
//     map.setView(newMapView, map.getZoom());

//     // Redirect to /map
//     window.location.href = '/map';
// }

// // Add event listener to the button
// changeMapViewBtn.addEventListener('click', onChangeMapView);








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
    
    



    //Murshidabad
    { name: "Hotel Indrajeet", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=201704211740422324&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTMSH&cmp=SEO&country=IN&lat=24.17689&lng=88.28146&locusId=CTMSH&locusType=city&modifyDates=true&rank=1&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=defaultMtkey", location: [24.176032322900195, 88.28061018016797 ], rating: "3.1/5",price:"1,086/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-1.png" },
    { name: "Bari Kothi", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=202106291752471387&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTMSH&cmp=SEO&country=IN&lat=24.24149&lng=88.25364&locusId=CTMSH&locusType=city&modifyDates=true&rank=2&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=defaultMtkey", location: [24.24164291705935, 88.25366603784157 ], rating: "4.0/5",price:"8,191/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-2.png" },
    { name: "Jalchabi Hotel & Resort", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=202103300916145865&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTMSH&cmp=SEO&country=IN&lat=24.16543&lng=88.26859&locusId=CTMSH&locusType=city&modifyDates=true&rank=3&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=defaultMtkey", location: [24.16560647377442, 88.26858406667515], rating: "4.5/5",price:"3,864/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-3.png" },
    { name: "Hotel Sagnik", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=201511191029358085&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTMSH&cmp=SEO&country=IN&lat=24.17772&lng=88.26974&locusId=CTMSH&locusType=city&modifyDates=true&rank=4&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=defaultMtkey", location: [24.17806891961892, 88.26987699551132], rating: "3.8/5",price:"1,366/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-4.png" },
    { name: "Sourav Lodge", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=201501141447535591&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTMSH&cmp=SEO&country=IN&lat=24.17992&lng=88.26973&locusId=CTMSH&locusType=city&modifyDates=true&rank=6&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=defaultMtkey", location: [24.17964407977824, 88.26963339366058], rating: "2.7/5",price:"3,312/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-5.png" },
    { name: "Gangamoyee Hotel", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=202111191738073079&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTMSH&cmp=SEO&country=IN&lat=24.1311&lng=88.25302&locusId=CTMSH&locusType=city&modifyDates=true&rank=7&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=defaultMtkey", location: [24.131268729876897, 88.25305378201745 ], rating: "null",price:"5,151/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-6.png" },
    { name: "Hotel Meridian", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=202205301531347032&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTMSH&cmp=SEO&country=IN&lat=24.16223&lng=88.27296&locusId=CTMSH&locusType=city&modifyDates=true&rank=8&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=defaultMtkey", location: [24.16214017855919, 88.27366890900333], rating: "null",price:"4,809/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-7.png" },
    { name: "Cossmibazar Choto Rajbari", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=201907201209333717&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTBPW&cmp=SEO&country=IN&lat=24.11916&lng=88.28093&locusId=CTMSH&locusType=city&modifyDates=true&rank=10&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=defaultMtkey", location: [24.120114152276237, 88.27601416852463 ], rating: "4.5/5",price:"6,606/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-8.png" },
    { name: "Samriddhi Banquet & Resort", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=201705021106239357&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTBPW&cmp=SEO&country=IN&lat=24.11565&lng=88.2671&locusId=CTMSH&locusType=city&modifyDates=true&rank=11&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&viewType=BUDGET&mtkeys=defaultMtkey", location: [24.115829042425364, 88.26721463968863], rating: "3.8/5",price:"1,416/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-9.png" },
    { name: "Hotel Nandini", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=201911211918191894&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTBPW&cmp=SEO&country=IN&lat=24.09994&lng=88.27786&locusId=CTMSH&locusType=city&modifyDates=true&rank=13&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&viewType=BUDGET&mtkeys=defaultMtkey", location: [24.100163932256795, 88.27782328016565 ], rating: "3.9/5",price:"1,521/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-10.png" },
    { name: "Oasis Inn", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=202207301200351770&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTBPW&cmp=SEO&country=IN&lat=24.10248&lng=88.25631&locusId=CTMSH&locusType=city&modifyDates=true&rank=17&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=defaultMtkey", location: [24.102639873675095, 88.2563240243449], rating: "4.5/5",price:"2,204/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-11.png" },
    { name: "Hotel Sonali Bangla", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=201501151402094296&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTBPW&cmp=SEO&country=IN&lat=24.09892&lng=88.25764&locusId=CTMSH&locusType=city&modifyDates=true&rank=19&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=defaultMtkey", location: [24.098952296971987, 88.25752233783729 ], rating: "3.7/5",price:"2,015/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-12.png" },
    { name: "Golden Retreats", bookingLink:"https://www.makemytrip.com/hotels/hotel-details/?hotelId=202203180438063995&_uCurrency=INR&checkin=03072024&checkout=03082024&city=CTBPW&cmp=SEO&country=IN&lat=24.09237&lng=88.26409&locusId=CTMSH&locusType=city&modifyDates=true&rank=30&roomStayQualifier=2e0e&searchText=Murshidabad&seoDS=true&seoReq=1707610517907&mtkeys=8381073284617038320", location: [24.092467217010633, 88.26409936852377 ], rating: "4.4/5",price:"3,2049/night", image: "../static/assets/hackfest hackathon/hotels/murshidabad/Hotel-13.png" },
    // Add more restaurant data here
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


    