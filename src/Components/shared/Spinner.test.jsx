import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from './Spinner';

test('Render spinner', () => {
  render(<Spinner />);
  expect(screen.getByAltText('Loading...')).toBeInTheDocument();
});
