import React from "react";
import { latLng } from "leaflet";
import { MapContainer, useMapEvents, ZoomControl } from "react-leaflet";
import { MobileMenuState } from "../App";
import { useActiveQuestionStore, questionActions } from '../data/QuestionStore';

export const DEFAULT_CENTER = latLng([48.46557, -123.314736]);
export const DEFAULT_ZOOM = 12;

export default function MapView({
  mapRef,
  zoom,
  center,
  style,
  isMobile,
  mobileMenuState,
  setMobileMenuState,
  children,
}) {
  const dispatch = useActiveQuestionStore(state => state.dispatch);

  const collapseMobileMenu = () => {
    // Mobile state
    if (mobileMenuState === MobileMenuState.EXPANDED_HEADER){
      // collapse mobile menu dock if the map is clicked while it's expanded
      setMobileMenuState(MobileMenuState.COLLAPSED_HEADER);
    }
    // Desktop state
    // collapse desktop menus when map is clicked
    dispatch({ focus: questionActions.closeExpandedOnly })
  };

  const CustomMapHooks = () => {
    useMapEvents({
      click: collapseMobileMenu,
      dragstart: collapseMobileMenu,
    })
    return null;
  }

  return (
    <MapContainer
      ref={mapRef}
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      style={style}
      closePopupOnClick={false}
      zoomControl={false}
      maxZoom={20}
    >
      {isMobile ? null : <ZoomControl prepend position='bottomright' />}
      <CustomMapHooks/>
      {children}
    </MapContainer>
  );
}