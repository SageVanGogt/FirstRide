import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker }
  from 'react-google-maps';
import './MapComponent.css';
import PropTypes from 'prop-types';
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
const { compose, withStateHandlers } = require("recompose");

export const MapComponent = withScriptjs(withGoogleMap((
  { position, markerCoords, toggleShowing, ...props}
) => {
  const markers = markerCoords.map(location => {
    let { lat, lng } = location;
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    return (
      <Marker
        onClick={() => toggleShowing(location)}
        position={{lat: lat, lng: lng}}>
       {
        location.isShowing === true && <InfoBox
          options={{ closeBoxURL: ``, enableEventPropagation: true }}>
            <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
              <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                Hello, jack!
              </div>
            </div>
          </InfoBox>
        }
      </Marker>
    );
  });
  return (
    // props.loading ?
    // <div className='map-loading'>
    //   <h3>Waiting on Location...</h3>
    // </div>
    // :
    <GoogleMap
      defaultZoom={16}
      center={position}>
      {markers}
    </GoogleMap>
  );
}));

MapComponent.propTypes = {
  position: PropTypes.object,
  markerCoords: PropTypes.array
}

export default MapComponent;