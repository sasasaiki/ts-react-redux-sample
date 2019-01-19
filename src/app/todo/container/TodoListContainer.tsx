import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState } from '../../root/RootModule';
import TodoListComponent from '../component/TodoList';
import { FilterType } from '../constant/FilterActionConstant';

// ここはStateが更新されるたびに呼ばれる
const mapStateToProps = (state: RootState) => {
  return {
    todos: createTodos()
  }

  function createTodos(){
    switch (state.filter.filterType) {
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

// ここは初回のみ呼ばれる（ぽい）
// componentで何か（クリックとか）した時にdispatchできるようにPropに渡してやる
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    toggleTodo: (id: number) => {
      dispatch(actionCreator.todo.toggleTodo({ id: id }));
    }
  }
};


//ここでAddTodoのPropに何を詰めるか宣言する
//二つのメソッドの返り値が合わさってPropが持つのと同じ要素を全て埋めなければコンパイルが通らない
//多い分には問題ないらしい（意味ないけど）
//今回はStateから何も使わないので空を返すメソッドにっている
//DispatchToPropsは省略できる
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent);