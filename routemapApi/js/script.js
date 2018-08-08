var directionsDisplay;
var directionService = new google.maps.DirectionsService();
var map;
function init(){
  directionsDisplay = new google.maps.DirectionsRenderer();
  var wellington = new google.maps.LatLng(-41.286460, 174.776236);
  var myOptions = {
    // zoom = 6,
    mapTypeId: 'roadmap',
    center: wellington
  }
  map = new google.maps.Map(document.getElementById('map'), myOptions);
  directionsDisplay.setMap(map);
  calcRoute();
}
function calcRoute(){
  var waypnts = [];
  stop = new google.maps.LatLng(7.709188, 27.983474)
  stop2 = new google.maps.LatLng(-11.687603, 27.502617)
  waypnts.push({
    location: stop,
    stopover: true});
  waypnts.push({
    location: stop2,
    stopover: true});
  start = new google.maps.LatLng(-33.924869, 18.424055)
  end = new google.maps.LatLng(30.044420, 31.235712)
  var request = {
    origin: start,
    destination: end,
    waypoints: waypnts,
    optimizeWaypoints: true,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  directionService.route(request,function(response, status){
    if(status==google.maps.DirectionsStatus.OK){
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
    }
  })
}










//
// var waypts = [];
//
// stop = new google.maps.LatLng()
//   waypnts.push({
//     location:stop,
//     stopover:true
//   });
//
//   start = new google.maps.LatLng()
//   end = new google.maps.LatLng()
