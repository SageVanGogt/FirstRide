import React from 'react';
import { shallow } from 'enzyme';
import { SignupContainer } from './SignupContainer';
import { signupUser } from './../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('SignupContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignupContainer />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {
    it('should update the state when input value changes', () => {
      const mockEvent = {
        target: {
          value: 'thurmanvogt@gmail.com',
          name: "email"
      }}
      const expected = {
        user_name: '',
        email: 'thurmanvogt@gmail.com',
        password: ''
      }
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state()).toEqual(expected)
    })
  })

  describe('handleSubmit', () => {
    it('should call signupUser with the correct params', async () => {
      const expected = {
        user_name: 'heyo',
        email: 'thurmanvogt@gmail.com',
        password: ''
      }
      
      wrapper.setState(expected);
      Promise.resolve(wrapper.instance().handleSubmit());
      
      expect(signupUser).toHaveBeenCalledWith(expected);
    })
  })
})