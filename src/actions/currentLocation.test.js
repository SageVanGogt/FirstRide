import * as actions from './currentLocation';

describe('addCurrentLocation', () => {
  it('should return an object with type ADD_LOCATION', () => {
    let mockArg = {
      lat: 2,
      lng: 4
    };
    let expected = {
      type: "ADD_CURR_LOCATION",
      location: mockArg
    };
    let actual = actions.addCurrentLocation(mockArg);

    expect(actual).toEqual(expected);
  })
})