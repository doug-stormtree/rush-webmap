import { createRoot } from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import * as L from 'leaflet';
import { VStack, Heading, Text, Link, Image } from "@chakra-ui/react";

// mapData to Leaflet helper function
export const pointToIconByProperty = (feature, latlng, property, propertyMap) => {
  if (property in feature.properties) {
    const icon = propertyMap.get(feature.properties[property]);
    return pointToIcon(latlng, icon);
  }
  return L.marker(latlng);
}

export const pointToIcon = (latlng, {fill, stroke, icon}) => {
  const marker = (
    <div style={{
      borderRadius: '100%',
      backgroundColor: 'rgba(227,232,240,0.8)',
      fill: fill,
      stroke: stroke,
      padding: '3px',
      margin: 'auto',
      width: '32px',
      height: '32px',
    }}>{icon}</div>
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

export const getStyleMapProperty = (property, key, styleMap) => {
  if (styleMap.has(key)) {
    return styleMap.get(key)[property];
  } else {
    console.log(`getStyleMapColor: styleMap has no key '${key}'`);
    return '#FFF';
  }
}

export const getStyleMapKeyFromContinuousValue = (value, styleMap) => {
  return [...styleMap.keys()].sort((a,b)=>a-b).find(e => e >= value);
};

// Leaflet Popup Content
export const mapPopupContent = (title, desc, link = null, linkText = null, imageURL = null) => {
  if (!title && !desc) return;
  var div = document.createElement('div');
  const root = createRoot(div);
  root.render(<MapPopup title={title} desc={desc} link={link} linkText={linkText} imageURL={imageURL} />);
  return div;
}

const MapPopup = ({title, desc, link, linkText, imageURL}) => {
  return (
    <VStack>
      <Heading size='xs'><b>{title}</b></Heading>
      <Text>{desc}</Text>
      {imageURL ? <Image src={imageURL} alt={title}/> : null}
      {link ? <Link href={link} isExternal>{linkText ?? link}</Link> : null}
    </VStack>
  )
}