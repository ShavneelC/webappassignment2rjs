import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {BaseUrl} from "./constants";
import axios from "axios";

function ClassesDetail(props) {

    const location=useLocation();
    const class_number = location.state.class_number

    const [classes, setClasses] = useState("");

    useEffect(() => {
        return () => {
            axios.get(BaseUrl+"attendance/classes_viewset/"+[class_number])
                .then(response=>{
                    setClasses(response.data)

                }).catch(error=>{
                    console.log(error)
            })
        };
    }, [classes]);


    return (
        <div>
            <h1>{classes.id}</h1>
            <div>
                {classes.body}
            </div>

        </div>
    );
}

export default ClassesDetail;