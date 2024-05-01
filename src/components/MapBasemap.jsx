import React, { useEffect, useState } from 'react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';

// Constants
const SESSION_STORAGE_KEY = 'gmapSession'
const API_URL = "https://rush-basemap.dxdjohn.workers.dev/"
const API_SESSION_PATH = "createSession"
const API_SESSION_OPTS = {
  mapType: 'satellite',
  language: 'en-CA',
  region: 'CA',
  layerTypes: [ 'layerRoadmap' ]
}
const API_TILE_PATH = "2dtiles/{z}/{x}/{y}"
const API_ATTR_PATH = "viewport"
const TILE_LAYER_OPTS = {
  minZoom: 0,
  maxZoom: 22,
  updateWhenIdle: true,
  zIndex: 0
}
const UKRAINIAN_FLAG = <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>

export const MapBasemap = () => {
  const map = useMap()
  const session = useGoogleBasemapSession()

  useEffect(() => {
    if (map === undefined || session?.token === undefined) return;

    // Add Satellite Basemap
    const basemap = L.tileLayer(
      API_URL + API_TILE_PATH + `?session=${session.token}`,
      TILE_LAYER_OPTS
    )
    map.addLayer(basemap);

    return () => {
      map.removeLayer(basemap)
    };
  }, [map, session]);

  return (
    <>
      <AttributionControl session={session} />
      <Control prepend position='bottomright'>
        <img
          src='/google_on_non_white.png'
          alt='Google'
          style={{
            margin: '0 0 -10px -10px',
            padding: '0 0 0.5em 0.5em'
          }}
        />
      </Control>
    </>
  );
}
export default MapBasemap

function useGoogleBasemapSession() {
  const [session, setSession] = useState(undefined)

  // populate session
  useEffect(() => {
    let ignore = false
    
    function requestSession() {
      // request new session from api
      const sessionRequest = new Request(
        API_URL + API_SESSION_PATH,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(API_SESSION_OPTS),
        }
      )
      fetch(sessionRequest)
        .then((res) => res.json())
        .then((res) => {
          if (!ignore && res.session && res.expiry) {
            const newSession = { token: res.session, expiry: res.expiry }
            localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newSession))
            setSession(newSession)
          }
        })
    }

    function willExpireIn(expiry, minutes) {
      return (expiry * 1000) < (Date.now() + (minutes * 60000))
    }

    // check if session has been populated
    if (session === undefined) {
      // check local storage for an unexpired previous session
      const localSession = JSON.parse(localStorage.getItem(SESSION_STORAGE_KEY))
      if (localSession && !willExpireIn(localSession.expiry, 120)) {
        setSession(localSession)
      } else {
        // request a new session from api
        requestSession()
      }
    } else if (willExpireIn(session.expiry, 120)) {
      setSession(undefined)
    }

    return () => { ignore = true }
  }, [session])

  return session
}

//----
const attrMap = new Map();
const ATTR_LOADING = 'Loading...'
const mapToView = (map) => {
  const b = map.getBounds()
  const z = String(map.getZoom())
  const view = {
    z: z,
    n: b.getNorth().toFixed(3),
    s: b.getSouth().toFixed(3),
    e: b.getEast().toFixed(3),
    w: b.getWest().toFixed(3),
  }
  view.key = `${view.z}${view.n}${view.s}${view.e}${view.w}`
  return view
}
const fetchViewAttr = (view, session, setAttr, stale = false) => {
    if (attrMap.has(view.key)) {
      const attr = attrMap.get(view.key)
      if (attr === ATTR_LOADING) return
      setAttr(attr)
    } else {
      // Set loading to prevent duplicate fetches
      attrMap.set(view.key, ATTR_LOADING)

      // Fetch attribution
      const attrParams = new URLSearchParams({
        session: session.token,
        zoom: view.z,
        north: view.n,
        south: view.s,
        east: view.e,
        west: view.w
      })
      const attrURL = API_URL.concat(API_ATTR_PATH, '?', attrParams)
      fetch(attrURL)
        .then(res => res.json())
        .then(res => {
          attrMap.set(view, res.copyright) // Cache response
          if (!stale) setAttr(res.copyright)
        })
    }
  }

const AttributionControl = ({ session }) => {
  const map = useMap()
  const [attr, setAttr] = useState(undefined)
  const [isFocused, setFocus] = useState(false)

  useEffect(() => {
    if (map === undefined || session?.token === undefined) return;
    

    // Add Basemap Update Attribution Listener
    let stale = false
    const eventToAttribution = (e) => {
      const view = mapToView(e.target)
      fetchViewAttr(view, session, setAttr, stale)
    }
    map.on('moveend zoomend', eventToAttribution)
    
    // Remove Attribution Control
    map.removeControl(map.attributionControl)

    return () => {
      stale = true
      map.off('moveend zoomend', eventToAttribution)
    };
  }, [map, session, attr]);
  
  useEffect(() => {
    if (
      map === undefined ||
      attr !== undefined ||
      session?.token === undefined
    ) return;
    // fetch attribtion for current map view
    let stale = false
    fetchViewAttr(mapToView(map), session, setAttr, stale)
    return () => { stale = true }
  }, [map, attr, session])
  
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
        margin: '0 -10px -10px 0',
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
            {UKRAINIAN_FLAG}
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