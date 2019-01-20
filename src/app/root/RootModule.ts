import { combineReducers } from 'redux';
import * as Todos from '../todo/reducer/TodoReducer';
import { History } from 'history'
import * as Filter from '../todo/reducer/FilterReducer';
import { connectRouter } from 'connected-react-router'

export type RootState = {
  todo: Todos.State;
  filter: Filter.State;
};

// reducerで返すものが間違ってたりするとここにエラーが出ることがるので注意
export const rootReducer = (history:History) => combineReducers({
  router: connectRouter(history),
  todo: Todos.reducer,
  filter: Filter.reducer,
});

// 要素名も全て一致させること
export const actionCreator = {
  todo: Todos.actionCreator,
  filter: Filter.actionCreator,
};