import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoProvider } from '../context/TodoContext';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

const setup = () =>
  render(
    <TodoProvider isLoading={false}>
      <TodoList>
        <TodoItem />
      </TodoList>
    </TodoProvider>
  );

it('Should render todo item', () => {
  setup();
  expect(screen.getByText(/Do the laundry/i)).toBeInTheDocument();
});
