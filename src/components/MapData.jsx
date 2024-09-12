import React, { useEffect } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { LegendDrawerButton } from './Legend';
import { useActiveQuestionStore } from '../data/QuestionStore';
import { useMapLayerDataStore } from '../data/MapLayerStore';

export const MapData = () => {
  const map = useMap();
  const activeQuestion = useActiveQuestionStore((state) => state.activeQuestion)
  const layers = useActiveQuestionStore((state) => state.activeLayers)
  const [layerDataMap, getLayerData] = useMapLayerDataStore((state) => [state.layerDataMap, state.getLayerData]);

  // Effect adds all active layers to the map, fetching their data if necessary.
  useEffect(() => {
    if (map === undefined) return;
    
    layers.forEach((layer) => {
      if (layer.active) {
        const leafletLayer = getLayerData(layer.key)
        if (leafletLayer instanceof L.Layer) map.addLayer(leafletLayer);
      }
    });

    return () => {
      [...layerDataMap.values()].forEach((layer) => {
        if (layer.data instanceof L.Layer) map.removeLayer(layer.data);
      })
    };
  }, [map, layers, activeQuestion, getLayerData, layerDataMap]);

  // Render Legend Control on small displays.
  return (
    <>
      <Control position='topright'>
        <LegendDrawerButton />
      </Control>
      { activeQuestion === undefined ||
        layers.length > 0
          ? null
          : (
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
            )
      }
    </>
  );
}
export default MapData;