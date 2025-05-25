import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "./Edit";
import ViewStudent from "./ViewStudent";
import { useState } from "react";
import CreateStudent from "./CreateStudent";
import axios from "axios";
function ViewAllStudent() {
 
    const [showEdit, setShowEdit] = useState(false);
    const [showView, setShowView] = useState(false);
    const [showCreate, setShowCreate] = useState(false);

    const [_students, setStudents] = useState([]);
    const [studentData, setStudentData] = useState([]);
    //for edit form
    function editForm(student){
        setStudentData(student);
        setShowEdit(true);
    }
    function exitEditForm(){
        setStudentData();
        setShowEdit(false);
    }
    //for view form
     function viewForm(student){
        setStudentData(student);
        setShowView(true);
    }
    function exitViewForm(){
        setStudentData();
        setShowView(false);
    }
    //for creat students record
    function createForm(){
        setShowCreate(true);
    }
    function exitCreateForm(){
        setShowCreate(false);
    }



    //show all the students
   useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/student');
                setStudents(response.data.students);
            } catch (error) {
                window.alert('Failed to show students');
            }
        };

        fetchStudents();
    }, []);

    return (
        <> 
            <div className="d-flex flex-column vh-90 p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="mb-0">Student List</h3>
                    <button className="btn btn-success" onClick={createForm}>Add Student</button>
                </div>


                {_students.length > 0 ? (
                <div className="overflow-auto" style={{ maxHeight: '80vh' }}>
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark" style={{ position: "sticky", top: 0, zIndex: 1 }}>
                            <tr>
                                <th>ID</th>
                                <th>STUDENT NO.</th>
                                <th>FIRST NAME</th>
                                <th>MIDDLE NAME</th>
                                <th>LAST NAME</th>
                                <th>BIRTH DATE</th>
                                <th>AGE</th>
                                <th>GENDER</th>
                                <th>EMAIL</th>
                                <th>PHONE NUMBER</th>
                                <th>ADDRESS</th>
                                <th>COURSE</th>
                                <th>YEAR LEVEL</th>
                                <th>SECTION</th>
                                <th>CREATED AT</th>
                                <th>UPDATED AT</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {_students.map((student, index) => 
                            ( 
                                <tr key={index}>
                                    <td>{student.id}</td>
                                    <td>{student.student_number}</td>
                                    <td>{student.first_name}</td>
                                    <td>{student.middle_name}</td>
                                    <td>{student.last_name}</td>
                                    <td>{student.birthdate}</td>
                                    <td>{student.age}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.email }</td>
                                    <td>{student.phone_number}</td>
                                    <td>{student.address}</td>
                                    <td>{student.course	}</td>
                                    <td>{student.year_level}</td>
                                    <td>{student.section}</td>
                                    <td>{student.created_at}</td>
                                    <td>{student.updated_at}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm me-1" onClick={() => editForm(student)}>Edit</button>
                                        <button className="btn btn-info btn-sm me-1" onClick={() => viewForm(student)}>View</button>
                                        <button className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        
                    </table>
                    {showEdit && (<Edit studentData={studentData} show={showEdit} onClose={exitEditForm} />)}
                    {showView && (<ViewStudent studentData={studentData} show={showView} onClose={exitViewForm} />)}
                    {showCreate && (<CreateStudent show={showCreate} onClose={exitCreateForm} />)}
                </div>
                ) : (
                <div className="text-center mt-5">
                    <h5 className="text-muted">No Current Students</h5>
                </div>
                )}
            </div>
               
        </>
    );
}

export default ViewAllStudent;
