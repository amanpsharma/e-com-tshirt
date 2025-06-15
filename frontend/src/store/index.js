import { createStore, combineReducers } from 'redux';

const ADD_ITEM = 'ADD_ITEM';

export const addItem = () => ({ type: ADD_ITEM });

const initialCartState = { count: 0 };

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ cart: cartReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
