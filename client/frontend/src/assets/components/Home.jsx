
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Home(){
    const navigate = useNavigate();
    
    function goTo(path){
        navigate(path)
    }
    return(
        <>
             <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card shadow-lg p-5 text-center">
                    <h1 className="mb-4">Welcome To Our Student Record Manager</h1>
                    <button className="btn btn-primary btn-lg" onClick={() => goTo('/login')}>
                    Login Admin
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home;