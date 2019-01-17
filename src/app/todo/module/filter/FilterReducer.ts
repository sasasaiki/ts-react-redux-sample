import {
  showAll,
  setVisibilityFilter, 
  SetFilterAction,
  FilterType,
  FilterActionType,
} from './FilterAction';


type Actions
  = SetFilterAction;

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