import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState } from '../../root/RootModule';
import TodoListComponent from '../component/TodoList';
import { FilterType } from '../module/filter/FilterAction';

const mapStateToProps = (state: RootState) => {
  return {
    todos: createTodos()
  }

  function createTodos(){
    switch (state.visibilityFilter.visibility) {
      case FilterType.ALL:
        return state.todos.todos;
      case FilterType.COMPLETED:
        return state.todos.todos.filter(e => e.completed);
      case FilterType.ACTIVE:
        return state.todos.todos.filter(e => !e.completed);
      default:
        throw new Error('Unknown filter.');
    }
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    toggleTodo: (id: number) => {
      dispatch(actionCreator.todos.toggleTodo({ id: id }));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent);