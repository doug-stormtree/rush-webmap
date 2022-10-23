import React from 'react';
import { divIcon, marker } from 'leaflet';
import ReactDOMServer from "react-dom/server";
import { ReactComponent as CommunityCtrIcon } from '../svg/cc.svg';
import { ReactComponent as LibraryIcon } from '../svg/lib.svg';
import * as HeatDomes from '../data/HeatDomes.json';
import * as AC_Buildings from '../data/AC_Buildings.json';
import { GeoJSON } from 'react-leaflet/GeoJSON';

export const Question = {
  BeatTheHeat: 0
}

export const MapData = (props) => {
  const style_HeatDomes = {
    opacity: 0.5,
    color: 'rgba(189,17,20,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1.0,
    fill: true,
    fillOpacity: 0.7,
    fillColor: 'rgba(189,17,20,1.0)',
    interactive: true,
  }

  function point(feature, latlng){
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
  }

  switch (props.question) {
    case Question.BeatTheHeat:
      return (
        <>
          <GeoJSON
            data={AC_Buildings}
            pointToLayer={(a, b) => point(a, b)}
          />
          <GeoJSON
            data={HeatDomes}
            style={style_HeatDomes}
          />
        </>
      )
    default:
      return (<></>)
  }
}