
import errorReducer from './errorReducer';

describe('error reducer', () => {
  it('should return a state with the error', () => {
    let initialState = [];
    let mockAction = {
      type: "ADD_ERROR",
      error: "Error adding"
    };
    let expected = "Error adding";
    let actual = errorReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  });
})