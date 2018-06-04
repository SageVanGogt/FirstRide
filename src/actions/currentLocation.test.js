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
  });
});

describe('removeCurrentLocation', () => {
  it('should return an object with type REMOVE_CURR_LOCATION', () => {
    let expected = {
      type: "REMOVE_CURR_LOCATION"
    };
    let actual = actions.removeCurrentLocation();
    
    expect(actual).toEqual(expected);
  });
});