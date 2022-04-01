import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      rating: 10,
      text: 'This Todo has maximun priority.',
      date: '2020-01-01',
    },
    {
      id: 2,
      rating: 5,
      text: 'This Todo has medium priority.',
      date: '2020-01-02',
    },
    {
      id: 3,
      rating: 1,
      text: 'This Todo has no priority.',
      date: '2020-01-03',
    },
  ]);

  const [todoEdit, setTodoEdit] = useState({
    item: {},
    edit: false,
  });

  //Erase a todo
  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete this todo ?')) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  // Add a new todo
  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodo([newTodo, ...todo]);
  };

  //Upade a todo
  const updateTodo = (id, updItem) => {
    setTodo(
      todo.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
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
        deleteTodo,
        addTodo,
        editTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
