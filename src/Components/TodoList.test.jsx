import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoProvider } from '../context/TodoContext';
import TodoList from './TodoList';

const setup = () =>
  render(
    <TodoProvider isLoading={false}>
      <TodoList />
    </TodoProvider>
  );

it('Should show spinner when data has not loaded yet', () => {
  setup();
  expect(screen.getByAltText('Loading...')).toBeInTheDocument();
});
