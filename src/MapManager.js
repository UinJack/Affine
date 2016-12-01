var osmAttrib = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';


var orgin_url = 'http://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    orgin_osm = L.tileLayer(orgin_url, {
        maxZoom: 18,
        attribution: osmAttrib
    }),
    latlng = new L.LatLng(39.91668168130951, 116.3941812515259);

var orgin_map = new L.Map('orgin_map', {center: latlng, zoom: 15, layers: [orgin_osm], zoomControl: false});

var target_Url = 'http://d{s}.map.baidu.com/resource/mappic/bj/2/3/lv{z}/{x},{y}.jpg?v=001',
    target_osm = L.tileLayer(target_Url, {
        attribution: osmAttrib,
        maxZoom: 12,
        minZoom: 6,
        zoomReverse: true,
        zoomOffset: 1,
        subdomains: [0, 1, 2, 3]
    }),

    latlng = new L.LatLng(-19.78091902325516, 40.9075927734375);

var target_map = new L.Map('target_map', {center: latlng, zoom: 7, layers: [target_osm], zoomControl: false});

var i = 0;


function tableClick(e) {

    var orginCenter = orgin_map.getCenter();
    var targetCenter = target_map.getCenter();

    $('#table tbody:eq(0) tr:eq(' + i + ') td:eq(1)').html(orginCenter.lng);
    $('#table tbody:eq(0) tr:eq(' + i + ') td:eq(2)').html(orginCenter.lat);
    $('#table tbody:eq(0) tr:eq(' + i + ') td:eq(3)').html(targetCenter.lng);
    $('#table tbody:eq(0) tr:eq(' + i + ') td:eq(4)').html(targetCenter.lat);

    if (i <= 5) {
        i++;
    } else {
        i = 0;
    }
}

var matrix;
function makeArray() {
    debugger;
    var data = [];
    for (var j = 0; j <= 5; j++) {
        data.push({
            from: [
                Number($('#table tbody:eq(0) tr:eq(' + j + ') td:eq(1)').html()),
                Number($('#table tbody:eq(0) tr:eq(' + j + ') td:eq(2)').html())],
            to: [
                Number($('#table tbody:eq(0) tr:eq(' + j + ') td:eq(3)').html()),
                Number($('#table tbody:eq(0) tr:eq(' + j + ') td:eq(4)').html())]
        })


    }
    matrix = new MatrixCalc(data);
}

function check() {
    var orginCenter = orgin_map.getCenter();
    var point = matrix.to_target(orginCenter.lng, orginCenter.lat);
    target_map.setView([point.y, point.x]);
}



