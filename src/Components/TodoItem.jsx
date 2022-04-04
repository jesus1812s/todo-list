import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function TodoItem({ item }) {
  const [isSelected, setIsSelected] = useState([]);
  const [finished, setFinished] = useState(false);
  const [checked, setChecked] = useState(false);
  const { deleteTodo, editTodo, updateTodo, deleteMultipleTodos } =
    useContext(TodoContext);

  const finishTodo = () => {
    if (finished === false) {
      setFinished(true);
      updateTodo(item.id, { ...item, finished: true });
    } else {
      setFinished(false);
      updateTodo(item.id, { ...item, finished: false });
    }
  };

  const putChecked = (e) => {
    const { value } = e.target;
    if (item.checked === false) {
      setChecked(true);
      setIsSelected((prev) => [...prev, value]);
      updateTodo(item.id, { ...item, checked: true });
    } else {
      setChecked(false);
      setIsSelected((prev) => prev.filter((x) => x !== value));
      updateTodo(item.id, { ...item, checked: false });
    }
  };

  const handleDelete = () => {
    if (item.checked === true) {
      window.confirm('Delete all selected todos?');
      deleteMultipleTodos(item.id, item.checked);
    } else {
      deleteTodo(item.id);
    }
  };

  return (
    <Card>
      <div className="num-display">{item.favorite === true ? '👑' : ''}</div>
      <input
        className="delete"
        type="checkbox"
        name="delete[]"
        value={item.id}
        id="delete"
        onChange={putChecked}
        checked={item.checked}
      />
      <button className="close" onClick={handleDelete}>
        <FaTimes color="blue" />
      </button>
      <button onClick={() => editTodo(item)} className="edit">
        <FaEdit color="blue" />
      </button>
      <div className="text-display">{item.text}</div>
      <div className="text-display">Creation date: {item.date}</div>
      <button
        className="btn-terciary"
        id={item.id}
        value={item.id}
        onClick={finishTodo}
      >
        {item.finished === false ? 'In progress...' : 'Finished !'}
      </button>
    </Card>
  );
}

TodoItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default TodoItem;
