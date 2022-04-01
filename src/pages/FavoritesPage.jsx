import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TodoContext from '../context/TodoContext';
import Card from '../Components/shared/Card';
import TodoItem from '../Components/TodoItem';
import { Link } from 'react-router-dom';

function FavoritesPage() {
  const { todo } = useContext(TodoContext);

  return (
    <>
      <Card>
        <div className="favorite">
          <h1>Favorites</h1>
          <p> This is the favorites page</p>

          <p>
            <Link to="/"> back home</Link>
          </p>
        </div>
      </Card>
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
    </>
  );
}

export default FavoritesPage;
