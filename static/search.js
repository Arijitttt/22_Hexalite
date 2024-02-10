document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var place = document.getElementById('place').value;
    if (place.trim() !== '') {
        // Use Leaflet's geocoding functionality to get coordinates of the entered place
        fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + place)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    var coordinates = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
                    // Redirect to the map page with the coordinates
                    window.location.href = 'map.html?lat=' + coordinates[0] + '&lon=' + coordinates[1];
                } else {
                    alert('Place not found. Please enter a valid place name.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        alert('Please enter a place name.');
    }
});
