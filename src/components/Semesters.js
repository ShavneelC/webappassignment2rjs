import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import StudentName from "./StudentName";
import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import LecturerName from "./LecturerName";
import CourseName from "./CourseName";

function Semesters(props) {
    const [semester, setSemester] = useState([]);

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
        axios.get(BaseUrl+"attendance/semester_viewset")
            .then(response=>{
                setSemester(response.data);
            }).catch(error=>{
                console.log(error)
        })
    }, [semester]);

    function deleteSemester(event){
        let semester_id = event.target.value
        axios.delete(BaseUrl+"attendance/semester_viewset/"+semester_id)
            .then(response=>{
                alert("Semester has been deleted")
            }).catch(error=>{
                 console.log(error)
        })
    }


    return (


            <div>
                {hasToken ? <Fragment>

                        <p>
                            <Link to={"/SemesterCreate"} className={"btn btn-success"}>Create a semester</Link>


                        </p>

                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Semester ID</th>
                                <th>Year</th>
                                <th>Semester</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            {semester.map(semesterDetails =>

                                <tr key={semesterDetails.semester_id}>
                                    <td>{semesterDetails.semester_id}</td>
                                    <td>{semesterDetails.year}</td>
                                    <td>{semesterDetails.semester}</td>
                                    <td>
                                        <Link to={"/CoursesUpdate"} className="btn btn-sm btn-info"
                                              state={{semester_id: semesterDetails.semester_id}}> Update </Link>

                                    </td>
                                    <td><Button className="btn btn-sm btn-danger" value={semesterDetails.course_id}
                                                onClick={deleteSemester}
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

export default Semesters;