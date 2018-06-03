import React, { Component } from 'react';
import { ButtonToolbar, Popover, Overlay, OverlayTrigger, Button } from 'react-bootstrap';
import './RidePopoverComponent.css';
import { connect } from 'react-redux';

export class RidePopoverComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }

  signupForRideElement = (rideId) => (
    <button onClick={() => 
      this.props.submitRideSignup(rideId)}>
      I want in
    </button>
  )

  unsignupForRideElement = (rideId) => (
    <button onClick={() => 
      this.props.handleRemovePassengerRide(rideId)}>
      remove me
    </button>
  )

  findExistingRide = (rideId) => {
    const { user } = this.props;
    const rideExists = this.props.ridesAccounted.find(ride => {
      return ride.ride_id === rideId & ride.passenger_id === user.id
    });
    return rideExists;
  }
  
  render() {
    const { rides, pickupLocations } = this.props;
    const allPopovers = rides.map(ride => {
      const rideMarker = pickupLocations.find(pickup => pickup.ride_id === ride.id);
      return (
        <OverlayTrigger
          container={this}
          trigger="click"
          placement="right"
          overlay={
          <Popover id="popovers" title="All your ride info">
            <strong>{ride.seats_remaining} seats left!</strong>
            <ul className="ride-popover-list">
              <li>Leaving at{ride.time}</li>
              <li>You'd be riding in a {ride.car_type}</li>
              <li>You'll leave at {ride.time} on {ride.date}</li>
              {
                this.findExistingRide(ride.id) ?
                this.unsignupForRideElement(ride.id) :
                this.signupForRideElement(ride.id)
              }
            </ul>
          </Popover>}
        >
          <Button
            style={{
              backgroundColor: rideMarker.isShowing ? '#CDCBC4' : 'white'
            }}
            >
          {ride.time}
          </Button>
        </OverlayTrigger>
      )})
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
})

export default connect(mapStateToProps)(RidePopoverComponent);
