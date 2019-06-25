var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Limite_Departamental_1 = new ol.format.GeoJSON();
var features_Limite_Departamental_1 = format_Limite_Departamental_1.readFeatures(json_Limite_Departamental_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Departamental_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limite_Departamental_1.addFeatures(features_Limite_Departamental_1);var lyr_Limite_Departamental_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Departamental_1, 
                style: style_Limite_Departamental_1,
                title: '<img src="styles/legend/Limite_Departamental_1.png" /> Limite_Departamental'
            });var format_RendimientodePanelaToneladaHectarea_2 = new ol.format.GeoJSON();
var features_RendimientodePanelaToneladaHectarea_2 = format_RendimientodePanelaToneladaHectarea_2.readFeatures(json_RendimientodePanelaToneladaHectarea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientodePanelaToneladaHectarea_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RendimientodePanelaToneladaHectarea_2.addFeatures(features_RendimientodePanelaToneladaHectarea_2);var lyr_RendimientodePanelaToneladaHectarea_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientodePanelaToneladaHectarea_2, 
                style: style_RendimientodePanelaToneladaHectarea_2,
    title: 'Rendimiento de  Panela (Tonelada/Hectarea)<br />\
    <img src="styles/legend/RendimientodePanelaToneladaHectarea_2_0.png" />  2 - 3 <br />\
    <img src="styles/legend/RendimientodePanelaToneladaHectarea_2_1.png" />  3 - 4 <br />\
    <img src="styles/legend/RendimientodePanelaToneladaHectarea_2_2.png" />  4 - 5 <br />\
    <img src="styles/legend/RendimientodePanelaToneladaHectarea_2_3.png" />  5 - 7 <br />\
    <img src="styles/legend/RendimientodePanelaToneladaHectarea_2_4.png" />  7 - 9 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Limite_Departamental_1.setVisible(true);lyr_RendimientodePanelaToneladaHectarea_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limite_Departamental_1,lyr_RendimientodePanelaToneladaHectarea_2];
lyr_Limite_Departamental_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.SCOS.(Ha': 'A.SCOS.(Ha', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', 'AÑO': 'AÑO', 'No': 'No', });
lyr_RendimientodePanelaToneladaHectarea_2.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', });
lyr_Limite_Departamental_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.SCOS.(Ha': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', 'AÑO': 'Range', 'No': 'Range', });
lyr_RendimientodePanelaToneladaHectarea_2.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', });
lyr_Limite_Departamental_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.SCOS.(Ha': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', 'AÑO': 'inline label', 'No': 'inline label', });
lyr_RendimientodePanelaToneladaHectarea_2.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', });
lyr_RendimientodePanelaToneladaHectarea_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});