import React, { useEffect, useRef } from 'react';
import { Button, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { LegendDrawer } from './Legend';
import { useMapLayerStore } from '../data/Questions';

export const MapData = ({ question }) => {
  const map = useMap();
  const layers = useMapLayerStore((state) => state.layers);
  const setQuestionLayersActive = useMapLayerStore(
    (state) => state.setQuestionLayersActive
  );
  
  const layerDataMap = new Map();
  const bmSat = L.tileLayer("http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");

  useEffect(() => {
    // Add Satellite Basemap
    if (!map.hasLayer(bmSat)) map.addLayer(bmSat);
  
    layers.forEach((value, key) => {
      if (value.active) {
        if (layerDataMap.has(key)) {
          map.addLayer(layerDataMap.get(key));
        } else {
          fetch(value.data)
            .then((response) => response.json())
            .then((data) => {
              const mapLayer = L.geoJSON(
                data,
                value.options,
              );
              layerDataMap.set(key, mapLayer);
              map.addLayer(layerDataMap.get(key));
            })
        }
      }
    });
    return () => {
      layerDataMap.forEach(layer => map.removeLayer(layer));
    };
  }, [map, layers, bmSat, layerDataMap]);

  useEffect(() => setQuestionLayersActive(question),
    [question, setQuestionLayersActive]);

  const smallDisplay = useBreakpointValue({
    lg: false,
    base: true,
  }, {ssr:false, fallback:true});

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // Render Legend Control
  return (
    <>{
      smallDisplay ? (
        <Control position='topright'>
          <Button ref={btnRef} onClick={onOpen}>
            Legend
          </Button>
          <LegendDrawer
            activeQuestion={question}
            btnRef={btnRef}
            isOpen={isOpen}
            onClose={onClose}
          />
        </Control>
      ) : null
    }</>
  );
}