import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker }
  from 'react-google-maps';
import './MapComponent.css';

export const MapComponent = withScriptjs(withGoogleMap((
  { position, markerCoords, ...props }
) => {
  const markers = markerCoords.map(marker => {
    return (
      <Marker  
        position={marker} />
    )
  });
  return (props.loading ?
    <div className='map-loading'>
      <h3>Waiting on Location...</h3>
    </div>
    : <GoogleMap
      defaultZoom={16}
      center={position}>
      {markers}
    </GoogleMap>
  );
}));

export default MapComponent;