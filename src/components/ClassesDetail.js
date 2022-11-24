import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {BaseUrl} from "./constants";
import axios from "axios";

function ClassesDetail(props) {

    const location=useLocation();
    const classnumber = location.state.class_number

    const [classes, setClasses] = useState({});

    useEffect(() => {

            axios.get(BaseUrl+"attendance/classes_viewset/"+[classnumber])
                .then(response=>{
                    setClasses(response.data)

                }).catch(error=>{
                    console.log(error)
            })

    }, [classes]);


    return (
        <div>
            <h1>{classes.class_number}</h1>
            <div>
                {classes.semester}
            </div>

        </div>
    );
}

export default ClassesDetail;