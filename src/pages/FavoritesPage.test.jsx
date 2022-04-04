import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoritesPage from './FavoritesPage';
import { TodoProvider } from '../context/TodoContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from '../Components/shared/Card';

const setup = () =>
  render(
    <TodoProvider isLoading={false}>
      <Router>
        <FavoritesPage>
          <Card />
        </FavoritesPage>
      </Router>
    </TodoProvider>
  );

it('Should show spinner when data has not loaded yet', () => {
  setup();
  expect(screen.getByAltText('Loading...')).toBeInTheDocument();
});
