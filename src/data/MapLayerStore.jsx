import { create } from 'zustand';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { ogmIconLink } from './LeafletStyleHelpers';

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
  Error: -1,
}

const layerDataInitial = new Map()
for (const key of layerMap.keys()) {
  const leafletLayer = layerMap.get(key).leafletLayer
  layerDataInitial.set(key, {
    status: leafletLayer === undefined ? LAYER_STATUS.Undefined : LAYER_STATUS.Ready,
    data: leafletLayer
  })
}

export const useMapLayerDataStore = create((set, get) => ({
  layerDataMap: layerDataInitial,
  
  areLayersLoading: () => [...get().layerDataMap.values()]
  .some( l => l.status === LAYER_STATUS.Loading ),
  
  getLayerData: (layerId) => {
    const layerAttr = layerMap.get(layerId)
    const layerData = get().layerDataMap.get(layerId)
    if (layerData.status === LAYER_STATUS.Ready) return layerData.data
    if (layerData.status === LAYER_STATUS.Undefined) {
      get()._setLayer(layerId, LAYER_STATUS.Loading, undefined);
      fetch(layerAttr.data)
      .then((response) => response.json())
      .then((json) => {
        const mapLayer = L.geoJSON(
          json,
          layerAttr.options,
        )
        if (layerAttr.cluster) {
          try {
            const clusterLayer = L.markerClusterGroup(layerAttr?.clusterOpts).addLayers(mapLayer)
            get()._setLayer(layerId, LAYER_STATUS.Ready, clusterLayer);
          } catch (error) {
            get()._setLayer(layerId, LAYER_STATUS.Ready, mapLayer);
          }
        } else {
          get()._setLayer(layerId, LAYER_STATUS.Ready, mapLayer);
        }
      });
    }
    return undefined;
  },
  
  _setLayer: (layerId, layerStatus, layerData) =>
    set((state) => {
      const newState = {
        layerDataMap: new Map(state.layerDataMap),
      }
      newState.layerDataMap.set(layerId, {
        status: layerStatus,
        data: layerData,
      })
      return newState
    }),
}))

// Create layer styleMap store
const layerStyleMapInitial = new Map();
[...layerMap.entries()].forEach(([key, val]) => {
  val.styleMap === undefined
    ? layerStyleMapInitial.set(key, new Map())
    : layerStyleMapInitial.set(key, val.styleMap)
})
export const useMapLayerStyleStore = create((set, get) => ({
  layerStyleMap: layerStyleMapInitial,
  
  // Layer Legend Style Map
  _setLayerStyleMap: (layerId, styleMap) =>
    set((state) => {
      const newState = { layerStyleMap: new Map(state.layerStyleMap) }
      newState.layerStyleMap.set(layerId, styleMap)
      return newState
    }),
    
  getLayerStyleMap: (layerId) => {
    let styleMap = get().layerStyleMap.get(layerId)
    const ogmMapId = layerMap.get(layerId).ogmMapId

    if (styleMap.size === 0 && ogmMapId !== undefined) {
      // Fetch OGM Icons
      fetch(`https://new.opengreenmap.org/api-v1/icons?withoutAttributes=true&edit=false&map=${ogmMapId}`)
        .then((response) => response.json())
        .then((json) => {
          get()._setLayerStyleMap(layerId, new Map(
            json.icons
              .sort((a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
              .map((s) => {
                return [s._id, { src: ogmIconLink(s._id), legendText: s.name}]
              })
            ))
        })
      // Return loading state
      styleMap = new Map([['',{legendText:'Loading...'}]])
      get()._setLayerStyleMap(layerId, styleMap)
    }

    return styleMap
  }
}));