import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import CLassesCreateLecName from "./CLassesCreateLecName";

function Lecturer(props) {
    const [lecturers, setLecturer] = useState([]);

    useEffect(() => {
        axios.get(BaseUrl+"attendance/lecturer_viewset")
            .then(response=>
            setLecturer(response.data)
            ).catch(error=>{
                console.log(error)
            })
    });


return (

    <Fragment>
        {lecturers.map(lec=>
            <option value={lec.user} key={lec.user}> <CLassesCreateLecName authorID={lec.user}/></option>
        )}
    </Fragment>




    );
}
export default Lecturer;