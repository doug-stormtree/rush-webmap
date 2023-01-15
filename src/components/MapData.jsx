import React, { useEffect } from 'react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import { useMapLayerStore } from '../data/Questions';

export const MapData = ({ question }) => {
  const map = useMap();
  const layers = useMapLayerStore((state) => state.layers);
  const setQuestionLayersActive = useMapLayerStore(
    (state) => state.setQuestionLayersActive
  );

  useEffect(() => {
    // Add Satellite Basemap
    const bmSat = L.tileLayer("http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");
    map.addLayer(bmSat);
    
    // Leaflet Legend
    /*
    const legend = L.control.layers(
      { "Satellite": bmSat },
      undefined,
      { collapsed: false }
      ).addTo(map);
    */
  
    layers.forEach(el => {
      if (el.active) map.addLayer(el.layer);
    });
    return () => {
      layers.forEach(el => map.removeLayer(el.layer));
    };
  }, [map, layers]);

  useEffect(() => setQuestionLayersActive(question),
    [question, setQuestionLayersActive]);

  // component renders no elements
  return null;
}