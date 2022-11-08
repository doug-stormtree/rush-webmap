import React from "react";
import { latLng } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

export const DEFAULT_CENTER = latLng([48.46557, -123.314736]);
export const DEFAULT_ZOOM = 12;

export default function MapView(props) {
  return (
    <MapContainer
      ref={props.mapRef}
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      scrollWheelZoom={true}
      style={props.style}
      closePopupOnClick={false}
    >
      <TileLayer
        url="http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
      />
      {props.children}
    </MapContainer>
  );
}