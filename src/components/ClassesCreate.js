import React, {useEffect, useState} from 'react';
import Course from "./course";
import Semester from "./Semester";
import Lecturer from "./Lecturer";
import Student from "./Student";
import {BaseUrl} from "./constants";
import axios from "axios";

function ClassesCreate(props) {
    const [token, setToken] = useState("");
    const [hasToken, setHasToken] = useState("");

    useEffect(() => {
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"));
            setHasToken(true);
            }
    }, []);

    function createClasses(){
            let login_token = localStorage.getItem("token")

        let data={
            class_number:document.getElementById("ClassNumber").value,
            course:document.getElementById("Course").value,
            semester:document.getElementById("Semester").value,
            lecturer:document.getElementById("Lecturer").value,
            student:document.getElementById("Student").value
        }

        axios.post(BaseUrl+"attendance/classes_viewset/", data, {headers:{
            "Authorization": "Token "+login_token
            }}).then(reponse=>{
                alert("Create successful")
        }).catch(error=>{
            console.log(error)
        })


    }


    return (
        <div>
            <p>Class Number: <input type={"text"}  id={"ClassNumber"}/> </p>
            <p>
                Course:
                <select id={"Course"}>
                <Course/>
                </select>
            </p>
            <p>
                Semester:
                <select id={"Semester"}>
                <Semester/>

                </select>
            </p>
            <p>
                Lecturer:
                <select id={"Lecturer"}>
                <Lecturer/>

                </select>
            </p>
            <p>
                Students:
                <select id={"Student"} multiple>
                <Student/>

                </select>
            </p>
            <p>
                <button className={"btn btn-danger"} onClick={createClasses}>Create</button>
            </p>

        </div>
    );
}

export default ClassesCreate;