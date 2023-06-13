import produce, { enableMapSet } from 'immer';
import { create }  from 'zustand';

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