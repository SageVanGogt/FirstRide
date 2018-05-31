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
export class App extends Component {
  constructor() {
    super(),

    this.state = {
      showLogin: false
    }
  }

  toggleLogin = () => {
    console.log('called')
    this.setState({
      showLogin: !this.state.showLogin
    })
  }

  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <NavContainer toggleLogin={this.toggleLogin}/>
        </div>
        {
          this.state.showLogin & !this.props.user.id && 
          <LoginComponent />
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
  destination: state.destination
})

export default withRouter(connect(mapStateToProps)(App))
