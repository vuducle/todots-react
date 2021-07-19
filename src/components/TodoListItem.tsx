import React from 'react'


export interface Todo {
  text: String;
  complete: boolean;
}
type toggleTodo = (selectedTodo: Todo) => void

interface Props {
  todo: Todo;
  toggleTodo: toggleTodo;
}


export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input type="checkbox" checked={todo.complete} /> {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem
