import React from "react";
import { latLng } from "leaflet";
import { MapContainer, useMapEvents, ZoomControl } from "react-leaflet";
import { MobileMenuState } from "../App";
import { useActiveQuestionStore, questionActions } from '../data/QuestionStore';

export const DEFAULT_CENTER = latLng([48.46557, -123.314736]);
export const DEFAULT_ZOOM = 12;

export default function MapView(props) {
  const dispatch = useActiveQuestionStore(state => state.dispatch);

  const collapseMobileMenu = () => {
    // Mobile state
    if (props.mobileMenuState === MobileMenuState.EXPANDED_HEADER){
      // collapse mobile menu dock if the map is clicked while it's expanded
      props.setMobileMenuState(MobileMenuState.COLLAPSED_HEADER);
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