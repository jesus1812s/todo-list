import { useState } from 'react';
import Header from './Components/Header';
import Tododata from './data/Tododata';
import TodoList from './Components/TodoList';
import TodoStats from './Components/TodoStats';
import TodoForm from './Components/TodoForm';
function App() {
  const [todo, setTodo] = useState(Tododata);

  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete this todo ?')) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  const loading = false;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <TodoForm />
        <TodoStats todo={todo} />
        <TodoList todo={todo} handleDelete={deleteTodo} />
      </div>
    </>
  );
}

export default App;
