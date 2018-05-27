import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchDestination } from '../../apiCalls/apiCalls';
import { setDestination } from './../../actions/destination';

export class DestinationsContainer extends Component {
  constructor(props) {
    super();
  }

  handleSelectDestination = async (event) => {
    const { value } = event.target;
    try {
      const response = await fetchDestination(value);
      const destination = await response.json();
      this.props.setDestination(destination);
    } catch (err) {
      return err
    }
  }

  render() {
    return (
      <div className="destinations">
        <NavLink 
          to="/rides" 
          onClick={this.handleSelectDestination} 
          value="Red Rocks">
          Red Rocks
        </NavLink>
        <NavLink 
          to="/rides" 
          onClick={this.handleSelectDestination} 
          value="Breckenridge">
          Breckenridge
        </NavLink>
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