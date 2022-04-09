/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Container, SmallImgContainer, Row, Img } from './MovieContainerStyle';
import { links, getData, baseUrl } from '../helperFunction/tmdb';
interface propsInterface {
  title: string;
}
interface linksInterface {
  trending: string;
  netflix: string;
  action: string;
  documentaries: string;
  romance: string;
  horror: string;
}
const SmallMovieContainer = ({ title }: propsInterface) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
    const netflix_original = await getData(
      links[title as keyof linksInterface]
    );

    setData(netflix_original);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Row>
        {data.map((obj, i) => {
          return (
            <SmallImgContainer key={i}>
              <Img src={`${baseUrl}${obj.poster_path}`} alt="poster" />
            </SmallImgContainer>
          );
        })}
      </Row>
    </Container>
  );
};

export default SmallMovieContainer;
