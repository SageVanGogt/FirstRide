
import errorReducer from './errorReducer';

describe('error reducer', () => {
  it('should return a state with the error', () => {
    let initialState = '';
    let mockAction = {
      type: "ADD_ERROR",
      error: "Error adding"
    };
    let expected = "Error adding";
    let actual = errorReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  });

  it('should return a state no error', () => {
    let initialState = '';
    let mockAction = {
      type: "REMOVE_ERROR"
    };
    let expected = "";
    let actual = errorReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  });

  it('should return the state in default case', () => {
    let initialState = '';
    let mockAction = {
      type: 'DEFAULT'
    };
    let actual = errorReducer(initialState, mockAction);
    let expected = initialState;

    expect(actual).toEqual(expected);
  })
})