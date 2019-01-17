import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState } from '../../modules';
import TodoListComponent from '../../components/todo/TodoList';
import { FilterType } from '../../modules/todo/visibilityFilter/FilterAction';

const mapStateToProps = (state: RootState) => {
  return {
    todos: createTodos()
  }

  function createTodos(){
    switch (state.visibilityFilter.visibility) {
      case FilterType.ALL:
        return state.todos.todos;
      case FilterType.ACTIVE:
        return state.todos.todos.filter(e => e.completed);
      case FilterType.COMPLETED:
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