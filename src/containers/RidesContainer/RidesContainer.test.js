import React from 'react';
import { shallow } from 'enzyme';
import { RidesContainer, mapStateToProps, mapDispatchToProps } from './RidesContainer';
import * as MOCK from './../../apiCalls/mockData';
import * as API from './../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('RidesContainer', () => {
  let wrapper;
  let mockDestination;
  let mockSetRides;

  beforeEach(() => {
    mockDestination = {
      location_name: 'Red Rocks',
      id: 1
    }
    mockSetRides = jest.fn();
    wrapper = shallow(<RidesContainer 
      destination={mockDestination}
      setRides={mockSetRides}/>
    );
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {
    
    it('should update the correct state with the value of the input', () => {
      let mockEvent = {
        target: {
          value: 'seattle', 
          name: 'city'
        }
      };
      let expected = 'seattle';
      wrapper.instance().handleChange(mockEvent);
      let actual = wrapper.state('city');
      
      expect(actual).toEqual(expected);
    })
  })

  describe('handleSubmit', () => {

    it('should call format address with the correct params', () => {

    })
  });

  describe('formatAddress', () => {

    it('should return an address with no spaces', () => {
      let expected = '2600+fairview,+seattle,+WA'
      wrapper.setState({
        street: '2600 fairview',
        city: 'seattle', 
        state: 'WA'
      })
      let actual = wrapper.instance().formatAddress();
      
      expect(actual).toEqual(expected);
    })
  });

  describe('loadRides', () => {
    it('should call fetchRides with the correct params', async () => {
      await wrapper.instance().loadRides();
      expect(API.fetchRides).toHaveBeenCalledWith(mockDestination.id)
    })

    it('should call setRides with correct params', async () => {
      const expected = MOCK.mockRides.rides
      await wrapper.instance().loadRides()
      expect(mockSetRides).toHaveBeenCalledWith(expected)
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