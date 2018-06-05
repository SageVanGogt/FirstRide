import * as actions from './rides';
import * as MOCK from './../apiCalls/mockData';

describe('addRides', () => {
  it('should return an object with the type ADD_RIDES', () => {
    let mockRides = MOCK.mockRides;
    let expected = {
      type: 'ADD_RIDES',
      rides: mockRides.rides
    };
    let actual = actions.addRides(mockRides.rides);

    expect(actual).toEqual(expected);
  });
});

describe('removeRides', () => {
  it('should return an object with the type REMOVE_RIDES', () => {
    let expected = {
      type: "REMOVE_RIDES"
    };
    let actual = actions.removeRides();

    expect(actual).toEqual(expected);
  });
});

describe('addNewRides', () => {
  it('should return an object with type ADD_NEW_RIDE', () => {
    let mockRide = {
      id: 1
    };
    let expected = {
      type: "ADD_NEW_RIDE",
      ride: mockRide
    };
    let actual = actions.addNewRide(mockRide);

    expect(actual).toEqual(expected);
  })
})
