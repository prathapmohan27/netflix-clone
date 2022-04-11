import { useParams } from 'react-router-dom';
import MovieDetail from '../detailComponent/MovieDetail';
import Similar from '../detailComponent/Similer';

import Player from '../Player/Player';

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <Player movieId={Number(id)} />
      <MovieDetail movieId={Number(id)} />
      <Similar movieId={Number(id)} />
    </div>
  );
};

export default Detail;
