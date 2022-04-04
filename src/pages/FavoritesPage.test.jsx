import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoritesPage from './FavoritesPage';
import { TodoProvider } from '../context/TodoContext';
import { BrowserRouter as Router } from 'react-router-dom';

const setup = () =>
  render(
    <TodoProvider>
      <Router>
        <FavoritesPage />
      </Router>
    </TodoProvider>
  );

console.log(TodoProvider);

it('Should show spinner when data has not loaded yet', () => {
  setup();
  expect(screen.getByAltText('Loading...')).toBeInTheDocument();
});

/* it('Should show the favorites page', () => {
  setup();
  jest.mock('../context/TodoContext');

  TodoProvider.isLoading = false;

  TodoProvider.todo = [
    {
      id: 1,
      title: 'Test',
      description: 'Test',
      date: '2020-01-01',
      favorite: true,
    },
  ];

  expect(screen.getByText('Favorites')).toBeInTheDocument();
}); */
