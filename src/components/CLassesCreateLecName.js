import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import {useLocation} from "react-router-dom";

function CLassesCreateLecName(props) {

    const [lecName, setLecName] = useState("");

    useEffect(() => {
       axios.get(BaseUrl+"attendance/users/"+props.authorID)
           .then(response => {
               setLecName(response.data.username)

           }).catch(error=>{
               console.log(error)

       })
    }, [lecName]);


    return (
        <div>
        <Fragment>
            {lecName}

        </Fragment>

        </div>
    );
}

export default CLassesCreateLecName;