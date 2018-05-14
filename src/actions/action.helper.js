export default getStore => ({ action, expectedPayload, name }) => {
  test(`should trigger ${name} action`, () => {
    const store = getStore();
    store.clearActions();
    // Return the promise
    store.dispatch(action);

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    expect(actions).toEqual([expectedPayload]);
  });
};
