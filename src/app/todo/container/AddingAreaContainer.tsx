import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator } from '../../root/RootModule';
import AddTodo from '../component/AddingArea'

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onSubmit: (text: string) => {
      dispatch(actionCreator.todo.addTodo({ text }));
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
)(AddTodo);