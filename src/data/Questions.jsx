import produce, { enableMapSet } from 'immer';
import create from 'zustand';
import ReactDOMServer from "react-dom/server";
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

// mapData to Leaflet helper function
const featureIconByProperty = (feature, property, propertyMap) => {
  if (property in feature.properties) {
    const icon = propertyMap[feature.properties[property]];
    const marker = (
      <div style={{
        borderRadius: '100%',
        backgroundColor: 'rgba(227,232,240,0.8)',
        fill: icon?.fill,
        stroke: icon?.stroke,
        padding: '3px',
        width: '32px',
        height: '32px',
      }}>{icon?.icon}</div>
    )

    return L.divIcon({
      className: "",
      iconSize: [32, 32],
      iconAnchor: [12, 12],
      html: ReactDOMServer.renderToString(marker),
    });
  }
  return;
}

// Legend Patch helper functions
const polygonLegendPatch = (data) => {
  return ReactDOMServer.renderToString(
    <>
      <div style={{
        width: '1.5em',
        height: '1em',
        background: data.style.fillColor,
        display: 'inline-block',
        marginRight: '0.5em',
        marginTop: '2px'
      }}>
      </div>
      <div style={{ display: 'inline-block' }}>{data.title}</div>
    </>
  )
}

const pointLegendPatch = (data) => {
  return ReactDOMServer.renderToString(
    <>
      <div style={{ display: 'inline-block' }}>{data.title}</div>
      {Object.keys(data.propertyMap).map(key =>
        <div key={key} style={{display:'flex', alignItems:'center' }}>
          <div
            style={{
              width: '2em',
              margin: '4px 0.5em 4px 1.5em',
              display: 'inline-block',
              fill: data.propertyMap[key]?.fill,
              stroke: data.propertyMap[key]?.stroke,
            }}
          >{data.propertyMap[key]?.icon}</div>
          <div style={{ textAlign: 'center', display: 'inline-block' }}>
            {data.propertyMap[key]?.legendText ?? key}
          </div>
        </div>
      )}
    </>
  )
}

const layerMap = produce(new Map(), draft => {
  questionMap.forEach((q, qKey) => {
    q.mapData.forEach((mapDataLayer, index) => {
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
        mapLayer = L.geoJSON(mapDataLayer.data, {style: mapDataLayer.style});
        legendPatch = polygonLegendPatch(mapDataLayer);
      }
      draft.set(qKey + index,
        { active: true,
          question: qKey,
          ...mapDataLayer,
          layer: mapLayer,
          patch: legendPatch,
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