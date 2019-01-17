import {
  showAll,
  setVisibilityFilter, 
  SetVisibilityFilterAction,
} from './FilterAction';

type Actions
  = SetVisibilityFilterAction;

export type State = {
  visibility: string,
};

const init = (): State => {
  return {
    visibility: showAll(),
  };
};

export const reducer = (state: State = init(), action: Actions) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        visibility: action.payload.filter,
      };
    default:
      return state;
  }
};

export const actionCreator = {
  setVisibilityFilter,
};