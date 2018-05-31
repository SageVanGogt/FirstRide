import React from 'react';
import { App, mapStateToProps } from './App';
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
})
