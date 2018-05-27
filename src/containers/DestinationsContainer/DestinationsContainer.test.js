import React from 'react';
import { shallow } from 'enzyme';
import { DestinationsContainer } from './DestinationsContainer';
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
          value: 'Red Rocks'
        }
      };
      const expected = 'Red Rocks';
      Promise.resolve(wrapper.instance().handleSelectDestination(mockEvent));
      
      expect(fetchDestination).toHaveBeenCalledWith(expected);
    })
  })

  describe('mapDispatchToProps', () => {

  })
})