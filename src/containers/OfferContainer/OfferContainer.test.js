import React from 'react';
import { shallow } from 'enzyme';
import { OfferContainer, mapStateToProps, mapDispatchToProps } from './OfferContainer';

describe('OfferContainer', () => {
  let wrapper;
  let mockDestination;
  let mockUser;

  beforeEach(() => {
    mockDestination = { id: 1 };
    mockUser = { id: 1 };
    wrapper = shallow(<OfferContainer 
      user={mockUser}
      destination={mockDestination}
    />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {

    it('should update the state when changes are made to inputs', () => {
      let mockEvent = {
        target: {
          name: 'car_type',
          value: 'sedan'
        }
      }
      let expected = 'sedan'
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('car_type')).toEqual(expected);
    })
  })

  describe('mapStateToProps', () => {

    it('should map the destination to props', () => {
      let mockState = {
        destination: {
          id: 1
        },
        user: {
          id: 1
        }
      };
      let expected = { id: 1 };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.destination;

      expect(actual).toEqual(expected);
    })

    it('should map the destination to props', () => {
      let mockState = {
        destination: {
          id: 1
        },
        user: {
          id: 1
        }
      };
      let expected = { id: 1 };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;

      expect(actual).toEqual(expected);
    })
  })
})