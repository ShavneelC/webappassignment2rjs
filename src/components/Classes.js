import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import StudentName from "./StudentName";
import {Link} from "react-router-dom";

function Classes(props) {
    const [classes, setClasses] = useState([]);

    const [token, setToken] = useState("");
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem(token));
            setHasToken(true);
            }
        }, [token]);


    useEffect(() => {
        axios.get(BaseUrl+"attendance/classes_viewset")
            .then(response=>{
                setClasses(response.data);
            }).catch(error=>{
                console.log(error)
        })
    }, []);
    

    return (


        <div>
            {hasToken?
            <Link to={"/ClassesCreate"} className={"btn btn-success"}>Create a class</Link>
                :
                ""}
            {classes.map(classes=>
                <p>
                    <Link to={"/classes_detail"} state={{class_number:classes.class_number}} key={classes.class_number}> {classes.class_number} </Link>
                       - {classes.student} - <StudentName authorID={classes.student}/>
                </p>

                // <p key={classes.id}> {classes.course} - {classes.student} - <StudentName authorID={classes.student}/>
                // </p>
            )}

        </div>
    );
}

export default Classes;