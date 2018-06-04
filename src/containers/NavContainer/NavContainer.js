import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from './../../actions/user';
import { removeCurrentLocation } from './../../actions/currentLocation';
import { removeUserRides } from './../../actions/userRides';
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

  render() {
    return (
      <div className="nav-bar">
        <h1 className="site-name">FirstRide.</h1>
        <div className="links">
          <NavLink 
            className="nav-link" 
            to="/"
            onClick={this.props.removeCurrentLocation}>
            Home
          </NavLink>
          { 
            this.props.user.id ? 
              <button 
                className="nav-btn"
                onClick={this.handleSignout}>
                Signout
              </button> :
              <button 
                className="nav-btn" 
                onClick={this.props.toggleLogin}>
                Signin
              </button>
          }
          <button 
            className="nav-btn"
            onClick={this.props.toggleShowUserRides}>
            My Rides
          </button>
          <NavLink className="nav-link" to="/profile">Me</NavLink>
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
  removeCurrentLocation: () => dispatch(removeCurrentLocation())
});

NavContainer.propTypes = {
  toggleLogin: PropTypes.func,
  toggleShowUserRides: PropTypes.func,
  logoutUser: PropTypes.func,
  removeUserRides: PropTypes.func,
  removeCurrentLocation: PropTypes.func,
  user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);