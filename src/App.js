import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Course from "./components/course";
import NavBar from "./components/NavBar";
import Attendance from "./components/attendance";
import Login from "./components/Login";
import Classes from "./components/Classes";
import ClassesDetail from "./components/ClassesDetail";
import ClassesCreate from "./components/ClassesCreate";
import ClassesUpdate from "./components/ClassesUpdate";
import Courses from "./components/Courses";
import CoursesCreate from "./components/CoursesCreate";
import CoursesUpdate from "./components/CoursesUpdate";



function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="Classes" element={ <Classes/> } />
          <Route path="classes_detail" element={ <ClassesDetail/> } />
          <Route path="Courses" element={ <Courses/> } />
          <Route path="attendance" element={ <Attendance/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="ClassesCreate" element={ <ClassesCreate/> } />
          <Route path="ClassesUpdate" element={ <ClassesUpdate/> } />
          <Route path="CourseCreate" element={ <CoursesCreate/> } />
          <Route path="CoursesUpdate" element={ <CoursesUpdate/> } />



      </Routes>
    </div>
  );
}

export default App;
