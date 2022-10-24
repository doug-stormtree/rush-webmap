import React from 'react';
import { divIcon, marker } from 'leaflet';
import ReactDOMServer from "react-dom/server";
import { ReactComponent as CommunityCtrIcon } from '../svg/cc.svg';
import { ReactComponent as LibraryIcon } from '../svg/lib.svg';
import * as HeatDomes from '../data/HeatDomes.json';
import * as AC_Buildings from '../data/AC_Buildings.json';
import { GeoJSON } from 'react-leaflet/GeoJSON';

export const Questions = {
  Blank: {
    title: "",
    description: "",
    story: "",
    tips: "",
    mapLayers: (<></>),
  },
  BeatTheHeat: {
    title: "How can I beat the heat?",
    description: "",
    story: [
      "The Sensitive Ecosystems Inventory (SEI) of East Vancouver Island project has been responsible for tracking \
      sensitive ecosystems for many regions within the Capital Regional District (CRD). Their data is what you see \
      on the map. Their research identifies different sensitive ecosystems and allows us to understand better how \
      these ecosystems are at risk.",
      "Some of the most significant factors responsible for the degradation and ecosystem damage are human usage and \
      the introduction of invasive species. These ecosystems are shrinking, often due to development or land use \
      changes. The areas on this map do not include private lands, provincial & federal lands, or Indigenous \
      reservations. It is important to understand that each of these ecosystems plays a crucial role in the \
      ecological well-being of this area. Damage to one sensitive ecosystem will affect another. These ecosystems \
      in this area of the coast are known for their biodiversity.",
      "Researchers in Japan found that after “forest bathing,” participants had been breathing in phytoncides \
      (essential wood oils) that had antimicrobial properties. Participants had increased NK (natural killer) \
      cells, responsible for the immune response that kills tumours and viruses. Another study sprayed cedar \
      essential oils in a hotel room before guests stayed, which had the same effect on their immune systems. \
      So if you need an excuse to ditch school and go to the beach or buy more house plants, do it! It's good for \
      your health!"
    ],
    tips: "",
    mapLayers: (
      <>
        <GeoJSON
          data={AC_Buildings}
          pointToLayer={(feature, latlng) => {
            const icon = feature.properties.Type === "Library" ? (
              <LibraryIcon />
            ) : (
              <CommunityCtrIcon />
            );
        
            return marker(latlng, {
              icon: divIcon({
                className: "",
                iconSize: [40, 40],
                iconAnchor: [24, 24],
                html: ReactDOMServer.renderToString(icon),
              })
            });
          }}
        />
        <GeoJSON
          data={HeatDomes}
          style={{
            opacity: 0.5,
            color: 'rgba(189,17,20,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fill: true,
            fillOpacity: 0.7,
            fillColor: 'rgba(189,17,20,1.0)',
            interactive: true
          }}
        />
      </>
    ),
  },
}

export const MapData = ({ question }) => {
  if (question && question.hasOwnProperty('mapLayers')) {
    return question.mapLayers;
  } else return (<></>);
}