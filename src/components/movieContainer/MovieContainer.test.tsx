import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as tmdb from '../helperFunction/tmdb';
import LargerMovieContainer from './large/LargerMovieContainer';
import LargeImg from './large/LargeImg';
import SmallImg from './small/SmallImg';
import SmallMovieContainer from './small/SmallMovieContainer';
import { data } from '../helperFunction/mock';

describe('LargerMovieContainer Test', () => {
  beforeEach(() => jest.clearAllMocks());

  it('check correctly fetch data', async () => {
    const mockMovie = jest.spyOn(tmdb, 'getData');
    mockMovie.mockResolvedValue(data);
    const component = () =>
      render(
        <Router>
          <LargerMovieContainer />
        </Router>
      );
    await act(async () => {
      component();
    });

    expect(screen.getAllByAltText(/poster/i)).toHaveLength(4);
  });

  it('check img container', () => {
    render(
      <Router>
        <LargeImg url="https://github.com" id={141343} />
      </Router>
    );
    expect(screen.getByAltText(/poster/i)).toBeInTheDocument();
  });
});

describe('SmallMovieContainer ,Movie', () => {
  it('check correctly render heading', async () => {
    const component = () =>
      render(
        <Router>
          <SmallMovieContainer title="horror" />
        </Router>
      );
    const mockMovie = jest.spyOn(tmdb, 'getData');
    mockMovie.mockResolvedValue(data);
    await act(async () => {
      component();
    });
    expect(screen.getByText(/horror/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/poster/i)).toHaveLength(4);
  });
  it('check img container', () => {
    render(
      <Router>
        <SmallImg url="https://github.com" id={454} />
      </Router>
    );
    expect(screen.getByAltText(/poster/i)).toBeInTheDocument();
  });
});
