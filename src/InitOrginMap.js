function initOrginMap() {
    var osmAttrib = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
    var orgin_url = 'http://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        orgin_osm = L.tileLayer(orgin_url, {
            maxZoom: 18,
            attribution: osmAttrib
        }),
        latlng = new L.LatLng(39.91668168130951, 116.3941812515259);
    var orgin_map = new L.Map('orgin_map', {center: latlng, zoom: 15, layers: [orgin_osm], zoomControl: false});

    return orgin_map;
}