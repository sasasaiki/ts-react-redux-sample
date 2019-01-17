import * as React from 'react';
import AddingArea from '../container/AddingAreaContainer';
import TodoList from '../container/TodoListContainer';
import Footer from './Footer';

const component: React.SFC = () => {
  return (
    <div>
      <AddingArea />
      <TodoList />
      <Footer />
    </div>
  );
};

export default component;