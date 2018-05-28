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
  })
})