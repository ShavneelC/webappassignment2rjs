import React, {Fragment, useEffect, useState} from 'react';
import {BaseUrl} from "./constants";
import axios from "axios";
import LecturerName2 from "./LecturerName2";

function LecturerName(props) {
    const [name, setName] = useState("");

    useEffect(() => {
       axios.get(BaseUrl+"attendance/lecturer_viewset/"+props.lecID)
           .then(response => {
               setName(response.data.user)

           }).catch(error=>{
               console.log(error)

       })
    }, [name]);


    return (
        <div>
        <Fragment>
           <LecturerName2 lecID2={name}/>

        </Fragment>

        </div>
    );
}

export default LecturerName;