import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import Detail from '../Page/detail';
import NavBar from '../navBar/NavBar';
import Movies from '../Page/Movies';
import Recent from '../Page/Recent';

const InternalRoute = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/recent" element={<Recent />}></Route>
      </Routes>
    </Router>
  );
};

export default InternalRoute;
