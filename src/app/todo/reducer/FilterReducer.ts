import {
  setFilter,
  SetFilterAction,
} from '../action/FilterAction';
import { FilterActionType, FilterType, showAll } from '../constant/FilterActionConstant';


type Actions
  = SetFilterAction;

export class State {
  constructor(public filterType: FilterType) { }
};

const init = (): State => {
  return new State(showAll());
};

export const reducer = (state: State = init(), action: Actions) => {
  switch (action.type) {
    case FilterActionType.FILTER:
      return new State(
        action.payload.filter
      );
    default:
      return state;
  }
};

export const actionCreator = {
  setFilter: setFilter,
};