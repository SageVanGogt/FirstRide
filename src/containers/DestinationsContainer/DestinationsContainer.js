import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchDestination } from '../../apiCalls/apiCalls';
import { setDestination } from './../../actions/destination';
import './DestinationsContainer.css'

export class DestinationsContainer extends Component {
  constructor(props) {
    super();
  }

  handleSelectDestination = async (event) => {
    const { name } = event.target;
    try {
      const response = await fetchDestination(name);
      const finalDestination = response.locations[0];
      this.props.setDestination(finalDestination);
    } catch (err) {
      return err
    }
  }

  render() {
    return (
      <div className="destinations">
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

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({
  setDestination: (data) => dispatch(setDestination(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(DestinationsContainer);