import React from 'react';
import {TodoListItem, Todo}from './components/TodoListItem';
  const todos: Todo[] = [
  {
    text: 'Learn TS with Minh Le',
    complete: false,
  },
  {
    text: "Train 3x a week with Quy's plan",
    complete: true,
  },
  ];

function App() {

  return (
    <>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </>
  );
}

export default App;





