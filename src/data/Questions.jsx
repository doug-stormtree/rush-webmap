import produce, { enableMapSet } from 'immer';
import create from 'zustand';
import * as L from 'leaflet';

import BeatTheHeat from './beattheheat/BeatTheHeat';
import EatLocal from './eatlocal/EatLocal';
import Naturehood from './naturehood/Naturehood';
import Coastal from './coastal/Coastal';
import Power from './power/Power';
import Footprint from './footprint/Footprint';
import Culture from './culture/Culture';
import Development from './development/Development';
import Flooding from './flooding/Flooding';
import CircularEcon from './circularecon/CircularEcon';

// Enable Immer MapSet
enableMapSet();

const questionMap = new Map([
  ['beattheheat', BeatTheHeat],
  ['eatlocal', EatLocal],
  ['naturehood', Naturehood],
  ['coastal', Coastal],
  ['power', Power],
  ['footprint', Footprint],
  ['culture', Culture],
  ['development', Development],
  ['flooding', Flooding],
  ['circularecon', CircularEcon],
]);
export default questionMap;

const layerMap = produce(new Map(), draft => {
  questionMap.forEach((q, qKey) => {
    q.mapData.forEach((mapDataLayer, index) => {
      draft.set(qKey + index,
        { 
          active: true,
          question: qKey,
          ...mapDataLayer,
          layer: L.geoJSON(
            mapDataLayer.data,
            mapDataLayer.options,
          ),
        });
    });
  });
});

export const useMapLayerStore = create((set) => ({
  layers: layerMap,
  setQuestionLayersActive: (question) =>
    set(
      produce((state) => {
        state.layers.forEach((layer, key) => {
          layer.active = (layer.question === question);
        })
      })
    ),
  setLayerActive: (layerId, active = true) =>
    set(
      produce((state) => {
        state.layers.get(layerId).active = active;
      })
    ),
  toggleLayerActive: (layerId) =>
    set(
      produce((state) => {
        const layer = state.layers.get(layerId);
        layer.active = !layer.active;
      })
    ),
}));

/*
      var mapLayer = null;
      var legendPatch = null;
      if (mapDataLayer.format === 'point') {
        mapLayer = L.geoJSON(mapDataLayer.data, {
          pointToLayer: (f,l) => L.marker(l, {
            icon: featureIconByProperty(f, mapDataLayer.property, mapDataLayer.propertyMap)
          })
        });
        legendPatch = pointLegendPatch(mapDataLayer);
      } else if (mapDataLayer.format === 'polygon') {
        mapLayer = L.geoJSON(mapDataLayer.data, mapDataLayer.style);
        legendPatch = polygonLegendPatch(mapDataLayer);
      }
*/