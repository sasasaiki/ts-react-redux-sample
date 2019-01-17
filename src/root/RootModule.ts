import { combineReducers } from 'redux';
import * as Todos from '../todo/module/TodoReducer';
import * as VisibilityFilter from '../todo/module/visibilityFilter/FilterReducer';

export type RootState = {
  todos: Todos.State;
  visibilityFilter: VisibilityFilter.State;
};

export const rootReducer = combineReducers({
  todos: Todos.reducer,
  visibilityFilter: VisibilityFilter.reducer,
});

export const actionCreator = {
  todos: Todos.actionCreator,
  visibilityFilter: VisibilityFilter.actionCreator,
};