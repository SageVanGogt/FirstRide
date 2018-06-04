import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchDestination } from '../../apiCalls/apiCalls';
import { setDestination } from './../../actions/destination';
import './DestinationsContainer.css';

export class DestinationsContainer extends Component {
  constructor(props) {
    super(props);
  }

  handleSelectDestination = async (event) => {
    const { name } = event.target;
    try {
      const response = await fetchDestination(name);
      const finalDestination = response.locations[0];
      this.props.setDestination(finalDestination);
    } catch (err) {
      return err;
    }
  }

  render() {
    return (
      <div className="destinations">
        <h1 className="landing-instructions">
          Choose a destination to see available rides.
        </h1>
        <div className="redrocks-container">
          <NavLink  
            to='/rides'
            onClick={this.handleSelectDestination} 
            name="Red Rocks"
            className="location-pin">
            Red Rocks
          </NavLink>
        </div>
        <div className="breck-container">
          <NavLink
            to='/rides'
            onClick={this.handleSelectDestination} 
            name="Breckenridge"
            className="location-pin">
            Breckenridge
          </NavLink>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setDestination: (data) => dispatch(setDestination(data))
});

DestinationsContainer.propTypes = {
  setDestination: PropTypes.func,
  handleSelectDestination: PropTypes.func
};

export default connect(null, mapDispatchToProps)(DestinationsContainer);