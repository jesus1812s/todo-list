import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import TodoStats from './Components/TodoStats';
import TodoForm from './Components/TodoForm';
import FavoritesPage from './pages/FavoritesPage';
import FavoriteIconLink from './Components/FavoriteIconLink';
import { TodoProvider } from './context/TodoContext';

function App() {
  const loading = false;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TodoProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <TodoForm />
                  <TodoStats />
                  <TodoList />
                </>
              }
            ></Route>
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
          <FavoriteIconLink />
        </div>
      </Router>
    </TodoProvider>
  );
}

export default App;
