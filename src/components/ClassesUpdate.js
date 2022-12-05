import React, {useEffect, useState} from 'react';
import Course from "./course";
import Semester from "./Semester";
import Lecturer from "./Lecturer";
import Student from "./Student";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {BaseUrl} from "./constants";

function ClassesUpdate(props) {

    const location=useLocation();
    const classnumber = location.state.class_number

    const [classes, setClasses] = useState({});
    const [course, setCourse] = useState({});
    const [semester, setSemester] = useState({});
    const [lecturer, setLecturer] = useState({});
    const [student, setStudent] = useState({});


    useEffect(() => {

            axios.get(BaseUrl+"attendance/classes_viewset/"+[classnumber])
                .then(response=>{
                    setClasses(response.data);
                    setCourse(response.data.course);
                    setSemester(response.data.semester);
                    setLecturer(response.data.lecturer);
                    setStudent(response.data.student);
                }).catch(error=>{
                    console.log(error)
            })

    }, []);

    function updateClasses(){
        let login_token = localStorage.getItem("token")

        let data={

            course:course,
            semester:semester,
            lecturer:lecturer,
            student:student,
        }

        axios.patch(BaseUrl+"attendance/classes_viewset/"+classnumber+"/", data, {headers:{
            "Authorization": "Token "+login_token
            }}).then(response=>{
                alert("Update successful")
        }).catch(error=>{
            console.log(error)
        })
    }

    function courseHandler(event){
       setCourse(event.target.value);
    }

    function semesterHandler(event){
       setSemester(event.target.value);
    }

    function lecturerHandler(event){
       setLecturer(event.target.value);
    }

    function studentHandler(event){
       setStudent(event.target.value);
    }

    return (
        <div>
            <p>Class Number: <input type={"text"}  id={"ClassNumber"} value={classnumber}/> </p>
            <p>
                Course:
                <select id={"Course"} value={course} onChange={courseHandler}>
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
                Lecturer:
                <select id={"Lecturer"} value = {lecturer} onChange={lecturerHandler}>
                <Lecturer/>

                </select>
            </p>
            <p>
                Students:
                <select id={"Student"} multiple value={student} onChange={studentHandler}>
                <Student/>

                </select>
            </p>
            <p>
                <button className={"btn btn-danger"} onClick={updateClasses} >Update</button>
            </p>

        </div>
    );
}

export default ClassesUpdate;



