import React from 'react';
import { shallow } from 'enzyme';
import { DestinationsContainer, mapDispatchToProps } from './DestinationsContainer';
import { fetchDestination } from './../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('DestinationsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DestinationsContainer />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleSelectDestination', () => {
    
    it('should call fetchDestination with the correct params', async () => {
      const mockEvent = {
        target: {
          name: 'Red Rocks'
        }
      };
      const expected = 'Red Rocks';
      Promise.resolve(wrapper.instance().handleSelectDestination(mockEvent));
      
      expect(fetchDestination).toHaveBeenCalledWith(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    it('should be called with the correct params', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const expected = {
        type: 'SET_DESTINATION',
        destination: {
          id: 1, 
          location_name: 'Red Rocks', 
          location_lat_lng: '39.6654, 105.2057'
        }
      }
      const mockDestination = {
        id: 1, 
        location_name: 'Red Rocks', 
        location_lat_lng: '39.6654, 105.2057'
      }
      mappedProps.setDestination(mockDestination);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })
  })
})