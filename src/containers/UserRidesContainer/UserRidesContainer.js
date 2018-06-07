import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as API from './../../apiCalls/apiCalls';
import * as actions from './../../actions/userRides';
import './UserRidesContainer.css';
import userIcon from './../../assets/user.svg';
import car from './../../assets/car.svg';
import seat from './../../assets/car-seat-with-seatbelt.svg';
import pin from './../../assets/placeholder.svg';
import calendar from './../../assets/calendar.svg';


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
          <span className="img-container">
            <img 
              src={userIcon} 
              alt="driver"
              className="driver-img"/>
          </span>
          <div>
            <h3 className="time-info">
              <img 
                src={calendar} 
                alt="cal"
                className="calendar-img"/>
              {ride.date} {ride.time}
            </h3>
          </div>
          <div>
            <h4 className="destination-info">
              <img 
                src={pin} 
                alt="driver"
                className="pin-img"/>  
              <span className="destination">
                {
                  ride.location_id === 1 ? 
                    'Red Rocks' :
                    'Breckenridge'
                }
              </span>
            </h4>
          </div>
          <div>
            <h4 className="car-info">
              <img 
                src={car} 
                alt="driver"
                className="car-img"/>
              {ride.car_type}
            </h4>
          </div>
          <div>
            <h5 className="seating-info">
              <img 
                src={seat} 
                alt="driver"
                className="seat-img"/>
              {ride.seats_remaining}
            </h5>
          </div>
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
  }
}

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