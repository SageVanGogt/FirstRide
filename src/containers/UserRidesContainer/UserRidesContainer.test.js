import React from 'react';
import { shallow } from 'enzyme';
import { UserRidesContainer } from './UserRidesContainer';
import * as API from './../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('UserRidesContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UserRidesContainer />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('loadPassengerRides', () => {
    it('should call fetchRidesPassenger with the correct params', async () => {
      let expected = 1;
      await wrapper.instance().loadPassengerRides();

      expect(API.fetchRidesPassengers).toHaveBeenCalledWith(expected)
    })
  })
})