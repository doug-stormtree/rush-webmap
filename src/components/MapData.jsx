import React, { useEffect } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { LegendDrawerButton } from './Legend';
import { useActiveQuestionStore, useMapLayerStore } from '../data/Questions';

export const MapData = () => {
  const map = useMap();
  const activeQuestion = useActiveQuestionStore((state) => state.activeQuestion)
  const layers = useMapLayerStore((state) => state.layers);
  const getLeafletLayer = useMapLayerStore((state) => state.getLeafletLayer);

  // Effect adds all active layers to the map, fetching their data if necessary.
  useEffect(() => {
    if (map === undefined) return;
    
    layers.forEach((el, key) => {
      if (el.questions.some((q) => (q.key === activeQuestion) && q.active)) {
        const leafletLayer = getLeafletLayer(key);
        if (leafletLayer instanceof L.Layer) map.addLayer(leafletLayer);
      }
    });

    return () => {
      layers.forEach(el => {
        if (el.leafletLayer instanceof L.Layer) map.removeLayer(el.leafletLayer);
      });
    };
  }, [map, layers, activeQuestion, getLeafletLayer]);

  // Render Legend Control on small displays.
  return (
    <>
      <Control position='topright'>
        <LegendDrawerButton />
      </Control>
      { [...layers.values()].some((layer) => layer.questions.some((q) => q.key === activeQuestion)) ? null : (
        <Center style={{
          position: 'absolute',
          margin: 'auto',
          left: '0',
          top: '0',
          width: '100%',
          height: '100%',
          zIndex: '9000',
          backgroundColor: 'rgba(20,20,20,0.4)'
        }}>
          <Heading
            size='2xl'
            color="#FFF"
            textShadow="0 0 3px #222"
          >
            Coming Soon
          </Heading>
        </Center>
      )}
    </>
  );
}
export default MapData;