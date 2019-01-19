import { addTodo, AddTodoAction, AddTodoPayload } from '../action/AddTodoAction';
import { toggleTodo, ToggleTodoAction, ToggleTodoPayload } from '../action/ToggleTodoAction';
import { TodoActionType } from '../constant/TodoActionConstant';

type Actions
    = AddTodoAction
    | ToggleTodoAction;

export class State {    // Todoに関するState。ActionがDispatchされることでReducerによって更新される
    constructor(public todos: Todo[]) { }
};

// VisibleForTesting （ダサいけどゆるして）
export class Todo {
    constructor(public id: number, public text: string, public completed: boolean) { }
}

const init = (): State => {
    return new State([])
};

// 初回起動時init()の中身で生成される。以降は、ActionがDispatchされたタイミング(自分と関係ないActionだったとしても)で今のステートとDispatchされたActionが流れてくる。
export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
        // ここでなぜかスマートキャストみたいなことが起きる。すごい。のでAddTodoPayloadに明示的に変換しなくて良い。
        case TodoActionType.ADD:
            return createAddedState(state, action.payload)
        case TodoActionType.TOGGLE:
            return createToggledState(state, action.payload)
        default:
            return state;
    }
};

function createAddedState(prev: State, payload: AddTodoPayload): State {
    let newItem = new Todo(
        prev.todos.length,
        payload.text,
        false)
    return new State(prev.todos.concat(newItem))//prevのStateの値を更新するのはご法度なので注意
}

function createToggledState(prev: State, payload: ToggleTodoPayload): State {
    return new State(
        prev.todos.map((todo) => {
            return toggleTodoIfNeed(payload.id, todo)
        })
    )
}

function toggleTodoIfNeed(id: number, todo: Todo): Todo {
    if (todo.id != id) {
        return todo
    }
    todo.completed = !todo.completed
    return todo
}

export const actionCreator = {
    addTodo,
    toggleTodo,
};