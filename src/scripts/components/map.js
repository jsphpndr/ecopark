let map;

function initMap(){
  // let lat = 25.0737778
  // let lng = -77.3329618 
  //Map Options
  let options = {
    zoom: 17,
    center: {lat:lat,lng:lng},
    zoomControl: false,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    mapTypeId: 'roadmap',
    styles: [{
      "featureType": "water",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#b5cbe4"
      }]
    }, {
      "featureType": "landscape",
      "stylers": [{
        "color": "#efefef"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#83a5b0"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#bdcdd3"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e3eed3"
      }]
    }, {
      "featureType": "administrative",
      "stylers": [{
        "visibility": "on"
      }, {
        "lightness": 33
      }]
    }, {
      "featureType": "road"
    }, {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [{
        "visibility": "on"
      }, {
        "lightness": 20
      }]
    }, {}, {
      "featureType": "road",
      "stylers": [{
        "lightness": 20
      }]
    }]
  };

  let map = new google.maps.Map(document.getElementById('map'), options);

  // let icon = {
  //             url: "http://cochinamogulos.com/img/nexia-favicon.png",
  //             size: new google.maps.Size(30,30),
  //             scaledSize: new google.maps.Size(30,30)
  //         };

  let marker = new google.maps.Marker ({
    position: {lat:lat,lng:lng},
    map: map,
    // icon: icon,
    zIndex: 6
  });

  // google.maps.event.addListener(map, 'zoom_changed', function() {
  //     marker.setIcon(icon);
  //   });

  // google.maps.event.addDomListener(window, 'resize', function() {
  //   let center = map.getCenter();
  //   google.maps.event.trigger(map, "resize");
  //   map.setCenter(center);

  //   });

}


