import { motion, AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function TodoList({ todo, handleDelete }) {
  if (!todo || todo.length === 0) {
    return <p> No todo yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {todo.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TodoItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
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
