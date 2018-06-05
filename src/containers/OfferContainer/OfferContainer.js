import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as API from './../../apiCalls/apiCalls';
import * as cleaner from './../../cleaners/cleaners';
import * as actions from './../../actions/pickups';
import { addNewRide } from './../../actions/rides';
import { addError } from './../../actions/error';
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
    };
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmitRide = async (event) => {
    event.preventDefault();
    const { 
      location_id,
      driver_id,
      car_capacity,
      car_type,
      date,
      time
    } = this.state;
    const rideInfo = {
      location_id,
      driver_id,
      car_capacity, 
      seats_remaining: car_capacity, 
      car_type, 
      date, 
      time
    };
    const response = await API.submitNewRide(rideInfo);
    const rideId = response.id;
    await this.handleSubmitPickup(rideId);
    this.props.setNewRide(response.ride);
  };

  handleSubmitPickup = async (rideId) => {
    const geoLocation = await this.getGeoInfo();
    const address = await this.getAddress(geoLocation.lat, geoLocation.lng);
    const pickupInfo = {
      ride_id: rideId,
      location_id: this.state.location_id,
      lat: geoLocation.lat,
      lng: geoLocation.lng,
      isShowing: false,
      address
    };
    const newPickup = await API.submitNewPickup(pickupInfo);
    this.props.setNewPickup(newPickup.pickup);
    this.props.handleShowOffer(); 
  };

  getAddress = async (lat, lng) => {
    const response = await API.reverseGeoCode(lat, lng);
    const cleanAddress = await cleaner.latLngToAddress(response);
    return cleanAddress;
  };

  getGeoInfo = async () => {
    const formattedAddress = this.formatAddress();
    try {
      const response = await API.fetchGeocode(formattedAddress);
      const geoLocation = await cleaner.geocodeCleaner(response);
      return geoLocation;
    } catch (error) {
      throw error;
    }
  };

  formatAddress = () => {
    const street = this.state.street.replace(' ', '+');
    const city = this.state.city.replace(' ', '+');
    const state = this.state.state.replace(' ', '+');
    return (
      `${street},+${city},+${state}`
    );
  };

  render() {
    return (
      <div className="offer-container"> 
        <form 
          action="" 
          onSubmit={this.handleSubmitRide}
          className="offer-form">
          <legend className="offer-instructions">
          Please fill out all the information to submit a ride offer
          </legend>
          <button 
            onClick={this.props.handleShowOffer}
            className="offer-back-btn">
            X
          </button>          
          <div className="offer-inputs-container">
            <div className="car-input">
              <label name="car_capicity">Car Capacity:</label>          
              <input 
                type="text" 
                name="car_capacity" 
                onChange={this.handleChange} 
                placeholder="car capacity"
                className="offer-input"/>
              <label name="car_type">car type:</label>
              <input 
                type="text" 
                name="car_type" 
                onChange={this.handleChange} 
                placeholder="car type"
                className="offer-input"/>
              <label name="data">date:</label>
              <input 
                type="text" 
                name="date" 
                onChange={this.handleChange} 
                placeholder="date"
                className="offer-input"/>
              <label name="time">time of departure:</label>
              <input 
                type="text" 
                name="time" 
                onChange={this.handleChange} 
                placeholder="time of departure"
                className="offer-input"/>
            </div>
            <div className="address-input">
              <label name="street">street:</label>
              <input 
                type="text" 
                name="street" 
                onChange={this.handleChange} 
                placeholder="street"
                className="offer-input"/>
              <label name="city">city:</label>
              <input 
                type="text" 
                name="city" 
                onChange={this.handleChange} 
                placeholder="city"
                className="offer-input"/>
              <label name="state">state:</label>
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
    );
  }
}

export const mapStateToProps = (state) => ({
  destination: state.destination,
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  setNewPickup: (pickup) => dispatch(actions.addSinglePickup(pickup)),
  setNewRide: (ride) => dispatch(addNewRide(ride)),
  setError: (error) => dispatch(addError(error))
});

OfferContainer.propTypes = {
  setNewPickup: PropTypes.func,
  ridesAccounted: PropTypes.func,
  handleShowOffer: PropTypes.func,
  setError: PropTypes.func,
  setNewRide: PropTypes.func,
  destination: PropTypes.object,
  user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferContainer)