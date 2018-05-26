
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { mapKey } from './../../apiKey';
import MapComponent from '../../components/MapComponent/MapComponent';

const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${mapKey}&v=3.exp&libraries=geometry,drawing,places`;

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerCoords: [{lat: 39.742043, lng: -104.991531}, {lat: 39.762090, lng: -105.006394}],
      center: {lat: 39.758606, lng: -104.998784}
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.markerCoords !== this.props.markerCoords) {
      this.setState({
        center: this.props.markerCoords,
        markerCoords: this.props.markerCoords
      });
    }
  }

  containerElement = () => (
    <div
      className="availableRidesMap"
      style={{
        position: 'absolute',
        top: this.props.top || '10rem',
        left: this.props.right,
        height: this.props.height || '50%',
        width: this.props.width || '50%'
      }}
    />
  );
  
  loadingElement = () => (<div style={{ height: `100%` }} />)
  mapElement = () => (<div style={{ height: `100%` }} />)

  render() {
    return (
      <MapComponent
        {...this.state}
        // loading={this.props.loading}
        position={this.state.center || this.props.userLocation}
        googleMapURL={mapUrl}
        markerCoords={this.state.markerCoords}
        loadingElement={this.loadingElement()}
        containerElement={this.containerElement()}
        mapElement={this.mapElement()} />
    );
  }
}