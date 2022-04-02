import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function TodoItem({ item }) {
  const { isSelected, setIsSelected } = useState(false);
  const { deleteTodo, editTodo } = useContext(TodoContext);

  // improve this
  const handleDelete = () => {
    if (isSelected) {
      isSelected.deleteTodo(item.id);
    } else {
      deleteTodo(item.id);
    }
  };

  return (
    <Card>
      <div className="num-display">{item.favorite === true ? '👑' : ''}</div>
      {/*TODO need to delete 3 or more items at once*/}
      <input
        className="delete"
        type="checkbox"
        id={item.id}
        name="delete"
        value={item.id}
        onChange={() => setIsSelected(!isSelected)}
        checked={isSelected}
      />
      <button className="close" onClick={handleDelete}>
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
