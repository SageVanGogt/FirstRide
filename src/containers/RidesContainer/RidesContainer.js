import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect, NavLink } from 'react-router-dom';
import MapContainer from './../MapContainer/MapContainer';
import * as API from './../../apiCalls/apiCalls';
import { addRides } from './../../actions/rides';
import { addCurrentLocation } from './../../actions/currentLocation';
import { addRidesAccounted, removeRideAccounted } from './../../actions/rideAccounted';
import { addError } from './../../actions/error';
import { addPickups } from './../../actions/pickups';
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
      this.loadPickups();
    }
  }

  loadRides = async () => {
    const { destination } = this.props;
    const response = await API.fetchRides(destination.id);
    const ridesAccountedFor = await API.fetchRidesPassengers(destination.id);
    this.props.setRidesAccounted(ridesAccountedFor.ride);
    await this.cleanAndSetRides(response.rides, ridesAccountedFor.ride);
  }

  loadPickups = async () => {
    const { setPickups, destination } = this.props;
    const response = await API.fetchPickups(destination.id);
    setPickups(response.pickup);
  };

  cleanAndSetRides = (rides, ridesAccountedFor) => {
    const cleanUpdatedRides = cleaner.seatsRemainingUpdate(rides, ridesAccountedFor);
    this.props.setRides(cleanUpdatedRides);
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
    try {
      const locationInfo = await API.fetchGeocode(address);
      if (locationInfo.status === "ZERO_RESULTS") {
        this.props.setError('That address could not be found');
        return;
      }
      const cleanLocation = cleaner.geocodeCleaner(locationInfo);
      this.props.setLocation(cleanLocation);
    } catch (error) {
      throw Error(error.message);
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

  submitRideSignup = async (rideId) => {
    if (!this.props.user.id) {
      this.props.setError('Please login before you do that');
      return;
    }
    const ridePassenger = {
      ride_id: rideId,
      passenger_id: this.props.user.id,
      location_id: this.props.destination.id
    };
    await API.postRidesPassengers(ridePassenger);
    this.loadRides();
  };

  rideListElement = () => {
    return (
      <RidePopoverComponent
        rides={this.props.rides}
        submitRideSignup={this.submitRideSignup}
        handleRemovePassengerRide={this.handleRemovePassengerRide} />
    );
  };

  handleShowOffer = () => {
    if (!this.props.user.id) {
      this.props.setError('Please login before you do that');
      return;
    }
    this.setState({
      showOffer: !this.state.showOffer
    });
  };

  handleRemovePassengerRide = async (rideId) => {
    const { user, destination, ridesAccounted } = this.props;
    const response = await API.removePassengerRide(rideId, user.id, destination.id);
    this.props.removeRideAccounted(response.id[0]);
    this.loadRides();
  };

  render() {
    return (
      <div className="ride-page">
        <button className="offer-btn" onClick={this.handleShowOffer}>Offer a Ride</button>
        <section className="rides-container">
          <article
            className="form-article">
            <form
              action="submit"
              onSubmit={this.handleSubmit}
              className="current-location-form">
              <legend className="address-form-legend">
                Enter your full address here.
              </legend>
              <input
                type="text"
                name="street"
                onChange={this.handleChange}
                placeholder="street"
                className="street-input" />
              <input
                type="text"
                name="city"
                onChange={this.handleChange}
                placeholder="city"
                className="city-input" />
              <input
                type="text"
                name="state"
                onChange={this.handleChange}
                placeholder="state"
                className="state-input" />
              <input
                type="submit"
                className="address-sbmt-btn"
                value="Submit" />
            </form>
          </article>
          <article className="ride-list">
            <h3 className="rides-legend">Available Rides:</h3>
            {this.props.rides.length >= 1 && this.rideListElement()}
          </article>
        </section>
        {
          this.state.showOffer &&
          <OfferContainer
            handleShowOffer={this.handleShowOffer}
            loadRides={this.loadRides} />
        }
        <MapContainer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  destination: state.destination,
  rides: state.rides,
  user: state.user,
  ridesAccounted: state.ridesAccounted
});

export const mapDispatchToProps = (dispatch) => ({
  setRides: (rides) => dispatch(addRides(rides)),
  setLocation: (location) => dispatch(addCurrentLocation(location)),
  setRidesAccounted: (ridesAccounted) => dispatch(addRidesAccounted(ridesAccounted)),
  setError: (error) => dispatch(addError(error)),
  setPickups: (pickups) => dispatch(addPickups(pickups)),
  removeRideAccounted: (ride) => dispatch(removeRideAccounted(ride))
});

RidesContainer.propTypes = {
  setRides: PropTypes.func,
  setLocation: PropTypes.func,
  setRidesAccounted: PropTypes.func,
  removeRideAccounted: PropTypes.func,
  setError: PropTypes.func,
  setPickups: PropTypes.func,
  destination: PropTypes.object,
  rides: PropTypes.array,
  user: PropTypes.object,
  ridesAccounted: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(RidesContainer);