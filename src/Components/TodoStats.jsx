import React from 'react';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoStats() {
  const { todo } = useContext(TodoContext);

  return (
    <div className="todo-stats">
      <h4>{todo.length} To Do Task</h4>
    </div>
  );
}

export default TodoStats;
