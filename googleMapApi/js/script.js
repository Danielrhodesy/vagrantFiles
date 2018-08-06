google.maps.event.addDomListener(window, 'load', initmap);

function initmap(){

  var mapOptions = {
    center :{
      lat: 59.913869,
      lng: 10.752245
    },
    zoom: 12,
    disableDefaultUI: true,
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT
    },
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    scaleControl: true,
    styles: [
        {
            featureType: 'water',
            stylers : [
              {
                color: '#FDFDFD'
              }
            ]
        },
        {
          featureType: 'road',
          stylers: [
            {
              color: '#FDFDFD'
            }
          ]

        },
        {
          featureType: 'landscape',
          stylers: [
            {
              color: '#F40000'
            }
          ]
        },
        {
          featureType: 'poi',
          stylers: [
            {
              color: '#F40000'
            }
          ]
        },
        {
          featureType: 'landscape.natural.terrain',
          stylers: [
            {
              color: '#C3121F'
            }
          ]
        },
        {
          featureType: 'landscape.natural.landcover',
          stylers: [
            {
              color: '#C3121F'
            }
          ]
        },
        {
          featureType: 'administrative.country',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#FDFDFD'
            }
          ]
        }
    ]
  }


  var map = new google.maps.Map(document.getElementById('map'), mapOptions);


  var marker = new google.maps.Marker({
    position: {
      lat: 59.913869,
      lng: 10.752245
    },
    map: map,
    title: 'COCA COLA'
  })






}
