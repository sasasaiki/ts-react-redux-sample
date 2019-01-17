import { Action } from 'redux';

export const showAll = (): string => {
  return 'SHOW_ALL'
};

export const showCompleted = (): string => {
  return 'SHOW_COMPLETED'
};

export const showActive = (): string => {
    return 'SHOW_ACTIVE'
};

export type SetVisibilityFilterPayload = {    // とりあえずフィルターセットしといて、プレゼンテーション層で見え方の調整する
  filter: string;
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