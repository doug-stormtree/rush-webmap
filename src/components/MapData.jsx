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

  useEffect(() => {
    // Add Satellite Basemap
    const bmSat = L.tileLayer("http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");
    map.addLayer(bmSat);
  
    layers.forEach(el => {
      if (el.active) map.addLayer(el.layer);
    });
    return () => {
      layers.forEach(el => map.removeLayer(el.layer));
    };
  }, [map, layers]);

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