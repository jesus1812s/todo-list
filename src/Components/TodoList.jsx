import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../context/TodoContext';

function TodoList() {
  const { todo } = useContext(TodoContext);

  if (!todo || todo.length === 0) {
    return <p> No todo yet</p>;
  }

  return (
    <div className="todo-list">
      <AnimatePresence>
        {todo.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TodoItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default TodoList;
