import userReducer from './userReducer';
import * as MOCK from './../apiCalls/mockData';

describe('userReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });

  it('should return a new state with user information', () => {
    let mockAction = {
      type: "SIGNIN_USER",
      user: MOCK.mockUser
    };
    let expected = MOCK.mockUser;
    let actual = userReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  })
})