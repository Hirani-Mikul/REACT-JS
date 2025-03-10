import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import Data from './Components/data';
import { styleValues, userListReducers } from './reducers/userReducers';
const initialState = {};

const reducer = combineReducers({
  userList: userListReducers,
  values: styleValues,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
