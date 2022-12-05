import React, {useEffect, useState} from 'react';
import Course from "./course";
import Semester from "./Semester";
import Lecturer from "./Lecturer";
import Student from "./Student";
import {BaseUrl} from "./constants";
import axios from "axios";
import {Table} from "react-bootstrap";

function CoursesCreate(props) {
    const [token, setToken] = useState("");
    const [hasToken, setHasToken] = useState("");

    useEffect(() => {
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"));
            setHasToken(true);
            }
    }, []);

    function createCourses(){
        let login_token = localStorage.getItem("token")

        let data={
            course_id:document.getElementById("CourseId").value,
            code:document.getElementById("Code").value,
            name:document.getElementById("Name").value,
            semester:document.getElementById("Semester").value,
        }

        axios.post(BaseUrl+"attendance/course_viewset/", data, {headers:{
            "Authorization": "Token "+login_token
            }}).then(response=>{
                alert("Create successful")
        }).catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <p>Course ID: <input type={"text"}  id={"CourseId"}/> </p>
            <p>
                Code:
                <input type={"text"}  id={"Code"}/>
            </p>
            <p>
                Name:
                <input type={"text"}  id={"Name"}/>
            </p>
            <p>
                Semester:
                <select id={"Semester"}>
                <Semester/>

                </select>
            </p>

            <p>
                <button className={"btn btn-danger"} onClick={createCourses}>Create</button>
            </p>

        </div>


    );


}

export default CoursesCreate;