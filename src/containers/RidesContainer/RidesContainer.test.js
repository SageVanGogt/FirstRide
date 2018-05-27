import React from 'react';
import { shallow } from 'enzyme';
import { RidesContainer, mapStateToProps, mapDispatchToProps } from './RidesContainer';
import * as MOCK from './../../apiCalls/mockData';

describe('RidesContainer', () => {
  let wrapper;
  let mockDestination;

  beforeEach(() => {
    mockDestination = {
      location_name: 'Red Rocks',
      id: 1
    }
    wrapper = shallow(<RidesContainer 
      destination={mockDestination}/>, 
      { disableLifeCycleMethods: true });
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('loadRides', () => {
    it('should call setRides with the correct params', () => {

    })
  })

  describe('mapStateToProps', () => {
    
    it('should return a state with expected props', () => {
      let mockState = {
        destination: 'Red Rocks',
        user: {},
        rides: []
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.destination;
      let expected = 'Red Rocks';

      expect(actual).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {

    it('should be called with the correct params', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: "ADD_RIDES",
        rides: MOCK.mockRides.rides
      }
      mappedProps.setRides(MOCK.mockRides.rides);

      expect(mockDispatch).toBeCalledWith(expected)
    })
  })
})