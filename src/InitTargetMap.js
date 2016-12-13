function initTargetMap() {
    var osmAttrib = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
    var target_Url = 'http://d{s}.map.baidu.com/resource/mappic/bj/2/3/lv{z}/{x},{y}.jpg?v=001',
        target_osm = L.tileLayer(target_Url, {
            attribution: osmAttrib,
            maxZoom: 12,
            minZoom: 7,
            zoomReverse: true,
            zoomOffset: 1,
            subdomains: [0, 1, 2, 3]
        }),

        latlng = new L.LatLng(-19.78091902325516, 40.9075927734375);
    var target_map = new L.Map('target_map', {center: latlng, zoom: 7, layers: [target_osm], zoomControl: false});
    return target_map;
}
