import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";

function Course(props) {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get(BaseUrl+"attendance/course_viewset")
            .then(response=>
            setCourses(response.data)
            ).catch(error=>{
                console.log(error)
            })
    });


return (

    <Fragment>
        {courses.map(course=>
            <option value={course.course_id} key={course.course_id}>{course.name}

            </option>
        )}
    </Fragment>




    );
}

export default Course;