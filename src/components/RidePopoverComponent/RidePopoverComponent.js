import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  ButtonToolbar, 
  Popover, 
  OverlayTrigger, 
  Button } from 'react-bootstrap';
import './RidePopoverComponent.css';
import { connect } from 'react-redux';
import userIcon from './../../assets/user.svg';

export class RidePopoverComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }

  signupForRideElement = (rideId) => (
    <button 
      className="join-ride-btn"
      onClick={() => 
        this.props.submitRideSignup(rideId)}>
      I want in
    </button>
  )

  unsignupForRideElement = (rideId) => (
    <button 
      className="join-ride-btn"
      onClick={() => 
        this.props.handleRemovePassengerRide(rideId)}>
      remove me
    </button>
  )

  findExistingRide = (rideId) => {
    const { user } = this.props;
    const rideExists = this.props.ridesAccounted.find(ride => {
      return ride.ride_id === rideId & ride.passenger_id === user.id;
    });
    return rideExists;
  }
  
  render() {
    const { rides, pickupLocations, user } = this.props;
    // const nonUserRides = rides.filter(ride => ride.driver_id !== user.id);
    const allPopovers = rides.map((ride, index) => {
      const rideMarker = pickupLocations.find(pickup => pickup.ride_id === ride.id);
      return (
        <OverlayTrigger
          key={`popover ${index}`}
          container={this}
          trigger="click"
          placement="right"
          overlay={
            <Popover id="popovers" title="All your ride info">
              <strong>{ride.seats_remaining} seats left!</strong>
              <ul className="ride-popover-list">
                <li>Leaving at <span className="info">{ride.time}</span></li>
                <li>You'd be riding in a <span className="info">{ride.car_type}</span></li>
                <li>You'll leave on {ride.date}</li>
                {
                  this.findExistingRide(ride.id) ?
                    this.unsignupForRideElement(ride.id) :
                    this.signupForRideElement(ride.id)
                }
              </ul>
            </Popover>
          }
        >
          <Button
            style={{
              backgroundColor: rideMarker.isShowing ? '#CDCBC4' : 'white'
            }}
            // className={ride.driver_id === this.props.user.id ? "my-ride-btn" : "ride-btn"}
          >
            <span className="user-img">
              <img src={userIcon} alt="user"/>
            </span>
            <span className="date">
            leaving on: <span className="text">{ride.date}</span>
            </span>
            <span className="time">
            at: <span className="text"> {ride.time} </span>
            </span> 
          </Button>
        </OverlayTrigger>
      );
    });
    return (
      <ButtonToolbar id="popover-container">
        {allPopovers}
      </ButtonToolbar>
    );
  }
}

export const mapStateToProps = (state) => ({
  ridesAccounted: state.ridesAccounted,
  user: state.user,
  pickupLocations: state.pickupLocations
});

RidePopoverComponent.propTypes = {
  pickupLocations: PropTypes.array,
  user: PropTypes.object,
  ridesAccounted: PropTypes.array,
  rides: PropTypes.array,
  handleRemovePassengerRide: PropTypes.func,
  submitRideSignup: PropTypes.func
};

export default connect(mapStateToProps)(RidePopoverComponent);
