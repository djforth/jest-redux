import {
  CREATE_ITEM,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAIL,
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  UPDATE_ITEM,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
} from '../actions';

const CreateItem = async (next, { title }) => {
  try {
    const response = await fetch('api/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
    const data = await response.json();
    if (response.ok) {
      return next({
        type: CREATE_ITEM_SUCCESS,
        ...data,
      });
    }
  } catch (error) {
    return next({
      type: CREATE_ITEM_FAIL,
      error,
    });
  }
};

const GetItem = async (next, { title }) => {
  try {
    const response = await fetch('api/get');
    const data = await response.json();
    if (response.ok) {
      return next({
        type: GET_ITEMS_SUCCESS,
        items: data,
      });
    }
  } catch (error) {
    return next({
      type: GET_ITEMS_FAIL,
      error,
    });
  }
};

const UpdateItem = async (next, { title, id }) => {
  try {
    const response = await fetch('api/update', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, id }),
    });
    const data = await response.json();
    if (response.ok) {
      return next({
        type: UPDATE_ITEM_SUCCESS,
        ...data,
      });
    }
  } catch (error) {
    return next({
      type: UPDATE_ITEM_FAIL,
      error,
    });
  }
};

export default store => next => async action => {
  switch (action.type) {
    case CREATE_ITEM:
      return CreateItem(next, action);
    case GET_ITEMS:
      return GetItem(next, action);
    case UPDATE_ITEM:
      return UpdateItem(next, action);
    default:
      return next(action);
  }
};
