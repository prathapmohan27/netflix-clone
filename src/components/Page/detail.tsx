/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieDetail from '../detailComponent/MovieDetail';
import Similar from '../detailComponent/Similer';
import Player from '../Player/Player';
import { MovieInfo } from '../helperFunction/tmdb';
import ErrorMeg from '../errorComponents/ErrorMeg';

const Detail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<any>({});
  const [bg, setBg] = useState<string>('/1qpUk27LVI9UoTS7S0EixUBj5aR.jpg');

  useEffect(() => {
    getMovie();
  }, [id]);

  const getMovie = async () => {
    const data = await MovieInfo(Number(id));
    setMovie(data);
    setBg(data.backdrop_path);
  };

  return (
    <div>
      {typeof movie === 'object' ? (
        <>
          <Player movieId={Number(id)} bg={bg} />
          <MovieDetail movie={movie} />
          <Similar movieId={Number(id)} />
        </>
      ) : (
        <ErrorMeg />
      )}
    </div>
  );
};

export default Detail;
