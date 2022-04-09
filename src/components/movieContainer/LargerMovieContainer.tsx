import { useEffect, useState } from 'react';
import { Container, ImgContainer, Row, Img } from './MovieContainerStyle';
import { links, getData, baseUrl } from '../helperFunction/tmdb';

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
          return (
            <ImgContainer key={i}>
              <Img src={`${baseUrl}${obj.poster_path}`} alt="poster" />
            </ImgContainer>
          );
        })}
      </Row>
    </Container>
  );
};

export default LargerMovieContainer;
