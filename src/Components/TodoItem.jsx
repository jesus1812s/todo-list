import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoItem({ item }) {
  const { deleteTodo, editTodo } = useContext(TodoContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteTodo(item.id)}>
        <FaTimes color="blue" />
      </button>
      <button onClick={() => editTodo(item)} className="edit">
        <FaEdit color="blue" />
      </button>
      <div className="text-display">{item.text}</div>
      <div className="text-display">Creation date: {item.date}</div>
    </Card>
  );
}

TodoItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default TodoItem;
