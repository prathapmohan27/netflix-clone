import { useEffect, useState } from 'react';
import { Container, Row } from './MovieContainerStyle';
import { links, getData } from '../helperFunction/tmdb';
import LargeImg from './LargeImg';

const LargerMovieContainer = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getNetflixOriginal();
  }, []);

  const getNetflixOriginal = async () => {
    const movieData = await getData(links.netflix);
    setData(movieData);
  };

  return (
    <Container>
      <h2>Netflix Original</h2>
      <Row>
        {data.map((obj, i) => {
          return <LargeImg url={obj.poster_path} id={obj.id} key={i} />;
        })}
      </Row>
    </Container>
  );
};

export default LargerMovieContainer;
