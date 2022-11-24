import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import CLassesCreateLecName from "./CLassesCreateLecName";
import StudentName from "./StudentName";

function Student(props) {
    const [students, setStudent] = useState([]);

    useEffect(() => {
        axios.get(BaseUrl+"attendance/student_viewset")
            .then(response=>
            setStudent(response.data)
            ).catch(error=>{
                console.log(error)
            })
    });


return (

    <Fragment>

        {students.map(stu=>

            <option value={stu.user} key={stu.user}> <StudentName stuID={stu.user}/></option>
        )}


    </Fragment>


    );
}
export default Student;