import React from "react";
import { latLng } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

export const DEFAULT_CENTER = latLng([48.46557, -123.314736]);
export const DEFAULT_ZOOM = 12;

export default function MapView(props) {
  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      scrollWheelZoom={true}
      whenCreated={props.setMap}
      style={props.style}
      closePopupOnClick={false}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.children}
    </MapContainer>
  );
}