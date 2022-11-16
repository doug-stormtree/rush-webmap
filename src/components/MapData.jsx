import React, { useEffect } from 'react';
import ReactDOMServer from "react-dom/server";
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';

export const MapData = ({ question }) => {
  const map = useMap();

  useEffect(() => {
    const bmSat = L.tileLayer("http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");
    map.addLayer(bmSat);
    const legend = L.control.layers(
      { "Satellite": bmSat },
      undefined,
      { collapsed: false }
      ).addTo(map);

    const layers = question.mapData.map((data) => {
      var layer = null;
      if (data.format === 'point') {
        layer = L.geoJSON(data.data, {
          pointToLayer: (f,l) => L.marker(l, {
            icon: featureIconByProperty(f, data.property, data.propertyMap)
          })
        });
      } else if (data.format === 'polygon') {
        layer =  L.geoJSON(data.data, data.style);
      }
      return { title: data.title, layer: layer };
    })
    layers.forEach(el => {
      map.addLayer(el.layer)
      legend.addOverlay(el.layer, el.title)
    });
    return () => {
      layers.forEach(el => map.removeLayer(el.layer));
      map.removeControl(legend);
    };
  }, [map, question])

  // component renders no elements
  return null;
}

const featureIconByProperty = (feature, property, propertyMap) => {
  if (property in feature.properties) {
    const icon = (propertyMap[feature.properties[property]] 
      || propertyMap['default']);

    return L.divIcon({
      className: "",
      iconSize: [32, 32],
      iconAnchor: [12, 12],
      html: ReactDOMServer.renderToString(icon),
    });
  }
  return;
}