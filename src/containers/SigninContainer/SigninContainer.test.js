import React from 'react';
import { shallow } from 'enzyme';
import { SigninContainer, mapDispatchToProps } from './SigninContainer';
import { signinUser } from './../../apiCalls/apiCalls';
import * as MOCK from './../../apiCalls/mockData';
import * as actions from './../../actions/user';

jest.mock('./../../apiCalls/apiCalls');

describe('SigninContainer', () => {
  let wrapper;
  let mockSigninUser;

  beforeEach(() => {
    mockSigninUser = jest.fn();
    wrapper = shallow(<SigninContainer 
      signinUser={mockSigninUser}/>)
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
    let mockSignin;
    let mockEvent;

    beforeEach(() => {
      mockSignin = {
        email: "thurmanvogt@gmail.com",
        password: "sage"
      };
      mockEvent = {
        preventDefault: jest.fn()
      };
    });

    it('should call signinUser with the correct params', async () => {
      let expected = mockSignin;
      wrapper.setState(expected);
      Promise.resolve(wrapper.instance().handleSubmit(mockEvent));
      
      expect(signinUser).toHaveBeenCalledWith(expected);
    })

    it('should call signinUser with the correct params', async () => {
      let expected = {
        id: 1,
        user_name: 'sage'
      }
      await wrapper.instance().handleSubmit(mockEvent);

      expect(mockSigninUser).toHaveBeenCalledWith(expected)
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