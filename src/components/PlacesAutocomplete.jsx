import React, { useEffect, useRef, useState } from 'react';
import { Input, useBreakpointValue } from '@chakra-ui/react';
import { latLng, latLngBounds, marker } from 'leaflet';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { Loader } from '@googlemaps/js-api-loader';
import { mapPopupContent } from '../data/LeafletStyleHelpers';

const leafletLatLngFromGoogle = (googleLatLng) => {
  return latLng(googleLatLng.lat(), googleLatLng.lng())
}

const leafletBoundsFromGoogle = (googleLatLngBounds) => {
  return latLngBounds(
    leafletLatLngFromGoogle(googleLatLngBounds.getSouthWest()),
    leafletLatLngFromGoogle(googleLatLngBounds.getNorthEast())
  )
}

export const PlacesAutocomplete = () => {
  const map = useMap()
  const inputRef = useRef(null)
  const [ autocomplete, setAutocomplete ] = useState(null);
  
  useEffect(() => {
    let ignore = false
    if (inputRef === null) return
    if (autocomplete === null) {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_PLACES_KEY,
        version: 'weekly',
      })

      loader
        .importLibrary('places')
        .then(({ Autocomplete }) => {
          const opts = {
            fields: ['place_id', 'name', 'geometry' ],
            componentRestrictions: { country: 'ca' }
          }
          const autocomplete = new Autocomplete(inputRef.current, opts)
          if (ignore) return
          setAutocomplete(autocomplete)
        })
    }

    return () => {
      ignore = true
    }
  }, [ autocomplete, inputRef ])

  useEffect(() => {
    if (map === undefined) return
    if (autocomplete === null) return

    // Add google listener to fly map to marker when place selected
    let placeMarker = null
    const onPlaceChanged = () => {
      const place = autocomplete.getPlace()
      if (place?.geometry.location) {
        // convert google location to leaflet
        const placeLatLng = leafletLatLngFromGoogle(place.geometry.location)
        
        // add a marker to the map
        placeMarker = marker(placeLatLng)
        placeMarker.bindPopup(mapPopupContent(
          place.name,
          ), {offset: [0,2]});
        map.addLayer(placeMarker)

        // fly the map to the ideal bounds, or to the location with default zoom
        if (place?.geometry.viewport) {
          map.flyToBounds(
            leafletBoundsFromGoogle(place.geometry.viewport),
            { maxZoom: 16 }
          )
        } else {
          map.flyTo(placeLatLng, 14)
        }
      }
    }
    autocomplete.addListener('place_changed', onPlaceChanged)

    // Add leaflet onmove listener to update autocomplete viewport restrictions
    const onMoveOrZoom = () => {
      const bounds = map.getBounds()
      autocomplete.setBounds({
        east: bounds.getEast(),
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        west: bounds.getWest(),
      })
    }
    map.on('moveend zoomend', onMoveOrZoom)

    // Set bounds once on load
    onMoveOrZoom()

    return () => {
      if (placeMarker) map.removeLayer(placeMarker)
      map.off('moveend zoomend', onMoveOrZoom)
    }
  }, [ autocomplete, map ])

  const placeholderText = useBreakpointValue({
    sm: 'Search for an address, business, or point of interest...',
    base: 'Search...',
  }, {ssr:false, fallback:true});

  const inputPos = useBreakpointValue({
    md: 'topleft',
    base: 'topright',
  }, {ssr:false, fallback:true});

  const inputWidth = useBreakpointValue({
    md: '500px',
    base: 'calc(100vw - 20px)',
  }, {ssr:false, fallback:true});
  
  return (
    <Control prepend position={inputPos}>
      <Input
        ref={inputRef}
        width={inputWidth}
        bgColor='gray.100'
        placeholder={placeholderText}
      />
    </Control>
  )
}