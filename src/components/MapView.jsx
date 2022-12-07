import React from "react";
import { latLng } from "leaflet";
import { MapContainer } from "react-leaflet";

export const DEFAULT_CENTER = latLng([48.46557, -123.314736]);
export const DEFAULT_ZOOM = 12;

export default function MapView(props) {
  return (
    <MapContainer
      ref={props.mapRef}
      center={props.center}
      zoom={props.zoom}
      scrollWheelZoom={true}
      style={props.style}
      closePopupOnClick={false}
    >
      {props.children}
    </MapContainer>
  );
}