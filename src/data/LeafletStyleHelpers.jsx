import { createRoot } from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import * as L from 'leaflet';
import { VStack, Heading, Text } from "@chakra-ui/react";

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

// Leaflet Popup Content
export const mapPopupContent = (title, desc) => {
  if (!title && !desc) return;
  var div = document.createElement('div');
  const root = createRoot(div);
  root.render(<MapPopup title={title} desc={desc} />);
  return div;
}

const MapPopup = ({title, desc}) => {
  return (
    <VStack>
      <Heading size='xs'><b>{title}</b></Heading>
      <Text>{desc}</Text>
    </VStack>
  )
}