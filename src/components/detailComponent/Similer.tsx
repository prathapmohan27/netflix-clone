/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { similarMovie } from '../helperFunction/tmdb';
import LargeImg from '../movieContainer/LargeImg';
import { Container, Row } from '../movieContainer/MovieContainerStyle';

interface propsInterface {
  movieId: number;
}

const Similar = ({ movieId }: propsInterface) => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    getMovie();
  }, [movieId]);
  const getMovie = async () => {
    const movieData = await similarMovie(movieId);
    setData(movieData);
  };

  return (
    <Container>
      <h2>similar</h2>
      <Row>
        {data.map((obj, i) => {
          return <LargeImg url={obj.poster_path} id={obj.id} key={i} />;
        })}
      </Row>
    </Container>
  );
};

export default Similar;
