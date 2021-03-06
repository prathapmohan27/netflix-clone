/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Container, Row } from '../MovieContainerStyle';
import { links, getData, linksInterface } from '../../helperFunction/tmdb';
import SmallImg from './SmallImg';

interface propsInterface {
  title: string;
}

const SmallMovieContainer = ({ title }: propsInterface) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
    const movie = await getData(links[title as keyof linksInterface]);
    setData(movie);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Row>
        {data.map((obj, i) => {
          return (
            <SmallImg
              url={obj.poster_path || obj.backdrop_path}
              id={obj.id}
              key={i}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default SmallMovieContainer;
