import Header from '../header/Header';
import LargerMovieContainer from '../movieContainer/LargerMovieContainer';
import SmallMovieContainer from '../movieContainer/SmallMovieContainer';

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
