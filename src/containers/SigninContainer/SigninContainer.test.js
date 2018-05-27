import React from 'react';
import { shallow } from 'enzyme';
import { SigninContainer, mapDispatchToProps } from './SigninContainer';
import { signinUser } from './../../apiCalls/apiCalls';
import * as MOCK from './../../apiCalls/mockData';

jest.mock('./../../apiCalls/apiCalls');

describe('SigninContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SigninContainer />)
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
        email: 'thurmanvogt@gmail.com',
        password: ''
      }
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state()).toEqual(expected)
    })
  })

  describe('handleSubmit', () => {
    it('should call signinUser with the correct params', async () => {
      const expected = {
        email: "thurmanvogt@gmail.com",
        password: "sage"
      }
      wrapper.setState(expected);
      Promise.resolve(wrapper.instance().handleSubmit());
      
      expect(signinUser).toHaveBeenCalledWith(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    it('should be called with the correct params', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let mockArg = MOCK.mockUser;
      let expected = {
        type: "SIGNIN_USER",
        user: MOCK.mockUser
      }
      mappedProps.signinUser(mockArg);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })
  })
})