import { FaSortAmountUpAlt, FaSortAmountDown } from 'react-icons/fa';
import TodoContext from '../context/TodoContext';
import { useContext } from 'react';

function SortIcon() {
  const { fetchTodosByDate, fetchTodosByDateAsc } = useContext(TodoContext);

  return (
    <>
      <div className="sort-link">
        <FaSortAmountUpAlt onClick={fetchTodosByDate} size={30} />
      </div>
      <div className="favoriteSort-link">
        <FaSortAmountDown onClick={fetchTodosByDateAsc} size={30} />
      </div>
    </>
  );
}

export default SortIcon;
