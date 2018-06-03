import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as API from './../../apiCalls/apiCalls';
import * as actions from './../../actions/userRides';
import './UserRidesContainer.css';

export class UserRidesContainer extends Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.loadPassengerRides();
  };

  loadPassengerRides = async () => {
    const rides = await API.fetchUserRides(this.props.user.id);
    const rideInfo = await this.loadRideDetails(rides.rides);
    this.props.setUserRides(rideInfo);
  };

  loadRideDetails = async (rideArray) => {
    let allRideInfo = rideArray.map( async ride => {
      const response = await API.fetchRidesFromUser(ride.ride_id);
      return response.rides[0];
    });
    allRideInfo = await Promise.all(allRideInfo);
    return allRideInfo;
  };

  ridesElement = () => (
    this.props.userRides.map(ride => (
      <article>
        <h1>destination: RedRocks</h1>
        <h2>car type: {ride.car_type}</h2>
        <h3>seats remaining: {ride.seats_remaining}</h3>
      </article>
    ))
  );

  render() {
    return (
      <div className="user-rides-container">
        <article>
          <h2>Red Rocks</h2>
          <ul>
            {this.ridesElement()}
          </ul>
        </article>
        <article>
          <h2>Breckenridge</h2>
          <ul>
          </ul>
        </article>
        <button onClick={this.props.toggleShowUserRides}>return</button>
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  user: state.user,
  userRides: state.userRides
});

export const mapDispatchToProps = (dispatch) => ({
  setUserRides: (rides) => dispatch(actions.addUserRides(rides))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRidesContainer);