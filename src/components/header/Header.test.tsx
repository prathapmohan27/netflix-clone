import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as tmdb from '../helperFunction/tmdb';
import Header from './Header';

describe('Header Test', () => {
  beforeEach(() => jest.clearAllMocks());

  it('Render correctly header component', () => {
    render(<Header />);
    expect(screen.getByText(/play/i)).toBeInTheDocument();
  });

  it('Check if data correctly fetch', async () => {
    const movie = {
      adult: false,
      backdrop_path: '/wdjdHBDwmynWUrJcNzS24uegvK5.jpg',
      original_title: 'sample',
      overview: 'hello mock test',
      title: 'sample',
    };
    const mockMovie = jest.spyOn(tmdb, 'getSingleMovie');
    mockMovie.mockResolvedValue(movie);

    const temp = () => {
      render(<Header />);
    };
    await act(async () => {
      temp();
    });
    expect(screen.getByText(/sample/i)).toBeInTheDocument();
    expect(screen.getByText(/hello mock test/i)).toBeInTheDocument();
  });
});
