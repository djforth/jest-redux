import configureStore from 'redux-mock-store';

import { ActionHelper } from 'actions';

import { CREATE_ITEM, GET_ITEMS, UPDATE_ITEM, CreateItem, GetItems, UpdateItem } from '../__dummy__/actions';

describe('Standard Action', () => {
  let store;
  beforeAll(() => {
    const mockStore = configureStore();
    store = mockStore({});
  });

  const testAction = ActionHelper(() => store);

  testAction({
    action: CreateItem({ title: 'foo' }),
    name: 'CREATE_ITEM',
    expectedPayload: { title: 'foo', type: CREATE_ITEM },
  });

  testAction({
    action: GetItems(),
    name: 'GET_ITEMS',
    expectedPayload: { type: GET_ITEMS },
  });

  testAction({
    action: UpdateItem({ title: 'foo' }),
    name: 'UPDATE_ITEMS',
    expectedPayload: { title: 'foo', type: UPDATE_ITEM },
  });
});
