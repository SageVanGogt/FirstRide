import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as API from './../../apiCalls/apiCalls';
import * as cleaner from './../../cleaners/cleaners';
import './OfferContainer.css';

export class OfferContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location_id: this.props.destination.id,
      driver_id: this.props.user.id,
      car_capacity: '',
      car_type: '',
      date: '',
      time: '',
      street: '',
      city: '',
      state: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmitRide = async (event) => {
    event.preventDefault();
    const { 
      location_id,
      driver_id,
      car_capacity,
      car_type,
      date,
      time
    } = this.state
    const rideInfo = {
      location_id,
      driver_id,
      car_capacity, 
      seats_remaining: car_capacity, 
      car_type, 
      date, 
      time, 
    }
    const response = await API.submitNewRide(rideInfo);
    const rideId = response.id;
    await this.handleSubmitPickup(rideId);
  }

  handleSubmitPickup = async (rideId) => {
    const geoLocation = await this.getGeoInfo();
    const pickupInfo = {
      ride_id: rideId,
      location_id: this.state.location_id,
      lat: geoLocation.lat,
      lng: geoLocation.lng
    };
    await API.submitNewPickup(pickupInfo);
  }

  getGeoInfo = async () => {
    const { street, city, state } = this.state;
    const address = {
      street, 
      city, 
      state
    };
    const response = await API.fetchGeocode(address);
    const geoLocation = await cleaner.geocodeCleaner(response);
    return geoLocation;
  }

  render() {
    return (
      <div className="offer-container">
        <form action="" onSubmit={this.handleSubmitRide}>
          <input 
            type="text" 
            name="car_capacity" 
            onChange={this.handleChange} 
            placeholder="car capacity"/>
          <input 
            type="text" 
            name="car_type" 
            onChange={this.handleChange} 
            placeholder="car type"/>
          <input 
            type="text" 
            name="date" 
            onChange={this.handleChange} 
            placeholder="date"/>
          <input 
            type="text" 
            name="time" 
            onChange={this.handleChange} 
            placeholder="time of departure"/>
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
          <NavLink to="/rides">Back</NavLink>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  destination: state.destination,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(OfferContainer)