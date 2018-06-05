
import * as actions from './rideAccounted';

describe('addRidesAccounted', () => {
  it('should return an object with the type ADD_RIDES_ACCOUNTED', () => {
    let mockRidesAccounted = [{}, {}];
    let expected = {
      type: "ADD_RIDES_ACCOUNTED",
      ridesAccounted: mockRidesAccounted
    };
    let actual = actions.addRidesAccounted(mockRidesAccounted);

    expect(actual).toEqual(expected);
  });
});

describe('removeRideAccounted', () => {
  it('should return an object with the type REMOVE_RIDE_ACCOUNTED', () => {
    let mockRide = {
      ride_id: 1,
      passenger_id: 1
    }; 
    let expected = {
      type: 'REMOVE_RIDE_ACCOUNTED',
      ride: mockRide
    };
    let actual = actions.removeRideAccounted(mockRide);

    expect(actual).toEqual(expected);
  });
});