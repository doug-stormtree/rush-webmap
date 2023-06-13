import produce, { enableMapSet } from 'immer';
import { create }  from 'zustand';

// Enable Immer MapSet
enableMapSet();

const questionMap = new Map([
  ['beat-the-heat', require('./BeatTheHeat').default],
  ['circular-economy', require('./CircularEcon').default],
  ['culture-compass', require('./Culture').default],
  ['eat-local', require('./EatLocal').default],
  ['help-with-change', require('./HelpWithChange').default],
  ['light-footprint', require('./Footprint').default],
  ['local-to-global', require('./LocalToGlobal').default],
  ['neighbourhood-to-naturehood', require('./Naturehood').default],
  ['power-this-place', require('./Power').default],
  ['protect-from-flooding', require('./Flooding').default],
  ['protect-the-coast', require('./Coastal').default],
  ['sense-of-peace', require('./SenseOfPeace').default],
  ['wood-wide-web', require('./WoodWideWeb').default],
  ['development', require('./Development').default],
]);
export default questionMap;

// Import all layer modules
const layerCache = {};
function importAll(r) {
  r.keys().forEach((key) => (layerCache[key] = r(key).default))
}
importAll(require.context('./layers/', true, /\.jsx$/));

const layerMap = produce(new Map(), draft => {
  Object.keys(layerCache).forEach((key) => {
    draft.set(key, {
      active: false,
      ...layerCache[key]
    })
  });
});

export const useMapLayerStore = create((set, get) => ({
  layers: layerMap,
  setQuestionLayersActive: (question) =>
    set(
      produce((state) => {
        state.layers.forEach((layer, key) => {
          layer.active = (
            layer.questions?.some((q) => q.key === question) ?? false
          );
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
  setLayerData: (layerId, leafletLayer) =>
    set(
      produce((state) => {
        state.layers.get(layerId).layer = leafletLayer;
      })
    ),
  layersLoading: () => [...get().layers].some((l) => l[1].layer === 'loading')
}));