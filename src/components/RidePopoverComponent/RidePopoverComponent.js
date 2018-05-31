import React, { Component } from 'react';
import { ButtonToolbar, Popover, Overlay, OverlayTrigger, Button } from 'react-bootstrap';
import './RidePopoverComponent.css';
// bootstrapUtils.addStyle(Popover, 'popovers');

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
          <Popover id="popovers" title="Popover right">
            <strong>Holy guacamole!</strong> Check this info.
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
