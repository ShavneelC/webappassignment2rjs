import React, {Fragment, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import CourseName from "./CourseName";
import LecturerName from "./LecturerName";

function Home(props) {
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

    return (
        <div>
            {hasToken ?
                <Fragment>


                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Classes</th>
                            <th>Courses</th>
                            <th>Semester</th>
                            <th>Lecturer</th>
                            <th>Student</th>
                            <th>Attendance</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <td><Button className="btn btn-sm btn-danger" href={"Classes"}> Enter</Button></td>
                            <td><Button className="btn btn-sm btn-danger" href={"Courses"}> Enter</Button></td>
                            <td><Button className="btn btn-sm btn-danger" href={"Semesters"}> Enter</Button></td>
                            <td><Button className="btn btn-sm btn-danger" href={"Classes"}> Enter</Button></td>
                            <td><Button className="btn btn-sm btn-danger" href={"Classes"}> Enter</Button></td>
                            <td><Button className="btn btn-sm btn-danger" href={"Classes"}> Enter</Button></td>
                        </tr>

                        </tbody>

                    </Table>
                </Fragment>:
                <Fragment></Fragment>
            }

        </div>
    );
}

export default Home;
