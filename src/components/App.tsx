import * as React from 'react';
import AddTodo from '../containers/todo/AddTodo';
import TodoList from '../containers/todo/TodoListContainer';
import Footer from './Footer';

const component: React.SFC = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
};

export default component;