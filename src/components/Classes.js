import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import StudentName from "./StudentName";
import {Link} from "react-router-dom";

function Classes(props) {
    const [classes, setClasses] = useState([]);

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
            {classes.map(classes=>
                <p>
                    <Link to={"/CallesDetail"} state={{class_number:classes.id}} key={classes.id}> {classes.lecturer} </Link>
                        - <StudentName authorID={classes.student}/>
                </p>
            )}

        </div>
    );
}

export default Classes;