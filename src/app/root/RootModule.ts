import { combineReducers } from 'redux';
import * as Todos from '../todo/module/TodoReducer';
import * as VisibilityFilter from '../todo/module/filter/FilterReducer';

export type RootState = {
  todo: Todos.State;
  filter: VisibilityFilter.State;
};

// reducerで返すものが間違ってたりするとここにエラーが出ることがるので注意
export const rootReducer = combineReducers({
  todo: Todos.reducer,
  filter: VisibilityFilter.reducer,
});

// 要素名も全て一致させること
export const actionCreator = {
  todo: Todos.actionCreator,
  filter: VisibilityFilter.actionCreator,
};