import React, { useEffect, useState } from 'react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';

const basemap = L.tileLayer(
  "https://rush-basemap.dxdjohn.workers.dev/tile/{z}/{x}/{y}",
  {
    minZoom: 0,
    maxZoom: 22,
    updateWhenIdle: true,
    zIndex: 0
  }
)

const attrMap = new Map();
const ATTR_LOADING = 'Loading...'

const mapToBoundsZoomString = (t) => {
  const b = t.getBounds()
  const z = t.getZoom()
  return String(z).concat(
    '/',
    b.getNorth().toFixed(3),
    '/',
    b.getSouth().toFixed(3),
    '/',
    b.getEast().toFixed(3),
    '/',
    b.getWest().toFixed(3)
  )
}

const fetchAttribution = (view, setAttr) => {
  if (attrMap.has(view)) {
    const attr = attrMap.get(view)
    if (attr === ATTR_LOADING) return
    setAttr(attr)
  } else {
    console.log('Fetching attr: ' + view)
    attrMap.set(view, ATTR_LOADING) // Set loading to prevent duplicate fetches
    const attrURL = 'https://rush-basemap.dxdjohn.workers.dev/attribution/'
      .concat(view)
    fetch(attrURL)
      .then(res => res.json())
      .then(res => {
        attrMap.set(view, res.attribution) // Cache response
        setAttr(res.attribution)
      })
  }
}

const ukrainianFlag = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>

export const MapBasemap = () => {
  const map = useMap();

  useEffect(() => {
    if (map === undefined) return;

    // Add Satellite Basemap
    if (!map.hasLayer(basemap)) map.addLayer(basemap);

    return () => {
      map.removeLayer(basemap)
    };
  }, [map]);

  return (
    <>
      <AttributionControl />
      <Control position='bottomleft'>
        <img
          src='/google_on_non_white.png'
          alt='Google'
          style={{padding: '0 0 0.5em 0'}}
        />
      </Control>
    </>
  );
}
export default MapBasemap

const AttributionControl = () => {
  const map = useMap();
  const [attr, setAttr] = useState(undefined)
  const [isFocused, setFocus] = useState(false)

  useEffect(() => {
    if (map === undefined || setAttr === undefined) return;

    // Add Basemap Update Attribution Listener 
    const eventToAttribution = (e) => {
      fetchAttribution(
        mapToBoundsZoomString(e.target),
        setAttr
      )
    }
    map.on('moveend zoomend', eventToAttribution)

    // Remove Attribution Control
    map.removeControl(map.attributionControl)

    return () => {
      map.off('moveend zoomend', eventToAttribution)
    };
  }, [map, setAttr]);

  useEffect(() => {
    if (map === undefined || attr !== undefined) return;
    fetchAttribution(
      mapToBoundsZoomString(map),
      setAttr
    )
  }, [map, attr])

  return (
    <Control position='bottomright'>
      <div
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
        style={{
          backgroundColor: '#FFFFFFB3',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0.2em',
          gap: '0.4em',
          maxWidth: '80vw',
          whiteSpace: isFocused ? 'normal' :'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <div>
          <a href="https://leafletjs.com" title="A JavaScript library for interactive maps">
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '0.2em',
            }}>
              {ukrainianFlag}
              Leaflet
            </div>
          </a>
        </div>
        <div aria-hidden='true'>|</div>
        Basemap: Google{attr ? ', ' + attr : ''}
      </div>
    </Control>
  )
}