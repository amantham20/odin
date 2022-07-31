import './App.css';
import Page404 from './components/404page/404';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Main';
import Course from './Course';
import Problem from './components/problem/problem';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/course/:id" element={<Course />} />
        <Route exact path="/problem/twosum" element={<Problem />} />
        {/* 404 page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
