import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as API from './../../apiCalls/apiCalls';
import * as actions from './../../actions/userRides';
import './UserRidesContainer.css';

export class UserRidesContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.userRides.length <= 1) {
      this.loadPassengerRides();
    }
  }

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
    this.props.userRides.map((ride, index) => (
      <li className="ride-item" key={index}>
        <article className="ride-info">
          <h3 className="time-info">{ride.date} - {ride.time}</h3>
          <h4 className="destination-info">Going To -> 
            {
              ride.location_id === 1 ? 
                'Red Rocks' :
                'Breckenridge'
            }
          </h4>
          <h4 className="car-info">Car Type: {ride.car_type}</h4>
          <h5 className="seating-info">Seats Remaining: {ride.seats_remaining}</h5>
        </article>
      </li>
    ))
  );

  render() {
    return (
      <div className="user-rides-container">
        <article>
          <h1>My Rides</h1>
          <ul>
            {this.ridesElement()}
          </ul>
        </article>
        <button 
          className="user-rides-return-btn"
          onClick={this.props.toggleShowUserRides}>
          X
        </button>
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

UserRidesContainer.propTypes = {
  user: PropTypes.object,
  userRides: PropTypes.array,
  setUserRides: PropTypes.func,
  toggleShowUserRides: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRidesContainer);