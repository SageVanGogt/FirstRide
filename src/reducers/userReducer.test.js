import userReducer from './userReducer';
import * as MOCK from './../apiCalls/mockData';

describe('userReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });

  it('should return a new state with user information in SIGNIN case', () => {
    let mockAction = {
      type: "SIGNIN_USER",
      user: MOCK.mockUser
    };
    let expected = MOCK.mockUser;
    let actual = userReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  })

  it('should return an empty obj state in SIGNOUT case', () => {
    let mockAction = {
      type: "SIGNOUT_USER"
    };
    let expected = {};
    let actual = userReducer(initialState, mockAction);

    expect(actual).toEqual(expected);    
  })
})