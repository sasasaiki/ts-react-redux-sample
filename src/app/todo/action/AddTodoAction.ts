import { Action } from 'redux';
import { TodoActionType } from '../constant/TodoActionConstant';

export type AddTodoPayload = {    // State更新に必要な情報.(todoを追加する時に必要な情報。今回はテキスト)
    text: string;
};

// こいつをクラスにすると怒られる
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