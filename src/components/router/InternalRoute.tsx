import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import Detail from '../Page/detail';
import NavBar from '../navBar/NavBar';

const InternalRoute = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
};

export default InternalRoute;
