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
    <button >
      remove me
    </button>
  )
  
  render() {
    const allPopovers = this.props.rides.map(ride => {
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
                this.props.ridesAccounted.includes(ride.id) ?
                this.unsignupForRideElement :
                this.signupForRideElement
              }
            </ul>
          </Popover>}
        >
          <Button>{ride.time}</Button>
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
  ridesAccounted: state.ridesAccounted
})

export default connect(mapStateToProps)(RidePopoverComponent);
