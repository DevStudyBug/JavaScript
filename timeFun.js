console.loh (navigator)
if ("geoloaction" in navigator){
    navigator.geoloaction.getCurrentPosition(function(position){
        let lat =position.coords.latitude;
        let long =position.coords.longitude;
    });
}else{
    console.log("position not found")
}