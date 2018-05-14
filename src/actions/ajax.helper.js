export default getStore => ({ action, actionName, fetchData, failType, expectedPayloads, returnPayload, url }) => {
  describe(actionName, () => {
    describe(`If ${actionName} is a success`, () => {
      let actions, store, fetchUrl, fetchBlock;
      beforeAll(async () => {
        const payload = typeof returnPayload === 'string' ? returnPayload : JSON.stringify(returnPayload);
        store = getStore();
        store.clearActions();
        fetch.mockResponse(payload);
        // Return the promise
        await store.dispatch(action);
        /* eslint-disable */
        fetchUrl = fetch.mock.calls[0][0];
        fetchBlock = fetch.mock.calls[0][1];
        /* eslint-enable */
        actions = store.getActions();
      });

      expectedPayloads.forEach((payload, i) => {
        test(`Action ${i} should be called with payload containing`, () => {
          expect(actions[i]).toEqual(expect.objectContaining(payload));
        });
      });

      if (url || fetchData) {
        describe('Fetch is call with', () => {
          if (url) {
            test(`should call a url of ${url}`, () => {
              expect(fetchUrl).toEqual(expect.stringContaining(url));
            });
          }

          if (fetchData) {
            const { method, body } = fetchData;

            if (method) {
              test(`Should have been called with the method ${method}`, () => {
                expect(fetchBlock.method).toEqual(method);
              });
            }

            test(`Should have been called with the correct headers`, () => {
              expect(fetchBlock.headers).toEqual(
                expect.objectContaining({
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                })
              );
            });

            if (body) {
              test(`Should have been called with the body`, () => {
                expect(JSON.parse(fetchBlock.body)).toEqual(expect.objectContaining(body));
              });
            }
          }
        });
      }
    });

    describe(`If ${actionName} is a fail`, () => {
      let store;
      beforeAll(async () => {
        store = getStore();
        store.clearActions();
        fetch.mockReject(new Error('fake error message'));

        // Return the promise
        await store.dispatch(action);
      });

      test('should return fail', async () => {
        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        const expectedPayload = { type: failType, error: new Error('fake error message') };

        expect(actions[0]).toEqual(expectedPayload);
      });
    });
  });
};
