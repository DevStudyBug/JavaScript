<<<<<<< HEAD
console.loh (navigator)
if ("geoloaction" in navigator){
    navigator.geoloaction.getCurrentPosition(function(position){
        let lat =position.coords.latitude;
        let long =position.coords.longitude;
    });
}else{
    console.log("position not found")
}
=======
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
>>>>>>> 6204bbeeb49ef07e3b3d5d96057946e6df136250
