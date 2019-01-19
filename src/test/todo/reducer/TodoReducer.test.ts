import { reducer, State } from '../../../app/todo/reducer/TodoReducer'//defaultExportじゃない時は{}で囲むんだってさ
import { addTodo } from '../../../app/todo/action/AddTodoAction';
import { toggleTodo } from '../../../app/todo/action/ToggleTodoAction';

// Reducerからテストのためだけにexportするべきか悩んでる
class TodoOfReducer {
    constructor(public id: number, public text: string, public completed: boolean) { }
}

describe('TodoReducer', () => {
  it('初期化ステートが生成されること', () => {
    // arrenge
    // act
    let resultState = reducer(undefined, Object())

    // assert
    let expectState = new State([])
    expect(resultState).toEqual(expectState);
  });

  it('addできること', () => {
    // arrenge
    let firstState = reducer(undefined, addTodo({ text: "test" }))

    // act
    let resultState = reducer(firstState, addTodo({ text: "test2" }))

    // assert
    let expectState = new State([new TodoOfReducer(0, "test", false), new TodoOfReducer(1, "test2", false)])
    expect(resultState).toEqual(expectState);
  });

  it('Toggoleできること', () => {
    // arrenge
    let firstState = reducer(undefined, addTodo({ text: "test" }))
    let secondState = reducer(firstState, addTodo({ text: "test2" }))

    // act
    let resultState = reducer(secondState, toggleTodo({ id: 0 }))

    // assert
    let expectState = new State([new TodoOfReducer(0, "test", true), new TodoOfReducer(1, "test2", false)])
    expect(resultState).toEqual(expectState);
  });

})