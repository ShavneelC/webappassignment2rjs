import React, {Fragment, useEffect, useState} from 'react';
import {BaseUrl} from "./constants";
import axios from "axios";

function CourseName(props) {
    const [name, setName] = useState("");

    useEffect(() => {
       axios.get(BaseUrl+"attendance/course_viewset/"+props.courseID)
           .then(response => {
               setName(response.data.name)

           }).catch(error=>{
               console.log(error)

       })
    }, [name]);


    return (
        <div>
        <Fragment>
            {name}

        </Fragment>

        </div>
    );
}

export default CourseName;