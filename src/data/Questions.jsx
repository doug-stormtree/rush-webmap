import produce, { enableMapSet } from 'immer';
import { create }  from 'zustand';
import { geoJSON } from 'leaflet';

// Constant value for loading state
const LOADING = 'loading';

// Enable Immer MapSet
enableMapSet();

// Import all question modules
var questions = [];
const questionContext = require.context('./questions/', false, /\.jsx$/);
questionContext.keys().forEach((qcKey) => {
  const {key, ...rest} = questionContext(qcKey).default;
  questions.push([key, rest]);
});
questions = questions.sort();
questions.push(...questions.splice(questions.findIndex(v => v[0] === 'development'), 1));
const questionMap = new Map(questions);
questions = undefined;
export default questionMap;

// Import all layer modules
const layerCache = {};
function importAll(r) {
  r.keys().forEach((key) => (layerCache[key] = r(key).default))
}
importAll(require.context('./layers/', true, /\.jsx$/));

// Create mapLayerStore
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
  getLayers: (question, activeOnly = false) => {
    const layerEntries = [...get().layers.entries()];
    return (question || activeOnly) 
    ? layerEntries.filter((l) => 
    (!question || l.questions.some((q) => q.key === question)) && 
    (!activeOnly || l.active))
    : layerEntries
  },
  getLayerIds: (question, activeOnly = false) => get().getLayers(question, activeOnly).map((l) => l[0]),
  // Layer Active Flag State
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
  setLayerActive: (layerId, question, active = true) =>
    set(
      produce((state) => {
        state.layers.get(layerId).questions.forEach((q) => {
          if (q.key === question) q.active = active;
        });
      })
    ),
  toggleLayerActive: (layerId, question) =>
    set(
      produce((state) => {
        const layer = state.layers.get(layerId);
        const layerQs = layer.questions.filter((q) => q.key === question);
        layerQs.forEach((q) => q.active = !layerQs.some((q) => q.active));
      })
    ),
  // Layer Leaflet Object
  setLayerData: (layerId, leafletLayer) =>
    set(
      produce((state) => {
        state.layers.get(layerId).leafletLayer = leafletLayer;
      })
    ),
  layersLoading: () => get().layers.values().some(
    (l) => l.leafletLayer === LOADING
  ),
  getLeafletLayer: (layerId) => {
    const layer = get().layers.get(layerId);
    if (layer.leafletLayer === undefined) {
      get().setLayerData(layerId, LOADING);
      fetch(layer.data)
        .then((response) => response.json())
        .then((json) => {
          const mapLayer = geoJSON(
            json,
            layer.options,
          );
          get().setLayerData(layerId, mapLayer);
        });
    }
    return layer.leafletLayer;
  }
}));