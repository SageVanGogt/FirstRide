import * as actions from './user';
import { mockUser } from './../apiCalls/mockData';

describe('user related actions', () => {
  it('signinUser should return an object with the type SIGNIN_USER', () => {
    const userData = mockUser;
    const expected = {
      type: "SIGNIN_USER",
      user: userData,
    } 
    const actual = actions.signinUser(userData);

    expect(actual).toEqual(expected);
  })

  it('signoutUser should return an object with the type SIGNOUT_USER', () => {
    const expected = {
      type: "SIGNOUT_USER"
    }
    const actual = actions.signoutUser();
    
    expect(actual).toEqual(expected);
  })
})