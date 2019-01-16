import { addTodo, AddTodoAction, AddTodoPayload } from './AddTodo';
import { toggleTodo, ToggleTodoAction } from './ToggleTodo';
import { TodoActionType } from './TodoActionType';
import { string } from 'prop-types';

type Actions
    = AddTodoAction
    | ToggleTodoAction;

export class State {    // ページ全体で保持しとくべき情報はTodoの配列くらい
    constructor(public todos: Todo[]) { }
};

class Todo {
    constructor(public id: number, public text: string, public completed: boolean) { }
}

const init = (): State => {
    return new State([])
};

export const reducer = (state: State = init(), action: Actions) => {
    switch (action.type) {
        case TodoActionType.ADD:
            return createAddedState(state, action.payload)
        case TodoActionType.TOGGLE:
            return new State(
                state.todos.map((todo) => {
                    return toggleTodoIfNeed(action.payload.id, todo)
                })
            )
        default:
            return state;
    }
};

function createAddedState(prev:State,payload:AddTodoPayload): State {
    let newItem = new Todo(
        prev.todos.length,
        payload.text,
        false)
    return new State(prev.todos.concat(newItem))//prevのStateの値を更新するのはご法度なので注意
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