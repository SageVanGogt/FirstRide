import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SigninContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value="" 
            name="email"
            onChange={this.handleChange}
            placeholder="email"
          />
          <input 
            type="password" 
            value="" 
            name="password"
            onChange={this.handleChange}
            placeholder="password"
          />
          <input 
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);