/* eslint-disable react-hooks/exhaustive-deps */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Div, Section } from './MovieDetailStyle';
import { imageUrl } from '../helperFunction/tmdb';

interface propsInterface {
  movie: any;
}

const MovieDetail = ({ movie }: propsInterface) => {
  console.log(movie);
  return (
    <Div>
      <img
        src={`${imageUrl}${
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
