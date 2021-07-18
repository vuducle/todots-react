import { listenerCount } from 'events'
import React from 'react'

export interface Todo {
    text: String;
    complete: boolean;
}

interface Props {
    todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
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
