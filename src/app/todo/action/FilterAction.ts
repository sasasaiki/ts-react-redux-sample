import { Action } from 'redux';
import { FilterActionType, FilterType } from '../constant/FilterActionConstant';


export type SetFilterPayload = {    // ステートの更新に必要な情報を持たせる。どのフィルタをかけるか。
  filter: FilterType;
};

export interface SetFilterAction extends Action {
  type: FilterActionType.FILTER;
  payload: SetFilterPayload;
}

export const setVisibilityFilter
  = (payload: SetFilterPayload): SetFilterAction => {
    return {
      payload,
      type: FilterActionType.FILTER,
    };
  };