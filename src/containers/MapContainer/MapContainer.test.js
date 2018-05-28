import React from 'react';
import { shallow } from 'enzyme';
import { MapContainer, mapStateToProps, mapDispatchToProps } from './MapContainer';
import * as MOCK from './../../apiCalls/mockData';
import * as API from './../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('MapContainer', () => {
  let wrapper;
  let mockSetPickups
  let mockDestination;

  beforeEach(() => {
    mockSetPickups = jest.fn();
    mockDestination = {
      id: 1
    }
    wrapper = shallow(<MapContainer 
      setPickups={mockSetPickups}
      destination={mockDestination}
    />);
  })

  describe('loadPickups', () => {

    it('should call fetchPickups with the correct params', async () => {
      let expected = 1;
      await wrapper.instance().loadPickups();

      expect(API.fetchPickups).toHaveBeenCalledWith(expected);
    })

    it('should call setPickups with the correct params', async () => {
      let expected = MOCK.mockPickups.pickup;
      await wrapper.instance().loadPickups();

      expect(mockSetPickups).toHaveBeenCalledWith(expected);
    })
  })

  describe('mapStateToProps', () => {

    it('should return the destination prop from state', () => {
      let mockState = {
        destination: {
          id: 1,
          location_name: 'Red Rocks'
        },
        rides: [{}, {}]
      };
      let mappedProps = mapStateToProps(mockState);
      let expected = mockState.destination;
      let actual = mappedProps.destination;

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
  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: "ADD_PICKUPS", 
        pickups: MOCK.mockPickups.pickup
      };
      mappedProps.setPickups(MOCK.mockPickups.pickup);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  })
})