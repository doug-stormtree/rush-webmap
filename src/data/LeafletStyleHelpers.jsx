import { createRoot } from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import * as L from 'leaflet';
import { VStack, Heading, Text, Link, Image } from "@chakra-ui/react";

// mapData to Leaflet helper function
export const pointToIconByProperty = (feature, latlng, property, propertyMap) => {
  if (property in feature.properties) {
    const icon = propertyMap.get(feature.properties[property]);
    return pointToIcon(latlng, icon ?? {fill:'#000',stroke:'#000',icon:null});
  }
  return L.marker(latlng);
}

export const MapMarker = (props) => {
  return (
    <div style={{
      margin: props.margin ?? 'auto',
      padding: '3px',
      borderRadius: '100%',
      backgroundColor: props.bgColor ?? 'rgba(227,232,240,0.8)',
      fill: props.fill,
      stroke: props.stroke,
      width: (props.size) + 'px',
      height: (props.size) + 'px',
    }}>{props.icon}</div>
  )
}

export const pointToIcon = (latlng, iconStyle, size = 32, backgroundColor) => {
  return L.marker(latlng, {
    icon: L.divIcon({
      className: "",
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      html: ReactDOMServer.renderToString(<MapMarker {...iconStyle} size={size} bgColor={backgroundColor} />),
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