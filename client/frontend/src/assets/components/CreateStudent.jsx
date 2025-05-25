import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateStudent({show, onClose }) {
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
                        <h5 className="modal-title">Create Student</h5>
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
                                    <label className="form-label">Student No.</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Middle Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">Birth Date</label>
                                    <input type="date" className="form-control"/>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Age</label>
                                    <input type="number" className="form-control" disabled={true}/>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Gender</label>
                                    <select className="form-control" >
                                        <option value="">Other</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">Course</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Year Level</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Section</label>
                                    <input type="text" className="form-control"/>
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

export default CreateStudent;
