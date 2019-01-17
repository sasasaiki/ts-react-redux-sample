import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { actionCreator, RootState } from '../../modules';
import Link from '../../components/todo/Link';

type OwnProps = {
  filter: string;
}

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
)(Link);