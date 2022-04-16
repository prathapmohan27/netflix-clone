import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from '../Start/Start';
import InternalRoute from './InternalRoute';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/*" element={<InternalRoute />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
