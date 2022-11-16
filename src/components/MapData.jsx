import React, { useEffect } from 'react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';

export const MapData = ({ question }) => {
  const map = useMap();

  useEffect(() => {
    if (question.mapData.length === 0) { return };
    const geo = question.mapData[0];
    const layer = L.geoJSON(geo.data, geo.style);
    map.addLayer(layer);
    return () => {map.removeLayer(layer)};
  }, [map, question])

  return null;
}