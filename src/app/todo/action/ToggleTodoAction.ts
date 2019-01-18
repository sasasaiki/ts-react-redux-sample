import { Action } from 'redux';
import { TodoActionType } from '../constant/TodoActionConstant';

export type ToggleTodoPayload = {    // todoをトグルする時に必要なのはどのtodoかの情報くらい
    id: number;
};

export interface ToggleTodoAction extends Action {
    type: TodoActionType.TOGGLE;
    payload: ToggleTodoPayload;
}

export const toggleTodo = (payload: ToggleTodoPayload): ToggleTodoAction => {
    return {
        payload,
        type: TodoActionType.TOGGLE,
    };
};