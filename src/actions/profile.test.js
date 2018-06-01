import * as actions from './profile';

describe('addProfile', () => {
  it('should return an object with type ADD_PROFILE', () => {
    let mockProfile = { id: 1 };
    let actual = actions.addProfile(mockProfile);
    let expected = {
      type: "ADD_PROFILE", 
      profile: mockProfile
    }

    expect(actual).toEqual(expected);
  });
})