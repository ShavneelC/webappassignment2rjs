import React, {useEffect, useState} from 'react';
import Course from "./course";
import Semester from "./Semester";
import Lecturer from "./Lecturer";
import Student from "./Student";
import {BaseUrl} from "./constants";
import axios from "axios";
import {Table} from "react-bootstrap";

function SemestersCreate(props) {
    const [token, setToken] = useState("");
    const [hasToken, setHasToken] = useState("");

    useEffect(() => {
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"));
            setHasToken(true);
            }
    }, []);

    function createSemester(){
        let login_token = localStorage.getItem("token")

        let data={
            semester_id:document.getElementById("SemesterId").value,
            year:document.getElementById("Year").value,
            semester:document.getElementById("Semester").value,

        }

        axios.post(BaseUrl+"attendance/semester_viewset/", data, {headers:{
            "Authorization": "Token "+login_token
            }}).then(response=>{
                alert("Create successful")
        }).catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <p>Semester ID: <input type={"text"}  id={"SemesterId"}/> </p>
            <p>
                Year:
                <input type={"text"}  id={"Year"}/>
            </p>
            <p>
                Semester:
                <input type={"text"}  id={"Semester"}/>
            </p>


            <p>
                <button className={"btn btn-danger"} onClick={createSemester}>Create</button>
            </p>

        </div>


    );


}

export default SemestersCreate;