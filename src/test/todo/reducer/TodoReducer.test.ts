import { reducer, State } from '../../../app/todo/reducer/TodoReducer'//defaultExportじゃない時は{}で囲むんだってさ
import { addTodo } from '../../../app/todo/action/AddTodoAction';
import { toggleTodo } from '../../../app/todo/action/ToggleTodoAction';

// Reducerからテストのためだけにexportするべきか悩んでる
class TodoOfReducer {
    constructor(public id: number, public text: string, public completed: boolean) { }
}

describe('TodoReducer', () => {
  it('初期化ステートが生成されること', () => {
    let resultState = reducer(undefined, Object())
    let expectState = new State([])
    expect(resultState).toEqual(expectState);
  });

  it('addできること', () => {
    let firstState = reducer(undefined, addTodo({ text: "test" }))
    let resultState = reducer(firstState, addTodo({ text: "test2" }))
    let expectState = new State([new TodoOfReducer(0, "test", false), new TodoOfReducer(1, "test2", false)])
    expect(resultState).toEqual(expectState);
  });

  it('Toggoleできること', () => {
    let firstState = reducer(undefined, addTodo({ text: "test" }))
    let secondState = reducer(firstState, addTodo({ text: "test2" }))
    let resultState = reducer(secondState, toggleTodo({ id: 0 }))
    let expectState = new State([new TodoOfReducer(0, "test", true), new TodoOfReducer(1, "test2", false)])
    expect(resultState).toEqual(expectState);
  });

})