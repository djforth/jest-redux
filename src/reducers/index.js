export default reducer => ({ action, expectedState, state }) => {
  test(`When ${action.type} is passed to reducer`, () => {
    expect(reducer(state, action)).toEqual(expect.objectContaining(expectedState));
  });
};

export const defaultState = reducer => {
  test('When action not recognised will just return state', () => {
    const state = {
      foo: 'bar',
    };
    const action = { type: 'FAKE_ACTION' };
    expect(reducer(state, action)).toEqual(expect.objectContaining(state));
  });
};
