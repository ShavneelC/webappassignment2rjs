import React, {useEffect, useState} from 'react';
import Course from "./course";
import Semester from "./Semester";
import Lecturer from "./Lecturer";
import Student from "./Student";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {BaseUrl} from "./constants";

function SemestersUpdate(props) {

    const location=useLocation();
    const semesterid = location.state.semester_id

    const [semesters, setSemesters] = useState({});
    const [semesterId, setSemesterID] = useState({});
    const [year, setYear] = useState({});
    const [semester, setSemester] = useState({});



    useEffect(() => {

            axios.get(BaseUrl+"attendance/semester_viewset/"+[semesterid])
                .then(response=>{
                    setSemesters(response.data);
                    setSemesterID(response.data.course_id);
                    setYear(response.data.year);
                    setSemester(response.data.semester);
                }).catch(error=>{
                    console.log(error)
            })

    }, []);

    function updateSemesters(){
        let login_token = localStorage.getItem("token")

        let data={

            year:year,
            semester:semester,


        }

        axios.patch(BaseUrl+"attendance/semester_viewset/"+semesterid+"/", data, {headers:{
            "Authorization": "Token "+login_token
            }}).then(response=>{
                alert("Update successful")
        }).catch(error=>{
            console.log(error)
        })
    }

    function semestersHandler(event){
       setSemesters(event.target.value);
    }

    function semesterHandler(event){
       setSemester(event.target.value);
    }

    function yearHandler(event){
       setYear(event.target.value);
    }

    return (
        <div>
            <p>Semester ID: <input type={"text"}  id={"SemesterID"} value={semesterid}/> </p>
            <p>

                    <p>Year: <input type={"text"}  id={"Code"} value={year} onChange={yearHandler}/> </p>
            </p>

            <p>
                    <p>Semester: <input type={"text"}  id={"Semester"} value={semester} onChange={semesterHandler}/> </p>

            </p>

            <p>
                <button className={"btn btn-danger"} onClick={updateSemesters} >Update</button>
            </p>

        </div>
    );
}

export default SemestersUpdate;



