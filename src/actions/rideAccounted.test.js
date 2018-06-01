
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
  })
})