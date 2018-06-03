import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signinUser } from './../../apiCalls/apiCalls';
import * as actions from './../../actions/user';
import './SigninContainer.css';

export class SigninContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signinUser(this.state);
    const user = {
      id: response.user[0].id,
      user_name: response.user[0].user_name
    }
    this.props.signinUser(user);
  }

  render() {
    return (
      <div className="signin-container">
        <form 
          action="submit" 
          onSubmit={this.handleSubmit}
          className="signin-form">
          <input 
            className="signin-input"
            type="text" 
            name="email"
            onChange={this.handleChange}
            placeholder="email"
          />
          <input 
            className="signin-input"
            type="password" 
            name="password"
            onChange={this.handleChange}
            placeholder="password"
          />
          <input 
            className="cred-submit-btn"
            type="submit"
            value="Login"            
          />
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({
  signinUser: (userData) => dispatch(actions.signinUser(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);