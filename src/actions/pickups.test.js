import * as actions from './pickups';
import * as MOCKS from './../apiCalls/mockData';

describe('addPickups', () => {
  it('should return an object with a type ADD_PICKUPS', () => {
    let mockPickups = MOCKS.mockPickups;
    let expected = {
      type: "ADD_PICKUPS",
      pickups: mockPickups.pickup
    }
    let actual = actions.addPickups(mockPickups.pickup);

    expect(actual).toEqual(expected)
  })
})