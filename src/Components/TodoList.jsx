import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function TodoList({ todo, handleDelete }) {
  if (!todo || todo.length === 0) {
    return <p> No todo yet</p>;
  }

  return (
    <div className="feedback-list">
      {todo.map((item) => (
        <TodoItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default TodoList;
