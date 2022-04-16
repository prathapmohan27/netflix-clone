import { Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import NavBar from '../navBar/NavBar';
import Movies from '../Page/Movies';
import Recent from '../Page/Recent';
import Detail from '../Page/Detail';

const InternalRoute = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </>
  );
};

export default InternalRoute;
