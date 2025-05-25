import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ViewStudent({studentData, show, onClose }) {
    if (!show) return null; // Don't render if modal should be hidden

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
                        <h5 className="modal-title">View Student</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">ID</label>
                                    <input type="text" className="form-control" disabled={true}  value={studentData.id}/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Student No.</label>
                                    <input type="text" className="form-control" disabled={true} value={studentData.student_number}/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" disabled={true} value={studentData.first_name}/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Middle Name</label>
                                    <input type="text" className="form-control" disabled={true} value={studentData.middle_name}/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" disabled={true} value={studentData.last_name}/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">Birth Date</label>
                                    <input type="date" className="form-control" disabled={true} value={studentData.birthdate}/>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Age</label>
                                    <input type="number" className="form-control" disabled={true}  value={studentData.age}/>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Gender</label>
                                    <select className="form-control" disabled={true}>
                                        <option value=""  >{studentData.gender}</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" disabled={true}  value={studentData.email}/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" disabled={true} value={studentData.phone_number}/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" disabled={true} value={studentData.address}/>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">Course</label>
                                    <input type="text" className="form-control" disabled={true} value={studentData.course}/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Year Level</label>
                                    <input type="text" className="form-control" disabled={true} value={studentData.year_level}/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Section</label>
                                    <input type="text" className="form-control" disabled={true} value={studentData.section}/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Created At</label>
                                    <input type="datetime-local" className="form-control" disabled={true} value={studentData.created_at}/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Updated At</label>
                                    <input type="datetime-local" className="form-control" disabled={true} value={studentData.updated_at}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ViewStudent;
