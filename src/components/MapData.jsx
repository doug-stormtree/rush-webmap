import React, { useEffect, useRef } from 'react';
import { Button, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { LegendDrawer } from './Legend';
import { useMapLayerStore } from '../data/Questions';

const basemap = L.tileLayer("http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");

export const MapData = ({ question }) => {
  const map = useMap();
  const layers = useMapLayerStore((state) => state.layers);
  const setLayerData = useMapLayerStore((state) => state.setLayerData);
  const setQuestionLayersActive = useMapLayerStore(
    (state) => state.setQuestionLayersActive
  );

  useEffect(() => {
    // Add Satellite Basemap
    if (!map.hasLayer(basemap)) map.addLayer(basemap);
  
    layers.forEach((el, key) => {
      if (el.active) {
        if (el.layer) {
          map.addLayer(el.layer);
        } else {
          fetch(el.data)
            .then((response) => response.json())
            .then((data) => {
              const mapLayer = L.geoJSON(
                data,
                el.options,
              );
              setLayerData(key, mapLayer)
              map.addLayer(mapLayer);
            })
        }
      }
    });
    return () => {
      layers.forEach(el => {
        if (el.layer) map.removeLayer(el.layer);
      });
    };
  }, [map, layers, setLayerData]);

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