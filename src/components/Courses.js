import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "./constants";
import StudentName from "./StudentName";
import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import LecturerName from "./LecturerName";
import CourseName from "./CourseName";

function Courses(props) {
    const [course, setCourse] = useState([]);

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
        axios.get(BaseUrl+"attendance/course_viewset")
            .then(response=>{
                setCourse(response.data);
            }).catch(error=>{
                console.log(error)
        })
    }, [course]);

    function deleteCourse(event){
        let course_id = event.target.value
        axios.delete(BaseUrl+"attendance/course_viewset/"+course_id)
            .then(response=>{
                alert("Course has been deleted")
            }).catch(error=>{
                 console.log(error)
        })
    }


    return (


            <div>
                {hasToken ? <Fragment>

                        <p>
                            <Link to={"/CourseCreate"} className={"btn btn-success"}>Create a course</Link>


                        </p>

                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Course ID</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Semester</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            {course.map(courseDetails =>

                                <tr key={courseDetails.course_id}>
                                    <td>{courseDetails.course_id}</td>
                                    <td>{courseDetails.code}</td>
                                    <td>{courseDetails.name}</td>
                                    <td>{courseDetails.semester}</td>
                                    <td>
                                        <Link to={"/CoursesUpdate"} className="btn btn-sm btn-info"
                                              state={{course_id: courseDetails.course_id}}> Update </Link>

                                    </td>
                                    <td><Button className="btn btn-sm btn-danger" value={courseDetails.course_id}
                                                onClick={deleteCourse}
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

export default Courses;