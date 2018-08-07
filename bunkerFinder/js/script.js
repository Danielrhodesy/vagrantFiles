google.maps.event.addDomListener(window, 'load', initmap);

var map, infobox, allMarkers = [];

function initmap(){

  var mapOptions = {
    center :{
      lat: -41.286460,
      lng: 174.776236
    },
    zoom: 12,
  };


map = new google.maps.Map(document.getElementById('map'), mapOptions);

  addAllMarkers();

  //
  // var marker = new google.maps.Marker({
  //   position: {
  //     lat: 59.913869,
  //     lng: 10.752245
  //   },
  //   map: map,
  // })

};


function addAllMarkers(){
  $.ajax({
    url: 'data/markers.json',
    type: 'GET',
    dataType: 'JSON',
    success:function(markers){
      for(var i = 0; i < markers.length; i++) {
        $('#places').append(
          "<div class='place' data-id='"+markers[i].id+"'><h3>"+markers[i].place_name+"</h3>"+
          "<div class='panel'>"+
          "<p>"+markers[i].description+"</p></div><hr>")



        var image = {
          url: 'images/bunker2.png',
          size: new google.maps.Size(32, 32),
        }



        var marker = new google.maps.Marker({
          position: {
            lat: markers[i].lat,
            lng: markers[i].lng
          },
          title: markers[i].place_name,
          markerID: markers[i].id,
          map: map,
          icon: image,
          animation: google.maps.Animation.DROP
        });

        markerClickEvent(marker);
        allMarkers.push(marker);

      }
    },
    error:function(error){
      console.log("Error, somthing wen wrong, can't get the markers")
      console.log(error)
    }
  });
}


function markerClickEvent(marker){
  if(infobox){
    infobox.close();
  }
  infobox = new google.maps.InfoWindow();
  map.panTo(marker.position);
  google.maps.event.addListener(marker, 'click', function(){
    infobox.setContent('<div><strong>'+marker.title+'</strong></div>');
    infobox.open(map, marker)
  });
}


function moveMap(){
  var latlng = new google.maps.LatLng(-41.2959299, 174.772154);
  map.panTo(latlng)
  map.setZoom(13)
}

$(document).on('click', '.place', function(){
    if(infobox){
        infobox.close();
    }
    var id = $(this).data('id');
    $('.panel').slideUp();
    $(this).find('.panel').slideDown()
    for (var i = 0; i < allMarkers.length; i++) {
        if(allMarkers[i].markerID == id){
            map.panTo(allMarkers[i].position);
            map.setZoom(13);
            infobox = new google.maps.InfoWindow();
            infobox.setContent(
                '<div class="infobox">'+
                    '<strong>'+allMarkers[i].title+'</strong>'+
                '</div>');
            infobox.open(map, allMarkers[i]);
            break;
        }
    }
});

// $(document).on('click', '.place', function(){
//   if(infobox){
//     infobox.close();
//   }
//   var id = $(this).data('id');
//   $('.panel').slideDown()
//   for (var i = 0; i < allMarkers.length; i++) {
//     if(allMarkers[i].markerID == id){
//       map.panTo(allMarkers[i].position);
//       map.setZoom(17);
//       infobox = new google.maps.InfoWindow();
//       infobox.setContent(
//         '<div class="inforbox">'+'<strong>'+allMarkers[i].title+'</strong><br>'+allMarkers[i].description+'</div>')
//         infobox.open(map, allMarkers[i])
//          break;
//     }
//   }
//
//   console.log('.place');
// })
//










//END
