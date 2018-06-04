import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker }
  from 'react-google-maps';
import PropTypes from 'prop-types';
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import './MapComponent.css';

export const MapComponent = withScriptjs(withGoogleMap((
  { position, markerCoords, toggleShowing, rides, ...props}
) => {
  const markers = markerCoords.map(location => {
    let { lat, lng } = location;
    let rideInfo = rides.find(ride => ride.id === location.ride_id);
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    return (
      <Marker
        onClick={() => toggleShowing(location)}
        position={{lat: lat, lng: lng}}>
       {
        location.isShowing === true && <InfoBox
          options={{ closeBoxURL: ``, enableEventPropagation: true }}>
            <div className="info-box">
              <div className="info-text-box">
                <h1>{rideInfo.seats_remaining} seats remaining</h1>
                <h2>
                  Departing at {rideInfo.time}  
                  on {rideInfo.date}
                </h2>
              </div>
            </div>
          </InfoBox>
        }
      </Marker>
    );
  });
  return (
    // !position.id ?
    // <div className='map-loading'>
    //   {props.loadingElement}
    //   <h3>{props.loadingElement}</h3>
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