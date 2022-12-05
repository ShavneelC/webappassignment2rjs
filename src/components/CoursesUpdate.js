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

            axios.get(BaseUrl+"attendance/course_viewset/"+[courseid])
                .then(response=>{
                    setCourses(response.data);
                    setCourseId(response.data.course_id);
                    setCode(response.data.code);
                    setName(response.data.name);
                    setSemester(response.data.semester);
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

        axios.patch(BaseUrl+"attendance/course_viewset/"+courseid+"/", data, {headers:{
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
            <p>Course ID: <input type={"text"}  id={"CourseID"} value={courseid}/> </p>
            <p>

                    <p>Code: <input type={"text"}  id={"Code"} value={code} onChange={codeHandler}/> </p>
            </p>

            <p>
                    <p>Name: <input type={"text"}  id={"Name"} value={name} onChange={nameHandler}/> </p>

            </p>

            <p>
                Semester:
                <select id={"Semester"} value = {semester} onChange={semesterHandler}>
                <Semester/>

                </select>
            </p>


            <p>
                <button className={"btn btn-danger"} onClick={updateCourses} >Update</button>
            </p>

        </div>
    );
}

export default CoursesUpdate;



