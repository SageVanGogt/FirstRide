import React, { Component } from 'react';
import { ButtonToolbar, Popover, Overlay, OverlayTrigger, Button } from 'react-bootstrap';
import './RidePopoverComponent.css';

class RidePopoverComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }
  
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
              <button onClick={() => 
                this.props.submitRideSignup(ride.id)}>
                I want in
              </button>
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

export default RidePopoverComponent;
