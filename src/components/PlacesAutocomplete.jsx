import React, { useEffect, useState } from 'react';
import {  useBreakpointValue } from '@chakra-ui/react';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { mapPopupContent } from '../data/LeafletStyleHelpers';
import { SearchBox } from '@mapbox/search-js-react';
import { latLng, marker } from 'leaflet';

export const PlacesAutocomplete = () => {
  const map = useMap();
  const [placeMarker, setPlaceMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);

  useEffect(() => {
    if (map === undefined) return

    // Add leaflet onmove listener to update autocomplete viewport restrictions
    const onMoveOrZoom = () => {
      const center = map.getCenter()
      setMapCenter({lat: center.lat, lng: center.lng})
    }
    map.on('moveend zoomend', onMoveOrZoom)

    // Set bounds once on load
    onMoveOrZoom()

    return () => {
      if (placeMarker) map.removeLayer(placeMarker)
      map.off('moveend zoomend', onMoveOrZoom)
    }
  }, [ map, placeMarker, setMapCenter ])

  const placeholderText = useBreakpointValue({
    base: 'Search...',
    md: 'Search for an address, business, or point of interest...',
  }, {ssr:false, fallback:true});

  const inputWidth = useBreakpointValue({
    base: `calc(100vw - 8.5rem)`,
    md: '27rem',
  }, {ssr:false, fallback:true});

  const inputPosition = useBreakpointValue({
    base: 'topright',
    lg: 'topleft',
  }, {ssr:false, fallback:true});

  const onRetrieve = (res) => {
    const place = res.features[0];
    if (place?.geometry.coordinates) {
      // convert location to leaflet latlng
      const placeLatLng = latLng(
        place.geometry.coordinates[1],
        place.geometry.coordinates[0]
      )
      
      // add a marker to the map
      const placeMarker = marker(placeLatLng)
      placeMarker.bindPopup(mapPopupContent(
        place.properties.name,
        ), {offset: [0,2]});
      map.addLayer(placeMarker)
      map.flyTo(placeLatLng, 14)
      setPlaceMarker(placeMarker)
    }
  }
  
  return (
    <Control prepend position={inputPosition}>
      <SearchBox
        accessToken='pk.eyJ1IjoicnVzaGFkbWluIiwiYSI6ImNtYzJudWd6czBhNTkybHEzNHdpNGE1MTUifQ.T-8P_6hh3kai9tTzjtvcTQ'
        placeholder={placeholderText}
        onRetrieve={onRetrieve}
        options={{
          language: 'en',
          country: 'CA',
          proximity: mapCenter
        }}
        popoverOptions={{
          offset: 5
        }}
        theme={{
          cssText: `.Results {left: 0} .MapboxSearch {width: ${inputWidth}}`
        }}
      />
    </Control>
  )
}