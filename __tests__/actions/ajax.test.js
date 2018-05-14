import configureStore from 'redux-mock-store';
import middleware from '../__dummy__/middleware';

import { AjaxHelper } from 'actions';

import {
  CREATE_ITEM,
  CREATE_ITEM_FAIL,
  CREATE_ITEM_SUCCESS,
  GET_ITEMS,
  GET_ITEMS_FAIL,
  GET_ITEMS_SUCCESS,
  UPDATE_ITEM,
  UPDATE_ITEM_FAIL,
  UPDATE_ITEM_SUCCESS,
  CreateItem,
  GetItems,
  UpdateItem,
} from '../__dummy__/actions';

describe('Test Ajax Action', () => {
  let store;
  beforeAll(() => {
    const mockStore = configureStore([middleware]);
    store = mockStore();
  });

  beforeEach(() => {
    fetch.resetMocks();
  });

  const ajaxHelper = AjaxHelper(() => store);

  const data = {
    id: 1,
    title: 'foo',
  };

  ajaxHelper({
    action: CreateItem({ title: 'foo', type: CREATE_ITEM }),
    actionName: 'CreateItem',
    expectedPayloads: [{ title: 'foo', type: CREATE_ITEM_SUCCESS }],
    failType: CREATE_ITEM_FAIL,
    returnPayload: JSON.stringify(data),
    fetchData: {
      method: 'POST',
      body: {
        title: 'foo',
      },
    },
    url: 'api/create',
  });

  ajaxHelper({
    action: GetItems({ title: 'bar', id: 1, type: GET_ITEMS }),
    actionName: 'GetItem',
    expectedPayloads: [{ items: [{ title: 'bar', id: 1 }], type: GET_ITEMS_SUCCESS }],
    failType: GET_ITEMS_FAIL,
    returnPayload: JSON.stringify([{ title: 'bar', id: 1 }]),
    url: 'api/get',
  });

  ajaxHelper({
    action: UpdateItem({ title: 'bar', id: 1, type: UPDATE_ITEM }),
    actionName: 'UpdateItem',
    expectedPayloads: [{ title: 'bar', id: 1, type: UPDATE_ITEM_SUCCESS }],
    failType: UPDATE_ITEM_FAIL,
    returnPayload: JSON.stringify({ title: 'bar', id: 1 }),
    fetchData: {
      method: 'PATCH',
      body: {
        id: 1,
        title: 'bar',
      },
    },
    url: 'api/update',
  });
});
