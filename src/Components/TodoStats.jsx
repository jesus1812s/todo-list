import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoStats() {
  const { todo } = useContext(TodoContext);

  // Calculate the average priority
  let average =
    todo.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / todo.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="todo-stats">
      <h4>{todo.length} To Do Task</h4>
      <h4>Priority average: {isNaN(average) ? 'No todos yet' : average}</h4>
    </div>
  );
}

export default TodoStats;
