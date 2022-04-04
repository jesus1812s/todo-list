import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { TodoProvider } from './context/TodoContext';

const setup = () =>
  render(
    <TodoProvider>
      <App />
    </TodoProvider>
  );

describe('<App />', () => {
  beforeEach(() => {});

  describe('when page is initialized', () => {
    it('Should show name of the header', () => {
      setup();
      expect(screen.getByText(/Todo ui/i)).toBeTruthy();
    });
  });
});
