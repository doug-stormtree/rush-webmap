import React, { useEffect } from 'react';
import ReactDOMServer from "react-dom/server";
import { HStack } from '@chakra-ui/react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';

export const MapData = ({ question }) => {
  const map = useMap();

  useEffect(() => {
    const bmSat = L.tileLayer("http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");
    map.addLayer(bmSat);
    const legend = L.control.layers(
      { "Satellite": bmSat },
      undefined,
      { collapsed: false }
      ).addTo(map);

    const layers = question.mapData.map((data) => {
      var layer = null;
      var patch = null;
      if (data.format === 'point') {
        layer = L.geoJSON(data.data, {
          pointToLayer: (f,l) => L.marker(l, {
            icon: featureIconByProperty(f, data.property, data.propertyMap)
          })
        });
        patch = pointLegendPatch(data);
      } else if (data.format === 'polygon') {
        layer =  L.geoJSON(data.data, data.style);
        patch = polygonLegendPatch(data);
      }
      return { patch: patch, layer: layer };
    })
    layers.forEach(el => {
      map.addLayer(el.layer)
      legend.addOverlay(el.layer, el.patch)
    });
    return () => {
      layers.forEach(el => map.removeLayer(el.layer));
      map.removeControl(legend);
    };
  }, [map, question])

  // component renders no elements
  return null;
}

const featureIconByProperty = (feature, property, propertyMap) => {
  if (property in feature.properties) {
    const icon = propertyMap[feature.properties[property]];

    return L.divIcon({
      className: "",
      iconSize: [32, 32],
      iconAnchor: [12, 12],
      html: ReactDOMServer.renderToString(icon),
    });
  }
  return;
}

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
            style={{ width: '2em', margin: '4px 0.5em 4px 1.5em', display: 'inline-block' }}
          >{data.propertyMap[key]}</div>
          <div style={{ textAlign: 'center', display: 'inline-block' }}>{key}</div>
        </div>
      )}
    </>
  )
}