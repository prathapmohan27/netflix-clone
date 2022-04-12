import { useEffect, useState } from 'react';

import { Div, Section, HeaderButton } from './HeaderStyle';
import { getSingleMovie } from '../helperFunction/tmdb';

const Header = () => {
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  const [movie, setMovie] = useState<any>({});
  const [bg, setBg] = useState<string>('/1qpUk27LVI9UoTS7S0EixUBj5aR.jpg');

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const obj = await getSingleMovie();
    setMovie(obj);
    setBg(obj.backdrop_path);
  };

  return (
    <Div url={`${baseUrl}${bg}`}>
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
