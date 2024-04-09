console.log(navigator);

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(`Latitude: ${lat}, Longitude: ${long}`);
    });
} else {
    console.log("Position not found");
}

