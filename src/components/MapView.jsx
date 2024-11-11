import React from "react";
import { latLng } from "leaflet";
import { MapContainer, useMapEvents, ZoomControl } from "react-leaflet";
import { MobileMenuState } from "../App";

export const DEFAULT_CENTER = latLng([48.46557, -123.314736]);
export const DEFAULT_ZOOM = 12;

export default function MapView(props) {

  const collapseMobileMenu = () => {
    if (props.mobileMenuState === MobileMenuState.EXPANDED_HEADER){
      // collapse mobile menu dock if the map is clicked while it's expanded
      props.setMobileMenuState(MobileMenuState.COLLAPSED_HEADER);
    }
  };

  const CustomMapHooks = () => {
    const map = useMapEvents({
      click: collapseMobileMenu,
      dragstart: collapseMobileMenu,
    })
    return null;
  }

  return (
    <MapContainer
      ref={props.mapRef}
      center={props.center}
      zoom={props.zoom}
      scrollWheelZoom={true}
      style={props.style}
      closePopupOnClick={false}
      zoomControl={false}
      maxZoom={20}
    >
      <ZoomControl prepend position='bottomright' />
      <CustomMapHooks/>
      {props.children}
    </MapContainer>
  );
}