import React from 'react';
import { shallow } from 'enzyme';
import { MapContainer, mapStateToProps, mapDispatchToProps } from './MapContainer';
import * as MOCK from './../../apiCalls/mockData';
import * as API from './../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('MapContainer', () => {
  let wrapper;
  let mockToggleShowing;
  let mockDestination;

  beforeEach(() => {
    mockToggleShowing = jest.fn();
    mockDestination = {
      id: 1
    };
    wrapper = shallow(<MapContainer 
      destination={mockDestination}
      toggleShowing={mockToggleShowing}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('toggleShowing', () => {
    it('should call toggleShowing with the correct params', () => {
      let expected = {};
      wrapper.instance().toggleShowing({});

      expect(mockToggleShowing).toHaveBeenCalledWith(expected);
    })
  })

  describe('mapStateToProps', () => {

    it('should return the currentLocation prop from state', () => {
      let mockState = {
        destination: {},
        rides: [{}, {}],
        currentLocation: {}
      };
      let mappedProps = mapStateToProps(mockState);
      let expected = mockState.currentLocation;
      let actual = mappedProps.currentLocation;

      expect(actual).toEqual(expected);
    })

    it('should return the pickupLocations from state', () => {
      let mockState = {
        destination: {
          id: 1,
          location_name: 'Red Rocks'
        },
        rides: [{}, {}],
        pickupLocations: MOCK.mockPickups.pickup
      };
      let mappedProps = mapStateToProps(mockState);
      let expected = mockState.pickupLocations;
      let actual = mappedProps.pickupLocations;

      expect(actual).toEqual(expected);
    })

    it('should return the rides from state', () => {
      let mockState = {
        destination: {
          id: 1,
          location_name: 'Red Rocks'
        },
        rides: [{}, {}],
        pickupLocations: MOCK.mockPickups.pickup
      };
      let mappedProps = mapStateToProps(mockState);
      let expected = mockState.rides;
      let actual = mappedProps.rides;

      expect(actual).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: "TOGGLE_SHOWING", 
        pickup: {}
      };
      mappedProps.toggleShowing(expected.pickup);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  })
})