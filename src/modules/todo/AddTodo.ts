import { Action } from 'redux';
import { TodoActionType } from './TodoActionType';

export type AddTodoPayload = {    // todoを追加する時に必要なのはtodoの内容くらい
    text: string;
};

export interface AddTodoAction extends Action {
    type: TodoActionType.ADD;
    payload: AddTodoPayload;
}

export const addTodo = (payload: AddTodoPayload): AddTodoAction => {
    return {
        payload,
        type: TodoActionType.ADD,
    };
};