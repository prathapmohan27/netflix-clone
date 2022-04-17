/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Grid, Main } from './GridContainerStyle';
import { links, getData, linksInterface } from '../helperFunction/tmdb';
import LargeImg from '../movieContainer/large/LargeImg';

interface propsInterface {
  title: string;
  link: string;
}

const GridContainer = ({ title, link }: propsInterface) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    const shows = await getData(links[link as keyof linksInterface]);
    setData(shows);
  };
  return (
    <Main>
      <h2>{title}</h2>
      <Grid>
        {data.map((obj, i) => {
          return (
            <LargeImg
              url={obj.poster_path || obj.backdrop_path}
              id={obj.id}
              key={i}
            />
          );
        })}
      </Grid>
    </Main>
  );
};

export default GridContainer;
