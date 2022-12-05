import React, {useEffect, useState} from 'react';
import Course from "./course";
import Semester from "./Semester";
import Lecturer from "./Lecturer";
import Student from "./Student";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {BaseUrl} from "./constants";

function CoursesUpdate(props) {

    const location=useLocation();
    const courseid = location.state.course_id

    const [courses, setCourses] = useState({});
    const [courseId, setCourseId] = useState({});
    const [code, setCode] = useState({});
    const [name, setName] = useState({});
    const [semester, setSemester] = useState({});



    useEffect(() => {

            axios.get(BaseUrl+"attendance/course_viewset/"+[course_id])
                .then(response=>{
                    setCourses(response.data);
                    setCourseId(response.data.course);
                    setCode(response.data.semester);
                    setName(response.data.lecturer);
                    setSemester(response.data.student);
                }).catch(error=>{
                    console.log(error)
            })

    }, []);

    function updateCourses(){
        let login_token = localStorage.getItem("token")

        let data={

            code:code,
            semester:semester,
            name:name,

        }

        axios.patch(BaseUrl+"attendance/classes_viewset/"+courseId+"/", data, {headers:{
            "Authorization": "Token "+login_token
            }}).then(response=>{
                alert("Update successful")
        }).catch(error=>{
            console.log(error)
        })
    }

    function courseHandler(event){
       setCourses(event.target.value);
    }

    function semesterHandler(event){
       setSemester(event.target.value);
    }

    function nameHandler(event){
       setName(event.target.value);
    }

    function codeHandler(event){
       setCode(event.target.value);
    }

    return (
        <div>
            <p>Class Number: <input type={"text"}  id={"ClassNumber"} value={courseId}/> </p>
            <p>
                Code:
                <select id={"Course"} value={code} onChange={codeHandler}>
                <Course/>
                </select>
            </p>
            <p>
                Semester:
                <select id={"Semester"} value = {semester} onChange={semesterHandler}>
                <Semester/>

                </select>
            </p>
            <p>
                Name:
                <select id={"Lecturer"} value = {name} onChange={nameHandler}>
                <Lecturer/>

                </select>
            </p>

            <p>
                <button className={"btn btn-danger"} onClick={updateCourses} >Update</button>
            </p>

        </div>
    );
}

export default CoursesUpdate;



