import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator } from '../../modules';
import AddTodo from '../../components/AddTodo';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onSubmit: (text: string) => {
      dispatch(actionCreator.todos.addTodo({ text }));
    }
  }
};

//ここでAddTodoのPropに何を詰めるか宣言する
//二つのメソッドの返り値が合わさってPropが持つのと同じ要素を全て埋めなければコンパイルが通らない
//多い分には問題ないらしい（意味ないけど）
//今回はStateから何も使わないので空を返すメソッド担っている
//DispatchToPropsは省略できる
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);