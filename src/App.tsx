import React, { useState, useEffect } from 'react';
import { TodoListItem, Todo } from './components/TodoListItem';



function App() {

  const todosParameters: Todo[] = [
    {
      text: 'Learn TS with Minh Le',
      complete: false,
    },
    {
      text: "Train 3x a week with Quy's plan",
      complete: true,
    },
  ];

  const [todos, setTodos] = useState(todosParameters);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodo = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodo)
  }
  return (
    <>
      <TodoListItem todo={todosParameters[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todosParameters[1]} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;





