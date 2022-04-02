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

  //Upade a todo
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
        addTodo,
        editTodo,
        updateTodo,
        fetchTodosByDate,
        fetchTodosByDateAsc,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
