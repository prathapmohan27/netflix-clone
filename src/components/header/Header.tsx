import { Div, Section, HeaderButton } from './HeaderStyle';
import { links, getData } from '../helperFunction/tmdb';
import { useEffect, useState } from 'react';

const Header = () => {
  const [headerPoster, setHeaderPoster] = useState<any>({});

  useEffect(() => {
    getMovie();
  }, []);
  const getMovie = async () => {
    const movieData = await getData(links.trending);
    const obj = movieData[Math.floor(Math.random() * movieData.length)];
    setHeaderPoster(obj);
  };

  console.log(headerPoster);

  const baseUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <Div url={`${baseUrl}${headerPoster.backdrop_path}`}>
      <Section>
        <h1>
          {headerPoster.original_name ||
            headerPoster.title ||
            headerPoster.name}
        </h1>
        <div>
          <HeaderButton>Play</HeaderButton>
          <HeaderButton>My List</HeaderButton>
        </div>
        <p>{headerPoster.overview}</p>
      </Section>
    </Div>
  );
};

export default Header;
