import { Action } from 'redux';

export enum FilterType{
  ALL,
  COMPLETED,
  ACTIVE,
}

export enum FilterActionType {
  FILTER = "FILTER_TODO"
}

// ボタンの初期値を与える時などに使っている。へ〜
export const showAll = (): FilterType => {
  return FilterType.ALL
};

export const showCompleted = (): FilterType => {
  return FilterType.COMPLETED
};

export const showActive = (): FilterType => {
    return FilterType.ACTIVE
};

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