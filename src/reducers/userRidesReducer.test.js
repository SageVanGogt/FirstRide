import userRidesReducer from './userRidesReducer';

describe('userRidesReducer', () => {
  it('should return a state with an array of rides in ADD case', () => {
    let mockAction = {
      type: "ADD_USER_RIDES",
      rides: [{}, {}]
    }
    let initialState = [];
    let expected = mockAction.rides;
    let actual = userRidesReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  })

  it('should return a state with an empty array in REMOVE case', () => {
    let mockAction = {
      type: "REMOVE_USER_RIDES"
    }
    let initialState = [{}, {}];
    let expected = [];
    let actual = userRidesReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  })
})