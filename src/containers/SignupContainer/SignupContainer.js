import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupUser } from './../../apiCalls/apiCalls';

export class SignupContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      user_id: '',
      email: '',
      password: '',
      user_img: '',
      bio: '',
      rating: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async () => {
    const response = await signupUser(this.state);
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
            type="text" 
            value="" 
            name="user_img"
            onChange={this.handleChange}
            placeholder="image"
          />
          <input 
            type="text" 
            value="" 
            name="bio"
            onChange={this.handleChange}
            placeholder="bio"
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);