import React, { useEffect } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import { useMap } from 'react-leaflet';
import { SearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';

const provider = new OpenStreetMapProvider();

export default function LeafletControlGeocoder() {
  const searchStyle = useBreakpointValue({
    lg: 'bar',
    base: 'button'
  });
  const map = useMap();
  useEffect(() => {
    const searchControl = new SearchControl({
      provider: provider,
      style: searchStyle,
    });
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map, searchStyle]);

  return null;
}