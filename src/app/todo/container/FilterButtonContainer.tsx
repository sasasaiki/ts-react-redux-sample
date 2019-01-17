import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState } from '../../root/RootModule';
import Button from '../component/FilterButton';

import { FilterType } from '../module/filter/FilterAction';


// これを第二引数に入れることで親からもらう値を指定しているっぽい
type OwnProps = {
  filter: FilterType;
}

// 二つのメソッドの第二引数は一致していないと動かないはず

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter.visibility,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: OwnProps) => {
  return {
    onClick: () => { dispatch(actionCreator.visibilityFilter.setVisibilityFilter({ filter: ownProps.filter, })) },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);