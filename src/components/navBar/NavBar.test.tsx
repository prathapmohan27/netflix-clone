import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavBar from './NavBar';

describe('NavBar Test', () => {
  test('render navBar component', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(screen.getByAltText(/netflix/i)).toBeInTheDocument();
  });
});
