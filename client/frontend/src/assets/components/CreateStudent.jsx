import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


function CreateStudent({show, onClose }) {
    if (!show) return null; // Don't render if modal should be hidden
    //data input
    const [studentNo, setStudentNo] = useState("");
    const [firstname, setFirstname] = useState("");
    const [midlename, setMidlename] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("Other");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [course, setCourse] = useState("");
    const [yearlevel, setYearLevel] = useState("");
    const [section, setSection] = useState("");
 
    function handleBirthDateChange(e){
        const selectedDate = e.target.value;
        setBirthDate(selectedDate);
        if(selectedDate){
            setAge(calculateAge(selectedDate))
        }else{
            setAge("")
        }
    }

    function calculateAge(dob){
        const birth = new Date(dob);
        const today = new Date()

        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();

        if(m < 0 || (m === 0 && today.getDate() < birth.getDate())){
            age--;
        }
        return age;
    }; 

    async function handleCreateStudent(e){
        e.preventDefault();
        try{
            const response =  await axios.post("http://127.0.0.1:8000/api/student", {
                student_number: studentNo,
                first_name: firstname,
                middle_name: midlename,
                last_name: lastname,
                birthdate: birthDate,
                age: age,
                gender: gender,
                email: email,
                phone_number: phonenumber,
                address: address,
                course: course,
                year_level: yearlevel,
                section: section
            })
            console.log(response.data)
                setStudentNo("");
                setFirstname("");
                setMidlename("");
                setLastname("");
                setBirthDate("");
                setAge("");
                setGender("Other");
                setEmail("");
                setPhoneNumber("");
                setAddress("");
                setCourse("");
                setYearLevel("");
                setSection("");

        } catch (error) {
            if (error.response && error.response.data) {
                console.log("Validation Errors:", error.response); // ✅ properly references the error
            } else {
                console.log("Error:", error.message);
            }
        }

    }




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
                            
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleCreateStudent}>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Student No.</label>
                                    <input type="text" className="form-control" value={studentNo} onChange={(e) => setStudentNo(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstname(e.target.value)} required/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Middle Name</label>
                                    <input type="text" className="form-control" value={midlename} onChange={(e) => setMidlename(e.target.value)}/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">Birth Date</label>
                                    <input type="date" className="form-control" value={birthDate} onChange={handleBirthDateChange}  required/>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Age</label>
                                    <input type="number" className="form-control" disabled value={age} />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Gender</label>
                                    <select className="form-control" required onChange={(e) => setGender(e.target.value)}>
                                        <option value="Other">Other</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">Course</label>
                                    <input type="text" className="form-control" value={course} onChange={(e) => setCourse(e.target.value)} required />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Year Level</label>
                                    <input type="text" className="form-control" value={yearlevel} onChange={(e) => setYearLevel(e.target.value)} required/>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">Section</label>
                                    <input type="text" className="form-control" value={section} onChange={(e) => setSection(e.target.value)}/>
                                </div>
                            </div>
                        
                         <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={onClose}>
                                Close
                            </button>
                            <button className="btn btn-primary" type="submit">
                                Save student
                            </button>
                        </div>
                        
                        
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
        </>
    );
}

export default CreateStudent;
