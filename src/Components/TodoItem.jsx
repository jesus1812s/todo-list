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
    </Card>
  );
}

TodoItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default TodoItem;
