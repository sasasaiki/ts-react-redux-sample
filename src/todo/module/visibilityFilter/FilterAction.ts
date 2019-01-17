import { Action } from 'redux';

export enum FilterType{
  ALL,
  COMPLETED,
  ACTIVE,
}

export const showAll = (): FilterType => {
  return FilterType.ALL
};

export const showCompleted = (): FilterType => {
  return FilterType.COMPLETED
};

export const showActive = (): FilterType => {
    return FilterType.ACTIVE
};

export type SetVisibilityFilterPayload = {    // とりあえずフィルターセットしといて、プレゼンテーション層で見え方の調整する
  filter: FilterType;
};

export interface SetVisibilityFilterAction extends Action {
  type: 'SET_VISIBILITY_FILTER';
  payload: SetVisibilityFilterPayload;
}

export const setVisibilityFilter
  = (payload: SetVisibilityFilterPayload): SetVisibilityFilterAction => {
    return {
      payload,
      type: 'SET_VISIBILITY_FILTER',
    };
  };