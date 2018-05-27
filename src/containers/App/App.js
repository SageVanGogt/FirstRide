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

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavContainer/>
        </div>
        <Switch>
          <Route 
            exact path="/" 
            component={DestinationsContainer}
          />
          <Route 
            exact path="/signin" 
            component={SigninContainer}
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
  user: state.user
})

export default withRouter(connect(mapStateToProps)(App))
