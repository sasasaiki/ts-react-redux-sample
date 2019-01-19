import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator } from '../../root/RootModule';
import AddingArea from '../component/AddingArea'

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddingArea);