import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, NavLink } from 'react-router-dom';
import MapContainer from './../MapContainer/MapContainer';
import * as API from './../../apiCalls/apiCalls';
import { addRides } from './../../actions/rides';
import { addCurrentLocation } from './../../actions/currentLocation';
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
    if (prevProps.destination.id !== this.props.destination.id ) {
      this.loadRides();
    }
  }

  loadRides = async () => {
    const { setRides, destination } = this.props;
    const response = await API.fetchRides(destination.id);
    await setRides(response.rides);
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
      passenger_id: this.props.user.id
    }
    await API.postRidesPassengers(ridePassenger);
  }

  rideListElement = () =>{ 
    return (
      this.props.rides.map(ride => {
        return (
          <article className="ride-item">
            <div>seats remaining: {ride.seats_remaining}</div>
            <div>car capacity: {ride.car_capacity}</div>
            <div>car model: {ride.car_type}</div>
            <div>date: {ride.date}</div>
            <div>time: {ride.time}</div>
            <button onClick={() => 
              this.submitRideSignup(ride.id)}>
              i want in
            </button>
          </article>
        );
    }))
  }

  handleShowOffer = () => {
    this.setState({
      showOffer: !this.state.showOffer
    })
  }
  
  render() {
    return (
      <div className="ride-page">
        <button className="offer-btn" onClick={this.handleShowOffer}>Offer a Ride</button>
        <section className="rides-container">
          <form action="submit" onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              name="street" 
              onChange={this.handleChange} 
              placeholder="street"/>
            <input 
              type="text" 
              name="city" 
              onChange={this.handleChange} 
              placeholder="city"/>
            <input 
              type="text" 
              name="state" 
              onChange={this.handleChange} 
              placeholder="state"/>
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
  setLocation: (location) => dispatch(addCurrentLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(RidesContainer);