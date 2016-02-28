var basemapUrl = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
var attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

  var map1 = L.map('map1', {
    scrollWheelZoom: false
  }).setView( [42.730874,-75.322266], 6);
  
  //CartoDB Basemap
  L.tileLayer(basemapUrl,{
    attribution: attribution
  }).addTo(map1);


  $.getJson('data/RemediationSites.geojson', function() {
    L.geoJson().addTo(map1);
  });

  // var lived_style = {
  //     radius: 10,
  //     fillColor: "#3366ff",
  //     color: "#FFF",
  //     weight: 2,
  //     opacity: 1,
  //     fillOpacity: 0.8
  //   };

  //   var not_lived_style = {
  //     radius: 10,
  //     fillColor: "#ff3300",
  //     color: "#FFF",
  //     weight: 2,
  //     opacity: 1,
  //     fillOpacity: 0.8
  //   };



  // //this function is set to run when a user mouses over any polygon
  // function mouseoverFunction(e) {
  //   var layer = e.target;

  //   layer.setStyle({
  //       weight: 5,
  //       color: '#666',
  //       dashArray: '',
  //       fillOpacity: 0.7
  //   });

  //   if (!L.Browser.ie && !L.Browser.opera) {
  //       layer.bringToFront();
  //   }

  //   //update the text in the infowindow with whatever was in the data
  //   console.log(layer.feature.properties.name);
  //   $('#infoWindow').text(layer.feature.properties.name);

  // }

  // //this runs on mouseout
  // function resetHighlight(e) {
  //   geojson.resetStyle(e.target);
  // }

  //  //this is executed once for each feature in the data, and adds listeners
  // function onEachFeature(feature, layer) {
  //   layer.on({
  //       mouseover: mouseoverFunction,
  //       mouseout: resetHighlight
  //       //click: zoomToFeature
  //   });
  // }


