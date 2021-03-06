import { reducer, State } from '../../../app/todo/reducer/FilterReducer'//defaultExportじゃない時は{}で囲むんだってさ
import { FilterType } from '../../../app/todo/constant/FilterActionConstant'//defaultExportじゃない時は{}で囲むんだってさ
import { setFilter } from '../../../app/todo/action/FilterAction';


describe('FilterReducer', () => {
  it('初期化ステートが生成されること', () => {
    // arrenge
    // act
    let resultState = reducer(undefined, Object())

    // assert
    let expectState = new State(FilterType.ALL)
    expect(resultState).toEqual(expectState);
  });

  it('filterTypeがセットできること', () => {
    // arrenge
    // act
    let resultState = reducer(undefined, setFilter({ filter: FilterType.ACTIVE }))

    // assert
    let expectState = new State(FilterType.ACTIVE)
    expect(resultState).toEqual(expectState);
  });

})