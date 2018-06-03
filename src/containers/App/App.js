import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DestinationsContainer from './../DestinationsContainer/DestinationsContainer';
import RidesContainer from './../RidesContainer/RidesContainer';
import SigninContainer from './../SigninContainer/SigninContainer';
import ProfileContainer from './../ProfileContainer/ProfileContainer';
import NavContainer from './../NavContainer/NavContainer';
import LoginComponent from './../../components/LoginComponent/LoginComponent';
import * as actions from './../../actions/error';
import UserRidesContainer from './../../containers/UserRidesContainer/UserRidesContainer';
export class App extends Component {
  constructor() {
    super(),

    this.state = {
      showLogin: false,
      showUserRides: false
    }
  }

  toggleLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  };

  toggleShowUserRides = () => {
    this.setState({
      showUserRides: !this.state.showUserRides
    });
  };

  errorElement = () => {
    return (
      <div className="error-container">
        <strong>{this.props.error}</strong>
        <button onClick={this.props.removeError}>ok!</button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <NavContainer 
            toggleLogin={this.toggleLogin}
            toggleShowUserRides={this.toggleShowUserRides}/>
        </div>
        {
          this.props.error.length &&
          this.errorElement()
        }
        {
          this.state.showUserRides &&
          <UserRidesContainer
          toggleShowUserRides={this.toggleShowUserRides} />
        }
        {
          this.state.showLogin & !this.props.user.id && 
          <LoginComponent
            toggleLogin={this.toggleLogin} />
        }
        <Switch>
          <Route 
            exact path="/" 
            component={DestinationsContainer}
          />
          <Route 
            exact path="/rides" 
            component={RidesContainer}
          />
          <Route 
            exact path="/profile" 
            component={ProfileContainer}
          />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  destination: state.destination,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  removeError: () => dispatch(actions.removeError())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
