var airmap = L.map('map', {
  center: [-122.793653, 45.385959],
  zoom: 13.4
});

mapbox_token = 'pk.eyJ1Ijoic3R1dnN0YWsiLCJhIjoiY2pycjA3c3ZyMDJ5ejQ0bXlwMGVtMDJ6MCJ9.EKpR2FQUJd8Qz0TJIm_NpQ';

var gl = L.mapboxGL({
	accessToken: mapbox_token,
	style: 'assets/style.json',
	attribution: 'Created By <a href="https://github.com/jakobzhao/">Bo Zhao</a> based on the <a href="assets/license.txt">Mapbox basic style</a>'
}).addTo(map);
