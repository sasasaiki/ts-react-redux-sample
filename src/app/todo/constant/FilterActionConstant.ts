export enum FilterActionType {
  FILTER = "FILTER_TODO"
}

export enum FilterType {
  ALL,
  COMPLETED,
  ACTIVE,
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

