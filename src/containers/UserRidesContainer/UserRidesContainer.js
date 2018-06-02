import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from './../../apiCalls/apiCalls';
import './UserRidesContainer.css';

export class UserRidesContainer extends Component {
  constructor(props) {
    super(props)
  };

  loadPassengerRides = async () => {
    const rides = await API.fetchUserRides(this.props.user.id);
    const rideInfo = await this.loadRideDetails(rides.rides);
    return rideInfo
  }

  loadRideDetails = async (rideArray) => {
    let allRideInfo = rideArray.map( async ride => {
      const response = await API.fetchRidesFromUser(ride.ride_id);
      return response;
    })
    allRideInfo = await Promise.all(allRideInfo);
    return allRideInfo;
  }

  render() {
    return (
      <div className="user-rides-container">
        <article>
          <h2>Red Rocks</h2>
          <ul>
            {this.loadPassengerRides()}
          </ul>
        </article>
        <article>
          <h2>Breckenridge</h2>
          <ul>
            {this.loadPassengerRides()}
          </ul>
        </article>
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserRidesContainer);