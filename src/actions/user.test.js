import * as actions from './user';
import { mockUser } from './../apiCalls/mockData';

describe('signinUser', () => {
  it('should return an object with the type SIGNIN_USER', () => {
    const userData = mockUser;
    const expected = {
      type: "SIGNIN_USER",
      user: userData,
    } 
    const actual = actions.signinUser(userData);

    expect(actual).toEqual(expected);
  })
})