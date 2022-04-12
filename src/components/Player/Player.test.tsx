import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
import Player from './Player';

describe('Player Test', () => {
  it('check correctly  render Player', async () => {
    const component = () => {
      render(
        <Player movieId={675353} bg={'egoyMDLqCxzjnSrWOz50uLlJWmD.jpg'} />
      );
    };
    await act(async () => component());
    expect(screen.getByTestId('playButton')).toBeInTheDocument();
  });

  it('check Play Button', async () => {
    const component = () => {
      render(
        <Player movieId={675353} bg={'egoyMDLqCxzjnSrWOz50uLlJWmD.jpg'} />
      );
    };
    await act(async () => component());
    const button = screen.getByTestId('playButton');
    userEvent.click(button);
    expect(screen.getByTestId('videoContainer')).toBeInTheDocument();
  });
});
