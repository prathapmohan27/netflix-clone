import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as tmdb from '../helperFunction/tmdb';
import LargerMovieContainer from './LargerMovieContainer';
import LargeImg from './LargeImg';
import SmallImg from './SmallImg';
import SmallMovieContainer from './SmallMovieContainer';

const data = [
  {
    adult: false,
    backdrop_path: '/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg',
    original_title: 'Sonic 2',
    poster_path: '/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
    release_date: '2022-03-30',
    title: 'Sonic 2',
  },
  {
    adult: false,
    backdrop_path: '/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg',
    original_title: 'Turning Red',
    poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    release_date: '2022-03-30',
    title: 'Turning Red',
  },
  {
    adult: false,
    backdrop_path: '/yzH5zvuEzzsHLZnn0jwYoPf0CMT.jpg',
    original_title: 'Gold',
    poster_path: '/ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg',
    release_date: '2022-03-30',
    title: 'Gold',
  },
  {
    adult: false,
    backdrop_path: '/2hGjmgZrS1nlsEl5PZorn7EsmzH.jpg',
    original_title: 'Blacklight',
    poster_path: '/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg',
    release_date: '2022-03-30',
    title: 'Blacklight',
  },
];

describe('LargerMovieContainer Test', () => {
  beforeEach(() => jest.clearAllMocks());

  it('check correctly fetch data', async () => {
    const mockMovie = jest.spyOn(tmdb, 'getData');
    mockMovie.mockResolvedValue(data);
    const component = () => render(<LargerMovieContainer />);
    await act(async () => {
      component();
    });
    expect(screen.getByText(/netflix original/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/poster/i)).toHaveLength(4);
  });

  it('check img container', () => {
    render(<LargeImg url="https://github.com" />);
    expect(screen.getByAltText(/poster/i)).toBeInTheDocument();
  });
});

describe('SmallMovieContainer ,Movie', () => {
  it('check correctly render heading', async () => {
    const component = () => render(<SmallMovieContainer title="horror" />);
    const mockMovie = jest.spyOn(tmdb, 'getData');
    mockMovie.mockResolvedValue(data);
    await act(async () => {
      component();
    });
    expect(screen.getByText(/horror/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/poster/i)).toHaveLength(4);
  });
  it('check img container', () => {
    render(<SmallImg url="https://github.com" />);
    expect(screen.getByAltText(/poster/i)).toBeInTheDocument();
  });
});
