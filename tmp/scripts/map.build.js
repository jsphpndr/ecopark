var map;function initMap(){var e={zoom:17,center:{lat:lat,lng:lng},zoomControl:!1,scrollwheel:!1,streetViewControl:!1,mapTypeControl:!1,mapTypeId:"roadmap",styles:[{featureType:"water",stylers:[{visibility:"on"},{color:"#b5cbe4"}]},{featureType:"landscape",stylers:[{color:"#efefef"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#83a5b0"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#bdcdd3"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e3eed3"}]},{featureType:"administrative",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"road"},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{},{featureType:"road",stylers:[{lightness:20}]}]},t=new google.maps.Map(document.getElementById("map"),e);new google.maps.Marker({position:{lat:lat,lng:lng},map:t,zIndex:6})}