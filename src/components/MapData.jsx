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
    if (question.mapData.length === 0) { return };

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
    layers.forEach(el => map.addLayer(el));
    return () => {layers.forEach(el => map.removeLayer(el))};
  }, [map, question])

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