import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateProfileContainer from './../CreateProfileContainer/CreateProfileContainer';

export class ProfileContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <CreateProfileContainer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);