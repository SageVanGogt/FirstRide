import React from 'react';
import { App, mapStateToProps } from './App';
import { shallow } from 'enzyme';
 
describe('App', () => {
  let wrapper;
  let mockUser;

  beforeEach(() => {
    mockUser = {
      id: 1
    }
    wrapper = shallow(<App 
    user={mockUser}/>);
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
    it('should pull user from the state', () => {
      let mockState = {
        user: {
          email: "thurmanvogt@gmail.com"
        },
        destination: {
          location_name: 'Red Rocks'
        }
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;
      let expected = mockState.user;

      expect(actual).toEqual(expected);
    })

    it('should pull destination from the state', () => {
      let mockState = {
        user: {
          email: "thurmanvogt@gmail.com"
        },
        destination: {
          location_name: 'Red Rocks',
          id: 1
        },
        rides: []
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.destination;
      let expected = mockState.destination;

      expect(actual).toEqual(expected);
    })
  })
})
