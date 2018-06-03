
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { mapKey } from './../../apiKey';
import MapComponent from '../../components/MapComponent/MapComponent';
import { connect } from 'react-redux';
import * as actions from './../../actions/pickups';
import { fetchPickups } from '../../apiCalls/apiCalls';
import './MapContainer.css';

const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${mapKey}&v=3.exp&libraries=geometry,drawing,places`;

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.rides !== this.props.rides) {
      this.loadPickups();
    }
  };    

  loadPickups = async () => {
    const { setPickups, destination } = this.props;
    const response = await fetchPickups(destination.id);
    setPickups(response.pickup);
  };

  toggleShowing = (pickup) => {
    this.props.toggleShowing(pickup);
  };

  containerElement = () => (
    <div className="availableRidesMap"/>
  );
  
  loadingElement = () => (<div style={{ height: `100%` }} />)
  mapElement = () => (<div style={{ height: `100%` }} />)

  render() {
    return (
      <div className="map-container">
        <MapComponent
          // loading={this.props.loading}
          position={this.props.currentLocation}
          googleMapURL={mapUrl}
          rides={this.props.rides}
          markerCoords={this.props.pickupLocations}
          toggleShowing={this.toggleShowing}
          loadingElement={this.loadingElement()}
          containerElement={this.containerElement()}
          mapElement={this.mapElement()} />
      </div>
    );
  }
};

export const mapStateToProps = (state) => ({
  destination: state.destination,
  pickupLocations: state.pickupLocations,
  currentLocation: state.currentLocation,
  rides: state.rides
});

export const mapDispatchToProps = (dispatch) => ({
  setPickups: (pickups) => dispatch(actions.addPickups(pickups)),
  toggleShowing: (pickup) => dispatch(actions.updatePickupShowing(pickup))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);