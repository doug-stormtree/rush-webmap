import produce, { enableMapSet } from 'immer';
import create from 'zustand';

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
    q.mapData.forEach((layer, index) => {
      draft.set(qKey + index, { active: true, question: qKey, ...layer });
    });
  });
});

export const useMapLayerStore = create((set) => ({
  layers: layerMap,
  filterQuestion: (question) =>
    set(
      produce((state) => {
        state.layers = state.layers.forEach((layer) => {
          if (layer.question !== question) layer.active = false;
        })
      })
    ),
  setLayerState: (layerId, active) =>
    set(
      produce((state) => {
        state.layers.get(layerId).active = active;
      })
    ),
}))