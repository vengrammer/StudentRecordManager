import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Edit({studentData, show, onClose }) {
    if (!show) return null; // Don't render if modal should be hidden

    const id = studentData.id
    const student_number = studentData.student_number
    const first_name = studentData.first_name
    const middle_name = studentData.middle_name
    const last_name = studentData.last_name
    const birthdate = studentData.birthdate
    const age = studentData.age
    const gender = studentData.gender
    const email = studentData.email
    const phone_number = studentData.phone_number
    const address = studentData.address
    const course = studentData.course
    const year_level = studentData.year_level
    const section = studentData.section

    return (
        <>
        <div
            className="modal d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Student</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row mb-3">
                                    
                                    <input type="text" className="form-control" hidden  value={id}/>
                    
                                <div className="col-md-6">
                                    <label className="form-label">Student No.</label>
                                    <input type="text" className="form-control" disabled={true} value={student_number}/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" value={first_name}/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Middle Name</label>
                                    <input type="text" className="form-control" value={middle_name} />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" value={last_name}/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">Birth Date</label>
                                    <input type="date" className="form-control" value={birthdate}/>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Age</label>
                                    <input type="number" className="form-control" disabled={true} value={age} />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Gender</label>
                                    <select className="form-control">
                                        <option value="">{gender}</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" value={email}/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" value={phone_number}/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" value={address}/>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">Course</label>
                                    <input type="text" className="form-control" value={course}/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Year Level</label>
                                    <input type="text" className="form-control" value={year_level}/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Section</label>
                                    <input type="text" className="form-control" value={section}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                        <button className="btn btn-success">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Edit;
