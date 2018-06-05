import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
 
describe('App', () => {
  let wrapper;
  let mockUser;
  let mockError;

  beforeEach(() => {
    mockError = 'nono';
    mockUser = {
      id: 1
    }
    wrapper = shallow(<App 
    user={mockUser}
    error={mockError}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('toggleLogin', () => {
    it('should toggle the state of showLogin when called', () => {
      let expected = true;
      wrapper.instance().toggleLogin();
      let actual = wrapper.state('showLogin');

      expect(actual).toEqual(expected);
    })
  })

  describe('toggleShowUserRides', () => {
    it('should toggle the state of showUserRides when called', () => {
      let expected = true;
      wrapper.instance().toggleShowUserRides();
      let actual = wrapper.state('showUserRides');

      expect(actual).toEqual(expected);
    });
  });

  describe('errorElement', () => {
    it('should return an element with a div that has class error-container', () => {
      let actual = wrapper.instance().errorElement();
      let expected = 'error-container';

      expect(actual.props.className).toEqual(expected);
    })
  })

  describe('mapStateToProps', () => {
    let mockState;
    let mappedProps;

    beforeEach(() => {
      mockState = {
        user: {
          email: "thurmanvogt@gmail.com"
        },
        destination: {
          location_name: 'Red Rocks',
          id: 1
        },
        rides: [],
        error: 'nono'
      };
      mappedProps = mapStateToProps(mockState); 
    });

    it('should pull user from the state', () => {
      let actual = mappedProps.user;
      let expected = mockState.user;

      expect(actual).toEqual(expected);
    });

    it('should pull destination from the state', () => {
      let actual = mappedProps.destination;
      let expected = mockState.destination;

      expect(actual).toEqual(expected);
    })

    it('should map the error to props', () => {
      let actual = mappedProps.error;
      let expected = mockState.error;

      expect(actual).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params if removeError', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: "REMOVE_ERROR"
      }
      
      mappedProps.removeError();

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })

    it('should call dispatch with the correct params if setError', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: "ADD_ERROR",
        error: 'nono'
      }
      
      mappedProps.setError('nono');

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })
  })
})
