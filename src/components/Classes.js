import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import StudentName from "./StudentName";
import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import LecturerName from "./LecturerName";
import CourseName from "./CourseName";

function Classes(props) {
    const [classes, setClasses] = useState([]);

    const [token, setToken] = useState("");
    const [hasToken, setHasToken] = useState(false);

    const [userID, setUserID] = useState(0);


    useEffect(() => {
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem(token));
            setHasToken(true);
            }
        }, [token]);

    useEffect(() => {
        if(localStorage.getItem("token")) {
            setHasToken(true);
            axios.get(BaseUrl + "attendance/user_id_search/ ", {headers:
                    {"Authorization": "Token " + localStorage.getItem("token")}
            }).then(response => {

                setUserID(response.data.userid)

            }).catch(error => {
                console.log(error)
            })
        }else {
            setHasToken(false);
        }
    }, []);


    useEffect(() => {
        axios.get(BaseUrl+"attendance/classes_viewset")
            .then(response=>{
                setClasses(response.data);
            }).catch(error=>{
                console.log(error)
        })
    }, [classes]);

    function deleteClasses(event){
        let class_number = event.target.value
        axios.delete(BaseUrl+"attendance/classes_viewset/"+class_number)
            .then(response=>{
                alert("Class has been deleted")
            }).catch(error=>{
                 console.log(error)
        })
    }


    return (


            <div>
                {hasToken ? <Fragment>

                        <p>
                            <Link to={"/ClassesCreate"} className={"btn btn-success"}>Create a class</Link>


                        </p>

                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Class ID</th>
                                <th>Course</th>
                                <th>Semester</th>
                                <th>Lecturer</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            {classes.map(classDetails =>

                                <tr key={classDetails.class_number}>
                                    <td>{classDetails.class_number}</td>
                                    <td><CourseName courseID={classDetails.course}/></td>
                                    <td>{classDetails.semester}</td>
                                    <td><LecturerName lecID={classDetails.lecturer}/></td>
                                    <td>
                                        <Link to={"/ClassesUpdate"} className="btn btn-sm btn-info"
                                              state={{class_number: classDetails.class_number}}> Update </Link>

                                    </td>
                                    <td><Button className="btn btn-sm btn-danger" value={classDetails.class_number}
                                                onClick={deleteClasses}
                                    >Delete</Button></td>

                                </tr>
                            )}

                            </tbody>

                        </Table>
                    </Fragment> :
                    <Fragment>
                    </Fragment>

                }
            </div>


    );
}

export default Classes;