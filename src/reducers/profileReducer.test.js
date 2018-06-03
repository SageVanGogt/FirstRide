import profileReducer from './profileReducer';

describe('profileReducer', () => {
  it('should return a state with a profile in ADD_PROFILE case', () => {
    let mockAction = {
      type: "ADD_PROFILE",
      profile: { id: 1 }
    };
    let expected = { id: 1 };
    let initialState = {};
    let actual = profileReducer(initialState, mockAction);

    expect(actual).toEqual(expected)
  });

  it('should return the state in default case', () => {
    let initialState = {id: 1};
    let mockAction = {
      type: 'DEFAULT'
    };
    let actual = profileReducer(initialState, mockAction);
    let expected = initialState;

    expect(actual).toEqual(expected);
  });
})