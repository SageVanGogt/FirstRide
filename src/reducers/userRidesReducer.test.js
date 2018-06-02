import userRidesReducer from './userRidesReducer';

describe('userRidesReducer', () => {
  it('should return a state with an array of rides in ADD case', () => {
    let mockAction = {
      type: "ADD_USER_RIDES",
      userRides: [{}, {}]
    }
    let initialState = [];
    let expected = mockAction.userRides;
    let actual = userRidesReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  })
})