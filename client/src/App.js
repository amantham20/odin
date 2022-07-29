import logo from './logo.svg';
import './App.css';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Main';
import Course from './Course';
import Problem from './components/problem/problem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/problem/:id" element={<Problem />} />
      </Routes>
    </Router>
  );
}

export default App;
