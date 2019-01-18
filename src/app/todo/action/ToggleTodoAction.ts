import { Action } from 'redux';
import { TodoActionType } from '../constant/TodoActionConstant';

export type ToggleTodoPayload = {    // Todoの状態更新。今回は終わってるかどうかだけなのでidがあれば良い。idが一致したらフラグを反転させる。
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