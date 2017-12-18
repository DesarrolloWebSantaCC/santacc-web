import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import markerPng from '../../images/marker.png'
import santaCCMapStyles from './santacc-map-styles.json'

/**
 *
 * @param props
 * @constructor
 * Google Map embedding component.
 */
const SantaCCMap = props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={props.center}
    defaultOptions={{ styles: santaCCMapStyles }}
    mapTypeId={google.maps.MapTypeId.ROADMAP}
  >
    <Marker position={new google.maps.LatLng(props.center.lat, props.center.lng)} draggable={false} icon={markerPng} title="Santa Compañía Creativa" url="https://goo.gl/maps/BNFNE" />
  </GoogleMap>
)

const SantaCCGoogleMap = withScriptjs(withGoogleMap(SantaCCMap))

export default SantaCCGoogleMap
