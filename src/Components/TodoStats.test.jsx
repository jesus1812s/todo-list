import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoStats from './TodoStats';
import { TodoProvider } from '../context/TodoContext';

const setup = () =>
  render(
    <TodoProvider isLoading={false}>
      <TodoStats />
    </TodoProvider>
  );

it('Should show spinner when data has not loaded yet', () => {
  setup();
  expect(screen.getByText(/To do Task/i)).toBeInTheDocument();
});
