import React from 'react';
import { shallow } from 'enzyme';
import { SignupContainer, mapDispatchToProps } from './SignupContainer';
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
    let mockUserInfo;

    beforeEach(() => {
      mockUserInfo = {
        user_name: 'heyo',
        email: 'thurmanvogt@gmail.com',
        password: ''
      }
    })

    it('should call signupUser with the correct params', async () => {
      let expected = mockUserInfo;
      wrapper.setState(mockUserInfo);
      Promise.resolve(wrapper.instance().handleSubmit());
      
      expect(signupUser).toHaveBeenCalledWith(expected);
    })

    it('should call mapDispatchToProps with the correct params', () => {
      let expected = {
        id: 1,
        user_name: 'heyo'
      }
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let mockUser = {
        id: 1,
        user_name: 'heyo'
      }
      let expected = {
        type: "SIGNIN_USER",
        user: mockUser
      }
      mappedProps.setUser(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })
})