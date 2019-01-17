import * as React from 'react';
import Todo from './Todo';

// こいつらのインスタンスは作らないからclassじゃなくてtypeでいいのか...
type Props = {
    todos: TodoData[];
    toggleTodo: (id: number) => void;
}

type TodoData = {
    id: number;
    text: string;
    completed: boolean;
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