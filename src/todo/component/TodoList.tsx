import * as React from 'react';
import Todo from './Todo';
import * as Todos from '../module/TodoReducer';


class Props {
    constructor(
        public todos: Todos.Todo[],
        public toggleTodo: (id: number) => void) { }
}


const component: React.SFC<Props> = (props: Props) => {
    return (
        <ul>
            {props.todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onClick={() => { props.toggleTodo(todo.id); }}
                    />
                );
            })}
        </ul>
    );
};

export default component;