import { createRoot } from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import * as L from 'leaflet';
import { VStack, Heading, Text, Link, Image } from "@chakra-ui/react";
import sanitizeHtml from 'sanitize-html';

// mapData to Leaflet helper function
export const pointToIconByProperty = (feature, latlng, property, propertyMap) => {
  if (property in feature.properties) {
    const icon = propertyMap.get(feature.properties[property]);
    return pointToIcon(latlng, icon ?? {fill:'#000',stroke:'#000',icon:null});
  }
  return L.marker(latlng);
}

export const MapMarker = (props) => {
  const padding = 3;
  return (
    <div style={{
      margin: props.margin ?? 'auto',
      padding: (padding) + 'px',
      borderRadius: '100%',
      backgroundColor: props.bgColor,
      fill: props.fill,
      stroke: props.stroke,
      width: (props.size) + 'px',
      height: (props.size) + 'px',
      fontSize: (props.size - padding - padding) + 'px',
    }}>{props.icon}</div>
  )
}

export const pointToIcon = (latlng, iconStyle, size = 32, backgroundColor = 'rgba(227,232,240,0.8)') => {
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

export const geoDateToLocaleString = (dateString) => {
  const dateParts = dateString.split('-');
  dateParts[1] = dateParts[1] - 1; // 0 indexing on months
  const d = new Date(...dateParts);
  return d.toLocaleDateString(undefined, { dateStyle: 'full' });
}

// Leaflet Popup Content
export const mapPopupContent = (title, desc, link = null, linkText = null, imageURL = null) => {
  if (!title && !desc) return;
  var div = document.createElement('div');
  const root = createRoot(div);
  root.render(<MapPopup title={title} desc={desc} link={link} linkText={linkText} imageURL={imageURL} />);
  return div;
}

const MapPopup = ({title, desc, link, linkText, imageURL}) => {
  const descItems = Array.isArray(desc) ? desc : [ desc ]
  return (
    <VStack align='flex-start'>
      <Heading size='sm' fontSize='20px'><b>{title}</b></Heading>
      { descItems.map((desc, index) => 
        <Text key={'desc'+index} fontSize='16px'>
          {sanitizeHtml(desc, {allowedAttributes: {}, allowedTags: []})}
        </Text>
      )}
      {imageURL ? <Image src={imageURL} alt={title}/> : null}
      {link ? (
        <Link 
          href={link}
          isExternal
          width='100%'
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          fontSize='16px'
        >
          {linkText ?? link}
        </Link>
      ) : null}
    </VStack>
  )
}

// Open Green Map
export const ogmIconLink = (id) =>
  `https://new.opengreenmap.org/api-v1/icons/${id}/image/value`

// Mouseover setStyle
export const setStyleIfSupported = (e, style) => {
  if (e && e.target && 'setStyle' in e.target) e.target.setStyle(style)
}