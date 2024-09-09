import produce, { enableMapSet } from 'immer';
import { create } from 'zustand';
import L from 'leaflet';
import 'leaflet.markercluster';
import { ogmIconLink } from './LeafletStyleHelpers';

// Enable Immer MapSet
enableMapSet();

// Import all layer modules
export const layerMap = new Map();
function importAll(r) {
  r.keys().forEach((key) => {
    const trimKey = key.substr(2, key.length - 6)
    layerMap.set(trimKey, r(key).default)
  })
}
importAll(require.context('./layers/', true, /\.jsx$/));

// Create leaflet layer data store
export const LAYER_STATUS = {
  Undefined: 0,
  Loading: 1,
  Ready: 2,
}

const layerDataMap = produce(new Map(), draft => {
  for (const key of layerMap.keys()) {
    const leafletLayer = layerMap.get(key).leafletLayer
    draft.set(key, {
      status: leafletLayer === undefined ? LAYER_STATUS.Undefined : LAYER_STATUS.Ready,
      data: leafletLayer
    })
  }
});

const layerStyleMap = produce(new Map(), draft => {
  [...layerMap.entries()].forEach(([key, val]) => {
    draft.set(key, val.styleMap)
  })
});

export const useMapLayerDataStore = create((set, get) => ({
  layerDataMap: layerDataMap,

  areLayersLoading: () => [...get().layerDataMap.values()]
    .some( l => l.status === LAYER_STATUS.Loading ),
  
  getLayerData: (layerId) => {
    const layerAttr = layerMap.get(layerId)
    const layerData = get().layerDataMap.get(layerId)
    if (layerData.status === LAYER_STATUS.Ready) return layerData.data
    if (layerData.status === LAYER_STATUS.Undefined) {
      get()._setLayerStatus(layerId, LAYER_STATUS.Loading);
      fetch(layerAttr.data)
        .then((response) => response.json())
        .then((json) => {
          const mapLayer = L.geoJSON(
                json,
                layerAttr.options,
              )
          if (layerAttr.cluster) {
            const clusterLayer = L.markerClusterGroup(layerAttr?.clusterOpts).addLayers(mapLayer)
            get()._setLayerData(layerId, clusterLayer);
          } else {
            get()._setLayerData(layerId, mapLayer);
          }
          get()._setLayerStatus(layerId, LAYER_STATUS.Ready);
        });
    }
    return undefined;
  },
  
  _setLayerStatus: (layerId, layerStatus) =>
    set(
      produce((state) => {
        state.layerDataMap.get(layerId).status = layerStatus;
      })
    ),
  _setLayerData: (layerId, layerData) =>
    set(
      produce((state) => {
        state.layerDataMap.get(layerId).data = layerData;
      })
    ),

  layerStyleMap: layerStyleMap,

  // Layer Legend Style Map
  _setLayerStyleMap: (layerId, styleMap) =>
    set(
      produce((state) => {
        state.layerStyleMap.set(layerId, styleMap);
      })
    ),
  
  getLayerStyleMap: (layerId) => {
    const styleMap = get().layerStyleMap.get(layerId)
    const ogmMapId = layerMap.get(layerId).ogmMapId
    if (styleMap === undefined) {
      if (ogmMapId === undefined) {
        const newMap = new Map([])
        get()._setLayerStyleMap(layerId, newMap)
        return newMap
      }
      // Fetch OGM Icons
      fetch(`https://new.opengreenmap.org/api-v1/icons?withoutAttributes=true&edit=false&map=${ogmMapId}`)
        .then((response) => response.json())
        .then((json) => {
          get()._setLayerStyleMap(layerId, new Map(json.icons
              .sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
              .map((s) => {
                return [s._id, { src: ogmIconLink(s._id), legendText: s.name}]
              })
            ))
        })
      // Return loading state
      const loadingMap = new Map([['',{legendText:'Loading...'}]])
      get()._setLayerStyleMap(layerId, loadingMap)
      return loadingMap
    }
    return styleMap;
  }
}))