import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as API from './../../apiCalls/apiCalls';
import * as cleaner from './../../cleaners/cleaners';
import * as actions from './../../actions/pickups';
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
    await this.props.loadRides();
  }

  handleSubmitPickup = async (rideId) => {
    const geoLocation = await this.getGeoInfo();
    const pickupInfo = {
      ride_id: rideId,
      location_id: this.state.location_id,
      lat: geoLocation.lat,
      lng: geoLocation.lng,
      isShowing: false
    };
    const newPickup = await API.submitNewPickup(pickupInfo);
    this.props.setNewPickup(newPickup.pickup);
  }

  getGeoInfo = async () => {
    const formattedAddress = this.formatAddress();
    const response = await API.fetchGeocode(formattedAddress);
    const geoLocation = await cleaner.geocodeCleaner(response);
    return geoLocation;
  }

  formatAddress = () => {
    const street = this.state.street.replace(' ', '+');
    const city = this.state.city.replace(' ', '+');
    const state = this.state.state.replace(' ', '+');
    return (
      `${street},+${city},+${state}`
    );
  }

  render() {
    return (
      <div className="offer-container"> 
        <form 
          action="" 
          onSubmit={this.handleSubmitRide}
          className="offer-form">
           <legend className="offer-instructions">
          this is where you input car info 
          please input all the fields
          </legend>
          <button 
            onClick={this.props.handleShowOffer}
            className="offer-back-btn">
            exit
          </button>          
          <div className="offer-inputs-container">
            <div className="car-input">
              <input 
                type="text" 
                name="car_capacity" 
                onChange={this.handleChange} 
                placeholder="car capacity"
                className="offer-input"/>
              <input 
                type="text" 
                name="car_type" 
                onChange={this.handleChange} 
                placeholder="car type"
                className="offer-input"/>
              <input 
                type="text" 
                name="date" 
                onChange={this.handleChange} 
                placeholder="date"
                className="offer-input"/>
              <input 
                type="text" 
                name="time" 
                onChange={this.handleChange} 
                placeholder="time of departure"
                className="offer-input"/>
            </div>
            <div className="address-input">
              <input 
                type="text" 
                name="street" 
                onChange={this.handleChange} 
                placeholder="street"
                className="offer-input"/>
              <input 
                type="text" 
                name="city" 
                onChange={this.handleChange} 
                placeholder="city"
                className="offer-input"/>
              <input 
                type="text" 
                name="state" 
                onChange={this.handleChange} 
                placeholder="state"
                className="offer-input"/>
            </div>
          </div>
          <input 
            type="submit"
            className="offer-submit-btn"/>
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
  setNewPickup: (pickup) => dispatch(actions.addSinglePickup(pickup))
})

export default connect(mapStateToProps, mapDispatchToProps)(OfferContainer)