import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NavBar from './NavBar';

test('render navBar component', () => {
  render(<NavBar />);
  expect(screen.getByAltText(/netflix/i)).toBeInTheDocument();
  const user = screen.getByAltText(/user/i);
  expect(user).toBeInTheDocument();
  userEvent.click(user);
  expect(screen.getByText(/log out/i)).toBeInTheDocument();
});
