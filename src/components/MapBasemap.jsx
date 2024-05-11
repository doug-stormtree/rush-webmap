import React, { useEffect } from 'react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';

// Constants
const TILE_LAYER_OPTS = {
  minZoom: 0,
  maxZoom: 22,
  updateWhenIdle: true,
  zIndex: 0,
  attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
}
const MAPBOX_USER = 'rushadmin'
const MAPBOX_STYLEID = 'clw2m6f9b018001obfxcc747g'
const MAPBOX_TOKEN = 'pk.eyJ1IjoicnVzaGFkbWluIiwiYSI6ImNsdzJtYmRydzBuNDIyam5yZ2pwMG16cnUifQ.SkSSdHcrPq4u8HSitBvJcg'
const API_URL = `https://api.mapbox.com/styles/v1/`
const API_TILE_PATH = `${MAPBOX_USER}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x`
const API_PARAMS = `?access_token=${MAPBOX_TOKEN}`

export const MapBasemap = () => {
  const map = useMap()

  useEffect(() => {
    if (map === undefined) return;

    // Add Satellite Basemap
    const basemap = L.tileLayer(
      API_URL + API_TILE_PATH + API_PARAMS,
      TILE_LAYER_OPTS
    )
    map.addLayer(basemap);

    return () => {
      map.removeLayer(basemap)
    };
  }, [map]);

  return (
    <Control position='bottomleft'>
      <img
        src='/mapbox-logo-white.png'
        alt='Mapbox'
        style={{
          margin: '0 0 -8px -8px',
          height: '2.5rem',
        }}
      />
    </Control>
  );
}
export default MapBasemap
