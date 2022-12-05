import React, {Fragment, useEffect, useState} from 'react';
import {BaseUrl} from "./constants";
import axios from "axios";

function LecturerName2(props) {
    const [name, setName] = useState("");

    useEffect(() => {
       axios.get(BaseUrl+"attendance/users/"+props.lecID2)
           .then(response => {
               setName(response.data.username)

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

export default LecturerName2;