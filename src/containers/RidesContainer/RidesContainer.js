import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, NavLink } from 'react-router-dom';
import MapContainer from './../MapContainer/MapContainer';
import * as API from './../../apiCalls/apiCalls';
import { addRides } from './../../actions/rides';
import { addCurrentLocation } from './../../actions/currentLocation';
import { addRidesAccounted } from './../../actions/rideAccounted';
import * as cleaner from './../../cleaners/cleaners';
import OfferContainer from './../OfferContainer/OfferContainer';
import RidePopoverComponent from './../../components/RidePopoverComponent/RidePopoverComponent';
import './RidesContainer.css';
export class RidesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      street: '',
      city: '',
      state: '',
      showOffer: false
    };
  }

  componentDidUpdate = (prevProps) => {
    const { destination, rides } = this.props
    if (prevProps.destination !== destination) {
      this.loadRides();
    }
  }

  loadRides = async () => {
    const { setRides, destination } = this.props;
    const response = await API.fetchRides(destination.id);
    const ridesAccountedFor = await API.fetchRidesPassengers(destination.id);
    this.props.setRidesAccounted(ridesAccountedFor.ride);
    const cleanUpdatedRides = cleaner.seatsRemainingUpdate(response.rides, ridesAccountedFor.ride);
    
    await setRides(cleanUpdatedRides);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const address = this.formatAddress();
    const locationInfo = await API.fetchGeocode(address);
    const cleanLocation = cleaner.geocodeCleaner(locationInfo);
    this.props.setLocation(cleanLocation);
  };

  formatAddress = () => {
    const street = this.state.street.replace(' ', '+');
    const city = this.state.city.replace(' ', '+');
    const state = this.state.state.replace(' ', '+');
    return (
      `${street},+${city},+${state}`
    );
  }
  
  submitRideSignup = async (rideId) => {
    const ridePassenger = {
      ride_id: rideId,
      passenger_id: this.props.user.id,
      location_id: this.props.destination.id
    }
    await API.postRidesPassengers(ridePassenger);
    this.loadRides();
  }

  rideListElement = () =>{ 
    return (
      <RidePopoverComponent 
        rides={this.props.rides} 
        submitRideSignup={this.submitRideSignup}/> 
    )}

  handleShowOffer = () => {
    this.setState({
      showOffer: !this.state.showOffer
    })
  }

  handleRemove = () => {
    
  }
  
  render() {
    return (
      <div className="ride-page">
        <button className="offer-btn" onClick={this.handleShowOffer}>Offer a Ride</button>
        <section className="rides-container">
          <form 
            action="submit" 
            onSubmit={this.handleSubmit}
            className="current-location-form">
            <input 
              type="text" 
              name="street" 
              onChange={this.handleChange} 
              placeholder="street"
              className="street-input"/>
            <input 
              type="text" 
              name="city" 
              onChange={this.handleChange} 
              placeholder="city"
              className="city-input"/>
            <input 
              type="text" 
              name="state" 
              onChange={this.handleChange} 
              placeholder="state"
              className="state-input"/>
            <input type="submit"/>
          </form>
          <section className="ride-list">
            {this.props.rides.length && this.rideListElement()}
          </section>
        </section>
       {this.state.showOffer && <OfferContainer 
          handleShowOffer={this.handleShowOffer}
          loadRides={this.loadRides}/>} 
        <MapContainer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  destination: state.destination,
  rides: state.rides,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  setRides: (rides) => dispatch(addRides(rides)),
  setLocation: (location) => dispatch(addCurrentLocation(location)),
  setRidesAccounted: (ridesAccounted) => dispatch(addRidesAccounted(ridesAccounted))
})

export default connect(mapStateToProps, mapDispatchToProps)(RidesContainer);