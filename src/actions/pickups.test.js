import * as actions from './pickups';
import * as MOCKS from './../apiCalls/mockData';

describe('addPickups', () => {
  it('should return an object with a type ADD_PICKUPS', () => {
    let mockPickups = MOCKS.mockPickups;
    let expected = {
      type: "ADD_PICKUPS",
      pickups: mockPickups.pickup
    }
    let actual = actions.addPickups(mockPickups.pickup);

    expect(actual).toEqual(expected)
  })
})

describe('updatePickupShowing', () => {
  it('should return an object with type TOGGLE_SHOWING', () => {
    let mockPickup = {
      id: 1
    };
    let expected = {
      type: "TOGGLE_SHOWING",
      pickup: mockPickup
    };
    let actual = actions.updatePickupShowing(mockPickup);

    expect(actual).toEqual(expected);
  })
})