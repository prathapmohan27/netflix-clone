import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDetail from './MovieDetail';
import Similar from './similar/Similar';
import * as tmdb from '../helperFunction/tmdb';
import { BrowserRouter as Router } from 'react-router-dom';
import { data } from '../helperFunction/mock';

const movie = {
  original_title: 'Sonic the Hedgehog',
  overview: 'After settling in Green Hills',
  poster_path: '/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
  release_date: '2022-03-30',
  vote_average: 7.7,
  title: 'Sonic the Hedgehog',
  name: 'Sonic the Hedgehog',
};

describe('Movie Detail Test', () => {
  it('check if correctly render', () => {
    render(<MovieDetail movie={movie} />);
    expect(screen.getByAltText(/poster/i)).toBeInTheDocument();
    expect(screen.getByText(/Sonic the Hedgehog/i)).toBeInTheDocument();
    expect(
      screen.getByText(/After settling in Green Hills/i)
    ).toBeInTheDocument();
  });
});

describe('Similar Test', () => {
  beforeEach(() => jest.clearAllMocks());
  it('check correctly fetch data and render', async () => {
    const mockMovie = jest.spyOn(tmdb, 'similarMovie');
    mockMovie.mockResolvedValue(data);
    const component = () =>
      render(
        <Router>
          <Similar movieId={231} />
        </Router>
      );
    await act(async () => {
      component();
    });
    expect(screen.getByText(/Similar Movies/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/poster/i)).toHaveLength(4);
  });
});
