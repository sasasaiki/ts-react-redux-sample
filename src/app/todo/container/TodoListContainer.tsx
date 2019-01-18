import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState } from '../../root/RootModule';
import TodoListComponent from '../component/TodoList';
import { FilterType } from '../action/FilterAction';

const mapStateToProps = (state: RootState) => {
  return {
    todos: createTodos()
  }

  function createTodos(){
    switch (state.filter.visibility) {
      case FilterType.ALL:
        return state.todo.todos;//今回はそのままだがComponentで必要な型に変換するかもしれない？
      case FilterType.COMPLETED:
        return state.todo.todos.filter(e => e.completed);
      case FilterType.ACTIVE:
        return state.todo.todos.filter(e => !e.completed);
      default:
        throw new Error('Unknown filter.');
    }
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    toggleTodo: (id: number) => {
      dispatch(actionCreator.todo.toggleTodo({ id: id }));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent);