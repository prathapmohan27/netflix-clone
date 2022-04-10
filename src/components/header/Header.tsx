import { Div, Section, HeaderButton } from './HeaderStyle';
import { getSingleMovie } from '../helperFunction/tmdb';
import { useEffect, useState } from 'react';

const Header = () => {
  const [movie, setMovie] = useState<any>({});

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const obj = await getSingleMovie();
    setMovie(obj);
  };

  const baseUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <Div url={`${baseUrl}${movie.backdrop_path}`}>
      <Section>
        <h1>{movie.original_name || movie.title || movie.name}</h1>
        <div>
          <HeaderButton>Play</HeaderButton>
          <HeaderButton>My List</HeaderButton>
        </div>
        <p>{movie.overview}</p>
      </Section>
    </Div>
  );
};

export default Header;
