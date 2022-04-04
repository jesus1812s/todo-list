import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoProvider } from '../context/TodoContext';
import TodoForm from './TodoForm';

const setup = () =>
  render(
    <TodoProvider>
      <TodoForm />
    </TodoProvider>
  );

it('Should render card to make todos', () => {
  setup();
  expect(screen.getByText(/Create Todo/i)).toBeInTheDocument();
});

it('Should render input to make todos', () => {
  setup();
  expect(
    screen.getByPlaceholderText(/Write your to do here/i)
  ).toBeInTheDocument();
});

it('Should render button to make todos', () => {
  setup();
  expect(screen.getByText(/Send/i)).toBeInTheDocument();
});

it('Button should be disabled when characters < 10', () => {
  setup();
  const input = screen.getByPlaceholderText(/Write your to do here/i);
  const button = screen.getByText(/Send/i);
  fireEvent.change(input, { target: { value: 'Tododo' } });
  fireEvent.click(button);
  expect(screen.getByText(/Send/i)).toBeDisabled();
});

it('Button should be enabled when characters > 10', () => {
  setup();
  const input = screen.getByPlaceholderText(/Write your to do here/i);
  const button = screen.getByText(/Send/i);
  fireEvent.change(input, { target: { value: 'Tododododododddo' } });
  fireEvent.click(button);
  expect(screen.getByText(/Send/i)).toBeValid();
});
