import { createRoot } from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import * as L from 'leaflet';
import { VStack, Heading, Text, Link, Image } from "@chakra-ui/react";
import sanitizeHtml from 'sanitize-html';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// mapData to Leaflet helper function
export const pointToIconByProperty = (feature, latlng, property, propertyMap, size = 32, padding = 3) => {
  if (property in feature.properties) {
    const icon = propertyMap.get(feature.properties[property]);
    return pointToIcon(latlng, icon ?? {fill:'#000',stroke:'#000',icon:null}, size, padding);
  }
  return L.marker(latlng);
}

export const MapMarker = (props) => {
  return (
    <div style={{
      padding: (props.padding) + 'px',
      borderRadius: '100%',
      backgroundColor: props.bgColor,
      fill: props.fill,
      stroke: props.stroke,
      width: (props.size) + 'px',
      height: (props.size) + 'px',
      fontSize: (props.size - props.padding - props.padding) + 'px',
      border: props.border,
    }}>{props.icon}</div>
  )
}

export const pointToIcon = (latlng, iconStyle, size = 32, padding = 3, backgroundColor = 'rgba(227,232,240,0.8)') => {
  return L.marker(latlng, {
    icon: L.divIcon({
      className: "",
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      html: ReactDOMServer.renderToString(<MapMarker {...iconStyle} size={size} padding={padding} bgColor={backgroundColor} />),
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
export const mapPopupContent = (
  title,
  desc,
  link = null,
  linkText = null,
  imageURL = null,
  audioURL = null,
  audioText = null,
  warningText = null,
) => {
  if (!title && !desc) return;
  var div = document.createElement('div');
  const root = createRoot(div);
  root.render(
    <MapPopup
      title={title}
      desc={desc}
      link={link}
      linkText={linkText}
      imageURL={imageURL}
      audioURL={audioURL}
      audioText={audioText}
      warningText={warningText}
    />);
  return div;
}

const MapPopup = (
  {title, desc, link, linkText, imageURL, audioURL, audioText, warningText}
) => {
  const descItems = Array.isArray(desc) ? desc : [ desc ]
  const linkItems = Array.isArray(link) ? link : [ link ]
  const linkTextItems = Array.isArray(linkText) ? linkText : [ linkText ]
  const zipLinks = linkItems.map((link, index) => [link, linkTextItems[index]])

  return (
    <VStack align='flex-start' maxHeight='min(36vh, 300px)'>
      <Heading flex='none' size='sm' fontSize='20px'><b>{title}</b></Heading>
      {descItems.map((desc, index) => 
        <Text flex='none' key={'desc'+index} fontSize='16px'>
          {sanitizeHtml(desc, {allowedAttributes: {}, allowedTags: []})}
        </Text>
      )}
      {imageURL && (
        <a flex='none' href={link ?? imageURL ?? '#'} target='_blank' rel='noreferrer'>
          <Image src={imageURL} alt={title} />
        </a>
      )}
      {zipLinks.map(([link, linkText], index) => {
        const linkTextClean = sanitizeHtml(linkText, {allowedAttributes: {}, allowedTags: []}) 
        if (link !== null && link !== undefined) {
          return (
            <Link
              flex='none'
              key={link+index}
              href={link}
              isExternal
              width='100%'
              overflow='hidden'
              whiteSpace='nowrap'
              textOverflow='ellipsis'
              fontSize='16px'
            >
              {linkText ? linkTextClean : link}
            </Link>
          )
        } else {
          return (
            <Text flex='none' key={'link'+index} fontSize='16px'>
              { linkTextClean }
            </Text>
          )
        }
      })}
      {audioURL && (
        <AudioPlayer
          flex='none'
          src={audioURL}
          header={audioText}
          volume={0.5}
          preload='metadata'
          loop={true}
          showJumpControls={false}
          customControlsSection={['MAIN_CONTROLS','VOLUME_CONTROLS']}
          hasDefaultKeyBindings={false}
          layout='horizontal'
          style={{ width: '100%', minWidth: '400px' }}
        />
      )}
      {warningText && (
        <Text fontSize='0.75rem'>{warningText}</Text>
      )}
    </VStack>
  )
}

// Open Green Map
export const ogmIconLink = (id) =>
  `https://greenmap.org/api-v1/icons/${id}/image/value`

export const ogmFeaturesLink = (id) =>
  `https://greenmap.org/api-v1/features?format=geojson&edit=false&map=${id}`

// Mouseover setStyle
export const setStyleIfSupported = (e, style) => {
  if (e && e.target && 'setStyle' in e.target) e.target.setStyle(style)
}