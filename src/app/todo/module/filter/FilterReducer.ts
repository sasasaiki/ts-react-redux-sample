import {
  showAll,
  setVisibilityFilter, 
  SetVisibilityFilterAction,
  FilterType,
  FilterActionType,
} from './FilterAction';


type Actions
  = SetVisibilityFilterAction;

export type State = {
  visibility: FilterType,
};

const init = (): State => {
  return {
    visibility: showAll(),
  };
};

export const reducer = (state: State = init(), action: Actions) => {
  switch (action.type) {
    case FilterActionType.FILTER:
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