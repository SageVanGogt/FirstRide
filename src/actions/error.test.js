import * as actions from './error';

describe('addError', () => {
  it('should return an object with type ADD_ERROR', () => {
    let mockError = 'You can\'t do that';
    let expected = {
      type: 'ADD_ERROR',
      error: mockError
    }
    let actual = actions.addError(mockError);

    expect(actual).toEqual(expected);
  })
})