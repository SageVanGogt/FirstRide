import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from './../../actions/user';
import { removeUserRides } from './../../actions/userRides';
import './NavContainer.css';

export class NavContainer extends Component {
  constructor(props) {
    super(props);
  };

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
          <NavLink className="nav-link" to="/">Home</NavLink>
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
  };
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(actions.signoutUser()),
  removeUserRides: () => dispatch(removeUserRides())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);