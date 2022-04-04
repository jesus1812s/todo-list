import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoriteIconLink from './FavoriteIconLink';
import { TodoProvider } from '../context/TodoContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { FaTasks } from 'react-icons/fa';

const setup = () =>
  render(
    <TodoProvider>
      <Router>
        <FavoriteIconLink />
      </Router>
    </TodoProvider>
  );

const Button = ({ onClick, children }) => (
  <FaTasks onClick={onClick}>{children}</FaTasks>
);

it('Goes to favorite page', () => {
  setup();
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}></Button>);
  fireEvent.click(screen.getByTestId('FavoriteIconLink'));
  expect(window.location.href).toBe('http://localhost/favorites?sort=favorite');
});
