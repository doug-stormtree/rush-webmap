import ReactDOMServer from "react-dom/server";
import * as L from 'leaflet';

// mapData to Leaflet helper function
export const pointToIconByProperty = (feature, latlng, property, propertyMap) => {
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

    return L.marker(latlng, {
      icon: L.divIcon({
        className: "",
        iconSize: [32, 32],
        iconAnchor: [12, 12],
        html: ReactDOMServer.renderToString(marker),
      })
    });
  }
  return L.marker(latlng);
}