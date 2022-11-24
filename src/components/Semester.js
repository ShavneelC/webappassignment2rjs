import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";

function Semester(props) {
    const [semesters, setSemesters] = useState([]);

    useEffect(() => {
        axios.get(BaseUrl+"attendance/semester_viewset")
            .then(response=>
            setSemesters(response.data)
            ).catch(error=>{
                console.log(error)
            })
    });


return (

    <Fragment>
        {semesters.map(semester=>
            <option value={semester.id} key={semester.id}>{semester.semester}</option>
        )}
    </Fragment>




    );
}
export default Semester;