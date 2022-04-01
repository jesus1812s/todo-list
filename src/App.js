import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import Tododata from './data/Tododata';
import TodoList from './Components/TodoList';
import TodoStats from './Components/TodoStats';
import TodoForm from './Components/TodoForm';
import FavoritesPage from './pages/FavoritesPage';
import FavoriteIconLink from './Components/FavoriteIconLink';

function App() {
  const [todo, setTodo] = useState(Tododata);

  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete this todo ?')) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodo([newTodo, ...todo]);
  };

  const loading = false;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <TodoForm handleAdd={addTodo} />
                <TodoStats todo={todo} />
                <TodoList todo={todo} handleDelete={deleteTodo} />
              </>
            }
          ></Route>
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        <FavoriteIconLink />
      </div>
    </Router>
  );
}

export default App;
