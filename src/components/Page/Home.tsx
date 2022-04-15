import Header from '../header/Header';
import LargerMovieContainer from '../movieContainer/large/LargerMovieContainer';
import SmallMovieContainer from '../movieContainer/small/SmallMovieContainer';

const Home = () => {
  return (
    <div>
      <Header />
      <LargerMovieContainer />
      <SmallMovieContainer title="action" />
      <SmallMovieContainer title="romance" />
      <SmallMovieContainer title="horror" />
      <SmallMovieContainer title="documentaries" />
    </div>
  );
};

export default Home;
