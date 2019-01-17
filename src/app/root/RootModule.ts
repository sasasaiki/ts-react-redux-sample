import { combineReducers } from 'redux';
import * as Todos from '../todo/module/TodoReducer';
import * as VisibilityFilter from '../todo/module/filter/FilterReducer';

export type RootState = {
  todos: Todos.State;
  visibilityFilter: VisibilityFilter.State;
};

// reducerで返すものが間違ってたりするとここにエラーが出ることがるので注意
export const rootReducer = combineReducers({
  todos: Todos.reducer,
  visibilityFilter: VisibilityFilter.reducer,
});

export const actionCreator = {
  todos: Todos.actionCreator,
  visibilityFilter: VisibilityFilter.actionCreator,
};