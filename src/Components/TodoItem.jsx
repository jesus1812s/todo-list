import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function TodoItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="blue" />
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
