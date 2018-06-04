import currentLocationReducer from './currentLocationReducer';

describe('currentLocationReducer', () => {

  it('should return a state with a new location in case ADD_CURR_LOCATION', () => {
    let mockLocation = {
      lat: 3,
      lng: 4
    };
    let initialState = {};
    let mockAction = {
      type: "ADD_CURR_LOCATION",
      location: mockLocation
    }
    let expected = {
      lat: 3,
      lng: 4
    }
    let actual = currentLocationReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  });

  it('should return an empty object in case REMOVE_CURR_LOCATION', () => {
    let expected = {};
    let mockAction = {
      type: "REMOVE_CURR_LOCATION"
    };
    let initialState = {id: 1, name: 'scoop'};
    let actual = currentLocationReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  });

  it('should return the state in default case', () => {
    let initialState = {lat: 1, lng: 2};
    let mockAction = {
      type: 'DEFAULT'
    };
    let actual = currentLocationReducer(initialState, mockAction);
    let expected = initialState;

    expect(actual).toEqual(expected);
  });
});