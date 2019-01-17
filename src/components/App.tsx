import * as React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoListContainer';
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