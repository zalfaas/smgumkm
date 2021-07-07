var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_kecamatan_1 = new ol.format.GeoJSON();
var features_kecamatan_1 = format_kecamatan_1.readFeatures(json_kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecamatan_1.addFeatures(features_kecamatan_1);var lyr_kecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecamatan_1, 
                style: style_kecamatan_1,
    title: 'kecamatan<br />\
    <img src="styles/legend/kecamatan_1_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/kecamatan_1_1.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/kecamatan_1_2.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/kecamatan_1_3.png" /> 0.0 - 0.0<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_kecamatan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kecamatan_1];
lyr_kecamatan_1.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'ush_kecil': 'ush_kecil', 'ush_mnngah': 'ush_mnngah', 'ush_mikro': 'ush_mikro', 'umkm': 'umkm', });
lyr_kecamatan_1.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'ush_kecil': 'TextEdit', 'ush_mnngah': 'TextEdit', 'ush_mikro': 'TextEdit', 'umkm': 'TextEdit', });
lyr_kecamatan_1.set('fieldLabels', {'ID': 'inline label', 'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'xcoord': 'inline label', 'ycoord': 'inline label', 'ush_kecil': 'inline label', 'ush_mnngah': 'inline label', 'ush_mikro': 'inline label', 'umkm': 'inline label', });
lyr_kecamatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});