import { createContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [todo, setTodo] = useState([]);
  const [todoEdit, setTodoEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  //Sort todos by date

  const fetchTodosByDate = async () => {
    const res = await fetch(`/todo?_sort=date&_order=desc`);
    const data = await res.json();
    setTodo(data);
    setIsLoading(false);
  };

  const fetchTodosByDateAsc = async () => {
    const res = await fetch(`/todo?_sort=date&_order=asc`);
    const data = await res.json();
    setTodo(data);
    setIsLoading(false);
  };

  const fetchTodosByFavorites = async () => {
    const res = await fetch(`/todo?_sort=favorite&_order=asc`);
    const data = await res.json();
    setTodo(data.filter((item) => item.favorite === true));
    setIsLoading(false);
  };

  //Fetch Todos
  const fetchTodos = async () => {
    const res = await fetch(`/todo?_sort=id&_order=desc`);
    const data = await res.json();
    setTodo(data);
    setIsLoading(false);
  };
  //Erase a todo
  const deleteTodo = async (id) => {
    if (window.confirm('Are you sure you want to delete this todo ?')) {
      await fetch(`/todo/${id}`, { method: 'DELETE' });
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  //Delete multiple todos
  const deleteMultipleTodos = async (id) => {
    const url = 'http://localhost:5000/todo/';
    const ids = todo.map((item) => (item.checked === true ? item.id : null));
    const deleteAll = ids.map((id) => fetch(url + id, { method: 'DELETE' }));
    setTodo(todo.filter((item) => item.id !== id));
    Promise.all(deleteAll);
  };

  // Add a new todo
  const addTodo = async (newTodo) => {
    const response = await fetch('/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    setTodo([data, ...todo]);
  };

  //Update a todo
  const updateTodo = async (id, updItem) => {
    const response = await fetch(`/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();

    setTodo(todo.map((item) => (item.id === id ? { ...item, ...data } : item)));
  };

  //Allow to edit a todo
  const editTodo = (item) => {
    setTodoEdit({
      item,
      edit: true,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        todoEdit,
        isLoading,
        deleteTodo,
        deleteMultipleTodos,
        addTodo,
        editTodo,
        updateTodo,
        fetchTodosByDate,
        fetchTodosByDateAsc,
        fetchTodosByFavorites,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
