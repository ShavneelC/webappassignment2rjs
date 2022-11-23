import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Course from "./components/course";
import NavBar from "./components/NavBar";
import Attendance from "./components/attendance";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="course" element={ <Course/> } />
          <Route path="attendance" element={ <Attendance/> } />
          <Route path="login" element={ <Login/> } />


      </Routes>
    </div>
  );
}

export default App;
