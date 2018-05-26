import React, { Component } from 'react';
import './App.css';
import MapContainer from './../MapContainer/MapContainer';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer />
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

export default withRouter(App)
