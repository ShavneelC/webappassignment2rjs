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

    useEffect(() => {

            axios.get(BaseUrl+"attendance/classes_viewset/"+[classnumber])
                .then(response=>{
                    setClasses(response.data)

                }).catch(error=>{
                    console.log(error)
            })

    }, [classes]);

    return (
        <div>
            <p>Class Number: <input type={"text"}  id={"ClassNumber"} value={classes.class_number}/> </p>
            <p>
                Course:
                <select id={"Course"} value={classes.course}>
                <Course/>
                </select>
            </p>
            <p>
                Semester:
                <select id={"Semester"} value = {classes.semester}>
                <Semester/>

                </select>
            </p>
            <p>
                Lecturer:
                <select id={"Lecturer"} value = {classes.lecturer}>
                <Lecturer/>

                </select>
            </p>
            <p>
                Students:
                <select id={"Student"} multiple value={classes.student}>
                <Student/>

                </select>
            </p>
            <p>
                <button className={"btn btn-danger"} >Update</button>
            </p>

        </div>
    );
}

export default ClassesUpdate;



