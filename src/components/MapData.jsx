import React, { useEffect } from 'react';
import { useBreakpointValue, Center, Heading } from '@chakra-ui/react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { LegendDrawerButton } from './Legend';
import { useMapLayerStore } from '../data/Questions';

export const MapData = ({ question }) => {
  const map = useMap();
  const layers = useMapLayerStore((state) => state.layers);
  const getLeafletLayer = useMapLayerStore((state) => state.getLeafletLayer);

  // Effect adds all active layers to the map, fetching their data if necessary.
  useEffect(() => {
    if (map === undefined) return;
    
    layers.forEach((el, key) => {
      if (el.questions.some((q) => (q.key === question) && q.active)) {
        const leafletLayer = getLeafletLayer(key);
        if (leafletLayer instanceof L.Layer) map.addLayer(leafletLayer);
      }
    });

    return () => {
      layers.forEach(el => {
        if (el.leafletLayer instanceof L.Layer) map.removeLayer(el.leafletLayer);
      });
    };
  }, [map, layers, question, getLeafletLayer]);

  const smallDisplay = useBreakpointValue({
    xl: false,
    base: true,
  }, {ssr:false, fallback:true});

  // Render Legend Control on small displays.
  return (
    <>
      <Control position='topright'>
        {smallDisplay ? <LegendDrawerButton activeQuestion={question} /> : null}
      </Control>
      { [...layers.values()].some((layer) => layer.questions.some((q) => q.key === question)) ? null : (
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