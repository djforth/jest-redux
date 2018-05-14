import {
  CREATE_ITEM_FAIL,
  CREATE_ITEM_SUCCESS,
  GET_ITEMS_FAIL,
  GET_ITEMS_SUCCESS,
  UPDATE_ITEM_FAIL,
  UPDATE_ITEM_SUCCESS,
} from '../__dummy__/actions';

import Reducer from '../__dummy__/reducers';

import ReducerHelper, { defaultState } from 'reducers';

const reducerTest = ReducerHelper(Reducer);

const actions = [
  {
    action: {
      type: CREATE_ITEM_FAIL,
      error: 'Error Message',
    },
    expectedState: {
      error: 'Error Message',
      createSuccess: false,
    },
    state: {
      error: '',
      createSuccess: true,
    },
  },
  {
    action: {
      type: CREATE_ITEM_SUCCESS,
      id: 1,
      title: 'foo',
    },
    expectedState: {
      createSuccess: true,
      items: [
        {
          id: 1,
          title: 'foo',
        },
      ],
    },
    state: {
      createSuccess: false,
      items: [],
    },
  },
];

describe('Friends Reducer', () => {
  defaultState(Reducer);
  actions.forEach(reducerTest);
});
