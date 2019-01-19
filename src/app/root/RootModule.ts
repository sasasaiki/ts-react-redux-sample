import { combineReducers } from 'redux';
import * as Todos from '../todo/reducer/TodoReducer';
import * as Filter from '../todo/reducer/FilterReducer';

export type RootState = {
  todo: Todos.State;
  filter: Filter.State;
};

// reducerで返すものが間違ってたりするとここにエラーが出ることがるので注意
export const rootReducer = combineReducers({
  todo: Todos.reducer,
  filter: Filter.reducer,
});

// 要素名も全て一致させること
export const actionCreator = {
  todo: Todos.actionCreator,
  filter: Filter.actionCreator,
};