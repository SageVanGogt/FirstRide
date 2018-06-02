import * as actions from './userRides';

describe('addUserRides', () => {
  it('should return an object with type ADD_USER_RIDES', () => {
    let mockRides = [{}, {}];
    let expected = {
      type: "ADD_USER_RIDES",
      rides: mockRides
    }
    let actual = actions.addUserRides(mockRides);

    expect(actual).toEqual(expected);
  })
})