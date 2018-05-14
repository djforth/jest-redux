export const CREATE_ITEM = 'CREATE_ITEM';
export const CREATE_ITEM_FAIL = 'CREATE_ITEM_FAIL';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEMS_FAIL = 'GET_ITEMS_FAIL';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';

export const UPDATE_ITEM = 'UPDATE_ITEM';
export const UPDATE_ITEM_FAIL = 'UPDATE_ITEM_FAIL';
export const UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS';

export const CreateItem = data => ({
  ...data,
  type: CREATE_ITEM,
});

export const GetItems = () => ({
  type: GET_ITEMS,
});

export const UpdateItem = data => ({
  ...data,
  type: UPDATE_ITEM,
});
