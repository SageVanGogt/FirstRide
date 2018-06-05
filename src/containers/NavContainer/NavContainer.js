import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from './../../actions/user';
import { removeDestination } from './../../actions/destination';
import { removeCurrentLocation } from './../../actions/currentLocation';
import { removeUserRides } from './../../actions/userRides';
import { removeRides } from './../../actions/rides';
import { removePickups } from './../../actions/pickups';
import './NavContainer.css';

export class NavContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleSignout = () => {
    this.props.logoutUser();
    this.props.toggleLogin();
    this.props.removeUserRides();
  };

  handleReturnHome = () => {
    this.props.removeCurrentLocation();
    this.props.removeDestination();
    this.props.removeRides();
    this.props.removePickups();
  }

  render() {
    return (
      <div className="nav-bar">
        <h1 className="site-name">FirstRide.</h1>
        <div className="links">
          <NavLink 
            className="nav-link" 
            to="/"
            onClick={this.handleReturnHome}>
            Home
          </NavLink>
          <button 
            className="nav-btn"
            onClick={this.props.toggleShowUserRides}>
            My Rides
          </button>
          <NavLink className="nav-link" to="/profile">Me</NavLink>
          { 
            this.props.user.id ? 
              <button 
                className="nav-btn"
                onClick={this.handleSignout}>
                Signout
              </button> :
              <button 
                className="nav-btn signin-btn" 
                onClick={this.props.toggleLogin}>
                Signin / Signup
              </button>
          }
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(actions.signoutUser()),
  removeUserRides: () => dispatch(removeUserRides()),
  removeCurrentLocation: () => dispatch(removeCurrentLocation()),
  removeDestination: () => dispatch(removeDestination()),
  removeRides: () => dispatch(removeRides()),
  removePickups: () => dispatch(removePickups())
});

NavContainer.propTypes = {
  toggleLogin: PropTypes.func,
  toggleShowUserRides: PropTypes.func,
  logoutUser: PropTypes.func,
  removeUserRides: PropTypes.func,
  removeCurrentLocation: PropTypes.func,
  removeDestination: PropTypes.func,
  removeRides: PropTypes.func,
  removePickups: PropTypes.func,
  user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);