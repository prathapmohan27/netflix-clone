/* eslint-disable react-hooks/exhaustive-deps */
import { Div, Section } from './MovieDetailStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { MovieInfo } from '../helperFunction/tmdb';

interface propsInterface {
  movieId: number;
}

const MovieDetail = ({ movieId }: propsInterface) => {
  const [movie, setMovie] = useState<any>({});

  useEffect(() => {
    getMovie();
  }, [movieId]);

  const getMovie = async () => {
    const data = await MovieInfo(movieId);
    setMovie(data);
  };
  console.log(movie);
  return (
    <Div>
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie.poster_path || '/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg'
        }`}
        alt="poster"
      />
      <Section>
        <h2>{movie.original_name || movie.title || movie.name}</h2>
        <p>
          <FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar} />
          {`${movie.vote_average}/10`}
        </p>
        <p>{`Release Date:${movie.release_date}`}</p>
        <p>{movie.overview}</p>
      </Section>
    </Div>
  );
};

export default MovieDetail;
