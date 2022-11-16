import React, { useEffect } from 'react';
import ReactDOMServer from "react-dom/server";
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import { FaMapMarker } from 'react-icons/fa';
import { ReactComponent as CommunityCtrIcon } from '../data/beattheheat/cc.svg';
import { ReactComponent as LibraryIcon } from '../data/beattheheat/lib.svg';

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

    if (question.mapData.length === 0) { return () => {
      map.removeControl(legend);
    }};

    const layers = question.mapData.map((layer) => {
      if (layer.format === 'point') {
        return L.geoJSON(layer.data, {
          pointToLayer: (f,l) => L.marker(l, {
            icon: featureIconByProperty(f, layer.property, layer.propertyMap)
          })
        });
      } else if (layer.format === 'polygon') {
        return L.geoJSON(layer.data, layer.style);
      }
    })
    layers.forEach(el => {
      map.addLayer(el)
      legend.addOverlay(el)
    });
    return () => {
      layers.forEach(el => map.removeLayer(el));
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