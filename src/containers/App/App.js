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
import OfferContainer from './../OfferContainer/OfferContainer';
import LoginComponent from './../../components/LoginComponent/LoginComponent';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavContainer/>
        </div>
        <Switch>
          <Route
            exact path="/login"
            render={() => (
              this.props.user.email ?
                <Redirect to="/" /> :
                <LoginComponent />
            )}
          />
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
          <Route
            exact path='/offer'
            component={OfferContainer} 
          />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  destination: state.destination
})

export default withRouter(connect(mapStateToProps)(App))
