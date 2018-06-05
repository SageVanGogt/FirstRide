import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker }
  from 'react-google-maps';
import PropTypes from 'prop-types';
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import './MapComponent.css';

export const MapComponent = withScriptjs(withGoogleMap((
  { position, markerCoords, toggleShowing, ...props }
) => {
  const markers = markerCoords.map((location, index) => {
    let { lat, lng } = location;
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    return (
      <Marker
        key={`mapmarker-${index}`}
        onClick={() => toggleShowing(location)}
        position={{lat: lat, lng: lng}}>
        {
          location.isShowing === true && 
          <InfoBox
            options={{ closeBoxURL: ``, enableEventPropagation: true }}>
            <div className="info-box">
              <div className="info-text-box">
                <h2>{location.address}</h2>
              </div>
            </div>
          </InfoBox>
        }
      </Marker>
    );
  });
  return (
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
};

export default MapComponent;