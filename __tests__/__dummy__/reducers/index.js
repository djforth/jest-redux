import {
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAIL,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
} from '../actions';

const initState = {
  error: '',
  items: [],
  createSuccess: false,
  getSuccess: false,
  updateSuccess: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case CREATE_ITEM_FAIL:
      return {
        ...state,
        createSuccess: false,
        error: action.error,
      };
    case CREATE_ITEM_SUCCESS:
      return {
        ...state,
        createSuccess: true,
        items: state.items.concat([
          {
            id: action.id,
            title: action.title,
          },
        ]),
      };
    case GET_ITEMS_FAIL:
      return {
        ...state,
        getSuccess: false,
        error: action.error,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        getSuccess: true,
        items: action.items,
      };
    case UPDATE_ITEM_FAIL:
      return {
        ...state,
        updateSuccess: false,
        error: action.error,
      };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        getSuccess: true,
        items: updateItem(state.items, action),
      };
    default:
      return state;
  }
};
