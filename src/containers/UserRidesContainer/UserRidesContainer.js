import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from './../../apiCalls/apiCalls';
import './UserRidesContainer.css';

export class UserRidesContainer extends Component {
  constructor(props) {
    super(props)
  };

  loadPassengerRides = async (locationId) => {
    const rides
  }

  loadRideDetails = async (rideArray) => {

  }

  render() {
    return (
      <div className="user-rides-container">
        <article>
          <h2>Red Rocks</h2>
          <ul>
            {this.loadPassengerRides(1)}
          </ul>
        </article>
        <article>
          <h2>Breckenridge</h2>
          <ul>
            {this.loadPassengerRides(2)}
          </ul>
        </article>
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({

});

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserRidesContainer);